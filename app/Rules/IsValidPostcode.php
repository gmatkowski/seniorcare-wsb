<?php

/**
 * User: gmatk
 * Date: 20.01.2020
 * Time: 12:45
 */

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

/**
 * Class IsValidPostcode
 * @package App\Domain\Address\Rules
 */
class IsValidPostcode implements Rule
{
    /**
     * @param string $attribute
     * @param mixed $value
     * @return bool|false|int
     */
    public function passes($attribute, $value)
    {
        return preg_match('#\d{2}\s*-\s*\d{3}#', $value);
    }

    /**
     * @return array|null|string
     */
    public function message()
    {
        return __('Kod pocztowy jest niepoprawny');
    }
}
