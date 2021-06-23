<?php

/**
 * User: gmatk
 * Date: 22.06.2021
 * Time: 19:22
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class OrderProduct extends Pivot
{
    protected $casts = [
        'data' => 'array'
    ];
}
