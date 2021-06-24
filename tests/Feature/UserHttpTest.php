<?php
/**
 * User: gmatk
 * Date: 24.06.2021
 * Time: 10:40
 */

namespace Tests\Feature;

use App\Models\User;
use App\Services\RoleService;
use Database\Seeders\RoleSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserHttpTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->artisan('db:seed', ['--class' => RoleSeeder::class]);
    }

    /**
     * @group User
     */
    public function testUpdate(): void
    {
        $user = User::factory()->create()->assignRole(RoleService::SENIOR);
        $model = User::factory()->make();

        $response = $this
            ->actingAs($user)
            ->postJson(
                route('user.update'),
                [
                    'first_name' => $model->first_name,
                    'last_name' => $model->last_name,
                    'email' => $model->email,
                    'address' => $model->address,
                    'city' => $model->city,
                    'postcode' => $model->postcode,
                    'phone' => $model->phone,
                ]
            );

        $response
            ->assertOk();

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
     * @group User
     */
    public function testUpdateUnauthorized(): void
    {
        $model = User::factory()->make();

        $response = $this
            ->postJson(
                route('user.update'),
                [
                    'first_name' => $model->first_name,
                    'last_name' => $model->last_name,
                    'email' => $model->email,
                    'address' => $model->address,
                    'city' => $model->city,
                    'postcode' => $model->postcode,
                    'phone' => $model->phone,
                ]
            );

        $response->assertUnauthorized();
    }
}
