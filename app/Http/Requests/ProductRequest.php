<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;
use Illuminate\Foundation\Http\FormRequest;

/**
 *
 */
class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return backpack_auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'min:3'
            ],
            'price' => [
                'required'
            ],
            'description' => [
                'required',
                'min:3'
            ],
            'symbol' => [
                'required'
            ]
        ];
    }

    /**
     * @return array
     */
    public function attributes(): array
    {
        return [
            'name' => __('nazwa'),
            'price' => __('cena'),
            'description' => __('opis'),
            'symbol' => __('symbol')
        ];
    }
}
