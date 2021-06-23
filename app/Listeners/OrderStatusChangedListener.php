<?php

/**
 * User: gmatk
 * Date: 23.06.2021
 * Time: 08:42
 */

namespace App\Listeners;

use App\Events\OrderStatusChanged;
use App\Notifications\OrderStatusChangedNotification;

/**
 * Class OrderStatusChangedListener
 * @package App\Listeners
 */
class OrderStatusChangedListener
{
    /**
     * @param OrderStatusChanged $event
     */
    public function handle(OrderStatusChanged $event): void
    {
        $event->getOrder()->user->notify(
            new OrderStatusChangedNotification($event->getOrder())
        );

        if ($event->getOrder()->supporter) {
            $event->getOrder()->supporter->notify(
                new OrderStatusChangedNotification($event->getOrder())
            );
        }
    }
}
