<?php

/**
 * User: gmatk
 * Date: 21.06.2021
 * Time: 15:35
 */

namespace App\Http\Requests;

use App\Models\User;
use App\Rules\IsValidPhoneNumber;
use App\Rules\IsValidPostcode;
use App\Services\RoleService;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserUpdateRequest extends FormRequest
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
                Rule::unique(User::class)->ignore($this->user()->getKey())
            ],
            'phone' => [
                'required',
                new IsValidPhoneNumber(),
                Rule::unique(User::class)->ignore($this->user()->getKey())
            ]
        ];

        if ($this->user()->hasRole(RoleService::SENIOR)) {
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
            'address' => __('adres'),
            'city' => __('miasto'),
            'postcode' => __('kod pocztowy'),
            'phone' => __('telefon')
        ];
    }
}
