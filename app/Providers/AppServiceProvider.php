<?php

namespace App\Providers;

use App\Faker\Providers\PolishPhoneProvider;
use App\Contracts\AuthServiceContract;
use App\Contracts\OrderServiceContract;
use App\Contracts\UserServiceContract;
use App\Services\AuthService;
use App\Services\OrderService;
use App\Services\UserService;
use Faker\Factory;
use Faker\Generator;
use Illuminate\Support\ServiceProvider;

/**
 * Class AppServiceProvider
 * @package App\Providers
 */
class AppServiceProvider extends ServiceProvider
{
    public function register(): void {
        if (class_exists(Factory::class)) {
            $this->app->bind(Generator::class, function () {
                $faker = \Faker\Factory::create(config('app.faker_locale'));
                $faker->addProvider(new PolishPhoneProvider($faker));
                return $faker;
            });
        }
    }

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
