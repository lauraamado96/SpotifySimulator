"use strict";
(self["webpackChunkspotify"] = self["webpackChunkspotify"] || []).push([["src_app_modules_tracks_tracks_module_ts"],{

/***/ 7341:
/*!***************************************************************************!*\
  !*** ./src/app/modules/tracks/pages/tracks-page/tracks-page.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TracksPageComponent": () => (/* binding */ TracksPageComponent)
/* harmony export */ });
/* harmony import */ var _Users_lauraamado_Documents_angular_desde_cero_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _modules_tracks_services_track_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/tracks/services/track.service */ 2548);
/* harmony import */ var _shared_components_section_generic_section_generic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/section-generic/section-generic.component */ 462);





class TracksPageComponent {
  constructor(trackService) {
    this.trackService = trackService;
    this.tracksTrending = [];
    this.tracksRandom = [];
    this.listObservers$ = [];
  }
  ngOnInit() {
    this.loadDataAll();
    this.loadDataRandom();
  }
  loadDataAll() {
    var _this = this;
    return (0,_Users_lauraamado_Documents_angular_desde_cero_spotify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tracksTrending$ = _this.trackService.getAllTracks$();
      _this.tracksTrending = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(tracksTrending$);
    })();
  }
  loadDataRandom() {
    this.trackService.getAllRandom$().subscribe(response => {
      this.tracksRandom = response;
    });
  }
  ngOnDestroy() {}
}
TracksPageComponent.ɵfac = function TracksPageComponent_Factory(t) {
  return new (t || TracksPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_modules_tracks_services_track_service__WEBPACK_IMPORTED_MODULE_1__.TrackService));
};
TracksPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: TracksPageComponent,
  selectors: [["app-tracks-page"]],
  decls: 3,
  vars: 6,
  consts: [[1, "tracks-page"], [3, "dataTracks", "mode", "title"]],
  template: function TracksPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-section-generic", 1)(2, "app-section-generic", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataTracks", ctx.tracksTrending)("mode", "small")("title", "\u00A1La mejor m\u00FAsica del mundo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataTracks", ctx.tracksRandom)("mode", "big")("title", "Lo mejor de Electr\u00F3nica");
    }
  },
  dependencies: [_shared_components_section_generic_section_generic_component__WEBPACK_IMPORTED_MODULE_2__.SectionGenericComponent],
  styles: [".tracks-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy90cmFja3MvcGFnZXMvdHJhY2tzLXBhZ2UvdHJhY2tzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhY2tzLXBhZ2Uge1xuICAgIHBhZGRpbmc6IDFyZW07XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2548:
/*!**********************************************************!*\
  !*** ./src/app/modules/tracks/services/track.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackService": () => (/* binding */ TrackService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1353);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);




class TrackService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
  }
  skipById(listTracks, id) {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id);
      resolve(listTmp);
    });
  }
  getAllTracks$() {
    return this.httpClient.get(`${this.URL}/tracks`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(({
      data
    }) => {
      return data;
    }));
  }
  getAllRandom$() {
    return this.httpClient.get(`${this.URL}/tracks`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(({
      data
    }) => this.skipById(data, 2)), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      const {
        status,
        statusText
      } = err;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
    }));
  }
}
TrackService.ɵfac = function TrackService_Factory(t) {
  return new (t || TrackService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
};
TrackService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: TrackService,
  factory: TrackService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 979:
/*!*********************************************************!*\
  !*** ./src/app/modules/tracks/tracks-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TracksRoutingModule": () => (/* binding */ TracksRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_tracks_page_tracks_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/tracks-page/tracks-page.component */ 7341);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _pages_tracks_page_tracks_page_component__WEBPACK_IMPORTED_MODULE_0__.TracksPageComponent
}];
class TracksRoutingModule {}
TracksRoutingModule.ɵfac = function TracksRoutingModule_Factory(t) {
  return new (t || TracksRoutingModule)();
};
TracksRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: TracksRoutingModule
});
TracksRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TracksRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6635:
/*!*************************************************!*\
  !*** ./src/app/modules/tracks/tracks.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TracksModule": () => (/* binding */ TracksModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _tracks_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracks-routing.module */ 979);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ 4466);
/* harmony import */ var _pages_tracks_page_tracks_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/tracks-page/tracks-page.component */ 7341);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class TracksModule {}
TracksModule.ɵfac = function TracksModule_Factory(t) {
  return new (t || TracksModule)();
};
TracksModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: TracksModule
});
TracksModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _tracks_routing_module__WEBPACK_IMPORTED_MODULE_0__.TracksRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TracksModule, {
    declarations: [_pages_tracks_page_tracks_page_component__WEBPACK_IMPORTED_MODULE_2__.TracksPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _tracks_routing_module__WEBPACK_IMPORTED_MODULE_0__.TracksRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ }),

/***/ 8611:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/lastValueFrom.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lastValueFrom": () => (/* binding */ lastValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/EmptyError */ 4423);

function lastValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    let _hasValue = false;
    let _value;
    source.subscribe({
      next: value => {
        _value = value;
        _hasValue = true;
      },
      error: reject,
      complete: () => {
        if (_hasValue) {
          resolve(_value);
        } else if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__.EmptyError());
        }
      }
    });
  });
}

/***/ }),

/***/ 1670:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_tracks_tracks_module_ts.js.map