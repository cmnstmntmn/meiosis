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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ultradom/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/handler.js":
/*!***************************!*\
  !*** ./common/handler.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar wrap = exports.wrap = function wrap(fn) {\n  var args = Array.from(arguments).slice(1);\n\n  return function (_evt) {\n    if (fn) {\n      fn.apply(null, args);\n    }\n  };\n};\n\nvar safe = exports.safe = function safe(fn) {\n  if (fn) {\n    return fn;\n  }\n  return function (_evt) {};\n};\n\n//# sourceURL=webpack:///./common/handler.js?");

/***/ }),

/***/ "./common/index.js":
/*!*************************!*\
  !*** ./common/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.setup = undefined;\n\nvar _flyd = __webpack_require__(/*! flyd */ \"./node_modules/flyd/lib/index.js\");\n\nvar _flyd2 = _interopRequireDefault(_flyd);\n\nvar _temperature = __webpack_require__(/*! ./temperature */ \"./common/temperature/index.js\");\n\nvar _meiosis = __webpack_require__(/*! meiosis */ \"./node_modules/meiosis/lib/index.js\");\n\nvar _meiosisTracer = __webpack_require__(/*! meiosis-tracer */ \"./node_modules/meiosis-tracer/lib/meiosis-tracer.js\");\n\nvar _meiosisTracer2 = _interopRequireDefault(_meiosisTracer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Only for using Meiosis Tracer in development.\nvar setup = exports.setup = function setup(render) {\n  var update = _flyd2.default.stream();\n  var temperature = (0, _temperature.createTemperature)(update);\n  var models = _flyd2.default.scan(function (model, func) {\n    return func(model);\n  }, temperature.model(), update);\n\n  var element = document.getElementById(\"app\");\n  models.map(function (model) {\n    return render(temperature.view(model), element);\n  });\n\n  // Only for using Meiosis Tracer in development.\n  (0, _meiosis.trace)({ update: update, dataStreams: [models] });\n  (0, _meiosisTracer2.default)({ selector: \"#tracer\" });\n\n  return { models: models, view: temperature.view, render: render, element: element };\n};\n\n//# sourceURL=webpack:///./common/index.js?");

/***/ }),

/***/ "./common/jsx.js":
/*!***********************!*\
  !*** ./common/jsx.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar jsx = exports.jsx = function jsx(propMap) {\n  return function (h) {\n    return function (type, props) {\n      var args = [type, props];\n      if (props) {\n        Object.keys(propMap).forEach(function (fromProp) {\n          if (props[fromProp]) {\n            var toProp = propMap[fromProp];\n            props[toProp] = props[fromProp];\n            delete props[fromProp];\n          }\n        });\n      }\n      var rest = [];\n      for (var i = 2; i < arguments.length; i++) {\n        rest.push(arguments[i]);\n      }\n      args.push(rest);\n      return h.apply(null, args);\n    };\n  };\n};\n\n//# sourceURL=webpack:///./common/jsx.js?");

/***/ }),

/***/ "./common/temperature/actions.js":
/*!***************************************!*\
  !*** ./common/temperature/actions.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar createActions = exports.createActions = function createActions(update) {\n  return {\n    togglePrecipitations: function togglePrecipitations(evt) {\n      return update(function (model) {\n        model.precipitations = evt.target.checked;\n        return model;\n      });\n    },\n\n    changePrecipitation: function changePrecipitation(evt) {\n      return update(function (model) {\n        model.precipitation = evt.target.value;\n        return model;\n      });\n    },\n\n    editDate: function editDate(evt) {\n      return update(function (model) {\n        model.date = evt.target.value;\n        return model;\n      });\n    },\n\n    increase: function increase(amount) {\n      return update(function (model) {\n        model.value = model.value + amount;\n        return model;\n      });\n    },\n\n    changeUnits: function changeUnits() {\n      return update(function (model) {\n        if (model.units === \"C\") {\n          model.units = \"F\";\n          model.value = Math.round(model.value * 9 / 5 + 32);\n        } else {\n          model.units = \"C\";\n          model.value = Math.round((model.value - 32) / 9 * 5);\n        }\n        return model;\n      });\n    }\n  };\n};\n\n//# sourceURL=webpack:///./common/temperature/actions.js?");

/***/ }),

/***/ "./common/temperature/index.js":
/*!*************************************!*\
  !*** ./common/temperature/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createTemperature = undefined;\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./common/temperature/actions.js\");\n\nvar _view = __webpack_require__(/*! ./view */ \"./common/temperature/view.jsx\");\n\nvar createTemperature = exports.createTemperature = function createTemperature(update) {\n  return {\n    model: function model() {\n      return {\n        precipitations: false,\n        precipitation: null,\n        date: \"\",\n        value: 20,\n        units: \"C\"\n      };\n    },\n\n    view: (0, _view.createView)((0, _actions.createActions)(update))\n  };\n};\n\n//# sourceURL=webpack:///./common/temperature/index.js?");

/***/ }),

/***/ "./common/temperature/view.jsx":
/*!*************************************!*\
  !*** ./common/temperature/view.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createView = undefined;\n\nvar _handler = __webpack_require__(/*! ../handler */ \"./common/handler.js\");\n\nvar precipitationOption = function precipitationOption(_ref) {\n  var model = _ref.model,\n      actions = _ref.actions,\n      id = _ref.id,\n      value = _ref.value,\n      label = _ref.label;\n  return jsx(\n    \"span\",\n    null,\n    jsx(\"input\", { type: \"radio\", id: id, name: \"precipitation\", value: value,\n      checked: model.precipitation === value,\n      onClick: (0, _handler.safe)(actions.changePrecipitation) }),\n    jsx(\n      \"label\",\n      { htmlFor: id },\n      label\n    )\n  );\n};\n\nvar createView = exports.createView = function createView(actions) {\n  return function (model) {\n    return jsx(\n      \"div\",\n      null,\n      jsx(\n        \"div\",\n        null,\n        jsx(\"input\", { type: \"checkbox\", checked: model.precipitations,\n          onClick: (0, _handler.safe)(actions.togglePrecipitations), id: \"precipitations\" }),\n        jsx(\n          \"label\",\n          { htmlFor: \"precipitations\" },\n          \"Precipitations\"\n        )\n      ),\n      jsx(\n        \"div\",\n        null,\n        precipitationOption({ model: model, actions: actions, id: \"rain\", value: \"RAIN\", label: \"Rain\" }),\n        precipitationOption({ model: model, actions: actions, id: \"snow\", value: \"SNOW\", label: \"Snow\" }),\n        precipitationOption({ model: model, actions: actions, id: \"sleet\", value: \"SLEET\", label: \"Sleet\" })\n      ),\n      jsx(\n        \"div\",\n        null,\n        \"Date:\",\n        jsx(\"input\", { type: \"text\", size: \"10\", value: model.date, onInput: (0, _handler.safe)(actions.editDate) })\n      ),\n      jsx(\n        \"span\",\n        null,\n        \"Temperature: \"\n      ),\n      jsx(\n        \"span\",\n        { className: \"tempValue\" },\n        model.value\n      ),\n      \"\\xB0\",\n      jsx(\n        \"span\",\n        { className: \"tempUnits\" },\n        model.units\n      ),\n      jsx(\n        \"div\",\n        null,\n        jsx(\n          \"button\",\n          { className: \"btn btn-default increase\", onClick: (0, _handler.wrap)(actions.increase, 1) },\n          \"Increase\"\n        ),\n        jsx(\n          \"button\",\n          { className: \"btn btn-default decrease\", onClick: (0, _handler.wrap)(actions.increase, -1) },\n          \"Decrease\"\n        )\n      ),\n      jsx(\n        \"div\",\n        null,\n        jsx(\n          \"button\",\n          { className: \"btn btn-primary changeUnits\", onClick: (0, _handler.safe)(actions.changeUnits) },\n          \"Change Units\"\n        )\n      )\n    );\n  };\n};\n\n//# sourceURL=webpack:///./common/temperature/view.jsx?");

/***/ }),

/***/ "./node_modules/flyd/lib/index.js":
/*!****************************************!*\
  !*** ./node_modules/flyd/lib/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar curryN = __webpack_require__(/*! ramda/src/curryN */ \"./node_modules/ramda/src/curryN.js\");\n\n// Utility\nfunction isFunction(obj) {\n  return !!(obj && obj.constructor && obj.call && obj.apply);\n}\nfunction trueFn() { return true; }\n\n// Globals\nvar toUpdate = [];\nvar inStream;\nvar order = [];\nvar orderNextIdx = -1;\nvar flushing = false;\n\n/** @namespace */\nvar flyd = {}\n\n// /////////////////////////// API ///////////////////////////////// //\n\n/**\n * Creates a new stream\n *\n * __Signature__: `a -> Stream a`\n *\n * @name flyd.stream\n * @param {*} initialValue - (Optional) the initial value of the stream\n * @return {stream} the stream\n *\n * @example\n * var n = flyd.stream(1); // Stream with initial value `1`\n * var s = flyd.stream(); // Stream with no initial value\n */\nflyd.stream = function(initialValue) {\n  var endStream = createDependentStream([], trueFn);\n  var s = createStream();\n  s.end = endStream;\n  s.fnArgs = [];\n  endStream.listeners.push(s);\n  if (arguments.length > 0) s(initialValue);\n  return s;\n}\n// fantasy-land Applicative\nflyd.stream['fantasy-land/of'] = flyd.stream.of = flyd.stream;\n\n\n/**\n * Create a new dependent stream\n *\n * __Signature__: `(...Stream * -> Stream b -> b) -> [Stream *] -> Stream b`\n *\n * @name flyd.combine\n * @param {Function} fn - the function used to combine the streams\n * @param {Array<stream>} dependencies - the streams that this one depends on\n * @return {stream} the dependent stream\n *\n * @example\n * var n1 = flyd.stream(0);\n * var n2 = flyd.stream(0);\n * var max = flyd.combine(function(n1, n2, self, changed) {\n *   return n1() > n2() ? n1() : n2();\n * }, [n1, n2]);\n */\nflyd.combine = curryN(2, combine);\nfunction combine(fn, streams) {\n  var i, s, deps, depEndStreams;\n  var endStream = createDependentStream([], trueFn);\n  deps = []; depEndStreams = [];\n  for (i = 0; i < streams.length; ++i) {\n    if (streams[i] !== undefined) {\n      deps.push(streams[i]);\n      if (streams[i].end !== undefined) depEndStreams.push(streams[i].end);\n    }\n  }\n  s = createDependentStream(deps, fn);\n  s.depsChanged = [];\n  s.fnArgs = s.deps.concat([s, s.depsChanged]);\n  s.end = endStream;\n  endStream.listeners.push(s);\n  addListeners(depEndStreams, endStream);\n  endStream.deps = depEndStreams;\n  updateStream(s);\n  return s;\n}\n\n/**\n * Returns `true` if the supplied argument is a Flyd stream and `false` otherwise.\n *\n * __Signature__: `* -> Boolean`\n *\n * @name flyd.isStream\n * @param {*} value - the value to test\n * @return {Boolean} `true` if is a Flyd streamn, `false` otherwise\n *\n * @example\n * var s = flyd.stream(1);\n * var n = 1;\n * flyd.isStream(s); //=> true\n * flyd.isStream(n); //=> false\n */\nflyd.isStream = function(stream) {\n  return isFunction(stream) && 'hasVal' in stream;\n}\n\n/**\n * Invokes the body (the function to calculate the value) of a dependent stream\n *\n * By default the body of a dependent stream is only called when all the streams\n * upon which it depends has a value. `immediate` can circumvent this behaviour.\n * It immediately invokes the body of a dependent stream.\n *\n * __Signature__: `Stream a -> Stream a`\n *\n * @name flyd.immediate\n * @param {stream} stream - the dependent stream\n * @return {stream} the same stream\n *\n * @example\n * var s = flyd.stream();\n * var hasItems = flyd.immediate(flyd.combine(function(s) {\n *   return s() !== undefined && s().length > 0;\n * }, [s]);\n * console.log(hasItems()); // logs `false`. Had `immediate` not been\n *                          // used `hasItems()` would've returned `undefined`\n * s([1]);\n * console.log(hasItems()); // logs `true`.\n * s([]);\n * console.log(hasItems()); // logs `false`.\n */\nflyd.immediate = function(s) {\n  if (s.depsMet === false) {\n    s.depsMet = true;\n    updateStream(s);\n  }\n  return s;\n}\n\n/**\n * Changes which `endsStream` should trigger the ending of `s`.\n *\n * __Signature__: `Stream a -> Stream b -> Stream b`\n *\n * @name flyd.endsOn\n * @param {stream} endStream - the stream to trigger the ending\n * @param {stream} stream - the stream to be ended by the endStream\n * @param {stream} the stream modified to be ended by endStream\n *\n * @example\n * var n = flyd.stream(1);\n * var killer = flyd.stream();\n * // `double` ends when `n` ends or when `killer` emits any value\n * var double = flyd.endsOn(flyd.merge(n.end, killer), flyd.combine(function(n) {\n *   return 2 * n();\n * }, [n]);\n*/\nflyd.endsOn = function(endS, s) {\n  detachDeps(s.end);\n  endS.listeners.push(s.end);\n  s.end.deps.push(endS);\n  return s;\n}\n\n/**\n * Map a stream\n *\n * Returns a new stream consisting of every value from `s` passed through\n * `fn`. I.e. `map` creates a new stream that listens to `s` and\n * applies `fn` to every new value.\n * __Signature__: `(a -> result) -> Stream a -> Stream result`\n *\n * @name flyd.map\n * @param {Function} fn - the function that produces the elements of the new stream\n * @param {stream} stream - the stream to map\n * @return {stream} a new stream with the mapped values\n *\n * @example\n * var numbers = flyd.stream(0);\n * var squaredNumbers = flyd.map(function(n) { return n*n; }, numbers);\n */\n// Library functions use self callback to accept (null, undefined) update triggers.\nflyd.map = curryN(2, function(f, s) {\n  return combine(function(s, self) { self(f(s.val)); }, [s]);\n})\n\n/**\n * Chain a stream\n *\n * also known as flatMap\n *\n * Where `fn` returns a stream this function will flatten the resulting streams.\n * Every time `fn` is called the context of the returned stream will \"switch\" to that stream.\n *\n * __Signature__: `(a -> Stream b) -> Stream a -> Stream b`\n *\n * @name flyd.chain\n * @param {Function} fn - the function that produces the streams to be flattened\n * @param {stream} stream - the stream to map\n * @return {stream} a new stream with the mapped values\n *\n * @example\n * var filter = flyd.stream('who');\n * var items = flyd.chain(function(filter){\n *   return flyd.stream(findUsers(filter));\n * }, filter);\n */\nflyd.chain = curryN(2, chain);\n\n/**\n * Apply a stream\n *\n * Applies the value in `s2` to the function in `s1`.\n *\n * __Signature__: `Stream (a -> b) -> Stream a -> Stream b`\n *\n * @name flyd.ap\n * @param {stream} s1 - The value to be applied\n * @param {stream} s2 - The function expecting the value\n * @return {stream} a new stream with the mapped values\n *\n * @example\n * var add = stream(a => b => a + b)\n * var n1 = stream(1)\n * var n2 = stream(2)\n *\n * var added = flyd.ap(n2, flyd.ap(n1, add)) // stream(3)\n * // can also be written using pipe\n * var added_pipe = add\n *   .pipe(ap(n1))\n *   .pipe(ap(n2));\n * added_pipe() // 3\n */\nflyd.ap = curryN(2, ap);\n\n/**\n * Listen to stream events\n *\n * Similar to `map` except that the returned stream is empty. Use `on` for doing\n * side effects in reaction to stream changes. Use the returned stream only if you\n * need to manually end it.\n *\n * __Signature__: `(a -> result) -> Stream a -> Stream undefined`\n *\n * @name flyd.on\n * @param {Function} cb - the callback\n * @param {stream} stream - the stream\n * @return {stream} an empty stream (can be ended)\n */\nflyd.on = curryN(2, function(f, s) {\n  return combine(function(s) { f(s.val); }, [s]);\n})\n\n/**\n * Creates a new stream with the results of calling the function on every incoming\n * stream with and accumulator and the incoming value.\n *\n * __Signature__: `(a -> b -> a) -> a -> Stream b -> Stream a`\n *\n * @name flyd.scan\n * @param {Function} fn - the function to call\n * @param {*} val - the initial value of the accumulator\n * @param {stream} stream - the stream source\n * @return {stream} the new stream\n *\n * @example\n * var numbers = flyd.stream();\n * var sum = flyd.scan(function(sum, n) { return sum+n; }, 0, numbers);\n * numbers(2)(3)(5);\n * sum(); // 10\n */\nflyd.scan = curryN(3, function(f, acc, s) {\n  var ns = combine(function(s, self) {\n    self(acc = f(acc, s.val));\n  }, [s]);\n  if (!ns.hasVal) ns(acc);\n  return ns;\n});\n\n/**\n * Creates a new stream down which all values from both `stream1` and `stream2`\n * will be sent.\n *\n * __Signature__: `Stream a -> Stream a -> Stream a`\n *\n * @name flyd.merge\n * @param {stream} source1 - one stream to be merged\n * @param {stream} source2 - the other stream to be merged\n * @return {stream} a stream with the values from both sources\n *\n * @example\n * var btn1Clicks = flyd.stream();\n * button1Elm.addEventListener(btn1Clicks);\n * var btn2Clicks = flyd.stream();\n * button2Elm.addEventListener(btn2Clicks);\n * var allClicks = flyd.merge(btn1Clicks, btn2Clicks);\n */\nflyd.merge = curryN(2, function(s1, s2) {\n  var s = flyd.immediate(combine(function(s1, s2, self, changed) {\n    if (changed[0]) {\n      self(changed[0]());\n    } else if (s1.hasVal) {\n      self(s1.val);\n    } else if (s2.hasVal) {\n      self(s2.val);\n    }\n  }, [s1, s2]));\n  flyd.endsOn(combine(function() {\n    return true;\n  }, [s1.end, s2.end]), s);\n  return s;\n});\n\n/**\n * Creates a new stream resulting from applying `transducer` to `stream`.\n *\n * __Signature__: `Transducer -> Stream a -> Stream b`\n *\n * @name flyd.transduce\n * @param {Transducer} xform - the transducer transformation\n * @param {stream} source - the stream source\n * @return {stream} the new stream\n *\n * @example\n * var t = require('transducers.js');\n *\n * var results = [];\n * var s1 = flyd.stream();\n * var tx = t.compose(t.map(function(x) { return x * 2; }), t.dedupe());\n * var s2 = flyd.transduce(tx, s1);\n * flyd.combine(function(s2) { results.push(s2()); }, [s2]);\n * s1(1)(1)(2)(3)(3)(3)(4);\n * results; // => [2, 4, 6, 8]\n */\nflyd.transduce = curryN(2, function(xform, source) {\n  xform = xform(new StreamTransformer());\n  return combine(function(source, self) {\n    var res = xform['@@transducer/step'](undefined, source.val);\n    if (res && res['@@transducer/reduced'] === true) {\n      self.end(true);\n      return res['@@transducer/value'];\n    } else {\n      return res;\n    }\n  }, [source]);\n});\n\n/**\n * Returns `fn` curried to `n`. Use this function to curry functions exposed by\n * modules for Flyd.\n *\n * @name flyd.curryN\n * @function\n * @param {Integer} arity - the function arity\n * @param {Function} fn - the function to curry\n * @return {Function} the curried function\n *\n * @example\n * function add(x, y) { return x + y; };\n * var a = flyd.curryN(2, add);\n * a(2)(4) // => 6\n */\nflyd.curryN = curryN\n\n/**\n * Returns a new stream identical to the original except every\n * value will be passed through `f`.\n *\n * _Note:_ This function is included in order to support the fantasy land\n * specification.\n *\n * __Signature__: Called bound to `Stream a`: `(a -> b) -> Stream b`\n *\n * @name stream.map\n * @param {Function} function - the function to apply\n * @return {stream} a new stream with the values mapped\n *\n * @example\n * var numbers = flyd.stream(0);\n * var squaredNumbers = numbers.map(function(n) { return n*n; });\n */\nfunction boundMap(f) { return flyd.map(f, this); }\n\n/**\n * Returns the result of applying function `fn` to this stream\n *\n * __Signature__: Called bound to `Stream a`: `(a -> Stream b) -> Stream b`\n *\n * @name stream.pipe\n * @param {Function} fn - the function to apply\n * @return {stream} A new stream\n *\n * @example\n * var numbers = flyd.stream(0);\n * var squaredNumbers = numbers.pipe(flyd.map(function(n){ return n*n; }));\n */\nfunction operator_pipe(f) { return f(this) }\n\nfunction boundChain(f) {\n  return chain(f, this);\n}\n\nfunction chain(f, s) {\n  // Internal state to end flat map stream\n  var flatEnd = flyd.stream(1);\n  var internalEnded = flyd.on(function() {\n    var alive = flatEnd() - 1;\n    flatEnd(alive);\n    if (alive <= 0) {\n      flatEnd.end(true);\n    }\n  });\n\n  internalEnded(s.end);\n  var last = flyd.stream();\n  var flatStream = flyd.combine(function(s, own) {\n    last.end(true)\n    // Our fn stream makes streams\n    var newS = f(s());\n    flatEnd(flatEnd() + 1);\n    internalEnded(newS.end);\n\n    // Update self on call -- newS is never handed out so deps don't matter\n    last = flyd.map(own, newS);\n  }, [s]);\n\n  flyd.endsOn(flatEnd.end, flatStream);\n\n  return flatStream;\n}\n\nflyd.fromPromise = function fromPromise(p) {\n  var s = flyd.stream();\n  p.then(function(val) {\n    s(val);\n    s.end(true);\n  });\n  return s;\n}\n\n/* istanbul ignore next */\nflyd.flattenPromise = function flattenPromise(s) {\n  return combine(function(s, self) {\n    s().then(self);\n  }, [s])\n}\n\n\n/**\n * Returns a new stream which is the result of applying the\n * functions from `this` stream to the values in `stream` parameter.\n *\n * `this` stream must be a stream of functions.\n *\n * _Note:_ This function is included in order to support the fantasy land\n * specification.\n *\n * __Signature__: Called bound to `Stream (a -> b)`: `a -> Stream b`\n *\n * @name stream.ap\n * @param {stream} stream - the values stream\n * @return {stream} a new stream with the functions applied to values\n *\n * @example\n * var add = flyd.curryN(2, function(x, y) { return x + y; });\n * var numbers1 = flyd.stream();\n * var numbers2 = flyd.stream();\n * var addToNumbers1 = flyd.map(add, numbers1);\n * var added = addToNumbers1.ap(numbers2);\n */\nfunction ap(s2, s1) {\n  return combine(function(s1, s2, self) { self(s1.val(s2.val)); }, [s1, s2]);\n}\n\nfunction boundAp(s2) {\n  return ap(s2, this);\n}\n\n/**\n * @private\n */\nfunction fantasy_land_ap(s1) {\n  return ap(this, s1);\n}\n\n/**\n * Get a human readable view of a stream\n * @name stream.toString\n * @return {String} the stream string representation\n */\nfunction streamToString() {\n  return 'stream(' + this.val + ')';\n}\n\n/**\n * @name stream.end\n * @memberof stream\n * A stream that emits `true` when the stream ends. If `true` is pushed down the\n * stream the parent stream ends.\n */\n\n/**\n * @name stream.of\n * @function\n * @memberof stream\n * Returns a new stream with `value` as its initial value. It is identical to\n * calling `flyd.stream` with one argument.\n *\n * __Signature__: Called bound to `Stream (a)`: `b -> Stream b`\n *\n * @param {*} value - the initial value\n * @return {stream} the new stream\n *\n * @example\n * var n = flyd.stream(1);\n * var m = n.of(1);\n */\n\n// /////////////////////////// PRIVATE ///////////////////////////////// //\n/**\n * @private\n * Create a stream with no dependencies and no value\n * @return {Function} a flyd stream\n */\nfunction createStream() {\n  function s(n) {\n    if (arguments.length === 0) return s.val\n    updateStreamValue(s, n)\n    return s\n  }\n  s.hasVal = false;\n  s.val = undefined;\n  s.vals = [];\n  s.listeners = [];\n  s.queued = false;\n  s.end = undefined;\n\n  // fantasy-land compatibility\n  s.ap = boundAp;\n  s['fantasy-land/map'] = s.map = boundMap;\n  s['fantasy-land/ap'] = fantasy_land_ap;\n  s['fantasy-land/of'] = s.of = flyd.stream;\n  s['fantasy-land/chain'] = s.chain = boundChain;\n\n  s.pipe = operator_pipe;\n\n  // According to the fantasy-land Applicative specification\n  // Given a value f, one can access its type representative via the constructor property:\n  // `f.constructor.of`\n  s.constructor = flyd.stream;\n\n  s.toJSON = function() {\n    return s.val;\n  }\n  s.toString = streamToString;\n  return s;\n}\n\n/**\n * @private\n * Create a dependent stream\n * @param {Array<stream>} dependencies - an array of the streams\n * @param {Function} fn - the function used to calculate the new stream value\n * from the dependencies\n * @return {stream} the created stream\n */\nfunction createDependentStream(deps, fn) {\n  var s = createStream();\n  s.fn = fn;\n  s.deps = deps;\n  s.depsMet = false;\n  s.depsChanged = deps.length > 0 ? [] : undefined;\n  s.shouldUpdate = false;\n  addListeners(deps, s);\n  return s;\n}\n\n/**\n * @private\n * Check if all the dependencies have values\n * @param {stream} stream - the stream to check depencencies from\n * @return {Boolean} `true` if all dependencies have vales, `false` otherwise\n */\nfunction initialDepsNotMet(stream) {\n  stream.depsMet = stream.deps.every(function(s) {\n    return s.hasVal;\n  });\n  return !stream.depsMet;\n}\n\n/**\n * @private\n * Update a dependent stream using its dependencies in an atomic way\n * @param {stream} stream - the stream to update\n */\nfunction updateStream(s) {\n  if ((s.depsMet !== true && initialDepsNotMet(s)) ||\n    (s.end !== undefined && s.end.val === true)) return;\n  if (inStream !== undefined) {\n    toUpdate.push(function() {\n      updateStream(s);\n    });\n    return;\n  }\n  inStream = s;\n  if (s.depsChanged) s.fnArgs[s.fnArgs.length - 1] = s.depsChanged;\n  var returnVal = s.fn.apply(s.fn, s.fnArgs);\n  if (returnVal !== undefined) {\n    s(returnVal);\n  }\n  inStream = undefined;\n  if (s.depsChanged !== undefined) s.depsChanged = [];\n  s.shouldUpdate = false;\n  if (flushing === false) flushUpdate();\n}\n\n/**\n * @private\n * Update the dependencies of a stream\n * @param {stream} stream\n */\nfunction updateDeps(s) {\n  var i, o, list\n  var listeners = s.listeners;\n  for (i = 0; i < listeners.length; ++i) {\n    list = listeners[i];\n    if (list.end === s) {\n      endStream(list);\n    } else {\n      if (list.depsChanged !== undefined) list.depsChanged.push(s);\n      list.shouldUpdate = true;\n      findDeps(list);\n    }\n  }\n  for (; orderNextIdx >= 0; --orderNextIdx) {\n    o = order[orderNextIdx];\n    if (o.shouldUpdate === true) updateStream(o);\n    o.queued = false;\n  }\n}\n\n/**\n * @private\n * Add stream dependencies to the global `order` queue.\n * @param {stream} stream\n * @see updateDeps\n */\nfunction findDeps(s) {\n  var i\n  var listeners = s.listeners;\n  if (s.queued === false) {\n    s.queued = true;\n    for (i = 0; i < listeners.length; ++i) {\n      findDeps(listeners[i]);\n    }\n    order[++orderNextIdx] = s;\n  }\n}\n\n/**\n * @private\n */\nfunction flushUpdate() {\n  flushing = true;\n  while (toUpdate.length > 0) {\n    var updater = toUpdate.shift();\n    updater();\n  }\n  flushing = false;\n}\n\n/**\n * @private\n * Push down a value into a stream\n * @param {stream} stream\n * @param {*} value\n */\nfunction updateStreamValue(s, n) {\n  /* istanbul ignore if  */\n  if (n !== undefined && n !== null && isFunction(n.then)) {\n    console.warn('flyd: Promise swallowing has been deprecated, please see https://github.com/paldepind/flyd#promises for more info');\n    n.then(s);\n    return;\n  }\n  s.val = n;\n  s.hasVal = true;\n  if (inStream === undefined) {\n    flushing = true;\n    updateDeps(s);\n    if (toUpdate.length > 0) flushUpdate(); else flushing = false;\n  } else if (inStream === s) {\n    markListeners(s, s.listeners);\n  } else {\n    toUpdate.push(function() {\n      updateStreamValue(s, n);\n    });\n  }\n}\n\n/**\n * @private\n */\nfunction markListeners(s, lists) {\n  var i, list;\n  for (i = 0; i < lists.length; ++i) {\n    list = lists[i];\n    if (list.end !== s) {\n      if (list.depsChanged !== undefined) {\n        list.depsChanged.push(s);\n      }\n      list.shouldUpdate = true;\n    } else {\n      endStream(list);\n    }\n  }\n}\n\n/**\n * @private\n * Add dependencies to a stream\n * @param {Array<stream>} dependencies\n * @param {stream} stream\n */\nfunction addListeners(deps, s) {\n  for (var i = 0; i < deps.length; ++i) {\n    deps[i].listeners.push(s);\n  }\n}\n\n/**\n * @private\n * Removes an stream from a dependency array\n * @param {stream} stream\n * @param {Array<stream>} dependencies\n */\nfunction removeListener(s, listeners) {\n  var idx = listeners.indexOf(s);\n  listeners[idx] = listeners[listeners.length - 1];\n  listeners.length--;\n}\n\n/**\n * @private\n * Detach a stream from its dependencies\n * @param {stream} stream\n */\nfunction detachDeps(s) {\n  for (var i = 0; i < s.deps.length; ++i) {\n    removeListener(s, s.deps[i].listeners);\n  }\n  s.deps.length = 0;\n}\n\n/**\n * @private\n * Ends a stream\n */\nfunction endStream(s) {\n  if (s.deps !== undefined) detachDeps(s);\n  if (s.end !== undefined) detachDeps(s.end);\n}\n\n/**\n * @private\n */\n/**\n * @private\n * transducer stream transformer\n */\nfunction StreamTransformer() { }\nStreamTransformer.prototype['@@transducer/init'] = function() { };\nStreamTransformer.prototype['@@transducer/result'] = function() { };\nStreamTransformer.prototype['@@transducer/step'] = function(s, v) { return v; };\n\nmodule.exports = flyd;\n\n\n//# sourceURL=webpack:///./node_modules/flyd/lib/index.js?");

/***/ }),

/***/ "./node_modules/meiosis-tracer/lib/meiosis-tracer.js":
/*!***********************************************************!*\
  !*** ./node_modules/meiosis-tracer/lib/meiosis-tracer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,\"__esModule\",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,\"a\",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p=\"\",r(r.s=4)}([function(e,t,r){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});t.createReceiveValues=function(e,t){return function(r,n){n&&(e.tracerStates.length>0&&(e.tracerStates.length=e.tracerIndex+1),e.tracerStates.push(r),e.tracerIndex=e.tracerStates.length-1),t(r,e)}}},function(e,t,r){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var n=null,a=null,i=function(e,t){var r=document.getElementById(\"tracerSlider\");if(r.setAttribute(\"max\",String(t.tracerStates.length-1)),r.value=String(t.tracerIndex),document.getElementById(\"tracerStepBack\").disabled=0===t.tracerIndex,document.getElementById(\"tracerStepForward\").disabled=t.tracerIndex===t.tracerStates.length-1,document.getElementById(\"tracerIndex\").innerHTML=String(t.tracerIndex),document.getElementById(\"tracerModel\").value=JSON.stringify(e[0].value,null,4),0===document.querySelectorAll(\"div.dataStream\").length){for(var n=\"\",i=1,d=e.length;i<d;i++)n+=\"<div\"+a+\" class='dataStream'><textarea rows='5' cols='40'></textarea></div>\";document.getElementById(\"dataStreamContainer\").innerHTML=n}var c=document.querySelectorAll(\"div.dataStream textarea\");for(i=1,d=e.length;i<d;i++)c[i-1].value=JSON.stringify(e[i].value,null,4)},d=function(e,t){return function(r){var n=parseInt(r.target.value,10),a=t.tracerStates[n];t.tracerIndex=n;var d=a[0].value;e(d,!1),i(a,t)}},c=function(e){var t=e.tracerStates[0];e.tracerStates.length=0,e.tracerIndex=0,i(t,e)},o=function(e,t){var r=document.getElementById(e),n=r.getElementsByTagName(\"textarea\")[0],a=r.getElementsByTagName(\"input\")[0],i=r.getElementsByTagName(\"div\")[0];n.value=JSON.stringify(t.values[t.index],null,4),a.setAttribute(\"max\",String(t.values.length-1)),a.value=String(t.index),i.innerHTML=String(t.index)};t.initialView=function(e,t,r,i){var o=document.querySelector(e);if(o){a=i?\" style='float: left'\":\"\";var l=\"<div style='text-align: right'><button id='tracerToggle'>Hide</button></div><div id='tracerContainer'><div style='text-align: right'><button id='tracerReset'>Reset</button></div><div>Data streams:</div><input id='tracerSlider' type='range' min='0' max='\"+String(t.tracerStates.length-1)+\"' value='\"+String(t.tracerIndex)+\"' style='width: 100%'/><button id='tracerStepBack'>&lt;</button> <button id='tracerStepForward'>&gt;</button> <span id='tracerIndex'>\"+String(t.tracerIndex)+\"</span><div\"+a+\"><div>Model: (you can type into this box)</div><textarea id='tracerModel' rows='5' cols='40'></textarea><div id='errorMessage' style='display: none'><span style='color:red'>Invalid JSON</span></div></div><span id='dataStreamContainer'></span><span id='otherStreamContainer'></span></div>\";o.innerHTML=l;var u=document.getElementById(\"tracerContainer\");n=document.getElementById(\"errorMessage\"),document.getElementById(\"tracerSlider\").addEventListener(\"input\",d(r,t)),document.getElementById(\"tracerModel\").addEventListener(\"keyup\",function(e){return function(t){try{var r=JSON.parse(t.target.value);e(r,!0),n.style.display=\"none\"}catch(e){n.style.display=\"block\"}}}(r)),document.getElementById(\"tracerToggle\").addEventListener(\"click\",function(e){return function(t){var r=t.target;\"none\"===e.style.display?(e.style.display=\"block\",r.innerHTML=\"Hide\"):(e.style.display=\"none\",r.innerHTML=\"Show\")}}(u)),document.getElementById(\"tracerReset\").addEventListener(\"click\",function(e){return function(){c(e)}}(t)),document.getElementById(\"tracerStepBack\").addEventListener(\"click\",function(){d(r,t)({target:{value:Math.max(0,t.tracerIndex-1)}})}),document.getElementById(\"tracerStepForward\").addEventListener(\"click\",function(){d(r,t)({target:{value:Math.min(t.tracerStates.length-1,t.tracerIndex+1)}})})}},t.tracerView=i,t.reset=c,t.initStreamIds=function(e,t,r){var i=\"<div>Other streams:</div>\";e.forEach(function(e){return i+=\"<div\"+a+\" class='otherStream' id='\"+e+\"'><input type='range' min='0' max='0' value='0' style='width: 100%'/><div>0</div><textarea rows='5' cols='40'></textarea><div><button>Trigger</button></div></div>\"}),document.getElementById(\"otherStreamContainer\").innerHTML=i,e.forEach(function(e){var a=document.getElementById(e);a.getElementsByTagName(\"input\")[0].addEventListener(\"input\",function(e,t){return function(r){var n=e[t],a=parseInt(r.target.value,10);n.index=a,o(t,n)}}(t,e));var i=a.getElementsByTagName(\"button\")[0],d=a.getElementsByTagName(\"textarea\")[0];i.addEventListener(\"click\",function(e,t,r){return function(){try{var a=JSON.parse(t.value);r(e,a),n.style.display=\"none\"}catch(e){n.style.display=\"block\"}}}(e,d,r))})},t.updateStreamValue=o},function(e,t,r){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});t.tracerModel={tracerStates:[],tracerIndex:0,streams:{}}},function(e,t,r){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.meiosisTracer=void 0;var n=r(2),a=r(1),i=r(0);window.__MEIOSIS_TRACER_GLOBAL_HOOK__=!0;t.meiosisTracer=function(e){var t=e.selector,r=e.renderModel,d=e.triggerStreamValue,c=e.horizontal;if(document.querySelector(t)){var o=(0,i.createReceiveValues)(n.tracerModel,a.tracerView);r=r||function(e,t){return window.postMessage({type:\"MEIOSIS_RENDER_MODEL\",model:e,sendValuesBack:t},\"*\")},(0,a.initialView)(t,n.tracerModel,r,c),d=d||function(e,t){return window.postMessage({type:\"MEIOSIS_TRIGGER_STREAM_VALUE\",streamId:e,value:t},\"*\")};var l=function(e){e.forEach(function(e){return n.tracerModel.streams[e]={index:0,values:[]}}),(0,a.initStreamIds)(e,n.tracerModel.streams,d)},u=function(e,t){var r=n.tracerModel.streams[e];r.values.push(t),r.index=r.values.length-1,(0,a.updateStreamValue)(e,r)};return window.addEventListener(\"message\",function(e){if(\"MEIOSIS_VALUES\"===e.data.type)o(e.data.values,e.data.update);else if(\"MEIOSIS_STREAM_IDS\"===e.data.type){var t=e.data.streamIds;l(t)}else\"MEIOSIS_STREAM_VALUE\"===e.data.type&&u(e.data.streamId,e.data.value)}),window.postMessage({type:\"MEIOSIS_TRACER_INIT\"},\"*\"),{receiveValues:o,initStreamIdModel:l,receiveStreamValue:u,reset:function(){return(0,a.reset)(n.tracerModel)}}}}},function(e,t,r){\"use strict\";var n=r(3);e.exports=n.meiosisTracer}]);\n//# sourceMappingURL=meiosis-tracer.js.map\n\n//# sourceURL=webpack:///./node_modules/meiosis-tracer/lib/meiosis-tracer.js?");

/***/ }),

/***/ "./node_modules/meiosis/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/meiosis/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./meiosis */ \"./node_modules/meiosis/lib/meiosis.js\"));\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/meiosis/lib/index.js?");

/***/ }),

/***/ "./node_modules/meiosis/lib/meiosis.js":
/*!*********************************************!*\
  !*** ./node_modules/meiosis/lib/meiosis.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction isMeiosisTracerOn() {\n    return window && window[\"__MEIOSIS_TRACER_GLOBAL_HOOK__\"];\n}\nexports.isMeiosisTracerOn = isMeiosisTracerOn;\nfunction trace(params) {\n    if (!params.update || !params.dataStreams) {\n        throw new Error(\"Please specify update and dataStreams.\");\n    }\n    if (isMeiosisTracerOn()) {\n        var toJS_1 = params.toJS || (function (model) { return JSON.parse(JSON.stringify(model)); });\n        var fromJS_1 = params.fromJS || (function (model) { return model; });\n        var toUpdate_1 = params.toUpdate || (function (model) { return function () { return model; }; });\n        var bufferedValues_1 = [];\n        var bufferedStreamValues_1 = [];\n        var devtoolInitialized_1 = false;\n        var sendValues_1 = true;\n        var liveChange_1 = true;\n        var lastStream = params.dataStreams[params.dataStreams.length - 1];\n        var otherStreamIds_1 = [];\n        var otherStreamsById_1 = {};\n        if (params.otherStreams && params.otherStreams.length) {\n            params.otherStreams.forEach(function (otherStream) {\n                var streamId = \"stream_\" + new Date().getTime();\n                otherStreamIds_1.push(streamId);\n                otherStreamsById_1[streamId] = otherStream;\n                otherStream.map(function (value) {\n                    var data = { type: \"MEIOSIS_STREAM_VALUE\", value: value, streamId: streamId };\n                    if (devtoolInitialized_1) {\n                        window.postMessage(data, \"*\");\n                    }\n                    else {\n                        bufferedStreamValues_1.push(data);\n                    }\n                });\n            });\n        }\n        window.addEventListener(\"message\", function (evt) {\n            if (evt.data.type === \"MEIOSIS_RENDER_MODEL\") {\n                sendValues_1 = evt.data.sendValuesBack;\n                liveChange_1 = false;\n                params.update(toUpdate_1(fromJS_1(evt.data.model)));\n            }\n            else if (evt.data.type === \"MEIOSIS_TRACER_INIT\") {\n                devtoolInitialized_1 = true;\n                if (otherStreamIds_1.length > 0) {\n                    window.postMessage({ type: \"MEIOSIS_STREAM_IDS\", streamIds: otherStreamIds_1 }, \"*\");\n                }\n                bufferedValues_1.forEach(function (values) { return window.postMessage({ type: \"MEIOSIS_VALUES\", values: values, update: true }, \"*\"); });\n                bufferedStreamValues_1.forEach(function (data) { return window.postMessage(data, \"*\"); });\n            }\n            else if (evt.data.type === \"MEIOSIS_TRIGGER_STREAM_VALUE\") {\n                var streamId = evt.data.streamId;\n                var value = evt.data.value;\n                otherStreamsById_1[streamId](value);\n            }\n        });\n        lastStream.map(function () {\n            if (sendValues_1 || liveChange_1) {\n                var values = params.dataStreams.map(function (stream) {\n                    return ({ value: toJS_1(stream()) });\n                });\n                if (devtoolInitialized_1) {\n                    window.postMessage({ type: \"MEIOSIS_VALUES\", values: values, update: true }, \"*\");\n                }\n                else {\n                    bufferedValues_1.push(values);\n                }\n            }\n            liveChange_1 = true;\n        });\n        window.postMessage({ type: \"MEIOSIS_PING\" }, \"*\");\n    }\n}\nexports.trace = trace;\n;\n//# sourceMappingURL=meiosis.js.map\n\n//# sourceURL=webpack:///./node_modules/meiosis/lib/meiosis.js?");

/***/ }),

/***/ "./node_modules/ramda/src/curryN.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/curryN.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _arity = /*#__PURE__*/__webpack_require__(/*! ./internal/_arity */ \"./node_modules/ramda/src/internal/_arity.js\");\n\nvar _curry1 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _curry2 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar _curryN = /*#__PURE__*/__webpack_require__(/*! ./internal/_curryN */ \"./node_modules/ramda/src/internal/_curryN.js\");\n\n/**\n * Returns a curried equivalent of the provided function, with the specified\n * arity. The curried function has two unusual capabilities. First, its\n * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the\n * following are equivalent:\n *\n *   - `g(1)(2)(3)`\n *   - `g(1)(2, 3)`\n *   - `g(1, 2)(3)`\n *   - `g(1, 2, 3)`\n *\n * Secondly, the special placeholder value [`R.__`](#__) may be used to specify\n * \"gaps\", allowing partial application of any combination of arguments,\n * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),\n * the following are equivalent:\n *\n *   - `g(1, 2, 3)`\n *   - `g(_, 2, 3)(1)`\n *   - `g(_, _, 3)(1)(2)`\n *   - `g(_, _, 3)(1, 2)`\n *   - `g(_, 2)(1)(3)`\n *   - `g(_, 2)(1, 3)`\n *   - `g(_, 2)(_, 3)(1)`\n *\n * @func\n * @memberOf R\n * @since v0.5.0\n * @category Function\n * @sig Number -> (* -> a) -> (* -> a)\n * @param {Number} length The arity for the returned function.\n * @param {Function} fn The function to curry.\n * @return {Function} A new, curried function.\n * @see R.curry\n * @example\n *\n *      var sumArgs = (...args) => R.sum(args);\n *\n *      var curriedAddFourNumbers = R.curryN(4, sumArgs);\n *      var f = curriedAddFourNumbers(1, 2);\n *      var g = f(3);\n *      g(4); //=> 10\n */\n\n\nvar curryN = /*#__PURE__*/_curry2(function curryN(length, fn) {\n  if (length === 1) {\n    return _curry1(fn);\n  }\n  return _arity(length, _curryN(length, [], fn));\n});\nmodule.exports = curryN;\n\n//# sourceURL=webpack:///./node_modules/ramda/src/curryN.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_arity.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/src/internal/_arity.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arity(n, fn) {\n  /* eslint-disable no-unused-vars */\n  switch (n) {\n    case 0:\n      return function () {\n        return fn.apply(this, arguments);\n      };\n    case 1:\n      return function (a0) {\n        return fn.apply(this, arguments);\n      };\n    case 2:\n      return function (a0, a1) {\n        return fn.apply(this, arguments);\n      };\n    case 3:\n      return function (a0, a1, a2) {\n        return fn.apply(this, arguments);\n      };\n    case 4:\n      return function (a0, a1, a2, a3) {\n        return fn.apply(this, arguments);\n      };\n    case 5:\n      return function (a0, a1, a2, a3, a4) {\n        return fn.apply(this, arguments);\n      };\n    case 6:\n      return function (a0, a1, a2, a3, a4, a5) {\n        return fn.apply(this, arguments);\n      };\n    case 7:\n      return function (a0, a1, a2, a3, a4, a5, a6) {\n        return fn.apply(this, arguments);\n      };\n    case 8:\n      return function (a0, a1, a2, a3, a4, a5, a6, a7) {\n        return fn.apply(this, arguments);\n      };\n    case 9:\n      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {\n        return fn.apply(this, arguments);\n      };\n    case 10:\n      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {\n        return fn.apply(this, arguments);\n      };\n    default:\n      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');\n  }\n}\nmodule.exports = _arity;\n\n//# sourceURL=webpack:///./node_modules/ramda/src/internal/_arity.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry1.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curry1.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _isPlaceholder = /*#__PURE__*/__webpack_require__(/*! ./_isPlaceholder */ \"./node_modules/ramda/src/internal/_isPlaceholder.js\");\n\n/**\n * Optimized internal one-arity curry function.\n *\n * @private\n * @category Function\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\n\n\nfunction _curry1(fn) {\n  return function f1(a) {\n    if (arguments.length === 0 || _isPlaceholder(a)) {\n      return f1;\n    } else {\n      return fn.apply(this, arguments);\n    }\n  };\n}\nmodule.exports = _curry1;\n\n//# sourceURL=webpack:///./node_modules/ramda/src/internal/_curry1.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry2.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curry2.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 = /*#__PURE__*/__webpack_require__(/*! ./_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _isPlaceholder = /*#__PURE__*/__webpack_require__(/*! ./_isPlaceholder */ \"./node_modules/ramda/src/internal/_isPlaceholder.js\");\n\n/**\n * Optimized internal two-arity curry function.\n *\n * @private\n * @category Function\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\n\n\nfunction _curry2(fn) {\n  return function f2(a, b) {\n    switch (arguments.length) {\n      case 0:\n        return f2;\n      case 1:\n        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {\n          return fn(a, _b);\n        });\n      default:\n        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {\n          return fn(_a, b);\n        }) : _isPlaceholder(b) ? _curry1(function (_b) {\n          return fn(a, _b);\n        }) : fn(a, b);\n    }\n  };\n}\nmodule.exports = _curry2;\n\n//# sourceURL=webpack:///./node_modules/ramda/src/internal/_curry2.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_curryN.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curryN.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _arity = /*#__PURE__*/__webpack_require__(/*! ./_arity */ \"./node_modules/ramda/src/internal/_arity.js\");\n\nvar _isPlaceholder = /*#__PURE__*/__webpack_require__(/*! ./_isPlaceholder */ \"./node_modules/ramda/src/internal/_isPlaceholder.js\");\n\n/**\n * Internal curryN function.\n *\n * @private\n * @category Function\n * @param {Number} length The arity of the curried function.\n * @param {Array} received An array of arguments received thus far.\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\n\n\nfunction _curryN(length, received, fn) {\n  return function () {\n    var combined = [];\n    var argsIdx = 0;\n    var left = length;\n    var combinedIdx = 0;\n    while (combinedIdx < received.length || argsIdx < arguments.length) {\n      var result;\n      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {\n        result = received[combinedIdx];\n      } else {\n        result = arguments[argsIdx];\n        argsIdx += 1;\n      }\n      combined[combinedIdx] = result;\n      if (!_isPlaceholder(result)) {\n        left -= 1;\n      }\n      combinedIdx += 1;\n    }\n    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));\n  };\n}\nmodule.exports = _curryN;\n\n//# sourceURL=webpack:///./node_modules/ramda/src/internal/_curryN.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isPlaceholder.js":
/*!***********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isPlaceholder.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _isPlaceholder(a) {\n       return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;\n}\nmodule.exports = _isPlaceholder;\n\n//# sourceURL=webpack:///./node_modules/ramda/src/internal/_isPlaceholder.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/clone.js":
/*!********************************************!*\
  !*** ./node_modules/ultradom/src/clone.js ***!
  \********************************************/
/*! exports provided: clone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clone\", function() { return clone; });\nfunction clone(target, source) {\n  var obj = {}\n\n  for (var i in target) obj[i] = target[i]\n  for (var i in source) obj[i] = source[i]\n\n  return obj\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/clone.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/createElement.js":
/*!****************************************************!*\
  !*** ./node_modules/ultradom/src/createElement.js ***!
  \****************************************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony import */ var _updateAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateAttribute */ \"./node_modules/ultradom/src/updateAttribute.js\");\n\n\nfunction createElement(node, lifecycle, isSVG) {\n  var element =\n    typeof node === \"string\" || typeof node === \"number\"\n      ? document.createTextNode(node)\n      : (isSVG = isSVG || node.nodeName === \"svg\")\n        ? document.createElementNS(\"http://www.w3.org/2000/svg\", node.nodeName)\n        : document.createElement(node.nodeName)\n\n  var attributes = node.attributes\n  if (attributes) {\n    if (attributes.oncreate) {\n      lifecycle.push(function() {\n        attributes.oncreate(element)\n      })\n    }\n\n    for (var i = 0; i < node.children.length; i++) {\n      element.appendChild(createElement(node.children[i], lifecycle, isSVG))\n    }\n\n    for (var name in attributes) {\n      Object(_updateAttribute__WEBPACK_IMPORTED_MODULE_0__[\"updateAttribute\"])(element, name, attributes[name], null, isSVG)\n    }\n  }\n\n  return element\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/createElement.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/eventListener.js":
/*!****************************************************!*\
  !*** ./node_modules/ultradom/src/eventListener.js ***!
  \****************************************************/
/*! exports provided: eventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eventListener\", function() { return eventListener; });\nfunction eventListener(event) {\n  return event.currentTarget.events[event.type](event)\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/eventListener.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/getKey.js":
/*!*********************************************!*\
  !*** ./node_modules/ultradom/src/getKey.js ***!
  \*********************************************/
/*! exports provided: getKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getKey\", function() { return getKey; });\nfunction getKey(node) {\n  return node ? node.key : null\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/getKey.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/h.js":
/*!****************************************!*\
  !*** ./node_modules/ultradom/src/h.js ***!
  \****************************************/
/*! exports provided: h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return h; });\nfunction h(name, attributes) {\n  var rest = []\n  var children = []\n  var length = arguments.length\n\n  while (length-- > 2) rest.push(arguments[length])\n\n  while (rest.length) {\n    var node = rest.pop()\n    if (node && node.pop) {\n      for (length = node.length; length--; ) {\n        rest.push(node[length])\n      }\n    } else if (node != null && node !== true && node !== false) {\n      children.push(node)\n    }\n  }\n\n  return typeof name === \"function\"\n    ? name(attributes || {}, children) // h(Component)\n    : {\n        nodeName: name,\n        attributes: attributes || {},\n        children: children,\n        key: attributes && attributes.key\n      }\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/h.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/ultradom/src/index.js ***!
  \********************************************/
/*! exports provided: h, patch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ \"./node_modules/ultradom/src/h.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return _h__WEBPACK_IMPORTED_MODULE_0__[\"h\"]; });\n\n/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patch */ \"./node_modules/ultradom/src/patch.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"patch\", function() { return _patch__WEBPACK_IMPORTED_MODULE_1__[\"patch\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/index.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/patch.js":
/*!********************************************!*\
  !*** ./node_modules/ultradom/src/patch.js ***!
  \********************************************/
/*! exports provided: patch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"patch\", function() { return patch; });\n/* harmony import */ var _recycleElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recycleElement */ \"./node_modules/ultradom/src/recycleElement.js\");\n/* harmony import */ var _patchElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patchElement */ \"./node_modules/ultradom/src/patchElement.js\");\n\n\n\nfunction patch(node, element) {\n  var lifecycle = []\n\n  element = element\n    ? Object(_patchElement__WEBPACK_IMPORTED_MODULE_1__[\"patchElement\"])(\n        element.parentNode,\n        element,\n        element.node == null ? Object(_recycleElement__WEBPACK_IMPORTED_MODULE_0__[\"recycleElement\"])(element, [].map) : element.node,\n        node,\n        lifecycle,\n        element.node == null // isRecycling\n      )\n    : Object(_patchElement__WEBPACK_IMPORTED_MODULE_1__[\"patchElement\"])(null, null, null, node, lifecycle)\n\n  element.node = node\n\n  while (lifecycle.length) lifecycle.pop()()\n\n  return element\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/patch.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/patchElement.js":
/*!***************************************************!*\
  !*** ./node_modules/ultradom/src/patchElement.js ***!
  \***************************************************/
/*! exports provided: patchElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"patchElement\", function() { return patchElement; });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./node_modules/ultradom/src/createElement.js\");\n/* harmony import */ var _removeElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeElement */ \"./node_modules/ultradom/src/removeElement.js\");\n/* harmony import */ var _updateElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateElement */ \"./node_modules/ultradom/src/updateElement.js\");\n/* harmony import */ var _getKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getKey */ \"./node_modules/ultradom/src/getKey.js\");\n\n\n\n\n\nfunction patchElement(\n  parent,\n  element,\n  oldNode,\n  node,\n  lifecycle,\n  isRecycling,\n  isSVG\n) {\n  if (node === oldNode) {\n  } else if (oldNode == null || oldNode.nodeName !== node.nodeName) {\n    var newElement = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(node, lifecycle, isSVG)\n    if (parent) {\n      parent.insertBefore(newElement, element)\n      if (oldNode != null) {\n        Object(_removeElement__WEBPACK_IMPORTED_MODULE_1__[\"removeElement\"])(parent, element, oldNode)\n      }\n    }\n    element = newElement\n  } else if (oldNode.nodeName == null) {\n    element.nodeValue = node\n  } else {\n    Object(_updateElement__WEBPACK_IMPORTED_MODULE_2__[\"updateElement\"])(\n      element,\n      oldNode.attributes,\n      node.attributes,\n      lifecycle,\n      isRecycling,\n      (isSVG = isSVG || node.nodeName === \"svg\")\n    )\n\n    var oldKeyed = {}\n    var newKeyed = {}\n    var oldElements = []\n    var oldChildren = oldNode.children\n    var children = node.children\n\n    for (var i = 0; i < oldChildren.length; i++) {\n      oldElements[i] = element.childNodes[i]\n\n      var oldKey = Object(_getKey__WEBPACK_IMPORTED_MODULE_3__[\"getKey\"])(oldChildren[i])\n      if (oldKey != null) {\n        oldKeyed[oldKey] = [oldElements[i], oldChildren[i]]\n      }\n    }\n\n    var i = 0\n    var k = 0\n\n    while (k < children.length) {\n      var oldKey = Object(_getKey__WEBPACK_IMPORTED_MODULE_3__[\"getKey\"])(oldChildren[i])\n      var newKey = Object(_getKey__WEBPACK_IMPORTED_MODULE_3__[\"getKey\"])(children[k])\n\n      if (newKeyed[oldKey]) {\n        i++\n        continue\n      }\n\n      if (newKey == null || isRecycling) {\n        if (oldKey == null) {\n          patchElement(\n            element,\n            oldElements[i],\n            oldChildren[i],\n            children[k],\n            lifecycle,\n            isRecycling,\n            isSVG\n          )\n          k++\n        }\n        i++\n      } else {\n        var keyedNode = oldKeyed[newKey] || []\n\n        if (oldKey === newKey) {\n          patchElement(\n            element,\n            keyedNode[0],\n            keyedNode[1],\n            children[k],\n            lifecycle,\n            isRecycling,\n            isSVG\n          )\n          i++\n        } else if (keyedNode[0]) {\n          patchElement(\n            element,\n            element.insertBefore(keyedNode[0], oldElements[i]),\n            keyedNode[1],\n            children[k],\n            lifecycle,\n            isRecycling,\n            isSVG\n          )\n        } else {\n          patchElement(\n            element,\n            oldElements[i],\n            null,\n            children[k],\n            lifecycle,\n            isRecycling,\n            isSVG\n          )\n        }\n\n        newKeyed[newKey] = children[k]\n        k++\n      }\n    }\n\n    while (i < oldChildren.length) {\n      if (Object(_getKey__WEBPACK_IMPORTED_MODULE_3__[\"getKey\"])(oldChildren[i]) == null) {\n        Object(_removeElement__WEBPACK_IMPORTED_MODULE_1__[\"removeElement\"])(element, oldElements[i], oldChildren[i])\n      }\n      i++\n    }\n\n    for (var i in oldKeyed) {\n      if (!newKeyed[i]) {\n        Object(_removeElement__WEBPACK_IMPORTED_MODULE_1__[\"removeElement\"])(element, oldKeyed[i][0], oldKeyed[i][1])\n      }\n    }\n  }\n  return element\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/patchElement.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/recycleElement.js":
/*!*****************************************************!*\
  !*** ./node_modules/ultradom/src/recycleElement.js ***!
  \*****************************************************/
/*! exports provided: recycleElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"recycleElement\", function() { return recycleElement; });\nfunction recycleElement(element, map) {\n  return {\n    nodeName: element.nodeName.toLowerCase(),\n    attributes: {},\n    children: map.call(element.childNodes, function(element) {\n      return element.nodeType === 3 // Node.TEXT_NODE\n        ? element.nodeValue\n        : recycleElement(element, map)\n    })\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/recycleElement.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/removeChildren.js":
/*!*****************************************************!*\
  !*** ./node_modules/ultradom/src/removeChildren.js ***!
  \*****************************************************/
/*! exports provided: removeChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeChildren\", function() { return removeChildren; });\nfunction removeChildren(element, node) {\n  var attributes = node.attributes\n  if (attributes) {\n    for (var i = 0; i < node.children.length; i++) {\n      removeChildren(element.childNodes[i], node.children[i])\n    }\n\n    if (attributes.ondestroy) {\n      attributes.ondestroy(element)\n    }\n  }\n  return element\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/removeChildren.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/removeElement.js":
/*!****************************************************!*\
  !*** ./node_modules/ultradom/src/removeElement.js ***!
  \****************************************************/
/*! exports provided: removeElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeElement\", function() { return removeElement; });\n/* harmony import */ var _removeChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeChildren */ \"./node_modules/ultradom/src/removeChildren.js\");\n\n\nfunction removeElement(parent, element, node) {\n  function done() {\n    parent.removeChild(Object(_removeChildren__WEBPACK_IMPORTED_MODULE_0__[\"removeChildren\"])(element, node))\n  }\n\n  var cb = node.attributes && node.attributes.onremove\n  if (cb) {\n    cb(element, done)\n  } else {\n    done()\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/removeElement.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/updateAttribute.js":
/*!******************************************************!*\
  !*** ./node_modules/ultradom/src/updateAttribute.js ***!
  \******************************************************/
/*! exports provided: updateAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateAttribute\", function() { return updateAttribute; });\n/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone */ \"./node_modules/ultradom/src/clone.js\");\n/* harmony import */ var _eventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListener */ \"./node_modules/ultradom/src/eventListener.js\");\n\n\n\nfunction updateAttribute(element, name, value, oldValue, isSVG) {\n  if (name === \"key\") {\n  } else if (name === \"style\") {\n    for (var i in Object(_clone__WEBPACK_IMPORTED_MODULE_0__[\"clone\"])(oldValue, value)) {\n      var style = value == null || value[i] == null ? \"\" : value[i]\n      if (i[0] === \"-\") {\n        element[name].setProperty(i, style)\n      } else {\n        element[name][i] = style\n      }\n    }\n  } else {\n    if (name[0] === \"o\" && name[1] === \"n\") {\n      name = name.slice(2)\n\n      if (element.events) {\n        if (!oldValue) oldValue = element.events[name]\n      } else {\n        element.events = {}\n      }\n\n      element.events[name] = value\n\n      if (value) {\n        if (!oldValue) {\n          element.addEventListener(name, _eventListener__WEBPACK_IMPORTED_MODULE_1__[\"eventListener\"])\n        }\n      } else {\n        element.removeEventListener(name, _eventListener__WEBPACK_IMPORTED_MODULE_1__[\"eventListener\"])\n      }\n    } else if (name in element && name !== \"list\" && !isSVG) {\n      element[name] = value == null ? \"\" : value\n    } else if (value != null && value !== false) {\n      element.setAttribute(name, value)\n    }\n\n    if (value == null || value === false) {\n      element.removeAttribute(name)\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/updateAttribute.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/updateElement.js":
/*!****************************************************!*\
  !*** ./node_modules/ultradom/src/updateElement.js ***!
  \****************************************************/
/*! exports provided: updateElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateElement\", function() { return updateElement; });\n/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone */ \"./node_modules/ultradom/src/clone.js\");\n/* harmony import */ var _updateAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateAttribute */ \"./node_modules/ultradom/src/updateAttribute.js\");\n\n\n\nfunction updateElement(\n  element,\n  oldAttributes,\n  attributes,\n  lifecycle,\n  isRecycling,\n  isSVG\n) {\n  for (var name in Object(_clone__WEBPACK_IMPORTED_MODULE_0__[\"clone\"])(oldAttributes, attributes)) {\n    if (\n      attributes[name] !==\n      (name === \"value\" || name === \"checked\"\n        ? element[name]\n        : oldAttributes[name])\n    ) {\n      Object(_updateAttribute__WEBPACK_IMPORTED_MODULE_1__[\"updateAttribute\"])(\n        element,\n        name,\n        attributes[name],\n        oldAttributes[name],\n        isSVG\n      )\n    }\n  }\n\n  var cb = isRecycling ? attributes.oncreate : attributes.onupdate\n  if (cb) {\n    lifecycle.push(function() {\n      cb(element, oldAttributes)\n    })\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/updateElement.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\r\n} catch (e) {\r\n\t// This works if the window reference is available\r\n\tif (typeof window === \"object\") g = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./ultradom/index.js":
/*!***************************!*\
  !*** ./ultradom/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _setup = __webpack_require__(/*! ./setup */ \"./ultradom/setup.js\");\n\n(0, _setup.setupApp)();\n\n//# sourceURL=webpack:///./ultradom/index.js?");

/***/ }),

/***/ "./ultradom/setup.js":
/*!***************************!*\
  !*** ./ultradom/setup.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.setupApp = exports.setupRender = undefined;\n\nvar _ultradom = __webpack_require__(/*! ultradom */ \"./node_modules/ultradom/src/index.js\");\n\nvar _common = __webpack_require__(/*! ../common */ \"./common/index.js\");\n\nvar _jsx = __webpack_require__(/*! ../common/jsx */ \"./common/jsx.js\");\n\nvar jsxUltradom = (0, _jsx.jsx)({\n  \"onChange\": \"onchange\",\n  \"onClick\": \"onclick\",\n  \"onInput\": \"oninput\"\n});\n\nvar setupRender = exports.setupRender = function setupRender() {\n  global.jsx = jsxUltradom(_ultradom.h);\n  return _ultradom.patch;\n};\n\nvar setupApp = exports.setupApp = function setupApp() {\n  return (0, _common.setup)(setupRender());\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./ultradom/setup.js?");

/***/ })

/******/ });