<?php

/**
 * User: gmatk
 * Date: 12.06.2021
 * Time: 13:55
 */

namespace App\Services;

/**
 * Class RoleService
 * @package App\Services
 */
class RoleService
{
    /**
     *
     */
    public const ADMIN = 'admin';
    /**
     *
     */
    public const SENIOR = 'senior';
    /**
     *
     */
    public const SUPPORTER = 'supporter';

    /**
     * @var array|string[]
     */
    public static array $roles = [
        self::ADMIN,
        self::SENIOR,
        self::SUPPORTER
    ];

    public static array $roles_public = [
        self::SENIOR,
        self::SUPPORTER
    ];
}
