<?php

/**
 * User: gmatk
 * Date: 22.06.2021
 * Time: 19:27
 */

namespace App\Traits;

use Money\Currencies\ISOCurrencies;
use Money\Currency;
use Money\Formatter\DecimalMoneyFormatter;
use Money\Money;

trait PriceTrait
{
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
