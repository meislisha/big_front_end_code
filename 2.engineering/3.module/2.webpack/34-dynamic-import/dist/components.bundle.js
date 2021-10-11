(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _common_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _common_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _posts_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _posts_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_posts_css__WEBPACK_IMPORTED_MODULE_2__);




/* harmony default export */ __webpack_exports__["default"] = (() => {
  const posts = document.createElement('div')
  posts.className = 'posts'

  posts.innerHTML = '<h2>Posts</h2>'

  Object(_common_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('/posts').then(data => {
    data.forEach(item => {
      const article = document.createElement('article')
      article.className = 'post'

      const h3 = document.createElement('h3')
      h3.textContent = item.title
      article.appendChild(h3)

      const paragraph = document.createElement('p')
      paragraph.textContent = item.body
      article.appendChild(paragraph)

      posts.appendChild(article)
    })
  })

  return posts
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (endpoint => {
  return fetch(`https://jsonplaceholder.typicode.com${endpoint}`)
    .then(response => response.json())
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(8);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body  {\n  font-size: 16px;\n  line-height: 1.5;\n  color: #495057;\n}\n\n.wrapper {\n  max-width: 750px;\n  margin: 0 auto;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.brand {\n  font-size: 30px;\n}\n\n\n.nav ul {\n  display: flex;\n  list-style: none;\n}\n\n.nav a {\n  display: block;\n  padding: 5px 10px;\n  color: currentColor;\n  text-decoration: none;\n}\n\n.nav a:hover {\n  text-decoration: underline;\n}\n\n.main {\n  margin-bottom: 30px;\n}\n\n.main h2 {\n  width: 100%;\n  margin: 10px 0 50px;\n  text-align: center;\n  font-size: 3em;\n  opacity: 0.8;\n}\n\n.footer {\n  padding: 5px;\n  border-top: 1px solid #e0e0e0;\n  text-align: center;\n  color: #868e96;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(10);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".post + .post {\n  border-top: 1px solid #eee;\n}\n\n.post h2 {\n  margin-bottom: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _common_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _common_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _album_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _album_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_album_css__WEBPACK_IMPORTED_MODULE_2__);




/* harmony default export */ __webpack_exports__["default"] = (() => {
  const album = document.createElement('div')
  album.className = 'album'

  album.innerHTML = '<h2>Albums</h2>'

  Object(_common_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('/photos?albumId=1').then(data => {
    data.forEach(item => {
      const section = document.createElement('section')
      section.className = 'photo'

      const img = document.createElement('img')
      img.src = item.thumbnailUrl
      section.appendChild(img)

      const h3 = document.createElement('h3')
      h3.textContent = item.title
      section.appendChild(h3)

      album.appendChild(section)
    })
  })

  return album
});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(13);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".album {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.photo {\n  width: 250px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.photo img {\n  width: 200px;\n}\n\n.photo h3 {\n  padding: 0 10px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: 20px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ })
]]);