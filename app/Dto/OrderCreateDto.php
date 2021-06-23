<?php

/**
 * User: gmatk
 * Date: 22.06.2021
 * Time: 18:47
 */

namespace App\Dto;

use App\Models\User;
use Darryldecode\Cart\Cart;

/**
 * Class OrderCreateDto
 * @package App\Dto
 */
class OrderCreateDto
{
    /**
     * @var User
     */
    private User $user;
    /**
     * @var Cart
     */
    private Cart $cart;

    /**
     * OrderCreateDto constructor.
     * @param User $user
     * @param Cart $cart
     */
    public function __construct(User $user, Cart $cart)
    {
        $this->user = $user;
        $this->cart = $cart;
    }

    /**
     * @return User
     */
    public function getUser(): User
    {
        return $this->user;
    }

    /**
     * @return Cart
     */
    public function getCart(): Cart
    {
        return $this->cart;
    }
}
