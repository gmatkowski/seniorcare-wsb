<?php

namespace App\Repositories;

use App\Contracts\OrderRepository;
use App\Models\Order;
use App\Models\User;
use Illuminate\Pagination\LengthAwarePaginator;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;

/**
 * Class OrderRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class OrderRepositoryEloquent extends BaseRepository implements OrderRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model(): string
    {
        return Order::class;
    }

    /**
     * @throws \Prettus\Repository\Exceptions\RepositoryException
     */
    public function boot(): void
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

    /**
     * @param User $user
     * @param int $per_page
     * @return LengthAwarePaginator
     */
    public function forUser(User $user, int $per_page = 10): LengthAwarePaginator
    {
        return $this
            ->with(['user', 'supporter'])
            ->scopeQuery(function ($query) use ($user) {
                return $query
                    ->where(function ($query) use ($user) {
                        return $query
                            ->where('user_id', $user->getKey())
                            ->orWhere('supporter_id', $user->getKey());
                    })
                    ->orderBy('created_at', 'DESC');
            })->paginate($per_page);
    }

    /**
     * @param int $per_page
     * @return LengthAwarePaginator
     */
    public function free(int $per_page = 10): LengthAwarePaginator
    {
        return $this
            ->with(['user', 'supporter'])
            ->scopeQuery(function ($query) {
                return $query
                    ->where('status', Order::AWAITING)
                    ->whereNull('supporter_id')
                    ->orderBy('created_at', 'DESC');
            })->paginate($per_page);
    }
}
