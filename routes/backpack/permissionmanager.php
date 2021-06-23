<?php

/*
|--------------------------------------------------------------------------
| Backpack\PermissionManager Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are
| handled by the Backpack\PermissionManager package.
|
*/

Route::group([
    'prefix' => config('backpack.base.route_prefix', 'admin'),
    'middleware' => array_merge(
        (array) config('backpack.base.web_middleware', 'web'),
        (array) config('backpack.base.middleware_key', 'admin')
    ),
], function ($route) {
    $route->group(['namespace' => 'Backpack\PermissionManager\app\Http\Controllers'], function ($route) {
        $route->crud('permission', 'PermissionCrudController');
        $route->crud('role', 'RoleCrudController');
    });
    $route->group(['namespace' => 'App\Http\Controllers\Admin'], function ($route) {
        $route->crud('user', 'UserCrudController');
    });
});
