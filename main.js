(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/nosotros/nosotros.component */ "./src/app/pages/nosotros/nosotros.component.ts");
/* harmony import */ var _pages_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/portafolio/portafolio.component */ "./src/app/pages/portafolio/portafolio.component.ts");
/* harmony import */ var _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/contacto/contacto.component */ "./src/app/pages/contacto/contacto.component.ts");








var routes = [
    {
        path: "home",
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: "services",
        component: _pages_services_services_component__WEBPACK_IMPORTED_MODULE_3__["ServicesComponent"]
    },
    {
        path: "nosotros",
        component: _pages_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_5__["NosotrosComponent"]
    },
    {
        path: "contacto",
        component: _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_7__["ContactoComponent"]
    },
    {
        path: "portafolio",
        component: _pages_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_6__["PortafolioComponent"]
    },
    {
        path: "**",
        pathMatch: "full",
        redirectTo: "home"
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Montserrat:300,600,700&display=swap\" rel=\"stylesheet\">\r\n<app-navigator></app-navigator>\r\n<!-- <app-imagen-movimiento></app-imagen-movimiento> -->\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Vaweei-page';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navigator_navigator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navigator/navigator.component */ "./src/app/components/navigator/navigator.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _components_imagen_movimiento_imagen_movimiento_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/imagen-movimiento/imagen-movimiento.component */ "./src/app/components/imagen-movimiento/imagen-movimiento.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/nosotros/nosotros.component */ "./src/app/pages/nosotros/nosotros.component.ts");
/* harmony import */ var _pages_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/portafolio/portafolio.component */ "./src/app/pages/portafolio/portafolio.component.ts");
/* harmony import */ var _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/contacto/contacto.component */ "./src/app/pages/contacto/contacto.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navigator_navigator_component__WEBPACK_IMPORTED_MODULE_5__["NavigatorComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _pages_services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"],
                _components_imagen_movimiento_imagen_movimiento_component__WEBPACK_IMPORTED_MODULE_8__["ImagenMovimientoComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _pages_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_10__["NosotrosComponent"],
                _pages_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_11__["PortafolioComponent"],
                _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_12__["ContactoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"bottom: 0px; background-color: #011013;\">\r\n  <div class=\"p-5\">\r\n    <h6 style=\"color: white;\"> Todos los derechos reservados </h6>\r\n    <h6 style=\"color: #00A76B;\">vaweei</h6>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/imagen-movimiento/imagen-movimiento.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/imagen-movimiento/imagen-movimiento.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbotones {\r\n  color: black\r\n}\r\n\r\n\r\n.nuevoBoton {\r\n  text-decoration: none;\r\n  padding: 10px;\r\n  font-weight: 300;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-size: 14px;\r\n  color:white;\r\n  background-color: #00A76B;\r\n  /* background-color: #004B45 */\r\n  /* background-color: transparent; */\r\n  border-radius: 10px;\r\n  /* border: 2px solid #004B45; */\r\n  /* background-position-x: 5cm; */\r\n  /* box-shadow: 10px; */\r\n\r\n}\r\n\r\n\r\n.nuevoBoton:hover{\r\n  color:white;\r\n  background-color: #004B45; \r\n  /* border: px rgb(245, 244, 241); */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZW4tbW92aW1pZW50by9pbWFnZW4tbW92aW1pZW50by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFO0FBQ0Y7OztBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0RBQWdEO0VBQ2hELGVBQWU7RUFDZixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsc0JBQXNCOztBQUV4Qjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1DQUFtQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2VuLW1vdmltaWVudG8vaW1hZ2VuLW1vdmltaWVudG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5ib3RvbmVzIHtcclxuICBjb2xvcjogYmxhY2tcclxufVxyXG5cclxuXHJcbi5udWV2b0JvdG9uIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQTc2QjtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0QjQ1ICovXHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAvKiBib3JkZXI6IDJweCBzb2xpZCAjMDA0QjQ1OyAqL1xyXG4gIC8qIGJhY2tncm91bmQtcG9zaXRpb24teDogNWNtOyAqL1xyXG4gIC8qIGJveC1zaGFkb3c6IDEwcHg7ICovXHJcblxyXG59XHJcblxyXG4ubnVldm9Cb3Rvbjpob3ZlcntcclxuICBjb2xvcjp3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0QjQ1OyBcclxuICAvKiBib3JkZXI6IHB4IHJnYigyNDUsIDI0NCwgMjQxKTsgKi9cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/imagen-movimiento/imagen-movimiento.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/imagen-movimiento/imagen-movimiento.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\" >\r\n  <ol class=\"carousel-indicators\" >\r\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\" ></li>\r\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n  </ol>\r\n\r\n  <div class=\"carousel-inner\" >\r\n    <div class=\"carousel-item active\">\r\n\r\n      <img class=\"d-block w-100\" src=\"../../../assets/Vaweeinombre.jpeg\" width=\"600\" height=\"600\" alt=\"First slide\">\r\n      <div class=\"carousel-caption\" style=\"color: white;\">\r\n        <h4>alguna de nuestras tecnologias es express que nos ayuda a tener un control de todo</h4>\r\n         <p>hola mundo</p>\r\n         <button class=\"nuevoBoton\">Contactanos</button>\r\n        </div>\r\n   \r\n    </div>\r\n    <div class=\"carousel-item\">\r\n\r\n      <img class=\"d-block w-100\" src=\"../../../assets/eubg.jpg\" width=\"600\" height=\"600\"\r\n        alt=\"Second slide\">\r\n      <div class=\"carousel-caption\" style=\"color: white;\">\r\n        <h4>alguna de nuestras tecnologias es express que nos ayuda a tener un control de todo</h4>\r\n        <p>hola mundo</p>\r\n        <button class=\"nuevoBoton\">Contactanos</button>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <img class=\"d-block w-100\" src=\"../../../assets/black-friday-buy-credit-card-34577.jpg\" width=\"600\" height=\"600\" alt=\"Third slide\">\r\n      <div class=\"carousel-caption\" style=\"color: white;\">\r\n        <h4>alguna de nuestras tecnologias es express que nos ayuda a tener un control de todo</h4>\r\n        <p>hola mundo</p>\r\n        <button class=\"nuevoBoton\">Contactanos</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/imagen-movimiento/imagen-movimiento.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/imagen-movimiento/imagen-movimiento.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ImagenMovimientoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagenMovimientoComponent", function() { return ImagenMovimientoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImagenMovimientoComponent = /** @class */ (function () {
    function ImagenMovimientoComponent() {
    }
    ImagenMovimientoComponent.prototype.ngOnInit = function () {
    };
    ImagenMovimientoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-imagen-movimiento',
            template: __webpack_require__(/*! ./imagen-movimiento.component.html */ "./src/app/components/imagen-movimiento/imagen-movimiento.component.html"),
            styles: [__webpack_require__(/*! ./imagen-movimiento.component.css */ "./src/app/components/imagen-movimiento/imagen-movimiento.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImagenMovimientoComponent);
    return ImagenMovimientoComponent;
}());



/***/ }),

/***/ "./src/app/components/navigator/navigator.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/navigator/navigator.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n  background-color: #f2f1f0;\r\n}\r\n/* The side navigation menu */\r\n.sidenav {\r\n  height: 100%; /* 100% Full-height */\r\n  width: 0; /* 0 width - change this with JavaScript */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Stay on top */\r\n  top: 0; /* Stay at the top */\r\n  left: 0;\r\n  background-color: #111; /* Black*/\r\n  overflow-x: hidden; /* Disable horizontal scroll */\r\n  padding-top: 60px; /* Place content 60px from the top */\r\n  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\r\n}\r\n/* The navigation menu links */\r\n.sidenav a {\r\n  padding: 8px 8px 8px 32px;\r\n  text-decoration: none;\r\n  font-size: 25px;\r\n  color: #818181;\r\n  display: block;\r\n  transition: 0.1s;\r\n}\r\n/* When you mouse over the navigation links, change their color */\r\n.sidenav a:hover {\r\n  color: #f1f1f1;\r\n}\r\n/* Position and style the close button (top right corner) */\r\n.sidenav .closebtn {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n/* Style page content - use this if you want to push the page content to the right when you open the side navigation */\r\n#main {\r\n  transition: margin-left 0.5s;\r\n  padding: 20px;\r\n}\r\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {\r\n    padding-top: 15px;\r\n  }\r\n  .sidenav a {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0b3IvbmF2aWdhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQSw2QkFBNkI7QUFDN0I7RUFDRSxZQUFZLEVBQUUscUJBQXFCO0VBQ25DLFFBQVEsRUFBRSwwQ0FBMEM7RUFDcEQsZUFBZSxFQUFFLGtCQUFrQjtFQUNuQyxVQUFVLEVBQUUsZ0JBQWdCO0VBQzVCLE1BQU0sRUFBRSxvQkFBb0I7RUFDNUIsT0FBTztFQUNQLHNCQUFzQixFQUFFLFNBQVM7RUFDakMsa0JBQWtCLEVBQUUsOEJBQThCO0VBQ2xELGlCQUFpQixFQUFFLG9DQUFvQztFQUN2RCxnQkFBZ0IsRUFBRSx5REFBeUQ7QUFDN0U7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBLGlFQUFpRTtBQUNqRTtFQUNFLGNBQWM7QUFDaEI7QUFFQSwyREFBMkQ7QUFDM0Q7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBRUEsc0hBQXNIO0FBQ3RIO0VBQ0UsNEJBQTRCO0VBQzVCLGFBQWE7QUFDZjtBQUVBLGdJQUFnSTtBQUNoSTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRvci9uYXZpZ2F0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjFmMDtcclxufVxyXG4vKiBUaGUgc2lkZSBuYXZpZ2F0aW9uIG1lbnUgKi9cclxuLnNpZGVuYXYge1xyXG4gIGhlaWdodDogMTAwJTsgLyogMTAwJSBGdWxsLWhlaWdodCAqL1xyXG4gIHdpZHRoOiAwOyAvKiAwIHdpZHRoIC0gY2hhbmdlIHRoaXMgd2l0aCBKYXZhU2NyaXB0ICovXHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgei1pbmRleDogMTsgLyogU3RheSBvbiB0b3AgKi9cclxuICB0b3A6IDA7IC8qIFN0YXkgYXQgdGhlIHRvcCAqL1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTsgLyogQmxhY2sqL1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogRGlzYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4OyAvKiBQbGFjZSBjb250ZW50IDYwcHggZnJvbSB0aGUgdG9wICovXHJcbiAgdHJhbnNpdGlvbjogMC41czsgLyogMC41IHNlY29uZCB0cmFuc2l0aW9uIGVmZmVjdCB0byBzbGlkZSBpbiB0aGUgc2lkZW5hdiAqL1xyXG59XHJcblxyXG4vKiBUaGUgbmF2aWdhdGlvbiBtZW51IGxpbmtzICovXHJcbi5zaWRlbmF2IGEge1xyXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogIzgxODE4MTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiAwLjFzO1xyXG59XHJcblxyXG4vKiBXaGVuIHlvdSBtb3VzZSBvdmVyIHRoZSBuYXZpZ2F0aW9uIGxpbmtzLCBjaGFuZ2UgdGhlaXIgY29sb3IgKi9cclxuLnNpZGVuYXYgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi8qIFBvc2l0aW9uIGFuZCBzdHlsZSB0aGUgY2xvc2UgYnV0dG9uICh0b3AgcmlnaHQgY29ybmVyKSAqL1xyXG4uc2lkZW5hdiAuY2xvc2VidG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4vKiBTdHlsZSBwYWdlIGNvbnRlbnQgLSB1c2UgdGhpcyBpZiB5b3Ugd2FudCB0byBwdXNoIHRoZSBwYWdlIGNvbnRlbnQgdG8gdGhlIHJpZ2h0IHdoZW4geW91IG9wZW4gdGhlIHNpZGUgbmF2aWdhdGlvbiAqL1xyXG4jbWFpbiB7XHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC41cztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4vKiBPbiBzbWFsbGVyIHNjcmVlbnMsIHdoZXJlIGhlaWdodCBpcyBsZXNzIHRoYW4gNDUwcHgsIGNoYW5nZSB0aGUgc3R5bGUgb2YgdGhlIHNpZGVuYXYgKGxlc3MgcGFkZGluZyBhbmQgYSBzbWFsbGVyIGZvbnQgc2l6ZSkgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgLnNpZGVuYXYge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgfVxyXG4gIC5zaWRlbmF2IGEge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/navigator/navigator.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/navigator/navigator.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-light \" *ngIf=\"bigWindow\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"['home']\">\r\n    <!-- <img src=\"../../../assets/logo-nav.png\" alt=\"\" width=\"125.5\" height=\"40.986\" /> -->\r\n    <img\r\n      src=\"../../../assets/logo-nav-2.png\"\r\n      alt=\"\"\r\n      width=\"91.335\"\r\n      height=\"29.828\"\r\n    />\r\n  </a>\r\n\r\n  <ul class=\"navbar-nav\">\r\n    <li class=\"nav-item\">\r\n       <a class=\"nav-link\" [routerLink]=\"['home']\"><img src=\"../../../assets/home.png\" alt=\"\"> Home</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [routerLink]=\"['nosotros']\"><img src=\"../../../assets/team.png\" alt=\"\"> Nosotros</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [routerLink]=\"['services']\"><img src=\"../../../assets/bookmark-service.png\" alt=\"\"> Servicios</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [routerLink]=\"['portafolio']\"><img src=\"../../../assets/briefcase.png\" alt=\"\"> Portafolio</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [routerLink]=\"['contacto']\"><img src=\"../../../assets/contact.png\" alt=\"\"> Contacto</a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n\r\n<nav class=\"col-12 p-3 clearfix\" *ngIf=\"smallWindow\">\r\n  <div class=\"float-left\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['home']\">\r\n      <img\r\n        src=\"../../../assets/logo.png\"\r\n        alt=\"\"\r\n        width=\"150.335\"\r\n        height=\"49.828\"\r\n      />\r\n    </a>\r\n  </div>\r\n  <div class=\"float-right\">\r\n    <i\r\n      class=\"fas fa-bars fa-lg \"\r\n      style=\"color: #00A76B;\"\r\n      (click)=\"openNav()\"\r\n    ></i>\r\n  </div>\r\n</nav>\r\n\r\n<div id=\"mySidenav\" class=\"sidenav\">\r\n  <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\r\n  <a [routerLink]=\"['home']\" (click)=\"closeNav()\">Home</a>\r\n  <a [routerLink]=\"['nosotros']\" (click)=\"closeNav()\">Nosotros</a>\r\n  <a [routerLink]=\"['services']\" (click)=\"closeNav()\">Servicios</a>\r\n  <a [routerLink]=\"['portafolio']\" (click)=\"closeNav()\">Portafolio</a>\r\n  <a [routerLink]=\"['contacto']\" (click)=\"closeNav()\">contacto</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/navigator/navigator.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/navigator/navigator.component.ts ***!
  \*************************************************************/
/*! exports provided: NavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorComponent", function() { return NavigatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigatorComponent = /** @class */ (function () {
    function NavigatorComponent() {
        this.bigWindow = false;
        this.smallWindow = false;
    }
    NavigatorComponent.prototype.ngOnInit = function () {
        if (window.innerWidth < 400) { //detectar el tamaño de la pantalla para editar la tabla
            this.bigWindow = false;
            this.smallWindow = true;
        }
        else {
            this.bigWindow = true;
            this.smallWindow = false;
        }
    };
    NavigatorComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 400) { //detectar el tamaño de la pantalla para editar la tabla
            this.bigWindow = false;
            this.smallWindow = true;
        }
        else {
            this.bigWindow = true;
            this.smallWindow = false;
        }
    };
    NavigatorComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
    };
    NavigatorComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NavigatorComponent.prototype, "onResize", null);
    NavigatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigator',
            template: __webpack_require__(/*! ./navigator.component.html */ "./src/app/components/navigator/navigator.component.html"),
            styles: [__webpack_require__(/*! ./navigator.component.css */ "./src/app/components/navigator/navigator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigatorComponent);
    return NavigatorComponent;
}());



/***/ }),

/***/ "./src/app/pages/contacto/contacto.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/contacto/contacto.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.bg-img {\r\n  /* The image used */\r\n  background: url('contactanos.jpg') no-repeat\r\n    center fixed;\r\n\r\n  /* Control the height of the image */\r\n  min-height: 620px;\r\n\r\n  /* Center and scale the image nicely */\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n/* Add styles to the form container */\r\n\r\n.container {\r\n  position: absolute;\r\n  right: 0;\r\n  margin: 20px;\r\n  max-width: 400px;\r\n  padding: 16px;\r\n  background-color: white;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=\"text\"],\r\ninput[type=\"password\"],\r\ninput[type=\"email\"],\r\ninput[type=\"number\"] {\r\n  width: 100%;\r\n  padding: 8px;\r\n  margin: 5px 0 22px 0;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"password\"]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\n#area :focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\n/* Set a style for the submit button */\r\n\r\n.button {\r\n  padding: 10px 20px;\r\n  font-size: 24px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  outline: none;\r\n  color: #fff;\r\n  background-color: #4caf50;\r\n  border: none;\r\n  border-radius: 15px;\r\n  box-shadow: 0 7px #999;\r\n  position: initial;\r\n}\r\n\r\n.button:hover {\r\n  background-color: #3e8e41;\r\n}\r\n\r\n.button:active {\r\n  background-color: #3e8e41;\r\n  box-shadow: 0 5px #666;\r\n  transform: translateY(4px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkI7Z0JBQ2M7O0VBRWQsb0NBQW9DO0VBQ3BDLGlCQUFpQjs7RUFFakIsc0NBQXNDO0VBQ3RDLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQSxxQ0FBcUM7O0FBQ3JDO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUEsNEJBQTRCOztBQUM1Qjs7OztFQUlFLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUEsc0NBQXNDOztBQUN0QztFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3RvL2NvbnRhY3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LFxyXG5odG1sIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5iZy1pbWcge1xyXG4gIC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2NvbnRhY3Rhbm9zLmpwZ1wiKSBuby1yZXBlYXRcclxuICAgIGNlbnRlciBmaXhlZDtcclxuXHJcbiAgLyogQ29udHJvbCB0aGUgaGVpZ2h0IG9mIHRoZSBpbWFnZSAqL1xyXG4gIG1pbi1oZWlnaHQ6IDYyMHB4O1xyXG5cclxuICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLyogQWRkIHN0eWxlcyB0byB0aGUgZm9ybSBjb250YWluZXIgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbmlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcclxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiNhcmVhIDpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdCBidXR0b24gKi9cclxuLmJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiAwIDdweCAjOTk5O1xyXG4gIHBvc2l0aW9uOiBpbml0aWFsO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO1xyXG59XHJcblxyXG4uYnV0dG9uOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcclxuICBib3gtc2hhZG93OiAwIDVweCAjNjY2O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/contacto/contacto.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/contacto/contacto.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-img\">\r\n  <form action=\"/action_page.php\" class=\"container\">\r\n    <h2>Contactanos</h2>\r\n\r\n    <label for=\"Nombre\"><b>Nombre Completo</b></label>\r\n    <input type=\"text\" placeholder=\"ingresa tu Nombre\" name=\"nombre\" required />\r\n\r\n    <label for=\"email\"><b>Email</b></label>\r\n    <input type=\"email\" placeholder=\"Ingresa tu Correo\" name=\"email\" required />\r\n\r\n    <label for=\"telefono\"><b>Telefono</b></label>\r\n    <input\r\n      type=\"number\"\r\n      placeholder=\"Ingresa tu Telefono\"\r\n      name=\"email\"\r\n      required\r\n    />\r\n\r\n    <label for=\"texto\"><b>mensaje</b></label>\r\n    <textarea\r\n      for=\"mensaje\"\r\n      placeholder=\"Ingresa tu Mensaje\"\r\n      class=\"area\"\r\n      rows=\"5\"\r\n      cols=\"40\"\r\n      required\r\n    ></textarea>\r\n\r\n   \r\n\r\n    <button class=\"button\">enviar</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/contacto/contacto.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/contacto/contacto.component.ts ***!
  \******************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactoComponent = /** @class */ (function () {
    function ContactoComponent() {
    }
    ContactoComponent.prototype.ngOnInit = function () {
    };
    ContactoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacto',
            template: __webpack_require__(/*! ./contacto.component.html */ "./src/app/pages/contacto/contacto.component.html"),
            styles: [__webpack_require__(/*! ./contacto.component.css */ "./src/app/pages/contacto/contacto.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactoComponent);
    return ContactoComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#landing-service {\r\n  background: url('Landing-Page-Design-Dynamic-Text.png')\r\n    no-repeat center fixed;\r\n  padding-top: 150px;\r\n  padding-bottom: 250px;\r\n}\r\n#contenedor {\r\n  background: url('blur-connection-ecommerce.jpg') no-repeat\r\n    center fixed;\r\n  background-size: cover;\r\n  width: 100%;\r\n  padding: 50px;\r\n  background-size: cover;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n#div-img-responsive-design {\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n#img-responsive-design {\r\n  position: absolute;\r\n  width: 100%;\r\n  bottom: 0px;\r\n  right: 0px;\r\n}\r\n.ecommerce-text {\r\n  color: white;\r\n  margin: auto;\r\n}\r\n#ecommerce-btn {\r\n  margin-top: 50px;\r\n}\r\n.elemento {\r\n  margin: 20px;\r\n  padding: 20px;\r\n  width: 30%;\r\n  background: #01211e;\r\n  border-radius: 10px;\r\n  color: white;\r\n}\r\n#contenedor-responsive {\r\n  height: 300px;\r\n}\r\n#titulo-responsive,\r\n#parrafo-responsive {\r\n  padding: 20px;\r\n}\r\n/* Responsive */\r\n@media screen and (max-height: 450px) {\r\n  .ecommerce-text h1 {\r\n    font-size: 25px;\r\n  }\r\n  .elemento {\r\n    margin: 20px;\r\n    padding: 20px;\r\n    width: 100%;\r\n    background: #01211e;\r\n    border-radius: 10px;\r\n    color: white;\r\n  }\r\n\r\n  #titulo-responsive {\r\n    padding: 5px;\r\n  }\r\n\r\n  #parrafo-responsive {\r\n    padding: 5px;\r\n    font-size: 10px;\r\n  }\r\n\r\n  #landing-service {\r\n    padding-top: 20px;\r\n    padding-bottom: 50px;\r\n  }\r\n\r\n  #contenedor-responsive {\r\n    height: 100px;\r\n  }\r\n\r\n  #img-responsive-design {\r\n    right: -30px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTswQkFDd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0U7Z0JBQ2M7RUFDZCxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUVBOztFQUVFLGFBQWE7QUFDZjtBQUVBLGVBQWU7QUFFZjtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xhbmRpbmctc2VydmljZSB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL0xhbmRpbmctUGFnZS1EZXNpZ24tRHluYW1pYy1UZXh0LnBuZ1wiKVxyXG4gICAgbm8tcmVwZWF0IGNlbnRlciBmaXhlZDtcclxuICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDI1MHB4O1xyXG59XHJcbiNjb250ZW5lZG9yIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmx1ci1jb25uZWN0aW9uLWVjb21tZXJjZS5qcGdcIikgbm8tcmVwZWF0XHJcbiAgICBjZW50ZXIgZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4jZGl2LWltZy1yZXNwb25zaXZlLWRlc2lnbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jaW1nLXJlc3BvbnNpdmUtZGVzaWduIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxufVxyXG4uZWNvbW1lcmNlLXRleHQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbiNlY29tbWVyY2UtYnRuIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uZWxlbWVudG8ge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgYmFja2dyb3VuZDogIzAxMjExZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jY29udGVuZWRvci1yZXNwb25zaXZlIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4jdGl0dWxvLXJlc3BvbnNpdmUsXHJcbiNwYXJyYWZvLXJlc3BvbnNpdmUge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4gIC5lY29tbWVyY2UtdGV4dCBoMSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG4gIC5lbGVtZW50byB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDEyMTFlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gICN0aXR1bG8tcmVzcG9uc2l2ZSB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuICAjcGFycmFmby1yZXNwb25zaXZlIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcblxyXG4gICNsYW5kaW5nLXNlcnZpY2Uge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICB9XHJcblxyXG4gICNjb250ZW5lZG9yLXJlc3BvbnNpdmUge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcblxyXG4gICNpbWctcmVzcG9uc2l2ZS1kZXNpZ24ge1xyXG4gICAgcmlnaHQ6IC0zMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- PAGINAS WEB -->\r\n  <div  class=\"container col-12\" style=\"background-color: #003136;\" >\r\n    <div id=\"landing-service\" class=\"row px-2\">\r\n        <div class=\"col col-11 col-md-7 m-2 p-3 shadow\" style=\"background-color: rgba(0, 0, 0, .5); color: white; border-radius: 10px;\" >\r\n          <h1>Desarrollo web</h1>\r\n          <p>Profesionales en desarrollo web, orgullosamente nayaritas.</p>\r\n          <button class=\"btn btn-success\">Contactanos</button>\r\n        </div>\r\n        <div id=\"cuadro2\" class=\"col col-11 col-md-4 m-2 p-3 shadow\" style=\"background-color: rgba(0, 0, 0, .5); color: white; border-radius: 10px;\">\r\n          <h1>Cotizaciones</h1>\r\n          <p>6 años de experciencia nos respaldan, tenemos un paquete para ti.</p>\r\n        </div>\r\n    </div>\r\n    <!-- jumbotrom -->\r\n    <div class=\"row px-2 py-2\" style=\"background-color: #f2f1f0;\">\r\n      <div class=\"col\">\r\n          <h1>Nayarit </h1>\r\n          <p>Residimos en Tepic Nayarit</p>\r\n      </div>\r\n    </div>\r\n  </div> \r\n\r\n\r\n<!-- ECCOMERCE -->\r\n<div id=\"contenedor\">\r\n  <div class=\"ecommerce-text\">\r\n      <h1>e-commerce.</h1>\r\n      <p>Te ayudamos a dar ese gran paso.</p>\r\n      <button id=\"ecommerce-btn\" class=\"btn btn-success\">Contactanos</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container col-12 col-md-12\" style=\"background-color: #003136\">\r\n    <!-- 3 ELEMENTOS -->\r\n    <div class=\"row\">\r\n\r\n        <div class=\"elemento\">\r\n            <img class=\"card-img-top\" src=\"../../../assets/cloud-computing.png\" alt=\"Card image\">\r\n            <div class=\"card-body\">\r\n              <h4 class=\"card-title\">Servicios Cloud</h4>\r\n              <p class=\"card-text\">Aumenta la seguridad y disponibilidad de tu información almacenando los datos en la nube.</p>\r\n              <a href=\"https://www.redhat.com/es/topics/cloud\" class=\"btn btn-primary\">Qué son los servicios cloud?</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"elemento\">\r\n            <img class=\"card-img-top\" src=\"../../../assets/chatbot.png\" alt=\"Card image\">\r\n            <div class=\"card-body\">\r\n              <h4 class=\"card-title\">ChatBot</h4>\r\n              <p class=\"card-text\">Brinda atención y soporte las 24 horas los 365 días del año.</p>\r\n              <a href=\"https://www.40defiebre.com/que-es/chatbot\" class=\"btn btn-primary\">Qué es un chatbot?</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"elemento\">\r\n            <img class=\"card-img-top\" src=\"../../../assets/target.png\" alt=\"Card image\">\r\n            <div class=\"card-body\">\r\n              <h4 class=\"card-title\">Posicionamiento SEO</h4>\r\n              <p class=\"card-text\">Aprovecha al máximo los medios digitales de comunicacion y convierte esos clientes potenciales en clientes seguros.</p>\r\n              <a href=\"https://www.40defiebre.com/guia-seo/que-es-seo-por-que-necesito\" class=\"btn btn-primary\">Googlear</a>\r\n            </div>\r\n        </div>\r\n  \r\n    </div>\r\n</div>\r\n\r\n  <!-- DISEÑO RESPONSIVO -->\r\n  \r\n<div class=\"container col-12\">\r\n  \r\n    <div id=\"titulo-responsive\" class=\"row col-12 col-md-12\">\r\n        <h2>Responsive Desing</h2>\r\n    </div>\r\n\r\n    <div class=\"row\" id=\"contenedor-responsive\">\r\n\r\n        <div class=\"row col-12\">\r\n          <div id=\"parrafo-responsive\" class=\"col col-2 col-md-5\">\r\n            <p>Muestra tu sitio web en todos los dispositivos.</p>\r\n          </div>\r\n          <div id=\"div-img-responsive-design\" class=\"col col-10 col-md-7\">\r\n            <img id=\"img-responsive-design\" src=\"../../../assets/responsive-design.png\" alt=\"\">\r\n          </div>\r\n        </div>\r\n    \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/nosotros/nosotros.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/nosotros/nosotros.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#about_us {\r\n  background: #003136;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/* #first_section img {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 250px;\r\n  filter: blur(1.5px);\r\n  margin-top: 5%;\r\n  -webkit-filter: blur(1.5px);\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  z-index: 0;\r\n} */\r\n\r\n#first_section {\r\n  padding-top: 5%;\r\n}\r\n\r\n.background_image {\r\n  background-image: url('programming_code.png');\r\n  width: 100%;\r\n  height: 250px;\r\n}\r\n\r\n#first_section h1 {\r\n  padding: 100px 0px;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  color: #00a76b;\r\n  text-align: center;\r\n  font-weight: 300;\r\n  font-size: 4em;\r\n  z-index: 1;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  font-size: 3.3em;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n#first_section h1 span {\r\n  font-weight: 700;\r\n  background-color: #f2f1f0;\r\n}\r\n\r\n.text_p {\r\n  height: 100%;\r\n  width: 100%;\r\n  margin-top: 5%;\r\n}\r\n\r\n.text_p p {\r\n  text-align: center;\r\n  color: #f2f1f0;\r\n  width: 75%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding-bottom: 4%;\r\n  font-weight: 400;\r\n  font-size: 1.2em;\r\n}\r\n\r\n#second_section {\r\n  background-color: #00a76b;\r\n  padding-bottom: 5%;\r\n  transform: skew(0deg, 5deg) translateY(10px);\r\n}\r\n\r\n#second_section .content {\r\n  transform: skew(0deg, -5deg);\r\n}\r\n\r\n#second_section h2 {\r\n  color: #f2f1f0;\r\n  margin-top: 5%;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  font-weight: 300;\r\n  font-size: 3.3em;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n#second_section h2 span {\r\n  font-weight: 700;\r\n  height: 100%;\r\n}\r\n\r\n#team {\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  flex-flow: wrap;\r\n}\r\n\r\n.member {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  display: inline-block;\r\n  margin: 10px 10px;\r\n}\r\n\r\n.member .circle {\r\n  height: 200px;\r\n  width: 200px;\r\n  background-color: #003136;\r\n  border-radius: 50%;\r\n  margin: 0px auto;\r\n}\r\n\r\n.member .circle:nth-child(2) {\r\n  height: 200px;\r\n  width: 200px;\r\n  background-color: #003136;\r\n  border-radius: 50%;\r\n}\r\n\r\n.member .circle:nth-child(3) {\r\n  height: 200px;\r\n  width: 200px;\r\n  background-color: #003136;\r\n  border-radius: 50%;\r\n}\r\n\r\n.member .info {\r\n  width: 250px;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  color: #011013;\r\n  text-align: center;\r\n  padding-left: auto;\r\n  padding-right: auto;\r\n  margin-top: 10px;\r\n}\r\n\r\n.member .info h3 {\r\n  font-weight: 700;\r\n  font-size: 1.3em;\r\n}\r\n\r\n.member .info p {\r\n  font-weight: 400;\r\n  font-size: 1.1em;\r\n}\r\n\r\n#third_section {\r\n  width: 100%;\r\n  height: 500px;\r\n}\r\n\r\n#third_section .content h2 {\r\n  color: #00a76b;\r\n  background-color: #f2f1f0;\r\n  padding: 0px 10px;\r\n  margin-top: 5%;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  font-weight: 400;\r\n  font-size: 4em;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n#third_section .content p {\r\n  text-align: center;\r\n  color: #f2f1f0;\r\n  width: 75%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding-bottom: 4%;\r\n  font-weight: 400;\r\n  font-size: 1.2em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm9zb3Ryb3Mvbm9zb3Ryb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTs7Ozs7Ozs7OztHQVVHOztBQUNIO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLDZDQUE2RDtFQUM3RCxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDRDQUE0QztBQUM5Qzs7QUFDQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ub3NvdHJvcy9ub3NvdHJvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Fib3V0X3VzIHtcclxuICBiYWNrZ3JvdW5kOiAjMDAzMTM2O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLyogI2ZpcnN0X3NlY3Rpb24gaW1nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBmaWx0ZXI6IGJsdXIoMS41cHgpO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDEuNXB4KTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB6LWluZGV4OiAwO1xyXG59ICovXHJcbiNmaXJzdF9zZWN0aW9uIHtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbn1cclxuLmJhY2tncm91bmRfaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9wcm9ncmFtbWluZ19jb2RlLnBuZ1wiKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcbiNmaXJzdF9zZWN0aW9uIGgxIHtcclxuICBwYWRkaW5nOiAxMDBweCAwcHg7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgY29sb3I6ICMwMGE3NmI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiA0ZW07XHJcbiAgei1pbmRleDogMTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZm9udC1zaXplOiAzLjNlbTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuI2ZpcnN0X3NlY3Rpb24gaDEgc3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMWYwO1xyXG59XHJcblxyXG4udGV4dF9wIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi50ZXh0X3AgcCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZjJmMWYwO1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0JTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcbiNzZWNvbmRfc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTc2YjtcclxuICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgdHJhbnNmb3JtOiBza2V3KDBkZWcsIDVkZWcpIHRyYW5zbGF0ZVkoMTBweCk7XHJcbn1cclxuI3NlY29uZF9zZWN0aW9uIC5jb250ZW50IHtcclxuICB0cmFuc2Zvcm06IHNrZXcoMGRlZywgLTVkZWcpO1xyXG59XHJcbiNzZWNvbmRfc2VjdGlvbiBoMiB7XHJcbiAgY29sb3I6ICNmMmYxZjA7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDMuM2VtO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4jc2Vjb25kX3NlY3Rpb24gaDIgc3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiN0ZWFtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtZmxvdzogd3JhcDtcclxufVxyXG5cclxuLm1lbWJlciB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDEwcHggMTBweDtcclxufVxyXG5cclxuLm1lbWJlciAuY2lyY2xlIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzMTM2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcblxyXG4ubWVtYmVyIC5jaXJjbGU6bnRoLWNoaWxkKDIpIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzMTM2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm1lbWJlciAuY2lyY2xlOm50aC1jaGlsZCgzKSB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzEzNjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5tZW1iZXIgLmluZm8ge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGNvbG9yOiAjMDExMDEzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IGF1dG87XHJcbiAgcGFkZGluZy1yaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubWVtYmVyIC5pbmZvIGgzIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbn1cclxuLm1lbWJlciAuaW5mbyBwIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbn1cclxuXHJcbiN0aGlyZF9zZWN0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4jdGhpcmRfc2VjdGlvbiAuY29udGVudCBoMiB7XHJcbiAgY29sb3I6ICMwMGE3NmI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjFmMDtcclxuICBwYWRkaW5nOiAwcHggMTBweDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogNGVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4jdGhpcmRfc2VjdGlvbiAuY29udGVudCBwIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmMmYxZjA7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy1ib3R0b206IDQlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/nosotros/nosotros.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/nosotros/nosotros.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about_us\" class=\"container-fluid\">\r\n  <div id=\"first_section\">\r\n    <!-- <img\r\n      src=\"../../../assets/programming_code.png\"\r\n      class=\"img-responsive\"\r\n      alt=\"programming code background\"\r\n    /> -->\r\n    <div class=\"background_image\">\r\n      <h1><span>about us</span></h1>\r\n    </div>\r\n    <div class=\"text_p\">\r\n      <p>\r\n        <strong>VAWEEI</strong> es un pequeño equipo de desarrollo de software\r\n        pero que no es ninguna limitante para nosotros ya que al igual que\r\n        tenemos metas compartidas cada uno de nosotros tiene enfoques distintos\r\n        que ayudan a formar un equipo integral para ofrecer a nuestros clientes\r\n        herramientas y soluciones de calidad. Buscando un avance continuo nos\r\n        mantenemos actualizados en las nuevas herramientas de desarrollo para\r\n        así atender situaciones que nuestros clientes enfrentan.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div id=\"second_section\">\r\n    <div class=\"content\">\r\n      <h2>Our development <span>team</span></h2>\r\n      <div id=\"team\">\r\n        <div class=\"member\">\r\n          <div class=\"circle\"></div>\r\n          <div class=\"info\">\r\n            <h3><strong>Nombre</strong></h3>\r\n            <p>\r\n              Magna eiusmod duis voluptate eu consectetur sint anim mollit sunt\r\n              dolore voluptate aliqua occaecat minim. Mollit consequat\r\n              incididunt quis velit ullamco proident elit laborum ea.\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"member\">\r\n          <div class=\"circle\"></div>\r\n          <div class=\"info\">\r\n            <h3><strong>Nombre</strong></h3>\r\n            <p>\r\n              Magna eiusmod duis voluptate eu consectetur sint anim mollit sunt\r\n              dolore voluptate aliqua occaecat minim. Mollit consequat\r\n              incididunt quis velit ullamco proident elit laborum ea.\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"member\">\r\n          <div class=\"circle\"></div>\r\n          <div class=\"info\">\r\n            <h3><strong>Nombre</strong></h3>\r\n            <p>\r\n              Magna eiusmod duis voluptate eu consectetur sint anim mollit sunt\r\n              dolore voluptate aliqua occaecat minim. Mollit consequat\r\n              incididunt quis velit ullamco proident elit laborum ea.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"third_section\">\r\n    <div class=\"content\">\r\n      <h2>VAWEEI</h2>\r\n      <p>\r\n        Commodo voluptate occaecat irure laborum exercitation ex qui culpa ea\r\n        sunt cillum sit irure. Excepteur irure duis aliquip nulla dolor ullamco.\r\n        Ut dolor labore pariatur ut exercitation voluptate duis esse.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/nosotros/nosotros.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/nosotros/nosotros.component.ts ***!
  \******************************************************/
/*! exports provided: NosotrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NosotrosComponent", function() { return NosotrosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NosotrosComponent = /** @class */ (function () {
    function NosotrosComponent() {
    }
    NosotrosComponent.prototype.ngOnInit = function () {
    };
    NosotrosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nosotros',
            template: __webpack_require__(/*! ./nosotros.component.html */ "./src/app/pages/nosotros/nosotros.component.html"),
            styles: [__webpack_require__(/*! ./nosotros.component.css */ "./src/app/pages/nosotros/nosotros.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NosotrosComponent);
    return NosotrosComponent;
}());



/***/ }),

/***/ "./src/app/pages/portafolio/portafolio.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/portafolio/portafolio.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#landing-portafolio {\r\n    background: url('background-blur-category.jpg') no-repeat center fixed;\r\n    background-size: cover;\r\n    padding-top: 150px;\r\n    padding-bottom: 250px;\r\n  }\r\n\r\n.card{\r\n    margin: 10px;\r\n    padding: 10px;\r\n    max-width: 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9ydGFmb2xpby9wb3J0YWZvbGlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzRUFBc0Y7SUFDdEYsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7O0FBRUY7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3J0YWZvbGlvL3BvcnRhZm9saW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsYW5kaW5nLXBvcnRhZm9saW8ge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmQtYmx1ci1jYXRlZ29yeS5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjUwcHg7XHJcbiAgfVxyXG5cclxuLmNhcmR7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/portafolio/portafolio.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/portafolio/portafolio.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-12\" style=\"background-color: #f2f1f0;\">\r\n    <div id=\"landing-portafolio\" class=\"row px-2\">\r\n        <div class=\"col col-11 col-md-7 m-2 p-3 shadow\" style=\"background-color: rgba(0, 0, 0, .5); color: white; border-radius: 10px;\" >\r\n          <h1>¿Proyectos personales?</h1>\r\n          <p>Dejanos ayudarte a materializar tus ideas, estamos ansiosos por ver tu proyecto funcionando.</p>\r\n          <button class=\"btn btn-success\">Contactanos</button>\r\n        </div>\r\n    </div>\r\n  <div class=\"row col-12 col-md-11 mx-auto p-4\">\r\n\r\n    <div class=\"card\">\r\n        <img class=\"card-img-top\" src=\"../../../assets/project.png\" alt=\"\">\r\n      <div class=\"div-text\">\r\n        <h2>Nombre Proyecto</h2>\r\n        <p>Descripción</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n          <img class=\"card-img-top\" src=\"../../../assets/project.png\" alt=\"\">\r\n        <div class=\"div-text\">\r\n          <h2>Nombre proyecto</h2>\r\n          <p>DEscripción</p>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n          <img class=\"card-img-top\" src=\"../../../assets/project.png\" alt=\"\">\r\n        <div class=\"div-text\">\r\n          <h2>Nombre Proyecto</h2>\r\n          <p>Descripción</p>\r\n        </div>\r\n    </div>\r\n      \r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/portafolio/portafolio.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/portafolio/portafolio.component.ts ***!
  \**********************************************************/
/*! exports provided: PortafolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortafolioComponent", function() { return PortafolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortafolioComponent = /** @class */ (function () {
    function PortafolioComponent() {
    }
    PortafolioComponent.prototype.ngOnInit = function () {
    };
    PortafolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portafolio',
            template: __webpack_require__(/*! ./portafolio.component.html */ "./src/app/pages/portafolio/portafolio.component.html"),
            styles: [__webpack_require__(/*! ./portafolio.component.css */ "./src/app/pages/portafolio/portafolio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortafolioComponent);
    return PortafolioComponent;
}());



/***/ }),

/***/ "./src/app/pages/services/services.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/services/services.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n  background-color: #01211e;\r\n  color: #00A76B;\r\n  padding: 10px;\r\n  width: 40%;\r\n  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.5);\r\n}\r\n\r\n#contenedor-service {\r\n  background-color: #00A76B;\r\n  background-size: cover;\r\n}\r\n\r\n.card img{\r\n  max-width: 200px;\r\n  max-height: 200px;\r\n  margin: auto;\r\n}\r\n\r\n#contenedor-responsive{\r\n  height: 300px;\r\n}\r\n\r\n#ecommerce-btn{\r\n  margin-top: 50px;\r\n  justify-content: center;\r\n}\r\n\r\n.ecommerce-text{\r\n  color: black;\r\n  margin: auto;\r\n}\r\n\r\n#contenedor{\r\n  background: url('málaga-wom-marketing.gif') no-repeat center fixed;\r\n  background-size: cover;\r\n  width: 100%;\r\n  height: 600px;\r\n  padding: 50px;\r\n  background-size: cover;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  \r\n  justify-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsYUFBYTtFQUNiLFVBQVU7RUFDViw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1FQUFtRjtFQUNuRixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCOztFQUV0Qix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMjExZTtcclxuICBjb2xvcjogIzAwQTc2QjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjUpO1xyXG59XHJcblxyXG4jY29udGVuZWRvci1zZXJ2aWNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBNzZCO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jYXJkIGltZ3tcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuI2NvbnRlbmVkb3ItcmVzcG9uc2l2ZXtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4jZWNvbW1lcmNlLWJ0bntcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZWNvbW1lcmNlLXRleHR7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuI2NvbnRlbmVkb3J7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvbWHMgWxhZ2Etd29tLW1hcmtldGluZy5naWYnKSBuby1yZXBlYXQgY2VudGVyIGZpeGVkO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/services/services.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/services/services.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-imagen-movimiento></app-imagen-movimiento>\r\n\r\n<body id=\"contenedor-service\">\r\n  <div class=\"jumbotron\" style=\"background-color: #00A76B;\">\r\n    <h1>¿Necesita administrar tu sitio web fácil y rápidamente?</h1> \r\n    <p>Somos capaces de crear herramientas para la administración de tus servicios o productos.</p> \r\n  </div>\r\n    <div id=\"contenedor\" style=\"float: center; padding: 15px; text-align: left;\">\r\n        <div class=\"ecommerce-text\">\r\n            <h1>e-commerce.</h1>\r\n            <p>Te ayudamos a dar ese gran paso.</p>\r\n            <button id=\"ecommerce-btn\" class=\"btn btn-success\">Contactanos</button>\r\n        </div>\r\n    </div>\r\n    \r\n  <!----------------------------------------- ROW 1 --------------------------------------------->\r\n  <div class=\"row col-12 mx-auto d-flex justify-content-around\">\r\n      <div class=\"card col-12 col-md-5 my-3\">\r\n        <img\r\n          src=\"../../../assets/smartphone.png\"\r\n          class=\"card-img-top  img-fluid\" alt=\"15\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Aplicaciones Moviles</h5>\r\n          <p class=\"card-text\">El creciente uso de los dispositivos inteligentes ha provocado que desarrollar una APP para\r\n            su empresa se convierta en una estrategia que puede aportar grandes ventajas para el negocio.\r\n  \r\n            La adaptación al entorno móvil es necesaria si queremos ajustarnos a los nuevos hábitos de los usuarios.\r\n            Cada día son más las empresas que deciden tener presencia en el mundo móvil y deciden\r\n            apostar por la creación de una APP móvil que responda a sus necesidades\r\n            que se adapte a los nuevos hábitos de los consumidores.</p>\r\n          <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n          <a href=\"#\"  class=\"btn btn-primary\" >ver ejemplos</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"card col-12 col-md-5 my-3\">\r\n        <img\r\n          src=\"../../../assets/coding.png\"\r\n          class=\"card-img-top img-fluid\"  alt=\"...\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Aplicaciones Web</h5>\r\n          <p class=\"card-text\">Usar aplicaciones web ahorra dinero.\r\n            Empleará mejor su tiempo por no tener que ocuparse de aprender a manejar\r\n            nuevos programas, ni mantenerlos o hacer copias de seguridad de sus datos y podrá trabajar desde cualquier\r\n            sitio.\r\n            Será más eficiente; podrá ganar más y gastará menos.</p>\r\n          <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n          <a href=\"#\" class=\"btn btn-primary \" id=\"botones\">ver ejemplos</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!----------------------------------------- ROW 2 ---------------------------------------------->\r\n    <div class=\"row col-12 mx-auto d-flex justify-content-around\">\r\n      <div class=\"card col-12 col-md-5 my-3\">\r\n        <img \r\n        src=\"../../../assets/search.png\"\r\n        class=\"card-img-top img-fluid\" alt=\"imagen\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Aplicaciones de Escritorio</h5>\r\n          <p class=\"card-text\">EL control de procesos de manera local siempre es importante, aumenta la seguridad de nuestros datos,\r\n\r\n          </p>\r\n          <p class=\"card-text\"><small class=\"text-muted\">Last updated 45 mins ago</small></p>\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Puntos de venta son algunas de nuestras cualidades.</h5>\r\n            <p class=\"card-text\">Llevar el control de las ventas diarias de tu negocio puede ser un trabajo duro, apoyate en herramientas echas a la medida.</p>\r\n            <a href=\"#\" class=\"btn btn-primary\" id=\"botones\">ver ejemplos</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card col-12 col-md-5 my-3\">\r\n        <img\r\n          src=\"../../../assets/digital-campaign.png\"\r\n          class=\"card-img-top\"  alt=\"15\" id=\"imagenes\">\r\n        <div class=\"card-body img-fluid\">\r\n          <h5 class=\"card-title\" id=\"titulo\">Posicionamiento SEO</h5>\r\n          <p class=\"card-text\">El creciente uso de los dispositivos inteligentes ha provocado que desarrollar una APP para\r\n            su empresa se convierta en una estrategia que puede aportar grandes ventajas para el negocio.\r\n  \r\n            La adaptación al entorno móvil es necesaria si queremos ajustarnos a los nuevos hábitos de los usuarios.\r\n            Cada día son más las empresas que deciden tener presencia en el mundo móvil y deciden\r\n            apostar por la creación de una APP móvil que responda a sus necesidades\r\n            que se adapte a los nuevos hábitos de los consumidores.</p>\r\n          <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n          <a href=\"#\" class=\"btn btn-primary\" id=\"botones\">ver ejemplos</a>\r\n        </div>\r\n      </div>\r\n  </div>\r\n\r\n\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/pages/services/services.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/services/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/pages/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/pages/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\carch\Documents\GitHub\vaweei-page\Vaweei-page\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map