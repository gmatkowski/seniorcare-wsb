<?php

/**
 * User: gmatk
 * Date: 22.06.2021
 * Time: 13:39
 */

namespace App\Http\Controllers\Basket;

use App\Abstracts\Controller;
use App\Http\Requests\BasketAddRequest;
use App\Http\Requests\BasketUpdateRequest;
use App\Models\Product;
use App\Models\User;
use App\Traits\CartGetterTrait;
use Darryldecode\Cart\Cart;
use Darryldecode\Cart\Facades\CartFacade;
use Illuminate\Http\JsonResponse;

/**
 * Class BasketController
 * @package App\Http\Controllers\Basket
 */
class BasketController extends Controller
{
    use CartGetterTrait;

    /**
     * @return JsonResponse
     */
    public function get(): JsonResponse
    {
        return response()->json($this->getCart(auth()->user())->getContent()->sortBy('name')->values());
    }

    /**
     * @param Product $product
     * @param BasketAddRequest $request
     * @return JsonResponse
     * @throws \Darryldecode\Cart\Exceptions\InvalidItemException
     */
    public function add(Product $product, BasketAddRequest $request): JsonResponse
    {
        $this->getCart(auth()->user())->add([
            'id' => $product->getKey(),
            'name' => $product->name,
            'price' => $product->price,
            'quantity' => (int)$request->input('quantity'),
            'associatedModel' => $product
        ]);

        return $this->get();
    }

    /**
     * @param Product $product
     * @param BasketUpdateRequest $request
     * @return JsonResponse
     */
    public function update(Product $product, BasketUpdateRequest $request): JsonResponse
    {
        $this->getCart(auth()->user())->update($product->getKey(), [
            'quantity' => [
                'relative' => false,
                'value' => (int)$request->input('quantity')
            ]
        ]);

        return $this->get();
    }

    /**
     * @param Product $product
     * @return JsonResponse
     */
    public function delete(Product $product): JsonResponse
    {
        $this->getCart(auth()->user())->remove($product->getKey());

        return $this->get();
    }

    /**
     * @return JsonResponse
     */
    public function flush(): JsonResponse
    {
        $this->getCart(auth()->user())->clear();

        return $this->get();
    }
}
