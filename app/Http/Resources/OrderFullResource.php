<?php

/**
 * User: gmatk
 * Date: 22.06.2021
 * Time: 21:14
 */

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class OrderFullResource
 * @package App\Http\Resources
 */
class OrderFullResource extends JsonResource
{
    /**
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request): array
    {
        return array_merge($this->resource->toArray(), [
            'user' => new UserResource($this->whenLoaded('user')),
            'supporter' => new UserResource($this->whenLoaded('supporter')),
            'products' => ProductResource::collection($this->whenLoaded('products'))
        ]);
    }
}
