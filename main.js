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
/* harmony import */ var _web_page_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-page/login/login.component */ "./src/app/web-page/login/login.component.ts");
/* harmony import */ var _web_page_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web-page/home/home.component */ "./src/app/web-page/home/home.component.ts");
/* harmony import */ var _web_page_green_green_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web-page/green/green.component */ "./src/app/web-page/green/green.component.ts");
/* harmony import */ var _web_page_our_vendors_our_vendors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web-page/our-vendors/our-vendors.component */ "./src/app/web-page/our-vendors/our-vendors.component.ts");
/* harmony import */ var _web_page_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web-page/contact/contact.component */ "./src/app/web-page/contact/contact.component.ts");
/* harmony import */ var _web_page_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./web-page/about-us/about-us.component */ "./src/app/web-page/about-us/about-us.component.ts");
/* harmony import */ var _web_page_farm_table_farm_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web-page/farm-table/farm-table.component */ "./src/app/web-page/farm-table/farm-table.component.ts");
/* harmony import */ var _web_page_specialty_specialty_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./web-page/specialty/specialty.component */ "./src/app/web-page/specialty/specialty.component.ts");
/* harmony import */ var _web_page_floral_floral_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./web-page/floral/floral.component */ "./src/app/web-page/floral/floral.component.ts");
/* harmony import */ var _web_page_daily_deals_daily_deals_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./web-page/daily-deals/daily-deals.component */ "./src/app/web-page/daily-deals/daily-deals.component.ts");
/* harmony import */ var _web_page_weekly_news_weekly_news_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./web-page/weekly-news/weekly-news.component */ "./src/app/web-page/weekly-news/weekly-news.component.ts");
/* harmony import */ var _web_page_locations_locations_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./web-page/locations/locations.component */ "./src/app/web-page/locations/locations.component.ts");
/* harmony import */ var _web_page_infraestructure_infraestructure_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./web-page/infraestructure/infraestructure.component */ "./src/app/web-page/infraestructure/infraestructure.component.ts");
/* harmony import */ var _web_page_food_safety_food_safety_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./web-page/food-safety/food-safety.component */ "./src/app/web-page/food-safety/food-safety.component.ts");
/* harmony import */ var _web_page_protein_protein_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./web-page/protein/protein.component */ "./src/app/web-page/protein/protein.component.ts");
/* harmony import */ var _web_page_produce_produce_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./web-page/produce/produce.component */ "./src/app/web-page/produce/produce.component.ts");
/* harmony import */ var _web_page_organic_organic_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./web-page/organic/organic.component */ "./src/app/web-page/organic/organic.component.ts");
/* harmony import */ var _web_page_dairy_eggs_chees_dairy_eggs_chees_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./web-page/dairy-eggs-chees/dairy-eggs-chees.component */ "./src/app/web-page/dairy-eggs-chees/dairy-eggs-chees.component.ts");
/* harmony import */ var _web_page_dry_groceries_and_supplies_dry_groceries_and_supplies_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./web-page/dry-groceries-and-supplies/dry-groceries-and-supplies.component */ "./src/app/web-page/dry-groceries-and-supplies/dry-groceries-and-supplies.component.ts");
/* harmony import */ var _web_page_videos_videos_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./web-page/videos/videos.component */ "./src/app/web-page/videos/videos.component.ts");
/* harmony import */ var _web_page_images_images_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./web-page/images/images.component */ "./src/app/web-page/images/images.component.ts");
/* harmony import */ var _clients_views_clients_clients_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./clients-views/clients/clients.component */ "./src/app/clients-views/clients/clients.component.ts");
/* harmony import */ var _clients_views_clients_form_clients_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./clients-views/clients-form/clients-form.component */ "./src/app/clients-views/clients-form/clients-form.component.ts");
/* harmony import */ var _products_views_products_form_products_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./products-views/products-form/products-form.component */ "./src/app/products-views/products-form/products-form.component.ts");
/* harmony import */ var _products_views_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./products-views/products-list/products-list.component */ "./src/app/products-views/products-list/products-list.component.ts");




























var routes = [
    {
        path: 'home',
        component: _web_page_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'login',
        component: _web_page_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'gallery/images',
        component: _web_page_images_images_component__WEBPACK_IMPORTED_MODULE_23__["ImagesComponent"]
    },
    {
        path: 'gallery/videos',
        component: _web_page_videos_videos_component__WEBPACK_IMPORTED_MODULE_22__["VideosComponent"]
    },
    {
        path: 'sustainability/going-green',
        component: _web_page_green_green_component__WEBPACK_IMPORTED_MODULE_5__["GreenComponent"]
    },
    {
        path: 'sustainability/farm-to-table',
        component: _web_page_farm_table_farm_table_component__WEBPACK_IMPORTED_MODULE_9__["FarmTableComponent"]
    },
    {
        path: 'community/weekly-newsletter',
        component: _web_page_weekly_news_weekly_news_component__WEBPACK_IMPORTED_MODULE_13__["WeeklyNewsComponent"]
    },
    {
        path: 'community/daily-deals',
        component: _web_page_daily_deals_daily_deals_component__WEBPACK_IMPORTED_MODULE_12__["DailyDealsComponent"]
    },
    {
        path: 'community/our-vendors-and-partners',
        component: _web_page_our_vendors_our_vendors_component__WEBPACK_IMPORTED_MODULE_6__["OurVendorsComponent"]
    },
    {
        path: 'contact-us',
        component: _web_page_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
    },
    {
        path: 'about-us',
        component: _web_page_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"]
    },
    {
        path: 'products/dry-groceries-supplies',
        component: _web_page_dry_groceries_and_supplies_dry_groceries_and_supplies_component__WEBPACK_IMPORTED_MODULE_21__["DryGroceriesAndSuppliesComponent"]
    },
    {
        path: 'products/dairy-eggs-cheese',
        component: _web_page_dairy_eggs_chees_dairy_eggs_chees_component__WEBPACK_IMPORTED_MODULE_20__["DairyEggsCheesComponent"]
    },
    {
        path: 'products/organic',
        component: _web_page_organic_organic_component__WEBPACK_IMPORTED_MODULE_19__["OrganicComponent"]
    },
    {
        path: 'products/produce',
        component: _web_page_produce_produce_component__WEBPACK_IMPORTED_MODULE_18__["ProduceComponent"]
    },
    {
        path: 'products/protein',
        component: _web_page_protein_protein_component__WEBPACK_IMPORTED_MODULE_17__["ProteinComponent"]
    },
    {
        path: 'products/specialty',
        component: _web_page_specialty_specialty_component__WEBPACK_IMPORTED_MODULE_10__["SpecialtyComponent"]
    },
    {
        path: 'products/floral',
        component: _web_page_floral_floral_component__WEBPACK_IMPORTED_MODULE_11__["FloralComponent"]
    },
    {
        path: 'locations',
        component: _web_page_locations_locations_component__WEBPACK_IMPORTED_MODULE_14__["LocationsComponent"]
    },
    {
        path: 'infraestructure',
        component: _web_page_infraestructure_infraestructure_component__WEBPACK_IMPORTED_MODULE_15__["InfraestructureComponent"]
    },
    {
        path: 'food-safety',
        component: _web_page_food_safety_food_safety_component__WEBPACK_IMPORTED_MODULE_16__["FoodSafetyComponent"]
    },
    {
        path: 'clients',
        component: _clients_views_clients_clients_component__WEBPACK_IMPORTED_MODULE_24__["ClientsComponent"]
    },
    {
        path: 'clients/:id',
        component: _clients_views_clients_form_clients_form_component__WEBPACK_IMPORTED_MODULE_25__["ClientsFormComponent"]
    },
    {
        path: 'client-register',
        component: _clients_views_clients_form_clients_form_component__WEBPACK_IMPORTED_MODULE_25__["ClientsFormComponent"]
    },
    {
        path: 'products',
        component: _products_views_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_27__["ProductsListComponent"]
    },
    {
        path: 'products/:id',
        component: _products_views_products_form_products_form_component__WEBPACK_IMPORTED_MODULE_26__["ProductsFormComponent"]
    },
    {
        path: 'product-register',
        component: _products_views_products_form_products_form_component__WEBPACK_IMPORTED_MODULE_26__["ProductsFormComponent"]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
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

module.exports = ".container-fluid{\r\n    margin:0px;\r\n    padding: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<app-navigator></app-navigator>\r\n<div class=\"container-fluid\">\r\n   \r\n   <div class=\"main-container\">\r\n      <router-outlet></router-outlet>\r\n   </div>\r\n   <app-footer></app-footer>\r\n</div>\r\n"

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
        this.title = 'Proveedor de productos';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _web_page_components_navigator_navigator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web-page/components/navigator/navigator.component */ "./src/app/web-page/components/navigator/navigator.component.ts");
/* harmony import */ var _web_page_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./web-page/home/home.component */ "./src/app/web-page/home/home.component.ts");
/* harmony import */ var _web_page_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web-page/about-us/about-us.component */ "./src/app/web-page/about-us/about-us.component.ts");
/* harmony import */ var _web_page_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./web-page/login/login.component */ "./src/app/web-page/login/login.component.ts");
/* harmony import */ var _web_page_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./web-page/components/footer/footer.component */ "./src/app/web-page/components/footer/footer.component.ts");
/* harmony import */ var _web_page_green_green_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./web-page/green/green.component */ "./src/app/web-page/green/green.component.ts");
/* harmony import */ var _web_page_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./web-page/contact/contact.component */ "./src/app/web-page/contact/contact.component.ts");
/* harmony import */ var _web_page_locations_locations_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./web-page/locations/locations.component */ "./src/app/web-page/locations/locations.component.ts");
/* harmony import */ var _web_page_food_safety_food_safety_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./web-page/food-safety/food-safety.component */ "./src/app/web-page/food-safety/food-safety.component.ts");
/* harmony import */ var _web_page_infraestructure_infraestructure_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./web-page/infraestructure/infraestructure.component */ "./src/app/web-page/infraestructure/infraestructure.component.ts");
/* harmony import */ var _web_page_videos_videos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./web-page/videos/videos.component */ "./src/app/web-page/videos/videos.component.ts");
/* harmony import */ var _web_page_images_images_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./web-page/images/images.component */ "./src/app/web-page/images/images.component.ts");
/* harmony import */ var _web_page_farm_table_farm_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./web-page/farm-table/farm-table.component */ "./src/app/web-page/farm-table/farm-table.component.ts");
/* harmony import */ var _web_page_our_vendors_our_vendors_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./web-page/our-vendors/our-vendors.component */ "./src/app/web-page/our-vendors/our-vendors.component.ts");
/* harmony import */ var _web_page_specialty_specialty_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./web-page/specialty/specialty.component */ "./src/app/web-page/specialty/specialty.component.ts");
/* harmony import */ var _web_page_weekly_news_weekly_news_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./web-page/weekly-news/weekly-news.component */ "./src/app/web-page/weekly-news/weekly-news.component.ts");
/* harmony import */ var _web_page_daily_deals_daily_deals_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./web-page/daily-deals/daily-deals.component */ "./src/app/web-page/daily-deals/daily-deals.component.ts");
/* harmony import */ var _web_page_floral_floral_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./web-page/floral/floral.component */ "./src/app/web-page/floral/floral.component.ts");
/* harmony import */ var _web_page_dry_groceries_and_supplies_dry_groceries_and_supplies_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./web-page/dry-groceries-and-supplies/dry-groceries-and-supplies.component */ "./src/app/web-page/dry-groceries-and-supplies/dry-groceries-and-supplies.component.ts");
/* harmony import */ var _web_page_dairy_eggs_chees_dairy_eggs_chees_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./web-page/dairy-eggs-chees/dairy-eggs-chees.component */ "./src/app/web-page/dairy-eggs-chees/dairy-eggs-chees.component.ts");
/* harmony import */ var _web_page_organic_organic_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./web-page/organic/organic.component */ "./src/app/web-page/organic/organic.component.ts");
/* harmony import */ var _web_page_produce_produce_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./web-page/produce/produce.component */ "./src/app/web-page/produce/produce.component.ts");
/* harmony import */ var _web_page_protein_protein_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./web-page/protein/protein.component */ "./src/app/web-page/protein/protein.component.ts");
/* harmony import */ var _clients_views_clients_clients_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./clients-views/clients/clients.component */ "./src/app/clients-views/clients/clients.component.ts");
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/clients.service */ "./src/app/services/clients.service.ts");
/* harmony import */ var _web_page_components_navigator_admin_navigator_admin_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./web-page/components/navigator-admin/navigator-admin.component */ "./src/app/web-page/components/navigator-admin/navigator-admin.component.ts");
/* harmony import */ var _clients_views_clients_form_clients_form_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./clients-views/clients-form/clients-form.component */ "./src/app/clients-views/clients-form/clients-form.component.ts");
/* harmony import */ var _products_views_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./products-views/products-list/products-list.component */ "./src/app/products-views/products-list/products-list.component.ts");
/* harmony import */ var _products_views_products_form_products_form_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./products-views/products-form/products-form.component */ "./src/app/products-views/products-form/products-form.component.ts");

//MODULES TO APLICATION






//COMPONENTS TO APLICATION
























//SERVICES TO APP





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _web_page_components_navigator_navigator_component__WEBPACK_IMPORTED_MODULE_7__["NavigatorComponent"],
                _web_page_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _web_page_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _web_page_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _web_page_green_green_component__WEBPACK_IMPORTED_MODULE_12__["GreenComponent"],
                _web_page_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
                _web_page_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"],
                _web_page_locations_locations_component__WEBPACK_IMPORTED_MODULE_14__["LocationsComponent"],
                _web_page_food_safety_food_safety_component__WEBPACK_IMPORTED_MODULE_15__["FoodSafetyComponent"],
                _web_page_infraestructure_infraestructure_component__WEBPACK_IMPORTED_MODULE_16__["InfraestructureComponent"],
                _web_page_videos_videos_component__WEBPACK_IMPORTED_MODULE_17__["VideosComponent"],
                _web_page_images_images_component__WEBPACK_IMPORTED_MODULE_18__["ImagesComponent"],
                _web_page_farm_table_farm_table_component__WEBPACK_IMPORTED_MODULE_19__["FarmTableComponent"],
                _web_page_our_vendors_our_vendors_component__WEBPACK_IMPORTED_MODULE_20__["OurVendorsComponent"],
                _web_page_specialty_specialty_component__WEBPACK_IMPORTED_MODULE_21__["SpecialtyComponent"],
                _web_page_weekly_news_weekly_news_component__WEBPACK_IMPORTED_MODULE_22__["WeeklyNewsComponent"],
                _web_page_daily_deals_daily_deals_component__WEBPACK_IMPORTED_MODULE_23__["DailyDealsComponent"],
                _web_page_floral_floral_component__WEBPACK_IMPORTED_MODULE_24__["FloralComponent"],
                _web_page_dry_groceries_and_supplies_dry_groceries_and_supplies_component__WEBPACK_IMPORTED_MODULE_25__["DryGroceriesAndSuppliesComponent"],
                _web_page_dairy_eggs_chees_dairy_eggs_chees_component__WEBPACK_IMPORTED_MODULE_26__["DairyEggsCheesComponent"],
                _web_page_organic_organic_component__WEBPACK_IMPORTED_MODULE_27__["OrganicComponent"],
                _web_page_produce_produce_component__WEBPACK_IMPORTED_MODULE_28__["ProduceComponent"],
                _web_page_protein_protein_component__WEBPACK_IMPORTED_MODULE_29__["ProteinComponent"],
                _clients_views_clients_clients_component__WEBPACK_IMPORTED_MODULE_30__["ClientsComponent"],
                _web_page_components_navigator_admin_navigator_admin_component__WEBPACK_IMPORTED_MODULE_32__["NavigatorAdminComponent"],
                _clients_views_clients_form_clients_form_component__WEBPACK_IMPORTED_MODULE_33__["ClientsFormComponent"],
                _products_views_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_34__["ProductsListComponent"],
                _products_views_products_form_products_form_component__WEBPACK_IMPORTED_MODULE_35__["ProductsFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [
                _services_clients_service__WEBPACK_IMPORTED_MODULE_31__["ClientsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clients-views/clients-form/clients-form.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/clients-views/clients-form/clients-form.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMtdmlld3MvY2xpZW50cy1mb3JtL2NsaWVudHMtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/clients-views/clients-form/clients-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/clients-views/clients-form/clients-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container p-4\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-4 mx-auto\">\r\n          <div class=\"card text-center\">\r\n              <div class=\"card-header\">\r\n                  <h3> Registrar cliente</h3>\r\n  \r\n              </div>\r\n              <div class=\"card-body\">\r\n                  <form action=\"\" >\r\n                  <div class=\"form-group\">\r\n                      <h6> Nombre cliente</h6>\r\n                      <input type=\"text\" name=\"Nombre_Cliente\" [(ngModel)]=\"client.Nombre_Cliente\" placeholder=\"Nombre Cliente\" class=\"form-control\" autofocus>\r\n                  </div>\r\n                   <div class=\"form-group\">\r\n                               <h6> Apellido Paterno</h6>\r\n                      <input type=\"text\"  name=\"Apellido_Paterno_Cliente\" [(ngModel)]=\"client.Apellido_Paterno_Cliente\" placeholder=\"Apellido Paterno\" class=\"form-control\" >\r\n                  </div>\r\n                   <div class=\"form-group\">\r\n                               <h6> Apellido Materno</h6>\r\n                      <input type=\"text\" name=\"Apellido_Materno_Cliente\" [(ngModel)]=\"client.Apellido_Materno_Cliente\" placeholder=\"Apellido Materno\" class=\"form-control\" >\r\n                  </div>\r\n                   <div class=\"form-group\">\r\n                        <h6>Fecha de nacimiento</h6>\r\n                      <input type=\"date\" name=\"Fecha_Nacimiento_Cliente\" [(ngModel)]=\"client.Fecha_Nacimiento_Cliente\" placeholder=\"Fecha Nacimiento\" class=\"form-control\" >\r\n                  </div>\r\n                   <div class=\"form-group\">\r\n                       <h6> Correo Electronico</h6>\r\n                      <input type=\"email\" name=\"Correo_Cliente\" [(ngModel)]=\"client.Correo_Cliente\" placeholder=\"Correo Valido\" class=\"form-control\" >\r\n                  </div>\r\n                    <div class=\"form-group\">\r\n                        <h6>Usuario</h6>\r\n                      <input type=\"text\" name=\"Usuario_Cliente\" [(ngModel)]=\"client.Usuario_Cliente\" placeholder=\"Usuario\" class=\"form-control\" >\r\n                  </div>\r\n                      <div class=\"form-group\">\r\n                          <h6> Password</h6>\r\n                      <input type=\"password\" name=\"Password_Cliente\" [(ngModel)]=\"client.Password_Cliente\" placeholder=\"Password\" class=\"form-control\" >\r\n                  </div>\r\n                  <button class=\"btn btn-success btn-block\" (click)=\"edit ? updateClient() : saveNewClient()\">\r\n                    Registrar\r\n                  </button>\r\n                  \r\n                  </form>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/clients-views/clients-form/clients-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/clients-views/clients-form/clients-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: ClientsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsFormComponent", function() { return ClientsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/clients.service */ "./src/app/services/clients.service.ts");




var ClientsFormComponent = /** @class */ (function () {
    function ClientsFormComponent(clientService, router, activatedRoute) {
        this.clientService = clientService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.client = {};
        this.edit = false;
    }
    ClientsFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = this.activatedRoute.snapshot.params;
        if (params.id) {
            this.clientService.getClient(params.id)
                .subscribe(function (res) {
                console.log(res);
                _this.client = res;
                console.log(_this.client);
                console.log('msj ' + _this.client.Apellido_Materno_Cliente);
                _this.edit = true;
            }, function (err) { return console.log(err); });
        }
    };
    ClientsFormComponent.prototype.saveNewClient = function () {
        var _this = this;
        delete this.client.Id_Cliente;
        this.clientService.createClient(this.client)
            .subscribe(function (res) {
            console.log('msj' + res);
            _this.router.navigate(['/clients']);
        }, function (err) { return console.error(err); });
    };
    ClientsFormComponent.prototype.updateClient = function () {
        var _this = this;
        // alert(this.client.correo_cliente);
        this.clientService.updateClient(this.client.Id_Cliente, this.client)
            .subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/clients']);
        }, function (err) { return console.error(err); });
    };
    ClientsFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clients-form',
            template: __webpack_require__(/*! ./clients-form.component.html */ "./src/app/clients-views/clients-form/clients-form.component.html"),
            styles: [__webpack_require__(/*! ./clients-form.component.css */ "./src/app/clients-views/clients-form/clients-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_clients_service__WEBPACK_IMPORTED_MODULE_3__["ClientsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ClientsFormComponent);
    return ClientsFormComponent;
}());



/***/ }),

/***/ "./src/app/clients-views/clients/clients.component.css":
/*!*************************************************************!*\
  !*** ./src/app/clients-views/clients/clients.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set height of body and the document to 100% to enable \"full page tabs\" */\r\nbody, html {\r\n    height: 100%;\r\n    margin: 0;\r\n    font-family: Arial;\r\n  }\r\n/* Style tab links */\r\n.tablink {\r\n    background-color: #555;\r\n    color: white;\r\n    float: left;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    padding: 14px 16px;\r\n    font-size: 17px;\r\n    width: 25%;\r\n  }\r\n.tablink:hover {\r\n    background-color: #777;\r\n  }\r\n/* Style the tab content (and add height:100% for full page content) */\r\n.tabcontent {\r\n    color: black;\r\n    display: none;\r\n    padding: 100px 20px;\r\n    height: 100%;\r\n  }\r\n/* #list {background-color: white;}\r\n  #register {background-color: white;} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50cy12aWV3cy9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRUFBMkU7QUFDM0U7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULGtCQUFrQjtFQUNwQjtBQUVBLG9CQUFvQjtBQUNwQjtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsVUFBVTtFQUNaO0FBRUE7SUFDRSxzQkFBc0I7RUFDeEI7QUFFQSxzRUFBc0U7QUFDdEU7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7QUFFQTt3Q0FDc0MiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzLXZpZXdzL2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IGhlaWdodCBvZiBib2R5IGFuZCB0aGUgZG9jdW1lbnQgdG8gMTAwJSB0byBlbmFibGUgXCJmdWxsIHBhZ2UgdGFic1wiICovXHJcbmJvZHksIGh0bWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0YWIgbGlua3MgKi9cclxuICAudGFibGluayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxpbms6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIHRhYiBjb250ZW50IChhbmQgYWRkIGhlaWdodDoxMDAlIGZvciBmdWxsIHBhZ2UgY29udGVudCkgKi9cclxuICAudGFiY29udGVudCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcGFkZGluZzogMTAwcHggMjBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLyogI2xpc3Qge2JhY2tncm91bmQtY29sb3I6IHdoaXRlO31cclxuICAjcmVnaXN0ZXIge2JhY2tncm91bmQtY29sb3I6IHdoaXRlO30gKi8iXX0= */"

/***/ }),

/***/ "./src/app/clients-views/clients/clients.component.html":
/*!**************************************************************!*\
  !*** ./src/app/clients-views/clients/clients.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-------------------------------- LISTA DE CLIENTES  ------------------------------------->\r\n    <table class=\"table col-md-8\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th>ID_CLIENTE</th>\r\n            <th>NOMBRE</th> \r\n            <th>APELLIDO PATERNO</th>\r\n            <th>ACCIONES</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody  *ngFor=\"let client of clients\">\r\n          <tr>\r\n            <td>{{client.Id_Cliente}}</td>\r\n            <td>{{client.Nombre_Cliente}}</td>\r\n            <td>{{client.Apellido_Paterno_Cliente}}</td>\r\n            <td>\r\n              <button class=\"btn btn-warning m-2\" [routerLink]=\"['/clients',client.Id_Cliente]\">EDITAR</button>\r\n              <button class=\"btn btn-danger m-2\" (click)=\"deleteClient(client.Id_Cliente)\">ELIMINAR</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/clients-views/clients/clients.component.ts":
/*!************************************************************!*\
  !*** ./src/app/clients-views/clients/clients.component.ts ***!
  \************************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/clients.service */ "./src/app/services/clients.service.ts");



var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(clientService) {
        this.clientService = clientService;
        this.clients = [];
    }
    ClientsComponent.prototype.ngOnInit = function () {
        this.getClients();
    };
    ClientsComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getClients()
            .subscribe(function (res) {
            _this.clients = res;
            console.log(_this.clients);
        }, function (err) { return console.error(err); });
    };
    ClientsComponent.prototype.deleteClient = function (id) {
        var _this = this;
        this.clientService.deleteClient(id)
            .subscribe(function (res) {
            console.log(res);
            _this.getClients();
        }, function (err) { return console.error(err); });
    };
    ClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/clients-views/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.css */ "./src/app/clients-views/clients/clients.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_clients_service__WEBPACK_IMPORTED_MODULE_2__["ClientsService"]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/products-views/products-form/products-form.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/products-views/products-form/products-form.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzLXZpZXdzL3Byb2R1Y3RzLWZvcm0vcHJvZHVjdHMtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/products-views/products-form/products-form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/products-views/products-form/products-form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"row mt-3\">\r\n      <div class=\"col-md-4 offset-md-2\">\r\n          <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                <form action=\"\">\r\n                  <div class=\"form-group\">\r\n                      <h5>Nombre del producto</h5>\r\n                      <input type=\"text\" class=\"form-control\" name=\"Nombre_Producto\" [(ngModel)]=\"products.Nombre_Producto\" placeholder=\"Nombre Producto\" autofocus>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                      <h5>Precio del producto</h5>\r\n                      <input type=\"number\" step=\"0.01\" class=\"form-control\" name=\"Precio_Producto\" [(ngModel)]=\"products.Precio_Producto\" placeholder=\"Precio Producto\">\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                        <h5>Descripcion del producto</h5>\r\n                      <input type=\"text\" class=\"form-control\" name=\"Descripcion_Producto\" [(ngModel)]=\"products.Descripcion_Producto\" placeholder=\"Descripcion Producto\" >\r\n                  </div>\r\n                    <div class=\"form-group\">\r\n                        <h5>Imagen del Producto</h5>\r\n                        <input name=\"image\"\r\n                            style=\"display: none\" [(ngModel)]=\"products.Url_Image_Producto\"\r\n                            type=\"file\" (change)=\"onFileUpload($event)\"\r\n                            #fileInput>\r\n                        <button (click)=\"fileInput.click()\">Select File</button>\r\n                    </div>\r\n                 <div class=\"form-group\">\r\n                         <h5>id del Administrador</h5>\r\n                       <input type=\"number\" class=\"form-control\" name=\"Productos_Administradores\" [(ngModel)]=\"products.Productos_Administradores\" placeholder=\"Administrador Del Producto\" >\r\n                  </div>\r\n                 <div class=\"form-group\">\r\n                      <button class=\"btn btn-success btn-block\" (click)=\"saveProduct()\">\r\n                          guardar\r\n                      </button>\r\n                  </div>\r\n\r\n                </form>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n\r\n  <div class=\"col-md-4\">\r\n    <div class=\"card card-body text-center\">\r\n      <div class=\"image-preview\" >\r\n        <img id=\"imagePreview\" \r\n        [src]=\"imagePreview != null ? imagePreview :\r\n               products.Url_Image_Producto != null ? '../../../assets/img-products/'+products.Url_Image_Producto :\r\n               '/assets/no-imagen.png' \" class=\"card-img-top\" >\r\n      </div>\r\n      <h1>{{products.Nombre_Producto == '' ? 'Nombre Producto' : products.Nombre_Producto}}</h1>\r\n      <h2>{{products.Descripcion_Producto == '' ? 'Tu descripción' : products.Descripcion_Producto}}</h2>\r\n      <h2>{{products.Precio_Producto == '' ? 'Tu descripción' : products.Precio_Producto}}</h2>\r\n    </div>\r\n</div>\r\n\r\n</div> \r\n"

/***/ }),

/***/ "./src/app/products-views/products-form/products-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/products-views/products-form/products-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsFormComponent", function() { return ProductsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ProductsFormComponent = /** @class */ (function () {
    function ProductsFormComponent(http, ps, router, activatedRoute) {
        this.http = http;
        this.ps = ps;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.products = {};
        this.edit = false;
    }
    ProductsFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = this.activatedRoute.snapshot.params;
        if (params.id) {
            this.ps.getProduct(params.id)
                .subscribe(function (res) {
                console.log(res);
                _this.products = res;
                _this.edit = true;
            }, function (err) { return console.log(err); });
        }
    }; // FIN NGONINIT
    ProductsFormComponent.prototype.onFileUpload = function (event) {
        var _this = this;
        console.log(event.target.files);
        this.selectedFile = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(this.selectedFile);
    }; // fin onfileUpload
    ProductsFormComponent.prototype.saveProduct = function () {
        var _this = this;
        // this.http is the injected HttpClient
        var uploadData = new FormData();
        uploadData.append('image', this.selectedFile, this.selectedFile.name);
        uploadData.append('Nombre_Producto', this.products.Nombre_Producto);
        uploadData.append('Precio_Producto', this.products.Precio_Producto);
        uploadData.append('Descripcion_Producto', this.products.Descripcion_Producto);
        uploadData.append('Productos_Administradores', this.products.Productos_Administradores);
        if (this.edit) {
            this.http.put('http://localhost:4000/links/products/' + this.products.Id_Producto, uploadData)
                .subscribe(function (res) {
                console.log(res);
                _this.router.navigate(['/products']);
            }, function (err) { return console.error(err); });
        } // fin-if
        else {
            this.http.post('http://localhost:4000/links/products/', uploadData)
                .subscribe(function (res) {
                console.log(res);
                _this.router.navigate(['/products']);
            }, function (err) { return console.error(err); });
        }
    };
    ProductsFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products-form',
            template: __webpack_require__(/*! ./products-form.component.html */ "./src/app/products-views/products-form/products-form.component.html"),
            styles: [__webpack_require__(/*! ./products-form.component.css */ "./src/app/products-views/products-form/products-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ProductsFormComponent);
    return ProductsFormComponent;
}());



/***/ }),

/***/ "./src/app/products-views/products-list/products-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/products-views/products-list/products-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzLXZpZXdzL3Byb2R1Y3RzLWxpc3QvcHJvZHVjdHMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/products-views/products-list/products-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/products-views/products-list/products-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-------------------------------- LISTA DE CLIENTES  ------------------------------------->\r\n    <table class=\"table col-md-8\">\r\n      <thead class=\"thead-light\">\r\n        <tr>\r\n          <th>ID_PRODUCTO</th>\r\n          <th>NOMBRE PRODUCTO</th> \r\n          <th>PRECIO PRODUCTO</th>\r\n          <th>DESCRIPCIÓN</th>\r\n          <th>IMAGEN</th>\r\n          <th>ACCIONES</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody  *ngFor=\"let product of products\">\r\n        <tr>\r\n          <td>{{product.Id_Producto}}</td>\r\n          <td>{{product.Nombre_Producto}}</td>\r\n          <td>{{product.Precio_Producto}}</td>\r\n          <td>{{product.Descripcion_Producto}}</td>\r\n          <td>\r\n            <img src=\"../../../assets/img-products/{{product.Url_Image_Producto}}\" alt=\"\" \r\n            style=\"max-width: 100px;\">\r\n          </td>\r\n          <td>\r\n            <button class=\"btn btn-warning m-2\" [routerLink]=\"['/products',product.Id_Producto]\">EDITAR</button>\r\n            <button class=\"btn btn-danger m-2\" (click)=\"deleteProduct(product.Id_Producto)\">ELIMINAR</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n  </table>\r\n"

/***/ }),

/***/ "./src/app/products-views/products-list/products-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/products-views/products-list/products-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");



var ProductsListComponent = /** @class */ (function () {
    function ProductsListComponent(ps) {
        this.ps = ps;
        this.products = {};
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsListComponent.prototype.getProducts = function () {
        var _this = this;
        this.ps.getProducts()
            .subscribe(function (res) {
            _this.products = res;
            console.log(_this.products);
        }, function (err) { return console.error(err); });
    };
    ProductsListComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this.ps.deleteProduct(id)
            .subscribe(function (res) {
            console.log(res);
            _this.getProducts();
        }, function (err) { return console.error(err); });
    };
    ProductsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products-list',
            template: __webpack_require__(/*! ./products-list.component.html */ "./src/app/products-views/products-list/products-list.component.html"),
            styles: [__webpack_require__(/*! ./products-list.component.css */ "./src/app/products-views/products-list/products-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
    ], ProductsListComponent);
    return ProductsListComponent;
}());



/***/ }),

/***/ "./src/app/services/clients.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/clients.service.ts ***!
  \*********************************************/
/*! exports provided: ClientsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsService", function() { return ClientsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ClientsService = /** @class */ (function () {
    function ClientsService(http) {
        this.http = http;
        this.API_URI = 'https://altadistribucion.appspot.com/links';
    }
    ClientsService.prototype.getClients = function () {
        return this.http.get(this.API_URI + "/clients");
    };
    ClientsService.prototype.getClient = function (id) {
        return this.http.get(this.API_URI + "/clients/" + id);
    };
    ClientsService.prototype.deleteClient = function (id) {
        return this.http.delete(this.API_URI + "/clients/" + id);
    };
    ClientsService.prototype.createClient = function (client) {
        return this.http.post(this.API_URI + "/clients", client);
    };
    ClientsService.prototype.updateClient = function (id, updatedClient) {
        return this.http.put(this.API_URI + "/clients/" + id, updatedClient);
    };
    ClientsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClientsService);
    return ClientsService;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
        this.API_URI = 'https://altadistribucion.appspot.com/links';
    }
    ProductsService.prototype.getProducts = function () {
        return this.http.get(this.API_URI + "/products");
    };
    ProductsService.prototype.getProduct = function (id) {
        return this.http.get(this.API_URI + "/products/" + id);
    };
    ProductsService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.API_URI + "/products/" + id);
    };
    ProductsService.prototype.createProduct = function (product) {
        return this.http.post(this.API_URI + "/products", product);
    };
    ProductsService.prototype.updateProduct = function (id, updatedProduct) {
        return this.http.put(this.API_URI + "/products/" + id, updatedProduct);
    };
    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/web-page/about-us/about-us.component.css":
/*!**********************************************************!*\
  !*** ./src/app/web-page/about-us/about-us.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1wYWdlL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/web-page/about-us/about-us.component.html":
/*!***********************************************************!*\
  !*** ./src/app/web-page/about-us/about-us.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid \">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3 col-md-6\">\r\n      <h1>WEST CENTRAL</h1>\r\n      <p class=\"justify-content\">West Central Foodservice was founded in 1969 by Chester Frangipani.\r\n         Our Corporate headquarters are strategically situated in our 180,000 sq.\r\n         ft distribution facility in Norwalk, CA to serve customers from Santa \r\n         Barbara to the Mexican border. We also have large warehouse distribution\r\n         centers in Arizona and Las Vegas. All of our facilities are custom-designed\r\n          with temperature controlled units for a single purpose; to bring the best\r\n          quality produce from the field to your table. We manage our fleet of 130\r\n          radio-controlled, refrigerated delivery trucks and operations with the\r\n          latest in computerized communications to effectively merge modern technology\r\n          with four generations of proven, hands on experience. The company tirelessly\r\n          strives to maintain the perfect combination of its state-of-the-art \r\n          distribution facility, global grower network relationships and education\r\n          of employees to provide our customers with the utmost in personalized service.\r\n      </p>\r\n    </div>\r\n    <div class=\"col-sm-9 col-md-6\">\r\n      <img src=\"../../assets/industry_food.jpg\" alt=\"\" width=\"500px\" height=\"400px\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-20px\">\r\n      <button type=\"button\" class=\"btn btn-success\">Join west central</button>\r\n  </div>\r\n  <!-- FIN ROW -->\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <h1>MISSION & VISION</h1>\r\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.\r\n         Exercitationem sunt, repudiandae ex expedita delectus fuga\r\n        asperiores totam molestias dignissimos repellat, obcaecati\r\n        illo deleniti nulla! Quod alias dolorum perferendis \r\n        repudiandae magnam?\r\n      </p>\r\n    </div>\r\n    <div class=\"col\">\r\n      <h1>OUR HISTORY</h1>\r\n      <p>\r\n          Lorem ipsum dolor sit amet consectetur adipisicing elit.\r\n          Exercitationem sunt, repudiandae ex expedita delectus fuga\r\n          asperiores totam molestias dignissimos repellat, obcaecati\r\n          illo deleniti nulla! Quod alias dolorum perferendis \r\n          repudiandae magnam?\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row md-6\">\r\n    <div class=\"col\">\r\n      <ul class=\"lsit-group\">\r\n        <li class=\"list-group-item\">\r\n          Farm to Table\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n            Lorem ipsum dolor sit amet consectetur adipisicing elit.\r\n            Exercitationem sunt, repudiandae ex expedita delectus fuga\r\n            asperiores totam molestias dignissimos repellat, obcaecati\r\n            illo deleniti nulla! Quod alias dolorum perferendis \r\n            repudiandae magnam?\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n            24 Hour Delivery\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n            Fast, Online Ordering\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n            Quality Guaranteed\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col\"></div>\r\n  </div><!-- FIN COL -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/web-page/about-us/about-us.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/web-page/about-us/about-us.component.ts ***!
  \*********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/web-page/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/web-page/about-us/about-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/web-page/components/footer/footer.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/web-page/components/footer/footer.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\r\n    background: #101D29 ;\r\n    margin-top: 7%;\r\n    padding-top: 50px;\r\n    width: 100%;\r\n    height: 100%; \r\n}\r\nh3{\r\n    color: #A8C7CC;\r\n}\r\nform{\r\n    margin-top:20px;\r\n}\r\n.newsletter{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: auto;\r\n}\r\n.social-network{\r\n    margin-top: 20px;\r\n    width: 100%;\r\n    height: 300px;\r\n    background: #D40424;\r\n}\r\nimg{\r\n    margin-top:75px;\r\n    margin-left: 20px;\r\n    width: 200px;\r\n}\r\n.rights{\r\n    color:#A8C7CC;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLXBhZ2UvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC93ZWItcGFnZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gICAgYmFja2dyb3VuZDogIzEwMUQyOSA7XHJcbiAgICBtYXJnaW4tdG9wOiA3JTtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG59XHJcbmgze1xyXG4gICAgY29sb3I6ICNBOEM3Q0M7XHJcbn1cclxuZm9ybXtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxufVxyXG4ubmV3c2xldHRlcntcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uc29jaWFsLW5ldHdvcmt7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0Q0MDQyNDtcclxufVxyXG5pbWd7XHJcbiAgICBtYXJnaW4tdG9wOjc1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG4ucmlnaHRze1xyXG4gICAgY29sb3I6I0E4QzdDQztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/web-page/components/footer/footer.component.html":
/*!******************************************************************!*\
  !*** ./src/app/web-page/components/footer/footer.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <h3 class=\"title text-center\"><strong>Stay in touch</strong> sing up for our newsletter</h3>\r\n  <div class=\"newsletter\">\r\n    <form class=\"form-inline\">\r\n      <div class=\"form-group mb-2\">\r\n        <label for=\"staticEmail2\" class=\"sr-only\">Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"staticEmail2\" placeholder=\"Name\">\r\n      </div>\r\n      <div class=\"form-group mx-sm-3 mb-2\">\r\n        <label for=\"inputPassword2\" class=\"sr-only\">Email</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"inputPassword2\" placeholder=\"Email\">\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-light mb-2\">SUBMIT</button>\r\n    </form>\r\n  </div>\r\n  <div class=\"social-network\">\r\n    <img src=\"../../../assets/logo_prueba.png\" alt=\"\" class=\"imgLogo float-left align-middle\">\r\n  </div>\r\n  <div class=\"rights text-center\">\r\n    <span>Careers/Community/Food Safety/Mobile App/Our Vendors/Login/Contact Us</span>\r\n    <br>\r\n    <small>Copyright 2017 West Central Produce All rights reserved</small>\r\n    <br>\r\n    <span>12840 Leyva St. Norwalk, CA 90650</span>\r\n    <br>\r\n    <span><strong>Tel</strong>: 213.629.3600</span>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/web-page/components/footer/footer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/web-page/components/footer/footer.component.ts ***!
  \****************************************************************/
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
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/web-page/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/web-page/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/web-page/components/navigator-admin/navigator-admin.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/web-page/components/navigator-admin/navigator-admin.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1wYWdlL2NvbXBvbmVudHMvbmF2aWdhdG9yLWFkbWluL25hdmlnYXRvci1hZG1pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/web-page/components/navigator-admin/navigator-admin.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/web-page/components/navigator-admin/navigator-admin.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-light navbar-light shadow-sm\">\r\n  <!-- Brand -->\r\n  <a class=\"navbar-brand\" [routerLink]=\"['home']\">\r\n    <img class=\"imgLogo\" src=\"../../../assets/logo_prueba.png\" alt=\"\">\r\n  </a>\r\n\r\n  <!-- NAV -->\r\n  <ul class=\"navbar-nav\">\r\n    <!-- DROPDOWN COMPANY -->\r\n    <li class=\"nav-item dropdown\">\r\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">COMPANY</a>\r\n      <div class=\"dropdown-menu\">\r\n        <a class=\"dropdown-item\" routerLinkActive=\"active\" [routerLink]=\"['about-us']\">ABOUT US</a>\r\n        <a class=\"dropdown-item\" routerLinkActive=\"active\" [routerLink]=\"['locations']\">LOCATIONS</a>\r\n        <a class=\"dropdown-item\" routerLinkActive=\"active\" [routerLink]=\"['food-safety']\">FOOD SAFETY</a>\r\n        <a class=\"dropdown-item\" routerLinkActive=\"active\" [routerLink]=\"['infraestructure']\">INFRAESTRUCTURE</a>\r\n      </div>\r\n    </li>\r\n    <!-- DROPDOWN GALLERY -->\r\n    <li class=\"nav-item dropdown\">\r\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">GALLERY</a>\r\n      <div class=\"dropdown-menu\">\r\n        <a class=\"dropdown-item\" [routerLink]=\"['gallery/videos']\" routerLinkActive=\"active\">VIDEOS</a>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['gallery/images']\" routerLinkActive=\"active\">IMAGES</a>\r\n      </div>\r\n    </li>\r\n    <!-- DROPDOWN PRODUCTS -->\r\n    <li class=\"nav-item dropdown\">\r\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">PRODUCTS</a>\r\n      <div class=\"dropdown-menu\">\r\n        <a class=\"dropdown-item\" [routerLink]=\"['products/dry-groceries-supplies']\" routerLinkActive=\"active\">DRY GROCERIES & SUPPLIES</a>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['products/dairy-eggs-cheese']\" routerLinkActive=\"active\">DAIRY, EGGS, CHEESE</a>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['products/organic']\" routerLinkActive=\"active\">ORGANIC</a>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['products/produce']\" routerLinkActive=\"active\">PRODUCE</a>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['products/protein']\" routerLinkActive=\"active\">PROTEIN</a>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['products/specialty']\" routerLinkActive=\"active\">SPECIALTY</a>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['products/floral']\" routerLinkActive=\"active\">FLORAL</a>\r\n      </div>\r\n    </li>\r\n    <!-- DROPDOWN COMMUNITY -->\r\n    <li class=\"nav-item dropdown\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">COMMUNITY</a>\r\n      <div class=\"dropdown-menu\">\r\n        <!--<a class=\"dropdown-item\" [routerLink]=\"['community/weekly-newsletter']\" routerLinkActive=\"active\">WEEKLY NEWSLETTER</a>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['community/daily-deals']\" routerLinkActive=\"active\">DAILY DEALS</a>-->\r\n        <a class=\"dropdown-item\" [routerLink]=\"['community/our-vendors-and-partners']\" routerLinkActive=\"active\">OUR VENDORS</a>\r\n      </div>\r\n    </li>\r\n    <!-- DROPDOWN SUSTAINABILITY -->\r\n    <li class=\"nav-item dropdown\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">SUSTAINABILITY</a>\r\n      <div class=\"dropdown-menu\">\r\n        <a class=\"dropdown-item\" [routerLink]=\"['sustainability/farm-to-table']\" routerLinkActive=\"active\">FARM TO TABLE</a>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['sustainability/going-green']\" routerLinkActive=\"active\">GOING GREEN</a>\r\n      </div>\r\n    </li>\r\n\r\n    <li class=\"nav-item\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link\" [routerLink]=\"['contact-us']\">CONTACT US</a>\r\n    </li>\r\n    <li class=\"nav-item\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link\" [routerLink]=\"['login']\">LOGIN</a>\r\n    </li>\r\n    <!-- Dropdown -->\r\n    \r\n  </ul>\r\n</nav>"

/***/ }),

/***/ "./src/app/web-page/components/navigator-admin/navigator-admin.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/web-page/components/navigator-admin/navigator-admin.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NavigatorAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorAdminComponent", function() { return NavigatorAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigatorAdminComponent = /** @class */ (function () {
    function NavigatorAdminComponent() {
    }
    NavigatorAdminComponent.prototype.ngOnInit = function () {
    };
    NavigatorAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigator-admin',
            template: __webpack_require__(/*! ./navigator-admin.component.html */ "./src/app/web-page/components/navigator-admin/navigator-admin.component.html"),
            styles: [__webpack_require__(/*! ./navigator-admin.component.css */ "./src/app/web-page/components/navigator-admin/navigator-admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigatorAdminComponent);
    return NavigatorAdminComponent;
}());



/***/ }),

/***/ "./src/app/web-page/components/navigator/navigator.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/web-page/components/navigator/navigator.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgLogo{\r\n    max-width: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLXBhZ2UvY29tcG9uZW50cy9uYXZpZ2F0b3IvbmF2aWdhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC93ZWItcGFnZS9jb21wb25lbnRzL25hdmlnYXRvci9uYXZpZ2F0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdMb2dve1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/web-page/components/navigator/navigator.component.html":
/*!************************************************************************!*\
  !*** ./src/app/web-page/components/navigator/navigator.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-light navbar-light shadow-sm\">\r\n  <!-- Brand -->\r\n  <a class=\"navbar-brand\" [routerLink]=\"['home']\">\r\n    <img class=\"imgLogo\" src=\"../../../assets/logo_prueba.png\" alt=\"\">\r\n  </a>\r\n\r\n  <!-- NAV -->\r\n  <ul class=\"navbar-nav\">\r\n    <!-- DROPDOWN COMPANY -->\r\n    <li class=\"nav-item dropdown\">\r\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">COMPANY</a>\r\n      <div class=\"dropdown-menu\">\r\n        <a class=\"dropdown-item\" routerLinkActive=\"active\" [routerLink]=\"['about-us']\">ABOUT US</a>\r\n        <a class=\"dropdown-item\" routerLinkActive=\"active\" [routerLink]=\"['locations']\">LOCATIONS</a>\r\n        <a class=\"dropdown-item\" routerLinkActive=\"active\" [routerLink]=\"['food-safety']\">FOOD SAFETY</a>\r\n        <a class=\"dropdown-item\" routerLinkActive=\"active\" [routerLink]=\"['infraestructure']\">INFRAESTRUCTURE</a>\r\n      </div>\r\n    </li>\r\n    <!-- DROPDOWN GALLERY -->\r\n    <li class=\"nav-item dropdown\">\r\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">GALLERY</a>\r\n      <div class=\"dropdown-menu\">\r\n        <a class=\"dropdown-item\" [routerLink]=\"['gallery/videos']\" routerLinkActive=\"active\">VIDEOS</a>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['gallery/images']\" routerLinkActive=\"active\">IMAGES</a>\r\n      </div>\r\n    </li>\r\n    <!-- DROPDOWN PRODUCTS -->\r\n    <li class=\"nav-item dropdown\">\r\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">PRODUCTS</a>\r\n      <div class=\"dropdown-menu\">\r\n        <a class=\"dropdown-item\" [routerLink]=\"['products/dry-groceries-supplies']\" routerLinkActive=\"active\">DRY GROCERIES & SUPPLIES</a>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['products/dairy-eggs-cheese']\" routerLinkActive=\"active\">DAIRY, EGGS, CHEESE</a>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['products/organic']\" routerLinkActive=\"active\">ORGANIC</a>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['products/produce']\" routerLinkActive=\"active\">PRODUCE</a>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['products/protein']\" routerLinkActive=\"active\">PROTEIN</a>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['products/specialty']\" routerLinkActive=\"active\">SPECIALTY</a>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['products/floral']\" routerLinkActive=\"active\">FLORAL</a>\r\n      </div>\r\n    </li>\r\n    <!-- DROPDOWN COMMUNITY -->\r\n    <li class=\"nav-item dropdown\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">COMMUNITY</a>\r\n      <div class=\"dropdown-menu\">\r\n        <!--<a class=\"dropdown-item\" [routerLink]=\"['community/weekly-newsletter']\" routerLinkActive=\"active\">WEEKLY NEWSLETTER</a>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['community/daily-deals']\" routerLinkActive=\"active\">DAILY DEALS</a>-->\r\n        <a class=\"dropdown-item\" [routerLink]=\"['community/our-vendors-and-partners']\" routerLinkActive=\"active\">OUR VENDORS</a>\r\n      </div>\r\n    </li>\r\n    <!-- DROPDOWN SUSTAINABILITY -->\r\n    <li class=\"nav-item dropdown\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">SUSTAINABILITY</a>\r\n      <div class=\"dropdown-menu\">\r\n        <a class=\"dropdown-item\" [routerLink]=\"['sustainability/farm-to-table']\" routerLinkActive=\"active\">FARM TO TABLE</a>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['sustainability/going-green']\" routerLinkActive=\"active\">GOING GREEN</a>\r\n      </div>\r\n    </li>\r\n\r\n    <li class=\"nav-item\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link\" [routerLink]=\"['contact-us']\">CONTACT US</a>\r\n    </li>\r\n    <li class=\"nav-item\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link\" [routerLink]=\"['login']\">LOGIN</a>\r\n    </li>\r\n    <!-- Dropdown -->\r\n    \r\n  </ul>\r\n</nav>"

/***/ }),

/***/ "./src/app/web-page/components/navigator/navigator.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/web-page/components/navigator/navigator.component.ts ***!
  \**********************************************************************/
/*! exports provided: NavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorComponent", function() { return NavigatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigatorComponent = /** @class */ (function () {
    function NavigatorComponent() {
    }
    NavigatorComponent.prototype.ngOnInit = function () {
    };
    NavigatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigator',
            template: __webpack_require__(/*! ./navigator.component.html */ "./src/app/web-page/components/navigator/navigator.component.html"),
            styles: [__webpack_require__(/*! ./navigator.component.css */ "./src/app/web-page/components/navigator/navigator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigatorComponent);
    return NavigatorComponent;
}());



/***/ }),

/***/ "./src/app/web-page/contact/contact.component.css":
/*!********************************************************!*\
  !*** ./src/app/web-page/contact/contact.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message{\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.title{\r\n    margin-top: 20px;\r\n}\r\nh2{\r\n    color: darkcyan;\r\n}\r\n.title p{\r\n    color: goldenrod;\r\n}\r\n.archive{\r\n    border: 1px green dashed;\r\n    width: 70%;\r\n    padding-left: 10px;\r\n    padding-bottom: 5px;\r\n}\r\n.contact{\r\n    margin-top:20 px;\r\n}\r\n.mapa img{\r\n    max-width: 100%\r\n}\r\ndiv.row.map{\r\n    \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLXBhZ2UvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJO0FBQ0o7QUFDQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL3dlYi1wYWdlL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2V7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4udGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbmgye1xyXG4gICAgY29sb3I6IGRhcmtjeWFuO1xyXG59XHJcbi50aXRsZSBwe1xyXG4gICAgY29sb3I6IGdvbGRlbnJvZDtcclxufVxyXG4uYXJjaGl2ZXtcclxuICAgIGJvcmRlcjogMXB4IGdyZWVuIGRhc2hlZDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5jb250YWN0e1xyXG4gICAgbWFyZ2luLXRvcDoyMCBweDtcclxufVxyXG4ubWFwYSBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCVcclxufVxyXG5kaXYucm93Lm1hcHtcclxuICAgIFxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/web-page/contact/contact.component.html":
/*!*********************************************************!*\
  !*** ./src/app/web-page/contact/contact.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row map justify-content-center\">\r\n    <div class=\"col-12 col-md-8 mapa mw-100 shadow-sm\">\r\n      <img src=\"../../assets/Wired.jpg\" alt=\"\" class=\"img-fluid mx-auto mw-100\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row title\">\r\n    <div class=\"col\">\r\n      <h2 class=\"h2\">CONTACT US</h2>\r\n      <p>We know the best food comes from only the finest ingredients, and we are committed to providing our customers with everything they need to excel.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row message\">\r\n    <div class=\"col\">\r\n      <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleFormControlInput1\">Your name:</label>\r\n            <input class=\"form-control\" type=\"text\">\r\n          </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleFormControlInput1\">Your email address:</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"name@example.com\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"exampleFormControlInput1\">Subject:</label>\r\n            <input class=\"form-control\" type=\"text\">\r\n          </div> \r\n        <div class=\"form-group\">\r\n          <label for=\"exampleFormControlTextarea1\">Your message:</label>\r\n          <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"4\"></textarea>\r\n        </div>\r\n        <div class=\"form-group archive\">\r\n          <label for=\"exampleFormControlFile1\"><strong>Add file</strong>:</label>\r\n          <input type=\"file\" class=\"form-control-file\" id=\"exampleFormControlFile1\">\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-success btn-lg btn-block shadow-sm\">SEND</button>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-md-auto contact\">\r\n      <div class=\"card bg-light mb-3 shadow\" style=\"max-width: 18rem;\">\r\n        <div class=\"card-header\">Contact Info:</div>\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text\">1280 Leyva St. Norwalk, CA 90650</p>\r\n          <p class=\"card-text\">westcentral@westcentralla.com</p>\r\n          <p class=\"card-text\">800.464.8349</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/web-page/contact/contact.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/web-page/contact/contact.component.ts ***!
  \*******************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/web-page/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/web-page/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/web-page/daily-deals/daily-deals.component.css":
/*!****************************************************************!*\
  !*** ./src/app/web-page/daily-deals/daily-deals.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1wYWdlL2RhaWx5LWRlYWxzL2RhaWx5LWRlYWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/web-page/daily-deals/daily-deals.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/web-page/daily-deals/daily-deals.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  daily-deals works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/web-page/daily-deals/daily-deals.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/web-page/daily-deals/daily-deals.component.ts ***!
  \***************************************************************/
/*! exports provided: DailyDealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyDealsComponent", function() { return DailyDealsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DailyDealsComponent = /** @class */ (function () {
    function DailyDealsComponent() {
    }
    DailyDealsComponent.prototype.ngOnInit = function () {
    };
    DailyDealsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-daily-deals',
            template: __webpack_require__(/*! ./daily-deals.component.html */ "./src/app/web-page/daily-deals/daily-deals.component.html"),
            styles: [__webpack_require__(/*! ./daily-deals.component.css */ "./src/app/web-page/daily-deals/daily-deals.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DailyDealsComponent);
    return DailyDealsComponent;
}());



/***/ }),

/***/ "./src/app/web-page/dairy-eggs-chees/dairy-eggs-chees.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/web-page/dairy-eggs-chees/dairy-eggs-chees.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1wYWdlL2RhaXJ5LWVnZ3MtY2hlZXMvZGFpcnktZWdncy1jaGVlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/web-page/dairy-eggs-chees/dairy-eggs-chees.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/web-page/dairy-eggs-chees/dairy-eggs-chees.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dairy-eggs-chees works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/web-page/dairy-eggs-chees/dairy-eggs-chees.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/web-page/dairy-eggs-chees/dairy-eggs-chees.component.ts ***!
  \*************************************************************************/
/*! exports provided: DairyEggsCheesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DairyEggsCheesComponent", function() { return DairyEggsCheesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DairyEggsCheesComponent = /** @class */ (function () {
    function DairyEggsCheesComponent() {
    }
    DairyEggsCheesComponent.prototype.ngOnInit = function () {
    };
    DairyEggsCheesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dairy-eggs-chees',
            template: __webpack_require__(/*! ./dairy-eggs-chees.component.html */ "./src/app/web-page/dairy-eggs-chees/dairy-eggs-chees.component.html"),
            styles: [__webpack_require__(/*! ./dairy-eggs-chees.component.css */ "./src/app/web-page/dairy-eggs-chees/dairy-eggs-chees.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DairyEggsCheesComponent);
    return DairyEggsCheesComponent;
}());



/***/ }),

/***/ "./src/app/web-page/dry-groceries-and-supplies/dry-groceries-and-supplies.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/web-page/dry-groceries-and-supplies/dry-groceries-and-supplies.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1wYWdlL2RyeS1ncm9jZXJpZXMtYW5kLXN1cHBsaWVzL2RyeS1ncm9jZXJpZXMtYW5kLXN1cHBsaWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/web-page/dry-groceries-and-supplies/dry-groceries-and-supplies.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/web-page/dry-groceries-and-supplies/dry-groceries-and-supplies.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dry-groceries-and-supplies works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/web-page/dry-groceries-and-supplies/dry-groceries-and-supplies.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/web-page/dry-groceries-and-supplies/dry-groceries-and-supplies.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DryGroceriesAndSuppliesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DryGroceriesAndSuppliesComponent", function() { return DryGroceriesAndSuppliesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DryGroceriesAndSuppliesComponent = /** @class */ (function () {
    function DryGroceriesAndSuppliesComponent() {
    }
    DryGroceriesAndSuppliesComponent.prototype.ngOnInit = function () {
    };
    DryGroceriesAndSuppliesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dry-groceries-and-supplies',
            template: __webpack_require__(/*! ./dry-groceries-and-supplies.component.html */ "./src/app/web-page/dry-groceries-and-supplies/dry-groceries-and-supplies.component.html"),
            styles: [__webpack_require__(/*! ./dry-groceries-and-supplies.component.css */ "./src/app/web-page/dry-groceries-and-supplies/dry-groceries-and-supplies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DryGroceriesAndSuppliesComponent);
    return DryGroceriesAndSuppliesComponent;
}());



/***/ }),

/***/ "./src/app/web-page/farm-table/farm-table.component.css":
/*!**************************************************************!*\
  !*** ./src/app/web-page/farm-table/farm-table.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\r\n    color: darkcyan;\r\n}\r\nstrong{\r\n    color: darkgoldenrod;\r\n}\r\n.row{\r\n    margin: 15px 5px;\r\n}\r\ndiv{\r\n    margin-top:30px;\r\n}\r\n.imagen{\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLXBhZ2UvZmFybS10YWJsZS9mYXJtLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC93ZWItcGFnZS9mYXJtLXRhYmxlL2Zhcm0tdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gICAgY29sb3I6IGRhcmtjeWFuO1xyXG59XHJcbnN0cm9uZ3tcclxuICAgIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xyXG59XHJcbi5yb3d7XHJcbiAgICBtYXJnaW46IDE1cHggNXB4O1xyXG59XHJcbmRpdntcclxuICAgIG1hcmdpbi10b3A6MzBweDtcclxufVxyXG4uaW1hZ2Vue1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/web-page/farm-table/farm-table.component.html":
/*!***************************************************************!*\
  !*** ./src/app/web-page/farm-table/farm-table.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-8 texto\">\r\n      <h2>FARM TO TABLE SUSTAINABLE PROGRAM</h2>\r\n      <p><strong>How do we leave our green stamp on Southern California?</strong></p>\r\n      <p>Sometimes the simplest shift can make the most significant difference. In our endeavor to bring the best produce to our customers, we remain steadfast in creating sustainable relationships with local farmers, charitable organizations, and recycling programs to reduce energy and waste.</p>\r\n    </div>\r\n    <div class=\"col imagen shadow-sm\">  \r\n      <img class=\"card-img-top\" src=\"../../assets/lechuga.jpg\" alt=\"Card image cap\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col imagen shadow-sm\">\r\n      <img class=\"card-img-top\" src=\"../../assets/carrots.jpg\" alt=\"Card image cap\">\r\n    </div>\r\n    <div class=\"col-8 texto\">\r\n      <h2>LOCAL AGRICULTURE</h2>\r\n      <p><strong>\"Supporting local agriculture and sourcing out the best tasting produce in California.\"</strong></p>\r\n      <p>West Central has established synergistic relationships with local farms, and will be providing amazing seasonal products to you all week long. For a full season we will have a consistent inventory of selected produce and weekly picks will vary.</p>\r\n      <p>Our weekly FM picks will be available in limited quantities to ensure freshness. Working directly with farms we will be pciking up produce throughout the week to maintain an inventory of the highest standard. Should you require more than what we have in stock, please contact us at 800.464.8349.</p>\r\n      <p>This will assist Chefs to create a Seasonal Farm to Table Menu with local CA produce. Having the produce stocked in the warehouse will eliminate the hassie of pre-orders and delivery deadlines, Inventory update emails will be sent to you detailing the amounts in stock and ther code numbers to assist in ordering.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-8 texto\">\r\n      <h2>PHILANTHROPY</h2>\r\n      <p>At West Central, \"community\" is not just a word, it's an ethos. We are passionately committed to supporting the CHP 11-99 Foundation, the Juvenile Diabetes Reseasch Foundation, and little Sisters of the Poor in an effort to champion their currrent and future endeavors.</p>\r\n      <p>West Central also promotes recycling and composting programs by frequenting and buying from farmer's markets on a weekly basis, and working directly with a multitude of Los Angeles, San Diego, and Inland Empire farms themselves. These programs donate to local charitable organizations. The company also provides the city and/or local non-profit programs unused #2 produce and grocery items.</p>\r\n    </div>\r\n    <div class=\"col imagen shadow-sm\">\r\n      <img class=\"card-img-top\" src=\"../../assets/solidaridad.jpg\" alt=\"Card image cap\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col imagen shadow-sm\">\r\n      <img class=\"card-img-top\" src=\"../../assets/market.jpg\" alt=\"Card image cap\">\r\n    </div>\r\n    <div class=\"col-8 texto\">\r\n      <h2>MARKETPLACE</h2>\r\n      <p>Our staff has a genuine interest in seeing that all of our clients are properly handled and cared for. Our buyers have over 200 years of cumulative produce experience. Our knowledge of the produce industry is uncompromising in its ability to deliver the right package at the right price. By handling fresh, frozen and dried fruits and vegetable, along with complete line of dairy products. West Central Produce is at the cutting edge in utilizing the latest innovations emanating from its grower-shipper relationships all over the world.</p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/web-page/farm-table/farm-table.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/web-page/farm-table/farm-table.component.ts ***!
  \*************************************************************/
/*! exports provided: FarmTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmTableComponent", function() { return FarmTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FarmTableComponent = /** @class */ (function () {
    function FarmTableComponent() {
    }
    FarmTableComponent.prototype.ngOnInit = function () {
    };
    FarmTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-farm-table',
            template: __webpack_require__(/*! ./farm-table.component.html */ "./src/app/web-page/farm-table/farm-table.component.html"),
            styles: [__webpack_require__(/*! ./farm-table.component.css */ "./src/app/web-page/farm-table/farm-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FarmTableComponent);
    return FarmTableComponent;
}());



/***/ }),

/***/ "./src/app/web-page/floral/floral.component.css":
/*!******************************************************!*\
  !*** ./src/app/web-page/floral/floral.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    width: 48%;\r\n    color: darksalmon;\r\n    font-size: 2.5rem;\r\n    margin-left: 5%;\r\n}\r\nh2{\r\n    color: darkslategray;\r\n    width: 80%;\r\n    font-size: 1.5rem;\r\n    padding-left: 5%;\r\n}\r\n.title{\r\n    margin-bottom: 30px;\r\n    background: #F0F0DF;\r\n}\r\n.info{\r\n    margin: 30px 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLXBhZ2UvZmxvcmFsL2Zsb3JhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC93ZWItcGFnZS9mbG9yYWwvZmxvcmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgICBjb2xvcjogZGFya3NhbG1vbjtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcbmgye1xyXG4gICAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcbi50aXRsZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjBGMERGO1xyXG59XHJcbi5pbmZve1xyXG4gICAgbWFyZ2luOiAzMHB4IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/web-page/floral/floral.component.html":
/*!*******************************************************!*\
  !*** ./src/app/web-page/floral/floral.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row title\">\r\n    <h1 class=\"h1\">THE PERFECT ASSORTMENT OF FLOWERS FOR ANY OCCASION</h1>\r\n    <h2 class=\"h2\">Fresh | Hand Selected | Grand to Classinc Bouquets</h2>\r\n  </div>\r\n  <div class=\"row info\">\r\n    <div class=\"col-8 texto\">\r\n      <h3>FLORAL</h3>\r\n      <p>As part of our efforts to diverify, we have introduced a new and exciting floral deparment. We offer a carefully selected assortment of flowers, from gran to classic bouquets, suitable for every occasion.</p>\r\n      <button type=\"button\" class=\"btn btn-dark\">Contact West Central</button>\r\n    </div>\r\n    <div class=\"col shadow-sm\">\r\n      <img class=\"card-img-top\" src=\"../../assets/floral.png\" alt=\"Card image cap\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/web-page/floral/floral.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/web-page/floral/floral.component.ts ***!
  \*****************************************************/
/*! exports provided: FloralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloralComponent", function() { return FloralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FloralComponent = /** @class */ (function () {
    function FloralComponent() {
    }
    FloralComponent.prototype.ngOnInit = function () {
    };
    FloralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-floral',
            template: __webpack_require__(/*! ./floral.component.html */ "./src/app/web-page/floral/floral.component.html"),
            styles: [__webpack_require__(/*! ./floral.component.css */ "./src/app/web-page/floral/floral.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FloralComponent);
    return FloralComponent;
}());



/***/ }),

/***/ "./src/app/web-page/food-safety/food-safety.component.css":
/*!****************************************************************!*\
  !*** ./src/app/web-page/food-safety/food-safety.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\np{\r\n    text-justify: auto;\r\n    padding-top:20px;\r\n    padding-bottom: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLXBhZ2UvZm9vZC1zYWZldHkvZm9vZC1zYWZldHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3dlYi1wYWdlL2Zvb2Qtc2FmZXR5L2Zvb2Qtc2FmZXR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxucHtcclxuICAgIHRleHQtanVzdGlmeTogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOjIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/web-page/food-safety/food-safety.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/web-page/food-safety/food-safety.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"row\" style=\"padding: 50px;\">\r\n    <div class=\"col col-md-8\">\r\n      <h3>\r\n        FOOD SAFETY: CERTIFICATIONS, INSPECTIONS AND AUDITS\r\n      </h3>\r\n      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe expedita, nulla harum corporis accusamus, magnam nisi itaque nemo sit facere quas esse voluptatum nihil eligendi eaque temporibus explicabo fugit quasi.</p>\r\n    </div>\r\n    <div class=\"col\">\r\n      <img src=\"../../assets/nsf.png\" alt=\"\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"background-color: #BFCCCB; padding:50px;\">\r\n    <div class=\"col col-md-4\" >\r\n        <img src=\"../../assets/FDA.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"col col-md-8\">\r\n        <p>\r\n            With the goal of assuring our clients that the products we deliver have been purchased and managed to meet the highest health and safety standards, our program mandates that we receive, store, and handle products under strict conditions that will protect the food against physical, chemical, and microbial contamination. Personnel at West Central receive extensive education and training towards this goal in order to identify sanitary failure as well as be able to expedite a product recall if one should ever arise. All records, from that of employees’ personal hygiene requirements while on the premises, to a vigorous pest control program, to maintenance and cleanliness of the work and non-work areas – including the supervision of the cleaning agents that are used – are monitored and documented fastidiously. Finally, all information is audited regularly by SCS along with their four annual on-site visits.\r\n          </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" >\r\n\r\n    <div class=\"col\">\r\n      <p>\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-6\">\r\n      <p>\r\n        PrimusGFS is a Global Food Safety Initiative (GFSI) and a fully recognized audit scheme covering both GAP and GMP scopes as well as food safety management systems (FSMS).\r\n      </p>\r\n    </div>\r\n    <div class=\"col\" >\r\n      <img src=\"../../assets/haccp.jpg\" alt=\"\" width=\"60%\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"background-color: #BFCCCB; padding:50px;\">\r\n    <div class=\"col\">\r\n      <img src=\"../../assets/USDA.jpg\" alt=\"\" style=\"max-width: 100%;\">\r\n    </div>\r\n    <div class=\"col col-md-10\">\r\n      <p style=\"padding-top:20px;\">\r\n        USDA aligns Good Agricultural Practices Audits with FDA Food Safety Rules, also providing scientific and analytical support services to improve the quality and marketing of agricultural products.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-8\">\r\n      <p>We are registered with the US Food and Drug Administration which protects the public health by ensuring that foods are safe, wholesome, sanitary and properly labeled.</p>\r\n    </div>\r\n    <div class=\"col\">\r\n        <img src=\"../../assets/LogoPrimusGFS.jpg\" alt=\"\" style=\"max-width: 100%;\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\"></div>\r\n    <div class=\"col\"></div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\"></div>\r\n    <div class=\"col\"></div>\r\n  </div>"

/***/ }),

/***/ "./src/app/web-page/food-safety/food-safety.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/web-page/food-safety/food-safety.component.ts ***!
  \***************************************************************/
/*! exports provided: FoodSafetyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodSafetyComponent", function() { return FoodSafetyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FoodSafetyComponent = /** @class */ (function () {
    function FoodSafetyComponent() {
    }
    FoodSafetyComponent.prototype.ngOnInit = function () {
    };
    FoodSafetyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-food-safety',
            template: __webpack_require__(/*! ./food-safety.component.html */ "./src/app/web-page/food-safety/food-safety.component.html"),
            styles: [__webpack_require__(/*! ./food-safety.component.css */ "./src/app/web-page/food-safety/food-safety.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FoodSafetyComponent);
    return FoodSafetyComponent;
}());



/***/ }),

/***/ "./src/app/web-page/green/green.component.css":
/*!****************************************************!*\
  !*** ./src/app/web-page/green/green.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text{\r\n    margin-top: 30px;\r\n    width:60%;\r\n    padding-left:5%;\r\n}\r\nh2{\r\n    color:olivedrab;\r\n}\r\np{\r\n    margin-top: 25px;\r\n}\r\nimg{\r\n    width: 300px;\r\n}\r\n.imagen{\r\n    margin-top: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLXBhZ2UvZ3JlZW4vZ3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC93ZWItcGFnZS9ncmVlbi9ncmVlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHR7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgd2lkdGg6NjAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OjUlO1xyXG59XHJcbmgye1xyXG4gICAgY29sb3I6b2xpdmVkcmFiO1xyXG59XHJcbnB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG4uaW1hZ2Vue1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/web-page/green/green.component.html":
/*!*****************************************************!*\
  !*** ./src/app/web-page/green/green.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-8 text\">\r\n      <h2 class=\"h2\">Going Green</h2>\r\n      <p class=\"text-justify\">West Central has a comprehensive recycling program. The company reuses, recycles and produce boxes to ensure less waste, and we are moving to an expanded paperless system with all of costumers. Additionally, energy-efficient lighting throughout the company's warehouses correlates to energy reduction.</p>\r\n      <p>Our involvement in sustainable food practices inclides, but is not limited to, donating unused products to food banks and maintaining contacts through sustainable and organic affiliations. Wr receive a huge volume of cardboard boxes through the handling of produce from the frams, markets, and suppliers; with our total product offering, we turn over 1-2 truckloads each week to a local processor who creates post-consumer paperboard.</p>\r\n    </div>\r\n    <div class=\"col imagen\">\r\n      <img src=\"../../assets/recycle.png\" alt=\"Going green img-thumbnail\">\r\n    </div> \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/web-page/green/green.component.ts":
/*!***************************************************!*\
  !*** ./src/app/web-page/green/green.component.ts ***!
  \***************************************************/
/*! exports provided: GreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreenComponent", function() { return GreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GreenComponent = /** @class */ (function () {
    function GreenComponent() {
    }
    GreenComponent.prototype.ngOnInit = function () {
    };
    GreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-green',
            template: __webpack_require__(/*! ./green.component.html */ "./src/app/web-page/green/green.component.html"),
            styles: [__webpack_require__(/*! ./green.component.css */ "./src/app/web-page/green/green.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GreenComponent);
    return GreenComponent;
}());



/***/ }),

/***/ "./src/app/web-page/home/home.component.css":
/*!**************************************************!*\
  !*** ./src/app/web-page/home/home.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#fondo{\r\nwidth: 100%;\r\nheight: 400px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLXBhZ2UvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxXQUFXO0FBQ1gsYUFBYTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvd2ViLXBhZ2UvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9uZG97XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDQwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/web-page/home/home.component.html":
/*!***************************************************!*\
  !*** ./src/app/web-page/home/home.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <img class=\"\" src=\"../../../assets/homeFondo.jpg\" alt=\"fruts\" id=\"fondo\">\r\n    </div>\r\n    <!-- Dos productos -->\r\n    <div class=\"row col-md-10 mx-auto mt-3\">\r\n        <div class=\"row col\">\r\n            <div class=\"col\">\r\n                <img class=\"rounded max-\" width=\"204\" height=\"136\" src=\"../../../assets/ryan-jacobs-168893-unsplash.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"col\">\r\n                <h6 class=\"mt-3\">INFORME DEL MERCADO CENTRAL DEL OESTE</h6>\r\n                <button type=\"button\" class=\"btn btn-outline-success\">Success</button>\r\n            </div>\r\n        </div>\r\n\r\n      <div class=\"row col\">\r\n          <div class=\"col\">\r\n              <img class=\"rounded \" width=\"204\" height=\"136\" src=\"../../../assets/rachel-omnes-1140618-unsplash.jpg\" alt=\"\">\r\n          </div>\r\n          <div class=\"col\">\r\n              <h6 class=\"mt-3\">FOTOS DEL MERCADO DE GRANJEROS</h6>\r\n              <button type=\"button\" class=\"btn btn-outline-success\">Success</button>\r\n          </div>\r\n      </div>\r\n    </div>   <!-- fin dos products ------------------------------------->\r\n\r\n    <div class=\"row\">\r\n      <h3>ACERCA DE NUESTRA GRANJA PARA PRODUCTOS DE COCINA</h3>\r\n      <img src=\"../../../assets/annie-spratt-760261-unsplash.jpg\" alt=\"\" width=\"100%\" height=\"300PX\">\r\n      <div class=\"row\">\r\n        <div class=\"col\"></div>\r\n        <div class=\"col\"></div>\r\n        <div class=\"col\"></div>\r\n        <div class=\"col\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row col-md-10 mx-auto\">\r\n      <h1>\r\n        WHY CHOOSE WEST CENTRAL FOODSERVICE?\r\n      </h1>\r\n    </div>\r\n    <div class=\"row col-md-10 mx-auto\"><p>\r\n        At West Central Foodservice, we know the best food comes from only the finest ingredients.\r\n        As one of Southern California’s leading wholesale food distributors and produce delivery service,\r\n        we deliver a handpicked selection of the world’s finest fresh and frozen produce, \r\n        dairy products and baked goods directly to your restaurant, hotel, market or kitchen.\r\n    </p></div>\r\n  </div>\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"row col-md-10 mx-auto\">\r\n      <div class=\"row col\">\r\n        <div class=\"col\">\r\n          <img class=\"\" src=\"../../../assets/partner.png\" alt=\"\" width=\"100px\" height=\"100px\">\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"col\">\r\n            <h4>\r\n              Organic & Farm Fresh\r\n            </h4>\r\n          </div>\r\n          <div class=\"col\">\r\n            <p>\r\n              We partner with local farmers and vendors to hand select and deliver\r\n              the freshest organic produce, dairy and cheeses.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row col\">\r\n        <div class=\"col\">\r\n          <img src=\"../../../assets/partner.png\" alt=\"\" width=\"100px\" height=\"100px\">\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"col\">\r\n            <h4>\r\n              Organic & Farm Fresh\r\n            </h4>\r\n          </div>\r\n          <div class=\"col\">\r\n            <p>\r\n              We partner with local farmers and vendors to hand select and deliver\r\n              the freshest organic produce, dairy and cheeses.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n<!-- ROW TWO -->\r\n\r\n<div class=\"row col-md-10 mx-auto\">\r\n  <div class=\"row col\">\r\n    <div class=\"col\">\r\n      <img src=\"../../../assets/truck.png\" alt=\"\" width=\"100px\" height=\"100px\">\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"col\">\r\n        <h4>\r\n          Organic & Farm Fresh\r\n        </h4>\r\n      </div>\r\n      <div class=\"col\">\r\n        <p>\r\n          We partner with local farmers and vendors to hand select and deliver\r\n          the freshest organic produce, dairy and cheeses.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row col\">\r\n    <div class=\"col\">\r\n      <img src=\"../../../assets/choices.png\" alt=\"\" width=\"100px\" height=\"100px\">\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"col\">\r\n        <h4>\r\n          Organic & Farm Fresh\r\n        </h4>\r\n      </div>\r\n      <div class=\"col\">\r\n        <p>\r\n          We partner with local farmers and vendors to hand select and deliver\r\n          the freshest organic produce, dairy and cheeses.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n    \r\n\r\n  </div> <!-- fin container -->"

/***/ }),

/***/ "./src/app/web-page/home/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/web-page/home/home.component.ts ***!
  \*************************************************/
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
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/web-page/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/web-page/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/web-page/images/images.component.css":
/*!******************************************************!*\
  !*** ./src/app/web-page/images/images.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1wYWdlL2ltYWdlcy9pbWFnZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/web-page/images/images.component.html":
/*!*******************************************************!*\
  !*** ./src/app/web-page/images/images.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  images works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/web-page/images/images.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/web-page/images/images.component.ts ***!
  \*****************************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImagesComponent = /** @class */ (function () {
    function ImagesComponent() {
    }
    ImagesComponent.prototype.ngOnInit = function () {
    };
    ImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-images',
            template: __webpack_require__(/*! ./images.component.html */ "./src/app/web-page/images/images.component.html"),
            styles: [__webpack_require__(/*! ./images.component.css */ "./src/app/web-page/images/images.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/app/web-page/infraestructure/infraestructure.component.css":
/*!************************************************************************!*\
  !*** ./src/app/web-page/infraestructure/infraestructure.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4, p {\r\n    text-align: center;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n}\r\n.caja {\r\n    position: relative;\r\n    width: 100%; \r\n    margin: 0px;\r\n  }\r\n.caja .content {\r\n    position: absolute; /* Position the background text */\r\n    bottom: 0; /* At the bottom. Use top:0 to append it to the top */\r\n    background: rgb(0, 0, 0); /* Fallback color */\r\n    background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */\r\n    color: #f1f1f1; /* Grey text */\r\n    width: 100%; /* Full width */\r\n    padding: 20px; /* Some padding */\r\n  }\r\n.btn-opacity {\r\n    background-color: #f4511e;\r\n    border: none;\r\n    color: white;\r\n    padding: 16px 32px;\r\n    text-align: center;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    opacity: 1;\r\n    transition: 0.3s;\r\n  }\r\n.btn-opacity:hover {opacity: 0.6}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLXBhZ2UvaW5mcmFlc3RydWN0dXJlL2luZnJhZXN0cnVjdHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztFQUNiO0FBRUE7SUFDRSxrQkFBa0IsRUFBRSxpQ0FBaUM7SUFDckQsU0FBUyxFQUFFLHFEQUFxRDtJQUNoRSx3QkFBd0IsRUFBRSxtQkFBbUI7SUFDN0MsOEJBQThCLEVBQUUsc0NBQXNDO0lBQ3RFLGNBQWMsRUFBRSxjQUFjO0lBQzlCLFdBQVcsRUFBRSxlQUFlO0lBQzVCLGFBQWEsRUFBRSxpQkFBaUI7RUFDbEM7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCO0FBRUYsb0JBQW9CLFlBQVkiLCJmaWxlIjoic3JjL2FwcC93ZWItcGFnZS9pbmZyYWVzdHJ1Y3R1cmUvaW5mcmFlc3RydWN0dXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCwgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcbi5jYWphIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2FqYSAuY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIFBvc2l0aW9uIHRoZSBiYWNrZ3JvdW5kIHRleHQgKi9cclxuICAgIGJvdHRvbTogMDsgLyogQXQgdGhlIGJvdHRvbS4gVXNlIHRvcDowIHRvIGFwcGVuZCBpdCB0byB0aGUgdG9wICovXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCAwLjUgb3BhY2l0eSAqL1xyXG4gICAgY29sb3I6ICNmMWYxZjE7IC8qIEdyZXkgdGV4dCAqL1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICAgIHBhZGRpbmc6IDIwcHg7IC8qIFNvbWUgcGFkZGluZyAqL1xyXG4gIH0gIFxyXG5cclxuICAuYnRuLW9wYWNpdHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NTExZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE2cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIH1cclxuICBcclxuLmJ0bi1vcGFjaXR5OmhvdmVyIHtvcGFjaXR5OiAwLjZ9XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/web-page/infraestructure/infraestructure.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/web-page/infraestructure/infraestructure.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"caja\">\r\n  <img src=\"../../assets/transport-food.jpg\" alt=\"Notebook\" style=\"width:100%;\">\r\n  <div class=\"content\">\r\n    <h1>INFRASTRUCTURE</h1>\r\n    <button class=\"btn-opacity\">Become a Costumer</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" style=\"padding: 30px;\">\r\n  <h4 class=\"col\" >\r\n    FLEET: FAST, FRESH DELIVERY\r\n  </h4>\r\n  <p >\r\n      Our products are delivered in temperature-controlled environments to ensure they arrive just as it was intended. We partner with farmers, product suppliers and local businesses to bring you the best quality products at the best prices.\r\n  </p>\r\n</div>\r\n<div class=\"row col\">\r\n  <div class=\"col\">\r\n      <i class=\"fas fa-truck fa-lg\" style=\"color: #ff922b; size: 10px;\"></i>\r\n  </div>\r\n  <div class=\"col\"></div>\r\n  <div class=\"col\"></div>\r\n  <div class=\"col\"></div>\r\n</div>\r\n<div class=\"row\" style=\"padding: 30px;\">\r\n  <h4 class=\"col\" >PACKING AND DISTRIBUTION FACILITIES</h4>\r\n  <p>Our facilities are custom designed with temperature-controlled units, bringing the best quality produce from the field to you. Our refrigerated delivery trucks operate with the latest in fleet management and tracking technology.</p>\r\n</div>\r\n<div class=\"row\"></div>\r\n"

/***/ }),

/***/ "./src/app/web-page/infraestructure/infraestructure.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/web-page/infraestructure/infraestructure.component.ts ***!
  \***********************************************************************/
/*! exports provided: InfraestructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfraestructureComponent", function() { return InfraestructureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfraestructureComponent = /** @class */ (function () {
    function InfraestructureComponent() {
    }
    InfraestructureComponent.prototype.ngOnInit = function () {
    };
    InfraestructureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-infraestructure',
            template: __webpack_require__(/*! ./infraestructure.component.html */ "./src/app/web-page/infraestructure/infraestructure.component.html"),
            styles: [__webpack_require__(/*! ./infraestructure.component.css */ "./src/app/web-page/infraestructure/infraestructure.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfraestructureComponent);
    return InfraestructureComponent;
}());



/***/ }),

/***/ "./src/app/web-page/locations/locations.component.css":
/*!************************************************************!*\
  !*** ./src/app/web-page/locations/locations.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.container {\r\n    position: relative;\r\n    text-align: center;\r\n    color: white;\r\n  }\r\n  \r\n  /* Bottom left text */\r\n  \r\n  .bottom-left {\r\n    position: absolute;\r\n    bottom: 8px;\r\n    left: 16px;\r\n  }\r\n  \r\n  /* Top left text */\r\n  \r\n  .top-left {\r\n    position: absolute;\r\n    top: 8px;\r\n    left: 16px;\r\n  }\r\n  \r\n  /* Top right text */\r\n  \r\n  .top-right {\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 16px;\r\n  }\r\n  \r\n  /* Bottom right text */\r\n  \r\n  .bottom-right {\r\n    position: absolute;\r\n    bottom: 8px;\r\n    right: 16px;\r\n  }\r\n  \r\n  /* Centered text */\r\n  \r\n  .centered {\r\n    margin-top: 100px;\r\n    padding-top: 5%;/*padding del */\r\n    /*background-color: rgba(255, 255, 255, 0.7);*/\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    font-family: 'Lobster Two', cursive;\r\n    font-size: 4rem;\r\n\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLXBhZ2UvbG9jYXRpb25zL2xvY2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztFQUVBLHFCQUFxQjs7RUFDckI7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7RUFDWjs7RUFFQSxrQkFBa0I7O0VBQ2xCO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0VBQ1o7O0VBRUEsbUJBQW1COztFQUNuQjtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztFQUNiOztFQUVBLHNCQUFzQjs7RUFDdEI7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQSxrQkFBa0I7O0VBQ2xCO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWUsQ0FBQyxlQUFlO0lBQy9CLDhDQUE4QztJQUM5QywwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyxtQ0FBbUM7SUFDbkMsZUFBZTs7RUFFakIiLCJmaWxlIjoic3JjL2FwcC93ZWItcGFnZS9sb2NhdGlvbnMvbG9jYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEJvdHRvbSBsZWZ0IHRleHQgKi9cclxuICAuYm90dG9tLWxlZnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA4cHg7XHJcbiAgICBsZWZ0OiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAvKiBUb3AgbGVmdCB0ZXh0ICovXHJcbiAgLnRvcC1sZWZ0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgbGVmdDogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLyogVG9wIHJpZ2h0IHRleHQgKi9cclxuICAudG9wLXJpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEJvdHRvbSByaWdodCB0ZXh0ICovXHJcbiAgLmJvdHRvbS1yaWdodCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDhweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAvKiBDZW50ZXJlZCB0ZXh0ICovXHJcbiAgLmNlbnRlcmVkIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUlOy8qcGFkZGluZyBkZWwgKi9cclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpOyovXHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyIFR3bycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcblxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/web-page/locations/locations.component.html":
/*!*************************************************************!*\
  !*** ./src/app/web-page/locations/locations.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<img src=\"../../assets/highway.jpg\" alt=\"\" style=\"width:100%\">\r\n    <div class=\"centered\">\r\n      Our Location Your Place\r\n    </div>\r\n  <div class=\"row\">\r\n    <p>West Central Food Service has four ideally placed\r\n       warehouse facilities and distributes to multiple\r\n       states including California, Nevada, Utah, Colorado and Arizona.</p>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <h1>\r\n        DISTRIBUTION REACH\r\n      </h1>\r\n    </div>\r\n    <div class=\"col\">\r\n      <h1>\r\n        WAREHOUSE LOCATIONS\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <img class=\"img-thumbnail\" src=\"../../assets/franquicias.jpg\" alt=\"\">\r\n    </div>\r\n    <div class=\"col text-aling-center\">\r\n      <h4>LOS ANGELES</h4>\r\n      <p>12840 Leyva Street – Norwalk, CA 90650</p>\r\n      <h4>LAS VEGAS</h4>\r\n      <p>1151 Grier Drive – Las Vegas, NV 89119</p>\r\n      <h4>NORTHERN CALIFORNIA</h4>\r\n      <p>30200 Whipple Road – Union City, CA 94587</p>\r\n      <h4>SAN DIEGO</h4>\r\n      <p>220 Bingham Drive #104 – San Marcos, CA 92069</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <img src=\"../../assets/maxresdefault.jpg\" alt=\"\">\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/web-page/locations/locations.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/web-page/locations/locations.component.ts ***!
  \***********************************************************/
/*! exports provided: LocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsComponent", function() { return LocationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocationsComponent = /** @class */ (function () {
    function LocationsComponent() {
    }
    LocationsComponent.prototype.ngOnInit = function () {
    };
    LocationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-locations',
            template: __webpack_require__(/*! ./locations.component.html */ "./src/app/web-page/locations/locations.component.html"),
            styles: [__webpack_require__(/*! ./locations.component.css */ "./src/app/web-page/locations/locations.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocationsComponent);
    return LocationsComponent;
}());



/***/ }),

/***/ "./src/app/web-page/login/login.component.css":
/*!****************************************************!*\
  !*** ./src/app/web-page/login/login.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\r\n    width:30%;\r\n    margin: 20px auto;\r\n}\r\n.form-group{\r\n    width: 60%;\r\n    margin: 0 auto;\r\n}\r\nform{\r\n    padding: 20px 0px;\r\n    margin-top: 50px;\r\n}\r\n.forgot{\r\n    color: green;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLXBhZ2UvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvd2ViLXBhZ2UvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG57XHJcbiAgICB3aWR0aDozMCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG4uZm9ybS1ncm91cHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5mb3Jte1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi5mb3Jnb3R7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/web-page/login/login.component.html":
/*!*****************************************************!*\
  !*** ./src/app/web-page/login/login.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputEmail1\">USERNAME / EMAIL: </label>\r\n      <input type=\"email\" class=\"form-control shadow-sm\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"ENTER USERNAME/EMAIL\">\r\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email or username with anyone else.</small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputPassword1\">PASSWORD:</label>\r\n      <input type=\"password\" class=\"form-control shadow-sm\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n    </div>\r\n    <button type=\"submit\" class=\"btn  btn-success btn-lg btn-block shadow-sm\">LOGIN</button>\r\n    <p class=\"forgot text-center\"><u>Forgot Password?</u></p>\r\n    <br>\r\n    <p class=\"text-center font-weight-light\"><strong>First time user?</strong> Please call your representative for your Customer ID and password.</p>\r\n    <p class=\"text-center font-weight-light\"><strong>Having trouble logging in?</strong> Please call customer service <strong>(213) 629-3600</strong></p>\r\n  </form>"

/***/ }),

/***/ "./src/app/web-page/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/web-page/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/web-page/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/web-page/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/web-page/organic/organic.component.css":
/*!********************************************************!*\
  !*** ./src/app/web-page/organic/organic.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1wYWdlL29yZ2FuaWMvb3JnYW5pYy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/web-page/organic/organic.component.html":
/*!*********************************************************!*\
  !*** ./src/app/web-page/organic/organic.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  organic works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/web-page/organic/organic.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/web-page/organic/organic.component.ts ***!
  \*******************************************************/
/*! exports provided: OrganicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganicComponent", function() { return OrganicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrganicComponent = /** @class */ (function () {
    function OrganicComponent() {
    }
    OrganicComponent.prototype.ngOnInit = function () {
    };
    OrganicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-organic',
            template: __webpack_require__(/*! ./organic.component.html */ "./src/app/web-page/organic/organic.component.html"),
            styles: [__webpack_require__(/*! ./organic.component.css */ "./src/app/web-page/organic/organic.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrganicComponent);
    return OrganicComponent;
}());



/***/ }),

/***/ "./src/app/web-page/our-vendors/our-vendors.component.css":
/*!****************************************************************!*\
  !*** ./src/app/web-page/our-vendors/our-vendors.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container-fluid{\r\n    margin-top: 40px;\r\n    padding: 0px 10px;\r\n}\r\n.col-xs-1-12{\r\n    margin: 20px auto;\r\n}\r\np.card-body{\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\ndiv.card-body{\r\n    padding-left: 2px;\r\n    padding-right: 2px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLXBhZ2Uvb3VyLXZlbmRvcnMvb3VyLXZlbmRvcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3dlYi1wYWdlL291ci12ZW5kb3JzL291ci12ZW5kb3JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXItZmx1aWR7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbn1cclxuLmNvbC14cy0xLTEye1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbn1cclxucC5jYXJkLWJvZHl7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5kaXYuY2FyZC1ib2R5e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/web-page/our-vendors/our-vendors.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/web-page/our-vendors/our-vendors.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-1-12\">\r\n        <div class=\"card\" style=\"width: 18rem;\">\r\n          <img class=\"card-img-top\" src=\"../../assets/test.jpg\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">Alta Dena</h5>\r\n            <p class= \"card-body text-center\">Alta Dena understands the importance of making nutritious and good meals for the family. Recipes made with high quality ingredients, which make you fell good in giving to your loved ones.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-1-12\">\r\n        <div class=\"card\" style=\"width: 18rem;\">\r\n          <img class=\"card-img-top\" src=\"../../assets/test.jpg\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">Babé Farms</h5>\r\n            <p class= \"card-body text-center\">Quality produce, year-round availability and variety, family owned and Operated, Family Safety plus Farming Practices, and the Pioneer in Specialty Vegetables</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-1-12\">\r\n        <div class=\"card\" style=\"width: 18rem;\">\r\n          <img class=\"card-img-top\" src=\"../../assets/test.jpg\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">KEN'S</h5>\r\n            <p class= \"card-body text-center\">Ken's salad dressings were born in a Steakhouse and live on through bold tastes and fresh ingredients. Find offers, recipes, and over 60 flavors.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-1-12\">\r\n        <div class=\"card\" style=\"width: 18rem;\">\r\n          <img class=\"card-img-top\" src=\"../../assets/test.jpg\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">Boggiatto</h5>\r\n            <p class= \"card-body text-center\">Produce company which grows & ships baby iceberg lettuce, Brissels sprouts, romaine hearts & more. Discover premium produce for your food service operations.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-1-12\">\r\n        <div class=\"card\" style=\"width: 18rem;\">\r\n          <img class=\"card-img-top\" src=\"../../assets/test.jpg\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">Diana's</h5>\r\n            <p class= \"card-body text-center\">Diana's Mexican Food Products, Inc., offers custom packaging and wholesale products for the food industry, Authentic, fresh and delicious Mexican food menu that is voted number one in Los Angeles County.</p>\r\n          </div>\r\n        </div>\r\n      </div>  \r\n      <div class=\"col-xs-1-12\">\r\n        <div class=\"card\" style=\"width: 18rem;\">\r\n          <img class=\"card-img-top\" src=\"../../assets/test.jpg\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">Farmer John</h5>\r\n            <p class= \"card-body text-center\">Farmer John has been a Southern California staple since practically forever. The Clougherty Family's commitment to high-quality MEATS transformed ther humble Vernon farm int the farm of the West.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-1-12\">\r\n        <div class=\"card\" style=\"width: 18rem;\">\r\n          <img class=\"card-img-top\" src=\"../../assets/test.jpg\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">Guan's</h5>\r\n            <p class= \"card-body text-center\">Established in 1996, Guan's Mushroom is dedicated grower of fresh mushrooms, with five distribution centers located in San Francisco. Los Angeles, New York, West Grove and Toronto respectively. </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-1-12\">\r\n        <div class=\"card\" style=\"width: 18rem;\">\r\n          <img class=\"card-img-top\" src=\"../../assets/test.jpg\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">Gourmet Specialties</h5>\r\n            <p class= \"card-body text-center\">Gourmet Specialties offering wholesale herbs and spices. from Vernon California, Fresh, organic and the highest quality.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-1-12\">\r\n        <div class=\"card\" style=\"width: 18rem;\">\r\n          <img class=\"card-img-top\" src=\"../../assets/test.jpg\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">AMERICAS</h5>\r\n            <p class= \"card-bodytext-center\">Americas Asparagus grown throughout the Americas in Peru, Mexico, California and Washington so that it is always available. Providing retailers, wholesalers, and food service companies with asparagus year-round</p>\r\n          </div>\r\n        </div>\r\n      </div>  \r\n    </div>\r\n  </div>  "

/***/ }),

/***/ "./src/app/web-page/our-vendors/our-vendors.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/web-page/our-vendors/our-vendors.component.ts ***!
  \***************************************************************/
/*! exports provided: OurVendorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurVendorsComponent", function() { return OurVendorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OurVendorsComponent = /** @class */ (function () {
    function OurVendorsComponent() {
    }
    OurVendorsComponent.prototype.ngOnInit = function () {
    };
    OurVendorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-our-vendors',
            template: __webpack_require__(/*! ./our-vendors.component.html */ "./src/app/web-page/our-vendors/our-vendors.component.html"),
            styles: [__webpack_require__(/*! ./our-vendors.component.css */ "./src/app/web-page/our-vendors/our-vendors.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OurVendorsComponent);
    return OurVendorsComponent;
}());



/***/ }),

/***/ "./src/app/web-page/produce/produce.component.css":
/*!********************************************************!*\
  !*** ./src/app/web-page/produce/produce.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1wYWdlL3Byb2R1Y2UvcHJvZHVjZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/web-page/produce/produce.component.html":
/*!*********************************************************!*\
  !*** ./src/app/web-page/produce/produce.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  produce works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/web-page/produce/produce.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/web-page/produce/produce.component.ts ***!
  \*******************************************************/
/*! exports provided: ProduceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduceComponent", function() { return ProduceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProduceComponent = /** @class */ (function () {
    function ProduceComponent() {
    }
    ProduceComponent.prototype.ngOnInit = function () {
    };
    ProduceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-produce',
            template: __webpack_require__(/*! ./produce.component.html */ "./src/app/web-page/produce/produce.component.html"),
            styles: [__webpack_require__(/*! ./produce.component.css */ "./src/app/web-page/produce/produce.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProduceComponent);
    return ProduceComponent;
}());



/***/ }),

/***/ "./src/app/web-page/protein/protein.component.css":
/*!********************************************************!*\
  !*** ./src/app/web-page/protein/protein.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    width: 48%;\r\n    color: darksalmon;\r\n    font-size: 2.5rem;\r\n    margin-left: 5%;\r\n}\r\n.title{\r\n    margin-bottom: 30px;\r\n    background: #F0F0DF;\r\n}\r\n.info{\r\n    margin: 30px 10px;\r\n}\r\n.imagen{\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLXBhZ2UvcHJvdGVpbi9wcm90ZWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvd2ViLXBhZ2UvcHJvdGVpbi9wcm90ZWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgICBjb2xvcjogZGFya3NhbG1vbjtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcbi50aXRsZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjBGMERGO1xyXG59XHJcbi5pbmZve1xyXG4gICAgbWFyZ2luOiAzMHB4IDEwcHg7XHJcbn1cclxuLmltYWdlbntcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/web-page/protein/protein.component.html":
/*!*********************************************************!*\
  !*** ./src/app/web-page/protein/protein.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row title\">\r\n    <h1 class=\"h1\">GUARANTEED FRESH POULTRY & QUALITY CUTS</h1>\r\n  </div>\r\n  <div class=\"row info\">\r\n    <div class=\"col-8 texto\">\r\n      <h3>BEEF</h3>\r\n      <p>All of our beef is sourced from the heart of the country in the U.S.A and is best beef available. We pride oruselves on distributing the highest quality beef that has been humanely handled from established family farms that care about the environment. We are proud to represent producers that concentrate, source and age-verified cattle as well as non-hormone treated cattle.</p>\r\n      <ul>\r\n        <li> Porter House Steaks</li>\r\n        <li> Bone-In Ribeye</li>\r\n        <li> Top Sirloin</li>\r\n        <li> Fillet</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col imagen shadow-sm\">\r\n      <img class=\"card-img-top\" src=\"../../assets/beef.jpg\" alt=\"Card image cap\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row info\">\r\n    <div class=\"col imagen shadow-sm\">\r\n      <img class=\"card-img-top\" src=\"../../assets/pork.jpg\" alt=\"Card image cap\">\r\n    </div>\r\n    <div class=\"col-8 texto\">\r\n      <h3>PORK</h3>\r\n      <p>West Central continuosly evaluates its pork products for meat quality attributes. We are committed to distributing Pork that has been evaluated for the propper in-plant handling of animals prior to slautghter for both animal welfare and meat quality. Pork products can be traced back to their original farms through a source verification system. Our suppliers are USDA Process Verified which ensures that we provide consistent quality pork products.</p>\r\n      <ul>\r\n        <li> Proscultto</li>\r\n        <li> Bacon</li>\r\n        <li> Honey Ham</li>\r\n        <li> Ribs</li>\r\n        <li> Pork Chops</li>\r\n      </ul>  \r\n    </div>\r\n  </div>\r\n  <div class=\"row info\">\r\n    <div class=\"col-8 texto\">\r\n      <h3>POULTRY</h3>\r\n      <p>We offers a comprehensive selection of poultry that is free of growth hormones and steroids. We strive to provide poultry products that are minimally processed, cage free and raised in a humane manner by allowing them to roam in a stress-free environment. Because of cleaner living quarters, a healthier and happier chicken is produced having a better taste.</p>\r\n      <ul>\r\n        <li> Chicken Breasts</li>\r\n        <li> Chicken Thighs</li>\r\n        <li> Chicken Tenders</li>\r\n        <li> Whole Chicken</li>\r\n        <li> Organic & Free-range Chicken</li>\r\n      </ul>  \r\n    </div>\r\n    <div class=\"col imagen shadow-sm\">\r\n      <img class=\"card-img-top\" src=\"../../assets/poultry.jpg\" alt=\"Card image cap\">\r\n    </div>\r\n    <div class=\"row info\">\r\n      <div class=\"col imagen shadow-sm\">\r\n        <img class=\"card-img-top\" src=\"../../assets/lamb.jpg\" alt=\"Card image cap\">\r\n      </div>\r\n      <div class=\"col-8 texto\">\r\n        <h3>LAMB & VEAL</h3>\r\n        <p>We pride ourselves on sourcing from farms where lambs are set to pasture on vast, natural grasslands and treated humanely to honor the animals. We are passionate about bringing a sustainable, delicious, nutritious product to your establishment. We only work with ranchers who are as acommitted to care of the animals and the environment as we are. We support innovative suppliers that raise grazing lamb in vineyards to reduce heavy equipment use while replenishing nutrients and microbes in the soil.</p>\r\n        <ul>\r\n          <li> Lamb Chops</li>\r\n          <li> Lamb Shanks</li>\r\n          <li> Lamb Loin</li>\r\n          <li> Leg of Lamb</li>\r\n        </ul>  \r\n      </div>\r\n      <div class=\"row info\">\r\n        <div class=\"col-8 texto\">\r\n          <h3>SEAFOOD</h3>\r\n          <p>At West Central, we carry a wide variety of premium quality seafood, both fresh and frozen. From Alaskan cod to Yellowtail, Crustacean, Mollusk and Roe, we source our product from all seven continents in order to provide the diverse assortment our customers have grown to expect. We strongly support the seasonal limitations of both wild caught and farmed seafood, and only purchase from fiheries that follow the highest standards of ethical compliance practices in order to prevent over fishing and preserve our marine ecosystem.</p>\r\n        </div>\r\n        <div class=\"col imagen shadow-sm\">\r\n          <img class=\"card-img-top\" src=\"../../assets/seafood.jpg\" alt=\"Card image cap\">\r\n        </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/web-page/protein/protein.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/web-page/protein/protein.component.ts ***!
  \*******************************************************/
/*! exports provided: ProteinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProteinComponent", function() { return ProteinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProteinComponent = /** @class */ (function () {
    function ProteinComponent() {
    }
    ProteinComponent.prototype.ngOnInit = function () {
    };
    ProteinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-protein',
            template: __webpack_require__(/*! ./protein.component.html */ "./src/app/web-page/protein/protein.component.html"),
            styles: [__webpack_require__(/*! ./protein.component.css */ "./src/app/web-page/protein/protein.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProteinComponent);
    return ProteinComponent;
}());



/***/ }),

/***/ "./src/app/web-page/specialty/specialty.component.css":
/*!************************************************************!*\
  !*** ./src/app/web-page/specialty/specialty.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    width: 48%;\r\n    color: darksalmon;\r\n    font-size: 2.5rem;\r\n    margin-left: 5%;\r\n}\r\nh2{\r\n    color: darkslategray;\r\n    width: 80%;\r\n    font-size: 1.5rem;\r\n    padding-left: 5%;\r\n}\r\n.title{\r\n    margin-bottom: 30px;\r\n    background: #F0F0DF;\r\n}\r\n.info{\r\n    margin: 30px 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLXBhZ2Uvc3BlY2lhbHR5L3NwZWNpYWx0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC93ZWItcGFnZS9zcGVjaWFsdHkvc3BlY2lhbHR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgICBjb2xvcjogZGFya3NhbG1vbjtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcbmgye1xyXG4gICAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcbi50aXRsZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjBGMERGO1xyXG59XHJcbi5pbmZve1xyXG4gICAgbWFyZ2luOiAzMHB4IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/web-page/specialty/specialty.component.html":
/*!*************************************************************!*\
  !*** ./src/app/web-page/specialty/specialty.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row title\">\r\n    <h1 class=\"h1\">SPECIALTY NUTS, SPICES, CURED MEAT, OIL & VINEGAR'S </h1>\r\n    <h2 class=\"h2\">Organic | Standard Grade | Free-range | Cage-free</h2>\r\n  </div>\r\n  <div class=\"row info\">\r\n    <div class=\"col-8 texto\">\r\n      <h3>CHARCUTERIE & CURED MEATS</h3>\r\n      <p>West Central provides a mouth-watering selection of dried and cured sausages. We offer dried meats suchs as prosciutto and Iberico ham and supply a variety of delicious offerings in containers, such as pate, terrine and mousse. Other popular items include high quality sulfate and nitrate free bacon and pastrami.</p>\r\n      <button type=\"button\" class=\"btn btn-dark\">Angel Salumi</button>\r\n    </div>\r\n    <div class=\"col shadow-sm\">\r\n      <img class=\"card-img-top\" src=\"../../assets/cured.jpg\" alt=\"Card image cap\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row info\">\r\n    <div class=\"col shadow-sm\">\r\n      <img class=\"card-img-top\" src=\"../../assets/herbs.jpg\" alt=\"Card image cap\">\r\n    </div>\r\n    <div class=\"col-8 texto\">\r\n      <h3>HERBS & SPICES</h3>\r\n      <p>We offer our customers with quality, delicious tasting, healthy ingredients and custom blends within a sustainable and nature-respecting environment.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row info\">\r\n    <div class=\"col-8 texto\">\r\n      <h3>FROZEN</h3>\r\n      <p>Because most frozen fruits and viggies are frozen shortly after they're harvested, they're allowed to fully ripen, which means they're chock full of vitamins, minerals and antioxidants, and freezing \"locks in\" many of their nutrients. We stock a large selection of frozen fruits and vegetables from fries to berries.</p>\r\n    </div>\r\n    <div class=\"col shadow-sm\">\r\n      <img class=\"card-img-top\" src=\"../../assets/frozen.jpg\" alt=\"Card image cap\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row info\">\r\n    <div class=\"col shadow-sm\">\r\n      <img class=\"card-img-top\" src=\"../../assets/beverages.jpg\" alt=\"Card image cap\">\r\n    </div>\r\n    <div class=\"col-8 texto\">\r\n      <h3>BEVERAGES, MIXES & JUICES</h3>\r\n      <p>care for a refreshing beverage? We carry high quality juices (even custom blends that detoxify and boost vitality), fresh squeezed orange juice, water, soda as well as a variety of smoothie and cocktail mixes. We are just getting warmed up with our ever expanding collection of line teas, coffe and hot cocoa mixes as well as a large selection of fresh packed fruit and tomato puree's that are sourced from quality manufacturer's worldwide.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row info\">\r\n    <div class=\"col-8 texto\">\r\n      <h3>DRIED FRUITS & NUTS</h3>\r\n      <p>Our collection offers dried peaches, apricots, pears, dates, mango's and more. Quality nuts that are available includes pistachios, cashews, honey-roasted peanuts, pecans, dark chocolate almonds, and mixed nuts.</p>\r\n    </div>\r\n    <div class=\"col shadow-sm\">\r\n      <img class=\"card-img-top\" src=\"../../assets/dried.jpg\" alt=\"Card image cap\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row info\">\r\n    <div class=\"col shadow-sm\">\r\n      <img class=\"card-img-top\" src=\"../../assets/oils.jpg\" alt=\"Card image cap\">\r\n    </div>\r\n    <div class=\"col-8 texto\">\r\n      <h3>OILS & VINEGARS</h3>\r\n      <p>We offer an expansive variety of Extra Virgin Olive Oils, salad dressings as well as authentic, aged Balsamic Vinegars. We also have a variety of flavored olive oils from small batch artisanal producers.</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/web-page/specialty/specialty.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/web-page/specialty/specialty.component.ts ***!
  \***********************************************************/
/*! exports provided: SpecialtyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialtyComponent", function() { return SpecialtyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpecialtyComponent = /** @class */ (function () {
    function SpecialtyComponent() {
    }
    SpecialtyComponent.prototype.ngOnInit = function () {
    };
    SpecialtyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-specialty',
            template: __webpack_require__(/*! ./specialty.component.html */ "./src/app/web-page/specialty/specialty.component.html"),
            styles: [__webpack_require__(/*! ./specialty.component.css */ "./src/app/web-page/specialty/specialty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpecialtyComponent);
    return SpecialtyComponent;
}());



/***/ }),

/***/ "./src/app/web-page/videos/videos.component.css":
/*!******************************************************!*\
  !*** ./src/app/web-page/videos/videos.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1wYWdlL3ZpZGVvcy92aWRlb3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/web-page/videos/videos.component.html":
/*!*******************************************************!*\
  !*** ./src/app/web-page/videos/videos.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  videos works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/web-page/videos/videos.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/web-page/videos/videos.component.ts ***!
  \*****************************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideosComponent = /** @class */ (function () {
    function VideosComponent() {
    }
    VideosComponent.prototype.ngOnInit = function () {
    };
    VideosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__(/*! ./videos.component.html */ "./src/app/web-page/videos/videos.component.html"),
            styles: [__webpack_require__(/*! ./videos.component.css */ "./src/app/web-page/videos/videos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideosComponent);
    return VideosComponent;
}());



/***/ }),

/***/ "./src/app/web-page/weekly-news/weekly-news.component.css":
/*!****************************************************************!*\
  !*** ./src/app/web-page/weekly-news/weekly-news.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1wYWdlL3dlZWtseS1uZXdzL3dlZWtseS1uZXdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/web-page/weekly-news/weekly-news.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/web-page/weekly-news/weekly-news.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  weekly-news works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/web-page/weekly-news/weekly-news.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/web-page/weekly-news/weekly-news.component.ts ***!
  \***************************************************************/
/*! exports provided: WeeklyNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyNewsComponent", function() { return WeeklyNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WeeklyNewsComponent = /** @class */ (function () {
    function WeeklyNewsComponent() {
    }
    WeeklyNewsComponent.prototype.ngOnInit = function () {
    };
    WeeklyNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weekly-news',
            template: __webpack_require__(/*! ./weekly-news.component.html */ "./src/app/web-page/weekly-news/weekly-news.component.html"),
            styles: [__webpack_require__(/*! ./weekly-news.component.css */ "./src/app/web-page/weekly-news/weekly-news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WeeklyNewsComponent);
    return WeeklyNewsComponent;
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

module.exports = __webpack_require__(/*! C:\Users\carch\Documents\GitHub\altadistribucioncliente\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map