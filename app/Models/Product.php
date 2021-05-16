<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use CrudTrait;

    protected $fillable = [
        'name',
        'description',
        'price'
    ];

    public function getRealPrice(): float {
        return number_format(($this->price / 100), 2);
    }

}
