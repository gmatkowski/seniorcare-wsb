<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\OrderRequest;
use App\Models\User;
use App\Services\OrderService;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class OrderCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class OrderCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation {
        show as traitShow;
    }

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     *
     * @return void
     */
    public function setup(): void
    {
        CRUD::setModel(\App\Models\Order::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/order');
        CRUD::setEntityNameStrings('zamówienie', 'zamówienia');

        $this->crud->denyAccess(['create', 'update']);
    }

    /**
     *
     */
    protected function listShowColumns(): void
    {
        $this->crud->addColumns([
            [
                'name' => 'id',
                'label' => 'Id zamówienia'
            ],
            [
                'name' => 'products_count',
                'label' => 'Ilość produktów'
            ],
            [
                'name' => 'price',
                'label' => 'Łączna cena'
            ],
            [
                'name' => 'user',
                'label' => 'Zamawiający',
                'attribute' => 'name',
                'type' => 'relationship',
                'relation_type' => 'text',
                'model' => User::class,
                'entity' => 'user',
            ],
            [
                'name' => 'supporter',
                'label' => 'Pomagający',
                'attribute' => 'name',
                'type' => 'relationship',
                'name' => 'name',
                'relation_type' => 'text',
                'model' => User::class,
                'entity' => 'supporter',
            ],
            [
                'name' => 'status',
                'label' => 'Status',
                'type' => 'select_from_array',
                'options' => OrderService::getStatusTranslatedArray()
            ],
            [
                'name' => 'created_at',
                'label' => 'Data'
            ],
        ]);
    }

    /**
     * Define what happens when the List operation is loaded.
     *
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation(): void
    {
        $this->listShowColumns();

        $this->crud->addClause('withCount', ['products']);
        $this->crud->addClause('with', ['user', 'supporter']);
    }

    /**
     * Define what happens when the Create operation is loaded.
     *
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation(): void
    {
        CRUD::setValidation(OrderRequest::class);

        CRUD::setFromDb(); // fields

        /**
         * Fields can be defined using the fluent syntax or array syntax:
         * - CRUD::field('price')->type('number');
         * - CRUD::addField(['name' => 'price', 'type' => 'number']));
         */
    }

    /**
     * Define what happens when the Update operation is loaded.
     *
     * @see https://backpackforlaravel.com/docs/crud-operation-update
     * @return void
     */
    protected function setupUpdateOperation(): void
    {
        $this->setupCreateOperation();
    }

    /**
     *
     */
    protected function setupShowOperation(): void
    {
        $this->crud->set('show.setFromDb', false);
        $this->listShowColumns();

        $this->crud->addColumns([
            [
                'label' => 'Produkty',
                'type' => 'select_multiple',
                'name' => 'products',
                'entity' => 'products',
                'attribute' => 'name',
                'model' => Product::class,
            ],
        ]);
    }

    /**
     * @param $id
     * @return \Backpack\CRUD\app\Http\Controllers\Operations\Response
     */
    public function show($id)
    {
        // custom logic before
        $content = $this->traitShow($id);

        $this->data['entry']->loadCount(['products']);
        $this->data['entry']->load(['products', 'user', 'supporter']);

        return $content;
    }
}
