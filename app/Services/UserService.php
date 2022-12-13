<?php

/**
 * User: gmatk
 * Date: 12.06.2021
 * Time: 13:45
 */

namespace App\Services;

use App\Contracts\UserRepository;
use App\Contracts\UserServiceContract;
use App\Dto\UserRegisterDto;
use App\Dto\UserUpdateDto;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\DB;

/**
 * Class UserService
 * @package App\Services
 */
class UserService implements UserServiceContract
{
    /**
     * @var UserRepository
     */
    private UserRepository $repository;

    /**
     * UserService constructor.
     * @param UserRepository $repository
     */
    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @return UserRepository
     */
    public function getRepository(): UserRepository
    {
        return $this->repository;
    }

    /**
     * @param UserRegisterDto $dto
     * @return User
     */
    public function register(UserRegisterDto $dto): User
    {
        return DB::transaction(function () use ($dto) {
            /**
             * @var User $user
             */
            $user = $this->repository->create($dto->toArray());
            $user->syncRoles($dto->getRole());

            return $user;
        });
    }

    /**
     * @param User $user
     * @param UserUpdateDto $dto
     */
    public function update(User $user, UserUpdateDto $dto): void
    {
        $user->fill($dto->toArray());
        $user->save();
    }

    /**
     * @param User|null $user
     * @return UserResource|null
     */
    public static function getAuthUserResource(?User $user): ?UserResource
    {
        if (!$user) {
            return null;
        }

        return new UserResource($user);
    }
}
