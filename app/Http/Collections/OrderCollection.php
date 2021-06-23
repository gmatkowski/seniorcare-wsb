<?php

/**
 * User: gmatk
 * Date: 22.06.2021
 * Time: 20:05
 */

namespace App\Http\Collections;

use App\Http\Resources\OrderResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

/**
 * Class OrderCollection
 * @package App\Http\Collections
 */
class OrderCollection extends ResourceCollection
{
    /**
     * @var string
     */
    public $collects = OrderResource::class;
}
