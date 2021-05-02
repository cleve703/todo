/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import loadPage from './modules/initial-page-load';\n// import toDoInitialize from './modules/todo-items';\n\n// init();\n\n// function init() {\n//   loadPage();\n  \n\n// }\n\nfunction createCheckBox(id, textSymbol, taskDesc) {\n  const checkBoxDiv = document.createElement('div');\n  checkBoxDiv.setAttribute('id', id)\n  const checkBox = document.createElement('span');\n  checkBox.setAttribute('id', 'checkBoxSpan')\n  checkBox.textContent = textSymbol;\n  checkBoxDiv.appendChild(checkBox);\n  const textLine = document.createElement('span');\n  textLine.setAttribute('id', 'textLine')\n  textLine.textContent = taskDesc;\n  checkBoxDiv.appendChild(textLine);\n  return checkBoxDiv;\n}\n\nfunction toggleCheck(evt) {\n  if (evt.target.innerHTML[0] == '☐') {\n    evt.target.innerHTML = '☑'\n    document.getElementById('textLine').setAttribute('style', 'text-decoration: line-through')\n  }\n  else if (evt.target.innerHTML[0] == '☑') {\n    evt.target.innerHTML = '☐'\n    document.getElementById('textLine').setAttribute('style', 'text-decoration: none')\n  }\n}\n\ncontent = document.getElementById('jumbotron');\nconst checkBox = createCheckBox('checkBox', '☐',  'First task');\ncontent.appendChild(checkBox);\ncheckBox.addEventListener('click', toggleCheck);\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;