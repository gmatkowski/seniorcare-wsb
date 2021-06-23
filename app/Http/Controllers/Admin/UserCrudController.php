<?php

/**
 * User: gmatk
 * Date: 12.06.2021
 * Time: 14:09
 */

namespace App\Http\Controllers\Admin;

use App\Http\Requests\Admin\User\StoreRequest;
use App\Http\Requests\Admin\User\UpdateRequest;

/**
 * Class UserCrudController
 * @package App\Http\Controllers\Admin
 */
class UserCrudController extends \Backpack\PermissionManager\app\Http\Controllers\UserCrudController
{
    /**
     *
     */
    protected function addUserFields(): void
    {
        parent::addUserFields();
        $this->crud->removeFields(['name']);

        $this->crud->addField([
            'name' => 'first_name',
            'label' => trans('backpack::permissionmanager.first_name'),
            'type' => 'text',
        ])->beforeField('email');

        $this->crud->addField([
            'name' => 'last_name',
            'label' => trans('backpack::permissionmanager.last_name'),
            'type' => 'text',
        ])->afterField('first_name');
    }

    public function setupCreateOperation(): void
    {
        $this->addUserFields();
        $this->crud->setValidation(StoreRequest::class);
    }

    public function setupUpdateOperation(): void
    {
        $this->addUserFields();
        $this->crud->setValidation(UpdateRequest::class);
    }
}
