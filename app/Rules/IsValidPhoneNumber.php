<?php

/**
 * User: gmatk
 * Date: 30.04.2020
 * Time: 14:51
 */

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use libphonenumber\NumberParseException;
use libphonenumber\PhoneNumberUtil;

/**
 * Class IsValidPhoneNumber
 * @package App\Domain\User\Rules
 */
class IsValidPhoneNumber implements Rule
{
    /**
     * @param string $attribute
     * @param mixed $value
     * @return bool
     */
    public function passes($attribute, $value): bool
    {
        if (empty($value)) {
            return false;
        }

        $phoneUtil = PhoneNumberUtil::getInstance();
        try {
            $proto = $phoneUtil->parse($value);
            return $phoneUtil->isValidNumber($proto);
        } catch (NumberParseException $e) {
            return false;
        } catch (\Exception $e) {
            return false;
        }
    }

    /**
     * @return array|null|string
     */
    public function message(): string
    {
        return __('Numer telefonu jest nieprawidłowy');
    }
}
