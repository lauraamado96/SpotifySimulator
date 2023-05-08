"use strict";
(self["webpackChunkspotify"] = self["webpackChunkspotify"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_guards_session_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/guards/session.guard */ 2022);
/* harmony import */ var _modules_home_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/home/pages/home-page/home-page.component */ 4032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: 'auth',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2020_forms_mjs"), __webpack_require__.e("src_app_modules_auth_auth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/auth.module */ 3970)).then(m => m.AuthModule)
}, {
  path: '',
  component: _modules_home_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__.HomePageComponent,
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/home/home.module */ 4882)).then(m => m.HomeModule),
  canActivate: [_core_guards_session_guard__WEBPACK_IMPORTED_MODULE_0__.SessionGuard]
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'spotify';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _core_interceptors_inject_session_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/interceptors/inject-session.interceptor */ 3405);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ 5502);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__.CookieService, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HTTP_INTERCEPTORS,
    useClass: _core_interceptors_inject_session_interceptor__WEBPACK_IMPORTED_MODULE_0__.InjectSessionInterceptor,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule]
  });
})();

/***/ }),

/***/ 2022:
/*!**********************************************!*\
  !*** ./src/app/core/guards/session.guard.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionGuard": () => (/* binding */ SessionGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ 5502);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class SessionGuard {
  constructor(cookieService, router) {
    this.cookieService = cookieService;
    this.router = router;
  }
  canActivate(route, state) {
    return this.checkCookieSession();
  }
  checkCookieSession() {
    try {
      const token = this.cookieService.check('token');
      if (!token) {
        this.router.navigate(['/', 'auth']);
      }
      return token;
    } catch (e) {
      console.log('¡Algo ha sucedido!', e);
      return false;
    }
  }
}
SessionGuard.ɵfac = function SessionGuard_Factory(t) {
  return new (t || SessionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
SessionGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: SessionGuard,
  factory: SessionGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3405:
/*!*****************************************************************!*\
  !*** ./src/app/core/interceptors/inject-session.interceptor.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InjectSessionInterceptor": () => (/* binding */ InjectSessionInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ 5502);


class InjectSessionInterceptor {
  constructor(cookieService) {
    this.cookieService = cookieService;
  }
  intercept(request, next) {
    try {
      const token = this.cookieService.get('token');
      let newRequest = request;
      newRequest = request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      });
      return next.handle(newRequest);
    } catch (e) {
      console.log('🔴🔴🔴 Se está produciendo un error', e);
      return next.handle(request);
    }
  }
}
InjectSessionInterceptor.ɵfac = function InjectSessionInterceptor_Factory(t) {
  return new (t || InjectSessionInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__.CookieService));
};
InjectSessionInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: InjectSessionInterceptor,
  factory: InjectSessionInterceptor.ɵfac
});

/***/ }),

/***/ 4032:
/*!*********************************************************************!*\
  !*** ./src/app/modules/home/pages/home-page/home-page.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/side-bar/side-bar.component */ 1431);
/* harmony import */ var _shared_components_media_player_media_player_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/media-player/media-player.component */ 1410);




class HomePageComponent {
  constructor() {}
  ngOnInit() {}
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
  return new (t || HomePageComponent)();
};
HomePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomePageComponent,
  selectors: [["app-home-page"]],
  decls: 4,
  vars: 0,
  consts: [[1, "home-wrapper"]],
  template: function HomePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-side-bar")(1, "app-media-player");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_0__.SideBarComponent, _shared_components_media_player_media_player_component__WEBPACK_IMPORTED_MODULE_1__.MediaPlayerComponent],
  styles: [".home-wrapper[_ngcontent-%COMP%] {\n    margin: 0 0 0 17.5rem;\n    background: rgb(23, 23, 26);\n    background: linear-gradient(90deg, rgba(23, 23, 26, 1) 44%, rgba(24, 24, 24, 1) 100%);\n    min-height: 100vh;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9ob21lL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IscUZBQXFGO0lBQ3JGLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS13cmFwcGVyIHtcbiAgICBtYXJnaW46IDAgMCAwIDE3LjVyZW07XG4gICAgYmFja2dyb3VuZDogcmdiKDIzLCAyMywgMjYpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMywgMjMsIDI2LCAxKSA0NCUsIHJnYmEoMjQsIDI0LCAyNCwgMSkgMTAwJSk7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1410:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/media-player/media-player.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaPlayerComponent": () => (/* binding */ MediaPlayerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_multimedia_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/multimedia.service */ 2172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




const _c0 = ["progressBar"];
function MediaPlayerComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function MediaPlayerComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function MediaPlayerComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function MediaPlayerComponent_ng_template_8_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12)(3, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 15)(8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const mockCover_r10 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", mockCover_r10.cover, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mockCover_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mockCover_r10 == null ? null : mockCover_r10.album);
  }
}
function MediaPlayerComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MediaPlayerComponent_ng_template_8_div_0_Template, 10, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r4.multimediaService.trackInfo$));
  }
}
const _c1 = function (a0, a1) {
  return {
    "uil-play-circle": a0,
    "uil-pause-circle": a1
  };
};
function MediaPlayerComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MediaPlayerComponent_ng_template_10_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.multimediaService.togglePlayer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 25)(9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MediaPlayerComponent_ng_template_10_Template_span_click_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.handlePosition($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c1, ctx_r6.state === "paused", ctx_r6.state !== "paused"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 5, ctx_r6.multimediaService.timeElapsed$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 7, ctx_r6.multimediaService.playerPercentage$) + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 9, ctx_r6.multimediaService.timeRemaining$));
  }
}
function MediaPlayerComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30)(1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class MediaPlayerComponent {
  constructor(multimediaService) {
    this.multimediaService = multimediaService;
    this.progressBar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef('');
    this.listObservers$ = [];
    this.state = 'paused';
  }
  ngOnInit() {
    const observer1$ = this.multimediaService.playerStatus$.subscribe(status => this.state = status);
    this.listObservers$ = [observer1$];
  }
  ngOnDestroy() {
    this.listObservers$.forEach(u => u.unsubscribe());
    console.log('🔴🔴🔴 BOOM! 🔴🔴🔴');
  }
  handlePosition(event) {
    const elNative = this.progressBar.nativeElement;
    const {
      clientX
    } = event;
    const {
      x,
      width
    } = elNative.getBoundingClientRect();
    const clickX = clientX - x; // 1050 - x
    const percentageFromX = clickX * 100 / width;
    console.log(`Click(x): ${percentageFromX}`);
    this.multimediaService.seekAudio(percentageFromX);
  }
}
MediaPlayerComponent.ɵfac = function MediaPlayerComponent_Factory(t) {
  return new (t || MediaPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_multimedia_service__WEBPACK_IMPORTED_MODULE_0__.MultimediaService));
};
MediaPlayerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MediaPlayerComponent,
  selectors: [["app-media-player"]],
  viewQuery: function MediaPlayerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.progressBar = _t.first);
    }
  },
  decls: 14,
  vars: 3,
  consts: [[1, "media-player"], [1, "media-player--wrapper"], [1, "artist", "player-center"], [4, "ngTemplateOutlet"], [1, "player-controls", "player-center"], [1, "player-audio", "player-center"], ["artistZone", ""], ["playerZone", ""], ["playerAudio", ""], ["class", "artist-inside", 4, "ngIf"], [1, "artist-inside"], ["alt", "", 1, "cover", 3, "src"], [1, "track-info"], [1, "track-title"], [1, "track-title", "sub-title"], [1, "track-like"], [1, "btn-like"], [1, "uil", "uil-heart"], [1, "player-controls-inside"], [1, "buttons-media"], [1, "arrow", "btn"], [1, "uil", "uil-previous"], [1, "play", "btn", 3, "click"], [1, "uil", 3, "ngClass"], [1, "uil", "uil-step-forward"], [1, "media-linetime"], [1, "time"], [1, "time-progress", 3, "click"], ["progressBar", ""], [1, "time-progress-live"], [1, "player-audio-inside"], [1, "btn-media"], [1, "uil", "uil-list-ui-alt"], [1, "uil", "uil-boombox"], [1, "uil", "uil-volume-off"]],
  template: function MediaPlayerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MediaPlayerComponent_ng_container_3_Template, 1, 0, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MediaPlayerComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MediaPlayerComponent_ng_container_7_Template, 1, 0, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MediaPlayerComponent_ng_template_8_Template, 2, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MediaPlayerComponent_ng_template_10_Template, 19, 14, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MediaPlayerComponent_ng_template_12_Template, 7, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r7);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  styles: [".media-player[_ngcontent-%COMP%] {\n    background-color: var(--color-5);\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    z-index: 2;\n    height: 85px;\n    border-top: solid 1px var(--color-2);\n    box-shadow: 0px -15px 15px 7px #0000002e;\n}\n\n.media-player[_ngcontent-%COMP%]   .media-player--wrapper[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    height: 100%;\n    padding: 0;\n}\n\n.media-player[_ngcontent-%COMP%]   .media-player--wrapper[_ngcontent-%COMP%]   .player-center[_ngcontent-%COMP%] {\n    display: flex;\n    align-content: center;\n    align-items: center;\n}\n\n.media-player--wrapper[_ngcontent-%COMP%]   .artist[_ngcontent-%COMP%] {\n    width: 25%;\n    padding: 0 .5rem;\n}\n\n.media-player--wrapper[_ngcontent-%COMP%]   .player-audio[_ngcontent-%COMP%] {\n    width: 25%;\n    padding: 0 .5rem;\n}\n\n.media-player--wrapper[_ngcontent-%COMP%]   .player-controls[_ngcontent-%COMP%] {\n    width: 50%;\n    padding: 0 .5rem;\n    position: relative;\n}\n\n.media-player--wrapper[_ngcontent-%COMP%]   .artist[_ngcontent-%COMP%]   .artist-inside[_ngcontent-%COMP%] {\n    display: flex;\n    gap: .5rem\n}\n\n.media-player--wrapper[_ngcontent-%COMP%]   .artist[_ngcontent-%COMP%]   .track-like[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-self: center;\n    padding: 0 .25rem;\n}\n\n.media-player--wrapper[_ngcontent-%COMP%]   .artist[_ngcontent-%COMP%]   .track-like[_ngcontent-%COMP%]   .btn-like[_ngcontent-%COMP%] {\n    border: 0;\n    background-color: transparent;\n    color: var(--color-4);\n    font-size: var(--font-size-2);\n    opacity: .7;\n}\n\n.media-player--wrapper[_ngcontent-%COMP%]   .artist[_ngcontent-%COMP%]   .artist-inside[_ngcontent-%COMP%]   .track-info[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-self: center;\n}\n\n.media-player--wrapper[_ngcontent-%COMP%]   .artist[_ngcontent-%COMP%]   .artist-inside[_ngcontent-%COMP%]   .track-title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-weight: 400;\n    font-size: .8rem;\n}\n\n.media-player--wrapper[_ngcontent-%COMP%]   .artist[_ngcontent-%COMP%]   .artist-inside[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-weight: 300;\n    font-size: 80%;\n    opacity: .6;\n}\n\n.media-player--wrapper[_ngcontent-%COMP%]   .artist[_ngcontent-%COMP%]   .artist-inside[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n    width: 55px;\n    height: 55px;\n    object-fit: cover;\n}\n\n.media-player--wrapper[_ngcontent-%COMP%]   .player-controls-inside[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-self: center;\n    flex-direction: column;\n    width: 100%;\n    position: relative;\n}\n\n.media-player--wrapper[_ngcontent-%COMP%]   .player-controls-inside[_ngcontent-%COMP%]   .buttons-media[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-self: center;\n    gap: .5rem\n}\n\n.media-player--wrapper[_ngcontent-%COMP%]   .player-controls-inside[_ngcontent-%COMP%]   .buttons-media[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border: 0;\n    color: var(--color-4);\n    opacity: .7;\n    font-size: 1.65rem\n}\n\n.media-player--wrapper[_ngcontent-%COMP%]   .player-controls-inside[_ngcontent-%COMP%]   .buttons-media[_ngcontent-%COMP%]   .play[_ngcontent-%COMP%] {\n    font-size: 2.35rem;\n}\n\n.media-player--wrapper[_ngcontent-%COMP%]   .player-controls-inside[_ngcontent-%COMP%]   .media-linetime[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    font-size: 70%;\n    padding: 0;\n}\n\n.media-player--wrapper[_ngcontent-%COMP%]   .player-controls-inside[_ngcontent-%COMP%]   .media-linetime[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n    padding: .5rem 0;\n}\n\n.media-player--wrapper[_ngcontent-%COMP%]   .player-controls-inside[_ngcontent-%COMP%]   .media-linetime[_ngcontent-%COMP%]   .time-progress[_ngcontent-%COMP%] {\n    background-color: var(--color-2);\n    height: 2px;\n    width: 100%;\n    left: 0;\n    position: absolute;\n    cursor: pointer;\n}\n\n.media-player--wrapper[_ngcontent-%COMP%]   .player-controls-inside[_ngcontent-%COMP%]   .media-linetime[_ngcontent-%COMP%]   .time-progress-live[_ngcontent-%COMP%] {\n    background-color: var(--color-4);\n    width: 0%;\n    height: 2px;\n    transition: all ease var(--animation-1);\n    position: absolute;\n}\n\n.media-player--wrapper[_ngcontent-%COMP%]   .player-audio-inside[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-end;\n    width: 100%;\n}\n\n.media-player--wrapper[_ngcontent-%COMP%]   .player-audio-inside[_ngcontent-%COMP%]   .btn-media[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border: 0;\n    color: var(--color-4);\n    font-size: var(--font-size-2);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVkaWEtcGxheWVyL21lZGlhLXBsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsU0FBUztJQUNULHFCQUFxQjtJQUNyQixXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsV0FBVztJQUNYLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxTQUFTO0lBQ1QsV0FBVztJQUNYLHVDQUF1QztJQUN2QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLDZCQUE2QjtBQUNqQyIsInNvdXJjZXNDb250ZW50IjpbIi5tZWRpYS1wbGF5ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTUpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMjtcbiAgICBoZWlnaHQ6IDg1cHg7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHZhcigtLWNvbG9yLTIpO1xuICAgIGJveC1zaGFkb3c6IDBweCAtMTVweCAxNXB4IDdweCAjMDAwMDAwMmU7XG59XG5cbi5tZWRpYS1wbGF5ZXIgLm1lZGlhLXBsYXllci0td3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4ubWVkaWEtcGxheWVyIC5tZWRpYS1wbGF5ZXItLXdyYXBwZXIgLnBsYXllci1jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZWRpYS1wbGF5ZXItLXdyYXBwZXIgLmFydGlzdCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBwYWRkaW5nOiAwIC41cmVtO1xufVxuXG4ubWVkaWEtcGxheWVyLS13cmFwcGVyIC5wbGF5ZXItYXVkaW8ge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgcGFkZGluZzogMCAuNXJlbTtcbn1cblxuLm1lZGlhLXBsYXllci0td3JhcHBlciAucGxheWVyLWNvbnRyb2xzIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDAgLjVyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWVkaWEtcGxheWVyLS13cmFwcGVyIC5hcnRpc3QgLmFydGlzdC1pbnNpZGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAuNXJlbVxufVxuXG4ubWVkaWEtcGxheWVyLS13cmFwcGVyIC5hcnRpc3QgLnRyYWNrLWxpa2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAuMjVyZW07XG59XG5cbi5tZWRpYS1wbGF5ZXItLXdyYXBwZXIgLmFydGlzdCAudHJhY2stbGlrZSAuYnRuLWxpa2Uge1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtMik7XG4gICAgb3BhY2l0eTogLjc7XG59XG5cbi5tZWRpYS1wbGF5ZXItLXdyYXBwZXIgLmFydGlzdCAuYXJ0aXN0LWluc2lkZSAudHJhY2staW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLm1lZGlhLXBsYXllci0td3JhcHBlciAuYXJ0aXN0IC5hcnRpc3QtaW5zaWRlIC50cmFjay10aXRsZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAuOHJlbTtcbn1cblxuLm1lZGlhLXBsYXllci0td3JhcHBlciAuYXJ0aXN0IC5hcnRpc3QtaW5zaWRlIC5zdWItdGl0bGUge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICAgIG9wYWNpdHk6IC42O1xufVxuXG4ubWVkaWEtcGxheWVyLS13cmFwcGVyIC5hcnRpc3QgLmFydGlzdC1pbnNpZGUgLmNvdmVyIHtcbiAgICB3aWR0aDogNTVweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5tZWRpYS1wbGF5ZXItLXdyYXBwZXIgLnBsYXllci1jb250cm9scy1pbnNpZGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWVkaWEtcGxheWVyLS13cmFwcGVyIC5wbGF5ZXItY29udHJvbHMtaW5zaWRlIC5idXR0b25zLW1lZGlhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBnYXA6IC41cmVtXG59XG5cbi5tZWRpYS1wbGF5ZXItLXdyYXBwZXIgLnBsYXllci1jb250cm9scy1pbnNpZGUgLmJ1dHRvbnMtbWVkaWEgLmJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcbiAgICBvcGFjaXR5OiAuNztcbiAgICBmb250LXNpemU6IDEuNjVyZW1cbn1cblxuLm1lZGlhLXBsYXllci0td3JhcHBlciAucGxheWVyLWNvbnRyb2xzLWluc2lkZSAuYnV0dG9ucy1tZWRpYSAucGxheSB7XG4gICAgZm9udC1zaXplOiAyLjM1cmVtO1xufVxuXG4ubWVkaWEtcGxheWVyLS13cmFwcGVyIC5wbGF5ZXItY29udHJvbHMtaW5zaWRlIC5tZWRpYS1saW5ldGltZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC1zaXplOiA3MCU7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLm1lZGlhLXBsYXllci0td3JhcHBlciAucGxheWVyLWNvbnRyb2xzLWluc2lkZSAubWVkaWEtbGluZXRpbWUgLnRpbWUge1xuICAgIHBhZGRpbmc6IC41cmVtIDA7XG59XG5cbi5tZWRpYS1wbGF5ZXItLXdyYXBwZXIgLnBsYXllci1jb250cm9scy1pbnNpZGUgLm1lZGlhLWxpbmV0aW1lIC50aW1lLXByb2dyZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tZWRpYS1wbGF5ZXItLXdyYXBwZXIgLnBsYXllci1jb250cm9scy1pbnNpZGUgLm1lZGlhLWxpbmV0aW1lIC50aW1lLXByb2dyZXNzLWxpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xuICAgIHdpZHRoOiAwJTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSB2YXIoLS1hbmltYXRpb24tMSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubWVkaWEtcGxheWVyLS13cmFwcGVyIC5wbGF5ZXItYXVkaW8taW5zaWRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZWRpYS1wbGF5ZXItLXdyYXBwZXIgLnBsYXllci1hdWRpby1pbnNpZGUgLmJ0bi1tZWRpYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0yKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1431:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/side-bar/side-bar.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideBarComponent": () => (/* binding */ SideBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



const _c0 = function (a1) {
  return ["uil", a1];
};
function SideBarComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r3.router)("queryParams", item_r3.query);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r3.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.name);
  }
}
function SideBarComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r4.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.name);
  }
}
function SideBarComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "div", 10)(2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.name);
  }
}
class SideBarComponent {
  constructor(router) {
    this.router = router;
    this.mainMenu = {
      defaultOptions: [],
      accessLink: []
    };
    this.customOptions = [];
  }
  ngOnInit() {
    this.mainMenu.defaultOptions = [{
      name: 'Home',
      icon: 'uil uil-estate',
      router: ['/', 'auth']
    }, {
      name: 'Buscar',
      icon: 'uil uil-search',
      router: ['/', 'history']
    }, {
      name: 'Tu biblioteca',
      icon: 'uil uil-chart',
      router: ['/', 'favorites'],
      query: {
        hola: 'mundo'
      }
    }];
    this.mainMenu.accessLink = [{
      name: 'Crear lista',
      icon: 'uil-plus-square'
    }, {
      name: 'Canciones que te gustan',
      icon: 'uil-heart-medical'
    }];
    this.customOptions = [{
      name: 'Mi lista 1',
      router: ['/']
    }, {
      name: 'Mi lista 2',
      router: ['/']
    }, {
      name: 'Mi lista 3',
      router: ['/']
    }, {
      name: 'Mi lista 4',
      router: ['/']
    }];
  }
}
SideBarComponent.ɵfac = function SideBarComponent_Factory(t) {
  return new (t || SideBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
SideBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SideBarComponent,
  selectors: [["app-side-bar"]],
  decls: 11,
  vars: 3,
  consts: [[1, "side-bar"], [1, "uil", "uil-ellipsis-h"], [1, "side-bar__list", "list-one"], [3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], [1, "side-bar__separator"], [1, "side-bar__list", "list-two"], [4, "ngFor", "ngForOf"], [1, "side-bar__separator", "line-separator"], [1, "side-bar__list", "list-three"], [3, "routerLink", "queryParams"], [1, "list-wrapper-item"], [3, "ngClass"], [1, "side-bar__list", "list-label"]],
  template: function SideBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SideBarComponent_li_4_Template, 5, 6, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SideBarComponent_li_7_Template, 5, 4, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SideBarComponent_li_10_Template, 4, 1, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mainMenu.defaultOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mainMenu.accessLink);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customOptions);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".side-bar[_ngcontent-%COMP%] {\n    width: 15.5rem;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n    padding: .5rem 1rem;\n    \n}\n\n.side-bar__list[_ngcontent-%COMP%] {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    opacity: .8;\n}\n\n.side-bar__list[_ngcontent-%COMP%]   .list-label[_ngcontent-%COMP%] {\n    font-size: 90%;\n    font-weight: 500;\n}\n\n.side-bar__list[_ngcontent-%COMP%]   .list-wrapper-item[_ngcontent-%COMP%] {\n    font-size: var(--font-size-1);\n    font-weight: 500;\n    display: flex;\n    align-items: center;\n    align-content: center;\n}\n\n.side-bar__list[_ngcontent-%COMP%]   .list-wrapper-item[_ngcontent-%COMP%]   .uil[_ngcontent-%COMP%] {\n    font-size: var(--font-size-3);\n    padding-right: .5rem;\n}\n\n.side-bar__separator[_ngcontent-%COMP%] {\n    margin: 1rem 0;\n}\n\n.side-bar__separator.line-separator[_ngcontent-%COMP%] {\n    border-bottom: solid 1px var(--color-2);\n}\n\n.side-bar__list.list-three[_ngcontent-%COMP%]   .list-wrapper-item[_ngcontent-%COMP%] {\n    padding: .25rem 0;\n}\n\n.side-bar__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtYmFyIHtcbiAgICB3aWR0aDogMTUuNXJlbTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cbn1cblxuLnNpZGUtYmFyX19saXN0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIG9wYWNpdHk6IC44O1xufVxuXG4uc2lkZS1iYXJfX2xpc3QgLmxpc3QtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zaWRlLWJhcl9fbGlzdCAubGlzdC13cmFwcGVyLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTEpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNpZGUtYmFyX19saXN0IC5saXN0LXdyYXBwZXItaXRlbSAudWlsIHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0zKTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcbn1cblxuLnNpZGUtYmFyX19zZXBhcmF0b3Ige1xuICAgIG1hcmdpbjogMXJlbSAwO1xufVxuXG4uc2lkZS1iYXJfX3NlcGFyYXRvci5saW5lLXNlcGFyYXRvciB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWNvbG9yLTIpO1xufVxuXG4uc2lkZS1iYXJfX2xpc3QubGlzdC10aHJlZSAubGlzdC13cmFwcGVyLWl0ZW0ge1xuICAgIHBhZGRpbmc6IC4yNXJlbSAwO1xufVxuXG4uc2lkZS1iYXJfX2xpc3QgbGkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2172:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/multimedia.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultimediaService": () => (/* binding */ MultimediaService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);



class MultimediaService {
  constructor() {
    this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.trackInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this.timeElapsed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('00:00');
    this.timeRemaining$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('-00:00');
    this.playerStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('paused');
    this.playerPercentage$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
    this.calculateTime = () => {
      const {
        duration,
        currentTime
      } = this.audio;
      this.setTimeElapsed(currentTime);
      this.setRemaining(currentTime, duration);
      this.setPercentage(currentTime, duration);
    };
    this.setPlayerStatus = state => {
      switch (state.type) {
        // playing
        case 'play':
          this.playerStatus$.next('play');
          break;
        case 'playing':
          this.playerStatus$.next('playing');
          break;
        case 'ended':
          this.playerStatus$.next('ended');
          break;
        default:
          this.playerStatus$.next('paused');
          break;
      }
    };
    this.audio = new Audio();
    this.trackInfo$.subscribe(responseOk => {
      if (responseOk) {
        this.setAudio(responseOk);
      }
    });
    this.listenAllEvents();
  }
  listenAllEvents() {
    this.audio.addEventListener('timeupdate', this.calculateTime, false);
    this.audio.addEventListener('playing', this.setPlayerStatus, false);
    this.audio.addEventListener('play', this.setPlayerStatus, false);
    this.audio.addEventListener('pause', this.setPlayerStatus, false);
    this.audio.addEventListener('ended', this.setPlayerStatus, false);
  }
  setTimeElapsed(currentTime) {
    let seconds = Math.floor(currentTime % 60); // 1,2,3
    let minutes = Math.floor(currentTime / 60 % 60);
    // 00:00 ---> 01:05 --> 10:15
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displayFormat = `${displayMinutes}:${displaySeconds}`;
    this.timeElapsed$.next(displayFormat);
  }
  setRemaining(currentTime, duration) {
    let timeLeft = duration - currentTime;
    let seconds = Math.floor(timeLeft % 60);
    let minutes = Math.floor(timeLeft / 60 % 60);
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let displayFormat = `-${displayMinutes}:${displaySeconds}`;
    if (isNaN(+displaySeconds) && isNaN(+displayFormat)) {
      displayFormat = `-00:00`;
    }
    this.timeRemaining$.next(displayFormat);
  }
  setPercentage(currentTime, duration) {
    // duration ---> 100%
    // currentTime ---> (x)
    // (currentTime * 100) / duration
    let percentage = currentTime * 100 / duration;
    this.playerPercentage$.next(percentage);
  }
  // Funciones publicas
  setAudio(track) {
    console.log('🎼', track);
    this.audio.src = track.url;
    this.audio.play();
  }
  togglePlayer() {
    this.audio.paused ? this.audio.play() : this.audio.pause();
  }
  seekAudio(percentage) {
    const {
      duration
    } = this.audio;
    const percentageToSecond = percentage * duration / 100;
    this.audio.currentTime = percentageToSecond;
  }
}
MultimediaService.ɵfac = function MultimediaService_Factory(t) {
  return new (t || MultimediaService)();
};
MultimediaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MultimediaService,
  factory: MultimediaService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  api: 'http://localhost:3000/api/1.0'
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map