<?php

/**
 * User: gmatk
 * Date: 21.06.2021
 * Time: 15:34
 */

namespace App\Http\Controllers\User;

use App\Abstracts\Controller;
use App\Dto\UserUpdateDto;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\UserResource;
use App\Services\UserService;

/**
 * Class UserController
 * @package App\Http\Controllers\User
 */
class UserController extends Controller
{
    /**
     * @var UserService
     */
    private UserService $service;

    /**
     * UserController constructor.
     * @param UserService $service
     */
    public function __construct(UserService $service)
    {
        $this->service = $service;
    }

    /**
     * @param UserUpdateRequest $request
     * @return UserResource
     */
    public function update(UserUpdateRequest $request): UserResource
    {
        $dto = new UserUpdateDto(
            $request->input('first_name'),
            $request->input('last_name'),
            $request->input('email')
        );
        $dto->fillFromRequest($request);

        $user = auth()->user();

        $this->service->update(
            $user,
            $dto
        );

        return new UserResource($user);
    }
}
