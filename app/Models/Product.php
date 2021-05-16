<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;
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

    /**
     * @var string[]
     */
    protected $fillable = [
        'name',
        'description',
        'price'
    ];

    /**
     * @return string
     */
    public function getPriceAttribute(): string
    {
        $money = new Money($this->attributes['price'], new Currency('PLN'));
        $currencies = new ISOCurrencies();
        $moneyFormatter = new DecimalMoneyFormatter($currencies);

        return $moneyFormatter->format($money);
    }

    /**
     * @param float $price
     */
    public function setPriceAttribute(float $price): void
    {
        $this->attributes['price'] = $price * 100;
    }

}
