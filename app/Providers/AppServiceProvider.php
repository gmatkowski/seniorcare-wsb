<?php

namespace App\Providers;

use App\Contracts\AuthServiceContract;
use App\Contracts\OrderServiceContract;
use App\Contracts\UserServiceContract;
use App\Services\AuthService;
use App\Services\OrderService;
use App\Services\UserService;
use Illuminate\Support\ServiceProvider;

/**
 * Class AppServiceProvider
 * @package App\Providers
 */
class AppServiceProvider extends ServiceProvider
{
    /**
     *
     */
    public function boot(): void
    {
        $this->app->bind(UserServiceContract::class, UserService::class);
        $this->app->bind(AuthServiceContract::class, AuthService::class);
        $this->app->bind(OrderServiceContract::class, OrderService::class);
    }
}
