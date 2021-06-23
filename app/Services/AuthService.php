<?php

/**
 * User: gmatk
 * Date: 21.06.2021
 * Time: 11:03
 */

namespace App\Services;

use App\Contracts\AuthServiceContract;
use App\Contracts\UserRepository;
use App\Models\User;

/**
 * Class AuthService
 * @package App\Services
 */
class AuthService implements AuthServiceContract
{
    /**
     * @var UserRepository
     */
    private UserRepository $repository;

    /**
     * AuthService constructor.
     * @param UserRepository $repository
     */
    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param string $email
     * @return bool
     */
    public function canSignIn(string $email): bool
    {
        $user = $this->repository->findWhere([
            'email' => $email,
        ])->first();
        /**
         * @var User $user
         */
        if (!$user || !$user->hasVerifiedEmail()) {
            return false;
        }

        return !$user->hasRole(RoleService::ADMIN);
    }

    /**
     * @param int $id
     * @param string $hash
     * @return bool
     */
    public function verify(int $id, string $hash): bool
    {
        /**
         * @var User $user
         */
        $user = $this->repository->find($id);
        if (!$user) {
            return false;
        }

        if (!hash_equals((string)$id, (string)$user->getKey())) {
            return false;
        }

        if (!hash_equals($hash, sha1($user->getEmailForVerification()))) {
            return false;
        }

        if (!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
        }

        return true;
    }
}
