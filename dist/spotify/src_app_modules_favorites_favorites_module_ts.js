"use strict";
(self["webpackChunkspotify"] = self["webpackChunkspotify"] || []).push([["src_app_modules_favorites_favorites_module_ts"],{

/***/ 581:
/*!***************************************************************!*\
  !*** ./src/app/modules/favorites/favorites-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesRoutingModule": () => (/* binding */ FavoritesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_favorite_page_favorite_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/favorite-page/favorite-page.component */ 7113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _pages_favorite_page_favorite_page_component__WEBPACK_IMPORTED_MODULE_0__.FavoritePageComponent
}];
class FavoritesRoutingModule {}
FavoritesRoutingModule.ɵfac = function FavoritesRoutingModule_Factory(t) {
  return new (t || FavoritesRoutingModule)();
};
FavoritesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: FavoritesRoutingModule
});
FavoritesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FavoritesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1828:
/*!*******************************************************!*\
  !*** ./src/app/modules/favorites/favorites.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesModule": () => (/* binding */ FavoritesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites-routing.module */ 581);
/* harmony import */ var _pages_favorite_page_favorite_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/favorite-page/favorite-page.component */ 7113);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class FavoritesModule {}
FavoritesModule.ɵfac = function FavoritesModule_Factory(t) {
  return new (t || FavoritesModule)();
};
FavoritesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: FavoritesModule
});
FavoritesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritesRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FavoritesModule, {
    declarations: [_pages_favorite_page_favorite_page_component__WEBPACK_IMPORTED_MODULE_1__.FavoritePageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritesRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 7113:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/favorites/pages/favorite-page/favorite-page.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritePageComponent": () => (/* binding */ FavoritePageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _modules_history_services_search_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/history/services/search.service */ 9879);
/* harmony import */ var _shared_components_play_list_header_play_list_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/play-list-header/play-list-header.component */ 8066);
/* harmony import */ var _shared_components_play_list_body_play_list_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/play-list-body/play-list-body.component */ 1615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);






class FavoritePageComponent {
  constructor(searchService) {
    this.searchService = searchService;
    this.listResults$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([]);
  }
  ngOnInit() {}
  receiveData(event) {
    console.log(' --> Estoy en el padre...', event);
    this.listResults$ = this.searchService.searchTracks$(event);
  }
}
FavoritePageComponent.ɵfac = function FavoritePageComponent_Factory(t) {
  return new (t || FavoritePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_modules_history_services_search_service__WEBPACK_IMPORTED_MODULE_0__.SearchService));
};
FavoritePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: FavoritePageComponent,
  selectors: [["app-favorite-page"]],
  decls: 4,
  vars: 3,
  consts: [[1, "favorites-page"], [3, "tracks"]],
  template: function FavoritePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-play-list-header")(2, "app-play-list-body", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tracks", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, ctx.listResults$));
    }
  },
  dependencies: [_shared_components_play_list_header_play_list_header_component__WEBPACK_IMPORTED_MODULE_1__.PlayListHeaderComponent, _shared_components_play_list_body_play_list_body_component__WEBPACK_IMPORTED_MODULE_2__.PlayListBodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_favorites_favorites_module_ts.js.map