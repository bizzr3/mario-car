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

var moveCar = function moveCar() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'move';
    var tile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (!gameStarted) {
        return;
    }

    tile = tile ? tile : $('.car').parent();

    $.post('/api/move', {
        'x': tile.attr('data-x'),
        'y': tile.attr('data-y'),
        'dir': carDirection
    }).done(function (result) {
        if (result.can_move) {
            var effect__ = $('#move_music').get(0);
            effect__.currentTime = 0;
            effect__.play();

            if (mode !== 'move') {
                placeCar(tile);
            } else {
                placeCar(null, result.x, result.y);
            }
        }
    });
};

var placeCar = function placeCar(tile) {
    var car = $('<div>');
    car.addClass('car');

    $('.car').remove();

    if (!tile) {
        $('td[data-x="' + (arguments.length <= 1 ? undefined : arguments[1]) + '"][data-y="' + (arguments.length <= 2 ? undefined : arguments[2]) + '"]').append(car);
    } else {
        $(tile).append(car);
    }

    var dir = getCarDirection();
    $('.car').addClass(dir ? dir : 'to-right');
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
        case 32:
            moveCar('turn');

            break;
    }

    if (dirText) {
        $('#dir_indicator').text(dirText).attr('data-dir', carDirection);
    }

    moveCar('');
});

$('.table_row .cell').on('click', function () {
    var _this = this;

    if (!gameStarted) {
        $('#background_music').get(0).play();
    }

    var x = $(this).attr('data-x');
    var y = $(this).attr('data-y');

    $.post('/api/place', { 'x': x, 'y': y }).done(function (result) {
        if (result) {
            var effect__ = $('#move_music').get(0);
            effect__.currentTime = 0;
            effect__.play();

            placeCar($(_this));
            gameStarted = true;
        }
    });
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);