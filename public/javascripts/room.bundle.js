/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseError": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.FirebaseError),
/* harmony export */   "SDK_VERSION": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.SDK_VERSION),
/* harmony export */   "_DEFAULT_ENTRY_NAME": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._DEFAULT_ENTRY_NAME),
/* harmony export */   "_addComponent": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._addComponent),
/* harmony export */   "_addOrOverwriteComponent": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._addOrOverwriteComponent),
/* harmony export */   "_apps": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._apps),
/* harmony export */   "_clearComponents": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._clearComponents),
/* harmony export */   "_components": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._components),
/* harmony export */   "_getProvider": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider),
/* harmony export */   "_registerComponent": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent),
/* harmony export */   "_removeServiceInstance": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._removeServiceInstance),
/* harmony export */   "deleteApp": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.deleteApp),
/* harmony export */   "getApp": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp),
/* harmony export */   "getApps": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps),
/* harmony export */   "initializeApp": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp),
/* harmony export */   "onLog": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.onLog),
/* harmony export */   "registerVersion": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion),
/* harmony export */   "setLogLevel": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.setLogLevel)
/* harmony export */ });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


var name = "firebase";
var version = "9.13.0";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version, 'app');

/***/ }),
/* 3 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseError": () => (/* reexport safe */ _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError),
/* harmony export */   "SDK_VERSION": () => (/* binding */ SDK_VERSION),
/* harmony export */   "_DEFAULT_ENTRY_NAME": () => (/* binding */ DEFAULT_ENTRY_NAME),
/* harmony export */   "_addComponent": () => (/* binding */ _addComponent),
/* harmony export */   "_addOrOverwriteComponent": () => (/* binding */ _addOrOverwriteComponent),
/* harmony export */   "_apps": () => (/* binding */ _apps),
/* harmony export */   "_clearComponents": () => (/* binding */ _clearComponents),
/* harmony export */   "_components": () => (/* binding */ _components),
/* harmony export */   "_getProvider": () => (/* binding */ _getProvider),
/* harmony export */   "_registerComponent": () => (/* binding */ _registerComponent),
/* harmony export */   "_removeServiceInstance": () => (/* binding */ _removeServiceInstance),
/* harmony export */   "deleteApp": () => (/* binding */ deleteApp),
/* harmony export */   "getApp": () => (/* binding */ getApp),
/* harmony export */   "getApps": () => (/* binding */ getApps),
/* harmony export */   "initializeApp": () => (/* binding */ initializeApp),
/* harmony export */   "onLog": () => (/* binding */ onLog),
/* harmony export */   "registerVersion": () => (/* binding */ registerVersion),
/* harmony export */   "setLogLevel": () => (/* binding */ setLogLevel)
/* harmony export */ });
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
var _PLATFORM_LOG_STRING, _ERRORS;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }






/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PlatformLoggerServiceImpl = /*#__PURE__*/function () {
  function PlatformLoggerServiceImpl(container) {
    _classCallCheck(this, PlatformLoggerServiceImpl);
    this.container = container;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  _createClass(PlatformLoggerServiceImpl, [{
    key: "getPlatformInfoString",
    value: function getPlatformInfoString() {
      var providers = this.container.getProviders();
      // Loop through providers and get library/version pairs from any that are
      // version components.
      return providers.map(function (provider) {
        if (isVersionServiceProvider(provider)) {
          var service = provider.getImmediate();
          return "".concat(service.library, "/").concat(service.version);
        } else {
          return null;
        }
      }).filter(function (logString) {
        return logString;
      }).join(' ');
    }
  }]);
  return PlatformLoggerServiceImpl;
}();
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
  var component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */;
}

var name$o = "@firebase/app";
var version$1 = "0.8.3";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_1__.Logger('@firebase/app');
var name$n = "@firebase/app-compat";
var name$m = "@firebase/analytics-compat";
var name$l = "@firebase/analytics";
var name$k = "@firebase/app-check-compat";
var name$j = "@firebase/app-check";
var name$i = "@firebase/auth";
var name$h = "@firebase/auth-compat";
var name$g = "@firebase/database";
var name$f = "@firebase/database-compat";
var name$e = "@firebase/functions";
var name$d = "@firebase/functions-compat";
var name$c = "@firebase/installations";
var name$b = "@firebase/installations-compat";
var name$a = "@firebase/messaging";
var name$9 = "@firebase/messaging-compat";
var name$8 = "@firebase/performance";
var name$7 = "@firebase/performance-compat";
var name$6 = "@firebase/remote-config";
var name$5 = "@firebase/remote-config-compat";
var name$4 = "@firebase/storage";
var name$3 = "@firebase/storage-compat";
var name$2 = "@firebase/firestore";
var name$1 = "@firebase/firestore-compat";
var name = "firebase";
var version = "9.13.0";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The default app name
 *
 * @internal
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_PLATFORM_LOG_STRING = {}, _defineProperty(_PLATFORM_LOG_STRING, name$o, 'fire-core'), _defineProperty(_PLATFORM_LOG_STRING, name$n, 'fire-core-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$l, 'fire-analytics'), _defineProperty(_PLATFORM_LOG_STRING, name$m, 'fire-analytics-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$j, 'fire-app-check'), _defineProperty(_PLATFORM_LOG_STRING, name$k, 'fire-app-check-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$i, 'fire-auth'), _defineProperty(_PLATFORM_LOG_STRING, name$h, 'fire-auth-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$g, 'fire-rtdb'), _defineProperty(_PLATFORM_LOG_STRING, name$f, 'fire-rtdb-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$e, 'fire-fn'), _defineProperty(_PLATFORM_LOG_STRING, name$d, 'fire-fn-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$c, 'fire-iid'), _defineProperty(_PLATFORM_LOG_STRING, name$b, 'fire-iid-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$a, 'fire-fcm'), _defineProperty(_PLATFORM_LOG_STRING, name$9, 'fire-fcm-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$8, 'fire-perf'), _defineProperty(_PLATFORM_LOG_STRING, name$7, 'fire-perf-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$6, 'fire-rc'), _defineProperty(_PLATFORM_LOG_STRING, name$5, 'fire-rc-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$4, 'fire-gcs'), _defineProperty(_PLATFORM_LOG_STRING, name$3, 'fire-gcs-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$2, 'fire-fst'), _defineProperty(_PLATFORM_LOG_STRING, name$1, 'fire-fst-compat'), _defineProperty(_PLATFORM_LOG_STRING, 'fire-js', 'fire-js'), _defineProperty(_PLATFORM_LOG_STRING, name, 'fire-js-all'), _PLATFORM_LOG_STRING);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
var _apps = new Map();
/**
 * Registered components.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var _components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */
function _addComponent(app, component) {
  try {
    app.container.addComponent(component);
  } catch (e) {
    logger.debug("Component ".concat(component.name, " failed to register with FirebaseApp ").concat(app.name), e);
  }
}
/**
 *
 * @internal
 */
function _addOrOverwriteComponent(app, component) {
  app.container.addOrOverwriteComponent(component);
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */
function _registerComponent(component) {
  var componentName = component.name;
  if (_components.has(componentName)) {
    logger.debug("There were multiple attempts to register component ".concat(componentName, "."));
    return false;
  }
  _components.set(componentName, component);
  // add the component to existing app instances
  var _iterator = _createForOfIteratorHelper(_apps.values()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var app = _step.value;
      _addComponent(app, component);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */
function _getProvider(app, name) {
  var heartbeatController = app.container.getProvider('heartbeat').getImmediate({
    optional: true
  });
  if (heartbeatController) {
    void heartbeatController.triggerHeartbeat();
  }
  return app.container.getProvider(name);
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */
function _removeServiceInstance(app, name) {
  var instanceIdentifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_ENTRY_NAME;
  _getProvider(app, name).clearInstance(instanceIdentifier);
}
/**
 * Test only
 *
 * @internal
 */
function _clearComponents() {
  _components.clear();
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERRORS = (_ERRORS = {}, _defineProperty(_ERRORS, "no-app" /* NO_APP */, "No Firebase App '{$appName}' has been created - " + 'call Firebase App.initializeApp()'), _defineProperty(_ERRORS, "bad-app-name" /* BAD_APP_NAME */, "Illegal App name: '{$appName}"), _defineProperty(_ERRORS, "duplicate-app" /* DUPLICATE_APP */, "Firebase App named '{$appName}' already exists with different options or config"), _defineProperty(_ERRORS, "app-deleted" /* APP_DELETED */, "Firebase App named '{$appName}' already deleted"), _defineProperty(_ERRORS, "no-options" /* NO_OPTIONS */, 'Need to provide options, when not being deployed to hosting via source.'), _defineProperty(_ERRORS, "invalid-app-argument" /* INVALID_APP_ARGUMENT */, 'firebase.{$appName}() takes either no argument or a ' + 'Firebase App instance.'), _defineProperty(_ERRORS, "invalid-log-argument" /* INVALID_LOG_ARGUMENT */, 'First argument to `onLog` must be null or a function.'), _defineProperty(_ERRORS, "idb-open" /* IDB_OPEN */, 'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.'), _defineProperty(_ERRORS, "idb-get" /* IDB_GET */, 'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.'), _defineProperty(_ERRORS, "idb-set" /* IDB_WRITE */, 'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.'), _defineProperty(_ERRORS, "idb-delete" /* IDB_DELETE */, 'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.'), _ERRORS);
var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__.ErrorFactory('app', 'Firebase', ERRORS);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FirebaseAppImpl = /*#__PURE__*/function () {
  function FirebaseAppImpl(options, config, container) {
    var _this = this;
    _classCallCheck(this, FirebaseAppImpl);
    this._isDeleted = false;
    this._options = Object.assign({}, options);
    this._config = Object.assign({}, config);
    this._name = config.name;
    this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
    this._container = container;
    this.container.addComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('app', function () {
      return _this;
    }, "PUBLIC" /* PUBLIC */));
  }
  _createClass(FirebaseAppImpl, [{
    key: "automaticDataCollectionEnabled",
    get: function get() {
      this.checkDestroyed();
      return this._automaticDataCollectionEnabled;
    },
    set: function set(val) {
      this.checkDestroyed();
      this._automaticDataCollectionEnabled = val;
    }
  }, {
    key: "name",
    get: function get() {
      this.checkDestroyed();
      return this._name;
    }
  }, {
    key: "options",
    get: function get() {
      this.checkDestroyed();
      return this._options;
    }
  }, {
    key: "config",
    get: function get() {
      this.checkDestroyed();
      return this._config;
    }
  }, {
    key: "container",
    get: function get() {
      return this._container;
    }
  }, {
    key: "isDeleted",
    get: function get() {
      return this._isDeleted;
    },
    set: function set(val) {
      this._isDeleted = val;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
  }, {
    key: "checkDestroyed",
    value: function checkDestroyed() {
      if (this.isDeleted) {
        throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */, {
          appName: this._name
        });
      }
    }
  }]);
  return FirebaseAppImpl;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The current SDK version.
 *
 * @public
 */
var SDK_VERSION = version;
function initializeApp(_options) {
  var rawConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = _options;
  if (_typeof(rawConfig) !== 'object') {
    var _name = rawConfig;
    rawConfig = {
      name: _name
    };
  }
  var config = Object.assign({
    name: DEFAULT_ENTRY_NAME,
    automaticDataCollectionEnabled: false
  }, rawConfig);
  var name = config.name;
  if (typeof name !== 'string' || !name) {
    throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */, {
      appName: String(name)
    });
  }
  options || (options = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getDefaultAppConfig)());
  if (!options) {
    throw ERROR_FACTORY.create("no-options" /* NO_OPTIONS */);
  }

  var existingApp = _apps.get(name);
  if (existingApp) {
    // return the existing app if options and config deep equal the ones in the existing app.
    if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(options, existingApp.options) && (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(config, existingApp.config)) {
      return existingApp;
    } else {
      throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */, {
        appName: name
      });
    }
  }
  var container = new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.ComponentContainer(name);
  var _iterator2 = _createForOfIteratorHelper(_components.values()),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var component = _step2.value;
      container.addComponent(component);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var newApp = new FirebaseAppImpl(options, config, container);
  _apps.set(name, newApp);
  return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */
function getApp() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ENTRY_NAME;
  var app = _apps.get(name);
  if (!app && name === DEFAULT_ENTRY_NAME) {
    return initializeApp();
  }
  if (!app) {
    throw ERROR_FACTORY.create("no-app" /* NO_APP */, {
      appName: name
    });
  }
  return app;
}
/**
 * A (read-only) array of all initialized apps.
 * @public
 */
function getApps() {
  return Array.from(_apps.values());
}
/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 *
 * @public
 */
function deleteApp(_x) {
  return _deleteApp.apply(this, arguments);
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */
function _deleteApp() {
  _deleteApp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(app) {
    var name;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            name = app.name;
            if (!_apps.has(name)) {
              _context7.next = 6;
              break;
            }
            _apps["delete"](name);
            _context7.next = 5;
            return Promise.all(app.container.getProviders().map(function (provider) {
              return provider["delete"]();
            }));
          case 5:
            app.isDeleted = true;
          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _deleteApp.apply(this, arguments);
}
function registerVersion(libraryKeyOrName, version, variant) {
  var _a;
  // TODO: We can use this check to whitelist strings when/if we set up
  // a good whitelist system.
  var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
  if (variant) {
    library += "-".concat(variant);
  }
  var libraryMismatch = library.match(/\s|\//);
  var versionMismatch = version.match(/\s|\//);
  if (libraryMismatch || versionMismatch) {
    var warning = ["Unable to register library \"".concat(library, "\" with version \"").concat(version, "\":")];
    if (libraryMismatch) {
      warning.push("library name \"".concat(library, "\" contains illegal characters (whitespace or \"/\")"));
    }
    if (libraryMismatch && versionMismatch) {
      warning.push('and');
    }
    if (versionMismatch) {
      warning.push("version name \"".concat(version, "\" contains illegal characters (whitespace or \"/\")"));
    }
    logger.warn(warning.join(' '));
    return;
  }
  _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component("".concat(library, "-version"), function () {
    return {
      library: library,
      version: version
    };
  }, "VERSION" /* VERSION */));
}
/**
 * Sets log handler for all Firebase SDKs.
 * @param logCallback - An optional custom log handler that executes user code whenever
 * the Firebase SDK makes a logging call.
 *
 * @public
 */
function onLog(logCallback, options) {
  if (logCallback !== null && typeof logCallback !== 'function') {
    throw ERROR_FACTORY.create("invalid-log-argument" /* INVALID_LOG_ARGUMENT */);
  }

  (0,_firebase_logger__WEBPACK_IMPORTED_MODULE_1__.setUserLogHandler)(logCallback, options);
}
/**
 * Sets log level for all Firebase SDKs.
 *
 * All of the log types above the current log level are captured (i.e. if
 * you set the log level to `info`, errors are logged, but `debug` and
 * `verbose` logs are not).
 *
 * @public
 */
function setLogLevel(logLevel) {
  (0,_firebase_logger__WEBPACK_IMPORTED_MODULE_1__.setLogLevel)(logLevel);
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DB_NAME = 'firebase-heartbeat-database';
var DB_VERSION = 1;
var STORE_NAME = 'firebase-heartbeat-store';
var dbPromise = null;
function getDbPromise() {
  if (!dbPromise) {
    dbPromise = (0,idb__WEBPACK_IMPORTED_MODULE_3__.openDB)(DB_NAME, DB_VERSION, {
      upgrade: function upgrade(db, oldVersion) {
        // We don't use 'break' in this switch statement, the fall-through
        // behavior is what we want, because if there are multiple versions between
        // the old version and the current version, we want ALL the migrations
        // that correspond to those versions to run, not only the last one.
        // eslint-disable-next-line default-case
        switch (oldVersion) {
          case 0:
            db.createObjectStore(STORE_NAME);
        }
      }
    })["catch"](function (e) {
      throw ERROR_FACTORY.create("idb-open" /* IDB_OPEN */, {
        originalErrorMessage: e.message
      });
    });
  }
  return dbPromise;
}
function readHeartbeatsFromIndexedDB(_x2) {
  return _readHeartbeatsFromIndexedDB.apply(this, arguments);
}
function _readHeartbeatsFromIndexedDB() {
  _readHeartbeatsFromIndexedDB = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(app) {
    var _a, db, idbGetError;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return getDbPromise();
          case 3:
            db = _context8.sent;
            return _context8.abrupt("return", db.transaction(STORE_NAME).objectStore(STORE_NAME).get(computeKey(app)));
          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](0);
            if (_context8.t0 instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError) {
              logger.warn(_context8.t0.message);
            } else {
              idbGetError = ERROR_FACTORY.create("idb-get" /* IDB_GET */, {
                originalErrorMessage: (_a = _context8.t0) === null || _a === void 0 ? void 0 : _a.message
              });
              logger.warn(idbGetError.message);
            }
          case 10:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 7]]);
  }));
  return _readHeartbeatsFromIndexedDB.apply(this, arguments);
}
function writeHeartbeatsToIndexedDB(_x3, _x4) {
  return _writeHeartbeatsToIndexedDB.apply(this, arguments);
}
function _writeHeartbeatsToIndexedDB() {
  _writeHeartbeatsToIndexedDB = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(app, heartbeatObject) {
    var _a, db, tx, objectStore, idbGetError;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return getDbPromise();
          case 3:
            db = _context9.sent;
            tx = db.transaction(STORE_NAME, 'readwrite');
            objectStore = tx.objectStore(STORE_NAME);
            _context9.next = 8;
            return objectStore.put(heartbeatObject, computeKey(app));
          case 8:
            return _context9.abrupt("return", tx.done);
          case 11:
            _context9.prev = 11;
            _context9.t0 = _context9["catch"](0);
            if (_context9.t0 instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError) {
              logger.warn(_context9.t0.message);
            } else {
              idbGetError = ERROR_FACTORY.create("idb-set" /* IDB_WRITE */, {
                originalErrorMessage: (_a = _context9.t0) === null || _a === void 0 ? void 0 : _a.message
              });
              logger.warn(idbGetError.message);
            }
          case 14:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 11]]);
  }));
  return _writeHeartbeatsToIndexedDB.apply(this, arguments);
}
function computeKey(app) {
  return "".concat(app.name, "!").concat(app.options.appId);
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MAX_HEADER_BYTES = 1024;
// 30 days
var STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1000;
var HeartbeatServiceImpl = /*#__PURE__*/function () {
  function HeartbeatServiceImpl(container) {
    var _this2 = this;
    _classCallCheck(this, HeartbeatServiceImpl);
    this.container = container;
    /**
     * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
     * the header string.
     * Stores one record per date. This will be consolidated into the standard
     * format of one record per user agent string before being sent as a header.
     * Populated from indexedDB when the controller is instantiated and should
     * be kept in sync with indexedDB.
     * Leave public for easier testing.
     */
    this._heartbeatsCache = null;
    var app = this.container.getProvider('app').getImmediate();
    this._storage = new HeartbeatStorageImpl(app);
    this._heartbeatsCachePromise = this._storage.read().then(function (result) {
      _this2._heartbeatsCache = result;
      return result;
    });
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  _createClass(HeartbeatServiceImpl, [{
    key: "triggerHeartbeat",
    value: function () {
      var _triggerHeartbeat = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var platformLogger, agent, date;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                platformLogger = this.container.getProvider('platform-logger').getImmediate(); // This is the "Firebase user agent" string from the platform logger
                // service, not the browser user agent.
                agent = platformLogger.getPlatformInfoString();
                date = getUTCDateString();
                if (!(this._heartbeatsCache === null)) {
                  _context.next = 7;
                  break;
                }
                _context.next = 6;
                return this._heartbeatsCachePromise;
              case 6:
                this._heartbeatsCache = _context.sent;
              case 7:
                if (!(this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some(function (singleDateHeartbeat) {
                  return singleDateHeartbeat.date === date;
                }))) {
                  _context.next = 11;
                  break;
                }
                return _context.abrupt("return");
              case 11:
                // There is no entry for this date. Create one.
                this._heartbeatsCache.heartbeats.push({
                  date: date,
                  agent: agent
                });
              case 12:
                // Remove entries older than 30 days.
                this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(function (singleDateHeartbeat) {
                  var hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
                  var now = Date.now();
                  return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
                });
                return _context.abrupt("return", this._storage.overwrite(this._heartbeatsCache));
              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function triggerHeartbeat() {
        return _triggerHeartbeat.apply(this, arguments);
      }
      return triggerHeartbeat;
    }()
    /**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */
  }, {
    key: "getHeartbeatsHeader",
    value: function () {
      var _getHeartbeatsHeader = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var date, _extractHeartbeatsFor, heartbeatsToSend, unsentEntries, headerString;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this._heartbeatsCache === null)) {
                  _context2.next = 3;
                  break;
                }
                _context2.next = 3;
                return this._heartbeatsCachePromise;
              case 3:
                if (!(this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0)) {
                  _context2.next = 5;
                  break;
                }
                return _context2.abrupt("return", '');
              case 5:
                date = getUTCDateString(); // Extract as many heartbeats from the cache as will fit under the size limit.
                _extractHeartbeatsFor = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats), heartbeatsToSend = _extractHeartbeatsFor.heartbeatsToSend, unsentEntries = _extractHeartbeatsFor.unsentEntries;
                headerString = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.base64urlEncodeWithoutPadding)(JSON.stringify({
                  version: 2,
                  heartbeats: heartbeatsToSend
                })); // Store last sent date to prevent another being logged/sent for the same day.
                this._heartbeatsCache.lastSentHeartbeatDate = date;
                if (!(unsentEntries.length > 0)) {
                  _context2.next = 15;
                  break;
                }
                // Store any unsent entries if they exist.
                this._heartbeatsCache.heartbeats = unsentEntries;
                // This seems more likely than emptying the array (below) to lead to some odd state
                // since the cache isn't empty and this will be called again on the next request,
                // and is probably safest if we await it.
                _context2.next = 13;
                return this._storage.overwrite(this._heartbeatsCache);
              case 13:
                _context2.next = 17;
                break;
              case 15:
                this._heartbeatsCache.heartbeats = [];
                // Do not wait for this, to reduce latency.
                void this._storage.overwrite(this._heartbeatsCache);
              case 17:
                return _context2.abrupt("return", headerString);
              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function getHeartbeatsHeader() {
        return _getHeartbeatsHeader.apply(this, arguments);
      }
      return getHeartbeatsHeader;
    }()
  }]);
  return HeartbeatServiceImpl;
}();
function getUTCDateString() {
  var today = new Date();
  // Returns date format 'YYYY-MM-DD'
  return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache) {
  var maxSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MAX_HEADER_BYTES;
  // Heartbeats grouped by user agent in the standard format to be sent in
  // the header.
  var heartbeatsToSend = [];
  // Single date format heartbeats that are not sent.
  var unsentEntries = heartbeatsCache.slice();
  var _iterator3 = _createForOfIteratorHelper(heartbeatsCache),
    _step3;
  try {
    var _loop = function _loop() {
      var singleDateHeartbeat = _step3.value;
      // Look for an existing entry with the same user agent.
      var heartbeatEntry = heartbeatsToSend.find(function (hb) {
        return hb.agent === singleDateHeartbeat.agent;
      });
      if (!heartbeatEntry) {
        // If no entry for this user agent exists, create one.
        heartbeatsToSend.push({
          agent: singleDateHeartbeat.agent,
          dates: [singleDateHeartbeat.date]
        });
        if (countBytes(heartbeatsToSend) > maxSize) {
          // If the header would exceed max size, remove the added heartbeat
          // entry and stop adding to the header.
          heartbeatsToSend.pop();
          return "break";
        }
      } else {
        heartbeatEntry.dates.push(singleDateHeartbeat.date);
        // If the header would exceed max size, remove the added date
        // and stop adding to the header.
        if (countBytes(heartbeatsToSend) > maxSize) {
          heartbeatEntry.dates.pop();
          return "break";
        }
      }
      // Pop unsent entry from queue. (Skipped if adding the entry exceeded
      // quota and the loop breaks early.)
      unsentEntries = unsentEntries.slice(1);
    };
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _ret = _loop();
      if (_ret === "break") break;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return {
    heartbeatsToSend: heartbeatsToSend,
    unsentEntries: unsentEntries
  };
}
var HeartbeatStorageImpl = /*#__PURE__*/function () {
  function HeartbeatStorageImpl(app) {
    _classCallCheck(this, HeartbeatStorageImpl);
    this.app = app;
    this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  _createClass(HeartbeatStorageImpl, [{
    key: "runIndexedDBEnvironmentCheck",
    value: function () {
      var _runIndexedDBEnvironmentCheck = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.isIndexedDBAvailable)()) {
                  _context3.next = 4;
                  break;
                }
                return _context3.abrupt("return", false);
              case 4:
                return _context3.abrupt("return", (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.validateIndexedDBOpenable)().then(function () {
                  return true;
                })["catch"](function () {
                  return false;
                }));
              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      function runIndexedDBEnvironmentCheck() {
        return _runIndexedDBEnvironmentCheck.apply(this, arguments);
      }
      return runIndexedDBEnvironmentCheck;
    }()
    /**
     * Read all heartbeats.
     */
  }, {
    key: "read",
    value: function () {
      var _read = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var canUseIndexedDB, idbHeartbeatObject;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._canUseIndexedDBPromise;
              case 2:
                canUseIndexedDB = _context4.sent;
                if (canUseIndexedDB) {
                  _context4.next = 7;
                  break;
                }
                return _context4.abrupt("return", {
                  heartbeats: []
                });
              case 7:
                _context4.next = 9;
                return readHeartbeatsFromIndexedDB(this.app);
              case 9:
                idbHeartbeatObject = _context4.sent;
                return _context4.abrupt("return", idbHeartbeatObject || {
                  heartbeats: []
                });
              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function read() {
        return _read.apply(this, arguments);
      }
      return read;
    }() // overwrite the storage with the provided heartbeats
  }, {
    key: "overwrite",
    value: function () {
      var _overwrite = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(heartbeatsObject) {
        var _a, canUseIndexedDB, existingHeartbeatsObject;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._canUseIndexedDBPromise;
              case 2:
                canUseIndexedDB = _context5.sent;
                if (canUseIndexedDB) {
                  _context5.next = 7;
                  break;
                }
                return _context5.abrupt("return");
              case 7:
                _context5.next = 9;
                return this.read();
              case 9:
                existingHeartbeatsObject = _context5.sent;
                return _context5.abrupt("return", writeHeartbeatsToIndexedDB(this.app, {
                  lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                  heartbeats: heartbeatsObject.heartbeats
                }));
              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function overwrite(_x5) {
        return _overwrite.apply(this, arguments);
      }
      return overwrite;
    }() // add heartbeats
  }, {
    key: "add",
    value: function () {
      var _add = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(heartbeatsObject) {
        var _a, canUseIndexedDB, existingHeartbeatsObject;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._canUseIndexedDBPromise;
              case 2:
                canUseIndexedDB = _context6.sent;
                if (canUseIndexedDB) {
                  _context6.next = 7;
                  break;
                }
                return _context6.abrupt("return");
              case 7:
                _context6.next = 9;
                return this.read();
              case 9:
                existingHeartbeatsObject = _context6.sent;
                return _context6.abrupt("return", writeHeartbeatsToIndexedDB(this.app, {
                  lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                  heartbeats: [].concat(_toConsumableArray(existingHeartbeatsObject.heartbeats), _toConsumableArray(heartbeatsObject.heartbeats))
                }));
              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function add(_x6) {
        return _add.apply(this, arguments);
      }
      return add;
    }()
  }]);
  return HeartbeatStorageImpl;
}();
/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */
function countBytes(heartbeatsCache) {
  // base64 has a restricted set of characters, all of which should be 1 byte.
  return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.base64urlEncodeWithoutPadding)(
  // heartbeatsCache wrapper properties
  JSON.stringify({
    version: 2,
    heartbeats: heartbeatsCache
  })).length;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(variant) {
  _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('platform-logger', function (container) {
    return new PlatformLoggerServiceImpl(container);
  }, "PRIVATE" /* PRIVATE */));
  _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('heartbeat', function (container) {
    return new HeartbeatServiceImpl(container);
  }, "PRIVATE" /* PRIVATE */));
  // Register `app` package.
  registerVersion(name$o, version$1, variant);
  // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
  registerVersion(name$o, version$1, 'esm2017');
  // Register platform SDK identifier (no version).
  registerVersion('fire-js', '');
}

/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */
registerCoreComponents('');


/***/ }),
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "ComponentContainer": () => (/* binding */ ComponentContainer),
/* harmony export */   "Provider": () => (/* binding */ Provider)
/* harmony export */ });
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component = /*#__PURE__*/function () {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  function Component(name, instanceFactory, type) {
    _classCallCheck(this, Component);
    this.name = name;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    /**
     * Properties to be added to the service namespace
     */
    this.serviceProps = {};
    this.instantiationMode = "LAZY" /* LAZY */;
    this.onInstanceCreated = null;
  }
  _createClass(Component, [{
    key: "setInstantiationMode",
    value: function setInstantiationMode(mode) {
      this.instantiationMode = mode;
      return this;
    }
  }, {
    key: "setMultipleInstances",
    value: function setMultipleInstances(multipleInstances) {
      this.multipleInstances = multipleInstances;
      return this;
    }
  }, {
    key: "setServiceProps",
    value: function setServiceProps(props) {
      this.serviceProps = props;
      return this;
    }
  }, {
    key: "setInstanceCreatedCallback",
    value: function setInstanceCreatedCallback(callback) {
      this.onInstanceCreated = callback;
      return this;
    }
  }]);
  return Component;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
var Provider = /*#__PURE__*/function () {
  function Provider(name, container) {
    _classCallCheck(this, Provider);
    this.name = name;
    this.container = container;
    this.component = null;
    this.instances = new Map();
    this.instancesDeferred = new Map();
    this.instancesOptions = new Map();
    this.onInitCallbacks = new Map();
  }
  /**
   * @param identifier A provider can provide mulitple instances of a service
   * if this.component.multipleInstances is true.
   */
  _createClass(Provider, [{
    key: "get",
    value: function get(identifier) {
      // if multipleInstances is not supported, use the default name
      var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
      if (!this.instancesDeferred.has(normalizedIdentifier)) {
        var deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_0__.Deferred();
        this.instancesDeferred.set(normalizedIdentifier, deferred);
        if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
          // initialize the service if it can be auto-initialized
          try {
            var instance = this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier
            });
            if (instance) {
              deferred.resolve(instance);
            }
          } catch (e) {
            // when the instance factory throws an exception during get(), it should not cause
            // a fatal error. We just return the unresolved promise in this case.
          }
        }
      }
      return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
  }, {
    key: "getImmediate",
    value: function getImmediate(options) {
      var _a;
      // if multipleInstances is not supported, use the default name
      var normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
      var optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
        try {
          return this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
        } catch (e) {
          if (optional) {
            return null;
          } else {
            throw e;
          }
        }
      } else {
        // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
        if (optional) {
          return null;
        } else {
          throw Error("Service ".concat(this.name, " is not available"));
        }
      }
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      return this.component;
    }
  }, {
    key: "setComponent",
    value: function setComponent(component) {
      if (component.name !== this.name) {
        throw Error("Mismatching Component ".concat(component.name, " for Provider ").concat(this.name, "."));
      }
      if (this.component) {
        throw Error("Component for ".concat(this.name, " has already been provided"));
      }
      this.component = component;
      // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
      if (!this.shouldAutoInitialize()) {
        return;
      }
      // if the service is eager, initialize the default instance
      if (isComponentEager(component)) {
        try {
          this.getOrInitializeService({
            instanceIdentifier: DEFAULT_ENTRY_NAME
          });
        } catch (e) {
          // when the instance factory for an eager Component throws an exception during the eager
          // initialization, it should not cause a fatal error.
          // TODO: Investigate if we need to make it configurable, because some component may want to cause
          // a fatal error in this case?
        }
      }
      // Create service instances for the pending promises and resolve them
      // NOTE: if this.multipleInstances is false, only the default instance will be created
      // and all promises with resolve with it regardless of the identifier.
      var _iterator = _createForOfIteratorHelper(this.instancesDeferred.entries()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            instanceIdentifier = _step$value[0],
            instanceDeferred = _step$value[1];
          var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
          try {
            // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
            var instance = this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier
            });
            instanceDeferred.resolve(instance);
          } catch (e) {
            // when the instance factory throws an exception, it should not cause
            // a fatal error. We just leave the promise unresolved.
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "clearInstance",
    value: function clearInstance() {
      var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ENTRY_NAME;
      this.instancesDeferred["delete"](identifier);
      this.instancesOptions["delete"](identifier);
      this.instances["delete"](identifier);
    }
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var services;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                services = Array.from(this.instances.values());
                _context.next = 3;
                return Promise.all([].concat(_toConsumableArray(services.filter(function (service) {
                  return 'INTERNAL' in service;
                }) // legacy services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map(function (service) {
                  return service.INTERNAL["delete"]();
                })), _toConsumableArray(services.filter(function (service) {
                  return '_delete' in service;
                }) // modularized services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map(function (service) {
                  return service._delete();
                }))));
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function _delete() {
        return _delete2.apply(this, arguments);
      }
      return _delete;
    }()
  }, {
    key: "isComponentSet",
    value: function isComponentSet() {
      return this.component != null;
    }
  }, {
    key: "isInitialized",
    value: function isInitialized() {
      var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ENTRY_NAME;
      return this.instances.has(identifier);
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ENTRY_NAME;
      return this.instancesOptions.get(identifier) || {};
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _opts$options = opts.options,
        options = _opts$options === void 0 ? {} : _opts$options;
      var normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
      if (this.isInitialized(normalizedIdentifier)) {
        throw Error("".concat(this.name, "(").concat(normalizedIdentifier, ") has already been initialized"));
      }
      if (!this.isComponentSet()) {
        throw Error("Component ".concat(this.name, " has not been registered yet"));
      }
      var instance = this.getOrInitializeService({
        instanceIdentifier: normalizedIdentifier,
        options: options
      });
      // resolve any pending promise waiting for the service instance
      var _iterator2 = _createForOfIteratorHelper(this.instancesDeferred.entries()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
            instanceIdentifier = _step2$value[0],
            instanceDeferred = _step2$value[1];
          var normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
          if (normalizedIdentifier === normalizedDeferredIdentifier) {
            instanceDeferred.resolve(instance);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return instance;
    }
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */
  }, {
    key: "onInit",
    value: function onInit(callback, identifier) {
      var _a;
      var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
      var existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
      existingCallbacks.add(callback);
      this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
      var existingInstance = this.instances.get(normalizedIdentifier);
      if (existingInstance) {
        callback(existingInstance, normalizedIdentifier);
      }
      return function () {
        existingCallbacks["delete"](callback);
      };
    }
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */
  }, {
    key: "invokeOnInitCallbacks",
    value: function invokeOnInitCallbacks(instance, identifier) {
      var callbacks = this.onInitCallbacks.get(identifier);
      if (!callbacks) {
        return;
      }
      var _iterator3 = _createForOfIteratorHelper(callbacks),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var callback = _step3.value;
          try {
            callback(instance, identifier);
          } catch (_a) {
            // ignore errors in the onInit callback
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "getOrInitializeService",
    value: function getOrInitializeService(_ref) {
      var instanceIdentifier = _ref.instanceIdentifier,
        _ref$options = _ref.options,
        options = _ref$options === void 0 ? {} : _ref$options;
      var instance = this.instances.get(instanceIdentifier);
      if (!instance && this.component) {
        instance = this.component.instanceFactory(this.container, {
          instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
          options: options
        });
        this.instances.set(instanceIdentifier, instance);
        this.instancesOptions.set(instanceIdentifier, options);
        /**
         * Invoke onInit listeners.
         * Note this.component.onInstanceCreated is different, which is used by the component creator,
         * while onInit listeners are registered by consumers of the provider.
         */
        this.invokeOnInitCallbacks(instance, instanceIdentifier);
        /**
         * Order is important
         * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
         * makes `isInitialized()` return true.
         */
        if (this.component.onInstanceCreated) {
          try {
            this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
          } catch (_a) {
            // ignore errors in the onInstanceCreatedCallback
          }
        }
      }
      return instance || null;
    }
  }, {
    key: "normalizeInstanceIdentifier",
    value: function normalizeInstanceIdentifier() {
      var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ENTRY_NAME;
      if (this.component) {
        return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
      } else {
        return identifier; // assume multiple instances are supported before the component is provided.
      }
    }
  }, {
    key: "shouldAutoInitialize",
    value: function shouldAutoInitialize() {
      return !!this.component && this.component.instantiationMode !== "EXPLICIT" /* EXPLICIT */;
    }
  }]);
  return Provider;
}(); // undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
  return component.instantiationMode === "EAGER" /* EAGER */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
var ComponentContainer = /*#__PURE__*/function () {
  function ComponentContainer(name) {
    _classCallCheck(this, ComponentContainer);
    this.name = name;
    this.providers = new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */
  _createClass(ComponentContainer, [{
    key: "addComponent",
    value: function addComponent(component) {
      var provider = this.getProvider(component.name);
      if (provider.isComponentSet()) {
        throw new Error("Component ".concat(component.name, " has already been registered with ").concat(this.name));
      }
      provider.setComponent(component);
    }
  }, {
    key: "addOrOverwriteComponent",
    value: function addOrOverwriteComponent(component) {
      var provider = this.getProvider(component.name);
      if (provider.isComponentSet()) {
        // delete the existing provider from the container, so we can register the new component
        this.providers["delete"](component.name);
      }
      this.addComponent(component);
    }
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
  }, {
    key: "getProvider",
    value: function getProvider(name) {
      if (this.providers.has(name)) {
        return this.providers.get(name);
      }
      // create a Provider for a service that hasn't registered with Firebase
      var provider = new Provider(name, this);
      this.providers.set(name, provider);
      return provider;
    }
  }, {
    key: "getProviders",
    value: function getProviders() {
      return Array.from(this.providers.values());
    }
  }]);
  return ComponentContainer;
}();


/***/ }),
/* 5 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONSTANTS": () => (/* binding */ CONSTANTS),
/* harmony export */   "Deferred": () => (/* binding */ Deferred),
/* harmony export */   "ErrorFactory": () => (/* binding */ ErrorFactory),
/* harmony export */   "FirebaseError": () => (/* binding */ FirebaseError),
/* harmony export */   "MAX_VALUE_MILLIS": () => (/* binding */ MAX_VALUE_MILLIS),
/* harmony export */   "RANDOM_FACTOR": () => (/* binding */ RANDOM_FACTOR),
/* harmony export */   "Sha1": () => (/* binding */ Sha1),
/* harmony export */   "areCookiesEnabled": () => (/* binding */ areCookiesEnabled),
/* harmony export */   "assert": () => (/* binding */ assert),
/* harmony export */   "assertionError": () => (/* binding */ assertionError),
/* harmony export */   "async": () => (/* binding */ async),
/* harmony export */   "base64": () => (/* binding */ base64),
/* harmony export */   "base64Decode": () => (/* binding */ base64Decode),
/* harmony export */   "base64Encode": () => (/* binding */ base64Encode),
/* harmony export */   "base64urlEncodeWithoutPadding": () => (/* binding */ base64urlEncodeWithoutPadding),
/* harmony export */   "calculateBackoffMillis": () => (/* binding */ calculateBackoffMillis),
/* harmony export */   "contains": () => (/* binding */ contains),
/* harmony export */   "createMockUserToken": () => (/* binding */ createMockUserToken),
/* harmony export */   "createSubscribe": () => (/* binding */ createSubscribe),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "deepCopy": () => (/* binding */ deepCopy),
/* harmony export */   "deepEqual": () => (/* binding */ deepEqual),
/* harmony export */   "deepExtend": () => (/* binding */ deepExtend),
/* harmony export */   "errorPrefix": () => (/* binding */ errorPrefix),
/* harmony export */   "extractQuerystring": () => (/* binding */ extractQuerystring),
/* harmony export */   "getDefaultAppConfig": () => (/* binding */ getDefaultAppConfig),
/* harmony export */   "getDefaultEmulatorHost": () => (/* binding */ getDefaultEmulatorHost),
/* harmony export */   "getDefaultEmulatorHostnameAndPort": () => (/* binding */ getDefaultEmulatorHostnameAndPort),
/* harmony export */   "getExperimentalSetting": () => (/* binding */ getExperimentalSetting),
/* harmony export */   "getGlobal": () => (/* binding */ getGlobal),
/* harmony export */   "getModularInstance": () => (/* binding */ getModularInstance),
/* harmony export */   "getUA": () => (/* binding */ getUA),
/* harmony export */   "isAdmin": () => (/* binding */ isAdmin),
/* harmony export */   "isBrowser": () => (/* binding */ isBrowser),
/* harmony export */   "isBrowserExtension": () => (/* binding */ isBrowserExtension),
/* harmony export */   "isElectron": () => (/* binding */ isElectron),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isIE": () => (/* binding */ isIE),
/* harmony export */   "isIndexedDBAvailable": () => (/* binding */ isIndexedDBAvailable),
/* harmony export */   "isMobileCordova": () => (/* binding */ isMobileCordova),
/* harmony export */   "isNode": () => (/* binding */ isNode),
/* harmony export */   "isNodeSdk": () => (/* binding */ isNodeSdk),
/* harmony export */   "isReactNative": () => (/* binding */ isReactNative),
/* harmony export */   "isSafari": () => (/* binding */ isSafari),
/* harmony export */   "isUWP": () => (/* binding */ isUWP),
/* harmony export */   "isValidFormat": () => (/* binding */ isValidFormat),
/* harmony export */   "isValidTimestamp": () => (/* binding */ isValidTimestamp),
/* harmony export */   "issuedAtTime": () => (/* binding */ issuedAtTime),
/* harmony export */   "jsonEval": () => (/* binding */ jsonEval),
/* harmony export */   "map": () => (/* binding */ map),
/* harmony export */   "ordinal": () => (/* binding */ ordinal),
/* harmony export */   "promiseWithTimeout": () => (/* binding */ promiseWithTimeout),
/* harmony export */   "querystring": () => (/* binding */ querystring),
/* harmony export */   "querystringDecode": () => (/* binding */ querystringDecode),
/* harmony export */   "safeGet": () => (/* binding */ safeGet),
/* harmony export */   "stringLength": () => (/* binding */ stringLength),
/* harmony export */   "stringToByteArray": () => (/* binding */ stringToByteArray),
/* harmony export */   "stringify": () => (/* binding */ stringify),
/* harmony export */   "uuidv4": () => (/* binding */ uuidv4),
/* harmony export */   "validateArgCount": () => (/* binding */ validateArgCount),
/* harmony export */   "validateCallback": () => (/* binding */ validateCallback),
/* harmony export */   "validateContextObject": () => (/* binding */ validateContextObject),
/* harmony export */   "validateIndexedDBOpenable": () => (/* binding */ validateIndexedDBOpenable),
/* harmony export */   "validateNamespace": () => (/* binding */ validateNamespace)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = {
  /**
   * @define {boolean} Whether this is the client Node.js SDK.
   */
  NODE_CLIENT: false,
  /**
   * @define {boolean} Whether this is the Admin Node.js SDK.
   */
  NODE_ADMIN: false,
  /**
   * Firebase SDK Version
   */
  SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
var assert = function assert(assertion, message) {
  if (!assertion) {
    throw assertionError(message);
  }
};
/**
 * Returns an Error object suitable for throwing.
 */
var assertionError = function assertionError(message) {
  return new Error('Firebase Database (' + CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var stringToByteArray$1 = function stringToByteArray$1(str) {
  // TODO(user): Use native implementations if/when available
  var out = [];
  var p = 0;
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if ((c & 0xfc00) === 0xd800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
      // Surrogate Pair
      c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }
  return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
var byteArrayToString = function byteArrayToString(bytes) {
  // TODO(user): Use native implementations if/when available
  var out = [];
  var pos = 0,
    c = 0;
  while (pos < bytes.length) {
    var c1 = bytes[pos++];
    if (c1 < 128) {
      out[c++] = String.fromCharCode(c1);
    } else if (c1 > 191 && c1 < 224) {
      var c2 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
    } else if (c1 > 239 && c1 < 365) {
      // Surrogate Pair
      var _c = bytes[pos++];
      var c3 = bytes[pos++];
      var c4 = bytes[pos++];
      var u = ((c1 & 7) << 18 | (_c & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
      out[c++] = String.fromCharCode(0xd800 + (u >> 10));
      out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
    } else {
      var _c2 = bytes[pos++];
      var _c3 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 15) << 12 | (_c2 & 63) << 6 | _c3 & 63);
    }
  }
  return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
var base64 = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,
  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,
  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,
  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,
  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + '+/=';
  },
  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + '-_.';
  },
  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob === 'function',
  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray: function encodeByteArray(input, webSafe) {
    if (!Array.isArray(input)) {
      throw Error('encodeByteArray takes an array as a parameter');
    }
    this.init_();
    var byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
    var output = [];
    for (var i = 0; i < input.length; i += 3) {
      var byte1 = input[i];
      var haveByte2 = i + 1 < input.length;
      var byte2 = haveByte2 ? input[i + 1] : 0;
      var haveByte3 = i + 2 < input.length;
      var byte3 = haveByte3 ? input[i + 2] : 0;
      var outByte1 = byte1 >> 2;
      var outByte2 = (byte1 & 0x03) << 4 | byte2 >> 4;
      var outByte3 = (byte2 & 0x0f) << 2 | byte3 >> 6;
      var outByte4 = byte3 & 0x3f;
      if (!haveByte3) {
        outByte4 = 64;
        if (!haveByte2) {
          outByte3 = 64;
        }
      }
      output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
    }
    return output.join('');
  },
  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString: function encodeString(input, webSafe) {
    // Shortcut for Mozilla browsers that implement
    // a native base64 encoder in the form of "btoa/atob"
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return btoa(input);
    }
    return this.encodeByteArray(stringToByteArray$1(input), webSafe);
  },
  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString: function decodeString(input, webSafe) {
    // Shortcut for Mozilla browsers that implement
    // a native base64 encoder in the form of "btoa/atob"
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return atob(input);
    }
    return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
  },
  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray: function decodeStringToByteArray(input, webSafe) {
    this.init_();
    var charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
    var output = [];
    for (var i = 0; i < input.length;) {
      var byte1 = charToByteMap[input.charAt(i++)];
      var haveByte2 = i < input.length;
      var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
      ++i;
      var haveByte3 = i < input.length;
      var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      var haveByte4 = i < input.length;
      var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
        throw Error();
      }
      var outByte1 = byte1 << 2 | byte2 >> 4;
      output.push(outByte1);
      if (byte3 !== 64) {
        var outByte2 = byte2 << 4 & 0xf0 | byte3 >> 2;
        output.push(outByte2);
        if (byte4 !== 64) {
          var outByte3 = byte3 << 6 & 0xc0 | byte4;
          output.push(outByte3);
        }
      }
    }
    return output;
  },
  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_: function init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {};
      this.charToByteMap_ = {};
      this.byteToCharMapWebSafe_ = {};
      this.charToByteMapWebSafe_ = {};
      // We want quick mappings back and forth, so we precompute two maps.
      for (var i = 0; i < this.ENCODED_VALS.length; i++) {
        this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
        this.charToByteMap_[this.byteToCharMap_[i]] = i;
        this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
        // Be forgiving when decoding and correctly decode both encodings.
        if (i >= this.ENCODED_VALS_BASE.length) {
          this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
          this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
        }
      }
    }
  }
};
/**
 * URL-safe base64 encoding
 */
var base64Encode = function base64Encode(str) {
  var utf8Bytes = stringToByteArray$1(str);
  return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */
var base64urlEncodeWithoutPadding = function base64urlEncodeWithoutPadding(str) {
  // Use base64url encoding and remove padding in the end (dot characters).
  return base64Encode(str).replace(/\./g, '');
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
var base64Decode = function base64Decode(str) {
  try {
    return base64.decodeString(str, true);
  } catch (e) {
    console.error('base64Decode failed: ', e);
  }
  return null;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
  return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */
function deepExtend(target, source) {
  if (!(source instanceof Object)) {
    return source;
  }
  switch (source.constructor) {
    case Date:
      // Treat Dates like scalars; if the target date object had any child
      // properties - they will be lost!
      var dateValue = source;
      return new Date(dateValue.getTime());
    case Object:
      if (target === undefined) {
        target = {};
      }
      break;
    case Array:
      // Always copy the array source and overwrite the target.
      target = [];
      break;
    default:
      // Not a plain Object - treat it as a scalar.
      return source;
  }
  for (var prop in source) {
    // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
    if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
      continue;
    }
    target[prop] = deepExtend(target[prop], source[prop]);
  }
  return target;
}
function isValidKey(key) {
  return key !== '__proto__';
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
  if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') {
    return navigator['userAgent'];
  } else {
    return '';
  }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
  return typeof window !== 'undefined' &&
  // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
  try {
    return Object.prototype.toString.call(global.process) === '[object process]';
  } catch (e) {
    return false;
  }
}
/**
 * Detect Browser Environment
 */
function isBrowser() {
  return (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object' && self.self === self;
}
function isBrowserExtension() {
  var runtime = (typeof chrome === "undefined" ? "undefined" : _typeof(chrome)) === 'object' ? chrome.runtime : (typeof browser === "undefined" ? "undefined" : _typeof(browser)) === 'object' ? browser.runtime : undefined;
  return _typeof(runtime) === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
  return (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === 'object' && navigator['product'] === 'ReactNative';
}
/** Detects Electron apps. */
function isElectron() {
  return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */
function isIE() {
  var ua = getUA();
  return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */
function isUWP() {
  return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
  return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */
function isSafari() {
  return !isNode() && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */
function isIndexedDBAvailable() {
  return (typeof indexedDB === "undefined" ? "undefined" : _typeof(indexedDB)) === 'object';
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */
function validateIndexedDBOpenable() {
  return new Promise(function (resolve, reject) {
    try {
      var preExist = true;
      var DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
      var request = self.indexedDB.open(DB_CHECK_NAME);
      request.onsuccess = function () {
        request.result.close();
        // delete database only when it doesn't pre-exist
        if (!preExist) {
          self.indexedDB.deleteDatabase(DB_CHECK_NAME);
        }
        resolve(true);
      };
      request.onupgradeneeded = function () {
        preExist = false;
      };
      request.onerror = function () {
        var _a;
        reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
      };
    } catch (error) {
      reject(error);
    }
  });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */
function areCookiesEnabled() {
  if (typeof navigator === 'undefined' || !navigator.cookieEnabled) {
    return false;
  }
  return true;
}
/**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 */
function getGlobal() {
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw new Error('Unable to locate global object.');
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var getDefaultsFromGlobal = function getDefaultsFromGlobal() {
  return getGlobal().__FIREBASE_DEFAULTS__;
};
/**
 * Attempt to read defaults from a JSON string provided to
 * process.env.__FIREBASE_DEFAULTS__ or a JSON file whose path is in
 * process.env.__FIREBASE_DEFAULTS_PATH__
 */
var getDefaultsFromEnvVariable = function getDefaultsFromEnvVariable() {
  if (typeof process === 'undefined' || typeof process.env === 'undefined') {
    return;
  }
  var defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;
  if (defaultsJsonString) {
    return JSON.parse(defaultsJsonString);
  }
};
var getDefaultsFromCookie = function getDefaultsFromCookie() {
  if (typeof document === 'undefined') {
    return;
  }
  var match;
  try {
    match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch (e) {
    // Some environments such as Angular Universal SSR have a
    // `document` object but error on accessing `document.cookie`.
    return;
  }
  var decoded = match && base64Decode(match[1]);
  return decoded && JSON.parse(decoded);
};
/**
 * Get the __FIREBASE_DEFAULTS__ object. It checks in order:
 * (1) if such an object exists as a property of `globalThis`
 * (2) if such an object was provided on a shell environment variable
 * (3) if such an object exists in a cookie
 */
var getDefaults = function getDefaults() {
  try {
    return getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie();
  } catch (e) {
    /**
     * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
     * to any environment case we have not accounted for. Log to
     * info instead of swallowing so we can find these unknown cases
     * and add paths for them if needed.
     */
    console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e));
    return;
  }
};
/**
 * Returns emulator host stored in the __FIREBASE_DEFAULTS__ object
 * for the given product.
 * @returns a URL host formatted like `127.0.0.1:9999` or `[::1]:4000` if available
 * @public
 */
var getDefaultEmulatorHost = function getDefaultEmulatorHost(productName) {
  var _a, _b;
  return (_b = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.emulatorHosts) === null || _b === void 0 ? void 0 : _b[productName];
};
/**
 * Returns emulator hostname and port stored in the __FIREBASE_DEFAULTS__ object
 * for the given product.
 * @returns a pair of hostname and port like `["::1", 4000]` if available
 * @public
 */
var getDefaultEmulatorHostnameAndPort = function getDefaultEmulatorHostnameAndPort(productName) {
  var host = getDefaultEmulatorHost(productName);
  if (!host) {
    return undefined;
  }
  var separatorIndex = host.lastIndexOf(':'); // Finding the last since IPv6 addr also has colons.
  if (separatorIndex <= 0 || separatorIndex + 1 === host.length) {
    throw new Error("Invalid host ".concat(host, " with no separate hostname and port!"));
  }
  // eslint-disable-next-line no-restricted-globals
  var port = parseInt(host.substring(separatorIndex + 1), 10);
  if (host[0] === '[') {
    // Bracket-quoted `[ipv6addr]:port` => return "ipv6addr" (without brackets).
    return [host.substring(1, separatorIndex - 1), port];
  } else {
    return [host.substring(0, separatorIndex), port];
  }
};
/**
 * Returns Firebase app config stored in the __FIREBASE_DEFAULTS__ object.
 * @public
 */
var getDefaultAppConfig = function getDefaultAppConfig() {
  var _a;
  return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.config;
};
/**
 * Returns an experimental setting on the __FIREBASE_DEFAULTS__ object (properties
 * prefixed by "_")
 * @public
 */
var getExperimentalSetting = function getExperimentalSetting(name) {
  var _a;
  return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a["_".concat(name)];
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = /*#__PURE__*/function () {
  function Deferred() {
    var _this = this;
    _classCallCheck(this, Deferred);
    this.reject = function () {};
    this.resolve = function () {};
    this.promise = new Promise(function (resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
  }
  /**
   * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */
  _createClass(Deferred, [{
    key: "wrapCallback",
    value: function wrapCallback(callback) {
      var _this2 = this;
      return function (error, value) {
        if (error) {
          _this2.reject(error);
        } else {
          _this2.resolve(value);
        }
        if (typeof callback === 'function') {
          // Attaching noop handler just in case developer wasn't expecting
          // promises
          _this2.promise["catch"](function () {});
          // Some of our callbacks don't expect a value and our own tests
          // assert that the parameter length is 1
          if (callback.length === 1) {
            callback(error);
          } else {
            callback(error, value);
          }
        }
      };
    }
  }]);
  return Deferred;
}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createMockUserToken(token, projectId) {
  if (token.uid) {
    throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
  }
  // Unsecured JWTs use "none" as the algorithm.
  var header = {
    alg: 'none',
    type: 'JWT'
  };
  var project = projectId || 'demo-project';
  var iat = token.iat || 0;
  var sub = token.sub || token.user_id;
  if (!sub) {
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  }
  var payload = Object.assign({
    // Set all required fields to decent defaults
    iss: "https://securetoken.google.com/".concat(project),
    aud: project,
    iat: iat,
    exp: iat + 3600,
    auth_time: iat,
    sub: sub,
    user_id: sub,
    firebase: {
      sign_in_provider: 'custom',
      identities: {}
    }
  }, token);
  // Unsecured JWTs use the empty string as a signature.
  var signature = '';
  return [base64urlEncodeWithoutPadding(JSON.stringify(header)), base64urlEncodeWithoutPadding(JSON.stringify(payload)), signature].join('.');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Standardized Firebase Error.
 *
 * Usage:
 *
 *   // Typescript string literals for type-safe codes
 *   type Err =
 *     'unknown' |
 *     'object-not-found'
 *     ;
 *
 *   // Closure enum for type-safe error codes
 *   // at-enum {string}
 *   var Err = {
 *     UNKNOWN: 'unknown',
 *     OBJECT_NOT_FOUND: 'object-not-found',
 *   }
 *
 *   let errors: Map<Err, string> = {
 *     'generic-error': "Unknown error",
 *     'file-not-found': "Could not find file: {$file}",
 *   };
 *
 *   // Type-safe function - must pass a valid error code as param.
 *   let error = new ErrorFactory<Err>('service', 'Service', errors);
 *
 *   ...
 *   throw error.create(Err.GENERIC);
 *   ...
 *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
 *   ...
 *   // Service: Could not file file: foo.txt (service/file-not-found).
 *
 *   catch (e) {
 *     assert(e.message === "Could not find file: foo.txt.");
 *     if ((e as FirebaseError)?.code === 'service/file-not-found') {
 *       console.log("Could not read file: " + e['file']);
 *     }
 *   }
 */
var ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
var FirebaseError = /*#__PURE__*/function (_Error) {
  _inherits(FirebaseError, _Error);
  var _super = _createSuper(FirebaseError);
  function FirebaseError( /** The error code for this error. */
  code, message, /** Custom data for this error. */
  customData) {
    var _this3;
    _classCallCheck(this, FirebaseError);
    _this3 = _super.call(this, message);
    _this3.code = code;
    _this3.customData = customData;
    /** The custom name for all FirebaseErrors. */
    _this3.name = ERROR_NAME;
    // Fix For ES5
    // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(_assertThisInitialized(_this3), FirebaseError.prototype);
    // Maintains proper stack trace for where our error was thrown.
    // Only available on V8.
    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this3), ErrorFactory.prototype.create);
    }
    return _this3;
  }
  return _createClass(FirebaseError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
var ErrorFactory = /*#__PURE__*/function () {
  function ErrorFactory(service, serviceName, errors) {
    _classCallCheck(this, ErrorFactory);
    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }
  _createClass(ErrorFactory, [{
    key: "create",
    value: function create(code) {
      var customData = (arguments.length <= 1 ? undefined : arguments[1]) || {};
      var fullCode = "".concat(this.service, "/").concat(code);
      var template = this.errors[code];
      var message = template ? replaceTemplate(template, customData) : 'Error';
      // Service Name: Error message (service/code).
      var fullMessage = "".concat(this.serviceName, ": ").concat(message, " (").concat(fullCode, ").");
      var error = new FirebaseError(fullCode, fullMessage, customData);
      return error;
    }
  }]);
  return ErrorFactory;
}();
function replaceTemplate(template, data) {
  return template.replace(PATTERN, function (_, key) {
    var value = data[key];
    return value != null ? String(value) : "<".concat(key, "?>");
  });
}
var PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
  return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
  return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var decode = function decode(token) {
  var header = {},
    claims = {},
    data = {},
    signature = '';
  try {
    var parts = token.split('.');
    header = jsonEval(base64Decode(parts[0]) || '');
    claims = jsonEval(base64Decode(parts[1]) || '');
    signature = parts[2];
    data = claims['d'] || {};
    delete claims['d'];
  } catch (e) {}
  return {
    header: header,
    claims: claims,
    data: data,
    signature: signature
  };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidTimestamp = function isValidTimestamp(token) {
  var claims = decode(token).claims;
  var now = Math.floor(new Date().getTime() / 1000);
  var validSince = 0,
    validUntil = 0;
  if (_typeof(claims) === 'object') {
    if (claims.hasOwnProperty('nbf')) {
      validSince = claims['nbf'];
    } else if (claims.hasOwnProperty('iat')) {
      validSince = claims['iat'];
    }
    if (claims.hasOwnProperty('exp')) {
      validUntil = claims['exp'];
    } else {
      // token will expire after 24h by default
      validUntil = validSince + 86400;
    }
  }
  return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var issuedAtTime = function issuedAtTime(token) {
  var claims = decode(token).claims;
  if (_typeof(claims) === 'object' && claims.hasOwnProperty('iat')) {
    return claims['iat'];
  }
  return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidFormat = function isValidFormat(token) {
  var decoded = decode(token),
    claims = decoded.claims;
  return !!claims && _typeof(claims) === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isAdmin = function isAdmin(token) {
  var claims = decode(token).claims;
  return _typeof(claims) === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    return obj[key];
  } else {
    return undefined;
  }
}
function isEmpty(obj) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}
function map(obj, fn, contextObj) {
  var res = {};
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res[key] = fn.call(contextObj, obj[key], key, obj);
    }
  }
  return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  for (var _i = 0, _aKeys = aKeys; _i < _aKeys.length; _i++) {
    var k = _aKeys[_i];
    if (!bKeys.includes(k)) {
      return false;
    }
    var aProp = a[k];
    var bProp = b[k];
    if (isObject(aProp) && isObject(bProp)) {
      if (!deepEqual(aProp, bProp)) {
        return false;
      }
    } else if (aProp !== bProp) {
      return false;
    }
  }
  for (var _i2 = 0, _bKeys = bKeys; _i2 < _bKeys.length; _i2++) {
    var _k = _bKeys[_i2];
    if (!aKeys.includes(_k)) {
      return false;
    }
  }
  return true;
}
function isObject(thing) {
  return thing !== null && _typeof(thing) === 'object';
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Rejects if the given promise doesn't resolve in timeInMS milliseconds.
 * @internal
 */
function promiseWithTimeout(promise) {
  var timeInMS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  var deferredPromise = new Deferred();
  setTimeout(function () {
    return deferredPromise.reject('timeout!');
  }, timeInMS);
  promise.then(deferredPromise.resolve, deferredPromise.reject);
  return deferredPromise.promise;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
  var params = [];
  var _loop = function _loop() {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    if (Array.isArray(value)) {
      value.forEach(function (arrayVal) {
        params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
      });
    } else {
      params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }
  };
  for (var _i3 = 0, _Object$entries = Object.entries(querystringParams); _i3 < _Object$entries.length; _i3++) {
    _loop();
  }
  return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
  var obj = {};
  var tokens = querystring.replace(/^\?/, '').split('&');
  tokens.forEach(function (token) {
    if (token) {
      var _token$split = token.split('='),
        _token$split2 = _slicedToArray(_token$split, 2),
        key = _token$split2[0],
        value = _token$split2[1];
      obj[decodeURIComponent(key)] = decodeURIComponent(value);
    }
  });
  return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */
function extractQuerystring(url) {
  var queryStart = url.indexOf('?');
  if (!queryStart) {
    return '';
  }
  var fragmentStart = url.indexOf('#', queryStart);
  return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
var Sha1 = /*#__PURE__*/function () {
  function Sha1() {
    _classCallCheck(this, Sha1);
    /**
     * Holds the previous values of accumulated variables a-e in the compress_
     * function.
     * @private
     */
    this.chain_ = [];
    /**
     * A buffer holding the partially computed hash result.
     * @private
     */
    this.buf_ = [];
    /**
     * An array of 80 bytes, each a part of the message to be hashed.  Referred to
     * as the message schedule in the docs.
     * @private
     */
    this.W_ = [];
    /**
     * Contains data needed to pad messages less than 64 bytes.
     * @private
     */
    this.pad_ = [];
    /**
     * @private {number}
     */
    this.inbuf_ = 0;
    /**
     * @private {number}
     */
    this.total_ = 0;
    this.blockSize = 512 / 8;
    this.pad_[0] = 128;
    for (var i = 1; i < this.blockSize; ++i) {
      this.pad_[i] = 0;
    }
    this.reset();
  }
  _createClass(Sha1, [{
    key: "reset",
    value: function reset() {
      this.chain_[0] = 0x67452301;
      this.chain_[1] = 0xefcdab89;
      this.chain_[2] = 0x98badcfe;
      this.chain_[3] = 0x10325476;
      this.chain_[4] = 0xc3d2e1f0;
      this.inbuf_ = 0;
      this.total_ = 0;
    }
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
  }, {
    key: "compress_",
    value: function compress_(buf, offset) {
      if (!offset) {
        offset = 0;
      }
      var W = this.W_;
      // get 16 big endian words
      if (typeof buf === 'string') {
        for (var i = 0; i < 16; i++) {
          // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
          // have a bug that turns the post-increment ++ operator into pre-increment
          // during JIT compilation.  We have code that depends heavily on SHA-1 for
          // correctness and which is affected by this bug, so I've removed all uses
          // of post-increment ++ in which the result value is used.  We can revert
          // this change once the Safari bug
          // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
          // most clients have been updated.
          W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
          offset += 4;
        }
      } else {
        for (var _i4 = 0; _i4 < 16; _i4++) {
          W[_i4] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
          offset += 4;
        }
      }
      // expand to 80 words
      for (var _i5 = 16; _i5 < 80; _i5++) {
        var t = W[_i5 - 3] ^ W[_i5 - 8] ^ W[_i5 - 14] ^ W[_i5 - 16];
        W[_i5] = (t << 1 | t >>> 31) & 0xffffffff;
      }
      var a = this.chain_[0];
      var b = this.chain_[1];
      var c = this.chain_[2];
      var d = this.chain_[3];
      var e = this.chain_[4];
      var f, k;
      // TODO(user): Try to unroll this loop to speed up the computation.
      for (var _i6 = 0; _i6 < 80; _i6++) {
        if (_i6 < 40) {
          if (_i6 < 20) {
            f = d ^ b & (c ^ d);
            k = 0x5a827999;
          } else {
            f = b ^ c ^ d;
            k = 0x6ed9eba1;
          }
        } else {
          if (_i6 < 60) {
            f = b & c | d & (b | c);
            k = 0x8f1bbcdc;
          } else {
            f = b ^ c ^ d;
            k = 0xca62c1d6;
          }
        }
        var _t = (a << 5 | a >>> 27) + f + e + k + W[_i6] & 0xffffffff;
        e = d;
        d = c;
        c = (b << 30 | b >>> 2) & 0xffffffff;
        b = a;
        a = _t;
      }
      this.chain_[0] = this.chain_[0] + a & 0xffffffff;
      this.chain_[1] = this.chain_[1] + b & 0xffffffff;
      this.chain_[2] = this.chain_[2] + c & 0xffffffff;
      this.chain_[3] = this.chain_[3] + d & 0xffffffff;
      this.chain_[4] = this.chain_[4] + e & 0xffffffff;
    }
  }, {
    key: "update",
    value: function update(bytes, length) {
      // TODO(johnlenz): tighten the function signature and remove this check
      if (bytes == null) {
        return;
      }
      if (length === undefined) {
        length = bytes.length;
      }
      var lengthMinusBlock = length - this.blockSize;
      var n = 0;
      // Using local instead of member variables gives ~5% speedup on Firefox 16.
      var buf = this.buf_;
      var inbuf = this.inbuf_;
      // The outer while loop should execute at most twice.
      while (n < length) {
        // When we have no data in the block to top up, we can directly process the
        // input buffer (assuming it contains sufficient data). This gives ~25%
        // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
        // the data is provided in large chunks (or in multiples of 64 bytes).
        if (inbuf === 0) {
          while (n <= lengthMinusBlock) {
            this.compress_(bytes, n);
            n += this.blockSize;
          }
        }
        if (typeof bytes === 'string') {
          while (n < length) {
            buf[inbuf] = bytes.charCodeAt(n);
            ++inbuf;
            ++n;
            if (inbuf === this.blockSize) {
              this.compress_(buf);
              inbuf = 0;
              // Jump to the outer loop so we use the full-block optimization.
              break;
            }
          }
        } else {
          while (n < length) {
            buf[inbuf] = bytes[n];
            ++inbuf;
            ++n;
            if (inbuf === this.blockSize) {
              this.compress_(buf);
              inbuf = 0;
              // Jump to the outer loop so we use the full-block optimization.
              break;
            }
          }
        }
      }
      this.inbuf_ = inbuf;
      this.total_ += length;
    }
    /** @override */
  }, {
    key: "digest",
    value: function digest() {
      var digest = [];
      var totalBits = this.total_ * 8;
      // Add pad 0x80 0x00*.
      if (this.inbuf_ < 56) {
        this.update(this.pad_, 56 - this.inbuf_);
      } else {
        this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
      }
      // Add # bits.
      for (var i = this.blockSize - 1; i >= 56; i--) {
        this.buf_[i] = totalBits & 255;
        totalBits /= 256; // Don't use bit-shifting here!
      }

      this.compress_(this.buf_);
      var n = 0;
      for (var _i7 = 0; _i7 < 5; _i7++) {
        for (var j = 24; j >= 0; j -= 8) {
          digest[n] = this.chain_[_i7] >> j & 255;
          ++n;
        }
      }
      return digest;
    }
  }]);
  return Sha1;
}();
/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
  var proxy = new ObserverProxy(executor, onNoObservers);
  return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
var ObserverProxy = /*#__PURE__*/function () {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  function ObserverProxy(executor, onNoObservers) {
    var _this4 = this;
    _classCallCheck(this, ObserverProxy);
    this.observers = [];
    this.unsubscribes = [];
    this.observerCount = 0;
    // Micro-task scheduling by calling task.then().
    this.task = Promise.resolve();
    this.finalized = false;
    this.onNoObservers = onNoObservers;
    // Call the executor asynchronously so subscribers that are called
    // synchronously after the creation of the subscribe function
    // can still receive the very first value generated in the executor.
    this.task.then(function () {
      executor(_this4);
    })["catch"](function (e) {
      _this4.error(e);
    });
  }
  _createClass(ObserverProxy, [{
    key: "next",
    value: function next(value) {
      this.forEachObserver(function (observer) {
        observer.next(value);
      });
    }
  }, {
    key: "error",
    value: function error(_error) {
      this.forEachObserver(function (observer) {
        observer.error(_error);
      });
      this.close(_error);
    }
  }, {
    key: "complete",
    value: function complete() {
      this.forEachObserver(function (observer) {
        observer.complete();
      });
      this.close();
    }
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
  }, {
    key: "subscribe",
    value: function subscribe(nextOrObserver, error, complete) {
      var _this5 = this;
      var observer;
      if (nextOrObserver === undefined && error === undefined && complete === undefined) {
        throw new Error('Missing Observer.');
      }
      // Assemble an Observer object when passed as callback functions.
      if (implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])) {
        observer = nextOrObserver;
      } else {
        observer = {
          next: nextOrObserver,
          error: error,
          complete: complete
        };
      }
      if (observer.next === undefined) {
        observer.next = noop;
      }
      if (observer.error === undefined) {
        observer.error = noop;
      }
      if (observer.complete === undefined) {
        observer.complete = noop;
      }
      var unsub = this.unsubscribeOne.bind(this, this.observers.length);
      // Attempt to subscribe to a terminated Observable - we
      // just respond to the Observer with the final error or complete
      // event.
      if (this.finalized) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
          try {
            if (_this5.finalError) {
              observer.error(_this5.finalError);
            } else {
              observer.complete();
            }
          } catch (e) {
            // nothing
          }
          return;
        });
      }
      this.observers.push(observer);
      return unsub;
    }
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
  }, {
    key: "unsubscribeOne",
    value: function unsubscribeOne(i) {
      if (this.observers === undefined || this.observers[i] === undefined) {
        return;
      }
      delete this.observers[i];
      this.observerCount -= 1;
      if (this.observerCount === 0 && this.onNoObservers !== undefined) {
        this.onNoObservers(this);
      }
    }
  }, {
    key: "forEachObserver",
    value: function forEachObserver(fn) {
      if (this.finalized) {
        // Already closed by previous event....just eat the additional values.
        return;
      }
      // Since sendOne calls asynchronously - there is no chance that
      // this.observers will become undefined.
      for (var i = 0; i < this.observers.length; i++) {
        this.sendOne(i, fn);
      }
    }
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
  }, {
    key: "sendOne",
    value: function sendOne(i, fn) {
      var _this6 = this;
      // Execute the callback asynchronously
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.task.then(function () {
        if (_this6.observers !== undefined && _this6.observers[i] !== undefined) {
          try {
            fn(_this6.observers[i]);
          } catch (e) {
            // Ignore exceptions raised in Observers or missing methods of an
            // Observer.
            // Log error to console. b/31404806
            if (typeof console !== 'undefined' && console.error) {
              console.error(e);
            }
          }
        }
      });
    }
  }, {
    key: "close",
    value: function close(err) {
      var _this7 = this;
      if (this.finalized) {
        return;
      }
      this.finalized = true;
      if (err !== undefined) {
        this.finalError = err;
      }
      // Proxy is no longer needed - garbage collect references
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.task.then(function () {
        _this7.observers = undefined;
        _this7.onNoObservers = undefined;
      });
    }
  }]);
  return ObserverProxy;
}();
/** Turn synchronous function into one called asynchronously. */
// eslint-disable-next-line @typescript-eslint/ban-types
function async(fn, onError) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    Promise.resolve(true).then(function () {
      fn.apply(void 0, args);
    })["catch"](function (error) {
      if (onError) {
        onError(error);
      }
    });
  };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
  if (_typeof(obj) !== 'object' || obj === null) {
    return false;
  }
  var _iterator = _createForOfIteratorHelper(methods),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var method = _step.value;
      if (method in obj && typeof obj[method] === 'function') {
        return true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return false;
}
function noop() {
  // do nothing
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
var validateArgCount = function validateArgCount(fnName, minCount, maxCount, argCount) {
  var argError;
  if (argCount < minCount) {
    argError = 'at least ' + minCount;
  } else if (argCount > maxCount) {
    argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
  }
  if (argError) {
    var error = fnName + ' failed: Was called with ' + argCount + (argCount === 1 ? ' argument.' : ' arguments.') + ' Expects ' + argError + '.';
    throw new Error(error);
  }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argName) {
  return "".concat(fnName, " failed: ").concat(argName, " argument ");
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, namespace, optional) {
  if (optional && !namespace) {
    return;
  }
  if (typeof namespace !== 'string') {
    //TODO: I should do more validation here. We only allow certain chars in namespaces.
    throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
  }
}
function validateCallback(fnName, argumentName,
// eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
  if (optional && !callback) {
    return;
  }
  if (typeof callback !== 'function') {
    throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
  }
}
function validateContextObject(fnName, argumentName, context, optional) {
  if (optional && !context) {
    return;
  }
  if (_typeof(context) !== 'object' || context === null) {
    throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
  }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
var stringToByteArray = function stringToByteArray(str) {
  var out = [];
  var p = 0;
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    // Is this the lead surrogate in a surrogate pair?
    if (c >= 0xd800 && c <= 0xdbff) {
      var high = c - 0xd800; // the high 10 bits.
      i++;
      assert(i < str.length, 'Surrogate pair missing trail surrogate.');
      var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
      c = 0x10000 + (high << 10) + low;
    }
    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if (c < 65536) {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }
  return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
var stringLength = function stringLength(str) {
  var p = 0;
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if (c < 128) {
      p++;
    } else if (c < 2048) {
      p += 2;
    } else if (c >= 0xd800 && c <= 0xdbff) {
      // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
      p += 4;
      i++; // skip trail surrogate.
    } else {
      p += 3;
    }
  }
  return p;
};

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Copied from https://stackoverflow.com/a/2117523
 * Generates a new uuid.
 * @public
 */
var uuidv4 = function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The amount of milliseconds to exponentially increase.
 */
var DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */
var DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */
var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */
var RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */
function calculateBackoffMillis(backoffCount) {
  var intervalMillis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_INTERVAL_MILLIS;
  var backoffFactor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_BACKOFF_FACTOR;
  // Calculates an exponentially increasing value.
  // Deviation: calculates value from count and a constant interval, so we only need to save value
  // and count to restore state.
  var currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
  // A random "fuzz" to avoid waves of retries.
  // Deviation: randomFactor is required.
  var randomWait = Math.round(
  // A fraction of the backoff value to add/subtract.
  // Deviation: changes multiplication order to improve readability.
  RANDOM_FACTOR * currBaseValue * (
  // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
  // if we add or subtract.
  Math.random() - 0.5) * 2);
  // Limits backoff to max to avoid effectively permanent backoff.
  return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provide English ordinal letters after a number
 */
function ordinal(i) {
  if (!Number.isFinite(i)) {
    return "".concat(i);
  }
  return i + indicator(i);
}
function indicator(i) {
  i = Math.abs(i);
  var cent = i % 100;
  if (cent >= 10 && cent <= 20) {
    return 'th';
  }
  var dec = i % 10;
  if (dec === 1) {
    return 'st';
  }
  if (dec === 2) {
    return 'nd';
  }
  if (dec === 3) {
    return 'rd';
  }
  return 'th';
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getModularInstance(service) {
  if (service && service._delegate) {
    return service._delegate;
  } else {
    return service;
  }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Overriding the constant (we should be the only ones doing this)
CONSTANTS.NODE_CLIENT = true;


/***/ }),
/* 6 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogLevel": () => (/* binding */ LogLevel),
/* harmony export */   "Logger": () => (/* binding */ Logger),
/* harmony export */   "setLogLevel": () => (/* binding */ setLogLevel),
/* harmony export */   "setUserLogHandler": () => (/* binding */ setUserLogHandler)
/* harmony export */ });
var _ConsoleMethod;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A container for all of the Logger instances
 */
var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
  LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
  LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
  LogLevel[LogLevel["INFO"] = 2] = "INFO";
  LogLevel[LogLevel["WARN"] = 3] = "WARN";
  LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
  LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
  'debug': LogLevel.DEBUG,
  'verbose': LogLevel.VERBOSE,
  'info': LogLevel.INFO,
  'warn': LogLevel.WARN,
  'error': LogLevel.ERROR,
  'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
var ConsoleMethod = (_ConsoleMethod = {}, _defineProperty(_ConsoleMethod, LogLevel.DEBUG, 'log'), _defineProperty(_ConsoleMethod, LogLevel.VERBOSE, 'log'), _defineProperty(_ConsoleMethod, LogLevel.INFO, 'info'), _defineProperty(_ConsoleMethod, LogLevel.WARN, 'warn'), _defineProperty(_ConsoleMethod, LogLevel.ERROR, 'error'), _ConsoleMethod);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function defaultLogHandler(instance, logType) {
  if (logType < instance.logLevel) {
    return;
  }
  var now = new Date().toISOString();
  var method = ConsoleMethod[logType];
  if (method) {
    var _console;
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    (_console = console)[method].apply(_console, ["[".concat(now, "]  ").concat(instance.name, ":")].concat(args));
  } else {
    throw new Error("Attempted to log a message with an invalid logType (value: ".concat(logType, ")"));
  }
};
var Logger = /*#__PURE__*/function () {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  function Logger(name) {
    _classCallCheck(this, Logger);
    this.name = name;
    /**
     * The log level of the given Logger instance.
     */
    this._logLevel = defaultLogLevel;
    /**
     * The main (internal) log handler for the Logger instance.
     * Can be set to a new function in internal package code but not by user.
     */
    this._logHandler = defaultLogHandler;
    /**
     * The optional, additional, user-defined log handler for the Logger instance.
     */
    this._userLogHandler = null;
    /**
     * Capture the current instance for later use
     */
    instances.push(this);
  }
  _createClass(Logger, [{
    key: "logLevel",
    get: function get() {
      return this._logLevel;
    },
    set: function set(val) {
      if (!(val in LogLevel)) {
        throw new TypeError("Invalid value \"".concat(val, "\" assigned to `logLevel`"));
      }
      this._logLevel = val;
    }
    // Workaround for setter/getter having to be the same type.
  }, {
    key: "setLogLevel",
    value: function setLogLevel(val) {
      this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    }
  }, {
    key: "logHandler",
    get: function get() {
      return this._logHandler;
    },
    set: function set(val) {
      if (typeof val !== 'function') {
        throw new TypeError('Value assigned to `logHandler` must be a function');
      }
      this._logHandler = val;
    }
  }, {
    key: "userLogHandler",
    get: function get() {
      return this._userLogHandler;
    },
    set: function set(val) {
      this._userLogHandler = val;
    }
    /**
     * The functions below are all based on the `console` interface
     */
  }, {
    key: "debug",
    value: function debug() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      this._userLogHandler && this._userLogHandler.apply(this, [this, LogLevel.DEBUG].concat(args));
      this._logHandler.apply(this, [this, LogLevel.DEBUG].concat(args));
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      this._userLogHandler && this._userLogHandler.apply(this, [this, LogLevel.VERBOSE].concat(args));
      this._logHandler.apply(this, [this, LogLevel.VERBOSE].concat(args));
    }
  }, {
    key: "info",
    value: function info() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      this._userLogHandler && this._userLogHandler.apply(this, [this, LogLevel.INFO].concat(args));
      this._logHandler.apply(this, [this, LogLevel.INFO].concat(args));
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      this._userLogHandler && this._userLogHandler.apply(this, [this, LogLevel.WARN].concat(args));
      this._logHandler.apply(this, [this, LogLevel.WARN].concat(args));
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      this._userLogHandler && this._userLogHandler.apply(this, [this, LogLevel.ERROR].concat(args));
      this._logHandler.apply(this, [this, LogLevel.ERROR].concat(args));
    }
  }]);
  return Logger;
}();
function setLogLevel(level) {
  instances.forEach(function (inst) {
    inst.setLogLevel(level);
  });
}
function setUserLogHandler(logCallback, options) {
  var _iterator = _createForOfIteratorHelper(instances),
    _step;
  try {
    var _loop = function _loop() {
      var instance = _step.value;
      var customLogLevel = null;
      if (options && options.level) {
        customLogLevel = levelStringToEnum[options.level];
      }
      if (logCallback === null) {
        instance.userLogHandler = null;
      } else {
        instance.userLogHandler = function (instance, level) {
          for (var _len7 = arguments.length, args = new Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
            args[_key7 - 2] = arguments[_key7];
          }
          var message = args.map(function (arg) {
            if (arg == null) {
              return null;
            } else if (typeof arg === 'string') {
              return arg;
            } else if (typeof arg === 'number' || typeof arg === 'boolean') {
              return arg.toString();
            } else if (arg instanceof Error) {
              return arg.message;
            } else {
              try {
                return JSON.stringify(arg);
              } catch (ignored) {
                return null;
              }
            }
          }).filter(function (arg) {
            return arg;
          }).join(' ');
          if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
            logCallback({
              level: LogLevel[level].toLowerCase(),
              message: message,
              args: args,
              type: instance.name
            });
          }
        };
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}


/***/ }),
/* 7 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unwrap": () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   "wrap": () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   "deleteDB": () => (/* binding */ deleteDB),
/* harmony export */   "openDB": () => (/* binding */ openDB)
/* harmony export */ });
/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    blocked = _ref.blocked,
    upgrade = _ref.upgrade,
    blocking = _ref.blocking,
    terminated = _ref.terminated;
  var request = indexedDB.open(name, version);
  var openPromise = (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);
  if (upgrade) {
    request.addEventListener('upgradeneeded', function (event) {
      upgrade((0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.result), event.oldVersion, event.newVersion, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.transaction));
    });
  }
  if (blocked) request.addEventListener('blocked', function () {
    return blocked();
  });
  openPromise.then(function (db) {
    if (terminated) db.addEventListener('close', function () {
      return terminated();
    });
    if (blocking) db.addEventListener('versionchange', function () {
      return blocking();
    });
  })["catch"](function () {});
  return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */
function deleteDB(name) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    blocked = _ref2.blocked;
  var request = indexedDB.deleteDatabase(name);
  if (blocked) request.addEventListener('blocked', function () {
    return blocked();
  });
  return (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request).then(function () {
    return undefined;
  });
}
var readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
var writeMethods = ['put', 'add', 'delete', 'clear'];
var cachedMethods = new Map();
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === 'string')) {
    return;
  }
  if (cachedMethods.get(prop)) return cachedMethods.get(prop);
  var targetFuncName = prop.replace(/FromIndex$/, '');
  var useIndex = prop !== targetFuncName;
  var isWrite = writeMethods.includes(targetFuncName);
  if (
  // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
  !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
    return;
  }
  var method = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(storeName) {
      var _target;
      var tx,
        target,
        _len,
        args,
        _key,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
              tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
              target = tx.store;
              for (_len = _args.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = _args[_key];
              }
              if (useIndex) target = target.index(args.shift());
              // Must reject if op rejects.
              // If it's a write operation, must reject if tx.done rejects.
              // Must reject with op rejection first.
              // Must resolve with op value.
              // Must handle both promises (no unhandled rejections)
              _context.next = 6;
              return Promise.all([(_target = target)[targetFuncName].apply(_target, args), isWrite && tx.done]);
            case 6:
              return _context.abrupt("return", _context.sent[0]);
            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    return function method(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  cachedMethods.set(prop, method);
  return method;
}
(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)(function (oldTraps) {
  return _objectSpread(_objectSpread({}, oldTraps), {}, {
    get: function get(target, prop, receiver) {
      return getMethod(target, prop) || oldTraps.get(target, prop, receiver);
    },
    has: function has(target, prop) {
      return !!getMethod(target, prop) || oldTraps.has(target, prop);
    }
  });
});


/***/ }),
/* 8 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ reverseTransformCache),
/* harmony export */   "i": () => (/* binding */ instanceOfAny),
/* harmony export */   "r": () => (/* binding */ replaceTraps),
/* harmony export */   "u": () => (/* binding */ unwrap),
/* harmony export */   "w": () => (/* binding */ wrap)
/* harmony export */ });
var instanceOfAny = function instanceOfAny(object, constructors) {
  return constructors.some(function (c) {
    return object instanceof c;
  });
};
var idbProxyableTypes;
var cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [IDBCursor.prototype.advance, IDBCursor.prototype["continue"], IDBCursor.prototype.continuePrimaryKey]);
}
var cursorRequestMap = new WeakMap();
var transactionDoneMap = new WeakMap();
var transactionStoreNamesMap = new WeakMap();
var transformCache = new WeakMap();
var reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
  var promise = new Promise(function (resolve, reject) {
    var unlisten = function unlisten() {
      request.removeEventListener('success', success);
      request.removeEventListener('error', error);
    };
    var success = function success() {
      resolve(wrap(request.result));
      unlisten();
    };
    var error = function error() {
      reject(request.error);
      unlisten();
    };
    request.addEventListener('success', success);
    request.addEventListener('error', error);
  });
  promise.then(function (value) {
    // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
    // (see wrapFunction).
    if (value instanceof IDBCursor) {
      cursorRequestMap.set(value, request);
    }
    // Catching to avoid "Uncaught Promise exceptions"
  })["catch"](function () {});
  // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
  // is because we create many promises from a single IDBRequest.
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  // Early bail if we've already created a done promise for this transaction.
  if (transactionDoneMap.has(tx)) return;
  var done = new Promise(function (resolve, reject) {
    var unlisten = function unlisten() {
      tx.removeEventListener('complete', complete);
      tx.removeEventListener('error', error);
      tx.removeEventListener('abort', error);
    };
    var complete = function complete() {
      resolve();
      unlisten();
    };
    var error = function error() {
      reject(tx.error || new DOMException('AbortError', 'AbortError'));
      unlisten();
    };
    tx.addEventListener('complete', complete);
    tx.addEventListener('error', error);
    tx.addEventListener('abort', error);
  });
  // Cache it for later retrieval.
  transactionDoneMap.set(tx, done);
}
var idbProxyTraps = {
  get: function get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      // Special handling for transaction.done.
      if (prop === 'done') return transactionDoneMap.get(target);
      // Polyfill for objectStoreNames because of Edge.
      if (prop === 'objectStoreNames') {
        return target.objectStoreNames || transactionStoreNamesMap.get(target);
      }
      // Make tx.store return the only store in the transaction, or undefined if there are many.
      if (prop === 'store') {
        return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    // Else transform whatever we get back.
    return wrap(target[prop]);
  },
  set: function set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has: function has(target, prop) {
    if (target instanceof IDBTransaction && (prop === 'done' || prop === 'store')) {
      return true;
    }
    return prop in target;
  }
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  // Due to expected object equality (which is enforced by the caching in `wrap`), we
  // only create one new func per func.
  // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
  if (func === IDBDatabase.prototype.transaction && !('objectStoreNames' in IDBTransaction.prototype)) {
    return function (storeNames) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var tx = func.call.apply(func, [unwrap(this), storeNames].concat(args));
      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
      return wrap(tx);
    };
  }
  // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
  // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
  // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
  // with real promises, so each advance methods returns a new promise for the cursor object, or
  // undefined if the end of the cursor has been reached.
  if (getCursorAdvanceMethods().includes(func)) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
      // the original object.
      func.apply(unwrap(this), args);
      return wrap(cursorRequestMap.get(this));
    };
  }
  return function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
    // the original object.
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === 'function') return wrapFunction(value);
  // This doesn't return, it just creates a 'done' promise for the transaction,
  // which is later returned for transaction.done (see idbObjectHandler).
  if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
  // Return the same value back if we're not going to transform it.
  return value;
}
function wrap(value) {
  // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
  // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
  if (value instanceof IDBRequest) return promisifyRequest(value);
  // If we've already transformed this value before, reuse the transformed value.
  // This is faster, but it also provides object equality.
  if (transformCache.has(value)) return transformCache.get(value);
  var newValue = transformCachableValue(value);
  // Not all types are transformed.
  // These may be primitive types, so they can't be WeakMap keys.
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
var unwrap = function unwrap(value) {
  return reverseTransformCache.get(value);
};


/***/ }),
/* 9 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAnalytics": () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.getAnalytics),
/* harmony export */   "initializeAnalytics": () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.initializeAnalytics),
/* harmony export */   "isSupported": () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.isSupported),
/* harmony export */   "logEvent": () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.logEvent),
/* harmony export */   "setAnalyticsCollectionEnabled": () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setAnalyticsCollectionEnabled),
/* harmony export */   "setConsent": () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setConsent),
/* harmony export */   "setCurrentScreen": () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setCurrentScreen),
/* harmony export */   "setDefaultEventParameters": () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setDefaultEventParameters),
/* harmony export */   "setUserId": () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setUserId),
/* harmony export */   "setUserProperties": () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setUserProperties),
/* harmony export */   "settings": () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.settings)
/* harmony export */ });
/* harmony import */ var _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAnalytics": () => (/* binding */ getAnalytics),
/* harmony export */   "initializeAnalytics": () => (/* binding */ initializeAnalytics),
/* harmony export */   "isSupported": () => (/* binding */ isSupported),
/* harmony export */   "logEvent": () => (/* binding */ _logEvent),
/* harmony export */   "setAnalyticsCollectionEnabled": () => (/* binding */ setAnalyticsCollectionEnabled),
/* harmony export */   "setConsent": () => (/* binding */ setConsent),
/* harmony export */   "setCurrentScreen": () => (/* binding */ setCurrentScreen),
/* harmony export */   "setDefaultEventParameters": () => (/* binding */ setDefaultEventParameters),
/* harmony export */   "setUserId": () => (/* binding */ setUserId),
/* harmony export */   "setUserProperties": () => (/* binding */ setUserProperties),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _firebase_installations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _ERRORS;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Type constant for Firebase Analytics.
 */
var ANALYTICS_TYPE = 'analytics';
// Key to attach FID to in gtag params.
var GA_FID_KEY = 'firebase_id';
var ORIGIN_KEY = 'origin';
var FETCH_TIMEOUT_MILLIS = 60 * 1000;
var DYNAMIC_CONFIG_URL = 'https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig';
var GTAG_URL = 'https://www.googletagmanager.com/gtag/js';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_1__.Logger('@firebase/analytics');

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Makeshift polyfill for Promise.allSettled(). Resolves when all promises
 * have either resolved or rejected.
 *
 * @param promises Array of promises to wait for.
 */
function promiseAllSettled(promises) {
  return Promise.all(promises.map(function (promise) {
    return promise["catch"](function (e) {
      return e;
    });
  }));
}
/**
 * Inserts gtag script tag into the page to asynchronously download gtag.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
 */
function insertScriptTag(dataLayerName, measurementId) {
  var script = document.createElement('script');
  // We are not providing an analyticsId in the URL because it would trigger a `page_view`
  // without fid. We will initialize ga-id using gtag (config) command together with fid.
  script.src = "".concat(GTAG_URL, "?l=").concat(dataLayerName, "&id=").concat(measurementId);
  script.async = true;
  document.head.appendChild(script);
}
/**
 * Get reference to, or create, global datalayer.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
 */
function getOrCreateDataLayer(dataLayerName) {
  // Check for existing dataLayer and create if needed.
  var dataLayer = [];
  if (Array.isArray(window[dataLayerName])) {
    dataLayer = window[dataLayerName];
  } else {
    window[dataLayerName] = dataLayer;
  }
  return dataLayer;
}
/**
 * Wrapped gtag logic when gtag is called with 'config' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 * @param measurementId GA Measurement ID to set config for.
 * @param gtagParams Gtag config params to set.
 */
function gtagOnConfig(_x, _x2, _x3, _x4, _x5, _x6) {
  return _gtagOnConfig.apply(this, arguments);
}
/**
 * Wrapped gtag logic when gtag is called with 'event' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementId GA Measurement ID to log event to.
 * @param gtagParams Params to log with this event.
 */
function _gtagOnConfig() {
  _gtagOnConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, measurementId, gtagParams) {
    var correspondingAppId, dynamicConfigResults, foundConfig;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // If config is already fetched, we know the appId and can use it to look up what FID promise we
            /// are waiting for, and wait only on that one.
            correspondingAppId = measurementIdToAppId[measurementId];
            _context2.prev = 1;
            if (!correspondingAppId) {
              _context2.next = 7;
              break;
            }
            _context2.next = 5;
            return initializationPromisesMap[correspondingAppId];
          case 5:
            _context2.next = 14;
            break;
          case 7:
            _context2.next = 9;
            return promiseAllSettled(dynamicConfigPromisesList);
          case 9:
            dynamicConfigResults = _context2.sent;
            foundConfig = dynamicConfigResults.find(function (config) {
              return config.measurementId === measurementId;
            });
            if (!foundConfig) {
              _context2.next = 14;
              break;
            }
            _context2.next = 14;
            return initializationPromisesMap[foundConfig.appId];
          case 14:
            _context2.next = 19;
            break;
          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](1);
            logger.error(_context2.t0);
          case 19:
            gtagCore("config" /* CONFIG */, measurementId, gtagParams);
          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 16]]);
  }));
  return _gtagOnConfig.apply(this, arguments);
}
function gtagOnEvent(_x7, _x8, _x9, _x10, _x11) {
  return _gtagOnEvent.apply(this, arguments);
}
/**
 * Wraps a standard gtag function with extra code to wait for completion of
 * relevant initialization promises before sending requests.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 */
function _gtagOnEvent() {
  _gtagOnEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementId, gtagParams) {
    var initializationPromisesToWaitFor, gaSendToList, dynamicConfigResults, _iterator, _step, _loop, _ret;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            initializationPromisesToWaitFor = []; // If there's a 'send_to' param, check if any ID specified matches
            // an initializeIds() promise we are waiting for.
            if (!(gtagParams && gtagParams['send_to'])) {
              _context3.next = 26;
              break;
            }
            gaSendToList = gtagParams['send_to']; // Make it an array if is isn't, so it can be dealt with the same way.
            if (!Array.isArray(gaSendToList)) {
              gaSendToList = [gaSendToList];
            }
            // Checking 'send_to' fields requires having all measurement ID results back from
            // the dynamic config fetch.
            _context3.next = 7;
            return promiseAllSettled(dynamicConfigPromisesList);
          case 7:
            dynamicConfigResults = _context3.sent;
            _iterator = _createForOfIteratorHelper(gaSendToList);
            _context3.prev = 9;
            _loop = function _loop() {
              var sendToId = _step.value;
              // Any fetched dynamic measurement ID that matches this 'send_to' ID
              var foundConfig = dynamicConfigResults.find(function (config) {
                return config.measurementId === sendToId;
              });
              var initializationPromise = foundConfig && initializationPromisesMap[foundConfig.appId];
              if (initializationPromise) {
                initializationPromisesToWaitFor.push(initializationPromise);
              } else {
                // Found an item in 'send_to' that is not associated
                // directly with an FID, possibly a group.  Empty this array,
                // exit the loop early, and let it get populated below.
                initializationPromisesToWaitFor = [];
                return "break";
              }
            };
            _iterator.s();
          case 12:
            if ((_step = _iterator.n()).done) {
              _context3.next = 18;
              break;
            }
            _ret = _loop();
            if (!(_ret === "break")) {
              _context3.next = 16;
              break;
            }
            return _context3.abrupt("break", 18);
          case 16:
            _context3.next = 12;
            break;
          case 18:
            _context3.next = 23;
            break;
          case 20:
            _context3.prev = 20;
            _context3.t0 = _context3["catch"](9);
            _iterator.e(_context3.t0);
          case 23:
            _context3.prev = 23;
            _iterator.f();
            return _context3.finish(23);
          case 26:
            // This will be unpopulated if there was no 'send_to' field , or
            // if not all entries in the 'send_to' field could be mapped to
            // a FID. In these cases, wait on all pending initialization promises.
            if (initializationPromisesToWaitFor.length === 0) {
              initializationPromisesToWaitFor = Object.values(initializationPromisesMap);
            }
            // Run core gtag function with args after all relevant initialization
            // promises have been resolved.
            _context3.next = 29;
            return Promise.all(initializationPromisesToWaitFor);
          case 29:
            // Workaround for http://b/141370449 - third argument cannot be undefined.
            gtagCore("event" /* EVENT */, measurementId, gtagParams || {});
            _context3.next = 35;
            break;
          case 32:
            _context3.prev = 32;
            _context3.t1 = _context3["catch"](0);
            logger.error(_context3.t1);
          case 35:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 32], [9, 20, 23, 26]]);
  }));
  return _gtagOnEvent.apply(this, arguments);
}
function wrapGtag(gtagCore,
/**
 * Allows wrapped gtag calls to wait on whichever intialization promises are required,
 * depending on the contents of the gtag params' `send_to` field, if any.
 */
initializationPromisesMap,
/**
 * Wrapped gtag calls sometimes require all dynamic config fetches to have returned
 * before determining what initialization promises (which include FIDs) to wait for.
 */
dynamicConfigPromisesList,
/**
 * Wrapped gtag config calls can narrow down which initialization promise (with FID)
 * to wait for if the measurementId is already fetched, by getting the corresponding appId,
 * which is the key for the initialization promises map.
 */
measurementIdToAppId) {
  /**
   * Wrapper around gtag that ensures FID is sent with gtag calls.
   * @param command Gtag command type.
   * @param idOrNameOrParams Measurement ID if command is EVENT/CONFIG, params if command is SET.
   * @param gtagParams Params if event is EVENT/CONFIG.
   */
  function gtagWrapper(_x12, _x13, _x14) {
    return _gtagWrapper.apply(this, arguments);
  }
  function _gtagWrapper() {
    _gtagWrapper = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(command, idOrNameOrParams, gtagParams) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              if (!(command === "event" /* EVENT */)) {
                _context.next = 6;
                break;
              }
              _context.next = 4;
              return gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, idOrNameOrParams, gtagParams);
            case 4:
              _context.next = 12;
              break;
            case 6:
              if (!(command === "config" /* CONFIG */)) {
                _context.next = 11;
                break;
              }
              _context.next = 9;
              return gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, idOrNameOrParams, gtagParams);
            case 9:
              _context.next = 12;
              break;
            case 11:
              if (command === "consent" /* CONSENT */) {
                // If CONFIG, second arg must be measurementId.
                gtagCore("consent" /* CONSENT */, 'update', gtagParams);
              } else {
                // If SET, second arg must be params.
                gtagCore("set" /* SET */, idOrNameOrParams);
              }
            case 12:
              _context.next = 17;
              break;
            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              logger.error(_context.t0);
            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
    }));
    return _gtagWrapper.apply(this, arguments);
  }
  return gtagWrapper;
}
/**
 * Creates global gtag function or wraps existing one if found.
 * This wrapped function attaches Firebase instance ID (FID) to gtag 'config' and
 * 'event' calls that belong to the GAID associated with this Firebase instance.
 *
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 * @param dataLayerName Name of global GA datalayer array.
 * @param gtagFunctionName Name of global gtag function ("gtag" if not user-specified).
 */
function wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagFunctionName) {
  // Create a basic core gtag function
  var gtagCore = function gtagCore() {
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    // Must push IArguments object, not an array.
    window[dataLayerName].push(arguments);
  };
  // Replace it with existing one if found
  if (window[gtagFunctionName] && typeof window[gtagFunctionName] === 'function') {
    // @ts-ignore
    gtagCore = window[gtagFunctionName];
  }
  window[gtagFunctionName] = wrapGtag(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId);
  return {
    gtagCore: gtagCore,
    wrappedGtag: window[gtagFunctionName]
  };
}
/**
 * Returns the script tag in the DOM matching both the gtag url pattern
 * and the provided data layer name.
 */
function findGtagScriptOnPage(dataLayerName) {
  var scriptTags = window.document.getElementsByTagName('script');
  for (var _i = 0, _Object$values = Object.values(scriptTags); _i < _Object$values.length; _i++) {
    var tag = _Object$values[_i];
    if (tag.src && tag.src.includes(GTAG_URL) && tag.src.includes(dataLayerName)) {
      return tag;
    }
  }
  return null;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERRORS = (_ERRORS = {}, _defineProperty(_ERRORS, "already-exists" /* ALREADY_EXISTS */, 'A Firebase Analytics instance with the appId {$id} ' + ' already exists. ' + 'Only one Firebase Analytics instance can be created for each appId.'), _defineProperty(_ERRORS, "already-initialized" /* ALREADY_INITIALIZED */, 'initializeAnalytics() cannot be called again with different options than those ' + 'it was initially called with. It can be called again with the same options to ' + 'return the existing instance, or getAnalytics() can be used ' + 'to get a reference to the already-intialized instance.'), _defineProperty(_ERRORS, "already-initialized-settings" /* ALREADY_INITIALIZED_SETTINGS */, 'Firebase Analytics has already been initialized.' + 'settings() must be called before initializing any Analytics instance' + 'or it will have no effect.'), _defineProperty(_ERRORS, "interop-component-reg-failed" /* INTEROP_COMPONENT_REG_FAILED */, 'Firebase Analytics Interop Component failed to instantiate: {$reason}'), _defineProperty(_ERRORS, "invalid-analytics-context" /* INVALID_ANALYTICS_CONTEXT */, 'Firebase Analytics is not supported in this environment. ' + 'Wrap initialization of analytics in analytics.isSupported() ' + 'to prevent initialization in unsupported environments. Details: {$errorInfo}'), _defineProperty(_ERRORS, "indexeddb-unavailable" /* INDEXEDDB_UNAVAILABLE */, 'IndexedDB unavailable or restricted in this environment. ' + 'Wrap initialization of analytics in analytics.isSupported() ' + 'to prevent initialization in unsupported environments. Details: {$errorInfo}'), _defineProperty(_ERRORS, "fetch-throttle" /* FETCH_THROTTLE */, 'The config fetch request timed out while in an exponential backoff state.' + ' Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.'), _defineProperty(_ERRORS, "config-fetch-failed" /* CONFIG_FETCH_FAILED */, 'Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}'), _defineProperty(_ERRORS, "no-api-key" /* NO_API_KEY */, 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field to' + 'contain a valid API key.'), _defineProperty(_ERRORS, "no-app-id" /* NO_APP_ID */, 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field to' + 'contain a valid app ID.'), _ERRORS);
var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__.ErrorFactory('analytics', 'Analytics', ERRORS);

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Backoff factor for 503 errors, which we want to be conservative about
 * to avoid overloading servers. Each retry interval will be
 * BASE_INTERVAL_MILLIS * LONG_RETRY_FACTOR ^ retryCount, so the second one
 * will be ~30 seconds (with fuzzing).
 */
var LONG_RETRY_FACTOR = 30;
/**
 * Base wait interval to multiplied by backoffFactor^backoffCount.
 */
var BASE_INTERVAL_MILLIS = 1000;
/**
 * Stubbable retry data storage class.
 */
var RetryData = /*#__PURE__*/function () {
  function RetryData() {
    var throttleMetadata = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var intervalMillis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : BASE_INTERVAL_MILLIS;
    _classCallCheck(this, RetryData);
    this.throttleMetadata = throttleMetadata;
    this.intervalMillis = intervalMillis;
  }
  _createClass(RetryData, [{
    key: "getThrottleMetadata",
    value: function getThrottleMetadata(appId) {
      return this.throttleMetadata[appId];
    }
  }, {
    key: "setThrottleMetadata",
    value: function setThrottleMetadata(appId, metadata) {
      this.throttleMetadata[appId] = metadata;
    }
  }, {
    key: "deleteThrottleMetadata",
    value: function deleteThrottleMetadata(appId) {
      delete this.throttleMetadata[appId];
    }
  }]);
  return RetryData;
}();
var defaultRetryData = new RetryData();
/**
 * Set GET request headers.
 * @param apiKey App API key.
 */
function getHeaders(apiKey) {
  return new Headers({
    Accept: 'application/json',
    'x-goog-api-key': apiKey
  });
}
/**
 * Fetches dynamic config from backend.
 * @param app Firebase app to fetch config for.
 */
function fetchDynamicConfig(_x15) {
  return _fetchDynamicConfig.apply(this, arguments);
}
/**
 * Fetches dynamic config from backend, retrying if failed.
 * @param app Firebase app to fetch config for.
 */
function _fetchDynamicConfig() {
  _fetchDynamicConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(appFields) {
    var _a, appId, apiKey, request, appUrl, response, errorMessage, jsonResponse;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            appId = appFields.appId, apiKey = appFields.apiKey;
            request = {
              method: 'GET',
              headers: getHeaders(apiKey)
            };
            appUrl = DYNAMIC_CONFIG_URL.replace('{app-id}', appId);
            _context4.next = 5;
            return fetch(appUrl, request);
          case 5:
            response = _context4.sent;
            if (!(response.status !== 200 && response.status !== 304)) {
              _context4.next = 18;
              break;
            }
            errorMessage = '';
            _context4.prev = 8;
            _context4.next = 11;
            return response.json();
          case 11:
            jsonResponse = _context4.sent;
            if ((_a = jsonResponse.error) === null || _a === void 0 ? void 0 : _a.message) {
              errorMessage = jsonResponse.error.message;
            }
            _context4.next = 17;
            break;
          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](8);
          case 17:
            throw ERROR_FACTORY.create("config-fetch-failed" /* CONFIG_FETCH_FAILED */, {
              httpStatus: response.status,
              responseMessage: errorMessage
            });
          case 18:
            return _context4.abrupt("return", response.json());
          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[8, 15]]);
  }));
  return _fetchDynamicConfig.apply(this, arguments);
}
function fetchDynamicConfigWithRetry(_x16) {
  return _fetchDynamicConfigWithRetry.apply(this, arguments);
}
/**
 * Runs one retry attempt.
 * @param appFields Necessary app config fields.
 * @param throttleMetadata Ongoing metadata to determine throttling times.
 * @param signal Abort signal.
 */
function _fetchDynamicConfigWithRetry() {
  _fetchDynamicConfigWithRetry = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(app) {
    var retryData,
      timeoutMillis,
      _app$options,
      appId,
      apiKey,
      measurementId,
      throttleMetadata,
      signal,
      _args7 = arguments;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            retryData = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : defaultRetryData;
            timeoutMillis = _args7.length > 2 ? _args7[2] : undefined;
            _app$options = app.options, appId = _app$options.appId, apiKey = _app$options.apiKey, measurementId = _app$options.measurementId;
            if (appId) {
              _context6.next = 5;
              break;
            }
            throw ERROR_FACTORY.create("no-app-id" /* NO_APP_ID */);
          case 5:
            if (apiKey) {
              _context6.next = 9;
              break;
            }
            if (!measurementId) {
              _context6.next = 8;
              break;
            }
            return _context6.abrupt("return", {
              measurementId: measurementId,
              appId: appId
            });
          case 8:
            throw ERROR_FACTORY.create("no-api-key" /* NO_API_KEY */);
          case 9:
            throttleMetadata = retryData.getThrottleMetadata(appId) || {
              backoffCount: 0,
              throttleEndTimeMillis: Date.now()
            };
            signal = new AnalyticsAbortSignal();
            setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      // Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
                      signal.abort();
                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            })), timeoutMillis !== undefined ? timeoutMillis : FETCH_TIMEOUT_MILLIS);
            return _context6.abrupt("return", attemptFetchDynamicConfigWithRetry({
              appId: appId,
              apiKey: apiKey,
              measurementId: measurementId
            }, throttleMetadata, signal, retryData));
          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _fetchDynamicConfigWithRetry.apply(this, arguments);
}
function attemptFetchDynamicConfigWithRetry(_x17, _x18, _x19) {
  return _attemptFetchDynamicConfigWithRetry.apply(this, arguments);
}
/**
 * Supports waiting on a backoff by:
 *
 * <ul>
 *   <li>Promisifying setTimeout, so we can set a timeout in our Promise chain</li>
 *   <li>Listening on a signal bus for abort events, just like the Fetch API</li>
 *   <li>Failing in the same way the Fetch API fails, so timing out a live request and a throttled
 *       request appear the same.</li>
 * </ul>
 *
 * <p>Visible for testing.
 */
function _attemptFetchDynamicConfigWithRetry() {
  _attemptFetchDynamicConfigWithRetry = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(appFields, _ref, signal) {
    var throttleEndTimeMillis,
      backoffCount,
      retryData,
      _a,
      _b,
      appId,
      measurementId,
      response,
      error,
      backoffMillis,
      throttleMetadata,
      _args8 = arguments;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            throttleEndTimeMillis = _ref.throttleEndTimeMillis, backoffCount = _ref.backoffCount;
            retryData = _args8.length > 3 && _args8[3] !== undefined ? _args8[3] : defaultRetryData;
            appId = appFields.appId, measurementId = appFields.measurementId; // Starts with a (potentially zero) timeout to support resumption from stored state.
            // Ensures the throttle end time is honored if the last attempt timed out.
            // Note the SDK will never make a request if the fetch timeout expires at this point.
            _context7.prev = 3;
            _context7.next = 6;
            return setAbortableTimeout(signal, throttleEndTimeMillis);
          case 6:
            _context7.next = 14;
            break;
          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](3);
            if (!measurementId) {
              _context7.next = 13;
              break;
            }
            logger.warn("Timed out fetching this Firebase app's measurement ID from the server." + " Falling back to the measurement ID ".concat(measurementId) + " provided in the \"measurementId\" field in the local Firebase config. [".concat((_a = _context7.t0) === null || _a === void 0 ? void 0 : _a.message, "]"));
            return _context7.abrupt("return", {
              appId: appId,
              measurementId: measurementId
            });
          case 13:
            throw _context7.t0;
          case 14:
            _context7.prev = 14;
            _context7.next = 17;
            return fetchDynamicConfig(appFields);
          case 17:
            response = _context7.sent;
            // Note the SDK only clears throttle state if response is success or non-retriable.
            retryData.deleteThrottleMetadata(appId);
            return _context7.abrupt("return", response);
          case 22:
            _context7.prev = 22;
            _context7.t1 = _context7["catch"](14);
            error = _context7.t1;
            if (isRetriableError(error)) {
              _context7.next = 33;
              break;
            }
            retryData.deleteThrottleMetadata(appId);
            if (!measurementId) {
              _context7.next = 32;
              break;
            }
            logger.warn("Failed to fetch this Firebase app's measurement ID from the server." + " Falling back to the measurement ID ".concat(measurementId) + " provided in the \"measurementId\" field in the local Firebase config. [".concat(error === null || error === void 0 ? void 0 : error.message, "]"));
            return _context7.abrupt("return", {
              appId: appId,
              measurementId: measurementId
            });
          case 32:
            throw _context7.t1;
          case 33:
            backoffMillis = Number((_b = error === null || error === void 0 ? void 0 : error.customData) === null || _b === void 0 ? void 0 : _b.httpStatus) === 503 ? (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.calculateBackoffMillis)(backoffCount, retryData.intervalMillis, LONG_RETRY_FACTOR) : (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.calculateBackoffMillis)(backoffCount, retryData.intervalMillis); // Increments backoff state.
            throttleMetadata = {
              throttleEndTimeMillis: Date.now() + backoffMillis,
              backoffCount: backoffCount + 1
            }; // Persists state.
            retryData.setThrottleMetadata(appId, throttleMetadata);
            logger.debug("Calling attemptFetch again in ".concat(backoffMillis, " millis"));
            return _context7.abrupt("return", attemptFetchDynamicConfigWithRetry(appFields, throttleMetadata, signal, retryData));
          case 38:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[3, 8], [14, 22]]);
  }));
  return _attemptFetchDynamicConfigWithRetry.apply(this, arguments);
}
function setAbortableTimeout(signal, throttleEndTimeMillis) {
  return new Promise(function (resolve, reject) {
    // Derives backoff from given end time, normalizing negative numbers to zero.
    var backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
    var timeout = setTimeout(resolve, backoffMillis);
    // Adds listener, rather than sets onabort, because signal is a shared object.
    signal.addEventListener(function () {
      clearTimeout(timeout);
      // If the request completes before this timeout, the rejection has no effect.
      reject(ERROR_FACTORY.create("fetch-throttle" /* FETCH_THROTTLE */, {
        throttleEndTimeMillis: throttleEndTimeMillis
      }));
    });
  });
}
/**
 * Returns true if the {@link Error} indicates a fetch request may succeed later.
 */
function isRetriableError(e) {
  if (!(e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError) || !e.customData) {
    return false;
  }
  // Uses string index defined by ErrorData, which FirebaseError implements.
  var httpStatus = Number(e.customData['httpStatus']);
  return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
}
/**
 * Shims a minimal AbortSignal (copied from Remote Config).
 *
 * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
 * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
 * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
 * swapped out if/when we do.
 */
var AnalyticsAbortSignal = /*#__PURE__*/function () {
  function AnalyticsAbortSignal() {
    _classCallCheck(this, AnalyticsAbortSignal);
    this.listeners = [];
  }
  _createClass(AnalyticsAbortSignal, [{
    key: "addEventListener",
    value: function addEventListener(listener) {
      this.listeners.push(listener);
    }
  }, {
    key: "abort",
    value: function abort() {
      this.listeners.forEach(function (listener) {
        return listener();
      });
    }
  }]);
  return AnalyticsAbortSignal;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Event parameters to set on 'gtag' during initialization.
 */
var defaultEventParametersForInit;
/**
 * Logs an analytics event through the Firebase SDK.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param eventName Google Analytics event name, choose from standard list or use a custom string.
 * @param eventParams Analytics event parameters.
 */
function logEvent$1(_x20, _x21, _x22, _x23, _x24) {
  return _logEvent$.apply(this, arguments);
}
/**
 * Set screen_name parameter for this Google Analytics ID.
 *
 * @deprecated Use {@link logEvent} with `eventName` as 'screen_view' and add relevant `eventParams`.
 * See {@link https://firebase.google.com/docs/analytics/screenviews | Track Screenviews}.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param screenName Screen name string to set.
 */
function _logEvent$() {
  _logEvent$ = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(gtagFunction, initializationPromise, eventName, eventParams, options) {
    var measurementId, params;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            if (!(options && options.global)) {
              _context8.next = 5;
              break;
            }
            gtagFunction("event" /* EVENT */, eventName, eventParams);
            return _context8.abrupt("return");
          case 5:
            _context8.next = 7;
            return initializationPromise;
          case 7:
            measurementId = _context8.sent;
            params = Object.assign(Object.assign({}, eventParams), {
              'send_to': measurementId
            });
            gtagFunction("event" /* EVENT */, eventName, params);
          case 10:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _logEvent$.apply(this, arguments);
}
function setCurrentScreen$1(_x25, _x26, _x27, _x28) {
  return _setCurrentScreen$.apply(this, arguments);
}
/**
 * Set user_id parameter for this Google Analytics ID.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param id User ID string to set
 */
function _setCurrentScreen$() {
  _setCurrentScreen$ = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(gtagFunction, initializationPromise, screenName, options) {
    var measurementId;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            if (!(options && options.global)) {
              _context9.next = 5;
              break;
            }
            gtagFunction("set" /* SET */, {
              'screen_name': screenName
            });
            return _context9.abrupt("return", Promise.resolve());
          case 5:
            _context9.next = 7;
            return initializationPromise;
          case 7:
            measurementId = _context9.sent;
            gtagFunction("config" /* CONFIG */, measurementId, {
              update: true,
              'screen_name': screenName
            });
          case 9:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _setCurrentScreen$.apply(this, arguments);
}
function setUserId$1(_x29, _x30, _x31, _x32) {
  return _setUserId$.apply(this, arguments);
}
/**
 * Set all other user properties other than user_id and screen_name.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param properties Map of user properties to set
 */
function _setUserId$() {
  _setUserId$ = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(gtagFunction, initializationPromise, id, options) {
    var measurementId;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            if (!(options && options.global)) {
              _context10.next = 5;
              break;
            }
            gtagFunction("set" /* SET */, {
              'user_id': id
            });
            return _context10.abrupt("return", Promise.resolve());
          case 5:
            _context10.next = 7;
            return initializationPromise;
          case 7:
            measurementId = _context10.sent;
            gtagFunction("config" /* CONFIG */, measurementId, {
              update: true,
              'user_id': id
            });
          case 9:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _setUserId$.apply(this, arguments);
}
function setUserProperties$1(_x33, _x34, _x35, _x36) {
  return _setUserProperties$.apply(this, arguments);
}
/**
 * Set whether collection is enabled for this ID.
 *
 * @param enabled If true, collection is enabled for this ID.
 */
function _setUserProperties$() {
  _setUserProperties$ = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(gtagFunction, initializationPromise, properties, options) {
    var flatProperties, _i2, _Object$keys, key, measurementId;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            if (!(options && options.global)) {
              _context11.next = 7;
              break;
            }
            flatProperties = {};
            for (_i2 = 0, _Object$keys = Object.keys(properties); _i2 < _Object$keys.length; _i2++) {
              key = _Object$keys[_i2];
              // use dot notation for merge behavior in gtag.js
              flatProperties["user_properties.".concat(key)] = properties[key];
            }
            gtagFunction("set" /* SET */, flatProperties);
            return _context11.abrupt("return", Promise.resolve());
          case 7:
            _context11.next = 9;
            return initializationPromise;
          case 9:
            measurementId = _context11.sent;
            gtagFunction("config" /* CONFIG */, measurementId, {
              update: true,
              'user_properties': properties
            });
          case 11:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _setUserProperties$.apply(this, arguments);
}
function setAnalyticsCollectionEnabled$1(_x37, _x38) {
  return _setAnalyticsCollectionEnabled$.apply(this, arguments);
}
/**
 * Consent parameters to default to during 'gtag' initialization.
 */
function _setAnalyticsCollectionEnabled$() {
  _setAnalyticsCollectionEnabled$ = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(initializationPromise, enabled) {
    var measurementId;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return initializationPromise;
          case 2:
            measurementId = _context12.sent;
            window["ga-disable-".concat(measurementId)] = !enabled;
          case 4:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _setAnalyticsCollectionEnabled$.apply(this, arguments);
}
var defaultConsentSettingsForInit;
/**
 * Sets the variable {@link defaultConsentSettingsForInit} for use in the initialization of
 * analytics.
 *
 * @param consentSettings Maps the applicable end user consent state for gtag.js.
 */
function _setConsentDefaultForInit(consentSettings) {
  defaultConsentSettingsForInit = consentSettings;
}
/**
 * Sets the variable `defaultEventParametersForInit` for use in the initialization of
 * analytics.
 *
 * @param customParams Any custom params the user may pass to gtag.js.
 */
function _setDefaultEventParametersForInit(customParams) {
  defaultEventParametersForInit = customParams;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function validateIndexedDB() {
  return _validateIndexedDB.apply(this, arguments);
}
/**
 * Initialize the analytics instance in gtag.js by calling config command with fid.
 *
 * NOTE: We combine analytics initialization and setting fid together because we want fid to be
 * part of the `page_view` event that's sent during the initialization
 * @param app Firebase app
 * @param gtagCore The gtag function that's not wrapped.
 * @param dynamicConfigPromisesList Array of all dynamic config promises.
 * @param measurementIdToAppId Maps measurementID to appID.
 * @param installations _FirebaseInstallationsInternal instance.
 *
 * @returns Measurement ID.
 */
function _validateIndexedDB() {
  _validateIndexedDB = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
    var _a;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.isIndexedDBAvailable)()) {
              _context13.next = 5;
              break;
            }
            logger.warn(ERROR_FACTORY.create("indexeddb-unavailable" /* INDEXEDDB_UNAVAILABLE */, {
              errorInfo: 'IndexedDB is not available in this environment.'
            }).message);
            return _context13.abrupt("return", false);
          case 5:
            _context13.prev = 5;
            _context13.next = 8;
            return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.validateIndexedDBOpenable)();
          case 8:
            _context13.next = 14;
            break;
          case 10:
            _context13.prev = 10;
            _context13.t0 = _context13["catch"](5);
            logger.warn(ERROR_FACTORY.create("indexeddb-unavailable" /* INDEXEDDB_UNAVAILABLE */, {
              errorInfo: (_a = _context13.t0) === null || _a === void 0 ? void 0 : _a.toString()
            }).message);
            return _context13.abrupt("return", false);
          case 14:
            return _context13.abrupt("return", true);
          case 15:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[5, 10]]);
  }));
  return _validateIndexedDB.apply(this, arguments);
}
function _initializeAnalytics(_x39, _x40, _x41, _x42, _x43, _x44, _x45) {
  return _initializeAnalytics2.apply(this, arguments);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Analytics Service class.
 */
function _initializeAnalytics2() {
  _initializeAnalytics2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCore, dataLayerName, options) {
    var _a, dynamicConfigPromise, fidPromise, _yield$Promise$all, _yield$Promise$all2, dynamicConfig, fid, configProperties;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            dynamicConfigPromise = fetchDynamicConfigWithRetry(app); // Once fetched, map measurementIds to appId, for ease of lookup in wrapped gtag function.
            dynamicConfigPromise.then(function (config) {
              measurementIdToAppId[config.measurementId] = config.appId;
              if (app.options.measurementId && config.measurementId !== app.options.measurementId) {
                logger.warn("The measurement ID in the local Firebase config (".concat(app.options.measurementId, ")") + " does not match the measurement ID fetched from the server (".concat(config.measurementId, ").") + " To ensure analytics events are always sent to the correct Analytics property," + " update the" + " measurement ID field in the local config or remove it from the local config.");
              }
            })["catch"](function (e) {
              return logger.error(e);
            });
            // Add to list to track state of all dynamic config promises.
            dynamicConfigPromisesList.push(dynamicConfigPromise);
            fidPromise = validateIndexedDB().then(function (envIsValid) {
              if (envIsValid) {
                return installations.getId();
              } else {
                return undefined;
              }
            });
            _context14.next = 6;
            return Promise.all([dynamicConfigPromise, fidPromise]);
          case 6:
            _yield$Promise$all = _context14.sent;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            dynamicConfig = _yield$Promise$all2[0];
            fid = _yield$Promise$all2[1];
            // Detect if user has already put the gtag <script> tag on this page with the passed in
            // data layer name.
            if (!findGtagScriptOnPage(dataLayerName)) {
              insertScriptTag(dataLayerName, dynamicConfig.measurementId);
            }
            // Detects if there are consent settings that need to be configured.
            if (defaultConsentSettingsForInit) {
              gtagCore("consent" /* CONSENT */, 'default', defaultConsentSettingsForInit);
              _setConsentDefaultForInit(undefined);
            }
            // This command initializes gtag.js and only needs to be called once for the entire web app,
            // but since it is idempotent, we can call it multiple times.
            // We keep it together with other initialization logic for better code structure.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            gtagCore('js', new Date());
            // User config added first. We don't want users to accidentally overwrite
            // base Firebase config properties.
            configProperties = (_a = options === null || options === void 0 ? void 0 : options.config) !== null && _a !== void 0 ? _a : {}; // guard against developers accidentally setting properties with prefix `firebase_`
            configProperties[ORIGIN_KEY] = 'firebase';
            configProperties.update = true;
            if (fid != null) {
              configProperties[GA_FID_KEY] = fid;
            }
            // It should be the first config command called on this GA-ID
            // Initialize this GA-ID and set FID on it using the gtag config API.
            // Note: This will trigger a page_view event unless 'send_page_view' is set to false in
            // `configProperties`.
            gtagCore("config" /* CONFIG */, dynamicConfig.measurementId, configProperties);
            // Detects if there is data that will be set on every event logged from the SDK.
            if (defaultEventParametersForInit) {
              gtagCore("set" /* SET */, defaultEventParametersForInit);
              _setDefaultEventParametersForInit(undefined);
            }
            return _context14.abrupt("return", dynamicConfig.measurementId);
          case 20:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return _initializeAnalytics2.apply(this, arguments);
}
var AnalyticsService = /*#__PURE__*/function () {
  function AnalyticsService(app) {
    _classCallCheck(this, AnalyticsService);
    this.app = app;
  }
  _createClass(AnalyticsService, [{
    key: "_delete",
    value: function _delete() {
      delete initializationPromisesMap[this.app.options.appId];
      return Promise.resolve();
    }
  }]);
  return AnalyticsService;
}();
/**
 * Maps appId to full initialization promise. Wrapped gtag calls must wait on
 * all or some of these, depending on the call's `send_to` param and the status
 * of the dynamic config fetches (see below).
 */
var initializationPromisesMap = {};
/**
 * List of dynamic config fetch promises. In certain cases, wrapped gtag calls
 * wait on all these to be complete in order to determine if it can selectively
 * wait for only certain initialization (FID) promises or if it must wait for all.
 */
var dynamicConfigPromisesList = [];
/**
 * Maps fetched measurementIds to appId. Populated when the app's dynamic config
 * fetch completes. If already populated, gtag config calls can use this to
 * selectively wait for only this app's initialization promise (FID) instead of all
 * initialization promises.
 */
var measurementIdToAppId = {};
/**
 * Name for window global data layer array used by GA: defaults to 'dataLayer'.
 */
var dataLayerName = 'dataLayer';
/**
 * Name for window global gtag function used by GA: defaults to 'gtag'.
 */
var gtagName = 'gtag';
/**
 * Reproduction of standard gtag function or reference to existing
 * gtag function on window object.
 */
var gtagCoreFunction;
/**
 * Wrapper around gtag function that ensures FID is sent with all
 * relevant event and config calls.
 */
var wrappedGtagFunction;
/**
 * Flag to ensure page initialization steps (creation or wrapping of
 * dataLayer and gtag script) are only run once per page load.
 */
var globalInitDone = false;
/**
 * Configures Firebase Analytics to use custom `gtag` or `dataLayer` names.
 * Intended to be used if `gtag.js` script has been installed on
 * this page independently of Firebase Analytics, and is using non-default
 * names for either the `gtag` function or for `dataLayer`.
 * Must be called before calling `getAnalytics()` or it won't
 * have any effect.
 *
 * @public
 *
 * @param options - Custom gtag and dataLayer names.
 */
function settings(options) {
  if (globalInitDone) {
    throw ERROR_FACTORY.create("already-initialized" /* ALREADY_INITIALIZED */);
  }

  if (options.dataLayerName) {
    dataLayerName = options.dataLayerName;
  }
  if (options.gtagName) {
    gtagName = options.gtagName;
  }
}
/**
 * Returns true if no environment mismatch is found.
 * If environment mismatches are found, throws an INVALID_ANALYTICS_CONTEXT
 * error that also lists details for each mismatch found.
 */
function warnOnBrowserContextMismatch() {
  var mismatchedEnvMessages = [];
  if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.isBrowserExtension)()) {
    mismatchedEnvMessages.push('This is a browser extension environment.');
  }
  if (!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.areCookiesEnabled)()) {
    mismatchedEnvMessages.push('Cookies are not available.');
  }
  if (mismatchedEnvMessages.length > 0) {
    var details = mismatchedEnvMessages.map(function (message, index) {
      return "(".concat(index + 1, ") ").concat(message);
    }).join(' ');
    var err = ERROR_FACTORY.create("invalid-analytics-context" /* INVALID_ANALYTICS_CONTEXT */, {
      errorInfo: details
    });
    logger.warn(err.message);
  }
}
/**
 * Analytics instance factory.
 * @internal
 */
function factory(app, installations, options) {
  warnOnBrowserContextMismatch();
  var appId = app.options.appId;
  if (!appId) {
    throw ERROR_FACTORY.create("no-app-id" /* NO_APP_ID */);
  }

  if (!app.options.apiKey) {
    if (app.options.measurementId) {
      logger.warn("The \"apiKey\" field is empty in the local Firebase config. This is needed to fetch the latest" + " measurement ID for this Firebase app. Falling back to the measurement ID ".concat(app.options.measurementId) + " provided in the \"measurementId\" field in the local Firebase config.");
    } else {
      throw ERROR_FACTORY.create("no-api-key" /* NO_API_KEY */);
    }
  }

  if (initializationPromisesMap[appId] != null) {
    throw ERROR_FACTORY.create("already-exists" /* ALREADY_EXISTS */, {
      id: appId
    });
  }
  if (!globalInitDone) {
    // Steps here should only be done once per page: creation or wrapping
    // of dataLayer and global gtag function.
    getOrCreateDataLayer(dataLayerName);
    var _wrapOrCreateGtag = wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagName),
      wrappedGtag = _wrapOrCreateGtag.wrappedGtag,
      gtagCore = _wrapOrCreateGtag.gtagCore;
    wrappedGtagFunction = wrappedGtag;
    gtagCoreFunction = gtagCore;
    globalInitDone = true;
  }
  // Async but non-blocking.
  // This map reflects the completion state of all promises for each appId.
  initializationPromisesMap[appId] = _initializeAnalytics(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCoreFunction, dataLayerName, options);
  var analyticsInstance = new AnalyticsService(app);
  return analyticsInstance;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Returns an {@link Analytics} instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */
function getAnalytics() {
  var app = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();
  app = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(app);
  // Dependencies
  var analyticsProvider = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, ANALYTICS_TYPE);
  if (analyticsProvider.isInitialized()) {
    return analyticsProvider.getImmediate();
  }
  return initializeAnalytics(app);
}
/**
 * Returns an {@link Analytics} instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */
function initializeAnalytics(app) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // Dependencies
  var analyticsProvider = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, ANALYTICS_TYPE);
  if (analyticsProvider.isInitialized()) {
    var existingInstance = analyticsProvider.getImmediate();
    if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(options, analyticsProvider.getOptions())) {
      return existingInstance;
    } else {
      throw ERROR_FACTORY.create("already-initialized" /* ALREADY_INITIALIZED */);
    }
  }

  var analyticsInstance = analyticsProvider.initialize({
    options: options
  });
  return analyticsInstance;
}
/**
 * This is a public static method provided to users that wraps four different checks:
 *
 * 1. Check if it's not a browser extension environment.
 * 2. Check if cookies are enabled in current browser.
 * 3. Check if IndexedDB is supported by the browser environment.
 * 4. Check if the current browser context is valid for using `IndexedDB.open()`.
 *
 * @public
 *
 */
function isSupported() {
  return _isSupported.apply(this, arguments);
}
/**
 * Use gtag `config` command to set `screen_name`.
 *
 * @public
 *
 * @deprecated Use {@link logEvent} with `eventName` as 'screen_view' and add relevant `eventParams`.
 * See {@link https://firebase.google.com/docs/analytics/screenviews | Track Screenviews}.
 *
 * @param analyticsInstance - The {@link Analytics} instance.
 * @param screenName - Screen name to set.
 */
function _isSupported() {
  _isSupported = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
    var isDBOpenable;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            if (!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.isBrowserExtension)()) {
              _context15.next = 2;
              break;
            }
            return _context15.abrupt("return", false);
          case 2:
            if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.areCookiesEnabled)()) {
              _context15.next = 4;
              break;
            }
            return _context15.abrupt("return", false);
          case 4:
            if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.isIndexedDBAvailable)()) {
              _context15.next = 6;
              break;
            }
            return _context15.abrupt("return", false);
          case 6:
            _context15.prev = 6;
            _context15.next = 9;
            return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.validateIndexedDBOpenable)();
          case 9:
            isDBOpenable = _context15.sent;
            return _context15.abrupt("return", isDBOpenable);
          case 13:
            _context15.prev = 13;
            _context15.t0 = _context15["catch"](6);
            return _context15.abrupt("return", false);
          case 16:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[6, 13]]);
  }));
  return _isSupported.apply(this, arguments);
}
function setCurrentScreen(analyticsInstance, screenName, options) {
  analyticsInstance = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(analyticsInstance);
  setCurrentScreen$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], screenName, options)["catch"](function (e) {
    return logger.error(e);
  });
}
/**
 * Use gtag `config` command to set `user_id`.
 *
 * @public
 *
 * @param analyticsInstance - The {@link Analytics} instance.
 * @param id - User ID to set.
 */
function setUserId(analyticsInstance, id, options) {
  analyticsInstance = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(analyticsInstance);
  setUserId$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], id, options)["catch"](function (e) {
    return logger.error(e);
  });
}
/**
 * Use gtag `config` command to set all params specified.
 *
 * @public
 */
function setUserProperties(analyticsInstance, properties, options) {
  analyticsInstance = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(analyticsInstance);
  setUserProperties$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], properties, options)["catch"](function (e) {
    return logger.error(e);
  });
}
/**
 * Sets whether Google Analytics collection is enabled for this app on this device.
 * Sets global `window['ga-disable-analyticsId'] = true;`
 *
 * @public
 *
 * @param analyticsInstance - The {@link Analytics} instance.
 * @param enabled - If true, enables collection, if false, disables it.
 */
function setAnalyticsCollectionEnabled(analyticsInstance, enabled) {
  analyticsInstance = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(analyticsInstance);
  setAnalyticsCollectionEnabled$1(initializationPromisesMap[analyticsInstance.app.options.appId], enabled)["catch"](function (e) {
    return logger.error(e);
  });
}
/**
 * Adds data that will be set on every event logged from the SDK, including automatic ones.
 * With gtag's "set" command, the values passed persist on the current page and are passed with
 * all subsequent events.
 * @public
 * @param customParams - Any custom params the user may pass to gtag.js.
 */
function setDefaultEventParameters(customParams) {
  // Check if reference to existing gtag function on window object exists
  if (wrappedGtagFunction) {
    wrappedGtagFunction("set" /* SET */, customParams);
  } else {
    _setDefaultEventParametersForInit(customParams);
  }
}
/**
 * Sends a Google Analytics event with given `eventParams`. This method
 * automatically associates this logged event with this Firebase web
 * app instance on this device.
 * List of official event parameters can be found in the gtag.js
 * reference documentation:
 * {@link https://developers.google.com/gtagjs/reference/ga4-events
 * | the GA4 reference documentation}.
 *
 * @public
 */
function _logEvent(analyticsInstance, eventName, eventParams, options) {
  analyticsInstance = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(analyticsInstance);
  logEvent$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], eventName, eventParams, options)["catch"](function (e) {
    return logger.error(e);
  });
}
/**
 * Sets the applicable end user consent state for this web app across all gtag references once
 * Firebase Analytics is initialized.
 *
 * Use the {@link ConsentSettings} to specify individual consent type values. By default consent
 * types are set to "granted".
 * @public
 * @param consentSettings - Maps the applicable end user consent state for gtag.js.
 */
function setConsent(consentSettings) {
  // Check if reference to existing gtag function on window object exists
  if (wrappedGtagFunction) {
    wrappedGtagFunction("consent" /* CONSENT */, 'update', consentSettings);
  } else {
    _setConsentDefaultForInit(consentSettings);
  }
}
var name = "@firebase/analytics";
var version = "0.8.4";

/**
 * Firebase Analytics
 *
 * @packageDocumentation
 */
function registerAnalytics() {
  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_3__.Component(ANALYTICS_TYPE, function (container, _ref2) {
    var analyticsOptions = _ref2.options;
    // getImmediate for FirebaseApp will always succeed
    var app = container.getProvider('app').getImmediate();
    var installations = container.getProvider('installations-internal').getImmediate();
    return factory(app, installations, analyticsOptions);
  }, "PUBLIC" /* PUBLIC */));
  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_3__.Component('analytics-internal', internalFactory, "PRIVATE" /* PRIVATE */));
  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version);
  // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version, 'esm2017');
  function internalFactory(container) {
    try {
      var analytics = container.getProvider(ANALYTICS_TYPE).getImmediate();
      return {
        logEvent: function logEvent(eventName, eventParams, options) {
          return _logEvent(analytics, eventName, eventParams, options);
        }
      };
    } catch (e) {
      throw ERROR_FACTORY.create("interop-component-reg-failed" /* INTEROP_COMPONENT_REG_FAILED */, {
        reason: e
      });
    }
  }
}
registerAnalytics();


/***/ }),
/* 11 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteInstallations": () => (/* binding */ deleteInstallations),
/* harmony export */   "getId": () => (/* binding */ _getId2),
/* harmony export */   "getInstallations": () => (/* binding */ getInstallations),
/* harmony export */   "getToken": () => (/* binding */ _getToken2),
/* harmony export */   "onIdChange": () => (/* binding */ onIdChange)
/* harmony export */ });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _ERROR_DESCRIPTION_MA;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var name = "@firebase/installations";
var version = "0.5.16";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PENDING_TIMEOUT_MS = 10000;
var PACKAGE_VERSION = "w:".concat(version);
var INTERNAL_AUTH_VERSION = 'FIS_v2';
var INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour
var SERVICE = 'installations';
var SERVICE_NAME = 'Installations';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_DESCRIPTION_MAP = (_ERROR_DESCRIPTION_MA = {}, _defineProperty(_ERROR_DESCRIPTION_MA, "missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */, 'Missing App configuration value: "{$valueName}"'), _defineProperty(_ERROR_DESCRIPTION_MA, "not-registered" /* NOT_REGISTERED */, 'Firebase Installation is not registered.'), _defineProperty(_ERROR_DESCRIPTION_MA, "installation-not-found" /* INSTALLATION_NOT_FOUND */, 'Firebase Installation not found.'), _defineProperty(_ERROR_DESCRIPTION_MA, "request-failed" /* REQUEST_FAILED */, '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'), _defineProperty(_ERROR_DESCRIPTION_MA, "app-offline" /* APP_OFFLINE */, 'Could not process request. Application offline.'), _defineProperty(_ERROR_DESCRIPTION_MA, "delete-pending-registration" /* DELETE_PENDING_REGISTRATION */, "Can't delete installation while there is a pending registration request."), _ERROR_DESCRIPTION_MA);
var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__.ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
/** Returns true if error is a FirebaseError that is based on an error from the server. */
function isServerError(error) {
  return error instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError && error.code.includes("request-failed" /* REQUEST_FAILED */);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getInstallationsEndpoint(_ref) {
  var projectId = _ref.projectId;
  return "".concat(INSTALLATIONS_API_URL, "/projects/").concat(projectId, "/installations");
}
function extractAuthTokenInfoFromResponse(response) {
  return {
    token: response.token,
    requestStatus: 2 /* COMPLETED */,
    expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
    creationTime: Date.now()
  };
}
function getErrorFromResponse(_x, _x2) {
  return _getErrorFromResponse.apply(this, arguments);
}
function _getErrorFromResponse() {
  _getErrorFromResponse = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(requestName, response) {
    var responseJson, errorData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return response.json();
          case 2:
            responseJson = _context.sent;
            errorData = responseJson.error;
            return _context.abrupt("return", ERROR_FACTORY.create("request-failed" /* REQUEST_FAILED */, {
              requestName: requestName,
              serverCode: errorData.code,
              serverMessage: errorData.message,
              serverStatus: errorData.status
            }));
          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getErrorFromResponse.apply(this, arguments);
}
function getHeaders(_ref2) {
  var apiKey = _ref2.apiKey;
  return new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-goog-api-key': apiKey
  });
}
function getHeadersWithAuth(appConfig, _ref3) {
  var refreshToken = _ref3.refreshToken;
  var headers = getHeaders(appConfig);
  headers.append('Authorization', getAuthorizationHeader(refreshToken));
  return headers;
}
/**
 * Calls the passed in fetch wrapper and returns the response.
 * If the returned response has a status of 5xx, re-runs the function once and
 * returns the response.
 */
function retryIfServerError(_x3) {
  return _retryIfServerError.apply(this, arguments);
}
function _retryIfServerError() {
  _retryIfServerError = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(fn) {
    var result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fn();
          case 2:
            result = _context2.sent;
            if (!(result.status >= 500 && result.status < 600)) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return", fn());
          case 5:
            return _context2.abrupt("return", result);
          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _retryIfServerError.apply(this, arguments);
}
function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
  // This works because the server will never respond with fractions of a second.
  return Number(responseExpiresIn.replace('s', '000'));
}
function getAuthorizationHeader(refreshToken) {
  return "".concat(INTERNAL_AUTH_VERSION, " ").concat(refreshToken);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createInstallationRequest(_x4, _x5) {
  return _createInstallationRequest.apply(this, arguments);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns a promise that resolves after given time passes. */
function _createInstallationRequest() {
  _createInstallationRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref4, _ref5) {
    var appConfig, heartbeatServiceProvider, fid, endpoint, headers, heartbeatService, heartbeatsHeader, body, request, response, responseValue, registeredInstallationEntry;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            appConfig = _ref4.appConfig, heartbeatServiceProvider = _ref4.heartbeatServiceProvider;
            fid = _ref5.fid;
            endpoint = getInstallationsEndpoint(appConfig);
            headers = getHeaders(appConfig); // If heartbeat service exists, add the heartbeat string to the header.
            heartbeatService = heartbeatServiceProvider.getImmediate({
              optional: true
            });
            if (!heartbeatService) {
              _context3.next = 10;
              break;
            }
            _context3.next = 8;
            return heartbeatService.getHeartbeatsHeader();
          case 8:
            heartbeatsHeader = _context3.sent;
            if (heartbeatsHeader) {
              headers.append('x-firebase-client', heartbeatsHeader);
            }
          case 10:
            body = {
              fid: fid,
              authVersion: INTERNAL_AUTH_VERSION,
              appId: appConfig.appId,
              sdkVersion: PACKAGE_VERSION
            };
            request = {
              method: 'POST',
              headers: headers,
              body: JSON.stringify(body)
            };
            _context3.next = 14;
            return retryIfServerError(function () {
              return fetch(endpoint, request);
            });
          case 14:
            response = _context3.sent;
            if (!response.ok) {
              _context3.next = 23;
              break;
            }
            _context3.next = 18;
            return response.json();
          case 18:
            responseValue = _context3.sent;
            registeredInstallationEntry = {
              fid: responseValue.fid || fid,
              registrationStatus: 2 /* COMPLETED */,
              refreshToken: responseValue.refreshToken,
              authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
            };
            return _context3.abrupt("return", registeredInstallationEntry);
          case 23:
            _context3.next = 25;
            return getErrorFromResponse('Create Installation', response);
          case 25:
            throw _context3.sent;
          case 26:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _createInstallationRequest.apply(this, arguments);
}
function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bufferToBase64UrlSafe(array) {
  var b64 = btoa(String.fromCharCode.apply(String, _toConsumableArray(array)));
  return b64.replace(/\+/g, '-').replace(/\//g, '_');
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
var INVALID_FID = '';
/**
 * Generates a new FID using random values from Web Crypto API.
 * Returns an empty string if FID generation fails for any reason.
 */
function generateFid() {
  try {
    // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
    // bytes. our implementation generates a 17 byte array instead.
    var fidByteArray = new Uint8Array(17);
    var crypto = self.crypto || self.msCrypto;
    crypto.getRandomValues(fidByteArray);
    // Replace the first 4 random bits with the constant FID header of 0b0111.
    fidByteArray[0] = 112 + fidByteArray[0] % 16;
    var fid = encode(fidByteArray);
    return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
  } catch (_a) {
    // FID generation errored
    return INVALID_FID;
  }
}
/** Converts a FID Uint8Array to a base64 string representation. */
function encode(fidByteArray) {
  var b64String = bufferToBase64UrlSafe(fidByteArray);
  // Remove the 23rd character that was added because of the extra 4 bits at the
  // end of our 17 byte array, and the '=' padding.
  return b64String.substr(0, 22);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns a string key that can be used to identify the app. */
function getKey(appConfig) {
  return "".concat(appConfig.appName, "!").concat(appConfig.appId);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fidChangeCallbacks = new Map();
/**
 * Calls the onIdChange callbacks with the new FID value, and broadcasts the
 * change to other tabs.
 */
function fidChanged(appConfig, fid) {
  var key = getKey(appConfig);
  callFidChangeCallbacks(key, fid);
  broadcastFidChange(key, fid);
}
function addCallback(appConfig, callback) {
  // Open the broadcast channel if it's not already open,
  // to be able to listen to change events from other tabs.
  getBroadcastChannel();
  var key = getKey(appConfig);
  var callbackSet = fidChangeCallbacks.get(key);
  if (!callbackSet) {
    callbackSet = new Set();
    fidChangeCallbacks.set(key, callbackSet);
  }
  callbackSet.add(callback);
}
function removeCallback(appConfig, callback) {
  var key = getKey(appConfig);
  var callbackSet = fidChangeCallbacks.get(key);
  if (!callbackSet) {
    return;
  }
  callbackSet["delete"](callback);
  if (callbackSet.size === 0) {
    fidChangeCallbacks["delete"](key);
  }
  // Close broadcast channel if there are no more callbacks.
  closeBroadcastChannel();
}
function callFidChangeCallbacks(key, fid) {
  var callbacks = fidChangeCallbacks.get(key);
  if (!callbacks) {
    return;
  }
  var _iterator = _createForOfIteratorHelper(callbacks),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var callback = _step.value;
      callback(fid);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function broadcastFidChange(key, fid) {
  var channel = getBroadcastChannel();
  if (channel) {
    channel.postMessage({
      key: key,
      fid: fid
    });
  }
  closeBroadcastChannel();
}
var broadcastChannel = null;
/** Opens and returns a BroadcastChannel if it is supported by the browser. */
function getBroadcastChannel() {
  if (!broadcastChannel && 'BroadcastChannel' in self) {
    broadcastChannel = new BroadcastChannel('[Firebase] FID Change');
    broadcastChannel.onmessage = function (e) {
      callFidChangeCallbacks(e.data.key, e.data.fid);
    };
  }
  return broadcastChannel;
}
function closeBroadcastChannel() {
  if (fidChangeCallbacks.size === 0 && broadcastChannel) {
    broadcastChannel.close();
    broadcastChannel = null;
  }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DATABASE_NAME = 'firebase-installations-database';
var DATABASE_VERSION = 1;
var OBJECT_STORE_NAME = 'firebase-installations-store';
var dbPromise = null;
function getDbPromise() {
  if (!dbPromise) {
    dbPromise = (0,idb__WEBPACK_IMPORTED_MODULE_3__.openDB)(DATABASE_NAME, DATABASE_VERSION, {
      upgrade: function upgrade(db, oldVersion) {
        // We don't use 'break' in this switch statement, the fall-through
        // behavior is what we want, because if there are multiple versions between
        // the old version and the current version, we want ALL the migrations
        // that correspond to those versions to run, not only the last one.
        // eslint-disable-next-line default-case
        switch (oldVersion) {
          case 0:
            db.createObjectStore(OBJECT_STORE_NAME);
        }
      }
    });
  }
  return dbPromise;
}
/** Assigns or overwrites the record for the given key with the given value. */
function set(_x6, _x7) {
  return _set.apply(this, arguments);
}
/** Removes record(s) from the objectStore that match the given key. */
function _set() {
  _set = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(appConfig, value) {
    var key, db, tx, objectStore, oldValue;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            key = getKey(appConfig);
            _context4.next = 3;
            return getDbPromise();
          case 3:
            db = _context4.sent;
            tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
            objectStore = tx.objectStore(OBJECT_STORE_NAME);
            _context4.next = 8;
            return objectStore.get(key);
          case 8:
            oldValue = _context4.sent;
            _context4.next = 11;
            return objectStore.put(value, key);
          case 11:
            _context4.next = 13;
            return tx.done;
          case 13:
            if (!oldValue || oldValue.fid !== value.fid) {
              fidChanged(appConfig, value.fid);
            }
            return _context4.abrupt("return", value);
          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _set.apply(this, arguments);
}
function remove(_x8) {
  return _remove.apply(this, arguments);
}
/**
 * Atomically updates a record with the result of updateFn, which gets
 * called with the current value. If newValue is undefined, the record is
 * deleted instead.
 * @return Updated value
 */
function _remove() {
  _remove = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(appConfig) {
    var key, db, tx;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            key = getKey(appConfig);
            _context5.next = 3;
            return getDbPromise();
          case 3:
            db = _context5.sent;
            tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
            _context5.next = 7;
            return tx.objectStore(OBJECT_STORE_NAME)["delete"](key);
          case 7:
            _context5.next = 9;
            return tx.done;
          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _remove.apply(this, arguments);
}
function update(_x9, _x10) {
  return _update.apply(this, arguments);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Updates and returns the InstallationEntry from the database.
 * Also triggers a registration request if it is necessary and possible.
 */
function _update() {
  _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(appConfig, updateFn) {
    var key, db, tx, store, oldValue, newValue;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            key = getKey(appConfig);
            _context6.next = 3;
            return getDbPromise();
          case 3:
            db = _context6.sent;
            tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
            store = tx.objectStore(OBJECT_STORE_NAME);
            _context6.next = 8;
            return store.get(key);
          case 8:
            oldValue = _context6.sent;
            newValue = updateFn(oldValue);
            if (!(newValue === undefined)) {
              _context6.next = 15;
              break;
            }
            _context6.next = 13;
            return store["delete"](key);
          case 13:
            _context6.next = 17;
            break;
          case 15:
            _context6.next = 17;
            return store.put(newValue, key);
          case 17:
            _context6.next = 19;
            return tx.done;
          case 19:
            if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
              fidChanged(appConfig, newValue.fid);
            }
            return _context6.abrupt("return", newValue);
          case 21:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _update.apply(this, arguments);
}
function getInstallationEntry(_x11) {
  return _getInstallationEntry.apply(this, arguments);
}
/**
 * Creates a new Installation Entry if one does not exist.
 * Also clears timed out pending requests.
 */
function _getInstallationEntry() {
  _getInstallationEntry = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(installations) {
    var registrationPromise, installationEntry;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return update(installations.appConfig, function (oldEntry) {
              var installationEntry = updateOrCreateInstallationEntry(oldEntry);
              var entryWithPromise = triggerRegistrationIfNecessary(installations, installationEntry);
              registrationPromise = entryWithPromise.registrationPromise;
              return entryWithPromise.installationEntry;
            });
          case 2:
            installationEntry = _context7.sent;
            if (!(installationEntry.fid === INVALID_FID)) {
              _context7.next = 8;
              break;
            }
            _context7.next = 6;
            return registrationPromise;
          case 6:
            _context7.t0 = _context7.sent;
            return _context7.abrupt("return", {
              installationEntry: _context7.t0
            });
          case 8:
            return _context7.abrupt("return", {
              installationEntry: installationEntry,
              registrationPromise: registrationPromise
            });
          case 9:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _getInstallationEntry.apply(this, arguments);
}
function updateOrCreateInstallationEntry(oldEntry) {
  var entry = oldEntry || {
    fid: generateFid(),
    registrationStatus: 0 /* NOT_STARTED */
  };

  return clearTimedOutRequest(entry);
}
/**
 * If the Firebase Installation is not registered yet, this will trigger the
 * registration and return an InProgressInstallationEntry.
 *
 * If registrationPromise does not exist, the installationEntry is guaranteed
 * to be registered.
 */
function triggerRegistrationIfNecessary(installations, installationEntry) {
  if (installationEntry.registrationStatus === 0 /* NOT_STARTED */) {
    if (!navigator.onLine) {
      // Registration required but app is offline.
      var registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline" /* APP_OFFLINE */));
      return {
        installationEntry: installationEntry,
        registrationPromise: registrationPromiseWithError
      };
    }
    // Try registering. Change status to IN_PROGRESS.
    var inProgressEntry = {
      fid: installationEntry.fid,
      registrationStatus: 1 /* IN_PROGRESS */,
      registrationTime: Date.now()
    };
    var registrationPromise = registerInstallation(installations, inProgressEntry);
    return {
      installationEntry: inProgressEntry,
      registrationPromise: registrationPromise
    };
  } else if (installationEntry.registrationStatus === 1 /* IN_PROGRESS */) {
    return {
      installationEntry: installationEntry,
      registrationPromise: waitUntilFidRegistration(installations)
    };
  } else {
    return {
      installationEntry: installationEntry
    };
  }
}
/** This will be executed only once for each new Firebase Installation. */
function registerInstallation(_x12, _x13) {
  return _registerInstallation.apply(this, arguments);
}
/** Call if FID registration is pending in another request. */
function _registerInstallation() {
  _registerInstallation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(installations, installationEntry) {
    var registeredInstallationEntry;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return createInstallationRequest(installations, installationEntry);
          case 3:
            registeredInstallationEntry = _context8.sent;
            return _context8.abrupt("return", set(installations.appConfig, registeredInstallationEntry));
          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](0);
            if (!(isServerError(_context8.t0) && _context8.t0.customData.serverCode === 409)) {
              _context8.next = 14;
              break;
            }
            _context8.next = 12;
            return remove(installations.appConfig);
          case 12:
            _context8.next = 16;
            break;
          case 14:
            _context8.next = 16;
            return set(installations.appConfig, {
              fid: installationEntry.fid,
              registrationStatus: 0 /* NOT_STARTED */
            });
          case 16:
            throw _context8.t0;
          case 17:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 7]]);
  }));
  return _registerInstallation.apply(this, arguments);
}
function waitUntilFidRegistration(_x14) {
  return _waitUntilFidRegistration.apply(this, arguments);
}
/**
 * Called only if there is a CreateInstallation request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * CreateInstallation request.
 *
 * Returns the updated InstallationEntry.
 */
function _waitUntilFidRegistration() {
  _waitUntilFidRegistration = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(installations) {
    var entry, _yield$getInstallatio, installationEntry, registrationPromise;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return updateInstallationRequest(installations.appConfig);
          case 2:
            entry = _context9.sent;
          case 3:
            if (!(entry.registrationStatus === 1 /* IN_PROGRESS */)) {
              _context9.next = 11;
              break;
            }
            _context9.next = 6;
            return sleep(100);
          case 6:
            _context9.next = 8;
            return updateInstallationRequest(installations.appConfig);
          case 8:
            entry = _context9.sent;
            _context9.next = 3;
            break;
          case 11:
            if (!(entry.registrationStatus === 0 /* NOT_STARTED */)) {
              _context9.next = 22;
              break;
            }
            _context9.next = 14;
            return getInstallationEntry(installations);
          case 14:
            _yield$getInstallatio = _context9.sent;
            installationEntry = _yield$getInstallatio.installationEntry;
            registrationPromise = _yield$getInstallatio.registrationPromise;
            if (!registrationPromise) {
              _context9.next = 21;
              break;
            }
            return _context9.abrupt("return", registrationPromise);
          case 21:
            return _context9.abrupt("return", installationEntry);
          case 22:
            return _context9.abrupt("return", entry);
          case 23:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _waitUntilFidRegistration.apply(this, arguments);
}
function updateInstallationRequest(appConfig) {
  return update(appConfig, function (oldEntry) {
    if (!oldEntry) {
      throw ERROR_FACTORY.create("installation-not-found" /* INSTALLATION_NOT_FOUND */);
    }

    return clearTimedOutRequest(oldEntry);
  });
}
function clearTimedOutRequest(entry) {
  if (hasInstallationRequestTimedOut(entry)) {
    return {
      fid: entry.fid,
      registrationStatus: 0 /* NOT_STARTED */
    };
  }

  return entry;
}
function hasInstallationRequestTimedOut(installationEntry) {
  return installationEntry.registrationStatus === 1 /* IN_PROGRESS */ && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function generateAuthTokenRequest(_x15, _x16) {
  return _generateAuthTokenRequest.apply(this, arguments);
}
function _generateAuthTokenRequest() {
  _generateAuthTokenRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(_ref6, installationEntry) {
    var appConfig, heartbeatServiceProvider, endpoint, headers, heartbeatService, heartbeatsHeader, body, request, response, responseValue, completedAuthToken;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            appConfig = _ref6.appConfig, heartbeatServiceProvider = _ref6.heartbeatServiceProvider;
            endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
            headers = getHeadersWithAuth(appConfig, installationEntry); // If heartbeat service exists, add the heartbeat string to the header.
            heartbeatService = heartbeatServiceProvider.getImmediate({
              optional: true
            });
            if (!heartbeatService) {
              _context10.next = 9;
              break;
            }
            _context10.next = 7;
            return heartbeatService.getHeartbeatsHeader();
          case 7:
            heartbeatsHeader = _context10.sent;
            if (heartbeatsHeader) {
              headers.append('x-firebase-client', heartbeatsHeader);
            }
          case 9:
            body = {
              installation: {
                sdkVersion: PACKAGE_VERSION,
                appId: appConfig.appId
              }
            };
            request = {
              method: 'POST',
              headers: headers,
              body: JSON.stringify(body)
            };
            _context10.next = 13;
            return retryIfServerError(function () {
              return fetch(endpoint, request);
            });
          case 13:
            response = _context10.sent;
            if (!response.ok) {
              _context10.next = 22;
              break;
            }
            _context10.next = 17;
            return response.json();
          case 17:
            responseValue = _context10.sent;
            completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
            return _context10.abrupt("return", completedAuthToken);
          case 22:
            _context10.next = 24;
            return getErrorFromResponse('Generate Auth Token', response);
          case 24:
            throw _context10.sent;
          case 25:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _generateAuthTokenRequest.apply(this, arguments);
}
function getGenerateAuthTokenEndpoint(appConfig, _ref7) {
  var fid = _ref7.fid;
  return "".concat(getInstallationsEndpoint(appConfig), "/").concat(fid, "/authTokens:generate");
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a valid authentication token for the installation. Generates a new
 * token if one doesn't exist, is expired or about to expire.
 *
 * Should only be called if the Firebase Installation is registered.
 */
function refreshAuthToken(_x17) {
  return _refreshAuthToken.apply(this, arguments);
}
/**
 * Call only if FID is registered and Auth Token request is in progress.
 *
 * Waits until the current pending request finishes. If the request times out,
 * tries once in this thread as well.
 */
function _refreshAuthToken() {
  _refreshAuthToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(installations) {
    var forceRefresh,
      tokenPromise,
      entry,
      authToken,
      _args11 = arguments;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            forceRefresh = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : false;
            _context11.next = 3;
            return update(installations.appConfig, function (oldEntry) {
              if (!isEntryRegistered(oldEntry)) {
                throw ERROR_FACTORY.create("not-registered" /* NOT_REGISTERED */);
              }

              var oldAuthToken = oldEntry.authToken;
              if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
                // There is a valid token in the DB.
                return oldEntry;
              } else if (oldAuthToken.requestStatus === 1 /* IN_PROGRESS */) {
                // There already is a token request in progress.
                tokenPromise = waitUntilAuthTokenRequest(installations, forceRefresh);
                return oldEntry;
              } else {
                // No token or token expired.
                if (!navigator.onLine) {
                  throw ERROR_FACTORY.create("app-offline" /* APP_OFFLINE */);
                }

                var inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
                tokenPromise = fetchAuthTokenFromServer(installations, inProgressEntry);
                return inProgressEntry;
              }
            });
          case 3:
            entry = _context11.sent;
            if (!tokenPromise) {
              _context11.next = 10;
              break;
            }
            _context11.next = 7;
            return tokenPromise;
          case 7:
            _context11.t0 = _context11.sent;
            _context11.next = 11;
            break;
          case 10:
            _context11.t0 = entry.authToken;
          case 11:
            authToken = _context11.t0;
            return _context11.abrupt("return", authToken);
          case 13:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _refreshAuthToken.apply(this, arguments);
}
function waitUntilAuthTokenRequest(_x18, _x19) {
  return _waitUntilAuthTokenRequest.apply(this, arguments);
}
/**
 * Called only if there is a GenerateAuthToken request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * GenerateAuthToken request.
 *
 * Returns the updated InstallationEntry.
 */
function _waitUntilAuthTokenRequest() {
  _waitUntilAuthTokenRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(installations, forceRefresh) {
    var entry, authToken;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return updateAuthTokenRequest(installations.appConfig);
          case 2:
            entry = _context12.sent;
          case 3:
            if (!(entry.authToken.requestStatus === 1 /* IN_PROGRESS */)) {
              _context12.next = 11;
              break;
            }
            _context12.next = 6;
            return sleep(100);
          case 6:
            _context12.next = 8;
            return updateAuthTokenRequest(installations.appConfig);
          case 8:
            entry = _context12.sent;
            _context12.next = 3;
            break;
          case 11:
            authToken = entry.authToken;
            if (!(authToken.requestStatus === 0 /* NOT_STARTED */)) {
              _context12.next = 16;
              break;
            }
            return _context12.abrupt("return", refreshAuthToken(installations, forceRefresh));
          case 16:
            return _context12.abrupt("return", authToken);
          case 17:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _waitUntilAuthTokenRequest.apply(this, arguments);
}
function updateAuthTokenRequest(appConfig) {
  return update(appConfig, function (oldEntry) {
    if (!isEntryRegistered(oldEntry)) {
      throw ERROR_FACTORY.create("not-registered" /* NOT_REGISTERED */);
    }

    var oldAuthToken = oldEntry.authToken;
    if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
      return Object.assign(Object.assign({}, oldEntry), {
        authToken: {
          requestStatus: 0 /* NOT_STARTED */
        }
      });
    }

    return oldEntry;
  });
}
function fetchAuthTokenFromServer(_x20, _x21) {
  return _fetchAuthTokenFromServer.apply(this, arguments);
}
function _fetchAuthTokenFromServer() {
  _fetchAuthTokenFromServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(installations, installationEntry) {
    var authToken, updatedInstallationEntry, _updatedInstallationEntry;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return generateAuthTokenRequest(installations, installationEntry);
          case 3:
            authToken = _context13.sent;
            updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), {
              authToken: authToken
            });
            _context13.next = 7;
            return set(installations.appConfig, updatedInstallationEntry);
          case 7:
            return _context13.abrupt("return", authToken);
          case 10:
            _context13.prev = 10;
            _context13.t0 = _context13["catch"](0);
            if (!(isServerError(_context13.t0) && (_context13.t0.customData.serverCode === 401 || _context13.t0.customData.serverCode === 404))) {
              _context13.next = 17;
              break;
            }
            _context13.next = 15;
            return remove(installations.appConfig);
          case 15:
            _context13.next = 20;
            break;
          case 17:
            _updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), {
              authToken: {
                requestStatus: 0 /* NOT_STARTED */
              }
            });
            _context13.next = 20;
            return set(installations.appConfig, _updatedInstallationEntry);
          case 20:
            throw _context13.t0;
          case 21:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[0, 10]]);
  }));
  return _fetchAuthTokenFromServer.apply(this, arguments);
}
function isEntryRegistered(installationEntry) {
  return installationEntry !== undefined && installationEntry.registrationStatus === 2 /* COMPLETED */;
}

function isAuthTokenValid(authToken) {
  return authToken.requestStatus === 2 /* COMPLETED */ && !isAuthTokenExpired(authToken);
}
function isAuthTokenExpired(authToken) {
  var now = Date.now();
  return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
}
/** Returns an updated InstallationEntry with an InProgressAuthToken. */
function makeAuthTokenRequestInProgressEntry(oldEntry) {
  var inProgressAuthToken = {
    requestStatus: 1 /* IN_PROGRESS */,
    requestTime: Date.now()
  };
  return Object.assign(Object.assign({}, oldEntry), {
    authToken: inProgressAuthToken
  });
}
function hasAuthTokenRequestTimedOut(authToken) {
  return authToken.requestStatus === 1 /* IN_PROGRESS */ && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Creates a Firebase Installation if there isn't one for the app and
 * returns the Installation ID.
 * @param installations - The `Installations` instance.
 *
 * @public
 */
function _getId2(_x22) {
  return _getId.apply(this, arguments);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a Firebase Installations auth token, identifying the current
 * Firebase Installation.
 * @param installations - The `Installations` instance.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */
function _getId() {
  _getId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(installations) {
    var installationsImpl, _yield$getInstallatio2, installationEntry, registrationPromise;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            installationsImpl = installations;
            _context14.next = 3;
            return getInstallationEntry(installationsImpl);
          case 3:
            _yield$getInstallatio2 = _context14.sent;
            installationEntry = _yield$getInstallatio2.installationEntry;
            registrationPromise = _yield$getInstallatio2.registrationPromise;
            if (registrationPromise) {
              registrationPromise["catch"](console.error);
            } else {
              // If the installation is already registered, update the authentication
              // token if needed.
              refreshAuthToken(installationsImpl)["catch"](console.error);
            }
            return _context14.abrupt("return", installationEntry.fid);
          case 8:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return _getId.apply(this, arguments);
}
function _getToken2(_x23) {
  return _getToken.apply(this, arguments);
}
function _getToken() {
  _getToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(installations) {
    var forceRefresh,
      installationsImpl,
      authToken,
      _args15 = arguments;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            forceRefresh = _args15.length > 1 && _args15[1] !== undefined ? _args15[1] : false;
            installationsImpl = installations;
            _context15.next = 4;
            return completeInstallationRegistration(installationsImpl);
          case 4:
            _context15.next = 6;
            return refreshAuthToken(installationsImpl, forceRefresh);
          case 6:
            authToken = _context15.sent;
            return _context15.abrupt("return", authToken.token);
          case 8:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));
  return _getToken.apply(this, arguments);
}
function completeInstallationRegistration(_x24) {
  return _completeInstallationRegistration.apply(this, arguments);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _completeInstallationRegistration() {
  _completeInstallationRegistration = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(installations) {
    var _yield$getInstallatio3, registrationPromise;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return getInstallationEntry(installations);
          case 2:
            _yield$getInstallatio3 = _context16.sent;
            registrationPromise = _yield$getInstallatio3.registrationPromise;
            if (!registrationPromise) {
              _context16.next = 7;
              break;
            }
            _context16.next = 7;
            return registrationPromise;
          case 7:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));
  return _completeInstallationRegistration.apply(this, arguments);
}
function deleteInstallationRequest(_x25, _x26) {
  return _deleteInstallationRequest.apply(this, arguments);
}
function _deleteInstallationRequest() {
  _deleteInstallationRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(appConfig, installationEntry) {
    var endpoint, headers, request, response;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            endpoint = getDeleteEndpoint(appConfig, installationEntry);
            headers = getHeadersWithAuth(appConfig, installationEntry);
            request = {
              method: 'DELETE',
              headers: headers
            };
            _context17.next = 5;
            return retryIfServerError(function () {
              return fetch(endpoint, request);
            });
          case 5:
            response = _context17.sent;
            if (response.ok) {
              _context17.next = 10;
              break;
            }
            _context17.next = 9;
            return getErrorFromResponse('Delete Installation', response);
          case 9:
            throw _context17.sent;
          case 10:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));
  return _deleteInstallationRequest.apply(this, arguments);
}
function getDeleteEndpoint(appConfig, _ref8) {
  var fid = _ref8.fid;
  return "".concat(getInstallationsEndpoint(appConfig), "/").concat(fid);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Deletes the Firebase Installation and all associated data.
 * @param installations - The `Installations` instance.
 *
 * @public
 */
function deleteInstallations(_x27) {
  return _deleteInstallations.apply(this, arguments);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Sets a new callback that will get called when Installation ID changes.
 * Returns an unsubscribe function that will remove the callback when called.
 * @param installations - The `Installations` instance.
 * @param callback - The callback function that is invoked when FID changes.
 * @returns A function that can be called to unsubscribe.
 *
 * @public
 */
function _deleteInstallations() {
  _deleteInstallations = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(installations) {
    var appConfig, entry;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            appConfig = installations.appConfig;
            _context18.next = 3;
            return update(appConfig, function (oldEntry) {
              if (oldEntry && oldEntry.registrationStatus === 0 /* NOT_STARTED */) {
                // Delete the unregistered entry without sending a deleteInstallation request.
                return undefined;
              }
              return oldEntry;
            });
          case 3:
            entry = _context18.sent;
            if (!entry) {
              _context18.next = 18;
              break;
            }
            if (!(entry.registrationStatus === 1 /* IN_PROGRESS */)) {
              _context18.next = 9;
              break;
            }
            throw ERROR_FACTORY.create("delete-pending-registration" /* DELETE_PENDING_REGISTRATION */);
          case 9:
            if (!(entry.registrationStatus === 2 /* COMPLETED */)) {
              _context18.next = 18;
              break;
            }
            if (navigator.onLine) {
              _context18.next = 14;
              break;
            }
            throw ERROR_FACTORY.create("app-offline" /* APP_OFFLINE */);
          case 14:
            _context18.next = 16;
            return deleteInstallationRequest(appConfig, entry);
          case 16:
            _context18.next = 18;
            return remove(appConfig);
          case 18:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));
  return _deleteInstallations.apply(this, arguments);
}
function onIdChange(installations, callback) {
  var appConfig = installations.appConfig;
  addCallback(appConfig, callback);
  return function () {
    removeCallback(appConfig, callback);
  };
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns an instance of {@link Installations} associated with the given
 * {@link @firebase/app#FirebaseApp} instance.
 * @param app - The {@link @firebase/app#FirebaseApp} instance.
 *
 * @public
 */
function getInstallations() {
  var app = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();
  var installationsImpl = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, 'installations').getImmediate();
  return installationsImpl;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function extractAppConfig(app) {
  if (!app || !app.options) {
    throw getMissingValueError('App Configuration');
  }
  if (!app.name) {
    throw getMissingValueError('App Name');
  }
  // Required app config keys
  var configKeys = ['projectId', 'apiKey', 'appId'];
  for (var _i = 0, _configKeys = configKeys; _i < _configKeys.length; _i++) {
    var keyName = _configKeys[_i];
    if (!app.options[keyName]) {
      throw getMissingValueError(keyName);
    }
  }
  return {
    appName: app.name,
    projectId: app.options.projectId,
    apiKey: app.options.apiKey,
    appId: app.options.appId
  };
}
function getMissingValueError(valueName) {
  return ERROR_FACTORY.create("missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */, {
    valueName: valueName
  });
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var INSTALLATIONS_NAME = 'installations';
var INSTALLATIONS_NAME_INTERNAL = 'installations-internal';
var publicFactory = function publicFactory(container) {
  var app = container.getProvider('app').getImmediate();
  // Throws if app isn't configured properly.
  var appConfig = extractAppConfig(app);
  var heartbeatServiceProvider = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, 'heartbeat');
  var installationsImpl = {
    app: app,
    appConfig: appConfig,
    heartbeatServiceProvider: heartbeatServiceProvider,
    _delete: function _delete() {
      return Promise.resolve();
    }
  };
  return installationsImpl;
};
var internalFactory = function internalFactory(container) {
  var app = container.getProvider('app').getImmediate();
  // Internal FIS instance relies on public FIS instance.
  var installations = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, INSTALLATIONS_NAME).getImmediate();
  var installationsInternal = {
    getId: function getId() {
      return _getId2(installations);
    },
    getToken: function getToken(forceRefresh) {
      return _getToken2(installations, forceRefresh);
    }
  };
  return installationsInternal;
};
function registerInstallations() {
  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component(INSTALLATIONS_NAME, publicFactory, "PUBLIC" /* PUBLIC */));
  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component(INSTALLATIONS_NAME_INTERNAL, internalFactory, "PRIVATE" /* PRIVATE */));
}

/**
 * Firebase Installations
 *
 * @packageDocumentation
 */
registerInstallations();
(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version);
// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version, 'esm2017');


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);


console.log("room.js");


var app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
var analytics = (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.getAnalytics)(app);

// const dotenv = require('dotenv');
// dotenv.config();
// const env = process.env;
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// const firebaseConfig = env.FIREBASE_CONFIG;
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = firebase.database();

// const r =  db.ref("A-key").push();
// r.set("key-a");

// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// const db = firebase.database();
})();

/******/ })()
;