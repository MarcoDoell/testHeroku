webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastCtrlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastCtrlService = (function () {
    function ToastCtrlService(_toastCtrl) {
        this._toastCtrl = _toastCtrl;
    }
    ToastCtrlService.prototype.createToast = function (message) {
        var toast = this._toastCtrl.create({
            message: message,
            position: 'middle',
            duration: 2500
        });
        toast.present();
    };
    return ToastCtrlService;
}());
ToastCtrlService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */]])
], ToastCtrlService);

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PictureService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environments__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PictureService = (function () {
    function PictureService(_http) {
        this._http = _http;
    }
    PictureService.prototype.loadThumbnails = function (items) {
        var _this = this;
        items.forEach(function (element) {
            // Nur holen wenn das element noch kein Bild hat 
            if (!element.pictureThumbnail) {
                // Falls das Buch (aus welchen Gründen auch immer) keine BildID hat
                if (!element.pictureId) {
                    return;
                }
                _this.getPicture(element.pictureId).subscribe(function (res) {
                    if (res._body) {
                        element.pictureThumbnail = res._body;
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        });
    };
    PictureService.prototype.getPicture = function (id) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environments__["a" /* environment */].apiUrl + 'pictures/' + id).map(function (res) {
            return res;
        })
            .catch(function (error) {
            throw new Error("Could not get Picture from id:" + id);
        });
    };
    return PictureService;
}());
PictureService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], PictureService);

//# sourceMappingURL=picture.service.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionSheetCtrlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera_service__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActionSheetCtrlService = (function () {
    function ActionSheetCtrlService(_actionSheetCtrl, _cameraService) {
        this._actionSheetCtrl = _actionSheetCtrl;
        this._cameraService = _cameraService;
    }
    ActionSheetCtrlService.prototype.uploadPhoto = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var actionSheet = _this._actionSheetCtrl.create({
                title: 'Foto',
                buttons: [
                    {
                        text: 'Bild aufnehmen',
                        role: 'destructive',
                        handler: function () {
                            resolve(_this.takePic('camera'));
                        }
                    },
                    {
                        text: 'Foto aus Album wählen',
                        handler: function () {
                            resolve(_this.takePic('library'));
                        }
                    },
                    {
                        text: 'Abbrechen',
                        role: 'cancel',
                        handler: function () {
                            reject("Abgebrochen");
                        }
                    }
                ]
            });
            actionSheet.present();
        });
    };
    ActionSheetCtrlService.prototype.takePic = function (options) {
        return this._cameraService.takePic(options);
    };
    return ActionSheetCtrlService;
}());
ActionSheetCtrlService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__camera_service__["a" /* CameraService */]])
], ActionSheetCtrlService);

//# sourceMappingURL=actionSheetCtrl.service.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DexieDatabaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_dexieDatabase_FavoritesDatabase__ = __webpack_require__(757);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DexieDatabaseService = (function () {
    function DexieDatabaseService() {
        this.db = new __WEBPACK_IMPORTED_MODULE_1__model_dexieDatabase_FavoritesDatabase__["a" /* MyAppDatabase */]();
    }
    DexieDatabaseService.prototype.getAllFavorites = function () {
        return this.db.table("favorites").toArray();
    };
    DexieDatabaseService.prototype.addFavorite = function (id) {
        this.db.table("favorites").add({ id: id });
    };
    DexieDatabaseService.prototype.isFavorite = function (id) {
        return this.db.table("favorites").get(id);
    };
    DexieDatabaseService.prototype.removeFavorite = function (id) {
        this.db.table("favorites").delete(id);
    };
    return DexieDatabaseService;
}());
DexieDatabaseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DexieDatabaseService);

//# sourceMappingURL=dexieDatabase.service.js.map

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app.component.module": [
		236
	],
	"pages/login/login.component.module": [
		284
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 235;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAppModule", function() { return MyAppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyAppModule = (function () {
    function MyAppModule() {
    }
    return MyAppModule;
}());
MyAppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */]
        ]
    })
], MyAppModule);

//# sourceMappingURL=app.component.module.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_login_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, splashScreen, _loginService, _ngZone, _statusbar) {
        var _this = this;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this._loginService = _loginService;
        this._ngZone = _ngZone;
        this._statusbar = _statusbar;
        this.platform.ready().then(function () {
            _this._statusbar.backgroundColorByHexString('008080');
            var unsubscribe = _this._loginService.getUserForLogin().onAuthStateChanged(function (user) {
                if (user) {
                    _this.setRoot('TabsPage');
                }
                else {
                    _this.setRoot('LoginPage');
                }
                unsubscribe();
                var that = _this;
                setTimeout(function () {
                    that.splashScreen.hide();
                }, 100);
            }, function (error) {
            });
        });
    }
    MyApp.prototype.setRoot = function (page) {
        var _this = this;
        this._ngZone.run(function () {
            _this.nav.setRoot(page);
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPage */])({
        name: 'my-page',
        segment: 'some-path'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\app.html"*/'<ion-nav [root]="rootPage" #myNav></ion-nav>'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_3__share_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__(473);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginPage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.component.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CameraService = (function () {
    function CameraService(_camera) {
        this._camera = _camera;
        this.libraryOptions = {
            quality: 40,
            targetHeight: 600,
            targetWidth: 600,
            destinationType: this._camera.DestinationType.DATA_URL,
            encodingType: this._camera.EncodingType.JPEG,
            mediaType: this._camera.MediaType.PICTURE,
            sourceType: this._camera.PictureSourceType.PHOTOLIBRARY
        };
        this.cameraOptions = {
            quality: 40,
            targetHeight: 600,
            targetWidth: 600,
            destinationType: this._camera.DestinationType.DATA_URL,
            encodingType: this._camera.EncodingType.JPEG,
            mediaType: this._camera.MediaType.PICTURE,
            sourceType: this._camera.PictureSourceType.CAMERA,
        };
    }
    CameraService.prototype.takePic = function (optionsName) {
        var options = this.getOptions(optionsName);
        return this._camera.getPicture(options).then(function (imageData) {
            return 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            return 'failed';
        });
    };
    CameraService.prototype.getOptions = function (optionsName) {
        if (optionsName === 'library') {
            return this.libraryOptions;
        }
        return this.cameraOptions;
    };
    return CameraService;
}());
CameraService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]])
], CameraService);

//# sourceMappingURL=camera.service.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    //apiUrl: 'http://bookcircle.southcentralus.cloudapp.azure.com:82/bookcircle/api/v1/', // DEV
    apiUrl: 'http://bookcircle.southcentralus.cloudapp.azure.com/bookcircle/api/v1/',
};
//# sourceMappingURL=environments.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchService = (function () {
    function SearchService() {
        this.filter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SearchService.prototype.triggerFilterEvent = function (event) {
        this.filter.emit(event);
    };
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SearchService);

//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(368);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__share_camera_service__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_books_browsing_books_browsing_component__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs_component__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_search_search_genre_search_genre_component__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_addItem_addItem_component__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_search_search_component__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_books_browsing_book_item_book_item_component__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_account_account_component__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_book_detail_book_detail_component__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register_component__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_messages_messages_component__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_messages_messages_item_component_messages_item_component__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_messages_messages_detail_component_messages_detail_component__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_addItem_isbnCheck_isbnCheck_component__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_addItem_isbnCheck_isbnBookItem_isbnBookItem_component__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_myProfile_myProfile_component__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_myProfile_addEditAdress_addEditAddress_component__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_helpPages_barcode_help_barcode_help_component__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_myProfile_addEditPayment_addEditPayment_component__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__share_pipes_ibanPipe__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_myProfile_editProfile_editProfile_component__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_camera__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__share_login_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__share_search_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__share_book_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_google_plus__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__share_loadingCtrlService__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_date_picker__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_barcode_scanner__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_firebase__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_keyboard__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__share_error_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_favorites_favorites_component__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__share_dexieDatabase_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__share_picture_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_ionic_img_viewer__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__share_toast_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_addItem_addPicture_addPicture_component__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__share_actionSheetCtrl_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_ng_elastic__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_ng_elastic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_49_ng_elastic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50_ionic_image_loader__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__app_component_module__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_login_login_component_module__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_login_mail_login_mail_login_component_module__ = __webpack_require__(790);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { IonicStorageModule } from '@ionic/storage';


















































var firebaseConfig = {
    apiKey: "AIzaSyArHYNCqEcrrcINQqAxqGo-qeurGn6yOig",
    authDomain: "bookcircle-bca9b.firebaseapp.com",
    databaseURL: "https://bookcircle-bca9b.firebaseio.com",
    projectId: "bookcircle-bca9b",
    storageBucket: "bookcircle-bca9b.appspot.com",
    messagingSenderId: "269041530494"
};
__WEBPACK_IMPORTED_MODULE_39_firebase___default.a.initializeApp(firebaseConfig);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            //MyApp,
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            //LoginPage,
            __WEBPACK_IMPORTED_MODULE_7__pages_books_browsing_books_browsing_component__["a" /* BooksBrowsingPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs_component__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_search_search_genre_search_genre_component__["a" /* SearchGenrePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_addItem_addItem_component__["a" /* AddItemPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_search_search_component__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_books_browsing_book_item_book_item_component__["a" /* BookItem */],
            __WEBPACK_IMPORTED_MODULE_13__pages_account_account_component__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_book_detail_book_detail_component__["a" /* BookDetailPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_register_register_component__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_messages_messages_component__["a" /* MessagesPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_messages_messages_item_component_messages_item_component__["a" /* MessagesItem */],
            __WEBPACK_IMPORTED_MODULE_18__pages_messages_messages_detail_component_messages_detail_component__["a" /* MessagesDetailPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_addItem_isbnCheck_isbnCheck_component__["a" /* IsbnCheckPage */],
            //MailLoginPage,
            __WEBPACK_IMPORTED_MODULE_20__pages_addItem_isbnCheck_isbnBookItem_isbnBookItem_component__["a" /* IsbnBookItemPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_myProfile_myProfile_component__["a" /* MyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_myProfile_addEditAdress_addEditAddress_component__["a" /* AddEditAddressComponent */],
            __WEBPACK_IMPORTED_MODULE_23__pages_helpPages_barcode_help_barcode_help_component__["a" /* BarcodeHelpComponent */],
            __WEBPACK_IMPORTED_MODULE_24__pages_myProfile_addEditPayment_addEditPayment_component__["a" /* AddEditPaymentPage */],
            __WEBPACK_IMPORTED_MODULE_25__share_pipes_ibanPipe__["a" /* IbanPipe */],
            __WEBPACK_IMPORTED_MODULE_26__pages_myProfile_editProfile_editProfile_component__["a" /* EditProfilePage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_favorites_favorites_component__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_addItem_addPicture_addPicture_component__["a" /* AddPictureComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_51__app_component_module__["MyAppModule"],
            __WEBPACK_IMPORTED_MODULE_52__pages_login_login_component_module__["LoginPageModule"],
            __WEBPACK_IMPORTED_MODULE_53__pages_login_mail_login_mail_login_component_module__["a" /* MailLoginPageModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], { scrollAssist: false, autoFocusAssist: false }, {
                links: [
                    { loadChildren: 'app.component.module#MyAppModule', name: 'my-page', segment: 'some-path', priority: 'low', defaultHistory: [] },
                    { loadChildren: 'pages/login/login.component.module#LoginPageModule', name: 'LoginPage', segment: 'sTest', priority: 'low', defaultHistory: [] }
                ]
            }),
            //IonicStorageModule.forRoot(),
            __WEBPACK_IMPORTED_MODULE_27__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_45_ionic_img_viewer__["a" /* IonicImageViewerModule */],
            __WEBPACK_IMPORTED_MODULE_49_ng_elastic__["ElasticModule"],
            __WEBPACK_IMPORTED_MODULE_50_ionic_image_loader__["a" /* IonicImageLoader */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_28_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* IonicApp */]],
        entryComponents: [
            //MyApp,
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            //LoginPage,
            __WEBPACK_IMPORTED_MODULE_7__pages_books_browsing_books_browsing_component__["a" /* BooksBrowsingPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs_component__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_search_search_genre_search_genre_component__["a" /* SearchGenrePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_addItem_addItem_component__["a" /* AddItemPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_search_search_component__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_account_account_component__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_book_detail_book_detail_component__["a" /* BookDetailPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_register_register_component__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_messages_messages_component__["a" /* MessagesPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_messages_messages_detail_component_messages_detail_component__["a" /* MessagesDetailPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_addItem_isbnCheck_isbnCheck_component__["a" /* IsbnCheckPage */],
            //MailLoginPage,
            __WEBPACK_IMPORTED_MODULE_20__pages_addItem_isbnCheck_isbnBookItem_isbnBookItem_component__["a" /* IsbnBookItemPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_myProfile_myProfile_component__["a" /* MyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_myProfile_addEditAdress_addEditAddress_component__["a" /* AddEditAddressComponent */],
            __WEBPACK_IMPORTED_MODULE_23__pages_helpPages_barcode_help_barcode_help_component__["a" /* BarcodeHelpComponent */],
            __WEBPACK_IMPORTED_MODULE_24__pages_myProfile_addEditPayment_addEditPayment_component__["a" /* AddEditPaymentPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_myProfile_editProfile_editProfile_component__["a" /* EditProfilePage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_favorites_favorites_component__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_addItem_addPicture_addPicture_component__["a" /* AddPictureComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_38__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_30__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_31__share_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_32__share_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_33__share_book_service__["a" /* BookService */],
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_35__share_loadingCtrlService__["a" /* LoadingCtrlService */],
            __WEBPACK_IMPORTED_MODULE_36__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_37__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_25__share_pipes_ibanPipe__["a" /* IbanPipe */],
            __WEBPACK_IMPORTED_MODULE_5__share_camera_service__["a" /* CameraService */],
            __WEBPACK_IMPORTED_MODULE_40__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_41__share_error_service__["a" /* ErrorService */],
            __WEBPACK_IMPORTED_MODULE_43__share_dexieDatabase_service__["a" /* DexieDatabaseService */],
            __WEBPACK_IMPORTED_MODULE_44__share_picture_service__["a" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_46__share_toast_service__["a" /* ToastCtrlService */],
            __WEBPACK_IMPORTED_MODULE_48__share_actionSheetCtrl_service__["a" /* ActionSheetCtrlService */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loadingCtrlService__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toast_service__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginService = (function () {
    function LoginService(googleplus, _loadingCtrlService, _platform, _errorCodeService, _toastCtrlService) {
        var _this = this;
        this.googleplus = googleplus;
        this._loadingCtrlService = _loadingCtrlService;
        this._platform = _platform;
        this._errorCodeService = _errorCodeService;
        this._toastCtrlService = _toastCtrlService;
        this.user = null;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.user = user;
            }
            else {
                _this.user = null;
            }
        });
    }
    LoginService.prototype.sendMailVerification = function (user) {
        var _this = this;
        if (!this.user.emailVerified) {
            this.user.sendEmailVerification().then(function (succ) {
                _this._toastCtrlService.createToast("Bestätigungsmail versandt!");
            }).catch(function (error) {
                _this._errorCodeService.displayErrorMessage("Bestätigungsmail konnte nicht versendet werden!");
            });
        }
    };
    LoginService.prototype.getToken = function () {
        if (this.user) {
            return this.user.getIdToken();
        }
    };
    LoginService.prototype.loginWithMail = function (mail, password) {
        var _this = this;
        this._loadingCtrlService.presentLoading("Einloggen...");
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithEmailAndPassword(mail, password).then(function (succ) {
            _this._loadingCtrlService.stopLoading();
        }).
            catch(function (error) {
            _this._loadingCtrlService.stopLoading();
            _this._errorCodeService.displayErrorMessageFromCode(error.code);
        });
    };
    LoginService.prototype.getUser = function () {
        return this.user;
    };
    LoginService.prototype.getUserForLogin = function () {
        return __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth();
    };
    LoginService.prototype.getProviderData = function () {
        return this.user.providerData;
    };
    LoginService.prototype.loginWithGoogle = function () {
        var _this = this;
        // Native Google Login
        if (this._platform.is('cordova')) {
            this._loadingCtrlService.presentLoading("Einloggen...");
            this.loginWithGoogleNative().then(function (res) {
                __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithCredential(__WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.GoogleAuthProvider.credential(res.idToken))
                    .then(function (suc) {
                    _this._loadingCtrlService.stopLoading();
                }).catch(function (error) {
                    _this.handleError(error);
                    _this._errorCodeService.displayErrorMessageFromCode(error.code);
                });
            }).catch(function (error) {
                _this.handleError(error);
                _this._errorCodeService.displayErrorMessageFromCode(error.code);
            });
        }
        else {
            this.loginWithGoogleWeb().then(function (succ) {
                _this._loadingCtrlService.stopLoading();
            }).catch(function (error) {
                _this.handleError('error in Google-Sign-Up ' + error);
                _this._errorCodeService.displayErrorMessageFromCode(error.code);
            });
        }
    };
    LoginService.prototype.linkUserWithGoogle = function () {
        var _this = this;
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.GoogleAuthProvider();
        var that = this;
        // Native Google Login
        if (this._platform.is('cordova')) {
            this._loadingCtrlService.presentLoading("Einloggen...");
            return this.loginWithGoogleNative().then(function (res) {
                return _this.user.linkWithCredential(__WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.GoogleAuthProvider.credential(res.idToken))
                    .then(function (suc) {
                    return handleSuccessfullLogin();
                }).catch(function (error) {
                    _this._errorCodeService.displayErrorMessageFromCode(error.code);
                    return _this.handleError('Firebase Login with Google-Credentials not successfull' + error);
                });
            }).catch(function (error) {
                _this._errorCodeService.displayErrorMessageFromCode(error.code);
                return _this.handleError('Login war nicht erfolgreich - bitte erneut probieren');
            });
        }
        else {
            return this.user.linkWithPopup(provider).then(function (res) {
                return handleSuccessfullLogin();
            })
                .catch(function (error) {
                _this._errorCodeService.displayErrorMessageFromCode(error.code);
                return _this.handleError(error);
            });
        }
        function handleSuccessfullLogin() {
            that._loadingCtrlService.stopLoading();
            that._toastCtrlService.createToast('Erfolgreich mit deinem Google-Konto verbunden!');
            return true;
        }
    };
    LoginService.prototype.registerUser = function (mail, password) {
        var _this = this;
        this._loadingCtrlService.presentLoading("Registrieren...");
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().createUserWithEmailAndPassword(mail, password).then(function (user) {
            // User setzen und updaten (Default Profilbild und Mail als DisplayName)
            _this.user = user;
            _this.updateUser(user.email, "https://www.obgyn.pitt.edu/sites/default/files/default_images/default-person.jpg");
            _this.sendMailVerification();
            _this._loadingCtrlService.stopLoading();
        })
            .catch(function (error) {
            _this._loadingCtrlService.stopLoading();
            _this._errorCodeService.displayErrorMessageFromCode(error.code);
        });
    };
    LoginService.prototype.logOut = function () {
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signOut();
        this.googleplus.logout();
    };
    LoginService.prototype.updateUser = function (name, photo) {
        var _this = this;
        if (!name) {
            name = this.user.displayName;
        }
        if (!photo) {
            photo = this.user.photoURL;
        }
        this.user.updateProfile({
            displayName: name,
            photoURL: photo
        }).then(function (suc) {
            // Update erfolgreich
        })
            .catch(function (error) {
            _this._errorCodeService.displayErrorMessage("Profil Update war nicht erfolgreich!");
        });
    };
    LoginService.prototype.loginWithGoogleWeb = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.GoogleAuthProvider();
        return __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithPopup(provider);
    };
    LoginService.prototype.loginWithGoogleNative = function () {
        return this.googleplus.login({
            'webClientId': '269041530494-lb02teh79edmiacl08baq4m3b28f0lh1.apps.googleusercontent.com',
            'offline': true
        });
    };
    LoginService.prototype.handleError = function (message) {
        this._loadingCtrlService.stopLoading();
        return false;
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_2__loadingCtrlService__["a" /* LoadingCtrlService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__error_service__["a" /* ErrorService */], __WEBPACK_IMPORTED_MODULE_6__toast_service__["a" /* ToastCtrlService */]])
], LoginService);

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_login_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_ionic_page__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(_navCtrl, _loginService, _zone) {
        this._navCtrl = _navCtrl;
        this._loginService = _loginService;
        this._zone = _zone;
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        this.checkLogin();
    };
    LoginPage.prototype.googleLogin = function () {
        this._loginService.loginWithGoogle();
    };
    LoginPage.prototype.goToMainpage = function () {
        var _this = this;
        this._zone.run(function () {
            _this._navCtrl.setRoot('TabsPage');
        });
    };
    LoginPage.prototype.checkLogin = function () {
        var _this = this;
        var unsubscribe = this._loginService.getUserForLogin().onAuthStateChanged(function (user) {
            if (user) {
                _this.goToMainpage();
                unsubscribe();
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.onLoginWithMail = function () {
        this._navCtrl.push('MailLoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_ionic_page__["a" /* IonicPage */])({
        name: 'LoginPage',
        segment: 'sTest'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login-page',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\login\login.component.html"*/'<ion-content padding>\n\n\n\n  <div style="max-width: 500px; margin: 0px auto;">\n\n    <div>\n\n      <img style="max-height:210px;width:100%;" src="https://thumbs.dreamstime.com/z/book-notebook-sketch-set-editable-vector-36250100.jpg">\n\n    </div>\n\n\n\n    <div>\n\n      <h2 style="margin-top:1.5rem; text-align:center;">Verkaufe hier bei Bücherzirkel deine gebrauchten Bücher oder entdecke neue Abenteuer!</h2>\n\n\n\n      <div padding style="padding-bottom:0;">\n\n        <button ion-button block color="danger" icon-start (click)="googleLogin()">\n\n        <ion-icon name="logo-googleplus"></ion-icon>\n\n        Anmelden mit Google\n\n    </button>\n\n      </div>\n\n\n\n      <!--<button ion-button block [style.background-color]="\'#3b5998\'" (click)="facebookLogin()">\n\n      <ion-icon name="logo-facebook"></ion-icon>\n\n      Anmelden mit Facebook\n\n  </button>-->\n\n      <div padding>\n\n        <button ion-button block color="primary" icon-start (click)="onLoginWithMail()">\n\n      <ion-icon name="mail"></ion-icon>\n\n      Anmelden mit E-Mail\n\n  </button>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\login\login.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__share_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
], LoginPage);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePage = (function () {
    function HomePage() {
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding> \n\n  The world is your oyster. Yes!\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksBrowsingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_book_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_picture_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_toast_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__share_error_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BooksBrowsingPage = (function () {
    function BooksBrowsingPage(_navCtrl, _bookService, _pictureService, _toastCtrlService, _errorService, _ngZone) {
        this._navCtrl = _navCtrl;
        this._bookService = _bookService;
        this._pictureService = _pictureService;
        this._toastCtrlService = _toastCtrlService;
        this._errorService = _errorService;
        this._ngZone = _ngZone;
        this.seller = {
            accountName: 'King Döll',
            profilePicture: 'https://www.fupa.net/fupa/images/photo/big/marco-doell-954161_1.jpg'
        };
        this.items = [];
        this.start = 0;
        this.step = 20;
        this.end = 10;
        this.hideHeader = false;
        this.scrollBefore = 0;
    }
    BooksBrowsingPage.prototype.ionViewDidLoad = function () {
        this.loadBooks();
    };
    BooksBrowsingPage.prototype.onBookDetail = function (item) {
        this._navCtrl.push('BookDetailPage', { id: item.id }, { animate: true, animation: 'transition', direction: 'forward' });
    };
    BooksBrowsingPage.prototype.onSearch = function () {
        this._navCtrl.push('SearchGenrePage', {}, { animate: true, animation: 'transition', direction: 'forward' });
    };
    BooksBrowsingPage.prototype.doLoadMore = function (event) {
        /*return new Promise((resolve) => {
          setTimeout(() => {
            for (var i = 0; i < 15; i++) {
              this.items.push(this.items[i]);
            }
            event.complete();
            resolve();
          }, 2000);
        })*/
        this.loadBooks();
        setTimeout(function () {
            event.complete();
        }, 1500);
    };
    BooksBrowsingPage.prototype.onFavorites = function () {
        this._navCtrl.push('FavoritesPage', {}, { animate: true, animation: 'transition', direction: 'forward' });
    };
    BooksBrowsingPage.prototype.loadBooks = function () {
        var _this = this;
        this._bookService.getBooks(this.start, this.end).subscribe(function (res) {
            var books = res;
            if (books.length < 1) {
                _this._toastCtrlService.createToast("Keine weitern Bücher vorhanden");
                return;
            }
            books.forEach(function (element) {
                _this.items.push(element);
            });
            _this._pictureService.loadThumbnails(_this.items);
            // from, to, erhöhen
            _this.start = _this.end;
            _this.end += _this.step;
        }, function (error) {
            _this._errorService.displayErrorMessage("Fehler beim laden der Bücher");
        });
    };
    BooksBrowsingPage.prototype.doRefresh = function (refresher) {
        this.initOnlyForTest();
        setTimeout(function () {
            refresher.complete();
        }, 1500);
    };
    BooksBrowsingPage.prototype.initOnlyForTest = function () {
        this.items = [];
        this.start = 0;
        this.end = 10;
        this.loadBooks();
    };
    BooksBrowsingPage.prototype.onScroll = function (ev) {
        var _this = this;
        if (this.scrollBefore > ev.scrollTop) {
            this._ngZone.run(function () {
                _this.hideHeader = false;
            });
        }
        else {
            this._ngZone.run(function () {
                _this.hideHeader = true;
            });
        }
        this.scrollBefore = ev.scrollTop;
    };
    return BooksBrowsingPage;
}());
BooksBrowsingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'books-browsing-page',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\books-browsing\books-browsing.component.html"*/'<ion-header [ngClass]="(hideHeader ===true)?\'hide-header\':\'show-header\'">\n\n        <ion-navbar>\n\n                <ion-title>Entdecken</ion-title>\n\n                <ion-buttons end>\n\n                        <button ion-button large icon-only (click)="onSearch()">\n\n                                <ion-icon name="search" large></ion-icon>\n\n                        </button>\n\n\n\n                        <button ion-button large icon-only (click)="onFavorites()">\n\n                                <ion-icon name="heart-outline" large></ion-icon>\n\n                        </button>\n\n                </ion-buttons>\n\n        </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="browsing" fullscreen (ionScroll)="onScroll($event)">\n\n\n\n        <ion-refresher (ionRefresh)="doRefresh($event)">\n\n                <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Herunterziehen zum aktualisieren" refreshingSpinner="circles"\n\n                        refreshingText="Aktualisiere...">\n\n                </ion-refresher-content>\n\n        </ion-refresher>\n\n\n\n        <ion-grid [virtualScroll]="items" [approxItemHeight]="\'360px\'">\n\n                <ion-row>\n\n                        <ion-col col-6 col-sm-4 col-md-3 col-lg-2 *virtualItem="let item">\n\n                                <book-item class="test" [item]="item" [seller]="seller" (click)="onBookDetail(item)">\n\n                                </book-item>\n\n                        </ion-col>\n\n                </ion-row>\n\n        </ion-grid>\n\n\n\n        <ion-infinite-scroll (ionInfinite)="doLoadMore($event)">\n\n                <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Lade mehr Bücher...">\n\n                </ion-infinite-scroll-content>\n\n        </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\books-browsing\books-browsing.component.html"*/,
        styles: ['']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__share_book_service__["a" /* BookService */],
        __WEBPACK_IMPORTED_MODULE_3__share_picture_service__["a" /* PictureService */], __WEBPACK_IMPORTED_MODULE_4__share_toast_service__["a" /* ToastCtrlService */],
        __WEBPACK_IMPORTED_MODULE_5__share_error_service__["a" /* ErrorService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
], BooksBrowsingPage);

//# sourceMappingURL=books-browsing.component.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorService = (function () {
    function ErrorService(_alertCtrl) {
        this._alertCtrl = _alertCtrl;
    }
    ErrorService.prototype.displayErrorMessageFromCode = function (errorCode) {
        switch (errorCode) {
            case 'auth/invalid-email': {
                this.displayErrorMessage("E-Mail Adresse ist nicht richtig formatiert!");
                break;
            }
            case 'auth/user-disabled': {
            }
            case 'auth/user-not-found': {
                this.displayErrorMessage("Keine gültige E-Mail Adresse!");
                break;
            }
            case 'auth/wrong-password': {
                this.displayErrorMessage("Falsches Passwort!");
                break;
            }
            case 'auth/email-already-in-use': {
                this.displayErrorMessage("E-Mail Adresse wird bereits verwendet!");
                break;
            }
            case 'auth/weak-password': {
                this.displayErrorMessage("Das Passwort ist zu schwach, bitte wähle ein stärkeres!");
                break;
            }
            case 'auth/credential-already-in-use': {
                this.displayErrorMessage("Das Konto wird bereits verwendet!");
                break;
            }
            default: {
                this.displayErrorMessage("Login nicht erfolgreich!");
            }
        }
    };
    ErrorService.prototype.displayErrorMessage = function (message) {
        var alert = this._alertCtrl.create({
            title: 'Fehler',
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    return ErrorService;
}());
ErrorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ErrorService);

//# sourceMappingURL=error.service.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environments__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookService = (function () {
    function BookService(_http) {
        this._http = _http;
    }
    BookService.prototype.getBookByIsbn = function (isbn) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environments__["a" /* environment */].apiUrl + 'bookinfo/' + isbn).map(function (res) {
            return res.json();
        }).catch(function (error) {
            throw new Error(error);
        });
    };
    BookService.prototype.addBook = function (book, token) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        myHeaders.append('token', token);
        myHeaders.append('Content-Type', 'application/json');
        var jsonBook = JSON.stringify(book);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environments__["a" /* environment */].apiUrl + 'books/sale', jsonBook, { headers: myHeaders }).map(function (res) {
            return res;
        })
            .catch(function (error) {
            throw new Error(error);
        });
    };
    BookService.prototype.getBooks = function (from, to) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        myHeaders.append('Content-Type', 'application/json');
        var query = "{  \n            \"from\":\"" + from + "\",\n            \"to\":" + to + "\n         }";
        return this._http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environments__["a" /* environment */].apiUrl + 'books/query', query, { headers: myHeaders }).map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            throw new Error("Error trying to get Books");
        });
    };
    BookService.prototype.getBooksFromIds = function (from, to, ids) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        myHeaders.append('Content-Type', 'application/json');
        var test = {};
        test.filters = [];
        test.filters[0] = { key: "id", values: ids };
        var query = "{  \n            \"from\":\"" + from + "\",\n            \"to\":\"" + to + "\",\n            \"filters\":" + JSON.stringify(test.filters) + "\n         }";
        return this._http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environments__["a" /* environment */].apiUrl + 'books/query', query, { headers: myHeaders }).map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            throw new Error("Error trying to get Books");
        });
    };
    BookService.prototype.getBookDetail = function (id) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environments__["a" /* environment */].apiUrl + 'books/detail/' + id).map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            throw new Error("Could not get detailed book from Id:" + id);
        });
    };
    return BookService;
}());
BookService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], BookService);

//# sourceMappingURL=book.service.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsPage = (function () {
    function TabsPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.tab1 = 'BooksBrowsingPage';
        this.tab3 = 'IsbnCheckPage';
        this.tab4 = 'MessagesPage';
        this.tab5 = 'AccountPage';
        this.tab1Title = "Entdecken";
        this.tab3Title = "Verkaufen";
        this.tab4Title = "Nachrichten";
        this.tab5Title = "Account";
    }
    TabsPage.prototype.addBook = function () {
        var modal = this.modalCtrl.create('IsbnCheckPage');
        modal.present();
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tabs-page',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\tabs\tabs.component.html"*/'<ion-tabs>\n\n    <ion-tab [root]="tab1" tabIcon="home" [tabTitle]="tab1Title"></ion-tab>\n\n    <ion-tab tabIcon="add-circle" [tabTitle]="tab3Title" (ionSelect)="addBook()"></ion-tab>\n\n    <ion-tab [root]="tab4" tabIcon="mail" [tabTitle]="tab4Title"></ion-tab>\n\n    <ion-tab [root]="tab5" tabIcon="person" [tabTitle]="tab5Title"></ion-tab>\n\n</ion-tabs>     '/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\tabs\tabs.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
], TabsPage);

//# sourceMappingURL=tabs.component.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchGenrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_search_service__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchGenrePage = (function () {
    function SearchGenrePage(_navCtrl, _searchService) {
        this._navCtrl = _navCtrl;
        this._searchService = _searchService;
        this.initializeItems();
    }
    SearchGenrePage.prototype.initializeItems = function () {
        this.items = [
            'Krimi',
            'Roman',
            'Comedy',
            'Sachbücher',
            'Autobiographie',
            'Liebesroman',
            'Kinderbuecher',
            'Jugendbücher',
            'Historie',
            'Science Fiction',
            'Harry Potter 7',
            'Ratgeber',
            'Klassiker',
            'Comics',
        ];
    };
    SearchGenrePage.prototype.onGenrePage = function (item) {
        this._searchService.triggerFilterEvent(item);
        this._navCtrl.pop();
    };
    return SearchGenrePage;
}());
SearchGenrePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'search-genre-page',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\search\search-genre\search-genre.component.html"*/'<ion-header>\n\n        <ion-navbar>\n\n                <ion-searchbar placeholder="Suche nach Buchtiteln und Autoren..."></ion-searchbar>\n\n        </ion-navbar>  \n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n        <ion-list> \n\n                <ion-item *ngFor="let item of items" (click)="onGenrePage(item)">\n\n                    {{item}}\n\n                </ion-item>\n\n        </ion-list>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\search\search-genre\search-genre.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__share_search_service__["a" /* SearchService */]])
], SearchGenrePage);

//# sourceMappingURL=search-genre.component.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_login_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_book_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__share_loadingCtrlService__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__share_toast_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__share_actionSheetCtrl_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__share_error_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddItemPage = (function () {
    function AddItemPage(navCtrl, _bookService, _navParams, _datePicker, _loginService, _loadingCtrlService, _toastCtrlService, _actionSheetCtrlService, _errorService, _formBuilder) {
        this.navCtrl = navCtrl;
        this._bookService = _bookService;
        this._navParams = _navParams;
        this._datePicker = _datePicker;
        this._loginService = _loginService;
        this._loadingCtrlService = _loadingCtrlService;
        this._toastCtrlService = _toastCtrlService;
        this._actionSheetCtrlService = _actionSheetCtrlService;
        this._errorService = _errorService;
        this._formBuilder = _formBuilder;
        this.pictures = [];
        this.showPics = false;
        this.showGroup = false;
        this.book = { title: "", authors: [""], genre: [""], bookdescription: "", publishcompany: "", sites: "", isbn: "", language: "de", publishdate: "",
            price: "", shipping: "", state: "" };
        this.icon = 'add';
        this.createForm();
    }
    AddItemPage.prototype.ionViewWillEnter = function () {
        var book = this._navParams.get('book');
        if (book) {
            this.book = book;
        }
    };
    AddItemPage.prototype.addItem = function () {
        var _this = this;
        this._loadingCtrlService.presentLoading("Buch wird hinzugefügt...");
        this._loginService.getToken().then(function (token) {
            _this.book.pictures = [];
            // Copy pictures Arrays here
            _this.book.pictures = _this.pictures.slice();
            _this._bookService.addBook(_this.book, token).subscribe(function (succ) {
                _this._loadingCtrlService.stopLoading();
                _this._toastCtrlService.createToast("Buch erfolgreich hinzugefügt");
                _this.navCtrl.popToRoot();
            }, function (error) {
                _this._loadingCtrlService.stopLoading();
                _this._errorService.displayErrorMessage("Das Buch konnte nicht hinzugefügt werden");
            });
        })
            .catch(function (error) {
            _this._loadingCtrlService.stopLoading();
            _this._errorService.displayErrorMessage("Das Buch konnte nicht hinzugefügt werden");
        });
    };
    AddItemPage.prototype.uploadPhoto = function () {
        var _this = this;
        this._actionSheetCtrlService.uploadPhoto().then(function (pic) {
            if (pic !== 'failed') {
                _this.pictures.push(pic);
                _this.showPics = true;
            }
        }).catch(function (err) {
        });
    };
    AddItemPage.prototype.onDeletePicture = function (pic) {
        this.pictures = this.pictures.filter(function (el) { return el !== pic; });
        if (this.pictures.length < 1) {
            this.showPics = false;
        }
    };
    AddItemPage.prototype.createForm = function () {
        this.addBook = this._formBuilder.group({
            title: ['', [
                    __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required
                ]
            ],
            authors: ['', [
                    __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required
                ]
            ],
            isbn: ['', [
                    __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required
                ]
            ],
            genre: ['', [
                    __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required
                ]
            ],
            bookdescription: ['', [
                    __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required
                ]
            ],
            publishcompany: ['', [
                    __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required
                ]
            ],
            sites: ['', [
                    __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required
                ]
            ],
            language: ['', [
                    __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required
                ]
            ],
            publishdate: ['', [
                    __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required
                ]
            ],
            price: ['', [
                    __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required
                ]
            ],
            shipping: ['', [
                    __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required
                ]
            ],
            state: ['', [
                    __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required
                ]
            ]
        });
        console.log(this.addBook.controls['title'].value);
    };
    AddItemPage.prototype.isBookValid = function () {
        if (this.book.title && this.book.authors && this.book.isbn && this.book.price && this.book.genre
            && this.book.shipping && this.book.state && this.pictures[0]) {
            return true;
        }
        return false;
    };
    AddItemPage.prototype.showDatePicker = function () {
        this._datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this._datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) { return console.log('Got date: ', date); }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    AddItemPage.prototype.showOrHideDetails = function () {
        this.showGroup = !this.showGroup;
        this.displayIcon();
    };
    AddItemPage.prototype.displayIcon = function () {
        if (this.showGroup) {
            this.icon = 'remove';
        }
        else {
            this.icon = 'add';
        }
    };
    AddItemPage.prototype.displayImage = function (picture) {
        return picture;
    };
    return AddItemPage;
}());
AddItemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'addItem-page',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\addItem\addItem.component.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Buch verkaufen</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div class="pic" *ngIf="!showPics">\n\n        <button ion-button outline icon-start (click)="uploadPhoto()">\n\n            <ion-icon name=\'add\'></ion-icon>\n\n            FOTOS HOCHLADEN\n\n        </button>\n\n    </div>\n\n\n\n    <ion-scroll scrollX="true" *ngIf="showPics" class="picturePreview">\n\n        <ion-row nowrap>\n\n\n\n            <ion-col col-6 *ngFor="let pic of pictures">\n\n                <addPicture [picture]="pic" (delete)="onDeletePicture($event)"></addPicture>\n\n            </ion-col>\n\n\n\n            <!-- Weitere Bilder hinzufügen Button-->\n\n            <ion-col col-6 style="display: flex; flex-direction: column; justify-content: center;">\n\n                <button ion-button icon-only (click)="uploadPhoto()">\n\n                    <ion-icon name=\'add\'></ion-icon>\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-scroll>\n\n\n\n\n\n    <ion-item style="background-color:#D3D3D3;">\n\n        INFO ZUM ARTIKEL\n\n    </ion-item>\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label stacked>Titel*</ion-label>\n\n            <ion-input type="text" [(ngModel)]="book.title"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Autor*</ion-label>\n\n            <ion-input type="text" [(ngModel)]="book.authors[0]"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>ISBN*</ion-label>\n\n            <ion-input type="number" [(ngModel)]="book.isbn"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Genre</ion-label>\n\n            <ion-select [(ngModel)]="book.genre[0]" multiple="true">\n\n                <ion-option value="Thriller">Thriller</ion-option>\n\n                <ion-option value="Krimis">Krimis</ion-option>\n\n                <ion-option value="Fantasy">Fantasy</ion-option>\n\n                <ion-option value="Kochen">Kochen</ion-option>\n\n                <ion-option value="Roman">Roman</ion-option>\n\n                <ion-option value="Ratgeber">Ratgeber</ion-option>\n\n                <ion-option value="Reise & Abenteuer">Reise & Abenteuer</ion-option>\n\n                <ion-option value="Sachbücher">Sachbücher</ion-option>\n\n                <ion-option value="Kinder & Jugend">Kinder & Jugend</ion-option>\n\n                <ion-option value="Fachliteratur & Lernen">Fachliteratur & Lernen</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Inhaltsbeschreibung</ion-label>\n\n            <ion-textarea fz-elastic [(ngModel)]="book.bookdescription"></ion-textarea>\n\n        </ion-item>\n\n\n\n        <ion-item no-lines style="background-color:#D3D3D3;" (click)="showOrHideDetails()">\n\n            <ion-icon [name]="icon" item-start></ion-icon>\n\n            DETAILS\n\n        </ion-item>\n\n\n\n        <div *ngIf="showGroup">\n\n            <ion-item>\n\n                <ion-label stacked>Verlag(optional)</ion-label>\n\n                <ion-input type="text" [(ngModel)]="book.publishcompany"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label stacked>Sprache(optional)</ion-label>\n\n                <ion-select [(ngModel)]="book.language" name="sprache">\n\n                    <ion-option value="de">Deutsch</ion-option>\n\n                    <ion-option value="en">Englisch</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label stacked>Seitenanzahl(optional)</ion-label>\n\n                <ion-input type="number" [(ngModel)]="book.sites"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label stacked (click)="showDatePicker">Erscheinungsdatum(optional)</ion-label>\n\n                <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="book.publishdate"></ion-datetime>\n\n            </ion-item>\n\n\n\n        </div>\n\n\n\n        <ion-item style="background-color:#D3D3D3;">\n\n            BEZAHLOPTIONEN UND VERSAND\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Preis*</ion-label>\n\n            <ion-input type="number" [(ngModel)]="book.price"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Versandkosten*</ion-label>\n\n            <ion-select name="shipping" [(ngModel)]="book.shipping">\n\n                <ion-option value="gross">1€ (bis 500g)</ion-option>\n\n                <ion-option value="maxi">1.65€ (bis 1.000g)</ion-option>\n\n                <ion-input type="number"></ion-input>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Zustand*</ion-label>\n\n            <ion-select name="state" [(ngModel)]="book.state">\n\n                <ion-option value="perfect">Sehr gut</ion-option>\n\n                <ion-option value="good">Gut</ion-option>\n\n                <ion-option value="ok">Mittel</ion-option>\n\n                <ion-option value="bad">Schlecht</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n\n\n        <div padding>\n\n            <button ion-button color="primary" block (click)="addItem()" [disabled]="!isBookValid()">Hinzufügen</button>\n\n        </div>\n\n\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\addItem\addItem.component.html"*/,
        styles: ['.pic { height : 40%;    display: flex;flex-direction: row;justify-content: center;align-items: center;}']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__share_book_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_3__share_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_5__share_loadingCtrlService__["a" /* LoadingCtrlService */],
        __WEBPACK_IMPORTED_MODULE_6__share_toast_service__["a" /* ToastCtrlService */], __WEBPACK_IMPORTED_MODULE_7__share_actionSheetCtrl_service__["a" /* ActionSheetCtrlService */],
        __WEBPACK_IMPORTED_MODULE_8__share_error_service__["a" /* ErrorService */], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormBuilder"]])
], AddItemPage);

//# sourceMappingURL=addItem.component.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchPage = (function () {
    function SearchPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.appType = 'title';
    }
    SearchPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.searchbar.setFocus();
        });
    };
    SearchPage.prototype.doSearch = function (ev) {
        // Reset items back to all of the items
        /*this.initializeItems();
    
        // set val to the value of the searchbar
        let val = ev.target.value;
    
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.items = this.items.filter((item) => {
            return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }*/
    };
    return SearchPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchbar'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Searchbar */])
], SearchPage.prototype, "searchbar", void 0);
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'search-page',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\search\search.component.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-searchbar #searchbar placeholder="Suche nach Buchtiteln und Autoren..." (ionInput)="doSearch($event)"></ion-searchbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div [ngSwitch]="appType">\n\n    <ion-list *ngSwitchCase="\'title\'">\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="https://www.klett-cotta.de/media/1/9783608939835.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Herr der Ringe</h2>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'autor\'">\n\n      <ion-item>\n\n        <h2>Marco Döll</h2>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\search\search.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]])
], SearchPage);

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_dexieDatabase_service__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookItem = (function () {
    function BookItem(_databaseService, _zone) {
        this._databaseService = _databaseService;
        this._zone = _zone;
        this.favoriteIcon = "heart-outline";
        this.item = {};
        this.seller = { accountName: 'King Döll12345', profilePicture: 'https://www.fupa.net/fupa/images/photo/big/marco-doell-954161_1.jpg' };
    }
    BookItem.prototype.ngAfterViewInit = function () {
        this.isItemFavorite();
    };
    BookItem.prototype.isItemFavorite = function () {
        var _this = this;
        this._databaseService.isFavorite(this.item.id).then(function (succ) {
            if (succ) {
                _this.favoriteIcon = "heart";
            }
        }).catch(function (error) {
        });
    };
    BookItem.prototype.onSetItemFavorite = function (item) {
        var _this = this;
        event.stopPropagation();
        this._zone.run(function () {
            if (_this.favoriteIcon === "heart-outline") {
                _this.favoriteIcon = "heart";
                _this._databaseService.addFavorite(item.id);
            }
            else {
                _this.favoriteIcon = "heart-outline";
                _this._databaseService.removeFavorite(item.id);
            }
        });
    };
    BookItem.prototype.displayThumbNail = function () {
        if (this.item.pictureThumbnail) {
            return this.item.pictureThumbnail;
        }
        else
            return '';
    };
    return BookItem;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BookItem.prototype, "item", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BookItem.prototype, "seller", void 0);
BookItem = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'book-item',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\books-browsing\book-item\book-item.component.html"*/'<div>\n\n  <ion-item no-lines>\n\n    <ion-avatar style="margin: 8px 8px 8px 0; min-width: 0px; min-height: 0px;" item-start>\n\n      <img [src]="seller.profilePicture" class="avatarPicture">\n\n    </ion-avatar>\n\n    <h4>{{seller.accountName}}</h4>\n\n  </ion-item>\n\n    <img-loader height="225px" [src]="displayThumbNail()" spinner="false"></img-loader>\n\n  <!--<img class="thumbPic" [src]="displayThumbNail()">-->\n\n  <ion-item no-lines>\n\n    <ion-icon (click)="onSetItemFavorite(item)" [(name)]="favoriteIcon" color="primary" item-end></ion-icon>\n\n    <p style="font-weight: bold">{{item.price}}</p>\n\n\n\n    <p>{{item.title}}</p>\n\n    <p>{{item.authors[0]}}</p>\n\n  </ion-item>\n\n\n\n</div>'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\books-browsing\book-item\book-item.component.html"*/,
        styles: ['.item { padding-left: 0;}']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__share_dexieDatabase_service__["a" /* DexieDatabaseService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
], BookItem);

//# sourceMappingURL=book-item.component.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAppDatabase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dexie__ = __webpack_require__(758);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MyAppDatabase = (function (_super) {
    __extends(MyAppDatabase, _super);
    function MyAppDatabase() {
        var _this = _super.call(this, "MyAppDatabase") || this;
        var db = _this;
        _this.version(1).stores({
            favorites: "id&"
        });
        return _this;
    }
    return MyAppDatabase;
}(__WEBPACK_IMPORTED_MODULE_0_dexie__["a" /* default */]));

//# sourceMappingURL=FavoritesDatabase.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_login_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountPage = (function () {
    function AccountPage(_navCtrl, app, _loginService) {
        this._navCtrl = _navCtrl;
        this.app = app;
        this._loginService = _loginService;
    }
    AccountPage.prototype.ionViewWillEnter = function () {
        this.getUser();
    };
    AccountPage.prototype.getUser = function () {
        this.user = this._loginService.getUser();
    };
    AccountPage.prototype.onMyProfile = function () {
        this._navCtrl.push('MyProfilePage', { user: this.user }, { animate: true, animation: 'transition', direction: 'forward' });
    };
    AccountPage.prototype.onFavorites = function () {
        this._navCtrl.push('FavoritesPage', {}, { animate: true, animation: 'transition', direction: 'forward' });
    };
    AccountPage.prototype.onLogout = function () {
        this._loginService.logOut();
        this.app.getRootNav().setRoot('LoginPage');
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'account-page',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\account\account.component.html"*/'<ion-header>\n\n        <ion-navbar>\n\n                <ion-title>\n\n                        Account\n\n                </ion-title>\n\n        </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n        <ion-item class="itemfullWidthBorder" no-lines (click)="onMyProfile()">\n\n                <ion-avatar style="margin: 8px 16px 8px 0;" item-start>\n\n                        <img [src]="user?.photoURL" style="width:46px; height:46px;">\n\n                </ion-avatar>\n\n                {{user?.displayName}}\n\n        </ion-item>\n\n\n\n\n\n        \n\n        <button class="itemfullWidthBorder" ion-item no-lines>\n\n                <ion-icon name=\'book\' style="color:#00BFFF;" item-start></ion-icon>\n\n                Meine Bücher\n\n        </button>\n\n\n\n\n\n        <button class="itemfullWidthBorder" ion-item no-lines (click)="onFavorites()">\n\n                <ion-icon name=\'md-heart\' style="color:#FF0000" item-start></ion-icon>\n\n                Meine Favoriten\n\n        </button>\n\n\n\n        <button class="itemfullWidthBorder" ion-item no-lines (click)="onMyProfile()">\n\n                <ion-icon name=\'person\' style="color:#00008B" item-start></ion-icon>\n\n                Mein Profil\n\n        </button>\n\n\n\n        <button class="itemfullWidthBorder" ion-item no-lines>\n\n                <ion-icon name=\'card\' style="color:#000000" item-start></ion-icon>\n\n                Meine Transaktionen\n\n        </button>\n\n\n\n        <button class="itemfullWidthBorder" ion-item no-lines>\n\n                <ion-icon name=\'cog\'style="color:#5F9EA0" item-start></ion-icon>\n\n                Einstellungen\n\n        </button>\n\n\n\n        <button class="itemfullWidthBorder" ion-item no-lines>\n\n                <ion-icon name=\'book\' style="color:#00BFFF" item-start></ion-icon>\n\n                Über BücherZirkel\n\n        </button>\n\n\n\n        <button class="itemfullWidthBorder" ion-item no-lines>\n\n                <ion-icon name=\'help-circle\' style="color:#3575AC" item-start></ion-icon>\n\n                Hilfe    \n\n        </button>\n\n\n\n        <button class="itemfullWidthBorder" ion-item no-lines (click)="onLogout()">\n\n                <ion-icon name=\'close-circle\' style="color:#FF0000" item-start></ion-icon>\n\n                Abmelden    \n\n        </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\account\account.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_2__share_login_service__["a" /* LoginService */]])
], AccountPage);

//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_book_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_picture_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_error_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookDetailPage = (function () {
    function BookDetailPage(navParams, _bookService, _pictureSerivce, _errorService) {
        this.navParams = navParams;
        this._bookService = _bookService;
        this._pictureSerivce = _pictureSerivce;
        this._errorService = _errorService;
        this.item = {};
        this.detailIcon = "ios-arrow-down";
        this.showDetails = false;
        this.seller = {
            accountName: 'King Döll',
            profilePicture: 'https://www.fupa.net/fupa/images/photo/big/marco-doell-954161_1.jpg'
        };
        this.slides = [];
        // evtl kann das noch anders geloest werden:
        this.item.authors = [""];
    }
    BookDetailPage.prototype.ionViewDidLoad = function () {
        this.initializeItem();
    };
    BookDetailPage.prototype.initializeItem = function () {
        var _this = this;
        this.id = this.navParams.get('id');
        if (this.id) {
            this._bookService.getBookDetail(this.id).subscribe(function (succ) {
                _this.item = succ;
                _this.loadPictures();
            }, function (error) {
                _this._errorService.displayErrorMessage("Buch konnte nicht geladen werden!");
            });
        }
    };
    BookDetailPage.prototype.loadPictures = function () {
        var _this = this;
        this.item.pictureIds.forEach(function (elem) {
            _this.loadPictureById(elem);
        });
    };
    BookDetailPage.prototype.loadPictureById = function (id) {
        var _this = this;
        this._pictureSerivce.getPicture(id).subscribe(function (succ) {
            if (succ._body) {
                _this.slides.push(succ._body);
            }
        }, function (error) {
        });
    };
    BookDetailPage.prototype.doRefresh = function (refresher) {
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    BookDetailPage.prototype.showOrHideDetails = function () {
        if (this.detailIcon === "ios-arrow-down") {
            this.showDetails = true;
            this.detailIcon = "ios-arrow-up";
        }
        else {
            this.showDetails = false;
            this.detailIcon = "ios-arrow-down";
        }
    };
    return BookDetailPage;
}());
BookDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'book-detail-page',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\book-detail\book-detail.component.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n\n    <ion-title>{{item.title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content class="slidesContainer" fullscreen>\n\n\n\n  <!--<ion-refresher (ionRefresh)="doRefresh($event)">\n\n      <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Herunterziehen zum aktualisieren" refreshingSpinner="circles"\n\n        refreshingText="Aktualisiere...">\n\n      </ion-refresher-content>\n\n    </ion-refresher>-->\n\n\n\n  <div class="slidesContent">\n\n\n\n    <ion-slides pager loop>\n\n      <ion-slide *ngFor="let slide of slides">\n\n        <img [src]="slide" imageViewer/>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n\n\n  <ion-item style="padding-left: 0;" no-lines class="itemfullWidthBorder">\n\n    <ion-avatar class="avatar" item-start>\n\n      <img [src]="seller.profilePicture" class="avatarPicture">\n\n    </ion-avatar>\n\n    <h2 style="font-weight: bold;">{{seller.accountName}}</h2>\n\n  </ion-item>\n\n\n\n  <ion-item no-lines class="itemfullWidthBorder">\n\n    <h2 style="font-weight: bold">{{item?.title}}</h2>\n\n    <p>{{item?.authors[0]}}</p>\n\n    <h2 style="font-weight: bold">{{item?.price}} €</h2>\n\n  </ion-item>\n\n\n\n  <ion-item no-lines (click)="showOrHideDetails()">\n\n    <ion-icon [name]="detailIcon" item-end></ion-icon>\n\n    Buchdetails\n\n  </ion-item>\n\n\n\n  <div *ngIf="showDetails">\n\n    <ion-item no-lines>\n\n\n\n      <ion-item no-lines>\n\n        Verlag: {{item?.publishcompany}}\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n          ISBN: {{item?.isbn}}\n\n      </ion-item>\n\n\n\n    </ion-item>\n\n  </div>\n\n\n\n  <div padding>\n\n    <button ion-button color="primary" block>Kaufen</button>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\book-detail\book-detail.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__share_book_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_3__share_picture_service__["a" /* PictureService */],
        __WEBPACK_IMPORTED_MODULE_4__share_error_service__["a" /* ErrorService */]])
], BookDetailPage);

//# sourceMappingURL=book-detail.component.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_login_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_error_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = (function () {
    function RegisterPage(_formBuilder, _loginService, _errorService) {
        this._formBuilder = _formBuilder;
        this._loginService = _loginService;
        this._errorService = _errorService;
        this.createForm();
    }
    RegisterPage.prototype.onRegister = function () {
        var mail = this.registerForm.get('mail').value;
        var password = this.registerForm.get('password').value;
        var passwordVerification = this.registerForm.get('passwordSecond').value;
        // Falls Passwörter nicht uebereinstimmen
        if (password !== passwordVerification) {
            this._errorService.displayErrorMessage('Die beiden Passwörter stimmen nicht überein.');
            return;
        }
        this._loginService.registerUser(mail, password);
    };
    RegisterPage.prototype.createForm = function () {
        this.registerForm = this._formBuilder.group({
            mail: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(4)
                ]
            ],
            password: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(4)
                ]
            ],
            passwordSecond: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(4)
                ]
            ],
        });
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'register-page',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\register\register.component.html"*/'<ion-header>\n\n        <ion-navbar>\n\n          <ion-title>Registrieren</ion-title>\n\n        </ion-navbar>  \n\n</ion-header>\n\n    \n\n<ion-content>\n\n    <form [formGroup]="registerForm" (ngSubmit)="onRegister()">\n\n        <ion-item style="background-color:#D3D3D3;">\n\n            Angaben zur Person\n\n        </ion-item>\n\n\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label floating>E-Mail</ion-label>\n\n                <ion-input type="email" formControlName="mail"></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item>\n\n                <ion-label floating>Passwort</ion-label>\n\n                <ion-input type="password" formControlName="password"></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item>\n\n                <ion-label floating>Passwort wiederholen</ion-label>\n\n                <ion-input type="password" formControlName="passwordSecond"></ion-input>\n\n            </ion-item>\n\n            \n\n            <div padding>\n\n                <button ion-button [disabled]="!registerForm.valid" type="submit" color="primary" block>Registrieren</button>\n\n            </div>\n\n        </ion-list>\n\n    </form>\n\n</ion-content>\n\n    \n\n    \n\n      '/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\register\register.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__share_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_3__share_error_service__["a" /* ErrorService */]])
], RegisterPage);

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagesPage = (function () {
    function MessagesPage() {
        this.sender = { accountName: 'King Döll',
            profilePicture: 'https://www.fupa.net/fupa/images/photo/big/marco-doell-954161_1.jpg' };
        this.initialize();
    }
    MessagesPage.prototype.initialize = function () {
        this.messages = [{ title: 'Entdecke neue Abenteuer', text: 'Hallo XYZ ....', sender: this.sender }, { title: 'Entdecke neue Abenteuer', text: 'Hallo XYZ ....', sender: this.sender },
            { title: 'Entdecke neue Abenteuer', text: 'Hallo XYZ ....', sender: this.sender }, { title: 'Entdecke neue Abenteuer', text: 'Hallo XYZ ....', sender: this.sender },
            { title: 'Entdecke neue Abenteuer', text: 'Hallo XYZ ....', sender: this.sender }, { title: 'Entdecke neue Abenteuer', text: 'Hallo XYZ ....', sender: this.sender },];
    };
    MessagesPage.prototype.doRefresh = function (refresher) {
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    return MessagesPage;
}());
MessagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'messages-page',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\messages\messages.component.html"*/'<ion-header>\n\n        <ion-navbar>\n\n                <ion-title>Nachrichten</ion-title>\n\n        </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n        <ion-refresher (ionRefresh)="doRefresh($event)">\n\n                <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Herunterziehen zum aktualisieren" refreshingSpinner="circles"\n\n                        refreshingText="Aktualisiere...">\n\n                </ion-refresher-content>\n\n        </ion-refresher>\n\n\n\n        <messages-item *ngFor="let item of messages" [message]="item" [sender]="item.sender">\n\n        </messages-item>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\messages\messages.component.html"*/
    }),
    __metadata("design:paramtypes", [])
], MessagesPage);

//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesItem = (function () {
    function MessagesItem(navCtrl) {
        this.navCtrl = navCtrl;
        this.sender = { accountName: 'King Döll',
            profilePicture: 'https://www.fupa.net/fupa/images/photo/big/marco-doell-954161_1.jpg' };
        this.receiver = { accountName: 'King Döll',
            profilePicture: 'https://www.fupa.net/fupa/images/photo/big/marco-doell-954161_1.jpg' };
        this.message = { title: 'Entdecke neue Abenteuer', text: 'Hallo XYZ ....', sender: this.sender, receiver: this.receiver };
    }
    MessagesItem.prototype.onMessage = function () {
        this.navCtrl.push('MessagesDetailPage', { message: this.message });
    };
    return MessagesItem;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MessagesItem.prototype, "sender", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MessagesItem.prototype, "receiver", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MessagesItem.prototype, "message", void 0);
MessagesItem = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'messages-item',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\messages\messages-item.component\messages-item.component.html"*/'<ion-item (click)="onMessage()" no-lines>\n\n            <!--<ion-avatar style="margin: 8px 8px 8px 0; min-width: 0px; min-height: 0px;" item-start>\n\n              <img [src]="sender.profilePicture" style="width:28px; height:28px;">\n\n            </ion-avatar>-->\n\n            <ion-icon name=\'mail\' color="primary" item-start></ion-icon>\n\n            <h4>{{sender.accountName}}</h4>\n\n            <h2>{{message.title}}</h2>\n\n</ion-item>'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\messages\messages-item.component\messages-item.component.html"*/,
        styles: ['.item {border-bottom: 1px solid lightgray !important;}']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]])
], MessagesItem);

//# sourceMappingURL=messages-item.component.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesDetailPage = (function () {
    function MessagesDetailPage(navParams) {
        this.navParams = navParams;
        this.receiver = { accountName: 'King Döll',
            profilePicture: 'https://www.fupa.net/fupa/images/photo/big/marco-doell-954161_1.jpg' };
        this.sender = { accountName: 'King Döll',
            profilePicture: 'https://www.fupa.net/fupa/images/photo/big/marco-doell-954161_1.jpg' };
        this.message = { title: 'Entdecke neue Abenteuer', text: 'Hallo XYZ ....', sender: this.sender, receiver: this.receiver };
        this.message = this.navParams.get('message');
        this.sender = this.message.sender;
        this.receiver = this.message.receiver;
    }
    return MessagesDetailPage;
}());
MessagesDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'messages-detail-page',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\messages\messages-detail.component\messages-detail.component.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{sender.accountName}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="container">\n\n    <ion-card>\n\n      <ion-card-content>\n\n        {{message.text}} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur quis neque perferendis quam ullam\n\n        laboriosam magnam numquam tempora. Est ipsum aut eius aliquam sapiente culpa laborum maxime praesentium voluptatem\n\n        repudiandae.Temporibus atque nostrum deleniti doloremque vel modi minima labore corporis nulla beatae quo magni omnis\n\n        cumque fugit nobis minus possimus incidunt, eos nesciunt recusandae totam itaque? Nihil nobis voluptates repellat?\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\messages\messages-detail.component\messages-detail.component.html"*/,
        styles: ['.container {width:75%; margin-left:2.5rem;}']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
], MessagesDetailPage);

//# sourceMappingURL=messages-detail.component.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsbnCheckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_loadingCtrlService__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_book_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__share_error_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IsbnCheckPage = (function () {
    function IsbnCheckPage(_navCtrl, _bookService, popoverCtrl, _loadingCtrlService, _barcodeScanner, _platform, _errorService, _ngZone) {
        this._navCtrl = _navCtrl;
        this._bookService = _bookService;
        this.popoverCtrl = popoverCtrl;
        this._loadingCtrlService = _loadingCtrlService;
        this._barcodeScanner = _barcodeScanner;
        this._platform = _platform;
        this._errorService = _errorService;
        this._ngZone = _ngZone;
        this.isbn = "";
        this.book = {};
        this.cordova = true;
        if (!this._platform.is('cordova')) {
            this.cordova = false;
        }
    }
    IsbnCheckPage.prototype.onIsbnCheck = function () {
        var _this = this;
        if (this.isbn) {
            this._loadingCtrlService.presentLoading('Suche nach Büchern...');
            this._bookService.getBookByIsbn(this.isbn).subscribe(function (res) {
                _this.book = res;
                _this._loadingCtrlService.stopLoading();
                if (_this.book.title) {
                    _this.redirectToAddItemPage(_this.book);
                }
                else {
                    _this._errorService.displayErrorMessage('Kein Buch zur angegebenen ISBN: "' + _this.isbn + '" gefunden!');
                }
                _this.isbn = '';
            }, function (error) {
                _this._loadingCtrlService.stopLoading();
                _this._errorService.displayErrorMessage('Kein Buch zur angegebenen ISBN: ' + _this.isbn + ' gefunden!');
            });
        }
    };
    IsbnCheckPage.prototype.presentBarocodeHelpPopover = function () {
        this.popover = this.popoverCtrl.create('BarcodeHelpComponent');
        this.popover.present();
    };
    IsbnCheckPage.prototype.onBarcodeScanner = function () {
        var _this = this;
        this._barcodeScanner.scan().then(function (succ) {
            _this.isbn = succ.text;
            _this.onIsbnCheck();
        })
            .catch(function (error) {
        });
    };
    IsbnCheckPage.prototype.onShowBarcodeHelp = function () {
        this.presentBarocodeHelpPopover();
    };
    IsbnCheckPage.prototype.redirectToAddItemPage = function (book) {
        var _this = this;
        this._ngZone.run(function () {
            if (book) {
                _this._navCtrl.push('AddItemPage', {
                    book: _this.book
                });
            }
            else {
                _this._navCtrl.push('AddItemPage');
            }
        });
    };
    return IsbnCheckPage;
}());
IsbnCheckPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'isbn-check-page',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\addItem\isbnCheck\isbnCheck.component.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Buch verkaufen</ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button large navPop icon-only>\n\n                <ion-icon large name="close"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-card>\n\n        <ion-item no-lines (click)="onShowBarcodeHelp()">\n\n            <ion-icon name="help-circle" item-start></ion-icon>\n\n            <p>Wo befindet sich der Barcode?</p>\n\n        </ion-item>\n\n        <div padding style="padding-top:0">\n\n            <button ion-button block color="primary" (click)="onBarcodeScanner()">\n\n                ISBN per Barcode einscannen\n\n            </button>\n\n        </div>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-item style="padding-right:16px">\n\n            <ion-label floating>ISBN hier eingeben</ion-label>\n\n            <ion-input [(ngModel)]="isbn" type="text" (keyup.enter)="onIsbnCheck()"> ISBN</ion-input>\n\n        </ion-item>\n\n        <div padding style="padding-top:0">\n\n            <button padding ion-button block color="primary" icon-start [disabled]="!isbn" (click)="onIsbnCheck()">\n\n                <ion-icon name=\'search\'></ion-icon>\n\n                Suchen\n\n            </button>\n\n        </div>\n\n    </ion-card>\n\n\n\n    <div padding>\n\n        <button ion-button block color="primary" (click)="redirectToAddItemPage()">\n\n            Informationen manuell eingeben\n\n        </button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\addItem\isbnCheck\isbnCheck.component.html"*/,
        styles: ['.list {margin-bottom:0;}']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__share_book_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_3__share_loadingCtrlService__["a" /* LoadingCtrlService */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__share_error_service__["a" /* ErrorService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
], IsbnCheckPage);

//# sourceMappingURL=isbnCheck.component.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsbnBookItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IsbnBookItemPage = (function () {
    function IsbnBookItemPage(_navCtrl, _navParams) {
        this._navCtrl = _navCtrl;
        this._navParams = _navParams;
        this.book = this._navParams.get('book');
    }
    IsbnBookItemPage.prototype.redirectToAddItemPage = function () {
        this._navCtrl.push('AddItemPage', {
            book: this.book
        });
    };
    IsbnBookItemPage.prototype.onItemClick = function (event) {
        this.redirectToAddItemPage();
    };
    return IsbnBookItemPage;
}());
IsbnBookItemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'isbn-book-item-page',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\addItem\isbnCheck\isbnBookItem\isbnBookItem.component.html"*/'\n\n    <h2 style="text-align:center;">Buch auswählen:</h2>\n\n\n\n    <ion-card (click)="onItemClick($event)">\n\n        <ion-card-content>\n\n            Autor: {{book.authors[0]}} <br>\n\n            Titel: {{book.title}}\n\n        </ion-card-content>\n\n    </ion-card>\n\n'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\addItem\isbnCheck\isbnBookItem\isbnBookItem.component.html"*/,
        styles: ['']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
], IsbnBookItemPage);

//# sourceMappingURL=isbnBookItem.component.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_login_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyProfilePage = (function () {
    function MyProfilePage(_navCtrl, _loginService) {
        this._navCtrl = _navCtrl;
        this._loginService = _loginService;
        this.payments = [{ name: 'Marco Döll', iban: 'DE7392123192839' }, { name: 'Julian Fruth', iban: 'DE92019520002' }];
        this.addresses = [{ 'name': 'Marco Döll', 'street': 'Gartnerstraße 6', 'additive': 'a', 'plz': '90607', 'city': 'Nürnberg' }];
        this.googleText = 'Mit Google verbinden';
        this.googleVerified = false;
        this.mailText = 'E-Mail bestätigen';
        this.smsText = 'Per SMS bestätigen';
        this.smsConfirmed = false;
    }
    MyProfilePage.prototype.ionViewWillEnter = function () {
        this.checkVerifcations();
    };
    MyProfilePage.prototype.checkVerifcations = function () {
        var _this = this;
        this.user = this._loginService.getUser();
        this._loginService.getProviderData().forEach(function (data) {
            if (data.providerId === 'google.com') {
                _this.setGoogleConnectedInformation();
            }
        });
        if (this.user.emailVerified) {
            this.mailText = "E-Mail bestätigt";
        }
    };
    MyProfilePage.prototype.linkGoogle = function () {
        var _this = this;
        if (!this.googleVerified) {
            this._loginService.linkUserWithGoogle().then(function (suc) {
                _this.googleVerified = suc;
                if (_this.googleVerified) {
                    _this.setGoogleConnectedInformation();
                }
            }).catch(function (err) {
            });
        }
    };
    MyProfilePage.prototype.onPayment = function (account) {
        this._navCtrl.push('AddEditPaymentPage', { account: account });
    };
    MyProfilePage.prototype.onAddress = function (address) {
        this._navCtrl.push('AddEditAddressComponent', { address: address });
    };
    MyProfilePage.prototype.onEditProfile = function () {
        this._navCtrl.push('EditProfilePage');
    };
    MyProfilePage.prototype.sendMail = function () {
        this._loginService.sendMailVerification();
    };
    MyProfilePage.prototype.setGoogleConnectedInformation = function () {
        this.googleVerified = true;
        this.googleText = 'Mit Google verbunden';
    };
    return MyProfilePage;
}());
MyProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'myProfile-page',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\myProfile\myProfile.component.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Mein Profil</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-item class="itemfullWidthBorder" detail-push no-lines (click)="onEditProfile()">\n\n        <ion-avatar item-start>\n\n            <img [src]="user?.photoURL">\n\n        </ion-avatar>\n\n        <h2>{{user?.email}}</h2>\n\n        <p>{{user?.displayName}}</p>\n\n    </ion-item>\n\n\n\n    <ion-item style="background-color:#e6e6e6" no-lines>\n\n        Deine Adresse\n\n        <button ion-button color="secondary" *ngIf="!addresses" clear medium icon-only item-end (click)="onAddress(null)">\n\n                <ion-icon name=\'add\'></ion-icon>\n\n        </button>\n\n    </ion-item>\n\n\n\n    <ion-item class="itemfullWidthBorder" *ngFor="let item of addresses" no-lines>\n\n        <h2>{{item.street}}{{item.additive}}</h2>\n\n        <p>{{item.plz}} {{item.city}}</p>\n\n        <button ion-button color="secondary" clear medium icon-only item-end (click)="onAddress(item)">\n\n            <ion-icon name=\'md-create\'></ion-icon>\n\n        </button>\n\n    </ion-item>\n\n\n\n    <ion-item style="background-color:#e6e6e6" no-lines>\n\n        Bezahlung\n\n        <button ion-button color="secondary" clear medium icon-only item-end (click)="onPayment(null)">\n\n                    <ion-icon name=\'add\'></ion-icon>\n\n        </button>\n\n    </ion-item>\n\n\n\n    <ion-item class="itemfullWidthBorder" *ngFor="let acc of payments" no-lines>\n\n        <h2>{{acc.name}}</h2>\n\n        <p>{{acc.iban | hideIban}}</p>\n\n        <button ion-button color="secondary" clear medium icon-only item-end (click)="onPayment(acc)">\n\n            <ion-icon name=\'md-create\'></ion-icon>\n\n        </button>\n\n    </ion-item>\n\n\n\n    <ion-item style="background-color:#e6e6e6" no-lines>\n\n            Profil-Bestätigung\n\n        </ion-item>\n\n    \n\n        <ion-item class="itemfullWidthBorder" no-lines (click)="linkGoogle()">\n\n            <ion-icon name="logo-google" color="red" item-start></ion-icon>\n\n            {{googleText}}\n\n            <ion-icon *ngIf="googleVerified" name=\'checkmark-circle\' color="secondary" large item-end></ion-icon>\n\n        </ion-item>\n\n    \n\n        <ion-item class="itemfullWidthBorder" no-lines (click)="sendMail()">\n\n            <ion-icon name="mail" color="mail" item-start></ion-icon>            \n\n            {{mailText}}\n\n            <ion-icon *ngIf="user?.emailVerified" name=\'checkmark-circle\' color="secondary" large item-end></ion-icon>\n\n        </ion-item>\n\n    \n\n        <!--<ion-item class="itemfullWidthBorder" no-lines>\n\n            <ion-icon name="call" item-start></ion-icon>\n\n            {{smsText}}\n\n            <ion-icon *ngIf="smsConfirmed" name=\'checkmark-circle\' item-end></ion-icon>\n\n        </ion-item>-->\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\myProfile\myProfile.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__share_login_service__["a" /* LoginService */]])
], MyProfilePage);

//# sourceMappingURL=myProfile.component.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEditAddressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddEditAddressComponent = (function () {
    function AddEditAddressComponent(_navParams, _formBuilder) {
        this._navParams = _navParams;
        this._formBuilder = _formBuilder;
        this.title = 'Adresse bearbeiten';
        this.buttonTitle = 'Speichern';
        this.createForm();
    }
    AddEditAddressComponent.prototype.ionViewWillEnter = function () {
        var addr = this._navParams.get('address');
        if (addr) {
            this.addressForm.controls['name'].setValue(addr.name);
            this.addressForm.controls['street'].setValue(addr.street);
            this.addressForm.controls['additive'].setValue(addr.additive);
            this.addressForm.controls['plz'].setValue(addr.plz);
            this.addressForm.controls['city'].setValue(addr.city);
        }
        // Keine Adresse gefunden
        if (!this.addressForm.controls['name'].value) {
            this.buttonTitle = 'Hinzufügen';
            this.title = 'Adresse hinzufügen';
        }
    };
    AddEditAddressComponent.prototype.addItem = function () {
        alert("Speichern implement Todo!");
    };
    AddEditAddressComponent.prototype.createForm = function () {
        this.addressForm = this._formBuilder.group({
            name: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
                ]
            ],
            street: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
                ]
            ],
            additive: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
                ]
            ],
            plz: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
                ]
            ],
            city: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
                ]
            ]
        });
    };
    return AddEditAddressComponent;
}());
AddEditAddressComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'addEditAddress-page',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\myProfile\addEditAdress\addEditAddress.component.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{title}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <form [formGroup]="addressForm" (submit)="addItem()">\n\n        <ion-list>\n\n            <ion-item class="itemfullWidthBorder" no-lines>\n\n                <ion-label stacked>Name*</ion-label>\n\n                <ion-input type="text" formControlName="name" placeholder="z.B. Max Müller"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item class="itemfullWidthBorder" no-lines>\n\n                <ion-label stacked>Straße*</ion-label>\n\n                <ion-input type="text" formControlName="street" placeholder="z.B. Gartnerstraße 51"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item class="itemfullWidthBorder" no-lines>\n\n                <ion-label stacked>Adresszusatz</ion-label>\n\n                <ion-input type="text" formControlName="additive" placeholder="z.B. 4.Stock"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item class="itemfullWidthBorder" no-lines>\n\n                <ion-label stacked>Postleitzahl*</ion-label>\n\n                <ion-input type="text" formControlName="plz" placeholder="z.B. 90402"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item class="itemfullWidthBorder" no-lines>\n\n                <ion-label stacked>Stadt*</ion-label>\n\n                <ion-input type="text" formControlName="city" placeholder="z.B. Nürnberg"></ion-input>\n\n            </ion-item>\n\n\n\n            <div padding>\n\n                <button ion-button color="primary" block [disabled]="!addressForm.valid">{{buttonTitle}}</button>\n\n            </div>\n\n        </ion-list>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\myProfile\addEditAdress\addEditAddress.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
], AddEditAddressComponent);

//# sourceMappingURL=addEditAddress.component.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeHelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BarcodeHelpComponent = (function () {
    function BarcodeHelpComponent() {
    }
    return BarcodeHelpComponent;
}());
BarcodeHelpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'barcode-help',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\helpPages\barcode-help\barcode-help.component.html"*/'<h2 style="text-align:center;">Barcode-Hilfe</h2>\n\n<ion-card>\n\n    <ion-card-content>\n\n        Der Barcode befindet sich meist auf der Artikelrückseite. Wenn Sie auf der Rückseite ihres Buches keinen Barcode finden,\n\n        geben Sie die ISBN ein. Die ISBN finden Sie meistens auf den ersten oder letzten Seiten des Buches.\n\n    </ion-card-content>\n\n</ion-card>'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\helpPages\barcode-help\barcode-help.component.html"*/,
        styles: ['']
    }),
    __metadata("design:paramtypes", [])
], BarcodeHelpComponent);

//# sourceMappingURL=barcode-help.component.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEditPaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddEditPaymentPage = (function () {
    function AddEditPaymentPage(_navParams, _formBuilder) {
        this._navParams = _navParams;
        this._formBuilder = _formBuilder;
        this.buttonTitle = 'Speichern';
        this.title = 'Konto bearbeiten';
        this.createForm();
    }
    AddEditPaymentPage.prototype.ionViewWillEnter = function () {
        var acc = this._navParams.get('account');
        if (acc) {
            this.payment.controls['name'].setValue(acc.name);
            this.payment.controls['iban'].setValue(acc.iban);
        }
        // Keine Payment-Methode gefunden
        if (!this.payment.controls['name'].value) {
            this.buttonTitle = 'Hinzufügen';
            this.title = 'Konto hinzufügen';
        }
    };
    AddEditPaymentPage.prototype.addItem = function () {
        alert("implement todo");
    };
    AddEditPaymentPage.prototype.createForm = function () {
        this.payment = this._formBuilder.group({
            name: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
                ]
            ],
            iban: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
                ]
            ]
        });
    };
    return AddEditPaymentPage;
}());
AddEditPaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'addEditPayment-page',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\myProfile\addEditPayment\addEditPayment.component.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{title}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-item style="background-color:#D3D3D3;">\n\n        <p>Konto</p>\n\n    </ion-item>\n\n    <form [formGroup]="payment" (submit)="addItem()">\n\n        <ion-list>\n\n            <ion-item class="itemfullWidthBorder" no-lines>\n\n                <ion-label stacked>Name des Kontoinhabers + Nachname</ion-label>\n\n                <ion-input type="text" formControlName="name" placeholder="z.B. Max Müller"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item class="itemfullWidthBorder" no-lines>\n\n                <ion-label stacked>IBAN</ion-label>\n\n                <ion-input type="text" formControlName="iban" placeholder="z.B. 98765432100"></ion-input>\n\n            </ion-item>\n\n\n\n            <div padding>\n\n                <button ion-button color="primary" block [disabled]="!payment.valid">{{buttonTitle}}</button>\n\n            </div>\n\n        </ion-list>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\myProfile\addEditPayment\addEditPayment.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
], AddEditPaymentPage);

//# sourceMappingURL=addEditPayment.component.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IbanPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IbanPipe = (function () {
    function IbanPipe() {
    }
    IbanPipe.prototype.transform = function (value) {
        var start = value.substring(0, 4);
        var mid = '****';
        var end = value.substring(8);
        return start + mid + end;
    };
    return IbanPipe;
}());
IbanPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: "hideIban"
    })
], IbanPipe);

//# sourceMappingURL=ibanPipe.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_login_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_actionSheetCtrl_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProfilePage = (function () {
    function EditProfilePage(_navCtrl, _loginService, _actionSheetCtrlService, _formBuilder) {
        this._navCtrl = _navCtrl;
        this._loginService = _loginService;
        this._actionSheetCtrlService = _actionSheetCtrlService;
        this._formBuilder = _formBuilder;
        this.photoURL = "";
        this.createForm();
    }
    EditProfilePage.prototype.ionViewWillEnter = function () {
        var firebaseUser = this._loginService.getUser();
        if (firebaseUser) {
            this.profile.controls['name'].setValue(firebaseUser.displayName);
            this.profile.controls['mail'].setValue(firebaseUser.email);
            this.photoURL = firebaseUser.photoURL;
            this.profile.controls['description'].setValue("Todo GET Description from API");
        }
    };
    EditProfilePage.prototype.saveProfile = function () {
        this._loginService.updateUser(this.profile.controls['name'].value, this.photoURL);
        this._navCtrl.pop();
    };
    EditProfilePage.prototype.uploadPhoto = function (options) {
        var _this = this;
        this._actionSheetCtrlService.uploadPhoto().then(function (pic) {
            if (pic !== 'failed') {
                _this.photoURL = pic;
                _this._loginService.updateUser(undefined, _this.photoURL);
            }
        }).catch(function (err) {
        });
    };
    EditProfilePage.prototype.createForm = function () {
        this.profile = this._formBuilder.group({
            name: ['', [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required
                ]
            ],
            mail: ['', [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required
                ]
            ],
            description: ['', [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required
                ]
            ]
        });
    };
    return EditProfilePage;
}());
EditProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'editProfile-page',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\myProfile\editProfile\editProfile.component.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Dein Profil bearbeiten</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <form [formGroup]="profile" (submit)="saveProfile()">\n\n        <ion-item class="itemfullWidthBorder" detail-push no-lines (click)="uploadPhoto()">\n\n            <ion-avatar item-start>\n\n                <img [src]="photoURL">\n\n            </ion-avatar>\n\n            <h2>Profilbild ändern</h2>\n\n        </ion-item>\n\n\n\n        <ion-item class="itemfullWidthBorder" no-lines>\n\n            <ion-label stacked>Name</ion-label>\n\n            <ion-input type="text" formControlName="name" placeholder="z.B. Max Müller"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item class="itemfullWidthBorder" no-lines>\n\n            <ion-label stacked>E-Mail</ion-label>\n\n            <ion-input type="text" formControlName="mail" [disabled]="true"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item class="itemfullWidthBorder" no-lines>\n\n            <ion-label stacked>Über mich</ion-label>\n\n            <ion-textarea fz-elastic formControlName="description" placeholder="Erzähl uns mehr über dich!"></ion-textarea>\n\n        </ion-item>\n\n\n\n        <div padding>\n\n            <button ion-button color="primary" block>Speichern</button>\n\n        </div>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\myProfile\editProfile\editProfile.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__share_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_3__share_actionSheetCtrl_service__["a" /* ActionSheetCtrlService */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]])
], EditProfilePage);

//# sourceMappingURL=editProfile.component.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_dexieDatabase_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_book_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_picture_service__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoritesPage = (function () {
    function FavoritesPage(_databaseService, _bookService, _pictureService) {
        this._databaseService = _databaseService;
        this._bookService = _bookService;
        this._pictureService = _pictureService;
        this.seller = {
            accountName: 'King Döll',
            profilePicture: 'https://www.fupa.net/fupa/images/photo/big/marco-doell-954161_1.jpg'
        };
        this.items = [];
        this.ids = [];
    }
    FavoritesPage.prototype.ionViewDidLoad = function () {
        this.initFavorites();
    };
    FavoritesPage.prototype.initFavorites = function () {
        var _this = this;
        this._databaseService.getAllFavorites().then(function (succ) {
            succ.forEach(function (elem) {
                _this.ids.push(elem.id);
            });
            _this.loadBooks();
        })
            .catch(function (error) {
        });
    };
    FavoritesPage.prototype.loadBooks = function () {
        var _this = this;
        this._bookService.getBooksFromIds(0, 50000, this.ids).subscribe(function (res) {
            var books = res;
            books.forEach(function (element) {
                _this.items.push(element);
            });
            // Bilder für alle items holen
            _this._pictureService.loadThumbnails(_this.items);
        }, function (error) {
            //alert("Fehler beim laden der Bücher");
        });
    };
    FavoritesPage.prototype.doRefresh = function (refresher) {
        this.initOnlyForTest();
        setTimeout(function () {
            refresher.complete();
        }, 1500);
    };
    FavoritesPage.prototype.initOnlyForTest = function () {
        this.ids = [];
        this.items = [];
        this.initFavorites();
    };
    return FavoritesPage;
}());
FavoritesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'favorites-page',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\favorites\favorites.component.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Favoriten</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Herunterziehen zum aktualisieren" refreshingSpinner="circles"\n\n            refreshingText="Aktualisiere...">\n\n        </ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <ion-grid [virtualScroll]="items">\n\n        <ion-row>\n\n            <ion-col col-6 col-sm-4 col-md-3 col-lg-2 *virtualItem="let item">\n\n                <book-item class="test" [item]="item" [seller]="seller" (click)="onBookDetail(item)">\n\n                </book-item>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    \n\n</ion-content>'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\favorites\favorites.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__share_dexieDatabase_service__["a" /* DexieDatabaseService */], __WEBPACK_IMPORTED_MODULE_2__share_book_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_3__share_picture_service__["a" /* PictureService */]])
], FavoritesPage);

//# sourceMappingURL=favorites.component.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPictureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddPictureComponent = (function () {
    function AddPictureComponent() {
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.picture = "";
    }
    AddPictureComponent.prototype.displayImage = function () {
        if (!this.picture) {
            return "";
        }
        return this.picture;
    };
    AddPictureComponent.prototype.deletePicture = function () {
        this.delete.emit(this.picture);
    };
    return AddPictureComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], AddPictureComponent.prototype, "delete", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AddPictureComponent.prototype, "picture", void 0);
AddPictureComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'addPicture',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\addItem\addPicture\addPicture.component.html"*/'<img [src]="displayImage()" style="width:100%; height:200px;" />\n\n<ion-fab top right>\n  <button ion-fab icon-only mini (click)="deletePicture()">\n    <ion-icon name=\'close\'></ion-icon>\n  </button>\n</ion-fab>'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\addItem\addPicture\addPicture.component.html"*/
    }),
    __metadata("design:paramtypes", [])
], AddPictureComponent);

//# sourceMappingURL=addPicture.component.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailLoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_login_component__ = __webpack_require__(791);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MailLoginPageModule = (function () {
    function MailLoginPageModule() {
    }
    return MailLoginPageModule;
}());
MailLoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__mail_login_component__["a" /* MailLoginPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mail_login_component__["a" /* MailLoginPage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__mail_login_component__["a" /* MailLoginPage */]
        ]
    })
], MailLoginPageModule);

//# sourceMappingURL=mail-login.component.module.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_login_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MailLoginPage = (function () {
    function MailLoginPage(_navCtrl, _loginService, _formBuilder) {
        this._navCtrl = _navCtrl;
        this._loginService = _loginService;
        this._formBuilder = _formBuilder;
        this.createForm();
    }
    MailLoginPage.prototype.onRegister = function () {
        this._navCtrl.push('RegisterPage');
    };
    MailLoginPage.prototype.onLogin = function () {
        var mail = this.login.get('mail').value;
        var password = this.login.get('password').value;
        this._loginService.loginWithMail(mail, password);
    };
    MailLoginPage.prototype.createForm = function () {
        this.login = this._formBuilder.group({
            mail: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(4)
                ]
            ],
            password: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(4)
                ]
            ],
        });
    };
    return MailLoginPage;
}());
MailLoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mail-login-page',template:/*ion-inline-start:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\login\mail-login\mail-login.component.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Einloggen</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <form [formGroup]="login" (ngSubmit)="onLogin()">\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label floating>E-Mail</ion-label>\n\n                <ion-input type="email" formControlName="mail"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating>Passwort</ion-label>\n\n                <ion-input type="password" formControlName="password"></ion-input>\n\n            </ion-item>\n\n            <div padding>\n\n                <button ion-button block color="primary" [disabled]="!login.valid">Anmelden</button>\n\n            </div>\n\n        </ion-list>\n\n    </form>\n\n\n\n    <div padding>\n\n        <button ion-button color="primary" outline block (click)="onRegister()">Registrieren</button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marco\Projects\book-circle-ui\src\app\pages\login\mail-login\mail-login.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__share_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
], MailLoginPage);

//# sourceMappingURL=mail-login.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingCtrlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingCtrlService = (function () {
    function LoadingCtrlService(_loadingCtrl) {
        this._loadingCtrl = _loadingCtrl;
    }
    LoadingCtrlService.prototype.presentLoading = function (text) {
        this.loading = this._loadingCtrl.create({
            content: text,
            dismissOnPageChange: true,
            duration: 20000
        });
        this.loading.present();
    };
    LoadingCtrlService.prototype.stopLoading = function () {
        if (this.loading) {
            this.loading.dismiss();
        }
    };
    return LoadingCtrlService;
}());
LoadingCtrlService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
], LoadingCtrlService);

//# sourceMappingURL=loadingCtrlService.js.map

/***/ })

},[363]);
//# sourceMappingURL=main.js.map