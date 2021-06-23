<?php

/**
 * User: gmatk
 * Date: 22.06.2021
 * Time: 18:46
 */

namespace App\Services;

use App\Contracts\OrderRepository;
use App\Contracts\OrderServiceContract;
use App\Dto\OrderCreateDto;
use App\Models\Order;
use App\Models\User;
use Darryldecode\Cart\ItemCollection;
use Illuminate\Support\Facades\DB;

/**
 * Class OrderService
 * @package App\Services
 */
class OrderService implements OrderServiceContract
{
    /**
     * @var OrderRepository
     */
    private OrderRepository $repository;

    /**
     * OrderService constructor.
     * @param OrderRepository $repository
     */
    public function __construct(OrderRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @return OrderRepository
     */
    public function getRepository(): OrderRepository
    {
        return $this->repository;
    }

    /**
     * @param OrderCreateDto $dto
     * @return Order
     */
    public function create(OrderCreateDto $dto): Order
    {
        return DB::transaction(function () use ($dto) {
            $order = new Order([
                'price' => $dto->getCart()->getSubTotal(false)
            ]);
            $order->user()->associate($dto->getUser());
            $order->save();

            /**
             * @var ItemCollection $item
             */
            foreach ($dto->getCart()->getContent() as $item) {
                $order->products()->attach($item->id, [
                    'quantity' => $item->quantity,
                    'data' => $item->toArray()
                ]);
            }

            return $order;
        });
    }

    /**
     * @param Order $order
     * @param string $status
     */
    public function setStatus(Order $order, string $status): void
    {
        $order->status = $status;
        $order->save();
    }

    /**
     * @param Order $order
     * @param User $user
     */
    public function assign(Order $order, User $user): void
    {
        $order->supporter()->associate($user);
        $this->setStatus($order, Order::ASSIGNED);
    }

    /**
     * @return array
     */
    public static function getStatusTranslatedArray(): array
    {
        return [
            Order::AWAITING => trans('order.status.' . Order::AWAITING),
            Order::ASSIGNED => trans('order.status.' . Order::ASSIGNED),
            Order::IN_PROGRESS => trans('order.status.' . Order::IN_PROGRESS),
            Order::DONE => trans('order.status.' . Order::DONE),
            Order::CONFIRMED => trans('order.status.' . Order::CONFIRMED),
            Order::CANCELED => trans('order.status.' . Order::CANCELED),
        ];
    }
}
