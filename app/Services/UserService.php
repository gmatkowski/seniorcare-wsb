<?php

namespace App\Services;

use App\Contracts\UserRepository;
use App\Dto\UserRegisterDto;
use App\Models\User;

class UserService
{
    private UserRepository $repository;

    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }

    public function create(UserRegisterDto $dto): User {
        $user = $this->repository->create($dto->toArray());
        $user->syncRoles($dto->getRole());

        return $user;
    }
}
