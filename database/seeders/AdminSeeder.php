<?php
/**
 * User: gmatk
 * Date: 13.12.2022
 * Time: 11:02
 */

namespace Database\Seeders;

use App\Contracts\UserServiceContract;
use App\Dto\UserRegisterDto;
use App\Models\User;
use Illuminate\Database\Seeder;

/**
 *
 */
class AdminSeeder extends Seeder
{
    /**
     * @var UserServiceContract
     */
    private UserServiceContract $service;

    /**
     * @param UserServiceContract $service
     */
    public function __construct(UserServiceContract $service)
    {
        $this->service = $service;
    }

    /**
     *
     */
    public function run(): void
    {
        if ($this->service->getRepository()->all()->count() > 0) {
            return;
        }

        foreach (config('users.default') as $roleName => $user) {
            /**
             * @var User $fakeUser
             */
            $fakeUser = User::factory()->make([
                'email' => $user['email']
            ]);

            $dto = new UserRegisterDto(
                $fakeUser->first_name,
                $fakeUser->last_name,
                $fakeUser->email,
                $user['password'],
                $roleName
            );
            $dto->setAddress($fakeUser->address);
            $dto->setPhone($fakeUser->phone);
            $dto->setCity($fakeUser->city);
            $dto->setPostcode($fakeUser->postcode);

            $user = $this->service->register($dto);
            $user->markEmailAsVerified();
        }
    }
}
