(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\r\n<ul>\r\n<!--   <li class=\"text\" *ngFor=\"let user of users | async\">\r\n    {{user.name}}\r\n  </li> -->\r\n</ul>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/nav/nav.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/nav/nav.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <nav role=\"navigation\">\n      <div class=\"menuToggle\">\n        <div [class.hamburgerToggle]= \"isNavVisible\" class=\"hamburger\" (click)=\"toggleNav()\">\n            <span class=\"partial-ham hamburger1\" [class.hamburgerToggle1]= \"isNavVisible\"></span>\n            <span class=\"partial-ham hamburger2\" [class.hamburgerToggle2]= \"isNavVisible\"></span>\n            <span class=\"partial-ham hamburger3\" [class.hamburgerToggle3]= \"isNavVisible\"></span>\n        </div>\n        <ul [class.transformToggle]= \"isNavVisible\" class=\"menu\">\n          <li routerLinkActive='active' routerLink= \"/\" [routerLinkActiveOptions]=\"{ exact: true }\">Nobles in range</li>\n          <li routerLinkActive='active' routerLink= \"/tribal-assign-orders\">Assign orders</li>\n          <li routerLinkActive='active' routerLink= \"/best-attack-plan\">Best attack plan</li>\n          <li routerLinkActive='active' routerLink= \"/repetition-counter\">Repetition counter</li>\n          <!-- <li routerLink= \"/\">Kalkulator</li> -->\n        <img class=\"emblem\" src= \"../../assets/394633_large.png\">\n        </ul>\n      </div>\n    </nav>\n</header>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: '', loadChildren: () => Promise.all(/*! import() | tribal-nobles-tribal-nobles-module */[__webpack_require__.e("common"), __webpack_require__.e("tribal-nobles-tribal-nobles-module")]).then(__webpack_require__.bind(null, /*! ./tribal-nobles/tribal-nobles.module */ "./src/app/tribal-nobles/tribal-nobles.module.ts")).then(m => m.TribalNoblesModule) },
    { path: 'tribal-assign-orders',
        loadChildren: () => __webpack_require__.e(/*! import() | tribal-assign-orders-tribal-assign-orders-module */ "tribal-assign-orders-tribal-assign-orders-module").then(__webpack_require__.bind(null, /*! ./tribal-assign-orders/tribal-assign-orders.module */ "./src/app/tribal-assign-orders/tribal-assign-orders.module.ts")).then(m => m.TribalAssignOrdersModule) },
    { path: 'best-attack-plan', loadChildren: () => Promise.all(/*! import() | best-attack-plan-best-attack-plan-module */[__webpack_require__.e("common"), __webpack_require__.e("best-attack-plan-best-attack-plan-module")]).then(__webpack_require__.bind(null, /*! ./best-attack-plan/best-attack-plan.module */ "./src/app/best-attack-plan/best-attack-plan.module.ts")).then(m => m.BestAttackPlanModule) },
    { path: 'repetition-counter',
        loadChildren: () => __webpack_require__.e(/*! import() | repetition-counter-repetition-counter-module */ "repetition-counter-repetition-counter-module").then(__webpack_require__.bind(null, /*! ./repetition-counter/repetition-counter.module */ "./src/app/repetition-counter/repetition-counter.module.ts")).then(m => m.RepetitionCounterModule) },
    { path: '', redirectTo: '', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AppComponent = class AppComponent {
    constructor(firestore, http) {
        this.http = http;
        /* firestore.collection('Users').add({name: 'Marek', surname: 'Kopytko'}); */
    }
};
AppComponent.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/nav/nav.component */ "./src/app/shared/components/nav/nav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/analytics */ "./node_modules/@angular/fire/analytics/es2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm2015/ngx-smart-modal.js");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _shared_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase),
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_16__["AngularFireAnalyticsModule"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuthModule"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_18__["NgxSmartModalModule"].forRoot()
        ],
        providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/shared/components/nav/nav.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/nav/nav.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body.dialog-open {\n  overflow: hidden;\n}\n\n.nsm-dialog-btn-close {\n  border: 0;\n  background: none;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  font-size: 1.2em;\n  cursor: pointer;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: background-color 500ms;\n  transition: background-color 500ms;\n  background-color: transparent;\n  z-index: 999;\n}\n\n.overlay.nsm-overlay-open {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.overlay.transparent {\n  background-color: transparent;\n}\n\n.nsm-dialog {\n  position: relative;\n  opacity: 1;\n  visibility: visible;\n  min-height: 200px;\n  width: 100%;\n  max-width: 520px;\n  margin: 0 auto;\n  pointer-events: none;\n  outline: none;\n}\n\n.nsm-dialog.nsm-dialog-close {\n  opacity: 0;\n}\n\n.nsm-dialog.nsm-centered {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  min-height: calc(100% - (1.75rem * 2));\n}\n\n.nsm-content {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  pointer-events: auto;\n  background-clip: padding-box;\n  background-color: #fff;\n  border-radius: 2px;\n  padding: 1rem;\n  margin-top: 1.75rem;\n  margin-bottom: 1.75rem;\n  margin-left: 1.75rem;\n  margin-right: 1.75rem;\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\n  outline: 0;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.nsm-body {\n  position: relative;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n/* *************************\n* Animations\n* *************************/\n\n.nsm-dialog[class*=nsm-dialog-animation-] {\n  -webkit-transition: opacity 500ms, -webkit-transform 500ms ease-in-out;\n  transition: opacity 500ms, -webkit-transform 500ms ease-in-out;\n  transition: transform 500ms ease-in-out, opacity 500ms;\n  transition: transform 500ms ease-in-out, opacity 500ms, -webkit-transform 500ms ease-in-out;\n}\n\n.nsm-dialog-animation-ltr {\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0);\n}\n\n.nsm-dialog-animation-ltr.nsm-dialog-open {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.nsm-dialog-animation-ltr.nsm-dialog-close {\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0);\n}\n\n.nsm-dialog-animation-rtl {\n  -webkit-transform: translate3d(50%, 0, 0);\n          transform: translate3d(50%, 0, 0);\n}\n\n.nsm-dialog-animation-rtl.nsm-dialog-open {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.nsm-dialog-animation-rtl.nsm-dialog-close {\n  -webkit-transform: translate3d(50%, 0, 0);\n          transform: translate3d(50%, 0, 0);\n}\n\n.nsm-dialog-animation-ttb {\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0);\n}\n\n.nsm-dialog-animation-ttb.nsm-dialog-open {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.nsm-dialog-animation-ttb.nsm-dialog-close {\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0);\n}\n\n.nsm-dialog-animation-btt {\n  -webkit-transform: translate3d(0, 50%, 0);\n          transform: translate3d(0, 50%, 0);\n}\n\n.nsm-dialog-animation-btt.nsm-dialog-open {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.nsm-dialog-animation-btt.nsm-dialog-close {\n  -webkit-transform: translate3d(0, 50%, 0);\n          transform: translate3d(0, 50%, 0);\n}\n\n*,\n*:before,\n*:after {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-size: 18px;\n  min-height: 100vh;\n  font-family: \"Montserrat\";\n  background: whitesmoke;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n.menuToggle {\n  display: block;\n  position: fixed;\n  right: 10px;\n  z-index: 1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.hamburger {\n  top: 10px;\n  width: 50px;\n  height: 50px;\n  border-radius: 15%;\n  cursor: pointer;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  z-index: 1;\n  background-color: #222;\n  -webkit-transition: background-color 0.5s ease-in-out;\n  transition: background-color 0.5s ease-in-out;\n}\n\n.partial-ham {\n  display: block;\n  width: 33px;\n  height: 4px;\n  margin-bottom: 5px;\n  position: relative;\n  background: #cdcdcd;\n  border-radius: 3px;\n  z-index: 1;\n  -webkit-transform-origin: 4px 0px;\n          transform-origin: 4px 0px;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n}\n\n.hamburgerToggle {\n  background-color: transparent;\n}\n\n.hamburger1 {\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%;\n}\n\n.hamburger2 {\n  -webkit-transform-origin: 0% 100%;\n          transform-origin: 0% 100%;\n}\n\n.hamburgerToggle1 {\n  opacity: 1;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  background: #232323;\n}\n\n.hamburgerToggle2 {\n  opacity: 0;\n  -webkit-transform: rotate(0deg) scale(0.2, 0.2);\n          transform: rotate(0deg) scale(0.2, 0.2);\n}\n\n.hamburgerToggle3 {\n  -webkit-transform: translate(-2px, 2px) rotate(-45deg);\n          transform: translate(-2px, 2px) rotate(-45deg);\n  background: #232323;\n}\n\n.menu {\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 230px;\n  height: 100vh;\n  top: 0;\n  margin: 0 0 0 -170px;\n  padding: 60px 0;\n  background: #4291a5;\n  list-style-type: none;\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%;\n  -webkit-transform: translate(100%, 0);\n          transform: translate(100%, 0);\n  -webkit-transition: -webkit-transform 0.5s ease-in-out;\n  transition: -webkit-transform 0.5s ease-in-out;\n  transition: transform 0.5s ease-in-out;\n  transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;\n  box-shadow: 0 0 10px rgba(12, 12, 12, 0.623);\n  will-change: transform;\n}\n\n.menu .emblem {\n  align-self: center;\n  position: absolute;\n  bottom: 10px;\n}\n\n.transformToggle {\n  -webkit-transform: none;\n          transform: none;\n}\n\n.menu li {\n  padding: 5px 0 5px 30px;\n  font-size: 1.3em;\n  font-weight: 500;\n  cursor: pointer;\n  outline: none;\n}\n\n.menu li:hover {\n  box-shadow: 0 0 11px rgba(250, 250, 250, 0.226);\n}\n\n.active {\n  background: rgba(250, 250, 250, 0.226);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2L0U6XFxXb3Jrc3BhY2VcXHBsZW1pb25hXFxUcmliYWxNYW5hZ2VyXFx0cmliYWwtbWFuYWdlci9ub2RlX21vZHVsZXNcXG5neC1zbWFydC1tb2RhbFxcbmd4LXNtYXJ0LW1vZGFsLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25hdi9FOlxcV29ya3NwYWNlXFxwbGVtaW9uYVxcVHJpYmFsTWFuYWdlclxcdHJpYmFsLW1hbmFnZXIvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2L0U6XFxXb3Jrc3BhY2VcXHBsZW1pb25hXFxUcmliYWxNYW5hZ2VyXFx0cmliYWwtbWFuYWdlci9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQkE7RUFDRSxnQkFKMkI7QUNqQjdCOztBRHlCQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUN0QkY7O0FEMEJBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFBQSxrQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ3ZCRjs7QUR5QkU7RUFDRSxvQ0FsRFk7QUMyQmhCOztBRDBCRTtFQUNFLDZCQUFBO0FDeEJKOztBRDZCQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FDMUJGOztBRDZCRTtFQUNFLFVBQUE7QUMzQko7O0FEOEJFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHNDQUFBO0FDNUJKOztBRGdDQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBeEZvQjtFQXlGcEIsc0JBeEZ1QjtFQXlGdkIsb0JBeEZxQjtFQXlGckIscUJBeEZzQjtFQXlGdEIsc0hBQUE7RUFDQSxVQUFBO0VBR0EsdUNBQUE7VUFBQSwrQkFBQTtBQy9CRjs7QURrQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO1VBQUEsY0FBQTtBQy9CRjs7QURrQ0E7OzJCQUFBOztBQUlBO0VBQ0Usc0VBQUE7RUFBQSw4REFBQTtFQUFBLHNEQUFBO0VBQUEsMkZBQUE7QUNoQ0Y7O0FEb0NBO0VBQ0UsMENBQUE7VUFBQSxrQ0FBQTtBQ2pDRjs7QURtQ0U7RUFDRSx1Q0FBQTtVQUFBLCtCQUFBO0FDakNKOztBRG9DRTtFQUNFLDBDQUFBO1VBQUEsa0NBQUE7QUNsQ0o7O0FEdUNBO0VBQ0UseUNBQUE7VUFBQSxpQ0FBQTtBQ3BDRjs7QURzQ0U7RUFDRSx1Q0FBQTtVQUFBLCtCQUFBO0FDcENKOztBRHVDRTtFQUNFLHlDQUFBO1VBQUEsaUNBQUE7QUNyQ0o7O0FEMENBO0VBQ0UsMENBQUE7VUFBQSxrQ0FBQTtBQ3ZDRjs7QUR5Q0U7RUFDRSx1Q0FBQTtVQUFBLCtCQUFBO0FDdkNKOztBRDBDRTtFQUNFLDBDQUFBO1VBQUEsa0NBQUE7QUN4Q0o7O0FENkNBO0VBQ0UseUNBQUE7VUFBQSxpQ0FBQTtBQzFDRjs7QUQ0Q0U7RUFDRSx1Q0FBQTtVQUFBLCtCQUFBO0FDMUNKOztBRDZDRTtFQUNFLHlDQUFBO1VBQUEsaUNBQUE7QUMzQ0o7O0FDakhBOzs7RUFHRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FEb0hGOztBQ2xIQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QURxSEY7O0FDbEhBOztFQUVFLFlBQUE7QURxSEY7O0FFM0lBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FGOElGOztBRTNJQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JEcEJTO0VDcUJULHFEQUFBO0VBQUEsNkNBQUE7QUY4SUY7O0FFM0lBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7QUY4SUY7O0FFM0lBO0VBQ0UsNkJBQUE7QUY4SUY7O0FFM0lBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtBRjhJRjs7QUUzSUE7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0FGOElGOztBRTNJQTtFQUNFLFVBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsbUJBQUE7QUY4SUY7O0FFM0lBO0VBQ0UsVUFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7QUY4SUY7O0FFM0lBO0VBQ0Usc0RBQUE7VUFBQSw4Q0FBQTtFQUNBLG1CQUFBO0FGOElGOztBRTNJQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJEekVLO0VDMEVMLHFCQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSxzREFBQTtFQUFBLDhDQUFBO0VBQUEsc0NBQUE7RUFBQSwwRUFBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7QUY4SUY7O0FFN0lFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUYrSUo7O0FFM0lBO0VBQ0UsdUJBQUE7VUFBQSxlQUFBO0FGOElGOztBRTNJQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FGOElGOztBRTdJRTtFQUNFLCtDQUFBO0FGK0lKOztBRTVJQTtFQUNFLHNDQUFBO0FGK0lGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbG9yIG9mIG92ZXJsYXkgYmFja2dyb3VuZFxuJGNvbG9yLW92ZXJsYXk6IHJnYmEoMCwgMCwgMCwgLjUpICFkZWZhdWx0O1xuXG4vLyBQb3NpdGlvbiBvZiBkaWFsb2dcbiRkaWFsb2ctcG9zaXRpb24tdG9wOiAxLjc1cmVtICFkZWZhdWx0O1xuJGRpYWxvZy1wb3NpdGlvbi1ib3R0b206IDEuNzVyZW0gIWRlZmF1bHQ7XG4kZGlhbG9nLXBvc2l0aW9uLWxlZnQ6IDEuNzVyZW0gIWRlZmF1bHQ7XG4kZGlhbG9nLXBvc2l0aW9uLXJpZ2h0OiAxLjc1cmVtICFkZWZhdWx0O1xuXG4vLyBUcmFuc2l0aW9uIHRpbWVcbi8vICEhIFRoZSBzYW1lIGFzIHRoZSBoaWRlRGVsYXkgdmFyaWFibGUgZGVmaW5lZCBpbiBuZ3gtc21hcnQtbW9kYWwuY29tcG9uZW50LnRzXG4kdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXMgIWRlZmF1bHQ7XG5cbi8vIFRyYW5zaXRpb24gZWZmZWN0XG4vLyBsaW5lYXIgfCBlYXNlIHwgZWFzZS1pbiB8IGVhc2Utb3V0IHwgZWFzZS1pbi1vdXRcbiR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbi8vIEJvZHkgb3ZlcmZsb3cgd2hlbiBhIG1vZGFsIGlzIG9wZW5lZC5cbi8vIFNldCBpdCB0byBgYXV0b2AgaWYgeW91IHdhbnQgdG8gdW5sb2NrIHRoZSBwYWdlIHNjcm9sbCB3aGVuIGEgbW9kYWwgaXMgb3BlbmVkXG4kb3BlbmVkLW1vZGFsLWJvZHktb3ZlcmZsb3c6IGhpZGRlbiAhZGVmYXVsdDtcblxuLy8gQm9keSBpZiBtb2RhbCBpcyBvcGVuZWRcbmJvZHkuZGlhbG9nLW9wZW4ge1xuICBvdmVyZmxvdzogJG9wZW5lZC1tb2RhbC1ib2R5LW92ZXJmbG93O1xufVxuXG4vLyBDbG9zZSBidXR0b24gaW4gbW9kYWxcbi5uc20tZGlhbG9nLWJ0bi1jbG9zZSB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgcmlnaHQ6IDhweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vLyBPdmVybGF5XG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgJHRyYW5zaXRpb24tZHVyYXRpb247XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB6LWluZGV4OiA5OTk7XG5cbiAgJi5uc20tb3ZlcmxheS1vcGVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itb3ZlcmxheTtcbiAgfVxuXG4gICYudHJhbnNwYXJlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbi8vIERpYWxvZyBtb2RhbFxuLm5zbS1kaWFsb2cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1MjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuXG4gIC8vIFdoZW4gZGlhbG9nIGlzIGNsb3NpbmdcbiAgJi5uc20tZGlhbG9nLWNsb3NlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgJi5uc20tY2VudGVyZWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAoMS43NXJlbSAqIDIpKTtcbiAgfVxufVxuXG4ubnNtLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi10b3A6ICRkaWFsb2ctcG9zaXRpb24tdG9wO1xuICBtYXJnaW4tYm90dG9tOiAkZGlhbG9nLXBvc2l0aW9uLWJvdHRvbTtcbiAgbWFyZ2luLWxlZnQ6ICRkaWFsb2ctcG9zaXRpb24tbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAkZGlhbG9nLXBvc2l0aW9uLXJpZ2h0O1xuICBib3gtc2hhZG93OiAwIDdweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIC4yKSwgMCAxM3B4IDE5cHggMnB4IHJnYmEoMCwgMCwgMCwgLjE0KSwgMCA1cHggMjRweCA0cHggcmdiYSgwLCAwLCAwLCAuMTIpO1xuICBvdXRsaW5lOiAwO1xuXG4gIC8vIEZvciBwZXJmb3JtYW5jZSBwdXJwb3NlXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbi5uc20tYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKipcbiogQW5pbWF0aW9uc1xuKiAqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4ubnNtLWRpYWxvZ1tjbGFzcyo9bnNtLWRpYWxvZy1hbmltYXRpb24tXSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAkdHJhbnNpdGlvbi1kdXJhdGlvbiAkdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24sIG9wYWNpdHkgJHRyYW5zaXRpb24tZHVyYXRpb247XG59XG5cbi8vIExlZnQgdG8gcmlnaHQgKGx0cilcbi5uc20tZGlhbG9nLWFuaW1hdGlvbi1sdHIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDAsIDApO1xuXG4gICYubnNtLWRpYWxvZy1vcGVuIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgJi5uc20tZGlhbG9nLWNsb3NlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDAsIDApO1xuICB9XG59XG5cbi8vIFJpZ2h0IHRvIGxlZnQgKGx0cilcbi5uc20tZGlhbG9nLWFuaW1hdGlvbi1ydGwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDUwJSwgMCwgMCk7XG5cbiAgJi5uc20tZGlhbG9nLW9wZW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cblxuICAmLm5zbS1kaWFsb2ctY2xvc2Uge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNTAlLCAwLCAwKTtcbiAgfVxufVxuXG4vLyBUb3AgdG8gYm90dG9tICh0dGIpXG4ubnNtLWRpYWxvZy1hbmltYXRpb24tdHRiIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKTtcblxuICAmLm5zbS1kaWFsb2ctb3BlbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuXG4gICYubnNtLWRpYWxvZy1jbG9zZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKTtcbiAgfVxufVxuXG4vLyBCb3R0b20gdG8gdG9wIChidHQpXG4ubnNtLWRpYWxvZy1hbmltYXRpb24tYnR0IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1MCUsIDApO1xuXG4gICYubnNtLWRpYWxvZy1vcGVuIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgJi5uc20tZGlhbG9nLWNsb3NlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDUwJSwgMCk7XG4gIH1cbn1cbiIsImJvZHkuZGlhbG9nLW9wZW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubnNtLWRpYWxvZy1idG4tY2xvc2Uge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgei1pbmRleDogOTk5O1xufVxuLm92ZXJsYXkubnNtLW92ZXJsYXktb3BlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5vdmVybGF5LnRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5uc20tZGlhbG9nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5uc20tZGlhbG9nLm5zbS1kaWFsb2ctY2xvc2Uge1xuICBvcGFjaXR5OiAwO1xufVxuLm5zbS1kaWFsb2cubnNtLWNlbnRlcmVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gKDEuNzVyZW0gKiAyKSk7XG59XG5cbi5uc20tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luLXRvcDogMS43NXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS43NXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDEuNzVyZW07XG4gIG1hcmdpbi1yaWdodDogMS43NXJlbTtcbiAgYm94LXNoYWRvdzogMCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDEzcHggMTlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA1cHggMjRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgb3V0bGluZTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuLm5zbS1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiBBbmltYXRpb25zXG4qICoqKioqKioqKioqKioqKioqKioqKioqKiovXG4ubnNtLWRpYWxvZ1tjbGFzcyo9bnNtLWRpYWxvZy1hbmltYXRpb24tXSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlLWluLW91dCwgb3BhY2l0eSA1MDBtcztcbn1cblxuLm5zbS1kaWFsb2ctYW5pbWF0aW9uLWx0ciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCwgMCk7XG59XG4ubnNtLWRpYWxvZy1hbmltYXRpb24tbHRyLm5zbS1kaWFsb2ctb3BlbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG4ubnNtLWRpYWxvZy1hbmltYXRpb24tbHRyLm5zbS1kaWFsb2ctY2xvc2Uge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDAsIDApO1xufVxuXG4ubnNtLWRpYWxvZy1hbmltYXRpb24tcnRsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1MCUsIDAsIDApO1xufVxuLm5zbS1kaWFsb2ctYW5pbWF0aW9uLXJ0bC5uc20tZGlhbG9nLW9wZW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuLm5zbS1kaWFsb2ctYW5pbWF0aW9uLXJ0bC5uc20tZGlhbG9nLWNsb3NlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1MCUsIDAsIDApO1xufVxuXG4ubnNtLWRpYWxvZy1hbmltYXRpb24tdHRiIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKTtcbn1cbi5uc20tZGlhbG9nLWFuaW1hdGlvbi10dGIubnNtLWRpYWxvZy1vcGVuIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cbi5uc20tZGlhbG9nLWFuaW1hdGlvbi10dGIubnNtLWRpYWxvZy1jbG9zZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTUwJSwgMCk7XG59XG5cbi5uc20tZGlhbG9nLWFuaW1hdGlvbi1idHQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDUwJSwgMCk7XG59XG4ubnNtLWRpYWxvZy1hbmltYXRpb24tYnR0Lm5zbS1kaWFsb2ctb3BlbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG4ubnNtLWRpYWxvZy1hbmltYXRpb24tYnR0Lm5zbS1kaWFsb2ctY2xvc2Uge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDUwJSwgMCk7XG59XG5cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWVudVRvZ2dsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiAxO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmhhbWJ1cmdlciB7XG4gIHRvcDogMTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLnBhcnRpYWwtaGFtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzM3B4O1xuICBoZWlnaHQ6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNjZGNkY2Q7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5oYW1idXJnZXJUb2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmhhbWJ1cmdlcjEge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcbn1cblxuLmhhbWJ1cmdlcjIge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xufVxuXG4uaGFtYnVyZ2VyVG9nZ2xlMSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYmFja2dyb3VuZDogIzIzMjMyMztcbn1cblxuLmhhbWJ1cmdlclRvZ2dsZTIge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgwLjIsIDAuMik7XG59XG5cbi5oYW1idXJnZXJUb2dnbGUzIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgYmFja2dyb3VuZDogIzIzMjMyMztcbn1cblxuLm1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAyMzBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdG9wOiAwO1xuICBtYXJnaW46IDAgMCAwIC0xNzBweDtcbiAgcGFkZGluZzogNjBweCAwO1xuICBiYWNrZ3JvdW5kOiAjNDI5MWE1O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMTIsIDEyLCAxMiwgMC42MjMpO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufVxuLm1lbnUgLmVtYmxlbSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG59XG5cbi50cmFuc2Zvcm1Ub2dnbGUge1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5tZW51IGxpIHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDMwcHg7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5tZW51IGxpOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDExcHggcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjIyNik7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuMjI2KTtcbn0iLCJAaW1wb3J0IFwifm5neC1zbWFydC1tb2RhbC9uZ3gtc21hcnQtbW9kYWxcIjtcbkBpbXBvcnQgXCJhcHAvYXBwLmNvbXBvbmVudFwiO1xuJGRhcmtHcmV5OiAjMjIyO1xuJGJsdWU6ICM0MjkxYTU7XG4kZGFya0JsdWU6IHJnYigxNiwgOTIsIDExNik7XG4kd2hpdGU6IHJnYigyMzAsIDIzMCwgMjMwKTtcbiRnb2xkLXdoaXRlOiByZ2IoMjQ1LCAyNDEsIDE4NSk7XG4kbGlnaHRncmV5OiByZ2IoNzAsIDcwLCA3MCk7XG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgYmFja2dyb3VuZDogcmdiKDI0NSwgMjQ1LCAyNDUpO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG5cclxuLm1lbnVUb2dnbGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMTBweDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyIHtcclxuICB0b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtHcmV5O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ucGFydGlhbC1oYW0ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAzM3B4O1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogI2NkY2RjZDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgei1pbmRleDogMTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0LFxyXG59XHJcblxyXG4uaGFtYnVyZ2VyVG9nZ2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhhbWJ1cmdlcjEge1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyMiB7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcclxufVxyXG5cclxuLmhhbWJ1cmdlclRvZ2dsZTEge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIGJhY2tncm91bmQ6ICMyMzIzMjM7XHJcbn1cclxuXHJcbi5oYW1idXJnZXJUb2dnbGUyIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDAuMiwgMC4yKTtcclxufVxyXG5cclxuLmhhbWJ1cmdlclRvZ2dsZTMge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCkgcm90YXRlKC00NWRlZyk7XHJcbiAgYmFja2dyb3VuZDogIzIzMjMyMztcclxufVxyXG5cclxuLm1lbnUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgdG9wOiAwO1xyXG4gIG1hcmdpbjogMCAwIDAgLTE3MHB4O1xyXG4gIHBhZGRpbmc6IDYwcHggMDtcclxuICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgxMiwgMTIsIDEyLCAwLjYyMyk7XHJcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAuZW1ibGVtIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi50cmFuc2Zvcm1Ub2dnbGUge1xyXG4gIHRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLm1lbnUgbGkge1xyXG4gIHBhZGRpbmc6IDVweCAwIDVweCAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICAmOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMXB4IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC4yMjYpO1xyXG4gIH1cclxufVxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuMjI2KTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/nav/nav.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/nav/nav.component.ts ***!
  \********************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavComponent = class NavComponent {
    constructor(eRef) {
        this.eRef = eRef;
        this.isNavVisible = false;
        this.toggleNav = () => this.isNavVisible = !this.isNavVisible;
    }
    clickout(target) {
        if (!this.eRef.nativeElement.contains(target) && this.isNavVisible) {
            this.toggleNav();
        }
    }
    ngOnInit() {
    }
};
NavComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event.target'])
], NavComponent.prototype, "clickout", null);
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.scss */ "./src/app/shared/components/nav/nav.component.scss")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







const modules = [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"]];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [...modules],
        exports: [...modules]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AuthService = class AuthService {
    constructor(firestore, http) {
        this.http = http;
    }
};
AuthService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAxBYbMp-uWHYMtf7sdIqr8NAcbYR0q7QA',
        authDomain: 'tribalmanager-f84a4.firebaseapp.com',
        databaseURL: 'https://tribalmanager-f84a4.firebaseio.com',
        projectId: 'tribalmanager-f84a4',
        storageBucket: 'tribalmanager-f84a4.appspot.com',
        messagingSenderId: '759994617108',
        appId: '1:759994617108:web:535d623c95d0edf1814601',
        measurementId: 'G-5EDCZT21MH'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Workspace\plemiona\TribalManager\tribal-manager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map