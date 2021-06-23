<?php

/**
 * User: gmatk
 * Date: 22.06.2021
 * Time: 18:57
 */

namespace App\Traits;

use App\Models\User;
use Darryldecode\Cart\Cart;
use Darryldecode\Cart\Facades\CartFacade;

trait CartGetterTrait
{
    /**
     * @param User $user
     * @return Cart
     */
    protected function getCart(User $user): Cart
    {
        return CartFacade::session($user->getKey());
    }
}
