<?php

/**
 * User: gmatk
 * Date: 21.06.2021
 * Time: 12:51
 */

namespace App\Traits;

use Illuminate\Support\Facades\Storage;
use Intervention\Image\Exception\ImageException;
use Intervention\Image\Facades\Image;

/**
 * Trait ModelImageTrait
 * @package App\Traits
 */
trait ModelImageTrait
{
    /**
     * @param $value
     */
    public function setImageAttribute($value): void
    {
        $attribute_name = "image";
        $destination_path = 'products';

        if (is_null($value)) {
            Storage::disk('public')->delete($this->{$attribute_name});
            $this->attributes[$attribute_name] = null;
        }

        try {
            $image = Image::make($value)->encode('jpg', 90);
            $filename = md5($value . time()) . '.jpg';
            Storage::disk('public')->put($destination_path . '/' . $filename, $image->stream());
            Storage::disk('public')->delete($this->{$attribute_name});

            $public_destination_path = $destination_path;
            $this->attributes[$attribute_name] = $public_destination_path . '/' . $filename;
        } catch (ImageException $exception) {
        }
    }

    /**
     * @return string|null
     */
    public function getImageUrlAttribute(): ?string
    {
        if (!$this->image) {
            return null;
        }

        return Storage::url($this->image);
    }
}
