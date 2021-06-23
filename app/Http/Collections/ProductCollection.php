<?php

/**
 * User: gmatk
 * Date: 21.06.2021
 * Time: 13:29
 */

namespace App\Http\Collections;

use App\Http\Resources\ProductResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

/**
 * Class ProductCollection
 * @package App\Http\Collections
 */
class ProductCollection extends ResourceCollection
{
    /**
     * @var string
     */
    public $collects = ProductResource::class;
}
