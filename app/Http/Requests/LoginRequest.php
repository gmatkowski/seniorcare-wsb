<?php

/**
 * User: gmatk
 * Date: 12.06.2021
 * Time: 14:46
 */

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'email' => [
                'required',
                'email'
            ],
            'password' => [
                'required',
                'min:' . config('auth.password_min_length')
            ]
        ];
    }
}
