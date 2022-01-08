<?php
/**
 * User: gmatk
 * Date: 03.07.2021
 * Time: 09:33
 */

namespace App\Console\Commands;


use Illuminate\Console\Command;

/**
 * Class TestTest
 * @package App\Console\Commands
 */
class TestTest extends Command
{
    /**
     * @var string
     */
    protected $signature = 'test:test';


    /**
     *
     */
    public function handle(): void
    {
        $this->info((1 + 2 * NULL));
    }
}
