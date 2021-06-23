<?php

/**
 * User: gmatk
 * Date: 22.06.2021
 * Time: 18:55
 */

namespace App\Contracts;

use App\Dto\OrderCreateDto;
use App\Models\Order;
use App\Models\User;

/**
 * Class OrderService
 * @package App\Services
 */
interface OrderServiceContract
{
    /**
     * @return OrderRepository
     */
    public function getRepository(): OrderRepository;

    /**
     * @param OrderCreateDto $dto
     * @return Order
     */
    public function create(OrderCreateDto $dto): Order;

    /**
     * @param Order $order
     * @param string $status
     */
    public function setStatus(Order $order, string $status): void;

    /**
     * @param Order $order
     * @param User $user
     */
    public function assign(Order $order, User $user): void;
}
