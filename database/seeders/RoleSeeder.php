<?php
/**
 * User: gmatk
 * Date: 16.05.2021
 * Time: 10:36
 */

namespace Database\Seeders;

use App\Services\RoleService;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

/**
 * Class RoleSeeder
 * @package Database\Seeders
 */
class RoleSeeder extends Seeder
{
    /**
     *
     */
    public function run(): void
    {
        foreach (RoleService::$roles as $role) {
            if (Role::where('name', $role)->count() === 0) {
                Role::create(['name' => $role]);
            }
        }
    }
}
