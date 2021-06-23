<?php

/**
 * User: gmatk
 * Date: 16.05.2021
 * Time: 10:42
 */

namespace App\Providers;

use App\Contracts\OrderRepository;
use App\Contracts\ProductRepository;
use App\Contracts\UserRepository;
use App\Repositories\OrderRepositoryEloquent;
use App\Repositories\ProductRepositoryEloquent;
use App\Repositories\UserRepositoryEloquent;
use Illuminate\Support\ServiceProvider;

/**
 * Class RepositoryServiceProvider
 * @package App\Providers
 */
class RepositoryServiceProvider extends ServiceProvider
{
    /**
     *
     */
    public function boot(): void
    {
        $this->app->bind(UserRepository::class, UserRepositoryEloquent::class);
        $this->app->bind(ProductRepository::class, ProductRepositoryEloquent::class);
        $this->app->bind(OrderRepository::class, OrderRepositoryEloquent::class);
    }
}
