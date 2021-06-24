<?php

/**
 * User: gmatk
 * Date: 22.06.2021
 * Time: 18:59
 */

namespace App\Policies;

use App\Models\Order;
use App\Models\User;
use App\Services\RoleService;
use Darryldecode\Cart\Cart;

/**
 * Class OrderPolicy
 * @package App\Policies
 */
class OrderPolicy
{
    /**
     * @param User $user
     * @return bool
     */
    public function free(User $user): bool
    {
        return $user->hasRole(RoleService::SUPPORTER);
    }

    /**
     * @param User $user
     * @param Order $order
     * @return bool
     */
    public function get(User $user, Order $order): bool
    {
        if ($order->isFree()) {
            return true;
        }

        return $order->user->is($user) || $order->supporter_id === $user->getKey();
    }

    /**
     * @param User $user
     * @param Cart $cart
     * @return bool
     * @throws \Exception
     */
    public function create(User $user, Cart $cart): bool
    {
        if (!$user->hasRole(RoleService::SENIOR)) {
            return false;
        }

        return $cart->session($user->getKey())->getContent()->count() > 0;
    }

    /**
     * @param User $user
     * @param Order $order
     * @return bool
     */
    public function cancel(User $user, Order $order): bool
    {
        return $order->user->is($user) && in_array($order->status, [Order::AWAITING, Order::ASSIGNED], true);
    }

    /**
     * @param User $user
     * @param Order $order
     * @return bool
     */
    public function assign(User $user, Order $order): bool
    {
        if (!$user->hasRole(RoleService::SUPPORTER)) {
            return false;
        }

        if ($order->supporter) {
            return false;
        }

        return $order->status === Order::AWAITING;
    }

    /**
     * @param User $user
     * @param Order $order
     * @return bool
     */
    public function inProgress(User $user, Order $order): bool
    {
        if (!$order->supporter || !$order->supporter->is($user)) {
            return false;
        }

        return $order->status === Order::ASSIGNED;
    }

    /**
     * @param User $user
     * @param Order $order
     * @return bool
     */
    public function done(User $user, Order $order): bool
    {
        if (!$order->supporter || !$order->supporter->is($user)) {
            return false;
        }

        return $order->status === Order::IN_PROGRESS;
    }

    /**
     * @param User $user
     * @param Order $order
     * @return bool
     */
    public function confirm(User $user, Order $order): bool
    {
        if (!$order->user->is($user)) {
            return false;
        }

        return $order->status === Order::DONE;
    }
}
