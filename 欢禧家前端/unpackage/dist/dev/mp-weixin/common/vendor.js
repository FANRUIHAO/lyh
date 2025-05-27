(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectKeys = ['qy', 'env', 'error', 'version', 'lanDebug', 'cloud', 'serviceMarket', 'router', 'worklet', '__webpack_require_UNI_MP_PLUGIN__'];
var singlePageDisableKey = ['lanDebug', 'router', 'worklet'];
var target = typeof globalThis !== 'undefined' ? globalThis : function () {
  return this;
}();
var key = ['w', 'x'].join('');
var oldWx = target[key];
var launchOption = oldWx.getLaunchOptionsSync ? oldWx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof oldWx[key] === 'function';
}
function initWx() {
  var newWx = {};
  for (var _key in oldWx) {
    if (isWxKey(_key)) {
      // TODO wrapper function
      newWx[_key] = oldWx[_key];
    }
  }
  return newWx;
}
target[key] = initWx();
var _default = target[key];
exports.default = _default;

/***/ }),

/***/ 10:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 100:
/*!***********************************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/components/mescroll-uni/mescroll-uni-option.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 全局配置
// mescroll-body 和 mescroll-uni 通用
var GlobalOption = {
  down: {
    // 其他down的配置参数也可以写,这里只展示了常用的配置:
    textInOffset: '下拉刷新',
    // 下拉的距离在offset范围内的提示文本
    textOutOffset: '释放更新',
    // 下拉的距离大于offset范围的提示文本
    textLoading: '加载中 ...',
    // 加载中的提示文本
    offset: 80,
    // 在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调
    native: false // 是否使用系统自带的下拉刷新; 默认false; 仅在mescroll-body生效 (值为true时,还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)
  },

  up: {
    // 其他up的配置参数也可以写,这里只展示了常用的配置:
    textLoading: '加载中 ...',
    // 加载中的提示文本
    textNoMore: '-- END --',
    // 没有更多数据的提示文本
    offset: 80,
    // 距底部多远时,触发upCallback
    isBounce: false,
    // 默认禁止橡皮筋的回弹效果, 必读事项: http://www.mescroll.com/qa.html?v=190725#q25
    toTop: {
      // 回到顶部按钮,需配置src才显示
      src: "http://www.mescroll.com/img/mescroll-totop.png?v=1",
      // 图片路径 (建议放入static目录, 如 /static/img/mescroll-totop.png )
      offset: 1000,
      // 列表滚动多少距离才显示回到顶部按钮,默认1000px
      right: 20,
      // 到右边的距离, 默认20 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
      bottom: 120,
      // 到底部的距离, 默认120 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
      width: 72 // 回到顶部图标的宽度, 默认72 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
    },

    empty: {
      use: true,
      // 是否显示空布局
      icon: "http://www.mescroll.com/img/mescroll-empty.png?v=1",
      // 图标路径 (建议放入static目录, 如 /static/img/mescroll-empty.png )
      tip: '~ 暂无数据 ~' // 提示
    }
  }
};
var _default = GlobalOption;
exports.default = _default;

/***/ }),

/***/ 103:
/*!*******************************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/components/mescroll-uni/mescroll-mixins.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// mescroll-body 和 mescroll-uni 通用

// import MescrollUni from "./mescroll-uni.vue";
// import MescrollBody from "./mescroll-body.vue";

var MescrollMixin = {
  // components: { // 非H5端无法通过mixin注册组件, 只能在main.js中注册全局组件或具体界面中注册
  // 	MescrollUni,
  // 	MescrollBody
  // },
  data: function data() {
    return {
      mescroll: null //mescroll实例对象
    };
  },
  // 注册系统自带的下拉刷新 (配置down.native为true时生效, 还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)
  onPullDownRefresh: function onPullDownRefresh() {
    this.mescroll && this.mescroll.onPullDownRefresh();
  },
  // 注册列表滚动事件,用于判定在顶部可下拉刷新,在指定位置可显示隐藏回到顶部按钮 (此方法为页面生命周期,无法在子组件中触发, 仅在mescroll-body生效)
  onPageScroll: function onPageScroll(e) {
    this.mescroll && this.mescroll.onPageScroll(e);
  },
  // 注册滚动到底部的事件,用于上拉加载 (此方法为页面生命周期,无法在子组件中触发, 仅在mescroll-body生效)
  onReachBottom: function onReachBottom() {
    this.mescroll && this.mescroll.onReachBottom();
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit: function mescrollInit(mescroll) {
      this.mescroll = mescroll;
      this.mescrollInitByRef(); // 兼容字节跳动小程序
    },
    // 以ref的方式初始化mescroll对象 (兼容字节跳动小程序: http://www.mescroll.com/qa.html?v=20200107#q26)
    mescrollInitByRef: function mescrollInitByRef() {
      if (!this.mescroll || !this.mescroll.resetUpScroll) {
        var mescrollRef = this.$refs.mescrollRef;
        if (mescrollRef) this.mescroll = mescrollRef.mescroll;
      }
    },
    // 下拉刷新的回调
    downCallback: function downCallback() {
      // mixin默认resetUpScroll
      this.mescroll.resetUpScroll();
    },
    // 上拉加载的回调
    upCallback: function upCallback() {
      var _this = this;
      // mixin默认延时500自动结束加载
      setTimeout(function () {
        _this.mescroll.endErr();
      }, 500);
    }
  },
  mounted: function mounted() {
    this.mescrollInitByRef(); // 兼容字节跳动小程序, 避免未设置@init或@init此时未能取到ref的情况
  }
};
var _default = MescrollMixin;
exports.default = _default;

/***/ }),

/***/ 11:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 12:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 14);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 13:
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 14:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 15:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 17);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 17:
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 19);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 20);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 21);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 19:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;
exports.createComponent = createComponent;
exports.createPage = createPage;
exports.createPlugin = createPlugin;
exports.createSubpackageApp = createSubpackageApp;
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ 15));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 22);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var realAtob;
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;
    var result = '';
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo = getCurrentUserInfo(),
      role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 = getCurrentUserInfo(),
      permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 = getCurrentUserInfo(),
      tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isStr(str) {
  return typeof str === 'string';
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}
function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}
function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}
function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}
function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}
function wrapperHook(hook, params) {
  return function (data) {
    return hook(data, params) || data;
  };
}
function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function queue(hooks, data, params) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      var res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}
function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res, options).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        // 重新访问 getApiInterceptorHooks, 允许 invoke 中再次调用 addInterceptor,removeInterceptor
        return api.apply(void 0, [wrapperOptions(getApiInterceptorHooks(method), options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}
var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  }
};
var SYNC_API_RE = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/;
var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];
var CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}
function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
function promisify(name, api) {
  if (!shouldPromise(name) || !isFn(api)) {
    return api;
  }
  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}
var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;
function checkDeviceWidth() {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
    platform = _wx$getSystemInfoSync.platform,
    pixelRatio = _wx$getSystemInfoSync.pixelRatio,
    windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}
function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var messages = {};
var locale;
{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}
initI18nMessages();
var i18n = (0, _uniI18n.initVueI18n)(locale, {});
var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    }
  }
};
var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;
function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale()
  });
  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {
        return watch(v);
      });
    }
  });
}
function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  if (isFn(getApp)) {
    var app = getApp({
      allowDefault: true
    });
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function setLocale$1(locale) {
  var app = isFn(getApp) ? getApp() : false;
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {
      return fn({
        locale: locale
      });
    });
    return true;
  }
  return false;
}
var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}
if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}
var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}
var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  }
};
var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(function (item, index) {
        return index < currentIndex ? item !== urls[currentIndex] : true;
      });
    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId
    });
  }
  result.deviceId = deviceId;
}
function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(result) {
  var _result$brand = result.brand,
    brand = _result$brand === void 0 ? '' : _result$brand,
    _result$model = result.model,
    model = _result$model === void 0 ? '' : _result$model,
    _result$system = result.system,
    system = _result$system === void 0 ? '' : _result$system,
    _result$language = result.language,
    language = _result$language === void 0 ? '' : _result$language,
    theme = result.theme,
    version = result.version,
    platform = result.platform,
    fontSizeSetting = result.fontSizeSetting,
    SDKVersion = result.SDKVersion,
    pixelRatio = result.pixelRatio,
    deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  var extraParam = {};

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__8FD5608",
    appName: "仁寿小圈子",
    appVersion: "1.2.1",
    appVersionCode: "121",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.8.12",
    uniRuntimeVersion: "3.8.12",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined
  };
  Object.assign(result, parameters, extraParam);
}
function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc'
    };
    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }
  return _hostName;
}
var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  }
};
var showActionSheet = {
  args: function args(fromArgs) {
    if ((0, _typeof2.default)(fromArgs) === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  }
};
var getAppBaseInfo = {
  returnValue: function returnValue(result) {
    var _result = result,
      version = _result.version,
      language = _result.language,
      SDKVersion = _result.SDKVersion,
      theme = _result.theme;
    var _hostName = getHostName(result);
    var hostLanguage = language.replace('_', '-');
    result = sortObject(Object.assign(result, {
      appId: "__UNI__8FD5608",
      appName: "仁寿小圈子",
      appVersion: "1.2.1",
      appVersionCode: "121",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme
    }));
  }
};
var getDeviceInfo = {
  returnValue: function returnValue(result) {
    var _result2 = result,
      brand = _result2.brand,
      model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);
    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model
    }));
  }
};
var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);
    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {
    var locationReducedAccuracy = result.locationReducedAccuracy;
    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  }
};

// import navigateTo from 'uni-helpers/navigate-to'

var compressImage = {
  args: function args(fromArgs) {
    // https://developers.weixin.qq.com/community/develop/doc/000c08940c865011298e0a43256800?highLine=compressHeight
    if (fromArgs.compressedHeight && !fromArgs.compressHeight) {
      fromArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !fromArgs.compressWidth) {
      fromArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting,
  compressImage: compressImage
};
var todos = ['vibrate', 'preloadPage', 'unPreloadPage', 'loadSubPackage'];
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];
function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}
function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {
          // 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}
function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}
function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}
var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];
function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
      complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}
TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin']
};
function getProvider(_ref2) {
  var service = _ref2.service,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found'
    };
    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}
var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});
var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();
function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}
function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}
var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});

/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}
function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}
var cid;
var cidErrMsg;
var enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}
function invokePushCallback(args) {
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message)
    };
    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message)
      });
    });
  }
}
var getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks = getApiCallbacks(args),
    success = _getApiCallbacks.success,
    fail = _getApiCallbacks.fail,
    complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid
        };
        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '')
        };
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}
var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};
var baseInfo = wx.getAppBaseInfo && wx.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx.getSystemInfoSync();
}
var host = baseInfo ? baseInfo.host : null;
var shareVideoMessage = host && host.env === 'SAAASDK' ? wx.miniapp.shareVideoMessage : wx.shareVideoMessage;
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  shareVideoMessage: shareVideoMessage,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback
});
var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];
function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function initBehavior(options) {
  return Behavior(options);
}
function isPage() {
  return !!this.route;
}
function initRelation(detail) {
  this.triggerEvent('__l', detail);
}
function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || toSkip(component);
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}
function syncRefs(refs, newRefs) {
  var oldKeys = (0, _construct2.default)(Set, (0, _toConsumableArray2.default)(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {
      return oldValue.includes(value);
    })) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}
function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || toSkip(component));
      });
      return syncRefs(refs, $refs);
    }
  });
}
function handleLink(event) {
  var _ref3 = event.detail || event.value,
    vuePid = _ref3.vuePid,
    vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  vueOptions.parent = parentVm;
}
function markMPComponent(component) {
  // 在 Vue 中标记为小程序组件
  var IS_MP = '__v_isMPComponent';
  Object.defineProperty(component, IS_MP, {
    configurable: true,
    enumerable: false,
    value: true
  });
  return component;
}
function toSkip(obj) {
  var OB = '__ob__';
  var SKIP = '__v_skip';
  if (isObject(obj) && Object.isExtensible(obj)) {
    // 避免被 @vue/composition-api 观测
    Object.defineProperty(obj, OB, {
      configurable: true,
      enumerable: false,
      value: (0, _defineProperty2.default)({}, SKIP, true)
    });
  }
  return obj;
}
var WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach(function (name) {
      var matches = name.match(WORKLET_RE);
      if (matches) {
        var workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});
function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initHook(name, options, isComponent) {
  var oldHook = options[name];
  options[name] = function () {
    markMPComponent(this);
    initTriggerEvent(this);
    if (oldHook) {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return oldHook.apply(this, args);
    }
  };
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;
  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}
var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}
function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }
  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }
  vueOptions = vueOptions.default || vueOptions;
  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }
  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}
function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}
function initUnknownHooks(mpOptions, vueOptions) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {
    return initHook$1(mpOptions, hook, excludes);
  });
}
function findHooks(vueOptions) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}
function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}
function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}
function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}
function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;
  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}
function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};
  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"仁寿小圈子","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }
  if (!isPlainObject(data)) {
    data = {};
  }
  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}
var PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }
  return behaviors;
}
function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: ''
        };
        properties.virtualHostClass = {
          type: null,
          value: ''
        };
      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }
  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }
        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }
  return properties;
}
function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}
  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};
  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }
  if (hasOwn(event, 'markerId')) {
    event.detail = (0, _typeof2.default)(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }
  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }
  return event;
}
function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }
      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }
      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}
function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};
  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }
  return extraObj;
}
function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}
function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }
  var extraObj = processEventExtra(vm, extra, event, __args__);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}
var ONCE = '~';
var CUSTOM = '^';
function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}
function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}
function handleEvent(event) {
  var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;
    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
var eventChannels = {};
function getEventChannel(id) {
  var eventChannel = eventChannels[id];
  delete eventChannels[id];
  return eventChannel;
}
var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];
function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}
function initScopedSlotsParams() {
  var center = {};
  var parents = {};
  function currentId(fn) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      fn(vueId);
    }
  }
  _vue.default.prototype.$hasSSP = function (vueId) {
    var slot = center[vueId];
    if (!slot) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return slot;
  };
  _vue.default.prototype.$getSSP = function (vueId, name, needAll) {
    var slot = center[vueId];
    if (slot) {
      var params = slot[name] || [];
      if (needAll) {
        return params;
      }
      return params[0];
    }
  };
  _vue.default.prototype.$setSSP = function (name, value) {
    var index = 0;
    currentId.call(this, function (vueId) {
      var slot = center[vueId];
      var params = slot[name] = slot[name] || [];
      params.push(value);
      index = params.length - 1;
    });
    return index;
  };
  _vue.default.prototype.$initSSP = function () {
    currentId.call(this, function (vueId) {
      center[vueId] = {};
    });
  };
  _vue.default.prototype.$callSSP = function () {
    currentId.call(this, function (vueId) {
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    });
  };
  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    }
  });
}
function parseBaseApp(vm, _ref4) {
  var mocks = _ref4.mocks,
    initRefs = _ref4.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);
  _vue.default.prototype.mpHost = "mp-weixin";
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = (0, _defineProperty2.default)({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {
        // hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });
  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {
          // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);
      this.$vm.__call_hook('onLaunch', args);
    }
  };

  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }
  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);
  return appOptions;
}
function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}
function createApp(vm) {
  App(parseApp(vm));
  return vm;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function stringifyQuery(obj) {
  var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encodeStr(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }
    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?".concat(res) : '';
}
function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    isPage = _ref5.isPage,
    initRelation = _ref5.initRelation;
  var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),
    _initVueComponent2 = (0, _slicedToArray2.default)(_initVueComponent, 2),
    VueComponent = _initVueComponent2[0],
    vueOptions = _initVueComponent2[1];
  var options = _objectSpread({
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true
  }, vueOptions.options || {});
  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }
  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        });

        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };
  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}
function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  }, needVueOptions);
}
var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
function parseBasePage(vuePageOptions) {
  var _parseComponent = parseComponent(vuePageOptions, true),
    _parseComponent2 = (0, _slicedToArray2.default)(_parseComponent, 2),
    pageOptions = _parseComponent2[0],
    vueOptions = _parseComponent2[1];
  initHooks(pageOptions.methods, hooks$1, vueOptions);
  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery)
    };
    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }
  {
    initWorkletMethods(pageOptions.methods, vueOptions.methods);
  }
  return pageOptions;
}
function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions);
}
function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}
function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}
function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true
  });
  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};
if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, extraApi[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}
wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;
var uni$1 = uni;
var _default = uni$1;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 21:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 22:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = Array.isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales = Object.keys(messages);
  }
  var lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (Array.isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 23:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 24:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 25:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue &&
    !value.__v_isMPComponent
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"仁寿小圈子","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"仁寿小圈子","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"仁寿小圈子","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || value.__v_isMPComponent) {
      return {}
    }
  }
  return value
}

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret, clearInstance))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"仁寿小圈子","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    'onUploadDouyinVideo',
    'onNFCReadMessage',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 26:
/*!***********************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/pages.json ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 27:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-push/dist/uni-push.es.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni, wx) {var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
var _get = __webpack_require__(/*! @babel/runtime/helpers/get */ 28);
var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 31);
var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 32);
var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 30);
var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23);
var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 24);
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}
var gtpushMinExports = {};
var gtpushMin = {
  get exports() {
    return gtpushMinExports;
  },
  set exports(v) {
    gtpushMinExports = v;
  }
};

/*! For license information please see gtpush-min.js.LICENSE.txt */

(function (module, exports) {
  (function t(e, r) {
    module.exports = r();
  })(self, function () {
    return function () {
      var t = {
        4736: function _(t, e, r) {
          t = r.nmd(t);
          var i;
          var n = function (t) {
            var e = 1e7,
              r = 7,
              i = 9007199254740992,
              s = d(i),
              a = "0123456789abcdefghijklmnopqrstuvwxyz";
            var o = "function" === typeof BigInt;
            function u(t, e, r, i) {
              if ("undefined" === typeof t) return u[0];
              if ("undefined" !== typeof e) return 10 === +e && !r ? st(t) : X(t, e, r, i);
              return st(t);
            }
            function c(t, e) {
              this.value = t;
              this.sign = e;
              this.isSmall = false;
            }
            c.prototype = Object.create(u.prototype);
            function l(t) {
              this.value = t;
              this.sign = t < 0;
              this.isSmall = true;
            }
            l.prototype = Object.create(u.prototype);
            function f(t) {
              this.value = t;
            }
            f.prototype = Object.create(u.prototype);
            function h(t) {
              return -i < t && t < i;
            }
            function d(t) {
              if (t < 1e7) return [t];
              if (t < 1e14) return [t % 1e7, Math.floor(t / 1e7)];
              return [t % 1e7, Math.floor(t / 1e7) % 1e7, Math.floor(t / 1e14)];
            }
            function v(t) {
              p(t);
              var r = t.length;
              if (r < 4 && N(t, s) < 0) switch (r) {
                case 0:
                  return 0;
                case 1:
                  return t[0];
                case 2:
                  return t[0] + t[1] * e;
                default:
                  return t[0] + (t[1] + t[2] * e) * e;
              }
              return t;
            }
            function p(t) {
              var e = t.length;
              while (0 === t[--e]) {
                ;
              }
              t.length = e + 1;
            }
            function g(t) {
              var e = new Array(t);
              var r = -1;
              while (++r < t) {
                e[r] = 0;
              }
              return e;
            }
            function y(t) {
              if (t > 0) return Math.floor(t);
              return Math.ceil(t);
            }
            function m(t, r) {
              var i = t.length,
                n = r.length,
                s = new Array(i),
                a = 0,
                o = e,
                u,
                c;
              for (c = 0; c < n; c++) {
                u = t[c] + r[c] + a;
                a = u >= o ? 1 : 0;
                s[c] = u - a * o;
              }
              while (c < i) {
                u = t[c] + a;
                a = u === o ? 1 : 0;
                s[c++] = u - a * o;
              }
              if (a > 0) s.push(a);
              return s;
            }
            function w(t, e) {
              if (t.length >= e.length) return m(t, e);
              return m(e, t);
            }
            function S(t, r) {
              var i = t.length,
                n = new Array(i),
                s = e,
                a,
                o;
              for (o = 0; o < i; o++) {
                a = t[o] - s + r;
                r = Math.floor(a / s);
                n[o] = a - r * s;
                r += 1;
              }
              while (r > 0) {
                n[o++] = r % s;
                r = Math.floor(r / s);
              }
              return n;
            }
            c.prototype.add = function (t) {
              var e = st(t);
              if (this.sign !== e.sign) return this.subtract(e.negate());
              var r = this.value,
                i = e.value;
              if (e.isSmall) return new c(S(r, Math.abs(i)), this.sign);
              return new c(w(r, i), this.sign);
            };
            c.prototype.plus = c.prototype.add;
            l.prototype.add = function (t) {
              var e = st(t);
              var r = this.value;
              if (r < 0 !== e.sign) return this.subtract(e.negate());
              var i = e.value;
              if (e.isSmall) {
                if (h(r + i)) return new l(r + i);
                i = d(Math.abs(i));
              }
              return new c(S(i, Math.abs(r)), r < 0);
            };
            l.prototype.plus = l.prototype.add;
            f.prototype.add = function (t) {
              return new f(this.value + st(t).value);
            };
            f.prototype.plus = f.prototype.add;
            function _(t, r) {
              var i = t.length,
                n = r.length,
                s = new Array(i),
                a = 0,
                o = e,
                u,
                c;
              for (u = 0; u < n; u++) {
                c = t[u] - a - r[u];
                if (c < 0) {
                  c += o;
                  a = 1;
                } else a = 0;
                s[u] = c;
              }
              for (u = n; u < i; u++) {
                c = t[u] - a;
                if (c < 0) c += o;else {
                  s[u++] = c;
                  break;
                }
                s[u] = c;
              }
              for (; u < i; u++) {
                s[u] = t[u];
              }
              p(s);
              return s;
            }
            function b(t, e, r) {
              var i;
              if (N(t, e) >= 0) i = _(t, e);else {
                i = _(e, t);
                r = !r;
              }
              i = v(i);
              if ("number" === typeof i) {
                if (r) i = -i;
                return new l(i);
              }
              return new c(i, r);
            }
            function E(t, r, i) {
              var n = t.length,
                s = new Array(n),
                a = -r,
                o = e,
                u,
                f;
              for (u = 0; u < n; u++) {
                f = t[u] + a;
                a = Math.floor(f / o);
                f %= o;
                s[u] = f < 0 ? f + o : f;
              }
              s = v(s);
              if ("number" === typeof s) {
                if (i) s = -s;
                return new l(s);
              }
              return new c(s, i);
            }
            c.prototype.subtract = function (t) {
              var e = st(t);
              if (this.sign !== e.sign) return this.add(e.negate());
              var r = this.value,
                i = e.value;
              if (e.isSmall) return E(r, Math.abs(i), this.sign);
              return b(r, i, this.sign);
            };
            c.prototype.minus = c.prototype.subtract;
            l.prototype.subtract = function (t) {
              var e = st(t);
              var r = this.value;
              if (r < 0 !== e.sign) return this.add(e.negate());
              var i = e.value;
              if (e.isSmall) return new l(r - i);
              return E(i, Math.abs(r), r >= 0);
            };
            l.prototype.minus = l.prototype.subtract;
            f.prototype.subtract = function (t) {
              return new f(this.value - st(t).value);
            };
            f.prototype.minus = f.prototype.subtract;
            c.prototype.negate = function () {
              return new c(this.value, !this.sign);
            };
            l.prototype.negate = function () {
              var t = this.sign;
              var e = new l(-this.value);
              e.sign = !t;
              return e;
            };
            f.prototype.negate = function () {
              return new f(-this.value);
            };
            c.prototype.abs = function () {
              return new c(this.value, false);
            };
            l.prototype.abs = function () {
              return new l(Math.abs(this.value));
            };
            f.prototype.abs = function () {
              return new f(this.value >= 0 ? this.value : -this.value);
            };
            function D(t, r) {
              var i = t.length,
                n = r.length,
                s = i + n,
                a = g(s),
                o = e,
                u,
                c,
                l,
                f,
                h;
              for (l = 0; l < i; ++l) {
                f = t[l];
                for (var d = 0; d < n; ++d) {
                  h = r[d];
                  u = f * h + a[l + d];
                  c = Math.floor(u / o);
                  a[l + d] = u - c * o;
                  a[l + d + 1] += c;
                }
              }
              p(a);
              return a;
            }
            function M(t, r) {
              var i = t.length,
                n = new Array(i),
                s = e,
                a = 0,
                o,
                u;
              for (u = 0; u < i; u++) {
                o = t[u] * r + a;
                a = Math.floor(o / s);
                n[u] = o - a * s;
              }
              while (a > 0) {
                n[u++] = a % s;
                a = Math.floor(a / s);
              }
              return n;
            }
            function T(t, e) {
              var r = [];
              while (e-- > 0) {
                r.push(0);
              }
              return r.concat(t);
            }
            function I(t, e) {
              var r = Math.max(t.length, e.length);
              if (r <= 30) return D(t, e);
              r = Math.ceil(r / 2);
              var i = t.slice(r),
                n = t.slice(0, r),
                s = e.slice(r),
                a = e.slice(0, r);
              var o = I(n, a),
                u = I(i, s),
                c = I(w(n, i), w(a, s));
              var l = w(w(o, T(_(_(c, o), u), r)), T(u, 2 * r));
              p(l);
              return l;
            }
            function A(t, e) {
              return -.012 * t - .012 * e + 15e-6 * t * e > 0;
            }
            c.prototype.multiply = function (t) {
              var r = st(t),
                i = this.value,
                n = r.value,
                s = this.sign !== r.sign,
                a;
              if (r.isSmall) {
                if (0 === n) return u[0];
                if (1 === n) return this;
                if (-1 === n) return this.negate();
                a = Math.abs(n);
                if (a < e) return new c(M(i, a), s);
                n = d(a);
              }
              if (A(i.length, n.length)) return new c(I(i, n), s);
              return new c(D(i, n), s);
            };
            c.prototype.times = c.prototype.multiply;
            function x(t, r, i) {
              if (t < e) return new c(M(r, t), i);
              return new c(D(r, d(t)), i);
            }
            l.prototype._multiplyBySmall = function (t) {
              if (h(t.value * this.value)) return new l(t.value * this.value);
              return x(Math.abs(t.value), d(Math.abs(this.value)), this.sign !== t.sign);
            };
            c.prototype._multiplyBySmall = function (t) {
              if (0 === t.value) return u[0];
              if (1 === t.value) return this;
              if (-1 === t.value) return this.negate();
              return x(Math.abs(t.value), this.value, this.sign !== t.sign);
            };
            l.prototype.multiply = function (t) {
              return st(t)._multiplyBySmall(this);
            };
            l.prototype.times = l.prototype.multiply;
            f.prototype.multiply = function (t) {
              return new f(this.value * st(t).value);
            };
            f.prototype.times = f.prototype.multiply;
            function R(t) {
              var r = t.length,
                i = g(r + r),
                n = e,
                s,
                a,
                o,
                u,
                c;
              for (o = 0; o < r; o++) {
                u = t[o];
                a = 0 - u * u;
                for (var l = o; l < r; l++) {
                  c = t[l];
                  s = 2 * (u * c) + i[o + l] + a;
                  a = Math.floor(s / n);
                  i[o + l] = s - a * n;
                }
                i[o + r] = a;
              }
              p(i);
              return i;
            }
            c.prototype.square = function () {
              return new c(R(this.value), false);
            };
            l.prototype.square = function () {
              var t = this.value * this.value;
              if (h(t)) return new l(t);
              return new c(R(d(Math.abs(this.value))), false);
            };
            f.prototype.square = function (t) {
              return new f(this.value * this.value);
            };
            function B(t, r) {
              var i = t.length,
                n = r.length,
                s = e,
                a = g(r.length),
                o = r[n - 1],
                u = Math.ceil(s / (2 * o)),
                c = M(t, u),
                l = M(r, u),
                f,
                h,
                d,
                p,
                y,
                m,
                w;
              if (c.length <= i) c.push(0);
              l.push(0);
              o = l[n - 1];
              for (h = i - n; h >= 0; h--) {
                f = s - 1;
                if (c[h + n] !== o) f = Math.floor((c[h + n] * s + c[h + n - 1]) / o);
                d = 0;
                p = 0;
                m = l.length;
                for (y = 0; y < m; y++) {
                  d += f * l[y];
                  w = Math.floor(d / s);
                  p += c[h + y] - (d - w * s);
                  d = w;
                  if (p < 0) {
                    c[h + y] = p + s;
                    p = -1;
                  } else {
                    c[h + y] = p;
                    p = 0;
                  }
                }
                while (0 !== p) {
                  f -= 1;
                  d = 0;
                  for (y = 0; y < m; y++) {
                    d += c[h + y] - s + l[y];
                    if (d < 0) {
                      c[h + y] = d + s;
                      d = 0;
                    } else {
                      c[h + y] = d;
                      d = 1;
                    }
                  }
                  p += d;
                }
                a[h] = f;
              }
              c = k(c, u)[0];
              return [v(a), v(c)];
            }
            function O(t, r) {
              var i = t.length,
                n = r.length,
                s = [],
                a = [],
                o = e,
                u,
                c,
                l,
                f,
                h;
              while (i) {
                a.unshift(t[--i]);
                p(a);
                if (N(a, r) < 0) {
                  s.push(0);
                  continue;
                }
                c = a.length;
                l = a[c - 1] * o + a[c - 2];
                f = r[n - 1] * o + r[n - 2];
                if (c > n) l = (l + 1) * o;
                u = Math.ceil(l / f);
                do {
                  h = M(r, u);
                  if (N(h, a) <= 0) break;
                  u--;
                } while (u);
                s.push(u);
                a = _(a, h);
              }
              s.reverse();
              return [v(s), v(a)];
            }
            function k(t, r) {
              var i = t.length,
                n = g(i),
                s = e,
                a,
                o,
                u,
                c;
              u = 0;
              for (a = i - 1; a >= 0; --a) {
                c = u * s + t[a];
                o = y(c / r);
                u = c - o * r;
                n[a] = 0 | o;
              }
              return [n, 0 | u];
            }
            function C(t, r) {
              var i,
                n = st(r);
              if (o) return [new f(t.value / n.value), new f(t.value % n.value)];
              var s = t.value,
                a = n.value;
              var h;
              if (0 === a) throw new Error("Cannot divide by zero");
              if (t.isSmall) {
                if (n.isSmall) return [new l(y(s / a)), new l(s % a)];
                return [u[0], t];
              }
              if (n.isSmall) {
                if (1 === a) return [t, u[0]];
                if (-1 == a) return [t.negate(), u[0]];
                var p = Math.abs(a);
                if (p < e) {
                  i = k(s, p);
                  h = v(i[0]);
                  var g = i[1];
                  if (t.sign) g = -g;
                  if ("number" === typeof h) {
                    if (t.sign !== n.sign) h = -h;
                    return [new l(h), new l(g)];
                  }
                  return [new c(h, t.sign !== n.sign), new l(g)];
                }
                a = d(p);
              }
              var m = N(s, a);
              if (-1 === m) return [u[0], t];
              if (0 === m) return [u[t.sign === n.sign ? 1 : -1], u[0]];
              if (s.length + a.length <= 200) i = B(s, a);else i = O(s, a);
              h = i[0];
              var w = t.sign !== n.sign,
                S = i[1],
                _ = t.sign;
              if ("number" === typeof h) {
                if (w) h = -h;
                h = new l(h);
              } else h = new c(h, w);
              if ("number" === typeof S) {
                if (_) S = -S;
                S = new l(S);
              } else S = new c(S, _);
              return [h, S];
            }
            c.prototype.divmod = function (t) {
              var e = C(this, t);
              return {
                quotient: e[0],
                remainder: e[1]
              };
            };
            f.prototype.divmod = l.prototype.divmod = c.prototype.divmod;
            c.prototype.divide = function (t) {
              return C(this, t)[0];
            };
            f.prototype.over = f.prototype.divide = function (t) {
              return new f(this.value / st(t).value);
            };
            l.prototype.over = l.prototype.divide = c.prototype.over = c.prototype.divide;
            c.prototype.mod = function (t) {
              return C(this, t)[1];
            };
            f.prototype.mod = f.prototype.remainder = function (t) {
              return new f(this.value % st(t).value);
            };
            l.prototype.remainder = l.prototype.mod = c.prototype.remainder = c.prototype.mod;
            c.prototype.pow = function (t) {
              var e = st(t),
                r = this.value,
                i = e.value,
                n,
                s,
                a;
              if (0 === i) return u[1];
              if (0 === r) return u[0];
              if (1 === r) return u[1];
              if (-1 === r) return e.isEven() ? u[1] : u[-1];
              if (e.sign) return u[0];
              if (!e.isSmall) throw new Error("The exponent " + e.toString() + " is too large.");
              if (this.isSmall) if (h(n = Math.pow(r, i))) return new l(y(n));
              s = this;
              a = u[1];
              while (true) {
                if (i & 1 === 1) {
                  a = a.times(s);
                  --i;
                }
                if (0 === i) break;
                i /= 2;
                s = s.square();
              }
              return a;
            };
            l.prototype.pow = c.prototype.pow;
            f.prototype.pow = function (t) {
              var e = st(t);
              var r = this.value,
                i = e.value;
              var n = BigInt(0),
                s = BigInt(1),
                a = BigInt(2);
              if (i === n) return u[1];
              if (r === n) return u[0];
              if (r === s) return u[1];
              if (r === BigInt(-1)) return e.isEven() ? u[1] : u[-1];
              if (e.isNegative()) return new f(n);
              var o = this;
              var c = u[1];
              while (true) {
                if ((i & s) === s) {
                  c = c.times(o);
                  --i;
                }
                if (i === n) break;
                i /= a;
                o = o.square();
              }
              return c;
            };
            c.prototype.modPow = function (t, e) {
              t = st(t);
              e = st(e);
              if (e.isZero()) throw new Error("Cannot take modPow with modulus 0");
              var r = u[1],
                i = this.mod(e);
              if (t.isNegative()) {
                t = t.multiply(u[-1]);
                i = i.modInv(e);
              }
              while (t.isPositive()) {
                if (i.isZero()) return u[0];
                if (t.isOdd()) r = r.multiply(i).mod(e);
                t = t.divide(2);
                i = i.square().mod(e);
              }
              return r;
            };
            f.prototype.modPow = l.prototype.modPow = c.prototype.modPow;
            function N(t, e) {
              if (t.length !== e.length) return t.length > e.length ? 1 : -1;
              for (var r = t.length - 1; r >= 0; r--) {
                if (t[r] !== e[r]) return t[r] > e[r] ? 1 : -1;
              }
              return 0;
            }
            c.prototype.compareAbs = function (t) {
              var e = st(t),
                r = this.value,
                i = e.value;
              if (e.isSmall) return 1;
              return N(r, i);
            };
            l.prototype.compareAbs = function (t) {
              var e = st(t),
                r = Math.abs(this.value),
                i = e.value;
              if (e.isSmall) {
                i = Math.abs(i);
                return r === i ? 0 : r > i ? 1 : -1;
              }
              return -1;
            };
            f.prototype.compareAbs = function (t) {
              var e = this.value;
              var r = st(t).value;
              e = e >= 0 ? e : -e;
              r = r >= 0 ? r : -r;
              return e === r ? 0 : e > r ? 1 : -1;
            };
            c.prototype.compare = function (t) {
              if (t === 1 / 0) return -1;
              if (t === -1 / 0) return 1;
              var e = st(t),
                r = this.value,
                i = e.value;
              if (this.sign !== e.sign) return e.sign ? 1 : -1;
              if (e.isSmall) return this.sign ? -1 : 1;
              return N(r, i) * (this.sign ? -1 : 1);
            };
            c.prototype.compareTo = c.prototype.compare;
            l.prototype.compare = function (t) {
              if (t === 1 / 0) return -1;
              if (t === -1 / 0) return 1;
              var e = st(t),
                r = this.value,
                i = e.value;
              if (e.isSmall) return r == i ? 0 : r > i ? 1 : -1;
              if (r < 0 !== e.sign) return r < 0 ? -1 : 1;
              return r < 0 ? 1 : -1;
            };
            l.prototype.compareTo = l.prototype.compare;
            f.prototype.compare = function (t) {
              if (t === 1 / 0) return -1;
              if (t === -1 / 0) return 1;
              var e = this.value;
              var r = st(t).value;
              return e === r ? 0 : e > r ? 1 : -1;
            };
            f.prototype.compareTo = f.prototype.compare;
            c.prototype.equals = function (t) {
              return 0 === this.compare(t);
            };
            f.prototype.eq = f.prototype.equals = l.prototype.eq = l.prototype.equals = c.prototype.eq = c.prototype.equals;
            c.prototype.notEquals = function (t) {
              return 0 !== this.compare(t);
            };
            f.prototype.neq = f.prototype.notEquals = l.prototype.neq = l.prototype.notEquals = c.prototype.neq = c.prototype.notEquals;
            c.prototype.greater = function (t) {
              return this.compare(t) > 0;
            };
            f.prototype.gt = f.prototype.greater = l.prototype.gt = l.prototype.greater = c.prototype.gt = c.prototype.greater;
            c.prototype.lesser = function (t) {
              return this.compare(t) < 0;
            };
            f.prototype.lt = f.prototype.lesser = l.prototype.lt = l.prototype.lesser = c.prototype.lt = c.prototype.lesser;
            c.prototype.greaterOrEquals = function (t) {
              return this.compare(t) >= 0;
            };
            f.prototype.geq = f.prototype.greaterOrEquals = l.prototype.geq = l.prototype.greaterOrEquals = c.prototype.geq = c.prototype.greaterOrEquals;
            c.prototype.lesserOrEquals = function (t) {
              return this.compare(t) <= 0;
            };
            f.prototype.leq = f.prototype.lesserOrEquals = l.prototype.leq = l.prototype.lesserOrEquals = c.prototype.leq = c.prototype.lesserOrEquals;
            c.prototype.isEven = function () {
              return 0 === (1 & this.value[0]);
            };
            l.prototype.isEven = function () {
              return 0 === (1 & this.value);
            };
            f.prototype.isEven = function () {
              return (this.value & BigInt(1)) === BigInt(0);
            };
            c.prototype.isOdd = function () {
              return 1 === (1 & this.value[0]);
            };
            l.prototype.isOdd = function () {
              return 1 === (1 & this.value);
            };
            f.prototype.isOdd = function () {
              return (this.value & BigInt(1)) === BigInt(1);
            };
            c.prototype.isPositive = function () {
              return !this.sign;
            };
            l.prototype.isPositive = function () {
              return this.value > 0;
            };
            f.prototype.isPositive = l.prototype.isPositive;
            c.prototype.isNegative = function () {
              return this.sign;
            };
            l.prototype.isNegative = function () {
              return this.value < 0;
            };
            f.prototype.isNegative = l.prototype.isNegative;
            c.prototype.isUnit = function () {
              return false;
            };
            l.prototype.isUnit = function () {
              return 1 === Math.abs(this.value);
            };
            f.prototype.isUnit = function () {
              return this.abs().value === BigInt(1);
            };
            c.prototype.isZero = function () {
              return false;
            };
            l.prototype.isZero = function () {
              return 0 === this.value;
            };
            f.prototype.isZero = function () {
              return this.value === BigInt(0);
            };
            c.prototype.isDivisibleBy = function (t) {
              var e = st(t);
              if (e.isZero()) return false;
              if (e.isUnit()) return true;
              if (0 === e.compareAbs(2)) return this.isEven();
              return this.mod(e).isZero();
            };
            f.prototype.isDivisibleBy = l.prototype.isDivisibleBy = c.prototype.isDivisibleBy;
            function P(t) {
              var e = t.abs();
              if (e.isUnit()) return false;
              if (e.equals(2) || e.equals(3) || e.equals(5)) return true;
              if (e.isEven() || e.isDivisibleBy(3) || e.isDivisibleBy(5)) return false;
              if (e.lesser(49)) return true;
            }
            function V(t, e) {
              var r = t.prev(),
                i = r,
                s = 0,
                a,
                u,
                c;
              while (i.isEven()) {
                i = i.divide(2), s++;
              }
              t: for (u = 0; u < e.length; u++) {
                if (t.lesser(e[u])) continue;
                c = n(e[u]).modPow(i, t);
                if (c.isUnit() || c.equals(r)) continue;
                for (a = s - 1; 0 != a; a--) {
                  c = c.square().mod(t);
                  if (c.isUnit()) return false;
                  if (c.equals(r)) continue t;
                }
                return false;
              }
              return true;
            }
            c.prototype.isPrime = function (e) {
              var r = P(this);
              if (r !== t) return r;
              var i = this.abs();
              var s = i.bitLength();
              if (s <= 64) return V(i, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
              var a = Math.log(2) * s.toJSNumber();
              var o = Math.ceil(true === e ? 2 * Math.pow(a, 2) : a);
              for (var u = [], c = 0; c < o; c++) {
                u.push(n(c + 2));
              }
              return V(i, u);
            };
            f.prototype.isPrime = l.prototype.isPrime = c.prototype.isPrime;
            c.prototype.isProbablePrime = function (e, r) {
              var i = P(this);
              if (i !== t) return i;
              var s = this.abs();
              var a = e === t ? 5 : e;
              for (var o = [], u = 0; u < a; u++) {
                o.push(n.randBetween(2, s.minus(2), r));
              }
              return V(s, o);
            };
            f.prototype.isProbablePrime = l.prototype.isProbablePrime = c.prototype.isProbablePrime;
            c.prototype.modInv = function (t) {
              var e = n.zero,
                r = n.one,
                i = st(t),
                s = this.abs(),
                a,
                o,
                u;
              while (!s.isZero()) {
                a = i.divide(s);
                o = e;
                u = i;
                e = r;
                i = s;
                r = o.subtract(a.multiply(r));
                s = u.subtract(a.multiply(s));
              }
              if (!i.isUnit()) throw new Error(this.toString() + " and " + t.toString() + " are not co-prime");
              if (-1 === e.compare(0)) e = e.add(t);
              if (this.isNegative()) return e.negate();
              return e;
            };
            f.prototype.modInv = l.prototype.modInv = c.prototype.modInv;
            c.prototype.next = function () {
              var t = this.value;
              if (this.sign) return E(t, 1, this.sign);
              return new c(S(t, 1), this.sign);
            };
            l.prototype.next = function () {
              var t = this.value;
              if (t + 1 < i) return new l(t + 1);
              return new c(s, false);
            };
            f.prototype.next = function () {
              return new f(this.value + BigInt(1));
            };
            c.prototype.prev = function () {
              var t = this.value;
              if (this.sign) return new c(S(t, 1), true);
              return E(t, 1, this.sign);
            };
            l.prototype.prev = function () {
              var t = this.value;
              if (t - 1 > -i) return new l(t - 1);
              return new c(s, true);
            };
            f.prototype.prev = function () {
              return new f(this.value - BigInt(1));
            };
            var L = [1];
            while (2 * L[L.length - 1] <= e) {
              L.push(2 * L[L.length - 1]);
            }
            var H = L.length,
              U = L[H - 1];
            function K(t) {
              return Math.abs(t) <= e;
            }
            c.prototype.shiftLeft = function (t) {
              var e = st(t).toJSNumber();
              if (!K(e)) throw new Error(String(e) + " is too large for shifting.");
              if (e < 0) return this.shiftRight(-e);
              var r = this;
              if (r.isZero()) return r;
              while (e >= H) {
                r = r.multiply(U);
                e -= H - 1;
              }
              return r.multiply(L[e]);
            };
            f.prototype.shiftLeft = l.prototype.shiftLeft = c.prototype.shiftLeft;
            c.prototype.shiftRight = function (t) {
              var e;
              var r = st(t).toJSNumber();
              if (!K(r)) throw new Error(String(r) + " is too large for shifting.");
              if (r < 0) return this.shiftLeft(-r);
              var i = this;
              while (r >= H) {
                if (i.isZero() || i.isNegative() && i.isUnit()) return i;
                e = C(i, U);
                i = e[1].isNegative() ? e[0].prev() : e[0];
                r -= H - 1;
              }
              e = C(i, L[r]);
              return e[1].isNegative() ? e[0].prev() : e[0];
            };
            f.prototype.shiftRight = l.prototype.shiftRight = c.prototype.shiftRight;
            function j(t, e, r) {
              e = st(e);
              var i = t.isNegative(),
                s = e.isNegative();
              var a = i ? t.not() : t,
                o = s ? e.not() : e;
              var u = 0,
                c = 0;
              var l = null,
                f = null;
              var h = [];
              while (!a.isZero() || !o.isZero()) {
                l = C(a, U);
                u = l[1].toJSNumber();
                if (i) u = U - 1 - u;
                f = C(o, U);
                c = f[1].toJSNumber();
                if (s) c = U - 1 - c;
                a = l[0];
                o = f[0];
                h.push(r(u, c));
              }
              var d = 0 !== r(i ? 1 : 0, s ? 1 : 0) ? n(-1) : n(0);
              for (var v = h.length - 1; v >= 0; v -= 1) {
                d = d.multiply(U).add(n(h[v]));
              }
              return d;
            }
            c.prototype.not = function () {
              return this.negate().prev();
            };
            f.prototype.not = l.prototype.not = c.prototype.not;
            c.prototype.and = function (t) {
              return j(this, t, function (t, e) {
                return t & e;
              });
            };
            f.prototype.and = l.prototype.and = c.prototype.and;
            c.prototype.or = function (t) {
              return j(this, t, function (t, e) {
                return t | e;
              });
            };
            f.prototype.or = l.prototype.or = c.prototype.or;
            c.prototype.xor = function (t) {
              return j(this, t, function (t, e) {
                return t ^ e;
              });
            };
            f.prototype.xor = l.prototype.xor = c.prototype.xor;
            var q = 1 << 30,
              F = (e & -e) * (e & -e) | q;
            function z(t) {
              var r = t.value,
                i = "number" === typeof r ? r | q : "bigint" === typeof r ? r | BigInt(q) : r[0] + r[1] * e | F;
              return i & -i;
            }
            function G(t, e) {
              if (e.compareTo(t) <= 0) {
                var r = G(t, e.square(e));
                var i = r.p;
                var s = r.e;
                var a = i.multiply(e);
                return a.compareTo(t) <= 0 ? {
                  p: a,
                  e: 2 * s + 1
                } : {
                  p: i,
                  e: 2 * s
                };
              }
              return {
                p: n(1),
                e: 0
              };
            }
            c.prototype.bitLength = function () {
              var t = this;
              if (t.compareTo(n(0)) < 0) t = t.negate().subtract(n(1));
              if (0 === t.compareTo(n(0))) return n(0);
              return n(G(t, n(2)).e).add(n(1));
            };
            f.prototype.bitLength = l.prototype.bitLength = c.prototype.bitLength;
            function Y(t, e) {
              t = st(t);
              e = st(e);
              return t.greater(e) ? t : e;
            }
            function W(t, e) {
              t = st(t);
              e = st(e);
              return t.lesser(e) ? t : e;
            }
            function J(t, e) {
              t = st(t).abs();
              e = st(e).abs();
              if (t.equals(e)) return t;
              if (t.isZero()) return e;
              if (e.isZero()) return t;
              var r = u[1],
                i,
                n;
              while (t.isEven() && e.isEven()) {
                i = W(z(t), z(e));
                t = t.divide(i);
                e = e.divide(i);
                r = r.multiply(i);
              }
              while (t.isEven()) {
                t = t.divide(z(t));
              }
              do {
                while (e.isEven()) {
                  e = e.divide(z(e));
                }
                if (t.greater(e)) {
                  n = e;
                  e = t;
                  t = n;
                }
                e = e.subtract(t);
              } while (!e.isZero());
              return r.isUnit() ? t : t.multiply(r);
            }
            function Z(t, e) {
              t = st(t).abs();
              e = st(e).abs();
              return t.divide(J(t, e)).multiply(e);
            }
            function $(t, r, i) {
              t = st(t);
              r = st(r);
              var n = i || Math.random;
              var s = W(t, r),
                a = Y(t, r);
              var o = a.subtract(s).add(1);
              if (o.isSmall) return s.add(Math.floor(n() * o));
              var c = et(o, e).value;
              var l = [],
                f = true;
              for (var h = 0; h < c.length; h++) {
                var d = f ? c[h] + (h + 1 < c.length ? c[h + 1] / e : 0) : e;
                var v = y(n() * d);
                l.push(v);
                if (v < c[h]) f = false;
              }
              return s.add(u.fromArray(l, e, false));
            }
            var X = function X(t, e, r, i) {
              r = r || a;
              t = String(t);
              if (!i) {
                t = t.toLowerCase();
                r = r.toLowerCase();
              }
              var n = t.length;
              var s;
              var o = Math.abs(e);
              var u = {};
              for (s = 0; s < r.length; s++) {
                u[r[s]] = s;
              }
              for (s = 0; s < n; s++) {
                var c = t[s];
                if ("-" === c) continue;
                if (c in u) if (u[c] >= o) {
                  if ("1" === c && 1 === o) continue;
                  throw new Error(c + " is not a valid digit in base " + e + ".");
                }
              }
              e = st(e);
              var l = [];
              var f = "-" === t[0];
              for (s = f ? 1 : 0; s < t.length; s++) {
                var c = t[s];
                if (c in u) l.push(st(u[c]));else if ("<" === c) {
                  var h = s;
                  do {
                    s++;
                  } while (">" !== t[s] && s < t.length);
                  l.push(st(t.slice(h + 1, s)));
                } else throw new Error(c + " is not a valid character");
              }
              return Q(l, e, f);
            };
            function Q(t, e, r) {
              var i = u[0],
                n = u[1],
                s;
              for (s = t.length - 1; s >= 0; s--) {
                i = i.add(t[s].times(n));
                n = n.times(e);
              }
              return r ? i.negate() : i;
            }
            function tt(t, e) {
              e = e || a;
              if (t < e.length) return e[t];
              return "<" + t + ">";
            }
            function et(t, e) {
              e = n(e);
              if (e.isZero()) {
                if (t.isZero()) return {
                  value: [0],
                  isNegative: false
                };
                throw new Error("Cannot convert nonzero numbers to base 0.");
              }
              if (e.equals(-1)) {
                if (t.isZero()) return {
                  value: [0],
                  isNegative: false
                };
                if (t.isNegative()) return {
                  value: [].concat.apply([], Array.apply(null, Array(-t.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
                  isNegative: false
                };
                var r = Array.apply(null, Array(t.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
                r.unshift([1]);
                return {
                  value: [].concat.apply([], r),
                  isNegative: false
                };
              }
              var i = false;
              if (t.isNegative() && e.isPositive()) {
                i = true;
                t = t.abs();
              }
              if (e.isUnit()) {
                if (t.isZero()) return {
                  value: [0],
                  isNegative: false
                };
                return {
                  value: Array.apply(null, Array(t.toJSNumber())).map(Number.prototype.valueOf, 1),
                  isNegative: i
                };
              }
              var s = [];
              var a = t,
                o;
              while (a.isNegative() || a.compareAbs(e) >= 0) {
                o = a.divmod(e);
                a = o.quotient;
                var u = o.remainder;
                if (u.isNegative()) {
                  u = e.minus(u).abs();
                  a = a.next();
                }
                s.push(u.toJSNumber());
              }
              s.push(a.toJSNumber());
              return {
                value: s.reverse(),
                isNegative: i
              };
            }
            function rt(t, e, r) {
              var i = et(t, e);
              return (i.isNegative ? "-" : "") + i.value.map(function (t) {
                return tt(t, r);
              }).join("");
            }
            c.prototype.toArray = function (t) {
              return et(this, t);
            };
            l.prototype.toArray = function (t) {
              return et(this, t);
            };
            f.prototype.toArray = function (t) {
              return et(this, t);
            };
            c.prototype.toString = function (e, r) {
              if (e === t) e = 10;
              if (10 !== e) return rt(this, e, r);
              var i = this.value,
                n = i.length,
                s = String(i[--n]),
                a = "0000000",
                o;
              while (--n >= 0) {
                o = String(i[n]);
                s += a.slice(o.length) + o;
              }
              var u = this.sign ? "-" : "";
              return u + s;
            };
            l.prototype.toString = function (e, r) {
              if (e === t) e = 10;
              if (10 != e) return rt(this, e, r);
              return String(this.value);
            };
            f.prototype.toString = l.prototype.toString;
            f.prototype.toJSON = c.prototype.toJSON = l.prototype.toJSON = function () {
              return this.toString();
            };
            c.prototype.valueOf = function () {
              return parseInt(this.toString(), 10);
            };
            c.prototype.toJSNumber = c.prototype.valueOf;
            l.prototype.valueOf = function () {
              return this.value;
            };
            l.prototype.toJSNumber = l.prototype.valueOf;
            f.prototype.valueOf = f.prototype.toJSNumber = function () {
              return parseInt(this.toString(), 10);
            };
            function it(t) {
              if (h(+t)) {
                var e = +t;
                if (e === y(e)) return o ? new f(BigInt(e)) : new l(e);
                throw new Error("Invalid integer: " + t);
              }
              var i = "-" === t[0];
              if (i) t = t.slice(1);
              var n = t.split(/e/i);
              if (n.length > 2) throw new Error("Invalid integer: " + n.join("e"));
              if (2 === n.length) {
                var s = n[1];
                if ("+" === s[0]) s = s.slice(1);
                s = +s;
                if (s !== y(s) || !h(s)) throw new Error("Invalid integer: " + s + " is not a valid exponent.");
                var a = n[0];
                var u = a.indexOf(".");
                if (u >= 0) {
                  s -= a.length - u - 1;
                  a = a.slice(0, u) + a.slice(u + 1);
                }
                if (s < 0) throw new Error("Cannot include negative exponent part for integers");
                a += new Array(s + 1).join("0");
                t = a;
              }
              var d = /^([0-9][0-9]*)$/.test(t);
              if (!d) throw new Error("Invalid integer: " + t);
              if (o) return new f(BigInt(i ? "-" + t : t));
              var v = [],
                g = t.length,
                m = r,
                w = g - m;
              while (g > 0) {
                v.push(+t.slice(w, g));
                w -= m;
                if (w < 0) w = 0;
                g -= m;
              }
              p(v);
              return new c(v, i);
            }
            function nt(t) {
              if (o) return new f(BigInt(t));
              if (h(t)) {
                if (t !== y(t)) throw new Error(t + " is not an integer.");
                return new l(t);
              }
              return it(t.toString());
            }
            function st(t) {
              if ("number" === typeof t) return nt(t);
              if ("string" === typeof t) return it(t);
              if ("bigint" === typeof t) return new f(t);
              return t;
            }
            for (var at = 0; at < 1e3; at++) {
              u[at] = st(at);
              if (at > 0) u[-at] = st(-at);
            }
            u.one = u[1];
            u.zero = u[0];
            u.minusOne = u[-1];
            u.max = Y;
            u.min = W;
            u.gcd = J;
            u.lcm = Z;
            u.isInstance = function (t) {
              return t instanceof c || t instanceof l || t instanceof f;
            };
            u.randBetween = $;
            u.fromArray = function (t, e, r) {
              return Q(t.map(st), st(e || 10), r);
            };
            return u;
          }();
          if (t.hasOwnProperty("exports")) t.exports = n;
          i = function () {
            return n;
          }.call(e, r, e, t), void 0 !== i && (t.exports = i);
        },
        452: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(8269), r(8214), r(888), r(5109));
          })(this, function (t) {
            (function () {
              var e = t;
              var r = e.lib;
              var i = r.BlockCipher;
              var n = e.algo;
              var s = [];
              var a = [];
              var o = [];
              var u = [];
              var c = [];
              var l = [];
              var f = [];
              var h = [];
              var d = [];
              var v = [];
              (function () {
                var t = [];
                for (var e = 0; e < 256; e++) {
                  if (e < 128) t[e] = e << 1;else t[e] = e << 1 ^ 283;
                }
                var r = 0;
                var i = 0;
                for (var e = 0; e < 256; e++) {
                  var n = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4;
                  n = n >>> 8 ^ 255 & n ^ 99;
                  s[r] = n;
                  a[n] = r;
                  var p = t[r];
                  var g = t[p];
                  var y = t[g];
                  var m = 257 * t[n] ^ 16843008 * n;
                  o[r] = m << 24 | m >>> 8;
                  u[r] = m << 16 | m >>> 16;
                  c[r] = m << 8 | m >>> 24;
                  l[r] = m;
                  var m = 16843009 * y ^ 65537 * g ^ 257 * p ^ 16843008 * r;
                  f[n] = m << 24 | m >>> 8;
                  h[n] = m << 16 | m >>> 16;
                  d[n] = m << 8 | m >>> 24;
                  v[n] = m;
                  if (!r) r = i = 1;else {
                    r = p ^ t[t[t[y ^ p]]];
                    i ^= t[t[i]];
                  }
                }
              })();
              var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
              var g = n.AES = i.extend({
                _doReset: function _doReset() {
                  var t;
                  if (this._nRounds && this._keyPriorReset === this._key) return;
                  var e = this._keyPriorReset = this._key;
                  var r = e.words;
                  var i = e.sigBytes / 4;
                  var n = this._nRounds = i + 6;
                  var a = 4 * (n + 1);
                  var o = this._keySchedule = [];
                  for (var u = 0; u < a; u++) {
                    if (u < i) o[u] = r[u];else {
                      t = o[u - 1];
                      if (!(u % i)) {
                        t = t << 8 | t >>> 24;
                        t = s[t >>> 24] << 24 | s[t >>> 16 & 255] << 16 | s[t >>> 8 & 255] << 8 | s[255 & t];
                        t ^= p[u / i | 0] << 24;
                      } else if (i > 6 && u % i == 4) t = s[t >>> 24] << 24 | s[t >>> 16 & 255] << 16 | s[t >>> 8 & 255] << 8 | s[255 & t];
                      o[u] = o[u - i] ^ t;
                    }
                  }
                  var c = this._invKeySchedule = [];
                  for (var l = 0; l < a; l++) {
                    var u = a - l;
                    if (l % 4) var t = o[u];else var t = o[u - 4];
                    if (l < 4 || u <= 4) c[l] = t;else c[l] = f[s[t >>> 24]] ^ h[s[t >>> 16 & 255]] ^ d[s[t >>> 8 & 255]] ^ v[s[255 & t]];
                  }
                },
                encryptBlock: function encryptBlock(t, e) {
                  this._doCryptBlock(t, e, this._keySchedule, o, u, c, l, s);
                },
                decryptBlock: function decryptBlock(t, e) {
                  var r = t[e + 1];
                  t[e + 1] = t[e + 3];
                  t[e + 3] = r;
                  this._doCryptBlock(t, e, this._invKeySchedule, f, h, d, v, a);
                  var r = t[e + 1];
                  t[e + 1] = t[e + 3];
                  t[e + 3] = r;
                },
                _doCryptBlock: function _doCryptBlock(t, e, r, i, n, s, a, o) {
                  var u = this._nRounds;
                  var c = t[e] ^ r[0];
                  var l = t[e + 1] ^ r[1];
                  var f = t[e + 2] ^ r[2];
                  var h = t[e + 3] ^ r[3];
                  var d = 4;
                  for (var v = 1; v < u; v++) {
                    var p = i[c >>> 24] ^ n[l >>> 16 & 255] ^ s[f >>> 8 & 255] ^ a[255 & h] ^ r[d++];
                    var g = i[l >>> 24] ^ n[f >>> 16 & 255] ^ s[h >>> 8 & 255] ^ a[255 & c] ^ r[d++];
                    var y = i[f >>> 24] ^ n[h >>> 16 & 255] ^ s[c >>> 8 & 255] ^ a[255 & l] ^ r[d++];
                    var m = i[h >>> 24] ^ n[c >>> 16 & 255] ^ s[l >>> 8 & 255] ^ a[255 & f] ^ r[d++];
                    c = p;
                    l = g;
                    f = y;
                    h = m;
                  }
                  var p = (o[c >>> 24] << 24 | o[l >>> 16 & 255] << 16 | o[f >>> 8 & 255] << 8 | o[255 & h]) ^ r[d++];
                  var g = (o[l >>> 24] << 24 | o[f >>> 16 & 255] << 16 | o[h >>> 8 & 255] << 8 | o[255 & c]) ^ r[d++];
                  var y = (o[f >>> 24] << 24 | o[h >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & l]) ^ r[d++];
                  var m = (o[h >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[l >>> 8 & 255] << 8 | o[255 & f]) ^ r[d++];
                  t[e] = p;
                  t[e + 1] = g;
                  t[e + 2] = y;
                  t[e + 3] = m;
                },
                keySize: 256 / 32
              });
              e.AES = i._createHelper(g);
            })();
            return t.AES;
          });
        },
        5109: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(888));
          })(this, function (t) {
            t.lib.Cipher || function (e) {
              var r = t;
              var i = r.lib;
              var n = i.Base;
              var s = i.WordArray;
              var a = i.BufferedBlockAlgorithm;
              var o = r.enc;
              o.Utf8;
              var c = o.Base64;
              var l = r.algo;
              var f = l.EvpKDF;
              var h = i.Cipher = a.extend({
                cfg: n.extend(),
                createEncryptor: function createEncryptor(t, e) {
                  return this.create(this._ENC_XFORM_MODE, t, e);
                },
                createDecryptor: function createDecryptor(t, e) {
                  return this.create(this._DEC_XFORM_MODE, t, e);
                },
                init: function init(t, e, r) {
                  this.cfg = this.cfg.extend(r);
                  this._xformMode = t;
                  this._key = e;
                  this.reset();
                },
                reset: function reset() {
                  a.reset.call(this);
                  this._doReset();
                },
                process: function process(t) {
                  this._append(t);
                  return this._process();
                },
                finalize: function finalize(t) {
                  if (t) this._append(t);
                  var e = this._doFinalize();
                  return e;
                },
                keySize: 128 / 32,
                ivSize: 128 / 32,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function () {
                  function t(t) {
                    if ("string" == typeof t) return T;else return E;
                  }
                  return function (e) {
                    return {
                      encrypt: function encrypt(r, i, n) {
                        return t(i).encrypt(e, r, i, n);
                      },
                      decrypt: function decrypt(r, i, n) {
                        return t(i).decrypt(e, r, i, n);
                      }
                    };
                  };
                }()
              });
              i.StreamCipher = h.extend({
                _doFinalize: function _doFinalize() {
                  var t = this._process(!!"flush");
                  return t;
                },
                blockSize: 1
              });
              var v = r.mode = {};
              var p = i.BlockCipherMode = n.extend({
                createEncryptor: function createEncryptor(t, e) {
                  return this.Encryptor.create(t, e);
                },
                createDecryptor: function createDecryptor(t, e) {
                  return this.Decryptor.create(t, e);
                },
                init: function init(t, e) {
                  this._cipher = t;
                  this._iv = e;
                }
              });
              var g = v.CBC = function () {
                var t = p.extend();
                t.Encryptor = t.extend({
                  processBlock: function processBlock(t, e) {
                    var i = this._cipher;
                    var n = i.blockSize;
                    r.call(this, t, e, n);
                    i.encryptBlock(t, e);
                    this._prevBlock = t.slice(e, e + n);
                  }
                });
                t.Decryptor = t.extend({
                  processBlock: function processBlock(t, e) {
                    var i = this._cipher;
                    var n = i.blockSize;
                    var s = t.slice(e, e + n);
                    i.decryptBlock(t, e);
                    r.call(this, t, e, n);
                    this._prevBlock = s;
                  }
                });
                function r(t, r, i) {
                  var n;
                  var s = this._iv;
                  if (s) {
                    n = s;
                    this._iv = e;
                  } else n = this._prevBlock;
                  for (var a = 0; a < i; a++) {
                    t[r + a] ^= n[a];
                  }
                }
                return t;
              }();
              var y = r.pad = {};
              var m = y.Pkcs7 = {
                pad: function pad(t, e) {
                  var r = 4 * e;
                  var i = r - t.sigBytes % r;
                  var n = i << 24 | i << 16 | i << 8 | i;
                  var a = [];
                  for (var o = 0; o < i; o += 4) {
                    a.push(n);
                  }
                  var u = s.create(a, i);
                  t.concat(u);
                },
                unpad: function unpad(t) {
                  var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                  t.sigBytes -= e;
                }
              };
              i.BlockCipher = h.extend({
                cfg: h.cfg.extend({
                  mode: g,
                  padding: m
                }),
                reset: function reset() {
                  var t;
                  h.reset.call(this);
                  var e = this.cfg;
                  var r = e.iv;
                  var i = e.mode;
                  if (this._xformMode == this._ENC_XFORM_MODE) t = i.createEncryptor;else {
                    t = i.createDecryptor;
                    this._minBufferSize = 1;
                  }
                  if (this._mode && this._mode.__creator == t) this._mode.init(this, r && r.words);else {
                    this._mode = t.call(i, this, r && r.words);
                    this._mode.__creator = t;
                  }
                },
                _doProcessBlock: function _doProcessBlock(t, e) {
                  this._mode.processBlock(t, e);
                },
                _doFinalize: function _doFinalize() {
                  var t;
                  var e = this.cfg.padding;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    e.pad(this._data, this.blockSize);
                    t = this._process(!!"flush");
                  } else {
                    t = this._process(!!"flush");
                    e.unpad(t);
                  }
                  return t;
                },
                blockSize: 128 / 32
              });
              var S = i.CipherParams = n.extend({
                init: function init(t) {
                  this.mixIn(t);
                },
                toString: function toString(t) {
                  return (t || this.formatter).stringify(this);
                }
              });
              var _ = r.format = {};
              var b = _.OpenSSL = {
                stringify: function stringify(t) {
                  var e;
                  var r = t.ciphertext;
                  var i = t.salt;
                  if (i) e = s.create([1398893684, 1701076831]).concat(i).concat(r);else e = r;
                  return e.toString(c);
                },
                parse: function parse(t) {
                  var e;
                  var r = c.parse(t);
                  var i = r.words;
                  if (1398893684 == i[0] && 1701076831 == i[1]) {
                    e = s.create(i.slice(2, 4));
                    i.splice(0, 4);
                    r.sigBytes -= 16;
                  }
                  return S.create({
                    ciphertext: r,
                    salt: e
                  });
                }
              };
              var E = i.SerializableCipher = n.extend({
                cfg: n.extend({
                  format: b
                }),
                encrypt: function encrypt(t, e, r, i) {
                  i = this.cfg.extend(i);
                  var n = t.createEncryptor(r, i);
                  var s = n.finalize(e);
                  var a = n.cfg;
                  return S.create({
                    ciphertext: s,
                    key: r,
                    iv: a.iv,
                    algorithm: t,
                    mode: a.mode,
                    padding: a.padding,
                    blockSize: t.blockSize,
                    formatter: i.format
                  });
                },
                decrypt: function decrypt(t, e, r, i) {
                  i = this.cfg.extend(i);
                  e = this._parse(e, i.format);
                  var n = t.createDecryptor(r, i).finalize(e.ciphertext);
                  return n;
                },
                _parse: function _parse(t, e) {
                  if ("string" == typeof t) return e.parse(t, this);else return t;
                }
              });
              var D = r.kdf = {};
              var M = D.OpenSSL = {
                execute: function execute(t, e, r, i) {
                  if (!i) i = s.random(64 / 8);
                  var n = f.create({
                    keySize: e + r
                  }).compute(t, i);
                  var a = s.create(n.words.slice(e), 4 * r);
                  n.sigBytes = 4 * e;
                  return S.create({
                    key: n,
                    iv: a,
                    salt: i
                  });
                }
              };
              var T = i.PasswordBasedCipher = E.extend({
                cfg: E.cfg.extend({
                  kdf: M
                }),
                encrypt: function encrypt(t, e, r, i) {
                  i = this.cfg.extend(i);
                  var n = i.kdf.execute(r, t.keySize, t.ivSize);
                  i.iv = n.iv;
                  var s = E.encrypt.call(this, t, e, n.key, i);
                  s.mixIn(n);
                  return s;
                },
                decrypt: function decrypt(t, e, r, i) {
                  i = this.cfg.extend(i);
                  e = this._parse(e, i.format);
                  var n = i.kdf.execute(r, t.keySize, t.ivSize, e.salt);
                  i.iv = n.iv;
                  var s = E.decrypt.call(this, t, e, n.key, i);
                  return s;
                }
              });
            }();
          });
        },
        8249: function _(t, e, r) {
          (function (r, i) {
            t.exports = i();
          })(this, function () {
            var t = t || function (t, e) {
              var i;
              if ("undefined" !== typeof window && window.crypto) i = window.crypto;
              if ("undefined" !== typeof self && self.crypto) i = self.crypto;
              if ("undefined" !== typeof globalThis && globalThis.crypto) i = globalThis.crypto;
              if (!i && "undefined" !== typeof window && window.msCrypto) i = window.msCrypto;
              if (!i && "undefined" !== typeof r.g && r.g.crypto) i = r.g.crypto;
              if (!i && "function" === "function") try {
                i = r(2480);
              } catch (t) {}
              var n = function n() {
                if (i) {
                  if ("function" === typeof i.getRandomValues) try {
                    return i.getRandomValues(new Uint32Array(1))[0];
                  } catch (t) {}
                  if ("function" === typeof i.randomBytes) try {
                    return i.randomBytes(4).readInt32LE();
                  } catch (t) {}
                }
                throw new Error("Native crypto module could not be used to get secure random number.");
              };
              var s = Object.create || function () {
                function t() {}
                return function (e) {
                  var r;
                  t.prototype = e;
                  r = new t();
                  t.prototype = null;
                  return r;
                };
              }();
              var a = {};
              var o = a.lib = {};
              var u = o.Base = function () {
                return {
                  extend: function extend(t) {
                    var e = s(this);
                    if (t) e.mixIn(t);
                    if (!e.hasOwnProperty("init") || this.init === e.init) e.init = function () {
                      e.$super.init.apply(this, arguments);
                    };
                    e.init.prototype = e;
                    e.$super = this;
                    return e;
                  },
                  create: function create() {
                    var t = this.extend();
                    t.init.apply(t, arguments);
                    return t;
                  },
                  init: function init() {},
                  mixIn: function mixIn(t) {
                    for (var e in t) {
                      if (t.hasOwnProperty(e)) this[e] = t[e];
                    }
                    if (t.hasOwnProperty("toString")) this.toString = t.toString;
                  },
                  clone: function clone() {
                    return this.init.prototype.extend(this);
                  }
                };
              }();
              var c = o.WordArray = u.extend({
                init: function init(t, r) {
                  t = this.words = t || [];
                  if (r != e) this.sigBytes = r;else this.sigBytes = 4 * t.length;
                },
                toString: function toString(t) {
                  return (t || f).stringify(this);
                },
                concat: function concat(t) {
                  var e = this.words;
                  var r = t.words;
                  var i = this.sigBytes;
                  var n = t.sigBytes;
                  this.clamp();
                  if (i % 4) for (var s = 0; s < n; s++) {
                    var a = r[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                    e[i + s >>> 2] |= a << 24 - (i + s) % 4 * 8;
                  } else for (var o = 0; o < n; o += 4) {
                    e[i + o >>> 2] = r[o >>> 2];
                  }
                  this.sigBytes += n;
                  return this;
                },
                clamp: function clamp() {
                  var e = this.words;
                  var r = this.sigBytes;
                  e[r >>> 2] &= 4294967295 << 32 - r % 4 * 8;
                  e.length = t.ceil(r / 4);
                },
                clone: function clone() {
                  var t = u.clone.call(this);
                  t.words = this.words.slice(0);
                  return t;
                },
                random: function random(t) {
                  var e = [];
                  for (var r = 0; r < t; r += 4) {
                    e.push(n());
                  }
                  return new c.init(e, t);
                }
              });
              var l = a.enc = {};
              var f = l.Hex = {
                stringify: function stringify(t) {
                  var e = t.words;
                  var r = t.sigBytes;
                  var i = [];
                  for (var n = 0; n < r; n++) {
                    var s = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                    i.push((s >>> 4).toString(16));
                    i.push((15 & s).toString(16));
                  }
                  return i.join("");
                },
                parse: function parse(t) {
                  var e = t.length;
                  var r = [];
                  for (var i = 0; i < e; i += 2) {
                    r[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
                  }
                  return new c.init(r, e / 2);
                }
              };
              var h = l.Latin1 = {
                stringify: function stringify(t) {
                  var e = t.words;
                  var r = t.sigBytes;
                  var i = [];
                  for (var n = 0; n < r; n++) {
                    var s = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                    i.push(String.fromCharCode(s));
                  }
                  return i.join("");
                },
                parse: function parse(t) {
                  var e = t.length;
                  var r = [];
                  for (var i = 0; i < e; i++) {
                    r[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
                  }
                  return new c.init(r, e);
                }
              };
              var d = l.Utf8 = {
                stringify: function stringify(t) {
                  try {
                    return decodeURIComponent(escape(h.stringify(t)));
                  } catch (t) {
                    throw new Error("Malformed UTF-8 data");
                  }
                },
                parse: function parse(t) {
                  return h.parse(unescape(encodeURIComponent(t)));
                }
              };
              var v = o.BufferedBlockAlgorithm = u.extend({
                reset: function reset() {
                  this._data = new c.init();
                  this._nDataBytes = 0;
                },
                _append: function _append(t) {
                  if ("string" == typeof t) t = d.parse(t);
                  this._data.concat(t);
                  this._nDataBytes += t.sigBytes;
                },
                _process: function _process(e) {
                  var r;
                  var i = this._data;
                  var n = i.words;
                  var s = i.sigBytes;
                  var a = this.blockSize;
                  var o = 4 * a;
                  var u = s / o;
                  if (e) u = t.ceil(u);else u = t.max((0 | u) - this._minBufferSize, 0);
                  var l = u * a;
                  var f = t.min(4 * l, s);
                  if (l) {
                    for (var h = 0; h < l; h += a) {
                      this._doProcessBlock(n, h);
                    }
                    r = n.splice(0, l);
                    i.sigBytes -= f;
                  }
                  return new c.init(r, f);
                },
                clone: function clone() {
                  var t = u.clone.call(this);
                  t._data = this._data.clone();
                  return t;
                },
                _minBufferSize: 0
              });
              o.Hasher = v.extend({
                cfg: u.extend(),
                init: function init(t) {
                  this.cfg = this.cfg.extend(t);
                  this.reset();
                },
                reset: function reset() {
                  v.reset.call(this);
                  this._doReset();
                },
                update: function update(t) {
                  this._append(t);
                  this._process();
                  return this;
                },
                finalize: function finalize(t) {
                  if (t) this._append(t);
                  var e = this._doFinalize();
                  return e;
                },
                blockSize: 512 / 32,
                _createHelper: function _createHelper(t) {
                  return function (e, r) {
                    return new t.init(r).finalize(e);
                  };
                },
                _createHmacHelper: function _createHmacHelper(t) {
                  return function (e, r) {
                    return new g.HMAC.init(t, r).finalize(e);
                  };
                }
              });
              var g = a.algo = {};
              return a;
            }(Math);
            return t;
          });
        },
        8269: function _(t, e, r) {
          (function (i, n) {
            t.exports = n(r(8249));
          })(this, function (t) {
            (function () {
              var e = t;
              var r = e.lib;
              var i = r.WordArray;
              var n = e.enc;
              n.Base64 = {
                stringify: function stringify(t) {
                  var e = t.words;
                  var r = t.sigBytes;
                  var i = this._map;
                  t.clamp();
                  var n = [];
                  for (var s = 0; s < r; s += 3) {
                    var a = e[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                    var o = e[s + 1 >>> 2] >>> 24 - (s + 1) % 4 * 8 & 255;
                    var u = e[s + 2 >>> 2] >>> 24 - (s + 2) % 4 * 8 & 255;
                    var c = a << 16 | o << 8 | u;
                    for (var l = 0; l < 4 && s + .75 * l < r; l++) {
                      n.push(i.charAt(c >>> 6 * (3 - l) & 63));
                    }
                  }
                  var f = i.charAt(64);
                  if (f) while (n.length % 4) {
                    n.push(f);
                  }
                  return n.join("");
                },
                parse: function parse(t) {
                  var e = t.length;
                  var r = this._map;
                  var i = this._reverseMap;
                  if (!i) {
                    i = this._reverseMap = [];
                    for (var n = 0; n < r.length; n++) {
                      i[r.charCodeAt(n)] = n;
                    }
                  }
                  var s = r.charAt(64);
                  if (s) {
                    var o = t.indexOf(s);
                    if (-1 !== o) e = o;
                  }
                  return a(t, e, i);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
              };
              function a(t, e, r) {
                var n = [];
                var s = 0;
                for (var a = 0; a < e; a++) {
                  if (a % 4) {
                    var o = r[t.charCodeAt(a - 1)] << a % 4 * 2;
                    var u = r[t.charCodeAt(a)] >>> 6 - a % 4 * 2;
                    var c = o | u;
                    n[s >>> 2] |= c << 24 - s % 4 * 8;
                    s++;
                  }
                }
                return i.create(n, s);
              }
            })();
            return t.enc.Base64;
          });
        },
        3786: function _(t, e, r) {
          (function (i, n) {
            t.exports = n(r(8249));
          })(this, function (t) {
            (function () {
              var e = t;
              var r = e.lib;
              var i = r.WordArray;
              var n = e.enc;
              n.Base64url = {
                stringify: function stringify(t) {
                  var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                  var r = t.words;
                  var i = t.sigBytes;
                  var n = e ? this._safe_map : this._map;
                  t.clamp();
                  var s = [];
                  for (var a = 0; a < i; a += 3) {
                    var o = r[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                    var u = r[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255;
                    var c = r[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255;
                    var l = o << 16 | u << 8 | c;
                    for (var f = 0; f < 4 && a + .75 * f < i; f++) {
                      s.push(n.charAt(l >>> 6 * (3 - f) & 63));
                    }
                  }
                  var h = n.charAt(64);
                  if (h) while (s.length % 4) {
                    s.push(h);
                  }
                  return s.join("");
                },
                parse: function parse(t) {
                  var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                  var r = t.length;
                  var i = e ? this._safe_map : this._map;
                  var n = this._reverseMap;
                  if (!n) {
                    n = this._reverseMap = [];
                    for (var s = 0; s < i.length; s++) {
                      n[i.charCodeAt(s)] = s;
                    }
                  }
                  var o = i.charAt(64);
                  if (o) {
                    var u = t.indexOf(o);
                    if (-1 !== u) r = u;
                  }
                  return a(t, r, n);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
              };
              function a(t, e, r) {
                var n = [];
                var s = 0;
                for (var a = 0; a < e; a++) {
                  if (a % 4) {
                    var o = r[t.charCodeAt(a - 1)] << a % 4 * 2;
                    var u = r[t.charCodeAt(a)] >>> 6 - a % 4 * 2;
                    var c = o | u;
                    n[s >>> 2] |= c << 24 - s % 4 * 8;
                    s++;
                  }
                }
                return i.create(n, s);
              }
            })();
            return t.enc.Base64url;
          });
        },
        298: function _(t, e, r) {
          (function (i, n) {
            t.exports = n(r(8249));
          })(this, function (t) {
            (function () {
              var e = t;
              var r = e.lib;
              var i = r.WordArray;
              var n = e.enc;
              n.Utf16 = n.Utf16BE = {
                stringify: function stringify(t) {
                  var e = t.words;
                  var r = t.sigBytes;
                  var i = [];
                  for (var n = 0; n < r; n += 2) {
                    var s = e[n >>> 2] >>> 16 - n % 4 * 8 & 65535;
                    i.push(String.fromCharCode(s));
                  }
                  return i.join("");
                },
                parse: function parse(t) {
                  var e = t.length;
                  var r = [];
                  for (var n = 0; n < e; n++) {
                    r[n >>> 1] |= t.charCodeAt(n) << 16 - n % 2 * 16;
                  }
                  return i.create(r, 2 * e);
                }
              };
              n.Utf16LE = {
                stringify: function stringify(t) {
                  var e = t.words;
                  var r = t.sigBytes;
                  var i = [];
                  for (var n = 0; n < r; n += 2) {
                    var s = a(e[n >>> 2] >>> 16 - n % 4 * 8 & 65535);
                    i.push(String.fromCharCode(s));
                  }
                  return i.join("");
                },
                parse: function parse(t) {
                  var e = t.length;
                  var r = [];
                  for (var n = 0; n < e; n++) {
                    r[n >>> 1] |= a(t.charCodeAt(n) << 16 - n % 2 * 16);
                  }
                  return i.create(r, 2 * e);
                }
              };
              function a(t) {
                return t << 8 & 4278255360 | t >>> 8 & 16711935;
              }
            })();
            return t.enc.Utf16;
          });
        },
        888: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(2783), r(9824));
          })(this, function (t) {
            (function () {
              var e = t;
              var r = e.lib;
              var i = r.Base;
              var n = r.WordArray;
              var s = e.algo;
              var a = s.MD5;
              var o = s.EvpKDF = i.extend({
                cfg: i.extend({
                  keySize: 128 / 32,
                  hasher: a,
                  iterations: 1
                }),
                init: function init(t) {
                  this.cfg = this.cfg.extend(t);
                },
                compute: function compute(t, e) {
                  var r;
                  var i = this.cfg;
                  var s = i.hasher.create();
                  var a = n.create();
                  var o = a.words;
                  var u = i.keySize;
                  var c = i.iterations;
                  while (o.length < u) {
                    if (r) s.update(r);
                    r = s.update(t).finalize(e);
                    s.reset();
                    for (var l = 1; l < c; l++) {
                      r = s.finalize(r);
                      s.reset();
                    }
                    a.concat(r);
                  }
                  a.sigBytes = 4 * u;
                  return a;
                }
              });
              e.EvpKDF = function (t, e, r) {
                return o.create(r).compute(t, e);
              };
            })();
            return t.EvpKDF;
          });
        },
        2209: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(5109));
          })(this, function (t) {
            (function (e) {
              var r = t;
              var i = r.lib;
              var n = i.CipherParams;
              var s = r.enc;
              var a = s.Hex;
              var o = r.format;
              o.Hex = {
                stringify: function stringify(t) {
                  return t.ciphertext.toString(a);
                },
                parse: function parse(t) {
                  var e = a.parse(t);
                  return n.create({
                    ciphertext: e
                  });
                }
              };
            })();
            return t.format.Hex;
          });
        },
        9824: function _(t, e, r) {
          (function (i, n) {
            t.exports = n(r(8249));
          })(this, function (t) {
            (function () {
              var e = t;
              var r = e.lib;
              var i = r.Base;
              var n = e.enc;
              var s = n.Utf8;
              var a = e.algo;
              a.HMAC = i.extend({
                init: function init(t, e) {
                  t = this._hasher = new t.init();
                  if ("string" == typeof e) e = s.parse(e);
                  var r = t.blockSize;
                  var i = 4 * r;
                  if (e.sigBytes > i) e = t.finalize(e);
                  e.clamp();
                  var n = this._oKey = e.clone();
                  var a = this._iKey = e.clone();
                  var o = n.words;
                  var u = a.words;
                  for (var c = 0; c < r; c++) {
                    o[c] ^= 1549556828;
                    u[c] ^= 909522486;
                  }
                  n.sigBytes = a.sigBytes = i;
                  this.reset();
                },
                reset: function reset() {
                  var t = this._hasher;
                  t.reset();
                  t.update(this._iKey);
                },
                update: function update(t) {
                  this._hasher.update(t);
                  return this;
                },
                finalize: function finalize(t) {
                  var e = this._hasher;
                  var r = e.finalize(t);
                  e.reset();
                  var i = e.finalize(this._oKey.clone().concat(r));
                  return i;
                }
              });
            })();
          });
        },
        1354: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(4938), r(4433), r(298), r(8269), r(3786), r(8214), r(2783), r(2153), r(7792), r(34), r(7460), r(3327), r(706), r(9824), r(2112), r(888), r(5109), r(8568), r(4242), r(9968), r(7660), r(1148), r(3615), r(2807), r(1077), r(6475), r(6991), r(2209), r(452), r(4253), r(1857), r(4454), r(3974));
          })(this, function (t) {
            return t;
          });
        },
        4433: function _(t, e, r) {
          (function (i, n) {
            t.exports = n(r(8249));
          })(this, function (t) {
            (function () {
              if ("function" != typeof ArrayBuffer) return;
              var e = t;
              var r = e.lib;
              var i = r.WordArray;
              var n = i.init;
              var s = i.init = function (t) {
                if (t instanceof ArrayBuffer) t = new Uint8Array(t);
                if (t instanceof Int8Array || "undefined" !== typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
                if (t instanceof Uint8Array) {
                  var e = t.byteLength;
                  var r = [];
                  for (var i = 0; i < e; i++) {
                    r[i >>> 2] |= t[i] << 24 - i % 4 * 8;
                  }
                  n.call(this, r, e);
                } else n.apply(this, arguments);
              };
              s.prototype = i;
            })();
            return t.lib.WordArray;
          });
        },
        8214: function _(t, e, r) {
          (function (i, n) {
            t.exports = n(r(8249));
          })(this, function (t) {
            (function (e) {
              var r = t;
              var i = r.lib;
              var n = i.WordArray;
              var s = i.Hasher;
              var a = r.algo;
              var o = [];
              (function () {
                for (var t = 0; t < 64; t++) {
                  o[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;
                }
              })();
              var u = a.MD5 = s.extend({
                _doReset: function _doReset() {
                  this._hash = new n.init([1732584193, 4023233417, 2562383102, 271733878]);
                },
                _doProcessBlock: function _doProcessBlock(t, e) {
                  for (var r = 0; r < 16; r++) {
                    var i = e + r;
                    var n = t[i];
                    t[i] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
                  }
                  var s = this._hash.words;
                  var a = t[e + 0];
                  var u = t[e + 1];
                  var d = t[e + 2];
                  var v = t[e + 3];
                  var p = t[e + 4];
                  var g = t[e + 5];
                  var y = t[e + 6];
                  var m = t[e + 7];
                  var w = t[e + 8];
                  var S = t[e + 9];
                  var _ = t[e + 10];
                  var b = t[e + 11];
                  var E = t[e + 12];
                  var D = t[e + 13];
                  var M = t[e + 14];
                  var T = t[e + 15];
                  var I = s[0];
                  var A = s[1];
                  var x = s[2];
                  var R = s[3];
                  I = c(I, A, x, R, a, 7, o[0]);
                  R = c(R, I, A, x, u, 12, o[1]);
                  x = c(x, R, I, A, d, 17, o[2]);
                  A = c(A, x, R, I, v, 22, o[3]);
                  I = c(I, A, x, R, p, 7, o[4]);
                  R = c(R, I, A, x, g, 12, o[5]);
                  x = c(x, R, I, A, y, 17, o[6]);
                  A = c(A, x, R, I, m, 22, o[7]);
                  I = c(I, A, x, R, w, 7, o[8]);
                  R = c(R, I, A, x, S, 12, o[9]);
                  x = c(x, R, I, A, _, 17, o[10]);
                  A = c(A, x, R, I, b, 22, o[11]);
                  I = c(I, A, x, R, E, 7, o[12]);
                  R = c(R, I, A, x, D, 12, o[13]);
                  x = c(x, R, I, A, M, 17, o[14]);
                  A = c(A, x, R, I, T, 22, o[15]);
                  I = l(I, A, x, R, u, 5, o[16]);
                  R = l(R, I, A, x, y, 9, o[17]);
                  x = l(x, R, I, A, b, 14, o[18]);
                  A = l(A, x, R, I, a, 20, o[19]);
                  I = l(I, A, x, R, g, 5, o[20]);
                  R = l(R, I, A, x, _, 9, o[21]);
                  x = l(x, R, I, A, T, 14, o[22]);
                  A = l(A, x, R, I, p, 20, o[23]);
                  I = l(I, A, x, R, S, 5, o[24]);
                  R = l(R, I, A, x, M, 9, o[25]);
                  x = l(x, R, I, A, v, 14, o[26]);
                  A = l(A, x, R, I, w, 20, o[27]);
                  I = l(I, A, x, R, D, 5, o[28]);
                  R = l(R, I, A, x, d, 9, o[29]);
                  x = l(x, R, I, A, m, 14, o[30]);
                  A = l(A, x, R, I, E, 20, o[31]);
                  I = f(I, A, x, R, g, 4, o[32]);
                  R = f(R, I, A, x, w, 11, o[33]);
                  x = f(x, R, I, A, b, 16, o[34]);
                  A = f(A, x, R, I, M, 23, o[35]);
                  I = f(I, A, x, R, u, 4, o[36]);
                  R = f(R, I, A, x, p, 11, o[37]);
                  x = f(x, R, I, A, m, 16, o[38]);
                  A = f(A, x, R, I, _, 23, o[39]);
                  I = f(I, A, x, R, D, 4, o[40]);
                  R = f(R, I, A, x, a, 11, o[41]);
                  x = f(x, R, I, A, v, 16, o[42]);
                  A = f(A, x, R, I, y, 23, o[43]);
                  I = f(I, A, x, R, S, 4, o[44]);
                  R = f(R, I, A, x, E, 11, o[45]);
                  x = f(x, R, I, A, T, 16, o[46]);
                  A = f(A, x, R, I, d, 23, o[47]);
                  I = h(I, A, x, R, a, 6, o[48]);
                  R = h(R, I, A, x, m, 10, o[49]);
                  x = h(x, R, I, A, M, 15, o[50]);
                  A = h(A, x, R, I, g, 21, o[51]);
                  I = h(I, A, x, R, E, 6, o[52]);
                  R = h(R, I, A, x, v, 10, o[53]);
                  x = h(x, R, I, A, _, 15, o[54]);
                  A = h(A, x, R, I, u, 21, o[55]);
                  I = h(I, A, x, R, w, 6, o[56]);
                  R = h(R, I, A, x, T, 10, o[57]);
                  x = h(x, R, I, A, y, 15, o[58]);
                  A = h(A, x, R, I, D, 21, o[59]);
                  I = h(I, A, x, R, p, 6, o[60]);
                  R = h(R, I, A, x, b, 10, o[61]);
                  x = h(x, R, I, A, d, 15, o[62]);
                  A = h(A, x, R, I, S, 21, o[63]);
                  s[0] = s[0] + I | 0;
                  s[1] = s[1] + A | 0;
                  s[2] = s[2] + x | 0;
                  s[3] = s[3] + R | 0;
                },
                _doFinalize: function _doFinalize() {
                  var t = this._data;
                  var r = t.words;
                  var i = 8 * this._nDataBytes;
                  var n = 8 * t.sigBytes;
                  r[n >>> 5] |= 128 << 24 - n % 32;
                  var s = e.floor(i / 4294967296);
                  var a = i;
                  r[(n + 64 >>> 9 << 4) + 15] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
                  r[(n + 64 >>> 9 << 4) + 14] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
                  t.sigBytes = 4 * (r.length + 1);
                  this._process();
                  var o = this._hash;
                  var u = o.words;
                  for (var c = 0; c < 4; c++) {
                    var l = u[c];
                    u[c] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
                  }
                  return o;
                },
                clone: function clone() {
                  var t = s.clone.call(this);
                  t._hash = this._hash.clone();
                  return t;
                }
              });
              function c(t, e, r, i, n, s, a) {
                var o = t + (e & r | ~e & i) + n + a;
                return (o << s | o >>> 32 - s) + e;
              }
              function l(t, e, r, i, n, s, a) {
                var o = t + (e & i | r & ~i) + n + a;
                return (o << s | o >>> 32 - s) + e;
              }
              function f(t, e, r, i, n, s, a) {
                var o = t + (e ^ r ^ i) + n + a;
                return (o << s | o >>> 32 - s) + e;
              }
              function h(t, e, r, i, n, s, a) {
                var o = t + (r ^ (e | ~i)) + n + a;
                return (o << s | o >>> 32 - s) + e;
              }
              r.MD5 = s._createHelper(u);
              r.HmacMD5 = s._createHmacHelper(u);
            })(Math);
            return t.MD5;
          });
        },
        8568: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(5109));
          })(this, function (t) {
            t.mode.CFB = function () {
              var e = t.lib.BlockCipherMode.extend();
              e.Encryptor = e.extend({
                processBlock: function processBlock(t, e) {
                  var i = this._cipher;
                  var n = i.blockSize;
                  r.call(this, t, e, n, i);
                  this._prevBlock = t.slice(e, e + n);
                }
              });
              e.Decryptor = e.extend({
                processBlock: function processBlock(t, e) {
                  var i = this._cipher;
                  var n = i.blockSize;
                  var s = t.slice(e, e + n);
                  r.call(this, t, e, n, i);
                  this._prevBlock = s;
                }
              });
              function r(t, e, r, i) {
                var n;
                var s = this._iv;
                if (s) {
                  n = s.slice(0);
                  this._iv = void 0;
                } else n = this._prevBlock;
                i.encryptBlock(n, 0);
                for (var a = 0; a < r; a++) {
                  t[e + a] ^= n[a];
                }
              }
              return e;
            }();
            return t.mode.CFB;
          });
        },
        9968: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(5109));
          })(this, function (t) {
            t.mode.CTRGladman = function () {
              var e = t.lib.BlockCipherMode.extend();
              function r(t) {
                if (255 === (t >> 24 & 255)) {
                  var e = t >> 16 & 255;
                  var r = t >> 8 & 255;
                  var i = 255 & t;
                  if (255 === e) {
                    e = 0;
                    if (255 === r) {
                      r = 0;
                      if (255 === i) i = 0;else ++i;
                    } else ++r;
                  } else ++e;
                  t = 0;
                  t += e << 16;
                  t += r << 8;
                  t += i;
                } else t += 1 << 24;
                return t;
              }
              function i(t) {
                if (0 === (t[0] = r(t[0]))) t[1] = r(t[1]);
                return t;
              }
              var n = e.Encryptor = e.extend({
                processBlock: function processBlock(t, e) {
                  var r = this._cipher;
                  var n = r.blockSize;
                  var s = this._iv;
                  var a = this._counter;
                  if (s) {
                    a = this._counter = s.slice(0);
                    this._iv = void 0;
                  }
                  i(a);
                  var o = a.slice(0);
                  r.encryptBlock(o, 0);
                  for (var u = 0; u < n; u++) {
                    t[e + u] ^= o[u];
                  }
                }
              });
              e.Decryptor = n;
              return e;
            }();
            return t.mode.CTRGladman;
          });
        },
        4242: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(5109));
          })(this, function (t) {
            t.mode.CTR = function () {
              var e = t.lib.BlockCipherMode.extend();
              var r = e.Encryptor = e.extend({
                processBlock: function processBlock(t, e) {
                  var r = this._cipher;
                  var i = r.blockSize;
                  var n = this._iv;
                  var s = this._counter;
                  if (n) {
                    s = this._counter = n.slice(0);
                    this._iv = void 0;
                  }
                  var a = s.slice(0);
                  r.encryptBlock(a, 0);
                  s[i - 1] = s[i - 1] + 1 | 0;
                  for (var o = 0; o < i; o++) {
                    t[e + o] ^= a[o];
                  }
                }
              });
              e.Decryptor = r;
              return e;
            }();
            return t.mode.CTR;
          });
        },
        1148: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(5109));
          })(this, function (t) {
            t.mode.ECB = function () {
              var e = t.lib.BlockCipherMode.extend();
              e.Encryptor = e.extend({
                processBlock: function processBlock(t, e) {
                  this._cipher.encryptBlock(t, e);
                }
              });
              e.Decryptor = e.extend({
                processBlock: function processBlock(t, e) {
                  this._cipher.decryptBlock(t, e);
                }
              });
              return e;
            }();
            return t.mode.ECB;
          });
        },
        7660: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(5109));
          })(this, function (t) {
            t.mode.OFB = function () {
              var e = t.lib.BlockCipherMode.extend();
              var r = e.Encryptor = e.extend({
                processBlock: function processBlock(t, e) {
                  var r = this._cipher;
                  var i = r.blockSize;
                  var n = this._iv;
                  var s = this._keystream;
                  if (n) {
                    s = this._keystream = n.slice(0);
                    this._iv = void 0;
                  }
                  r.encryptBlock(s, 0);
                  for (var a = 0; a < i; a++) {
                    t[e + a] ^= s[a];
                  }
                }
              });
              e.Decryptor = r;
              return e;
            }();
            return t.mode.OFB;
          });
        },
        3615: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(5109));
          })(this, function (t) {
            t.pad.AnsiX923 = {
              pad: function pad(t, e) {
                var r = t.sigBytes;
                var i = 4 * e;
                var n = i - r % i;
                var s = r + n - 1;
                t.clamp();
                t.words[s >>> 2] |= n << 24 - s % 4 * 8;
                t.sigBytes += n;
              },
              unpad: function unpad(t) {
                var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                t.sigBytes -= e;
              }
            };
            return t.pad.Ansix923;
          });
        },
        2807: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(5109));
          })(this, function (t) {
            t.pad.Iso10126 = {
              pad: function pad(e, r) {
                var i = 4 * r;
                var n = i - e.sigBytes % i;
                e.concat(t.lib.WordArray.random(n - 1)).concat(t.lib.WordArray.create([n << 24], 1));
              },
              unpad: function unpad(t) {
                var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                t.sigBytes -= e;
              }
            };
            return t.pad.Iso10126;
          });
        },
        1077: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(5109));
          })(this, function (t) {
            t.pad.Iso97971 = {
              pad: function pad(e, r) {
                e.concat(t.lib.WordArray.create([2147483648], 1));
                t.pad.ZeroPadding.pad(e, r);
              },
              unpad: function unpad(e) {
                t.pad.ZeroPadding.unpad(e);
                e.sigBytes--;
              }
            };
            return t.pad.Iso97971;
          });
        },
        6991: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(5109));
          })(this, function (t) {
            t.pad.NoPadding = {
              pad: function pad() {},
              unpad: function unpad() {}
            };
            return t.pad.NoPadding;
          });
        },
        6475: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(5109));
          })(this, function (t) {
            t.pad.ZeroPadding = {
              pad: function pad(t, e) {
                var r = 4 * e;
                t.clamp();
                t.sigBytes += r - (t.sigBytes % r || r);
              },
              unpad: function unpad(t) {
                var e = t.words;
                var r = t.sigBytes - 1;
                for (var r = t.sigBytes - 1; r >= 0; r--) {
                  if (e[r >>> 2] >>> 24 - r % 4 * 8 & 255) {
                    t.sigBytes = r + 1;
                    break;
                  }
                }
              }
            };
            return t.pad.ZeroPadding;
          });
        },
        2112: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(2783), r(9824));
          })(this, function (t) {
            (function () {
              var e = t;
              var r = e.lib;
              var i = r.Base;
              var n = r.WordArray;
              var s = e.algo;
              var a = s.SHA1;
              var o = s.HMAC;
              var u = s.PBKDF2 = i.extend({
                cfg: i.extend({
                  keySize: 128 / 32,
                  hasher: a,
                  iterations: 1
                }),
                init: function init(t) {
                  this.cfg = this.cfg.extend(t);
                },
                compute: function compute(t, e) {
                  var r = this.cfg;
                  var i = o.create(r.hasher, t);
                  var s = n.create();
                  var a = n.create([1]);
                  var u = s.words;
                  var c = a.words;
                  var l = r.keySize;
                  var f = r.iterations;
                  while (u.length < l) {
                    var h = i.update(e).finalize(a);
                    i.reset();
                    var d = h.words;
                    var v = d.length;
                    var p = h;
                    for (var g = 1; g < f; g++) {
                      p = i.finalize(p);
                      i.reset();
                      var y = p.words;
                      for (var m = 0; m < v; m++) {
                        d[m] ^= y[m];
                      }
                    }
                    s.concat(h);
                    c[0]++;
                  }
                  s.sigBytes = 4 * l;
                  return s;
                }
              });
              e.PBKDF2 = function (t, e, r) {
                return u.create(r).compute(t, e);
              };
            })();
            return t.PBKDF2;
          });
        },
        3974: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(8269), r(8214), r(888), r(5109));
          })(this, function (t) {
            (function () {
              var e = t;
              var r = e.lib;
              var i = r.StreamCipher;
              var n = e.algo;
              var s = [];
              var a = [];
              var o = [];
              var u = n.RabbitLegacy = i.extend({
                _doReset: function _doReset() {
                  var t = this._key.words;
                  var e = this.cfg.iv;
                  var r = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16];
                  var i = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]];
                  this._b = 0;
                  for (var n = 0; n < 4; n++) {
                    c.call(this);
                  }
                  for (var n = 0; n < 8; n++) {
                    i[n] ^= r[n + 4 & 7];
                  }
                  if (e) {
                    var s = e.words;
                    var a = s[0];
                    var o = s[1];
                    var u = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
                    var l = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                    var f = u >>> 16 | 4294901760 & l;
                    var h = l << 16 | 65535 & u;
                    i[0] ^= u;
                    i[1] ^= f;
                    i[2] ^= l;
                    i[3] ^= h;
                    i[4] ^= u;
                    i[5] ^= f;
                    i[6] ^= l;
                    i[7] ^= h;
                    for (var n = 0; n < 4; n++) {
                      c.call(this);
                    }
                  }
                },
                _doProcessBlock: function _doProcessBlock(t, e) {
                  var r = this._X;
                  c.call(this);
                  s[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16;
                  s[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16;
                  s[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16;
                  s[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;
                  for (var i = 0; i < 4; i++) {
                    s[i] = 16711935 & (s[i] << 8 | s[i] >>> 24) | 4278255360 & (s[i] << 24 | s[i] >>> 8);
                    t[e + i] ^= s[i];
                  }
                },
                blockSize: 128 / 32,
                ivSize: 64 / 32
              });
              function c() {
                var t = this._X;
                var e = this._C;
                for (var r = 0; r < 8; r++) {
                  a[r] = e[r];
                }
                e[0] = e[0] + 1295307597 + this._b | 0;
                e[1] = e[1] + 3545052371 + (e[0] >>> 0 < a[0] >>> 0 ? 1 : 0) | 0;
                e[2] = e[2] + 886263092 + (e[1] >>> 0 < a[1] >>> 0 ? 1 : 0) | 0;
                e[3] = e[3] + 1295307597 + (e[2] >>> 0 < a[2] >>> 0 ? 1 : 0) | 0;
                e[4] = e[4] + 3545052371 + (e[3] >>> 0 < a[3] >>> 0 ? 1 : 0) | 0;
                e[5] = e[5] + 886263092 + (e[4] >>> 0 < a[4] >>> 0 ? 1 : 0) | 0;
                e[6] = e[6] + 1295307597 + (e[5] >>> 0 < a[5] >>> 0 ? 1 : 0) | 0;
                e[7] = e[7] + 3545052371 + (e[6] >>> 0 < a[6] >>> 0 ? 1 : 0) | 0;
                this._b = e[7] >>> 0 < a[7] >>> 0 ? 1 : 0;
                for (var r = 0; r < 8; r++) {
                  var i = t[r] + e[r];
                  var n = 65535 & i;
                  var s = i >>> 16;
                  var u = ((n * n >>> 17) + n * s >>> 15) + s * s;
                  var c = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0);
                  o[r] = u ^ c;
                }
                t[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0;
                t[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0;
                t[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0;
                t[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0;
                t[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0;
                t[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0;
                t[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0;
                t[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0;
              }
              e.RabbitLegacy = i._createHelper(u);
            })();
            return t.RabbitLegacy;
          });
        },
        4454: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(8269), r(8214), r(888), r(5109));
          })(this, function (t) {
            (function () {
              var e = t;
              var r = e.lib;
              var i = r.StreamCipher;
              var n = e.algo;
              var s = [];
              var a = [];
              var o = [];
              var u = n.Rabbit = i.extend({
                _doReset: function _doReset() {
                  var t = this._key.words;
                  var e = this.cfg.iv;
                  for (var r = 0; r < 4; r++) {
                    t[r] = 16711935 & (t[r] << 8 | t[r] >>> 24) | 4278255360 & (t[r] << 24 | t[r] >>> 8);
                  }
                  var i = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16];
                  var n = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]];
                  this._b = 0;
                  for (var r = 0; r < 4; r++) {
                    c.call(this);
                  }
                  for (var r = 0; r < 8; r++) {
                    n[r] ^= i[r + 4 & 7];
                  }
                  if (e) {
                    var s = e.words;
                    var a = s[0];
                    var o = s[1];
                    var u = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
                    var l = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                    var f = u >>> 16 | 4294901760 & l;
                    var h = l << 16 | 65535 & u;
                    n[0] ^= u;
                    n[1] ^= f;
                    n[2] ^= l;
                    n[3] ^= h;
                    n[4] ^= u;
                    n[5] ^= f;
                    n[6] ^= l;
                    n[7] ^= h;
                    for (var r = 0; r < 4; r++) {
                      c.call(this);
                    }
                  }
                },
                _doProcessBlock: function _doProcessBlock(t, e) {
                  var r = this._X;
                  c.call(this);
                  s[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16;
                  s[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16;
                  s[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16;
                  s[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;
                  for (var i = 0; i < 4; i++) {
                    s[i] = 16711935 & (s[i] << 8 | s[i] >>> 24) | 4278255360 & (s[i] << 24 | s[i] >>> 8);
                    t[e + i] ^= s[i];
                  }
                },
                blockSize: 128 / 32,
                ivSize: 64 / 32
              });
              function c() {
                var t = this._X;
                var e = this._C;
                for (var r = 0; r < 8; r++) {
                  a[r] = e[r];
                }
                e[0] = e[0] + 1295307597 + this._b | 0;
                e[1] = e[1] + 3545052371 + (e[0] >>> 0 < a[0] >>> 0 ? 1 : 0) | 0;
                e[2] = e[2] + 886263092 + (e[1] >>> 0 < a[1] >>> 0 ? 1 : 0) | 0;
                e[3] = e[3] + 1295307597 + (e[2] >>> 0 < a[2] >>> 0 ? 1 : 0) | 0;
                e[4] = e[4] + 3545052371 + (e[3] >>> 0 < a[3] >>> 0 ? 1 : 0) | 0;
                e[5] = e[5] + 886263092 + (e[4] >>> 0 < a[4] >>> 0 ? 1 : 0) | 0;
                e[6] = e[6] + 1295307597 + (e[5] >>> 0 < a[5] >>> 0 ? 1 : 0) | 0;
                e[7] = e[7] + 3545052371 + (e[6] >>> 0 < a[6] >>> 0 ? 1 : 0) | 0;
                this._b = e[7] >>> 0 < a[7] >>> 0 ? 1 : 0;
                for (var r = 0; r < 8; r++) {
                  var i = t[r] + e[r];
                  var n = 65535 & i;
                  var s = i >>> 16;
                  var u = ((n * n >>> 17) + n * s >>> 15) + s * s;
                  var c = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0);
                  o[r] = u ^ c;
                }
                t[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0;
                t[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0;
                t[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0;
                t[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0;
                t[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0;
                t[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0;
                t[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0;
                t[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0;
              }
              e.Rabbit = i._createHelper(u);
            })();
            return t.Rabbit;
          });
        },
        1857: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(8269), r(8214), r(888), r(5109));
          })(this, function (t) {
            (function () {
              var e = t;
              var r = e.lib;
              var i = r.StreamCipher;
              var n = e.algo;
              var s = n.RC4 = i.extend({
                _doReset: function _doReset() {
                  var t = this._key;
                  var e = t.words;
                  var r = t.sigBytes;
                  var i = this._S = [];
                  for (var n = 0; n < 256; n++) {
                    i[n] = n;
                  }
                  for (var n = 0, s = 0; n < 256; n++) {
                    var a = n % r;
                    var o = e[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                    s = (s + i[n] + o) % 256;
                    var u = i[n];
                    i[n] = i[s];
                    i[s] = u;
                  }
                  this._i = this._j = 0;
                },
                _doProcessBlock: function _doProcessBlock(t, e) {
                  t[e] ^= a.call(this);
                },
                keySize: 256 / 32,
                ivSize: 0
              });
              function a() {
                var t = this._S;
                var e = this._i;
                var r = this._j;
                var i = 0;
                for (var n = 0; n < 4; n++) {
                  e = (e + 1) % 256;
                  r = (r + t[e]) % 256;
                  var s = t[e];
                  t[e] = t[r];
                  t[r] = s;
                  i |= t[(t[e] + t[r]) % 256] << 24 - 8 * n;
                }
                this._i = e;
                this._j = r;
                return i;
              }
              e.RC4 = i._createHelper(s);
              var o = n.RC4Drop = s.extend({
                cfg: s.cfg.extend({
                  drop: 192
                }),
                _doReset: function _doReset() {
                  s._doReset.call(this);
                  for (var t = this.cfg.drop; t > 0; t--) {
                    a.call(this);
                  }
                }
              });
              e.RC4Drop = i._createHelper(o);
            })();
            return t.RC4;
          });
        },
        706: function _(t, e, r) {
          (function (i, n) {
            t.exports = n(r(8249));
          })(this, function (t) {
            (function (e) {
              var r = t;
              var i = r.lib;
              var n = i.WordArray;
              var s = i.Hasher;
              var a = r.algo;
              var o = n.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
              var u = n.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
              var c = n.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
              var l = n.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
              var f = n.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
              var h = n.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
              var d = a.RIPEMD160 = s.extend({
                _doReset: function _doReset() {
                  this._hash = n.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
                },
                _doProcessBlock: function _doProcessBlock(t, e) {
                  for (var r = 0; r < 16; r++) {
                    var i = e + r;
                    var n = t[i];
                    t[i] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
                  }
                  var s = this._hash.words;
                  var a = f.words;
                  var d = h.words;
                  var S = o.words;
                  var _ = u.words;
                  var b = c.words;
                  var E = l.words;
                  var D, M, T, I, A;
                  var x, R, B, O, k;
                  x = D = s[0];
                  R = M = s[1];
                  B = T = s[2];
                  O = I = s[3];
                  k = A = s[4];
                  var C;
                  for (var r = 0; r < 80; r += 1) {
                    C = D + t[e + S[r]] | 0;
                    if (r < 16) C += v(M, T, I) + a[0];else if (r < 32) C += p(M, T, I) + a[1];else if (r < 48) C += g(M, T, I) + a[2];else if (r < 64) C += y(M, T, I) + a[3];else C += m(M, T, I) + a[4];
                    C |= 0;
                    C = w(C, b[r]);
                    C = C + A | 0;
                    D = A;
                    A = I;
                    I = w(T, 10);
                    T = M;
                    M = C;
                    C = x + t[e + _[r]] | 0;
                    if (r < 16) C += m(R, B, O) + d[0];else if (r < 32) C += y(R, B, O) + d[1];else if (r < 48) C += g(R, B, O) + d[2];else if (r < 64) C += p(R, B, O) + d[3];else C += v(R, B, O) + d[4];
                    C |= 0;
                    C = w(C, E[r]);
                    C = C + k | 0;
                    x = k;
                    k = O;
                    O = w(B, 10);
                    B = R;
                    R = C;
                  }
                  C = s[1] + T + O | 0;
                  s[1] = s[2] + I + k | 0;
                  s[2] = s[3] + A + x | 0;
                  s[3] = s[4] + D + R | 0;
                  s[4] = s[0] + M + B | 0;
                  s[0] = C;
                },
                _doFinalize: function _doFinalize() {
                  var t = this._data;
                  var e = t.words;
                  var r = 8 * this._nDataBytes;
                  var i = 8 * t.sigBytes;
                  e[i >>> 5] |= 128 << 24 - i % 32;
                  e[(i + 64 >>> 9 << 4) + 14] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
                  t.sigBytes = 4 * (e.length + 1);
                  this._process();
                  var n = this._hash;
                  var s = n.words;
                  for (var a = 0; a < 5; a++) {
                    var o = s[a];
                    s[a] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                  }
                  return n;
                },
                clone: function clone() {
                  var t = s.clone.call(this);
                  t._hash = this._hash.clone();
                  return t;
                }
              });
              function v(t, e, r) {
                return t ^ e ^ r;
              }
              function p(t, e, r) {
                return t & e | ~t & r;
              }
              function g(t, e, r) {
                return (t | ~e) ^ r;
              }
              function y(t, e, r) {
                return t & r | e & ~r;
              }
              function m(t, e, r) {
                return t ^ (e | ~r);
              }
              function w(t, e) {
                return t << e | t >>> 32 - e;
              }
              r.RIPEMD160 = s._createHelper(d);
              r.HmacRIPEMD160 = s._createHmacHelper(d);
            })();
            return t.RIPEMD160;
          });
        },
        2783: function _(t, e, r) {
          (function (i, n) {
            t.exports = n(r(8249));
          })(this, function (t) {
            (function () {
              var e = t;
              var r = e.lib;
              var i = r.WordArray;
              var n = r.Hasher;
              var s = e.algo;
              var a = [];
              var o = s.SHA1 = n.extend({
                _doReset: function _doReset() {
                  this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
                },
                _doProcessBlock: function _doProcessBlock(t, e) {
                  var r = this._hash.words;
                  var i = r[0];
                  var n = r[1];
                  var s = r[2];
                  var o = r[3];
                  var u = r[4];
                  for (var c = 0; c < 80; c++) {
                    if (c < 16) a[c] = 0 | t[e + c];else {
                      var l = a[c - 3] ^ a[c - 8] ^ a[c - 14] ^ a[c - 16];
                      a[c] = l << 1 | l >>> 31;
                    }
                    var f = (i << 5 | i >>> 27) + u + a[c];
                    if (c < 20) f += (n & s | ~n & o) + 1518500249;else if (c < 40) f += (n ^ s ^ o) + 1859775393;else if (c < 60) f += (n & s | n & o | s & o) - 1894007588;else f += (n ^ s ^ o) - 899497514;
                    u = o;
                    o = s;
                    s = n << 30 | n >>> 2;
                    n = i;
                    i = f;
                  }
                  r[0] = r[0] + i | 0;
                  r[1] = r[1] + n | 0;
                  r[2] = r[2] + s | 0;
                  r[3] = r[3] + o | 0;
                  r[4] = r[4] + u | 0;
                },
                _doFinalize: function _doFinalize() {
                  var t = this._data;
                  var e = t.words;
                  var r = 8 * this._nDataBytes;
                  var i = 8 * t.sigBytes;
                  e[i >>> 5] |= 128 << 24 - i % 32;
                  e[(i + 64 >>> 9 << 4) + 14] = Math.floor(r / 4294967296);
                  e[(i + 64 >>> 9 << 4) + 15] = r;
                  t.sigBytes = 4 * e.length;
                  this._process();
                  return this._hash;
                },
                clone: function clone() {
                  var t = n.clone.call(this);
                  t._hash = this._hash.clone();
                  return t;
                }
              });
              e.SHA1 = n._createHelper(o);
              e.HmacSHA1 = n._createHmacHelper(o);
            })();
            return t.SHA1;
          });
        },
        7792: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(2153));
          })(this, function (t) {
            (function () {
              var e = t;
              var r = e.lib;
              var i = r.WordArray;
              var n = e.algo;
              var s = n.SHA256;
              var a = n.SHA224 = s.extend({
                _doReset: function _doReset() {
                  this._hash = new i.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
                },
                _doFinalize: function _doFinalize() {
                  var t = s._doFinalize.call(this);
                  t.sigBytes -= 4;
                  return t;
                }
              });
              e.SHA224 = s._createHelper(a);
              e.HmacSHA224 = s._createHmacHelper(a);
            })();
            return t.SHA224;
          });
        },
        2153: function _(t, e, r) {
          (function (i, n) {
            t.exports = n(r(8249));
          })(this, function (t) {
            (function (e) {
              var r = t;
              var i = r.lib;
              var n = i.WordArray;
              var s = i.Hasher;
              var a = r.algo;
              var o = [];
              var u = [];
              (function () {
                function t(t) {
                  var r = e.sqrt(t);
                  for (var i = 2; i <= r; i++) {
                    if (!(t % i)) return false;
                  }
                  return true;
                }
                function r(t) {
                  return 4294967296 * (t - (0 | t)) | 0;
                }
                var i = 2;
                var n = 0;
                while (n < 64) {
                  if (t(i)) {
                    if (n < 8) o[n] = r(e.pow(i, 1 / 2));
                    u[n] = r(e.pow(i, 1 / 3));
                    n++;
                  }
                  i++;
                }
              })();
              var c = [];
              var l = a.SHA256 = s.extend({
                _doReset: function _doReset() {
                  this._hash = new n.init(o.slice(0));
                },
                _doProcessBlock: function _doProcessBlock(t, e) {
                  var r = this._hash.words;
                  var i = r[0];
                  var n = r[1];
                  var s = r[2];
                  var a = r[3];
                  var o = r[4];
                  var l = r[5];
                  var f = r[6];
                  var h = r[7];
                  for (var d = 0; d < 64; d++) {
                    if (d < 16) c[d] = 0 | t[e + d];else {
                      var v = c[d - 15];
                      var p = (v << 25 | v >>> 7) ^ (v << 14 | v >>> 18) ^ v >>> 3;
                      var g = c[d - 2];
                      var y = (g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10;
                      c[d] = p + c[d - 7] + y + c[d - 16];
                    }
                    var m = o & l ^ ~o & f;
                    var w = i & n ^ i & s ^ n & s;
                    var S = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22);
                    var _ = (o << 26 | o >>> 6) ^ (o << 21 | o >>> 11) ^ (o << 7 | o >>> 25);
                    var b = h + _ + m + u[d] + c[d];
                    var E = S + w;
                    h = f;
                    f = l;
                    l = o;
                    o = a + b | 0;
                    a = s;
                    s = n;
                    n = i;
                    i = b + E | 0;
                  }
                  r[0] = r[0] + i | 0;
                  r[1] = r[1] + n | 0;
                  r[2] = r[2] + s | 0;
                  r[3] = r[3] + a | 0;
                  r[4] = r[4] + o | 0;
                  r[5] = r[5] + l | 0;
                  r[6] = r[6] + f | 0;
                  r[7] = r[7] + h | 0;
                },
                _doFinalize: function _doFinalize() {
                  var t = this._data;
                  var r = t.words;
                  var i = 8 * this._nDataBytes;
                  var n = 8 * t.sigBytes;
                  r[n >>> 5] |= 128 << 24 - n % 32;
                  r[(n + 64 >>> 9 << 4) + 14] = e.floor(i / 4294967296);
                  r[(n + 64 >>> 9 << 4) + 15] = i;
                  t.sigBytes = 4 * r.length;
                  this._process();
                  return this._hash;
                },
                clone: function clone() {
                  var t = s.clone.call(this);
                  t._hash = this._hash.clone();
                  return t;
                }
              });
              r.SHA256 = s._createHelper(l);
              r.HmacSHA256 = s._createHmacHelper(l);
            })(Math);
            return t.SHA256;
          });
        },
        3327: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(4938));
          })(this, function (t) {
            (function (e) {
              var r = t;
              var i = r.lib;
              var n = i.WordArray;
              var s = i.Hasher;
              var a = r.x64;
              var o = a.Word;
              var u = r.algo;
              var c = [];
              var l = [];
              var f = [];
              (function () {
                var t = 1,
                  e = 0;
                for (var r = 0; r < 24; r++) {
                  c[t + 5 * e] = (r + 1) * (r + 2) / 2 % 64;
                  var i = e % 5;
                  var n = (2 * t + 3 * e) % 5;
                  t = i;
                  e = n;
                }
                for (var t = 0; t < 5; t++) {
                  for (var e = 0; e < 5; e++) {
                    l[t + 5 * e] = e + (2 * t + 3 * e) % 5 * 5;
                  }
                }
                var s = 1;
                for (var a = 0; a < 24; a++) {
                  var u = 0;
                  var h = 0;
                  for (var d = 0; d < 7; d++) {
                    if (1 & s) {
                      var v = (1 << d) - 1;
                      if (v < 32) h ^= 1 << v;else u ^= 1 << v - 32;
                    }
                    if (128 & s) s = s << 1 ^ 113;else s <<= 1;
                  }
                  f[a] = o.create(u, h);
                }
              })();
              var h = [];
              (function () {
                for (var t = 0; t < 25; t++) {
                  h[t] = o.create();
                }
              })();
              var d = u.SHA3 = s.extend({
                cfg: s.cfg.extend({
                  outputLength: 512
                }),
                _doReset: function _doReset() {
                  var t = this._state = [];
                  for (var e = 0; e < 25; e++) {
                    t[e] = new o.init();
                  }
                  this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
                },
                _doProcessBlock: function _doProcessBlock(t, e) {
                  var r = this._state;
                  var i = this.blockSize / 2;
                  for (var n = 0; n < i; n++) {
                    var s = t[e + 2 * n];
                    var a = t[e + 2 * n + 1];
                    s = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
                    a = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
                    var o = r[n];
                    o.high ^= a;
                    o.low ^= s;
                  }
                  for (var u = 0; u < 24; u++) {
                    for (var d = 0; d < 5; d++) {
                      var v = 0,
                        p = 0;
                      for (var g = 0; g < 5; g++) {
                        var o = r[d + 5 * g];
                        v ^= o.high;
                        p ^= o.low;
                      }
                      var y = h[d];
                      y.high = v;
                      y.low = p;
                    }
                    for (var d = 0; d < 5; d++) {
                      var m = h[(d + 4) % 5];
                      var w = h[(d + 1) % 5];
                      var S = w.high;
                      var _ = w.low;
                      var v = m.high ^ (S << 1 | _ >>> 31);
                      var p = m.low ^ (_ << 1 | S >>> 31);
                      for (var g = 0; g < 5; g++) {
                        var o = r[d + 5 * g];
                        o.high ^= v;
                        o.low ^= p;
                      }
                    }
                    for (var b = 1; b < 25; b++) {
                      var v;
                      var p;
                      var o = r[b];
                      var E = o.high;
                      var D = o.low;
                      var M = c[b];
                      if (M < 32) {
                        v = E << M | D >>> 32 - M;
                        p = D << M | E >>> 32 - M;
                      } else {
                        v = D << M - 32 | E >>> 64 - M;
                        p = E << M - 32 | D >>> 64 - M;
                      }
                      var T = h[l[b]];
                      T.high = v;
                      T.low = p;
                    }
                    var I = h[0];
                    var A = r[0];
                    I.high = A.high;
                    I.low = A.low;
                    for (var d = 0; d < 5; d++) {
                      for (var g = 0; g < 5; g++) {
                        var b = d + 5 * g;
                        var o = r[b];
                        var x = h[b];
                        var R = h[(d + 1) % 5 + 5 * g];
                        var B = h[(d + 2) % 5 + 5 * g];
                        o.high = x.high ^ ~R.high & B.high;
                        o.low = x.low ^ ~R.low & B.low;
                      }
                    }
                    var o = r[0];
                    var O = f[u];
                    o.high ^= O.high;
                    o.low ^= O.low;
                  }
                },
                _doFinalize: function _doFinalize() {
                  var t = this._data;
                  var r = t.words;
                  8 * this._nDataBytes;
                  var s = 8 * t.sigBytes;
                  var a = 32 * this.blockSize;
                  r[s >>> 5] |= 1 << 24 - s % 32;
                  r[(e.ceil((s + 1) / a) * a >>> 5) - 1] |= 128;
                  t.sigBytes = 4 * r.length;
                  this._process();
                  var o = this._state;
                  var u = this.cfg.outputLength / 8;
                  var c = u / 8;
                  var l = [];
                  for (var f = 0; f < c; f++) {
                    var h = o[f];
                    var d = h.high;
                    var v = h.low;
                    d = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8);
                    v = 16711935 & (v << 8 | v >>> 24) | 4278255360 & (v << 24 | v >>> 8);
                    l.push(v);
                    l.push(d);
                  }
                  return new n.init(l, u);
                },
                clone: function clone() {
                  var t = s.clone.call(this);
                  var e = t._state = this._state.slice(0);
                  for (var r = 0; r < 25; r++) {
                    e[r] = e[r].clone();
                  }
                  return t;
                }
              });
              r.SHA3 = s._createHelper(d);
              r.HmacSHA3 = s._createHmacHelper(d);
            })(Math);
            return t.SHA3;
          });
        },
        7460: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(4938), r(34));
          })(this, function (t) {
            (function () {
              var e = t;
              var r = e.x64;
              var i = r.Word;
              var n = r.WordArray;
              var s = e.algo;
              var a = s.SHA512;
              var o = s.SHA384 = a.extend({
                _doReset: function _doReset() {
                  this._hash = new n.init([new i.init(3418070365, 3238371032), new i.init(1654270250, 914150663), new i.init(2438529370, 812702999), new i.init(355462360, 4144912697), new i.init(1731405415, 4290775857), new i.init(2394180231, 1750603025), new i.init(3675008525, 1694076839), new i.init(1203062813, 3204075428)]);
                },
                _doFinalize: function _doFinalize() {
                  var t = a._doFinalize.call(this);
                  t.sigBytes -= 16;
                  return t;
                }
              });
              e.SHA384 = a._createHelper(o);
              e.HmacSHA384 = a._createHmacHelper(o);
            })();
            return t.SHA384;
          });
        },
        34: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(4938));
          })(this, function (t) {
            (function () {
              var e = t;
              var r = e.lib;
              var i = r.Hasher;
              var n = e.x64;
              var s = n.Word;
              var a = n.WordArray;
              var o = e.algo;
              function u() {
                return s.create.apply(s, arguments);
              }
              var c = [u(1116352408, 3609767458), u(1899447441, 602891725), u(3049323471, 3964484399), u(3921009573, 2173295548), u(961987163, 4081628472), u(1508970993, 3053834265), u(2453635748, 2937671579), u(2870763221, 3664609560), u(3624381080, 2734883394), u(310598401, 1164996542), u(607225278, 1323610764), u(1426881987, 3590304994), u(1925078388, 4068182383), u(2162078206, 991336113), u(2614888103, 633803317), u(3248222580, 3479774868), u(3835390401, 2666613458), u(4022224774, 944711139), u(264347078, 2341262773), u(604807628, 2007800933), u(770255983, 1495990901), u(1249150122, 1856431235), u(1555081692, 3175218132), u(1996064986, 2198950837), u(2554220882, 3999719339), u(2821834349, 766784016), u(2952996808, 2566594879), u(3210313671, 3203337956), u(3336571891, 1034457026), u(3584528711, 2466948901), u(113926993, 3758326383), u(338241895, 168717936), u(666307205, 1188179964), u(773529912, 1546045734), u(1294757372, 1522805485), u(1396182291, 2643833823), u(1695183700, 2343527390), u(1986661051, 1014477480), u(2177026350, 1206759142), u(2456956037, 344077627), u(2730485921, 1290863460), u(2820302411, 3158454273), u(3259730800, 3505952657), u(3345764771, 106217008), u(3516065817, 3606008344), u(3600352804, 1432725776), u(4094571909, 1467031594), u(275423344, 851169720), u(430227734, 3100823752), u(506948616, 1363258195), u(659060556, 3750685593), u(883997877, 3785050280), u(958139571, 3318307427), u(1322822218, 3812723403), u(1537002063, 2003034995), u(1747873779, 3602036899), u(1955562222, 1575990012), u(2024104815, 1125592928), u(2227730452, 2716904306), u(2361852424, 442776044), u(2428436474, 593698344), u(2756734187, 3733110249), u(3204031479, 2999351573), u(3329325298, 3815920427), u(3391569614, 3928383900), u(3515267271, 566280711), u(3940187606, 3454069534), u(4118630271, 4000239992), u(116418474, 1914138554), u(174292421, 2731055270), u(289380356, 3203993006), u(460393269, 320620315), u(685471733, 587496836), u(852142971, 1086792851), u(1017036298, 365543100), u(1126000580, 2618297676), u(1288033470, 3409855158), u(1501505948, 4234509866), u(1607167915, 987167468), u(1816402316, 1246189591)];
              var l = [];
              (function () {
                for (var t = 0; t < 80; t++) {
                  l[t] = u();
                }
              })();
              var f = o.SHA512 = i.extend({
                _doReset: function _doReset() {
                  this._hash = new a.init([new s.init(1779033703, 4089235720), new s.init(3144134277, 2227873595), new s.init(1013904242, 4271175723), new s.init(2773480762, 1595750129), new s.init(1359893119, 2917565137), new s.init(2600822924, 725511199), new s.init(528734635, 4215389547), new s.init(1541459225, 327033209)]);
                },
                _doProcessBlock: function _doProcessBlock(t, e) {
                  var r = this._hash.words;
                  var i = r[0];
                  var n = r[1];
                  var s = r[2];
                  var a = r[3];
                  var o = r[4];
                  var u = r[5];
                  var f = r[6];
                  var h = r[7];
                  var d = i.high;
                  var v = i.low;
                  var p = n.high;
                  var g = n.low;
                  var y = s.high;
                  var m = s.low;
                  var w = a.high;
                  var S = a.low;
                  var _ = o.high;
                  var b = o.low;
                  var E = u.high;
                  var D = u.low;
                  var M = f.high;
                  var T = f.low;
                  var I = h.high;
                  var A = h.low;
                  var x = d;
                  var R = v;
                  var B = p;
                  var O = g;
                  var k = y;
                  var C = m;
                  var N = w;
                  var P = S;
                  var V = _;
                  var L = b;
                  var H = E;
                  var U = D;
                  var K = M;
                  var j = T;
                  var q = I;
                  var F = A;
                  for (var z = 0; z < 80; z++) {
                    var G;
                    var Y;
                    var W = l[z];
                    if (z < 16) {
                      Y = W.high = 0 | t[e + 2 * z];
                      G = W.low = 0 | t[e + 2 * z + 1];
                    } else {
                      var J = l[z - 15];
                      var Z = J.high;
                      var $ = J.low;
                      var X = (Z >>> 1 | $ << 31) ^ (Z >>> 8 | $ << 24) ^ Z >>> 7;
                      var Q = ($ >>> 1 | Z << 31) ^ ($ >>> 8 | Z << 24) ^ ($ >>> 7 | Z << 25);
                      var tt = l[z - 2];
                      var et = tt.high;
                      var rt = tt.low;
                      var it = (et >>> 19 | rt << 13) ^ (et << 3 | rt >>> 29) ^ et >>> 6;
                      var nt = (rt >>> 19 | et << 13) ^ (rt << 3 | et >>> 29) ^ (rt >>> 6 | et << 26);
                      var st = l[z - 7];
                      var at = st.high;
                      var ot = st.low;
                      var ut = l[z - 16];
                      var ct = ut.high;
                      var lt = ut.low;
                      G = Q + ot;
                      Y = X + at + (G >>> 0 < Q >>> 0 ? 1 : 0);
                      G += nt;
                      Y = Y + it + (G >>> 0 < nt >>> 0 ? 1 : 0);
                      G += lt;
                      Y = Y + ct + (G >>> 0 < lt >>> 0 ? 1 : 0);
                      W.high = Y;
                      W.low = G;
                    }
                    var ft = V & H ^ ~V & K;
                    var ht = L & U ^ ~L & j;
                    var dt = x & B ^ x & k ^ B & k;
                    var vt = R & O ^ R & C ^ O & C;
                    var pt = (x >>> 28 | R << 4) ^ (x << 30 | R >>> 2) ^ (x << 25 | R >>> 7);
                    var gt = (R >>> 28 | x << 4) ^ (R << 30 | x >>> 2) ^ (R << 25 | x >>> 7);
                    var yt = (V >>> 14 | L << 18) ^ (V >>> 18 | L << 14) ^ (V << 23 | L >>> 9);
                    var mt = (L >>> 14 | V << 18) ^ (L >>> 18 | V << 14) ^ (L << 23 | V >>> 9);
                    var wt = c[z];
                    var St = wt.high;
                    var _t = wt.low;
                    var bt = F + mt;
                    var Et = q + yt + (bt >>> 0 < F >>> 0 ? 1 : 0);
                    var bt = bt + ht;
                    var Et = Et + ft + (bt >>> 0 < ht >>> 0 ? 1 : 0);
                    var bt = bt + _t;
                    var Et = Et + St + (bt >>> 0 < _t >>> 0 ? 1 : 0);
                    var bt = bt + G;
                    var Et = Et + Y + (bt >>> 0 < G >>> 0 ? 1 : 0);
                    var Dt = gt + vt;
                    var Mt = pt + dt + (Dt >>> 0 < gt >>> 0 ? 1 : 0);
                    q = K;
                    F = j;
                    K = H;
                    j = U;
                    H = V;
                    U = L;
                    L = P + bt | 0;
                    V = N + Et + (L >>> 0 < P >>> 0 ? 1 : 0) | 0;
                    N = k;
                    P = C;
                    k = B;
                    C = O;
                    B = x;
                    O = R;
                    R = bt + Dt | 0;
                    x = Et + Mt + (R >>> 0 < bt >>> 0 ? 1 : 0) | 0;
                  }
                  v = i.low = v + R;
                  i.high = d + x + (v >>> 0 < R >>> 0 ? 1 : 0);
                  g = n.low = g + O;
                  n.high = p + B + (g >>> 0 < O >>> 0 ? 1 : 0);
                  m = s.low = m + C;
                  s.high = y + k + (m >>> 0 < C >>> 0 ? 1 : 0);
                  S = a.low = S + P;
                  a.high = w + N + (S >>> 0 < P >>> 0 ? 1 : 0);
                  b = o.low = b + L;
                  o.high = _ + V + (b >>> 0 < L >>> 0 ? 1 : 0);
                  D = u.low = D + U;
                  u.high = E + H + (D >>> 0 < U >>> 0 ? 1 : 0);
                  T = f.low = T + j;
                  f.high = M + K + (T >>> 0 < j >>> 0 ? 1 : 0);
                  A = h.low = A + F;
                  h.high = I + q + (A >>> 0 < F >>> 0 ? 1 : 0);
                },
                _doFinalize: function _doFinalize() {
                  var t = this._data;
                  var e = t.words;
                  var r = 8 * this._nDataBytes;
                  var i = 8 * t.sigBytes;
                  e[i >>> 5] |= 128 << 24 - i % 32;
                  e[(i + 128 >>> 10 << 5) + 30] = Math.floor(r / 4294967296);
                  e[(i + 128 >>> 10 << 5) + 31] = r;
                  t.sigBytes = 4 * e.length;
                  this._process();
                  var n = this._hash.toX32();
                  return n;
                },
                clone: function clone() {
                  var t = i.clone.call(this);
                  t._hash = this._hash.clone();
                  return t;
                },
                blockSize: 1024 / 32
              });
              e.SHA512 = i._createHelper(f);
              e.HmacSHA512 = i._createHmacHelper(f);
            })();
            return t.SHA512;
          });
        },
        4253: function _(t, e, r) {
          (function (i, n, s) {
            t.exports = n(r(8249), r(8269), r(8214), r(888), r(5109));
          })(this, function (t) {
            (function () {
              var e = t;
              var r = e.lib;
              var i = r.WordArray;
              var n = r.BlockCipher;
              var s = e.algo;
              var a = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
              var o = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];
              var u = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
              var c = [{
                0: 8421888,
                268435456: 32768,
                536870912: 8421378,
                805306368: 2,
                1073741824: 512,
                1342177280: 8421890,
                1610612736: 8389122,
                1879048192: 8388608,
                2147483648: 514,
                2415919104: 8389120,
                2684354560: 33280,
                2952790016: 8421376,
                3221225472: 32770,
                3489660928: 8388610,
                3758096384: 0,
                4026531840: 33282,
                134217728: 0,
                402653184: 8421890,
                671088640: 33282,
                939524096: 32768,
                1207959552: 8421888,
                1476395008: 512,
                1744830464: 8421378,
                2013265920: 2,
                2281701376: 8389120,
                2550136832: 33280,
                2818572288: 8421376,
                3087007744: 8389122,
                3355443200: 8388610,
                3623878656: 32770,
                3892314112: 514,
                4160749568: 8388608,
                1: 32768,
                268435457: 2,
                536870913: 8421888,
                805306369: 8388608,
                1073741825: 8421378,
                1342177281: 33280,
                1610612737: 512,
                1879048193: 8389122,
                2147483649: 8421890,
                2415919105: 8421376,
                2684354561: 8388610,
                2952790017: 33282,
                3221225473: 514,
                3489660929: 8389120,
                3758096385: 32770,
                4026531841: 0,
                134217729: 8421890,
                402653185: 8421376,
                671088641: 8388608,
                939524097: 512,
                1207959553: 32768,
                1476395009: 8388610,
                1744830465: 2,
                2013265921: 33282,
                2281701377: 32770,
                2550136833: 8389122,
                2818572289: 514,
                3087007745: 8421888,
                3355443201: 8389120,
                3623878657: 0,
                3892314113: 33280,
                4160749569: 8421378
              }, {
                0: 1074282512,
                16777216: 16384,
                33554432: 524288,
                50331648: 1074266128,
                67108864: 1073741840,
                83886080: 1074282496,
                100663296: 1073758208,
                117440512: 16,
                134217728: 540672,
                150994944: 1073758224,
                167772160: 1073741824,
                184549376: 540688,
                201326592: 524304,
                218103808: 0,
                234881024: 16400,
                251658240: 1074266112,
                8388608: 1073758208,
                25165824: 540688,
                41943040: 16,
                58720256: 1073758224,
                75497472: 1074282512,
                92274688: 1073741824,
                109051904: 524288,
                125829120: 1074266128,
                142606336: 524304,
                159383552: 0,
                176160768: 16384,
                192937984: 1074266112,
                209715200: 1073741840,
                226492416: 540672,
                243269632: 1074282496,
                260046848: 16400,
                268435456: 0,
                285212672: 1074266128,
                301989888: 1073758224,
                318767104: 1074282496,
                335544320: 1074266112,
                352321536: 16,
                369098752: 540688,
                385875968: 16384,
                402653184: 16400,
                419430400: 524288,
                436207616: 524304,
                452984832: 1073741840,
                469762048: 540672,
                486539264: 1073758208,
                503316480: 1073741824,
                520093696: 1074282512,
                276824064: 540688,
                293601280: 524288,
                310378496: 1074266112,
                327155712: 16384,
                343932928: 1073758208,
                360710144: 1074282512,
                377487360: 16,
                394264576: 1073741824,
                411041792: 1074282496,
                427819008: 1073741840,
                444596224: 1073758224,
                461373440: 524304,
                478150656: 0,
                494927872: 16400,
                511705088: 1074266128,
                528482304: 540672
              }, {
                0: 260,
                1048576: 0,
                2097152: 67109120,
                3145728: 65796,
                4194304: 65540,
                5242880: 67108868,
                6291456: 67174660,
                7340032: 67174400,
                8388608: 67108864,
                9437184: 67174656,
                10485760: 65792,
                11534336: 67174404,
                12582912: 67109124,
                13631488: 65536,
                14680064: 4,
                15728640: 256,
                524288: 67174656,
                1572864: 67174404,
                2621440: 0,
                3670016: 67109120,
                4718592: 67108868,
                5767168: 65536,
                6815744: 65540,
                7864320: 260,
                8912896: 4,
                9961472: 256,
                11010048: 67174400,
                12058624: 65796,
                13107200: 65792,
                14155776: 67109124,
                15204352: 67174660,
                16252928: 67108864,
                16777216: 67174656,
                17825792: 65540,
                18874368: 65536,
                19922944: 67109120,
                20971520: 256,
                22020096: 67174660,
                23068672: 67108868,
                24117248: 0,
                25165824: 67109124,
                26214400: 67108864,
                27262976: 4,
                28311552: 65792,
                29360128: 67174400,
                30408704: 260,
                31457280: 65796,
                32505856: 67174404,
                17301504: 67108864,
                18350080: 260,
                19398656: 67174656,
                20447232: 0,
                21495808: 65540,
                22544384: 67109120,
                23592960: 256,
                24641536: 67174404,
                25690112: 65536,
                26738688: 67174660,
                27787264: 65796,
                28835840: 67108868,
                29884416: 67109124,
                30932992: 67174400,
                31981568: 4,
                33030144: 65792
              }, {
                0: 2151682048,
                65536: 2147487808,
                131072: 4198464,
                196608: 2151677952,
                262144: 0,
                327680: 4198400,
                393216: 2147483712,
                458752: 4194368,
                524288: 2147483648,
                589824: 4194304,
                655360: 64,
                720896: 2147487744,
                786432: 2151678016,
                851968: 4160,
                917504: 4096,
                983040: 2151682112,
                32768: 2147487808,
                98304: 64,
                163840: 2151678016,
                229376: 2147487744,
                294912: 4198400,
                360448: 2151682112,
                425984: 0,
                491520: 2151677952,
                557056: 4096,
                622592: 2151682048,
                688128: 4194304,
                753664: 4160,
                819200: 2147483648,
                884736: 4194368,
                950272: 4198464,
                1015808: 2147483712,
                1048576: 4194368,
                1114112: 4198400,
                1179648: 2147483712,
                1245184: 0,
                1310720: 4160,
                1376256: 2151678016,
                1441792: 2151682048,
                1507328: 2147487808,
                1572864: 2151682112,
                1638400: 2147483648,
                1703936: 2151677952,
                1769472: 4198464,
                1835008: 2147487744,
                1900544: 4194304,
                1966080: 64,
                2031616: 4096,
                1081344: 2151677952,
                1146880: 2151682112,
                1212416: 0,
                1277952: 4198400,
                1343488: 4194368,
                1409024: 2147483648,
                1474560: 2147487808,
                1540096: 64,
                1605632: 2147483712,
                1671168: 4096,
                1736704: 2147487744,
                1802240: 2151678016,
                1867776: 4160,
                1933312: 2151682048,
                1998848: 4194304,
                2064384: 4198464
              }, {
                0: 128,
                4096: 17039360,
                8192: 262144,
                12288: 536870912,
                16384: 537133184,
                20480: 16777344,
                24576: 553648256,
                28672: 262272,
                32768: 16777216,
                36864: 537133056,
                40960: 536871040,
                45056: 553910400,
                49152: 553910272,
                53248: 0,
                57344: 17039488,
                61440: 553648128,
                2048: 17039488,
                6144: 553648256,
                10240: 128,
                14336: 17039360,
                18432: 262144,
                22528: 537133184,
                26624: 553910272,
                30720: 536870912,
                34816: 537133056,
                38912: 0,
                43008: 553910400,
                47104: 16777344,
                51200: 536871040,
                55296: 553648128,
                59392: 16777216,
                63488: 262272,
                65536: 262144,
                69632: 128,
                73728: 536870912,
                77824: 553648256,
                81920: 16777344,
                86016: 553910272,
                90112: 537133184,
                94208: 16777216,
                98304: 553910400,
                102400: 553648128,
                106496: 17039360,
                110592: 537133056,
                114688: 262272,
                118784: 536871040,
                122880: 0,
                126976: 17039488,
                67584: 553648256,
                71680: 16777216,
                75776: 17039360,
                79872: 537133184,
                83968: 536870912,
                88064: 17039488,
                92160: 128,
                96256: 553910272,
                100352: 262272,
                104448: 553910400,
                108544: 0,
                112640: 553648128,
                116736: 16777344,
                120832: 262144,
                124928: 537133056,
                129024: 536871040
              }, {
                0: 268435464,
                256: 8192,
                512: 270532608,
                768: 270540808,
                1024: 268443648,
                1280: 2097152,
                1536: 2097160,
                1792: 268435456,
                2048: 0,
                2304: 268443656,
                2560: 2105344,
                2816: 8,
                3072: 270532616,
                3328: 2105352,
                3584: 8200,
                3840: 270540800,
                128: 270532608,
                384: 270540808,
                640: 8,
                896: 2097152,
                1152: 2105352,
                1408: 268435464,
                1664: 268443648,
                1920: 8200,
                2176: 2097160,
                2432: 8192,
                2688: 268443656,
                2944: 270532616,
                3200: 0,
                3456: 270540800,
                3712: 2105344,
                3968: 268435456,
                4096: 268443648,
                4352: 270532616,
                4608: 270540808,
                4864: 8200,
                5120: 2097152,
                5376: 268435456,
                5632: 268435464,
                5888: 2105344,
                6144: 2105352,
                6400: 0,
                6656: 8,
                6912: 270532608,
                7168: 8192,
                7424: 268443656,
                7680: 270540800,
                7936: 2097160,
                4224: 8,
                4480: 2105344,
                4736: 2097152,
                4992: 268435464,
                5248: 268443648,
                5504: 8200,
                5760: 270540808,
                6016: 270532608,
                6272: 270540800,
                6528: 270532616,
                6784: 8192,
                7040: 2105352,
                7296: 2097160,
                7552: 0,
                7808: 268435456,
                8064: 268443656
              }, {
                0: 1048576,
                16: 33555457,
                32: 1024,
                48: 1049601,
                64: 34604033,
                80: 0,
                96: 1,
                112: 34603009,
                128: 33555456,
                144: 1048577,
                160: 33554433,
                176: 34604032,
                192: 34603008,
                208: 1025,
                224: 1049600,
                240: 33554432,
                8: 34603009,
                24: 0,
                40: 33555457,
                56: 34604032,
                72: 1048576,
                88: 33554433,
                104: 33554432,
                120: 1025,
                136: 1049601,
                152: 33555456,
                168: 34603008,
                184: 1048577,
                200: 1024,
                216: 34604033,
                232: 1,
                248: 1049600,
                256: 33554432,
                272: 1048576,
                288: 33555457,
                304: 34603009,
                320: 1048577,
                336: 33555456,
                352: 34604032,
                368: 1049601,
                384: 1025,
                400: 34604033,
                416: 1049600,
                432: 1,
                448: 0,
                464: 34603008,
                480: 33554433,
                496: 1024,
                264: 1049600,
                280: 33555457,
                296: 34603009,
                312: 1,
                328: 33554432,
                344: 1048576,
                360: 1025,
                376: 34604032,
                392: 33554433,
                408: 34603008,
                424: 0,
                440: 34604033,
                456: 1049601,
                472: 1024,
                488: 33555456,
                504: 1048577
              }, {
                0: 134219808,
                1: 131072,
                2: 134217728,
                3: 32,
                4: 131104,
                5: 134350880,
                6: 134350848,
                7: 2048,
                8: 134348800,
                9: 134219776,
                10: 133120,
                11: 134348832,
                12: 2080,
                13: 0,
                14: 134217760,
                15: 133152,
                2147483648: 2048,
                2147483649: 134350880,
                2147483650: 134219808,
                2147483651: 134217728,
                2147483652: 134348800,
                2147483653: 133120,
                2147483654: 133152,
                2147483655: 32,
                2147483656: 134217760,
                2147483657: 2080,
                2147483658: 131104,
                2147483659: 134350848,
                2147483660: 0,
                2147483661: 134348832,
                2147483662: 134219776,
                2147483663: 131072,
                16: 133152,
                17: 134350848,
                18: 32,
                19: 2048,
                20: 134219776,
                21: 134217760,
                22: 134348832,
                23: 131072,
                24: 0,
                25: 131104,
                26: 134348800,
                27: 134219808,
                28: 134350880,
                29: 133120,
                30: 2080,
                31: 134217728,
                2147483664: 131072,
                2147483665: 2048,
                2147483666: 134348832,
                2147483667: 133152,
                2147483668: 32,
                2147483669: 134348800,
                2147483670: 134217728,
                2147483671: 134219808,
                2147483672: 134350880,
                2147483673: 134217760,
                2147483674: 134219776,
                2147483675: 0,
                2147483676: 133120,
                2147483677: 2080,
                2147483678: 131104,
                2147483679: 134350848
              }];
              var l = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679];
              var f = s.DES = n.extend({
                _doReset: function _doReset() {
                  var t = this._key;
                  var e = t.words;
                  var r = [];
                  for (var i = 0; i < 56; i++) {
                    var n = a[i] - 1;
                    r[i] = e[n >>> 5] >>> 31 - n % 32 & 1;
                  }
                  var s = this._subKeys = [];
                  for (var c = 0; c < 16; c++) {
                    var l = s[c] = [];
                    var f = u[c];
                    for (var i = 0; i < 24; i++) {
                      l[i / 6 | 0] |= r[(o[i] - 1 + f) % 28] << 31 - i % 6;
                      l[4 + (i / 6 | 0)] |= r[28 + (o[i + 24] - 1 + f) % 28] << 31 - i % 6;
                    }
                    l[0] = l[0] << 1 | l[0] >>> 31;
                    for (var i = 1; i < 7; i++) {
                      l[i] = l[i] >>> 4 * (i - 1) + 3;
                    }
                    l[7] = l[7] << 5 | l[7] >>> 27;
                  }
                  var h = this._invSubKeys = [];
                  for (var i = 0; i < 16; i++) {
                    h[i] = s[15 - i];
                  }
                },
                encryptBlock: function encryptBlock(t, e) {
                  this._doCryptBlock(t, e, this._subKeys);
                },
                decryptBlock: function decryptBlock(t, e) {
                  this._doCryptBlock(t, e, this._invSubKeys);
                },
                _doCryptBlock: function _doCryptBlock(t, e, r) {
                  this._lBlock = t[e];
                  this._rBlock = t[e + 1];
                  h.call(this, 4, 252645135);
                  h.call(this, 16, 65535);
                  d.call(this, 2, 858993459);
                  d.call(this, 8, 16711935);
                  h.call(this, 1, 1431655765);
                  for (var i = 0; i < 16; i++) {
                    var n = r[i];
                    var s = this._lBlock;
                    var a = this._rBlock;
                    var o = 0;
                    for (var u = 0; u < 8; u++) {
                      o |= c[u][((a ^ n[u]) & l[u]) >>> 0];
                    }
                    this._lBlock = a;
                    this._rBlock = s ^ o;
                  }
                  var f = this._lBlock;
                  this._lBlock = this._rBlock;
                  this._rBlock = f;
                  h.call(this, 1, 1431655765);
                  d.call(this, 8, 16711935);
                  d.call(this, 2, 858993459);
                  h.call(this, 16, 65535);
                  h.call(this, 4, 252645135);
                  t[e] = this._lBlock;
                  t[e + 1] = this._rBlock;
                },
                keySize: 64 / 32,
                ivSize: 64 / 32,
                blockSize: 64 / 32
              });
              function h(t, e) {
                var r = (this._lBlock >>> t ^ this._rBlock) & e;
                this._rBlock ^= r;
                this._lBlock ^= r << t;
              }
              function d(t, e) {
                var r = (this._rBlock >>> t ^ this._lBlock) & e;
                this._lBlock ^= r;
                this._rBlock ^= r << t;
              }
              e.DES = n._createHelper(f);
              var v = s.TripleDES = n.extend({
                _doReset: function _doReset() {
                  var t = this._key;
                  var e = t.words;
                  if (2 !== e.length && 4 !== e.length && e.length < 6) throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
                  var r = e.slice(0, 2);
                  var n = e.length < 4 ? e.slice(0, 2) : e.slice(2, 4);
                  var s = e.length < 6 ? e.slice(0, 2) : e.slice(4, 6);
                  this._des1 = f.createEncryptor(i.create(r));
                  this._des2 = f.createEncryptor(i.create(n));
                  this._des3 = f.createEncryptor(i.create(s));
                },
                encryptBlock: function encryptBlock(t, e) {
                  this._des1.encryptBlock(t, e);
                  this._des2.decryptBlock(t, e);
                  this._des3.encryptBlock(t, e);
                },
                decryptBlock: function decryptBlock(t, e) {
                  this._des3.decryptBlock(t, e);
                  this._des2.encryptBlock(t, e);
                  this._des1.decryptBlock(t, e);
                },
                keySize: 192 / 32,
                ivSize: 64 / 32,
                blockSize: 64 / 32
              });
              e.TripleDES = n._createHelper(v);
            })();
            return t.TripleDES;
          });
        },
        4938: function _(t, e, r) {
          (function (i, n) {
            t.exports = n(r(8249));
          })(this, function (t) {
            (function (e) {
              var r = t;
              var i = r.lib;
              var n = i.Base;
              var s = i.WordArray;
              var a = r.x64 = {};
              a.Word = n.extend({
                init: function init(t, e) {
                  this.high = t;
                  this.low = e;
                }
              });
              a.WordArray = n.extend({
                init: function init(t, r) {
                  t = this.words = t || [];
                  if (r != e) this.sigBytes = r;else this.sigBytes = 8 * t.length;
                },
                toX32: function toX32() {
                  var t = this.words;
                  var e = t.length;
                  var r = [];
                  for (var i = 0; i < e; i++) {
                    var n = t[i];
                    r.push(n.high);
                    r.push(n.low);
                  }
                  return s.create(r, this.sigBytes);
                },
                clone: function clone() {
                  var t = n.clone.call(this);
                  var e = t.words = this.words.slice(0);
                  var r = e.length;
                  for (var i = 0; i < r; i++) {
                    e[i] = e[i].clone();
                  }
                  return t;
                }
              });
            })();
            return t;
          });
        },
        4198: function _(t, e) {
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          e.ErrorCode = void 0;
          (function (t) {
            t[t["SUCCESS"] = 0] = "SUCCESS";
            t[t["CLIENT_ID_NOT_FOUND"] = 1] = "CLIENT_ID_NOT_FOUND";
            t[t["OPERATION_TOO_OFTEN"] = 2] = "OPERATION_TOO_OFTEN";
            t[t["REPEAT_MESSAGE"] = 3] = "REPEAT_MESSAGE";
            t[t["TIME_OUT"] = 4] = "TIME_OUT";
          })(e.ErrorCode || (e.ErrorCode = {}));
        },
        9021: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          var n = i(r(6893));
          var s = i(r(7555));
          var a = i(r(6379));
          var o = i(r(529));
          var u;
          (function (t) {
            function e(t) {
              o.default.debugMode = t;
              o.default.info("setDebugMode: ".concat(t));
            }
            t.setDebugMode = e;
            function r(t) {
              try {
                s.default.init(t);
              } catch (t) {
                o.default.error("init error", t);
              }
            }
            t.init = r;
            function i(t) {
              try {
                if (!t.url) throw new Error("invalid url");
                if (!t.key || !t.keyId) throw new Error("invalid key or keyId");
                a.default.socketUrl = t.url;
                a.default.publicKeyId = t.keyId;
                a.default.publicKey = t.key;
              } catch (t) {
                o.default.error("setSocketServer error", t);
              }
            }
            t.setSocketServer = i;
            function u(t) {
              try {
                s.default.enableSocket(t);
              } catch (t) {
                o.default.error("enableSocket error", t);
              }
            }
            t.enableSocket = u;
            function c() {
              return n.default.SDK_VERSION;
            }
            t.getVersion = c;
          })(u || (u = {}));
          t.exports = u;
        },
        9478: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(529));
          var s = i(r(496));
          var a = i(r(3555));
          var o = i(r(1929));
          var u = i(r(4379));
          var c = i(r(6899));
          var l = i(r(776));
          var f = i(r(2002));
          var h = i(r(5807));
          var d = i(r(9704));
          var v = i(r(6545));
          var p = i(r(3680));
          var g = i(r(7706));
          var y = i(r(4486));
          var m = i(r(5867));
          var w = i(r(7006));
          var S;
          (function (t) {
            var e;
            var r;
            var i;
            function S() {
              var t;
              try {
                if ("undefined" != typeof uni) {
                  e = new v.default();
                  r = new p.default();
                  i = new g.default();
                } else if ("undefined" != typeof tt) {
                  e = new f.default();
                  r = new h.default();
                  i = new d.default();
                } else if ("undefined" != typeof my) {
                  e = new s.default();
                  r = new a.default();
                  i = new o.default();
                } else if ("undefined" != typeof wx) {
                  e = new y.default();
                  r = new m.default();
                  i = new w.default();
                } else if ("undefined" != typeof window) {
                  e = new u.default();
                  r = new c.default();
                  i = new l.default();
                }
              } catch (e) {
                n.default.error("init am error: ".concat(e));
                t = e;
              }
              if (!e || !r || !i) if ("undefined" != typeof window) {
                e = new u.default();
                r = new c.default();
                i = new l.default();
              }
              if (!e || !r || !i) throw new Error("init am error: no api impl found, ".concat(t));
            }
            function _() {
              if (!e) S();
              return e;
            }
            t.getDevice = _;
            function b() {
              if (!r) S();
              return r;
            }
            t.getStorage = b;
            function E() {
              if (!i) S();
              return i;
            }
            t.getWebSocket = E;
          })(S || (S = {}));
          e["default"] = S;
        },
        4685: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(9478));
          var s;
          (function (t) {
            function e() {
              return n.default.getDevice().os();
            }
            t.os = e;
            function r() {
              return n.default.getDevice().osVersion();
            }
            t.osVersion = r;
            function i() {
              return n.default.getDevice().model();
            }
            t.model = i;
            function s() {
              return n.default.getDevice().brand();
            }
            t.brand = s;
            function a() {
              return n.default.getDevice().platform();
            }
            t.platform = a;
            function o() {
              return n.default.getDevice().platformVersion();
            }
            t.platformVersion = o;
            function u() {
              return n.default.getDevice().platformId();
            }
            t.platformId = u;
            function c() {
              return n.default.getDevice().language();
            }
            t.language = c;
            function l() {
              var t = n.default.getDevice().userAgent;
              if (t) return t();
              return "";
            }
            t.userAgent = l;
            function f(t) {
              n.default.getDevice().getNetworkType(t);
            }
            t.getNetworkType = f;
            function h(t) {
              n.default.getDevice().onNetworkStatusChange(t);
            }
            t.onNetworkStatusChange = h;
          })(s || (s = {}));
          e["default"] = s;
        },
        7002: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(6379));
          var s = i(r(1386));
          var a = i(r(4054));
          var o = r(2918);
          var u = i(r(7167));
          var c = i(r(529));
          var l = i(r(9478));
          var f = i(r(8506));
          var h;
          (function (t) {
            var e;
            var r = false;
            var i = false;
            var h = false;
            var d = [];
            var v = 10;
            var p = 0;
            t.allowReconnect = true;
            function g() {
              return r && i;
            }
            t.isAvailable = g;
            function y(e) {
              var r = new Date().getTime();
              if (r - p < 1e3) {
                c.default.warn("enableSocket ".concat(e, " fail: this function can only be called once a second"));
                return;
              }
              p = r;
              t.allowReconnect = e;
              if (e) t.reconnect(10);else t.close("enableSocket ".concat(e));
            }
            t.enableSocket = y;
            function m() {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
              if (!t.allowReconnect) return;
              if (!_()) return;
              setTimeout(function () {
                w();
              }, e);
            }
            t.reconnect = m;
            function w() {
              t.allowReconnect = true;
              if (!_()) return;
              if (!b()) return;
              h = true;
              var r = n.default.socketUrl;
              try {
                var _t2 = f.default.getSync(f.default.KEY_REDIRECT_SERVER, "");
                if (_t2) {
                  var _e = o.RedirectServerData.parse(_t2);
                  var _i = _e.addressList[0].split(",");
                  var _n = _i[0];
                  var _s = Number(_i[1]);
                  var _a = new Date().getTime();
                  if (_a - _e.time < 1e3 * _s) r = _n;
                }
              } catch (t) {}
              e = l.default.getWebSocket().connect({
                url: r,
                success: function success() {
                  i = true;
                  S();
                },
                fail: function fail() {
                  i = false;
                  M();
                  m(100);
                }
              });
              e.onOpen(T);
              e.onClose(x);
              e.onError(A);
              e.onMessage(I);
            }
            t.connect = w;
            function S() {
              if (i && r) {
                h = false;
                s.default.create().send();
                u.default.getInstance().start();
              }
            }
            function _() {
              if (!n.default.networkConnected) {
                c.default.error("connect failed, network is not available");
                return false;
              }
              if (h) {
                c.default.warn("connecting");
                return false;
              }
              if (g()) {
                c.default.warn("already connected");
                return false;
              }
              return true;
            }
            function b() {
              var t = d.length;
              var e = new Date().getTime();
              if (t > 0) for (var r = t - 1; r >= 0; r--) {
                if (e - d[r] > 5e3) {
                  d.splice(0, r + 1);
                  break;
                }
              }
              t = d.length;
              d.push(e);
              if (t >= v) {
                c.default.error("connect failed, connection limit reached");
                return false;
              }
              return true;
            }
            function E() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
              null === e || void 0 === e || e.close({
                code: 1e3,
                reason: t,
                success: function success(t) {},
                fail: function fail(t) {}
              });
              M();
            }
            t.close = E;
            function D(t) {
              if (r && r) null === e || void 0 === e || e.send({
                data: t,
                success: function success(t) {},
                fail: function fail(t) {}
              });else throw new Error("socket not connect");
            }
            t.send = D;
            function M(t) {
              var e;
              i = false;
              r = false;
              h = false;
              u.default.getInstance().cancel();
              if (n.default.online) {
                n.default.online = false;
                null === (e = n.default.onlineState) || void 0 === e || e.call(n.default.onlineState, {
                  online: n.default.online
                });
              }
            }
            var T = function T(t) {
              r = true;
              S();
            };
            var I = function I(t) {
              try {
                t.data;
                u.default.getInstance().refresh();
                a.default.receiveMessage(t.data);
              } catch (t) {}
            };
            var A = function A(t) {
              E("socket error");
            };
            var x = function x(t) {
              M();
            };
          })(h || (h = {}));
          e["default"] = h;
        },
        8506: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(9478));
          var s;
          (function (t) {
            t.KEY_APPID = "getui_appid";
            t.KEY_CID = "getui_cid";
            t.KEY_SESSION = "getui_session";
            t.KEY_REGID = "getui_regid";
            t.KEY_SOCKET_URL = "getui_socket_url";
            t.KEY_DEVICE_ID = "getui_deviceid";
            t.KEY_ADD_PHONE_INFO_TIME = "getui_api_time";
            t.KEY_BIND_ALIAS_TIME = "getui_ba_time";
            t.KEY_SET_TAG_TIME = "getui_st_time";
            t.KEY_REDIRECT_SERVER = "getui_redirect_server";
            t.KEY_LAST_CONNECT_TIME = "getui_last_connect_time";
            function e(t) {
              n.default.getStorage().set(t);
            }
            t.set = e;
            function r(t, e) {
              n.default.getStorage().setSync(t, e);
            }
            t.setSync = r;
            function i(t) {
              n.default.getStorage().get(t);
            }
            t.get = i;
            function s(t, e) {
              var r = n.default.getStorage().getSync(t);
              return r ? r : e;
            }
            t.getSync = s;
          })(s || (s = {}));
          e["default"] = s;
        },
        496: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          var n = i(r(3854));
          var s = /*#__PURE__*/function () {
            "use strict";

            function s() {
              _classCallCheck(this, s);
              this.systemInfo = my.getSystemInfoSync();
            }
            _createClass(s, [{
              key: "os",
              value: function os() {
                return n.default.getStr(this.systemInfo, "platform");
              }
            }, {
              key: "osVersion",
              value: function osVersion() {
                return n.default.getStr(this.systemInfo, "system");
              }
            }, {
              key: "model",
              value: function model() {
                return n.default.getStr(this.systemInfo, "model");
              }
            }, {
              key: "brand",
              value: function brand() {
                return n.default.getStr(this.systemInfo, "brand");
              }
            }, {
              key: "platform",
              value: function platform() {
                return "MP-ALIPAY";
              }
            }, {
              key: "platformVersion",
              value: function platformVersion() {
                return n.default.getStr(this.systemInfo, "app") + " " + n.default.getStr(this.systemInfo, "version");
              }
            }, {
              key: "platformId",
              value: function platformId() {
                return my.getAppIdSync();
              }
            }, {
              key: "language",
              value: function language() {
                return n.default.getStr(this.systemInfo, "language");
              }
            }, {
              key: "getNetworkType",
              value: function getNetworkType(t) {
                my.getNetworkType({
                  success: function success(e) {
                    var r;
                    null === (r = t.success) || void 0 === r || r.call(t.success, {
                      networkType: e.networkType
                    });
                  },
                  fail: function fail() {
                    var e;
                    null === (e = t.fail) || void 0 === e || e.call(t.fail, "");
                  }
                });
              }
            }, {
              key: "onNetworkStatusChange",
              value: function onNetworkStatusChange(t) {
                my.onNetworkStatusChange(t);
              }
            }]);
            return s;
          }();
          t.exports = s;
        },
        3555: function _(t) {
          var e = /*#__PURE__*/function () {
            "use strict";

            function e() {
              _classCallCheck(this, e);
            }
            _createClass(e, [{
              key: "set",
              value: function set(t) {
                my.setStorage({
                  key: t.key,
                  data: t.data,
                  success: t.success,
                  fail: t.fail
                });
              }
            }, {
              key: "setSync",
              value: function setSync(t, _e2) {
                my.setStorageSync({
                  key: t,
                  data: _e2
                });
              }
            }, {
              key: "get",
              value: function get(t) {
                my.getStorage({
                  key: t.key,
                  success: t.success,
                  fail: t.fail,
                  complete: t.complete
                });
              }
            }, {
              key: "getSync",
              value: function getSync(t) {
                return my.getStorageSync({
                  key: t
                }).data;
              }
            }]);
            return e;
          }();
          t.exports = e;
        },
        1929: function _(t) {
          var e = /*#__PURE__*/function () {
            "use strict";

            function e() {
              _classCallCheck(this, e);
            }
            _createClass(e, [{
              key: "connect",
              value: function connect(t) {
                my.connectSocket({
                  url: t.url,
                  header: t.header,
                  method: t.method,
                  success: t.success,
                  fail: t.fail,
                  complete: t.complete
                });
                return {
                  onOpen: my.onSocketOpen,
                  send: my.sendSocketMessage,
                  onMessage: function onMessage(t) {
                    my.onSocketMessage.call(my.onSocketMessage, function (_e3) {
                      t.call(t, {
                        data: _e3 ? _e3.data : ""
                      });
                    });
                  },
                  onError: my.onSocketError,
                  onClose: my.onSocketClose,
                  close: my.closeSocket
                };
              }
            }]);
            return e;
          }();
          t.exports = e;
        },
        4379: function _(t, e) {
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var r = /*#__PURE__*/function () {
            "use strict";

            function r() {
              _classCallCheck(this, r);
            }
            _createClass(r, [{
              key: "os",
              value: function os() {
                var t = window.navigator.userAgent.toLowerCase();
                if (t.indexOf("android") > 0 || t.indexOf("adr") > 0) return "android";
                if (!!t.match(/\(i[^;]+;( u;)? cpu.+mac os x/)) return "ios";
                if (t.indexOf("windows") > 0 || t.indexOf("win32") > 0 || t.indexOf("win64") > 0) return "windows";
                if (t.indexOf("macintosh") > 0 || t.indexOf("mac os") > 0) return "mac os";
                if (t.indexOf("linux") > 0) return "linux";
                if (t.indexOf("unix") > 0) return "linux";
                return "other";
              }
            }, {
              key: "osVersion",
              value: function osVersion() {
                var t = window.navigator.userAgent.toLowerCase();
                var e = t.substring(t.indexOf(";") + 1).trim();
                if (e.indexOf(";") > 0) return e.substring(0, e.indexOf(";")).trim();
                return e.substring(0, e.indexOf(")")).trim();
              }
            }, {
              key: "model",
              value: function model() {
                return "";
              }
            }, {
              key: "brand",
              value: function brand() {
                return "";
              }
            }, {
              key: "platform",
              value: function platform() {
                return "H5";
              }
            }, {
              key: "platformVersion",
              value: function platformVersion() {
                return "";
              }
            }, {
              key: "platformId",
              value: function platformId() {
                return "";
              }
            }, {
              key: "language",
              value: function language() {
                return window.navigator.language;
              }
            }, {
              key: "userAgent",
              value: function userAgent() {
                return window.navigator.userAgent;
              }
            }, {
              key: "getNetworkType",
              value: function getNetworkType(t) {
                var e;
                null === (e = t.success) || void 0 === e || e.call(t.success, {
                  networkType: window.navigator.onLine ? "unknown" : "none"
                });
              }
            }, {
              key: "onNetworkStatusChange",
              value: function onNetworkStatusChange(t) {}
            }]);
            return r;
          }();
          e["default"] = r;
        },
        6899: function _(t, e) {
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var r = /*#__PURE__*/function () {
            "use strict";

            function r() {
              _classCallCheck(this, r);
            }
            _createClass(r, [{
              key: "set",
              value: function set(t) {
                var e;
                window.localStorage.setItem(t.key, t.data);
                null === (e = t.success) || void 0 === e || e.call(t.success, "");
              }
            }, {
              key: "setSync",
              value: function setSync(t, e) {
                window.localStorage.setItem(t, e);
              }
            }, {
              key: "get",
              value: function get(t) {
                var e;
                var _r = window.localStorage.getItem(t.key);
                null === (e = t.success) || void 0 === e || e.call(t.success, _r);
              }
            }, {
              key: "getSync",
              value: function getSync(t) {
                return window.localStorage.getItem(t);
              }
            }]);
            return r;
          }();
          e["default"] = r;
        },
        776: function _(t, e) {
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var r = /*#__PURE__*/function () {
            "use strict";

            function r() {
              _classCallCheck(this, r);
            }
            _createClass(r, [{
              key: "connect",
              value: function connect(t) {
                var e = new WebSocket(t.url);
                return {
                  send: function send(t) {
                    var _r2, i;
                    try {
                      e.send(t.data);
                      null === (_r2 = t.success) || void 0 === _r2 || _r2.call(t.success, {
                        errMsg: ""
                      });
                    } catch (e) {
                      null === (i = t.fail) || void 0 === i || i.call(t.fail, {
                        errMsg: e + ""
                      });
                    }
                  },
                  close: function close(t) {
                    var _r3, i;
                    try {
                      e.close(t.code, t.reason);
                      null === (_r3 = t.success) || void 0 === _r3 || _r3.call(t.success, {
                        errMsg: ""
                      });
                    } catch (e) {
                      null === (i = t.fail) || void 0 === i || i.call(t.fail, {
                        errMsg: e + ""
                      });
                    }
                  },
                  onOpen: function onOpen(_r4) {
                    e.onopen = function (e) {
                      var i;
                      null === (i = t.success) || void 0 === i || i.call(t.success, "");
                      _r4({
                        header: ""
                      });
                    };
                  },
                  onError: function onError(_r5) {
                    e.onerror = function (e) {
                      var i;
                      null === (i = t.fail) || void 0 === i || i.call(t.fail, "");
                      _r5({
                        errMsg: ""
                      });
                    };
                  },
                  onMessage: function onMessage(t) {
                    e.onmessage = function (e) {
                      t({
                        data: e.data
                      });
                    };
                  },
                  onClose: function onClose(t) {
                    e.onclose = function (e) {
                      t(e);
                    };
                  }
                };
              }
            }]);
            return r;
          }();
          e["default"] = r;
        },
        2002: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(3854));
          var s = /*#__PURE__*/function () {
            "use strict";

            function s() {
              _classCallCheck(this, s);
              this.systemInfo = tt.getSystemInfoSync();
            }
            _createClass(s, [{
              key: "os",
              value: function os() {
                return n.default.getStr(this.systemInfo, "platform");
              }
            }, {
              key: "osVersion",
              value: function osVersion() {
                return n.default.getStr(this.systemInfo, "system");
              }
            }, {
              key: "model",
              value: function model() {
                return n.default.getStr(this.systemInfo, "model");
              }
            }, {
              key: "brand",
              value: function brand() {
                return n.default.getStr(this.systemInfo, "brand");
              }
            }, {
              key: "platform",
              value: function platform() {
                return "MP-TOUTIAO";
              }
            }, {
              key: "platformVersion",
              value: function platformVersion() {
                return n.default.getStr(this.systemInfo, "appName") + " " + n.default.getStr(this.systemInfo, "version");
              }
            }, {
              key: "language",
              value: function language() {
                return "";
              }
            }, {
              key: "platformId",
              value: function platformId() {
                return "";
              }
            }, {
              key: "getNetworkType",
              value: function getNetworkType(t) {
                tt.getNetworkType(t);
              }
            }, {
              key: "onNetworkStatusChange",
              value: function onNetworkStatusChange(t) {
                tt.onNetworkStatusChange(t);
              }
            }]);
            return s;
          }();
          e["default"] = s;
        },
        5807: function _(t, e) {
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var r = /*#__PURE__*/function () {
            "use strict";

            function r() {
              _classCallCheck(this, r);
            }
            _createClass(r, [{
              key: "set",
              value: function set(t) {
                tt.setStorage(t);
              }
            }, {
              key: "setSync",
              value: function setSync(t, e) {
                tt.setStorageSync(t, e);
              }
            }, {
              key: "get",
              value: function get(t) {
                tt.getStorage(t);
              }
            }, {
              key: "getSync",
              value: function getSync(t) {
                return tt.getStorageSync(t);
              }
            }]);
            return r;
          }();
          e["default"] = r;
        },
        9704: function _(t, e) {
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var r = /*#__PURE__*/function () {
            "use strict";

            function r() {
              _classCallCheck(this, r);
            }
            _createClass(r, [{
              key: "connect",
              value: function connect(t) {
                var e = tt.connectSocket({
                  url: t.url,
                  header: t.header,
                  protocols: t.protocols,
                  success: t.success,
                  fail: t.fail,
                  complete: t.complete
                });
                return {
                  onOpen: e.onOpen,
                  send: e.send,
                  onMessage: e.onMessage,
                  onError: e.onError,
                  onClose: e.onClose,
                  close: e.close
                };
              }
            }]);
            return r;
          }();
          e["default"] = r;
        },
        6545: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(3854));
          var s = /*#__PURE__*/function () {
            "use strict";

            function s() {
              _classCallCheck(this, s);
              try {
                this.systemInfo = uni.getSystemInfoSync();
                this.accountInfo = uni.getAccountInfoSync();
              } catch (t) {}
            }
            _createClass(s, [{
              key: "os",
              value: function os() {
                return n.default.getStr(this.systemInfo, "platform");
              }
            }, {
              key: "model",
              value: function model() {
                return n.default.getStr(this.systemInfo, "model");
              }
            }, {
              key: "brand",
              value: function brand() {
                return n.default.getStr(this.systemInfo, "brand");
              }
            }, {
              key: "osVersion",
              value: function osVersion() {
                return n.default.getStr(this.systemInfo, "system");
              }
            }, {
              key: "platform",
              value: function platform() {
                var t = "";
                t = "MP-WEIXIN";
                return t;
              }
            }, {
              key: "platformVersion",
              value: function platformVersion() {
                return this.systemInfo ? this.systemInfo.version : "";
              }
            }, {
              key: "platformId",
              value: function platformId() {
                return this.accountInfo ? this.accountInfo.miniProgram.appId : "";
              }
            }, {
              key: "language",
              value: function language() {
                var t;
                return (null === (t = this.systemInfo) || void 0 === t ? void 0 : t.language) ? this.systemInfo.language : "";
              }
            }, {
              key: "userAgent",
              value: function userAgent() {
                return window ? window.navigator.userAgent : "";
              }
            }, {
              key: "getNetworkType",
              value: function getNetworkType(t) {
                uni.getNetworkType(t);
              }
            }, {
              key: "onNetworkStatusChange",
              value: function onNetworkStatusChange(t) {
                uni.onNetworkStatusChange(t);
              }
            }]);
            return s;
          }();
          e["default"] = s;
        },
        3680: function _(t, e) {
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var r = /*#__PURE__*/function () {
            "use strict";

            function r() {
              _classCallCheck(this, r);
            }
            _createClass(r, [{
              key: "set",
              value: function set(t) {
                uni.setStorage(t);
              }
            }, {
              key: "setSync",
              value: function setSync(t, e) {
                uni.setStorageSync(t, e);
              }
            }, {
              key: "get",
              value: function get(t) {
                uni.getStorage(t);
              }
            }, {
              key: "getSync",
              value: function getSync(t) {
                return uni.getStorageSync(t);
              }
            }]);
            return r;
          }();
          e["default"] = r;
        },
        7706: function _(t, e) {
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var r = /*#__PURE__*/function () {
            "use strict";

            function r() {
              _classCallCheck(this, r);
            }
            _createClass(r, [{
              key: "connect",
              value: function connect(t) {
                var e = uni.connectSocket(t);
                return {
                  send: function send(t) {
                    null === e || void 0 === e || e.send(t);
                  },
                  close: function close(t) {
                    null === e || void 0 === e || e.close(t);
                  },
                  onOpen: function onOpen(t) {
                    null === e || void 0 === e || e.onOpen(t);
                  },
                  onError: function onError(t) {
                    null === e || void 0 === e || e.onError(t);
                  },
                  onMessage: function onMessage(t) {
                    null === e || void 0 === e || e.onMessage(t);
                  },
                  onClose: function onClose(t) {
                    null === e || void 0 === e || e.onClose(t);
                  }
                };
              }
            }]);
            return r;
          }();
          e["default"] = r;
        },
        4486: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(3854));
          var s = /*#__PURE__*/function () {
            "use strict";

            function s() {
              _classCallCheck(this, s);
              this.systemInfo = wx.getSystemInfoSync();
            }
            _createClass(s, [{
              key: "os",
              value: function os() {
                return n.default.getStr(this.systemInfo, "platform");
              }
            }, {
              key: "osVersion",
              value: function osVersion() {
                return n.default.getStr(this.systemInfo, "system");
              }
            }, {
              key: "model",
              value: function model() {
                return n.default.getStr(this.systemInfo, "model");
              }
            }, {
              key: "brand",
              value: function brand() {
                return n.default.getStr(this.systemInfo, "brand");
              }
            }, {
              key: "platform",
              value: function platform() {
                return "MP-WEIXIN";
              }
            }, {
              key: "platformVersion",
              value: function platformVersion() {
                return n.default.getStr(this.systemInfo, "version");
              }
            }, {
              key: "language",
              value: function language() {
                return n.default.getStr(this.systemInfo, "language");
              }
            }, {
              key: "platformId",
              value: function platformId() {
                if (wx.canIUse("getAccountInfoSync")) return wx.getAccountInfoSync().miniProgram.appId;
                return "";
              }
            }, {
              key: "getNetworkType",
              value: function getNetworkType(t) {
                wx.getNetworkType({
                  success: function success(e) {
                    var r;
                    null === (r = t.success) || void 0 === r || r.call(t.success, {
                      networkType: e.networkType
                    });
                  },
                  fail: t.fail
                });
              }
            }, {
              key: "onNetworkStatusChange",
              value: function onNetworkStatusChange(t) {
                wx.onNetworkStatusChange(t);
              }
            }]);
            return s;
          }();
          e["default"] = s;
        },
        5867: function _(t, e) {
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var r = /*#__PURE__*/function () {
            "use strict";

            function r() {
              _classCallCheck(this, r);
            }
            _createClass(r, [{
              key: "set",
              value: function set(t) {
                wx.setStorage(t);
              }
            }, {
              key: "setSync",
              value: function setSync(t, e) {
                wx.setStorageSync(t, e);
              }
            }, {
              key: "get",
              value: function get(t) {
                wx.getStorage(t);
              }
            }, {
              key: "getSync",
              value: function getSync(t) {
                return wx.getStorageSync(t);
              }
            }]);
            return r;
          }();
          e["default"] = r;
        },
        7006: function _(t, e) {
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var r = /*#__PURE__*/function () {
            "use strict";

            function r() {
              _classCallCheck(this, r);
            }
            _createClass(r, [{
              key: "connect",
              value: function connect(t) {
                var e = wx.connectSocket({
                  url: t.url,
                  header: t.header,
                  protocols: t.protocols,
                  success: t.success,
                  fail: t.fail,
                  complete: t.complete
                });
                return {
                  onOpen: e.onOpen,
                  send: e.send,
                  onMessage: e.onMessage,
                  onError: e.onError,
                  onClose: e.onClose,
                  close: e.close
                };
              }
            }]);
            return r;
          }();
          e["default"] = r;
        },
        6893: function _(t, e) {
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var r;
          (function (t) {
            t.SDK_VERSION = "GTMP-2.0.4.dcloud";
            t.DEFAULT_SOCKET_URL = "wss://wshzn.gepush.com:5223/nws";
            t.SOCKET_PROTOCOL_VERSION = "1.0";
            t.SERVER_PUBLIC_KEY = "MHwwDQYJKoZIhvcNAQEBBQADawAwaAJhAJp1rROuvBF7sBSnvLaesj2iFhMcY8aXyLvpnNLKs2wjL3JmEnyr++SlVa35liUlzi83tnAFkn3A9GB7pHBNzawyUkBh8WUhq5bnFIkk2RaDa6+5MpG84DEv52p7RR+aWwIDAQAB";
            t.SERVER_PUBLIC_KEY_ID = "69d747c4b9f641baf4004be4297e9f3b";
            t.ID_U_2_G = true;
          })(r || (r = {}));
          e["default"] = r;
        },
        7555: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(7002));
          var s = i(r(529));
          var a = i(r(6379));
          var o = /*#__PURE__*/function () {
            "use strict";

            function o() {
              _classCallCheck(this, o);
            }
            _createClass(o, null, [{
              key: "init",
              value: function init(t) {
                var e;
                if (this.inited) return;
                try {
                  this.checkAppid(t.appid);
                  this.inited = true;
                  s.default.info("init: appid=".concat(t.appid));
                  a.default.init(t);
                  n.default.connect();
                } catch (r) {
                  this.inited = false;
                  null === (e = t.onError) || void 0 === e || e.call(t.onError, {
                    error: r
                  });
                  throw r;
                }
              }
            }, {
              key: "enableSocket",
              value: function enableSocket(t) {
                this.checkInit();
                n.default.enableSocket(t);
              }
            }, {
              key: "checkInit",
              value: function checkInit() {
                if (!this.inited) throw new Error("not init, please invoke init method firstly");
              }
            }, {
              key: "checkAppid",
              value: function checkAppid(t) {
                if (null == t || void 0 == t || "" == t.trim()) throw new Error("invalid appid ".concat(t));
              }
            }]);
            return o;
          }();
          o.inited = false;
          e["default"] = o;
        },
        6379: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(6667));
          var s = i(r(8506));
          var a = i(r(6893));
          var o = i(r(7002));
          var u = i(r(529));
          var c = i(r(4685));
          var l = i(r(2323));
          var f = /*#__PURE__*/function () {
            "use strict";

            function f() {
              _classCallCheck(this, f);
            }
            _createClass(f, null, [{
              key: "init",
              value: function init(t) {
                var e;
                if (a.default.ID_U_2_G) this.appid = l.default.to_getui(t.appid);else this.appid = t.appid;
                this.onError = t.onError;
                this.onClientId = t.onClientId;
                this.onlineState = t.onlineState;
                this.onPushMsg = t.onPushMsg;
                if (this.appid != s.default.getSync(s.default.KEY_APPID, this.appid)) {
                  u.default.info("appid changed, clear session and cid");
                  s.default.setSync(s.default.KEY_CID, "");
                  s.default.setSync(s.default.KEY_SESSION, "");
                }
                s.default.setSync(s.default.KEY_APPID, this.appid);
                this.cid = s.default.getSync(s.default.KEY_CID, this.cid);
                if (this.cid) null === (e = this.onClientId) || void 0 === e || e.call(this.onClientId, {
                  cid: f.cid
                });
                this.session = s.default.getSync(s.default.KEY_SESSION, this.session);
                this.deviceId = s.default.getSync(s.default.KEY_DEVICE_ID, this.deviceId);
                this.regId = s.default.getSync(s.default.KEY_REGID, this.regId);
                if (!this.regId) {
                  this.regId = this.createRegId();
                  s.default.set({
                    key: s.default.KEY_REGID,
                    data: this.regId
                  });
                }
                this.socketUrl = s.default.getSync(s.default.KEY_SOCKET_URL, this.socketUrl);
                var r = this;
                c.default.getNetworkType({
                  success: function success(t) {
                    r.networkType = t.networkType;
                    r.networkConnected = "none" != r.networkType && "" != r.networkType;
                  }
                });
                c.default.onNetworkStatusChange(function (t) {
                  r.networkConnected = t.isConnected;
                  r.networkType = t.networkType;
                  if (r.networkConnected) o.default.reconnect(100);
                });
              }
            }, {
              key: "createRegId",
              value: function createRegId() {
                return "M-V".concat(n.default.md5Hex(this.getUuid()), "-").concat(new Date().getTime());
              }
            }, {
              key: "getUuid",
              value: function getUuid() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
                  var e = 16 * Math.random() | 0,
                    r = "x" === t ? e : 3 & e | 8;
                  return r.toString(16);
                });
              }
            }]);
            return f;
          }();
          f.appid = "";
          f.cid = "";
          f.regId = "";
          f.session = "";
          f.deviceId = "";
          f.packetId = 1;
          f.online = false;
          f.socketUrl = a.default.DEFAULT_SOCKET_URL;
          f.publicKeyId = a.default.SERVER_PUBLIC_KEY_ID;
          f.publicKey = a.default.SERVER_PUBLIC_KEY;
          f.lastAliasTime = 0;
          f.networkConnected = true;
          f.networkType = "none";
          e["default"] = f;
        },
        9586: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          var n, s;
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var a = i(r(661));
          var o = r(4198);
          var u = i(r(6379));
          var c = /*#__PURE__*/function (_a$default) {
            "use strict";

            _inherits(c, _a$default);
            var _super = _createSuper(c);
            function c() {
              var _this;
              _classCallCheck(this, c);
              _this = _super.apply(this, arguments);
              _this.actionMsgData = new l();
              return _this;
            }
            _createClass(c, [{
              key: "send",
              value: function send() {
                var _this2 = this;
                setTimeout(function () {
                  var t;
                  if (c.waitingLoginMsgMap.has(_this2.actionMsgData.msgId) || c.waitingResponseMsgMap.has(_this2.actionMsgData.msgId)) {
                    c.waitingLoginMsgMap.delete(_this2.actionMsgData.msgId);
                    c.waitingResponseMsgMap.delete(_this2.actionMsgData.msgId);
                    null === (t = _this2.callback) || void 0 === t || t.call(_this2.callback, {
                      resultCode: o.ErrorCode.TIME_OUT,
                      message: "waiting time out"
                    });
                  }
                }, 1e4);
                if (!u.default.online) {
                  c.waitingLoginMsgMap.set(this.actionMsgData.msgId, this);
                  return;
                }
                if (this.actionMsgData.msgAction != c.ClientAction.RECEIVED) c.waitingResponseMsgMap.set(this.actionMsgData.msgId, this);
                _get(_getPrototypeOf(c.prototype), "send", this).call(this);
              }
            }, {
              key: "receive",
              value: function receive() {}
            }], [{
              key: "initActionMsg",
              value: function initActionMsg(t) {
                _get(_getPrototypeOf(c), "initMsg", this).call(this, t);
                t.command = a.default.Command.CLIENT_MSG;
                t.data = t.actionMsgData = l.create();
                return t;
              }
            }, {
              key: "parseActionMsg",
              value: function parseActionMsg(t, e) {
                _get(_getPrototypeOf(c), "parseMsg", this).call(this, t, e);
                t.actionMsgData = l.parse(t.data);
                return t;
              }
            }, {
              key: "sendWaitingMessages",
              value: function sendWaitingMessages() {
                var t = this.waitingLoginMsgMap.keys();
                var e;
                while (e = t.next(), !e.done) {
                  var _t3 = this.waitingLoginMsgMap.get(e.value);
                  this.waitingLoginMsgMap.delete(e.value);
                  null === _t3 || void 0 === _t3 || _t3.send();
                }
              }
            }, {
              key: "getWaitingResponseMessage",
              value: function getWaitingResponseMessage(t) {
                return c.waitingResponseMsgMap.get(t);
              }
            }, {
              key: "removeWaitingResponseMessage",
              value: function removeWaitingResponseMessage(t) {
                var e = c.waitingResponseMsgMap.get(t);
                if (e) c.waitingResponseMsgMap.delete(t);
                return e;
              }
            }]);
            return c;
          }(a.default);
          c.ServerAction = (n = /*#__PURE__*/_createClass(function n() {
            "use strict";

            _classCallCheck(this, n);
          }), n.PUSH_MESSAGE = "pushmessage", n.REDIRECT_SERVER = "redirect_server", n.ADD_PHONE_INFO_RESULT = "addphoneinfo", n.SET_MODE_RESULT = "set_mode_result", n.SET_TAG_RESULT = "settag_result", n.BIND_ALIAS_RESULT = "response_bind", n.UNBIND_ALIAS_RESULT = "response_unbind", n.FEED_BACK_RESULT = "pushmessage_feedback", n.RECEIVED = "received", n);
          c.ClientAction = (s = /*#__PURE__*/_createClass(function s() {
            "use strict";

            _classCallCheck(this, s);
          }), s.ADD_PHONE_INFO = "addphoneinfo", s.SET_MODE = "set_mode", s.FEED_BACK = "pushmessage_feedback", s.SET_TAGS = "set_tag", s.BIND_ALIAS = "bind_alias", s.UNBIND_ALIAS = "unbind_alias", s.RECEIVED = "received", s);
          c.waitingLoginMsgMap = new Map();
          c.waitingResponseMsgMap = new Map();
          var l = /*#__PURE__*/function () {
            "use strict";

            function l() {
              _classCallCheck(this, l);
              this.appId = "";
              this.cid = "";
              this.msgId = "";
              this.msgAction = "";
              this.msgData = "";
              this.msgExtraData = "";
            }
            _createClass(l, null, [{
              key: "create",
              value: function create() {
                var t = new l();
                t.appId = u.default.appid;
                t.cid = u.default.cid;
                t.msgId = (2147483647 & new Date().getTime()).toString();
                return t;
              }
            }, {
              key: "parse",
              value: function parse(t) {
                var e = new l();
                var r = JSON.parse(t);
                e.appId = r.appId;
                e.cid = r.cid;
                e.msgId = r.msgId;
                e.msgAction = r.msgAction;
                e.msgData = r.msgData;
                e.msgExtraData = r.msgExtraData;
                return e;
              }
            }]);
            return l;
          }();
          e["default"] = c;
        },
        4516: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(4685));
          var s = i(r(8506));
          var a = i(r(6893));
          var o = r(4198);
          var u = i(r(9586));
          var c = i(r(6379));
          var l = /*#__PURE__*/function (_u$default) {
            "use strict";

            _inherits(l, _u$default);
            var _super2 = _createSuper(l);
            function l() {
              var _this3;
              _classCallCheck(this, l);
              _this3 = _super2.apply(this, arguments);
              _this3.addPhoneInfoData = new f();
              return _this3;
            }
            _createClass(l, [{
              key: "send",
              value: function send() {
                var t = new Date().getTime();
                var e = s.default.getSync(s.default.KEY_ADD_PHONE_INFO_TIME, 0);
                if (t - e < 24 * 60 * 60 * 1e3) return;
                _get(_getPrototypeOf(l.prototype), "send", this).call(this);
              }
            }], [{
              key: "create",
              value: function create() {
                var t = new l();
                _get(_getPrototypeOf(l), "initActionMsg", this).call(this, t);
                t.callback = function (e) {
                  if (e.resultCode != o.ErrorCode.SUCCESS && e.resultCode != o.ErrorCode.REPEAT_MESSAGE) setTimeout(function () {
                    t.send();
                  }, 30 * 1e3);else s.default.set({
                    key: s.default.KEY_ADD_PHONE_INFO_TIME,
                    data: new Date().getTime()
                  });
                };
                t.actionMsgData.msgAction = u.default.ClientAction.ADD_PHONE_INFO;
                t.addPhoneInfoData = f.create();
                t.actionMsgData.msgData = JSON.stringify(t.addPhoneInfoData);
                return t;
              }
            }]);
            return l;
          }(u.default);
          var f = /*#__PURE__*/function () {
            "use strict";

            function f() {
              _classCallCheck(this, f);
              this.model = "";
              this.brand = "";
              this.system_version = "";
              this.version = "";
              this.deviceid = "";
              this.type = "";
            }
            _createClass(f, null, [{
              key: "create",
              value: function create() {
                var t = new f();
                t.model = n.default.model();
                t.brand = n.default.brand();
                t.system_version = n.default.osVersion();
                t.version = a.default.SDK_VERSION;
                t.device_token = "";
                t.imei = "";
                t.oaid = "";
                t.mac = "";
                t.idfa = "";
                t.type = "MINIPROGRAM";
                t.deviceid = "".concat(t.type, "-").concat(c.default.deviceId);
                t.extra = {
                  os: n.default.os(),
                  platform: n.default.platform(),
                  platformVersion: n.default.platformVersion(),
                  platformId: n.default.platformId(),
                  language: n.default.language(),
                  userAgent: n.default.userAgent()
                };
                return t;
              }
            }]);
            return f;
          }();
          e["default"] = l;
        },
        8723: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          var n, s;
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var a = i(r(6379));
          var o = r(4198);
          var u = i(r(9586));
          var c = /*#__PURE__*/function (_u$default2) {
            "use strict";

            _inherits(c, _u$default2);
            var _super3 = _createSuper(c);
            function c() {
              var _this4;
              _classCallCheck(this, c);
              _this4 = _super3.apply(this, arguments);
              _this4.feedbackData = new l();
              return _this4;
            }
            _createClass(c, [{
              key: "send",
              value: function send() {
                _get(_getPrototypeOf(c.prototype), "send", this).call(this);
              }
            }], [{
              key: "create",
              value: function create(t, e) {
                var r = new c();
                _get(_getPrototypeOf(c), "initActionMsg", this).call(this, r);
                r.callback = function (t) {
                  if (t.resultCode != o.ErrorCode.SUCCESS && t.resultCode != o.ErrorCode.REPEAT_MESSAGE) setTimeout(function () {
                    r.send();
                  }, 30 * 1e3);
                };
                r.feedbackData = l.create(t, e);
                r.actionMsgData.msgAction = u.default.ClientAction.FEED_BACK;
                r.actionMsgData.msgData = JSON.stringify(r.feedbackData);
                return r;
              }
            }]);
            return c;
          }(u.default);
          c.ActionId = (n = /*#__PURE__*/_createClass(function n() {
            "use strict";

            _classCallCheck(this, n);
          }), n.RECEIVE = "0", n.MP_RECEIVE = "210000", n.WEB_RECEIVE = "220000", n.BEGIN = "1", n);
          c.RESULT = (s = /*#__PURE__*/_createClass(function s() {
            "use strict";

            _classCallCheck(this, s);
          }), s.OK = "ok", s);
          var l = /*#__PURE__*/function () {
            "use strict";

            function l() {
              _classCallCheck(this, l);
              this.messageid = "";
              this.appkey = "";
              this.appid = "";
              this.taskid = "";
              this.actionid = "";
              this.result = "";
              this.timestamp = "";
            }
            _createClass(l, null, [{
              key: "create",
              value: function create(t, e) {
                var r = new l();
                r.messageid = t.pushMessageData.messageid;
                r.appkey = t.pushMessageData.appKey;
                r.appid = a.default.appid;
                r.taskid = t.pushMessageData.taskId;
                r.actionid = e;
                r.result = c.RESULT.OK;
                r.timestamp = new Date().getTime().toString();
                return r;
              }
            }]);
            return l;
          }();
          e["default"] = c;
        },
        6362: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(661));
          var s = /*#__PURE__*/function (_n$default) {
            "use strict";

            _inherits(s, _n$default);
            var _super4 = _createSuper(s);
            function s() {
              _classCallCheck(this, s);
              return _super4.apply(this, arguments);
            }
            _createClass(s, null, [{
              key: "create",
              value: function create() {
                var t = new s();
                _get(_getPrototypeOf(s), "initMsg", this).call(this, t);
                t.command = n.default.Command.HEART_BEAT;
                return t;
              }
            }]);
            return s;
          }(n.default);
          e["default"] = s;
        },
        1386: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(6667));
          var s = i(r(6379));
          var a = i(r(661));
          var o = /*#__PURE__*/function (_a$default2) {
            "use strict";

            _inherits(o, _a$default2);
            var _super5 = _createSuper(o);
            function o() {
              var _this5;
              _classCallCheck(this, o);
              _this5 = _super5.apply(this, arguments);
              _this5.keyNegotiateData = new u();
              return _this5;
            }
            _createClass(o, [{
              key: "send",
              value: function send() {
                _get(_getPrototypeOf(o.prototype), "send", this).call(this);
              }
            }], [{
              key: "create",
              value: function create() {
                var t = new o();
                _get(_getPrototypeOf(o), "initMsg", this).call(this, t);
                t.command = a.default.Command.KEY_NEGOTIATE;
                n.default.resetKey();
                t.data = t.keyNegotiateData = u.create();
                return t;
              }
            }]);
            return o;
          }(a.default);
          var u = /*#__PURE__*/function () {
            "use strict";

            function u() {
              _classCallCheck(this, u);
              this.appId = "";
              this.rsaPublicKeyId = "";
              this.algorithm = "";
              this.secretKey = "";
              this.iv = "";
            }
            _createClass(u, null, [{
              key: "create",
              value: function create() {
                var t = new u();
                t.appId = s.default.appid;
                t.rsaPublicKeyId = s.default.publicKeyId;
                t.algorithm = "AES";
                t.secretKey = n.default.getEncryptedSecretKey();
                t.iv = n.default.getEncryptedIV();
                return t;
              }
            }]);
            return u;
          }();
          e["default"] = o;
        },
        1280: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(661));
          var s = i(r(6667));
          var a = i(r(8858));
          var o = i(r(529));
          var u = i(r(6379));
          var c = /*#__PURE__*/function (_n$default2) {
            "use strict";

            _inherits(c, _n$default2);
            var _super6 = _createSuper(c);
            function c() {
              var _this6;
              _classCallCheck(this, c);
              _this6 = _super6.apply(this, arguments);
              _this6.keyNegotiateResultData = new l();
              return _this6;
            }
            _createClass(c, [{
              key: "receive",
              value: function receive() {
                var t, e;
                if (0 != this.keyNegotiateResultData.errorCode) {
                  o.default.error("key negotiate fail: ".concat(this.data));
                  null === (t = u.default.onError) || void 0 === t || t.call(u.default.onError, {
                    error: "key negotiate fail: ".concat(this.data)
                  });
                  return;
                }
                var r = this.keyNegotiateResultData.encryptType.split("/");
                if (!s.default.algorithmMap.has(r[0].trim().toLowerCase()) || !s.default.modeMap.has(r[1].trim().toLowerCase()) || !s.default.paddingMap.has(r[2].trim().toLowerCase())) {
                  o.default.error("key negotiate fail: ".concat(this.data));
                  null === (e = u.default.onError) || void 0 === e || e.call(u.default.onError, {
                    error: "key negotiate fail: ".concat(this.data)
                  });
                  return;
                }
                s.default.setEncryptParams(r[0].trim().toLowerCase(), r[1].trim().toLowerCase(), r[2].trim().toLowerCase());
                a.default.create().send();
              }
            }], [{
              key: "parse",
              value: function parse(t) {
                var e = new c();
                _get(_getPrototypeOf(c), "parseMsg", this).call(this, e, t);
                e.keyNegotiateResultData = l.parse(e.data);
                return e;
              }
            }]);
            return c;
          }(n.default);
          var l = /*#__PURE__*/function () {
            "use strict";

            function l() {
              _classCallCheck(this, l);
              this.errorCode = -1;
              this.errorMsg = "";
              this.encryptType = "";
            }
            _createClass(l, null, [{
              key: "parse",
              value: function parse(t) {
                var e = new l();
                var r = JSON.parse(t);
                e.errorCode = r.errorCode;
                e.errorMsg = r.errorMsg;
                e.encryptType = r.encryptType;
                return e;
              }
            }]);
            return l;
          }();
          e["default"] = c;
        },
        8858: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(6379));
          var s = i(r(6667));
          var a = i(r(661));
          var o = i(r(4534));
          var u = /*#__PURE__*/function (_a$default3) {
            "use strict";

            _inherits(u, _a$default3);
            var _super7 = _createSuper(u);
            function u() {
              var _this7;
              _classCallCheck(this, u);
              _this7 = _super7.apply(this, arguments);
              _this7.loginData = new c();
              return _this7;
            }
            _createClass(u, [{
              key: "send",
              value: function send() {
                if (!this.loginData.session || n.default.cid != s.default.md5Hex(this.loginData.session)) {
                  o.default.create().send();
                  return;
                }
                _get(_getPrototypeOf(u.prototype), "send", this).call(this);
              }
            }], [{
              key: "create",
              value: function create() {
                var t = new u();
                _get(_getPrototypeOf(u), "initMsg", this).call(this, t);
                t.command = a.default.Command.LOGIN;
                t.data = t.loginData = c.create();
                return t;
              }
            }]);
            return u;
          }(a.default);
          var c = /*#__PURE__*/function () {
            "use strict";

            function c() {
              _classCallCheck(this, c);
              this.appId = "";
              this.session = "";
            }
            _createClass(c, null, [{
              key: "create",
              value: function create() {
                var t = new c();
                t.appId = n.default.appid;
                t.session = n.default.session;
                return t;
              }
            }]);
            return c;
          }();
          e["default"] = u;
        },
        1606: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(8506));
          var s = i(r(661));
          var a = i(r(6379));
          var o = i(r(9586));
          var u = i(r(4516));
          var c = i(r(8858));
          var l = /*#__PURE__*/function (_s$default) {
            "use strict";

            _inherits(l, _s$default);
            var _super8 = _createSuper(l);
            function l() {
              var _this8;
              _classCallCheck(this, l);
              _this8 = _super8.apply(this, arguments);
              _this8.loginResultData = new f();
              return _this8;
            }
            _createClass(l, [{
              key: "receive",
              value: function receive() {
                var t;
                if (0 != this.loginResultData.errorCode) {
                  this.data;
                  a.default.session = a.default.cid = "";
                  n.default.setSync(n.default.KEY_CID, "");
                  n.default.setSync(n.default.KEY_SESSION, "");
                  c.default.create().send();
                  return;
                }
                if (!a.default.online) {
                  a.default.online = true;
                  null === (t = a.default.onlineState) || void 0 === t || t.call(a.default.onlineState, {
                    online: a.default.online
                  });
                }
                o.default.sendWaitingMessages();
                u.default.create().send();
              }
            }], [{
              key: "parse",
              value: function parse(t) {
                var e = new l();
                _get(_getPrototypeOf(l), "parseMsg", this).call(this, e, t);
                e.loginResultData = f.parse(e.data);
                return e;
              }
            }]);
            return l;
          }(s.default);
          var f = /*#__PURE__*/function () {
            "use strict";

            function f() {
              _classCallCheck(this, f);
              this.errorCode = -1;
              this.errorMsg = "";
              this.session = "";
            }
            _createClass(f, null, [{
              key: "parse",
              value: function parse(t) {
                var e = new f();
                var r = JSON.parse(t);
                e.errorCode = r.errorCode;
                e.errorMsg = r.errorMsg;
                e.session = r.session;
                return e;
              }
            }]);
            return f;
          }();
          e["default"] = l;
        },
        661: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          var n;
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var s = i(r(9593));
          var a = i(r(7002));
          var o = i(r(6893));
          var u = i(r(6379));
          var c = /*#__PURE__*/function () {
            "use strict";

            function c() {
              _classCallCheck(this, c);
              this.version = "";
              this.command = 0;
              this.packetId = 0;
              this.timeStamp = 0;
              this.data = "";
              this.signature = "";
            }
            _createClass(c, [{
              key: "stringify",
              value: function stringify() {
                return JSON.stringify(this, ["version", "command", "packetId", "timeStamp", "data", "signature"]);
              }
            }, {
              key: "send",
              value: function send() {
                if (!a.default.isAvailable()) return;
                this.packetId = u.default.packetId++;
                if (this.temp) this.data = this.temp;else this.temp = this.data;
                this.data = JSON.stringify(this.data);
                this.stringify();
                if (this.command != c.Command.HEART_BEAT) {
                  s.default.sign(this);
                  if (this.data && this.command != c.Command.KEY_NEGOTIATE) s.default.encrypt(this);
                }
                a.default.send(this.stringify());
              }
            }], [{
              key: "initMsg",
              value: function initMsg(t) {
                t.version = o.default.SOCKET_PROTOCOL_VERSION;
                t.command = 0;
                t.timeStamp = new Date().getTime();
                return t;
              }
            }, {
              key: "parseMsg",
              value: function parseMsg(t, e) {
                var r = JSON.parse(e);
                t.version = r.version;
                t.command = r.command;
                t.packetId = r.packetId;
                t.timeStamp = r.timeStamp;
                t.data = r.data;
                t.signature = r.signature;
                return t;
              }
            }]);
            return c;
          }();
          c.Command = (n = /*#__PURE__*/_createClass(function n() {
            "use strict";

            _classCallCheck(this, n);
          }), n.HEART_BEAT = 0, n.KEY_NEGOTIATE = 1, n.KEY_NEGOTIATE_RESULT = 16, n.REGISTER = 2, n.REGISTER_RESULT = 32, n.LOGIN = 3, n.LOGIN_RESULT = 48, n.LOGOUT = 4, n.LOGOUT_RESULT = 64, n.CLIENT_MSG = 5, n.SERVER_MSG = 80, n.SERVER_CLOSE = 96, n.REDIRECT_SERVER = 112, n);
          e["default"] = c;
        },
        9593: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(6667));
          var s;
          (function (t) {
            function e(t) {
              t.data = n.default.encrypt(t.data);
            }
            t.encrypt = e;
            function r(t) {
              t.data = n.default.decrypt(t.data);
            }
            t.decrypt = r;
            function i(t) {
              t.signature = n.default.sha256("".concat(t.timeStamp).concat(t.packetId).concat(t.command).concat(t.data));
            }
            t.sign = i;
            function s(t) {
              var e = n.default.sha256("".concat(t.timeStamp).concat(t.packetId).concat(t.command).concat(t.data));
              if (t.signature != e) throw new Error("msg signature vierfy failed");
            }
            t.verify = s;
          })(s || (s = {}));
          e["default"] = s;
        },
        4054: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(1280));
          var s = i(r(1606));
          var a = i(r(661));
          var o = i(r(1277));
          var u = i(r(910));
          var c = i(r(9538));
          var l = i(r(9479));
          var f = i(r(6755));
          var h = i(r(2918));
          var d = i(r(9586));
          var v = i(r(9510));
          var p = i(r(4626));
          var g = i(r(7562));
          var y = i(r(9593));
          var m = i(r(9586));
          var w = i(r(9519));
          var S = i(r(8947));
          var _ = /*#__PURE__*/function () {
            "use strict";

            function _() {
              _classCallCheck(this, _);
            }
            _createClass(_, null, [{
              key: "receiveMessage",
              value: function receiveMessage(t) {
                var e = a.default.parseMsg(new a.default(), t);
                if (e.command == a.default.Command.HEART_BEAT) return;
                if (e.command != a.default.Command.KEY_NEGOTIATE_RESULT && e.command != a.default.Command.SERVER_CLOSE && e.command != a.default.Command.REDIRECT_SERVER) y.default.decrypt(e);
                if (e.command != a.default.Command.SERVER_CLOSE && e.command != a.default.Command.REDIRECT_SERVER) y.default.verify(e);
                switch (e.command) {
                  case a.default.Command.KEY_NEGOTIATE_RESULT:
                    n.default.parse(e.stringify()).receive();
                    break;
                  case a.default.Command.REGISTER_RESULT:
                    o.default.parse(e.stringify()).receive();
                    break;
                  case a.default.Command.LOGIN_RESULT:
                    s.default.parse(e.stringify()).receive();
                    break;
                  case a.default.Command.SERVER_MSG:
                    this.receiveActionMsg(e.stringify());
                    break;
                  case a.default.Command.SERVER_CLOSE:
                    S.default.parse(e.stringify()).receive();
                    break;
                  case a.default.Command.REDIRECT_SERVER:
                    h.default.parse(e.stringify()).receive();
                    break;
                }
              }
            }, {
              key: "receiveActionMsg",
              value: function receiveActionMsg(t) {
                var e = m.default.parseActionMsg(new m.default(), t);
                if (e.actionMsgData.msgAction != d.default.ServerAction.RECEIVED && e.actionMsgData.msgAction != d.default.ServerAction.REDIRECT_SERVER) {
                  var _t4 = JSON.parse(e.actionMsgData.msgData);
                  w.default.create(_t4.id).send();
                }
                switch (e.actionMsgData.msgAction) {
                  case d.default.ServerAction.PUSH_MESSAGE:
                    f.default.parse(t).receive();
                    break;
                  case d.default.ServerAction.ADD_PHONE_INFO_RESULT:
                    u.default.parse(t).receive();
                    break;
                  case d.default.ServerAction.SET_MODE_RESULT:
                    v.default.parse(t).receive();
                    break;
                  case d.default.ServerAction.SET_TAG_RESULT:
                    p.default.parse(t).receive();
                    break;
                  case d.default.ServerAction.BIND_ALIAS_RESULT:
                    c.default.parse(t).receive();
                    break;
                  case d.default.ServerAction.UNBIND_ALIAS_RESULT:
                    g.default.parse(t).receive();
                    break;
                  case d.default.ServerAction.FEED_BACK_RESULT:
                    l.default.parse(t).receive();
                    break;
                  case d.default.ServerAction.RECEIVED:
                    w.default.parse(t).receive();
                    break;
                }
              }
            }]);
            return _;
          }();
          e["default"] = _;
        },
        9519: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = r(4198);
          var s = i(r(6379));
          var a = i(r(9586));
          var o = /*#__PURE__*/function (_a$default4) {
            "use strict";

            _inherits(o, _a$default4);
            var _super9 = _createSuper(o);
            function o() {
              var _this9;
              _classCallCheck(this, o);
              _this9 = _super9.apply(this, arguments);
              _this9.receivedData = new u();
              return _this9;
            }
            _createClass(o, [{
              key: "receive",
              value: function receive() {
                var t;
                var e = a.default.getWaitingResponseMessage(this.actionMsgData.msgId);
                if (e && e.actionMsgData.msgAction == a.default.ClientAction.ADD_PHONE_INFO || e && e.actionMsgData.msgAction == a.default.ClientAction.FEED_BACK) {
                  a.default.removeWaitingResponseMessage(e.actionMsgData.msgId);
                  null === (t = e.callback) || void 0 === t || t.call(e.callback, {
                    resultCode: n.ErrorCode.SUCCESS,
                    message: "received"
                  });
                }
              }
            }, {
              key: "send",
              value: function send() {
                _get(_getPrototypeOf(o.prototype), "send", this).call(this);
              }
            }], [{
              key: "create",
              value: function create(t) {
                var e = new o();
                _get(_getPrototypeOf(o), "initActionMsg", this).call(this, e);
                e.callback = function (t) {
                  if (t.resultCode != n.ErrorCode.SUCCESS && t.resultCode != n.ErrorCode.REPEAT_MESSAGE) setTimeout(function () {
                    e.send();
                  }, 3 * 1e3);
                };
                e.actionMsgData.msgAction = a.default.ClientAction.RECEIVED;
                e.receivedData = u.create(t);
                e.actionMsgData.msgData = JSON.stringify(e.receivedData);
                return e;
              }
            }, {
              key: "parse",
              value: function parse(t) {
                var e = new o();
                _get(_getPrototypeOf(o), "parseActionMsg", this).call(this, e, t);
                e.receivedData = u.parse(e.data);
                return e;
              }
            }]);
            return o;
          }(a.default);
          var u = /*#__PURE__*/function () {
            "use strict";

            function u() {
              _classCallCheck(this, u);
              this.msgId = "";
              this.cid = "";
            }
            _createClass(u, null, [{
              key: "create",
              value: function create(t) {
                var e = new u();
                e.cid = s.default.cid;
                e.msgId = t;
                return e;
              }
            }, {
              key: "parse",
              value: function parse(t) {
                var e = new u();
                var r = JSON.parse(t);
                e.cid = r.cid;
                e.msgId = r.msgId;
                return e;
              }
            }]);
            return u;
          }();
          e["default"] = o;
        },
        2918: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          e.RedirectServerData = void 0;
          var n = i(r(7002));
          var s = i(r(8506));
          var a = i(r(661));
          var o = /*#__PURE__*/function (_a$default5) {
            "use strict";

            _inherits(o, _a$default5);
            var _super10 = _createSuper(o);
            function o() {
              var _this10;
              _classCallCheck(this, o);
              _this10 = _super10.apply(this, arguments);
              _this10.redirectServerData = new u();
              return _this10;
            }
            _createClass(o, [{
              key: "receive",
              value: function receive() {
                this.redirectServerData;
                s.default.setSync(s.default.KEY_REDIRECT_SERVER, JSON.stringify(this.redirectServerData));
                n.default.close("redirect server");
                n.default.reconnect(this.redirectServerData.delay);
              }
            }], [{
              key: "parse",
              value: function parse(t) {
                var e = new o();
                _get(_getPrototypeOf(o), "parseMsg", this).call(this, e, t);
                e.redirectServerData = u.parse(e.data);
                return e;
              }
            }]);
            return o;
          }(a.default);
          var u = /*#__PURE__*/function () {
            "use strict";

            function u() {
              _classCallCheck(this, u);
              this.addressList = [];
              this.delay = 0;
              this.loc = "";
              this.conf = "";
              this.time = 0;
            }
            _createClass(u, null, [{
              key: "parse",
              value: function parse(t) {
                var e = new u();
                var r = JSON.parse(t);
                e.addressList = r.addressList;
                e.delay = r.delay;
                e.loc = r.loc;
                e.conf = r.conf;
                e.time = r.time ? r.time : new Date().getTime();
                return e;
              }
            }]);
            return u;
          }();
          e.RedirectServerData = u;
          e["default"] = o;
        },
        4534: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(6379));
          var s = i(r(661));
          var a = /*#__PURE__*/function (_s$default2) {
            "use strict";

            _inherits(a, _s$default2);
            var _super11 = _createSuper(a);
            function a() {
              var _this11;
              _classCallCheck(this, a);
              _this11 = _super11.apply(this, arguments);
              _this11.registerData = new o();
              return _this11;
            }
            _createClass(a, [{
              key: "send",
              value: function send() {
                _get(_getPrototypeOf(a.prototype), "send", this).call(this);
              }
            }], [{
              key: "create",
              value: function create() {
                var t = new a();
                _get(_getPrototypeOf(a), "initMsg", this).call(this, t);
                t.command = s.default.Command.REGISTER;
                t.data = t.registerData = o.create();
                return t;
              }
            }]);
            return a;
          }(s.default);
          var o = /*#__PURE__*/function () {
            "use strict";

            function o() {
              _classCallCheck(this, o);
              this.appId = "";
              this.regId = "";
            }
            _createClass(o, null, [{
              key: "create",
              value: function create() {
                var t = new o();
                t.appId = n.default.appid;
                t.regId = n.default.regId;
                return t;
              }
            }]);
            return o;
          }();
          e["default"] = a;
        },
        1277: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(661));
          var s = i(r(8506));
          var a = i(r(6379));
          var o = i(r(8858));
          var u = i(r(529));
          var c = /*#__PURE__*/function (_n$default3) {
            "use strict";

            _inherits(c, _n$default3);
            var _super12 = _createSuper(c);
            function c() {
              var _this12;
              _classCallCheck(this, c);
              _this12 = _super12.apply(this, arguments);
              _this12.registerResultData = new l();
              return _this12;
            }
            _createClass(c, [{
              key: "receive",
              value: function receive() {
                var t, e;
                if (0 != this.registerResultData.errorCode || !this.registerResultData.cid || !this.registerResultData.session) {
                  u.default.error("register fail: ".concat(this.data));
                  null === (t = a.default.onError) || void 0 === t || t.call(a.default.onError, {
                    error: "register fail: ".concat(this.data)
                  });
                  return;
                }
                if (a.default.cid != this.registerResultData.cid) s.default.setSync(s.default.KEY_ADD_PHONE_INFO_TIME, 0);
                a.default.cid = this.registerResultData.cid;
                null === (e = a.default.onClientId) || void 0 === e || e.call(a.default.onClientId, {
                  cid: a.default.cid
                });
                s.default.set({
                  key: s.default.KEY_CID,
                  data: a.default.cid
                });
                a.default.session = this.registerResultData.session;
                s.default.set({
                  key: s.default.KEY_SESSION,
                  data: a.default.session
                });
                a.default.deviceId = this.registerResultData.deviceId;
                s.default.set({
                  key: s.default.KEY_DEVICE_ID,
                  data: a.default.deviceId
                });
                o.default.create().send();
              }
            }], [{
              key: "parse",
              value: function parse(t) {
                var e = new c();
                _get(_getPrototypeOf(c), "parseMsg", this).call(this, e, t);
                e.registerResultData = l.parse(e.data);
                return e;
              }
            }]);
            return c;
          }(n.default);
          var l = /*#__PURE__*/function () {
            "use strict";

            function l() {
              _classCallCheck(this, l);
              this.errorCode = -1;
              this.errorMsg = "";
              this.cid = "";
              this.session = "";
              this.deviceId = "";
              this.regId = "";
            }
            _createClass(l, null, [{
              key: "parse",
              value: function parse(t) {
                var e = new l();
                var r = JSON.parse(t);
                e.errorCode = r.errorCode;
                e.errorMsg = r.errorMsg;
                e.cid = r.cid;
                e.session = r.session;
                e.deviceId = r.deviceId;
                e.regId = r.regId;
                return e;
              }
            }]);
            return l;
          }();
          e["default"] = c;
        },
        8947: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(7002));
          var s = i(r(529));
          var a = i(r(661));
          var o = /*#__PURE__*/function (_a$default6) {
            "use strict";

            _inherits(o, _a$default6);
            var _super13 = _createSuper(o);
            function o() {
              var _this13;
              _classCallCheck(this, o);
              _this13 = _super13.apply(this, arguments);
              _this13.serverCloseData = new u();
              return _this13;
            }
            _createClass(o, [{
              key: "receive",
              value: function receive() {
                JSON.stringify(this.serverCloseData);
                var t = "server close ".concat(this.serverCloseData.code);
                if (20 == this.serverCloseData.code || 23 == this.serverCloseData.code || 24 == this.serverCloseData.code) {
                  n.default.allowReconnect = false;
                  n.default.close(t);
                } else if (21 == this.serverCloseData.code) this.safeClose21(t);else {
                  n.default.allowReconnect = true;
                  n.default.close(t);
                  n.default.reconnect(10);
                }
              }
            }, {
              key: "safeClose21",
              value: function safeClose21(t) {
                try {
                  if ("undefined" != typeof document) if (document.hasFocus() && "visible" == document.visibilityState) {
                    n.default.allowReconnect = true;
                    n.default.close(t);
                    n.default.reconnect(10);
                    return;
                  }
                  n.default.allowReconnect = false;
                  n.default.close(t);
                } catch (e) {
                  s.default.error("ServerClose t1", e);
                  n.default.allowReconnect = false;
                  n.default.close("".concat(t, " error"));
                }
              }
            }], [{
              key: "parse",
              value: function parse(t) {
                var e = new o();
                _get(_getPrototypeOf(o), "parseMsg", this).call(this, e, t);
                e.serverCloseData = u.parse(e.data);
                return e;
              }
            }]);
            return o;
          }(a.default);
          var u = /*#__PURE__*/function () {
            "use strict";

            function u() {
              _classCallCheck(this, u);
              this.code = -1;
              this.msg = "";
            }
            _createClass(u, null, [{
              key: "parse",
              value: function parse(t) {
                var e = new u();
                var r = JSON.parse(t);
                e.code = r.code;
                e.msg = r.msg;
                return e;
              }
            }]);
            return u;
          }();
          e["default"] = o;
        },
        910: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(8506));
          var s = i(r(9586));
          var a = /*#__PURE__*/function (_s$default3) {
            "use strict";

            _inherits(a, _s$default3);
            var _super14 = _createSuper(a);
            function a() {
              var _this14;
              _classCallCheck(this, a);
              _this14 = _super14.apply(this, arguments);
              _this14.addPhoneInfoResultData = new o();
              return _this14;
            }
            _createClass(a, [{
              key: "receive",
              value: function receive() {
                var t;
                this.addPhoneInfoResultData;
                var e = s.default.removeWaitingResponseMessage(this.actionMsgData.msgId);
                if (e) null === (t = e.callback) || void 0 === t || t.call(e.callback, {
                  resultCode: this.addPhoneInfoResultData.errorCode,
                  message: this.addPhoneInfoResultData.errorMsg
                });
                n.default.set({
                  key: n.default.KEY_ADD_PHONE_INFO_TIME,
                  data: new Date().getTime()
                });
              }
            }], [{
              key: "parse",
              value: function parse(t) {
                var e = new a();
                _get(_getPrototypeOf(a), "parseActionMsg", this).call(this, e, t);
                e.addPhoneInfoResultData = o.parse(e.actionMsgData.msgData);
                return e;
              }
            }]);
            return a;
          }(s.default);
          var o = /*#__PURE__*/function () {
            "use strict";

            function o() {
              _classCallCheck(this, o);
              this.errorCode = -1;
              this.errorMsg = "";
            }
            _createClass(o, null, [{
              key: "parse",
              value: function parse(t) {
                var e = new o();
                var r = JSON.parse(t);
                e.errorCode = r.errorCode;
                e.errorMsg = r.errorMsg;
                return e;
              }
            }]);
            return o;
          }();
          e["default"] = a;
        },
        9538: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(8506));
          var s = i(r(529));
          var a = i(r(9586));
          var o = /*#__PURE__*/function (_a$default7) {
            "use strict";

            _inherits(o, _a$default7);
            var _super15 = _createSuper(o);
            function o() {
              var _this15;
              _classCallCheck(this, o);
              _this15 = _super15.apply(this, arguments);
              _this15.bindAliasResultData = new u();
              return _this15;
            }
            _createClass(o, [{
              key: "receive",
              value: function receive() {
                var t;
                s.default.info("bind alias result", this.bindAliasResultData);
                var e = a.default.removeWaitingResponseMessage(this.actionMsgData.msgId);
                if (e) null === (t = e.callback) || void 0 === t || t.call(e.callback, {
                  resultCode: this.bindAliasResultData.errorCode,
                  message: this.bindAliasResultData.errorMsg
                });
                n.default.set({
                  key: n.default.KEY_BIND_ALIAS_TIME,
                  data: new Date().getTime()
                });
              }
            }], [{
              key: "parse",
              value: function parse(t) {
                var e = new o();
                _get(_getPrototypeOf(o), "parseActionMsg", this).call(this, e, t);
                e.bindAliasResultData = u.parse(e.actionMsgData.msgData);
                return e;
              }
            }]);
            return o;
          }(a.default);
          var u = /*#__PURE__*/function () {
            "use strict";

            function u() {
              _classCallCheck(this, u);
              this.errorCode = -1;
              this.errorMsg = "";
            }
            _createClass(u, null, [{
              key: "parse",
              value: function parse(t) {
                var e = new u();
                var r = JSON.parse(t);
                e.errorCode = r.errorCode;
                e.errorMsg = r.errorMsg;
                return e;
              }
            }]);
            return u;
          }();
          e["default"] = o;
        },
        9479: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = r(4198);
          var s = i(r(9586));
          var a = /*#__PURE__*/function (_s$default4) {
            "use strict";

            _inherits(a, _s$default4);
            var _super16 = _createSuper(a);
            function a() {
              var _this16;
              _classCallCheck(this, a);
              _this16 = _super16.apply(this, arguments);
              _this16.feedbackResultData = new o();
              return _this16;
            }
            _createClass(a, [{
              key: "receive",
              value: function receive() {
                var t;
                this.feedbackResultData;
                var e = s.default.removeWaitingResponseMessage(this.actionMsgData.msgId);
                if (e) null === (t = e.callback) || void 0 === t || t.call(e.callback, {
                  resultCode: n.ErrorCode.SUCCESS,
                  message: "received"
                });
              }
            }], [{
              key: "parse",
              value: function parse(t) {
                var e = new a();
                _get(_getPrototypeOf(a), "parseActionMsg", this).call(this, e, t);
                e.feedbackResultData = o.parse(e.actionMsgData.msgData);
                return e;
              }
            }]);
            return a;
          }(s.default);
          var o = /*#__PURE__*/function () {
            "use strict";

            function o() {
              _classCallCheck(this, o);
              this.actionId = "";
              this.taskId = "";
              this.result = "";
            }
            _createClass(o, null, [{
              key: "parse",
              value: function parse(t) {
                var e = new o();
                var r = JSON.parse(t);
                e.actionId = r.actionId;
                e.taskId = r.taskId;
                e.result = r.result;
                return e;
              }
            }]);
            return o;
          }();
          e["default"] = a;
        },
        6755: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          var n;
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var s = i(r(6379));
          var a = i(r(9586));
          var o = i(r(8723));
          var u = /*#__PURE__*/function (_a$default8) {
            "use strict";

            _inherits(u, _a$default8);
            var _super17 = _createSuper(u);
            function u() {
              var _this17;
              _classCallCheck(this, u);
              _this17 = _super17.apply(this, arguments);
              _this17.pushMessageData = new c();
              return _this17;
            }
            _createClass(u, [{
              key: "receive",
              value: function receive() {
                var t;
                this.pushMessageData;
                if (this.pushMessageData.appId != s.default.appid || !this.pushMessageData.messageid || !this.pushMessageData.taskId) this.stringify();
                o.default.create(this, o.default.ActionId.RECEIVE).send();
                o.default.create(this, o.default.ActionId.MP_RECEIVE).send();
                if (this.actionMsgData.msgExtraData && s.default.onPushMsg) null === (t = s.default.onPushMsg) || void 0 === t || t.call(s.default.onPushMsg, {
                  message: this.actionMsgData.msgExtraData
                });
              }
            }], [{
              key: "parse",
              value: function parse(t) {
                var e = new u();
                _get(_getPrototypeOf(u), "parseActionMsg", this).call(this, e, t);
                e.pushMessageData = c.parse(e.actionMsgData.msgData);
                return e;
              }
            }]);
            return u;
          }(a.default);
          var c = /*#__PURE__*/function () {
            "use strict";

            function c() {
              _classCallCheck(this, c);
              this.id = "";
              this.appKey = "";
              this.appId = "";
              this.messageid = "";
              this.taskId = "";
              this.actionChain = [];
              this.cdnType = "";
            }
            _createClass(c, null, [{
              key: "parse",
              value: function parse(t) {
                var e = new c();
                var r = JSON.parse(t);
                e.id = r.id;
                e.appKey = r.appKey;
                e.appId = r.appId;
                e.messageid = r.messageid;
                e.taskId = r.taskId;
                e.actionChain = r.actionChain;
                e.cdnType = r.cdnType;
                return e;
              }
            }]);
            return c;
          }();
          n = /*#__PURE__*/_createClass(function n() {
            "use strict";

            _classCallCheck(this, n);
          }), n.GO_TO = "goto", n.TRANSMIT = "transmit", n;
          e["default"] = u;
        },
        9510: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(9586));
          var s = /*#__PURE__*/function (_n$default4) {
            "use strict";

            _inherits(s, _n$default4);
            var _super18 = _createSuper(s);
            function s() {
              var _this18;
              _classCallCheck(this, s);
              _this18 = _super18.apply(this, arguments);
              _this18.setModeResultData = new a();
              return _this18;
            }
            _createClass(s, [{
              key: "receive",
              value: function receive() {
                var t;
                this.setModeResultData;
                var e = n.default.removeWaitingResponseMessage(this.actionMsgData.msgId);
                if (e) null === (t = e.callback) || void 0 === t || t.call(e.callback, {
                  resultCode: this.setModeResultData.errorCode,
                  message: this.setModeResultData.errorMsg
                });
              }
            }], [{
              key: "parse",
              value: function parse(t) {
                var e = new s();
                _get(_getPrototypeOf(s), "parseActionMsg", this).call(this, e, t);
                e.setModeResultData = a.parse(e.actionMsgData.msgData);
                return e;
              }
            }]);
            return s;
          }(n.default);
          var a = /*#__PURE__*/function () {
            "use strict";

            function a() {
              _classCallCheck(this, a);
              this.errorCode = -1;
              this.errorMsg = "";
            }
            _createClass(a, null, [{
              key: "parse",
              value: function parse(t) {
                var e = new a();
                var r = JSON.parse(t);
                e.errorCode = r.errorCode;
                e.errorMsg = r.errorMsg;
                return e;
              }
            }]);
            return a;
          }();
          e["default"] = s;
        },
        4626: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(8506));
          var s = i(r(529));
          var a = i(r(9586));
          var o = /*#__PURE__*/function (_a$default9) {
            "use strict";

            _inherits(o, _a$default9);
            var _super19 = _createSuper(o);
            function o() {
              var _this19;
              _classCallCheck(this, o);
              _this19 = _super19.apply(this, arguments);
              _this19.setTagResultData = new u();
              return _this19;
            }
            _createClass(o, [{
              key: "receive",
              value: function receive() {
                var t;
                s.default.info("set tag result", this.setTagResultData);
                var e = a.default.removeWaitingResponseMessage(this.actionMsgData.msgId);
                if (e) null === (t = e.callback) || void 0 === t || t.call(e.callback, {
                  resultCode: this.setTagResultData.errorCode,
                  message: this.setTagResultData.errorMsg
                });
                n.default.set({
                  key: n.default.KEY_SET_TAG_TIME,
                  data: new Date().getTime()
                });
              }
            }], [{
              key: "parse",
              value: function parse(t) {
                var e = new o();
                _get(_getPrototypeOf(o), "parseActionMsg", this).call(this, e, t);
                e.setTagResultData = u.parse(e.actionMsgData.msgData);
                return e;
              }
            }]);
            return o;
          }(a.default);
          var u = /*#__PURE__*/function () {
            "use strict";

            function u() {
              _classCallCheck(this, u);
              this.errorCode = 0;
              this.errorMsg = "";
            }
            _createClass(u, null, [{
              key: "parse",
              value: function parse(t) {
                var e = new u();
                var r = JSON.parse(t);
                e.errorCode = r.errorCode;
                e.errorMsg = r.errorMsg;
                return e;
              }
            }]);
            return u;
          }();
          e["default"] = o;
        },
        7562: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(8506));
          var s = i(r(529));
          var a = i(r(9586));
          var o = /*#__PURE__*/function (_a$default10) {
            "use strict";

            _inherits(o, _a$default10);
            var _super20 = _createSuper(o);
            function o() {
              var _this20;
              _classCallCheck(this, o);
              _this20 = _super20.apply(this, arguments);
              _this20.unbindAliasResultData = new u();
              return _this20;
            }
            _createClass(o, [{
              key: "receive",
              value: function receive() {
                var t;
                s.default.info("unbind alias result", this.unbindAliasResultData);
                var e = a.default.removeWaitingResponseMessage(this.actionMsgData.msgId);
                if (e) null === (t = e.callback) || void 0 === t || t.call(e.callback, {
                  resultCode: this.unbindAliasResultData.errorCode,
                  message: this.unbindAliasResultData.errorMsg
                });
                n.default.set({
                  key: n.default.KEY_BIND_ALIAS_TIME,
                  data: new Date().getTime()
                });
              }
            }], [{
              key: "parse",
              value: function parse(t) {
                var e = new o();
                _get(_getPrototypeOf(o), "parseActionMsg", this).call(this, e, t);
                e.unbindAliasResultData = u.parse(e.actionMsgData.msgData);
                return e;
              }
            }]);
            return o;
          }(a.default);
          var u = /*#__PURE__*/function () {
            "use strict";

            function u() {
              _classCallCheck(this, u);
              this.errorCode = -1;
              this.errorMsg = "";
            }
            _createClass(u, null, [{
              key: "parse",
              value: function parse(t) {
                var e = new u();
                var r = JSON.parse(t);
                e.errorCode = r.errorCode;
                e.errorMsg = r.errorMsg;
                return e;
              }
            }]);
            return u;
          }();
          e["default"] = o;
        },
        8227: function _(t, e) {
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var r = /*#__PURE__*/function () {
            "use strict";

            function r(t) {
              _classCallCheck(this, r);
              this.delay = 10;
              this.delay = t;
            }
            _createClass(r, [{
              key: "start",
              value: function start() {
                this.cancel();
                var t = this;
                this.timer = setInterval(function () {
                  t.run();
                }, this.delay);
              }
            }, {
              key: "cancel",
              value: function cancel() {
                if (this.timer) clearInterval(this.timer);
              }
            }]);
            return r;
          }();
          e["default"] = r;
        },
        7167: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          var n;
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var s = i(r(6362));
          var a = i(r(8227));
          var o = /*#__PURE__*/function (_a$default11) {
            "use strict";

            _inherits(o, _a$default11);
            var _super21 = _createSuper(o);
            function o() {
              _classCallCheck(this, o);
              return _super21.apply(this, arguments);
            }
            _createClass(o, [{
              key: "run",
              value: function run() {
                s.default.create().send();
              }
            }, {
              key: "refresh",
              value: function refresh() {
                this.delay = 60 * 1e3;
                this.start();
              }
            }], [{
              key: "getInstance",
              value: function getInstance() {
                return o.InstanceHolder.instance;
              }
            }]);
            return o;
          }(a.default);
          o.INTERVAL = 60 * 1e3;
          o.InstanceHolder = (n = /*#__PURE__*/_createClass(function n() {
            "use strict";

            _classCallCheck(this, n);
          }), n.instance = new o(o.INTERVAL), n);
          e["default"] = o;
        },
        2323: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(4736));
          var s = i(r(6667));
          var a;
          (function (t) {
            var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            var r = (0, n.default)("9223372036854775808");
            function i(t) {
              var e = a(t);
              var r = o(e);
              var i = r[1];
              var n = r[0];
              return u(i) + u(n);
            }
            t.to_getui = i;
            function a(t) {
              var e = s.default.md5Hex(t);
              var r = c(e);
              r[6] &= 15;
              r[6] |= 48;
              r[8] &= 63;
              r[8] |= 128;
              return r;
            }
            function o(t) {
              var e = (0, n.default)(0);
              var r = (0, n.default)(0);
              for (var _r6 = 0; _r6 < 8; _r6++) {
                e = e.multiply(256).plus((0, n.default)(255 & t[_r6]));
              }
              for (var _e4 = 8; _e4 < 16; _e4++) {
                r = r.multiply(256).plus((0, n.default)(255 & t[_e4]));
              }
              return [e, r];
            }
            function u(t) {
              if (t >= r) t = r.multiply(2).minus(t);
              var i = "";
              for (; t > (0, n.default)(0); t = t.divide(62)) {
                i += e.charAt(Number(t.divmod(62).remainder));
              }
              return i;
            }
            function c(t) {
              var e = t.length;
              if (e % 2 != 0) return [];
              var r = new Array();
              for (var _i2 = 0; _i2 < e; _i2 += 2) {
                r.push(parseInt(t.substring(_i2, _i2 + 2), 16));
              }
              return r;
            }
          })(a || (a = {}));
          e["default"] = a;
        },
        6667: function _(t, e, r) {
          var i = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              default: t
            };
          };
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var n = i(r(2620));
          var s = i(r(1354));
          var a = i(r(6379));
          var o;
          (function (t) {
            var e;
            var r;
            var i;
            var o;
            var u = new n.default();
            var c = s.default.mode.CBC;
            var l = s.default.pad.Pkcs7;
            var f = s.default.AES;
            t.algorithmMap = new Map([["aes", s.default.AES]]);
            t.modeMap = new Map([["cbc", s.default.mode.CBC], ["cfb", s.default.mode.CFB], ["cfb128", s.default.mode.CFB], ["ecb", s.default.mode.ECB], ["ofb", s.default.mode.OFB]]);
            t.paddingMap = new Map([["nopadding", s.default.pad.NoPadding], ["pkcs7", s.default.pad.Pkcs7]]);
            function h() {
              e = s.default.MD5(new Date().getTime().toString());
              r = s.default.MD5(e);
              u.setPublicKey(a.default.publicKey);
              e.toString(s.default.enc.Hex);
              r.toString(s.default.enc.Hex);
              i = u.encrypt(e.toString(s.default.enc.Hex));
              o = u.encrypt(r.toString(s.default.enc.Hex));
            }
            t.resetKey = h;
            function d(e, r, i) {
              f = t.algorithmMap.get(e);
              c = t.modeMap.get(r);
              l = t.paddingMap.get(i);
            }
            t.setEncryptParams = d;
            function v(t) {
              return f.encrypt(t, e, {
                iv: r,
                mode: c,
                padding: l
              }).toString();
            }
            t.encrypt = v;
            function p(t) {
              return f.decrypt(t, e, {
                iv: r,
                mode: c,
                padding: l
              }).toString(s.default.enc.Utf8);
            }
            t.decrypt = p;
            function g(t) {
              return s.default.SHA256(t).toString(s.default.enc.Base64);
            }
            t.sha256 = g;
            function y(t) {
              return s.default.MD5(t).toString(s.default.enc.Hex);
            }
            t.md5Hex = y;
            function m() {
              return i ? i : "";
            }
            t.getEncryptedSecretKey = m;
            function w() {
              return o ? o : "";
            }
            t.getEncryptedIV = w;
          })(o || (o = {}));
          e["default"] = o;
        },
        529: function _(t, e) {
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var r = /*#__PURE__*/function () {
            "use strict";

            function r() {
              _classCallCheck(this, r);
            }
            _createClass(r, null, [{
              key: "info",
              value: function info() {
                for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
                  t[_key] = arguments[_key];
                }
                if (this.debugMode) console.info("[GtPush]", t);
              }
            }, {
              key: "warn",
              value: function warn() {
                for (var _len2 = arguments.length, t = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  t[_key2] = arguments[_key2];
                }
                console.warn("[GtPush]", t);
              }
            }, {
              key: "error",
              value: function error() {
                for (var _len3 = arguments.length, t = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                  t[_key3] = arguments[_key3];
                }
                console.error("[GtPush]", t);
              }
            }]);
            return r;
          }();
          r.debugMode = false;
          e["default"] = r;
        },
        3854: function _(t, e) {
          Object.defineProperty(e, "__esModule", {
            value: true
          });
          var r = /*#__PURE__*/function () {
            "use strict";

            function r() {
              _classCallCheck(this, r);
            }
            _createClass(r, null, [{
              key: "getStr",
              value: function getStr(t, e) {
                try {
                  if (!t || void 0 === t[e]) return "";
                  return t[e];
                } catch (t) {}
                return "";
              }
            }]);
            return r;
          }();
          e["default"] = r;
        },
        2620: function _(t, e, r) {
          r.r(e);
          r.d(e, {
            JSEncrypt: function JSEncrypt() {
              return wt;
            },
            default: function _default() {
              return St;
            }
          });
          var i = "0123456789abcdefghijklmnopqrstuvwxyz";
          function n(t) {
            return i.charAt(t);
          }
          function s(t, e) {
            return t & e;
          }
          function a(t, e) {
            return t | e;
          }
          function o(t, e) {
            return t ^ e;
          }
          function u(t, e) {
            return t & ~e;
          }
          function c(t) {
            if (0 == t) return -1;
            var e = 0;
            if (0 == (65535 & t)) {
              t >>= 16;
              e += 16;
            }
            if (0 == (255 & t)) {
              t >>= 8;
              e += 8;
            }
            if (0 == (15 & t)) {
              t >>= 4;
              e += 4;
            }
            if (0 == (3 & t)) {
              t >>= 2;
              e += 2;
            }
            if (0 == (1 & t)) ++e;
            return e;
          }
          function l(t) {
            var e = 0;
            while (0 != t) {
              t &= t - 1;
              ++e;
            }
            return e;
          }
          var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
          var h = "=";
          function d(t) {
            var e;
            var r;
            var i = "";
            for (e = 0; e + 3 <= t.length; e += 3) {
              r = parseInt(t.substring(e, e + 3), 16);
              i += f.charAt(r >> 6) + f.charAt(63 & r);
            }
            if (e + 1 == t.length) {
              r = parseInt(t.substring(e, e + 1), 16);
              i += f.charAt(r << 2);
            } else if (e + 2 == t.length) {
              r = parseInt(t.substring(e, e + 2), 16);
              i += f.charAt(r >> 2) + f.charAt((3 & r) << 4);
            }
            while ((3 & i.length) > 0) {
              i += h;
            }
            return i;
          }
          function v(t) {
            var e = "";
            var r;
            var i = 0;
            var s = 0;
            for (r = 0; r < t.length; ++r) {
              if (t.charAt(r) == h) break;
              var a = f.indexOf(t.charAt(r));
              if (a < 0) continue;
              if (0 == i) {
                e += n(a >> 2);
                s = 3 & a;
                i = 1;
              } else if (1 == i) {
                e += n(s << 2 | a >> 4);
                s = 15 & a;
                i = 2;
              } else if (2 == i) {
                e += n(s);
                e += n(a >> 2);
                s = 3 & a;
                i = 3;
              } else {
                e += n(s << 2 | a >> 4);
                e += n(15 & a);
                i = 0;
              }
            }
            if (1 == i) e += n(s << 2);
            return e;
          }
          var g;
          var y = {
            decode: function decode(t) {
              var e;
              if (void 0 === g) {
                var r = "0123456789ABCDEF";
                var i = " \f\n\r\t\xA0\u2028\u2029";
                g = {};
                for (e = 0; e < 16; ++e) {
                  g[r.charAt(e)] = e;
                }
                r = r.toLowerCase();
                for (e = 10; e < 16; ++e) {
                  g[r.charAt(e)] = e;
                }
                for (e = 0; e < i.length; ++e) {
                  g[i.charAt(e)] = -1;
                }
              }
              var n = [];
              var s = 0;
              var a = 0;
              for (e = 0; e < t.length; ++e) {
                var o = t.charAt(e);
                if ("=" == o) break;
                o = g[o];
                if (-1 == o) continue;
                if (void 0 === o) throw new Error("Illegal character at offset " + e);
                s |= o;
                if (++a >= 2) {
                  n[n.length] = s;
                  s = 0;
                  a = 0;
                } else s <<= 4;
              }
              if (a) throw new Error("Hex encoding incomplete: 4 bits missing");
              return n;
            }
          };
          var m;
          var w = {
            decode: function decode(t) {
              var e;
              if (void 0 === m) {
                var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                var i = "= \f\n\r\t\xA0\u2028\u2029";
                m = Object.create(null);
                for (e = 0; e < 64; ++e) {
                  m[r.charAt(e)] = e;
                }
                m["-"] = 62;
                m["_"] = 63;
                for (e = 0; e < i.length; ++e) {
                  m[i.charAt(e)] = -1;
                }
              }
              var n = [];
              var s = 0;
              var a = 0;
              for (e = 0; e < t.length; ++e) {
                var o = t.charAt(e);
                if ("=" == o) break;
                o = m[o];
                if (-1 == o) continue;
                if (void 0 === o) throw new Error("Illegal character at offset " + e);
                s |= o;
                if (++a >= 4) {
                  n[n.length] = s >> 16;
                  n[n.length] = s >> 8 & 255;
                  n[n.length] = 255 & s;
                  s = 0;
                  a = 0;
                } else s <<= 6;
              }
              switch (a) {
                case 1:
                  throw new Error("Base64 encoding incomplete: at least 2 bits missing");
                case 2:
                  n[n.length] = s >> 10;
                  break;
                case 3:
                  n[n.length] = s >> 16;
                  n[n.length] = s >> 8 & 255;
                  break;
              }
              return n;
            },
            re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
            unarmor: function unarmor(t) {
              var e = w.re.exec(t);
              if (e) if (e[1]) t = e[1];else if (e[2]) t = e[2];else throw new Error("RegExp out of sync");
              return w.decode(t);
            }
          };
          var S = 1e13;
          var _ = function () {
            function t(t) {
              this.buf = [+t || 0];
            }
            t.prototype.mulAdd = function (t, e) {
              var r = this.buf;
              var i = r.length;
              var n;
              var s;
              for (n = 0; n < i; ++n) {
                s = r[n] * t + e;
                if (s < S) e = 0;else {
                  e = 0 | s / S;
                  s -= e * S;
                }
                r[n] = s;
              }
              if (e > 0) r[n] = e;
            };
            t.prototype.sub = function (t) {
              var e = this.buf;
              var r = e.length;
              var i;
              var n;
              for (i = 0; i < r; ++i) {
                n = e[i] - t;
                if (n < 0) {
                  n += S;
                  t = 1;
                } else t = 0;
                e[i] = n;
              }
              while (0 === e[e.length - 1]) {
                e.pop();
              }
            };
            t.prototype.toString = function (t) {
              if (10 != (t || 10)) throw new Error("only base 10 is supported");
              var e = this.buf;
              var r = e[e.length - 1].toString();
              for (var i = e.length - 2; i >= 0; --i) {
                r += (S + e[i]).toString().substring(1);
              }
              return r;
            };
            t.prototype.valueOf = function () {
              var t = this.buf;
              var e = 0;
              for (var r = t.length - 1; r >= 0; --r) {
                e = e * S + t[r];
              }
              return e;
            };
            t.prototype.simplify = function () {
              var t = this.buf;
              return 1 == t.length ? t[0] : this;
            };
            return t;
          }();
          var b = "…";
          var E = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
          var D = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
          function M(t, e) {
            if (t.length > e) t = t.substring(0, e) + b;
            return t;
          }
          var T = function () {
            function t(e, r) {
              this.hexDigits = "0123456789ABCDEF";
              if (e instanceof t) {
                this.enc = e.enc;
                this.pos = e.pos;
              } else {
                this.enc = e;
                this.pos = r;
              }
            }
            t.prototype.get = function (t) {
              if (void 0 === t) t = this.pos++;
              if (t >= this.enc.length) throw new Error("Requesting byte offset " + t + " on a stream of length " + this.enc.length);
              return "string" === typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t];
            };
            t.prototype.hexByte = function (t) {
              return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t);
            };
            t.prototype.hexDump = function (t, e, r) {
              var i = "";
              for (var n = t; n < e; ++n) {
                i += this.hexByte(this.get(n));
                if (true !== r) switch (15 & n) {
                  case 7:
                    i += "  ";
                    break;
                  case 15:
                    i += "\n";
                    break;
                  default:
                    i += " ";
                }
              }
              return i;
            };
            t.prototype.isASCII = function (t, e) {
              for (var r = t; r < e; ++r) {
                var i = this.get(r);
                if (i < 32 || i > 176) return false;
              }
              return true;
            };
            t.prototype.parseStringISO = function (t, e) {
              var r = "";
              for (var i = t; i < e; ++i) {
                r += String.fromCharCode(this.get(i));
              }
              return r;
            };
            t.prototype.parseStringUTF = function (t, e) {
              var r = "";
              for (var i = t; i < e;) {
                var n = this.get(i++);
                if (n < 128) r += String.fromCharCode(n);else if (n > 191 && n < 224) r += String.fromCharCode((31 & n) << 6 | 63 & this.get(i++));else r += String.fromCharCode((15 & n) << 12 | (63 & this.get(i++)) << 6 | 63 & this.get(i++));
              }
              return r;
            };
            t.prototype.parseStringBMP = function (t, e) {
              var r = "";
              var i;
              var n;
              for (var s = t; s < e;) {
                i = this.get(s++);
                n = this.get(s++);
                r += String.fromCharCode(i << 8 | n);
              }
              return r;
            };
            t.prototype.parseTime = function (t, e, r) {
              var i = this.parseStringISO(t, e);
              var n = (r ? E : D).exec(i);
              if (!n) return "Unrecognized time: " + i;
              if (r) {
                n[1] = +n[1];
                n[1] += +n[1] < 70 ? 2e3 : 1900;
              }
              i = n[1] + "-" + n[2] + "-" + n[3] + " " + n[4];
              if (n[5]) {
                i += ":" + n[5];
                if (n[6]) {
                  i += ":" + n[6];
                  if (n[7]) i += "." + n[7];
                }
              }
              if (n[8]) {
                i += " UTC";
                if ("Z" != n[8]) {
                  i += n[8];
                  if (n[9]) i += ":" + n[9];
                }
              }
              return i;
            };
            t.prototype.parseInteger = function (t, e) {
              var r = this.get(t);
              var i = r > 127;
              var n = i ? 255 : 0;
              var s;
              var a = "";
              while (r == n && ++t < e) {
                r = this.get(t);
              }
              s = e - t;
              if (0 === s) return i ? -1 : 0;
              if (s > 4) {
                a = r;
                s <<= 3;
                while (0 == (128 & (+a ^ n))) {
                  a = +a << 1;
                  --s;
                }
                a = "(" + s + " bit)\n";
              }
              if (i) r -= 256;
              var o = new _(r);
              for (var u = t + 1; u < e; ++u) {
                o.mulAdd(256, this.get(u));
              }
              return a + o.toString();
            };
            t.prototype.parseBitString = function (t, e, r) {
              var i = this.get(t);
              var n = (e - t - 1 << 3) - i;
              var s = "(" + n + " bit)\n";
              var a = "";
              for (var o = t + 1; o < e; ++o) {
                var u = this.get(o);
                var c = o == e - 1 ? i : 0;
                for (var l = 7; l >= c; --l) {
                  a += u >> l & 1 ? "1" : "0";
                }
                if (a.length > r) return s + M(a, r);
              }
              return s + a;
            };
            t.prototype.parseOctetString = function (t, e, r) {
              if (this.isASCII(t, e)) return M(this.parseStringISO(t, e), r);
              var i = e - t;
              var n = "(" + i + " byte)\n";
              r /= 2;
              if (i > r) e = t + r;
              for (var s = t; s < e; ++s) {
                n += this.hexByte(this.get(s));
              }
              if (i > r) n += b;
              return n;
            };
            t.prototype.parseOID = function (t, e, r) {
              var i = "";
              var n = new _();
              var s = 0;
              for (var a = t; a < e; ++a) {
                var o = this.get(a);
                n.mulAdd(128, 127 & o);
                s += 7;
                if (!(128 & o)) {
                  if ("" === i) {
                    n = n.simplify();
                    if (n instanceof _) {
                      n.sub(80);
                      i = "2." + n.toString();
                    } else {
                      var u = n < 80 ? n < 40 ? 0 : 1 : 2;
                      i = u + "." + (n - 40 * u);
                    }
                  } else i += "." + n.toString();
                  if (i.length > r) return M(i, r);
                  n = new _();
                  s = 0;
                }
              }
              if (s > 0) i += ".incomplete";
              return i;
            };
            return t;
          }();
          var I = function () {
            function t(t, e, r, i, n) {
              if (!(i instanceof A)) throw new Error("Invalid tag value.");
              this.stream = t;
              this.header = e;
              this.length = r;
              this.tag = i;
              this.sub = n;
            }
            t.prototype.typeName = function () {
              switch (this.tag.tagClass) {
                case 0:
                  switch (this.tag.tagNumber) {
                    case 0:
                      return "EOC";
                    case 1:
                      return "BOOLEAN";
                    case 2:
                      return "INTEGER";
                    case 3:
                      return "BIT_STRING";
                    case 4:
                      return "OCTET_STRING";
                    case 5:
                      return "NULL";
                    case 6:
                      return "OBJECT_IDENTIFIER";
                    case 7:
                      return "ObjectDescriptor";
                    case 8:
                      return "EXTERNAL";
                    case 9:
                      return "REAL";
                    case 10:
                      return "ENUMERATED";
                    case 11:
                      return "EMBEDDED_PDV";
                    case 12:
                      return "UTF8String";
                    case 16:
                      return "SEQUENCE";
                    case 17:
                      return "SET";
                    case 18:
                      return "NumericString";
                    case 19:
                      return "PrintableString";
                    case 20:
                      return "TeletexString";
                    case 21:
                      return "VideotexString";
                    case 22:
                      return "IA5String";
                    case 23:
                      return "UTCTime";
                    case 24:
                      return "GeneralizedTime";
                    case 25:
                      return "GraphicString";
                    case 26:
                      return "VisibleString";
                    case 27:
                      return "GeneralString";
                    case 28:
                      return "UniversalString";
                    case 30:
                      return "BMPString";
                  }
                  return "Universal_" + this.tag.tagNumber.toString();
                case 1:
                  return "Application_" + this.tag.tagNumber.toString();
                case 2:
                  return "[" + this.tag.tagNumber.toString() + "]";
                case 3:
                  return "Private_" + this.tag.tagNumber.toString();
              }
            };
            t.prototype.content = function (t) {
              if (void 0 === this.tag) return null;
              if (void 0 === t) t = 1 / 0;
              var e = this.posContent();
              var r = Math.abs(this.length);
              if (!this.tag.isUniversal()) {
                if (null !== this.sub) return "(" + this.sub.length + " elem)";
                return this.stream.parseOctetString(e, e + r, t);
              }
              switch (this.tag.tagNumber) {
                case 1:
                  return 0 === this.stream.get(e) ? "false" : "true";
                case 2:
                  return this.stream.parseInteger(e, e + r);
                case 3:
                  return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e, e + r, t);
                case 4:
                  return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + r, t);
                case 6:
                  return this.stream.parseOID(e, e + r, t);
                case 16:
                case 17:
                  if (null !== this.sub) return "(" + this.sub.length + " elem)";else return "(no elem)";
                case 12:
                  return M(this.stream.parseStringUTF(e, e + r), t);
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 26:
                  return M(this.stream.parseStringISO(e, e + r), t);
                case 30:
                  return M(this.stream.parseStringBMP(e, e + r), t);
                case 23:
                case 24:
                  return this.stream.parseTime(e, e + r, 23 == this.tag.tagNumber);
              }
              return null;
            };
            t.prototype.toString = function () {
              return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]";
            };
            t.prototype.toPrettyString = function (t) {
              if (void 0 === t) t = "";
              var e = t + this.typeName() + " @" + this.stream.pos;
              if (this.length >= 0) e += "+";
              e += this.length;
              if (this.tag.tagConstructed) e += " (constructed)";else if (this.tag.isUniversal() && (3 == this.tag.tagNumber || 4 == this.tag.tagNumber) && null !== this.sub) e += " (encapsulates)";
              e += "\n";
              if (null !== this.sub) {
                t += "  ";
                for (var r = 0, i = this.sub.length; r < i; ++r) {
                  e += this.sub[r].toPrettyString(t);
                }
              }
              return e;
            };
            t.prototype.posStart = function () {
              return this.stream.pos;
            };
            t.prototype.posContent = function () {
              return this.stream.pos + this.header;
            };
            t.prototype.posEnd = function () {
              return this.stream.pos + this.header + Math.abs(this.length);
            };
            t.prototype.toHexString = function () {
              return this.stream.hexDump(this.posStart(), this.posEnd(), true);
            };
            t.decodeLength = function (t) {
              var e = t.get();
              var r = 127 & e;
              if (r == e) return r;
              if (r > 6) throw new Error("Length over 48 bits not supported at position " + (t.pos - 1));
              if (0 === r) return null;
              e = 0;
              for (var i = 0; i < r; ++i) {
                e = 256 * e + t.get();
              }
              return e;
            };
            t.prototype.getHexStringValue = function () {
              var t = this.toHexString();
              var e = 2 * this.header;
              var r = 2 * this.length;
              return t.substr(e, r);
            };
            t.decode = function (e) {
              var r;
              if (!(e instanceof T)) r = new T(e, 0);else r = e;
              var i = new T(r);
              var n = new A(r);
              var s = t.decodeLength(r);
              var a = r.pos;
              var o = a - i.pos;
              var u = null;
              var c = function c() {
                var e = [];
                if (null !== s) {
                  var i = a + s;
                  while (r.pos < i) {
                    e[e.length] = t.decode(r);
                  }
                  if (r.pos != i) throw new Error("Content size is not correct for container starting at offset " + a);
                } else try {
                  for (;;) {
                    var n = t.decode(r);
                    if (n.tag.isEOC()) break;
                    e[e.length] = n;
                  }
                  s = a - r.pos;
                } catch (t) {
                  throw new Error("Exception while decoding undefined length content: " + t);
                }
                return e;
              };
              if (n.tagConstructed) u = c();else if (n.isUniversal() && (3 == n.tagNumber || 4 == n.tagNumber)) try {
                if (3 == n.tagNumber) if (0 != r.get()) throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                u = c();
                for (var l = 0; l < u.length; ++l) {
                  if (u[l].tag.isEOC()) throw new Error("EOC is not supposed to be actual content.");
                }
              } catch (t) {
                u = null;
              }
              if (null === u) {
                if (null === s) throw new Error("We can't skip over an invalid tag with undefined length at offset " + a);
                r.pos = a + Math.abs(s);
              }
              return new t(i, o, s, n, u);
            };
            return t;
          }();
          var A = function () {
            function t(t) {
              var e = t.get();
              this.tagClass = e >> 6;
              this.tagConstructed = 0 !== (32 & e);
              this.tagNumber = 31 & e;
              if (31 == this.tagNumber) {
                var r = new _();
                do {
                  e = t.get();
                  r.mulAdd(128, 127 & e);
                } while (128 & e);
                this.tagNumber = r.simplify();
              }
            }
            t.prototype.isUniversal = function () {
              return 0 === this.tagClass;
            };
            t.prototype.isEOC = function () {
              return 0 === this.tagClass && 0 === this.tagNumber;
            };
            return t;
          }();
          var x;
          var R = 0xdeadbeefcafe;
          var B = 15715070 == (16777215 & R);
          var O = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
          var k = (1 << 26) / O[O.length - 1];
          var C = function () {
            function t(t, e, r) {
              if (null != t) if ("number" == typeof t) this.fromNumber(t, e, r);else if (null == e && "string" != typeof t) this.fromString(t, 256);else this.fromString(t, e);
            }
            t.prototype.toString = function (t) {
              if (this.s < 0) return "-" + this.negate().toString(t);
              var e;
              if (16 == t) e = 4;else if (8 == t) e = 3;else if (2 == t) e = 1;else if (32 == t) e = 5;else if (4 == t) e = 2;else return this.toRadix(t);
              var r = (1 << e) - 1;
              var i;
              var s = false;
              var a = "";
              var o = this.t;
              var u = this.DB - o * this.DB % e;
              if (o-- > 0) {
                if (u < this.DB && (i = this[o] >> u) > 0) {
                  s = true;
                  a = n(i);
                }
                while (o >= 0) {
                  if (u < e) {
                    i = (this[o] & (1 << u) - 1) << e - u;
                    i |= this[--o] >> (u += this.DB - e);
                  } else {
                    i = this[o] >> (u -= e) & r;
                    if (u <= 0) {
                      u += this.DB;
                      --o;
                    }
                  }
                  if (i > 0) s = true;
                  if (s) a += n(i);
                }
              }
              return s ? a : "0";
            };
            t.prototype.negate = function () {
              var e = H();
              t.ZERO.subTo(this, e);
              return e;
            };
            t.prototype.abs = function () {
              return this.s < 0 ? this.negate() : this;
            };
            t.prototype.compareTo = function (t) {
              var e = this.s - t.s;
              if (0 != e) return e;
              var r = this.t;
              e = r - t.t;
              if (0 != e) return this.s < 0 ? -e : e;
              while (--r >= 0) {
                if (0 != (e = this[r] - t[r])) return e;
              }
              return 0;
            };
            t.prototype.bitLength = function () {
              if (this.t <= 0) return 0;
              return this.DB * (this.t - 1) + W(this[this.t - 1] ^ this.s & this.DM);
            };
            t.prototype.mod = function (e) {
              var r = H();
              this.abs().divRemTo(e, null, r);
              if (this.s < 0 && r.compareTo(t.ZERO) > 0) e.subTo(r, r);
              return r;
            };
            t.prototype.modPowInt = function (t, e) {
              var r;
              if (t < 256 || e.isEven()) r = new P(e);else r = new V(e);
              return this.exp(t, r);
            };
            t.prototype.clone = function () {
              var t = H();
              this.copyTo(t);
              return t;
            };
            t.prototype.intValue = function () {
              if (this.s < 0) {
                if (1 == this.t) return this[0] - this.DV;else if (0 == this.t) return -1;
              } else if (1 == this.t) return this[0];else if (0 == this.t) return 0;
              return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
            };
            t.prototype.byteValue = function () {
              return 0 == this.t ? this.s : this[0] << 24 >> 24;
            };
            t.prototype.shortValue = function () {
              return 0 == this.t ? this.s : this[0] << 16 >> 16;
            };
            t.prototype.signum = function () {
              if (this.s < 0) return -1;else if (this.t <= 0 || 1 == this.t && this[0] <= 0) return 0;else return 1;
            };
            t.prototype.toByteArray = function () {
              var t = this.t;
              var e = [];
              e[0] = this.s;
              var r = this.DB - t * this.DB % 8;
              var i;
              var n = 0;
              if (t-- > 0) {
                if (r < this.DB && (i = this[t] >> r) != (this.s & this.DM) >> r) e[n++] = i | this.s << this.DB - r;
                while (t >= 0) {
                  if (r < 8) {
                    i = (this[t] & (1 << r) - 1) << 8 - r;
                    i |= this[--t] >> (r += this.DB - 8);
                  } else {
                    i = this[t] >> (r -= 8) & 255;
                    if (r <= 0) {
                      r += this.DB;
                      --t;
                    }
                  }
                  if (0 != (128 & i)) i |= -256;
                  if (0 == n && (128 & this.s) != (128 & i)) ++n;
                  if (n > 0 || i != this.s) e[n++] = i;
                }
              }
              return e;
            };
            t.prototype.equals = function (t) {
              return 0 == this.compareTo(t);
            };
            t.prototype.min = function (t) {
              return this.compareTo(t) < 0 ? this : t;
            };
            t.prototype.max = function (t) {
              return this.compareTo(t) > 0 ? this : t;
            };
            t.prototype.and = function (t) {
              var e = H();
              this.bitwiseTo(t, s, e);
              return e;
            };
            t.prototype.or = function (t) {
              var e = H();
              this.bitwiseTo(t, a, e);
              return e;
            };
            t.prototype.xor = function (t) {
              var e = H();
              this.bitwiseTo(t, o, e);
              return e;
            };
            t.prototype.andNot = function (t) {
              var e = H();
              this.bitwiseTo(t, u, e);
              return e;
            };
            t.prototype.not = function () {
              var t = H();
              for (var e = 0; e < this.t; ++e) {
                t[e] = this.DM & ~this[e];
              }
              t.t = this.t;
              t.s = ~this.s;
              return t;
            };
            t.prototype.shiftLeft = function (t) {
              var e = H();
              if (t < 0) this.rShiftTo(-t, e);else this.lShiftTo(t, e);
              return e;
            };
            t.prototype.shiftRight = function (t) {
              var e = H();
              if (t < 0) this.lShiftTo(-t, e);else this.rShiftTo(t, e);
              return e;
            };
            t.prototype.getLowestSetBit = function () {
              for (var t = 0; t < this.t; ++t) {
                if (0 != this[t]) return t * this.DB + c(this[t]);
              }
              if (this.s < 0) return this.t * this.DB;
              return -1;
            };
            t.prototype.bitCount = function () {
              var t = 0;
              var e = this.s & this.DM;
              for (var r = 0; r < this.t; ++r) {
                t += l(this[r] ^ e);
              }
              return t;
            };
            t.prototype.testBit = function (t) {
              var e = Math.floor(t / this.DB);
              if (e >= this.t) return 0 != this.s;
              return 0 != (this[e] & 1 << t % this.DB);
            };
            t.prototype.setBit = function (t) {
              return this.changeBit(t, a);
            };
            t.prototype.clearBit = function (t) {
              return this.changeBit(t, u);
            };
            t.prototype.flipBit = function (t) {
              return this.changeBit(t, o);
            };
            t.prototype.add = function (t) {
              var e = H();
              this.addTo(t, e);
              return e;
            };
            t.prototype.subtract = function (t) {
              var e = H();
              this.subTo(t, e);
              return e;
            };
            t.prototype.multiply = function (t) {
              var e = H();
              this.multiplyTo(t, e);
              return e;
            };
            t.prototype.divide = function (t) {
              var e = H();
              this.divRemTo(t, e, null);
              return e;
            };
            t.prototype.remainder = function (t) {
              var e = H();
              this.divRemTo(t, null, e);
              return e;
            };
            t.prototype.divideAndRemainder = function (t) {
              var e = H();
              var r = H();
              this.divRemTo(t, e, r);
              return [e, r];
            };
            t.prototype.modPow = function (t, e) {
              var r = t.bitLength();
              var i;
              var n = Y(1);
              var s;
              if (r <= 0) return n;else if (r < 18) i = 1;else if (r < 48) i = 3;else if (r < 144) i = 4;else if (r < 768) i = 5;else i = 6;
              if (r < 8) s = new P(e);else if (e.isEven()) s = new L(e);else s = new V(e);
              var a = [];
              var o = 3;
              var u = i - 1;
              var c = (1 << i) - 1;
              a[1] = s.convert(this);
              if (i > 1) {
                var l = H();
                s.sqrTo(a[1], l);
                while (o <= c) {
                  a[o] = H();
                  s.mulTo(l, a[o - 2], a[o]);
                  o += 2;
                }
              }
              var f = t.t - 1;
              var h;
              var d = true;
              var v = H();
              var p;
              r = W(t[f]) - 1;
              while (f >= 0) {
                if (r >= u) h = t[f] >> r - u & c;else {
                  h = (t[f] & (1 << r + 1) - 1) << u - r;
                  if (f > 0) h |= t[f - 1] >> this.DB + r - u;
                }
                o = i;
                while (0 == (1 & h)) {
                  h >>= 1;
                  --o;
                }
                if ((r -= o) < 0) {
                  r += this.DB;
                  --f;
                }
                if (d) {
                  a[h].copyTo(n);
                  d = false;
                } else {
                  while (o > 1) {
                    s.sqrTo(n, v);
                    s.sqrTo(v, n);
                    o -= 2;
                  }
                  if (o > 0) s.sqrTo(n, v);else {
                    p = n;
                    n = v;
                    v = p;
                  }
                  s.mulTo(v, a[h], n);
                }
                while (f >= 0 && 0 == (t[f] & 1 << r)) {
                  s.sqrTo(n, v);
                  p = n;
                  n = v;
                  v = p;
                  if (--r < 0) {
                    r = this.DB - 1;
                    --f;
                  }
                }
              }
              return s.revert(n);
            };
            t.prototype.modInverse = function (e) {
              var r = e.isEven();
              if (this.isEven() && r || 0 == e.signum()) return t.ZERO;
              var i = e.clone();
              var n = this.clone();
              var s = Y(1);
              var a = Y(0);
              var o = Y(0);
              var u = Y(1);
              while (0 != i.signum()) {
                while (i.isEven()) {
                  i.rShiftTo(1, i);
                  if (r) {
                    if (!s.isEven() || !a.isEven()) {
                      s.addTo(this, s);
                      a.subTo(e, a);
                    }
                    s.rShiftTo(1, s);
                  } else if (!a.isEven()) a.subTo(e, a);
                  a.rShiftTo(1, a);
                }
                while (n.isEven()) {
                  n.rShiftTo(1, n);
                  if (r) {
                    if (!o.isEven() || !u.isEven()) {
                      o.addTo(this, o);
                      u.subTo(e, u);
                    }
                    o.rShiftTo(1, o);
                  } else if (!u.isEven()) u.subTo(e, u);
                  u.rShiftTo(1, u);
                }
                if (i.compareTo(n) >= 0) {
                  i.subTo(n, i);
                  if (r) s.subTo(o, s);
                  a.subTo(u, a);
                } else {
                  n.subTo(i, n);
                  if (r) o.subTo(s, o);
                  u.subTo(a, u);
                }
              }
              if (0 != n.compareTo(t.ONE)) return t.ZERO;
              if (u.compareTo(e) >= 0) return u.subtract(e);
              if (u.signum() < 0) u.addTo(e, u);else return u;
              if (u.signum() < 0) return u.add(e);else return u;
            };
            t.prototype.pow = function (t) {
              return this.exp(t, new N());
            };
            t.prototype.gcd = function (t) {
              var e = this.s < 0 ? this.negate() : this.clone();
              var r = t.s < 0 ? t.negate() : t.clone();
              if (e.compareTo(r) < 0) {
                var i = e;
                e = r;
                r = i;
              }
              var n = e.getLowestSetBit();
              var s = r.getLowestSetBit();
              if (s < 0) return e;
              if (n < s) s = n;
              if (s > 0) {
                e.rShiftTo(s, e);
                r.rShiftTo(s, r);
              }
              while (e.signum() > 0) {
                if ((n = e.getLowestSetBit()) > 0) e.rShiftTo(n, e);
                if ((n = r.getLowestSetBit()) > 0) r.rShiftTo(n, r);
                if (e.compareTo(r) >= 0) {
                  e.subTo(r, e);
                  e.rShiftTo(1, e);
                } else {
                  r.subTo(e, r);
                  r.rShiftTo(1, r);
                }
              }
              if (s > 0) r.lShiftTo(s, r);
              return r;
            };
            t.prototype.isProbablePrime = function (t) {
              var e;
              var r = this.abs();
              if (1 == r.t && r[0] <= O[O.length - 1]) {
                for (e = 0; e < O.length; ++e) {
                  if (r[0] == O[e]) return true;
                }
                return false;
              }
              if (r.isEven()) return false;
              e = 1;
              while (e < O.length) {
                var i = O[e];
                var n = e + 1;
                while (n < O.length && i < k) {
                  i *= O[n++];
                }
                i = r.modInt(i);
                while (e < n) {
                  if (i % O[e++] == 0) return false;
                }
              }
              return r.millerRabin(t);
            };
            t.prototype.copyTo = function (t) {
              for (var e = this.t - 1; e >= 0; --e) {
                t[e] = this[e];
              }
              t.t = this.t;
              t.s = this.s;
            };
            t.prototype.fromInt = function (t) {
              this.t = 1;
              this.s = t < 0 ? -1 : 0;
              if (t > 0) this[0] = t;else if (t < -1) this[0] = t + this.DV;else this.t = 0;
            };
            t.prototype.fromString = function (e, r) {
              var i;
              if (16 == r) i = 4;else if (8 == r) i = 3;else if (256 == r) i = 8;else if (2 == r) i = 1;else if (32 == r) i = 5;else if (4 == r) i = 2;else {
                this.fromRadix(e, r);
                return;
              }
              this.t = 0;
              this.s = 0;
              var n = e.length;
              var s = false;
              var a = 0;
              while (--n >= 0) {
                var o = 8 == i ? 255 & +e[n] : G(e, n);
                if (o < 0) {
                  if ("-" == e.charAt(n)) s = true;
                  continue;
                }
                s = false;
                if (0 == a) this[this.t++] = o;else if (a + i > this.DB) {
                  this[this.t - 1] |= (o & (1 << this.DB - a) - 1) << a;
                  this[this.t++] = o >> this.DB - a;
                } else this[this.t - 1] |= o << a;
                a += i;
                if (a >= this.DB) a -= this.DB;
              }
              if (8 == i && 0 != (128 & +e[0])) {
                this.s = -1;
                if (a > 0) this[this.t - 1] |= (1 << this.DB - a) - 1 << a;
              }
              this.clamp();
              if (s) t.ZERO.subTo(this, this);
            };
            t.prototype.clamp = function () {
              var t = this.s & this.DM;
              while (this.t > 0 && this[this.t - 1] == t) {
                --this.t;
              }
            };
            t.prototype.dlShiftTo = function (t, e) {
              var r;
              for (r = this.t - 1; r >= 0; --r) {
                e[r + t] = this[r];
              }
              for (r = t - 1; r >= 0; --r) {
                e[r] = 0;
              }
              e.t = this.t + t;
              e.s = this.s;
            };
            t.prototype.drShiftTo = function (t, e) {
              for (var r = t; r < this.t; ++r) {
                e[r - t] = this[r];
              }
              e.t = Math.max(this.t - t, 0);
              e.s = this.s;
            };
            t.prototype.lShiftTo = function (t, e) {
              var r = t % this.DB;
              var i = this.DB - r;
              var n = (1 << i) - 1;
              var s = Math.floor(t / this.DB);
              var a = this.s << r & this.DM;
              for (var o = this.t - 1; o >= 0; --o) {
                e[o + s + 1] = this[o] >> i | a;
                a = (this[o] & n) << r;
              }
              for (var o = s - 1; o >= 0; --o) {
                e[o] = 0;
              }
              e[s] = a;
              e.t = this.t + s + 1;
              e.s = this.s;
              e.clamp();
            };
            t.prototype.rShiftTo = function (t, e) {
              e.s = this.s;
              var r = Math.floor(t / this.DB);
              if (r >= this.t) {
                e.t = 0;
                return;
              }
              var i = t % this.DB;
              var n = this.DB - i;
              var s = (1 << i) - 1;
              e[0] = this[r] >> i;
              for (var a = r + 1; a < this.t; ++a) {
                e[a - r - 1] |= (this[a] & s) << n;
                e[a - r] = this[a] >> i;
              }
              if (i > 0) e[this.t - r - 1] |= (this.s & s) << n;
              e.t = this.t - r;
              e.clamp();
            };
            t.prototype.subTo = function (t, e) {
              var r = 0;
              var i = 0;
              var n = Math.min(t.t, this.t);
              while (r < n) {
                i += this[r] - t[r];
                e[r++] = i & this.DM;
                i >>= this.DB;
              }
              if (t.t < this.t) {
                i -= t.s;
                while (r < this.t) {
                  i += this[r];
                  e[r++] = i & this.DM;
                  i >>= this.DB;
                }
                i += this.s;
              } else {
                i += this.s;
                while (r < t.t) {
                  i -= t[r];
                  e[r++] = i & this.DM;
                  i >>= this.DB;
                }
                i -= t.s;
              }
              e.s = i < 0 ? -1 : 0;
              if (i < -1) e[r++] = this.DV + i;else if (i > 0) e[r++] = i;
              e.t = r;
              e.clamp();
            };
            t.prototype.multiplyTo = function (e, r) {
              var i = this.abs();
              var n = e.abs();
              var s = i.t;
              r.t = s + n.t;
              while (--s >= 0) {
                r[s] = 0;
              }
              for (s = 0; s < n.t; ++s) {
                r[s + i.t] = i.am(0, n[s], r, s, 0, i.t);
              }
              r.s = 0;
              r.clamp();
              if (this.s != e.s) t.ZERO.subTo(r, r);
            };
            t.prototype.squareTo = function (t) {
              var e = this.abs();
              var r = t.t = 2 * e.t;
              while (--r >= 0) {
                t[r] = 0;
              }
              for (r = 0; r < e.t - 1; ++r) {
                var i = e.am(r, e[r], t, 2 * r, 0, 1);
                if ((t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, i, e.t - r - 1)) >= e.DV) {
                  t[r + e.t] -= e.DV;
                  t[r + e.t + 1] = 1;
                }
              }
              if (t.t > 0) t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1);
              t.s = 0;
              t.clamp();
            };
            t.prototype.divRemTo = function (e, r, i) {
              var n = e.abs();
              if (n.t <= 0) return;
              var s = this.abs();
              if (s.t < n.t) {
                if (null != r) r.fromInt(0);
                if (null != i) this.copyTo(i);
                return;
              }
              if (null == i) i = H();
              var a = H();
              var o = this.s;
              var u = e.s;
              var c = this.DB - W(n[n.t - 1]);
              if (c > 0) {
                n.lShiftTo(c, a);
                s.lShiftTo(c, i);
              } else {
                n.copyTo(a);
                s.copyTo(i);
              }
              var l = a.t;
              var f = a[l - 1];
              if (0 == f) return;
              var h = f * (1 << this.F1) + (l > 1 ? a[l - 2] >> this.F2 : 0);
              var d = this.FV / h;
              var v = (1 << this.F1) / h;
              var p = 1 << this.F2;
              var g = i.t;
              var y = g - l;
              var m = null == r ? H() : r;
              a.dlShiftTo(y, m);
              if (i.compareTo(m) >= 0) {
                i[i.t++] = 1;
                i.subTo(m, i);
              }
              t.ONE.dlShiftTo(l, m);
              m.subTo(a, a);
              while (a.t < l) {
                a[a.t++] = 0;
              }
              while (--y >= 0) {
                var w = i[--g] == f ? this.DM : Math.floor(i[g] * d + (i[g - 1] + p) * v);
                if ((i[g] += a.am(0, w, i, y, 0, l)) < w) {
                  a.dlShiftTo(y, m);
                  i.subTo(m, i);
                  while (i[g] < --w) {
                    i.subTo(m, i);
                  }
                }
              }
              if (null != r) {
                i.drShiftTo(l, r);
                if (o != u) t.ZERO.subTo(r, r);
              }
              i.t = l;
              i.clamp();
              if (c > 0) i.rShiftTo(c, i);
              if (o < 0) t.ZERO.subTo(i, i);
            };
            t.prototype.invDigit = function () {
              if (this.t < 1) return 0;
              var t = this[0];
              if (0 == (1 & t)) return 0;
              var e = 3 & t;
              e = e * (2 - (15 & t) * e) & 15;
              e = e * (2 - (255 & t) * e) & 255;
              e = e * (2 - ((65535 & t) * e & 65535)) & 65535;
              e = e * (2 - t * e % this.DV) % this.DV;
              return e > 0 ? this.DV - e : -e;
            };
            t.prototype.isEven = function () {
              return 0 == (this.t > 0 ? 1 & this[0] : this.s);
            };
            t.prototype.exp = function (e, r) {
              if (e > 4294967295 || e < 1) return t.ONE;
              var i = H();
              var n = H();
              var s = r.convert(this);
              var a = W(e) - 1;
              s.copyTo(i);
              while (--a >= 0) {
                r.sqrTo(i, n);
                if ((e & 1 << a) > 0) r.mulTo(n, s, i);else {
                  var o = i;
                  i = n;
                  n = o;
                }
              }
              return r.revert(i);
            };
            t.prototype.chunkSize = function (t) {
              return Math.floor(Math.LN2 * this.DB / Math.log(t));
            };
            t.prototype.toRadix = function (t) {
              if (null == t) t = 10;
              if (0 == this.signum() || t < 2 || t > 36) return "0";
              var e = this.chunkSize(t);
              var r = Math.pow(t, e);
              var i = Y(r);
              var n = H();
              var s = H();
              var a = "";
              this.divRemTo(i, n, s);
              while (n.signum() > 0) {
                a = (r + s.intValue()).toString(t).substr(1) + a;
                n.divRemTo(i, n, s);
              }
              return s.intValue().toString(t) + a;
            };
            t.prototype.fromRadix = function (e, r) {
              this.fromInt(0);
              if (null == r) r = 10;
              var i = this.chunkSize(r);
              var n = Math.pow(r, i);
              var s = false;
              var a = 0;
              var o = 0;
              for (var u = 0; u < e.length; ++u) {
                var c = G(e, u);
                if (c < 0) {
                  if ("-" == e.charAt(u) && 0 == this.signum()) s = true;
                  continue;
                }
                o = r * o + c;
                if (++a >= i) {
                  this.dMultiply(n);
                  this.dAddOffset(o, 0);
                  a = 0;
                  o = 0;
                }
              }
              if (a > 0) {
                this.dMultiply(Math.pow(r, a));
                this.dAddOffset(o, 0);
              }
              if (s) t.ZERO.subTo(this, this);
            };
            t.prototype.fromNumber = function (e, r, i) {
              if ("number" == typeof r) {
                if (e < 2) this.fromInt(1);else {
                  this.fromNumber(e, i);
                  if (!this.testBit(e - 1)) this.bitwiseTo(t.ONE.shiftLeft(e - 1), a, this);
                  if (this.isEven()) this.dAddOffset(1, 0);
                  while (!this.isProbablePrime(r)) {
                    this.dAddOffset(2, 0);
                    if (this.bitLength() > e) this.subTo(t.ONE.shiftLeft(e - 1), this);
                  }
                }
              } else {
                var n = [];
                var s = 7 & e;
                n.length = (e >> 3) + 1;
                r.nextBytes(n);
                if (s > 0) n[0] &= (1 << s) - 1;else n[0] = 0;
                this.fromString(n, 256);
              }
            };
            t.prototype.bitwiseTo = function (t, e, r) {
              var i;
              var n;
              var s = Math.min(t.t, this.t);
              for (i = 0; i < s; ++i) {
                r[i] = e(this[i], t[i]);
              }
              if (t.t < this.t) {
                n = t.s & this.DM;
                for (i = s; i < this.t; ++i) {
                  r[i] = e(this[i], n);
                }
                r.t = this.t;
              } else {
                n = this.s & this.DM;
                for (i = s; i < t.t; ++i) {
                  r[i] = e(n, t[i]);
                }
                r.t = t.t;
              }
              r.s = e(this.s, t.s);
              r.clamp();
            };
            t.prototype.changeBit = function (e, r) {
              var i = t.ONE.shiftLeft(e);
              this.bitwiseTo(i, r, i);
              return i;
            };
            t.prototype.addTo = function (t, e) {
              var r = 0;
              var i = 0;
              var n = Math.min(t.t, this.t);
              while (r < n) {
                i += this[r] + t[r];
                e[r++] = i & this.DM;
                i >>= this.DB;
              }
              if (t.t < this.t) {
                i += t.s;
                while (r < this.t) {
                  i += this[r];
                  e[r++] = i & this.DM;
                  i >>= this.DB;
                }
                i += this.s;
              } else {
                i += this.s;
                while (r < t.t) {
                  i += t[r];
                  e[r++] = i & this.DM;
                  i >>= this.DB;
                }
                i += t.s;
              }
              e.s = i < 0 ? -1 : 0;
              if (i > 0) e[r++] = i;else if (i < -1) e[r++] = this.DV + i;
              e.t = r;
              e.clamp();
            };
            t.prototype.dMultiply = function (t) {
              this[this.t] = this.am(0, t - 1, this, 0, 0, this.t);
              ++this.t;
              this.clamp();
            };
            t.prototype.dAddOffset = function (t, e) {
              if (0 == t) return;
              while (this.t <= e) {
                this[this.t++] = 0;
              }
              this[e] += t;
              while (this[e] >= this.DV) {
                this[e] -= this.DV;
                if (++e >= this.t) this[this.t++] = 0;
                ++this[e];
              }
            };
            t.prototype.multiplyLowerTo = function (t, e, r) {
              var i = Math.min(this.t + t.t, e);
              r.s = 0;
              r.t = i;
              while (i > 0) {
                r[--i] = 0;
              }
              for (var n = r.t - this.t; i < n; ++i) {
                r[i + this.t] = this.am(0, t[i], r, i, 0, this.t);
              }
              for (var n = Math.min(t.t, e); i < n; ++i) {
                this.am(0, t[i], r, i, 0, e - i);
              }
              r.clamp();
            };
            t.prototype.multiplyUpperTo = function (t, e, r) {
              --e;
              var i = r.t = this.t + t.t - e;
              r.s = 0;
              while (--i >= 0) {
                r[i] = 0;
              }
              for (i = Math.max(e - this.t, 0); i < t.t; ++i) {
                r[this.t + i - e] = this.am(e - i, t[i], r, 0, 0, this.t + i - e);
              }
              r.clamp();
              r.drShiftTo(1, r);
            };
            t.prototype.modInt = function (t) {
              if (t <= 0) return 0;
              var e = this.DV % t;
              var r = this.s < 0 ? t - 1 : 0;
              if (this.t > 0) if (0 == e) r = this[0] % t;else for (var i = this.t - 1; i >= 0; --i) {
                r = (e * r + this[i]) % t;
              }
              return r;
            };
            t.prototype.millerRabin = function (e) {
              var r = this.subtract(t.ONE);
              var i = r.getLowestSetBit();
              if (i <= 0) return false;
              var n = r.shiftRight(i);
              e = e + 1 >> 1;
              if (e > O.length) e = O.length;
              var s = H();
              for (var a = 0; a < e; ++a) {
                s.fromInt(O[Math.floor(Math.random() * O.length)]);
                var o = s.modPow(n, this);
                if (0 != o.compareTo(t.ONE) && 0 != o.compareTo(r)) {
                  var u = 1;
                  while (u++ < i && 0 != o.compareTo(r)) {
                    o = o.modPowInt(2, this);
                    if (0 == o.compareTo(t.ONE)) return false;
                  }
                  if (0 != o.compareTo(r)) return false;
                }
              }
              return true;
            };
            t.prototype.square = function () {
              var t = H();
              this.squareTo(t);
              return t;
            };
            t.prototype.gcda = function (t, e) {
              var r = this.s < 0 ? this.negate() : this.clone();
              var i = t.s < 0 ? t.negate() : t.clone();
              if (r.compareTo(i) < 0) {
                var n = r;
                r = i;
                i = n;
              }
              var s = r.getLowestSetBit();
              var a = i.getLowestSetBit();
              if (a < 0) {
                e(r);
                return;
              }
              if (s < a) a = s;
              if (a > 0) {
                r.rShiftTo(a, r);
                i.rShiftTo(a, i);
              }
              var o = function o() {
                if ((s = r.getLowestSetBit()) > 0) r.rShiftTo(s, r);
                if ((s = i.getLowestSetBit()) > 0) i.rShiftTo(s, i);
                if (r.compareTo(i) >= 0) {
                  r.subTo(i, r);
                  r.rShiftTo(1, r);
                } else {
                  i.subTo(r, i);
                  i.rShiftTo(1, i);
                }
                if (!(r.signum() > 0)) {
                  if (a > 0) i.lShiftTo(a, i);
                  setTimeout(function () {
                    e(i);
                  }, 0);
                } else setTimeout(o, 0);
              };
              setTimeout(o, 10);
            };
            t.prototype.fromNumberAsync = function (e, r, i, n) {
              if ("number" == typeof r) {
                if (e < 2) this.fromInt(1);else {
                  this.fromNumber(e, i);
                  if (!this.testBit(e - 1)) this.bitwiseTo(t.ONE.shiftLeft(e - 1), a, this);
                  if (this.isEven()) this.dAddOffset(1, 0);
                  var s = this;
                  var o = function o() {
                    s.dAddOffset(2, 0);
                    if (s.bitLength() > e) s.subTo(t.ONE.shiftLeft(e - 1), s);
                    if (s.isProbablePrime(r)) setTimeout(function () {
                      n();
                    }, 0);else setTimeout(o, 0);
                  };
                  setTimeout(o, 0);
                }
              } else {
                var u = [];
                var c = 7 & e;
                u.length = (e >> 3) + 1;
                r.nextBytes(u);
                if (c > 0) u[0] &= (1 << c) - 1;else u[0] = 0;
                this.fromString(u, 256);
              }
            };
            return t;
          }();
          var N = function () {
            function t() {}
            t.prototype.convert = function (t) {
              return t;
            };
            t.prototype.revert = function (t) {
              return t;
            };
            t.prototype.mulTo = function (t, e, r) {
              t.multiplyTo(e, r);
            };
            t.prototype.sqrTo = function (t, e) {
              t.squareTo(e);
            };
            return t;
          }();
          var P = function () {
            function t(t) {
              this.m = t;
            }
            t.prototype.convert = function (t) {
              if (t.s < 0 || t.compareTo(this.m) >= 0) return t.mod(this.m);else return t;
            };
            t.prototype.revert = function (t) {
              return t;
            };
            t.prototype.reduce = function (t) {
              t.divRemTo(this.m, null, t);
            };
            t.prototype.mulTo = function (t, e, r) {
              t.multiplyTo(e, r);
              this.reduce(r);
            };
            t.prototype.sqrTo = function (t, e) {
              t.squareTo(e);
              this.reduce(e);
            };
            return t;
          }();
          var V = function () {
            function t(t) {
              this.m = t;
              this.mp = t.invDigit();
              this.mpl = 32767 & this.mp;
              this.mph = this.mp >> 15;
              this.um = (1 << t.DB - 15) - 1;
              this.mt2 = 2 * t.t;
            }
            t.prototype.convert = function (t) {
              var e = H();
              t.abs().dlShiftTo(this.m.t, e);
              e.divRemTo(this.m, null, e);
              if (t.s < 0 && e.compareTo(C.ZERO) > 0) this.m.subTo(e, e);
              return e;
            };
            t.prototype.revert = function (t) {
              var e = H();
              t.copyTo(e);
              this.reduce(e);
              return e;
            };
            t.prototype.reduce = function (t) {
              while (t.t <= this.mt2) {
                t[t.t++] = 0;
              }
              for (var e = 0; e < this.m.t; ++e) {
                var r = 32767 & t[e];
                var i = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                r = e + this.m.t;
                t[r] += this.m.am(0, i, t, e, 0, this.m.t);
                while (t[r] >= t.DV) {
                  t[r] -= t.DV;
                  t[++r]++;
                }
              }
              t.clamp();
              t.drShiftTo(this.m.t, t);
              if (t.compareTo(this.m) >= 0) t.subTo(this.m, t);
            };
            t.prototype.mulTo = function (t, e, r) {
              t.multiplyTo(e, r);
              this.reduce(r);
            };
            t.prototype.sqrTo = function (t, e) {
              t.squareTo(e);
              this.reduce(e);
            };
            return t;
          }();
          var L = function () {
            function t(t) {
              this.m = t;
              this.r2 = H();
              this.q3 = H();
              C.ONE.dlShiftTo(2 * t.t, this.r2);
              this.mu = this.r2.divide(t);
            }
            t.prototype.convert = function (t) {
              if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);else if (t.compareTo(this.m) < 0) return t;else {
                var e = H();
                t.copyTo(e);
                this.reduce(e);
                return e;
              }
            };
            t.prototype.revert = function (t) {
              return t;
            };
            t.prototype.reduce = function (t) {
              t.drShiftTo(this.m.t - 1, this.r2);
              if (t.t > this.m.t + 1) {
                t.t = this.m.t + 1;
                t.clamp();
              }
              this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
              this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
              while (t.compareTo(this.r2) < 0) {
                t.dAddOffset(1, this.m.t + 1);
              }
              t.subTo(this.r2, t);
              while (t.compareTo(this.m) >= 0) {
                t.subTo(this.m, t);
              }
            };
            t.prototype.mulTo = function (t, e, r) {
              t.multiplyTo(e, r);
              this.reduce(r);
            };
            t.prototype.sqrTo = function (t, e) {
              t.squareTo(e);
              this.reduce(e);
            };
            return t;
          }();
          function H() {
            return new C(null);
          }
          function U(t, e) {
            return new C(t, e);
          }
          var K = "undefined" !== typeof navigator;
          if (K && B && "Microsoft Internet Explorer" == navigator.appName) {
            C.prototype.am = function t(e, r, i, n, s, a) {
              var o = 32767 & r;
              var u = r >> 15;
              while (--a >= 0) {
                var c = 32767 & this[e];
                var l = this[e++] >> 15;
                var f = u * c + l * o;
                c = o * c + ((32767 & f) << 15) + i[n] + (1073741823 & s);
                s = (c >>> 30) + (f >>> 15) + u * l + (s >>> 30);
                i[n++] = 1073741823 & c;
              }
              return s;
            };
            x = 30;
          } else if (K && B && "Netscape" != navigator.appName) {
            C.prototype.am = function t(e, r, i, n, s, a) {
              while (--a >= 0) {
                var o = r * this[e++] + i[n] + s;
                s = Math.floor(o / 67108864);
                i[n++] = 67108863 & o;
              }
              return s;
            };
            x = 26;
          } else {
            C.prototype.am = function t(e, r, i, n, s, a) {
              var o = 16383 & r;
              var u = r >> 14;
              while (--a >= 0) {
                var c = 16383 & this[e];
                var l = this[e++] >> 14;
                var f = u * c + l * o;
                c = o * c + ((16383 & f) << 14) + i[n] + s;
                s = (c >> 28) + (f >> 14) + u * l;
                i[n++] = 268435455 & c;
              }
              return s;
            };
            x = 28;
          }
          C.prototype.DB = x;
          C.prototype.DM = (1 << x) - 1;
          C.prototype.DV = 1 << x;
          var j = 52;
          C.prototype.FV = Math.pow(2, j);
          C.prototype.F1 = j - x;
          C.prototype.F2 = 2 * x - j;
          var q = [];
          var F;
          var z;
          F = "0".charCodeAt(0);
          for (z = 0; z <= 9; ++z) {
            q[F++] = z;
          }
          F = "a".charCodeAt(0);
          for (z = 10; z < 36; ++z) {
            q[F++] = z;
          }
          F = "A".charCodeAt(0);
          for (z = 10; z < 36; ++z) {
            q[F++] = z;
          }
          function G(t, e) {
            var r = q[t.charCodeAt(e)];
            return null == r ? -1 : r;
          }
          function Y(t) {
            var e = H();
            e.fromInt(t);
            return e;
          }
          function W(t) {
            var e = 1;
            var r;
            if (0 != (r = t >>> 16)) {
              t = r;
              e += 16;
            }
            if (0 != (r = t >> 8)) {
              t = r;
              e += 8;
            }
            if (0 != (r = t >> 4)) {
              t = r;
              e += 4;
            }
            if (0 != (r = t >> 2)) {
              t = r;
              e += 2;
            }
            if (0 != (r = t >> 1)) {
              t = r;
              e += 1;
            }
            return e;
          }
          C.ZERO = Y(0);
          C.ONE = Y(1);
          var J = function () {
            function t() {
              this.i = 0;
              this.j = 0;
              this.S = [];
            }
            t.prototype.init = function (t) {
              var e;
              var r;
              var i;
              for (e = 0; e < 256; ++e) {
                this.S[e] = e;
              }
              r = 0;
              for (e = 0; e < 256; ++e) {
                r = r + this.S[e] + t[e % t.length] & 255;
                i = this.S[e];
                this.S[e] = this.S[r];
                this.S[r] = i;
              }
              this.i = 0;
              this.j = 0;
            };
            t.prototype.next = function () {
              var t;
              this.i = this.i + 1 & 255;
              this.j = this.j + this.S[this.i] & 255;
              t = this.S[this.i];
              this.S[this.i] = this.S[this.j];
              this.S[this.j] = t;
              return this.S[t + this.S[this.i] & 255];
            };
            return t;
          }();
          function Z() {
            return new J();
          }
          var $ = 256;
          var X;
          var Q = null;
          var tt;
          if (null == Q) {
            Q = [];
            tt = 0;
          }
          function nt() {
            if (null == X) {
              X = Z();
              while (tt < $) {
                var t = Math.floor(65536 * Math.random());
                Q[tt++] = 255 & t;
              }
              X.init(Q);
              for (tt = 0; tt < Q.length; ++tt) {
                Q[tt] = 0;
              }
              tt = 0;
            }
            return X.next();
          }
          var st = function () {
            function t() {}
            t.prototype.nextBytes = function (t) {
              for (var e = 0; e < t.length; ++e) {
                t[e] = nt();
              }
            };
            return t;
          }();
          function at(t, e) {
            if (e < t.length + 22) {
              console.error("Message too long for RSA");
              return null;
            }
            var r = e - t.length - 6;
            var i = "";
            for (var n = 0; n < r; n += 2) {
              i += "ff";
            }
            var s = "0001" + i + "00" + t;
            return U(s, 16);
          }
          function ot(t, e) {
            if (e < t.length + 11) {
              console.error("Message too long for RSA");
              return null;
            }
            var r = [];
            var i = t.length - 1;
            while (i >= 0 && e > 0) {
              var n = t.charCodeAt(i--);
              if (n < 128) r[--e] = n;else if (n > 127 && n < 2048) {
                r[--e] = 63 & n | 128;
                r[--e] = n >> 6 | 192;
              } else {
                r[--e] = 63 & n | 128;
                r[--e] = n >> 6 & 63 | 128;
                r[--e] = n >> 12 | 224;
              }
            }
            r[--e] = 0;
            var s = new st();
            var a = [];
            while (e > 2) {
              a[0] = 0;
              while (0 == a[0]) {
                s.nextBytes(a);
              }
              r[--e] = a[0];
            }
            r[--e] = 2;
            r[--e] = 0;
            return new C(r);
          }
          var ut = function () {
            function t() {
              this.n = null;
              this.e = 0;
              this.d = null;
              this.p = null;
              this.q = null;
              this.dmp1 = null;
              this.dmq1 = null;
              this.coeff = null;
            }
            t.prototype.doPublic = function (t) {
              return t.modPowInt(this.e, this.n);
            };
            t.prototype.doPrivate = function (t) {
              if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
              var e = t.mod(this.p).modPow(this.dmp1, this.p);
              var r = t.mod(this.q).modPow(this.dmq1, this.q);
              while (e.compareTo(r) < 0) {
                e = e.add(this.p);
              }
              return e.subtract(r).multiply(this.coeff).mod(this.p).multiply(this.q).add(r);
            };
            t.prototype.setPublic = function (t, e) {
              if (null != t && null != e && t.length > 0 && e.length > 0) {
                this.n = U(t, 16);
                this.e = parseInt(e, 16);
              } else console.error("Invalid RSA public key");
            };
            t.prototype.encrypt = function (t) {
              var e = this.n.bitLength() + 7 >> 3;
              var r = ot(t, e);
              if (null == r) return null;
              var i = this.doPublic(r);
              if (null == i) return null;
              var n = i.toString(16);
              var s = n.length;
              for (var a = 0; a < 2 * e - s; a++) {
                n = "0" + n;
              }
              return n;
            };
            t.prototype.setPrivate = function (t, e, r) {
              if (null != t && null != e && t.length > 0 && e.length > 0) {
                this.n = U(t, 16);
                this.e = parseInt(e, 16);
                this.d = U(r, 16);
              } else console.error("Invalid RSA private key");
            };
            t.prototype.setPrivateEx = function (t, e, r, i, n, s, a, o) {
              if (null != t && null != e && t.length > 0 && e.length > 0) {
                this.n = U(t, 16);
                this.e = parseInt(e, 16);
                this.d = U(r, 16);
                this.p = U(i, 16);
                this.q = U(n, 16);
                this.dmp1 = U(s, 16);
                this.dmq1 = U(a, 16);
                this.coeff = U(o, 16);
              } else console.error("Invalid RSA private key");
            };
            t.prototype.generate = function (t, e) {
              var r = new st();
              var i = t >> 1;
              this.e = parseInt(e, 16);
              var n = new C(e, 16);
              for (;;) {
                for (;;) {
                  this.p = new C(t - i, 1, r);
                  if (0 == this.p.subtract(C.ONE).gcd(n).compareTo(C.ONE) && this.p.isProbablePrime(10)) break;
                }
                for (;;) {
                  this.q = new C(i, 1, r);
                  if (0 == this.q.subtract(C.ONE).gcd(n).compareTo(C.ONE) && this.q.isProbablePrime(10)) break;
                }
                if (this.p.compareTo(this.q) <= 0) {
                  var s = this.p;
                  this.p = this.q;
                  this.q = s;
                }
                var a = this.p.subtract(C.ONE);
                var o = this.q.subtract(C.ONE);
                var u = a.multiply(o);
                if (0 == u.gcd(n).compareTo(C.ONE)) {
                  this.n = this.p.multiply(this.q);
                  this.d = n.modInverse(u);
                  this.dmp1 = this.d.mod(a);
                  this.dmq1 = this.d.mod(o);
                  this.coeff = this.q.modInverse(this.p);
                  break;
                }
              }
            };
            t.prototype.decrypt = function (t) {
              var e = U(t, 16);
              var r = this.doPrivate(e);
              if (null == r) return null;
              return ct(r, this.n.bitLength() + 7 >> 3);
            };
            t.prototype.generateAsync = function (t, e, r) {
              var i = new st();
              var n = t >> 1;
              this.e = parseInt(e, 16);
              var s = new C(e, 16);
              var a = this;
              var o = function o() {
                var e = function e() {
                  if (a.p.compareTo(a.q) <= 0) {
                    var t = a.p;
                    a.p = a.q;
                    a.q = t;
                  }
                  var e = a.p.subtract(C.ONE);
                  var i = a.q.subtract(C.ONE);
                  var n = e.multiply(i);
                  if (0 == n.gcd(s).compareTo(C.ONE)) {
                    a.n = a.p.multiply(a.q);
                    a.d = s.modInverse(n);
                    a.dmp1 = a.d.mod(e);
                    a.dmq1 = a.d.mod(i);
                    a.coeff = a.q.modInverse(a.p);
                    setTimeout(function () {
                      r();
                    }, 0);
                  } else setTimeout(o, 0);
                };
                var u = function u() {
                  a.q = H();
                  a.q.fromNumberAsync(n, 1, i, function () {
                    a.q.subtract(C.ONE).gcda(s, function (t) {
                      if (0 == t.compareTo(C.ONE) && a.q.isProbablePrime(10)) setTimeout(e, 0);else setTimeout(u, 0);
                    });
                  });
                };
                var c = function c() {
                  a.p = H();
                  a.p.fromNumberAsync(t - n, 1, i, function () {
                    a.p.subtract(C.ONE).gcda(s, function (t) {
                      if (0 == t.compareTo(C.ONE) && a.p.isProbablePrime(10)) setTimeout(u, 0);else setTimeout(c, 0);
                    });
                  });
                };
                setTimeout(c, 0);
              };
              setTimeout(o, 0);
            };
            t.prototype.sign = function (t, e, r) {
              var i = ht(r);
              var n = i + e(t).toString();
              var s = at(n, this.n.bitLength() / 4);
              if (null == s) return null;
              var a = this.doPrivate(s);
              if (null == a) return null;
              var o = a.toString(16);
              if (0 == (1 & o.length)) return o;else return "0" + o;
            };
            t.prototype.verify = function (t, e, r) {
              var i = U(e, 16);
              var n = this.doPublic(i);
              if (null == n) return null;
              var s = n.toString(16).replace(/^1f+00/, "");
              var a = dt(s);
              return a == r(t).toString();
            };
            t.prototype.encryptLong = function (t) {
              var e = this;
              var r = "";
              var i = (this.n.bitLength() + 7 >> 3) - 11;
              var n = this.setSplitChn(t, i);
              n.forEach(function (t) {
                r += e.encrypt(t);
              });
              return r;
            };
            t.prototype.decryptLong = function (t) {
              var e = "";
              var r = this.n.bitLength() + 7 >> 3;
              var i = 2 * r;
              if (t.length > i) {
                var n = t.match(new RegExp(".{1," + i + "}", "g")) || [];
                var s = [];
                for (var a = 0; a < n.length; a++) {
                  var o = U(n[a], 16);
                  var u = this.doPrivate(o);
                  if (null == u) return null;
                  s.push(u);
                }
                e = lt(s, r);
              } else e = this.decrypt(t);
              return e;
            };
            t.prototype.setSplitChn = function (t, e, r) {
              if (void 0 === r) r = [];
              var i = t.split("");
              var n = 0;
              for (var s = 0; s < i.length; s++) {
                var a = i[s].charCodeAt(0);
                if (a <= 127) n += 1;else if (a <= 2047) n += 2;else if (a <= 65535) n += 3;else n += 4;
                if (n > e) {
                  var o = t.substring(0, s);
                  r.push(o);
                  return this.setSplitChn(t.substring(s), e, r);
                }
              }
              r.push(t);
              return r;
            };
            return t;
          }();
          function ct(t, e) {
            var r = t.toByteArray();
            var i = 0;
            while (i < r.length && 0 == r[i]) {
              ++i;
            }
            if (r.length - i != e - 1 || 2 != r[i]) return null;
            ++i;
            while (0 != r[i]) {
              if (++i >= r.length) return null;
            }
            var n = "";
            while (++i < r.length) {
              var s = 255 & r[i];
              if (s < 128) n += String.fromCharCode(s);else if (s > 191 && s < 224) {
                n += String.fromCharCode((31 & s) << 6 | 63 & r[i + 1]);
                ++i;
              } else {
                n += String.fromCharCode((15 & s) << 12 | (63 & r[i + 1]) << 6 | 63 & r[i + 2]);
                i += 2;
              }
            }
            return n;
          }
          function lt(t, e) {
            var r = [];
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              var s = n.toByteArray();
              var a = 0;
              while (a < s.length && 0 == s[a]) {
                ++a;
              }
              if (s.length - a != e - 1 || 2 != s[a]) return null;
              ++a;
              while (0 != s[a]) {
                if (++a >= s.length) return null;
              }
              r = r.concat(s.slice(a + 1));
            }
            var o = r;
            var u = -1;
            var c = "";
            while (++u < o.length) {
              var l = 255 & o[u];
              if (l < 128) c += String.fromCharCode(l);else if (l > 191 && l < 224) {
                c += String.fromCharCode((31 & l) << 6 | 63 & o[u + 1]);
                ++u;
              } else {
                c += String.fromCharCode((15 & l) << 12 | (63 & o[u + 1]) << 6 | 63 & o[u + 2]);
                u += 2;
              }
            }
            return c;
          }
          var ft = {
            md2: "3020300c06082a864886f70d020205000410",
            md5: "3020300c06082a864886f70d020505000410",
            sha1: "3021300906052b0e03021a05000414",
            sha224: "302d300d06096086480165030402040500041c",
            sha256: "3031300d060960864801650304020105000420",
            sha384: "3041300d060960864801650304020205000430",
            sha512: "3051300d060960864801650304020305000440",
            ripemd160: "3021300906052b2403020105000414"
          };
          function ht(t) {
            return ft[t] || "";
          }
          function dt(t) {
            for (var e in ft) {
              if (ft.hasOwnProperty(e)) {
                var r = ft[e];
                var i = r.length;
                if (t.substr(0, i) == r) return t.substr(i);
              }
            }
            return t;
          }
          var vt = {};
          vt.lang = {
            extend: function extend(t, e, r) {
              if (!e || !t) throw new Error("YAHOO.lang.extend failed, please check that " + "all dependencies are included.");
              var i = function i() {};
              i.prototype = e.prototype;
              t.prototype = new i();
              t.prototype.constructor = t;
              t.superclass = e.prototype;
              if (e.prototype.constructor == Object.prototype.constructor) e.prototype.constructor = e;
              if (r) {
                var n;
                for (n in r) {
                  t.prototype[n] = r[n];
                }
                var s = function s() {},
                  a = ["toString", "valueOf"];
                try {
                  if (/MSIE/.test(navigator.userAgent)) s = function s(t, e) {
                    for (n = 0; n < a.length; n += 1) {
                      var r = a[n],
                        i = e[r];
                      if ("function" === typeof i && i != Object.prototype[r]) t[r] = i;
                    }
                  };
                } catch (t) {}
                s(t.prototype, r);
              }
            }
          };
          var pt = {};
          if ("undefined" == typeof pt.asn1 || !pt.asn1) pt.asn1 = {};
          pt.asn1.ASN1Util = new function () {
            this.integerToByteHex = function (t) {
              var e = t.toString(16);
              if (e.length % 2 == 1) e = "0" + e;
              return e;
            };
            this.bigIntToMinTwosComplementsHex = function (t) {
              var e = t.toString(16);
              if ("-" != e.substr(0, 1)) {
                if (e.length % 2 == 1) e = "0" + e;else if (!e.match(/^[0-7]/)) e = "00" + e;
              } else {
                var r = e.substr(1);
                var i = r.length;
                if (i % 2 == 1) i += 1;else if (!e.match(/^[0-7]/)) i += 2;
                var n = "";
                for (var s = 0; s < i; s++) {
                  n += "f";
                }
                var a = new C(n, 16);
                var o = a.xor(t).add(C.ONE);
                e = o.toString(16).replace(/^-/, "");
              }
              return e;
            };
            this.getPEMStringFromHex = function (t, e) {
              return hextopem(t, e);
            };
            this.newObject = function (t) {
              var e = pt,
                r = e.asn1,
                i = r.DERBoolean,
                n = r.DERInteger,
                s = r.DERBitString,
                a = r.DEROctetString,
                o = r.DERNull,
                u = r.DERObjectIdentifier,
                c = r.DEREnumerated,
                l = r.DERUTF8String,
                f = r.DERNumericString,
                h = r.DERPrintableString,
                d = r.DERTeletexString,
                v = r.DERIA5String,
                p = r.DERUTCTime,
                g = r.DERGeneralizedTime,
                y = r.DERSequence,
                m = r.DERSet,
                w = r.DERTaggedObject,
                S = r.ASN1Util.newObject;
              var _ = Object.keys(t);
              if (1 != _.length) throw "key of param shall be only one.";
              var b = _[0];
              if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + b + ":")) throw "undefined key: " + b;
              if ("bool" == b) return new i(t[b]);
              if ("int" == b) return new n(t[b]);
              if ("bitstr" == b) return new s(t[b]);
              if ("octstr" == b) return new a(t[b]);
              if ("null" == b) return new o(t[b]);
              if ("oid" == b) return new u(t[b]);
              if ("enum" == b) return new c(t[b]);
              if ("utf8str" == b) return new l(t[b]);
              if ("numstr" == b) return new f(t[b]);
              if ("prnstr" == b) return new h(t[b]);
              if ("telstr" == b) return new d(t[b]);
              if ("ia5str" == b) return new v(t[b]);
              if ("utctime" == b) return new p(t[b]);
              if ("gentime" == b) return new g(t[b]);
              if ("seq" == b) {
                var E = t[b];
                var D = [];
                for (var M = 0; M < E.length; M++) {
                  var T = S(E[M]);
                  D.push(T);
                }
                return new y({
                  array: D
                });
              }
              if ("set" == b) {
                var E = t[b];
                var D = [];
                for (var M = 0; M < E.length; M++) {
                  var T = S(E[M]);
                  D.push(T);
                }
                return new m({
                  array: D
                });
              }
              if ("tag" == b) {
                var I = t[b];
                if ("[object Array]" === Object.prototype.toString.call(I) && 3 == I.length) {
                  var A = S(I[2]);
                  return new w({
                    tag: I[0],
                    explicit: I[1],
                    obj: A
                  });
                } else {
                  var x = {};
                  if (void 0 !== I.explicit) x.explicit = I.explicit;
                  if (void 0 !== I.tag) x.tag = I.tag;
                  if (void 0 === I.obj) throw "obj shall be specified for 'tag'.";
                  x.obj = S(I.obj);
                  return new w(x);
                }
              }
            };
            this.jsonToASN1HEX = function (t) {
              var e = this.newObject(t);
              return e.getEncodedHex();
            };
          }();
          pt.asn1.ASN1Util.oidHexToInt = function (t) {
            var e = "";
            var r = parseInt(t.substr(0, 2), 16);
            var i = Math.floor(r / 40);
            var n = r % 40;
            var e = i + "." + n;
            var s = "";
            for (var a = 2; a < t.length; a += 2) {
              var o = parseInt(t.substr(a, 2), 16);
              var u = ("00000000" + o.toString(2)).slice(-8);
              s += u.substr(1, 7);
              if ("0" == u.substr(0, 1)) {
                var c = new C(s, 2);
                e = e + "." + c.toString(10);
                s = "";
              }
            }
            return e;
          };
          pt.asn1.ASN1Util.oidIntToHex = function (t) {
            var e = function e(t) {
              var e = t.toString(16);
              if (1 == e.length) e = "0" + e;
              return e;
            };
            var r = function r(t) {
              var r = "";
              var i = new C(t, 10);
              var n = i.toString(2);
              var s = 7 - n.length % 7;
              if (7 == s) s = 0;
              var a = "";
              for (var o = 0; o < s; o++) {
                a += "0";
              }
              n = a + n;
              for (var o = 0; o < n.length - 1; o += 7) {
                var u = n.substr(o, 7);
                if (o != n.length - 7) u = "1" + u;
                r += e(parseInt(u, 2));
              }
              return r;
            };
            if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
            var i = "";
            var n = t.split(".");
            var s = 40 * parseInt(n[0]) + parseInt(n[1]);
            i += e(s);
            n.splice(0, 2);
            for (var a = 0; a < n.length; a++) {
              i += r(n[a]);
            }
            return i;
          };
          pt.asn1.ASN1Object = function () {
            var n = "";
            this.getLengthHexFromValue = function () {
              if ("undefined" == typeof this.hV || null == this.hV) throw "this.hV is null or undefined.";
              if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + n.length + ",v=" + this.hV;
              var t = this.hV.length / 2;
              var e = t.toString(16);
              if (e.length % 2 == 1) e = "0" + e;
              if (t < 128) return e;else {
                var r = e.length / 2;
                if (r > 15) throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
                var i = 128 + r;
                return i.toString(16) + e;
              }
            };
            this.getEncodedHex = function () {
              if (null == this.hTLV || this.isModified) {
                this.hV = this.getFreshValueHex();
                this.hL = this.getLengthHexFromValue();
                this.hTLV = this.hT + this.hL + this.hV;
                this.isModified = false;
              }
              return this.hTLV;
            };
            this.getValueHex = function () {
              this.getEncodedHex();
              return this.hV;
            };
            this.getFreshValueHex = function () {
              return "";
            };
          };
          pt.asn1.DERAbstractString = function (t) {
            pt.asn1.DERAbstractString.superclass.constructor.call(this);
            this.getString = function () {
              return this.s;
            };
            this.setString = function (t) {
              this.hTLV = null;
              this.isModified = true;
              this.s = t;
              this.hV = stohex(this.s);
            };
            this.setStringHex = function (t) {
              this.hTLV = null;
              this.isModified = true;
              this.s = null;
              this.hV = t;
            };
            this.getFreshValueHex = function () {
              return this.hV;
            };
            if ("undefined" != typeof t) if ("string" == typeof t) this.setString(t);else if ("undefined" != typeof t["str"]) this.setString(t["str"]);else if ("undefined" != typeof t["hex"]) this.setStringHex(t["hex"]);
          };
          vt.lang.extend(pt.asn1.DERAbstractString, pt.asn1.ASN1Object);
          pt.asn1.DERAbstractTime = function (t) {
            pt.asn1.DERAbstractTime.superclass.constructor.call(this);
            this.localDateToUTC = function (t) {
              utc = t.getTime() + 6e4 * t.getTimezoneOffset();
              var e = new Date(utc);
              return e;
            };
            this.formatDate = function (t, e, r) {
              var i = this.zeroPadding;
              var n = this.localDateToUTC(t);
              var s = String(n.getFullYear());
              if ("utc" == e) s = s.substr(2, 2);
              var a = i(String(n.getMonth() + 1), 2);
              var o = i(String(n.getDate()), 2);
              var u = i(String(n.getHours()), 2);
              var c = i(String(n.getMinutes()), 2);
              var l = i(String(n.getSeconds()), 2);
              var f = s + a + o + u + c + l;
              if (true === r) {
                var h = n.getMilliseconds();
                if (0 != h) {
                  var d = i(String(h), 3);
                  d = d.replace(/[0]+$/, "");
                  f = f + "." + d;
                }
              }
              return f + "Z";
            };
            this.zeroPadding = function (t, e) {
              if (t.length >= e) return t;
              return new Array(e - t.length + 1).join("0") + t;
            };
            this.getString = function () {
              return this.s;
            };
            this.setString = function (t) {
              this.hTLV = null;
              this.isModified = true;
              this.s = t;
              this.hV = stohex(t);
            };
            this.setByDateValue = function (t, e, r, i, n, s) {
              var a = new Date(Date.UTC(t, e - 1, r, i, n, s, 0));
              this.setByDate(a);
            };
            this.getFreshValueHex = function () {
              return this.hV;
            };
          };
          vt.lang.extend(pt.asn1.DERAbstractTime, pt.asn1.ASN1Object);
          pt.asn1.DERAbstractStructured = function (t) {
            pt.asn1.DERAbstractString.superclass.constructor.call(this);
            this.setByASN1ObjectArray = function (t) {
              this.hTLV = null;
              this.isModified = true;
              this.asn1Array = t;
            };
            this.appendASN1Object = function (t) {
              this.hTLV = null;
              this.isModified = true;
              this.asn1Array.push(t);
            };
            this.asn1Array = new Array();
            if ("undefined" != typeof t) if ("undefined" != typeof t["array"]) this.asn1Array = t["array"];
          };
          vt.lang.extend(pt.asn1.DERAbstractStructured, pt.asn1.ASN1Object);
          pt.asn1.DERBoolean = function () {
            pt.asn1.DERBoolean.superclass.constructor.call(this);
            this.hT = "01";
            this.hTLV = "0101ff";
          };
          vt.lang.extend(pt.asn1.DERBoolean, pt.asn1.ASN1Object);
          pt.asn1.DERInteger = function (t) {
            pt.asn1.DERInteger.superclass.constructor.call(this);
            this.hT = "02";
            this.setByBigInteger = function (t) {
              this.hTLV = null;
              this.isModified = true;
              this.hV = pt.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t);
            };
            this.setByInteger = function (t) {
              var e = new C(String(t), 10);
              this.setByBigInteger(e);
            };
            this.setValueHex = function (t) {
              this.hV = t;
            };
            this.getFreshValueHex = function () {
              return this.hV;
            };
            if ("undefined" != typeof t) if ("undefined" != typeof t["bigint"]) this.setByBigInteger(t["bigint"]);else if ("undefined" != typeof t["int"]) this.setByInteger(t["int"]);else if ("number" == typeof t) this.setByInteger(t);else if ("undefined" != typeof t["hex"]) this.setValueHex(t["hex"]);
          };
          vt.lang.extend(pt.asn1.DERInteger, pt.asn1.ASN1Object);
          pt.asn1.DERBitString = function (t) {
            if (void 0 !== t && "undefined" !== typeof t.obj) {
              var e = pt.asn1.ASN1Util.newObject(t.obj);
              t.hex = "00" + e.getEncodedHex();
            }
            pt.asn1.DERBitString.superclass.constructor.call(this);
            this.hT = "03";
            this.setHexValueIncludingUnusedBits = function (t) {
              this.hTLV = null;
              this.isModified = true;
              this.hV = t;
            };
            this.setUnusedBitsAndHexValue = function (t, e) {
              if (t < 0 || 7 < t) throw "unused bits shall be from 0 to 7: u = " + t;
              var r = "0" + t;
              this.hTLV = null;
              this.isModified = true;
              this.hV = r + e;
            };
            this.setByBinaryString = function (t) {
              t = t.replace(/0+$/, "");
              var e = 8 - t.length % 8;
              if (8 == e) e = 0;
              for (var r = 0; r <= e; r++) {
                t += "0";
              }
              var i = "";
              for (var r = 0; r < t.length - 1; r += 8) {
                var n = t.substr(r, 8);
                var s = parseInt(n, 2).toString(16);
                if (1 == s.length) s = "0" + s;
                i += s;
              }
              this.hTLV = null;
              this.isModified = true;
              this.hV = "0" + e + i;
            };
            this.setByBooleanArray = function (t) {
              var e = "";
              for (var r = 0; r < t.length; r++) {
                if (true == t[r]) e += "1";else e += "0";
              }
              this.setByBinaryString(e);
            };
            this.newFalseArray = function (t) {
              var e = new Array(t);
              for (var r = 0; r < t; r++) {
                e[r] = false;
              }
              return e;
            };
            this.getFreshValueHex = function () {
              return this.hV;
            };
            if ("undefined" != typeof t) if ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/)) this.setHexValueIncludingUnusedBits(t);else if ("undefined" != typeof t["hex"]) this.setHexValueIncludingUnusedBits(t["hex"]);else if ("undefined" != typeof t["bin"]) this.setByBinaryString(t["bin"]);else if ("undefined" != typeof t["array"]) this.setByBooleanArray(t["array"]);
          };
          vt.lang.extend(pt.asn1.DERBitString, pt.asn1.ASN1Object);
          pt.asn1.DEROctetString = function (t) {
            if (void 0 !== t && "undefined" !== typeof t.obj) {
              var e = pt.asn1.ASN1Util.newObject(t.obj);
              t.hex = e.getEncodedHex();
            }
            pt.asn1.DEROctetString.superclass.constructor.call(this, t);
            this.hT = "04";
          };
          vt.lang.extend(pt.asn1.DEROctetString, pt.asn1.DERAbstractString);
          pt.asn1.DERNull = function () {
            pt.asn1.DERNull.superclass.constructor.call(this);
            this.hT = "05";
            this.hTLV = "0500";
          };
          vt.lang.extend(pt.asn1.DERNull, pt.asn1.ASN1Object);
          pt.asn1.DERObjectIdentifier = function (t) {
            var e = function e(t) {
              var e = t.toString(16);
              if (1 == e.length) e = "0" + e;
              return e;
            };
            var r = function r(t) {
              var r = "";
              var i = new C(t, 10);
              var n = i.toString(2);
              var s = 7 - n.length % 7;
              if (7 == s) s = 0;
              var a = "";
              for (var o = 0; o < s; o++) {
                a += "0";
              }
              n = a + n;
              for (var o = 0; o < n.length - 1; o += 7) {
                var u = n.substr(o, 7);
                if (o != n.length - 7) u = "1" + u;
                r += e(parseInt(u, 2));
              }
              return r;
            };
            pt.asn1.DERObjectIdentifier.superclass.constructor.call(this);
            this.hT = "06";
            this.setValueHex = function (t) {
              this.hTLV = null;
              this.isModified = true;
              this.s = null;
              this.hV = t;
            };
            this.setValueOidString = function (t) {
              if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
              var i = "";
              var n = t.split(".");
              var s = 40 * parseInt(n[0]) + parseInt(n[1]);
              i += e(s);
              n.splice(0, 2);
              for (var a = 0; a < n.length; a++) {
                i += r(n[a]);
              }
              this.hTLV = null;
              this.isModified = true;
              this.s = null;
              this.hV = i;
            };
            this.setValueName = function (t) {
              var e = pt.asn1.x509.OID.name2oid(t);
              if ("" !== e) this.setValueOidString(e);else throw "DERObjectIdentifier oidName undefined: " + t;
            };
            this.getFreshValueHex = function () {
              return this.hV;
            };
            if (void 0 !== t) if ("string" === typeof t) {
              if (t.match(/^[0-2].[0-9.]+$/)) this.setValueOidString(t);else this.setValueName(t);
            } else if (void 0 !== t.oid) this.setValueOidString(t.oid);else if (void 0 !== t.hex) this.setValueHex(t.hex);else if (void 0 !== t.name) this.setValueName(t.name);
          };
          vt.lang.extend(pt.asn1.DERObjectIdentifier, pt.asn1.ASN1Object);
          pt.asn1.DEREnumerated = function (t) {
            pt.asn1.DEREnumerated.superclass.constructor.call(this);
            this.hT = "0a";
            this.setByBigInteger = function (t) {
              this.hTLV = null;
              this.isModified = true;
              this.hV = pt.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t);
            };
            this.setByInteger = function (t) {
              var e = new C(String(t), 10);
              this.setByBigInteger(e);
            };
            this.setValueHex = function (t) {
              this.hV = t;
            };
            this.getFreshValueHex = function () {
              return this.hV;
            };
            if ("undefined" != typeof t) if ("undefined" != typeof t["int"]) this.setByInteger(t["int"]);else if ("number" == typeof t) this.setByInteger(t);else if ("undefined" != typeof t["hex"]) this.setValueHex(t["hex"]);
          };
          vt.lang.extend(pt.asn1.DEREnumerated, pt.asn1.ASN1Object);
          pt.asn1.DERUTF8String = function (t) {
            pt.asn1.DERUTF8String.superclass.constructor.call(this, t);
            this.hT = "0c";
          };
          vt.lang.extend(pt.asn1.DERUTF8String, pt.asn1.DERAbstractString);
          pt.asn1.DERNumericString = function (t) {
            pt.asn1.DERNumericString.superclass.constructor.call(this, t);
            this.hT = "12";
          };
          vt.lang.extend(pt.asn1.DERNumericString, pt.asn1.DERAbstractString);
          pt.asn1.DERPrintableString = function (t) {
            pt.asn1.DERPrintableString.superclass.constructor.call(this, t);
            this.hT = "13";
          };
          vt.lang.extend(pt.asn1.DERPrintableString, pt.asn1.DERAbstractString);
          pt.asn1.DERTeletexString = function (t) {
            pt.asn1.DERTeletexString.superclass.constructor.call(this, t);
            this.hT = "14";
          };
          vt.lang.extend(pt.asn1.DERTeletexString, pt.asn1.DERAbstractString);
          pt.asn1.DERIA5String = function (t) {
            pt.asn1.DERIA5String.superclass.constructor.call(this, t);
            this.hT = "16";
          };
          vt.lang.extend(pt.asn1.DERIA5String, pt.asn1.DERAbstractString);
          pt.asn1.DERUTCTime = function (t) {
            pt.asn1.DERUTCTime.superclass.constructor.call(this, t);
            this.hT = "17";
            this.setByDate = function (t) {
              this.hTLV = null;
              this.isModified = true;
              this.date = t;
              this.s = this.formatDate(this.date, "utc");
              this.hV = stohex(this.s);
            };
            this.getFreshValueHex = function () {
              if ("undefined" == typeof this.date && "undefined" == typeof this.s) {
                this.date = new Date();
                this.s = this.formatDate(this.date, "utc");
                this.hV = stohex(this.s);
              }
              return this.hV;
            };
            if (void 0 !== t) if (void 0 !== t.str) this.setString(t.str);else if ("string" == typeof t && t.match(/^[0-9]{12}Z$/)) this.setString(t);else if (void 0 !== t.hex) this.setStringHex(t.hex);else if (void 0 !== t.date) this.setByDate(t.date);
          };
          vt.lang.extend(pt.asn1.DERUTCTime, pt.asn1.DERAbstractTime);
          pt.asn1.DERGeneralizedTime = function (t) {
            pt.asn1.DERGeneralizedTime.superclass.constructor.call(this, t);
            this.hT = "18";
            this.withMillis = false;
            this.setByDate = function (t) {
              this.hTLV = null;
              this.isModified = true;
              this.date = t;
              this.s = this.formatDate(this.date, "gen", this.withMillis);
              this.hV = stohex(this.s);
            };
            this.getFreshValueHex = function () {
              if (void 0 === this.date && void 0 === this.s) {
                this.date = new Date();
                this.s = this.formatDate(this.date, "gen", this.withMillis);
                this.hV = stohex(this.s);
              }
              return this.hV;
            };
            if (void 0 !== t) {
              if (void 0 !== t.str) this.setString(t.str);else if ("string" == typeof t && t.match(/^[0-9]{14}Z$/)) this.setString(t);else if (void 0 !== t.hex) this.setStringHex(t.hex);else if (void 0 !== t.date) this.setByDate(t.date);
              if (true === t.millis) this.withMillis = true;
            }
          };
          vt.lang.extend(pt.asn1.DERGeneralizedTime, pt.asn1.DERAbstractTime);
          pt.asn1.DERSequence = function (t) {
            pt.asn1.DERSequence.superclass.constructor.call(this, t);
            this.hT = "30";
            this.getFreshValueHex = function () {
              var t = "";
              for (var e = 0; e < this.asn1Array.length; e++) {
                var r = this.asn1Array[e];
                t += r.getEncodedHex();
              }
              this.hV = t;
              return this.hV;
            };
          };
          vt.lang.extend(pt.asn1.DERSequence, pt.asn1.DERAbstractStructured);
          pt.asn1.DERSet = function (t) {
            pt.asn1.DERSet.superclass.constructor.call(this, t);
            this.hT = "31";
            this.sortFlag = true;
            this.getFreshValueHex = function () {
              var t = new Array();
              for (var e = 0; e < this.asn1Array.length; e++) {
                var r = this.asn1Array[e];
                t.push(r.getEncodedHex());
              }
              if (true == this.sortFlag) t.sort();
              this.hV = t.join("");
              return this.hV;
            };
            if ("undefined" != typeof t) if ("undefined" != typeof t.sortflag && false == t.sortflag) this.sortFlag = false;
          };
          vt.lang.extend(pt.asn1.DERSet, pt.asn1.DERAbstractStructured);
          pt.asn1.DERTaggedObject = function (t) {
            pt.asn1.DERTaggedObject.superclass.constructor.call(this);
            this.hT = "a0";
            this.hV = "";
            this.isExplicit = true;
            this.asn1Object = null;
            this.setASN1Object = function (t, e, r) {
              this.hT = e;
              this.isExplicit = t;
              this.asn1Object = r;
              if (this.isExplicit) {
                this.hV = this.asn1Object.getEncodedHex();
                this.hTLV = null;
                this.isModified = true;
              } else {
                this.hV = null;
                this.hTLV = r.getEncodedHex();
                this.hTLV = this.hTLV.replace(/^../, e);
                this.isModified = false;
              }
            };
            this.getFreshValueHex = function () {
              return this.hV;
            };
            if ("undefined" != typeof t) {
              if ("undefined" != typeof t["tag"]) this.hT = t["tag"];
              if ("undefined" != typeof t["explicit"]) this.isExplicit = t["explicit"];
              if ("undefined" != typeof t["obj"]) {
                this.asn1Object = t["obj"];
                this.setASN1Object(this.isExplicit, this.hT, this.asn1Object);
              }
            }
          };
          vt.lang.extend(pt.asn1.DERTaggedObject, pt.asn1.ASN1Object);
          var gt = function () {
            var _t5 = function t(e, r) {
              _t5 = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (t, e) {
                t.__proto__ = e;
              } || function (t, e) {
                for (var r in e) {
                  if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
                }
              };
              return _t5(e, r);
            };
            return function (e, r) {
              if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
              _t5(e, r);
              function i() {
                this.constructor = e;
              }
              e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i());
            };
          }();
          var yt = function (t) {
            gt(e, t);
            function e(r) {
              var i = t.call(this) || this;
              if (r) if ("string" === typeof r) i.parseKey(r);else if (e.hasPrivateKeyProperty(r) || e.hasPublicKeyProperty(r)) i.parsePropertiesFrom(r);
              return i;
            }
            e.prototype.parseKey = function (t) {
              try {
                var e = 0;
                var r = 0;
                var i = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/;
                var n = i.test(t) ? y.decode(t) : w.unarmor(t);
                var s = I.decode(n);
                if (3 === s.sub.length) s = s.sub[2].sub[0];
                if (9 === s.sub.length) {
                  e = s.sub[1].getHexStringValue();
                  this.n = U(e, 16);
                  r = s.sub[2].getHexStringValue();
                  this.e = parseInt(r, 16);
                  var a = s.sub[3].getHexStringValue();
                  this.d = U(a, 16);
                  var o = s.sub[4].getHexStringValue();
                  this.p = U(o, 16);
                  var u = s.sub[5].getHexStringValue();
                  this.q = U(u, 16);
                  var c = s.sub[6].getHexStringValue();
                  this.dmp1 = U(c, 16);
                  var l = s.sub[7].getHexStringValue();
                  this.dmq1 = U(l, 16);
                  var f = s.sub[8].getHexStringValue();
                  this.coeff = U(f, 16);
                } else if (2 === s.sub.length) {
                  var h = s.sub[1];
                  var d = h.sub[0];
                  e = d.sub[0].getHexStringValue();
                  this.n = U(e, 16);
                  r = d.sub[1].getHexStringValue();
                  this.e = parseInt(r, 16);
                } else return false;
                return true;
              } catch (t) {
                return false;
              }
            };
            e.prototype.getPrivateBaseKey = function () {
              var t = {
                array: [new pt.asn1.DERInteger({
                  int: 0
                }), new pt.asn1.DERInteger({
                  bigint: this.n
                }), new pt.asn1.DERInteger({
                  int: this.e
                }), new pt.asn1.DERInteger({
                  bigint: this.d
                }), new pt.asn1.DERInteger({
                  bigint: this.p
                }), new pt.asn1.DERInteger({
                  bigint: this.q
                }), new pt.asn1.DERInteger({
                  bigint: this.dmp1
                }), new pt.asn1.DERInteger({
                  bigint: this.dmq1
                }), new pt.asn1.DERInteger({
                  bigint: this.coeff
                })]
              };
              var e = new pt.asn1.DERSequence(t);
              return e.getEncodedHex();
            };
            e.prototype.getPrivateBaseKeyB64 = function () {
              return d(this.getPrivateBaseKey());
            };
            e.prototype.getPublicBaseKey = function () {
              var t = new pt.asn1.DERSequence({
                array: [new pt.asn1.DERObjectIdentifier({
                  oid: "1.2.840.113549.1.1.1"
                }), new pt.asn1.DERNull()]
              });
              var e = new pt.asn1.DERSequence({
                array: [new pt.asn1.DERInteger({
                  bigint: this.n
                }), new pt.asn1.DERInteger({
                  int: this.e
                })]
              });
              var r = new pt.asn1.DERBitString({
                hex: "00" + e.getEncodedHex()
              });
              var i = new pt.asn1.DERSequence({
                array: [t, r]
              });
              return i.getEncodedHex();
            };
            e.prototype.getPublicBaseKeyB64 = function () {
              return d(this.getPublicBaseKey());
            };
            e.wordwrap = function (t, e) {
              e = e || 64;
              if (!t) return t;
              var r = "(.{1," + e + "})( +|$\n?)|(.{1," + e + "})";
              return t.match(RegExp(r, "g")).join("\n");
            };
            e.prototype.getPrivateKey = function () {
              var t = "-----BEGIN RSA PRIVATE KEY-----\n";
              t += e.wordwrap(this.getPrivateBaseKeyB64()) + "\n";
              t += "-----END RSA PRIVATE KEY-----";
              return t;
            };
            e.prototype.getPublicKey = function () {
              var t = "-----BEGIN PUBLIC KEY-----\n";
              t += e.wordwrap(this.getPublicBaseKeyB64()) + "\n";
              t += "-----END PUBLIC KEY-----";
              return t;
            };
            e.hasPublicKeyProperty = function (t) {
              t = t || {};
              return t.hasOwnProperty("n") && t.hasOwnProperty("e");
            };
            e.hasPrivateKeyProperty = function (t) {
              t = t || {};
              return t.hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff");
            };
            e.prototype.parsePropertiesFrom = function (t) {
              this.n = t.n;
              this.e = t.e;
              if (t.hasOwnProperty("d")) {
                this.d = t.d;
                this.p = t.p;
                this.q = t.q;
                this.dmp1 = t.dmp1;
                this.dmq1 = t.dmq1;
                this.coeff = t.coeff;
              }
            };
            return e;
          }(ut);
          var mt = {
            i: "3.2.1"
          };
          var wt = function () {
            function t(t) {
              if (void 0 === t) t = {};
              t = t || {};
              this.default_key_size = t.default_key_size ? parseInt(t.default_key_size, 10) : 1024;
              this.default_public_exponent = t.default_public_exponent || "010001";
              this.log = t.log || false;
              this.key = null;
            }
            t.prototype.setKey = function (t) {
              if (this.log && this.key) console.warn("A key was already set, overriding existing.");
              this.key = new yt(t);
            };
            t.prototype.setPrivateKey = function (t) {
              this.setKey(t);
            };
            t.prototype.setPublicKey = function (t) {
              this.setKey(t);
            };
            t.prototype.decrypt = function (t) {
              try {
                return this.getKey().decrypt(t);
              } catch (t) {
                return false;
              }
            };
            t.prototype.encrypt = function (t) {
              try {
                return this.getKey().encrypt(t);
              } catch (t) {
                return false;
              }
            };
            t.prototype.encryptLong = function (t) {
              try {
                return d(this.getKey().encryptLong(t));
              } catch (t) {
                return false;
              }
            };
            t.prototype.decryptLong = function (t) {
              try {
                return this.getKey().decryptLong(t);
              } catch (t) {
                return false;
              }
            };
            t.prototype.sign = function (t, e, r) {
              try {
                return d(this.getKey().sign(t, e, r));
              } catch (t) {
                return false;
              }
            };
            t.prototype.verify = function (t, e, r) {
              try {
                return this.getKey().verify(t, v(e), r);
              } catch (t) {
                return false;
              }
            };
            t.prototype.getKey = function (t) {
              if (!this.key) {
                this.key = new yt();
                if (t && "[object Function]" === {}.toString.call(t)) {
                  this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                  return;
                }
                this.key.generate(this.default_key_size, this.default_public_exponent);
              }
              return this.key;
            };
            t.prototype.getPrivateKey = function () {
              return this.getKey().getPrivateKey();
            };
            t.prototype.getPrivateKeyB64 = function () {
              return this.getKey().getPrivateBaseKeyB64();
            };
            t.prototype.getPublicKey = function () {
              return this.getKey().getPublicKey();
            };
            t.prototype.getPublicKeyB64 = function () {
              return this.getKey().getPublicBaseKeyB64();
            };
            t.version = mt.i;
            return t;
          }();
          var St = wt;
        },
        2480: function _() {}
      };
      var e = {};
      function r(i) {
        var n = e[i];
        if (void 0 !== n) return n.exports;
        var s = e[i] = {
          id: i,
          loaded: false,
          exports: {}
        };
        t[i].call(s.exports, s, s.exports, r);
        s.loaded = true;
        return s.exports;
      }
      (function () {
        r.d = function (t, e) {
          for (var i in e) {
            if (r.o(e, i) && !r.o(t, i)) Object.defineProperty(t, i, {
              enumerable: true,
              get: e[i]
            });
          }
        };
      })();
      (function () {
        r.g = function () {
          if ("object" === (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis))) return globalThis;
          try {
            return this || new Function("return this")();
          } catch (t) {
            if ("object" === (typeof window === "undefined" ? "undefined" : _typeof(window))) return window;
          }
        }();
      })();
      (function () {
        r.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        };
      })();
      (function () {
        r.r = function (t) {
          if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
          });
          Object.defineProperty(t, "__esModule", {
            value: true
          });
        };
      })();
      (function () {
        r.nmd = function (t) {
          t.paths = [];
          if (!t.children) t.children = [];
          return t;
        };
      })();
      var i = r(9021);
      return i;
    }();
  });
})(gtpushMin);
var GtPush = /*@__PURE__*/getDefaultExportFromCjs(gtpushMinExports);
function initPushNotification() {
  // 仅 App 端
  if (typeof plus !== 'undefined' && plus.push) {
    plus.globalEvent.addEventListener('newPath', function (_ref) {
      var path = _ref.path;
      if (!path) {
        return;
      }
      // 指定的页面为当前页面
      var pages = getCurrentPages();
      var currentPage = pages[pages.length - 1];
      if (currentPage && currentPage.$page && currentPage.$page.fullPath === path) {
        return;
      }
      // 简单起见，先尝试 navigateTo 跳转，失败后，再尝试 tabBar 跳转
      uni.navigateTo({
        url: path,
        fail: function fail(res) {
          if (res.errMsg.indexOf('tabbar') > -1) {
            uni.switchTab({
              url: path,
              fail: function fail(res) {
                console.error(res.errMsg);
              }
            });
          } else {
            console.error(res.errMsg);
          }
        }
      });
    });
  }
}
var channel;
function postPushMessage(data) {
  if (!channel) {
    return;
  }
  channel.postMessage(data);
}
function initBroadcastChannel(gtPush) {
  if (typeof BroadcastChannel === 'undefined') {
    return;
  }
  channel = new BroadcastChannel('uni-push');
  channel.onmessage = function (_ref2) {
    var data = _ref2.data;
    // @ts-expect-error
    uni.invokePushCallback(data);
  };
  // eslint-disable-next-line no-restricted-globals
  document.addEventListener('visibilitychange', function () {
    // eslint-disable-next-line no-restricted-globals
    if (document.visibilityState === 'visible') {
      gtPush.enableSocket(true);
    }
  });
}

// if (process.env.UNI_PUSH_DEBUG) {
//   GtPush.setDebugMode(true)
// }
// @ts-expect-error
uni.invokePushCallback({
  type: 'enabled'
});
var appid = "__UNI__8FD5608";
if (!appid) {
  Promise.resolve().then(function () {
    // @ts-expect-error
    uni.invokePushCallback({
      type: 'clientId',
      cid: '',
      errMsg: 'manifest.json->appid is required'
    });
  });
} else {
  if (typeof uni.onAppShow === 'function') {
    uni.onAppShow(function () {
      GtPush.enableSocket(true);
    });
  }
  GtPush.init({
    appid: appid,
    onError: function onError(res) {
      console.error(res.error);
      var data = {
        type: 'clientId',
        cid: '',
        errMsg: res.error
      };
      // @ts-expect-error
      uni.invokePushCallback(data);
    },
    onClientId: function onClientId(res) {
      var data = {
        type: 'clientId',
        cid: res.cid
      };
      // @ts-expect-error
      uni.invokePushCallback(data);
    },
    onlineState: function onlineState(res) {
      var data = {
        type: 'lineState',
        online: res.online
      };
      // @ts-expect-error
      uni.invokePushCallback(data);
    },
    onPushMsg: function onPushMsg(res) {
      var data = {
        type: 'pushMsg',
        message: res.message
      };
      // @ts-expect-error
      uni.invokePushCallback(data);
    }
  });
  // 仅在 jssdk 中监听
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 28:
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase.js */ 29);
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _get.apply(this, arguments);
}
module.exports = _get, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 29:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ 30);
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 294:
/*!*****************************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/tuniao-ui/libs/mixin/components_color.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  data: function data() {},
  props: {
    // 背景颜色
    backgroundColor: {
      type: String,
      default: ''
    },
    // 字体颜色
    fontColor: {
      type: String,
      default: ''
    },
    // 字体大小
    fontSize: {
      type: Number,
      default: 0
    },
    // 字体大小单位
    fontUnit: {
      type: String,
      default: 'rpx'
    }
  },
  computed: {
    backgroundColorStyle: function backgroundColorStyle() {
      return this.$t.color.getBackgroundColorStyle(this.backgroundColor);
    },
    backgroundColorClass: function backgroundColorClass() {
      return this.$t.color.getBackgroundColorInternalClass(this.backgroundColor);
    },
    fontColorStyle: function fontColorStyle() {
      return this.$t.color.getFontColorStyle(this.fontColor);
    },
    fontColorClass: function fontColorClass() {
      return this.$t.color.getFontColorInternalClass(this.fontColor);
    },
    fontSizeStyle: function fontSizeStyle() {
      return this.$t.string.getLengthUnitValue(this.fontSize, this.fontUnit);
    }
  },
  methods: {}
};

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 30:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 302:
/*!********************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/tuniao-ui/libs/utils/emitter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 递归使用call方式 this指向
 * 
 * @param {String} componentName 需要查找的组件的名称
 * @param {String} eventName 事件名称
 * @param {Object} params 需要传递的参数
 */
function _broadcast(componentName, eventName, params) {
  // 循环子节点找到需要的节点，没有查找到就递归进行查找
  this.$children.map(function (child) {
    if (componentName === child.$options.name) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat(params));
    }
  });
}
var _default = {
  methods: {
    /**
     * 派发 向上查找一个
     * @param {Object} componentName 需要查找的组件的名称
     * @param {Object} eventName 事件名称
     * @param {Object} params 需要传递的参数
     */
    dispatch: function dispatch(componentName, eventName, params) {
      // 找到最近父节点 $root 根节点
      var parent = this.$parent || this.$root;
      // 获取当前实例的名称
      var name = parent.$options.name;

      // 当前存在节点并且当前节点没有名称或者名称不等于我们要查找的节点名称，则继续遍历
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      // 如果有节点则表示找到
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    /**
     * 广播 向下查找多个
     * @param {Object} componentName 需要查找的组件的名称
     * @param {Object} eventName 事件名称
     * @param {Object} params 需要传递的参数
     */
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 31:
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 317:
/*!*****************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/components/mp-html/parser.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni, wx) {/**
 * @fileoverview html 解析器
 */

// 配置
var config = {
  // 信任的标签（保持标签名不变）
  trustTags: makeMap('a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video'),
  // 块级标签（转为 div，其他的非信任标签转为 span）
  blockTags: makeMap('address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section'),
  // 要移除的标签
  ignoreTags: makeMap('area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr'),
  // 自闭合的标签
  voidTags: makeMap('area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr'),
  // html 实体
  entities: {
    lt: '<',
    gt: '>',
    quot: '"',
    apos: "'",
    ensp: "\u2002",
    emsp: "\u2003",
    nbsp: '\xA0',
    semi: ';',
    ndash: '–',
    mdash: '—',
    middot: '·',
    lsquo: '‘',
    rsquo: '’',
    ldquo: '“',
    rdquo: '”',
    bull: '•',
    hellip: '…'
  },
  // 默认的标签样式
  tagStyle: {
    address: 'font-style:italic',
    big: 'display:inline;font-size:1.2em',
    caption: 'display:table-caption;text-align:center',
    center: 'text-align:center',
    cite: 'font-style:italic',
    dd: 'margin-left:40px',
    mark: 'background-color:yellow',
    pre: 'font-family:monospace;white-space:pre',
    s: 'text-decoration:line-through',
    small: 'display:inline;font-size:0.8em',
    strike: 'text-decoration:line-through',
    u: 'text-decoration:underline'
  },
  // svg 大小写对照表
  svgDict: {
    animatetransform: 'animateTransform',
    lineargradient: 'linearGradient',
    viewbox: 'viewBox',
    attributename: 'attributeName',
    repeatcount: 'repeatCount',
    repeatdur: 'repeatDur'
  }
};
var tagSelector = {};
var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),
  windowWidth = _uni$getSystemInfoSyn.windowWidth,
  system = _uni$getSystemInfoSyn.system;
var blankChar = makeMap(' ,\r,\n,\t,\f');
var idIndex = 0;

/**
 * @description 创建 map
 * @param {String} str 逗号分隔
 */
function makeMap(str) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = list.length; i--;) {
    map[list[i]] = true;
  }
  return map;
}

/**
 * @description 解码 html 实体
 * @param {String} str 要解码的字符串
 * @param {Boolean} amp 要不要解码 &amp;
 * @returns {String} 解码后的字符串
 */
function decodeEntity(str, amp) {
  var i = str.indexOf('&');
  while (i !== -1) {
    var j = str.indexOf(';', i + 3);
    var code = void 0;
    if (j === -1) break;
    if (str[i + 1] === '#') {
      // &#123; 形式的实体
      code = parseInt((str[i + 2] === 'x' ? '0' : '') + str.substring(i + 2, j));
      if (!isNaN(code)) {
        str = str.substr(0, i) + String.fromCharCode(code) + str.substr(j + 1);
      }
    } else {
      // &nbsp; 形式的实体
      code = str.substring(i + 1, j);
      if (config.entities[code] || code === 'amp' && amp) {
        str = str.substr(0, i) + (config.entities[code] || '&') + str.substr(j + 1);
      }
    }
    i = str.indexOf('&', i + 1);
  }
  return str;
}

/**
 * @description html 解析器
 * @param {Object} vm 组件实例
 */
function Parser(vm) {
  this.options = vm || {};
  this.tagStyle = Object.assign({}, config.tagStyle, this.options.tagStyle);
  this.imgList = vm.imgList || [];
  this.plugins = vm.plugins || [];
  this.attrs = Object.create(null);
  this.stack = [];
  this.nodes = [];
  this.pre = (this.options.containerStyle || '').includes('white-space') && this.options.containerStyle.includes('pre') ? 2 : 0;
}

/**
 * @description 执行解析
 * @param {String} content 要解析的文本
 */
Parser.prototype.parse = function (content) {
  // 插件处理
  for (var i = this.plugins.length; i--;) {
    if (this.plugins[i].onUpdate) {
      content = this.plugins[i].onUpdate(content, config) || content;
    }
  }
  new Lexer(this).parse(content);
  // 出栈未闭合的标签
  while (this.stack.length) {
    this.popNode();
  }
  return this.nodes;
};

/**
 * @description 将标签暴露出来（不被 rich-text 包含）
 */
Parser.prototype.expose = function () {
  for (var i = this.stack.length; i--;) {
    var item = this.stack[i];
    if (item.c || item.name === 'a' || item.name === 'video' || item.name === 'audio') return;
    item.c = 1;
  }
};

/**
 * @description 处理插件
 * @param {Object} node 要处理的标签
 * @returns {Boolean} 是否要移除此标签
 */
Parser.prototype.hook = function (node) {
  for (var i = this.plugins.length; i--;) {
    if (this.plugins[i].onParse && this.plugins[i].onParse(node, this) === false) {
      return false;
    }
  }
  return true;
};

/**
 * @description 将链接拼接上主域名
 * @param {String} url 需要拼接的链接
 * @returns {String} 拼接后的链接
 */
Parser.prototype.getUrl = function (url) {
  var domain = this.options.domain;
  if (url[0] === '/') {
    if (url[1] === '/') {
      // // 开头的补充协议名
      url = (domain ? domain.split('://')[0] : 'http') + ':' + url;
    } else if (domain) {
      // 否则补充整个域名
      url = domain + url;
    }
  } else if (domain && !url.includes('data:') && !url.includes('://')) {
    url = domain + '/' + url;
  }
  return url;
};

/**
 * @description 解析样式表
 * @param {Object} node 标签
 * @returns {Object}
 */
Parser.prototype.parseStyle = function (node) {
  var attrs = node.attrs;
  var list = (this.tagStyle[node.name] || '').split(';').concat((attrs.style || '').split(';'));
  var styleObj = {};
  var tmp = '';
  if (attrs.id && !this.xml) {
    // 暴露锚点
    if (this.options.useAnchor) {
      this.expose();
    } else if (node.name !== 'img' && node.name !== 'a' && node.name !== 'video' && node.name !== 'audio') {
      attrs.id = undefined;
    }
  }

  // 转换 width 和 height 属性
  if (attrs.width) {
    styleObj.width = parseFloat(attrs.width) + (attrs.width.includes('%') ? '%' : 'px');
    attrs.width = undefined;
  }
  if (attrs.height) {
    styleObj.height = parseFloat(attrs.height) + (attrs.height.includes('%') ? '%' : 'px');
    attrs.height = undefined;
  }
  for (var i = 0, len = list.length; i < len; i++) {
    var info = list[i].split(':');
    if (info.length < 2) continue;
    var key = info.shift().trim().toLowerCase();
    var value = info.join(':').trim();
    if (value[0] === '-' && value.lastIndexOf('-') > 0 || value.includes('safe')) {
      // 兼容性的 css 不压缩
      tmp += ";".concat(key, ":").concat(value);
    } else if (!styleObj[key] || value.includes('import') || !styleObj[key].includes('import')) {
      // 重复的样式进行覆盖
      if (value.includes('url')) {
        // 填充链接
        var j = value.indexOf('(') + 1;
        if (j) {
          while (value[j] === '"' || value[j] === "'" || blankChar[value[j]]) {
            j++;
          }
          value = value.substr(0, j) + this.getUrl(value.substr(j));
        }
      } else if (value.includes('rpx')) {
        // 转换 rpx（rich-text 内部不支持 rpx）
        value = value.replace(/[0-9.]+\s*rpx/g, function ($) {
          return parseFloat($) * windowWidth / 750 + 'px';
        });
      }
      styleObj[key] = value;
    }
  }
  node.attrs.style = tmp;
  return styleObj;
};

/**
 * @description 解析到标签名
 * @param {String} name 标签名
 * @private
 */
Parser.prototype.onTagName = function (name) {
  this.tagName = this.xml ? name : name.toLowerCase();
  if (this.tagName === 'svg') {
    this.xml = (this.xml || 0) + 1; // svg 标签内大小写敏感
  }
};

/**
 * @description 解析到属性名
 * @param {String} name 属性名
 * @private
 */
Parser.prototype.onAttrName = function (name) {
  name = this.xml ? name : name.toLowerCase();
  if (name.substr(0, 5) === 'data-') {
    if (name === 'data-src' && !this.attrs.src) {
      // data-src 自动转为 src
      this.attrName = 'src';
    } else if (this.tagName === 'img' || this.tagName === 'a') {
      // a 和 img 标签保留 data- 的属性，可以在 imgtap 和 linktap 事件中使用
      this.attrName = name;
    } else {
      // 剩余的移除以减小大小
      this.attrName = undefined;
    }
  } else {
    this.attrName = name;
    this.attrs[name] = 'T'; // boolean 型属性缺省设置
  }
};

/**
 * @description 解析到属性值
 * @param {String} val 属性值
 * @private
 */
Parser.prototype.onAttrVal = function (val) {
  var name = this.attrName || '';
  if (name === 'style' || name === 'href') {
    // 部分属性进行实体解码
    this.attrs[name] = decodeEntity(val, true);
  } else if (name.includes('src')) {
    // 拼接主域名
    this.attrs[name] = this.getUrl(decodeEntity(val, true));
  } else if (name) {
    this.attrs[name] = val;
  }
};

/**
 * @description 解析到标签开始
 * @param {Boolean} selfClose 是否有自闭合标识 />
 * @private
 */
Parser.prototype.onOpenTag = function (selfClose) {
  // 拼装 node
  var node = Object.create(null);
  node.name = this.tagName;
  node.attrs = this.attrs;
  // 避免因为自动 diff 使得 type 被设置为 null 导致部分内容不显示
  if (this.options.nodes.length) {
    node.type = 'node';
  }
  this.attrs = Object.create(null);
  var attrs = node.attrs;
  var parent = this.stack[this.stack.length - 1];
  var siblings = parent ? parent.children : this.nodes;
  var close = this.xml ? selfClose : config.voidTags[node.name];

  // 替换标签名选择器
  if (tagSelector[node.name]) {
    attrs.class = tagSelector[node.name] + (attrs.class ? ' ' + attrs.class : '');
  }

  // 转换 embed 标签
  if (node.name === 'embed') {
    var src = attrs.src || '';
    // 按照后缀名和 type 将 embed 转为 video 或 audio
    if (src.includes('.mp4') || src.includes('.3gp') || src.includes('.m3u8') || (attrs.type || '').includes('video')) {
      node.name = 'video';
    } else if (src.includes('.mp3') || src.includes('.wav') || src.includes('.aac') || src.includes('.m4a') || (attrs.type || '').includes('audio')) {
      node.name = 'audio';
    }
    if (attrs.autostart) {
      attrs.autoplay = 'T';
    }
    attrs.controls = 'T';
  }

  // 处理音视频
  if (node.name === 'video' || node.name === 'audio') {
    // 设置 id 以便获取 context
    if (node.name === 'video' && !attrs.id) {
      attrs.id = 'v' + idIndex++;
    }
    // 没有设置 controls 也没有设置 autoplay 的自动设置 controls
    if (!attrs.controls && !attrs.autoplay) {
      attrs.controls = 'T';
    }
    // 用数组存储所有可用的 source
    node.src = [];
    if (attrs.src) {
      node.src.push(attrs.src);
      attrs.src = undefined;
    }
    this.expose();
  }

  // 处理自闭合标签
  if (close) {
    if (!this.hook(node) || config.ignoreTags[node.name]) {
      // 通过 base 标签设置主域名
      if (node.name === 'base' && !this.options.domain) {
        this.options.domain = attrs.href;
      } else if (node.name === 'source' && parent && (parent.name === 'video' || parent.name === 'audio') && attrs.src) {
        // 设置 source 标签（仅父节点为 video 或 audio 时有效）
        parent.src.push(attrs.src);
      }
      return;
    }

    // 解析 style
    var styleObj = this.parseStyle(node);

    // 处理图片
    if (node.name === 'img') {
      if (attrs.src) {
        // 标记 webp
        if (attrs.src.includes('webp')) {
          node.webp = 'T';
        }
        // data url 图片如果没有设置 original-src 默认为不可预览的小图片
        if (attrs.src.includes('data:') && !attrs['original-src']) {
          attrs.ignore = 'T';
        }
        if (!attrs.ignore || node.webp || attrs.src.includes('cloud://')) {
          for (var i = this.stack.length; i--;) {
            var item = this.stack[i];
            if (item.name === 'a') {
              node.a = item.attrs;
              break;
            }
            var style = item.attrs.style || '';
            if (style.includes('flex:') && !style.includes('flex:0') && !style.includes('flex: 0') && (!styleObj.width || !styleObj.width.includes('%'))) {
              styleObj.width = '100% !important';
              styleObj.height = '';
              for (var j = i + 1; j < this.stack.length; j++) {
                this.stack[j].attrs.style = (this.stack[j].attrs.style || '').replace('inline-', '');
              }
            } else if (style.includes('flex') && styleObj.width === '100%') {
              for (var _j = i + 1; _j < this.stack.length; _j++) {
                var _style = this.stack[_j].attrs.style || '';
                if (!_style.includes(';width') && !_style.includes(' width') && _style.indexOf('width') !== 0) {
                  styleObj.width = '';
                  break;
                }
              }
            } else if (style.includes('inline-block')) {
              if (styleObj.width && styleObj.width[styleObj.width.length - 1] === '%') {
                item.attrs.style += ';max-width:' + styleObj.width;
                styleObj.width = '';
              } else {
                item.attrs.style += ';max-width:100%';
              }
            }
            item.c = 1;
          }
          attrs.i = this.imgList.length.toString();
          var _src = attrs['original-src'] || attrs.src;
          if (this.imgList.includes(_src)) {
            // 如果有重复的链接则对域名进行随机大小写变换避免预览时错位
            var _i = _src.indexOf('://');
            if (_i !== -1) {
              _i += 3;
              var newSrc = _src.substr(0, _i);
              for (; _i < _src.length; _i++) {
                if (_src[_i] === '/') break;
                newSrc += Math.random() > 0.5 ? _src[_i].toUpperCase() : _src[_i];
              }
              newSrc += _src.substr(_i);
              _src = newSrc;
            }
          }
          this.imgList.push(_src);
        }
      }
      if (styleObj.display === 'inline') {
        styleObj.display = '';
      }
      if (attrs.ignore) {
        styleObj['max-width'] = styleObj['max-width'] || '100%';
        attrs.style += ';-webkit-touch-callout:none';
      }

      // 设置的宽度超出屏幕，为避免变形，高度转为自动
      if (parseInt(styleObj.width) > windowWidth) {
        styleObj.height = undefined;
      }
      // 记录是否设置了宽高
      if (styleObj.width) {
        if (styleObj.width.includes('auto')) {
          styleObj.width = '';
        } else {
          node.w = 'T';
          if (styleObj.height && !styleObj.height.includes('auto')) {
            node.h = 'T';
          }
        }
      }
    } else if (node.name === 'svg') {
      siblings.push(node);
      this.stack.push(node);
      this.popNode();
      return;
    }
    for (var key in styleObj) {
      if (styleObj[key]) {
        attrs.style += ";".concat(key, ":").concat(styleObj[key].replace(' !important', ''));
      }
    }
    attrs.style = attrs.style.substr(1) || undefined;
  } else {
    if ((node.name === 'pre' || (attrs.style || '').includes('white-space') && attrs.style.includes('pre')) && this.pre !== 2) {
      this.pre = node.pre = 1;
    }
    node.children = [];
    this.stack.push(node);
  }

  // 加入节点树
  siblings.push(node);
};

/**
 * @description 解析到标签结束
 * @param {String} name 标签名
 * @private
 */
Parser.prototype.onCloseTag = function (name) {
  // 依次出栈到匹配为止
  name = this.xml ? name : name.toLowerCase();
  var i;
  for (i = this.stack.length; i--;) {
    if (this.stack[i].name === name) break;
  }
  if (i !== -1) {
    while (this.stack.length > i) {
      this.popNode();
    }
  } else if (name === 'p' || name === 'br') {
    var siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
    siblings.push({
      name: name,
      attrs: {
        class: tagSelector[name],
        style: this.tagStyle[name]
      }
    });
  }
};

/**
 * @description 处理标签出栈
 * @private
 */
Parser.prototype.popNode = function () {
  var node = this.stack.pop();
  var attrs = node.attrs;
  var children = node.children;
  var parent = this.stack[this.stack.length - 1];
  var siblings = parent ? parent.children : this.nodes;
  if (!this.hook(node) || config.ignoreTags[node.name]) {
    // 获取标题
    if (node.name === 'title' && children.length && children[0].type === 'text' && this.options.setTitle) {
      uni.setNavigationBarTitle({
        title: children[0].text
      });
    }
    siblings.pop();
    return;
  }
  if (node.pre && this.pre !== 2) {
    // 是否合并空白符标识
    this.pre = node.pre = undefined;
    for (var i = this.stack.length; i--;) {
      if (this.stack[i].pre) {
        this.pre = 1;
      }
    }
  }
  var styleObj = {};

  // 转换 svg
  if (node.name === 'svg') {
    if (this.xml > 1) {
      // 多层 svg 嵌套
      this.xml--;
      return;
    }
    var src = '';
    var style = attrs.style;
    attrs.style = '';
    attrs.xmlns = 'http://www.w3.org/2000/svg';
    (function traversal(node) {
      if (node.type === 'text') {
        src += node.text;
        return;
      }
      var name = config.svgDict[node.name] || node.name;
      src += '<' + name;
      for (var item in node.attrs) {
        var val = node.attrs[item];
        if (val) {
          src += " ".concat(config.svgDict[item] || item, "=\"").concat(val, "\"");
        }
      }
      if (!node.children) {
        src += '/>';
      } else {
        src += '>';
        for (var _i2 = 0; _i2 < node.children.length; _i2++) {
          traversal(node.children[_i2]);
        }
        src += '</' + name + '>';
      }
    })(node);
    node.name = 'img';
    node.attrs = {
      src: 'data:image/svg+xml;utf8,' + src.replace(/#/g, '%23'),
      style: style,
      ignore: 'T'
    };
    node.children = undefined;
    this.xml = false;
    return;
  }

  // 转换 align 属性
  if (attrs.align) {
    if (node.name === 'table') {
      if (attrs.align === 'center') {
        styleObj['margin-inline-start'] = styleObj['margin-inline-end'] = 'auto';
      } else {
        styleObj.float = attrs.align;
      }
    } else {
      styleObj['text-align'] = attrs.align;
    }
    attrs.align = undefined;
  }

  // 转换 dir 属性
  if (attrs.dir) {
    styleObj.direction = attrs.dir;
    attrs.dir = undefined;
  }

  // 转换 font 标签的属性
  if (node.name === 'font') {
    if (attrs.color) {
      styleObj.color = attrs.color;
      attrs.color = undefined;
    }
    if (attrs.face) {
      styleObj['font-family'] = attrs.face;
      attrs.face = undefined;
    }
    if (attrs.size) {
      var size = parseInt(attrs.size);
      if (!isNaN(size)) {
        if (size < 1) {
          size = 1;
        } else if (size > 7) {
          size = 7;
        }
        styleObj['font-size'] = ['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'][size - 1];
      }
      attrs.size = undefined;
    }
  }

  // 一些编辑器的自带 class
  if ((attrs.class || '').includes('align-center')) {
    styleObj['text-align'] = 'center';
  }
  Object.assign(styleObj, this.parseStyle(node));
  if (node.name !== 'table' && parseInt(styleObj.width) > windowWidth) {
    styleObj['max-width'] = '100%';
    styleObj['box-sizing'] = 'border-box';
  }
  if (config.blockTags[node.name]) {
    node.name = 'div';
  } else if (!config.trustTags[node.name] && !this.xml) {
    // 未知标签转为 span，避免无法显示
    node.name = 'span';
  }
  if (node.name === 'a' || node.name === 'ad') {
    this.expose();
  } else if ((node.name === 'ul' || node.name === 'ol') && node.c) {
    // 列表处理
    var types = {
      a: 'lower-alpha',
      A: 'upper-alpha',
      i: 'lower-roman',
      I: 'upper-roman'
    };
    if (types[attrs.type]) {
      attrs.style += ';list-style-type:' + types[attrs.type];
      attrs.type = undefined;
    }
    for (var _i3 = children.length; _i3--;) {
      if (children[_i3].name === 'li') {
        children[_i3].c = 1;
      }
    }
  } else if (node.name === 'table') {
    // 表格处理
    // cellpadding、cellspacing、border 这几个常用表格属性需要通过转换实现
    var padding = parseFloat(attrs.cellpadding);
    var spacing = parseFloat(attrs.cellspacing);
    var border = parseFloat(attrs.border);
    if (node.c) {
      // padding 和 spacing 默认 2
      if (isNaN(padding)) {
        padding = 2;
      }
      if (isNaN(spacing)) {
        spacing = 2;
      }
    }
    if (border) {
      attrs.style += ';border:' + border + 'px solid gray';
    }
    if (node.flag && node.c) {
      // 有 colspan 或 rowspan 且含有链接的表格通过 grid 布局实现
      styleObj.display = 'grid';
      if (spacing) {
        styleObj['grid-gap'] = spacing + 'px';
        styleObj.padding = spacing + 'px';
      } else if (border) {
        // 无间隔的情况下避免边框重叠
        attrs.style += ';border-left:0;border-top:0';
      }
      var width = []; // 表格的列宽
      var trList = []; // tr 列表
      var cells = []; // 保存新的单元格
      var map = {}; // 被合并单元格占用的格子

      (function traversal(nodes) {
        for (var _i4 = 0; _i4 < nodes.length; _i4++) {
          if (nodes[_i4].name === 'tr') {
            trList.push(nodes[_i4]);
          } else {
            traversal(nodes[_i4].children || []);
          }
        }
      })(children);
      for (var row = 1; row <= trList.length; row++) {
        var col = 1;
        for (var j = 0; j < trList[row - 1].children.length; j++, col++) {
          var td = trList[row - 1].children[j];
          if (td.name === 'td' || td.name === 'th') {
            // 这个格子被上面的单元格占用，则列号++
            while (map[row + '.' + col]) {
              col++;
            }
            var _style2 = td.attrs.style || '';
            var start = _style2.indexOf('width') ? _style2.indexOf(';width') : 0;
            // 提取出 td 的宽度
            if (start !== -1) {
              var end = _style2.indexOf(';', start + 6);
              if (end === -1) {
                end = _style2.length;
              }
              if (!td.attrs.colspan) {
                width[col] = _style2.substring(start ? start + 7 : 6, end);
              }
              _style2 = _style2.substr(0, start) + _style2.substr(end);
            }
            _style2 += (border ? ";border:".concat(border, "px solid gray") + (spacing ? '' : ';border-right:0;border-bottom:0') : '') + (padding ? ";padding:".concat(padding, "px") : '');
            // 处理列合并
            if (td.attrs.colspan) {
              _style2 += ";grid-column-start:".concat(col, ";grid-column-end:").concat(col + parseInt(td.attrs.colspan));
              if (!td.attrs.rowspan) {
                _style2 += ";grid-row-start:".concat(row, ";grid-row-end:").concat(row + 1);
              }
              col += parseInt(td.attrs.colspan) - 1;
            }
            // 处理行合并
            if (td.attrs.rowspan) {
              _style2 += ";grid-row-start:".concat(row, ";grid-row-end:").concat(row + parseInt(td.attrs.rowspan));
              if (!td.attrs.colspan) {
                _style2 += ";grid-column-start:".concat(col, ";grid-column-end:").concat(col + 1);
              }
              // 记录下方单元格被占用
              for (var rowspan = 1; rowspan < td.attrs.rowspan; rowspan++) {
                for (var colspan = 0; colspan < (td.attrs.colspan || 1); colspan++) {
                  map[row + rowspan + '.' + (col - colspan)] = 1;
                }
              }
            }
            if (_style2) {
              td.attrs.style = _style2;
            }
            cells.push(td);
          }
        }
        if (row === 1) {
          var temp = '';
          for (var _i5 = 1; _i5 < col; _i5++) {
            temp += (width[_i5] ? width[_i5] : 'auto') + ' ';
          }
          styleObj['grid-template-columns'] = temp;
        }
      }
      node.children = cells;
    } else {
      // 没有使用合并单元格的表格通过 table 布局实现
      if (node.c) {
        styleObj.display = 'table';
      }
      if (!isNaN(spacing)) {
        styleObj['border-spacing'] = spacing + 'px';
      }
      if (border || padding) {
        // 遍历
        (function traversal(nodes) {
          for (var _i6 = 0; _i6 < nodes.length; _i6++) {
            var _td = nodes[_i6];
            if (_td.name === 'th' || _td.name === 'td') {
              if (border) {
                _td.attrs.style = "border:".concat(border, "px solid gray;").concat(_td.attrs.style || '');
              }
              if (padding) {
                _td.attrs.style = "padding:".concat(padding, "px;").concat(_td.attrs.style || '');
              }
            } else if (_td.children) {
              traversal(_td.children);
            }
          }
        })(children);
      }
    }
    // 给表格添加一个单独的横向滚动层
    if (this.options.scrollTable && !(attrs.style || '').includes('inline')) {
      var table = Object.assign({}, node);
      node.name = 'div';
      node.attrs = {
        style: 'overflow:auto'
      };
      node.children = [table];
      attrs = table.attrs;
    }
  } else if ((node.name === 'td' || node.name === 'th') && (attrs.colspan || attrs.rowspan)) {
    for (var _i7 = this.stack.length; _i7--;) {
      if (this.stack[_i7].name === 'table') {
        this.stack[_i7].flag = 1; // 指示含有合并单元格
        break;
      }
    }
  } else if (node.name === 'ruby') {
    // 转换 ruby
    node.name = 'span';
    for (var _i8 = 0; _i8 < children.length - 1; _i8++) {
      if (children[_i8].type === 'text' && children[_i8 + 1].name === 'rt') {
        children[_i8] = {
          name: 'div',
          attrs: {
            style: 'display:inline-block;text-align:center'
          },
          children: [{
            name: 'div',
            attrs: {
              style: 'font-size:50%;' + (children[_i8 + 1].attrs.style || '')
            },
            children: children[_i8 + 1].children
          }, children[_i8]]
        };
        children.splice(_i8 + 1, 1);
      }
    }
  } else if (node.c) {
    node.c = 2;
    for (var _i9 = node.children.length; _i9--;) {
      if (!node.children[_i9].c || node.children[_i9].name === 'table') {
        node.c = 1;
      }
    }
  }
  if ((styleObj.display || '').includes('flex') && !node.c) {
    for (var _i10 = children.length; _i10--;) {
      var item = children[_i10];
      if (item.f) {
        item.attrs.style = (item.attrs.style || '') + item.f;
        item.f = undefined;
      }
    }
  }
  // flex 布局时部分样式需要提取到 rich-text 外层
  var flex = parent && (parent.attrs.style || '').includes('flex')

  // 检查基础库版本 virtualHost 是否可用
  && !(node.c && wx.getNFCAdapter); // eslint-disable-line

  if (flex) {
    node.f = ';max-width:100%';
  }
  for (var key in styleObj) {
    if (styleObj[key]) {
      var val = ";".concat(key, ":").concat(styleObj[key].replace(' !important', ''));
      if (flex && (key.includes('flex') && key !== 'flex-direction' || key === 'align-self' || styleObj[key][0] === '-' || key === 'width' && val.includes('%'))) {
        node.f += val;
        if (key === 'width') {
          attrs.style += ';width:100%';
        }
      } else {
        attrs.style += val;
      }
    }
  }
  attrs.style = attrs.style.substr(1) || undefined;
};

/**
 * @description 解析到文本
 * @param {String} text 文本内容
 */
Parser.prototype.onText = function (text) {
  if (!this.pre) {
    // 合并空白符
    var trim = '';
    var flag;
    for (var i = 0, len = text.length; i < len; i++) {
      if (!blankChar[text[i]]) {
        trim += text[i];
      } else {
        if (trim[trim.length - 1] !== ' ') {
          trim += ' ';
        }
        if (text[i] === '\n' && !flag) {
          flag = true;
        }
      }
    }
    // 去除含有换行符的空串
    if (trim === ' ' && flag) return;
    text = trim;
  }
  var node = Object.create(null);
  node.type = 'text';
  node.text = decodeEntity(text);
  if (this.hook(node)) {
    if (this.options.selectable === 'force' && system.includes('iOS')) {
      this.expose();
      node.us = 'T';
    }
    var siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
    siblings.push(node);
  }
};

/**
 * @description html 词法分析器
 * @param {Object} handler 高层处理器
 */
function Lexer(handler) {
  this.handler = handler;
}

/**
 * @description 执行解析
 * @param {String} content 要解析的文本
 */
Lexer.prototype.parse = function (content) {
  this.content = content || '';
  this.i = 0; // 标记解析位置
  this.start = 0; // 标记一个单词的开始位置
  this.state = this.text; // 当前状态
  for (var len = this.content.length; this.i !== -1 && this.i < len;) {
    this.state();
  }
};

/**
 * @description 检查标签是否闭合
 * @param {String} method 如果闭合要进行的操作
 * @returns {Boolean} 是否闭合
 * @private
 */
Lexer.prototype.checkClose = function (method) {
  var selfClose = this.content[this.i] === '/';
  if (this.content[this.i] === '>' || selfClose && this.content[this.i + 1] === '>') {
    if (method) {
      this.handler[method](this.content.substring(this.start, this.i));
    }
    this.i += selfClose ? 2 : 1;
    this.start = this.i;
    this.handler.onOpenTag(selfClose);
    if (this.handler.tagName === 'script') {
      this.i = this.content.indexOf('</', this.i);
      if (this.i !== -1) {
        this.i += 2;
        this.start = this.i;
      }
      this.state = this.endTag;
    } else {
      this.state = this.text;
    }
    return true;
  }
  return false;
};

/**
 * @description 文本状态
 * @private
 */
Lexer.prototype.text = function () {
  this.i = this.content.indexOf('<', this.i); // 查找最近的标签
  if (this.i === -1) {
    // 没有标签了
    if (this.start < this.content.length) {
      this.handler.onText(this.content.substring(this.start, this.content.length));
    }
    return;
  }
  var c = this.content[this.i + 1];
  if (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z') {
    // 标签开头
    if (this.start !== this.i) {
      this.handler.onText(this.content.substring(this.start, this.i));
    }
    this.start = ++this.i;
    this.state = this.tagName;
  } else if (c === '/' || c === '!' || c === '?') {
    if (this.start !== this.i) {
      this.handler.onText(this.content.substring(this.start, this.i));
    }
    var next = this.content[this.i + 2];
    if (c === '/' && (next >= 'a' && next <= 'z' || next >= 'A' && next <= 'Z')) {
      // 标签结尾
      this.i += 2;
      this.start = this.i;
      this.state = this.endTag;
      return;
    }
    // 处理注释
    var end = '-->';
    if (c !== '!' || this.content[this.i + 2] !== '-' || this.content[this.i + 3] !== '-') {
      end = '>';
    }
    this.i = this.content.indexOf(end, this.i);
    if (this.i !== -1) {
      this.i += end.length;
      this.start = this.i;
    }
  } else {
    this.i++;
  }
};

/**
 * @description 标签名状态
 * @private
 */
Lexer.prototype.tagName = function () {
  if (blankChar[this.content[this.i]]) {
    // 解析到标签名
    this.handler.onTagName(this.content.substring(this.start, this.i));
    while (blankChar[this.content[++this.i]]) {
      ;
    }
    if (this.i < this.content.length && !this.checkClose()) {
      this.start = this.i;
      this.state = this.attrName;
    }
  } else if (!this.checkClose('onTagName')) {
    this.i++;
  }
};

/**
 * @description 属性名状态
 * @private
 */
Lexer.prototype.attrName = function () {
  var c = this.content[this.i];
  if (blankChar[c] || c === '=') {
    // 解析到属性名
    this.handler.onAttrName(this.content.substring(this.start, this.i));
    var needVal = c === '=';
    var len = this.content.length;
    while (++this.i < len) {
      c = this.content[this.i];
      if (!blankChar[c]) {
        if (this.checkClose()) return;
        if (needVal) {
          // 等号后遇到第一个非空字符
          this.start = this.i;
          this.state = this.attrVal;
          return;
        }
        if (this.content[this.i] === '=') {
          needVal = true;
        } else {
          this.start = this.i;
          this.state = this.attrName;
          return;
        }
      }
    }
  } else if (!this.checkClose('onAttrName')) {
    this.i++;
  }
};

/**
 * @description 属性值状态
 * @private
 */
Lexer.prototype.attrVal = function () {
  var c = this.content[this.i];
  var len = this.content.length;
  if (c === '"' || c === "'") {
    // 有冒号的属性
    this.start = ++this.i;
    this.i = this.content.indexOf(c, this.i);
    if (this.i === -1) return;
    this.handler.onAttrVal(this.content.substring(this.start, this.i));
  } else {
    // 没有冒号的属性
    for (; this.i < len; this.i++) {
      if (blankChar[this.content[this.i]]) {
        this.handler.onAttrVal(this.content.substring(this.start, this.i));
        break;
      } else if (this.checkClose('onAttrVal')) return;
    }
  }
  while (blankChar[this.content[++this.i]]) {
    ;
  }
  if (this.i < len && !this.checkClose()) {
    this.start = this.i;
    this.state = this.attrName;
  }
};

/**
 * @description 结束标签状态
 * @returns {String} 结束的标签名
 * @private
 */
Lexer.prototype.endTag = function () {
  var c = this.content[this.i];
  if (blankChar[c] || c === '>' || c === '/') {
    this.handler.onCloseTag(this.content.substring(this.start, this.i));
    if (c !== '>') {
      this.i = this.content.indexOf('>', this.i);
      if (this.i === -1) return;
    }
    this.start = ++this.i;
    this.state = this.text;
  } else {
    this.i++;
  }
};
module.exports = Parser;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 32:
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ 33);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 33:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 37:
/*!***************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/store/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 38));
var _tools = __webpack_require__(/*! @/tools/tools */ 39);
var _siteinfo = __webpack_require__(/*! @/tools/siteinfo.js */ 40);
var _userInfo = _interopRequireDefault(__webpack_require__(/*! ./user-info */ 41));
// 站点域名

///原始//

var lifeData = {};

// 尝试获取本地是否存在lifeData变量，第一次启动时不存在
try {
  lifeData = uni.getStorageSync('lifeData');
} catch (e) {}

// 标记需要永久存储的变量，在每次启动时取出，在state中的变量名
var saveStateKeys = ['vuex_user'];

// 保存变量到本地存储
var saveLifeData = function saveLifeData(key, value) {
  // 判断变量是否在存储数组中
  if (saveStateKeys.indexOf(key) != -1) {
    // 获取本地存储的lifeData对象，将变量添加到对象中
    var tmpLifeData = uni.getStorageSync('lifeData');
    // 第一次启动时不存在，则放一个空对象
    tmpLifeData = tmpLifeData ? tmpLifeData : {}, tmpLifeData[key] = value;
    // 将变量再次放回本地存储中
    uni.setStorageSync('lifeData', tmpLifeData);
  }
};
////

_vue.default.use(_vuex.default);
var store = new _vuex.default.Store({
  modules: {
    userInfo: _userInfo.default
  },
  state: {
    appStaticPath: '',
    // 设置程序里使用的静态图片路径 (永远不换的图片)
    configInfo: {},
    // 全局的设置数据
    MenuList: [],
    // tab-bar 的数据
    isiPhoneX: false,
    // 是否iphonx 
    homeTemplateIdList: [],
    // 首页的模板消息id字符串 数组
    homeTemplateIdSettingFlag: true,
    // 设置过 允许并且 不再提示
    globalMainSwitch: false,
    // 小程序设置里 允许发送发送模板消息的 设置
    defaultHomeToastModalStatus: true,
    // 默认首页 弹出 确认 权限的 模态框
    isUserCloneFlag: false,
    // 是否是 用户 手动关闭的
    token: '',
    // 全局的token
    refreshCurrentPage: false,
    // 登录返回后重新刷新页面
    backIconTop: 26,
    // 详情页返回上一页的左上角图标距离顶部的位置

    // 如果上面从本地获取的lifeData对象下有对应的属性，就赋值给state中对应的变量
    // 加上vuex_前缀，是防止变量名冲突，也让人一目了然
    vuex_user: lifeData.vuex_user ? lifeData.vuex_user : {
      name: '图鸟'
    },
    // 如果vuex_version无需保存到本地永久存储，无需lifeData.vuex_version方式
    // app版本
    vuex_version: "1.0.0",
    // 是否使用自定义导航栏
    vuex_custom_nav_bar: true,
    // 状态栏高度
    vuex_status_bar_height: 0,
    // 自定义导航栏的高度
    vuex_custom_bar_height: 0
  },
  mutations: {
    $tStore: function $tStore(state, payload) {
      // 判断是否多层调用，state中为对象存在的情况，例如user.info.score = 1
      var nameArr = payload.name.split('.');
      var saveKey = '';
      var len = nameArr.length;
      if (len >= 2) {
        var obj = state[nameArr[0]];
        for (var i = 1; i < len - 1; i++) {
          obj = obj[nameArr[i]];
        }
        obj[nameArr[len - 1]] = payload.value;
        saveKey = nameArr[0];
      } else {
        // 单层级变量
        state[payload.name] = payload.value;
        saveKey = payload.name;
      }

      // 保存变量到本地中
      saveLifeData(saveKey, state[saveKey]);
    },
    // 赋值 给token 值
    setToken: function setToken(store, tokenStr) {
      store.token = tokenStr;
    },
    // 设置程序里使用的静态图片路径 (永远不换的图片)
    setAppStaticPath: function setAppStaticPath(store) {
      store.appStaticPath = "".concat(_siteinfo.host, "/wx-image");
    },
    // 赋值 全局的设置数据
    setConfigInfo: function setConfigInfo(store, configInfo) {
      store.configInfo = configInfo;
    },
    // 赋值 tab-bar 的数据
    setMenuList: function setMenuList(store, arg) {
      store.MenuList = arg;
    },
    // 赋值 是否iphonx 
    setIsiPhoneX: function setIsiPhoneX(store, bool) {
      store.isiPhoneX = bool;
    },
    // 设置发送优惠券模板id 数组
    setHomeTemplateIdList: function setHomeTemplateIdList(store, list) {
      store.homeTemplateIdList = list;
    },
    // 设置首页模板消息id 是否被永久 允许了
    setHomeTemplateIdSettingFlag: function setHomeTemplateIdSettingFlag(store, bool) {
      store.homeTemplateIdSettingFlag = bool;
    },
    // 赋值 小程序设置里 允许发送发送模板消息的 设置
    setGlobalMainSwitch: function setGlobalMainSwitch(store, bool) {
      store.globalMainSwitch = bool;
    },
    // 赋值 首页弹框状态
    setDefaultHomeToastModalStatus: function setDefaultHomeToastModalStatus(store, bool) {
      store.defaultHomeToastModalStatus = bool;
    },
    // 赋值 是否是用户手动关闭的状态
    setIsUserCloneFlag: function setIsUserCloneFlag(store, bool) {
      store.isUserCloneFlag = bool;
    },
    // 赋值当前页面是否需要刷新
    setRefreshCurrentPage: function setRefreshCurrentPage(store, bool) {
      store.refreshCurrentPage = bool;
    },
    // 赋值 详情页返回上一页的左上角图标距离顶部的距离
    setBackIconTop: function setBackIconTop(store, height) {
      store.backIconTop = height;
    },
    // 赋值 平台的购买记录数据
    setBuyHistoryList: function setBuyHistoryList(store, list) {
      store.buyHistoryList = list;
    }
  },
  actions: {},
  getters: {
    /* 
    	返回是否 审核状态
    	true 在审核
    	false 不审核
    */
    miniProgrameCheck: function miniProgrameCheck(state) {
      return state.configInfo.mini_program_check == 1;
    },
    /*
    	@description 是否开启了会员功能
    	@return <Boolean>
    		true 表示开启了vip功能
    		false 表示关闭了vip功能
     */
    isOpenVipFunc: function isOpenVipFunc(state) {
      return state.configInfo.user_vip_card == 1 ? true : false;
    },
    /* 
    	
    	@description 是否打开 全栈搜索功能
    	@return <Boolean>
    		true 表示开启了全栈搜索功能
    		false 表示关闭了全栈搜索功能
    */
    isOpenHomeSearchFunc: function isOpenHomeSearchFunc(state) {
      return (0, _tools.assertObject)(state.configInfo).search_is_show == 1 ? true : false;
    }
  }
});
var _default = store;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 38:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 39:
/*!***************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/tools/tools.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Object2QueryString = Object2QueryString;
exports.addSpecFilterItemActAttrFn = addSpecFilterItemActAttrFn;
exports.assertArray = assertArray;
exports.assertNumber = assertNumber;
exports.assertObject = assertObject;
exports.assertString = assertString;
exports.bigDiv = bigDiv;
exports.bigMinus = bigMinus;
exports.bigPlus = bigPlus;
exports.bigTimes = bigTimes;
exports.calcEndTime = calcEndTime;
exports.calcOverTime = calcOverTime;
exports.checkAvatarPath = checkAvatarPath;
exports.checkIsValid = checkIsValid;
exports.checkTelReg = void 0;
exports.checkTypeFn = checkTypeFn;
exports.cloneFn = cloneFn;
exports.createHoursArr = createHoursArr;
exports.debounce = debounce;
exports.en2ch = en2ch;
exports.getNotReasonObj = getNotReasonObj;
exports.getVersionFn = getVersionFn;
exports.goodsDetailWidthFn = goodsDetailWidthFn;
exports.num2zeroStr = num2zeroStr;
exports.timeStamp2textFn = timeStamp2textFn;
exports.timeStamp2timeText = timeStamp2timeText;
exports.timeStr2Arr = timeStr2Arr;
exports.timeStr2timeObj = timeStr2timeObj;
exports.toDayStr = void 0;
exports.toDoubleNumFn = toDoubleNumFn;
exports.tomorrowStr = void 0;
exports.transNumFn = transNumFn;
exports.url2navigateToUrlFn = url2navigateToUrlFn;
exports.url2temPath = url2temPath;
exports.validateFn = void 0;
var _siteinfo = __webpack_require__(/*! ./siteinfo.js */ 40);
// 检测类型
function checkTypeFn(item) {
  return Object.prototype.toString.call(item).slice(8, -1);
}

// 数据转数字
function transNumFn(item) {
  if (item) {
    var type = checkTypeFn(item);
    if (type == 'Number' || type == 'BigInt') {
      return item;
    } else if (type == 'String') {
      return transNumFn(item - 0);
    } else {
      return 1;
    }
  } else {
    return 0;
  }
}

// 断言 必须是对象
function assertObject(item) {
  if (checkTypeFn(item) == 'Object' && Object.keys(item).length > 0) {
    return item;
  }
  return {};
}
// 断言 必须是数组
function assertArray(item) {
  if (checkTypeFn(item) == 'Array' && item.length > 0) {
    return item;
  }
  return [];
}
// 断言 必须是字符串
function assertString(item) {
  if (checkTypeFn(item) == 'String' && item.length > 0) {
    return item;
  }
  return '';
}
// 断言 必须是数字
function assertNumber(item) {
  if (checkTypeFn(item) == 'Number' && item > 0) {
    return item;
  }
  return 0;
}
function bigPlus(a, b) {
  //a+b
  return Number(new bigJs(a).plus(b).toFixed(9));
}
function bigMinus(a, b) {
  //a-b
  return Number(new bigJs(a).minus(b).toFixed(9));
}
function bigTimes(a, b) {
  //a*b
  return Number(new bigJs(a).times(b).toFixed(9));
}
function bigDiv(a, b) {
  //a/b
  return Number(new bigJs(a).div(b).toFixed(9));
}

/*
	@description 获取保留两位小数的字符串数字
	@return <String> 带小数点的字符串数字
*/
function toDoubleNumFn(item) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var pow = Math.pow(10, n),
    num = bigTimes(transNumFn(item), pow),
    flag = num < 0 ? '-' : '+',
    abs = Math.abs(num),
    floor = Math.floor(abs) / pow,
    result = "".concat(flag).concat(floor) - 0;
  return result.toFixed(n);
}

// 深度克隆一份对象
function cloneFn(item) {
  return JSON.parse(JSON.stringify(item));
}

// 补零
function num2zeroStr(item) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var str = '';
  for (var i = 0; i < n + 1; i++) {
    str += 0;
  }
  return "".concat(str).concat(transNumFn(item)).slice(-n);
}

// 把对象转查询字符串格式
function Object2QueryString(object) {
  object = assertObject(object);
  var queryStr = '';
  for (var k in object) {
    queryStr += "".concat(k, "=").concat(object[k], "&");
  }
  return queryStr.substring(0, queryStr.length - 1);
}

/* 
	版本字符串转纯数字
	传入必须是字符串 返回数字
*/
function getVersionFn(str) {
  str = "".concat(str);
  var version = str.toLocaleUpperCase().replace(/V/ig, '').replace(/\./ig, '');
  var rr = version.split('');
  var nd = rr.findIndex(function (i) {
    return i > 0;
  });
  return "0000".concat(version).slice(-(rr.length - nd)) - 0;
}

// 防抖
function debounce(fn, wait) {
  var timer;
  return function () {
    for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
      arg[_key] = arguments[_key];
    }
    timer && clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(void 0, arg);
    }, wait);
  };
}

// ↑↑↑↑↑↑↑↑ 通用工具方法

// 生成小时数据
function createHoursArr(to, off, runLen) {
  var toHoursBefore = transNumFn(to.split(':')[0]);
  var toHoursAfter = transNumFn(to.split(':')[1]);
  var offHoursBefore = transNumFn(off.split(':')[0]);
  var offHoursAfter = transNumFn(off.split(':')[1]);
  var arr = [];
  for (var i = toHoursBefore; i < offHoursBefore; i += runLen) {
    var lastOffHoursBefore = i + runLen >= offHoursBefore ? offHoursBefore : i + runLen;
    var lastOffHoursAfter = i + runLen >= offHoursBefore ? offHoursAfter : toHoursAfter;
    var textStr = "".concat(num2zeroStr(i), ":").concat(num2zeroStr(toHoursAfter), "~").concat(num2zeroStr(lastOffHoursBefore), ":").concat(num2zeroStr(lastOffHoursAfter));
    arr.push({
      textStr: textStr,
      toHoursBefore: i,
      offHoursBefore: lastOffHoursBefore
    });
  }
  return arr;
}

// 固定的字符串常量
var toDayStr = '今天';
exports.toDayStr = toDayStr;
var tomorrowStr = '明天';

// 小程序获取的字母地址转换 文字描述的地址信息
exports.tomorrowStr = tomorrowStr;
function en2ch(address) {
  var province = [{
    name: "beijing",
    cities: ["xicheng", "dongcheng", "chongwen", "xuanwu", "chaoyang", "haidian", "fengtai", "shijingshan", "mentougou", "fangshan", "tongzhou", "shunyi", "daxing", "changping", "pinggu", "huairou", "miyun", "yanqing"]
  }, {
    name: "tianjin",
    cities: ["qingyang", "hedong", "hexi", "nankai", "hebei", "hongqiao", "tanggu", "hangu", "dagang", "dongli", "xiqing", "beichen", "jinnan", "wuqing", "baodi", "jinghai", "ninghe", "jixian", "kaifaqu"]
  }, {
    name: "hebei",
    cities: ["shijiazhuang", "qinhuangdao", "langfang", "baoding", "handan", "tangshan", "xingtai", "hengshui", "zhangjiakou", "chengde", "cangzhou", "hengshui"]
  }, {
    name: "shanxi",
    cities: ["taiyuan", "datong", "changzhi", "jinzhong", "yangquan", "shuozhou", "yuncheng", "linfen"]
  }, {
    name: "namenggu",
    cities: ["huhehaote", "chifeng", "tongliao", "xilinguole", "xingan"]
  }, {
    name: "liaoning",
    cities: ["dalian", "shenyang", "anshan", "fushun", "yingkou", "jinzhou", "dandong", "chaoyang", "liaoyang", "fuxin", "tieling", "panjin", "benxi", "huludao"]
  }, {
    name: "jilin",
    cities: ["changchun", "jilin", "siping", "liaoyuan", "tonghua", "yanji", "baicheng", "liaoyuan", "songyuan", "linjiang", "huichun"]
  }, {
    name: "heilongjiang",
    cities: ["haerbin", "qiqihaer", "daqing", "mudanjiang", "hegang", "jiamusi", "suihua"]
  }, {
    name: "shanghai",
    cities: ["pudong", "yangpu", "xuhui", "jingan", "luwan", "huangpu", "putuo", "zhabei", "hongkou", "changning", "baoshan", "minxing", "jiading", "jinshan", "songjiang", "qingpu", "chongming", "fengxian", "nanhui"]
  }, {
    name: "jiangsu",
    cities: ["nanjing", "suzhou", "wuxi", "changzhou", "yangzhou", "xuzhou", "nantong", "zhenjiang", "taizhou", "huaian", "lianyungang", "suqian", "yancheng", "huaiyin", "muyang", "zhangjiagang"]
  }, {
    name: "zhejiang",
    cities: ["hangzhou", "jinhua", "ningbo", "wenzhou", "jiaxing", "shaoxing", "lishui", "huzhou", "taizhou", "zhoushan", "quzhou"]
  }, {
    name: "anhui",
    cities: ["hefei", "maanshan", "bangbu", "huangshan", "wuhu", "huainan", "tongling", "fuyang", "xuancheng", "anqing"]
  }, {
    name: "fujian",
    cities: ["fuzhou", "xiamen", "quanzhou", "zhangzhou", "nanping", "longyan", "putian", "sanming", "ningde"]
  }, {
    name: "jiangxi",
    cities: ["nanchang", "jingdezhen", "shangrao", "pingxiang", "jiujiang", "jian", "yichun", "yingtan", "xinyu", "ganzhou"]
  }, {
    name: "shandong",
    cities: ["qingdao", "jinan", "zibo", "yantai", "taian", "linyi", "rizhao", "dezhou", "weihai", "dongying", "heze", "jining", "weifang", "zaozhuang", "liaocheng"]
  }, {
    name: "henan",
    cities: ["zhengzhou", "luoyang", "kaifeng", "pingdingshan", "puyang", "anyang", "xuchang", "nanyang", "xinyang", "zhoukou", "xinxiang", "jiaozuo", "sanmenxia", "shangqiu"]
  }, {
    name: "hubei",
    cities: ["wuhan", "xiangfan", "xiaogan", "shiyan", "jingzhou", "huangshi", "yichang", "huanggang", "enshi", "ezhou", "jianghan", "suizao", "jingsha", "xianning"]
  }, {
    name: "hunan",
    cities: ["changsha", "xiangtan", "yueyang", "zhuzhou", "huaihua", "yongzhou", "yiyang", "zhangjiajie", "changde", "hengyang", "xiangxi", "shaoyang", "loudi", "chenzhou"]
  }, {
    name: "guangdong",
    cities: ["guangzhou", "shenzhen", "dongwan", "foshan", "zhuhai", "shantou", "shaoguan", "jiangmen", "meizhou", "jieyang", "zhongshan", "heyuan", "huizhou", "maoming", "zhanjiang", "yangjiang", "chaozhou", "yunfu", "shanwei", "chaoyang", "zhaoqing", "shunde", "qingyuan"]
  }, {
    name: "guangxi",
    cities: ["nanning", "guilin", "liuzhou", "wuzhou", "laibin", "guigang", "yulin", "hezhou"]
  }, {
    name: "hainan",
    cities: ["haikou", "sanya"]
  }, {
    name: "zhongqing",
    cities: ["yuzhong", "dadukou", "jiangbei", "shapingba", "jiulongpo", "nanan", "beibei", "wansheng", "shuangqiao", "yubei", "banan", "wanzhou", "fuling", "qianjiang", "changshou"]
  }, {
    name: "sichuan",
    cities: ["chengdou", "dazhou", "nanchong", "leshan", "mianyang", "deyang", "najiang", "suining", "yibin", "bazhong", "zigong", "kangding", "panzhihua"]
  }, {
    name: "guizhou",
    cities: ["guiyang", "zunyi", "anshun", "qianxinan", "douyun"]
  }, {
    name: "yunnan",
    cities: ["kunming", "lijiang", "zhaotong", "yuxi", "lincang", "wenshan", "honghe", "chuxiong", "dali"]
  }, {
    name: "xicang",
    cities: ["lasa", "linzhi", "rikaze", "changdou"]
  }, {
    name: "shanxi",
    cities: ["xian", "xianyang", "yanan", "hanzhong", "yulin", "shangnan", "lueyang", "yijun", "linyou", "baihe"]
  }, {
    name: "gansu",
    cities: ["lanzhou", "jinchang", "tianshui", "wuwei", "zhangye", "pingliang", "jiuquan"]
  }, {
    name: "qinghai",
    cities: ["huangnan", "hainan", "xining", "haidong", "haixi", "haibei", "guoluo", "yushu"]
  }, {
    name: "ningxia",
    cities: ["yinchuan", "wuzhong"]
  }, {
    name: "xinjiang",
    cities: ["wulumuqi", "hami", "kashi", "bayinguoleng", "changji", "yili", "aletai", "kelamayi", "boertala"]
  }, {
    name: "xianggang",
    cities: ["zhongxiqu", "wanziqu", "dongqu", "nanqu", "jiulong-youjianwangqu", "jiulong-shenshuibuqu", "jiulong-jiulongchengqu", "jiulong-huangdaxianqu", "jiulong-guantangqu", "xinjie-beiqu", "xinjie-dapuqu", "xinjie-shatianqu", "xinjie-xigongqu", "xinjie-quanwanqu", "xinjie-tunmenqu", "xinjie-yuanlangqu", "xinjie-kuiqingqu", "xinjie-lidaoqu"]
  }, {
    name: "aomen",
    cities: ["huadimatangqu", "shenganduonitangqu", "datangqu", "wangdetangqu", "fengshuntangqu", "jiamotangqu", "shengfangjigetangqu", "ludangcheng"]
  }];
  var province2 = [{
    name: "北京",
    cities: ["西城", "东城", "崇文", "宣武", "朝阳", "海淀", "丰台", "石景山", "门头沟", "房山", "通州", "顺义", "大兴", "昌平", "平谷", "怀柔", "密云", "延庆"]
  }, {
    name: "天津",
    cities: ["青羊", "河东", "河西", "南开", "河北", "红桥", "塘沽", "汉沽", "大港", "东丽", "西青", "北辰", "津南", "武清", "宝坻", "静海", "宁河", "蓟县", "开发区"]
  }, {
    name: "河北",
    cities: ["石家庄", "秦皇岛", "廊坊", "保定", "邯郸", "唐山", "邢台", "衡水", "张家口", "承德", "沧州", "衡水"]
  }, {
    name: "山西",
    cities: ["太原", "大同", "长治", "晋中", "阳泉", "朔州", "运城", "临汾"]
  }, {
    name: "内蒙古",
    cities: ["呼和浩特", "赤峰", "通辽", "锡林郭勒", "兴安"]
  }, {
    name: "辽宁",
    cities: ["大连", "沈阳", "鞍山", "抚顺", "营口", "锦州", "丹东", "朝阳", "辽阳", "阜新", "铁岭", "盘锦", "本溪", "葫芦岛"]
  }, {
    name: "吉林",
    cities: ["长春", "吉林", "四平", "辽源", "通化", "延吉", "白城", "辽源", "松原", "临江", "珲春"]
  }, {
    name: "黑龙江",
    cities: ["哈尔滨", "齐齐哈尔", "大庆", "牡丹江", "鹤岗", "佳木斯", "绥化"]
  }, {
    name: "上海",
    cities: ["浦东", "杨浦", "徐汇", "静安", "卢湾", "黄浦", "普陀", "闸北", "虹口", "长宁", "宝山", "闵行", "嘉定", "金山", "松江", "青浦", "崇明", "奉贤", "南汇"]
  }, {
    name: "江苏",
    cities: ["南京", "苏州", "无锡", "常州", "扬州", "徐州", "南通", "镇江", "泰州", "淮安", "连云港", "宿迁", "盐城", "淮阴", "沐阳", "张家港"]
  }, {
    name: "浙江",
    cities: ["杭州", "金华", "宁波", "温州", "嘉兴", "绍兴", "丽水", "湖州", "台州", "舟山", "衢州"]
  }, {
    name: "安徽",
    cities: ["合肥", "马鞍山", "蚌埠", "黄山", "芜湖", "淮南", "铜陵", "阜阳", "宣城", "安庆"]
  }, {
    name: "福建",
    cities: ["福州", "厦门", "泉州", "漳州", "南平", "龙岩", "莆田", "三明", "宁德"]
  }, {
    name: "江西",
    cities: ["南昌", "景德镇", "上饶", "萍乡", "九江", "吉安", "宜春", "鹰潭", "新余", "赣州"]
  }, {
    name: "山东",
    cities: ["青岛", "济南", "淄博", "烟台", "泰安", "临沂", "日照", "德州", "威海", "东营", "荷泽", "济宁", "潍坊", "枣庄", "聊城"]
  }, {
    name: "河南",
    cities: ["郑州", "洛阳", "开封", "平顶山", "濮阳", "安阳", "许昌", "南阳", "信阳", "周口", "新乡", "焦作", "三门峡", "商丘"]
  }, {
    name: "湖北",
    cities: ["武汉", "襄樊", "孝感", "十堰", "荆州", "黄石", "宜昌", "黄冈", "恩施", "鄂州", "江汉", "随枣", "荆沙", "咸宁"]
  }, {
    name: "湖南",
    cities: ["长沙", "湘潭", "岳阳", "株洲", "怀化", "永州", "益阳", "张家界", "常德", "衡阳", "湘西", "邵阳", "娄底", "郴州"]
  }, {
    name: "广东",
    cities: ["广州", "深圳", "东莞", "佛山", "珠海", "汕头", "韶关", "江门", "梅州", "揭阳", "中山", "河源", "惠州", "茂名", "湛江", "阳江", "潮州", "云浮", "汕尾", "潮阳", "肇庆", "顺德", "清远"]
  }, {
    name: "广西",
    cities: ["南宁", "桂林", "柳州", "梧州", "来宾", "贵港", "玉林", "贺州"]
  }, {
    name: "海南",
    cities: ["海口", "三亚"]
  }, {
    name: "重庆",
    cities: ["渝中", "大渡口", "江北", "沙坪坝", "九龙坡", "南岸", "北碚", "万盛", "双桥", "渝北", "巴南", "万州", "涪陵", "黔江", "长寿"]
  }, {
    name: "四川",
    cities: ["成都", "达州", "南充", "乐山", "绵阳", "德阳", "内江", "遂宁", "宜宾", "巴中", "自贡", "康定", "攀枝花"]
  }, {
    name: "贵州",
    cities: ["贵阳", "遵义", "安顺", "黔西南", "都匀"]
  }, {
    name: "云南",
    cities: ["昆明", "丽江", "昭通", "玉溪", "临沧", "文山", "红河", "楚雄", "大理"]
  }, {
    name: "西藏",
    cities: ["拉萨", "林芝", "日喀则", "昌都"]
  }, {
    name: "陕西",
    cities: ["西安", "咸阳", "延安", "汉中", "榆林", "商南", "略阳", "宜君", "麟游", "白河"]
  }, {
    name: "甘肃",
    cities: ["兰州", "金昌", "天水", "武威", "张掖", "平凉", "酒泉"]
  }, {
    name: "青海",
    cities: ["黄南", "海南", "西宁", "海东", "海西", "海北", "果洛", "玉树"]
  }, {
    name: "宁夏",
    cities: ["银川", "吴忠"]
  }, {
    name: "新疆",
    cities: ["乌鲁木齐", "哈密", "喀什", "巴音郭楞", "昌吉", "伊犁", "阿勒泰", "克拉玛依", "博尔塔拉"]
  }, {
    name: "香港",
    cities: ["中西区", "湾仔区", "东区", "南区", "九龙-油尖旺区", "九龙-深水埗区", "九龙-九龙城区", "九龙-黄大仙区", "九龙-观塘区", "新界-北区", "新界-大埔区", "新界-沙田区", "新界-西贡区", "新界-荃湾区", "新界-屯门区", "新界-元朗区", "新界-葵青区", "新界-离岛区"]
  }, {
    name: "澳门",
    cities: ["花地玛堂区", "圣安多尼堂区", "大堂区", "望德堂区", "风顺堂区", "嘉模堂区", "圣方济各堂区", "路氹城"]
  }];
  var getChina = function getChina(strs) {
    var str = strs.toLowerCase();
    for (var i = 0; i < province.length; i++) {
      if (str == province[i].name) {
        return province2[i].name;
        // break;
      }

      for (var u = 0; u < province[i].cities.length; u++) {
        if (str == province[i].cities[u]) {
          return province2[i].cities[u];
          // break;
        }
      }
    }

    return '未知';
  };
  return getChina(address);
}
// 电话号码正则(手机号正则)
var checkTelReg = /^[0-9]{11}$/;

// 普通路径转换成navigateToFn 函数可以调用的 (在路径前加 / )
exports.checkTelReg = checkTelReg;
function url2navigateToUrlFn(url) {
  return url[0] == '/' ? url : "/".concat(url);
}

// 给规格项添加默认选中的 属性
function addSpecFilterItemActAttrFn(specFilterItem) {
  var cloneSpecFilterItem = cloneFn(specFilterItem);
  cloneSpecFilterItem.forEach(function (item) {
    item.item.forEach(function (i, k) {
      if (k == 0) {
        i.active = true;
      } else {
        i.active = false;
      }
    });
  });
  return cloneSpecFilterItem;
}

/*
	@description
		检测头像图片路径是否正常 如果不带域名加上 siteInfo 里的host return 出去
	@param
		avatar <String>
	@return <String>
		返回正常的用户头像地址
*/
function checkAvatarPath(avatar) {
  avatar = assertString(avatar);
  var result = avatar.includes('http://') || avatar.includes('https://');
  if (result) {
    return avatar;
  } else {
    return "".concat(_siteinfo.host).concat(avatar);
  }
}

// 网络地址转临时路径
function url2temPath(url) {
  return new Promise(function (resFn, rejFn) {
    uni.getImageInfo({
      src: url,
      success: function success(res) {
        resFn({
          result: res.path,
          type: 'success',
          msg: '成功',
          url: url
        });
      },
      fail: function fail() {
        rejFn({
          result: '获取图片信息错误',
          msg: '获取图片信息错误',
          type: 'error',
          url: url
        });
      }
    });
  });
}

/* 
	传入 js格式(毫秒为单位)的时间戳 换算成 xx天 小于1天 返回 xx小时
*/
function calcOverTime(timeStamp) {
  var day = Math.floor(timeStamp / 86400000);
  if (day > 0) {
    return "".concat(day, "\u5929");
  }
  var hours = Math.floor(timeStamp / 1000 / 60 / 60);
  return "".concat(hours, "\u5C0F\u65F6");
}

// 商品详情 里富文本字符串 图片 百分比显示
function goodsDetailWidthFn(str) {
  if (typeof str != 'string') {
    return '';
  }
  str = str.replace(/src="\/uploads/ig, "src=\"".concat(_siteinfo.host, "/uploads"));

  // 把行间 style="xxx替换  data-style="xxx
  var REGaddDataHead_style = /style="/ig;
  var str0 = str.replace(REGaddDataHead_style, 'data-style="');

  // 把行间 width="100" 替换  data-width="100" 
  var REGaddDataHead = /width="/ig;
  var str2 = str0.replace(REGaddDataHead, 'data-width="');

  // 把style 里的  width: 100px  替换  width: 100%
  var reg = /img src/ig;
  var str3 = str2.replace(reg, 'img style="width:100%;display:block;" src');
  return str3;
}

/* 
	obj.draw_time,
	obj.number_type,
	obj.number,
	计算结束时间
 */
function calcEndTime(obj) {
  var timeStamp;
  if (obj.number_type == 1) {
    //分钟
    timeStamp = (obj.draw_time - 0) * 1000 + (obj.number - 0) * 60 * 1000;
  } else if (obj.number_type == 2) {
    //小时
    timeStamp = (obj.draw_time - 0) * 1000 + (obj.number - 0) * 3600 * 1000;
  } else if (obj.number_type == 3) {
    //天数
    timeStamp = (obj.draw_time - 0) * 1000 + (obj.number - 0) * 86400 * 1000;
  } else if (obj.number_type == 4) {
    //月数
    timeStamp = (obj.draw_time - 0) * 1000 + (obj.number - 0) * 2592000 * 1000;
  } else if (obj.number_type == 5) {
    //年数
    timeStamp = (obj.draw_time - 0) * 1000 + (obj.number - 0) * 31536000 * 1000;
  } else {
    console.log('参数错误 致命错误');
    return;
  }
  timeStamp = Math.floor(timeStamp / 1000);
  return {
    timeStamp: timeStamp
  };
}

/*
	判断是否过期 返回true / false
	在有效期内 true
	不在有效期内 false

	obj.time_bar
	obj.use_end_time
	obj.use_start_time

	obj.draw_time,
	obj.number_type,
	obj.number,
*/
function checkIsValid(obj) {
  /*
   	1--领取后算时间  2--平台限制
  */
  var curtData = Math.floor(+new Date() / 1000);

  // 2--平台限制
  if (obj.time_bar == 2) {
    /*
    		结束
    		obj.use_end_time
     		obj.use_start_time
     		开始
    		 */
    if (obj.use_start_time < curtData && obj.use_end_time > curtData) {
      return true;
    } else {
      return false;
    }

    // 1--领取后算时间
  } else {
    var res = calcEndTime({
      draw_time: obj.draw_time,
      number_type: obj.number_type,
      number: obj.number
    });
    if (obj.draw_time < curtData && res.timeStamp > curtData) {
      return true;
    } else {
      return false;
    }
  }
}

// 时间字符串转数组
function timeStr2Arr(str) {
  if (!str) {
    return false;
  }
  function fn2(n) {
    var str = n + '';
    return str.padStart(2, '0');
  }
  var date = new Date(),
    strHours = str.split(':')[0] - 0,
    strMinutes = str.split(':')[1] - 1,
    newHours = date.getHours(),
    newMinutes = date.getMinutes(),
    newT = newHours * 60 + newMinutes,
    endT = strHours * 60 + strMinutes;
  var resHoure = Math.floor((endT - newT) / 60);
  var resMinutes = (endT - newT) % 60;
  var resSeconds = 60 - date.getSeconds();
  var resMilliseconds = 1000 - date.getMilliseconds();
  var resArr;
  if (endT + 1 - newT > 0) {
    resArr = [fn2(resHoure), fn2(resMinutes), fn2(resSeconds), resMilliseconds];
  } else {
    resArr = [fn2(0), fn2(0), fn2(0), fn2(0)];
  }
  return resArr;
}

/* 
	@description
		传时间戳返回时间描述文字
			传
				1609161226410
			返回
				'2020年12月28日21时13分46秒'
		@param
			timeStamp <Number> 时间戳数字 单位是毫秒
		@return
			文字描述的时间字符串
*/
function timeStamp2textFn(timeStamp) {
  var date = new Date(timeStamp);
  return "".concat(date.getFullYear(), "\u5E74").concat(date.getMonth() + 1, "\u6708").concat(date.getDate(), "\u65E5").concat(date.getHours(), "\u65F6").concat(date.getMinutes(), "\u5206").concat(date.getSeconds(), "\u79D2");
}

/* 
	@description
		传时间数据库的时间字符串 返回 年月日
			传
				2021-03-04 12:30:00
			返回
				{
					year: 2021,
					month:3,
					day:4,
					hours:12,
					minutes:30,
				}
				'2020年12月28日21时13分46秒'
		@param
			timeStamp <Number> 时间戳数字 单位是毫秒
		@return
			文字描述的时间字符串
*/
function timeStr2timeObj(str) {
  var strs = "".concat(str).replace(/\-/g, '/');
  var date = new Date(strs),
    year = date.getFullYear,
    month = num2zeroStr(date.getMonth() + 1),
    day = num2zeroStr(date.getDate()),
    hours = num2zeroStr(date.getHours()),
    minutes = num2zeroStr(date.getMinutes());
  return {
    year: year,
    month: month,
    day: day,
    hours: hours,
    minutes: minutes
  };
}

/*
	@description
		获取可以循环的数据结构,传入后台的not_reason字符串
		服务器反的数据格式
			not_reason1: "商品金额差**元可用__61.1",
			not_reason2: "没有符合条件的商品",
			not_reason3: "",
	@param
		str <String>
	@return <Object>

*/
function getNotReasonObj(str) {
  var arrSplit = assertString(str).split('__');
  if (arrSplit.length == 2) {
    var arr = assertString(arrSplit[0]).split('**');
    return [{
      redColor: false,
      text: arr[0]
    }, {
      redColor: true,
      text: arrSplit[1]
    }, {
      redColor: false,
      text: arr[1]
    }];
  }
  return [{
    redColor: false,
    text: arrSplit[0]
  }];
}

// 时间戳(js毫秒级) 转 时间文字描述 (目前只用在拼团首页 和 拼团详情)
function timeStamp2timeText(s) {
  var resStr = '';
  var tian = Math.floor(s / 86400000);
  if (tian) {
    resStr += "".concat(tian, "\u5929");
  }
  var shi = Math.floor(s / 3600000) % 24;
  if (shi) {
    var s1 = "000".concat(shi).slice(-2);
    resStr += "".concat(s1, "\u65F6");
  } else {
    if (resStr) {
      resStr += "00\u65F6";
    }
  }
  var fen = Math.floor(s / 60000) % 60;
  if (fen) {
    var _s = "000".concat(fen).slice(-2);
    resStr += "".concat(_s, "\u5206");
  }
  /* let miao =Math.floor(s/1000)%1000 ;
  if(miao){
  	let s1 = `000${fen}`.slice(-2);
  	resStr +=`${s1}秒`;
  } */
  return resStr;
}

// 

/*
	@description 判断固定格式字符串 (例如 名字 手机号等) 是否符合要求
		校验通过 返回 true
		校验失败 返回 页面提示信息
*/
var validateFn = {
  name: function name(title, str) {
    if (str.length > 0 && str.length <= 20) {
      return {
        validate: true
      };
    }
    return {
      validate: false,
      msg: "".concat(title, "\u957F\u5EA6\u662F1~20")
    };
  },
  tel: function tel(_tel) {
    if (checkTelReg.test(_tel)) {
      return {
        validate: true
      };
    }
    return {
      validate: false,
      msg: "\u8BF7\u68C0\u67E5\u624B\u673A\u53F7\u683C\u5F0F"
    };
  }
};
exports.validateFn = validateFn;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 395:
/*!*********************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/tuniao-ui/libs/utils/calendar.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
* @1900-2100区间内的公历、农历互转
* @charset UTF-8
* @github  https://github.com/jjonline/calendar.js
* @Author  Jea杨(JJonline@JJonline.Cn)
* @Time    2014-7-21
* @Time    2016-8-13 Fixed 2033hex、Attribution Annals
* @Time    2016-9-25 Fixed lunar LeapMonth Param Bug
* @Time    2017-7-24 Fixed use getTerm Func Param Error.use solar year,NOT lunar year
* @Version 1.0.3
* @公历转农历：calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
* @农历转公历：calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]
*/
/* eslint-disable */
var calendar = {
  /**
      * 农历1900-2100的润大小信息表
      * @Array Of Property
      * @return Hex
      */
  lunarInfo: [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
  // 1900-1909
  0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
  // 1910-1919
  0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
  // 1920-1929
  0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
  // 1930-1939
  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
  // 1940-1949
  0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,
  // 1950-1959
  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
  // 1960-1969
  0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,
  // 1970-1979
  0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
  // 1980-1989
  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0,
  // 1990-1999
  0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
  // 2000-2009
  0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
  // 2010-2019
  0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
  // 2020-2029
  0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
  // 2030-2039
  0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,
  // 2040-2049
  /** Add By JJonline@JJonline.Cn**/
  0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0,
  // 2050-2059
  0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,
  // 2060-2069
  0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,
  // 2070-2079
  0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,
  // 2080-2089
  0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252,
  // 2090-2099
  0x0d520],
  // 2100

  /**
      * 公历每个月份的天数普通表
      * @Array Of Property
      * @return Number
      */
  solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  /**
      * 天干地支之天干速查表
      * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
      * @return Cn string
      */
  Gan: ["\u7532", "\u4E59", "\u4E19", "\u4E01", "\u620A", "\u5DF1", "\u5E9A", "\u8F9B", "\u58EC", "\u7678"],
  /**
      * 天干地支之地支速查表
      * @Array Of Property
      * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
      * @return Cn string
      */
  Zhi: ["\u5B50", "\u4E11", "\u5BC5", "\u536F", "\u8FB0", "\u5DF3", "\u5348", "\u672A", "\u7533", "\u9149", "\u620C", "\u4EA5"],
  /**
      * 天干地支之地支速查表<=>生肖
      * @Array Of Property
      * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
      * @return Cn string
      */
  Animals: ["\u9F20", "\u725B", "\u864E", "\u5154", "\u9F99", "\u86C7", "\u9A6C", "\u7F8A", "\u7334", "\u9E21", "\u72D7", "\u732A"],
  /**
      * 24节气速查表
      * @Array Of Property
      * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
      * @return Cn string
      */
  solarTerm: ["\u5C0F\u5BD2", "\u5927\u5BD2", "\u7ACB\u6625", "\u96E8\u6C34", "\u60CA\u86F0", "\u6625\u5206", "\u6E05\u660E", "\u8C37\u96E8", "\u7ACB\u590F", "\u5C0F\u6EE1", "\u8292\u79CD", "\u590F\u81F3", "\u5C0F\u6691", "\u5927\u6691", "\u7ACB\u79CB", "\u5904\u6691", "\u767D\u9732", "\u79CB\u5206", "\u5BD2\u9732", "\u971C\u964D", "\u7ACB\u51AC", "\u5C0F\u96EA", "\u5927\u96EA", "\u51AC\u81F3"],
  /**
      * 1900-2100各年的24节气日期速查表
      * @Array Of Property
      * @return 0x string For splice
      */
  sTermInfo: ['9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e', '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722'],
  /**
      * 数字转中文速查表
      * @Array Of Property
      * @trans ['日','一','二','三','四','五','六','七','八','九','十']
      * @return Cn string
      */
  nStr1: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341"],
  /**
      * 日期转农历称呼速查表
      * @Array Of Property
      * @trans ['初','十','廿','卅']
      * @return Cn string
      */
  nStr2: ["\u521D", "\u5341", "\u5EFF", "\u5345"],
  /**
      * 月份转农历称呼速查表
      * @Array Of Property
      * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
      * @return Cn string
      */
  nStr3: ["\u6B63", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u51AC", "\u814A"],
  /**
      * 返回农历y年一整年的总天数
      * @param lunar Year
      * @return Number
      * @eg:var count = calendar.lYearDays(1987) ;//count=387
      */
  lYearDays: function lYearDays(y) {
    var i;
    var sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) {
      sum += this.lunarInfo[y - 1900] & i ? 1 : 0;
    }
    return sum + this.leapDays(y);
  },
  /**
      * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
      * @param lunar Year
      * @return Number (0-12)
      * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
      */
  leapMonth: function leapMonth(y) {
    // 闰字编码 \u95f0
    return this.lunarInfo[y - 1900] & 0xf;
  },
  /**
      * 返回农历y年闰月的天数 若该年没有闰月则返回0
      * @param lunar Year
      * @return Number (0、29、30)
      * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
      */
  leapDays: function leapDays(y) {
    if (this.leapMonth(y)) {
      return this.lunarInfo[y - 1900] & 0x10000 ? 30 : 29;
    }
    return 0;
  },
  /**
      * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
      * @param lunar Year
      * @return Number (-1、29、30)
      * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
      */
  monthDays: function monthDays(y, m) {
    if (m > 12 || m < 1) {
      return -1;
    } // 月份参数从1至12，参数错误返回-1
    return this.lunarInfo[y - 1900] & 0x10000 >> m ? 30 : 29;
  },
  /**
      * 返回公历(!)y年m月的天数
      * @param solar Year
      * @return Number (-1、28、29、30、31)
      * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
      */
  solarDays: function solarDays(y, m) {
    if (m > 12 || m < 1) {
      return -1;
    } // 若参数错误 返回-1
    var ms = m - 1;
    if (ms == 1) {
      // 2月份的闰平规律测算后确认返回28或29
      return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;
    } else {
      return this.solarMonth[ms];
    }
  },
  /**
     * 农历年份转换为干支纪年
     * @param  lYear 农历年的年份数
     * @return Cn string
     */
  toGanZhiYear: function toGanZhiYear(lYear) {
    var ganKey = (lYear - 3) % 10;
    var zhiKey = (lYear - 3) % 12;
    if (ganKey == 0) ganKey = 10; // 如果余数为0则为最后一个天干
    if (zhiKey == 0) zhiKey = 12; // 如果余数为0则为最后一个地支
    return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1];
  },
  /**
     * 公历月、日判断所属星座
     * @param  cMonth [description]
     * @param  cDay [description]
     * @return Cn string
     */
  toAstro: function toAstro(cMonth, cDay) {
    var s = "\u9B54\u7FAF\u6C34\u74F6\u53CC\u9C7C\u767D\u7F8A\u91D1\u725B\u53CC\u5B50\u5DE8\u87F9\u72EE\u5B50\u5904\u5973\u5929\u79E4\u5929\u874E\u5C04\u624B\u9B54\u7FAF";
    var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "\u5EA7"; // 座
  },

  /**
      * 传入offset偏移量返回干支
      * @param offset 相对甲子的偏移量
      * @return Cn string
      */
  toGanZhi: function toGanZhi(offset) {
    return this.Gan[offset % 10] + this.Zhi[offset % 12];
  },
  /**
      * 传入公历(!)y年获得该年第n个节气的公历日期
      * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
      * @return day Number
      * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
      */
  getTerm: function getTerm(y, n) {
    if (y < 1900 || y > 2100) {
      return -1;
    }
    if (n < 1 || n > 24) {
      return -1;
    }
    var _table = this.sTermInfo[y - 1900];
    var _info = [parseInt('0x' + _table.substr(0, 5)).toString(), parseInt('0x' + _table.substr(5, 5)).toString(), parseInt('0x' + _table.substr(10, 5)).toString(), parseInt('0x' + _table.substr(15, 5)).toString(), parseInt('0x' + _table.substr(20, 5)).toString(), parseInt('0x' + _table.substr(25, 5)).toString()];
    var _calday = [_info[0].substr(0, 1), _info[0].substr(1, 2), _info[0].substr(3, 1), _info[0].substr(4, 2), _info[1].substr(0, 1), _info[1].substr(1, 2), _info[1].substr(3, 1), _info[1].substr(4, 2), _info[2].substr(0, 1), _info[2].substr(1, 2), _info[2].substr(3, 1), _info[2].substr(4, 2), _info[3].substr(0, 1), _info[3].substr(1, 2), _info[3].substr(3, 1), _info[3].substr(4, 2), _info[4].substr(0, 1), _info[4].substr(1, 2), _info[4].substr(3, 1), _info[4].substr(4, 2), _info[5].substr(0, 1), _info[5].substr(1, 2), _info[5].substr(3, 1), _info[5].substr(4, 2)];
    return parseInt(_calday[n - 1]);
  },
  /**
      * 传入农历数字月份返回汉语通俗表示法
      * @param lunar month
      * @return Cn string
      * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
      */
  toChinaMonth: function toChinaMonth(m) {
    // 月 => \u6708
    if (m > 12 || m < 1) {
      return -1;
    } // 若参数错误 返回-1
    var s = this.nStr3[m - 1];
    s += "\u6708"; // 加上月字
    return s;
  },
  /**
      * 传入农历日期数字返回汉字表示法
      * @param lunar day
      * @return Cn string
      * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
      */
  toChinaDay: function toChinaDay(d) {
    // 日 => \u65e5
    var s;
    switch (d) {
      case 10:
        s = "\u521D\u5341";
        break;
      case 20:
        s = "\u4E8C\u5341";
        break;
        break;
      case 30:
        s = "\u4E09\u5341";
        break;
        break;
      default:
        s = this.nStr2[Math.floor(d / 10)];
        s += this.nStr1[d % 10];
    }
    return s;
  },
  /**
      * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
      * @param y year
      * @return Cn string
      * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
      */
  getAnimal: function getAnimal(y) {
    return this.Animals[(y - 4) % 12];
  },
  /**
      * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
      * @param y  solar year
      * @param m  solar month
      * @param d  solar day
      * @return JSON object
      * @eg:console.log(calendar.solar2lunar(1987,11,01));
      */
  solar2lunar: function solar2lunar(y, m, d) {
    // 参数区间1900.1.31~2100.12.31
    // 年份限定、上限
    if (y < 1900 || y > 2100) {
      return -1; // undefined转换为数字变为NaN
    }
    // 公历传参最下限
    if (y == 1900 && m == 1 && d < 31) {
      return -1;
    }
    // 未传参  获得当天
    if (!y) {
      var objDate = new Date();
    } else {
      var objDate = new Date(y, parseInt(m) - 1, d);
    }
    var i;
    var leap = 0;
    var temp = 0;
    // 修正ymd参数
    var y = objDate.getFullYear();
    var m = objDate.getMonth() + 1;
    var d = objDate.getDate();
    var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
    for (i = 1900; i < 2101 && offset > 0; i++) {
      temp = this.lYearDays(i);
      offset -= temp;
    }
    if (offset < 0) {
      offset += temp;
      i--;
    }

    // 是否今天
    var isTodayObj = new Date();
    var isToday = false;
    if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
      isToday = true;
    }
    // 星期几
    var nWeek = objDate.getDay();
    var cWeek = this.nStr1[nWeek];
    // 数字表示周几顺应天朝周一开始的惯例
    if (nWeek == 0) {
      nWeek = 7;
    }
    // 农历年
    var year = i;
    var leap = this.leapMonth(i); // 闰哪个月
    var isLeap = false;

    // 效验闰月
    for (i = 1; i < 13 && offset > 0; i++) {
      // 闰月
      if (leap > 0 && i == leap + 1 && isLeap == false) {
        --i;
        isLeap = true;
        temp = this.leapDays(year); // 计算农历闰月天数
      } else {
        temp = this.monthDays(year, i); // 计算农历普通月天数
      }
      // 解除闰月
      if (isLeap == true && i == leap + 1) {
        isLeap = false;
      }
      offset -= temp;
    }
    // 闰月导致数组下标重叠取反
    if (offset == 0 && leap > 0 && i == leap + 1) {
      if (isLeap) {
        isLeap = false;
      } else {
        isLeap = true;
        --i;
      }
    }
    if (offset < 0) {
      offset += temp;
      --i;
    }
    // 农历月
    var month = i;
    // 农历日
    var day = offset + 1;
    // 天干地支处理
    var sm = m - 1;
    var gzY = this.toGanZhiYear(year);

    // 当月的两个节气
    // bugfix-2017-7-24 11:03:38 use lunar Year Param `y` Not `year`
    var firstNode = this.getTerm(y, m * 2 - 1); // 返回当月「节」为几日开始
    var secondNode = this.getTerm(y, m * 2); // 返回当月「节」为几日开始

    // 依据12节气修正干支月
    var gzM = this.toGanZhi((y - 1900) * 12 + m + 11);
    if (d >= firstNode) {
      gzM = this.toGanZhi((y - 1900) * 12 + m + 12);
    }

    // 传入的日期的节气与否
    var isTerm = false;
    var Term = null;
    if (firstNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 2];
    }
    if (secondNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 1];
    }
    // 日柱 当月一日与 1900/1/1 相差天数
    var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
    var gzD = this.toGanZhi(dayCyclical + d - 1);
    // 该日期所属的星座
    var astro = this.toAstro(m, d);
    return {
      'lYear': year,
      'lMonth': month,
      'lDay': day,
      'Animal': this.getAnimal(year),
      'IMonthCn': (isLeap ? "\u95F0" : '') + this.toChinaMonth(month),
      'IDayCn': this.toChinaDay(day),
      'cYear': y,
      'cMonth': m,
      'cDay': d,
      'gzYear': gzY,
      'gzMonth': gzM,
      'gzDay': gzD,
      'isToday': isToday,
      'isLeap': isLeap,
      'nWeek': nWeek,
      'ncWeek': "\u661F\u671F" + cWeek,
      'isTerm': isTerm,
      'Term': Term,
      'astro': astro
    };
  },
  /**
      * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
      * @param y  lunar year
      * @param m  lunar month
      * @param d  lunar day
      * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
      * @return JSON object
      * @eg:console.log(calendar.lunar2solar(1987,9,10));
      */
  lunar2solar: function lunar2solar(y, m, d, isLeapMonth) {
    // 参数区间1900.1.31~2100.12.1
    var isLeapMonth = !!isLeapMonth;
    var leapOffset = 0;
    var leapMonth = this.leapMonth(y);
    var leapDay = this.leapDays(y);
    if (isLeapMonth && leapMonth != m) {
      return -1;
    } // 传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同
    if (y == 2100 && m == 12 && d > 1 || y == 1900 && m == 1 && d < 31) {
      return -1;
    } // 超出了最大极限值
    var day = this.monthDays(y, m);
    var _day = day;
    // bugFix 2016-9-25
    // if month is leap, _day use leapDays method
    if (isLeapMonth) {
      _day = this.leapDays(y, m);
    }
    if (y < 1900 || y > 2100 || d > _day) {
      return -1;
    } // 参数合法性效验

    // 计算农历的时间差
    var offset = 0;
    for (var i = 1900; i < y; i++) {
      offset += this.lYearDays(i);
    }
    var leap = 0;
    var isAdd = false;
    for (var i = 1; i < m; i++) {
      leap = this.leapMonth(y);
      if (!isAdd) {
        // 处理闰月
        if (leap <= i && leap > 0) {
          offset += this.leapDays(y);
          isAdd = true;
        }
      }
      offset += this.monthDays(y, i);
    }
    // 转换闰月农历 需补充该年闰月的前一个月的时差
    if (isLeapMonth) {
      offset += day;
    }
    // 1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)
    var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
    var calObj = new Date((offset + d - 31) * 86400000 + stmap);
    var cY = calObj.getUTCFullYear();
    var cM = calObj.getUTCMonth() + 1;
    var cD = calObj.getUTCDate();
    return this.solar2lunar(cY, cM, cD);
  }
};
var _default = calendar;
exports.default = _default;

/***/ }),

/***/ 4:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 40:
/*!******************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/tools/siteinfo.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.host = void 0;
var host = "http://dsmy.traeyang.top/";
exports.host = host;

/***/ }),

/***/ 41:
/*!*******************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/store/user-info.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tools = __webpack_require__(/*! @/tools/tools */ 39);
//  个人中心的数据

var store = {
  state: {
    userInfoAvatar: '',
    // 头像地址
    userInfoNickName: '',
    // 网名
    userInfoLv: 0,
    // 等级
    userInfoMoney: 0,
    // 余额
    userInfoCoupon: 0,
    // 优惠券数量
    userInfoMc: 0,
    // 商品券
    userInfoIntegral: 0,
    // 积分
    userInfoMobile: '',
    // 手机号
    userInfoEncrypt: '',
    // 加密字符串

    isVip: false,
    // 是否是vip用户
    vipName: '',
    // 会员名称   不是会员传的是 普通会员
    vipTes: '',
    // 是否是体验卡 如果此字段是空表示什么都没有 不是空就显示在优享会员后面
    vipEndTime: '',
    // 会员过期时间文字  此字段没提示就是空  直接用就行了

    laBaMsg: '',
    // 小喇叭 图标后的消息文字   后端字段是 user_vip_card_cue
    vipIcon: '',
    // 会员图标网络路径（就是那个V的图标）  后端字段是 user_vip_card_icon
    vipTitle: '',
    // V的图标后的标题文字 后端字段是 vip_eco
    vipBtnText: '',
    // V的图标后的标题文字 后的按钮文字 后端字段是 vip_button
    vipIconList: [],
    // 会员权益列表

    orderNumUn: 0,
    // 我的订单-待支付数量
    orderNumIng: 0,
    // 我的订单-进行中数量
    orderNumEd: 0,
    // 我的订单-待评价数量

    bannerList: [] // 个人中心轮播图数据
  },

  mutations: {
    // 没有登录 传页面信息
    setPage: function setPage(state, arg) {
      var laBaMsg = arg.laBaMsg,
        vipIcon = arg.vipIcon,
        vipTitle = arg.vipTitle,
        vipBtnText = arg.vipBtnText,
        vipIconList = arg.vipIconList,
        bannerList = arg.bannerList;
      state.RobFoodmarket = arg;
      state.laBaMsg = laBaMsg; // 小喇叭 图标后的消息文字   后端字段是 user_vip_card_cue
      state.vipIcon = vipIcon; // 会员图标网络路径（就是那个V的图标）  后端字段是 user_vip_card_icon
      state.vipTitle = vipTitle; // V的图标后的标题文字 后端字段是 vip_eco
      state.vipBtnText = vipBtnText; // V的图标后的标题文字 后的按钮文字 后端字段是 vip_button
      state.vipIconList = vipIconList; // 会员权益列表

      state.bannerList = bannerList; // 个人中心轮播图数据
    },
    // 有登陆状态 页面信息+用户信息
    setUserInfoAndPage: function setUserInfoAndPage(state, arg) {
      var userInfoAvatar = arg.userInfoAvatar,
        userInfoNickName = arg.userInfoNickName,
        userInfoLv = arg.userInfoLv,
        userInfoMoney = arg.userInfoMoney,
        userInfoCoupon = arg.userInfoCoupon,
        userInfoMc = arg.userInfoMc,
        userInfoIntegral = arg.userInfoIntegral,
        userInfoMobile = arg.userInfoMobile,
        userInfoEncrypt = arg.userInfoEncrypt,
        isVip = arg.isVip,
        vipName = arg.vipName,
        vipTes = arg.vipTes,
        vipEndTime = arg.vipEndTime,
        laBaMsg = arg.laBaMsg,
        vipIcon = arg.vipIcon,
        vipTitle = arg.vipTitle,
        vipBtnText = arg.vipBtnText,
        vipIconList = arg.vipIconList,
        orderNumUn = arg.orderNumUn,
        orderNumIng = arg.orderNumIng,
        orderNumEd = arg.orderNumEd,
        bannerList = arg.bannerList;
      state.userInfoAvatar = (0, _tools.checkAvatarPath)(userInfoAvatar); // 头像地址
      state.userInfoNickName = userInfoNickName; // 网名
      state.userInfoLv = userInfoLv; // 等级
      state.userInfoMoney = userInfoMoney; // 余额
      state.userInfoCoupon = userInfoCoupon; // 优惠券数量
      state.userInfoMc = userInfoMc; // 商品券
      state.userInfoIntegral = userInfoIntegral; // 积分
      state.userInfoMobile = userInfoMobile; // 手机号
      state.userInfoEncrypt = userInfoEncrypt; // 加密字符串
      state.isVip = isVip; // 是否是vip用户
      state.vipName = vipName; // 会员名称   不是会员传的是 普通会员
      state.vipTes = vipTes; // 是否是体验卡 如果此字段是空表示什么都没有 不是空就显示在优享会员后面
      state.vipEndTime = vipEndTime; // 会员过期时间文字  此字段没提示就是空  直接用就行了
      state.laBaMsg = laBaMsg; // 小喇叭 图标后的消息文字   后端字段是 user_vip_card_cue
      state.vipIcon = vipIcon; // 会员图标网络路径（就是那个V的图标）  后端字段是 user_vip_card_icon
      state.vipTitle = vipTitle; // V的图标后的标题文字 后端字段是 vip_eco
      state.vipBtnText = vipBtnText; // V的图标后的标题文字 后的按钮文字 后端字段是 vip_button
      state.vipIconList = vipIconList; // 会员权益列表
      state.orderNumUn = orderNumUn; // 我的订单-待支付数量
      state.orderNumIng = orderNumIng; // 我的订单-进行中数量
      state.orderNumEd = orderNumEd; // 我的订单-待评价数量
      state.bannerList = bannerList; // 个人中心轮播图数据
    }
  },

  actions: {},
  getters: {}
};
var _default = store;
exports.default = _default;

/***/ }),

/***/ 42:
/*!***********************************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/tuniao-ui/libs/function/updateCustomBarInfo.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 更新自定义顶部导航栏的高度
 */
function updateCustomBarInfo() {
  return new Promise(function (resolve, reject) {
    uni.getSystemInfo({
      success: function success(e) {
        var statusBarHeight = 0;
        var customBarHeight = 0;
        statusBarHeight = e.statusBarHeight;
        var custom = wx.getMenuButtonBoundingClientRect();
        customBarHeight = custom.bottom + (custom.top - e.statusBarHeight <= 4 ? custom.top - e.statusBarHeight + 4 : custom.top - e.statusBarHeight);
        resolve({
          statusBarHeight: statusBarHeight,
          customBarHeight: customBarHeight
        });
      },
      fail: function fail(err) {
        console.log("获取设备信息失败", err);
        reject();
      }
    });
  });
}
var _default = updateCustomBarInfo;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 45:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 46:
/*!*******************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/tuniao-ui/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 47));
var _updateCustomBarInfo = _interopRequireDefault(__webpack_require__(/*! ./libs/function/updateCustomBarInfo.js */ 42));
var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/function/color.js */ 48));
var _message = _interopRequireDefault(__webpack_require__(/*! ./libs/function/message.js */ 49));
var _uuid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/uuid.js */ 50));
var _array = _interopRequireDefault(__webpack_require__(/*! ./libs/function/array.js */ 51));
var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 52));
var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 53));
var _string = _interopRequireDefault(__webpack_require__(/*! ./libs/function/string.js */ 54));
var _number = _interopRequireDefault(__webpack_require__(/*! ./libs/function/number.js */ 55));
var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 56));
var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 57));
var _color2 = _interopRequireDefault(__webpack_require__(/*! ./libs/config/color.js */ 58));
// 引入全局mixin

// 调试输出信息
function wranning(str) {
  // 开发环境进行信息输出,主要是一些报错信息
  // 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
  // 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
  if (true) {
    console.warn(str);
  }
}

// 更新自定义状态栏的信息

var $t = {
  updateCustomBar: _updateCustomBarInfo.default,
  color: _color.default,
  message: _message.default,
  uuid: _uuid.default,
  array: _array.default,
  test: _test.default,
  $parent: _$parent.default,
  string: _string.default,
  number: _number.default,
  deepClone: _deepClone.default,
  zIndex: _zIndex.default,
  colorInfo: _color2.default
};

// 挂载到uni对象上
uni.$t = $t;
var install = function install(Vue) {
  // 全局混入
  Vue.mixin(_mixin.default);

  // Filter格式化

  Vue.prototype.$t = $t;
};
var _default = {
  install: install
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 47:
/*!******************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/tuniao-ui/libs/mixin/mixin.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {module.exports = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载再$t上，用为这个方法需要使用in（this），所以无法把它独立层一个单独的文件导出
    this.$t.getRect = this._tGetRect;
  },
  beforeDestory: function beforeDestory() {
    var _this = this;
    // 判断当前页面是否存在parent和children
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && uni.$t.test.array(this.parent.children)) {
      // 组件销毁时，移除子组件在父组件children数组中的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相对，则移除
        if (child === _this) {
          childrenList.splice(index, 1);
        }
      });
    }
  },
  methods: {
    /**
     * 查询节点信息
     * 当前方法在支付宝小程序中无法获取组件跟接点的尺寸
     * 解决办法：为组件根部再套一个没有任何作用的view元素
     */
    _tGetRect: function _tGetRect(selector, all) {
      var _this2 = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().in(_this2)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    },
    /**
     * 获取父组件的数据
     */
    getParentData: function getParentData() {
      var _this3 = this;
      var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免再created中定义parent变量
      if (!this.parent) this.parent = false;
      // 通过获取父组件实例
      // 将父组件this中对应的参数，赋值给本组件的parentData对象中对应的属性
      // 头条小程序不支持通过this.parent.xxx去监听父组件参数的变化，所以需要本方法进行实现
      this.parent = this.$t.$parent.call(this, parentName);
      if (this.parent) {
        // 遍历parentData中的属性，将parent中同名的属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this3.parentData[key] = _this3.parent[key];
        });
      }
    },
    /**
     * 阻止事件冒泡
     */
    preventEvent: function preventEvent(e) {
      e && e.stopPropagation && e.stopPropagation();
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 48:
/*!*********************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/tuniao-ui/libs/function/color.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var color = ['red', 'purplered', 'purple', 'bluepurple', 'aquablue', 'blue', 'indigo', 'cyan', 'teal', 'green', 'yellowgreen', 'lime', 'yellow', 'orangeyellow', 'orange', 'orangered', 'brown', 'grey', 'gray'];

// 酷炫颜色的数量
var COOL_BG_COLOR_COUNT = 16;

/**
 * 获取图鸟配色颜色列表
 */
function getTuniaoColorList() {
  return color;
}

/**
 * 获取指定类型的随机颜色对应的类
 * @param {String} type 颜色类型
 */
function getRandomColorClass() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'bg';
  var index = Math.floor(Math.random() * color.length);
  var colorValue = color[index];
  return 'tn-' + type + '-' + colorValue;
}

/**
 * 随机获取酷炫背景对应的类
 */
function getRandomCoolBgClass() {
  var index = Math.random() * COOL_BG_COLOR_COUNT + 1;
  return 'tn-cool-bg-color-' + Math.floor(index);
}

/**
 * 根据传入的值获取内部背景颜色类
 * 
 * @param {String} backgroundColor 背景颜色信息
 */
function getBackgroundColorInternalClass() {
  var backgroundColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (!backgroundColor) return '';
  if (['tn-bg', 'tn-dynamic-bg', 'tn-main-gradient', 'tn-cool-bg'].some(function (item) {
    return backgroundColor.includes(item);
  })) {
    return backgroundColor;
  }
  return '';
}

/**
 * 根据传入的值获取背景颜色样式
 * 
 * @param {String} backgroundColor 背景颜色信息
 */
function getBackgroundColorStyle() {
  var backgroundColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (!backgroundColor) return '';
  if (!backgroundColor.startsWith('tn-') || ['#', 'rgb', 'rgba'].some(function (item) {
    return backgroundColor.includes(item);
  })) {
    return backgroundColor;
  }
  return '';
}

/**
 * 根据传入的值获取内部字体颜色类
 * 
 * @param {String} fontColor 背景颜色信息
 */
function getFontColorInternalClass() {
  var fontColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (!fontColor) return '';
  if (['tn-color'].some(function (item) {
    return fontColor.includes(item);
  })) {
    return fontColor;
  }
  return '';
}

/**
 * 根据传入的值获取字体颜色样式
 * 
 * @param {String} fontColor 背景颜色信息
 */
function getFontColorStyle() {
  var fontColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (!fontColor) return '';
  if (!fontColor.startsWith('tn-') || ['#', 'rgb', 'rgba'].some(function (item) {
    return fontColor.includes(item);
  })) {
    return fontColor;
  }
  return '';
}

/**
 * 求两个颜色之间的渐变值
 * 
 * @param {String} startColor 开始颜色
 * @param {String} endColor 结束颜色
 * @param {Number} step 颜色等分的份额 
 */
function colorGradient() {
  var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';
  var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRGB(startColor, false);
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];
  var endRGB = hexToRGB(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];

  // 求差值
  var R = (endR - startR) / step;
  var G = (endG - startG) / step;
  var B = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    // 计算每一步的hex值
    var hex = rgbToHex("rgb(".concat(Math.round(R * i + startR), ", ").concat(Math.round(G * i + startG), ", ").concat(Math.round(B * i + startB), ")"));
    colorArr.push(hex);
  }
  return colorArr;
}

/**
 * 将hex的颜色表示方式转换为rgb表示方式
 * 
 * @param {String} color 颜色
 * @param {Boolean} str 是否返回字符串
 * @return {Array|String} rgb的值
 */
function hexToRGB(color) {
  var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
  color = color.toLowerCase();
  if (color && reg.test(color)) {
    // #000 => #000000
    if (color.length === 4) {
      var colorNew = '#';
      for (var i = 1; i < 4; i++) {
        colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
      }
      color = colorNew;
    }
    // 处理六位的颜色值
    var colorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      colorChange.push(parseInt("0x" + color.slice(_i, _i + 2)));
    }
    if (!str) {
      return colorChange;
    } else {
      return "rgb(".concat(colorChange[0], ", ").concat(colorChange[1], ", ").concat(colorChange[2], ")");
    }
  } else if (/^(rgb|RGB)/.test(color)) {
    var arr = color.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(',');
    return arr.map(function (item) {
      return Number(item);
    });
  } else {
    return color;
  }
}

/**
 * 将rgb的颜色表示方式转换成hex表示方式
 * 
 * @param {Object} rgb rgb颜色值
 */
function rgbToHex(rgb) {
  var reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
  if (/^(rgb|RGB)/.test(rgb)) {
    var _color = rgb.replace(/(?:\(|\)|rgb|GRB)*/g, "").split(',');
    var strHex = '#';
    for (var i = 0; i < _color.length; i++) {
      var hex = Number(_color[i]).toString(16);
      // 保证每个值否是两位数
      hex = String(hex).length === 1 ? 0 + '' + hex : hex;
      if (hex === '0') {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = rgb;
    }
    return strHex;
  } else if (reg.test(rgb)) {
    var num = rgb.replace(/#/, '').split('');
    if (num.length === 6) {
      return rgb;
    } else if (num.length === 3) {
      var numHex = '#';
      for (var _i2 = 0; _i2 < num.length; _i2++) {
        numHex += num[_i2] + num[_i2];
      }
      return numHex;
    }
  } else {
    return rgb;
  }
}

/**
 * 将传入的颜色值转换为rgba字符串
 * 
 * @param {String} color 颜色
 * @param {Number} alpha 透明度
 */
function colorToRGBA(color) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
  color = color.toLowerCase();
  if (color && reg.test(color)) {
    // #000 => #000000
    if (color.length === 4) {
      var colorNew = '#';
      for (var i = 1; i < 4; i++) {
        colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
      }
      color = colorNew;
    }
    // 处理六位的颜色值
    var colorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      colorChange.push(parseInt("0x" + color.slice(_i3, _i3 + 2)));
    }
    return "rgba(".concat(colorChange[0], ", ").concat(colorChange[1], ", ").concat(colorChange[2], ", ").concat(alpha, ")");
  } else {
    return color;
  }
}
var _default = {
  COOL_BG_COLOR_COUNT: COOL_BG_COLOR_COUNT,
  getTuniaoColorList: getTuniaoColorList,
  getRandomColorClass: getRandomColorClass,
  getRandomCoolBgClass: getRandomCoolBgClass,
  getBackgroundColorInternalClass: getBackgroundColorInternalClass,
  getBackgroundColorStyle: getBackgroundColorStyle,
  getFontColorInternalClass: getFontColorInternalClass,
  getFontColorStyle: getFontColorStyle,
  colorGradient: colorGradient,
  hexToRGB: hexToRGB,
  rgbToHex: rgbToHex,
  colorToRGBA: colorToRGBA
};
exports.default = _default;

/***/ }),

/***/ 49:
/*!***********************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/tuniao-ui/libs/function/message.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 弹出系统内置的toast
 */
function toast(title) {
  var mask = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var icon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'none';
  var duration = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1500;
  uni.showToast({
    title: title,
    icon: icon,
    mask: mask,
    duration: duration,
    success: function success() {
      setTimeout(function () {
        cb && cb();
      }, duration);
    }
  });
}

/**
 * 弹出内置的加载框
 */
function loading(title) {
  uni.showLoading({
    title: title,
    mask: true
  });
}

/**
 * 弹出系统内置的modal
 */
function modal(title, content, confirmCb) {
  var showCancel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var cancelCb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var confirmText = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "确定";
  var cancelText = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "取消";
  uni.showModal({
    title: title,
    content: content,
    showCancel: showCancel,
    cancelText: cancelText,
    confirmText: confirmText,
    success: function success(res) {
      if (res.cancel) {
        cancelCb && cancelCb();
      } else if (res.confirm) {
        confirmCb && confirmCb();
      }
    }
  });
}

/**
 * 关闭系统内置toast
 */
function closeToast() {
  uni.hideToast();
}

/**
 * 关闭系统内置的加载框
 */
function closeLoading() {
  uni.hideLoading();
}
var _default = {
  toast: toast,
  loading: loading,
  modal: modal,
  closeToast: closeToast,
  closeLoading: closeLoading
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 5:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 6);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 7);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 10);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 50:
/*!********************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/tuniao-ui/libs/function/uuid.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
 * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
 * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
 * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
 * v-for的时候,推荐使用后端返回的id而不是循环的index
 * @param {Number} len uuid的长度
 * @param {Boolean} firstT 将返回的首字母置为"t"
 * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
 */
function uuid() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
  var firstT = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;
  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {
      uuid[i] = chars[0 | Math.random() * radix];
    }
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';
    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用t替代,因为第一个字符为数值时,该uuid不能用作id或者class
  if (firstT) {
    uuid.shift();
    return 't' + uuid.join('');
  } else {
    return uuid.join('');
  }
}
var _default = uuid;
exports.default = _default;

/***/ }),

/***/ 51:
/*!*********************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/tuniao-ui/libs/function/array.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 打乱传入的数组
 * 
 * @param {Array} array 待打乱的数组 
 */
function random() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return array.sort(function () {
    return Math.random() - 0.5;
  });
}

/**
 * 判断是否为数组
 * 
 * @param {Object} arr
 */
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}
var _default = {
  random: random,
  isArray: isArray
};
exports.default = _default;

/***/ }),

/***/ 52:
/*!********************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/tuniao-ui/libs/function/test.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/**
 * 验证电子邮箱格式
 */
function email(value) {
  return /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(value);
}

/**
 * 验证手机格式
 */
function mobile(value) {
  return /^1[3-9]\d{9}$/.test(value);
}

/**
 * 验证URL格式
 */
function url(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}

/**
 * 验证日期格式
 */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
 * 验证ISO类型的日期格式
 */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
 * 验证十进制数字
 */
function number(value) {
  return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
}

/**
 * 验证整数
 */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
 * 验证身份证号码
 */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
}

/**
 * 是否车牌号
 */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
 * 金额,只允许2位小数
 */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
 * 中文
 */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
 * 只能输入字母
 */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
 * 只能是字母或者数字
 */
function enOrNum(value) {
  //英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
 * 验证是否包含某个值
 */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
 * 验证一个值范围[min, max]
 */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
 * 验证一个长度范围[min, max]
 */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
 * 是否固定电话
 */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
 * 判断是否为空
 */
function empty(value) {
  switch ((0, _typeof2.default)(value)) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;
  }
  return false;
}

/**
 * 是否json字符串
 */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if ((0, _typeof2.default)(obj) == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}

/**
 * 是否数组
 */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
 * 是否对象
 */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * 是否短信验证码
 */
function code(value) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}
var _default = {
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code
};
exports.default = _default;

/***/ }),

/***/ 53:
/*!***********************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/tuniao-ui/libs/function/$parent.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = $parent;
// 获取父组件的参数，在支付宝小程序中不支持provide/inject的写法
// 在非H5中this.$parent可以获取到父组件，但是在H5中需要多次调用this.$parent.$parent.xxx
// 传递默认值undefined表示查找最顶层的$parent
function $parent() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过whle遍历，这里主要是为了H5需要多层解析
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，则继续查找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),

/***/ 54:
/*!**********************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/tuniao-ui/libs/function/string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 去掉字符串中空格
 * 
 * @param {String} str 待处理的字符串
 * @param {String} type 处理类型
 */
function trim(str) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (type === 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (type === 'left') {
    return str.replace(/^\s*/g, "");
  } else if (type === 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (type === 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}

/**
 * 获取带单位的长度值
 * 
 * @param {String} value 待处理的值
 * @param {String} unit 单位
 */
function getLengthUnitValue(value) {
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  if (!value) {
    return '';
  }
  if (/(%|px|rpx|auto)$/.test(value)) return value;else return value + unit;
}

/**
 * 将驼峰命名的字符串转换为指定连接符来进行连接
 * 
 * @param {Object} string 待转换的字符串
 * @param {Object} replace 进行连接的字符
 */
function humpConvertChar(string) {
  var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_';
  if (!string || !replace) {
    return '';
  }
  return string.replace(/([A-Z])/g, "".concat(replace, "$1")).toLowerCase();
}

/**
 * 将用指定连接符来进行连接的字符串转为驼峰命名的字符串
 * 
 * @param {Object} string 待转换的字符串
 * @param {Object} replace 进行连接的字符
 */
function charConvertHump(string) {
  var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_';
  if (!string || !replace) {
    return '';
  }
  var reg = RegExp(replace + "(\\w)", "g");
  return string.replace(reg, function (all, letter) {
    return letter.toUpperCase();
  });
}
var _default = {
  trim: trim,
  getLengthUnitValue: getLengthUnitValue,
  humpConvertChar: humpConvertChar,
  charConvertHump: charConvertHump
};
exports.default = _default;

/***/ }),

/***/ 55:
/*!**********************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/tuniao-ui/libs/function/number.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 格式化数字字符串
 * @param {String, Number} value 待格式化的字符串
 * @param {Number} digits 保留位数 
 */
function formatNumberString(value) {
  var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var number = 0;
  // 判断是什么类型
  if (typeof value === 'string') {
    number = Number(value);
  } else if (typeof value === 'number') {
    number = value;
  }
  if (isNaN(number) || number === 0) {
    return 0;
  }
  var maxNumber = Math.pow(10, digits) - 1;
  if (number > maxNumber) {
    return "".concat(maxNumber, "+");
  }
  return number;
}

/**
 * 格式化数字字符串，往数字前添加0
 * 
 * @param {Object} num 待格式化的数值
 */
function formatNumberAddZero(value) {
  var number = 0;
  // 判断是什么类型
  if (typeof value === 'string') {
    number = Number(value);
  } else if (typeof value === 'number') {
    number = value;
  }
  if (isNaN(number) || +number < 10) {
    return '0' + number;
  } else {
    return String(number);
  }
}

/**
 * 格式化数字，往数值后添加单位
 *
 * @param {Object} value 待格式化的数值
 * @param {Object} digits 保留位数
 */
function formatNumberAddPriceUnit(value) {
  var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  // 数值分割点
  var unitSplit = [{
    value: 1,
    symbol: ''
  }, {
    value: 1E3,
    symbol: 'K'
  }, {
    value: 1E4,
    symbol: 'W'
  }];
  var reg = /\.0+$|(\.[0=9]*[1-9])0+$/;
  var number = 0;
  // 判断是什么类型
  if (typeof value === 'string') {
    number = Number(value);
  } else if (typeof value === 'number') {
    number = value;
  }
  var i;
  for (i = unitSplit.length - 1; i > 0; i--) {
    if (number >= unitSplit[i].value) break;
  }
  return (number / unitSplit[i].value).toFixed(digits).replace(reg, "$1") + unitSplit[i].symbol;
}

/**
 * 获取数值的整数位数
 *
 * @param {Object} number 数值 
 */
function getDigit(number) {
  var digit = -1;
  while (number >= 1) {
    digit++;
    number = number / 10;
  }
  return digit;
}

/**
 * 获取指定范围的随机数(返回整数)
 
 * @param {Object} min 最小值
 * @param {Object} max 最大值
 */
function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min;
    return Math.random() * gab + min;
  } else {
    return 0;
  }
}

/**
 * 获取指定范围的随机数(返回整数)
 
 * @param {Object} min 最小值
 * @param {Object} max 最大值
 */
function randomInt(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}
var _default = {
  formatNumberString: formatNumberString,
  formatNumberAddZero: formatNumberAddZero,
  formatNumberAddPriceUnit: formatNumberAddPriceUnit,
  random: random,
  randomInt: randomInt
};
exports.default = _default;

/***/ }),

/***/ 56:
/*!*************************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/tuniao-ui/libs/function/deepClone.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/**
 * 判断是否为数组
 * 
 * @param {Object} arr
 */
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

/**
 * 深度复制数据
 * 
 * @param {Object} obj
 */
function deepClone(obj) {
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if ((0, _typeof2.default)(obj) !== 'object' && typeof obj !== 'function') {
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = (0, _typeof2.default)(obj[i]) === 'object' ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}
var _default = deepClone;
exports.default = _default;

/***/ }),

/***/ 57:
/*!********************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/tuniao-ui/libs/config/zIndex.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 各组件的z-index值
var _default = {
  landsacpe: 29100,
  navbar: 29090,
  toast: 20090,
  goodsNav: 20089,
  alert: 20085,
  modal: 20080,
  popup: 20075,
  tips: 19080,
  sticky: 19075,
  indexListSticky: 19070,
  fab: 19060,
  mask: 9999,
  tableTr: 1001,
  tableTd: 1000
};
exports.default = _default;

/***/ }),

/***/ 58:
/*!*******************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/tuniao-ui/libs/config/color.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// TuniaoUI颜色值
var _default = {
  mainColor: '#01BEFF',
  reverseMainColor: '#FFF00D',
  femaleColor: '#FF71D2',
  maleColor: '#82B2FF',
  mainOrange: '#FBBD12',
  bgColor: '#FFFFFF',
  spaceColor: '#F8F7F8',
  fontColor: '#080808',
  fontSubColor: '#AAAAAA',
  contentColor: '#838383',
  fontHolderColor: '#E6E6E6',
  maskBgColor: 'rgba(0, 0, 0, 0.4)'
};
exports.default = _default;

/***/ }),

/***/ 59:
/*!***************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/tools/mixin.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 60));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 62));
var _siteinfo = __webpack_require__(/*! @/tools/siteinfo.js */ 40);
var _vuex = __webpack_require__(/*! vuex */ 38);
var _tools = __webpack_require__(/*! @/tools/tools */ 39);
var _methods;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  data: function data() {
    return {};
  },
  methods: (_methods = {
    // 停止3秒钟
    sleepFn: function sleepFn() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
      console.log("sleepFn \u963B\u6B62\u7A0B\u5E8F".concat(time, "\u79D2"));
      return new Promise(function (resFn) {
        setTimeout(function () {
          resFn("sleepFn \u963B\u585E\u5B8C\u6BD5".concat(time, "\u79D2"));
        }, time * 1000);
      });
    },
    // main 文件 下 created 方法执行 不操作dom
    mainCreatedFn: function mainCreatedFn() {
      var that = this;
      that.$store.commit('setAppStaticPath'); // 设置程序里使用的静态图片路径 (永远不换的图片)
      var token = (0, _tools.assertString)(uni.getStorageSync('token'));
      if (token.length > 0) {
        that.$store.commit('setToken', token);
        that.hasTokenGetUserInfo(function () {});
      } else {
        that.$store.commit('setToken', '');
        //that.unHasTokenGetUserInfo(() => {});
      }

      /* 
      let tokenMap = {
      	[`https://dev.sjwxsc.com`]: 'a69b2371-58fc-40fd-8b88-894fb9facf5e',
      	[`https://localdev.sjwxsc.com`]: '586ea319-8a1e-4461-a6d7-e77358a68fd8'
      }
      that.$store.commit('setToken', tokenMap[host]);
       */
    },
    launchFn: function launchFn(e) {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var that;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = _this;
              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }, (0, _defineProperty2.default)(_methods, '$request', function $request(options) {
    var that = this;
    var method = options.method,
      loading = options.loading,
      temUrl = options.temUrl,
      url = options.url,
      data = options.data,
      header = options.header,
      useTokenRule = options.useTokenRule;

    // 处理请求的动画
    if (loading) {
      that.hideAllFn();
      uni.showLoading({});
    }
    // 处理可能调试使用的 临时网络地址
    if (temUrl) {
      // 有临时的请求地址 就 用 临时的请求地址
      url = temUrl;
    } else {
      // 否则用默认的 host + url 
      url = "".concat(_siteinfo.host).concat(url);
    }
    // 处理 使用token规则 header对象

    /* 
    	使用token规则
    	'mustUseToken' 接口必须有token 如果没有 就 弹框 提示登录
    	'toTheFullUseToken'  表示 有token 带上  没有token 留空 也是默认情况
    	'notUseToken'  表示 不管有没有token 都不带
    */

    var headerObj = {};
    if (useTokenRule === 'mustUseToken') {
      if (uni.getStorageSync('token')) {
        headerObj.token = that.globalToken;
      } else {
        that.closeGlobalLoginFn(true);
        return new Promise(function (resFn, rejFn) {
          that.logOutFn(); // 先退出登录一下
          resFn({
            statusCode: 200,
            data: {
              code: 400,
              msg: '未登录'
            }
          });
        });
      }
    } else if (useTokenRule === 'notUseToken') {
      headerObj = {};
    } else {
      if (uni.getStorageSync('token')) {
        headerObj.token = that.globalToken;
        // console.log('打印全局的token that.globalToken', that.globalToken);
      }
    }
    /* 
    console.log(
    	'发起请求时带的header头', headerObj
    );
     */

    return new Promise(function (resFn, rejFn) {
      uni.request({
        timeout: 1000 * 6,
        // 请求超过6s 自动断开
        method: method,
        url: url,
        data: data,
        header: _objectSpread(_objectSpread({}, headerObj), header),
        success: function success(e) {
          if (e.statusCode == 200 && e.data.code == 401) {
            that.logOutFn(); // 先退出登录一下
            that.closeGlobalLoginFn(true);
            resFn({
              statusCode: 200,
              data: {
                code: 400,
                msg: '未登录'
              }
            });
            return false;
          } else {
            resFn(e);
          }
          if (loading) {
            that.hideAllFn();
          }
        },
        fail: function fail(e) {
          resFn(e);
        }
      });
    });
  }), (0, _defineProperty2.default)(_methods, "toBackFn", function toBackFn() {
    // 正常返回上一页 如果没有上一页 就回首页
    if (getCurrentPages().length >= 2) {
      uni.navigateBack({});
    } else {
      this.navigateToFn({
        isTab: true,
        url: '/pages/index/index'
      });
    }
  }), (0, _defineProperty2.default)(_methods, "regTel", function regTel(tel) {
    return _tools.checkTelReg.test(tel);
  }), (0, _defineProperty2.default)(_methods, "tagStyle", function tagStyle(index) {
    var arr = ['blueStyle', 'orangeStyle', 'pinkStyle', 'yellowStyle', 'redStyle'];
    index = index ? index : 0;
    return arr[index % arr.length];
  }), (0, _defineProperty2.default)(_methods, "randFn", function randFn(min, max) {
    return Math.round(Math.random() * (max - min)) - min;
  }), (0, _defineProperty2.default)(_methods, "navigateToFn", function navigateToFn(obj) {
    if (obj.checkLogin && !uni.getStorageSync('token')) {
      // 需要登录才能跳转
      this.closeGlobalLoginFn(true);
      return false;
    }
    if (obj.isTab) {
      // 是否tab-bar页面
      uni.switchTab({
        url: obj.url
      });
      return false;
    }
    var typeAttr; // 其他跳转方式
    if (obj.type) {
      typeAttr = obj.type;
    } else {
      typeAttr = 'navigateTo';
    }
    if (getCurrentPages().length >= 9) {
      // 如果跳转超过9页 就只能删除掉前一页面 重新覆盖  redirectTo 方式
      typeAttr = 'redirectTo';
    }
    uni[typeAttr](_objectSpread({}, obj));
  }), (0, _defineProperty2.default)(_methods, "replaceFn", function replaceFn(str, n) {
    var reg = /\{(\d|\D)*\}/;
    if (!reg.test(str)) {
      return str;
    }
    var res = str.match(reg)['0'];
    var result = str.replace(res, n);
    return result;
  }), (0, _defineProperty2.default)(_methods, "closeGlobalLoginFn", function closeGlobalLoginFn(flag) {
    uni.$emit('setLoginBoxFlag', !!flag);
    uni.$emit('setLoginBoxFlag_indexmine', !!flag);
    uni.$emit('setLoginBoxFlag_indexcircle', !!flag);
    uni.$emit('setLoginBoxFlag_preferred', !!flag);
    uni.$emit('setLoginBoxFlag_home', !!flag);
  }), (0, _defineProperty2.default)(_methods, "trimFn", function trimFn(str) {
    if (checkTypeFn(str) == 'String') {
      return this.strTrimFn(str);
    }
    return false;
  }), (0, _defineProperty2.default)(_methods, "strTrimFn", function strTrimFn(str) {
    return (0, _tools.assertString)(str).trim();
  }), (0, _defineProperty2.default)(_methods, "timeZero", function timeZero(time) {
    var str = time + '';
    return ('000' + str).slice(-2);
  }), (0, _defineProperty2.default)(_methods, "obj2styleStr", function obj2styleStr(styleObj) {
    var styleStr = '';
    for (var key in styleObj) {
      styleStr += "".concat(key, ":").concat(styleObj[key], ";");
    }
    return styleStr;
  }), (0, _defineProperty2.default)(_methods, "catchTouchMove", function catchTouchMove() {
    return false;
  }), (0, _defineProperty2.default)(_methods, "setConfigFn", function setConfigFn() {
    var that = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(res) {
        var result, resultObj;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return that.$request({
                  url: '/api/index/GetConfig'
                });
              case 2:
                result = _context2.sent;
                if (result.statusCode == 200) {
                  if (result.data.code == 200) {
                    resultObj = (0, _tools.assertObject)(result.data.data);
                    that.$store.commit('setConfigInfo', resultObj.config);
                    res(resultObj.config);
                  } else {
                    uni.showToast({
                      icon: 'none',
                      title: result.data.msg
                    });
                  }
                } else {
                  uni.showToast({
                    icon: 'none',
                    title: that.$errorMsg
                  });
                }
              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }), (0, _defineProperty2.default)(_methods, "checkIsiPhoneXFn", function checkIsiPhoneXFn() {
    var that = this;
    uni.getSystemInfo({
      success: function success(res) {
        var iPhoneList = ['iPhone X', 'iPhone 11', 'iPhone 11 Pro Max'];
        var modelmes = res.model,
          bool = false;
        iPhoneList.forEach(function (item) {
          if (modelmes.search(item) != -1) {
            bool = true;
          }
        });
        that.$store.commit('setIsiPhoneX', bool);
      }
    });
  }), (0, _defineProperty2.default)(_methods, "hexToRgba", function hexToRgba(hex, opacity) {
    return "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + "," + opacity + ")";
  }), (0, _defineProperty2.default)(_methods, "msg", function msg(title) {
    uni.showToast({
      title: title,
      icon: 'none'
    });
  }), (0, _defineProperty2.default)(_methods, "getConfigImg", function getConfigImg(flag) {
    for (var i = 0; i < this.configInfo.dodecorate.length; i++) {
      if (this.configInfo.dodecorate[i].field == flag) {
        return this.addimgPathHostFn(this.configInfo.dodecorate[i].img);
      }
    }
  }), (0, _defineProperty2.default)(_methods, "getConfigIsShow", function getConfigIsShow(flag) {
    for (var i = 0; i < this.configInfo.dodecorate.length; i++) {
      if (this.configInfo.dodecorate[i].field == flag) {
        return this.configInfo.dodecorate[i].xs == '1';
      }
    }
  }), (0, _defineProperty2.default)(_methods, "getH", function getH(h1, winh) {
    if (h1 <= winh) {
      return winh;
    }
    return h1;
  }), (0, _defineProperty2.default)(_methods, "shareFn", function shareFn(obj) {
    var that = this;
    var resultObj = _objectSpread({}, obj.options);

    // 需要带参数并且需要带分享者的 加密字符串
    if (checkTypeFn(obj.query) == 'Object' && Object.keys(obj.query).length > 0 && obj.query.scene) {
      if (that.isLogin) {
        obj.query.scene = that.userInfoEncrypt;
      } else {
        delete obj.query.scene;
      }
    }
    resultObj.path = function () {
      var pathStr = obj.path;
      if (checkTypeFn(obj.query) == 'Object' && Object.keys(obj.query).length > 0) {
        pathStr += "?shareFn=true&";
        for (var i in obj.query) {
          pathStr += "".concat(i, "=").concat(obj.query[i], "&");
        }
        pathStr = pathStr.substr(0, pathStr.length - 1);
      }
      return pathStr;
    }();
    console.log(resultObj, '分享出去的对象', '\n');
    return resultObj;
  }), (0, _defineProperty2.default)(_methods, "shareAppFn", function shareAppFn(obj) {
    var that = this;
    var resultObj;
    if (Object.keys((0, _tools.assertObject)(obj.options)).length > 0) {
      resultObj = _objectSpread({}, obj.options);
    } else {
      resultObj = {};
    }

    // 需要带参数并且需要带分享者的 加密字符串
    if (checkTypeFn(obj.query) == 'Object' && Object.keys(obj.query).length > 0 && obj.query.scene) {
      if (that.isLogin) {
        obj.query.scene = that.userInfoEncrypt;
      } else {
        delete obj.query.scene;
      }
    }
    resultObj.path = function () {
      var pathStr = obj.path;
      if (checkTypeFn(obj.query) == 'Object' && Object.keys(obj.query).length > 0) {
        pathStr += "?shareFn=true&";
        for (var i in obj.query) {
          pathStr += "".concat(i, "=").concat(obj.query[i], "&");
        }
        pathStr = pathStr.substr(0, pathStr.length - 1);
      }
      return pathStr;
    }();
    var _resultObj = resultObj,
      imageUrl = _resultObj.imageUrl,
      title = _resultObj.title,
      path = _resultObj.path;
    var opt = {
      provider: 'weixin',
      type: 5,
      scene: 'WXSceneSession',
      imageUrl: imageUrl,
      title: title,
      miniProgram: {
        // id: 'gh_19b177f69985',
        id: that.configInfo.originalid,
        path: path,
        type: 0,
        // 微信小程序版本类型，可取值： 0-正式版； 1-测试版； 2-体验版。 默认值为0。
        webUrl: 'https://uniapp.dcloud.io'
      },
      complete: function complete(e) {
        console.log('分享完返回的东西', e);
      }
    };
    uni.share(opt);
    console.log('app分享的参数信息', opt);
  }), (0, _defineProperty2.default)(_methods, "openSettingFn", function openSettingFn(settingStr) {
    uni.openSetting();
  }), (0, _defineProperty2.default)(_methods, "settingInfoFn", function settingInfoFn(settingStr) {
    return new Promise(function (resFn, rejFn) {
      var obj = {};
      uni.getSetting({
        success: function success(res) {
          obj.type = 'success';
          obj.msg = '获取权限列表成功';
          var keys = Object.keys(res.authSetting);
          if (keys.includes(settingStr)) {
            obj.isFirst = false;
            if (res.authSetting[settingStr]) {
              obj.isOk = true;
            } else {
              obj.isOk = false;
            }
          } else {
            obj.isFirst = true;
          }
          resFn(obj);
        },
        fail: function fail() {
          rejFn({
            type: 'error',
            msg: '获取权限列表失败',
            result: '获取权限列表失败'
          });
        }
      });
    });
  }), (0, _defineProperty2.default)(_methods, "homeTempIdListIsConfirm", function homeTempIdListIsConfirm(list) {
    return new Promise(function (resFn, rejFn) {
      uni.getSetting({
        withSubscriptions: true,
        //是否同时获取用户订阅消息的订阅状态，默认不获取
        success: function success(res) {
          var arr = [];
          list.forEach(function (message) {
            if (res.subscriptionsSetting && res.subscriptionsSetting.itemSettings && res.subscriptionsSetting.itemSettings[message] == 'accept') {
              arr.push(true);
            } else {
              arr.push(false);
            }
          });
          var everyResult = arr.every(function (item) {
            return item == true;
          });
          if (arr.length == list.length && everyResult) {
            resFn({
              type: 'success'
            });
          } else {
            resFn({
              type: 'error'
            });
          }
        }
      });
    });
  }), (0, _defineProperty2.default)(_methods, "getGlobalSendMsgFlag", function getGlobalSendMsgFlag() {
    return new Promise(function (resFn, rejFn) {
      uni.getSetting({
        withSubscriptions: true,
        //是否同时获取用户订阅消息的订阅状态，默认不获取
        success: function success(res) {
          if (checkTypeFn(res.subscriptionsSetting) == 'Object' && Object.keys(res.subscriptionsSetting).length > 0 && res.subscriptionsSetting.mainSwitch) {
            resFn({
              type: 'success',
              msg: '订阅消息已开启',
              result: res
            });
          } else {
            resFn({
              type: 'error',
              msg: '订阅消息未开启',
              result: res
            });
          }
        },
        fail: function fail(e) {
          resFn({
            type: 'error',
            msg: '获取失败',
            result: e
          });
        }
      });
    });
  }), (0, _defineProperty2.default)(_methods, "isUserCloneMsg", function isUserCloneMsg(list) {
    list = (0, _tools.assertArray)(list);
    return new Promise(function (resFn, rejFn) {
      uni.getSetting({
        withSubscriptions: true,
        //是否同时获取用户订阅消息的订阅状态，默认不获取
        success: function success(res) {
          if (checkTypeFn(res.subscriptionsSetting) == 'Object' && Object.keys(res.subscriptionsSetting).length > 0 && res.subscriptionsSetting.mainSwitch) {
            var arr = [];
            list.forEach(function (message) {
              if (res.subscriptionsSetting.itemSettings && res.subscriptionsSetting.itemSettings[message] == 'reject') {
                arr.push(true);
              } else {
                arr.push(false);
              }
            });
            if (arr.includes(true)) {
              resFn({
                type: 'success'
              });
            } else {
              resFn({
                type: 'error'
              });
            }
          } else {
            resFn({
              type: 'error'
            });
          }
        },
        fail: function fail() {
          resFn({
            type: 'error'
          });
        }
      });
    });
  }), (0, _defineProperty2.default)(_methods, "getMyPageFn", function getMyPageFn() {
    var that = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(resFn, rejFn) {
        var result, resObj, resultObj, headWrapInfo, vipIconList, bannerList, laBaMsg, vipIcon, vipTitle, vipBtnText;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return that.$request({
                  url: '/api/index/nouser'
                });
              case 2:
                result = _context3.sent;
                resObj = {};
                if (result.statusCode == 200) {
                  if (result.data.code == 200) {
                    resultObj = (0, _tools.assertObject)(result.data.data); // 后台返回的数据
                    headWrapInfo = (0, _tools.assertObject)(resultObj.vip); // 个人中心头部的数据
                    vipIconList = (0, _tools.assertArray)(headWrapInfo.vip_equity); // 会员权益列表
                    bannerList = (0, _tools.assertArray)(resultObj.image); // 个人中心的轮播图数据
                    laBaMsg = headWrapInfo.user_vip_card_cue; // 小喇叭 图标后的消息文字   后端字段是 user_vip_card_cue
                    vipIcon = headWrapInfo.user_vip_card_icon; // 会员图标网络路径（就是那个V的图标）  后端字段是 user_vip_card_icon
                    vipTitle = headWrapInfo.vip_eco; // V的图标后的标题文字 后端字段是 vip_eco
                    vipBtnText = headWrapInfo.vip_button; // V的图标后的标题文字 后的按钮文字 后端字段是 vip_button
                    resObj = {
                      type: 'success',
                      msg: result.data.msg,
                      result: {
                        vipIconList: vipIconList,
                        // 会员权益列表
                        bannerList: bannerList,
                        // 个人中心的轮播图数据
                        laBaMsg: laBaMsg,
                        // 小喇叭 图标后的消息文字   后端字段是 user_vip_card_cue
                        vipIcon: vipIcon,
                        // 会员图标网络路径（就是那个V的图标）  后端字段是 user_vip_card_icon
                        vipTitle: vipTitle,
                        // V的图标后的标题文字 后端字段是 vip_eco
                        vipBtnText: vipBtnText // V的图标后的标题文字 后的按钮文字 后端字段是 vip_button
                      }
                    };
                  } else {
                    resObj = {
                      type: 'error',
                      msg: result.data.msg
                    };
                  }
                } else {
                  resObj = {
                    type: 'error',
                    msg: that.$errorMsg
                  };
                }
                resFn(resObj);
              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }());
  }), (0, _defineProperty2.default)(_methods, "getUserInfoFn", function getUserInfoFn() {
    var that = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(resFn, rejFn) {
        var result, resObj, resultObj, userInfoObj, userInfoAvatar, userInfoNickName, userInfoLv, userInfoMoney, userInfoCoupon, userInfoMc, userInfoIntegral, userInfoMobile, userInfoEncrypt, headWrapInfo, isVip, vipName, vipTes, vipEndTime, laBaMsg, vipIcon, vipTitle, vipBtnText, vipIconList, orderNumObj, orderNumUn, orderNumIng, orderNumEd;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return that.$request({
                  url: '/api/User/index'
                });
              case 2:
                result = _context4.sent;
                resObj = {};
                if (result.statusCode == 200) {
                  if (result.data.code == 200) {
                    resultObj = (0, _tools.assertObject)(result.data.data); // 后台返回的数据
                    // 个人中心头部的数据 - 用户的数据
                    userInfoObj = (0, _tools.assertObject)(resultObj.userinfo);
                    userInfoAvatar = userInfoObj.avatar; // 头像地址
                    userInfoNickName = userInfoObj.nickname; // 网名
                    userInfoLv = userInfoObj.lv; // 等级
                    userInfoMoney = userInfoObj.money; // 余额
                    userInfoCoupon = userInfoObj.coupon; // 优惠券数量
                    userInfoMc = userInfoObj.mc; // 商品券
                    userInfoIntegral = userInfoObj.integral; // 积分
                    userInfoMobile = userInfoObj.mobile; // 手机号
                    userInfoEncrypt = userInfoObj.encrypt; // 加密字符串
                    uni.setStorageSync('userInfoEncrypt', userInfoObj.encrypt);

                    // 个人中心头部的数据 - 卡片里的东西
                    headWrapInfo = (0, _tools.assertObject)(resultObj.userVip); // 
                    isVip = headWrapInfo.is_vip == 1 ? true : false; // 是否是vip用户
                    vipName = headWrapInfo.vip_name; // 会员名称   不是会员传的是 普通会员
                    vipTes = headWrapInfo.vip_tes; // 是否是体验卡 如果此字段是空表示什么都没有 不是空就显示在优享会员后面
                    vipEndTime = headWrapInfo.vip_end_time; // 会员过期时间文字  此字段没提示就是空  直接用就行了
                    laBaMsg = headWrapInfo.user_vip_card_cue; // 小喇叭 图标后的消息文字   后端字段是 user_vip_card_cue
                    vipIcon = headWrapInfo.user_vip_card_icon; // 会员图标网络路径（就是那个V的图标）  后端字段是 user_vip_card_icon
                    vipTitle = headWrapInfo.vip_eco; // V的图标后的标题文字 后端字段是 vip_eco
                    vipBtnText = headWrapInfo.vip_button; // V的图标后的标题文字 后的按钮文字 后端字段是 vip_button
                    vipIconList = (0, _tools.assertArray)(headWrapInfo.vip_equity); // 会员权益列表
                    // 我的订单-订单数 数据
                    orderNumObj = resultObj.orderNum;
                    orderNumUn = orderNumObj.non_order; // 我的订单-待支付数量
                    orderNumIng = orderNumObj.on_order; // 我的订单-进行中数量
                    orderNumEd = orderNumObj.com_order; // 我的订单-待评价数量
                    resObj = {
                      type: 'success',
                      msg: result.data.msg,
                      result: {
                        // 个人中心头部的数据 - 用户的数据
                        userInfoAvatar: userInfoAvatar,
                        // 头像地址
                        userInfoNickName: userInfoNickName,
                        // 网名
                        userInfoLv: userInfoLv,
                        // 等级
                        userInfoMoney: userInfoMoney,
                        // 余额
                        userInfoCoupon: userInfoCoupon,
                        // 优惠券数量
                        userInfoMc: userInfoMc,
                        // 商品券
                        userInfoIntegral: userInfoIntegral,
                        // 积分
                        userInfoMobile: userInfoMobile,
                        // 手机号
                        userInfoEncrypt: userInfoEncrypt,
                        // 加密字符串

                        isVip: isVip,
                        // 是否是vip用户
                        vipName: vipName,
                        // 会员名称   不是会员传的是 普通会员
                        vipTes: vipTes,
                        // 是否是体验卡 如果此字段是空表示什么都没有 不是空就显示在优享会员后面
                        vipEndTime: vipEndTime,
                        // 会员过期时间文字  此字段没提示就是空  直接用就行了

                        laBaMsg: laBaMsg,
                        // 小喇叭 图标后的消息文字   后端字段是 user_vip_card_cue
                        vipIcon: vipIcon,
                        // 会员图标网络路径（就是那个V的图标）  后端字段是 user_vip_card_icon
                        vipTitle: vipTitle,
                        // V的图标后的标题文字 后端字段是 vip_eco
                        vipBtnText: vipBtnText,
                        // V的图标后的标题文字 后的按钮文字 后端字段是 vip_button
                        vipIconList: vipIconList,
                        // 会员权益列表

                        // 我的订单-订单数 数据
                        orderNumUn: orderNumUn,
                        // 我的订单-待支付数量
                        orderNumIng: orderNumIng,
                        // 我的订单-进行中数量
                        orderNumEd: orderNumEd // 我的订单-待评价数量
                      }
                    };
                  } else {
                    resObj = {
                      type: 'error',
                      msg: result.data.msg
                    };
                  }
                } else {
                  resObj = {
                    type: 'error',
                    msg: that.$errorMsg
                  };
                }
                resFn(resObj);
              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      return function (_x4, _x5) {
        return _ref3.apply(this, arguments);
      };
    }());
  }), (0, _defineProperty2.default)(_methods, "unHasTokenGetUserInfo", function unHasTokenGetUserInfo(fn) {
    var _this2 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var that, result, _result$result, vipIconList, bannerList, laBaMsg, vipIcon, vipTitle, vipBtnText;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              that = _this2;
              _context5.next = 3;
              return that.getMyPageFn();
            case 3:
              result = _context5.sent;
              if (result.type == 'success') {
                _result$result = result.result, vipIconList = _result$result.vipIconList, bannerList = _result$result.bannerList, laBaMsg = _result$result.laBaMsg, vipIcon = _result$result.vipIcon, vipTitle = _result$result.vipTitle, vipBtnText = _result$result.vipBtnText;
                that.$store.commit('setPage', {
                  vipIconList: vipIconList,
                  bannerList: bannerList,
                  laBaMsg: laBaMsg,
                  vipIcon: vipIcon,
                  vipTitle: vipTitle,
                  vipBtnText: vipBtnText
                });
              } else {
                uni.showToast({
                  icon: 'none',
                  title: result.msg
                });
              }
              fn && fn();
            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }), (0, _defineProperty2.default)(_methods, "hasTokenGetUserInfo", function hasTokenGetUserInfo(fn) {
    var _this3 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
      var that, _yield$Promise$all, _yield$Promise$all2, myPageResult, userInfoResult, errorMsg, bannerList, _userInfoResult$resul, userInfoAvatar, userInfoNickName, userInfoLv, userInfoMoney, userInfoCoupon, userInfoMc, userInfoIntegral, userInfoMobile, userInfoEncrypt, isVip, vipName, vipTes, vipEndTime, laBaMsg, vipIcon, vipTitle, vipBtnText, vipIconList, orderNumUn, orderNumIng, orderNumEd;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              that = _this3;
              _context6.next = 3;
              return Promise.all([that.getMyPageFn(), that.getUserInfoFn()]);
            case 3:
              _yield$Promise$all = _context6.sent;
              _yield$Promise$all2 = (0, _slicedToArray2.default)(_yield$Promise$all, 2);
              myPageResult = _yield$Promise$all2[0];
              userInfoResult = _yield$Promise$all2[1];
              console.log('个人中心有登录状态下返回的数据');
              if (myPageResult.type == 'error') {
                errorMsg = myPageResult.msg;
              }
              if (userInfoResult.type == 'error') {
                errorMsg = userInfoResult.msg;
              }
              if (myPageResult.type == 'success' && userInfoResult.type == 'success') {
                bannerList = myPageResult.result.bannerList; // 个人中心的轮播图数据
                _userInfoResult$resul = userInfoResult.result, userInfoAvatar = _userInfoResult$resul.userInfoAvatar, userInfoNickName = _userInfoResult$resul.userInfoNickName, userInfoLv = _userInfoResult$resul.userInfoLv, userInfoMoney = _userInfoResult$resul.userInfoMoney, userInfoCoupon = _userInfoResult$resul.userInfoCoupon, userInfoMc = _userInfoResult$resul.userInfoMc, userInfoIntegral = _userInfoResult$resul.userInfoIntegral, userInfoMobile = _userInfoResult$resul.userInfoMobile, userInfoEncrypt = _userInfoResult$resul.userInfoEncrypt, isVip = _userInfoResult$resul.isVip, vipName = _userInfoResult$resul.vipName, vipTes = _userInfoResult$resul.vipTes, vipEndTime = _userInfoResult$resul.vipEndTime, laBaMsg = _userInfoResult$resul.laBaMsg, vipIcon = _userInfoResult$resul.vipIcon, vipTitle = _userInfoResult$resul.vipTitle, vipBtnText = _userInfoResult$resul.vipBtnText, vipIconList = _userInfoResult$resul.vipIconList, orderNumUn = _userInfoResult$resul.orderNumUn, orderNumIng = _userInfoResult$resul.orderNumIng, orderNumEd = _userInfoResult$resul.orderNumEd;
                that.$store.commit('setUserInfoAndPage', {
                  // 个人中心头部的数据 - 用户的数据
                  userInfoAvatar: userInfoAvatar,
                  // 头像地址
                  userInfoNickName: userInfoNickName,
                  // 网名
                  userInfoLv: userInfoLv,
                  // 等级
                  userInfoMoney: userInfoMoney,
                  // 余额
                  userInfoCoupon: userInfoCoupon,
                  // 优惠券数量
                  userInfoMc: userInfoMc,
                  // 商品券
                  userInfoIntegral: userInfoIntegral,
                  // 积分
                  userInfoMobile: userInfoMobile,
                  // 手机号
                  userInfoEncrypt: userInfoEncrypt,
                  // 加密字符串

                  isVip: isVip,
                  // 是否是vip用户
                  vipName: vipName,
                  // 会员名称   不是会员传的是 普通会员
                  vipTes: vipTes,
                  // 是否是体验卡 如果此字段是空表示什么都没有 不是空就显示在优享会员后面
                  vipEndTime: vipEndTime,
                  // 会员过期时间文字  此字段没提示就是空  直接用就行了

                  laBaMsg: laBaMsg,
                  // 小喇叭 图标后的消息文字   后端字段是 user_vip_card_cue
                  vipIcon: vipIcon,
                  // 会员图标网络路径（就是那个V的图标）  后端字段是 user_vip_card_icon
                  vipTitle: vipTitle,
                  // V的图标后的标题文字 后端字段是 vip_eco
                  vipBtnText: vipBtnText,
                  // V的图标后的标题文字 后的按钮文字 后端字段是 vip_button
                  vipIconList: vipIconList,
                  // 会员权益列表

                  // 我的订单-订单数 数据
                  orderNumUn: orderNumUn,
                  // 我的订单-待支付数量
                  orderNumIng: orderNumIng,
                  // 我的订单-进行中数量
                  orderNumEd: orderNumEd,
                  // 我的订单-待评价数量

                  bannerList: bannerList // 个人中心的轮播图数据
                });
              } else {
                uni.showToast({
                  icon: 'none',
                  msg: errorMsg
                });
              }
              fn && fn();
            case 12:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  }), (0, _defineProperty2.default)(_methods, "getLoginData", function getLoginData() {
    var _this4 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
      var that;
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              that = _this4;
              return _context7.abrupt("return", new Promise(function (resFn, rejFn) {
                uni.getUserInfo({
                  //获取用户信息
                  success: function success(userInfoRes) {
                    //第一次提示用户授权 成功后的回调 授权后再点直接成功 拿回来用户信息
                    uni.login({
                      success: function success(e) {
                        /* 
                        console.log(
                        	'uni.getUserInfo', userInfoRes, '\n',
                        	'uni.login', e, '\n',
                        );
                         */
                        resFn({
                          type: 'success',
                          msg: '成功',
                          result: {
                            encryptedData: userInfoRes.encryptedData,
                            iv: userInfoRes.iv,
                            code: e.code
                          }
                        });
                      }
                    });
                  }
                });
              }));
            case 2:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }))();
  }), (0, _defineProperty2.default)(_methods, "getUserProfileFn", function getUserProfileFn() {
    return new Promise(function (resFn) {
      uni.getUserProfile({
        desc: '登录信息',
        success: function success(e) {
          console.log('uni.getUserProfile success函数', e);
          resFn({
            type: 'success',
            result: {
              avatarUrl: e.userInfo.avatarUrl,
              nickName: e.userInfo.nickName,
              province: e.userInfo.province,
              city: e.userInfo.city,
              gender: e.userInfo.gender
            },
            msg: '获取个人信息成功'
          });
        },
        fail: function fail(e) {
          console.log('失败', e);
          resFn({
            type: 'error',
            result: e,
            msg: '获取个人信息失败'
          });
        }
      });
    });
  }), (0, _defineProperty2.default)(_methods, "loginFn", function loginFn() {
    var _this5 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
      var that, userProfileObject, avatarUrl, nickName, province, city, gender;
      return _regenerator.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              that = _this5;
              _context9.next = 3;
              return that.getUserProfileFn();
            case 3:
              userProfileObject = _context9.sent;
              console.log('getUserProfileFn 返回数据', userProfileObject);
              if (!(userProfileObject.type == 'success')) {
                _context9.next = 13;
                break;
              }
              avatarUrl = userProfileObject.result.avatarUrl;
              nickName = userProfileObject.result.nickName;
              province = userProfileObject.result.province;
              city = userProfileObject.result.city;
              gender = userProfileObject.result.gender;
              _context9.next = 15;
              break;
            case 13:
              uni.showToast({
                icon: 'none',
                title: '获取个人信息失败'
              });
              return _context9.abrupt("return", false);
            case 15:
              uni.getUserInfo({
                //获取用户信息
                success: function success(userInfoRes) {
                  var iv = encodeURIComponent(userInfoRes.iv);
                  var encryptedData = encodeURIComponent(userInfoRes.encryptedData);
                  console.log('uni.getUserInfo success函数 userInfoRes 数据', userInfoRes);
                  //第一次提示用户授权 成功后的回调 授权后再点直接成功 拿回来用户信息
                  uni.login({
                    success: function success(e) {
                      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
                        var code, sharerObj, sharerStr, data, result, token;
                        return _regenerator.default.wrap(function _callee8$(_context8) {
                          while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                code = e.code; // 登录时 把分享者的字符串带上
                                console.log('uni.login success函数 e数据', e);
                                sharerObj = {};
                                sharerStr = uni.getStorageSync('sharer'); // 带上分享上级的加密字符串
                                if (sharerStr) {
                                  sharerObj.sharer = sharerStr;
                                }
                                data = _objectSpread({
                                  platform: 'wechat_applet',
                                  code: code,
                                  iv: iv,
                                  encryptedData: encryptedData,
                                  avatar: avatarUrl,
                                  nickname: nickName,
                                  area: "".concat(en2ch(province), "-").concat(en2ch(city)),
                                  sex: gender,
                                  daren_id: uni.getStorageSync('daren_id')
                                }, sharerObj);
                                _context8.next = 8;
                                return that.$request({
                                  loading: true,
                                  url: '/api/User/third',
                                  data: data
                                });
                              case 8:
                                result = _context8.sent;
                                console.log('用户登录时带的参数', data, '\n', '返回的结果', result, '\n');
                                if (result.statusCode == 200) {
                                  if (result.data.code == 200) {
                                    that.logOutFn(); // 先退出登录一下
                                    token = (0, _tools.assertObject)(result.data.data).token;
                                    that.$store.commit('setToken', token);
                                    uni.setStorageSync('token', token);
                                    that.hideAllFn();
                                    uni.showLoading({});
                                    that.hasTokenGetUserInfo(function () {
                                      uni.hideLoading();
                                      uni.showToast({
                                        icon: 'success',
                                        title: '登录成功'
                                      });
                                      setTimeout(function () {
                                        that.toBackFn(); // 正常返回上一页 如果没有上一页 就回首页
                                      }, 500);
                                    });
                                  } else {
                                    uni.showToast({
                                      icon: 'none',
                                      title: result.data.msg
                                    });
                                  }
                                } else {
                                  uni.showToast({
                                    icon: 'none',
                                    title: that.$errorMsg
                                  });
                                }
                              case 11:
                              case "end":
                                return _context8.stop();
                            }
                          }
                        }, _callee8);
                      }))();
                    }
                  });
                },
                fail: function fail(e) {
                  console.log('登录失败 小程序 getUserInfo 接口fail ', e);
                }
              });
            case 16:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }))();
  }), (0, _defineProperty2.default)(_methods, "logOutFn", function logOutFn() {
    var that = this;
    uni.setStorageSync('token', ''); // 清空token
    uni.setStorageSync('sharer', ''); // 清空分享上级的加密字符串

    that.$store.commit('setToken', '');
    that.$store.commit('setUserInfoAndPage', {
      userInfoAvatar: '',
      // 头像地址
      userInfoNickName: '',
      // 网名
      userInfoLv: 0,
      // 等级
      userInfoMoney: 0,
      // 余额
      userInfoCoupon: 0,
      // 优惠券数量
      userInfoMc: 0,
      // 商品券
      userInfoIntegral: 0,
      // 积分
      userInfoMobile: '',
      // 手机号
      userInfoEncrypt: '',
      // 加密字符串

      isVip: false,
      // 是否是vip用户
      vipName: '',
      // 会员名称   不是会员传的是 普通会员
      vipTes: '',
      // 是否是体验卡 如果此字段是空表示什么都没有 不是空就显示在优享会员后面
      vipEndTime: '',
      // 会员过期时间文字  此字段没提示就是空  直接用就行了

      laBaMsg: '',
      // 小喇叭 图标后的消息文字   后端字段是 user_vip_card_cue
      vipIcon: '',
      // 会员图标网络路径（就是那个V的图标）  后端字段是 user_vip_card_icon
      vipTitle: '',
      // V的图标后的标题文字 后端字段是 vip_eco
      vipBtnText: '',
      // V的图标后的标题文字 后的按钮文字 后端字段是 vip_button
      vipIconList: [],
      // 会员权益列表

      orderNumUn: 0,
      // 我的订单-待支付数量
      orderNumIng: 0,
      // 我的订单-进行中数量
      orderNumEd: 0,
      // 我的订单-待评价数量

      bannerList: [] // 个人中心轮播图数据
    });
  }), (0, _defineProperty2.default)(_methods, "lookBigImgFn", function lookBigImgFn(imgList) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    uni.previewImage({
      current: index,
      //预览图片的下标
      urls: imgList //预览图片的地址，必须要数组形式，如果不是数组形式就转换成数组形式就可以
    });
  }), (0, _defineProperty2.default)(_methods, "checkSessionFn", function checkSessionFn() {
    return new Promise(function (resFn, rejFn) {
      var resObj = {};
      uni.login({
        success: function success(loginInfo) {
          if (loginInfo.errMsg == 'login:ok') {
            resObj = {
              type: 'success',
              msg: '成功',
              result: {
                code: loginInfo.code
              }
            };
          } else {
            resObj = {
              type: 'error',
              msg: '失败'
            };
          }
          resFn(resObj);
        }
      });
    });
  }), (0, _defineProperty2.default)(_methods, "wxGetTelFn", function wxGetTelFn(e) {
    var _this6 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
      var that, checkSessionResult, code, result;
      return _regenerator.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              that = _this6;
              _context10.next = 3;
              return that.checkSessionFn();
            case 3:
              checkSessionResult = _context10.sent;
              if (!(checkSessionResult.type != 'success')) {
                _context10.next = 7;
                break;
              }
              uni.showToast({
                icon: 'none',
                title: '获取手机号失败'
              });
              return _context10.abrupt("return", false);
            case 7:
              code = checkSessionResult.result.code;
              _context10.next = 10;
              return that.$request({
                method: 'post',
                url: '/api/User/BinMobile',
                data: {
                  code: code,
                  encryptedData: e.detail.encryptedData,
                  iv: e.detail.iv
                }
              });
            case 10:
              result = _context10.sent;
              console.log('通过微信小程序授权获取用户手机号接口返回数据', result);
              uni.$emit('wxBindTel', result);
            case 13:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }))();
  }), (0, _defineProperty2.default)(_methods, "msg", function msg(title) {
    uni.showToast({
      title: title,
      icon: 'none'
    });
  }), (0, _defineProperty2.default)(_methods, "hideAllFn", function hideAllFn() {
    uni.hideLoading();
    uni.hideToast();
  }), (0, _defineProperty2.default)(_methods, "telFn", function telFn(tel) {
    uni.makePhoneCall({
      phoneNumber: tel
    });
  }), (0, _defineProperty2.default)(_methods, "swiperClickFn", function swiperClickFn(item) {
    var that = this;
    console.log('点击轮播图跳转的数据', item);
    /*
    	轮播图类型  
    		0：无跳转
    		1：跳转到单个商品详情
    		2：跳转到商品分类
    		3：跳转到多个商品列表
    		4：跳转到文章
    		5：跳转到外部链接
    		6：跳转到小程序
    		7：跳转平台链接
    		8：跳转吃什么详情
    		9：跳转专题页面
    */
    if (item.type == 1) {
      // 1：跳转到单个商品详情
      that.navigateToFn({
        url: "/packageB/goods-detail/goods-detail?goods_id=".concat(item.content)
      });
    } else if (item.type == 2) {
      // 2：跳转到商品分类
      var str = item.content;
      var idArr = str.split('_');
      var topClassId = idArr[0];
      var leftClassId = idArr[1];
      uni.setStorageSync('home2Class', {
        topClassId: topClassId,
        leftClassId: leftClassId
      });
      that.navigateToFn({
        isTab: 1,
        url: "/pages/class/class"
      });
    } else if (item.type == 3) {
      // 3：跳转到多个商品列表
      that.navigateToFn({
        url: "/pages/list-page/home-swiper?goodsIdList=".concat(item.content)
      });
    } else if (item.type == 4) {
      // 4：跳转到文章
      uni.setStorageSync('helpQuestionItem', {
        title: '',
        content: item.content
      });
      that.navigateToFn({
        url: "/packageA/kefu/help-detail"
      });
    } else if (item.type == 5) {
      // 5：跳转到外部链接
      that.navigateToFn({
        url: "/packageA/web-view/index?data=".concat(item.content, "&title=").concat(item.title)
      });
    } else if (item.type == 6) {
      // 6：跳转到小程序
      var AppId, AppUrl;
      if (checkTypeFn(item.content) == 'String') {
        var info = JSON.parse(item.content);
        AppId = info.AppId;
        AppUrl = info.AppUrl;
      } else {
        AppId = item.content.appid;
        AppUrl = item.content.path;
      }
      uni.navigateToMiniProgram({
        appId: AppId,
        path: AppUrl
      });
    } else if (item.type == 7) {
      // 7：跳转平台链接
      var tabBarList = ["pages/index/index", "pages/class/class", "pages/eat/eat", "pages/cart/cart", "pages/my/my"];
      var navigateToOptions = {
        url: url2navigateToUrlFn(item.content)
      };
      if (tabBarList.includes(item.content)) {
        navigateToOptions.isTab = true;
      }
      that.navigateToFn(navigateToOptions);
    } else if (item.type == 8) {
      // 8：跳转吃什么详情
      that.navigateToFn({
        url: url2navigateToUrlFn(item.content)
      });
    } else if (item.type == 9) {
      that.navigateToFn({
        url: "/packageA/activity/activity?id=".concat(item.content)
      });
    } else {
      return false;
    }
  }), (0, _defineProperty2.default)(_methods, "getDefaultSpecFn", function getDefaultSpecFn(specFilter, specGoodsDetail) {
    var defaultSelectArr = [];
    specFilter.forEach(function (itme) {
      defaultSelectArr.push(itme.itme[0].id);
    });
    specGoodsDetail.forEach(function (item) {
      defaultSelectArr.push(item.key.split('_').map(function (item) {
        return (0, _tools.transNumFn)(item);
      }));
    });
    return {};
  }), (0, _defineProperty2.default)(_methods, "addimgPathHostFn", function addimgPathHostFn(str) {
    var that = this;
    var imgPathStr = (0, _tools.assertString)(str);
    if (imgPathStr.includes('http://') || imgPathStr.includes('https://')) {
      return imgPathStr;
    } else {
      return "".concat(that.configInfo.path).concat(imgPathStr);
    }
  }), (0, _defineProperty2.default)(_methods, "getlikeComment", function getlikeComment(id) {
    var _this7 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
      var that;
      return _regenerator.default.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              that = _this7;
              return _context12.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(resFn) {
                  var result, resultObj, backdata;
                  return _regenerator.default.wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          _context11.next = 2;
                          return that.$request({
                            url: '/api/user/likeComment',
                            data: {
                              id: id
                            }
                          });
                        case 2:
                          result = _context11.sent;
                          resultObj = {};
                          if (result.statusCode == 200) {
                            if (result.data.code == 200) {
                              backdata = (0, _tools.assertObject)(result.data);
                              resFn({
                                type: 'success',
                                msg: result.data.msg,
                                result: {
                                  backdata: backdata
                                }
                              });
                            } else {
                              resultObj = {
                                type: 'error',
                                msg: result.data.msg,
                                result: result
                              };
                            }
                          } else {
                            resultObj = {
                              type: 'error',
                              msg: that.$errorMsg,
                              result: result
                            };
                          }
                          resFn(resultObj);
                        case 6:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee11);
                }));
                return function (_x6) {
                  return _ref4.apply(this, arguments);
                };
              }()));
            case 2:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }))();
  }), (0, _defineProperty2.default)(_methods, "flowgoods", function flowgoods(id) {
    var _this8 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14() {
      var that;
      return _regenerator.default.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              that = _this8;
              return _context14.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13(resFn) {
                  var result, resultObj, backdata;
                  return _regenerator.default.wrap(function _callee13$(_context13) {
                    while (1) {
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          _context13.next = 2;
                          return that.$request({
                            url: '/api/user/likeGoods',
                            data: {
                              id: id
                            }
                          });
                        case 2:
                          result = _context13.sent;
                          resultObj = {};
                          if (result.statusCode == 200) {
                            if (result.data.code == 200) {
                              backdata = (0, _tools.assertObject)(result.data);
                              resFn({
                                type: 'success',
                                msg: result.data.msg,
                                result: {
                                  backdata: backdata
                                }
                              });
                            } else {
                              resultObj = {
                                type: 'error',
                                msg: result.data.msg,
                                result: result
                              };
                            }
                          } else {
                            resultObj = {
                              type: 'error',
                              msg: that.$errorMsg,
                              result: result
                            };
                          }
                          resFn(resultObj);
                        case 6:
                        case "end":
                          return _context13.stop();
                      }
                    }
                  }, _callee13);
                }));
                return function (_x7) {
                  return _ref5.apply(this, arguments);
                };
              }()));
            case 2:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }))();
  }), (0, _defineProperty2.default)(_methods, "flowUser", function flowUser(user_id) {
    var _this9 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee16() {
      var that;
      return _regenerator.default.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              that = _this9;
              return _context16.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15(resFn) {
                  var result, resultObj, backdata, is_follow;
                  return _regenerator.default.wrap(function _callee15$(_context15) {
                    while (1) {
                      switch (_context15.prev = _context15.next) {
                        case 0:
                          _context15.next = 2;
                          return that.$request({
                            url: '/api/user/followUser',
                            data: {
                              user_id: user_id
                            }
                          });
                        case 2:
                          result = _context15.sent;
                          resultObj = {};
                          if (result.statusCode == 200) {
                            if (result.data.code == 200) {
                              backdata = (0, _tools.assertObject)(result.data);
                              if (result.data.msg == '关注成功') {
                                is_follow = true;
                              } else {
                                is_follow = false;
                              }
                              resFn({
                                type: 'success',
                                msg: result.data.msg,
                                is_follow: is_follow,
                                result: {
                                  backdata: backdata
                                }
                              });
                            } else {
                              resultObj = {
                                type: 'error',
                                msg: result.data.msg,
                                result: result
                              };
                            }
                          } else {
                            resultObj = {
                              type: 'error',
                              msg: that.$errorMsg,
                              result: result
                            };
                          }
                          resFn(resultObj);
                        case 6:
                        case "end":
                          return _context15.stop();
                      }
                    }
                  }, _callee15);
                }));
                return function (_x8) {
                  return _ref6.apply(this, arguments);
                };
              }()));
            case 2:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16);
    }))();
  }), (0, _defineProperty2.default)(_methods, "getNewVersionFn", function getNewVersionFn() {
    var isCanIUse = uni.canIUse("getUpdateManager");
    console.log('当前微信版本是否 支持更新小程序代码, canIUse("getUpdateManager")返回结果', isCanIUse);
    if (isCanIUse) {
      var updateManager = uni.getUpdateManager();
      console.log('uni.getUpdateManager 更新详情对象 updateManager', updateManager);
      updateManager.onCheckForUpdate(function (res) {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            uni.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success: function success(res) {
                if (res.confirm) {
                  updateManager.applyUpdate();
                }
              }
            });
          });
          updateManager.onUpdateFailed(function () {
            uni.showModal({
              title: '已经有新版本了哟~',
              content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
            });
          });
        }
      });
    } else {
      uni.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      });
    }
  }), (0, _defineProperty2.default)(_methods, "checkRangeFn", function checkRangeFn(locationStr) {
    var that = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee17(resFn, rejFn) {
        var locationArr, flag, result, resultObj;
        return _regenerator.default.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                locationArr = locationStr.split(',');
                if (locationArr[0] - 0 && locationArr[1] - 0) {
                  flag = true;
                } else {
                  flag = false;
                }
                if (flag) {
                  _context17.next = 5;
                  break;
                }
                resFn({
                  type: 'error',
                  msg: '缺少坐标参数',
                  result: locationStr
                });
                return _context17.abrupt("return", false);
              case 5:
                _context17.next = 7;
                return that.$request({
                  url: '/api/Address/delivery_range',
                  data: {
                    location: locationStr
                  }
                });
              case 7:
                result = _context17.sent;
                resultObj = {};
                if (result.statusCode == 200) {
                  if (result.data.code == 200) {
                    if (result.data.data) {
                      resultObj.type = 'success';
                      resultObj.msg = '在配送范围内';
                      resultObj.result = result;
                    } else {
                      resultObj.type = 'error';
                      resultObj.msg = '地址不在配送范围内';
                      resultObj.result = result;
                    }
                  } else {
                    resultObj.type = 'error';
                    resultObj.msg = result.data.msg;
                    resultObj.result = result;
                  }
                } else {
                  resultObj.type = 'error';
                  resultObj.msg = that.$errorMsg;
                  resultObj.result = result;
                }
                resFn(resultObj);
              case 11:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17);
      }));
      return function (_x9, _x10) {
        return _ref7.apply(this, arguments);
      };
    }());
  }), (0, _defineProperty2.default)(_methods, "getLocationInfoFn", function getLocationInfoFn() {
    var that = this;
    return new Promise(function (resFn) {
      uni.getLocation({
        type: 'gcj02',
        success: function success(locationInfo) {
          resFn({
            type: 'success',
            msg: '成功',
            result: locationInfo
          });
        },
        fail: function fail(e) {
          resFn({
            type: 'error',
            msg: '获取位置失败',
            result: e
          });
        }
      });
    });
  }), (0, _defineProperty2.default)(_methods, "getDuozitidianFn", function getDuozitidianFn(lon, lat) {
    var that = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee18(resFn) {
        var resObj, result, duozitidianList;
        return _regenerator.default.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                resObj = {};
                _context18.next = 3;
                return that.$request({
                  method: 'post',
                  url: "/api/Orderbranch/spusList",
                  data: {
                    lon: lon,
                    lat: lat
                  }
                });
              case 3:
                result = _context18.sent;
                if (result.statusCode == 200) {
                  if (result.data.code == 200) {
                    duozitidianList = (0, _tools.assertArray)(result.data.data).map(function (item) {
                      return {
                        id: item.id,
                        zitidianName: item.name,
                        zitidianAddressText: item.address,
                        zitidianImage: item.img,
                        zitidianTime: item.bh,
                        zitidianDist: item.dist,
                        isRange: item.is_range == 1
                      };
                    });
                    resObj = {
                      msg: result.data.msg,
                      type: 'success',
                      result: duozitidianList
                    };
                  } else {
                    resObj = {
                      msg: result.data.msg,
                      type: 'error',
                      result: result
                    };
                  }
                } else {
                  resObj = {
                    msg: that.$errorMsg,
                    type: 'error',
                    result: result
                  };
                }
                resFn(resObj);
              case 6:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18);
      }));
      return function (_x11) {
        return _ref8.apply(this, arguments);
      };
    }());
  }), (0, _defineProperty2.default)(_methods, "requestSubscribeMessageFn", function requestSubscribeMessageFn(templateIdList) {
    return new Promise(function (resFn) {
      var requestSubscribeMessageOptions = {
        tmplIds: templateIdList,
        success: function success(res) {
          resFn({
            type: 'success',
            result: res
          });
        },
        fail: function fail(e) {
          resFn({
            type: 'error',
            result: e
          });
        },
        complete: function complete(e) {
          console.log('mixin模板消息 requestSubscribeMessageFn 接口返回的东西', e);
        }
      };
      console.log(requestSubscribeMessageOptions);
      uni.requestSubscribeMessage(requestSubscribeMessageOptions);
    });
  }), (0, _defineProperty2.default)(_methods, "rpxTopxFn", function rpxTopxFn(rpx) {
    return windowWidth * rpx / 750;
  }), (0, _defineProperty2.default)(_methods, "getCurrentAddressInfo", function getCurrentAddressInfo(locationInfo) {
    var that = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee19(resFn) {
        var qqmapsdk;
        return _regenerator.default.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                qqmapsdk = new QQMapWX({
                  key: that.configInfo.tx_map_key
                });
                qqmapsdk.reverseGeocoder({
                  location: {
                    latitude: locationInfo.latitude,
                    longitude: locationInfo.longitude
                  },
                  poi_options: "address_format=short",
                  success: function (_success) {
                    function success(_x13) {
                      return _success.apply(this, arguments);
                    }
                    success.toString = function () {
                      return _success.toString();
                    };
                    return success;
                  }(function (res) {
                    resFn({
                      type: success,
                      result: res.result
                    });
                  }),
                  fail: function fail(e) {
                    resFn({
                      type: error,
                      msg: 'err:mapSdk',
                      result: e
                    });
                  },
                  complete: function complete(e) {
                    console.log('qqmapsdk.reverseGeocoder 函数运行完的结果', e);
                  }
                });
              case 2:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19);
      }));
      return function (_x12) {
        return _ref9.apply(this, arguments);
      };
    }());
  }), (0, _defineProperty2.default)(_methods, "copyStrFn", function copyStrFn(copyStr, fn) {
    uni.setClipboardData({
      data: copyStr,
      success: function success() {
        fn && fn();
      }
    });
  }), (0, _defineProperty2.default)(_methods, "copyFn", function copyFn(copyStr) {
    this.copyStrFn(copyStr, function () {
      uni.showToast({
        icon: 'success',
        title: '拷贝成功'
      });
    });
  }), (0, _defineProperty2.default)(_methods, "vibrateFn", function vibrateFn() {
    uni.vibrateShort();
  }), (0, _defineProperty2.default)(_methods, "isOpenGps", function isOpenGps() {
    var systemInfo = uni.getSystemInfoSync();
    if (systemInfo.brand == 'devtools') {
      return true;
    }
    return systemInfo.locationEnabled;
  }), _methods),
  // <------methods 结束

  computed: _objectSpread({
    /* 
    	@description 是否登录
    	@return <Boolean>
    		true 是已登录
    		false 是未登录
    */
    userInfoEncrypt: function userInfoEncrypt() {
      return uni.getStorageSync('userInfoEncrypt');
    },
    isLogin: function isLogin() {
      return uni.getStorageSync('token');
    },
    globalToken: function globalToken() {
      return uni.getStorageSync('token');
    },
    /*
    	@description 当前用户是否绑定了手机号
    	@return <Boolean>
    		true 已绑定
    		false 未绑定
    */
    userIsBindMobile: function userIsBindMobile() {
      if (this.isLogin && "".concat(this.userInfoMobile).length === 11) {
        return true;
      }
      return false;
    },
    /* 
    	是否全角
    		返回true是全角
    		返回false是半角
    */
    isAllAngle: function isAllAngle() {
      var that = this;
      return that.configInfo.btn_type == 1;
    },
    /*
    	@description 后台是否开启 短信 功能 
    	@return <Boolean>
    		true 表示 后台有开启 短信服务
    		false 表示 后台没开启 短信服务
    */
    calcIsOpenSMFlag: function calcIsOpenSMFlag() {
      var that = this;
      /* 
      	枚举映射对象 规则是
      		 1 表示开启
      		 0 表示关闭
      */
      var mapEnumObj = {
        '1': true,
        '0': false
      };
      var flag = that.configInfo.sm_status;
      return mapEnumObj[flag];
    },
    /*
    	@return <Boolean>
    	是否使用了优惠券背景图片
    		返回true 使用了背景图片
    		返回false 使用了背景颜色
    */
    isUseCouponBgImg: function isUseCouponBgImg() {
      return this.configInfo.coupon_is_back == 2;
    },
    rancolor: function rancolor() {
      var quotes = ['purple', 'purplered', 'bluepurple', 'red', 'aquablue', 'orangered', 'blue', 'orange', 'orangeyellow', 'indigo', 'cyan', 'yellow', 'teal', 'lime', 'green', 'yellowgreen'];
      var min = 0;
      var max = 15;
      var r = Math.round(Math.random() * (max - min)) + min;
      return quotes[r];
    },
    /*
    	@description
    		全局的是否显示吃什么页面
    	@return
    		<Boolean>
    		true 表示开启
    		false 表示关闭
    */
    isOpenEatPage: function isOpenEatPage() {
      var that = this;
      var configInfo = (0, _tools.assertObject)(that.configInfo);
      var tabBar = (0, _tools.assertArray)(configInfo.tabbar);
      var isOpenEatPageFlag = false;
      tabBar.forEach(function (item) {
        if (item.field == 'c') {
          if (item.xs == 1) {
            isOpenEatPageFlag = true;
          } else {
            isOpenEatPageFlag = false;
          }
        }
      });
      return isOpenEatPageFlag;
    }
  }, (0, _vuex.mapState)({
    configInfo: function configInfo(store) {
      return store.configInfo;
    },
    // 全局的配置信息
    appStaticPath: function appStaticPath(store) {
      return store.appStaticPath;
    },
    // 设置程序里使用的静态图片路径 (永远不换的图片)
    MenuList: function MenuList(store) {
      return store.MenuList;
    },
    // tab-bar 的数据
    isiPhoneX: function isiPhoneX(store) {
      return store.isiPhoneX;
    },
    // 是否iphonx 
    globalToken: function globalToken(store) {
      return store.token;
    },
    // 全局存的 token 串			
    isLogin: function isLogin(store) {
      return store.token;
    },
    // 全局存的 token 串	
    backIconTop: function backIconTop(store) {
      return store.backIconTop;
    },
    isRunBindMobileFunc: function isRunBindMobileFunc(store) {
      return (0, _tools.transNumFn)((0, _tools.assertObject)(store.configInfo).manbintel) == 1 ? this.isLogin && this.userIsBindMobile : this.isLogin;
    }
  })),
  // 全局的 filters 
  filters: {
    //  保留两位小数
    filterTransNum: function filterTransNum(number) {
      return (0, _tools.toDoubleNumFn)((0, _tools.transNumFn)(number));
    },
    // 把规格字符串的;分好 替换成空格展示
    filterSpecName: function filterSpecName(specKeyName) {
      specKeyName = (0, _tools.assertString)(specKeyName);
      return "\u5DF2\u9009: ".concat(specKeyName.replace(/;/ig, ' '));
    }
  },
  // 卸载页面时关闭登录框
  onUnload: function onUnload() {
    this.closeGlobalLoginFn(false);
  },
  // 切到其他页面时关闭登录框
  onHide: function onHide() {
    this.closeGlobalLoginFn(false);
  },
  onShow: function onShow() {
    uni.hideTabBar();
  },
  onLoad: function onLoad() {}
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 6:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 60:
/*!************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ 61)();
module.exports = runtime;

/***/ }),

/***/ 61:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 62:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 63:
/*!******************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/store/$t.mixin.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 38);
var _store = _interopRequireDefault(__webpack_require__(/*! @/store */ 37));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// 尝试将用户在根目录中的store/index.js的vuex的state变量加载到全局变量中
var $tStoreKey = [];
try {
  $tStoreKey = _store.default.state ? Object.keys(_store.default.state) : [];
} catch (e) {}
module.exports = {
  computed: _objectSpread({}, (0, _vuex.mapState)($tStoreKey))
};

/***/ }),

/***/ 64:
/*!********************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/tuniao-ui/libs/mixin/mpShare.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {module.exports = {
  onLoad: function onLoad() {
    // 设置默认的转发参数
    this.$t.mpShare = {
      // 分享的标题，默认为小程序名称
      title: '',
      // 分享的路径，默认为当前页面
      path: '',
      // 分享时显示的图片，默认为当前页面截图
      imageUrl: '',
      // 当前页面是否可以分享
      share: true
    };
    if (!this.$t.mpShare.share) {
      uni.hideShareMenu();
    }
  },
  onShareAppMessage: function onShareAppMessage() {
    return this.$t.mpShare;
  },
  onShareTimeline: function onShareTimeline() {
    return {
      title: this.$t.mpShare.title,
      query: this.$t.mpShare.path.substring(this.$t.mpShare.path.indexOf('?') + 1, this.$t.mpShare.path.length),
      imageUrl: this.$t.mpShare.imageUrl
    };
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 7:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 77:
/*!**********************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/libs/mixin/template_page_mixin.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ 60);
var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 62);
/**
 * 演示页面mixin
 */
module.exports = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // 更新顶部导航栏信息
    this.updateCustomBarInfo();
  },
  methods: {
    // 点击左上角返回按钮时触发事件
    goBack: function goBack() {
      // 通过判断当前页面的页面栈信息，是否有上一页进行返回，如果没有则跳转到首页
      var pages = getCurrentPages();
      if (pages && pages.length > 0) {
        var firstPage = pages[0];
        if (pages.length == 1 && (!firstPage.route || firstPage.route != 'pages/index')) {
          uni.reLaunch({
            url: '/pages/index'
          });
        } else {
          uni.navigateBack({
            delta: 1
          });
        }
      } else {
        uni.reLaunch({
          url: '/pages/index'
        });
      }
    },
    gohome: function gohome() {
      uni.reLaunch({
        url: '/pages/index'
      });
    },
    // 更新顶部导航栏信息
    updateCustomBarInfo: function updateCustomBarInfo() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var customBarHeight, statusBarHeight, navBarInfo;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 获取vuex中的自定义顶栏的高度
                customBarHeight = _this.vuex_custom_bar_height;
                statusBarHeight = _this.vuex_status_bar_height; // 如果获取失败则重新获取
                if (customBarHeight) {
                  _context.next = 15;
                  break;
                }
                _context.prev = 3;
                _context.next = 6;
                return _this.$t.updateCustomBar();
              case 6:
                navBarInfo = _context.sent;
                customBarHeight = navBarInfo.customBarHeight;
                statusBarHeight = navBarInfo.statusBarHeight;
                _context.next = 15;
                break;
              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                setTimeout(function () {
                  _this.updateCustomBarInfo();
                }, 10);
                return _context.abrupt("return");
              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 11]]);
      }))();
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 8:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 99:
/*!****************************************************************************!*\
  !*** C:/Users/11300/Desktop/欢禧家前端/components/mescroll-uni/mescroll-uni.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MeScroll;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/* mescroll
 * version 1.2.5
 * 2020-03-15 wenju
 * http://www.mescroll.com
 */

function MeScroll(options, isScrollBody) {
  var me = this;
  me.version = '1.2.5'; // mescroll版本号
  me.options = options || {}; // 配置
  me.isScrollBody = isScrollBody || false; // 滚动区域是否为原生页面滚动; 默认为scroll-view

  me.isDownScrolling = false; // 是否在执行下拉刷新的回调
  me.isUpScrolling = false; // 是否在执行上拉加载的回调
  var hasDownCallback = me.options.down && me.options.down.callback; // 是否配置了down的callback

  // 初始化下拉刷新
  me.initDownScroll();
  // 初始化上拉加载,则初始化
  me.initUpScroll();

  // 自动加载
  setTimeout(function () {
    // 待主线程执行完毕再执行,避免new MeScroll未初始化,在回调获取不到mescroll的实例
    // 自动触发下拉刷新 (只有配置了down的callback才自动触发下拉刷新)
    if (me.optDown.use && me.optDown.auto && hasDownCallback) {
      if (me.optDown.autoShowLoading) {
        me.triggerDownScroll(); // 显示下拉进度,执行下拉回调
      } else {
        me.optDown.callback && me.optDown.callback(me); // 不显示下拉进度,直接执行下拉回调
      }
    }
    // 自动触发上拉加载
    setTimeout(function () {
      // 延时确保先执行down的callback,再执行up的callback,因为部分小程序emit是异步,会导致isUpAutoLoad判断有误
      me.optUp.use && me.optUp.auto && !me.isUpAutoLoad && me.triggerUpScroll();
    }, 100);
  }, 30); // 需让me.optDown.inited和me.optUp.inited先执行
}

/* 配置参数:下拉刷新 */
MeScroll.prototype.extendDownScroll = function (optDown) {
  // 下拉刷新的配置
  MeScroll.extend(optDown, {
    use: true,
    // 是否启用下拉刷新; 默认true
    auto: true,
    // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
    native: false,
    // 是否使用系统自带的下拉刷新; 默认false; 仅mescroll-body生效 (值为true时,还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)
    autoShowLoading: false,
    // 如果设置auto=true(在初始化完毕之后自动执行下拉刷新的回调),那么是否显示下拉刷新的进度; 默认false
    isLock: false,
    // 是否锁定下拉刷新,默认false;
    offset: 80,
    // 在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调
    startTop: 100,
    // scroll-view滚动到顶部时,此时的scroll-top不一定为0, 此值用于控制最大的误差
    fps: 80,
    // 下拉节流 (值越大每秒刷新频率越高)
    inOffsetRate: 1,
    // 在列表顶部,下拉的距离小于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉
    outOffsetRate: 0.2,
    // 在列表顶部,下拉的距离大于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉
    bottomOffset: 20,
    // 当手指touchmove位置在距离body底部20px范围内的时候结束上拉刷新,避免Webview嵌套导致touchend事件不执行
    minAngle: 45,
    // 向下滑动最少偏移的角度,取值区间  [0,90];默认45度,即向下滑动的角度大于45度则触发下拉;而小于45度,将不触发下拉,避免与左右滑动的轮播等组件冲突;
    textInOffset: '下拉刷新',
    // 下拉的距离在offset范围内的提示文本
    textOutOffset: '释放更新',
    // 下拉的距离大于offset范围的提示文本
    textLoading: '加载中 ...',
    // 加载中的提示文本
    bgColor: "transparent",
    // 背景颜色 (建议在pages.json中再设置一下backgroundColorTop)
    textColor: "gray",
    // 文本颜色 (当bgColor配置了颜色,而textColor未配置时,则textColor会默认为白色)
    inited: null,
    // 下拉刷新初始化完毕的回调
    inOffset: null,
    // 下拉的距离进入offset范围内那一刻的回调
    outOffset: null,
    // 下拉的距离大于offset那一刻的回调
    onMoving: null,
    // 下拉过程中的回调,滑动过程一直在执行; rate下拉区域当前高度与指定距离的比值(inOffset: rate<1; outOffset: rate>=1); downHight当前下拉区域的高度
    beforeLoading: null,
    // 准备触发下拉刷新的回调: 如果return true,将不触发showLoading和callback回调; 常用来完全自定义下拉刷新, 参考案例【淘宝 v6.8.0】
    showLoading: null,
    // 显示下拉刷新进度的回调
    afterLoading: null,
    // 准备结束下拉的回调. 返回结束下拉的延时执行时间,默认0ms; 常用于结束下拉之前再显示另外一小段动画,才去隐藏下拉刷新的场景, 参考案例【dotJump】
    endDownScroll: null,
    // 结束下拉刷新的回调
    callback: function callback(mescroll) {
      // 下拉刷新的回调;默认重置上拉加载列表为第一页
      mescroll.resetUpScroll();
    }
  });
};

/* 配置参数:上拉加载 */
MeScroll.prototype.extendUpScroll = function (optUp) {
  // 上拉加载的配置
  MeScroll.extend(optUp, {
    use: true,
    // 是否启用上拉加载; 默认true
    auto: true,
    // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
    isLock: false,
    // 是否锁定上拉加载,默认false;
    isBoth: true,
    // 上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新;默认true,两者可同时触发;
    isBounce: false,
    // 默认禁止橡皮筋的回弹效果, 必读事项: http://www.mescroll.com/qa.html?v=190725#q25
    callback: null,
    // 上拉加载的回调;function(page,mescroll){ }
    page: {
      num: 0,
      // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
      size: 10,
      // 每页数据的数量
      time: null // 加载第一页数据服务器返回的时间; 防止用户翻页时,后台新增了数据从而导致下一页数据重复;
    },

    noMoreSize: 5,
    // 如果列表已无数据,可设置列表的总数量要大于等于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
    offset: 80,
    // 距底部多远时,触发upCallback
    textLoading: '正在加载更多 ...',
    // 加载中的提示文本
    textNoMore: '-- 没有更多数据了 --',
    // 没有更多数据的提示文本
    bgColor: "transparent",
    // 背景颜色 (建议在pages.json中再设置一下backgroundColorBottom)
    textColor: "gray",
    // 文本颜色 (当bgColor配置了颜色,而textColor未配置时,则textColor会默认为白色)
    inited: null,
    // 初始化完毕的回调
    showLoading: null,
    // 显示加载中的回调
    showNoMore: null,
    // 显示无更多数据的回调
    hideUpScroll: null,
    // 隐藏上拉加载的回调
    errDistance: 60,
    // endErr的时候需往上滑动一段距离,使其往下滑动时再次触发onReachBottom,仅mescroll-body生效
    toTop: {
      // 回到顶部按钮,需配置src才显示
      src: null,
      // 图片路径,默认null (绝对路径或网络图)
      offset: 1000,
      // 列表滚动多少距离才显示回到顶部按钮,默认1000
      duration: 300,
      // 回到顶部的动画时长,默认300ms (当值为0或300则使用系统自带回到顶部,更流畅; 其他值则通过step模拟,部分机型可能不够流畅,所以非特殊情况不建议修改此项)
      btnClick: null,
      // 点击按钮的回调
      onShow: null,
      // 是否显示的回调
      zIndex: 9990,
      // fixed定位z-index值
      left: null,
      // 到左边的距离, 默认null. 此项有值时,right不生效. (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
      right: 20,
      // 到右边的距离, 默认20 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
      bottom: 120,
      // 到底部的距离, 默认120 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
      safearea: false,
      // bottom的偏移量是否加上底部安全区的距离, 默认false, 需要适配iPhoneX时使用 (具体的界面如果不配置此项,则取本vue的safearea值)
      width: 72,
      // 回到顶部图标的宽度, 默认72 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
      radius: "50%" // 圆角, 默认"50%" (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
    },

    empty: {
      use: true,
      // 是否显示空布局
      icon: null,
      // 图标路径
      tip: '~ 暂无数据 ~',
      // 提示
      btnText: '',
      // 按钮
      btnClick: null,
      // 点击按钮的回调
      onShow: null,
      // 是否显示的回调
      fixed: false,
      // 是否使用fixed定位,默认false; 配置fixed为true,以下的top和zIndex才生效 (transform会使fixed失效,最终会降级为absolute)
      top: "100rpx",
      // fixed定位的top值 (完整的单位值,如 "10%"; "100rpx")
      zIndex: 99 // fixed定位z-index值
    },

    onScroll: false // 是否监听滚动事件
  });
};

/* 配置参数 */
MeScroll.extend = function (userOption, defaultOption) {
  if (!userOption) return defaultOption;
  for (var key in defaultOption) {
    if (userOption[key] == null) {
      var def = defaultOption[key];
      if (def != null && (0, _typeof2.default)(def) === 'object') {
        userOption[key] = MeScroll.extend({}, def); // 深度匹配
      } else {
        userOption[key] = def;
      }
    } else if ((0, _typeof2.default)(userOption[key]) === 'object') {
      MeScroll.extend(userOption[key], defaultOption[key]); // 深度匹配
    }
  }

  return userOption;
};

/* 简单判断是否配置了颜色 (非透明,非白色) */
MeScroll.prototype.hasColor = function (color) {
  if (!color) return false;
  var c = color.toLowerCase();
  return c != "#fff" && c != "#ffffff" && c != "transparent" && c != "white";
};

/* -------初始化下拉刷新------- */
MeScroll.prototype.initDownScroll = function () {
  var me = this;
  // 配置参数
  me.optDown = me.options.down || {};
  if (!me.optDown.textColor && me.hasColor(me.optDown.bgColor)) me.optDown.textColor = "#fff"; // 当bgColor有值且textColor未设置,则textColor默认白色
  me.extendDownScroll(me.optDown);

  // 如果是mescroll-body且配置了native,则禁止自定义的下拉刷新
  if (me.isScrollBody && me.optDown.native) {
    me.optDown.use = false;
  } else {
    me.optDown.native = false; // 仅mescroll-body支持,mescroll-uni不支持
  }

  me.downHight = 0; // 下拉区域的高度

  // 在页面中加入下拉布局
  if (me.optDown.use && me.optDown.inited) {
    // 初始化完毕的回调
    setTimeout(function () {
      // 待主线程执行完毕再执行,避免new MeScroll未初始化,在回调获取不到mescroll的实例
      me.optDown.inited(me);
    }, 0);
  }
};

/* 列表touchstart事件 */
MeScroll.prototype.touchstartEvent = function (e) {
  if (!this.optDown.use) return;
  this.startPoint = this.getPoint(e); // 记录起点
  this.startTop = this.getScrollTop(); // 记录此时的滚动条位置
  this.lastPoint = this.startPoint; // 重置上次move的点
  this.maxTouchmoveY = this.getBodyHeight() - this.optDown.bottomOffset; // 手指触摸的最大范围(写在touchstart避免body获取高度为0的情况)
  this.inTouchend = false; // 标记不是touchend
};

/* 列表touchmove事件 */
MeScroll.prototype.touchmoveEvent = function (e) {
  if (!this.optDown.use) return;
  if (!this.startPoint) return;
  var me = this;

  // 节流
  var t = new Date().getTime();
  if (me.moveTime && t - me.moveTime < me.moveTimeDiff) {
    // 小于节流时间,则不处理
    return;
  } else {
    me.moveTime = t;
    if (!me.moveTimeDiff) me.moveTimeDiff = 1000 / me.optDown.fps;
  }
  var scrollTop = me.getScrollTop(); // 当前滚动条的距离
  var curPoint = me.getPoint(e); // 当前点

  var moveY = curPoint.y - me.startPoint.y; // 和起点比,移动的距离,大于0向下拉,小于0向上拉

  // 向下拉 && 在顶部
  // mescroll-body,直接判定在顶部即可
  // scroll-view在滚动时不会触发touchmove,当触顶/底/左/右时,才会触发touchmove
  // scroll-view滚动到顶部时,scrollTop不一定为0; 在iOS的APP中scrollTop可能为负数,不一定和startTop相等
  if (moveY > 0 && (me.isScrollBody && scrollTop <= 0 || !me.isScrollBody && (scrollTop <= 0 || scrollTop <= me.optDown.startTop && scrollTop === me.startTop))) {
    // 可下拉的条件
    if (!me.inTouchend && !me.isDownScrolling && !me.optDown.isLock && (!me.isUpScrolling || me.isUpScrolling && me.optUp.isBoth)) {
      // 下拉的角度是否在配置的范围内
      var angle = me.getAngle(me.lastPoint, curPoint); // 两点之间的角度,区间 [0,90]
      if (angle < me.optDown.minAngle) return; // 如果小于配置的角度,则不往下执行下拉刷新

      // 如果手指的位置超过配置的距离,则提前结束下拉,避免Webview嵌套导致touchend无法触发
      if (me.maxTouchmoveY > 0 && curPoint.y >= me.maxTouchmoveY) {
        me.inTouchend = true; // 标记执行touchend
        me.touchendEvent(); // 提前触发touchend
        return;
      }
      me.preventDefault(e); // 阻止默认事件

      var diff = curPoint.y - me.lastPoint.y; // 和上次比,移动的距离 (大于0向下,小于0向上)

      // 下拉距离  < 指定距离
      if (me.downHight < me.optDown.offset) {
        if (me.movetype !== 1) {
          me.movetype = 1; // 加入标记,保证只执行一次
          me.optDown.inOffset && me.optDown.inOffset(me); // 进入指定距离范围内那一刻的回调,只执行一次
          me.isMoveDown = true; // 标记下拉区域高度改变,在touchend重置回来
        }

        me.downHight += diff * me.optDown.inOffsetRate; // 越往下,高度变化越小

        // 指定距离  <= 下拉距离
      } else {
        if (me.movetype !== 2) {
          me.movetype = 2; // 加入标记,保证只执行一次
          me.optDown.outOffset && me.optDown.outOffset(me); // 下拉超过指定距离那一刻的回调,只执行一次
          me.isMoveDown = true; // 标记下拉区域高度改变,在touchend重置回来
        }

        if (diff > 0) {
          // 向下拉
          me.downHight += Math.round(diff * me.optDown.outOffsetRate); // 越往下,高度变化越小
        } else {
          // 向上收
          me.downHight += diff; // 向上收回高度,则向上滑多少收多少高度
        }
      }

      var rate = me.downHight / me.optDown.offset; // 下拉区域当前高度与指定距离的比值
      me.optDown.onMoving && me.optDown.onMoving(me, rate, me.downHight); // 下拉过程中的回调,一直在执行
    }
  }

  me.lastPoint = curPoint; // 记录本次移动的点
};

/* 列表touchend事件 */
MeScroll.prototype.touchendEvent = function (e) {
  if (!this.optDown.use) return;
  // 如果下拉区域高度已改变,则需重置回来
  if (this.isMoveDown) {
    if (this.downHight >= this.optDown.offset) {
      // 符合触发刷新的条件
      this.triggerDownScroll();
    } else {
      // 不符合的话 则重置
      this.downHight = 0;
      this.optDown.endDownScroll && this.optDown.endDownScroll(this);
    }
    this.movetype = 0;
    this.isMoveDown = false;
  } else if (!this.isScrollBody && this.getScrollTop() === this.startTop) {
    // scroll-view到顶/左/右/底的滑动事件
    var isScrollUp = this.getPoint(e).y - this.startPoint.y < 0; // 和起点比,移动的距离,大于0向下拉,小于0向上拉
    // 上滑
    if (isScrollUp) {
      // 需检查滑动的角度
      var angle = this.getAngle(this.getPoint(e), this.startPoint); // 两点之间的角度,区间 [0,90]
      if (angle > 80) {
        // 检查并触发上拉
        this.triggerUpScroll(true);
      }
    }
  }
};

/* 根据点击滑动事件获取第一个手指的坐标 */
MeScroll.prototype.getPoint = function (e) {
  if (!e) {
    return {
      x: 0,
      y: 0
    };
  }
  if (e.touches && e.touches[0]) {
    return {
      x: e.touches[0].pageX,
      y: e.touches[0].pageY
    };
  } else if (e.changedTouches && e.changedTouches[0]) {
    return {
      x: e.changedTouches[0].pageX,
      y: e.changedTouches[0].pageY
    };
  } else {
    return {
      x: e.clientX,
      y: e.clientY
    };
  }
};

/* 计算两点之间的角度: 区间 [0,90]*/
MeScroll.prototype.getAngle = function (p1, p2) {
  var x = Math.abs(p1.x - p2.x);
  var y = Math.abs(p1.y - p2.y);
  var z = Math.sqrt(x * x + y * y);
  var angle = 0;
  if (z !== 0) {
    angle = Math.asin(y / z) / Math.PI * 180;
  }
  return angle;
};

/* 触发下拉刷新 */
MeScroll.prototype.triggerDownScroll = function () {
  if (this.optDown.beforeLoading && this.optDown.beforeLoading(this)) {
    //return true则处于完全自定义状态
  } else {
    this.showDownScroll(); // 下拉刷新中...
    this.optDown.callback && this.optDown.callback(this); // 执行回调,联网加载数据
  }
};

/* 显示下拉进度布局 */
MeScroll.prototype.showDownScroll = function () {
  this.isDownScrolling = true; // 标记下拉中
  if (this.optDown.native) {
    uni.startPullDownRefresh(); // 系统自带的下拉刷新
    this.optDown.showLoading && this.optDown.showLoading(this, 0); // 仍触发showLoading,因为上拉加载用到
  } else {
    this.downHight = this.optDown.offset; // 更新下拉区域高度
    this.optDown.showLoading && this.optDown.showLoading(this, this.downHight); // 下拉刷新中...
  }
};

/* 显示系统自带的下拉刷新时需要处理的业务 */
MeScroll.prototype.onPullDownRefresh = function () {
  this.isDownScrolling = true; // 标记下拉中
  this.optDown.showLoading && this.optDown.showLoading(this, 0); // 仍触发showLoading,因为上拉加载用到
  this.optDown.callback && this.optDown.callback(this); // 执行回调,联网加载数据
};

/* 结束下拉刷新 */
MeScroll.prototype.endDownScroll = function () {
  if (this.optDown.native) {
    // 结束原生下拉刷新
    this.isDownScrolling = false;
    this.optDown.endDownScroll && this.optDown.endDownScroll(this);
    uni.stopPullDownRefresh();
    return;
  }
  var me = this;
  // 结束下拉刷新的方法
  var endScroll = function endScroll() {
    me.downHight = 0;
    me.isDownScrolling = false;
    me.optDown.endDownScroll && me.optDown.endDownScroll(me);
    !me.isScrollBody && me.setScrollHeight(0); // scroll-view重置滚动区域,使数据不满屏时仍可检查触发翻页
  };
  // 结束下拉刷新时的回调
  var delay = 0;
  if (me.optDown.afterLoading) delay = me.optDown.afterLoading(me); // 结束下拉刷新的延时,单位ms
  if (typeof delay === 'number' && delay > 0) {
    setTimeout(endScroll, delay);
  } else {
    endScroll();
  }
};

/* 锁定下拉刷新:isLock=ture,null锁定;isLock=false解锁 */
MeScroll.prototype.lockDownScroll = function (isLock) {
  if (isLock == null) isLock = true;
  this.optDown.isLock = isLock;
};

/* 锁定上拉加载:isLock=ture,null锁定;isLock=false解锁 */
MeScroll.prototype.lockUpScroll = function (isLock) {
  if (isLock == null) isLock = true;
  this.optUp.isLock = isLock;
};

/* -------初始化上拉加载------- */
MeScroll.prototype.initUpScroll = function () {
  var me = this;
  // 配置参数
  me.optUp = me.options.up || {
    use: false
  };
  if (!me.optUp.textColor && me.hasColor(me.optUp.bgColor)) me.optUp.textColor = "#fff"; // 当bgColor有值且textColor未设置,则textColor默认白色
  me.extendUpScroll(me.optUp);
  if (!me.optUp.isBounce) me.setBounce(false); // 不允许bounce时,需禁止window的touchmove事件

  if (me.optUp.use === false) return; // 配置不使用上拉加载时,则不初始化上拉布局
  me.optUp.hasNext = true; // 如果使用上拉,则默认有下一页
  me.startNum = me.optUp.page.num + 1; // 记录page开始的页码

  // 初始化完毕的回调
  if (me.optUp.inited) {
    setTimeout(function () {
      // 待主线程执行完毕再执行,避免new MeScroll未初始化,在回调获取不到mescroll的实例
      me.optUp.inited(me);
    }, 0);
  }
};

/*滚动到底部的事件 (仅mescroll-body生效)*/
MeScroll.prototype.onReachBottom = function () {
  if (this.isScrollBody && !this.isUpScrolling) {
    // 只能支持下拉刷新的时候同时可以触发上拉加载,否则滚动到底部就需要上滑一点才能触发onReachBottom
    if (!this.optUp.isLock && this.optUp.hasNext) {
      this.triggerUpScroll();
    }
  }
};

/*列表滚动事件 (仅mescroll-body生效)*/
MeScroll.prototype.onPageScroll = function (e) {
  if (!this.isScrollBody) return;

  // 更新滚动条的位置 (主要用于判断下拉刷新时,滚动条是否在顶部)
  this.setScrollTop(e.scrollTop);

  // 顶部按钮的显示隐藏
  if (e.scrollTop >= this.optUp.toTop.offset) {
    this.showTopBtn();
  } else {
    this.hideTopBtn();
  }
};

/*列表滚动事件*/
MeScroll.prototype.scroll = function (e, onScroll) {
  // 更新滚动条的位置
  this.setScrollTop(e.scrollTop);
  // 更新滚动内容高度
  this.setScrollHeight(e.scrollHeight);

  // 向上滑还是向下滑动
  if (this.preScrollY == null) this.preScrollY = 0;
  this.isScrollUp = e.scrollTop - this.preScrollY > 0;
  this.preScrollY = e.scrollTop;

  // 上滑 && 检查并触发上拉
  this.isScrollUp && this.triggerUpScroll(true);

  // 顶部按钮的显示隐藏
  if (e.scrollTop >= this.optUp.toTop.offset) {
    this.showTopBtn();
  } else {
    this.hideTopBtn();
  }

  // 滑动监听
  this.optUp.onScroll && onScroll && onScroll();
};

/* 触发上拉加载 */
MeScroll.prototype.triggerUpScroll = function (isCheck) {
  if (!this.isUpScrolling && this.optUp.use && this.optUp.callback) {
    // 是否校验在底部; 默认不校验
    if (isCheck === true) {
      var canUp = false;
      // 还有下一页 && 没有锁定 && 不在下拉中
      if (this.optUp.hasNext && !this.optUp.isLock && !this.isDownScrolling) {
        if (this.getScrollBottom() <= this.optUp.offset) {
          // 到底部
          canUp = true; // 标记可上拉
        }
      }

      if (canUp === false) return;
    }
    this.showUpScroll(); // 上拉加载中...
    this.optUp.page.num++; // 预先加一页,如果失败则减回
    this.isUpAutoLoad = true; // 标记上拉已经自动执行过,避免初始化时多次触发上拉回调
    this.num = this.optUp.page.num; // 把最新的页数赋值在mescroll上,避免对page的影响
    this.size = this.optUp.page.size; // 把最新的页码赋值在mescroll上,避免对page的影响
    this.time = this.optUp.page.time; // 把最新的页码赋值在mescroll上,避免对page的影响
    this.optUp.callback(this); // 执行回调,联网加载数据
  }
};

/* 显示上拉加载中 */
MeScroll.prototype.showUpScroll = function () {
  this.isUpScrolling = true; // 标记上拉加载中
  this.optUp.showLoading && this.optUp.showLoading(this); // 回调
};

/* 显示上拉无更多数据 */
MeScroll.prototype.showNoMore = function () {
  this.optUp.hasNext = false; // 标记无更多数据
  this.optUp.showNoMore && this.optUp.showNoMore(this); // 回调
};

/* 隐藏上拉区域**/
MeScroll.prototype.hideUpScroll = function () {
  this.optUp.hideUpScroll && this.optUp.hideUpScroll(this); // 回调
};

/* 结束上拉加载 */
MeScroll.prototype.endUpScroll = function (isShowNoMore) {
  if (isShowNoMore != null) {
    // isShowNoMore=null,不处理下拉状态,下拉刷新的时候调用
    if (isShowNoMore) {
      this.showNoMore(); // isShowNoMore=true,显示无更多数据
    } else {
      this.hideUpScroll(); // isShowNoMore=false,隐藏上拉加载
    }
  }

  this.isUpScrolling = false; // 标记结束上拉加载
};

/* 重置上拉加载列表为第一页
 *isShowLoading 是否显示进度布局;
 * 1.默认null,不传参,则显示上拉加载的进度布局
 * 2.传参true, 则显示下拉刷新的进度布局
 * 3.传参false,则不显示上拉和下拉的进度 (常用于静默更新列表数据)
 */
MeScroll.prototype.resetUpScroll = function (isShowLoading) {
  if (this.optUp && this.optUp.use) {
    var page = this.optUp.page;
    this.prePageNum = page.num; // 缓存重置前的页码,加载失败可退回
    this.prePageTime = page.time; // 缓存重置前的时间,加载失败可退回
    page.num = this.startNum; // 重置为第一页
    page.time = null; // 重置时间为空
    if (!this.isDownScrolling && isShowLoading !== false) {
      // 如果不是下拉刷新触发的resetUpScroll并且不配置列表静默更新,则显示进度;
      if (isShowLoading == null) {
        this.removeEmpty(); // 移除空布局
        this.showUpScroll(); // 不传参,默认显示上拉加载的进度布局
      } else {
        this.showDownScroll(); // 传true,显示下拉刷新的进度布局,不清空列表
      }
    }

    this.isUpAutoLoad = true; // 标记上拉已经自动执行过,避免初始化时多次触发上拉回调
    this.num = page.num; // 把最新的页数赋值在mescroll上,避免对page的影响
    this.size = page.size; // 把最新的页码赋值在mescroll上,避免对page的影响
    this.time = page.time; // 把最新的页码赋值在mescroll上,避免对page的影响
    this.optUp.callback && this.optUp.callback(this); // 执行上拉回调
  }
};

/* 设置page.num的值 */
MeScroll.prototype.setPageNum = function (num) {
  this.optUp.page.num = num - 1;
};

/* 设置page.size的值 */
MeScroll.prototype.setPageSize = function (size) {
  this.optUp.page.size = size;
};

/* 联网回调成功,结束下拉刷新和上拉加载
 * dataSize: 当前页的数据量(必传)
 * totalPage: 总页数(必传)
 * systime: 服务器时间 (可空)
 */
MeScroll.prototype.endByPage = function (dataSize, totalPage, systime) {
  var hasNext;
  if (this.optUp.use && totalPage != null) hasNext = this.optUp.page.num < totalPage; // 是否还有下一页
  this.endSuccess(dataSize, hasNext, systime);
};

/* 联网回调成功,结束下拉刷新和上拉加载
 * dataSize: 当前页的数据量(必传)
 * totalSize: 列表所有数据总数量(必传)
 * systime: 服务器时间 (可空)
 */
MeScroll.prototype.endBySize = function (dataSize, totalSize, systime) {
  var hasNext;
  if (this.optUp.use && totalSize != null) {
    var loadSize = (this.optUp.page.num - 1) * this.optUp.page.size + dataSize; // 已加载的数据总数
    hasNext = loadSize < totalSize; // 是否还有下一页
  }

  this.endSuccess(dataSize, hasNext, systime);
};

/* 联网回调成功,结束下拉刷新和上拉加载
 * dataSize: 当前页的数据个数(不是所有页的数据总和),用于上拉加载判断是否还有下一页.如果不传,则会判断还有下一页
 * hasNext: 是否还有下一页,布尔类型;用来解决这个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据dataSize判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.
 * systime: 服务器时间(可空);用来解决这个小问题:当准备翻下一页时,数据库新增了几条记录,此时翻下一页,前面的几条数据会和上一页的重复;这里传入了systime,那么upCallback的page.time就会有值,把page.time传给服务器,让后台过滤新加入的那几条记录
 */
MeScroll.prototype.endSuccess = function (dataSize, hasNext, systime) {
  var me = this;
  // 结束下拉刷新
  if (me.isDownScrolling) me.endDownScroll();

  // 结束上拉加载
  if (me.optUp.use) {
    var isShowNoMore; // 是否已无更多数据
    if (dataSize != null) {
      var pageNum = me.optUp.page.num; // 当前页码
      var pageSize = me.optUp.page.size; // 每页长度
      // 如果是第一页
      if (pageNum === 1) {
        if (systime) me.optUp.page.time = systime; // 设置加载列表数据第一页的时间
      }

      if (dataSize < pageSize || hasNext === false) {
        // 返回的数据不满一页时,则说明已无更多数据
        me.optUp.hasNext = false;
        if (dataSize === 0 && pageNum === 1) {
          // 如果第一页无任何数据且配置了空布局
          isShowNoMore = false;
          me.showEmpty();
        } else {
          // 总列表数少于配置的数量,则不显示无更多数据
          var allDataSize = (pageNum - 1) * pageSize + dataSize;
          if (allDataSize < me.optUp.noMoreSize) {
            isShowNoMore = false;
          } else {
            isShowNoMore = true;
          }
          me.removeEmpty(); // 移除空布局
        }
      } else {
        // 还有下一页
        isShowNoMore = false;
        me.optUp.hasNext = true;
        me.removeEmpty(); // 移除空布局
      }
    }

    // 隐藏上拉
    me.endUpScroll(isShowNoMore);
  }
};

/* 回调失败,结束下拉刷新和上拉加载 */
MeScroll.prototype.endErr = function (errDistance) {
  // 结束下拉,回调失败重置回原来的页码和时间
  if (this.isDownScrolling) {
    var page = this.optUp.page;
    if (page && this.prePageNum) {
      page.num = this.prePageNum;
      page.time = this.prePageTime;
    }
    this.endDownScroll();
  }
  // 结束上拉,回调失败重置回原来的页码
  if (this.isUpScrolling) {
    this.optUp.page.num--;
    this.endUpScroll(false);
    // 如果是mescroll-body,则需往回滚一定距离
    if (this.isScrollBody && errDistance !== 0) {
      // 不处理0
      if (!errDistance) errDistance = this.optUp.errDistance; // 不传,则取默认
      this.scrollTo(this.getScrollTop() - errDistance, 0); // 往上回滚的距离
    }
  }
};

/* 显示空布局 */
MeScroll.prototype.showEmpty = function () {
  this.optUp.empty.use && this.optUp.empty.onShow && this.optUp.empty.onShow(true);
};

/* 移除空布局 */
MeScroll.prototype.removeEmpty = function () {
  this.optUp.empty.use && this.optUp.empty.onShow && this.optUp.empty.onShow(false);
};

/* 显示回到顶部的按钮 */
MeScroll.prototype.showTopBtn = function () {
  if (!this.topBtnShow) {
    this.topBtnShow = true;
    this.optUp.toTop.onShow && this.optUp.toTop.onShow(true);
  }
};

/* 隐藏回到顶部的按钮 */
MeScroll.prototype.hideTopBtn = function () {
  if (this.topBtnShow) {
    this.topBtnShow = false;
    this.optUp.toTop.onShow && this.optUp.toTop.onShow(false);
  }
};

/* 获取滚动条的位置 */
MeScroll.prototype.getScrollTop = function () {
  return this.scrollTop || 0;
};

/* 记录滚动条的位置 */
MeScroll.prototype.setScrollTop = function (y) {
  this.scrollTop = y;
};

/* 滚动到指定位置 */
MeScroll.prototype.scrollTo = function (y, t) {
  this.myScrollTo && this.myScrollTo(y, t); // scrollview需自定义回到顶部方法
};

/* 自定义scrollTo */
MeScroll.prototype.resetScrollTo = function (myScrollTo) {
  this.myScrollTo = myScrollTo;
};

/* 滚动条到底部的距离 */
MeScroll.prototype.getScrollBottom = function () {
  return this.getScrollHeight() - this.getClientHeight() - this.getScrollTop();
};

/* 计步器
 star: 开始值
 end: 结束值
 callback(step,timer): 回调step值,计步器timer,可自行通过window.clearInterval(timer)结束计步器;
 t: 计步时长,传0则直接回调end值;不传则默认300ms
 rate: 周期;不传则默认30ms计步一次
 * */
MeScroll.prototype.getStep = function (star, end, callback, t, rate) {
  var diff = end - star; // 差值
  if (t === 0 || diff === 0) {
    callback && callback(end);
    return;
  }
  t = t || 300; // 时长 300ms
  rate = rate || 30; // 周期 30ms
  var count = t / rate; // 次数
  var step = diff / count; // 步长
  var i = 0; // 计数
  var timer = setInterval(function () {
    if (i < count - 1) {
      star += step;
      callback && callback(star, timer);
      i++;
    } else {
      callback && callback(end, timer); // 最后一次直接设置end,避免计算误差
      clearInterval(timer);
    }
  }, rate);
};

/* 滚动容器的高度 */
MeScroll.prototype.getClientHeight = function (isReal) {
  var h = this.clientHeight || 0;
  if (h === 0 && isReal !== true) {
    // 未获取到容器的高度,可临时取body的高度 (可能会有误差)
    h = this.getBodyHeight();
  }
  return h;
};
MeScroll.prototype.setClientHeight = function (h) {
  this.clientHeight = h;
};

/* 滚动内容的高度 */
MeScroll.prototype.getScrollHeight = function () {
  return this.scrollHeight || 0;
};
MeScroll.prototype.setScrollHeight = function (h) {
  this.scrollHeight = h;
};

/* body的高度 */
MeScroll.prototype.getBodyHeight = function () {
  return this.bodyHeight || 0;
};
MeScroll.prototype.setBodyHeight = function (h) {
  this.bodyHeight = h;
};

/* 阻止浏览器默认滚动事件 */
MeScroll.prototype.preventDefault = function (e) {
  // 小程序不支持e.preventDefault
  // app的bounce只能通过配置pages.json的style.app-plus.bounce为"none"来禁止
  // cancelable:是否可以被禁用; defaultPrevented:是否已经被禁用
  if (e && e.cancelable && !e.defaultPrevented) e.preventDefault();
};

/* 是否允许下拉回弹(橡皮筋效果); true或null为允许; false禁止bounce */
MeScroll.prototype.setBounce = function (isBounce) {};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map