/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var gameStarted = false;
var carDirection = 'r';

var getCarDirection = function getCarDirection() {
    switch (carDirection) {
        case 'u':
            return 'to-up';
            break;
        case 'l':
            return 'to-left';
            break;
        case 'd':
            return 'to-down';
            break;
        case 'r':
            return 'to-right';
            break;
        default:
            break;
    }
};

$('body').keydown(function (e) {
    e.preventDefault;

    var dirText = '';

    switch (e.keyCode) {
        case 38:
            carDirection = 'u';
            dirText = 'Up';

            break;
        case 40:
            carDirection = 'd';
            dirText = 'Down';

            break;
        case 37:
            carDirection = 'l';
            dirText = 'Left';

            break;
        case 39:
            carDirection = 'r';
            dirText = 'Right';

            break;
        default:
            break;
    }
    if (dirText) {
        $('#dir_indicator').text(dirText).attr('data-dir', carDirection);
    }
});

$('.table_row .cell').on('click', function () {
    var _this = this;

    var car = $('<div>');
    car.addClass('car');

    if (!gameStarted) {
        $('#background_music').get(0).play();
    }

    $.post('/api/place', { 'x': $(this).attr('data-x'), 'y': $(this).attr('data-y') }).done(function (result) {
        var effect__ = $('#move_music').get(0);
        effect__.currentTime = 0;
        effect__.play();

        $('.car').remove();
        $(_this).append(car);
        var dir = getCarDirection();
        $('.car').addClass(dir ? dir : 'to-right');
    });
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);