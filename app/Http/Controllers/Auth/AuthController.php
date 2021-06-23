<?php

/**
 * User: gmatk
 * Date: 21.06.2021
 * Time: 10:36
 */

namespace App\Http\Controllers\Auth;

use App\Abstracts\Controller;
use App\Contracts\AuthServiceContract;
use App\Contracts\UserServiceContract;
use App\Dto\UserRegisterDto;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\UserRegisterRequest;
use App\Http\Requests\VerifyRequest;
use App\Http\Resources\UserRegisteredResource;
use App\Http\Resources\UserResource;
use App\Services\RoleService;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Psy\Util\Json;

/**
 * Class AuthController
 * @package App\Http\Controllers\Auth
 */
class AuthController extends Controller
{
    /**
     * @var UserServiceContract
     */
    private UserServiceContract $service;
    /**
     * @var AuthServiceContract
     */
    private AuthServiceContract $authService;

    /**
     * AuthController constructor.
     * @param UserServiceContract $service
     * @param AuthServiceContract $authService
     */
    public function __construct(UserServiceContract $service, AuthServiceContract $authService)
    {
        $this->service = $service;
        $this->authService = $authService;
    }

    /**
     * @param UserRegisterRequest $request
     * @return UserRegisteredResource
     */
    public function email(UserRegisterRequest $request): UserRegisteredResource
    {
        $dto = new UserRegisterDto(
            $request->input('first_name'),
            $request->input('last_name'),
            $request->input('email'),
            $request->input('password'),
            $request->input('role'),
        );
        $dto->fillFromRequest($request);

        $user = $this->service->register($dto);
        event(
            new Registered($user)
        );

        return new UserRegisteredResource($user);
    }

    /**
     * @param LoginRequest $request
     * @return JsonResponse
     */
    public function login(LoginRequest $request): JsonResponse
    {
        $fields = $request->only(['email', 'password']);

        if (!$this->authService->canSignIn($request->input('email')) || !auth()->attempt($fields, true)) {
            return response()->json([
                'errors' => [
                    'email' => [
                        __('logowanie niepoprawne')
                    ]
                ]
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        return response()->json(new UserResource(auth()->user()));
    }

    /**
     * @param VerifyRequest $request
     * @return JsonResponse
     */
    public function verify(VerifyRequest $request): JsonResponse
    {
        if (!$this->authService->verify($request->input('id'), $request->input('hash'))) {
            return response()->json(null, Response::HTTP_FORBIDDEN);
        }

        return response()->json();
    }

    /**
     * @return JsonResponse
     */
    public function logout(): JsonResponse
    {
        auth()->logout();

        return response()->json();
    }
}
