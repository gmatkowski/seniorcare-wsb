<?php
/**
 * User: gmatk
 * Date: 21.06.2021
 * Time: 12:40
 */

namespace Database\Seeders;

use App\Contracts\ProductRepository;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

/**
 * Class ProductSeeder
 */
class ProductSeeder extends Seeder
{
    /**
     * @var ProductRepository
     */
    private ProductRepository $repository;

    /**
     * @var array|array[]
     */
    private array $products = [
        [
            'name' => 'Pomidory',
            'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            'price' => 10.99,
            'symbol' => 'kg',
            'image' => 'seeds/pomidor.jpg'
        ],
        [
            'name' => 'Masło',
            'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            'price' => 6.29,
            'symbol' => 'szt.',
            'image' => 'seeds/maslo.jpg'
        ],
        [
            'name' => 'Chleb',
            'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            'price' => 3.79,
            'symbol' => 'szt.',
            'image' => 'seeds/chleb.jpg'
        ],
        [
            'name' => 'Bułki',
            'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            'price' => 0.99,
            'symbol' => 'szt.',
            'image' => 'seeds/bulki.jpg'
        ],
        [
            'name' => 'Szynka gotowana',
            'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            'price' => 29.99,
            'symbol' => 'kg',
            'image' => 'seeds/szynka-gotowana.jpg'
        ],
        [
            'name' => 'Płyn do mycia naczyń',
            'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            'price' => 6.21,
            'symbol' => 'szt.',
            'image' => 'seeds/plyn-do-mycia-naczyn.jpg'
        ]
    ];

    /**
     * ProductSeeder constructor.
     * @param ProductRepository $repository
     */
    public function __construct(ProductRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     *
     */
    public function run(): void
    {
        foreach ($this->products as $product) {
            if ($this->repository->findByField('name', $product['name'])->count() > 0) {
                continue;
            }

            if ($product['image'] ?? null) {
                $product['image'] = base64_encode(Storage::disk('local')->get($product['image']));
            }

            $this->repository->create($product);
        }
    }
}
