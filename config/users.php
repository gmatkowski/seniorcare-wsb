<?php

use App\Services\RoleService;

return [
    'default' => [
        RoleService::ADMIN => [
            'email' => env('USER_DEFAULT_ADMIN_EMIAL', 'admin@seniorcare.test'),
            'password' => env('USER_DEFAULT_ADMIN_PASSWORD', 'Test12345!'),
        ],
        RoleService::SENIOR => [
            'email' => env('USER_DEFAULT_SENIOR_EMIAL', 'senior@seniorcare.test'),
            'password' => env('USER_DEFAULT_SENIOR_PASSWORD', 'Test12345!'),
            'data' => [
                'address',
                'city',
                'postcode',
                'phone'
            ]
        ],
        RoleService::SUPPORTER => [
            'email' => env('USER_DEFAULT_SUPPORTER_EMIAL', 'supporter@seniorcare.test'),
            'password' => env('USER_DEFAULT_SUPPORTER_PASSWORD', 'Test12345!'),
        ]
    ]
];
