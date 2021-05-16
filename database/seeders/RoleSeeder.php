<?php
/**
 * User: gmatk
 * Date: 16.05.2021
 * Time: 10:36
 */

namespace Database\Seeders;


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
        $roles = ['admin', 'user'];

        if (Role::count() > 0) {
            return;
        }

        foreach ($roles as $role) {
            Role::create(['name' => $role]);
        }
    }
}