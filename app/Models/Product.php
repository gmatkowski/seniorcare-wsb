<?php

namespace App\Models;

use App\Traits\ModelImageTrait;
use App\Traits\PriceTrait;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Jamesh\Uuid\HasUuid;
use Money\Currencies\ISOCurrencies;
use Money\Currency;
use Money\Formatter\DecimalMoneyFormatter;
use Money\Money;

/**
 * Class Product
 * @package App\Models
 */
class Product extends Model
{
    use CrudTrait;
    use HasUuid;
    use ModelImageTrait;
    use PriceTrait;

    /**
     * @var string[]
     */
    protected $fillable = [
        'name',
        'description',
        'price',
        'symbol',
        'image'
    ];

    /**
     * @var string[]
     */
    protected $appends = [
        'image_url'
    ];

    /**
     * @return BelongsToMany
     */
    public function orders(): BelongsToMany
    {
        return $this->belongsToMany(Order::class);
    }
}
