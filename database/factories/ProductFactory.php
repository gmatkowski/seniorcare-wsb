<?php
/**
 * User: gmatk
 * Date: 24.06.2021
 * Time: 10:50
 */

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->title,
            'description' => $this->faker->text(),
            'price' => mt_rand(100,10000),
            'symbol' => 'kg'
        ];
    }
}
