<?php
/**
 * User: gmatk
 * Date: 16.05.2021
 * Time: 10:42
 */

namespace App\Providers;


use App\Contracts\UserRepository;
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
    }
}
