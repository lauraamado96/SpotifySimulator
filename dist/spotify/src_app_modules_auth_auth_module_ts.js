"use strict";
(self["webpackChunkspotify"] = self["webpackChunkspotify"] || []).push([["src_app_modules_auth_auth_module_ts"],{

/***/ 9988:
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/auth-page/auth-page.component */ 7715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: 'login',
  component: _pages_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_0__.AuthPageComponent
}, {
  path: '**',
  redirectTo: '/auth/login'
}];
class AuthRoutingModule {}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) {
  return new (t || AuthRoutingModule)();
};
AuthRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AuthRoutingModule
});
AuthRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3970:
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 9988);
/* harmony import */ var _pages_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/auth-page/auth-page.component */ 7715);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





class AuthModule {}
AuthModule.ɵfac = function AuthModule_Factory(t) {
  return new (t || AuthModule)();
};
AuthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AuthModule
});
AuthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_pages_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_1__.AuthPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 7715:
/*!*********************************************************************!*\
  !*** ./src/app/modules/auth/pages/auth-page/auth-page.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageComponent": () => (/* binding */ AuthPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/auth/services/auth.service */ 2542);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ 5502);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function AuthPageComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ocurrio un error con tu email o password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class AuthPageComponent {
  constructor(authService, cookie, router) {
    this.authService = authService;
    this.cookie = cookie;
    this.router = router;
    this.formLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({});
    this.errorSession = false;
  }
  ngOnInit() {
    this.formLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(12)])
    });
  }
  sendLogin() {
    const {
      email,
      password
    } = this.formLogin.value;
    this.authService.sendCredentials(email, password).subscribe({
      next: responseOk => {
        console.log('Session started OK', responseOk);
        const {
          tokenSession,
          data
        } = responseOk;
        this.cookie.set('token', tokenSession, 4, '/');
        this.router.navigate(['/', 'tracks']);
      },
      error: err => {
        this.errorSession = true;
        console.log('⚠⚠⚠⚠ Error occurred with email or password');
      }
    });
  }
}
AuthPageComponent.ɵfac = function AuthPageComponent_Factory(t) {
  return new (t || AuthPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
AuthPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AuthPageComponent,
  selectors: [["app-auth-page"]],
  decls: 31,
  vars: 3,
  consts: [[1, "login-auth-page"], [1, "login-auth-wrapper"], [1, "login-social-zone"], [1, "social-btn", "btn-fb"], [1, "uil", "uil-facebook-f"], [1, "social-btn", "btn-apple"], [1, "uil", "uil-apple"], [1, "social-btn"], [1, "uil", "uil-google"], [1, "separator"], [1, "login-auth-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "email"], ["formControlName", "email", "type", "text", "placeholder", "Direcci\u00F3n de correo o nombre de usuario", 1, "form-input"], ["for", "password"], ["formControlName", "password", "type", "password", "placeholder", "Contrase\u00F1a", 1, "form-input"], [1, "form-steps"], ["href", "", 1, "link"], [4, "ngIf"], [1, "form-action"], [1, "login", "social-btn", 3, "disabled"]],
  template: function AuthPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Para continuar, inicia sesi\u00F3n en Spotify.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Continuar con Social");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Continuar con Apple");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Continuar con Google");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AuthPageComponent_Template_form_ngSubmit_15_listener() {
        return ctx.sendLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11)(17, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Direcci\u00F3n de correo o nombre de usuario");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11)(21, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Contrase\u00F1a");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16)(25, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u00BFSe te ha olvidado la contrase\u00F1a?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AuthPageComponent_div_27_Template, 2, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 19)(29, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Iniciar sesi\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formLogin);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorSession);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formLogin.invalid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: [".login-auth-page[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    background-color: var(--color-4);\n    color: var(--color-3);\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    align-content: center;\n}\n\n.login-auth-page[_ngcontent-%COMP%]   .login-auth-wrapper[_ngcontent-%COMP%] {\n    width: 25%;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n}\n\n.login-auth-page[_ngcontent-%COMP%]   .login-social-zone[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: .75rem;\n    width: 100%;\n}\n\n.login-auth-page[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%] {\n    border: 0;\n    padding: .5rem 2rem;\n    width: 100%;\n    font-size: var(--font-size-2);\n    border-radius: var(--border-radius-2);\n    box-shadow: var(--shadow-1);\n    border: solid 1px var(--color-4);\n    background-color: var(--color-4);\n    font-weight: 600;\n}\n\n.login-auth-page[_ngcontent-%COMP%]   .login-social-zone[_ngcontent-%COMP%]   .social-btn.btn-fb[_ngcontent-%COMP%] {\n    background-color: #3A61B3;\n    color: var(--color-4);\n}\n\n.login-auth-page[_ngcontent-%COMP%]   .login-social-zone[_ngcontent-%COMP%]   .social-btn.btn-apple[_ngcontent-%COMP%] {\n    background-color: #1a1a1a;\n    color: var(--color-4);\n}\n\n.login-auth-page[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 2rem 0;\n    border-bottom: solid 1px var(--color-2);\n    opacity: .2;\n}\n\n.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    justify-content: flex-start;\n    flex-direction: column;\n}\n\n.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n}\n\n.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border: solid 1px #e7e7e7;\n    border-radius: var(--border-radius-1);\n    height: 30px;\n    padding: .25rem .5rem;\n    font-size: 90%;\n}\n\n.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    padding-bottom: .35rem;\n    font-weight: 600;\n    display: inline-block;\n    margin: 0;\n}\n\n.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]   .form-steps[_ngcontent-%COMP%] {\n    padding: .5rem 0;\n}\n\n.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]   .form-steps[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n    color: var(--color-2);\n    font-size: 85%;\n    font-weight: 500;\n    text-decoration: underline;\n}\n\n.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]   .form-steps[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n    color: var(--color-1);\n}\n\n.login-auth-page[_ngcontent-%COMP%]   .login-auth-form[_ngcontent-%COMP%]   .form-action[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n    color: var(--color-4);\n    margin: 1rem 0;\n    background-color: var(--color-1);\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n    border: solid 2px red !important\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL2F1dGgtcGFnZS9hdXRoLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IscUNBQXFDO0lBQ3JDLDJCQUEyQjtJQUMzQixnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCx1Q0FBdUM7SUFDdkMsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0k7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1hdXRoLXBhZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4ubG9naW4tYXV0aC1wYWdlIC5sb2dpbi1hdXRoLXdyYXBwZXIge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1hdXRoLXBhZ2UgLmxvZ2luLXNvY2lhbC16b25lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAuNzVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbi1hdXRoLXBhZ2UgLnNvY2lhbC1idG4ge1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTIpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMik7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTEpO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWNvbG9yLTQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5sb2dpbi1hdXRoLXBhZ2UgLmxvZ2luLXNvY2lhbC16b25lIC5zb2NpYWwtYnRuLmJ0bi1mYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNBNjFCMztcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XG59XG5cbi5sb2dpbi1hdXRoLXBhZ2UgLmxvZ2luLXNvY2lhbC16b25lIC5zb2NpYWwtYnRuLmJ0bi1hcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItNCk7XG59XG5cbi5sb2dpbi1hdXRoLXBhZ2UgLnNlcGFyYXRvciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAycmVtIDA7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWNvbG9yLTIpO1xuICAgIG9wYWNpdHk6IC4yO1xufVxuXG4ubG9naW4tYXV0aC1wYWdlIC5sb2dpbi1hdXRoLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5sb2dpbi1hdXRoLXBhZ2UgLmxvZ2luLWF1dGgtZm9ybSAuZm9ybS1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmxvZ2luLWF1dGgtcGFnZSAubG9naW4tYXV0aC1mb3JtIC5mb3JtLWdyb3VwIGlucHV0IHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZTdlN2U3O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMSk7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmc6IC4yNXJlbSAuNXJlbTtcbiAgICBmb250LXNpemU6IDkwJTtcbn1cblxuLmxvZ2luLWF1dGgtcGFnZSAubG9naW4tYXV0aC1mb3JtIGxhYmVsIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjM1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmxvZ2luLWF1dGgtcGFnZSAubG9naW4tYXV0aC1mb3JtIC5mb3JtLXN0ZXBzIHtcbiAgICBwYWRkaW5nOiAuNXJlbSAwO1xufVxuXG4ubG9naW4tYXV0aC1wYWdlIC5sb2dpbi1hdXRoLWZvcm0gLmZvcm0tc3RlcHMgLmxpbmsge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci0yKTtcbiAgICBmb250LXNpemU6IDg1JTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubG9naW4tYXV0aC1wYWdlIC5sb2dpbi1hdXRoLWZvcm0gLmZvcm0tc3RlcHMgLmxpbms6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbn1cblxuLmxvZ2luLWF1dGgtcGFnZSAubG9naW4tYXV0aC1mb3JtIC5mb3JtLWFjdGlvbiAubG9naW4ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci00KTtcbiAgICBtYXJnaW46IDFyZW0gMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0xKTtcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgICBib3JkZXI6IHNvbGlkIDJweCByZWQgIWltcG9ydGFudFxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2542:
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/services/auth.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class AuthService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
  }
  sendCredentials(email, password) {
    const body = {
      email,
      password
    };
    return this.httpClient.post(`${this.URL}/auth/login`, body);
  }
  suma(a, b) {
    return a + b;
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_auth_module_ts.js.map