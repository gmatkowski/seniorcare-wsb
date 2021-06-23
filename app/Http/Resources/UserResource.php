<?php

/**
 * User: gmatk
 * Date: 12.06.2021
 * Time: 14:44
 */

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray($request): array
    {
        $data = $this->only([
            'id',
            'email',
            'phone',
            'first_name',
            'last_name',
            'address',
            'postcode',
            'city',
            'created_at',
            'updated_at'
        ]);

        $data += [
            'roles' => RoleResource::collection($this->roles)
        ];

        return $data;
    }
}
