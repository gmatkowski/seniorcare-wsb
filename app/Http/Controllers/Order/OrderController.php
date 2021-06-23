<?php

/**
 * User: gmatk
 * Date: 22.06.2021
 * Time: 18:46
 */

namespace App\Http\Controllers\Order;

use App\Abstracts\Controller;
use App\Contracts\OrderServiceContract;
use App\Dto\OrderCreateDto;
use App\Http\Collections\OrderCollection;
use App\Http\Requests\ListingRequest;
use App\Http\Resources\OrderFullResource;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Traits\CartGetterTrait;

/**
 * Class OrderController
 * @package App\Http\Controllers\Order
 */
class OrderController extends Controller
{
    use CartGetterTrait;

    /**
     * @var OrderServiceContract
     */
    private OrderServiceContract $service;

    /**
     * OrderController constructor.
     * @param OrderServiceContract $service
     */
    public function __construct(OrderServiceContract $service)
    {
        $this->service = $service;
    }

    /**
     * @param Order $order
     * @return OrderFullResource
     */
    public function get(Order $order): OrderFullResource
    {
        $order->loadMissing(['user', 'supporter', 'products']);
        return new OrderFullResource($order);
    }

    /**
     * @param ListingRequest $request
     * @return OrderCollection
     */
    public function my(ListingRequest $request): OrderCollection
    {
        return new OrderCollection(
            $this->service->getRepository()->forUser(auth()->user(), $request->input('per_page'))
        );
    }

    /**
     * @param ListingRequest $request
     * @return OrderCollection
     */
    public function free(ListingRequest $request): OrderCollection
    {
        return new OrderCollection(
            $this->service->getRepository()->free($request->input('per_page'))
        );
    }

    /**
     * @return OrderResource
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function create(): OrderResource
    {
        $user = auth()->user();
        $cart = $this->getCart($user);

        $this->authorize('create', [Order::class, $cart]);

        $dto = new OrderCreateDto($user, $cart);

        $order = $this->service->create($dto);
        $cart->clear();

        $order->load(['products']);

        return new OrderResource($order);
    }

    /**
     * @param Order $order
     * @return OrderResource
     */
    public function cancel(Order $order): OrderResource
    {
        $this->service->setStatus($order, Order::CANCELED);

        return new OrderResource($order);
    }

    /**
     * @param Order $order
     * @return OrderResource
     */
    public function done(Order $order): OrderResource
    {
        $this->service->setStatus($order, Order::DONE);

        return new OrderResource($order);
    }

    /**
     * @param Order $order
     * @return OrderResource
     */
    public function confirm(Order $order): OrderResource
    {
        $this->service->setStatus($order, Order::CONFIRMED);

        return new OrderResource($order);
    }

    /**
     * @param Order $order
     * @return OrderResource
     */
    public function inProgress(Order $order): OrderResource
    {
        $this->service->setStatus($order, Order::IN_PROGRESS);

        return new OrderResource($order);
    }

    /**
     * @param Order $order
     * @return OrderResource
     */
    public function assign(Order $order): OrderResource
    {
        $this->service->assign($order, auth()->user());

        return new OrderResource($order);
    }
}
