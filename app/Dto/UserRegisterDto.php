<?php

/**
 * User: gmatk
 * Date: 12.06.2021
 * Time: 13:45
 */

namespace App\Dto;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

/**
 * Class UserRegisterDto
 * @package App\Dto
 */
class UserRegisterDto
{
    /**
     * @var string
     */
    private string $first_name;
    /**
     * @var string
     */
    private string $last_name;
    /**
     * @var string
     */
    private string $email;
    /**
     * @var string
     */
    private string $password;
    /**
     * @var string
     */
    private string $role;
    /**
     * @var string|null
     */
    private ?string $address = null;
    /**
     * @var string|null
     */
    private ?string $city = null;
    /**
     * @var string|null
     */
    private ?string $postcode = null;
    /**
     * @var string|null
     */
    private ?string $phone = null;

    /**
     * UserRegisterDto constructor.
     * @param string $first_name
     * @param string $last_name
     * @param string $email
     * @param string $password
     * @param string $role
     */
    public function __construct(
        string $first_name,
        string $last_name,
        string $email,
        string $password,
        string $role
    ) {
        $this->first_name = $first_name;
        $this->last_name = $last_name;
        $this->email = $email;
        $this->password = $password;
        $this->role = $role;
    }

    /**
     * @return string
     */
    public function getFirstName(): string
    {
        return $this->first_name;
    }

    /**
     * @return string
     */
    public function getLastName(): string
    {
        return $this->last_name;
    }

    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @return string
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * @return string
     */
    public function getRole(): string
    {
        return $this->role;
    }

    /**
     * @return string|null
     */
    public function getAddress(): ?string
    {
        return $this->address;
    }

    /**
     * @return string|null
     */
    public function getCity(): ?string
    {
        return $this->city;
    }

    /**
     * @return string|null
     */
    public function getPostcode(): ?string
    {
        return $this->postcode;
    }

    /**
     * @return string|null
     */
    public function getPhone(): ?string
    {
        return $this->phone;
    }

    /**
     * @param string|null $address
     */
    public function setAddress(?string $address): void
    {
        $this->address = $address;
    }

    /**
     * @param string|null $city
     */
    public function setCity(?string $city): void
    {
        $this->city = $city;
    }

    /**
     * @param string|null $postcode
     */
    public function setPostcode(?string $postcode): void
    {
        $this->postcode = $postcode;
    }

    /**
     * @param string|null $phone
     */
    public function setPhone(?string $phone): void
    {
        $this->phone = $phone;
    }

    /**
     * @param FormRequest $request
     */
    public function fillFromRequest(FormRequest $request): void
    {
        foreach ($request->validated() as $key => $value) {
            if (empty($this->{$key}) && $request->filled($key)) {
                $method = sprintf('set%s', ucfirst(Str::camel($key)));
                if (method_exists($this, $method)) {
                    $this->{$method}($value);
                }
            }
        }
    }

    /**
     * @return array
     */
    public function toArray(): array
    {
        return [
            'first_name' => $this->getFirstName(),
            'last_name' => $this->getLastName(),
            'email' => $this->getEmail(),
            'password' => bcrypt($this->getPassword()),
            'address' => $this->getAddress(),
            'city' => $this->getCity(),
            'postcode' => $this->getPostcode(),
            'phone' => $this->getPhone()
        ];
    }
}
