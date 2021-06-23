<?php

/**
 * User: gmatk
 * Date: 21.06.2021
 * Time: 11:06
 */

namespace App\Contracts;

/**
 * Class AuthService
 * @package App\Services
 */
interface AuthServiceContract
{
    /**
     * @param string $email
     * @return bool
     */
    public function canSignIn(string $email): bool;

    /**
     * @param int $id
     * @param string $hash
     * @return bool
     */
    public function verify(int $id, string $hash): bool;
}
