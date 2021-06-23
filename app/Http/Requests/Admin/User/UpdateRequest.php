<?php

/**
 * User: gmatk
 * Date: 12.06.2021
 * Time: 14:18
 */

namespace App\Http\Requests\Admin\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Class StoreRequest
 * @package App\Http\Requests\Admin\User
 */
class UpdateRequest extends FormRequest
{
    /**
     * @return array
     */
    public function rules(): array
    {
        $id = $this->get('id') ?? request()->route('id');

        return [
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
                Rule::unique(config('permission.table_names.users', 'users'))->ignore($id)
            ],
            'password' => [
                'nullable',
                'min:' . config('auth.password_min_length'),
                'confirmed'
            ]
        ];
    }
}
