<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\ProductRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class ProductCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class ProductCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     *
     * @return void
     */
    public function setup(): void
    {
        CRUD::setModel(\App\Models\Product::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/product');
        CRUD::setEntityNameStrings('produkt', 'produkty');
    }

    /**
     *
     */
    protected function setupListOperation(): void
    {
        $this->crud->addColumns([
            [
                'name' => 'name',
                'label' => "Nazwa",
                'type' => 'text'
            ],
            [
                'name' => 'price',
                'label' => 'Cena',
                'suffix' => ' pln'
            ],
            [
                'name' => 'symbol',
                'label' => 'Symbol'
            ]
        ]);

        if (!request()->has('order')) {
            $this->crud->orderBy('name', 'ASC');
        }
    }

    /**
     *
     */
    protected function setupCreateOperation(): void
    {
        CRUD::setValidation(ProductRequest::class);
        $this->crud->addFields([
            [
                'name' => 'name',
                'label' => 'Nazwa',
                'type' => 'text'
            ],
            [
                'name' => 'description',
                'label' => 'Opis',
                'type' => 'tinymce',
                'options' => [
                    'height' => 400
                ]
            ],
            [
                'name' => 'price',
                'label' => 'Cena',
                'type' => 'number',
                'attributes' => [
                    'step' => 0.01,
                    'min:' => 0
                ],
                'suffix' => ' pln'
            ],
            [
                'name' => 'symbol',
                'label' => 'Symbol',
                'type' => 'text',
                'default' => 'szt.'
            ],
            [
                'label' => 'Obrazek',
                'name' => 'image',
                'type' => 'image',
                'crop' => true,
                'disk' => 'public',
                'aspect_ratio' => 1,
            ]
        ]);
    }

    /**
     *
     */
    protected function setupUpdateOperation(): void
    {
        $this->setupCreateOperation();
    }
}
