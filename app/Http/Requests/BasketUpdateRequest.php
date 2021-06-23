<?php

/**
 * User: gmatk
 * Date: 22.06.2021
 * Time: 13:55
 */

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class BasketUpdateRequest
 * @package App\Http\Requests
 */
class BasketUpdateRequest extends FormRequest
{
    /**
     * @return array|\string[][]
     */
    public function rules(): array
    {
        return [
            'quantity' => [
                'required',
                'integer'
            ]
        ];
    }

    /**
     * @return array
     */
    public function attributes(): array
    {
        return [
            'quantity' => __('ilość')
        ];
    }
}
