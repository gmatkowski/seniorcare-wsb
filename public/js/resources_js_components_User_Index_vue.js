(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_User_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_mixins_FormMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/mixins/FormMixin */ "./resources/js/mixins/FormMixin.js");
/* harmony import */ var _js_consts_Roles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/consts/Roles */ "./resources/js/consts/Roles.js");
/* harmony import */ var _js_utils_Objects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/js/utils/Objects */ "./resources/js/utils/Objects.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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
  data: function data() {
    return {
      PhoneMask: _js_utils_Objects__WEBPACK_IMPORTED_MODULE_3__.PhoneMask,
      PostcodeMask: _js_utils_Objects__WEBPACK_IMPORTED_MODULE_3__.PostcodeMask,
      showPassword: false,
      form: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: _js_consts_Roles__WEBPACK_IMPORTED_MODULE_2__.SENIOR,
        address: null,
        city: null,
        postcode: null,
        phone: null
      }
    };
  },
  computed: _objectSpread({
    isSenior: function isSenior() {
      return this.$store.getters["auth/isSenior"];
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)({
    user: 'auth/user'
  })),
  mixins: [_js_mixins_FormMixin__WEBPACK_IMPORTED_MODULE_1__.default],
  beforeMount: function beforeMount() {
    this.fillData();
  },
  methods: {
    fillData: function fillData() {
      var _this = this;

      Object.keys(this.form).forEach(function (key) {
        _this.form[key] = _this.user[key];
      });
    },
    handle: function handle() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var form;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _this2.isLoading = true;
                form = new FormData();
                Object.keys(_this2.form).forEach(function (key) {
                  form.append(key, _this2.form[key]);
                });
                _context.next = 6;
                return _this2.$apiUser.update(form);

              case 6:
                _this2.$notifier.showMessage({
                  content: 'Dane został zapisane',
                  color: 'green'
                });

                _this2.isLoading = false;
                _this2.done = true;
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);

                _this2.handleErrors(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/mixins/FormMixin.js":
/*!******************************************!*\
  !*** ./resources/js/mixins/FormMixin.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vee_validate_dist_locale_pl_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vee-validate/dist/locale/pl.json */ "./node_modules/vee-validate/dist/locale/pl.json");
/* harmony import */ var _js_rules_password__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/rules/password */ "./resources/js/rules/password.js");
/* harmony import */ var _js_mixins_ResponseErrorsMixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/mixins/ResponseErrorsMixins */ "./resources/js/mixins/ResponseErrorsMixins.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






Object.keys(vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__).forEach(function (rule) {
  (0,vee_validate__WEBPACK_IMPORTED_MODULE_3__.extend)(rule, _objectSpread(_objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__[rule]), {}, {
    message: vee_validate_dist_locale_pl_json__WEBPACK_IMPORTED_MODULE_4__.messages[rule]
  }));
});
(0,vee_validate__WEBPACK_IMPORTED_MODULE_3__.setInteractionMode)('eager');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_3__.ValidationProvider,
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_3__.ValidationObserver
  },
  data: function data() {
    return {
      isLoading: false
    };
  },
  mixins: [_js_mixins_ResponseErrorsMixins__WEBPACK_IMPORTED_MODULE_1__.default]
});

/***/ }),

/***/ "./resources/js/rules/password.js":
/*!****************************************!*\
  !*** ./resources/js/rules/password.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");

(0,vee_validate__WEBPACK_IMPORTED_MODULE_0__.extend)('password', {
  params: ['target'],
  validate: function validate(value, _ref) {
    var target = _ref.target;
    return value === target;
  },
  message: 'Hasła nie są takie  same'
});

/***/ }),

/***/ "./resources/js/utils/Objects.js":
/*!***************************************!*\
  !*** ./resources/js/utils/Objects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneMask": () => (/* binding */ PhoneMask),
/* harmony export */   "PostcodeMask": () => (/* binding */ PostcodeMask)
/* harmony export */ });
var PhoneMask = {
  properties: function properties(errors) {
    return {
      label: 'Telefon',
      prefix: '',
      suffix: '',
      name: 'phone',
      readonly: false,
      disabled: false,
      outlined: false,
      clearable: true,
      placeholder: 'Telefon',
      'error-messages': errors
    };
  },
  options: {
    inputMask: '(+##) ###-###-###',
    outputMask: '+###########',
    empty: null,
    applyAfter: false,
    alphanumeric: true,
    lowerCase: false
  }
};
var PostcodeMask = {
  properties: function properties(errors) {
    return {
      label: 'Kod pocztowy',
      prefix: '',
      suffix: '',
      name: 'postcode',
      readonly: false,
      disabled: false,
      outlined: false,
      clearable: true,
      placeholder: 'Kod pocztowy',
      'error-messages': errors
    };
  },
  options: {
    inputMask: '##-###',
    outputMask: '##-###',
    empty: null,
    applyAfter: false,
    alphanumeric: true,
    lowerCase: false
  }
};

/***/ }),

/***/ "./node_modules/vee-validate/dist/locale/pl.json":
/*!*******************************************************!*\
  !*** ./node_modules/vee-validate/dist/locale/pl.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"code":"pl","messages":{"alpha":"Pole {_field_} może zawierać tylko litery","alpha_dash":"Pole {_field_} może zawierać litery, cyfry oraz myślnik lub podkreślnik","alpha_num":"Pole {_field_} może zawierać tylko litery i cyfry","alpha_spaces":"Pole {_field_} może zawierać tylko litery oraz spacje","between":"Pole {_field_} musi być pomiędzy {min} oraz {max}","confirmed":"Pole {_field_} nie zgadza się z polem potwierdzającym {target}","digits":"Pole {_field_} musi być liczbą i dokładnie {length} cyfr","dimensions":"Obraz {_field_} musi być szeroki na {width} pikseli i wysoki na {height} pikseli","email":"Pole {_field_} musi być poprawnym adresem email","excluded":"Pole {_field_} musi być poprawną wartością","ext":"Plik {_field_} musi być poprawnym plikiem","image":"Pole {_field_} musi być obrazem","oneOf":"Pole {_field_} musi być poprawną wartością","integer":"Pole {_field_} musi być liczbą całkowitą","length":"Pole {_field_} musi mieć długość {length}","max":"Pole {_field_} nie może być dłuższe niż {length}","max_value":"Pole {_field_} musi mieć maksymalną wartość {max}","mimes":"Plik {_field_} musi posiadać poprawne rozszerzenie","min":"Pole {_field_} musi być długie na co najmniej {length}","min_value":"Pole {_field_} musi mieć minimalną wartość {min}","numeric":"Pole {_field_} może zawierać tylko cyfry","regex":"Format pola {_field_} jest nieodpowiedni","required":"Pole {_field_} jest wymagane","required_if":"Pole {_field_} jest wymagane","size":"Plik {_field_} musi być mniejszy niż {size}KB","double":"Pole {_field_} musi być prawidłową liczbą dziesiętną"}}');

/***/ }),

/***/ "./node_modules/vee-validate/dist/rules.js":
/*!*************************************************!*\
  !*** ./node_modules/vee-validate/dist/rules.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alpha": () => (/* binding */ alpha),
/* harmony export */   "alpha_dash": () => (/* binding */ alpha_dash),
/* harmony export */   "alpha_num": () => (/* binding */ alpha_num),
/* harmony export */   "alpha_spaces": () => (/* binding */ alpha_spaces),
/* harmony export */   "between": () => (/* binding */ between),
/* harmony export */   "confirmed": () => (/* binding */ confirmed),
/* harmony export */   "digits": () => (/* binding */ digits),
/* harmony export */   "dimensions": () => (/* binding */ dimensions),
/* harmony export */   "double": () => (/* binding */ double),
/* harmony export */   "email": () => (/* binding */ email),
/* harmony export */   "excluded": () => (/* binding */ excluded),
/* harmony export */   "ext": () => (/* binding */ ext),
/* harmony export */   "image": () => (/* binding */ image),
/* harmony export */   "integer": () => (/* binding */ integer),
/* harmony export */   "is": () => (/* binding */ is),
/* harmony export */   "is_not": () => (/* binding */ is_not),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "max_value": () => (/* binding */ max_value),
/* harmony export */   "mimes": () => (/* binding */ mimes),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "min_value": () => (/* binding */ min_value),
/* harmony export */   "numeric": () => (/* binding */ numeric),
/* harmony export */   "oneOf": () => (/* binding */ oneOf),
/* harmony export */   "regex": () => (/* binding */ regex),
/* harmony export */   "required": () => (/* binding */ required),
/* harmony export */   "required_if": () => (/* binding */ required_if),
/* harmony export */   "size": () => (/* binding */ size)
/* harmony export */ });
/**
  * vee-validate v3.4.10
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */
/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */
/* eslint-disable no-misleading-character-class */
var alpha$1 = {
    en: /^[A-Z]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[A-ZÆØÅ]*$/i,
    de: /^[A-ZÄÖÜß]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    it: /^[A-Z\xC0-\xFF]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ro: /^[A-ZĂÂÎŞŢ]*$/i,
    ru: /^[А-ЯЁ]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[A-ZČĆŽŠĐ]*$/i,
    sv: /^[A-ZÅÄÖ]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
    az: /^[A-ZÇƏĞİıÖŞÜ]*$/i,
    el: /^[Α-ώ]*$/i,
    ja: /^[A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]*$/i
};
var alphaSpaces = {
    en: /^[A-Z\s]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
    da: /^[A-ZÆØÅ\s]*$/i,
    de: /^[A-ZÄÖÜß\s]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
    it: /^[A-Z\xC0-\xFF\s]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
    ro: /^[A-ZĂÂÎŞŢ\s]*$/i,
    ru: /^[А-ЯЁ\s]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
    sr: /^[A-ZČĆŽŠĐ\s]*$/i,
    sv: /^[A-ZÅÄÖ\s]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
    az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i,
    el: /^[Α-ώ\s]*$/i,
    ja: /^[A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF\s]*$/i
};
var alphanumeric = {
    en: /^[0-9A-Z]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[0-9A-ZÆØÅ]$/i,
    de: /^[0-9A-ZÄÖÜß]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    it: /^[0-9A-Z\xC0-\xFF]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ro: /^[0-9A-ZĂÂÎŞŢ]*$/i,
    ru: /^[0-9А-ЯЁ]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
    sv: /^[0-9A-ZÅÄÖ]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,
    el: /^[0-9Α-ώ]*$/i,
    ja: /^[0-9A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]*$/i
};
var alphaDash = {
    en: /^[0-9A-Z_-]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
    da: /^[0-9A-ZÆØÅ_-]*$/i,
    de: /^[0-9A-ZÄÖÜß_-]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
    it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
    ro: /^[0-9A-ZĂÂÎŞŢ_-]*$/i,
    ru: /^[0-9А-ЯЁ_-]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
    sv: /^[0-9A-ZÅÄÖ_-]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,
    el: /^[0-9Α-ώ_-]*$/i,
    ja: /^[0-9A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF_-]*$/i
};

var validate$r = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$r(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alpha$1).some(function (loc) { return alpha$1[loc].test(value); });
    }
    return (alpha$1[locale] || alpha$1.en).test(value);
};
var params$k = [
    {
        name: 'locale'
    }
];
var alpha = {
    validate: validate$r,
    params: params$k
};

var validate$q = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$q(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphaDash).some(function (loc) { return alphaDash[loc].test(value); });
    }
    return (alphaDash[locale] || alphaDash.en).test(value);
};
var params$j = [
    {
        name: 'locale'
    }
];
var alpha_dash = {
    validate: validate$q,
    params: params$j
};

var validate$p = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$p(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphanumeric).some(function (loc) { return alphanumeric[loc].test(value); });
    }
    return (alphanumeric[locale] || alphanumeric.en).test(value);
};
var params$i = [
    {
        name: 'locale'
    }
];
var alpha_num = {
    validate: validate$p,
    params: params$i
};

var validate$o = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$o(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphaSpaces).some(function (loc) { return alphaSpaces[loc].test(value); });
    }
    return (alphaSpaces[locale] || alphaSpaces.en).test(value);
};
var params$h = [
    {
        name: 'locale'
    }
];
var alpha_spaces = {
    validate: validate$o,
    params: params$h
};

var validate$n = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, min = _b.min, max = _b.max;
    if (Array.isArray(value)) {
        return value.every(function (val) { return !!validate$n(val, { min: min, max: max }); });
    }
    return Number(min) <= value && Number(max) >= value;
};
var params$g = [
    {
        name: 'min'
    },
    {
        name: 'max'
    }
];
var between = {
    validate: validate$n,
    params: params$g
};

var validate$m = function (value, _a) {
    var target = _a.target;
    return String(value) === String(target);
};
var params$f = [
    {
        name: 'target',
        isTarget: true
    }
];
var confirmed = {
    validate: validate$m,
    params: params$f
};

var validate$l = function (value, _a) {
    var length = _a.length;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$l(val, { length: length }); });
    }
    var strVal = String(value);
    return /^[0-9]*$/.test(strVal) && strVal.length === length;
};
var params$e = [
    {
        name: 'length',
        cast: function (value) {
            return Number(value);
        }
    }
];
var digits = {
    validate: validate$l,
    params: params$e
};

var validateImage = function (file, width, height) {
    var URL = window.URL || window.webkitURL;
    return new Promise(function (resolve) {
        var image = new Image();
        image.onerror = function () { return resolve(false); };
        image.onload = function () { return resolve(image.width === width && image.height === height); };
        image.src = URL.createObjectURL(file);
    });
};
var validate$k = function (files, _a) {
    var width = _a.width, height = _a.height;
    var list = [];
    files = Array.isArray(files) ? files : [files];
    for (var i = 0; i < files.length; i++) {
        // if file is not an image, reject.
        if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
            return Promise.resolve(false);
        }
        list.push(files[i]);
    }
    return Promise.all(list.map(function (file) { return validateImage(file, width, height); })).then(function (values) {
        return values.every(function (v) { return v; });
    });
};
var params$d = [
    {
        name: 'width',
        cast: function (value) {
            return Number(value);
        }
    },
    {
        name: 'height',
        cast: function (value) {
            return Number(value);
        }
    }
];
var dimensions = {
    validate: validate$k,
    params: params$d
};

var validate$j = function (value, _a) {
    var multiple = (_a === void 0 ? {} : _a).multiple;
    // eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (multiple && !Array.isArray(value)) {
        value = String(value)
            .split(',')
            .map(function (emailStr) { return emailStr.trim(); });
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return re.test(String(val)); });
    }
    return re.test(String(value));
};
var params$c = [
    {
        name: 'multiple',
        default: false
    }
];
var email = {
    validate: validate$j,
    params: params$c
};

function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
function isEmptyArray(arr) {
    return Array.isArray(arr) && arr.length === 0;
}
// eslint-disable-next-line @typescript-eslint/ban-types
function isCallable(fn) {
    return typeof fn === 'function';
}

function includes(collection, item) {
    return collection.indexOf(item) !== -1;
}
/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */
function toArray(arrayLike) {
    if (isCallable(Array.from)) {
        return Array.from(arrayLike);
    }
    /* istanbul ignore next */
    return _copyArray(arrayLike);
}
/* istanbul ignore next */
function _copyArray(arrayLike) {
    var array = [];
    var length = arrayLike.length;
    for (var i = 0; i < length; i++) {
        array.push(arrayLike[i]);
    }
    return array;
}

var validate$i = function (value, options) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$i(val, options); });
    }
    return toArray(options).some(function (item) {
        // eslint-disable-next-line
        return item == value;
    });
};
var oneOf = {
    validate: validate$i
};

var validate$h = function (value, args) {
    return !validate$i(value, args);
};
var excluded = {
    validate: validate$h
};

var validate$g = function (files, extensions) {
    var regex = new RegExp(".(" + extensions.join('|') + ")$", 'i');
    if (Array.isArray(files)) {
        return files.every(function (file) { return regex.test(file.name); });
    }
    return regex.test(files.name);
};
var ext = {
    validate: validate$g
};

var validate$f = function (files) {
    var regex = /\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i;
    if (Array.isArray(files)) {
        return files.every(function (file) { return regex.test(file.name); });
    }
    return regex.test(files.name);
};
var image = {
    validate: validate$f
};

var validate$e = function (value) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return /^-?[0-9]+$/.test(String(val)); });
    }
    return /^-?[0-9]+$/.test(String(value));
};
var integer = {
    validate: validate$e
};

var validate$d = function (value, _a) {
    var other = _a.other;
    return value === other;
};
var params$b = [
    {
        name: 'other'
    }
];
var is = {
    validate: validate$d,
    params: params$b
};

var validate$c = function (value, _a) {
    var other = _a.other;
    return value !== other;
};
var params$a = [
    {
        name: 'other'
    }
];
var is_not = {
    validate: validate$c,
    params: params$a
};

var validate$b = function (value, _a) {
    var length = _a.length;
    if (isNullOrUndefined(value)) {
        return false;
    }
    if (typeof value === 'string') {
        value = toArray(value);
    }
    if (typeof value === 'number') {
        value = String(value);
    }
    if (!value.length) {
        value = toArray(value);
    }
    return value.length === length;
};
var params$9 = [
    {
        name: 'length',
        cast: function (value) { return Number(value); }
    }
];
var length = {
    validate: validate$b,
    params: params$9
};

var validate$a = function (value, _a) {
    var length = _a.length;
    if (isNullOrUndefined(value)) {
        return length >= 0;
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$a(val, { length: length }); });
    }
    return String(value).length <= length;
};
var params$8 = [
    {
        name: 'length',
        cast: function (value) {
            return Number(value);
        }
    }
];
var max = {
    validate: validate$a,
    params: params$8
};

var validate$9 = function (value, _a) {
    var max = _a.max;
    if (isNullOrUndefined(value) || value === '') {
        return false;
    }
    if (Array.isArray(value)) {
        return value.length > 0 && value.every(function (val) { return validate$9(val, { max: max }); });
    }
    return Number(value) <= max;
};
var params$7 = [
    {
        name: 'max',
        cast: function (value) {
            return Number(value);
        }
    }
];
var max_value = {
    validate: validate$9,
    params: params$7
};

var validate$8 = function (files, mimes) {
    var regex = new RegExp(mimes.join('|').replace('*', '.+') + "$", 'i');
    if (Array.isArray(files)) {
        return files.every(function (file) { return regex.test(file.type); });
    }
    return regex.test(files.type);
};
var mimes = {
    validate: validate$8
};

var validate$7 = function (value, _a) {
    var length = _a.length;
    if (isNullOrUndefined(value)) {
        return false;
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$7(val, { length: length }); });
    }
    return String(value).length >= length;
};
var params$6 = [
    {
        name: 'length',
        cast: function (value) {
            return Number(value);
        }
    }
];
var min = {
    validate: validate$7,
    params: params$6
};

var validate$6 = function (value, _a) {
    var min = _a.min;
    if (isNullOrUndefined(value) || value === '') {
        return false;
    }
    if (Array.isArray(value)) {
        return value.length > 0 && value.every(function (val) { return validate$6(val, { min: min }); });
    }
    return Number(value) >= min;
};
var params$5 = [
    {
        name: 'min',
        cast: function (value) {
            return Number(value);
        }
    }
];
var min_value = {
    validate: validate$6,
    params: params$5
};

var ar = /^[٠١٢٣٤٥٦٧٨٩]+$/;
var en = /^[0-9]+$/;
var validate$5 = function (value) {
    var testValue = function (val) {
        var strValue = String(val);
        return en.test(strValue) || ar.test(strValue);
    };
    if (Array.isArray(value)) {
        return value.every(testValue);
    }
    return testValue(value);
};
var numeric = {
    validate: validate$5
};

var validate$4 = function (value, _a) {
    var regex = _a.regex;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$4(val, { regex: regex }); });
    }
    return regex.test(String(value));
};
var params$4 = [
    {
        name: 'regex',
        cast: function (value) {
            if (typeof value === 'string') {
                return new RegExp(value);
            }
            return value;
        }
    }
];
var regex = {
    validate: validate$4,
    params: params$4
};

var validate$3 = function (value, _a) {
    var allowFalse = (_a === void 0 ? { allowFalse: true } : _a).allowFalse;
    var result = {
        valid: false,
        required: true
    };
    if (isNullOrUndefined(value) || isEmptyArray(value)) {
        return result;
    }
    // incase a field considers `false` as an empty value like checkboxes.
    if (value === false && !allowFalse) {
        return result;
    }
    result.valid = !!String(value).trim().length;
    return result;
};
var computesRequired$1 = true;
var params$3 = [
    {
        name: 'allowFalse',
        default: true
    }
];
var required = {
    validate: validate$3,
    params: params$3,
    computesRequired: computesRequired$1
};

var testEmpty = function (value) {
    return isEmptyArray(value) || includes([false, null, undefined], value) || !String(value).trim().length;
};
var validate$2 = function (value, _a) {
    var target = _a.target, values = _a.values;
    var required;
    if (values && values.length) {
        if (!Array.isArray(values) && typeof values === 'string') {
            values = [values];
        }
        // eslint-disable-next-line
        required = values.some(function (val) { return val == String(target).trim(); });
    }
    else {
        required = !testEmpty(target);
    }
    if (!required) {
        return {
            valid: true,
            required: required
        };
    }
    return {
        valid: !testEmpty(value),
        required: required
    };
};
var params$2 = [
    {
        name: 'target',
        isTarget: true
    },
    {
        name: 'values'
    }
];
var computesRequired = true;
var required_if = {
    validate: validate$2,
    params: params$2,
    computesRequired: computesRequired
};

var validate$1 = function (files, _a) {
    var size = _a.size;
    if (isNaN(size)) {
        return false;
    }
    var nSize = size * 1024;
    if (!Array.isArray(files)) {
        return files.size <= nSize;
    }
    for (var i = 0; i < files.length; i++) {
        if (files[i].size > nSize) {
            return false;
        }
    }
    return true;
};
var params$1 = [
    {
        name: 'size',
        cast: function (value) {
            return Number(value);
        }
    }
];
var size = {
    validate: validate$1,
    params: params$1
};

var validate = function (value, params) {
    var _a = params || {}, _b = _a.decimals, decimals = _b === void 0 ? 0 : _b, _c = _a.separator, separator = _c === void 0 ? 'dot' : _c;
    var separators = {
        dot: '.',
        comma: ','
    };
    var regexPart = +decimals === 0 ? '+' : "{" + decimals + "}";
    var regex = new RegExp("^-?\\d+\\" + (separators[separator] || '.') + "\\d" + regexPart + "$");
    return Array.isArray(value) ? value.every(function (val) { return regex.test(String(val)); }) : regex.test(String(value));
};
var params = [
    {
        name: 'decimals',
        default: 0
    },
    {
        name: 'separator',
        default: 'dot'
    }
];
var double = {
    validate: validate,
    params: params
};




/***/ }),

/***/ "./node_modules/vee-validate/dist/vee-validate.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/vee-validate/dist/vee-validate.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationObserver": () => (/* binding */ ValidationObserver),
/* harmony export */   "ValidationProvider": () => (/* binding */ ValidationProvider),
/* harmony export */   "configure": () => (/* binding */ configure),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "localeChanged": () => (/* binding */ localeChanged),
/* harmony export */   "localize": () => (/* binding */ localize),
/* harmony export */   "normalizeRules": () => (/* binding */ normalizeRules),
/* harmony export */   "setInteractionMode": () => (/* binding */ setInteractionMode),
/* harmony export */   "validate": () => (/* binding */ validate),
/* harmony export */   "version": () => (/* binding */ version),
/* harmony export */   "withValidation": () => (/* binding */ withValidation)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/**
  * vee-validate v3.4.10
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function isNaN(value) {
    // NaN is the one value that does not equal itself.
    // eslint-disable-next-line
    return value !== value;
}
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
function isEmptyArray(arr) {
    return Array.isArray(arr) && arr.length === 0;
}
var isObject = function (obj) {
    return obj !== null && obj && typeof obj === 'object' && !Array.isArray(obj);
};
/**
 * A reference comparison function with NaN support
 */
function isRefEqual(lhs, rhs) {
    if (isNaN(lhs) && isNaN(rhs)) {
        return true;
    }
    return lhs === rhs;
}
// Checks if a given value is not an empty string or null or undefined.
function isSpecified(val) {
    if (val === '') {
        return false;
    }
    return !isNullOrUndefined(val);
}
// eslint-disable-next-line @typescript-eslint/ban-types
function isCallable(fn) {
    return typeof fn === 'function';
}
function isLocator(value) {
    return isCallable(value) && !!value.__locatorRef;
}

function findIndex(arrayLike, predicate) {
    var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
    if (isCallable(array.findIndex)) {
        return array.findIndex(predicate);
    }
    /* istanbul ignore next */
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i], i)) {
            return i;
        }
    }
    /* istanbul ignore next */
    return -1;
}
/**
 * finds the first element that satisfies the predicate callback, polyfills array.find
 */
function find(arrayLike, predicate) {
    var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
    var idx = findIndex(array, predicate);
    return idx === -1 ? undefined : array[idx];
}
function includes(collection, item) {
    return collection.indexOf(item) !== -1;
}
/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */
function toArray(arrayLike) {
    if (isCallable(Array.from)) {
        return Array.from(arrayLike);
    }
    /* istanbul ignore next */
    return _copyArray(arrayLike);
}
/* istanbul ignore next */
function _copyArray(arrayLike) {
    var array = [];
    var length = arrayLike.length;
    for (var i = 0; i < length; i++) {
        array.push(arrayLike[i]);
    }
    return array;
}
function values(obj) {
    if (isCallable(Object.values)) {
        return Object.values(obj);
    }
    // fallback to keys()
    /* istanbul ignore next */
    return Object.keys(obj).map(function (k) { return obj[k]; });
}
function merge(target, source) {
    Object.keys(source).forEach(function (key) {
        if (isObject(source[key])) {
            if (!target[key]) {
                target[key] = {};
            }
            merge(target[key], source[key]);
            return;
        }
        target[key] = source[key];
    });
    return target;
}

function createFlags() {
    return {
        untouched: true,
        touched: false,
        dirty: false,
        pristine: true,
        valid: false,
        invalid: false,
        validated: false,
        pending: false,
        required: false,
        changed: false,
        passed: false,
        failed: false
    };
}

function identity(x) {
    return x;
}
function debounce(fn, wait, token) {
    if (wait === void 0) { wait = 0; }
    if (token === void 0) { token = { cancelled: false }; }
    if (wait === 0) {
        return fn;
    }
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var later = function () {
            timeout = undefined;
            // check if the fn call was cancelled.
            if (!token.cancelled)
                fn.apply(void 0, args);
        };
        // because we might want to use Node.js setTimout for SSR.
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Emits a warning to the console
 */
function warn(message) {
    console.warn("[vee-validate] " + message);
}
/**
 * Replaces placeholder values in a string with their actual values
 */
function interpolate(template, values) {
    return template.replace(/{([^}]+)}/g, function (_, p) {
        return p in values ? values[p] : "{" + p + "}";
    });
}

var RULES = {};
function normalizeSchema(schema) {
    var _a;
    if ((_a = schema.params) === null || _a === void 0 ? void 0 : _a.length) {
        schema.params = schema.params.map(function (param) {
            if (typeof param === 'string') {
                return { name: param };
            }
            return param;
        });
    }
    return schema;
}
var RuleContainer = /** @class */ (function () {
    function RuleContainer() {
    }
    RuleContainer.extend = function (name, schema) {
        // if rule already exists, overwrite it.
        var rule = normalizeSchema(schema);
        if (RULES[name]) {
            RULES[name] = merge(RULES[name], schema);
            return;
        }
        RULES[name] = __assign({ lazy: false, computesRequired: false }, rule);
    };
    RuleContainer.isLazy = function (name) {
        var _a;
        return !!((_a = RULES[name]) === null || _a === void 0 ? void 0 : _a.lazy);
    };
    RuleContainer.isRequireRule = function (name) {
        var _a;
        return !!((_a = RULES[name]) === null || _a === void 0 ? void 0 : _a.computesRequired);
    };
    RuleContainer.getRuleDefinition = function (ruleName) {
        return RULES[ruleName];
    };
    return RuleContainer;
}());
/**
 * Adds a custom validator to the list of validation rules.
 */
function extend(name, schema) {
    // makes sure new rules are properly formatted.
    guardExtend(name, schema);
    // Full schema object.
    if (typeof schema === 'object') {
        RuleContainer.extend(name, schema);
        return;
    }
    RuleContainer.extend(name, {
        validate: schema
    });
}
/**
 * Guards from extension violations.
 */
function guardExtend(name, validator) {
    if (isCallable(validator)) {
        return;
    }
    if (isCallable(validator.validate)) {
        return;
    }
    if (RuleContainer.getRuleDefinition(name)) {
        return;
    }
    throw new Error("Extension Error: The validator '" + name + "' must be a function or have a 'validate' method.");
}

var DEFAULT_CONFIG = {
    defaultMessage: "{_field_} is not valid.",
    skipOptional: true,
    classes: {
        touched: 'touched',
        untouched: 'untouched',
        valid: 'valid',
        invalid: 'invalid',
        pristine: 'pristine',
        dirty: 'dirty' // control has been interacted with
    },
    bails: true,
    mode: 'aggressive',
    useConstraintAttrs: true
};
var currentConfig = __assign({}, DEFAULT_CONFIG);
var getConfig = function () { return currentConfig; };
var setConfig = function (newConf) {
    currentConfig = __assign(__assign({}, currentConfig), newConf);
};
var configure = function (cfg) {
    setConfig(cfg);
};

/**
 * Normalizes the given rules expression.
 */
function normalizeRules(rules) {
    // if falsy value return an empty object.
    var acc = {};
    Object.defineProperty(acc, '_$$isNormalized', {
        value: true,
        writable: false,
        enumerable: false,
        configurable: false
    });
    if (!rules) {
        return acc;
    }
    // Object is already normalized, skip.
    if (isObject(rules) && rules._$$isNormalized) {
        return rules;
    }
    if (isObject(rules)) {
        return Object.keys(rules).reduce(function (prev, curr) {
            var params = [];
            if (rules[curr] === true) {
                params = [];
            }
            else if (Array.isArray(rules[curr])) {
                params = rules[curr];
            }
            else if (isObject(rules[curr])) {
                params = rules[curr];
            }
            else {
                params = [rules[curr]];
            }
            if (rules[curr] !== false) {
                prev[curr] = buildParams(curr, params);
            }
            return prev;
        }, acc);
    }
    /* istanbul ignore if */
    if (typeof rules !== 'string') {
        warn('rules must be either a string or an object.');
        return acc;
    }
    return rules.split('|').reduce(function (prev, rule) {
        var parsedRule = parseRule(rule);
        if (!parsedRule.name) {
            return prev;
        }
        prev[parsedRule.name] = buildParams(parsedRule.name, parsedRule.params);
        return prev;
    }, acc);
}
function buildParams(ruleName, provided) {
    var ruleSchema = RuleContainer.getRuleDefinition(ruleName);
    if (!ruleSchema) {
        return provided;
    }
    var params = {};
    if (!ruleSchema.params && !Array.isArray(provided)) {
        throw new Error('You provided an object params to a rule that has no defined schema.');
    }
    // Rule probably uses an array for their args, keep it as is.
    if (Array.isArray(provided) && !ruleSchema.params) {
        return provided;
    }
    var definedParams;
    // collect the params schema.
    if (!ruleSchema.params || (ruleSchema.params.length < provided.length && Array.isArray(provided))) {
        var lastDefinedParam_1;
        // collect any additional parameters in the last item.
        definedParams = provided.map(function (_, idx) {
            var _a;
            var param = (_a = ruleSchema.params) === null || _a === void 0 ? void 0 : _a[idx];
            lastDefinedParam_1 = param || lastDefinedParam_1;
            if (!param) {
                param = lastDefinedParam_1;
            }
            return param;
        });
    }
    else {
        definedParams = ruleSchema.params;
    }
    // Match the provided array length with a temporary schema.
    for (var i = 0; i < definedParams.length; i++) {
        var options = definedParams[i];
        var value = options.default;
        // if the provided is an array, map element value.
        if (Array.isArray(provided)) {
            if (i in provided) {
                value = provided[i];
            }
        }
        else {
            // If the param exists in the provided object.
            if (options.name in provided) {
                value = provided[options.name];
                // if the provided is the first param value.
            }
            else if (definedParams.length === 1) {
                value = provided;
            }
        }
        // if the param is a target, resolve the target value.
        if (options.isTarget) {
            value = createLocator(value, options.cast);
        }
        // A target param using interpolation
        if (typeof value === 'string' && value[0] === '@') {
            value = createLocator(value.slice(1), options.cast);
        }
        // If there is a transformer defined.
        if (!isLocator(value) && options.cast) {
            value = options.cast(value);
        }
        // already been set, probably multiple values.
        if (params[options.name]) {
            params[options.name] = Array.isArray(params[options.name]) ? params[options.name] : [params[options.name]];
            params[options.name].push(value);
        }
        else {
            // set the value.
            params[options.name] = value;
        }
    }
    return params;
}
/**
 * Parses a rule string expression.
 */
var parseRule = function (rule) {
    var params = [];
    var name = rule.split(':')[0];
    if (includes(rule, ':')) {
        params = rule
            .split(':')
            .slice(1)
            .join(':')
            .split(',');
    }
    return { name: name, params: params };
};
function createLocator(value, castFn) {
    var locator = function (crossTable) {
        var val = crossTable[value];
        return castFn ? castFn(val) : val;
    };
    locator.__locatorRef = value;
    return locator;
}
function extractLocators(params) {
    if (Array.isArray(params)) {
        return params.filter(function (param) {
            return isLocator(param) || (typeof param === 'string' && param[0] === '@');
        });
    }
    return Object.keys(params)
        .filter(function (key) { return isLocator(params[key]); })
        .map(function (key) { return params[key]; });
}

/**
 * Validates a value against the rules.
 */
function validate(value, rules, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var shouldBail, skipIfEmpty, field, result, errors, failedRules, regenerateMap;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    shouldBail = options === null || options === void 0 ? void 0 : options.bails;
                    skipIfEmpty = options === null || options === void 0 ? void 0 : options.skipIfEmpty;
                    field = {
                        name: (options === null || options === void 0 ? void 0 : options.name) || '{field}',
                        rules: normalizeRules(rules),
                        bails: shouldBail !== null && shouldBail !== void 0 ? shouldBail : true,
                        skipIfEmpty: skipIfEmpty !== null && skipIfEmpty !== void 0 ? skipIfEmpty : true,
                        forceRequired: false,
                        crossTable: (options === null || options === void 0 ? void 0 : options.values) || {},
                        names: (options === null || options === void 0 ? void 0 : options.names) || {},
                        customMessages: (options === null || options === void 0 ? void 0 : options.customMessages) || {}
                    };
                    return [4 /*yield*/, _validate(field, value, options)];
                case 1:
                    result = _a.sent();
                    errors = [];
                    failedRules = {};
                    regenerateMap = {};
                    result.errors.forEach(function (e) {
                        var msg = e.msg();
                        errors.push(msg);
                        failedRules[e.rule] = msg;
                        regenerateMap[e.rule] = e.msg;
                    });
                    return [2 /*return*/, {
                            valid: result.valid,
                            required: result.required,
                            errors: errors,
                            failedRules: failedRules,
                            regenerateMap: regenerateMap
                        }];
            }
        });
    });
}
/**
 * Starts the validation process.
 */
function _validate(field, value, _a) {
    var _b = (_a === void 0 ? {} : _a).isInitial, isInitial = _b === void 0 ? false : _b;
    return __awaiter(this, void 0, void 0, function () {
        var _c, shouldSkip, required, errors, rules, length, i, rule, result;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, _shouldSkip(field, value)];
                case 1:
                    _c = _d.sent(), shouldSkip = _c.shouldSkip, required = _c.required, errors = _c.errors;
                    if (shouldSkip) {
                        return [2 /*return*/, {
                                valid: !errors.length,
                                required: required,
                                errors: errors
                            }];
                    }
                    rules = Object.keys(field.rules).filter(function (rule) { return !RuleContainer.isRequireRule(rule); });
                    length = rules.length;
                    i = 0;
                    _d.label = 2;
                case 2:
                    if (!(i < length)) return [3 /*break*/, 5];
                    if (isInitial && RuleContainer.isLazy(rules[i])) {
                        return [3 /*break*/, 4];
                    }
                    rule = rules[i];
                    return [4 /*yield*/, _test(field, value, {
                            name: rule,
                            params: field.rules[rule]
                        })];
                case 3:
                    result = _d.sent();
                    if (!result.valid && result.error) {
                        errors.push(result.error);
                        if (field.bails) {
                            return [2 /*return*/, {
                                    valid: false,
                                    required: required,
                                    errors: errors
                                }];
                        }
                    }
                    _d.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/, {
                        valid: !errors.length,
                        required: required,
                        errors: errors
                    }];
            }
        });
    });
}
function _shouldSkip(field, value) {
    return __awaiter(this, void 0, void 0, function () {
        var requireRules, length, errors, isEmpty, isEmptyAndOptional, isRequired, i, rule, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requireRules = Object.keys(field.rules).filter(RuleContainer.isRequireRule);
                    length = requireRules.length;
                    errors = [];
                    isEmpty = isNullOrUndefined(value) || value === '' || isEmptyArray(value);
                    isEmptyAndOptional = isEmpty && field.skipIfEmpty;
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < length)) return [3 /*break*/, 4];
                    rule = requireRules[i];
                    return [4 /*yield*/, _test(field, value, {
                            name: rule,
                            params: field.rules[rule]
                        })];
                case 2:
                    result = _a.sent();
                    if (!isObject(result)) {
                        throw new Error('Require rules has to return an object (see docs)');
                    }
                    if (result.required !== undefined) {
                        isRequired = result.required;
                    }
                    if (!result.valid && result.error) {
                        errors.push(result.error);
                        // Exit early as the field is required and failed validation.
                        if (field.bails) {
                            return [2 /*return*/, {
                                    shouldSkip: true,
                                    required: result.required,
                                    errors: errors
                                }];
                        }
                    }
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    if (isEmpty && !isRequired && !field.skipIfEmpty) {
                        return [2 /*return*/, {
                                shouldSkip: false,
                                required: isRequired,
                                errors: errors
                            }];
                    }
                    // field is configured to run through the pipeline regardless
                    if (!field.bails && !isEmptyAndOptional) {
                        return [2 /*return*/, {
                                shouldSkip: false,
                                required: isRequired,
                                errors: errors
                            }];
                    }
                    // skip if the field is not required and has an empty value.
                    return [2 /*return*/, {
                            shouldSkip: !isRequired && isEmpty,
                            required: isRequired,
                            errors: errors
                        }];
            }
        });
    });
}
/**
 * Tests a single input value against a rule.
 */
function _test(field, value, rule) {
    return __awaiter(this, void 0, void 0, function () {
        var ruleSchema, normalizedValue, params, result, values_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ruleSchema = RuleContainer.getRuleDefinition(rule.name);
                    if (!ruleSchema || !ruleSchema.validate) {
                        throw new Error("No such validator '" + rule.name + "' exists.");
                    }
                    normalizedValue = ruleSchema.castValue ? ruleSchema.castValue(value) : value;
                    params = fillTargetValues(rule.params, field.crossTable);
                    return [4 /*yield*/, ruleSchema.validate(normalizedValue, params)];
                case 1:
                    result = _a.sent();
                    if (typeof result === 'string') {
                        values_1 = __assign(__assign({}, (params || {})), { _field_: field.name, _value_: value, _rule_: rule.name });
                        return [2 /*return*/, {
                                valid: false,
                                error: { rule: rule.name, msg: function () { return interpolate(result, values_1); } }
                            }];
                    }
                    if (!isObject(result)) {
                        result = { valid: result };
                    }
                    return [2 /*return*/, {
                            valid: result.valid,
                            required: result.required,
                            error: result.valid ? undefined : _generateFieldError(field, value, ruleSchema, rule.name, params)
                        }];
            }
        });
    });
}
/**
 * Generates error messages.
 */
function _generateFieldError(field, value, ruleSchema, ruleName, params) {
    var _a;
    var message = (_a = field.customMessages[ruleName]) !== null && _a !== void 0 ? _a : ruleSchema.message;
    var ruleTargets = _getRuleTargets(field, ruleSchema, ruleName);
    var _b = _getUserTargets(field, ruleSchema, ruleName, message), userTargets = _b.userTargets, userMessage = _b.userMessage;
    var values = __assign(__assign(__assign(__assign({}, (params || {})), { _field_: field.name, _value_: value, _rule_: ruleName }), ruleTargets), userTargets);
    return {
        msg: function () { return _normalizeMessage(userMessage || getConfig().defaultMessage, field.name, values); },
        rule: ruleName
    };
}
function _getRuleTargets(field, ruleSchema, ruleName) {
    var params = ruleSchema.params;
    if (!params) {
        return {};
    }
    var numTargets = params.filter(function (param) { return param.isTarget; }).length;
    if (numTargets <= 0) {
        return {};
    }
    var names = {};
    var ruleConfig = field.rules[ruleName];
    if (!Array.isArray(ruleConfig) && isObject(ruleConfig)) {
        ruleConfig = params.map(function (param) {
            return ruleConfig[param.name];
        });
    }
    for (var index = 0; index < params.length; index++) {
        var param = params[index];
        var key = ruleConfig[index];
        if (!isLocator(key)) {
            continue;
        }
        key = key.__locatorRef;
        var name_1 = field.names[key] || key;
        names[param.name] = name_1;
        names["_" + param.name + "_"] = field.crossTable[key];
    }
    return names;
}
function _getUserTargets(field, ruleSchema, ruleName, userMessage) {
    var userTargets = {};
    var rules = field.rules[ruleName];
    var params = ruleSchema.params || [];
    // early return if no rules
    if (!rules) {
        return {};
    }
    // check all rules to convert targets
    Object.keys(rules).forEach(function (key, index) {
        // get the rule
        var rule = rules[key];
        if (!isLocator(rule)) {
            return {};
        }
        // get associated parameter
        var param = params[index];
        if (!param) {
            return {};
        }
        // grab the name of the target
        var name = rule.__locatorRef;
        userTargets[param.name] = field.names[name] || name;
        userTargets["_" + param.name + "_"] = field.crossTable[name];
    });
    return {
        userTargets: userTargets,
        userMessage: userMessage
    };
}
function _normalizeMessage(template, field, values) {
    if (typeof template === 'function') {
        return template(field, values);
    }
    return interpolate(template, __assign(__assign({}, values), { _field_: field }));
}
function fillTargetValues(params, crossTable) {
    if (Array.isArray(params)) {
        return params.map(function (param) {
            var targetPart = typeof param === 'string' && param[0] === '@' ? param.slice(1) : param;
            if (targetPart in crossTable) {
                return crossTable[targetPart];
            }
            return param;
        });
    }
    var values = {};
    var normalize = function (value) {
        if (isLocator(value)) {
            return value(crossTable);
        }
        return value;
    };
    Object.keys(params).forEach(function (param) {
        values[param] = normalize(params[param]);
    });
    return values;
}

var aggressive = function () { return ({
    on: ['input', 'blur']
}); };
var lazy = function () { return ({
    on: ['change', 'blur']
}); };
var eager = function (_a) {
    var errors = _a.errors;
    if (errors.length) {
        return {
            on: ['input', 'change']
        };
    }
    return {
        on: ['change', 'blur']
    };
};
var passive = function () { return ({
    on: []
}); };
var modes = {
    aggressive: aggressive,
    eager: eager,
    passive: passive,
    lazy: lazy
};
var setInteractionMode = function (mode, implementation) {
    setConfig({ mode: mode });
    if (!implementation) {
        return;
    }
    if (!isCallable(implementation)) {
        throw new Error('A mode implementation must be a function');
    }
    modes[mode] = implementation;
};

var EVENT_BUS = new vue__WEBPACK_IMPORTED_MODULE_0__.default();
function localeChanged() {
    EVENT_BUS.$emit('change:locale');
}

var Dictionary = /** @class */ (function () {
    function Dictionary(locale, dictionary) {
        this.container = {};
        this.locale = locale;
        this.merge(dictionary);
    }
    Dictionary.prototype.resolve = function (field, rule, values) {
        return this.format(this.locale, field, rule, values);
    };
    Dictionary.prototype.format = function (locale, field, rule, values) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message;
        // find if specific message for that field was specified.
        var fieldContainer = (_c = (_b = (_a = this.container[locale]) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b[field]) === null || _c === void 0 ? void 0 : _c[rule];
        var messageContainer = (_e = (_d = this.container[locale]) === null || _d === void 0 ? void 0 : _d.messages) === null || _e === void 0 ? void 0 : _e[rule];
        message = fieldContainer || messageContainer || '';
        if (!message) {
            message = '{_field_} is not valid';
        }
        field = (_h = (_g = (_f = this.container[locale]) === null || _f === void 0 ? void 0 : _f.names) === null || _g === void 0 ? void 0 : _g[field]) !== null && _h !== void 0 ? _h : field;
        return isCallable(message) ? message(field, values) : interpolate(message, __assign(__assign({}, values), { _field_: field }));
    };
    Dictionary.prototype.merge = function (dictionary) {
        merge(this.container, dictionary);
    };
    Dictionary.prototype.hasRule = function (name) {
        var _a, _b;
        return !!((_b = (_a = this.container[this.locale]) === null || _a === void 0 ? void 0 : _a.messages) === null || _b === void 0 ? void 0 : _b[name]);
    };
    return Dictionary;
}());
var DICTIONARY;
function localize(locale, dictionary) {
    var _a;
    if (!DICTIONARY) {
        DICTIONARY = new Dictionary('en', {});
        setConfig({
            defaultMessage: function (field, values) {
                return DICTIONARY.resolve(field, values === null || values === void 0 ? void 0 : values._rule_, values || {});
            }
        });
    }
    if (typeof locale === 'string') {
        DICTIONARY.locale = locale;
        if (dictionary) {
            DICTIONARY.merge((_a = {}, _a[locale] = dictionary, _a));
        }
        localeChanged();
        return;
    }
    DICTIONARY.merge(locale);
}

// do not edit .js files directly - edit src/index.jst



var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

var isEvent = function (evt) {
    if (!evt) {
        return false;
    }
    if (typeof Event !== 'undefined' && isCallable(Event) && evt instanceof Event) {
        return true;
    }
    // this is for IE
    /* istanbul ignore next */
    if (evt && evt.srcElement) {
        return true;
    }
    return false;
};
function normalizeEventValue(value) {
    var _a, _b;
    if (!isEvent(value)) {
        return value;
    }
    var input = value.target;
    if (input.type === 'file' && input.files) {
        return toArray(input.files);
    }
    // If the input has a `v-model.number` modifier applied.
    if ((_a = input._vModifiers) === null || _a === void 0 ? void 0 : _a.number) {
        // as per the spec the v-model.number uses parseFloat
        var valueAsNumber = parseFloat(input.value);
        if (isNaN(valueAsNumber)) {
            return input.value;
        }
        return valueAsNumber;
    }
    if ((_b = input._vModifiers) === null || _b === void 0 ? void 0 : _b.trim) {
        var trimmedValue = typeof input.value === 'string' ? input.value.trim() : input.value;
        return trimmedValue;
    }
    return input.value;
}

var isTextInput = function (vnode) {
    var _a;
    var attrs = ((_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs) || vnode.elm;
    // it will fallback to being a text input per browsers spec.
    if (vnode.tag === 'input' && (!attrs || !attrs.type)) {
        return true;
    }
    if (vnode.tag === 'textarea') {
        return true;
    }
    return includes(['text', 'password', 'search', 'email', 'tel', 'url', 'number'], attrs === null || attrs === void 0 ? void 0 : attrs.type);
};
// export const isCheckboxOrRadioInput = (vnode: VNode): boolean => {
//   const attrs = (vnode.data && vnode.data.attrs) || vnode.elm;
//   return includes(['radio', 'checkbox'], attrs && attrs.type);
// };
// Gets the model object on the vnode.
function findModel(vnode) {
    if (!vnode.data) {
        return undefined;
    }
    // Component Model
    // THIS IS NOT TYPED IN OFFICIAL VUE TYPINGS
    // eslint-disable-next-line
    var nonStandardVNodeData = vnode.data;
    if ('model' in nonStandardVNodeData) {
        return nonStandardVNodeData.model;
    }
    if (!vnode.data.directives) {
        return undefined;
    }
    return find(vnode.data.directives, function (d) { return d.name === 'model'; });
}
function findValue(vnode) {
    var _a, _b;
    var model = findModel(vnode);
    if (model) {
        return { value: model.value };
    }
    var config = findModelConfig(vnode);
    var prop = (config === null || config === void 0 ? void 0 : config.prop) || 'value';
    if (((_a = vnode.componentOptions) === null || _a === void 0 ? void 0 : _a.propsData) && prop in vnode.componentOptions.propsData) {
        var propsDataWithValue = vnode.componentOptions.propsData;
        return { value: propsDataWithValue[prop] };
    }
    if (((_b = vnode.data) === null || _b === void 0 ? void 0 : _b.domProps) && 'value' in vnode.data.domProps) {
        return { value: vnode.data.domProps.value };
    }
    return undefined;
}
function extractChildren(vnode) {
    if (Array.isArray(vnode)) {
        return vnode;
    }
    if (Array.isArray(vnode.children)) {
        return vnode.children;
    }
    /* istanbul ignore next */
    if (vnode.componentOptions && Array.isArray(vnode.componentOptions.children)) {
        return vnode.componentOptions.children;
    }
    return [];
}
function findInputNodes(vnode) {
    if (!Array.isArray(vnode) && findValue(vnode) !== undefined) {
        return [vnode];
    }
    var children = extractChildren(vnode);
    return children.reduce(function (nodes, node) {
        var candidates = findInputNodes(node);
        if (candidates.length) {
            nodes.push.apply(nodes, candidates);
        }
        return nodes;
    }, []);
}
// Resolves v-model config if exists.
function findModelConfig(vnode) {
    /* istanbul ignore next */
    if (!vnode.componentOptions)
        return null;
    // This is also not typed in the standard Vue TS.
    return vnode.componentOptions.Ctor.options.model;
}
// Adds a listener to vnode listener object.
function mergeVNodeListeners(obj, eventName, handler) {
    // no listener at all.
    if (isNullOrUndefined(obj[eventName])) {
        obj[eventName] = [handler];
        return;
    }
    // Is an invoker.
    if (isCallable(obj[eventName]) && obj[eventName].fns) {
        var invoker = obj[eventName];
        invoker.fns = Array.isArray(invoker.fns) ? invoker.fns : [invoker.fns];
        if (!includes(invoker.fns, handler)) {
            invoker.fns.push(handler);
        }
        return;
    }
    if (isCallable(obj[eventName])) {
        var prev = obj[eventName];
        obj[eventName] = [prev];
    }
    if (Array.isArray(obj[eventName]) && !includes(obj[eventName], handler)) {
        obj[eventName].push(handler);
    }
}
// Adds a listener to a native HTML vnode.
function addNativeNodeListener(node, eventName, handler) {
    /* istanbul ignore next */
    if (!node.data) {
        node.data = {};
    }
    if (isNullOrUndefined(node.data.on)) {
        node.data.on = {};
    }
    mergeVNodeListeners(node.data.on, eventName, handler);
}
// Adds a listener to a Vue component vnode.
function addComponentNodeListener(node, eventName, handler) {
    /* istanbul ignore next */
    if (!node.componentOptions) {
        return;
    }
    /* istanbul ignore next */
    if (!node.componentOptions.listeners) {
        node.componentOptions.listeners = {};
    }
    mergeVNodeListeners(node.componentOptions.listeners, eventName, handler);
}
function addVNodeListener(vnode, eventName, handler) {
    if (vnode.componentOptions) {
        addComponentNodeListener(vnode, eventName, handler);
        return;
    }
    addNativeNodeListener(vnode, eventName, handler);
}
// Determines if `change` should be used over `input` for listeners.
function getInputEventName(vnode, model) {
    var _a;
    // Is a component.
    if (vnode.componentOptions) {
        var event_1 = (findModelConfig(vnode) || { event: 'input' }).event;
        return event_1;
    }
    // Lazy Models typically use change event
    if ((_a = model === null || model === void 0 ? void 0 : model.modifiers) === null || _a === void 0 ? void 0 : _a.lazy) {
        return 'change';
    }
    // is a textual-type input.
    if (isTextInput(vnode)) {
        return 'input';
    }
    return 'change';
}
function isHTMLNode(node) {
    return includes(['input', 'select', 'textarea'], node.tag);
}
// TODO: Type this one properly.
function normalizeSlots(slots, ctx) {
    var acc = [];
    return Object.keys(slots).reduce(function (arr, key) {
        slots[key].forEach(function (vnode) {
            if (!vnode.context) {
                slots[key].context = ctx;
                if (!vnode.data) {
                    vnode.data = {};
                }
                vnode.data.slot = key;
            }
        });
        return arr.concat(slots[key]);
    }, acc);
}
function resolveTextualRules(vnode) {
    var _a;
    var attrs = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs;
    var rules = {};
    if (!attrs)
        return rules;
    if (attrs.type === 'email' && RuleContainer.getRuleDefinition('email')) {
        rules.email = ['multiple' in attrs];
    }
    if (attrs.pattern && RuleContainer.getRuleDefinition('regex')) {
        rules.regex = attrs.pattern;
    }
    if (attrs.maxlength >= 0 && RuleContainer.getRuleDefinition('max')) {
        rules.max = attrs.maxlength;
    }
    if (attrs.minlength >= 0 && RuleContainer.getRuleDefinition('min')) {
        rules.min = attrs.minlength;
    }
    if (attrs.type === 'number') {
        if (isSpecified(attrs.min) && RuleContainer.getRuleDefinition('min_value')) {
            rules.min_value = Number(attrs.min);
        }
        if (isSpecified(attrs.max) && RuleContainer.getRuleDefinition('max_value')) {
            rules.max_value = Number(attrs.max);
        }
    }
    return rules;
}
function resolveRules(vnode) {
    var _a;
    var htmlTags = ['input', 'select', 'textarea'];
    var attrs = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs;
    if (!includes(htmlTags, vnode.tag) || !attrs) {
        return {};
    }
    var rules = {};
    if ('required' in attrs && attrs.required !== false && RuleContainer.getRuleDefinition('required')) {
        rules.required = attrs.type === 'checkbox' ? [true] : true;
    }
    if (isTextInput(vnode)) {
        return normalizeRules(__assign(__assign({}, rules), resolveTextualRules(vnode)));
    }
    return normalizeRules(rules);
}
function normalizeChildren(context, slotProps) {
    if (context.$scopedSlots.default) {
        return context.$scopedSlots.default(slotProps) || [];
    }
    return context.$slots.default || [];
}

/**
 * Determines if a provider needs to run validation.
 */
function shouldValidate(ctx, value) {
    // when an immediate/initial validation is needed and wasn't done before.
    if (!ctx._ignoreImmediate && ctx.immediate) {
        return true;
    }
    // when the value changes for whatever reason.
    if (!isRefEqual(ctx.value, value) && ctx.normalizedEvents.length) {
        return true;
    }
    // when it needs validation due to props/cross-fields changes.
    if (ctx._needsValidation) {
        return true;
    }
    // when the initial value is undefined and the field wasn't rendered yet.
    if (!ctx.initialized && value === undefined) {
        return true;
    }
    return false;
}
function createValidationCtx(ctx) {
    return __assign(__assign({}, ctx.flags), { errors: ctx.errors, classes: ctx.classes, failedRules: ctx.failedRules, reset: function () { return ctx.reset(); }, validate: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return ctx.validate.apply(ctx, args);
        }, ariaInput: {
            'aria-invalid': ctx.flags.invalid ? 'true' : 'false',
            'aria-required': ctx.isRequired ? 'true' : 'false',
            'aria-errormessage': "vee_" + ctx.id
        }, ariaMsg: {
            id: "vee_" + ctx.id,
            'aria-live': ctx.errors.length ? 'assertive' : 'off'
        } });
}
function onRenderUpdate(vm, value) {
    if (!vm.initialized) {
        vm.initialValue = value;
    }
    var validateNow = shouldValidate(vm, value);
    vm._needsValidation = false;
    vm.value = value;
    vm._ignoreImmediate = true;
    if (!validateNow) {
        return;
    }
    var validate = function () {
        if (vm.immediate || vm.flags.validated) {
            return triggerThreadSafeValidation(vm);
        }
        vm.validateSilent();
    };
    if (vm.initialized) {
        validate();
        return;
    }
    vm.$once('hook:mounted', function () { return validate(); });
}
function computeModeSetting(ctx) {
    var compute = (isCallable(ctx.mode) ? ctx.mode : modes[ctx.mode]);
    return compute(ctx);
}
function triggerThreadSafeValidation(vm) {
    var pendingPromise = vm.validateSilent();
    // avoids race conditions between successive validations.
    vm._pendingValidation = pendingPromise;
    return pendingPromise.then(function (result) {
        if (pendingPromise === vm._pendingValidation) {
            vm.applyResult(result);
            vm._pendingValidation = undefined;
        }
        return result;
    });
}
// Creates the common handlers for a validatable context.
function createCommonHandlers(vm) {
    if (!vm.$veeOnInput) {
        vm.$veeOnInput = function (e) {
            vm.syncValue(e); // track and keep the value updated.
            vm.setFlags({ dirty: true, pristine: false });
        };
    }
    var onInput = vm.$veeOnInput;
    if (!vm.$veeOnBlur) {
        vm.$veeOnBlur = function () {
            vm.setFlags({ touched: true, untouched: false });
        };
    }
    // Blur event listener.
    var onBlur = vm.$veeOnBlur;
    var onValidate = vm.$veeHandler;
    var mode = computeModeSetting(vm);
    // Handle debounce changes.
    if (!onValidate || vm.$veeDebounce !== vm.debounce) {
        onValidate = debounce(function () {
            vm.$nextTick(function () {
                if (!vm._pendingReset) {
                    triggerThreadSafeValidation(vm);
                }
                vm._pendingReset = false;
            });
        }, mode.debounce || vm.debounce);
        // Cache the handler so we don't create it each time.
        vm.$veeHandler = onValidate;
        // cache the debounce value so we detect if it was changed.
        vm.$veeDebounce = vm.debounce;
    }
    return { onInput: onInput, onBlur: onBlur, onValidate: onValidate };
}
// Adds all plugin listeners to the vnode.
function addListeners(vm, node) {
    var value = findValue(node);
    // cache the input eventName.
    vm._inputEventName = vm._inputEventName || getInputEventName(node, findModel(node));
    onRenderUpdate(vm, value === null || value === void 0 ? void 0 : value.value);
    var _a = createCommonHandlers(vm), onInput = _a.onInput, onBlur = _a.onBlur, onValidate = _a.onValidate;
    addVNodeListener(node, vm._inputEventName, onInput);
    addVNodeListener(node, 'blur', onBlur);
    // add the validation listeners.
    vm.normalizedEvents.forEach(function (evt) {
        addVNodeListener(node, evt, onValidate);
    });
    vm.initialized = true;
}

var PROVIDER_COUNTER = 0;
function data$1() {
    var errors = [];
    var fieldName = '';
    var defaultValues = {
        errors: errors,
        value: undefined,
        initialized: false,
        initialValue: undefined,
        flags: createFlags(),
        failedRules: {},
        isActive: true,
        fieldName: fieldName,
        id: ''
    };
    return defaultValues;
}
var ValidationProvider = vue__WEBPACK_IMPORTED_MODULE_0__.default.extend({
    name: 'ValidationProvider',
    inject: {
        $_veeObserver: {
            from: '$_veeObserver',
            default: function () {
                if (!this.$vnode.context.$_veeObserver) {
                    this.$vnode.context.$_veeObserver = createObserver();
                }
                return this.$vnode.context.$_veeObserver;
            }
        }
    },
    props: {
        vid: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: null
        },
        mode: {
            type: [String, Function],
            default: function () {
                return getConfig().mode;
            }
        },
        rules: {
            type: [Object, String],
            default: null
        },
        immediate: {
            type: Boolean,
            default: false
        },
        bails: {
            type: Boolean,
            default: function () { return getConfig().bails; }
        },
        skipIfEmpty: {
            type: Boolean,
            default: function () { return getConfig().skipOptional; }
        },
        debounce: {
            type: Number,
            default: 0
        },
        tag: {
            type: String,
            default: 'span'
        },
        slim: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        customMessages: {
            type: Object,
            default: function () {
                return {};
            }
        },
        detectInput: {
            type: Boolean,
            default: true
        }
    },
    watch: {
        rules: {
            deep: true,
            handler: function (val, oldVal) {
                this._needsValidation = !fastDeepEqual(val, oldVal);
            }
        }
    },
    data: data$1,
    computed: {
        fieldDeps: function () {
            var _this = this;
            return Object.keys(this.normalizedRules).reduce(function (acc, rule) {
                var deps = extractLocators(_this.normalizedRules[rule]).map(function (dep) {
                    return isLocator(dep) ? dep.__locatorRef : dep.slice(1);
                });
                acc.push.apply(acc, deps);
                deps.forEach(function (depName) {
                    watchCrossFieldDep(_this, depName);
                });
                return acc;
            }, []);
        },
        normalizedEvents: function () {
            var _this = this;
            var on = computeModeSetting(this).on;
            return (on || []).map(function (e) {
                if (e === 'input') {
                    return _this._inputEventName;
                }
                return e;
            });
        },
        isRequired: function () {
            var rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);
            var isRequired = Object.keys(rules).some(RuleContainer.isRequireRule);
            this.flags.required = !!isRequired;
            return isRequired;
        },
        classes: function () {
            var names = getConfig().classes;
            return computeClassObj(names, this.flags);
        },
        normalizedRules: function () {
            return normalizeRules(this.rules);
        }
    },
    mounted: function () {
        var _this = this;
        var onLocaleChanged = function () {
            if (!_this.flags.validated) {
                return;
            }
            var regenerateMap = _this._regenerateMap;
            if (regenerateMap) {
                var errors_1 = [];
                var failedRules_1 = {};
                Object.keys(regenerateMap).forEach(function (rule) {
                    var msg = regenerateMap[rule]();
                    errors_1.push(msg);
                    failedRules_1[rule] = msg;
                });
                _this.applyResult({ errors: errors_1, failedRules: failedRules_1, regenerateMap: regenerateMap });
                return;
            }
            _this.validate();
        };
        EVENT_BUS.$on('change:locale', onLocaleChanged);
        this.$on('hook:beforeDestroy', function () {
            EVENT_BUS.$off('change:locale', onLocaleChanged);
        });
    },
    render: function (h) {
        var _this = this;
        this.registerField();
        var ctx = createValidationCtx(this);
        var children = normalizeChildren(this, ctx);
        // Automatic v-model detection
        if (this.detectInput) {
            var inputs = findInputNodes(children);
            if (inputs.length) {
                inputs.forEach(function (input, idx) {
                    var _a, _b, _c, _d, _e, _f;
                    // If the elements are not checkboxes and there are more input nodes
                    if (!includes(['checkbox', 'radio'], (_b = (_a = input.data) === null || _a === void 0 ? void 0 : _a.attrs) === null || _b === void 0 ? void 0 : _b.type) && idx > 0) {
                        return;
                    }
                    var resolved = getConfig().useConstraintAttrs ? resolveRules(input) : {};
                    if (!fastDeepEqual(_this._resolvedRules, resolved)) {
                        _this._needsValidation = true;
                    }
                    if (isHTMLNode(input)) {
                        _this.fieldName = ((_d = (_c = input.data) === null || _c === void 0 ? void 0 : _c.attrs) === null || _d === void 0 ? void 0 : _d.name) || ((_f = (_e = input.data) === null || _e === void 0 ? void 0 : _e.attrs) === null || _f === void 0 ? void 0 : _f.id);
                    }
                    _this._resolvedRules = resolved;
                    addListeners(_this, input);
                });
            }
        }
        return this.slim && children.length <= 1 ? children[0] : h(this.tag, children);
    },
    beforeDestroy: function () {
        // cleanup reference.
        this.$_veeObserver.unobserve(this.id);
    },
    activated: function () {
        this.isActive = true;
    },
    deactivated: function () {
        this.isActive = false;
    },
    methods: {
        setFlags: function (flags) {
            var _this = this;
            Object.keys(flags).forEach(function (flag) {
                _this.flags[flag] = flags[flag];
            });
        },
        syncValue: function (v) {
            var value = normalizeEventValue(v);
            this.value = value;
            this.flags.changed = !fastDeepEqual(this.initialValue, value);
        },
        reset: function () {
            var _this = this;
            this.errors = [];
            this.initialValue = this.value;
            var flags = createFlags();
            flags.required = this.isRequired;
            this.setFlags(flags);
            this.failedRules = {};
            this.validateSilent();
            this._pendingValidation = undefined;
            this._pendingReset = true;
            setTimeout(function () {
                _this._pendingReset = false;
            }, this.debounce);
        },
        validate: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (args.length > 0) {
                        this.syncValue(args[0]);
                    }
                    return [2 /*return*/, triggerThreadSafeValidation(this)];
                });
            });
        },
        validateSilent: function () {
            return __awaiter(this, void 0, void 0, function () {
                var rules, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.setFlags({ pending: true });
                            rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);
                            Object.defineProperty(rules, '_$$isNormalized', {
                                value: true,
                                writable: false,
                                enumerable: false,
                                configurable: false
                            });
                            return [4 /*yield*/, validate(this.value, rules, __assign(__assign({ name: this.name || this.fieldName }, createLookup(this)), { bails: this.bails, skipIfEmpty: this.skipIfEmpty, isInitial: !this.initialized, customMessages: this.customMessages }))];
                        case 1:
                            result = _a.sent();
                            this.setFlags({
                                pending: false,
                                valid: result.valid,
                                invalid: !result.valid
                            });
                            if (result.required !== undefined) {
                                this.setFlags({
                                    required: result.required
                                });
                            }
                            return [2 /*return*/, result];
                    }
                });
            });
        },
        setErrors: function (errors) {
            this.applyResult({ errors: errors, failedRules: {} });
        },
        applyResult: function (_a) {
            var errors = _a.errors, failedRules = _a.failedRules, regenerateMap = _a.regenerateMap;
            this.errors = errors;
            this._regenerateMap = regenerateMap;
            this.failedRules = __assign({}, (failedRules || {}));
            this.setFlags({
                valid: !errors.length,
                passed: !errors.length,
                invalid: !!errors.length,
                failed: !!errors.length,
                validated: true,
                changed: !fastDeepEqual(this.value, this.initialValue)
            });
        },
        registerField: function () {
            updateRenderingContextRefs(this);
        },
        checkComputesRequiredState: function () {
            var rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);
            var isRequired = Object.keys(rules).some(RuleContainer.isRequireRule);
            return isRequired;
        }
    }
});
function computeClassObj(names, flags) {
    var acc = {};
    var keys = Object.keys(flags);
    var length = keys.length;
    var _loop_1 = function (i) {
        var flag = keys[i];
        var className = (names && names[flag]) || flag;
        var value = flags[flag];
        if (isNullOrUndefined(value)) {
            return "continue";
        }
        if ((flag === 'valid' || flag === 'invalid') && !flags.validated) {
            return "continue";
        }
        if (typeof className === 'string') {
            acc[className] = value;
        }
        else if (Array.isArray(className)) {
            className.forEach(function (cls) {
                acc[cls] = value;
            });
        }
    };
    for (var i = 0; i < length; i++) {
        _loop_1(i);
    }
    return acc;
}
function createLookup(vm) {
    var providers = vm.$_veeObserver.refs;
    var reduced = {
        names: {},
        values: {}
    };
    return vm.fieldDeps.reduce(function (acc, depName) {
        if (!providers[depName]) {
            return acc;
        }
        acc.values[depName] = providers[depName].value;
        acc.names[depName] = providers[depName].name;
        return acc;
    }, reduced);
}
function extractId(vm) {
    if (vm.vid) {
        return vm.vid;
    }
    if (vm.name) {
        return vm.name;
    }
    if (vm.id) {
        return vm.id;
    }
    if (vm.fieldName) {
        return vm.fieldName;
    }
    PROVIDER_COUNTER++;
    return "_vee_" + PROVIDER_COUNTER;
}
function updateRenderingContextRefs(vm) {
    var providedId = extractId(vm);
    var id = vm.id;
    // Nothing has changed.
    if (!vm.isActive || (id === providedId && vm.$_veeObserver.refs[id])) {
        return;
    }
    // vid was changed.
    if (id !== providedId && vm.$_veeObserver.refs[id] === vm) {
        vm.$_veeObserver.unobserve(id);
    }
    vm.id = providedId;
    vm.$_veeObserver.observe(vm);
}
function createObserver() {
    return {
        refs: {},
        observe: function (vm) {
            this.refs[vm.id] = vm;
        },
        unobserve: function (id) {
            delete this.refs[id];
        }
    };
}
function watchCrossFieldDep(ctx, depName, withHooks) {
    if (withHooks === void 0) { withHooks = true; }
    var providers = ctx.$_veeObserver.refs;
    if (!ctx._veeWatchers) {
        ctx._veeWatchers = {};
    }
    if (!providers[depName] && withHooks) {
        return ctx.$once('hook:mounted', function () {
            watchCrossFieldDep(ctx, depName, false);
        });
    }
    if (!isCallable(ctx._veeWatchers[depName]) && providers[depName]) {
        ctx._veeWatchers[depName] = providers[depName].$watch('value', function () {
            var isComputesRequired = ctx.checkComputesRequiredState();
            if (ctx.flags.validated) {
                ctx._needsValidation = true;
                ctx.validate();
            }
            // Validate dependent field silently if it has rules with computesRequired
            if (isComputesRequired && !ctx.flags.validated) {
                ctx.validateSilent();
            }
        });
    }
}

var FLAGS_STRATEGIES = [
    ['pristine', 'every'],
    ['dirty', 'some'],
    ['touched', 'some'],
    ['untouched', 'every'],
    ['valid', 'every'],
    ['invalid', 'some'],
    ['pending', 'some'],
    ['validated', 'every'],
    ['changed', 'some'],
    ['passed', 'every'],
    ['failed', 'some']
];
var OBSERVER_COUNTER = 0;
function data() {
    var refs = {};
    var errors = {};
    var flags = createObserverFlags();
    var fields = {};
    // FIXME: Not sure of this one can be typed, circular type reference.
    var observers = [];
    return {
        id: '',
        refs: refs,
        observers: observers,
        errors: errors,
        flags: flags,
        fields: fields
    };
}
function provideSelf() {
    return {
        $_veeObserver: this
    };
}
var ValidationObserver = vue__WEBPACK_IMPORTED_MODULE_0__.default.extend({
    name: 'ValidationObserver',
    provide: provideSelf,
    inject: {
        $_veeObserver: {
            from: '$_veeObserver',
            default: function () {
                if (!this.$vnode.context.$_veeObserver) {
                    return null;
                }
                return this.$vnode.context.$_veeObserver;
            }
        }
    },
    props: {
        tag: {
            type: String,
            default: 'span'
        },
        vid: {
            type: String,
            default: function () {
                return "obs_" + OBSERVER_COUNTER++;
            }
        },
        slim: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data: data,
    created: function () {
        var _this = this;
        this.id = this.vid;
        register(this);
        var onChange = debounce(function (_a) {
            var errors = _a.errors, flags = _a.flags, fields = _a.fields;
            _this.errors = errors;
            _this.flags = flags;
            _this.fields = fields;
        }, 16);
        this.$watch(computeObserverState, onChange);
    },
    activated: function () {
        register(this);
    },
    deactivated: function () {
        unregister(this);
    },
    beforeDestroy: function () {
        unregister(this);
    },
    render: function (h) {
        var children = normalizeChildren(this, prepareSlotProps(this));
        return this.slim && children.length <= 1 ? children[0] : h(this.tag, { on: this.$listeners }, children);
    },
    methods: {
        observe: function (subscriber, kind) {
            var _a;
            if (kind === void 0) { kind = 'provider'; }
            if (kind === 'observer') {
                this.observers.push(subscriber);
                return;
            }
            this.refs = __assign(__assign({}, this.refs), (_a = {}, _a[subscriber.id] = subscriber, _a));
        },
        unobserve: function (id, kind) {
            if (kind === void 0) { kind = 'provider'; }
            if (kind === 'provider') {
                var provider = this.refs[id];
                if (!provider) {
                    return;
                }
                this.$delete(this.refs, id);
                return;
            }
            var idx = findIndex(this.observers, function (o) { return o.id === id; });
            if (idx !== -1) {
                this.observers.splice(idx, 1);
            }
        },
        validateWithInfo: function (_a) {
            var _b = (_a === void 0 ? {} : _a).silent, silent = _b === void 0 ? false : _b;
            return __awaiter(this, void 0, void 0, function () {
                var results, isValid, _c, errors, flags, fields;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, Promise.all(__spreadArrays(values(this.refs)
                                .filter(function (r) { return !r.disabled; })
                                .map(function (ref) { return ref[silent ? 'validateSilent' : 'validate']().then(function (r) { return r.valid; }); }), this.observers.filter(function (o) { return !o.disabled; }).map(function (obs) { return obs.validate({ silent: silent }); })))];
                        case 1:
                            results = _d.sent();
                            isValid = results.every(function (r) { return r; });
                            _c = computeObserverState.call(this), errors = _c.errors, flags = _c.flags, fields = _c.fields;
                            this.errors = errors;
                            this.flags = flags;
                            this.fields = fields;
                            return [2 /*return*/, {
                                    errors: errors,
                                    flags: flags,
                                    fields: fields,
                                    isValid: isValid
                                }];
                    }
                });
            });
        },
        validate: function (_a) {
            var _b = (_a === void 0 ? {} : _a).silent, silent = _b === void 0 ? false : _b;
            return __awaiter(this, void 0, void 0, function () {
                var isValid;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.validateWithInfo({ silent: silent })];
                        case 1:
                            isValid = (_c.sent()).isValid;
                            return [2 /*return*/, isValid];
                    }
                });
            });
        },
        handleSubmit: function (cb) {
            return __awaiter(this, void 0, void 0, function () {
                var isValid;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.validate()];
                        case 1:
                            isValid = _a.sent();
                            if (!isValid || !cb) {
                                return [2 /*return*/];
                            }
                            return [2 /*return*/, cb()];
                    }
                });
            });
        },
        reset: function () {
            return __spreadArrays(values(this.refs), this.observers).forEach(function (ref) { return ref.reset(); });
        },
        setErrors: function (errors) {
            var _this = this;
            Object.keys(errors).forEach(function (key) {
                var provider = _this.refs[key];
                if (!provider)
                    return;
                var errorArr = errors[key] || [];
                errorArr = typeof errorArr === 'string' ? [errorArr] : errorArr;
                provider.setErrors(errorArr);
            });
            this.observers.forEach(function (observer) {
                observer.setErrors(errors);
            });
        }
    }
});
function unregister(vm) {
    if (vm.$_veeObserver) {
        vm.$_veeObserver.unobserve(vm.id, 'observer');
    }
}
function register(vm) {
    if (vm.$_veeObserver) {
        vm.$_veeObserver.observe(vm, 'observer');
    }
}
function prepareSlotProps(vm) {
    return __assign(__assign({}, vm.flags), { errors: vm.errors, fields: vm.fields, validate: vm.validate, validateWithInfo: vm.validateWithInfo, passes: vm.handleSubmit, handleSubmit: vm.handleSubmit, reset: vm.reset });
}
// Creates a modified version of validation flags
function createObserverFlags() {
    return __assign(__assign({}, createFlags()), { valid: true, invalid: false });
}
function computeObserverState() {
    var vms = __spreadArrays(values(this.refs), this.observers.filter(function (o) { return !o.disabled; }));
    var errors = {};
    var flags = createObserverFlags();
    var fields = {};
    var length = vms.length;
    for (var i = 0; i < length; i++) {
        var vm = vms[i];
        // validation provider
        if (Array.isArray(vm.errors)) {
            errors[vm.id] = vm.errors;
            fields[vm.id] = __assign({ id: vm.id, name: vm.name, failedRules: vm.failedRules }, vm.flags);
            continue;
        }
        // Nested observer, merge errors and fields
        errors = __assign(__assign({}, errors), vm.errors);
        fields = __assign(__assign({}, fields), vm.fields);
    }
    FLAGS_STRATEGIES.forEach(function (_a) {
        var flag = _a[0], method = _a[1];
        flags[flag] = vms[method](function (vm) { return vm.flags[flag]; });
    });
    return { errors: errors, flags: flags, fields: fields };
}

function withValidation(component, mapProps) {
    var _a;
    if (mapProps === void 0) { mapProps = identity; }
    var options = 'options' in component ? component.options : component;
    var providerOpts = ValidationProvider.options;
    var hoc = {
        name: (options.name || 'AnonymousHoc') + "WithValidation",
        props: __assign({}, providerOpts.props),
        data: providerOpts.data,
        computed: __assign({}, providerOpts.computed),
        methods: __assign({}, providerOpts.methods),
        beforeDestroy: providerOpts.beforeDestroy,
        inject: providerOpts.inject
    };
    var eventName = ((_a = options === null || options === void 0 ? void 0 : options.model) === null || _a === void 0 ? void 0 : _a.event) || 'input';
    hoc.render = function (h) {
        var _a;
        this.registerField();
        var vctx = createValidationCtx(this);
        var listeners = __assign({}, this.$listeners);
        var model = findModel(this.$vnode);
        this._inputEventName = this._inputEventName || getInputEventName(this.$vnode, model);
        var value = findValue(this.$vnode);
        onRenderUpdate(this, value === null || value === void 0 ? void 0 : value.value);
        var _b = createCommonHandlers(this), onInput = _b.onInput, onBlur = _b.onBlur, onValidate = _b.onValidate;
        mergeVNodeListeners(listeners, eventName, onInput);
        mergeVNodeListeners(listeners, 'blur', onBlur);
        this.normalizedEvents.forEach(function (evt) {
            mergeVNodeListeners(listeners, evt, onValidate);
        });
        // Props are any attrs not associated with ValidationProvider Plus the model prop.
        // WARNING: Accidental prop overwrite will probably happen.
        var prop = (findModelConfig(this.$vnode) || { prop: 'value' }).prop;
        var props = __assign(__assign(__assign({}, this.$attrs), (_a = {}, _a[prop] = model === null || model === void 0 ? void 0 : model.value, _a)), mapProps(vctx));
        return h(options, {
            attrs: this.$attrs,
            props: props,
            on: listeners,
            scopedSlots: this.$scopedSlots
        }, normalizeSlots(this.$slots, this.$vnode.context));
    };
    return hoc;
}

var version = '3.4.10';




/***/ }),

/***/ "./resources/js/components/User/Index.vue":
/*!************************************************!*\
  !*** ./resources/js/components/User/Index.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_6294eb19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=6294eb19& */ "./resources/js/components/User/Index.vue?vue&type=template&id=6294eb19&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/User/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Index_vue_vue_type_template_id_6294eb19___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_6294eb19___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/User/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/User/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/User/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/User/Index.vue?vue&type=template&id=6294eb19&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/User/Index.vue?vue&type=template&id=6294eb19& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6294eb19___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6294eb19___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6294eb19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=6294eb19& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Index.vue?vue&type=template&id=6294eb19&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Index.vue?vue&type=template&id=6294eb19&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Index.vue?vue&type=template&id=6294eb19& ***!
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
          _c("validation-observer", {
            ref: "observer",
            attrs: { slim: "" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var invalid = ref.invalid
                  var handleSubmit = ref.handleSubmit
                  return [
                    _c(
                      "v-form",
                      {
                        ref: "form",
                        attrs: { disabled: _vm.isLoading },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return handleSubmit(_vm.handle)
                          }
                        }
                      },
                      [
                        _c("v-card-title", { attrs: { dark: "" } }, [
                          _vm._v("Moje dane")
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-card-text",
                          [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: 12 } },
                                  [
                                    _c("validation-provider", {
                                      staticClass: "d-flex",
                                      attrs: {
                                        tag: "div",
                                        vid: "email",
                                        name: "adres email",
                                        rules: "required|email"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-text-field", {
                                                  staticClass:
                                                    "flex-grow-1 mr-md-2",
                                                  attrs: {
                                                    name: "email",
                                                    label: "Adres email",
                                                    "error-messages": errors,
                                                    "persistent-hint": ""
                                                  },
                                                  model: {
                                                    value: _vm.form.email,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "email",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "form.email"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c("validation-provider", {
                                      staticClass: "d-flex",
                                      attrs: {
                                        tag: "div",
                                        vid: "first_name",
                                        name: "imię",
                                        rules: "required"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    "error-messages": errors,
                                                    label: "Imię"
                                                  },
                                                  model: {
                                                    value: _vm.form.first_name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "first_name",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "form.first_name"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c("validation-provider", {
                                      staticClass: "d-flex",
                                      attrs: {
                                        tag: "div",
                                        vid: "last_name",
                                        name: "nazwisko",
                                        rules: "required"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    "error-messages": errors,
                                                    label: "Nazwisko"
                                                  },
                                                  model: {
                                                    value: _vm.form.last_name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "last_name",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "form.last_name"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c("validation-provider", {
                                      staticClass: "d-flex",
                                      attrs: {
                                        tag: "div",
                                        vid: "phone",
                                        name: "telefon",
                                        rules: "required"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-text-field-simplemask", {
                                                  staticClass:
                                                    "flex-grow-1 mr-md-2",
                                                  attrs: {
                                                    properties: _vm.PhoneMask.properties(
                                                      errors
                                                    ),
                                                    options:
                                                      _vm.PhoneMask.options
                                                  },
                                                  model: {
                                                    value: _vm.form.phone,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "phone",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "form.phone"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    }),
                                    _vm._v(" "),
                                    _vm.isSenior
                                      ? [
                                          _c("validation-provider", {
                                            staticClass: "d-flex",
                                            attrs: {
                                              tag: "div",
                                              vid: "address",
                                              name: "adres",
                                              rules: "required"
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function(ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          "error-messages": errors,
                                                          label: "Adres"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.form.address,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.form,
                                                              "address",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "form.address"
                                                        }
                                                      })
                                                    ]
                                                  }
                                                }
                                              ],
                                              null,
                                              true
                                            )
                                          }),
                                          _vm._v(" "),
                                          _c("validation-provider", {
                                            staticClass: "d-flex",
                                            attrs: {
                                              tag: "div",
                                              vid: "city",
                                              name: "miasto",
                                              rules: "required"
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function(ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          "error-messages": errors,
                                                          label: "Miasto"
                                                        },
                                                        model: {
                                                          value: _vm.form.city,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.form,
                                                              "city",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "form.city"
                                                        }
                                                      })
                                                    ]
                                                  }
                                                }
                                              ],
                                              null,
                                              true
                                            )
                                          }),
                                          _vm._v(" "),
                                          _c("validation-provider", {
                                            staticClass: "d-flex",
                                            attrs: {
                                              tag: "div",
                                              vid: "postcode",
                                              name: "kod pocztowy",
                                              rules: "required"
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function(ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c(
                                                        "v-text-field-integer",
                                                        {
                                                          staticClass:
                                                            "flex-grow-1 mr-md-2",
                                                          attrs: {
                                                            properties: _vm.PostcodeMask.properties(
                                                              errors
                                                            ),
                                                            options:
                                                              _vm.PostcodeMask
                                                                .options
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.form.postcode,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.form,
                                                                "postcode",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "form.postcode"
                                                          }
                                                        }
                                                      )
                                                    ]
                                                  }
                                                }
                                              ],
                                              null,
                                              true
                                            )
                                          })
                                        ]
                                      : _vm._e()
                                  ],
                                  2
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-card-actions",
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  type: "submit",
                                  color: "primary px-5",
                                  "x-large": "",
                                  loading: _vm.isLoading,
                                  disabled: _vm.isLoading
                                }
                              },
                              [
                                _vm._v(
                                  "\n                        Zapisz dane\n                    "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);