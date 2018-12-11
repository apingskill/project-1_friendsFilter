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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_api_vk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/api.vk.js */ \"./src/modules/api.vk.js\");\n/* harmony import */ var _modules_friends_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/friends.js */ \"./src/modules/friends.js\");\n/* harmony import */ var _modules_dnd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dnd.js */ \"./src/modules/dnd.js\");\n/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _modules_matching_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/matching.js */ \"./src/modules/matching.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nmain();\r\n\r\nfunction main() {\r\n    let listAll      = document.querySelector('.listAll');\r\n    let listSelected = document.querySelector('.listSelected');\r\n    let saveButton   = document.querySelector('.saveButton');\r\n    let leftInput    = document.querySelector('.leftInput');\r\n    let rightInput   = document.querySelector('.rightInput');\r\n\r\n    if (sessionStorage.allFriends == undefined) {\r\n        initFunc(listAll, listSelected, saveButton, leftInput, rightInput);\r\n    } else {\r\n        saveButton.addEventListener('click', () => {\r\n            Object(_modules_storage_js__WEBPACK_IMPORTED_MODULE_3__[\"storageFunction\"])(listAll, listSelected);\r\n        });\r\n        Object(_modules_friends_js__WEBPACK_IMPORTED_MODULE_1__[\"addingFriendFromLocalAll\"])(listAll, sessionStorage.allFriends);\r\n        Object(_modules_friends_js__WEBPACK_IMPORTED_MODULE_1__[\"addingFriendFromLocalAll\"])(listSelected, sessionStorage.selectedFriends);\r\n\r\n        let allInitFriends  = [];\r\n        let selectedFriends  = [];\r\n\r\n        for (let i = 0; i < listAll.children.length; i++) {\r\n            allInitFriends.push(listAll.children[i]);\r\n        }\r\n\r\n        for (let i = 0; i < listSelected.children.length; i++) {\r\n            selectedFriends.push(listSelected.children[i]);\r\n        }\r\n\r\n        leftInput.addEventListener('keyup', () => {\r\n            Object(_modules_matching_js__WEBPACK_IMPORTED_MODULE_4__[\"isMatchingInit\"])(leftInput, listAll, allInitFriends);\r\n        });\r\n\r\n        rightInput.addEventListener('keyup', () => {\r\n            Object(_modules_matching_js__WEBPACK_IMPORTED_MODULE_4__[\"isMatchingInit\"])(rightInput, listSelected, selectedFriends);\r\n        });\r\n\r\n        listAll.addEventListener('click', () => {\r\n            Object(_modules_friends_js__WEBPACK_IMPORTED_MODULE_1__[\"moveFriend\"])(allInitFriends, selectedFriends);\r\n        });\r\n\r\n        listSelected.addEventListener('click', () => {\r\n            Object(_modules_friends_js__WEBPACK_IMPORTED_MODULE_1__[\"returnFriend\"])(allInitFriends, selectedFriends);\r\n        });\r\n\r\n        Object(_modules_dnd_js__WEBPACK_IMPORTED_MODULE_2__[\"makeDnDInit\"])([listAll, listSelected], listAll, listSelected, allInitFriends, selectedFriends);\r\n    }\r\n}\r\n\r\nasync function initFunc(listAll, listSelected, saveButton, leftInput, rightInput) {\r\n    VK.init({ apiId: 6774126 });\r\n    await Object(_modules_api_vk_js__WEBPACK_IMPORTED_MODULE_0__[\"auth\"])();\r\n\r\n    let data = await Object(_modules_api_vk_js__WEBPACK_IMPORTED_MODULE_0__[\"callAPI\"])('friends.get', {'fields': 'first_name, last_name, photo_100'});\r\n    let allFriends = data.items;\r\n\r\n    Object(_modules_friends_js__WEBPACK_IMPORTED_MODULE_1__[\"addingFriend\"])(allFriends, listAll);\r\n    saveButton.addEventListener('click', () => {\r\n        Object(_modules_storage_js__WEBPACK_IMPORTED_MODULE_3__[\"storageFunction\"])(listAll, listSelected);\r\n    });\r\n\r\n    let allInitFriends  = [];\r\n    let selectedFriends  = [];\r\n\r\n    for (let i = 0; i < listAll.children.length; i++) {\r\n        allInitFriends.push(listAll.children[i]);\r\n    }\r\n\r\n    leftInput.addEventListener('keyup', () => {\r\n        Object(_modules_matching_js__WEBPACK_IMPORTED_MODULE_4__[\"isMatchingInit\"])(leftInput, listAll, allInitFriends);\r\n    });\r\n\r\n    rightInput.addEventListener('keyup', () => {\r\n        Object(_modules_matching_js__WEBPACK_IMPORTED_MODULE_4__[\"isMatchingInit\"])(rightInput, listSelected, selectedFriends);\r\n    });\r\n\r\n    listAll.addEventListener('click', () => {\r\n        Object(_modules_friends_js__WEBPACK_IMPORTED_MODULE_1__[\"moveFriend\"])(allInitFriends, selectedFriends);\r\n    });\r\n\r\n    listSelected.addEventListener('click', () => {\r\n        Object(_modules_friends_js__WEBPACK_IMPORTED_MODULE_1__[\"returnFriend\"])(allInitFriends, selectedFriends);\r\n    });\r\n\r\n    Object(_modules_dnd_js__WEBPACK_IMPORTED_MODULE_2__[\"makeDnDInit\"])([listAll, listSelected], listAll, listSelected, allInitFriends, selectedFriends);\r\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/api.vk.js":
/*!*******************************!*\
  !*** ./src/modules/api.vk.js ***!
  \*******************************/
/*! exports provided: auth, callAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"auth\", function() { return auth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"callAPI\", function() { return callAPI; });\nfunction auth() {\r\n    return new Promise((resolve, reject) => {\r\n        VK.Auth.login(data => {\r\n            if (data.session) {\r\n                resolve();\r\n            } else {\r\n                reject(new Error('Не удалось авторизоваться'));\r\n            }\r\n        }, 2);\r\n    });\r\n}\r\n\r\nfunction callAPI(method, params) {\r\n    params.v = '5.92';\r\n\r\n    return new Promise((resolve, reject) => {\r\n        VK.api(method, params, (data) => {\r\n            resolve(data.response);\r\n        });\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/api.vk.js?");

/***/ }),

/***/ "./src/modules/dnd.js":
/*!****************************!*\
  !*** ./src/modules/dnd.js ***!
  \****************************/
/*! exports provided: makeDnDInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeDnDInit\", function() { return makeDnDInit; });\nfunction makeDnDInit(zones, listAll, listSelected, leftFriends, rightFriends) {\r\n    let currentDrag;\r\n\r\n    zones.forEach(zone => {\r\n        zone.addEventListener('dragstart', (e) => {\r\n            e.dataTransfer.setData('text/html', 'dragstart');\r\n            currentDrag = { source: zone, node: e.target };\r\n        });\r\n\r\n        zone.addEventListener('dragover', (e) => {\r\n            e.preventDefault();\r\n        });\r\n\r\n        zone.addEventListener('drop', (e) => {\r\n            if (currentDrag) {\r\n                e.preventDefault();\r\n\r\n                if (currentDrag.source !== zone) {\r\n                    if (e.target.classList.contains('friend')) {\r\n                        zone.insertBefore(currentDrag.node, e.target.nextElementSibling);\r\n                    } else {\r\n                        zone.insertBefore(currentDrag.node, zone.lastElementChild);\r\n                    }\r\n                }\r\n\r\n                leftFriends.length = 0;\r\n\r\n                for (let i = 0; i < listAll.children.length; i++) {\r\n                    leftFriends.push(listAll.children[i]);\r\n                }\r\n\r\n                rightFriends.length = 0;\r\n\r\n                for (let i = 0; i < listSelected.children.length; i++) {\r\n                    rightFriends.push(listAll.children[i]);\r\n                }\r\n                \r\n                currentDrag = null;\r\n            }\r\n        })\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/dnd.js?");

/***/ }),

/***/ "./src/modules/friends.js":
/*!********************************!*\
  !*** ./src/modules/friends.js ***!
  \********************************/
/*! exports provided: addingFriend, addingFriendFromLocalAll, moveFriend, returnFriend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addingFriend\", function() { return addingFriend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addingFriendFromLocalAll\", function() { return addingFriendFromLocalAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveFriend\", function() { return moveFriend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"returnFriend\", function() { return returnFriend; });\nfunction addingFriend(arrFriends, list) {\r\n    for (let i = 0; i < arrFriends.length; i++) {\r\n        let friend       = document.createElement('div');\r\n        let imageAndName = document.createElement('div');\r\n        let image        = document.createElement('div');\r\n        let name         = document.createElement('div');\r\n        let add          = document.createElement('div');\r\n\r\n        friend.classList.add('friend');\r\n        friend.setAttribute('data-first_name', `${arrFriends[i].first_name}`);\r\n        friend.setAttribute('data-last_name', `${arrFriends[i].last_name}`);\r\n        friend.setAttribute('data-photo_100', `${arrFriends[i].photo_100}`);\r\n        friend.setAttribute('draggable', 'true');\r\n\r\n        imageAndName.classList.add('imageAndName');\r\n        image.classList.add('image');\r\n        name.classList.add('name');\r\n        add.classList.add('add');\r\n\r\n        name.textContent    = `${arrFriends[i].first_name} ${arrFriends[i].last_name}`;\r\n        image.style.cssText = `background-image: url(${arrFriends[i].photo_100});`;\r\n        imageAndName.appendChild(image);\r\n        imageAndName.appendChild(name);\r\n        friend.appendChild(imageAndName);\r\n        friend.appendChild(add);\r\n        list.appendChild(friend);\r\n    }\r\n}\r\n\r\nfunction addingFriendFromLocalAll(list, storage) {\r\n    let arrFriends = JSON.parse(storage);\r\n\r\n    for (let i = 0; i < arrFriends.length; i++) {\r\n        let friend       = document.createElement('div');\r\n        let imageAndName = document.createElement('div');\r\n        let image        = document.createElement('div');\r\n        let name         = document.createElement('div');\r\n        let add          = document.createElement('div');\r\n\r\n        friend.classList.add('friend');\r\n        friend.setAttribute('data-first_name', `${arrFriends[i].first_name}`);\r\n        friend.setAttribute('data-last_name', `${arrFriends[i].last_name}`);\r\n        friend.setAttribute('data-photo_100', `${arrFriends[i].photo_100}`);\r\n        friend.setAttribute('data-photo_100', `${arrFriends[i].photo_100}`);\r\n        friend.setAttribute('draggable', 'true');\r\n\r\n        imageAndName.classList.add('imageAndName');\r\n        image.classList.add('image');\r\n        name.classList.add('name');\r\n        add.classList.add('add');\r\n\r\n        name.textContent    = `${arrFriends[i].first_name} ${arrFriends[i].last_name}`;\r\n        image.style.cssText = `background-image: url(${arrFriends[i].photo_100});`;\r\n        imageAndName.appendChild(image);\r\n        imageAndName.appendChild(name);\r\n        friend.appendChild(imageAndName);\r\n        friend.appendChild(add);\r\n        list.appendChild(friend);\r\n    }\r\n}\r\n\r\nfunction moveFriend(leftFriends, rightFriends) {\r\n    let listSelected = document.querySelector('.listSelected');\r\n\r\n    if (event.target.classList.contains('add')) {\r\n        let selectedFriend = event.target.parentNode;\r\n        listSelected.appendChild(selectedFriend);\r\n        rightFriends.push(selectedFriend);\r\n\r\n        for (let i = 0; i < leftFriends.length; i++) {\r\n            if (leftFriends[i] == selectedFriend) {\r\n                leftFriends.splice(i, 1);\r\n            }\r\n            \r\n        }\r\n    }\r\n}\r\n\r\nfunction returnFriend(leftFriends, rightFriends) {\r\n    let listAll = document.querySelector('.listAll');\r\n\r\n    if (event.target.classList.contains('add')) {\r\n        let selectedFriend = event.target.parentNode;\r\n        listAll.appendChild(selectedFriend);\r\n        leftFriends.push(selectedFriend);\r\n\r\n        for (let i = 0; i < rightFriends.length; i++) {\r\n            if (rightFriends[i] == selectedFriend) {\r\n                rightFriends.splice(i, 1);\r\n            }\r\n            \r\n        }\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/friends.js?");

/***/ }),

/***/ "./src/modules/matching.js":
/*!*********************************!*\
  !*** ./src/modules/matching.js ***!
  \*********************************/
/*! exports provided: isMatchingInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isMatchingInit\", function() { return isMatchingInit; });\nfunction isMatchingInit(input, list, friends) {\r\n    let filterValue = input.value.toUpperCase();\r\n\r\n    if (filterValue == '') {\r\n        list.innerHTML = '';\r\n        for (let i = 0; i < friends.length; i++) {\r\n            list.appendChild(friends[i]);\r\n        }\r\n        return;\r\n    }\r\n\r\n    let someFriends = [];\r\n\r\n    for (let i = 0; i < friends.length; i++) {\r\n        let fullName = `${friends[i].getAttribute('data-first_name')} ${friends[i].getAttribute('data-last_name')}`;\r\n        \r\n        fullName = fullName.toUpperCase();\r\n\r\n        if (fullName.indexOf(filterValue) !== -1) {\r\n            someFriends.push(friends[i]);\r\n        }  \r\n    }\r\n\r\n    if (someFriends.length !== 0) {\r\n        list.innerHTML = '';\r\n        for (let i = 0; i < someFriends.length; i++) {\r\n            list.appendChild(someFriends[i]);\r\n        }\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/matching.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/*! exports provided: storageFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storageFunction\", function() { return storageFunction; });\nfunction storageFunction(leftList, rightList) {\r\n    let allStorageFriends = [];\r\n\r\n    for (let i = 0; i < leftList.children.length; i++) {\r\n        let tempObj = {};\r\n        tempObj.first_name = leftList.children[i].getAttribute('data-first_name');\r\n        tempObj.last_name = leftList.children[i].getAttribute('data-last_name');\r\n        tempObj.photo_100 = leftList.children[i].getAttribute('data-photo_100');\r\n        allStorageFriends.push(tempObj);\r\n    }\r\n\r\n    sessionStorage.allFriends = JSON.stringify(allStorageFriends);\r\n\r\n    let selectedStorageFriends = [];\r\n\r\n    for (let i = 0; i < rightList.children.length; i++) {\r\n        let tempObj = {};\r\n        tempObj.first_name = rightList.children[i].getAttribute('data-first_name');\r\n        tempObj.last_name = rightList.children[i].getAttribute('data-last_name');\r\n        tempObj.photo_100 = rightList.children[i].getAttribute('data-photo_100');\r\n        selectedStorageFriends.push(tempObj);\r\n    }\r\n    sessionStorage.selectedFriends = JSON.stringify(selectedStorageFriends);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/storage.js?");

/***/ })

/******/ });