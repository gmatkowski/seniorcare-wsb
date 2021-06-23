<?php

use App\Models\Order;

return [
    'status.' . Order::AWAITING => 'Oczekujące',
    'status.' . Order::ASSIGNED => 'Przypisane do pomagającego',
    'status.' . Order::IN_PROGRESS => 'W trakcie',
    'status.' . Order::DONE => 'Dostarczone',
    'status.' . Order::CONFIRMED => 'Potwierdzone',
    'status.' . Order::CANCELED => 'Anulowane'
];
