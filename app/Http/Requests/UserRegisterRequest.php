<?php

/**
 * User: gmatk
 * Date: 12.06.2021
 * Time: 13:52
 */

namespace App\Http\Requests;

use App\Models\User;
use App\Rules\IsValidPhoneNumber;
use App\Rules\IsValidPostcode;
use App\Services\RoleService;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Class UserRegisterRequest
 * @package App\Http\Requests
 */
class UserRegisterRequest extends FormRequest
{
    /**
     * @return array
     */
    public function rules(): array
    {
        $rules = [
            'first_name' => [
                'required',
                'min:3'
            ],
            'last_name' => [
                'required',
                'min:3'
            ],
            'email' => [
                'required',
                'email',
                Rule::unique(User::class)
            ],
            'password' => [
                'required',
                'min:' . config('auth.password_min_length'),
                'confirmed'
            ],
            'password_confirmation' => [
                'required',
                'min:' . config('auth.password_min_length')
            ],
            'role' => [
                'required',
                Rule::in(RoleService::$roles_public)
            ],
            'phone' => [
                'required',
                new IsValidPhoneNumber(),
                Rule::unique(User::class)
            ]
        ];

        if ($this->input('role') === RoleService::SENIOR) {
            $rules = array_merge($rules, $this->baseUserAdditionalRules());
        }

        return $rules;
    }

    /**
     * @return array|string[]
     */
    public function baseUserAdditionalRules(): array
    {
        return [
            'address' => [
                'required',
                'min:3'
            ],
            'city' => [
                'required',
                'min:3'
            ],
            'postcode' => [
                'required',
                new IsValidPostcode()
            ]
        ];
    }

    /**
     * @return array
     */
    public function attributes(): array
    {
        return [
            'first_name' => __('imię'),
            'last_name' => __('nazwisko'),
            'password' => __('hasło'),
            'password_confirmation' => __('potwierdź hasło'),
            'role' => __('rola'),
            'address' => __('adres'),
            'city' => __('miasto'),
            'postcode' => __('kod pocztowy'),
            'phone' => __('telefon')
        ];
    }
}
