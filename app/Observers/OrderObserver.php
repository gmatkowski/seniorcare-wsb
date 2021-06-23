<?php

namespace App\Observers;

use App\Events\OrderStatusChanged;
use App\Models\Order;

/**
 * Class OrderObserver
 * @package App\Observers
 */
class OrderObserver
{
    /**
     * @param Order $order
     */
    public function updated(Order $order): void
    {
        if ($order->isDirty(['status'])) {
            event(
                new OrderStatusChanged($order)
            );
        }
    }
}
