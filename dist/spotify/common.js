"use strict";
(self["webpackChunkspotify"] = self["webpackChunkspotify"] || []).push([["common"],{

/***/ 9879:
/*!************************************************************!*\
  !*** ./src/app/modules/history/services/search.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": () => (/* binding */ SearchService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class SearchService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
  }
  searchTracks$(term) {
    return this.httpClient.get(`${this.URL}/tracks?src=${term}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(dataRaw => dataRaw.data));
  }
}
SearchService.ɵfac = function SearchService_Factory(t) {
  return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
SearchService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: SearchService,
  factory: SearchService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=common.js.map