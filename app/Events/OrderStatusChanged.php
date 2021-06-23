<?php

namespace App\Events;

use App\Models\Order;

/**
 * Class OrderStatusChanged
 * @package App\Events
 */
class OrderStatusChanged
{
    /**
     * @var Order
     */
    private Order $order;

    /**
     * OrderStatusChanged constructor.
     * @param Order $order
     */
    public function __construct(Order $order)
    {
        $this->order = $order;
    }

    /**
     * @return Order
     */
    public function getOrder(): Order
    {
        return $this->order;
    }
}
