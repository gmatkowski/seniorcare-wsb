<?php

/**
 * User: gmatk
 * Date: 22.06.2021
 * Time: 13:55
 */

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class BasketAddRequest
 * @package App\Http\Requests
 */
class BasketAddRequest extends FormRequest
{
    /**
     * @return array|\string[][]
     */
    public function rules(): array
    {
        return [
            'quantity' => [
                'required',
                'integer',
                'min:1'
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
