<?php
/**
 * User: gmatk
 * Date: 24.06.2021
 * Time: 10:40
 */

namespace Tests\Feature;

use App\Models\Product;
use App\Models\User;
use App\Services\RoleService;
use App\Traits\CartGetterTrait;
use Database\Seeders\RoleSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BasketHttpTest extends TestCase
{
    use RefreshDatabase, CartGetterTrait;

    public function setUp(): void
    {
        parent::setUp();
        $this->artisan('db:seed', ['--class' => RoleSeeder::class]);
    }

    /**
     * @group Basket
     */
    public function testGet(): void
    {
        $user = User::factory()->create()->assignRole(RoleService::SENIOR);
        $product = Product::factory()->create();

        $cart = $this->getCart($user);
        $cart->add([
            'id' => $product->getKey(),
            'name' => $product->name,
            'price' => $product->price,
            'quantity' => 1,
            'associatedModel' => $product
        ]);

        $response = $this
            ->actingAs($user)
            ->get(route('basket.get'));

        $response
            ->assertOk()
            ->assertJson([
                [
                    'id' => $product->getKey(),
                    'name' => $product->name,
                    'price' => $product->price,
                    'quantity' => 1,
                    'associatedModel' => [
                        'id' => $product->getKey(),
                    ]
                ]
            ]);
    }

    /**
     * @group Basket
     */
    public function testGetUnauthorized(): void
    {
        $response = $this
            ->getJson(route('basket.get'));

        $response
            ->assertUnauthorized();
    }

    /**
     * @group Basket
     */
    public function testAdd(): void
    {
        $quantity = 5;
        $user = User::factory()->create()->assignRole(RoleService::SENIOR);
        $product = Product::factory()->create();

        $response = $this
            ->actingAs($user)
            ->post(
                route('basket.add', ['product' => $product->getKey()]),
                [
                    'quantity' => $quantity
                ]
            );

        $response
            ->assertOk()
            ->assertJson([
                [
                    'id' => $product->getKey(),
                    'name' => $product->name,
                    'price' => $product->price,
                    'quantity' => $quantity,
                    'associatedModel' => [
                        'id' => $product->getKey(),
                    ]
                ]
            ]);
    }

    /**
     * @group Basket
     */
    public function testUpdate(): void
    {
        $quantity = mt_rand(2, 5);
        $user = User::factory()->create()->assignRole(RoleService::SENIOR);
        $product = Product::factory()->create();

        $cart = $this->getCart($user);
        $cart->add([
            'id' => $product->getKey(),
            'name' => $product->name,
            'price' => $product->price,
            'quantity' => 1,
            'associatedModel' => $product
        ]);

        $response = $this
            ->actingAs($user)
            ->patch(
                route('basket.update', ['product' => $product->getKey()]),
                [
                    'quantity' => $quantity
                ]
            );

        $response
            ->assertOk()
            ->assertJson([
                [
                    'id' => $product->getKey(),
                    'name' => $product->name,
                    'price' => $product->price,
                    'quantity' => $quantity,
                    'associatedModel' => [
                        'id' => $product->getKey(),
                    ]
                ]
            ]);
    }

    /**
     * @group Basket
     */
    public function testDelete(): void
    {
        $user = User::factory()->create()->assignRole(RoleService::SENIOR);
        $product = Product::factory()->create();

        $cart = $this->getCart($user);
        $cart->add([
            'id' => $product->getKey(),
            'name' => $product->name,
            'price' => $product->price,
            'quantity' => 1,
            'associatedModel' => $product
        ]);

        $response = $this
            ->actingAs($user)
            ->delete(
                route('basket.delete', ['product' => $product->getKey()]),
            );

        $response
            ->assertOk()
            ->assertJsonCount(0)
            ->assertJsonMissing([
                [
                    'id' => $product->getKey(),
                ]
            ]);
    }

    /**
     * @group Basket
     */
    public function testFlush(): void
    {
        $user = User::factory()->create()->assignRole(RoleService::SENIOR);
        $product = Product::factory()->create();

        $cart = $this->getCart($user);
        $cart->add([
            'id' => $product->getKey(),
            'name' => $product->name,
            'price' => $product->price,
            'quantity' => 1,
            'associatedModel' => $product
        ]);

        $response = $this
            ->actingAs($user)
            ->delete(
                route('basket.flush'),
            );

        $response
            ->assertOk()
            ->assertJsonCount(0)
            ->assertJsonMissing([
                [
                    'id' => $product->getKey(),
                ]
            ]);
    }
}
