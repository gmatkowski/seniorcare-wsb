<?php

/**
 * User: gmatk
 * Date: 21.06.2021
 * Time: 11:23
 */

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class VerifyRequest
 * @package App\Http\Requests
 */
class VerifyRequest extends FormRequest
{
    /**
     * @return array|\string[][]
     */
    public function rules(): array
    {
        return [
            'expires' => [
                'required'
            ],
            'hash' => [
                'required'
            ],
            'id' => [
                'required'
            ],
            'signature' => [
                'required'
            ]
        ];
    }
}
