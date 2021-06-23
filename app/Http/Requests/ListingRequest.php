<?php

/**
 * User: gmatk
 * Date: 21.06.2021
 * Time: 13:44
 */

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class ListingRequest
 * @package App\Http\Requests
 */
class ListingRequest extends FormRequest
{
    /**
     * @return array|\string[][]
     */
    public function rules(): array
    {
        return [
            'page' => [
                'required',
                'min:1'
            ],
            'per_page' => [
                'required',
                'min:1',
                'max:100'
            ]
        ];
    }
}
