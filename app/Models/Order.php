<?php

namespace App\Models;

use App\Traits\PriceTrait;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Database\Factories\OrderFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Jamesh\Uuid\HasUuid;

/**
 * Class Order
 * @package App\Models
 */
class Order extends Model
{
    use CrudTrait;
    use HasUuid;
    use PriceTrait;
    use HasFactory;

    /**
     *
     */
    public const AWAITING = 'awaiting';
    /**
     *
     */
    public const ASSIGNED = 'assigned';
    /**
     *
     */
    public const IN_PROGRESS = 'in-progress';
    /**
     *
     */
    public const DONE = 'done';
    /**
     *
     */
    public const CONFIRMED = 'confirmed';
    /**
     *
     */
    public const CANCELED = 'canceled';

    /**
     * @var string[]
     */
    protected $fillable = [
        'status',
        'price',
    ];

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * @return BelongsTo
     */
    public function supporter(): BelongsTo
    {
        return $this->belongsTo(User::class, 'supporter_id');
    }

    /**
     * @return BelongsToMany
     */
    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class)
            ->withPivot(['quantity'])
            ->using(OrderProduct::class);
    }

    /**
     * @return bool
     */
    public function isFree(): bool
    {
        return $this->status === self::AWAITING;
    }

    /**
     * @return OrderFactory
     */
    protected static function newFactory(): OrderFactory
    {
        return OrderFactory::new();
    }
}
