<?php

/**
 * User: gmatk
 * Date: 12.06.2021
 * Time: 13:50
 */

namespace App\Contracts;

use App\Dto\UserRegisterDto;
use App\Dto\UserUpdateDto;
use App\Models\User;

/**
 * Class UserService
 * @package App\Services
 */
interface UserServiceContract
{
    /**
     * @return UserRepository
     */
    public function getRepository(): UserRepository;

    /**
     * @param User $user
     * @param UserUpdateDto $dto
     */
    public function update(User $user, UserUpdateDto $dto): void;

    /**
     * @param UserRegisterDto $dto
     * @return User
     */
    public function register(UserRegisterDto $dto): User;
}
