<?php

namespace App\Contracts;

use App\Models\User;
use Illuminate\Pagination\LengthAwarePaginator;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Interface OrderRepository.
 *
 * @package namespace App\Repositories;
 */
interface OrderRepository extends RepositoryInterface
{
    /**
     * @param User $user
     * @param int $per_page
     * @return LengthAwarePaginator
     */
    public function forUser(User $user, int $per_page = 10): LengthAwarePaginator;

    public function free(int $per_page = 10): LengthAwarePaginator;
}
