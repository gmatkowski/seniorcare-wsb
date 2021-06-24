<?php
/**
 * User: gmatk
 * Date: 24.06.2021
 * Time: 10:50
 */

namespace Database\Factories;

use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Order::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        return [
            'status' => Order::AWAITING,
            'price' => mt_rand(100,10000)
        ];
    }
}
