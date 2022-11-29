/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
var ellen = ' i love you ellen <3';
console.log(ellen);
var training1 = document.getElementsByClassName('trainings__el')[0];
var training2 = document.getElementsByClassName('trainings__el')[1];
var training3 = document.getElementsByClassName('trainings__el')[2];
var training4 = document.getElementsByClassName('trainings__el')[3];

function makeActive(id) {
    if (training1.classList.contains('active')) {
        training1.classList.remove('active');
    }
    if (training2.classList.contains('active')) {
        training2.classList.remove('active');
    }
    if (training3.classList.contains('active')) {
        training3.classList.remove('active');
    }
    if (training4.classList.contains('active')) {
        training4.classList.remove('active');
    }
    var givenEl = document.getElementById(id);
    givenEl === null || givenEl === void 0 ? void 0 : givenEl.classList.toggle('active');
}


training1.addEventListener('click', ()=> {
    makeActive('el1')
})
training2.addEventListener('click', ()=> {
    makeActive('el2')
})
training3.addEventListener('click', ()=> {
    makeActive('el3')
})
training4.addEventListener('click', ()=> {
    makeActive('el4')
})


/******/ })()
;