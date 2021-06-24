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
use Database\Seeders\RoleSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProductHttpTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->artisan('db:seed', ['--class' => RoleSeeder::class]);
    }

    /**
     * @group Product
     */
    public function testListing(): void
    {
        $max = 20;
        $per_page = 10;

        $user = User::factory()->create()->assignRole(RoleService::SENIOR);
        Product::factory()->count($max)->create();

        $response = $this
            ->actingAs($user)
            ->get(route('product.listing', ['page' => 1, 'per_page' => $per_page]));

        $response
            ->assertOk()
            ->assertJsonCount($per_page, 'data')
            ->assertJson([
                'meta' => [
                    'total' => $max
                ]
            ]);
    }

    /**
     * @group Product
     */
    public function testListingUnauthorized(): void
    {
        $per_page = 10;

        $response = $this
            ->getJson(route('product.listing', ['page' => 1, 'per_page' => $per_page]));

        $response
            ->assertUnauthorized();
    }
}
