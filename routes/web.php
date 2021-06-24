<?php

use App\Http\Controllers\Basket\BasketController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Order\OrderController;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\User\UserController;
use App\Models\Order;
use Illuminate\Support\Facades\Route;
use Illuminate\Routing\Router;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$app = static function () {
    return view('app');
};

Route::group(['prefix' => 'auth'], function (Router $router) {
    $router->group(['middleware' => ['throttle:auth', 'guest']], function (Router $router) {
        $router->post('login', [AuthController::class, 'login'])->name('auth.login');
        $router->post('register', [AuthController::class, 'register'])->name('auth.register');
    });

    $router->group(['middleware' => ['auth']], function (Router $router) {
        $router->post('logout', [AuthController::class, 'logout'])->name('auth.logout');
    });
});

Route::group(['middleware' => ['signed', 'guest']], function (Router $router) {
    $router->post('weryfikacja', [AuthController::class, 'verify'])->name('auth.verify');
});

Route::group(['prefix' => 'basket', 'middleware' => ['auth']], function (Router $router) {
    $router->get('/', [BasketController::class, 'get'])
        ->name('basket.get');

    $router->post('{product}', [BasketController::class, 'add'])
        ->name('basket.add')
        ->whereUuid('product');


    $router->patch('{product}', [BasketController::class, 'update'])
        ->name('basket.update')
        ->whereUuid('product');

    $router->delete('{product}', [BasketController::class, 'delete'])
        ->name('basket.delete')
        ->whereUuid('product');

    $router->delete('/', [BasketController::class, 'flush'])
        ->name('basket.flush');
});

Route::group(['prefix' => 'order', 'middleware' => ['auth']], function (Router $router) {
    $router->get('/my', [OrderController::class, 'my'])
        ->name('order.my');

    $router->get('/free', [OrderController::class, 'free'])
        ->middleware(['can:free,' . Order::class])
        ->name('order.free');

    $router->post('/', [OrderController::class, 'create'])
        ->name('order.create');

    $router->get('{order}', [OrderController::class, 'get'])
        ->middleware(['can:get,order'])
        ->name('order.get')
        ->whereUuid('order');

    $router->post('cancel/{order}', [OrderController::class, 'cancel'])
        ->middleware(['can:cancel,order'])
        ->name('order.cancel')
        ->whereUuid('order');

    $router->post('assign/{order}', [OrderController::class, 'assign'])
        ->middleware(['can:assign,order'])
        ->name('order.assign')
        ->whereUuid('order');

    $router->post('in-progress/{order}', [OrderController::class, 'inProgress'])
        ->middleware(['can:inProgress,order'])
        ->name('order.in-progress')
        ->whereUuid('order');

    $router->post('done/{order}', [OrderController::class, 'done'])
        ->middleware(['can:done,order'])
        ->name('order.done')
        ->whereUuid('order');

    $router->post('confirm/{order}', [OrderController::class, 'confirm'])
        ->middleware(['can:confirm,order'])
        ->name('order.confirm')
        ->whereUuid('order');
});

Route::group(['prefix' => 'product', 'middleware' => ['auth']], function (Router $router) {
    $router->get('/', [ProductController::class, 'listing'])->name('product.listing');
});

Route::group(['prefix' => 'user', 'middleware' => ['auth']], function (Router $router) {
    $router->post('/update', [UserController::class, 'update'])->name('user.update');
});


Route::get('weryfikacja', $app)->name('verification.verify')->middleware(['signed']);
Route::get('/{any}', $app)->where('any', '.*')->name('welcome');
