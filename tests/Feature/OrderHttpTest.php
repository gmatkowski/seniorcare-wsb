<?php
/**
 * User: gmatk
 * Date: 24.06.2021
 * Time: 10:40
 */

namespace Tests\Feature;

use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use App\Services\RoleService;
use App\Traits\CartGetterTrait;
use Database\Seeders\RoleSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * Class OrderHttpTest
 * @package Tests\Feature
 */
class OrderHttpTest extends TestCase
{
    use RefreshDatabase;
    use CartGetterTrait;

    /**
     *
     */
    public function setUp(): void
    {
        parent::setUp();
        $this->artisan('db:seed', ['--class' => RoleSeeder::class]);
    }

    /**
     * @group Order
     */
    public function testMySenior(): void
    {
        $max = 5;

        $user = User::factory()->create()->assignRole(RoleService::SENIOR);

        Order::factory()
            ->for($user, 'user')
            ->count($max)
            ->create();

        $per_page = 10;

        $response = $this
            ->actingAs($user)
            ->getJson(
                route('order.my', ['page' => 1, 'per_page' => $per_page])
            );

        $response
            ->assertOk()
            ->assertJsonCount($max, 'data')
            ->assertJson([
                'meta' => [
                    'total' => $max
                ]
            ]);
    }

    /**
     * @group Order
     */
    public function testMySupporter(): void
    {
        $max = 5;

        $user = User::factory()->create()->assignRole(RoleService::SENIOR);

        Order::factory()
            ->for(User::factory())
            ->for($user, 'supporter')
            ->count($max)
            ->create();

        $per_page = 10;

        $response = $this
            ->actingAs($user)
            ->getJson(
                route('order.my', ['page' => 1, 'per_page' => $per_page])
            );

        $response
            ->assertOk()
            ->assertJsonCount($max, 'data')
            ->assertJson([
                'meta' => [
                    'total' => $max
                ]
            ]);
    }

    /**
     * @group Order
     */
    public function testMyUnauthorized(): void
    {
        $response = $this
            ->getJson(
                route('order.my', ['page' => 1, 'per_page' => 10])
            );

        $response->assertUnauthorized();
    }

    /**
     * @group Order
     */
    public function testFree(): void
    {
        $max = 5;

        $user = User::factory()->create()->assignRole(RoleService::SUPPORTER);

        Order::factory()
            ->for(User::factory())
            ->count($max)
            ->create();

        Order::factory()
            ->for(User::factory())
            ->for($user, 'supporter')
            ->count($max)
            ->create([
                'status' => Order::ASSIGNED
            ]);

        Order::factory()
            ->for(User::factory())
            ->for(User::factory(), 'supporter')
            ->count($max)
            ->create([
                'status' => Order::ASSIGNED
            ]);

        $per_page = 10;

        $response = $this
            ->actingAs($user)
            ->getJson(
                route('order.free', ['page' => 1, 'per_page' => $per_page])
            );

        $response
            ->assertOk()
            ->assertJsonCount($max, 'data')
            ->assertJson([
                'meta' => [
                    'total' => $max
                ]
            ]);
    }

    /**
     * @group Order
     */
    public function testFreeNotSupporter(): void
    {
        $user = User::factory()->create()->assignRole(RoleService::SENIOR);

        $per_page = 10;

        $response = $this
            ->actingAs($user)
            ->getJson(
                route('order.free', ['page' => 1, 'per_page' => $per_page])
            );

        $response
            ->assertForbidden();
    }

    /**
     * @group Order
     */
    public function testCreate(): void
    {
        $quantity = 5;

        $user = User::factory()->create()->assignRole(RoleService::SENIOR);
        $product = Product::factory()->create();

        $cart = $this->getCart($user);
        $cart->add([
            'id' => $product->getKey(),
            'name' => $product->name,
            'price' => $product->price,
            'quantity' => $quantity,
            'associatedModel' => $product
        ]);

        $response = $this
            ->actingAs($user)
            ->postJson(
                route('order.create')
            );

        $response
            ->assertCreated()
            ->assertJson([
                'data' => [
                    'user_id' => $user->getKey(),
                    'price' => $product->price * $quantity,
                    'products' => [
                        [
                            'id' => $product->getKey(),
                            'pivot' => [
                                'quantity' => $quantity
                            ]
                        ]
                    ]
                ]
            ]);

        $this->assertCount(0, $cart->getContent());
    }

    /**
     * @group Order
     */
    public function testCreateEmptyBasket(): void
    {
        $user = User::factory()->create()->assignRole(RoleService::SENIOR);

        $response = $this
            ->actingAs($user)
            ->postJson(
                route('order.create')
            );

        $response
            ->assertForbidden();
    }

    /**
     * @group Order
     */
    public function testGetFreeOrder(): void
    {
        $user = User::factory()->create()->assignRole(RoleService::SUPPORTER);

        $order = Order::factory()
            ->for(User::factory(), 'user')
            ->hasAttached(Product::factory()->count(5), [
                'quantity' => mt_rand(1, 5),
                'data' => Product::factory()->make()->toArray()
            ])
            ->create();

        $response = $this
            ->actingAs($user)
            ->getJson(
                route('order.get', ['order' => $order->getKey()])
            );

        $response
            ->assertOk()
            ->assertJson([
                'data' => [
                    'id' => $order->getKey()
                ]
            ])
            ->assertJsonCount(5, 'data.products');
    }

    /**
     * @group Order
     */
    public function testGetOwnSenior(): void
    {
        $user = User::factory()->create()->assignRole(RoleService::SENIOR);

        $order = Order::factory()
            ->for($user, 'user')
            ->hasAttached(Product::factory()->count(5), [
                'quantity' => mt_rand(1, 5),
                'data' => Product::factory()->make()->toArray()
            ])
            ->create();

        $response = $this
            ->actingAs($user)
            ->getJson(
                route('order.get', ['order' => $order->getKey()])
            );

        $response
            ->assertOk()
            ->assertJson([
                'data' => [
                    'id' => $order->getKey()
                ]
            ])
            ->assertJsonCount(5, 'data.products');
    }

    /**
     * @group Order
     */
    public function testGetAssigned(): void
    {
        $user = User::factory()->create()->assignRole(RoleService::SUPPORTER);

        $order = Order::factory()
            ->for(User::factory(), 'user')
            ->for($user, 'supporter')
            ->hasAttached(Product::factory()->count(5), [
                'quantity' => mt_rand(1, 5),
                'data' => Product::factory()->make()->toArray()
            ])
            ->create();

        $response = $this
            ->actingAs($user)
            ->getJson(
                route('order.get', ['order' => $order->getKey()])
            );

        $response
            ->assertOk()
            ->assertJson([
                'data' => [
                    'id' => $order->getKey()
                ]
            ])
            ->assertJsonCount(5, 'data.products');
    }

    /**
     * @group Order
     */
    public function testGetNotOwnAndNotAssigned(): void
    {
        $user = User::factory()->create()->assignRole(RoleService::SUPPORTER);

        $order = Order::factory()
            ->for(User::factory(), 'user')
            ->create([
                'status' => Order::CONFIRMED
            ]);

        $response = $this
            ->actingAs($user)
            ->getJson(
                route('order.get', ['order' => $order->getKey()])
            );

        $response
            ->assertForbidden();
    }

    /**
     * @group Order
     */
    public function testGetAssignedToSomeoneElse(): void
    {
        $user = User::factory()->create()->assignRole(RoleService::SUPPORTER);

        $order = Order::factory()
            ->for(User::factory(), 'user')
            ->for(User::factory(), 'supporter')
            ->create([
                'status' => Order::CONFIRMED
            ]);

        $response = $this
            ->actingAs($user)
            ->getJson(
                route('order.get', ['order' => $order->getKey()])
            );

        $response
            ->assertForbidden();
    }

    /**
     * @group Order
     */
    public function testCancel(): void
    {
        $user = User::factory()->create()->assignRole(RoleService::SENIOR);

        $order = Order::factory()
            ->for($user)
            ->create([
                'status' => Order::AWAITING
            ]);

        $response = $this
            ->actingAs($user)
            ->post(
                route('order.cancel', ['order' => $order->getKey()])
            );

        $response
            ->assertOk()
            ->assertJson([
                'data' => [
                    'status' => Order::CANCELED
                ]
            ]);
    }

    /**
     * @group Order
     */
    public function testAssign(): void
    {
        $user = User::factory()->create()->assignRole(RoleService::SUPPORTER);

        $order = Order::factory()
            ->for(User::factory())
            ->create([
                'status' => Order::AWAITING
            ]);

        $response = $this
            ->actingAs($user)
            ->post(
                route('order.assign', ['order' => $order->getKey()])
            );

        $response
            ->assertOk()
            ->assertJson([
                'data' => [
                    'status' => Order::ASSIGNED,
                    'supporter_id' => $user->getKey()
                ]
            ]);
    }

    /**
     * @group Order
     */
    public function testInProgress(): void
    {
        $user = User::factory()->create()->assignRole(RoleService::SUPPORTER);

        $order = Order::factory()
            ->for(User::factory())
            ->for($user, 'supporter')
            ->create([
                'status' => Order::ASSIGNED
            ]);

        $response = $this
            ->actingAs($user)
            ->post(
                route('order.in-progress', ['order' => $order->getKey()])
            );

        $response
            ->assertOk()
            ->assertJson([
                'data' => [
                    'status' => Order::IN_PROGRESS
                ]
            ]);
    }

    /**
     * @group Order
     */
    public function testDone(): void
    {
        $user = User::factory()->create()->assignRole(RoleService::SUPPORTER);

        $order = Order::factory()
            ->for(User::factory())
            ->for($user, 'supporter')
            ->create([
                'status' => Order::IN_PROGRESS
            ]);

        $response = $this
            ->actingAs($user)
            ->post(
                route('order.done', ['order' => $order->getKey()])
            );

        $response
            ->assertOk()
            ->assertJson([
                'data' => [
                    'status' => Order::DONE
                ]
            ]);
    }

    /**
     * @group Order
     */
    public function testConfirm(): void
    {
        $user = User::factory()->create()->assignRole(RoleService::SENIOR);

        $order = Order::factory()
            ->for($user)
            ->for(User::factory(), 'supporter')
            ->create([
                'status' => Order::DONE
            ]);

        $response = $this
            ->actingAs($user)
            ->post(
                route('order.confirm', ['order' => $order->getKey()])
            );

        $response
            ->assertOk()
            ->assertJson([
                'data' => [
                    'status' => Order::CONFIRMED
                ]
            ]);
    }
}
