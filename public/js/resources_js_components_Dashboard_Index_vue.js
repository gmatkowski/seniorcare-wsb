(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_components_Order_Index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/Order/Index */ "./resources/js/components/Order/Index.vue");
/* harmony import */ var _js_components_Order_Free__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/Order/Free */ "./resources/js/components/Order/Free.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    OrderComponent: _js_components_Order_Index__WEBPACK_IMPORTED_MODULE_0__.default,
    FreeComponent: _js_components_Order_Free__WEBPACK_IMPORTED_MODULE_1__.default
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    isSenior: 'auth/isSenior',
    isSupporter: 'auth/isSupporter'
  })),
  data: function data() {
    return {
      breadcrumbs: [{
        text: 'Seniorcare',
        disabled: false
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Expanded.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Expanded.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_mixins_ResponseErrorsMixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/mixins/ResponseErrorsMixins */ "./resources/js/mixins/ResponseErrorsMixins.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_js_mixins_ResponseErrorsMixins__WEBPACK_IMPORTED_MODULE_1__.default],
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    isSenior: 'auth/isSenior',
    isSupporter: 'auth/isSupporter'
  })),
  data: function data() {
    return {
      order: null
    };
  },
  beforeMount: function beforeMount() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var _yield$_this$$apiOrde, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _this.$apiOrder.get(_this.id);

            case 3:
              _yield$_this$$apiOrde = _context.sent;
              data = _yield$_this$$apiOrde.data;
              _this.order = data.data;
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);

              _this.handleErrors(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Free.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Free.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_mixins_TableMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/mixins/TableMixin */ "./resources/js/mixins/TableMixin.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_mixins_ResponseErrorsMixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/mixins/ResponseErrorsMixins */ "./resources/js/mixins/ResponseErrorsMixins.js");
/* harmony import */ var _js_components_Order_Expanded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/js/components/Order/Expanded */ "./resources/js/components/Order/Expanded.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_js_mixins_TableMixin__WEBPACK_IMPORTED_MODULE_1__.default, _js_mixins_ResponseErrorsMixins__WEBPACK_IMPORTED_MODULE_2__.default],
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)({
    user: 'auth/user'
  })),
  components: {
    ExpandedComponent: _js_components_Order_Expanded__WEBPACK_IMPORTED_MODULE_3__.default
  },
  data: function data() {
    var _this = this;

    return {
      options: {},
      headers: [{
        text: 'Wartość zamówienia',
        value: 'price',
        sortable: false
      }, {
        text: 'Zamawiający',
        value: 'user_id',
        sortable: false
      }, {
        text: 'Status',
        value: 'status',
        sortable: false
      }, {
        text: 'Data złożenia zamówienia',
        value: 'created_at',
        sortable: false
      }, {
        text: 'Ostatnio zmieniono',
        value: 'updated_at',
        sortable: false
      }, {
        text: 'Akcje',
        value: 'actions',
        sortable: false
      }],
      calls: {
        listing: function () {
          var _listing = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(page, per_page) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", _this.$apiOrder.free(page, per_page));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function listing(_x, _x2) {
            return _listing.apply(this, arguments);
          }

          return listing;
        }()
      }
    };
  },
  methods: {
    assign: function assign(order) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$refs.confirm.open('Potwierdź', 'Czy na pewno chcesz się zaoferować?');

              case 2:
                if (!_context2.sent) {
                  _context2.next = 16;
                  break;
                }

                _context2.prev = 3;
                _this2.isLoading = true;
                _context2.next = 7;
                return _this2.$apiOrder.assign(order.id);

              case 7:
                _this2.$notifier.showMessage({
                  content: 'Super, zostałeś przypisany do zamówienia!',
                  color: 'green'
                });

                _context2.next = 10;
                return _this2.refreshTable();

              case 10:
                _this2.isLoading = false;
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](3);

                _this2.handleErrors(_context2.t0);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 13]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Senior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Senior */ "./resources/js/components/Order/Senior.vue");
/* harmony import */ var _Supporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Supporter */ "./resources/js/components/Order/Supporter.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SeniorComponent: _Senior__WEBPACK_IMPORTED_MODULE_0__.default,
    SupporterComponent: _Supporter__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      isLoading: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    isSenior: 'auth/isSenior',
    isSupporter: 'auth/isSupporter'
  })), {}, {
    component_name: function component_name() {
      if (this.isSenior) {
        return 'SeniorComponent';
      }

      return 'SupporterComponent';
    }
  }),
  methods: {
    setLoading: function setLoading(status) {
      this.isLoading = status;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Senior.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Senior.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_mixins_TableMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/mixins/TableMixin */ "./resources/js/mixins/TableMixin.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_mixins_ResponseErrorsMixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/mixins/ResponseErrorsMixins */ "./resources/js/mixins/ResponseErrorsMixins.js");
/* harmony import */ var _js_components_Order_Expanded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/js/components/Order/Expanded */ "./resources/js/components/Order/Expanded.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ExpandedComponent: _js_components_Order_Expanded__WEBPACK_IMPORTED_MODULE_3__.default
  },
  mixins: [_js_mixins_TableMixin__WEBPACK_IMPORTED_MODULE_1__.default, _js_mixins_ResponseErrorsMixins__WEBPACK_IMPORTED_MODULE_2__.default],
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)({
    user: 'auth/user'
  })),
  data: function data() {
    var _this = this;

    return {
      options: {},
      headers: [{
        text: 'Wartość zamówienia',
        value: 'price',
        sortable: false
      }, {
        text: 'Dostarczający',
        value: 'supporter_id',
        sortable: false
      }, {
        text: 'Status',
        value: 'status',
        sortable: false
      }, {
        text: 'Data złożenia zamówienia',
        value: 'created_at',
        sortable: false
      }, {
        text: 'Ostatnio zmieniono',
        value: 'updated_at',
        sortable: false
      }, {
        text: 'Akcje',
        value: 'actions',
        sortable: false
      }],
      calls: {
        listing: function () {
          var _listing = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(page, per_page) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", _this.$apiOrder.my(page, per_page));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function listing(_x, _x2) {
            return _listing.apply(this, arguments);
          }

          return listing;
        }()
      }
    };
  },
  methods: {
    cancel: function cancel(order) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$refs.confirm.open('Potwierdź', 'Czy na pewno chcesz anulować zamówienie?');

              case 2:
                if (!_context2.sent) {
                  _context2.next = 16;
                  break;
                }

                _context2.prev = 3;
                _this2.isLoading = true;
                _context2.next = 7;
                return _this2.$apiOrder.cancel(order.id);

              case 7:
                _this2.$notifier.showMessage({
                  content: 'Zamówienie zostało anulowane',
                  color: 'green'
                });

                _context2.next = 10;
                return _this2.refreshTable();

              case 10:
                _this2.isLoading = false;
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](3);

                _this2.handleErrors(_context2.t0);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 13]]);
      }))();
    },
    confirm: function confirm(order) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.$refs.confirm.open('Potwierdź', 'Czy na pewno chcesz potwierdzić otrzymanie zamówienia?');

              case 2:
                if (!_context3.sent) {
                  _context3.next = 16;
                  break;
                }

                _context3.prev = 3;
                _this3.isLoading = true;
                _context3.next = 7;
                return _this3.$apiOrder.confirm(order.id);

              case 7:
                _this3.$notifier.showMessage({
                  content: 'Zamówienie zostało potwierdzone.',
                  color: 'green'
                });

                _context3.next = 10;
                return _this3.refreshTable();

              case 10:
                _this3.isLoading = false;
                _context3.next = 16;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](3);

                _this3.handleErrors(_context3.t0);

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[3, 13]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Supporter.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Supporter.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_mixins_TableMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/mixins/TableMixin */ "./resources/js/mixins/TableMixin.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_mixins_ResponseErrorsMixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/mixins/ResponseErrorsMixins */ "./resources/js/mixins/ResponseErrorsMixins.js");
/* harmony import */ var _js_components_Order_Expanded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/js/components/Order/Expanded */ "./resources/js/components/Order/Expanded.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_js_mixins_TableMixin__WEBPACK_IMPORTED_MODULE_1__.default, _js_mixins_ResponseErrorsMixins__WEBPACK_IMPORTED_MODULE_2__.default],
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)({
    user: 'auth/user'
  })),
  components: {
    ExpandedComponent: _js_components_Order_Expanded__WEBPACK_IMPORTED_MODULE_3__.default
  },
  data: function data() {
    var _this = this;

    return {
      options: {},
      headers: [{
        text: 'Wartość zamówienia',
        value: 'price',
        sortable: false
      }, {
        text: 'Zamawiający',
        value: 'user_id',
        sortable: false
      }, {
        text: 'Status',
        value: 'status',
        sortable: false
      }, {
        text: 'Data złożenia zamówienia',
        value: 'created_at',
        sortable: false
      }, {
        text: 'Ostatnio zmieniono',
        value: 'updated_at',
        sortable: false
      }, {
        text: 'Akcje',
        value: 'actions',
        sortable: false
      }],
      calls: {
        listing: function () {
          var _listing = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(page, per_page) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", _this.$apiOrder.my(page, per_page));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function listing(_x, _x2) {
            return _listing.apply(this, arguments);
          }

          return listing;
        }()
      }
    };
  },
  methods: {
    inProgress: function inProgress(order) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.isLoading = true;
                _context2.next = 3;
                return _this2.$apiOrder.inProgress(order.id);

              case 3:
                _this2.$notifier.showMessage({
                  content: 'Dzięki!',
                  color: 'green'
                });

                _context2.next = 6;
                return _this2.refreshTable();

              case 6:
                _this2.isLoading = false;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    done: function done(order) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.$refs.confirm.open('Potwierdź', 'Czy na pewno chcesz się potwierdzić dostarczenie zamówienia?');

              case 2:
                if (!_context3.sent) {
                  _context3.next = 16;
                  break;
                }

                _context3.prev = 3;
                _this3.isLoading = true;
                _context3.next = 7;
                return _this3.$apiOrder.done(order.id);

              case 7:
                _this3.$notifier.showMessage({
                  content: 'Super, zostałeś przypisany do zamówienia!',
                  color: 'green'
                });

                _context3.next = 10;
                return _this3.refreshTable();

              case 10:
                _this3.isLoading = false;
                _context3.next = 16;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](3);

                _this3.handleErrors(_context3.t0);

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[3, 13]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/mixins/TableMixin.js":
/*!*******************************************!*\
  !*** ./resources/js/mixins/TableMixin.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isLoading: false,
      total: 0,
      options: {},
      items: [],
      calls: {
        listing: function () {
          var _listing = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", new Promise());

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function listing() {
            return _listing.apply(this, arguments);
          }

          return listing;
        }()
      }
    };
  },
  watch: {
    options: {
      handler: function handler() {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _this.getDataFromApi();

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      },
      deep: true
    }
  },
  methods: {
    resetTable: function resetTable() {
      this.items = [];
      this.total = 0;
    },
    refreshTable: function refreshTable() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this2.options.page = 1;

                _this2.resetTable();

                _context3.next = 4;
                return _this2.getDataFromApi();

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getDataFromApi: function getDataFromApi() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var _this3$options, sortBy, sortDesc, page, itemsPerPage, _yield$_this3$calls$l, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;

                _this3.resetTable();

                _this3.isLoading = true;
                _this3$options = _this3.options, sortBy = _this3$options.sortBy, sortDesc = _this3$options.sortDesc, page = _this3$options.page, itemsPerPage = _this3$options.itemsPerPage;
                _context4.next = 6;
                return _this3.calls.listing(page, itemsPerPage);

              case 6:
                _yield$_this3$calls$l = _context4.sent;
                data = _yield$_this3$calls$l.data;
                _this3.isLoading = false;
                _context4.next = 11;
                return data.data;

              case 11:
                _this3.items = _context4.sent;
                _this3.total = data.meta.total;
                _context4.next = 18;
                break;

              case 15:
                _context4.prev = 15;
                _context4.t0 = _context4["catch"](0);
                _this3.isLoading = false;

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 15]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Dashboard/Index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Dashboard/Index.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_6633bb48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=6633bb48& */ "./resources/js/components/Dashboard/Index.vue?vue&type=template&id=6633bb48&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Index_vue_vue_type_template_id_6633bb48___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_6633bb48___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Order/Expanded.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Order/Expanded.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Expanded_vue_vue_type_template_id_27bbe0a5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Expanded.vue?vue&type=template&id=27bbe0a5& */ "./resources/js/components/Order/Expanded.vue?vue&type=template&id=27bbe0a5&");
/* harmony import */ var _Expanded_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Expanded.vue?vue&type=script&lang=js& */ "./resources/js/components/Order/Expanded.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Expanded_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Expanded_vue_vue_type_template_id_27bbe0a5___WEBPACK_IMPORTED_MODULE_0__.render,
  _Expanded_vue_vue_type_template_id_27bbe0a5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Order/Expanded.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Order/Free.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Order/Free.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Free_vue_vue_type_template_id_1a3242d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Free.vue?vue&type=template&id=1a3242d8& */ "./resources/js/components/Order/Free.vue?vue&type=template&id=1a3242d8&");
/* harmony import */ var _Free_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Free.vue?vue&type=script&lang=js& */ "./resources/js/components/Order/Free.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Free_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Free_vue_vue_type_template_id_1a3242d8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Free_vue_vue_type_template_id_1a3242d8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Order/Free.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Order/Index.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Order/Index.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_186a8d16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=186a8d16& */ "./resources/js/components/Order/Index.vue?vue&type=template&id=186a8d16&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Order/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Index_vue_vue_type_template_id_186a8d16___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_186a8d16___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Order/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Order/Senior.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Order/Senior.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Senior_vue_vue_type_template_id_2004339c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Senior.vue?vue&type=template&id=2004339c& */ "./resources/js/components/Order/Senior.vue?vue&type=template&id=2004339c&");
/* harmony import */ var _Senior_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Senior.vue?vue&type=script&lang=js& */ "./resources/js/components/Order/Senior.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Senior_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Senior_vue_vue_type_template_id_2004339c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Senior_vue_vue_type_template_id_2004339c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Order/Senior.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Order/Supporter.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Order/Supporter.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Supporter_vue_vue_type_template_id_7587fe00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Supporter.vue?vue&type=template&id=7587fe00& */ "./resources/js/components/Order/Supporter.vue?vue&type=template&id=7587fe00&");
/* harmony import */ var _Supporter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Supporter.vue?vue&type=script&lang=js& */ "./resources/js/components/Order/Supporter.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Supporter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Supporter_vue_vue_type_template_id_7587fe00___WEBPACK_IMPORTED_MODULE_0__.render,
  _Supporter_vue_vue_type_template_id_7587fe00___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Order/Supporter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Order/Expanded.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Order/Expanded.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Expanded_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Expanded.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Expanded.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Expanded_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Order/Free.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Order/Free.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Free_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Free.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Free.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Free_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Order/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Order/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Order/Senior.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Order/Senior.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Senior_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Senior.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Senior.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Senior_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Order/Supporter.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Order/Supporter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Supporter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Supporter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Supporter.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Supporter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Dashboard/Index.vue?vue&type=template&id=6633bb48&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Index.vue?vue&type=template&id=6633bb48& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6633bb48___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6633bb48___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6633bb48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=6633bb48& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Index.vue?vue&type=template&id=6633bb48&");


/***/ }),

/***/ "./resources/js/components/Order/Expanded.vue?vue&type=template&id=27bbe0a5&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Order/Expanded.vue?vue&type=template&id=27bbe0a5& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expanded_vue_vue_type_template_id_27bbe0a5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expanded_vue_vue_type_template_id_27bbe0a5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expanded_vue_vue_type_template_id_27bbe0a5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Expanded.vue?vue&type=template&id=27bbe0a5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Expanded.vue?vue&type=template&id=27bbe0a5&");


/***/ }),

/***/ "./resources/js/components/Order/Free.vue?vue&type=template&id=1a3242d8&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Order/Free.vue?vue&type=template&id=1a3242d8& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Free_vue_vue_type_template_id_1a3242d8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Free_vue_vue_type_template_id_1a3242d8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Free_vue_vue_type_template_id_1a3242d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Free.vue?vue&type=template&id=1a3242d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Free.vue?vue&type=template&id=1a3242d8&");


/***/ }),

/***/ "./resources/js/components/Order/Index.vue?vue&type=template&id=186a8d16&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Order/Index.vue?vue&type=template&id=186a8d16& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_186a8d16___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_186a8d16___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_186a8d16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=186a8d16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Index.vue?vue&type=template&id=186a8d16&");


/***/ }),

/***/ "./resources/js/components/Order/Senior.vue?vue&type=template&id=2004339c&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Order/Senior.vue?vue&type=template&id=2004339c& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Senior_vue_vue_type_template_id_2004339c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Senior_vue_vue_type_template_id_2004339c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Senior_vue_vue_type_template_id_2004339c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Senior.vue?vue&type=template&id=2004339c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Senior.vue?vue&type=template&id=2004339c&");


/***/ }),

/***/ "./resources/js/components/Order/Supporter.vue?vue&type=template&id=7587fe00&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Order/Supporter.vue?vue&type=template&id=7587fe00& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Supporter_vue_vue_type_template_id_7587fe00___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Supporter_vue_vue_type_template_id_7587fe00___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Supporter_vue_vue_type_template_id_7587fe00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Supporter.vue?vue&type=template&id=7587fe00& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Supporter.vue?vue&type=template&id=7587fe00&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Index.vue?vue&type=template&id=6633bb48&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Index.vue?vue&type=template&id=6633bb48& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.isSenior ? _c("OrderComponent") : _vm._e(),
      _vm._v(" "),
      _vm.isSupporter ? _c("FreeComponent") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Expanded.vue?vue&type=template&id=27bbe0a5&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Expanded.vue?vue&type=template&id=27bbe0a5& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.order
    ? _c(
        "v-row",
        { staticClass: "pa-10" },
        [
          _vm.isSupporter || _vm.order.supporter
            ? _c(
                "v-col",
                [
                  _vm.isSupporter
                    ? [
                        _c("h3", [_vm._v("Adres zamawiającego:")]),
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.order.user.first_name) +
                            " " +
                            _vm._s(_vm.order.user.last_name) +
                            " "
                        ),
                        _c("br"),
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.order.user.address) +
                            " "
                        ),
                        _c("br"),
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.order.user.city) +
                            " " +
                            _vm._s(_vm.order.user.postcode) +
                            " "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-overline" }, [
                          _vm._v("Telefon:")
                        ]),
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.order.user.phone) +
                            "\n        "
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isSenior && _vm.order.supporter
                    ? [
                        _c("h3", [_vm._v("Dostarczający:")]),
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.order.supporter.first_name) +
                            " " +
                            _vm._s(_vm.order.supporter.last_name) +
                            " "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-overline" }, [
                          _vm._v("Telefon:")
                        ]),
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.order.supporter.phone) +
                            "\n        "
                        )
                      ]
                    : _vm._e()
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-col",
            [
              _c("h3", [_vm._v("Zamówione produkty:")]),
              _vm._v(" "),
              _c("v-simple-table", {
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function() {
                        return [
                          _c("thead", [
                            _c("tr", [
                              _c("th", { staticClass: "text-left" }),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v(
                                  "\n                        Produkt\n                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v(
                                  "\n                        Cena\n                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v(
                                  "\n                        Ilość\n                    "
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.order.products, function(
                              product,
                              index
                            ) {
                              return _c(
                                "tr",
                                { key: index, staticClass: "pa-2" },
                                [
                                  _c(
                                    "td",
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src: product.image_url,
                                          height: "30",
                                          "aspect-ratio": "1.7"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(product.name))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(product.price) + " PLN")
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      " " +
                                        _vm._s(product.pivot.quantity) +
                                        " " +
                                        _vm._s(product.symbol)
                                    )
                                  ])
                                ]
                              )
                            }),
                            0
                          )
                        ]
                      },
                      proxy: true
                    }
                  ],
                  null,
                  false,
                  2638337011
                )
              })
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Free.vue?vue&type=template&id=1a3242d8&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Free.vue?vue&type=template&id=1a3242d8& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-card",
        { staticClass: "mx-auto", attrs: { loading: _vm.isLoading } },
        [
          _c("v-card-title", { attrs: { dark: "" } }, [
            _vm._v("Wolne zamówienia")
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.items,
                  options: _vm.options,
                  "server-items-length": _vm.total,
                  loading: _vm.isLoading,
                  "item-key": "id",
                  "show-expand": ""
                },
                on: {
                  "update:options": function($event) {
                    _vm.options = $event
                  }
                },
                scopedSlots: _vm._u([
                  {
                    key: "expanded-item",
                    fn: function(ref) {
                      var headers = ref.headers
                      var item = ref.item
                      return [
                        _c(
                          "td",
                          { attrs: { colspan: headers.length } },
                          [_c("ExpandedComponent", { attrs: { id: item.id } })],
                          1
                        )
                      ]
                    }
                  },
                  {
                    key: "item.price",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _vm._v(
                          "\n                    " +
                            _vm._s(item.price) +
                            " PLN\n                "
                        )
                      ]
                    }
                  },
                  {
                    key: "item.user_id",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _vm._v(
                          "\n                    " +
                            _vm._s(item.user.first_name) +
                            " " +
                            _vm._s(item.user.last_name) +
                            "\n                "
                        )
                      ]
                    }
                  },
                  {
                    key: "item.status",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm._f("orderStatus")(item.status)) +
                            "\n                "
                        )
                      ]
                    }
                  },
                  {
                    key: "item.created_at",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm._f("humanDate")(item.created_at)) +
                            "\n                "
                        )
                      ]
                    }
                  },
                  {
                    key: "item.updated_at",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm._f("humanDate")(item.updated_at)) +
                            "\n                "
                        )
                      ]
                    }
                  },
                  {
                    key: "item.actions",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _vm.$aclOrder.canAssign(item, _vm.user)
                          ? [
                              _c(
                                "v-btn",
                                {
                                  attrs: { "x-small": "", color: "success" },
                                  on: {
                                    click: function($event) {
                                      return _vm.assign(item)
                                    }
                                  }
                                },
                                [_vm._v("Zaoferuj się")]
                              )
                            ]
                          : _vm._e()
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-config-dialog", { ref: "confirm" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Index.vue?vue&type=template&id=186a8d16&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Index.vue?vue&type=template&id=186a8d16& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-card",
        { staticClass: "mx-auto", attrs: { loading: _vm.isLoading } },
        [
          _c("v-card-title", { attrs: { dark: "" } }, [
            _vm._v("Moje zamówienia")
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(_vm.component_name, {
                tag: "component",
                on: { setLoading: _vm.setLoading }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Senior.vue?vue&type=template&id=2004339c&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Senior.vue?vue&type=template&id=2004339c& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.items,
          options: _vm.options,
          "server-items-length": _vm.total,
          loading: _vm.isLoading,
          "item-key": "id",
          "show-expand": ""
        },
        on: {
          "update:options": function($event) {
            _vm.options = $event
          }
        },
        scopedSlots: _vm._u([
          {
            key: "expanded-item",
            fn: function(ref) {
              var headers = ref.headers
              var item = ref.item
              return [
                _c(
                  "td",
                  { attrs: { colspan: headers.length } },
                  [_c("ExpandedComponent", { attrs: { id: item.id } })],
                  1
                )
              ]
            }
          },
          {
            key: "item.price",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v("\n            " + _vm._s(item.price) + " PLN\n        ")
              ]
            }
          },
          {
            key: "item.supporter_id",
            fn: function(ref) {
              var item = ref.item
              return [
                item.supporter
                  ? [
                      _vm._v(
                        "\n                " +
                          _vm._s(item.supporter.first_name) +
                          " " +
                          _vm._s(item.supporter.last_name) +
                          "\n            "
                      )
                    ]
                  : [
                      _c("i", { staticClass: "text-caption" }, [
                        _vm._v("Nie wyznaczono")
                      ])
                    ]
              ]
            }
          },
          {
            key: "item.status",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm._f("orderStatus")(item.status)) +
                    "\n        "
                )
              ]
            }
          },
          {
            key: "item.created_at",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm._f("humanDate")(item.created_at)) +
                    "\n        "
                )
              ]
            }
          },
          {
            key: "item.updated_at",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm._f("humanDate")(item.updated_at)) +
                    "\n        "
                )
              ]
            }
          },
          {
            key: "item.actions",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm.$aclOrder.canCancel(item, _vm.user)
                  ? [
                      _c(
                        "v-btn",
                        {
                          attrs: { "x-small": "", color: "error" },
                          on: {
                            click: function($event) {
                              return _vm.cancel(item)
                            }
                          }
                        },
                        [_vm._v("Anuluj")]
                      )
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.$aclOrder.canConfirm(item, _vm.user)
                  ? [
                      _c(
                        "v-btn",
                        {
                          attrs: { "x-small": "", color: "success" },
                          on: {
                            click: function($event) {
                              return _vm.confirm(item)
                            }
                          }
                        },
                        [_vm._v("Potwierdzam dostarczenie")]
                      )
                    ]
                  : _vm._e()
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("v-config-dialog", { ref: "confirm" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Supporter.vue?vue&type=template&id=7587fe00&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Supporter.vue?vue&type=template&id=7587fe00& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.items,
          options: _vm.options,
          "server-items-length": _vm.total,
          loading: _vm.isLoading,
          "item-key": "id",
          "show-expand": ""
        },
        on: {
          "update:options": function($event) {
            _vm.options = $event
          }
        },
        scopedSlots: _vm._u([
          {
            key: "expanded-item",
            fn: function(ref) {
              var headers = ref.headers
              var item = ref.item
              return [
                _c(
                  "td",
                  { attrs: { colspan: headers.length } },
                  [_c("ExpandedComponent", { attrs: { id: item.id } })],
                  1
                )
              ]
            }
          },
          {
            key: "item.price",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v("\n            " + _vm._s(item.price) + " PLN\n        ")
              ]
            }
          },
          {
            key: "item.user_id",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n            " +
                    _vm._s(item.user.first_name) +
                    " " +
                    _vm._s(item.user.last_name) +
                    "\n        "
                )
              ]
            }
          },
          {
            key: "item.status",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm._f("orderStatus")(item.status)) +
                    "\n        "
                )
              ]
            }
          },
          {
            key: "item.created_at",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm._f("humanDate")(item.created_at)) +
                    "\n        "
                )
              ]
            }
          },
          {
            key: "item.updated_at",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm._f("humanDate")(item.updated_at)) +
                    "\n        "
                )
              ]
            }
          },
          {
            key: "item.actions",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm.$aclOrder.canInProgress(item, _vm.user)
                  ? [
                      _c(
                        "v-btn",
                        {
                          attrs: { "x-small": "", dark: "", color: "blue" },
                          on: {
                            click: function($event) {
                              return _vm.inProgress(item)
                            }
                          }
                        },
                        [_vm._v("Jestem w trakcie zakupów")]
                      )
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.$aclOrder.canDone(item, _vm.user)
                  ? [
                      _c(
                        "v-btn",
                        {
                          attrs: { "x-small": "", color: "success" },
                          on: {
                            click: function($event) {
                              return _vm.done(item)
                            }
                          }
                        },
                        [_vm._v("Dostarczyłem zamówienie")]
                      )
                    ]
                  : _vm._e()
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("v-config-dialog", { ref: "confirm" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);