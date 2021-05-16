<?php
/**
 * User: gmatk
 * Date: 16.05.2021
 * Time: 10:41
 */

namespace App\Console\Commands;


use App\Entities\User;
use App\Contracts\UserRepository;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class UserCreate extends Command
{
    protected $signature = 'user:create';
    protected $description = 'Create admin user';

    public function handle(UserRepository $repository): void
    {
        $name = $this->ask('Name?');
        $email = $this->ask('Email?');
        $password = $this->ask('Password?');
        $password_confirmation = $this->ask('Confirm password?');

        $validator = Validator::make([
            'name' => $name,
            'email' => $email,
            'password' => $password,
            'password_confirmation' => $password_confirmation,
        ], [
            'name' => [
                'required',
                'min:3',
                Rule::unique(User::class)
            ],
            'email' => [
                'required',
                'email',
                Rule::unique(User::class)
            ],
            'password' => [
                'required',
                'confirmed',
                'min:8'
            ],
            'password_confirmation' => [
                'required',
                'min:8'
            ]
        ]);

        if ($validator->fails()) {
            foreach ($validator->errors()->all() as $error) {
                $this->error($error);
            }
            return;
        }

        $user = $repository->create([
            'name' => $name,
            'email' => $email,
            'password' => bcrypt($password)
        ]);

        /**
         * @var User $user
         */

        $user->syncRoles(['admin']);

        $this->info(sprintf('User %s (%s) created', $user->name, $user->email));
    }
}
