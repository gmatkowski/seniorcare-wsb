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
     * @var string
     */
    protected string $image_attribute_name = 'image';
    /**
     * @var string
     */
    protected string $image_destination_path = 'products';

    /**
     * @param $value
     */
    public function setImageAttribute($value): void
    {
        if (is_null($value)) {
            Storage::disk('public')->delete($this->{$this->image_attribute_name});
            $this->attributes[$this->image_attribute_name] = null;
        }

        try {
            $image = Image::make($value)->encode('jpg', 90);
            $filename = md5($value . time()) . '.jpg';
            Storage::disk('public')->put($this->image_destination_path . '/' . $filename, $image->stream());
            if ($this->hasImage()) {
                Storage::disk('public')->delete($this->{$this->image_attribute_name});
            }

            $this->attributes[$this->image_attribute_name] = $this->image_destination_path . '/' . $filename;
        } catch (ImageException $exception) {
        }
    }

    /**
     * @return bool
     */
    public function hasImage(): bool
    {
        return $this->{$this->image_attribute_name} && Storage::disk('public')->exists($this->{$this->image_attribute_name});
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
