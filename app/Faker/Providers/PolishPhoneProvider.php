<?php
/**
 * User: gmatk
 * Date: 27.08.2020
 * Time: 13:23
 */

namespace App\Faker\Providers;

use Faker\Provider\Base;

/**
 * Class PolishPhoneProvider
 * @package App\Application\Faker\Providers
 */
class PolishPhoneProvider extends Base
{
    /**
     * @var string[]
     */
    protected static array $formats = array(
        '+48*########'
    );

    /**
     * @return string
     */
    public function polishPhoneNumber(): string
    {
        $primes = [5, 6];

        $format = static::randomElement(static::$formats);
        $format = str_replace("*", $primes[array_rand($primes)], $format);

        return static::numerify($this->generator->parse($format));
    }
}
