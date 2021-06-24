<?php
/**
 * User: gmatk
 * Date: 24.06.2021
 * Time: 09:01
 */

namespace Tests\Feature;

use App\Models\User;
use App\Services\RoleService;
use Database\Factories\UserFactory;
use Database\Seeders\RoleSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\URL;
use Ramsey\Uuid\Uuid;
use Tests\TestCase;

class AuthHttpTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->artisan('db:seed', ['--class' => RoleSeeder::class]);
    }

    /**
     * @group Auth
     */
    public function testRegisterSupporter(): void
    {
        $password = Uuid::uuid4()->toString();
        $model = User::factory()->make();

        $response = $this->postJson(
            route('auth.register'),
            [
                'first_name' => $model->first_name,
                'last_name' => $model->last_name,
                'email' => $model->email,
                'phone' => $model->phone,
                'role' => RoleService::SUPPORTER,
                'password' => $password,
                'password_confirmation' => $password
            ]
        );

        $response
            ->assertCreated()
            ->assertJson([
                'data' => [
                    'first_name' => $model->first_name,
                    'last_name' => $model->last_name,
                    'roles' => [
                        [
                            'name' => RoleService::SUPPORTER
                        ]
                    ]
                ]
            ]);

        $this->assertDatabaseHas((new User)->getTable(), [
            'first_name' => $model->first_name,
            'last_name' => $model->last_name,
            'email' => $model->email,
            'phone' => $model->phone,
        ]);
    }

    /**
     * @group Auth
     */
    public function testRegisterSenior(): void
    {
        $password = Uuid::uuid4()->toString();
        $model = User::factory()->make();

        $response = $this->postJson(
            route('auth.register'),
            [
                'first_name' => $model->first_name,
                'last_name' => $model->last_name,
                'email' => $model->email,
                'address' => $model->address,
                'city' => $model->city,
                'postcode' => $model->postcode,
                'phone' => $model->phone,
                'role' => RoleService::SENIOR,
                'password' => $password,
                'password_confirmation' => $password
            ]
        );

        $response
            ->assertCreated()
            ->assertJson([
                'data' => [
                    'first_name' => $model->first_name,
                    'last_name' => $model->last_name,
                    'roles' => [
                        [
                            'name' => RoleService::SENIOR
                        ]
                    ]
                ]
            ]);

        $this->assertDatabaseHas((new User)->getTable(), [
            'first_name' => $model->first_name,
            'last_name' => $model->last_name,
            'email' => $model->email,
            'address' => $model->address,
            'city' => $model->city,
            'postcode' => $model->postcode,
            'phone' => $model->phone,
        ]);
    }

    /**
     * @group Auth
     */
    public function testRegisterJsonErrors(): void
    {
        $password = Uuid::uuid4()->toString();
        $model = User::factory()->create();

        $response = $this->postJson(
            route('auth.register'),
            [
                'first_name' => $model->first_name,
                'last_name' => $model->last_name,
                'email' => $model->email,
                'phone' => $model->phone,
                'role' => RoleService::SUPPORTER,
                'password' => $password,
                'password_confirmation' => $password
            ]
        );

        $response
            ->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonValidationErrors([
                'email',
                'phone'
            ]);
    }

    /**
     * @group Auth
     */
    public function testLogin(): void
    {
        $model = User::factory()->create()->assignRole(RoleService::SENIOR);
        $response = $this->postJson(
            route('auth.login'),
            [
                'email' => $model->email,
                'password' => UserFactory::PASSWORD
            ]
        );
        $response
            ->assertOk();

        $this->assertAuthenticatedAs($model);
    }

    /**
     * @group Auth
     */
    public function testLoginUnverified(): void
    {
        $model = User::factory()->unverified()->create()->assignRole(RoleService::SENIOR);
        $response = $this->postJson(
            route('auth.login'),
            [
                'email' => $model->email,
                'password' => UserFactory::PASSWORD
            ]
        );
        $response
            ->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonValidationErrors([
                'email'
            ]);
    }

    /**
     * @group Auth
     */
    public function testVerifitcation(): void
    {
        $model = User::factory()->unverified()->create()->assignRole(RoleService::SENIOR);

        $url = URL::temporarySignedRoute(
            'verification.verify',
            now()->addMinutes(config('auth.verification.expire', 60)),
            [
                'id' => $model->getKey(),
                'hash' => sha1($model->getEmailForVerification()),
            ]
        );

        $parts = parse_url($url);
        parse_str($parts['query'], $params);

        $response = $this->post(route('auth.verify', $params));
        $response->assertOk();

        $model = $model->fresh();
        $this->assertTrue($model->hasVerifiedEmail());
    }

    /**
     * @group Auth
     */
    public function testVerifitcationFailed(): void
    {
        $model = User::factory()->unverified()->create()->assignRole(RoleService::SENIOR);
        $model2 = User::factory()->create();

        $url = URL::temporarySignedRoute(
            'verification.verify',
            now()->addMinutes(config('auth.verification.expire', 60)),
            [
                'id' => $model2->getKey(),
                'hash' => sha1($model->getEmailForVerification()),
            ]
        );

        $parts = parse_url($url);
        parse_str($parts['query'], $params);

        $response = $this->post(route('auth.verify', $params));
        $response->assertForbidden();

        $model = $model->fresh();
        $this->assertFalse($model->hasVerifiedEmail());
    }

    /**
     * @group Auth
     */
    public function testLogout(): void
    {
        $model = User::factory()->create()->assignRole(RoleService::SENIOR);
        $response = $this
            ->actingAs($model)
            ->postJson(
                route('auth.logout')
            );
        $response->assertOk();
    }
}
