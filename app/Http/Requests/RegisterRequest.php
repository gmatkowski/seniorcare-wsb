<?php

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RegisterRequest extends FormRequest {
    public function rules(): array{
        return [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6|confirmed',
            'password_confirmation' => 'required|min:6',
            'role' => [
                'required',
                Rule::in(['user', 'supporter'])
            ],
            'city' => [
                Rule::requiredIf($this->input('role') === 'user'),
                'min:3'
            ],
            'address' => [
                Rule::requiredIf($this->input('role') === 'user'),
                'min:3'
            ],
            'postcode' => [
                Rule::requiredIf($this->input('role') === 'user'),
                'min:6'
            ]

        ];

    }

    public function attributes(): array
    {
        return [
            'name' => 'nazwa',
            'password' => 'hasło',
            'password_confirmation' => 'potwierdź hasło'
        ];
    }
}
