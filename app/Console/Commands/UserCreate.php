<?php

/**
 * User: gmatk
 * Date: 16.05.2021
 * Time: 10:41
 */

namespace App\Console\Commands;

use App\Contracts\UserServiceContract;
use App\Dto\UserRegisterDto;
use App\Models\User;
use App\Services\RoleService;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

/**
 * Class UserCreate
 * @package App\Console\Commands
 */
class UserCreate extends Command
{
    /**
     * @var string
     */
    protected $signature = 'user:create';
    /**
     * @var string
     */
    protected $description = 'Create admin user';


    public function handle(UserServiceContract $service): void
    {
        $first_name = $this->ask('Imię?');
        $last_name = $this->ask('Nazwisko?');
        $email = $this->ask('Email?');
        $password = $this->ask('Password?');
        $password_confirmation = $this->ask('Confirm password?');

        $validator = Validator::make([
            'first_name' => $first_name,
            'last_name' => $last_name,
            'email' => $email,
            'password' => $password,
            'password_confirmation' => $password_confirmation,
        ], [
            'first_name' => [
                'required',
                'min:3'
            ],
            'last_name' => [
                'required',
                'min:3'
            ],
            'email' => [
                'required',
                'email',
                Rule::unique(User::class)
            ],
            'password' => [
                'required',
                'confirmed',
                'min:' . config('auth.password_min_length')
            ],
            'password_confirmation' => [
                'required',
                'min:' . config('auth.password_min_length')
            ]
        ]);

        if ($validator->fails()) {
            foreach ($validator->errors()->all() as $error) {
                $this->error($error);
            }
            return;
        }

        $dto = new UserRegisterDto(
            $first_name,
            $last_name,
            $email,
            $password,
            RoleService::ADMIN
        );

        $user = $service->register($dto);

        $this->info(sprintf('User %s (%s) created', $user->name, $user->email));
    }
}
