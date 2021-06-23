<?php

/**
 * User: gmatk
 * Date: 21.06.2021
 * Time: 13:29
 */

namespace App\Http\Controllers\Product;

use App\Abstracts\Controller;
use App\Contracts\ProductRepository;
use App\Http\Collections\ProductCollection;
use App\Http\Requests\ListingRequest;

/**
 * Class ProductController
 * @package App\Http\Controllers\Product
 */
class ProductController extends Controller
{
    /**
     * @var ProductRepository
     */
    private ProductRepository $repository;

    /**
     * ProductController constructor.
     * @param ProductRepository $repository
     */
    public function __construct(ProductRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param ListingRequest $request
     * @return ProductCollection
     */
    public function listing(ListingRequest $request): ProductCollection
    {
        return new ProductCollection(
            $this->repository->paginate($request->input('per_page'))
        );
    }
}
