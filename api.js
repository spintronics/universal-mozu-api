'use strict';

function _defineProperty(obj, key, value) {
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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.6.4' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1 = _core.version;

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive$1 = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive$1(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var id$1 = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id$1 + px).toString(36));
};

var _library = false;

var _shared = createCommonjsModule(function (module) {
var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: _core.version,
  mode: 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});
});

var _functionToString = _shared('native-function-to-string', Function.toString);

var _redefine = createCommonjsModule(function (module) {
var SRC = _uid('src');

var TO_STRING = 'toString';
var TPL = ('' + _functionToString).split(TO_STRING);

_core.inspectSource = function (it) {
  return _functionToString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === _global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    _hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    _hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || _functionToString.call(this);
});
});

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // extend global
    if (target) _redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) _hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
_global.core = _core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return _iobject(_defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var shared = _shared('keys');

var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var f$1 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$1
};

var isEnum = _objectPie.f;
var _objectToArray = function (isEntries) {
  return function (it) {
    var O = _toIobject(it);
    var keys = _objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

// https://github.com/tc39/proposal-object-values-entries

var $values = _objectToArray(false);

_export(_export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var at = _stringAt(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
var _advanceStringIndex = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');

var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG = _wks('toStringTag');
// ES3 wrong here
var ARG = _cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

var _classof = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? _cof(O)
    // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
var _regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (_classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};

// 21.2.5.3 get RegExp.prototype.flags

var _flags = function () {
  var that = _anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', _flags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

var _regexpExec = patchedExec;

_export({
  target: 'RegExp',
  proto: true,
  forced: _regexpExec !== /./.exec
}, {
  exec: _regexpExec
});

var SPECIES = _wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !_fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

var _fixReWks = function (KEY, length, exec) {
  var SYMBOL = _wks(KEY);

  var DELEGATES_TO_SYMBOL = !_fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !_fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      _defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === _regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    _redefine(String.prototype, KEY, strfn);
    _hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

// @@match logic
_fixReWks('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = _anObject(regexp);
      var S = String(this);
      if (!rx.global) return _regexpExecAbstract(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = _regexpExecAbstract(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

var _iterators = {};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var def = _objectDp.f;

var TAG$1 = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG$1)) def(it, TAG$1, { configurable: true, value: tag });
};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!_library && typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

// call something on iterator step with safe closing on error

var _iterCall = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) _anObject(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator

var ITERATOR$1 = _wks('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function (it) {
  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
};

var _createProperty = function (object, index, value) {
  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
  else object[index] = value;
};

var ITERATOR$2 = _wks('iterator');

var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$2]
    || it['@@iterator']
    || _iterators[_classof(it)];
};

var ITERATOR$3 = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$3]();
  riter['return'] = function () { SAFE_CLOSING = true; };
} catch (e) { /* empty */ }

var _iterDetect = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$3]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR$3] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

_export(_export.S + _export.F * !_iterDetect(function (iter) { }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = _toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = core_getIteratorMethod(O);
    var length, result, step, iterator;
    if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = _toLength(O.length);
      for (result = new C(length); length > index; index++) {
        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');
var ArrayProto$1 = Array.prototype;
if (ArrayProto$1[UNSCOPABLES] == undefined) _hide(ArrayProto$1, UNSCOPABLES, {});
var _addToUnscopables = function (key) {
  ArrayProto$1[UNSCOPABLES][key] = true;
};

// https://github.com/tc39/Array.prototype.includes

var $includes = _arrayIncludes(true);

_export(_export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

_addToUnscopables('includes');

// 7.2.8 IsRegExp(argument)


var MATCH = _wks('match');
var _isRegexp = function (it) {
  var isRegExp;
  return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
};

// helper for String#{startsWith, endsWith, includes}



var _stringContext = function (that, searchString, NAME) {
  if (_isRegexp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(_defined(that));
};

var MATCH$1 = _wks('match');
var _failsIsRegexp = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH$1] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};

var INCLUDES = 'includes';

_export(_export.P + _export.F * _failsIsRegexp(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~_stringContext(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)


var SPECIES$1 = _wks('species');
var _speciesConstructor = function (O, D) {
  var C = _anObject(O).constructor;
  var S;
  return C === undefined || (S = _anObject(C)[SPECIES$1]) == undefined ? D : _aFunction(S);
};

var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX$1 = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !_fails(function () { });

// @@split logic
_fixReWks('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!_isRegexp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = _regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX$1];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX$1] === match.index) separatorCopy[LAST_INDEX$1]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = _anObject(regexp);
      var S = String(this);
      var C = _speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return _regexpExecAbstract(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = _regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(_toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = _advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }
  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments = _iterators.Array;

_addToUnscopables('keys');
_addToUnscopables('values');
_addToUnscopables('entries');

var ITERATOR$4 = _wks('iterator');
var TO_STRING_TAG = _wks('toStringTag');
var ArrayValues = _iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR$4]) _hide(proto, ITERATOR$4, ArrayValues);
    if (!proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
    _iterators[NAME] = ArrayValues;
    if (explicit) for (key in es6_array_iterator) if (!proto[key]) _redefine(proto, key, es6_array_iterator[key], true);
  }
}

var max$1 = Math.max;
var min$2 = Math.min;
var floor$1 = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
_fixReWks('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = _anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = _regexpExecAbstract(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max$1(min$2(_toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = _toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor$1(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});

var _anInstance = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

var _forOf = createCommonjsModule(function (module) {
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
  var f = _ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
    result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = _iterCall(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;
});

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

var process$1 = _global.process;
var setTask = _global.setImmediate;
var clearTask = _global.clearImmediate;
var MessageChannel = _global.MessageChannel;
var Dispatch = _global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      _invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (_cof(process$1) == 'process') {
    defer = function (id) {
      process$1.nextTick(_ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(_ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = _ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
    defer = function (id) {
      _global.postMessage(id + '', '*');
    };
    _global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in _domCreate('script')) {
    defer = function (id) {
      _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
        _html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(_ctx(run, id, 1), 0);
    };
  }
}
var _task = {
  set: setTask,
  clear: clearTask
};

var macrotask = _task.set;
var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
var process$2 = _global.process;
var Promise$1 = _global.Promise;
var isNode = _cof(process$2) == 'process';

var _microtask = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process$2.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process$2.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise$1.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(_global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

// 25.4.1.5 NewPromiseCapability(C)


function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = _aFunction(resolve);
  this.reject = _aFunction(reject);
}

var f$2 = function (C) {
  return new PromiseCapability(C);
};

var _newPromiseCapability = {
	f: f$2
};

var _perform = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

var navigator = _global.navigator;

var _userAgent = navigator && navigator.userAgent || '';

var _promiseResolve = function (C, x) {
  _anObject(C);
  if (_isObject(x) && x.constructor === C) return x;
  var promiseCapability = _newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var _redefineAll = function (target, src, safe) {
  for (var key in src) _redefine(target, key, src[key], safe);
  return target;
};

var SPECIES$2 = _wks('species');

var _setSpecies = function (KEY) {
  var C = _global[KEY];
  if (_descriptors && C && !C[SPECIES$2]) _objectDp.f(C, SPECIES$2, {
    configurable: true,
    get: function () { return this; }
  });
};

var task = _task.set;
var microtask = _microtask();




var PROMISE = 'Promise';
var TypeError$1 = _global.TypeError;
var process$3 = _global.process;
var versions = process$3 && process$3.versions;
var v8 = versions && versions.v8 || '';
var $Promise = _global[PROMISE];
var isNode$1 = _classof(process$3) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode$1 || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && _userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError$1('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(_global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = _perform(function () {
        if (isNode$1) {
          process$3.emit('unhandledRejection', value, promise);
        } else if (handler = _global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = _global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(_global, function () {
    var handler;
    if (isNode$1) {
      process$3.emit('rejectionHandled', promise);
    } else if (handler = _global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    _anInstance(this, $Promise, PROMISE, '_h');
    _aFunction(executor);
    Internal.call(this);
    try {
      executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode$1 ? process$3.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = _ctx($resolve, promise, 1);
    this.reject = _ctx($reject, promise, 1);
  };
  _newPromiseCapability.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Promise: $Promise });
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
_export(_export.S + _export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
_export(_export.S + _export.F * (_library || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
  }
});
_export(_export.S + _export.F * !(USE_NATIVE && _iterDetect(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = _perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      _forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = _perform(function () {
      _forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

var _meta = createCommonjsModule(function (module) {
var META = _uid('meta');


var setDesc = _objectDp.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});
var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;

// most Object methods by ES6 should accept primitives



var _objectSap = function (KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
};

// 19.1.2.5 Object.freeze(O)

var meta = _meta.onFreeze;

_objectSap('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && _isObject(it) ? $freeze(meta(it)) : it;
  };
});

var defaultDefinition = {
  output: {
    a_A_b_B_c: "_g",
    a_A_b_B_C: "_tp~a/A/b/B/c?C=d&D=e&E=f&F=g&G=h",
    a_A_b_d_c: "_g",
    a_A_b_d_C: "_tp~a/A/b/B/H?G=h",
    a_A_b_D_c: "_o",
    a_A_b_D_C: "_tp~a/A/b/B/c?G=h",
    a_A_b_e_c: "_p",
    a_A_b_e_C: "_tp~a/A/b/B/H?G=h",
    a_A_b_E_c: "_d",
    a_A_b_E_C: "_tp~a/A/b/B/H",
    a_A_f_F_c: "_g",
    a_A_f_F_C: "_tp~a/A/b/i/c",
    a_A_f_g_c: "_g",
    a_A_f_g_C: "_tp~a/A/b/i/I?G=h",
    a_A_f_G_c: "_o",
    a_A_f_G_C: "_tp~a/A/b/i/c?G=h",
    a_A_f_h_c: "_p",
    a_A_f_h_C: "_tp~a/A/b/i/I?G=h",
    a_A_f_H_c: "_d",
    a_A_f_H_C: "_tp~a/A/b/i/I",
    a_A_i_I_j_J_c: "_g",
    a_A_i_I_j_J_C: "_tp~a/A/b/B/j/J/c?C=d&D=e&E=f&F=g&G=h",
    a_A_i_I_j_k_c: "_g",
    a_A_i_I_j_k_C: "_tp~a/A/b/B/j/J/k/K",
    a_A_i_I_j_K_c: "_g",
    a_A_i_I_j_K_C: "_tp~a/A/b/B/j/J/k?G=h",
    a_A_i_I_j_l_c: "_o",
    a_A_i_I_j_l_C: "_tp~a/A/b/B/j/J/c?G=h",
    a_A_i_I_j_L_c: "_p",
    a_A_i_I_j_L_C: "_tp~a/A/b/B/j/J/k?G=h",
    a_m_M_c: "_g",
    a_m_M_C: "_tp~a/A/l/L?G=h",
    a_m_n_c: "_g",
    a_m_n_C: "_tp~a/A/l/m?G=h",
    a_m_N_c: "_g",
    a_m_N_C: "_tp~a/A/l/M?G=h",
    a_m_o_c: "_g",
    a_m_o_C: "_tp~a/A/l/n/N/M?G=h",
    a_m_O_c: "_g",
    a_m_O_C: "_tp~a/A/l/n/N?G=h",
    a_m_p_c: "_p",
    a_m_p_C: "_tp~a/A/l/m?G=h",
    a_m_P_c: "_d",
    a_m_P_C: "_tp~a/A/l/L",
    a_m_q_c: "_d",
    a_m_q_C: "_tp~a/A/l/m",
    a_Q_r_R_c: "_p",
    a_Q_r_R_C: "_tp~a/A/l/L/o/O?G=h",
    a_Q_r_s_c: "_d",
    a_Q_r_s_C: "_tp~a/A/l/L/o",
    a_Q_r_S_c: "_d",
    a_Q_r_S_C: "_tp~a/A/l/L/o/p",
    a_Q_t_T_c: "_g",
    a_Q_t_T_C: "_tp~a/A/l/m/P/q?G=h",
    a_Q_t_u_c: "_g",
    a_Q_t_u_C: "_tp~a/A/l/m/P?G=h",
    a_Q_t_U_c: "_o",
    a_Q_t_U_C: "_tp~a/A/l/m/P?G=h",
    a_Q_t_v_c: "_p",
    a_Q_t_v_C: "_tp~a/A/l/m/P/q/Q?G=h",
    a_Q_t_V_c: "_p",
    a_Q_t_V_C: "_tp~a/A/l/m/P/q?G=h",
    a_Q_t_w_c: "_d",
    a_Q_t_w_C: "_tp~a/A/l/m/P",
    a_Q_t_W_c: "_d",
    a_Q_t_W_C: "_tp~a/A/l/m/P/q",
    a_Q_x_X_c: "_g",
    a_Q_x_X_C: "_tp~a/A/l/m/r?G=h",
    a_Q_x_y_c: "_d",
    a_Q_x_y_C: "_tp~a/A/l/m/r",
    a_Q_x_Y_c: "_d",
    a_Q_x_Y_C: "_tp~a/A/l/m/r/R",
    a_Q_z_Z_c: "_g",
    a_Q_z_Z_C: "_tp~a/A/l/m/s",
    a_Q_z_Aa_c: "_o",
    a_Q_z_Aa_C: "_tp~a/A/l/m/s",
    a_Q_z_AA_c: "_p",
    a_Q_z_AA_C: "_tp~a/A/l/m/s/S?t=T&G=h",
    a_Q_z_Ab_c: "_p",
    a_Q_z_Ab_C: "_tp~a/A/l/m/s?t=T",
    a_Q_z_AB_c: "_d",
    a_Q_z_AB_C: "_tp~a/A/l/m/s",
    a_Q_z_Ac_c: "_d",
    a_Q_z_Ac_C: "_tp~a/A/l/m/s/S",
    a_AC_A_I_j_J_c: "_g",
    a_AC_A_I_j_J_C: "_tp~a/A/u/b/j/J/c?C=d&D=e&E=f&F=g&G=h",
    a_AC_A_I_j_K_c: "_g",
    a_AC_A_I_j_K_C: "_tp~a/A/u/b/j/J/k?G=h",
    a_AC_A_I_j_Ad_c: "_o",
    a_AC_A_I_j_Ad_C: "_tp~a/A/u/b/j/J/c?G=h",
    a_AC_A_I_j_L_c: "_p",
    a_AC_A_I_j_L_C: "_tp~a/A/u/b/j/J/k?G=h",
    a_AC_A_I_j_AD_c: "_d",
    a_AC_A_I_j_AD_C: "_tp~a/A/u/b/j/J/k",
    a_AC_A_I_Ae_AE_Af_c: "_g",
    a_AC_A_I_Ae_AE_Af_C: "_tp~a/A/u/b/j/J/k/U",
    a_AC_A_I_Ae_AE_AF_c: "_g",
    a_AC_A_I_Ae_AE_AF_C: "_tp~a/A/u/b/j/J/k/U/v?G=h",
    a_AC_A_I_Ae_AE_Ag_c: "_o",
    a_AC_A_I_Ae_AE_Ag_C: "_tp~a/A/u/b/j/J/k/U?G=h",
    a_AC_A_I_Ae_AE_AG_c: "_p",
    a_AC_A_I_Ae_AE_AG_C: "_tp~a/A/u/b/j/J/k/U",
    a_AC_A_I_Ae_AE_Ah_c: "_p",
    a_AC_A_I_Ae_AE_Ah_C: "_tp~a/A/u/b/j/J/k/U/v?G=h",
    a_AC_A_I_Ae_AE_AH_c: "_d",
    a_AC_A_I_Ae_AE_AH_C: "_tp~a/A/u/b/j/J/k/U/v",
    a_AC_A_I_Ae_Ai_AI_c: "_g",
    a_AC_A_I_Ae_Ai_AI_C: "_tp~a/A/u/b/j/J/V/c?C=d&D=e&E=f&F=g&G=h",
    a_AC_A_I_Ae_Aj_k_c: "_g",
    a_AC_A_I_Ae_Aj_k_C: "_tp~a/A/u/b/j/J/k/K",
    a_AC_A_I_Ae_Aj_AJ_c: "_g",
    a_AC_A_I_Ae_Aj_AJ_C: "_tp~a/A/u/b/j/J/k/K/w/U",
    a_AC_A_I_Ae_Aj_Ak_c: "_g",
    a_AC_A_I_Ae_Aj_Ak_C: "_tp~a/A/u/b/j/J/k/K/w/U/v?G=h",
    a_AC_A_I_Ae_Aj_AK_c: "_g",
    a_AC_A_I_Ae_Aj_AK_C: "_tp~a/A/u/b/j/J/k/K/w?G=h",
    a_AC_A_I_Ae_Aj_Al_c: "_o",
    a_AC_A_I_Ae_Aj_Al_C: "_tp~a/A/u/b/j/J/k/K/w/W?G=h",
    a_AC_A_I_Ae_Aj_AL_c: "_o",
    a_AC_A_I_Ae_Aj_AL_C: "_tp~a/A/u/b/j/J/k/K?G=h",
    a_AC_A_I_Ae_Aj_Am_c: "_p",
    a_AC_A_I_Ae_Aj_Am_C: "_tp~a/A/u/b/j/J/k/K",
    a_AC_A_I_Ae_Aj_AM_c: "_p",
    a_AC_A_I_Ae_Aj_AM_C: "_tp~a/A/u/b/j/J/k/K/w/U",
    a_AC_A_I_Ae_Aj_An_c: "_p",
    a_AC_A_I_Ae_Aj_An_C: "_tp~a/A/u/b/j/J/k/K/w/U/v?G=h",
    a_AC_A_I_Ae_Aj_AN_c: "_p",
    a_AC_A_I_Ae_Aj_AN_C: "_tp~a/A/u/b/j/J/k/K/w?G=h",
    a_AC_A_I_Ae_Aj_Ao_c: "_d",
    a_AC_A_I_Ae_Aj_Ao_C: "_tp~a/A/u/b/j/J/k/K/w",
    a_AC_A_I_Ae_Aj_AO_c: "_d",
    a_AC_A_I_Ae_Aj_AO_C: "_tp~a/A/u/b/j/J/k/K/w/U/v",
    a_AC_A_I_Ap_AP_c: "_g",
    a_AC_A_I_Ap_AP_C: "_tp~a/A/u/b/j/x/c?C=d&D=e&E=f&F=g&G=h",
    a_AC_A_I_Ap_Aq_c: "_g",
    a_AC_A_I_Ap_Aq_C: "_tp~a/A/u/b/j/x/X?G=h",
    a_AC_A_I_Ap_AQ_c: "_o",
    a_AC_A_I_Ap_AQ_C: "_tp~a/A/u/b/j/x/c?G=h",
    a_AC_A_I_Ap_Ar_c: "_p",
    a_AC_A_I_Ap_Ar_C: "_tp~a/A/u/b/j/x/X?G=h",
    a_AC_A_I_Ap_AR_c: "_d",
    a_AC_A_I_Ap_AR_C: "_tp~a/A/u/b/j/x/X",
    a_AC_A_I_As_AS_At_c: "_g",
    a_AC_A_I_As_AS_At_C: "_tp~a/A/u/b/j/x/X/y",
    a_AC_A_I_As_AS_AT_c: "_g",
    a_AC_A_I_As_AS_AT_C: "_tp~a/A/u/b/j/x/X/y/k?G=h",
    a_AC_A_I_As_AS_Au_c: "_o",
    a_AC_A_I_As_AS_Au_C: "_tp~a/A/u/b/j/x/X/y?G=h",
    a_AC_A_I_As_AS_AU_c: "_p",
    a_AC_A_I_As_AS_AU_C: "_tp~a/A/u/b/j/x/X/y/k?G=h",
    a_AC_A_I_As_AS_Av_c: "_d",
    a_AC_A_I_As_AS_Av_C: "_tp~a/A/u/b/j/x/X/y/k",
    a_AC_A_I_As_AV_Aw_c: "_g",
    a_AC_A_I_As_AV_Aw_C: "_tp~a/A/u/b/j/x/X/Y",
    a_AC_A_I_As_AV_AW_c: "_g",
    a_AC_A_I_As_AV_AW_C: "_tp~a/A/u/b/j/x/X/Y/k?G=h",
    a_AC_A_I_As_AV_Ax_c: "_o",
    a_AC_A_I_As_AV_Ax_C: "_tp~a/A/u/b/j/x/X/Y?G=h",
    a_AC_A_I_As_AV_AX_c: "_p",
    a_AC_A_I_As_AV_AX_C: "_tp~a/A/u/b/j/x/X/Y/k?G=h",
    a_AC_A_I_As_AV_Ay_c: "_d",
    a_AC_A_I_As_AV_Ay_C: "_tp~a/A/u/b/j/x/X/Y/k",
    a_AC_A_I_As_AY_Az_c: "_g",
    a_AC_A_I_As_AY_Az_C: "_tp~a/A/u/b/j/x/X/z",
    a_AC_A_I_As_AY_AZ_c: "_g",
    a_AC_A_I_As_AY_AZ_C: "_tp~a/A/u/b/j/x/X/z/k?G=h",
    a_AC_A_I_As_AY_ba_c: "_o",
    a_AC_A_I_As_AY_ba_C: "_tp~a/A/u/b/j/x/X/z?G=h",
    a_AC_A_I_As_AY_bA_c: "_p",
    a_AC_A_I_As_AY_bA_C: "_tp~a/A/u/b/j/x/X/z/k?G=h",
    a_AC_A_I_As_AY_bb_c: "_d",
    a_AC_A_I_As_AY_bb_C: "_tp~a/A/u/b/j/x/X/z/k",
    a_AC_A_bB_bc_c: "_g",
    a_AC_A_bB_bc_C: "_tp~a/A/u/b/Z/c?C=d&D=e&E=f&F=g&G=h",
    a_AC_A_bB_bC_c: "_g",
    a_AC_A_bB_bC_C: "_tp~a/A/u/b/Z/Aa/AA?G=h",
    a_AC_A_bB_bd_c: "_g",
    a_AC_A_bB_bd_C: "_tp~a/A/u/b/Z/Aa?G=h",
    a_AC_A_bB_bD_c: "_o",
    a_AC_A_bB_bD_C: "_tp~a/A/u/b/Z/c?Ab=AB&Ac=AC&G=h",
    a_AC_A_bB_be_c: "_o",
    a_AC_A_bB_be_C: "_tp~a/A/u/b/Z/Aa/Ad",
    a_AC_A_bB_bE_c: "_o",
    a_AC_A_bB_bE_C: "_tp~a/A/u/b/Z/Aa/AD",
    a_AC_A_bB_bf_c: "_o",
    a_AC_A_bB_bf_C: "_tp~a/A/u/b/Z/Ae?G=h",
    a_AC_A_bB_bF_c: "_o",
    a_AC_A_bB_bF_C: "_tp~a/A/u/b/Z/AE?G=h",
    a_AC_A_bB_bg_c: "_p",
    a_AC_A_bB_bg_C: "_tp~a/A/u/b/Z/Aa?Af=AF&G=h",
    a_AC_A_bB_bG_c: "_d",
    a_AC_A_bB_bG_C: "_tp~a/A/u/b/Z/Aa/c?Ag=AG&Ah=AH&Ai=AI",
    a_AC_A_bh_bH_c: "_g",
    a_AC_A_bh_bH_C: "_tp~a/A/u/b/Aj/c?C=d&D=e&E=f&F=g&AJ=Ak&G=h",
    a_AC_A_bh_bi_c: "_g",
    a_AC_A_bh_bi_C: "_tp~a/A/u/b/Aj/AK?AJ=Ak&G=h",
    a_AC_A_bh_bI_c: "_g",
    a_AC_A_bh_bI_C: "_tp~a/A/u/b/Aj/Al?G=h",
    a_AC_A_bh_bj_c: "_o",
    a_AC_A_bh_bj_C: "_tp~a/A/u/b/Aj/c?G=h",
    a_AC_A_bh_bJ_c: "_o",
    a_AC_A_bh_bJ_C: "_tp~a/A/u/b/Aj/AL",
    a_AC_A_bh_bk_c: "_p",
    a_AC_A_bh_bk_C: "_tp~a/A/u/b/Aj/AK?G=h",
    a_AC_A_bh_bK_c: "_d",
    a_AC_A_bh_bK_C: "_tp~a/A/u/b/Aj/AK",
    a_AC_A_bl_bL_bm_c: "_g",
    a_AC_A_bl_bL_bm_C: "_tp~a/A/u/b/Aj/AK/Am",
    a_AC_A_bl_bL_bM_c: "_o",
    a_AC_A_bl_bL_bM_C: "_tp~a/A/u/b/Aj/AK/Am",
    a_AC_A_bl_bL_bn_c: "_d",
    a_AC_A_bl_bL_bn_C: "_tp~a/A/u/b/Aj/AK/Am/AM",
    a_AC_A_bl_bN_bo_c: "_g",
    a_AC_A_bl_bN_bo_C: "_tp~a/A/u/b/Aj/AK/An/O?AJ=Ak&G=h",
    a_AC_A_bl_bN_bO_c: "_g",
    a_AC_A_bl_bN_bO_C: "_tp~a/A/u/b/Aj/AK/An?C=d&D=e&E=f&F=g&AJ=Ak&G=h",
    a_AC_A_bl_bN_bp_c: "_o",
    a_AC_A_bl_bN_bp_C: "_tp~a/A/u/b/Aj/AK/An",
    a_AC_A_bl_bN_bP_c: "_o",
    a_AC_A_bl_bN_bP_C: "_tp~a/A/u/b/Aj/AK/An/AN",
    a_AC_A_bl_bN_bq_c: "_d",
    a_AC_A_bl_bN_bq_C: "_tp~a/A/u/b/Aj/AK/An/O",
    a_AC_A_bQ_br_c: "_g",
    a_AC_A_bQ_br_C: "_tp~a/A/u/b/Ao/c?C=d&D=e&E=f&F=g&G=h",
    a_AC_A_bQ_bR_c: "_g",
    a_AC_A_bQ_bR_C: "_tp~a/A/u/b/Ao/AM/AO?G=h",
    a_AC_A_bQ_bs_c: "_g",
    a_AC_A_bQ_bs_C: "_tp~a/A/u/b/Ao/AM?G=h",
    a_AC_A_bQ_bS_c: "_g",
    a_AC_A_bQ_bS_C: "_tp~a/A/u/b/Ao/Ap?G=h",
    a_AC_A_bQ_bt_c: "_o",
    a_AC_A_bQ_bt_C: "_tp~a/A/u/b/Ao/c?G=h",
    a_AC_A_bQ_bT_c: "_p",
    a_AC_A_bQ_bT_C: "_tp~a/A/u/b/Ao/AM/AO?G=h",
    a_AC_A_bQ_bu_c: "_p",
    a_AC_A_bQ_bu_C: "_tp~a/A/u/b/Ao/AM?G=h",
    a_AC_A_bQ_bU_c: "_d",
    a_AC_A_bQ_bU_C: "_tp~a/A/u/b/Ao/AM",
    a_AC_A_bv_bV_c: "_g",
    a_AC_A_bv_bV_C: "_tp~a/A/u/b/AP/Aq?G=h",
    a_AC_A_bv_bw_c: "_p",
    a_AC_A_bv_bw_C: "_tp~a/A/u/b/AP/Aq?G=h",
    a_AC_A_bW_bx_bX_c: "_g",
    a_AC_A_bW_bx_bX_C: "_tp~a/A/u/b/Ao/AM/AQ?G=h",
    a_AC_A_bW_bx_by_c: "_p",
    a_AC_A_bW_bx_by_C: "_tp~a/A/u/b/Ao/AM/AQ?G=h",
    a_AC_A_bY_bz_c: "_g",
    a_AC_A_bY_bz_C: "_tp~a/A/u/b/Ar/AR?As=AS&G=h",
    a_AC_A_bY_bZ_c: "_g",
    a_AC_A_bY_bZ_C: "_tp~a/A/u/b/Ar/At/Aa?AT=Au&As=AS&G=h",
    a_AC_A_bY_Ba_c: "_o",
    a_AC_A_bY_Ba_C: "_tp~a/A/u/b/Ar/c?G=h",
    a_AC_A_bY_BA_c: "_p",
    a_AC_A_bY_BA_C: "_tp~a/A/u/b/Ar/AR?G=h",
    a_AC_A_bY_Bb_c: "_d",
    a_AC_A_bY_Bb_C: "_tp~a/A/u/b/Ar/AR",
    a_AC_A_BB_Bc_c: "_g",
    a_AC_A_BB_Bc_C: "_tp~a/A/u/b/AU/H/Av?G=h",
    a_AC_A_BB_BC_c: "_g",
    a_AC_A_BB_BC_C: "_tp~a/A/u/b/AU/H?C=d&D=e&E=f&F=g&AV=Aw&G=h",
    a_AC_A_BB_Bd_c: "_o",
    a_AC_A_BB_Bd_C: "_tp~a/A/u/b/AU/H?AW=Ax",
    a_AC_A_BB_BD_c: "_p",
    a_AC_A_BB_BD_C: "_tp~a/A/u/b/AU/H",
    a_AC_A_BB_Be_c: "_d",
    a_AC_A_BB_Be_C: "_tp~a/A/u/b/AU/H/Av",
    a_AC_A_BE_Bf_c: "_g",
    a_AC_A_BE_Bf_C: "_tp~a/A/u/b/AX/c?G=h",
    a_AC_A_BE_BF_c: "_g",
    a_AC_A_BE_BF_C: "_tp~a/A/u/b/AX/Ay?G=h",
    a_AC_A_BE_Bg_c: "_p",
    a_AC_A_BE_Bg_C: "_tp~a/A/u/b/AX/Ay?G=h",
    a_AC_A_BG_Bh_c: "_g",
    a_AC_A_BG_Bh_C: "_tp~a/A/u/b/AY/c?C=d&D=e&E=f&F=g&G=h",
    a_AC_A_BG_BH_c: "_g",
    a_AC_A_BG_BH_C: "_tp~a/A/u/b/AY/Az?G=h",
    a_AC_A_BG_Bi_c: "_o",
    a_AC_A_BG_Bi_C: "_tp~a/A/u/b/AY/c?G=h",
    a_AC_A_BG_BI_c: "_o",
    a_AC_A_BG_BI_C: "_tp~a/A/u/b/AY/AZ?ba=bA&bb=bB",
    a_AC_A_BG_Bj_c: "_o",
    a_AC_A_BG_Bj_C: "_tp~a/A/u/b/AY/bc?ba=bA&bb=bB",
    a_AC_A_BG_BJ_c: "_o",
    a_AC_A_BG_BJ_C: "_tp~a/A/u/b/AY/bC?ba=bA&bb=bB",
    a_AC_A_BG_Bk_c: "_p",
    a_AC_A_BG_Bk_C: "_tp~a/A/u/b/AY/Az?G=h",
    a_AC_A_BG_BK_c: "_d",
    a_AC_A_BG_BK_C: "_tp~a/A/u/b/AY/Az?bd=bD",
    a_AC_A_Bl_BL_Bm_c: "_g",
    a_AC_A_Bl_BL_Bm_C: "_tp~a/A/u/b/AY/Az/be/Av/bE?bf=bF&G=h",
    a_AC_A_Bl_BL_BM_c: "_g",
    a_AC_A_Bl_BL_BM_C: "_tp~a/A/u/b/AY/Az/be?C=d&D=e&E=f&F=g&G=h",
    a_AC_A_Bl_BL_Bn_c: "_o",
    a_AC_A_Bl_BL_Bn_C: "_tp~a/A/u/b/AY/Az/be?G=h",
    a_AC_A_Bl_BL_BN_c: "_p",
    a_AC_A_Bl_BL_BN_C: "_tp~a/A/u/b/AY/Az/be/Av/bE?bf=bF&G=h",
    a_AC_A_Bl_BL_Bo_c: "_d",
    a_AC_A_Bl_BL_Bo_C: "_tp~a/A/u/b/AY/Az/be/Av/bE?bf=bF",
    a_AC_A_BO_Bp_c: "_g",
    a_AC_A_BO_Bp_C: "_tp~a/A/u/b/bg/c?C=d&D=e&E=f&F=g&bG=bh&bH=bi&bI=bj&G=h",
    a_AC_A_BO_BP_c: "_g",
    a_AC_A_BO_BP_C: "_tp~a/A/u/b/bg/Av/bJ",
    a_AC_A_BO_Bq_c: "_g",
    a_AC_A_BO_Bq_C: "_tp~a/A/u/b/bg/Av/bJ/Aq?G=h",
    a_AC_A_BO_BQ_c: "_g",
    a_AC_A_BO_BQ_C: "_tp~a/A/u/b/bg/Av?G=h",
    a_AC_A_BO_Br_c: "_o",
    a_AC_A_BO_Br_C: "_tp~a/A/u/b/bg/c?G=h",
    a_AC_A_BO_BR_c: "_o",
    a_AC_A_BO_BR_C: "_tp~a/A/u/b/bg/Av/bJ?G=h",
    a_AC_A_BO_Bs_c: "_o",
    a_AC_A_BO_Bs_C: "_tp~a/A/u/b/bg/bk/bK",
    a_AC_A_BO_BS_c: "_p",
    a_AC_A_BO_BS_C: "_tp~a/A/u/b/bg/Av/bJ",
    a_AC_A_BO_Bt_c: "_p",
    a_AC_A_BO_Bt_C: "_tp~a/A/u/b/bg/Av/bJ/Aq?G=h",
    a_AC_A_BO_BT_c: "_p",
    a_AC_A_BO_BT_C: "_tp~a/A/u/b/bg/Av?G=h",
    a_AC_A_BO_Bu_c: "_d",
    a_AC_A_BO_Bu_C: "_tp~a/A/u/b/bg/Av",
    a_AC_A_BO_BU_c: "_d",
    a_AC_A_BO_BU_C: "_tp~a/A/u/b/bg/Av/bJ/Aq",
    a_AC_A_Bv_BV_c: "_g",
    a_AC_A_Bv_BV_C: "_tp~a/A/u/b/bl/c?C=d&D=e&E=f&F=g&G=h",
    a_AC_A_Bv_Bw_c: "_g",
    a_AC_A_Bv_Bw_C: "_tp~a/A/u/b/bl/bL?G=h",
    a_AC_A_Bv_BW_c: "_o",
    a_AC_A_Bv_BW_C: "_tp~a/A/u/b/bl/c?bm=bM",
    a_AC_A_Bv_Bx_c: "_o",
    a_AC_A_Bv_Bx_C: "_tp~a/A/u/b/bl/bn",
    a_AC_A_Bv_BX_c: "_p",
    a_AC_A_Bv_BX_C: "_tp~a/A/u/b/bl/c?bm=bM",
    a_AC_A_Bv_By_c: "_d",
    a_AC_A_Bv_By_C: "_tp~a/A/u/b/bl/bL",
    a_AC_A_BY_Bz_c: "_g",
    a_AC_A_BY_Bz_C: "_tp~a/A/u/b/bN/c?C=d&D=e&E=f&F=g&G=h",
    a_AC_A_BY_BZ_c: "_g",
    a_AC_A_BY_BZ_C: "_tp~a/A/u/b/bN/bo?G=h",
    a_AC_A_BY_ca_c: "_o",
    a_AC_A_BY_ca_C: "_tp~a/A/u/b/bN/c?Ac=AC&G=h",
    a_AC_A_BY_cA_c: "_p",
    a_AC_A_BY_cA_C: "_tp~a/A/u/b/bN/bo?G=h",
    a_AC_A_BY_cb_c: "_d",
    a_AC_A_BY_cb_C: "_tp~a/A/u/b/bN/bo",
    a_AC_A_cB_BB_BC_c: "_g",
    a_AC_A_cB_BB_BC_C: "_tp~a/A/u/b/bg/bO/bp/c?C=d&D=e&E=f&F=g&G=h",
    a_AC_A_cB_BB_Bc_c: "_g",
    a_AC_A_cB_BB_Bc_C: "_tp~a/A/u/b/bg/bO/bp/bP?G=h",
    a_AC_A_cB_BB_Bd_c: "_o",
    a_AC_A_cB_BB_Bd_C: "_tp~a/A/u/b/bg/bO/bp?AW=Ax",
    a_AC_A_cB_BB_BD_c: "_p",
    a_AC_A_cB_BB_BD_C: "_tp~a/A/u/b/bg/bO/bp",
    a_AC_A_cB_BB_Be_c: "_d",
    a_AC_A_cB_BB_Be_C: "_tp~a/A/u/b/bg/bO/bp/bP",
    a_AC_A_cB_cc_At_c: "_g",
    a_AC_A_cB_cc_At_C: "_tp~a/A/u/b/bg/Av/y",
    a_AC_A_cB_cc_cC_c: "_g",
    a_AC_A_cB_cc_cC_C: "_tp~a/A/u/b/bg/Av/y/k/bq/w/bQ",
    a_AC_A_cB_cc_cd_c: "_g",
    a_AC_A_cB_cc_cd_C: "_tp~a/A/u/b/bg/Av/y/k/bq/w/bQ/bE?G=h",
    a_AC_A_cB_cc_AT_c: "_g",
    a_AC_A_cB_cc_AT_C: "_tp~a/A/u/b/bg/Av/y/k?G=h",
    a_AC_A_cB_cc_cD_c: "_o",
    a_AC_A_cB_cc_cD_C: "_tp~a/A/u/b/bg/Av/y/k/bq/w/bQ?G=h",
    a_AC_A_cB_cc_Au_c: "_o",
    a_AC_A_cB_cc_Au_C: "_tp~a/A/u/b/bg/Av/y?G=h",
    a_AC_A_cB_cc_ce_c: "_p",
    a_AC_A_cB_cc_ce_C: "_tp~a/A/u/b/bg/Av/y/k/bq/w/bQ",
    a_AC_A_cB_cc_cE_c: "_p",
    a_AC_A_cB_cc_cE_C: "_tp~a/A/u/b/bg/Av/y/k/bq/w/bQ/bE?G=h",
    a_AC_A_cB_cc_AU_c: "_p",
    a_AC_A_cB_cc_AU_C: "_tp~a/A/u/b/bg/Av/y/k?G=h",
    a_AC_A_cB_cc_Av_c: "_d",
    a_AC_A_cB_cc_Av_C: "_tp~a/A/u/b/bg/Av/y/k",
    a_AC_A_cB_cc_cf_c: "_d",
    a_AC_A_cB_cc_cf_C: "_tp~a/A/u/b/bg/Av/y/k/bq/w/bQ/bE",
    a_AC_A_cB_cF_Aw_c: "_g",
    a_AC_A_cB_cF_Aw_C: "_tp~a/A/u/b/bg/Av/Y",
    a_AC_A_cB_cF_AW_c: "_g",
    a_AC_A_cB_cF_AW_C: "_tp~a/A/u/b/bg/Av/Y/k?G=h",
    a_AC_A_cB_cF_Ax_c: "_o",
    a_AC_A_cB_cF_Ax_C: "_tp~a/A/u/b/bg/Av/Y?G=h",
    a_AC_A_cB_cF_AX_c: "_p",
    a_AC_A_cB_cF_AX_C: "_tp~a/A/u/b/bg/Av/Y/k?G=h",
    a_AC_A_cB_cF_Ay_c: "_d",
    a_AC_A_cB_cF_Ay_C: "_tp~a/A/u/b/bg/Av/Y/k",
    a_AC_A_cB_cg_Az_c: "_g",
    a_AC_A_cB_cg_Az_C: "_tp~a/A/u/b/bg/Av/z",
    a_AC_A_cB_cg_cG_c: "_g",
    a_AC_A_cB_cg_cG_C: "_tp~a/A/u/b/bg/Av/z/k/br/w/U",
    a_AC_A_cB_cg_ch_c: "_g",
    a_AC_A_cB_cg_ch_C: "_tp~a/A/u/b/bg/Av/z/k/br/w/U/v?G=h",
    a_AC_A_cB_cg_AZ_c: "_g",
    a_AC_A_cB_cg_AZ_C: "_tp~a/A/u/b/bg/Av/z/k?G=h",
    a_AC_A_cB_cg_cH_c: "_o",
    a_AC_A_cB_cg_cH_C: "_tp~a/A/u/b/bg/Av/z/k/br/w/U?G=h",
    a_AC_A_cB_cg_ba_c: "_o",
    a_AC_A_cB_cg_ba_C: "_tp~a/A/u/b/bg/Av/z?G=h",
    a_AC_A_cB_cg_ci_c: "_p",
    a_AC_A_cB_cg_ci_C: "_tp~a/A/u/b/bg/Av/z/k/br/w/U",
    a_AC_A_cB_cg_cI_c: "_p",
    a_AC_A_cB_cg_cI_C: "_tp~a/A/u/b/bg/Av/z/k/br/w/U/v?G=h",
    a_AC_A_cB_cg_bA_c: "_p",
    a_AC_A_cB_cg_bA_C: "_tp~a/A/u/b/bg/Av/z/k?G=h",
    a_AC_A_cB_cg_bb_c: "_d",
    a_AC_A_cB_cg_bb_C: "_tp~a/A/u/b/bg/Av/z/k",
    a_AC_A_cB_cg_cj_c: "_d",
    a_AC_A_cB_cg_cj_C: "_tp~a/A/u/b/bg/Av/z/k/br/w/U/v",
    a_AC_A_cJ_ck_c: "_g",
    a_AC_A_cJ_ck_C: "_tp~a/A/u/b/bR/bs/bS?G=h",
    a_AC_A_cJ_cK_c: "_g",
    a_AC_A_cJ_cK_C: "_tp~a/A/u/b/bR/bs?G=h",
    a_AC_A_cJ_cl_c: "_o",
    a_AC_A_cJ_cl_C: "_tp~a/A/u/b/bR/bt",
    a_AC_A_cJ_cL_c: "_o",
    a_AC_A_cJ_cL_C: "_tp~a/A/u/b/bR/bT",
    a_AC_A_cJ_cm_c: "_o",
    a_AC_A_cJ_cm_C: "_tp~a/A/u/b/bR/bs?G=h",
    a_AC_A_cJ_cM_c: "_d",
    a_AC_A_cJ_cM_C: "_tp~a/A/u/b/bR/bs/bS?bu=bU",
    a_AC_A_cn_cN_c: "_g",
    a_AC_A_cn_cN_C: "_tp~a/A/u/b/bv/bV/bw?G=h",
    a_AC_A_cn_co_c: "_g",
    a_AC_A_cn_co_C: "_tp~a/A/u/b/bv/bV?C=d&D=e&E=f&F=g&G=h",
    a_AC_A_cn_cO_c: "_g",
    a_AC_A_cn_cO_C: "_tp~a/A/u/b/bv/bW?G=h",
    a_AC_A_cn_cp_c: "_g",
    a_AC_A_cn_cp_C: "_tp~a/A/u/b/bv/bx?G=h",
    a_AC_A_cn_cP_c: "_g",
    a_AC_A_cn_cP_C: "_tp~a/A/u/b/bv/bX/v?G=h",
    a_AC_A_cn_cq_c: "_g",
    a_AC_A_cn_cq_C: "_tp~a/A/u/b/bv/by/c?C=d&D=e&E=f&F=g&G=h",
    a_AC_A_cn_cQ_c: "_g",
    a_AC_A_cn_cQ_C: "_tp~a/A/u/b/bv/by/bY?G=h",
    a_AC_A_cn_cr_c: "_o",
    a_AC_A_cn_cr_C: "_tp~a/A/u/b/bv/bV?G=h",
    a_AC_A_cn_cR_c: "_o",
    a_AC_A_cn_cR_C: "_tp~a/A/u/b/bv/bW?G=h",
    a_AC_A_cn_cs_c: "_o",
    a_AC_A_cn_cs_C: "_tp~a/A/u/b/bv/bX/v?G=h",
    a_AC_A_cn_cS_c: "_o",
    a_AC_A_cn_cS_C: "_tp~a/A/u/b/bv/by?G=h",
    a_AC_A_cn_ct_c: "_p",
    a_AC_A_cn_ct_C: "_tp~a/A/u/b/bv/bV/bw?G=h",
    a_AC_A_cn_cT_c: "_p",
    a_AC_A_cn_cT_C: "_tp~a/A/u/b/bv/bx?G=h",
    a_AC_A_cn_cu_c: "_p",
    a_AC_A_cn_cu_C: "_tp~a/A/u/b/bv/by/bY?G=h",
    a_AC_A_cn_cU_c: "_d",
    a_AC_A_cn_cU_C: "_tp~a/A/u/b/bv/bV/bw",
    a_AC_A_cn_cv_c: "_d",
    a_AC_A_cn_cv_C: "_tp~a/A/u/b/bv/by/bY",
    a_AC_A_cV_cw_c: "_g",
    a_AC_A_cV_cw_C: "_tp~a/A/u/b/bz/c?C=d&D=e&E=f&F=g&G=h",
    a_AC_A_cV_cW_c: "_g",
    a_AC_A_cV_cW_C: "_tp~a/A/u/b/bz/bZ?G=h",
    a_AC_A_cV_cx_c: "_o",
    a_AC_A_cV_cx_C: "_tp~a/A/u/b/bz/c",
    a_AC_A_cV_cX_c: "_o",
    a_AC_A_cV_cX_C: "_tp~a/A/u/b/bz/Ba",
    a_AC_A_cV_cy_c: "_o",
    a_AC_A_cV_cy_C: "_tp~a/A/u/b/bz/BA",
    a_AC_A_cV_cY_c: "_p",
    a_AC_A_cV_cY_C: "_tp~a/A/u/b/bz/c",
    a_AC_A_cV_cz_c: "_d",
    a_AC_A_cV_cz_C: "_tp~a/A/u/b/bz/bZ",
    a_AC_cZ_bB_bc_c: "_g",
    a_AC_cZ_bB_bc_C: "_tp~a/A/u/Bb/Z/c?F=g&C=d&D=e&E=f&G=h",
    a_AC_cZ_bB_bd_c: "_g",
    a_AC_cZ_bB_bd_C: "_tp~a/A/u/Bb/Z/Aa?BB=Bc&G=h",
    a_AC_cZ_bB_Ca_c: "_g",
    a_AC_cZ_bB_Ca_C: "_tp~a/A/u/Bb/Z/BC?G=h",
    a_AC_cZ_CA_Cb_c: "_o",
    a_AC_cZ_CA_Cb_C: "_tp~a/A/u/Bb/Bd/BD?G=h",
    a_AC_cZ_BG_BH_c: "_g",
    a_AC_cZ_BG_BH_C: "_tp~a/A/u/Bb/AY/Az?G=h",
    a_AC_cZ_BG_CB_c: "_g",
    a_AC_cZ_BG_CB_C: "_tp~a/A/u/Bb/AY/Be?BE=Bf&G=h",
    a_AC_cZ_Cc_CC_c: "_g",
    a_AC_cZ_Cc_CC_C: "_tp~a/A/u/Bb/BF/Bg/c?BG=Bh&F=g&D=e&G=h",
    a_AC_cZ_Cc_cn_c: "_g",
    a_AC_cZ_Cc_cn_C: "_tp~a/A/u/Bb/BF/bv/c?BG=Bh&F=g&BH=Bi&BI=Bj&BJ=Bk&BK=Bl&BL=Bm&BM=Bn&BN=Bo&BO=Bp&BP=Bq&BQ=Br&BR=Bs&E=f&D=e&C=d&BS=Bt&BT=Bu&BU=Bv&BV=bw&Bw=BW&Bx=BX&By=BY&Bz=BZ&ca=cA&cb=cB&cc=cC&cd=cD&G=h",
    a_AC_cZ_Cc_Cd_c: "_g",
    a_AC_cZ_Cc_Cd_C: "_tp~a/A/u/Bb/BF/ce?BG=Bh&cE=cf&D=e&G=h",
    a_AC_cZ_CD_Ce_c: "_o",
    a_AC_cZ_CD_Ce_C: "_tp~a/A/u/Bb/cF/cg",
    a_AC_cZ_CD_CE_c: "_o",
    a_AC_cZ_CD_CE_C: "_tp~a/A/u/Bb/cF/cG?G=h",
    a_Cf_CF_c: "_g",
    a_Cf_CF_C: "_tp~a/A/ch/c?C=d&D=e&E=f&F=g&G=h",
    a_Cf_Cg_c: "_g",
    a_Cf_Cg_C: "_tp~a/A/ch/cH?G=h",
    a_Cf_CG_c: "_o",
    a_Cf_CG_C: "_tp~a/A/ch/c?G=h",
    a_Cf_Ch_c: "_p",
    a_Cf_Ch_C: "_tp~a/A/ch/cH?G=h",
    a_Cf_CH_c: "_d",
    a_Cf_CH_C: "_tp~a/A/ch/cH",
    a_Ci_CI_c: "_g",
    a_Ci_CI_C: "_tp~a/A/ci/c?C=d&D=e&E=f&F=g&G=h",
    a_Ci_Cj_c: "_g",
    a_Ci_Cj_C: "_tp~a/A/ci/cH?G=h",
    a_Ci_CJ_c: "_o",
    a_Ci_CJ_C: "_tp~a/A/ci/c?G=h",
    a_Ci_Ck_c: "_p",
    a_Ci_Ck_C: "_tp~a/A/ci/cH?G=h",
    a_Ci_CK_c: "_d",
    a_Ci_CK_C: "_tp~a/A/ci/cH",
    a_Cl_CL_c: "_g",
    a_Cl_CL_C: "_tp~a/A/cI/c?C=d&D=e&E=f&F=g&bG=bh&bH=bi&G=h",
    a_Cl_Cm_c: "_g",
    a_Cl_Cm_C: "_tp~a/A/cI/cj/cJ",
    a_Cl_CM_c: "_g",
    a_Cl_CM_C: "_tp~a/A/cI/cj/ck",
    a_Cl_Cn_c: "_g",
    a_Cl_Cn_C: "_tp~a/A/cI/cj?G=h",
    a_Cl_CN_c: "_o",
    a_Cl_CN_C: "_tp~a/A/cI/c?cK=L&G=h",
    a_Cl_Co_c: "_o",
    a_Cl_Co_C: "_tp~a/A/cI/cj/cJ?G=h",
    a_Cl_CO_c: "_o",
    a_Cl_CO_C: "_tp~a/A/cI/cj/cl/cL",
    a_Cl_Cp_c: "_o",
    a_Cl_Cp_C: "_tp~a/A/cI/cj/ck?G=h",
    a_Cl_CP_c: "_o",
    a_Cl_CP_C: "_tp~a/A/cI/cj?G=h",
    a_Cl_Cq_c: "_p",
    a_Cl_Cq_C: "_tp~a/A/cI/cj/cm/cM?G=h",
    a_Cl_CQ_c: "_p",
    a_Cl_CQ_C: "_tp~a/A/cI/cj/cn?G=h",
    a_Cr_r_R_c: "_p",
    a_Cr_r_R_C: "_tp~a/A/cI/cj/o/O?G=h",
    a_Cr_r_s_c: "_d",
    a_Cr_r_s_C: "_tp~a/A/cI/cj/o",
    a_Cr_r_S_c: "_d",
    a_Cr_r_S_C: "_tp~a/A/cI/cj/o/p",
    a_Cr_CR_Cs_c: "_g",
    a_Cr_CR_Cs_C: "_tp~a/A/cI/cj/cN",
    a_Cr_CR_CS_c: "_g",
    a_Cr_CR_CS_C: "_tp~a/A/cI/cj/cN/co?G=h",
    a_Cr_CR_Ct_c: "_o",
    a_Cr_CR_Ct_C: "_tp~a/A/cI/cj/cN?G=h",
    a_Cr_CR_CT_c: "_p",
    a_Cr_CR_CT_C: "_tp~a/A/cI/cj/cN/co?G=h",
    a_Cr_CR_Cu_c: "_d",
    a_Cr_CR_Cu_C: "_tp~a/A/cI/cj/cN/co",
    a_Cr_z_Z_c: "_g",
    a_Cr_z_Z_C: "_tp~a/A/cI/cj/s",
    a_Cr_z_Aa_c: "_o",
    a_Cr_z_Aa_C: "_tp~a/A/cI/cj/s",
    a_Cr_z_AA_c: "_p",
    a_Cr_z_AA_C: "_tp~a/A/cI/cj/s/S?t=T&G=h",
    a_Cr_z_Ab_c: "_p",
    a_Cr_z_Ab_C: "_tp~a/A/cI/cj/s?t=T",
    a_Cr_z_AB_c: "_d",
    a_Cr_z_AB_C: "_tp~a/A/cI/cj/s",
    a_Cr_z_Ac_c: "_d",
    a_Cr_z_Ac_C: "_tp~a/A/cI/cj/s/S",
    a_Cr_CU_Cv_c: "_g",
    a_Cr_CU_Cv_C: "_tp~a/A/cI/cj/J",
    a_Cr_CU_CV_c: "_o",
    a_Cr_CU_CV_C: "_tp~a/A/cI/cj/J",
    a_Cr_CU_Cw_c: "_p",
    a_Cr_CU_Cw_C: "_tp~a/A/cI/cj/J?cO=cp",
    a_Cr_CW_Cx_c: "_o",
    a_Cr_CW_Cx_C: "_tp~a/A/cI/cj/P/cP/cq?cQ=Q&G=h",
    a_Cr_CW_CX_c: "_o",
    a_Cr_CW_CX_C: "_tp~a/A/cI/cj/P/cN?G=h",
    a_Cr_CW_Cy_c: "_p",
    a_Cr_CW_Cy_C: "_tp~a/A/cI/cj/P/cP/cr/co?G=h",
    a_Cr_CY_Cz_c: "_g",
    a_Cr_CY_Cz_C: "_tp~a/A/cI/cj/cR",
    a_Cr_CY_CZ_c: "_g",
    a_Cr_CY_CZ_C: "_tp~a/A/cI/cj/cR/cs?G=h",
    a_Cr_CY_da_c: "_o",
    a_Cr_CY_da_C: "_tp~a/A/cI/cj/cR?G=h",
    a_Cr_CY_dA_c: "_p",
    a_Cr_CY_dA_C: "_tp~a/A/cI/cj/cR/cs?G=h",
    a_Cr_CY_db_c: "_d",
    a_Cr_CY_db_C: "_tp~a/A/cI/cj/cR/cs",
    a_Cr_dB_dc_c: "_o",
    a_Cr_dB_dc_C: "_tp~a/A/cI/cj/cS/ct/cJ?G=h",
    a_Cr_dB_dC_c: "_o",
    a_Cr_dB_dC_C: "_tp~a/A/cI/cj/cS/cJ?G=h",
    a_dd_dD_de_dE_c: "_g",
    a_dd_dD_de_dE_C: "_tp~a/A/cT/cu/cU/cv/cV?G=h",
    a_dd_dD_de_df_c: "_g",
    a_dd_dD_de_df_C: "_tp~a/A/cT/cu/cU/cv?G=h",
    a_dd_dD_de_dF_c: "_o",
    a_dd_dD_de_dF_C: "_tp~a/A/cT/cu/cU/cv?G=h",
    a_dd_dD_de_dg_c: "_p",
    a_dd_dD_de_dg_C: "_tp~a/A/cT/cu/cU/cv/cV?G=h",
    a_dd_dD_de_dG_c: "_d",
    a_dd_dD_de_dG_C: "_tp~a/A/cT/cu/cU/cv/cV",
    a_dd_dD_dh_dH_c: "_g",
    a_dd_dD_dh_dH_C: "_tp~a/A/cT/cu/cU/J/k?G=h",
    a_dd_dD_dh_di_c: "_g",
    a_dd_dD_dh_di_C: "_tp~a/A/cT/cu/cU/J?C=d&D=e&E=f&F=g&G=h",
    a_dd_dD_dh_dI_c: "_o",
    a_dd_dD_dh_dI_C: "_tp~a/A/cT/cu/cU/J?G=h",
    a_dd_dD_dh_dj_c: "_p",
    a_dd_dD_dh_dj_C: "_tp~a/A/cT/cu/cU/J/k?G=h",
    a_dd_dD_dh_dJ_c: "_d",
    a_dd_dD_dh_dJ_C: "_tp~a/A/cT/cu/cU/J/k",
    a_dd_dD_dk_dK_c: "_g",
    a_dd_dD_dk_dK_C: "_tp~a/A/cT/cu/cU/cw/cW?C=d&D=e&G=h",
    a_dd_dD_dl_dL_c: "_g",
    a_dd_dD_dl_dL_C: "_tp~a/A/cT/cu/cU/cx/cX?G=h",
    a_dd_dD_dl_dm_c: "_g",
    a_dd_dD_dl_dm_C: "_tp~a/A/cT/cu/cU/cx?C=d&D=e&E=f&F=g&G=h",
    a_dd_dD_dl_dM_c: "_o",
    a_dd_dD_dl_dM_C: "_tp~a/A/cT/cu/cU/cx?G=h",
    a_dd_dD_dl_dn_c: "_p",
    a_dd_dD_dl_dn_C: "_tp~a/A/cT/cu/cU/cx/cX?G=h",
    a_dd_dD_dl_dN_c: "_p",
    a_dd_dD_dl_dN_C: "_tp~a/A/cT/cu/cU/cx?G=h",
    a_dd_dD_dl_do_c: "_d",
    a_dd_dD_dl_do_C: "_tp~a/A/cT/cu/cU/cx/cX",
    a_dd_dD_dO_dp_c: "_g",
    a_dd_dD_dO_dp_C: "_tp~a/A/cT/cu/cU/cR/cs?G=h",
    a_dd_dD_dO_dP_c: "_g",
    a_dd_dD_dO_dP_C: "_tp~a/A/cT/cu/cU/cR?C=d&D=e&E=f&F=g&G=h",
    a_dd_dD_dO_dq_c: "_o",
    a_dd_dD_dO_dq_C: "_tp~a/A/cT/cu/cU/cR?G=h",
    a_dd_dD_dO_dQ_c: "_p",
    a_dd_dD_dO_dQ_C: "_tp~a/A/cT/cu/cU/cR/cs?G=h",
    a_dd_dD_dO_dr_c: "_d",
    a_dd_dD_dO_dr_C: "_tp~a/A/cT/cu/cU/cR/cs",
    a_dd_dD_dR_ds_c: "_g",
    a_dd_dD_dR_ds_C: "_tp~a/A/cT/cu/cU/cy?G=h",
    a_dd_dD_dR_dS_c: "_g",
    a_dd_dD_dR_dS_C: "_tp~a/A/cT/cu/cU/cY?C=d&D=e&E=f&F=g&G=h",
    a_dd_dD_dR_dt_c: "_o",
    a_dd_dD_dR_dt_C: "_tp~a/A/cT/cu/cU/cy?G=h",
    a_dd_dD_dR_dT_c: "_o",
    a_dd_dD_dR_dT_C: "_tp~a/A/cT/cu/cU/cY?G=h",
    a_dd_dD_dR_du_c: "_p",
    a_dd_dD_dR_du_C: "_tp~a/A/cT/cu/cU/cy?G=h",
    a_dd_dD_dR_dU_c: "_d",
    a_dd_dD_dR_dU_C: "_tp~a/A/cT/cu/cz/cU/cy",
    a_dd_dD_dv_dV_c: "_g",
    a_dd_dD_dv_dV_C: "_tp~a/A/cT/cu/cU/cZ/c?C=d&D=e&E=f&F=g&G=h",
    a_dd_dD_dw_dW_c: "_g",
    a_dd_dD_dw_dW_C: "_tp~a/A/cT/cu/cU/Ca",
    a_dd_dD_dw_dx_c: "_o",
    a_dd_dD_dw_dx_C: "_tp~a/A/cT/cu/cU/Ca?G=h",
    a_dd_dD_dw_dX_c: "_d",
    a_dd_dD_dw_dX_C: "_tp~a/A/cT/cu/cU/Ca/CA",
    a_dd_dy_dY_c: "_o",
    a_dd_dy_dY_C: "_tp~a/A/cT/Cb/c?G=h",
    a_dd_I_j_J_c: "_g",
    a_dd_I_j_J_C: "_tp~a/A/cT/j/J/c?C=d&D=e&E=f&F=g&G=h",
    a_dd_I_j_k_c: "_g",
    a_dd_I_j_k_C: "_tp~a/A/cT/j/J/k/K",
    a_dd_I_j_K_c: "_g",
    a_dd_I_j_K_C: "_tp~a/A/cT/j/J/k?G=h",
    a_dd_I_j_l_c: "_o",
    a_dd_I_j_l_C: "_tp~a/A/cT/j/J/c?G=h",
    a_dd_I_j_L_c: "_p",
    a_dd_I_j_L_C: "_tp~a/A/cT/j/J/k?G=h",
    a_dd_dz_dZ_c: "_g",
    a_dd_dz_dZ_C: "_tp~a/A/cT/CB/c?C=d&D=e&E=f&F=g&G=h",
    a_dd_dz_Da_c: "_g",
    a_dd_dz_Da_C: "_tp~a/A/cT/CB/cH?G=h",
    a_dd_dz_DA_c: "_o",
    a_dd_dz_DA_C: "_tp~a/A/cT/CB/c?G=h",
    a_dd_dz_Db_c: "_p",
    a_dd_dz_Db_C: "_tp~a/A/cT/CB/cH/Cc?G=h",
    a_dd_dz_DB_c: "_p",
    a_dd_dz_DB_C: "_tp~a/A/cT/CB/cH/CC",
    a_dd_dz_Dc_c: "_p",
    a_dd_dz_Dc_C: "_tp~a/A/cT/CB/cH?G=h",
    a_dd_dz_DC_c: "_d",
    a_dd_dz_DC_C: "_tp~a/A/cT/CB/cH",
    a_dd_Dd_DD_De_c: "_g",
    a_dd_Dd_DD_De_C: "_tp~a/A/cT/CB/cH/Cd?C=d&D=e&E=f&F=g&G=h",
    a_dd_Dd_DE_dW_c: "_g",
    a_dd_Dd_DE_dW_C: "_tp~a/A/cT/CB/cH/Ca?C=d&D=e&E=f&F=g&G=h",
    a_dd_Dd_DE_dx_c: "_o",
    a_dd_Dd_DE_dx_C: "_tp~a/A/cT/CB/cH/Ca?G=h",
    a_dd_Df_DF_c: "_g",
    a_dd_Df_DF_C: "_tp~a/A/cT/cu/c?C=d&D=e&E=f&F=g&CD=Ce&bG=bh&bH=bi&CE=Cf&G=h",
    a_dd_Df_Dg_c: "_g",
    a_dd_Df_Dg_C: "_tp~a/A/cT/cu/cU/CF?G=h",
    a_dd_Df_DG_c: "_g",
    a_dd_Df_DG_C: "_tp~a/A/cT/cu/cU?G=h",
    a_dd_Df_Dh_c: "_o",
    a_dd_Df_Dh_C: "_tp~a/A/cT/cu/c?G=h",
    a_dd_Df_DH_c: "_o",
    a_dd_Df_DH_C: "_tp~a/A/cT/cu/cU/Cg?CG=Ch",
    a_dd_Df_Di_c: "_o",
    a_dd_Df_Di_C: "_tp~a/A/cT/cu/cU/CH?G=h",
    a_dd_Df_DI_c: "_o",
    a_dd_Df_DI_C: "_tp~a/A/cT/cu/cU/Ci",
    a_dd_Df_Dj_c: "_o",
    a_dd_Df_Dj_C: "_tp~a/A/cT/cu/cU/CI",
    a_dd_Df_DJ_c: "_o",
    a_dd_Df_DJ_C: "_tp~a/A/cT/cu/cU/Cj",
    a_dd_Df_Dk_c: "_o",
    a_dd_Df_Dk_C: "_tp~a/A/cT/cu/CJ?G=h",
    a_dd_Df_DK_c: "_o",
    a_dd_Df_DK_C: "_tp~a/A/cT/cu/Ck?G=h",
    a_dd_Df_Dl_c: "_o",
    a_dd_Df_Dl_C: "_tp~a/A/cT/cu/CK?G=h",
    a_dd_Df_DL_c: "_o",
    a_dd_Df_DL_C: "_tp~a/A/cT/cu/Cl?CL=Cm&G=h",
    a_dd_Df_Dm_c: "_o",
    a_dd_Df_Dm_C: "_tp~a/A/cT/cu/CM?Cn=CN&Co=CO&G=h",
    a_dd_Df_DM_c: "_o",
    a_dd_Df_DM_C: "_tp~a/A/cT/cu/Cp?C=d&D=e&E=f&G=h",
    a_dd_Df_Dn_c: "_o",
    a_dd_Df_Dn_C: "_tp~a/A/cT/cu/CP",
    a_dd_Df_DN_c: "_p",
    a_dd_Df_DN_C: "_tp~a/A/cT/cu/cU?G=h",
    a_dd_Df_Do_c: "_d",
    a_dd_Df_Do_C: "_tp~a/A/cT/cu/cU",
    a_dd_DO_Dp_c: "_g",
    a_dd_DO_Dp_C: "_tp~a/A/cT/Cq/CQ?G=h",
    a_dd_DO_DP_c: "_o",
    a_dd_DO_DP_C: "_tp~a/A/cT/Cq/c?G=h",
    a_dd_DO_Dq_c: "_p",
    a_dd_DO_Dq_C: "_tp~a/A/cT/Cq/Cr?CR=Cs&G=h",
    a_dd_dv_DQ_c: "_g",
    a_dd_dv_DQ_C: "_tp~a/A/cT/cZ/c?C=d&D=e&E=f&F=g&G=h",
    a_dd_dv_Dr_c: "_g",
    a_dd_dv_Dr_C: "_tp~a/A/cT/cZ/CS?G=h",
    a_dd_dv_DR_c: "_o",
    a_dd_dv_DR_C: "_tp~a/A/cT/cZ/c?G=h",
    a_dd_dv_Ds_c: "_o",
    a_dd_dv_Ds_C: "_tp~a/A/cT/cZ/CS/cu",
    a_dd_dv_DS_c: "_p",
    a_dd_dv_DS_C: "_tp~a/A/cT/cZ/CS?G=h",
    a_dd_dv_Dt_c: "_d",
    a_dd_dv_Dt_C: "_tp~a/A/cT/cZ/CS",
    a_dd_dv_DT_c: "_d",
    a_dd_dv_DT_C: "_tp~a/A/cT/cZ/CS/cu/cU",
    a_dd_Du_DU_c: "_g",
    a_dd_Du_DU_C: "_tp~a/A/cT/Ct/c?C=d&D=e&E=f&G=h",
    a_dd_Du_Dv_c: "_g",
    a_dd_Du_Dv_C: "_tp~a/A/cT/Ct/cH?G=h",
    a_dd_DV_Dw_c: "_g",
    a_dd_DV_Dw_C: "_tp~a/A/cT/CT/c?C=d&D=e&E=f&F=g&G=h",
    a_dd_DV_DW_c: "_g",
    a_dd_DV_DW_C: "_tp~a/A/cT/CT/Cu?G=h",
    a_dd_DV_Dx_c: "_o",
    a_dd_DV_Dx_C: "_tp~a/A/cT/CT/c?G=h",
    a_dd_DV_DX_c: "_p",
    a_dd_DV_DX_C: "_tp~a/A/cT/CT/Cu?G=h",
    a_Dy_DY_c: "_g",
    a_Dy_DY_C: "_tp~a/A/CU/c?C=d&D=e&E=f&F=g&G=h",
    a_Dy_Dz_c: "_g",
    a_Dy_Dz_C: "_tp~a/A/CU/CS?G=h",
    a_Dy_DZ_c: "_o",
    a_Dy_DZ_C: "_tp~a/A/CU/c?G=h",
    a_Dy_ea_c: "_d",
    a_Dy_ea_C: "_tp~a/A/CU/CS",
    a_b_d_c: "_g",
    a_b_d_C: "_tp~a/A/Bb/B/H?Cv=CV&G=h",
    a_b_eA_c: "_g",
    a_b_eA_C: "_tp~a/A/Bb/Cw/CW/B?C=d&D=e&E=f&F=g&Cv=CV&G=h",
    a_b_eb_c: "_g",
    a_b_eb_C: "_tp~a/A/Bb/Cw/Cx/CX?Cv=CV&G=h",
    a_b_eB_c: "_g",
    a_b_eB_C: "_tp~a/A/Bb/Cw/Cy/B/H?Cv=CV&G=h",
    a_b_ec_c: "_g",
    a_b_ec_C: "_tp~a/A/Bb/Cw/Cy/B?C=d&D=e&E=f&F=g&Cv=CV&G=h",
    a_eC_ed_c: "_g",
    a_eC_ed_C: "_tp~a/A/CY/c?C=d&D=e&E=f&F=g&bG=bh&bH=bi&Cz=CZ&G=h",
    a_eC_Cm_c: "_g",
    a_eC_Cm_C: "_tp~a/A/CY/da/cJ",
    a_eC_eD_c: "_g",
    a_eC_eD_C: "_tp~a/A/CY/da/dA",
    a_eC_ee_c: "_g",
    a_eC_ee_C: "_tp~a/A/CY/da?db=dB&Cz=CZ&G=h",
    a_eC_eE_c: "_o",
    a_eC_eE_C: "_tp~a/A/CY/c?cK=L&G=h",
    a_eC_ef_c: "_o",
    a_eC_ef_C: "_tp~a/A/CY/c?G=h",
    a_eC_eF_c: "_o",
    a_eC_eF_C: "_tp~a/A/CY/da/cJ?G=h",
    a_eC_eg_c: "_o",
    a_eC_eg_C: "_tp~a/A/CY/dc?dC=dd&G=h",
    a_eC_Cq_c: "_p",
    a_eC_Cq_C: "_tp~a/A/CY/da/cm/cM?G=h",
    a_eC_eG_c: "_p",
    a_eC_eG_C: "_tp~a/A/CY/da/Ao/AM?dD=de&dE=df&G=h",
    a_eC_eh_c: "_p",
    a_eC_eh_C: "_tp~a/A/CY/da/db?dE=df",
    a_eC_eH_c: "_p",
    a_eC_eH_C: "_tp~a/A/CY/da/cl/cL",
    a_eC_ei_c: "_p",
    a_eC_ei_C: "_tp~a/A/CY/da/cn?dD=de&dE=df&G=h",
    a_eC_eI_c: "_p",
    a_eC_eI_C: "_tp~a/A/CY/da/dF?G=h",
    a_eC_ej_c: "_p",
    a_eC_ej_C: "_tp~a/A/CY/da?dD=de&dE=df&G=h",
    a_eJ_ek_eK_c: "_p",
    a_eJ_ek_eK_C: "_tp~a/A/CY/da/dg/dG?dD=de&dE=df&G=h",
    a_eJ_ek_el_c: "_p",
    a_eJ_ek_el_C: "_tp~a/A/CY/da/dg/cF?dD=de&dE=df&G=h",
    a_eJ_ek_eL_c: "_p",
    a_eJ_ek_eL_C: "_tp~a/A/CY/da/dg?dD=de&dE=df&G=h",
    a_eJ_ek_em_c: "_d",
    a_eJ_ek_em_C: "_tp~a/A/CY/da/dg/dG?dD=de&dE=df",
    a_eJ_ek_eM_c: "_d",
    a_eJ_ek_eM_C: "_tp~a/A/CY/da/dg/cF?dD=de&dE=df",
    a_eJ_ek_en_c: "_d",
    a_eJ_ek_en_C: "_tp~a/A/CY/da/dg?dD=de&dE=df",
    a_eJ_r_R_c: "_p",
    a_eJ_r_R_C: "_tp~a/A/CY/da/o/O?dD=de&dE=df&G=h",
    a_eJ_r_S_c: "_d",
    a_eJ_r_S_C: "_tp~a/A/CY/da/o/p?dD=de&dE=df",
    a_eJ_r_s_c: "_d",
    a_eJ_r_s_C: "_tp~a/A/CY/da/o?dD=de&dE=df",
    a_eJ_I_j_J_c: "_g",
    a_eJ_I_j_J_C: "_tp~a/A/CY/j/J/c?C=d&D=e&E=f&F=g&G=h",
    a_eJ_I_j_k_c: "_g",
    a_eJ_I_j_k_C: "_tp~a/A/CY/j/J/k/K",
    a_eJ_I_j_K_c: "_g",
    a_eJ_I_j_K_C: "_tp~a/A/CY/j/J/k?G=h",
    a_eJ_I_j_l_c: "_o",
    a_eJ_I_j_l_C: "_tp~a/A/CY/j/J/c?G=h",
    a_eJ_I_j_L_c: "_p",
    a_eJ_I_j_L_C: "_tp~a/A/CY/j/J/k?G=h",
    a_eJ_eN_eo_c: "_g",
    a_eJ_eN_eo_C: "_tp~a/A/CY/da/dh?db=dB&G=h",
    a_eJ_eN_eO_c: "_p",
    a_eJ_eN_eO_C: "_tp~a/A/CY/da/dh?dD=de&dE=df&G=h",
    a_eJ_ep_eP_c: "_g",
    a_eJ_ep_eP_C: "_tp~a/A/CY/da/dH/di/cJ",
    a_eJ_ep_eq_c: "_g",
    a_eJ_ep_eq_C: "_tp~a/A/CY/da/dH/di?G=h",
    a_eJ_ep_eQ_c: "_o",
    a_eJ_ep_eQ_C: "_tp~a/A/CY/da/dH?G=h",
    a_eJ_ep_er_c: "_p",
    a_eJ_ep_er_C: "_tp~a/A/CY/da/dH/di?G=h",
    a_eJ_ep_eR_c: "_d",
    a_eJ_ep_eR_C: "_tp~a/A/CY/da/dH/di",
    a_eJ_z_Z_c: "_g",
    a_eJ_z_Z_C: "_tp~a/A/CY/da/s?db=dB",
    a_eJ_z_Aa_c: "_o",
    a_eJ_z_Aa_C: "_tp~a/A/CY/da/s?dD=de&dE=df",
    a_eJ_z_AA_c: "_p",
    a_eJ_z_AA_C: "_tp~a/A/CY/da/s/S?dD=de&dE=df&t=T&G=h",
    a_eJ_z_Ab_c: "_p",
    a_eJ_z_Ab_C: "_tp~a/A/CY/da/s?dD=de&dE=df&t=T",
    a_eJ_z_Ac_c: "_d",
    a_eJ_z_Ac_C: "_tp~a/A/CY/da/s/S?dD=de&dE=df",
    a_eJ_z_AB_c: "_d",
    a_eJ_z_AB_C: "_tp~a/A/CY/da/s?dD=de&dE=df",
    a_eJ_es_eS_c: "_o",
    a_eJ_es_eS_C: "_tp~a/A/CY/da/dI/cJ/c?G=h",
    a_eJ_es_et_c: "_o",
    a_eJ_es_et_C: "_tp~a/A/CY/da/dI/cl/cL?G=h",
    a_eJ_eT_eu_c: "_g",
    a_eJ_eT_eu_C: "_tp~a/A/CY/da/dj?db=dB&G=h",
    a_eJ_eT_eU_c: "_p",
    a_eJ_eT_eU_C: "_tp~a/A/CY/da/dj?dD=de&dE=df&G=h",
    a_eJ_CU_ev_c: "_g",
    a_eJ_CU_ev_C: "_tp~a/A/CY/da/J",
    a_eJ_CU_eV_c: "_o",
    a_eJ_CU_eV_C: "_tp~a/A/CY/da/J",
    a_eJ_CU_ew_c: "_p",
    a_eJ_CU_ew_C: "_tp~a/A/CY/da/J?cO=cp",
    a_eJ_CW_eW_c: "_g",
    a_eJ_CW_eW_C: "_tp~a/A/CY/da/P/dJ?db=dB&G=h",
    a_eJ_CW_ex_c: "_g",
    a_eJ_CW_ex_C: "_tp~a/A/CY/da/P/dk?db=dB&G=h",
    a_eJ_CW_eX_c: "_g",
    a_eJ_CW_eX_C: "_tp~a/A/CY/da/P?db=dB&G=h",
    a_eJ_CW_ey_c: "_o",
    a_eJ_CW_ey_C: "_tp~a/A/CY/da/P?dD=de&dE=df&bm=bM&G=h",
    a_eJ_CW_eY_c: "_p",
    a_eJ_CW_eY_C: "_tp~a/A/CY/da/P/dk/Ao/AM?dD=de&dE=df&G=h",
    a_eJ_CW_ez_c: "_p",
    a_eJ_CW_ez_C: "_tp~a/A/CY/da/P/dk/dK/dl?dD=de&dE=df&G=h",
    a_eJ_CW_eZ_c: "_p",
    a_eJ_CW_eZ_C: "_tp~a/A/CY/da/P/dk/dI?dD=de&dE=df&G=h",
    a_eJ_CW_Ea_c: "_p",
    a_eJ_CW_Ea_C: "_tp~a/A/CY/da/P/dk/dc/dL?dD=de&dE=df&G=h",
    a_eJ_CW_EA_c: "_p",
    a_eJ_CW_EA_C: "_tp~a/A/CY/da/P/dk/cQ/Q?dD=de&dE=df&G=h",
    a_eJ_CW_Eb_c: "_d",
    a_eJ_CW_Eb_C: "_tp~a/A/CY/da/P/dk?dD=de&dE=df",
    a_eJ_CY_EB_c: "_g",
    a_eJ_CY_EB_C: "_tp~a/A/CY/da/cR",
    a_eJ_CY_Ec_c: "_g",
    a_eJ_CY_Ec_C: "_tp~a/A/CY/da/cR/cs?G=h",
    a_eJ_CY_EC_c: "_o",
    a_eJ_CY_EC_C: "_tp~a/A/CY/da/cR?G=h",
    a_eJ_CY_Ed_c: "_p",
    a_eJ_CY_Ed_C: "_tp~a/A/CY/da/cR/cs?G=h",
    a_eJ_CY_ED_c: "_d",
    a_eJ_CY_ED_C: "_tp~a/A/CY/da/cR/cs",
    a_eJ_Ee_EE_c: "_g",
    a_eJ_Ee_EE_C: "_tp~a/A/CY/da/dm?G=h",
    a_eJ_Ef_EF_c: "_g",
    a_eJ_Ef_EF_C: "_tp~a/A/CY/da/dM",
    a_eJ_Ef_Eg_c: "_p",
    a_eJ_Ef_Eg_C: "_tp~a/A/CY/da/dM?G=h",
    a_eJ_EG_Eh_c: "_g",
    a_eJ_EG_Eh_C: "_tp~a/A/CY/da/dn/dN/cJ",
    a_eJ_EG_EH_c: "_g",
    a_eJ_EG_EH_C: "_tp~a/A/CY/da/dn/dN/do",
    a_eJ_EG_Ei_c: "_g",
    a_eJ_EG_Ei_C: "_tp~a/A/CY/da/dn/dN?G=h",
    a_eJ_EG_EI_c: "_o",
    a_eJ_EG_EI_C: "_tp~a/A/CY/da/dn?G=h",
    a_eJ_EG_Ej_c: "_p",
    a_eJ_EG_Ej_C: "_tp~a/A/CY/da/dn/dN?G=h",
    a_eJ_EG_EJ_c: "_d",
    a_eJ_EG_EJ_C: "_tp~a/A/CY/da/dn/dN",
    a_eJ_dB_Ek_c: "_g",
    a_eJ_dB_Ek_C: "_tp~a/A/CY/da/cS/c?G=h",
    a_eJ_dB_EK_c: "_g",
    a_eJ_dB_EK_C: "_tp~a/A/CY/da/cS/ct/cJ",
    a_eJ_dB_El_c: "_g",
    a_eJ_dB_El_C: "_tp~a/A/CY/da/cS/ct?G=h",
    a_eJ_dB_dc_c: "_o",
    a_eJ_dB_dc_C: "_tp~a/A/CY/da/cS/ct/cJ?G=h",
    a_eJ_dB_dC_c: "_o",
    a_eJ_dB_dC_C: "_tp~a/A/CY/da/cS/cJ?G=h",
    a_eJ_EL_Em_c: "_g",
    a_eJ_EL_Em_C: "_tp~a/A/CY/da/dO/dp/cJ",
    a_eJ_EL_EM_c: "_g",
    a_eJ_EL_EM_C: "_tp~a/A/CY/da/dO/dp?G=h",
    a_eJ_EL_En_c: "_o",
    a_eJ_EL_En_C: "_tp~a/A/CY/da/dO?G=h",
    a_eJ_EL_EN_c: "_p",
    a_eJ_EL_EN_C: "_tp~a/A/CY/da/dO/dp?G=h",
    a_eJ_EL_Eo_c: "_d",
    a_eJ_EL_Eo_C: "_tp~a/A/CY/da/dO/dp",
    a_eJ_EO_Ep_c: "_o",
    a_eJ_EO_Ep_C: "_tp~a/A/CY/da/dP?G=h",
    a_eJ_EO_EP_c: "_p",
    a_eJ_EO_EP_C: "_tp~a/A/CY/da/dP/dq",
    a_eJ_Eq_EQ_c: "_g",
    a_eJ_Eq_EQ_C: "_tp~a/A/CY/da/dQ/dr?G=h",
    a_eJ_Eq_Er_c: "_g",
    a_eJ_Eq_Er_C: "_tp~a/A/CY/da/dQ/dR?db=dB",
    a_eJ_Eq_ER_c: "_o",
    a_eJ_Eq_ER_C: "_tp~a/A/CY/da/dQ",
    a_eJ_Eq_Es_c: "_d",
    a_eJ_Eq_Es_C: "_tp~a/A/CY/da/dQ/dr",
    a_ES_Et_ET_c: "_o",
    a_ES_Et_ET_C: "_pp~cS/A/cS/ds/dS?G=h",
    a_ES_Eu_ET_c: "_o",
    a_ES_Eu_ET_C: "_tp~a/A/cS/ds/dS",
    a_ES_EU_Ev_c: "_o",
    a_ES_EU_Ev_C: "_pp~cS/A/cS/cv/c?G=h",
    a_ES_EU_EV_c: "_o",
    a_ES_EU_EV_C: "_pp~cS/A/cS/cv/cV/dt?G=h",
    a_ES_EU_Ew_c: "_o",
    a_ES_EU_Ew_C: "_pp~cS/A/cS/cv/dt?G=h",
    a_ES_EU_EW_c: "_p",
    a_ES_EU_EW_C: "_pp~cS/A/cS/cv/cV?G=h",
    a_ES_EU_Ex_c: "_d",
    a_ES_EU_Ex_C: "_pp~cS/A/cS/cv/cV",
    a_ES_EX_Ev_c: "_o",
    a_ES_EX_Ev_C: "_tp~a/A/cS/dT/c?G=h",
    a_ES_EX_Ey_c: "_o",
    a_ES_EX_Ey_C: "_tp~a/A/cS/dT/du/dU?G=h",
    a_EY_Ez_c: "_g",
    a_EY_Ez_C: "_tp~a/A/dv/c?C=d&D=e&E=f&F=g&bG=bh&G=h",
    a_EY_EZ_c: "_g",
    a_EY_EZ_C: "_tp~a/A/dv/dV/cJ",
    a_EY_fa_c: "_g",
    a_EY_fa_C: "_tp~a/A/dv/dV/P/dw?G=h",
    a_EY_fA_c: "_g",
    a_EY_fA_C: "_tp~a/A/dv/dV/P?G=h",
    a_EY_fb_c: "_g",
    a_EY_fb_C: "_tp~a/A/dv/dV/cS/ct/cJ",
    a_EY_El_c: "_g",
    a_EY_El_C: "_tp~a/A/dv/dV/cS/ct?G=h",
    a_EY_Ek_c: "_g",
    a_EY_Ek_C: "_tp~a/A/dv/dV/cS?G=h",
    a_EY_fB_c: "_g",
    a_EY_fB_C: "_tp~a/A/dv/dV?G=h",
    a_EY_fc_c: "_g",
    a_EY_fc_C: "_tp~a/A/dv/dW?G=h",
    a_EY_fC_c: "_o",
    a_EY_fC_C: "_tp~a/A/dv/c?G=h",
    a_EY_fd_c: "_o",
    a_EY_fd_C: "_tp~a/A/dv/dV/P?G=h",
    a_EY_fD_c: "_o",
    a_EY_fD_C: "_tp~a/A/dv/dV/cS/ct/cJ?G=h",
    a_EY_fe_c: "_o",
    a_EY_fe_C: "_tp~a/A/dv/dV/cS/cJ?G=h",
    a_EY_fE_c: "_o",
    a_EY_fE_C: "_tp~a/A/dv/dV/dx?G=h",
    a_EY_ff_c: "_o",
    a_EY_ff_C: "_tp~a/A/dv/cJ?G=h",
    a_EY_fF_c: "_p",
    a_EY_fF_C: "_tp~a/A/dv/dV?G=h",
    a_EY_fg_c: "_p",
    a_EY_fg_C: "_tp~a/A/dv/cl/cL",
    a_EY_Eb_c: "_d",
    a_EY_Eb_C: "_tp~a/A/dv/da/P/dk?dD=de&dE=df",
    a_EY_fG_c: "_d",
    a_EY_fG_C: "_tp~a/A/dv/dV",
    a_fh_CY_fH_c: "_g",
    a_fh_CY_fH_C: "_tp~a/A/dv/dV/cR",
    a_fh_CY_fi_c: "_g",
    a_fh_CY_fi_C: "_tp~a/A/dv/dV/cR/cs?G=h",
    a_fh_CY_fI_c: "_o",
    a_fh_CY_fI_C: "_tp~a/A/dv/dV/cR?G=h",
    a_fh_CY_fj_c: "_p",
    a_fh_CY_fj_C: "_tp~a/A/dv/dV/cR/cs?G=h",
    a_fh_CY_fJ_c: "_d",
    a_fh_CY_fJ_C: "_tp~a/A/dv/dV/cR/cs",
    a_fh_EG_EH_c: "_g",
    a_fh_EG_EH_C: "_tp~a/A/dv/dV/dn/dN/do?dX=dy",
    a_fh_EG_Ei_c: "_g",
    a_fh_EG_Ei_C: "_tp~a/A/dv/dV/dn/dN?G=h",
    a_fh_EG_EI_c: "_o",
    a_fh_EG_EI_C: "_tp~a/A/dv/dV/dn?G=h",
    a_fh_EG_Ej_c: "_p",
    a_fh_EG_Ej_C: "_tp~a/A/dv/dV/dn/dN?G=h",
    a_fh_EG_EJ_c: "_d",
    a_fh_EG_EJ_C: "_tp~a/A/dv/dV/dn/dN",
    a_fh_Eq_EQ_c: "_g",
    a_fh_Eq_EQ_C: "_tp~a/A/dv/dV/dQ/dr?G=h",
    a_fh_Eq_ER_c: "_o",
    a_fh_Eq_ER_C: "_tp~a/A/dv/dV/dQ",
    a_fh_Eq_Es_c: "_d",
    a_fh_Eq_Es_C: "_tp~a/A/dv/dV/dQ/dr",
    a_fk_fK_fl_c: "_g",
    a_fk_fK_fl_C: "_tp~a/A/bx/dY/c?G=h",
    a_fk_fK_fL_c: "_p",
    a_fk_fK_fL_C: "_tp~a/A/bx/dY/c?G=h",
    a_fk_fm_fM_c: "_g",
    a_fk_fm_fM_C: "_tp~a/A/bx/dz/dZ?G=h",
    a_fk_fm_fn_c: "_o",
    a_fk_fm_fn_C: "_tp~a/A/bx/dz/dZ?G=h",
    a_fk_fm_fN_c: "_p",
    a_fk_fm_fN_C: "_tp~a/A/bx/dz/dZ?G=h",
    a_fk_Cl_fo_fO_c: "_g",
    a_fk_Cl_fo_fO_C: "_tp~a/A/bx/Da/DA?G=h",
    a_fk_Cl_fo_fp_c: "_p",
    a_fk_Cl_fo_fp_C: "_tp~a/A/bx/Da/DA?G=h",
    a_fk_Cl_fP_fq_c: "_g",
    a_fk_Cl_fP_fq_C: "_tp~a/A/bx/Da/Db?G=h",
    a_fk_Cl_fQ_fr_c: "_g",
    a_fk_Cl_fQ_fr_C: "_tp~a/A/bx/Da/DB/Dc/DC?G=h",
    a_fk_Cl_fQ_fR_c: "_g",
    a_fk_Cl_fQ_fR_C: "_tp~a/A/bx/Da/DB/Dd",
    a_fk_Cl_fQ_fs_c: "_p",
    a_fk_Cl_fQ_fs_C: "_tp~a/A/bx/Da/DB/Dd",
    a_fk_Cl_fQ_fS_c: "_d",
    a_fk_Cl_fQ_fS_C: "_tp~a/A/bx/Da/DB/Dd/DC",
    a_fk_ft_fT_c: "_g",
    a_fk_ft_fT_C: "_tp~a/A/bx/Da/c?G=h",
    a_fk_fu_fU_fv_c: "_g",
    a_fk_fu_fU_fv_C: "_tp~a/A/bx/DD/De?G=h",
    a_fk_fu_fU_fV_c: "_o",
    a_fk_fu_fU_fV_C: "_tp~a/A/bx/DD/De?G=h",
    a_fk_fu_fU_fw_c: "_p",
    a_fk_fu_fU_fw_C: "_tp~a/A/bx/DD/De?G=h",
    a_fk_fu_fU_fW_c: "_d",
    a_fk_fu_fU_fW_C: "_tp~a/A/bx/DD/De",
    a_fk_fu_fx_fX_c: "_g",
    a_fk_fu_fx_fX_C: "_tp~a/A/bx/DD/DE",
    a_fk_fu_fx_fy_c: "_o",
    a_fk_fu_fx_fy_C: "_tp~a/A/bx/DD/DE?G=h",
    a_fk_fu_fx_fY_c: "_p",
    a_fk_fu_fx_fY_C: "_tp~a/A/bx/DD/DE",
    a_fk_fz_fZ_c: "_g",
    a_fk_fz_fZ_C: "_tp~a/A/bx/DD/c?G=h",
    a_fk_fz_Fa_c: "_p",
    a_fk_fz_Fa_C: "_tp~a/A/bx/DD/c?G=h",
    a_fk_FA_Fb_c: "_g",
    a_fk_FA_Fb_C: "_tp~a/A/bx/Df/c?G=h",
    a_fk_FA_FB_c: "_g",
    a_fk_FA_FB_C: "_tp~a/A/bx/Df/cH?G=h",
    a_fk_FA_Fc_c: "_p",
    a_fk_FA_Fc_C: "_tp~a/A/bx/Df/cH?G=h",
    a_fk_CD_FC_Fd_c: "_g",
    a_fk_CD_FC_Fd_C: "_tp~a/A/bx/cF/DF?G=h",
    a_fk_CD_FC_FD_c: "_o",
    a_fk_CD_FC_FD_C: "_tp~a/A/bx/cF/DF?G=h",
    a_fk_CD_FC_Fe_c: "_p",
    a_fk_CD_FC_Fe_C: "_tp~a/A/bx/cF/DF?G=h",
    a_fk_FE_Ff_c: "_g",
    a_fk_FE_Ff_C: "_tp~a/A/bx/cF/c?G=h",
    a_CD_A_FF_Fg_c: "_g",
    a_CD_A_FF_Fg_C: "_tp~a/A/cF/b/Dg/c?C=d&D=e&E=f&F=g&G=h",
    a_CD_A_FF_FG_c: "_g",
    a_CD_A_FF_FG_C: "_tp~a/A/cF/b/Dg/DG?G=h",
    a_CD_A_FF_Fh_c: "_o",
    a_CD_A_FF_Fh_C: "_tp~a/A/cF/b/Dg/DG?G=h",
    a_CD_A_FF_FH_c: "_p",
    a_CD_A_FF_FH_C: "_tp~a/A/cF/b/Dg/DG?G=h",
    a_CD_A_FF_Fi_c: "_d",
    a_CD_A_FF_Fi_C: "_tp~a/A/cF/b/Dg/DG",
    a_CD_A_FI_Fj_FJ_c: "_g",
    a_CD_A_FI_Fj_FJ_C: "_tp~a/A/cF/b/Dh/DH/Di/DI/CS?G=h",
    a_CD_A_FI_Fj_Fk_c: "_g",
    a_CD_A_FI_Fj_Fk_C: "_tp~a/A/cF/b/Dh/DH/Di/DI?G=h",
    a_CD_A_FI_Fj_FK_c: "_o",
    a_CD_A_FI_Fj_FK_C: "_tp~a/A/cF/b/Dh/DH/Di/DI?G=h",
    a_CD_A_FI_Fj_Fl_c: "_p",
    a_CD_A_FI_Fj_Fl_C: "_tp~a/A/cF/b/Dh/DH/Di/DI/CS?G=h",
    a_CD_A_FI_Fj_FL_c: "_d",
    a_CD_A_FI_Fj_FL_C: "_tp~a/A/cF/b/Dh/DH/Di/DI/CS",
    a_CD_A_FI_Fm_FM_c: "_g",
    a_CD_A_FI_Fm_FM_C: "_tp~a/A/cF/b/Dh/DH/Di/Dj/CS?G=h",
    a_CD_A_FI_Fm_Fn_c: "_g",
    a_CD_A_FI_Fm_Fn_C: "_tp~a/A/cF/b/Dh/DH/Di/Dj?G=h",
    a_CD_A_FI_Fm_FN_c: "_o",
    a_CD_A_FI_Fm_FN_C: "_tp~a/A/cF/b/Dh/DH/Di/Dj?G=h",
    a_CD_A_FI_Fm_Fo_c: "_p",
    a_CD_A_FI_Fm_Fo_C: "_tp~a/A/cF/b/Dh/DH/Di/Dj/CS?G=h",
    a_CD_A_FI_Fm_FO_c: "_d",
    a_CD_A_FI_Fm_FO_C: "_tp~a/A/cF/b/Dh/DH/Di/Dj/CS",
    a_CD_A_FI_Fp_FJ_c: "_g",
    a_CD_A_FI_Fp_FJ_C: "_tp~a/A/cF/b/Dh/DH/Di/DI/CS?G=h",
    a_CD_A_FI_Fp_Fk_c: "_g",
    a_CD_A_FI_Fp_Fk_C: "_tp~a/A/cF/b/Dh/DH/Di/DI?G=h",
    a_CD_A_FI_Fp_FK_c: "_o",
    a_CD_A_FI_Fp_FK_C: "_tp~a/A/cF/b/Dh/DH/Di/DI?G=h",
    a_CD_A_FI_Fp_Fl_c: "_p",
    a_CD_A_FI_Fp_Fl_C: "_tp~a/A/cF/b/Dh/DH/Di/DI/CS?G=h",
    a_CD_A_FI_Fp_FL_c: "_d",
    a_CD_A_FI_Fp_FL_C: "_tp~a/A/cF/b/Dh/DH/Di/DI/CS",
    a_CD_A_FI_FP_Fq_c: "_g",
    a_CD_A_FI_FP_Fq_C: "_tp~a/A/cF/b/Dh/DH/Di/DJ/CS?G=h",
    a_CD_A_FI_FP_FQ_c: "_g",
    a_CD_A_FI_FP_FQ_C: "_tp~a/A/cF/b/Dh/DH/Di/DJ?G=h",
    a_CD_A_FI_FP_Fr_c: "_o",
    a_CD_A_FI_FP_Fr_C: "_tp~a/A/cF/b/Dh/DH/Di/DJ?G=h",
    a_CD_A_FI_FP_FR_c: "_p",
    a_CD_A_FI_FP_FR_C: "_tp~a/A/cF/b/Dh/DH/Di/DJ/CS?G=h",
    a_CD_A_FI_FP_Fs_c: "_d",
    a_CD_A_FI_FP_Fs_C: "_tp~a/A/cF/b/Dh/DH/Di/DJ/CS",
    a_CD_A_FI_FS_Ft_c: "_g",
    a_CD_A_FI_FS_Ft_C: "_tp~a/A/cF/b/Dh/DH/Dk",
    a_CD_A_FI_FS_FT_c: "_p",
    a_CD_A_FI_FS_FT_C: "_tp~a/A/cF/b/Dh/DH/Dk",
    a_CD_A_Fu_FU_c: "_g",
    a_CD_A_Fu_FU_C: "_tp~a/A/cF/b/Dh/c?G=h",
    a_Fv_FV_c: "_g",
    a_Fv_FV_C: "_tp~a/A/DK/c?C=d&D=e&E=f&F=g&G=h",
    a_Fv_Fw_c: "_g",
    a_Fv_Fw_C: "_tp~a/A/DK/cH?G=h",
    a_Fv_FW_c: "_o",
    a_Fv_FW_C: "_tp~a/A/DK/c?G=h",
    a_Fv_Fx_c: "_o",
    a_Fv_Fx_C: "_tp~a/A/DK/As",
    a_Fv_FX_c: "_p",
    a_Fv_FX_C: "_tp~a/A/DK/cH?G=h",
    a_Fv_Fy_c: "_d",
    a_Fv_Fy_C: "_tp~a/A/DK/cH",
    a_FY_Fz_c: "_g",
    a_FY_Fz_C: "_tp~a/A/Dl/c?C=d&D=e&E=f&F=g&bG=bh&bH=bi&G=h",
    a_FY_FZ_c: "_g",
    a_FY_FZ_C: "_tp~a/A/Dl/DL?G=h",
    a_FY_ga_c: "_g",
    a_FY_ga_C: "_tp~a/A/Dl/Dm/Bf/DM?G=h",
    a_FY_gA_c: "_o",
    a_FY_gA_C: "_tp~a/A/Dl/c?G=h",
    a_FY_gb_c: "_p",
    a_FY_gb_C: "_tp~a/A/Dl/DL?G=h",
    a_FY_gB_c: "_d",
    a_FY_gB_C: "_tp~a/A/Dl/DL",
    a_gc_gC_gd_c: "_g",
    a_gc_gC_gd_C: "_tp~a/A/Dl/DL/P/Dn?G=h",
    a_gc_gC_gD_c: "_g",
    a_gc_gC_gD_C: "_tp~a/A/Dl/DL/P?C=d&D=e&E=f&F=g&G=h",
    a_gc_gC_ge_c: "_g",
    a_gc_gC_ge_C: "_tp~a/A/Dl/Dm/Bf/DM/P?C=d&D=e&E=f&F=g&G=h",
    a_gc_gC_gE_c: "_o",
    a_gc_gC_gE_C: "_tp~a/A/Dl/DL/P?G=h",
    a_gc_gC_gf_c: "_p",
    a_gc_gC_gf_C: "_tp~a/A/Dl/DL/P/Dn/Q?G=h",
    a_gc_gC_gF_c: "_p",
    a_gc_gC_gF_C: "_tp~a/A/Dl/DL/P/Dn?G=h",
    a_gc_gC_gg_c: "_d",
    a_gc_gC_gg_C: "_tp~a/A/Dl/DL/P",
    a_gc_gC_gG_c: "_d",
    a_gc_gC_gG_C: "_tp~a/A/Dl/DL/P/Dn",
    gh_gH_gi_c: "_g",
    gh_gH_gi_C: "_tp~a/AO/DN/db?D=e&C=d&Do=DO&G=h",
    gh_gH_gI_c: "_o",
    gh_gH_gI_C: "_tp~a/AO/DN/db?Do=DO",
    gh_gH_gj_c: "_p",
    gh_gH_gj_C: "_tp~a/AO/DN/Dp?Do=DO",
    gh_gJ_gk_c: "_g",
    gh_gJ_gk_C: "_tp~a/AO/DP/c?D=e&C=d&G=h",
    gh_gJ_gK_c: "_g",
    gh_gJ_gK_C: "_tp~a/AO/DP/Dq?G=h",
    gh_gJ_gl_c: "_o",
    gh_gJ_gl_C: "_tp~a/AO/DP/c?G=h",
    gh_gJ_gL_c: "_p",
    gh_gJ_gL_C: "_tp~a/AO/DP/Dq?G=h",
    gh_gJ_gm_c: "_d",
    gh_gJ_gm_C: "_tp~a/AO/DP/Dq",
    gh_gM_gn_c: "_g",
    gh_gM_gn_C: "_tp~a/AO/DQ/Dr?G=h",
    gh_gM_gN_c: "_g",
    gh_gM_gN_C: "_tp~a/AO/DQ/Dr?G=h",
    gh_gM_go_c: "_o",
    gh_gM_go_C: "_tp~a/AO/DQ/c?G=h",
    gh_gM_gO_c: "_p",
    gh_gM_gO_C: "_tp~a/AO/DQ/Dr?G=h",
    gh_gp_gP_c: "_g",
    gh_gp_gP_C: "_tp~a/AO/DR/c?D=e&C=d&G=h",
    gh_gp_gq_c: "_g",
    gh_gp_gq_C: "_tp~a/AO/DR/Ds?G=h",
    gh_gp_gQ_c: "_o",
    gh_gp_gQ_C: "_tp~a/AO/DR/c?G=h",
    gh_gp_gr_c: "_p",
    gh_gp_gr_C: "_tp~a/AO/DR/Ds?G=h",
    gh_gR_gs_gS_c: "_g",
    gh_gR_gs_gS_C: "_tp~a/AO/DP/Dq/DS/Dt/AO",
    gh_gR_gs_gt_c: "_g",
    gh_gR_gs_gt_C: "_tp~a/AO/DP/Dq/DS/Dt/DT?Du=DU&Dv=DV&Dw=DW&Dx=DX&Dy=DY&Dz=DZ",
    gh_gR_gs_gT_c: "_g",
    gh_gR_gs_gT_C: "_tp~a/AO/DP/Dq/DS/Dt?ea=eA&G=h",
    gh_gR_gs_gu_c: "_g",
    gh_gR_gs_gu_C: "_tp~a/AO/DP/Dq/DS?F=g&E=f&D=e&C=d&ea=eA&G=h",
    gh_gR_gs_gU_c: "_o",
    gh_gR_gs_gU_C: "_tp~a/AO/DP/Dq/DS?G=h",
    gh_gR_gs_gv_c: "_p",
    gh_gR_gs_gv_C: "_tp~a/AO/DP/Dq/DS/Dt/AO",
    gh_gR_gs_gV_c: "_p",
    gh_gR_gs_gV_C: "_tp~a/AO/DP/Dq/DS/Dt?G=h",
    gh_gR_gs_gw_c: "eb",
    gh_gR_gs_gw_C: "_tp~a/AO/DP/Dq/DS/Dt?G=h",
    gh_gR_gs_gW_c: "_d",
    gh_gR_gs_gW_C: "_tp~a/AO/DP/Dq/DS/Dt",
    gh_gR_gs_gx_c: "_d",
    gh_gR_gs_gx_C: "_tp~a/AO/DP/Dq/DS/Dt/AO",
    gh_gR_gX_gy_c: "_g",
    gh_gR_gX_gy_C: "_tp~a/AO/DP/Dq/eB/ec/AO",
    gh_gR_gX_gY_c: "_g",
    gh_gR_gX_gY_C: "_tp~a/AO/DP/Dq/eB/ec/DT?Du=DU&Dv=DV&Dw=DW&Dx=DX&Dy=DY&Dz=DZ",
    gh_gR_gX_gz_c: "_g",
    gh_gR_gX_gz_C: "_tp~a/AO/DP/Dq/eB/ec?ea=eA&G=h",
    gh_gR_gX_gZ_c: "_p",
    gh_gR_gX_gZ_C: "_tp~a/AO/DP/Dq/eB/ec/AO?eC=ed&eD=ee",
    gh_gR_gX_Ga_c: "_d",
    gh_gR_gX_Ga_C: "_tp~a/AO/DP/Dq/eB/ec/AO?eC=ed&eD=ee",
    gh_gR_bY_GA_c: "_g",
    gh_gR_bY_GA_C: "_tp~a/AO/DP/Dq/Ar/eE",
    gh_gR_Gb_GB_c: "_g",
    gh_gR_Gb_GB_C: "_tp~a/AO/DP/Dq/ef/eF/DS?F=g&E=f&D=e&C=d&ea=eA&G=h",
    gh_Gc_GC_c: "_g",
    gh_Gc_GC_C: "_tp~a/AO/eg/c?D=e&C=d&G=h",
    gh_Gc_Gd_c: "_g",
    gh_Gc_Gd_C: "_tp~a/AO/eg/eG?G=h",
    gh_Gc_GD_c: "_o",
    gh_Gc_GD_C: "_tp~a/AO/eg/c?G=h",
    gh_Gc_Ge_c: "_p",
    gh_Gc_Ge_C: "_tp~a/AO/eg/eG?G=h",
    gh_Gc_GE_c: "_d",
    gh_Gc_GE_C: "_tp~a/AO/eg/eG",
    gh_Gf_cK_c: "_g",
    gh_Gf_cK_C: "_tp~a/AO/bs/c?D=e&C=d&G=h",
    gh_Gf_GF_c: "_g",
    gh_Gf_GF_C: "_tp~a/AO/bs/cH/P?D=e&C=d&E=f&F=g&G=h",
    gh_Gf_cM_c: "_o",
    gh_Gf_cM_C: "_tp~a/AO/bs/cH?eh=eH&G=h",
    gh_Gf_Gg_c: "_p",
    gh_Gf_Gg_C: "_tp~a/AO/bs/cH/P?G=h",
    GG_Gh_GH_c: "_g",
    GG_Gh_GH_C: "_hp~a/ei/eI/c?C=d&D=e&E=f&F=g&G=h",
    GG_Gh_Gi_c: "_g",
    GG_Gh_Gi_C: "_hp~a/ei/eI/ej?G=h",
    GG_GI_Gj_GJ_c: "_g",
    GG_GI_Gj_GJ_C: "_tp~a/ei/eJ/ek/c?C=d&D=e&E=f&F=g&G=h",
    GG_GI_Gk_GK_Gl_c: "_g",
    GG_GI_Gk_GK_Gl_C: "_tp~a/ei/eJ/ek/eK/el/CS?G=h",
    GG_GI_Gk_GK_GL_c: "_g",
    GG_GI_Gk_GK_GL_C: "_tp~a/ei/eJ/ek/eK/el?C=d&D=e&E=f&F=g&G=h",
    Gm_GM_Gn_DP_c: "_o",
    Gm_GM_Gn_DP_C: "_hp~a/eL/em/Cq/eM?en=eN&G=h",
    Gm_GM_Gn_GN_c: "_p",
    Gm_GM_Gn_GN_C: "_hp~a/eL/em/Cq/eM?en=eN&G=h",
    Gm_GM_Gn_Go_c: "_d",
    Gm_GM_Gn_Go_C: "_hp~a/eL/em/Cq/c?CR=Cs",
    Gm_GO_Gp_GP_c: "_g",
    Gm_GO_Gp_GP_C: "_tp~a/eL/eo/eO/c?C=d&D=e&E=f&F=g&G=h",
    Gm_GO_Gp_Ei_c: "_g",
    Gm_GO_Gp_Ei_C: "_tp~a/eL/eo/eO/ep/c?eP=eq&eQ=er&G=h",
    Gm_GO_Gp_Gq_c: "_g",
    Gm_GO_Gp_Gq_C: "_tp~a/eL/eo/eO/dY/ep/dn/c?C=d&D=e&E=f&F=g&G=h",
    Gm_GO_Gp_GQ_c: "_g",
    Gm_GO_Gp_GQ_C: "_tp~a/eL/eo/eO/eR/es/c",
    Gm_GO_Gp_Gr_c: "_g",
    Gm_GO_Gp_Gr_C: "_tp~a/eL/eo/eO/eS/c?C=d&D=e&E=f&F=g&G=h",
    Gm_GO_Gp_GR_c: "_o",
    Gm_GO_Gp_GR_C: "_tp~a/eL/eo/eO/ep/et/eT?G=h",
    Gm_GO_Gp_Gs_c: "_o",
    Gm_GO_Gp_Gs_C: "_tp~a/eL/eo/eO/eu?G=h",
    Gm_GO_Gp_EI_c: "_o",
    Gm_GO_Gp_EI_C: "_tp~a/eL/eo/eO/eU/c?ev=eV&G=h",
    Gm_GO_Gp_Ej_c: "_p",
    Gm_GO_Gp_Ej_C: "_tp~a/eL/eo/eO/ep/c?G=h",
    Gm_GO_Gp_EJ_c: "_d",
    Gm_GO_Gp_EJ_C: "_tp~a/eL/eo/eO/ep/c",
    Gm_GO_EG_GS_c: "_g",
    Gm_GO_EG_GS_C: "_hp~a/eL/eo/ew/dn/ep?eW=ex",
    Gm_fK_Gt_c: "_g",
    Gm_fK_Gt_C: "_hp~a/eL/eX/dY/ep/ey?G=h",
    Gm_fK_GT_c: "_g",
    Gm_fK_GT_C: "_hp~a/eL/eX/dY/eY/ez?G=h",
    Gm_fK_Gu_c: "_g",
    Gm_fK_Gu_C: "_hp~a/eL/eX/dn/ep/eZ/Ea?G=h",
    Gm_fK_GU_c: "_g",
    Gm_fK_GU_C: "_hp~a/eL/eX/dn/ep/EA?G=h",
    Gm_fK_Gv_c: "_o",
    Gm_fK_Gv_C: "_hp~a/eL/eX/dn/ep/Eb/Ea?EB=Ec&G=h",
    Gm_fK_GV_c: "_o",
    Gm_fK_GV_C: "_hp~a/eL/eX/dn/ep/EC?G=h",
    Gm_fK_Gw_c: "_d",
    Gm_fK_Gw_C: "_hp~a/eL/eX/dn/ep/Eb/Ea",
    Gm_GW_Gx_GX_c: "_o",
    Gm_GW_Gx_GX_C: "_hp~a/eL/dY/Cq/c?G=h",
    Gm_GW_Gx_Gy_c: "_p",
    Gm_GW_Gx_Gy_C: "_hp~a/eL/dY/Cq/Ed?G=h",
    Gm_GW_Gx_GY_c: "_d",
    Gm_GW_Gx_GY_C: "_hp~a/eL/dY/Cq/Cs",
    Gm_Gz_GZ_ha_c: "_o",
    Gm_Gz_GZ_ha_C: "_hp~a/eL/eX/Cq/c?ED=Ee&G=h",
    Gm_Gz_GZ_hA_c: "_p",
    Gm_Gz_GZ_hA_C: "_hp~a/eL/eX/Cq/c?ED=Ee&G=h",
    Gm_Gz_GZ_Go_c: "_d",
    Gm_Gz_GZ_Go_C: "_hp~a/eL/eX/Cq/c?CR=Cs",
    Gm_hb_hB_c: "_g",
    Gm_hb_hB_C: "_tp~a/eL/EE/c?D=e&C=d&F=g&E=f&G=h",
    Gm_hb_hc_c: "_g",
    Gm_hb_hc_C: "_tp~a/eL/EE/Ef?G=h",
    Gm_hb_hC_c: "_o",
    Gm_hb_hC_C: "_tp~a/eL/EE/c?G=h",
    Gm_hb_hd_c: "_p",
    Gm_hb_hd_C: "_tp~a/eL/EE/Ef?G=h",
    Gm_hb_hD_c: "_d",
    Gm_hb_hD_C: "_tp~a/eL/EE/Ef",
    Gm_he_hE_hf_c: "_g",
    Gm_he_hE_hf_C: "_tp~a/eL/EE/Ef/EF/CS?G=h",
    Gm_he_hE_hF_c: "_g",
    Gm_he_hE_hF_C: "_tp~a/eL/EE/Ef/EF?D=e&C=d&F=g&E=f&G=h",
    Gm_he_hE_hg_c: "_o",
    Gm_he_hE_hg_C: "_tp~a/eL/EE/Ef/EF/c?G=h",
    Gm_he_hE_hG_c: "_p",
    Gm_he_hE_hG_C: "_tp~a/eL/EE/Ef/EF/CS?G=h",
    Gm_he_hE_hh_c: "_d",
    Gm_he_hE_hh_C: "_tp~a/eL/EE/Ef/EF/CS",
    Gm_he_hH_hi_c: "_g",
    Gm_he_hH_hi_C: "_tp~a/eL/EE/Ef/Eg/CS?G=h",
    Gm_he_hH_hI_c: "_g",
    Gm_he_hH_hI_C: "_tp~a/eL/EE/Ef/Eg?D=e&C=d&F=g&E=f&G=h",
    Gm_he_hj_hJ_c: "_g",
    Gm_he_hj_hJ_C: "_tp~a/eL/EE/Ef/ef/eF/EF/EG?G=h",
    Gm_he_hj_hk_c: "_g",
    Gm_he_hj_hk_C: "_tp~a/eL/EE/Ef/ef/eF/EF?D=e&C=d&F=g&G=h",
    Gm_he_hj_hK_c: "_g",
    Gm_he_hj_hK_C: "_tp~a/eL/EE/Ef/ef/eF/Eg/EG?G=h",
    Gm_he_hj_hl_c: "_g",
    Gm_he_hj_hl_C: "_tp~a/eL/EE/Ef/ef/eF/Eg?D=e&C=d&F=g&G=h",
    Gm_he_hj_hL_c: "_g",
    Gm_he_hj_hL_C: "_tp~a/eL/EE/Ef/ef/eF?G=h",
    Gm_he_hj_hm_c: "_g",
    Gm_he_hj_hm_C: "_tp~a/eL/EE/Ef/ef?G=h",
    Gm_he_hj_hM_c: "_o",
    Gm_he_hj_hM_C: "_tp~a/eL/EE/Ef/ef/c?G=h",
    Gm_he_hj_hn_c: "_p",
    Gm_he_hj_hn_C: "_tp~a/eL/EE/Ef/ef/eF?G=h",
    Gm_he_hj_hN_c: "_d",
    Gm_he_hj_hN_C: "_tp~a/eL/EE/Ef/ef/eF",
    Gm_ho_hO_hp_c: "_o",
    Gm_ho_hO_hp_C: "_tp~a/eL/Eh/EH/c",
    Gm_hP_hq_c: "_g",
    Gm_hP_hq_C: "_tp~a/eL/dY/es?G=h",
    Gm_hP_hQ_c: "_p",
    Gm_hP_hQ_C: "_tp~a/eL/dY/es?G=h",
    Gm_hr_hR_c: "_g",
    Gm_hr_hR_C: "_hp~a/eL/Ei/EI/Ej?G=h",
    Gm_hr_hs_c: "_g",
    Gm_hr_hs_C: "_hp~a/eL/Ei/EJ?G=h",
    Gm_hr_hS_c: "_g",
    Gm_hr_hS_C: "_hp~a/eL/Ei/Ek/EK?G=h",
    Gm_hr_ht_c: "_g",
    Gm_hr_ht_C: "_hp~a/eL/Ei/Ek/Z/Aa?G=h",
    Gm_hr_hT_c: "_g",
    Gm_hr_hT_C: "_hp~a/eL/Ei/Ek/Z?G=h",
    Gm_hr_hu_c: "_g",
    Gm_hr_hu_C: "_hp~a/eL/Ei/Ek?El=EL&G=h",
    Gm_hr_hU_c: "_g",
    Gm_hr_hU_C: "_hp~a/eL/Ei/Em?G=h",
    Gm_hr_hv_c: "_g",
    Gm_hr_hv_C: "_hp~a/eL/Ei/EM?G=h",
    Gm_hr_hV_c: "_g",
    Gm_hr_hV_C: "_hp~a/eL/Ei/En?G=h",
    Gm_hr_hw_c: "_g",
    Gm_hr_hw_C: "_hp~a/eL/Ei/EN?G=h",
    Gm_hr_hW_c: "_g",
    Gm_hr_hW_C: "_hp~a/eL/Ei/Eo?G=h",
    Gm_hr_hx_c: "_g",
    Gm_hr_hx_C: "_hp~a/eL/Ei/EO?G=h",
    Gm_hr_hX_c: "_g",
    Gm_hr_hX_C: "_hp~a/eL/Ei/Ep?F=g&G=h",
    Gm_hy_hY_c: "_g",
    Gm_hy_hY_C: "_tp~a/eL/EP/Eq/EQ?G=h",
    Gm_hy_hz_c: "_o",
    Gm_hy_hz_C: "_tp~a/eL/EP/Eq/EQ",
    Gm_hy_hZ_c: "_p",
    Gm_hy_hZ_C: "_tp~a/eL/EP/Eq/EQ",
    Gm_hy_Ha_c: "_d",
    Gm_hy_Ha_C: "_tp~a/eL/EP/Eq/EQ",
    Gm_HA_hY_c: "_g",
    Gm_HA_hY_C: "_tp~a/eL/Er/EQ?G=h",
    Gm_HA_hz_c: "_o",
    Gm_HA_hz_C: "_tp~a/eL/Er/EQ",
    Gm_HA_hZ_c: "_p",
    Gm_HA_hZ_C: "_tp~a/eL/Er/EQ",
    Gm_HA_Ha_c: "_d",
    Gm_HA_Ha_C: "_tp~a/eL/Er/EQ",
    Gm_Hb_HB_c: "_g",
    Gm_Hb_HB_C: "_hp~a/eL/eM/eN?G=h",
    Gm_Hc_hY_c: "_g",
    Gm_Hc_hY_C: "_tp~a/eL/ER/EQ?G=h",
    Gm_Hc_hz_c: "_o",
    Gm_Hc_hz_C: "_tp~a/eL/ER/EQ",
    Gm_Hc_hZ_c: "_p",
    Gm_Hc_hZ_C: "_tp~a/eL/ER/EQ",
    Gm_Hc_Ha_c: "_d",
    Gm_Hc_Ha_C: "_tp~a/eL/ER/EQ",
    Gm_HC_Hd_c: "_g",
    Gm_HC_Hd_C: "_tp~a/eL/Eh/c?G=h",
    Gm_HC_HD_c: "_p",
    Gm_HC_HD_C: "_tp~a/eL/Eh/c?G=h",
    Gm_He_hY_c: "_g",
    Gm_He_hY_C: "_tp~a/eL/Es/EQ?G=h",
    Gm_He_hz_c: "_o",
    Gm_He_hz_C: "_tp~a/eL/Es/EQ",
    Gm_He_hZ_c: "_p",
    Gm_He_hZ_C: "_tp~a/eL/Es/EQ",
    Gm_He_Ha_c: "_d",
    Gm_He_Ha_C: "_tp~a/eL/Es/EQ"
  },
  reference: {
    a: "commerce",
    A: "admin",
    b: "location",
    B: "getLocations",
    c: "method",
    C: "url",
    d: "getLocation",
    D: "addLocation",
    e: "updateLocation",
    E: "deleteLocation",
    f: "locationType",
    F: "getLocationTypes",
    g: "getLocationType",
    G: "addLocationType",
    h: "updateLocationType",
    H: "deleteLocationType",
    i: "locations",
    I: "attributedefinition",
    j: "attribute",
    J: "getAttributes",
    k: "getAttributeVocabularyValues",
    K: "getAttribute",
    l: "createAttribute",
    L: "updateAttribute",
    m: "cart",
    M: "getCart",
    n: "getOrCreateCart",
    N: "getCartSummary",
    o: "getUserCartSummary",
    O: "getUserCart",
    p: "updateCart",
    P: "deleteCart",
    q: "deleteCurrentCart",
    Q: "carts",
    r: "appliedDiscount",
    R: "applyCoupon",
    s: "removeCoupons",
    S: "removeCoupon",
    t: "cartItem",
    T: "getCartItem",
    u: "getCartItems",
    U: "addItemToCart",
    v: "updateCartItemQuantity",
    V: "updateCartItem",
    w: "removeAllCartItems",
    W: "deleteCartItem",
    x: "changeMessage",
    X: "getMessages",
    y: "removeAllMessages",
    Y: "removeMessage",
    z: "extendedProperty",
    Z: "getExtendedProperties",
    Aa: "addExtendedProperties",
    AA: "updateExtendedProperty",
    Ab: "updateExtendedProperties",
    AB: "deleteExtendedProperties",
    Ac: "deleteExtendedProperty",
    AC: "catalog",
    Ad: "addAttribute",
    AD: "deleteAttribute",
    Ae: "attributes",
    AE: "attributeLocalizedContent",
    Af: "getAttributeLocalizedContents",
    AF: "getAttributeLocalizedContent",
    Ag: "addLocalizedContent",
    AG: "updateLocalizedContents",
    Ah: "updateLocalizedContent",
    AH: "deleteLocalizedContent",
    Ai: "attributeTypeRule",
    AI: "getAttributeTypeRules",
    Aj: "attributeVocabularyValue",
    AJ: "getAttributeVocabularyValueLocalizedContents",
    Ak: "getAttributeVocabularyValueLocalizedContent",
    AK: "getAttributeVocabularyValue",
    Al: "addAttributeVocabularyValueLocalizedContent",
    AL: "addAttributeVocabularyValue",
    Am: "updateAttributeVocabularyValues",
    AM: "updateAttributeVocabularyValueLocalizedContents",
    An: "updateAttributeVocabularyValueLocalizedContent",
    AN: "updateAttributeVocabularyValue",
    Ao: "deleteAttributeVocabularyValue",
    AO: "deleteAttributeVocabularyValueLocalizedContent",
    Ap: "productType",
    AP: "getProductTypes",
    Aq: "getProductType",
    AQ: "addProductType",
    Ar: "updateProductType",
    AR: "deleteProductType",
    As: "producttypes",
    AS: "productTypeExtra",
    At: "getExtras",
    AT: "getExtra",
    Au: "addExtra",
    AU: "updateExtra",
    Av: "deleteExtra",
    AV: "productTypeOption",
    Aw: "getOptions",
    AW: "getOption",
    Ax: "addOption",
    AX: "updateOption",
    Ay: "deleteOption",
    AY: "productTypeProperty",
    Az: "getProperties",
    AZ: "getProperty",
    ba: "addProperty",
    bA: "updateProperty",
    bb: "deleteProperty",
    bB: "category",
    bc: "getCategories",
    bC: "getChildCategories",
    bd: "getCategory",
    bD: "addCategory",
    be: "addProductsToCategory",
    bE: "removeProductsFromCategory",
    bf: "validateDynamicExpression",
    bF: "validateRealTimeDynamicExpression",
    bg: "updateCategory",
    bG: "deleteCategoryById",
    bh: "couponSet",
    bH: "getCouponSets",
    bi: "getCouponSet",
    bI: "getUniqueCouponSetCode",
    bj: "addCouponSet",
    bJ: "validateUniqueCouponSetCode",
    bk: "updateCouponSet",
    bK: "deleteCouponSet",
    bl: "couponsets",
    bL: "assignedDiscount",
    bm: "getAssignedDiscounts",
    bM: "assignDiscount",
    bn: "unAssignDiscount",
    bN: "coupon",
    bo: "getCoupon",
    bO: "getCoupons",
    bp: "addCoupons",
    bP: "deleteCoupons",
    bq: "deleteCoupon",
    bQ: "discount",
    br: "getDiscounts",
    bR: "getDiscountContent",
    bs: "getDiscount",
    bS: "generateRandomCoupon",
    bt: "createDiscount",
    bT: "updateDiscountContent",
    bu: "updateDiscount",
    bU: "deleteDiscount",
    bv: "discountSettings",
    bV: "getDiscountSettings",
    bw: "updateDiscountSettings",
    bW: "discounts",
    bx: "discountTarget",
    bX: "getDiscountTarget",
    by: "updateDiscountTarget",
    bY: "facet",
    bz: "getFacet",
    bZ: "getFacetCategoryList",
    Ba: "addFacet",
    BA: "updateFacet",
    Bb: "deleteFacetById",
    BB: "locationInventory",
    Bc: "getLocationInventory",
    BC: "getLocationInventories",
    Bd: "addLocationInventory",
    BD: "updateLocationInventory",
    Be: "deleteLocationInventory",
    BE: "masterCatalog",
    Bf: "getMasterCatalogs",
    BF: "getMasterCatalog",
    Bg: "updateMasterCatalog",
    BG: "priceList",
    Bh: "getPriceLists",
    BH: "getPriceList",
    Bi: "addPriceList",
    BI: "bulkAddPriceListEntries",
    Bj: "bulkDeletePriceListEntries",
    BJ: "bulkUpdatePriceListEntries",
    Bk: "updatePriceList",
    BK: "deletePriceList",
    Bl: "pricelists",
    BL: "priceListEntry",
    Bm: "getPriceListEntry",
    BM: "getPriceListEntries",
    Bn: "addPriceListEntry",
    BN: "updatePriceListEntry",
    Bo: "deletePriceListEntry",
    BO: "product",
    Bp: "getProducts",
    BP: "getProductInCatalogs",
    Bq: "getProductInCatalog",
    BQ: "getProduct",
    Br: "addProduct",
    BR: "addProductInCatalog",
    Bs: "renameProductCodes",
    BS: "updateProductInCatalogs",
    Bt: "updateProductInCatalog",
    BT: "updateProduct",
    Bu: "deleteProduct",
    BU: "deleteProductInCatalog",
    Bv: "productReservation",
    BV: "getProductReservations",
    Bw: "getProductReservation",
    BW: "addProductReservations",
    Bx: "commitReservations",
    BX: "updateProductReservations",
    By: "deleteProductReservation",
    BY: "productSortDefinition",
    Bz: "getProductSortDefinitions",
    BZ: "getProductSortDefinition",
    ca: "addProductSortDefinition",
    cA: "updateProductSortDefinition",
    cb: "deleteProductSortDefinition",
    cB: "products",
    cc: "productExtra",
    cC: "getExtraValueLocalizedDeltaPrices",
    cd: "getExtraValueLocalizedDeltaPrice",
    cD: "addExtraValueLocalizedDeltaPrice",
    ce: "updateExtraValueLocalizedDeltaPrices",
    cE: "updateExtraValueLocalizedDeltaPrice",
    cf: "deleteExtraValueLocalizedDeltaPrice",
    cF: "productOption",
    cg: "productProperty",
    cG: "getPropertyValueLocalizedContents",
    ch: "getPropertyValueLocalizedContent",
    cH: "addPropertyValueLocalizedContent",
    ci: "updatePropertyValueLocalizedContents",
    cI: "updatePropertyValueLocalizedContent",
    cj: "deletePropertyValueLocalizedContent",
    cJ: "publishingScope",
    ck: "getPublishSet",
    cK: "getPublishSets",
    cl: "discardDrafts",
    cL: "publishDrafts",
    cm: "assignProductsToPublishSet",
    cM: "deletePublishSet",
    cn: "search",
    cN: "getSearchTuningRule",
    co: "getSearchTuningRules",
    cO: "getSearchTuningRuleSortFields",
    cp: "getSettings",
    cP: "getSynonymDefinitionCollection",
    cq: "getSynonymDefinitions",
    cQ: "getSynonymDefinition",
    cr: "addSearchTuningRule",
    cR: "updateSearchTuningRuleSortFields",
    cs: "updateSynonymDefinitionCollection",
    cS: "addSynonymDefinition",
    ct: "updateSearchTuningRule",
    cT: "updateSettings",
    cu: "updateSynonymDefinition",
    cU: "deleteSearchTuningRule",
    cv: "deleteSynonymDefinition",
    cV: "softAllocation",
    cw: "getSoftAllocations",
    cW: "getSoftAllocation",
    cx: "addSoftAllocations",
    cX: "convertToProductReservation",
    cy: "renewSoftAllocations",
    cY: "updateSoftAllocations",
    cz: "deleteSoftAllocation",
    cZ: "storefront",
    Ca: "getCategoryTree",
    CA: "orderTaxContext",
    Cb: "estimateTaxes",
    CB: "getResolvedPriceList",
    Cc: "productSearchResult",
    CC: "getRandomAccessCursor",
    Cd: "suggest",
    CD: "shipping",
    Ce: "getMultiRates",
    CE: "getRates",
    Cf: "channel",
    CF: "getChannels",
    Cg: "getChannel",
    CG: "createChannel",
    Ch: "updateChannel",
    CH: "deleteChannel",
    Ci: "channelGroup",
    CI: "getChannelGroups",
    Cj: "getChannelGroup",
    CJ: "createChannelGroup",
    Ck: "updateChannelGroup",
    CK: "deleteChannelGroup",
    Cl: "checkout",
    CL: "getCheckouts",
    Cm: "getAvailableActions",
    CM: "getAvailableShippingMethods",
    Cn: "getCheckout",
    CN: "createCheckoutFromCart",
    Co: "performCheckoutAction",
    CO: "resendCheckoutConfirmationEmail",
    Cp: "setShippingMethods",
    CP: "updateCheckout",
    Cq: "processDigitalWallet",
    CQ: "changeCheckoutPriceList",
    Cr: "checkouts",
    CR: "destination",
    Cs: "getDestinations",
    CS: "getDestination",
    Ct: "addDestination",
    CT: "updateDestination",
    Cu: "removeDestination",
    CU: "orderAttribute",
    Cv: "getCheckoutAttributes",
    CV: "createCheckoutAttributes",
    Cw: "updateCheckoutAttribute",
    CW: "orderItem",
    Cx: "splitItem",
    CX: "bulkUpdateItemDestinations",
    Cy: "updateItemDestination",
    CY: "orderNote",
    Cz: "getCheckoutNotes",
    CZ: "getCheckoutNote",
    da: "createCheckoutNote",
    dA: "updateCheckoutNote",
    db: "deleteCheckoutNote",
    dB: "payment",
    dc: "performPaymentAction",
    dC: "createPaymentAction",
    dd: "customer",
    dD: "accounts",
    de: "card",
    dE: "getAccountCard",
    df: "getAccountCards",
    dF: "addAccountCard",
    dg: "updateAccountCard",
    dG: "deleteAccountCard",
    dh: "customerAttribute",
    dH: "getAccountAttribute",
    di: "getAccountAttributes",
    dI: "addAccountAttribute",
    dj: "updateAccountAttribute",
    dJ: "deleteAccountAttribute",
    dk: "customerAuditEntry",
    dK: "getAccountAuditLog",
    dl: "customerContact",
    dL: "getAccountContact",
    dm: "getAccountContacts",
    dM: "addAccountContact",
    dn: "updateAccountContact",
    dN: "addAccountContactList",
    do: "deleteAccountContact",
    dO: "customerNote",
    dp: "getAccountNote",
    dP: "getAccountNotes",
    dq: "addAccountNote",
    dQ: "updateAccountNote",
    dr: "deleteAccountNote",
    dR: "customerPurchaseOrderAccount",
    ds: "getCustomerPurchaseOrderAccount",
    dS: "getCustomerPurchaseOrderTransactions",
    dt: "createCustomerPurchaseOrderAccount",
    dT: "createPurchaseOrderTransaction",
    du: "updateCustomerPurchaseOrderAccount",
    dU: "deleteCustomerPurchaseOrderAccount",
    dv: "customerSegment",
    dV: "getAccountSegments",
    dw: "transaction",
    dW: "getTransactions",
    dx: "addTransaction",
    dX: "removeTransaction",
    dy: "addressValidationRequest",
    dY: "validateAddress",
    dz: "credit",
    dZ: "getCredits",
    Da: "getCredit",
    DA: "addCredit",
    Db: "associateCreditToShopper",
    DB: "resendCreditCreatedEmail",
    Dc: "updateCredit",
    DC: "deleteCredit",
    Dd: "credits",
    DD: "creditAuditEntry",
    De: "getAuditEntries",
    DE: "creditTransaction",
    Df: "customerAccount",
    DF: "getAccounts",
    Dg: "getLoginState",
    DG: "getAccount",
    Dh: "addAccount",
    DH: "changePassword",
    Di: "addLoginToExistingCustomer",
    DI: "recomputeCustomerLifetimeValue",
    Dj: "setLoginLocked",
    DJ: "setPasswordChangeRequired",
    Dk: "addAccountAndLogin",
    DK: "addAccounts",
    Dl: "changePasswords",
    DL: "getLoginStateByEmailAddress",
    Dm: "getLoginStateByUserName",
    DM: "getCustomersPurchaseOrderAccounts",
    Dn: "resetPassword",
    DN: "updateAccount",
    Do: "deleteAccount",
    DO: "customerAuthTicket",
    Dp: "createAnonymousShopperAuthTicket",
    DP: "createUserAuthTicket",
    Dq: "refreshUserAuthTicket",
    DQ: "getSegments",
    Dr: "getSegment",
    DR: "addSegment",
    Ds: "addSegmentAccounts",
    DS: "updateSegment",
    Dt: "deleteSegment",
    DT: "removeSegmentAccount",
    Du: "customerSet",
    DU: "getCustomerSets",
    Dv: "getCustomerSet",
    DV: "visit",
    Dw: "getVisits",
    DW: "getVisit",
    Dx: "addVisit",
    DX: "updateVisit",
    Dy: "inStockNotificationSubscription",
    DY: "getInStockNotificationSubscriptions",
    Dz: "getInStockNotificationSubscription",
    DZ: "addInStockNotificationSubscription",
    ea: "deleteInStockNotificationSubscription",
    eA: "getLocationsInUsageType",
    eb: "getDirectShipLocation",
    eB: "getInStorePickupLocation",
    ec: "getInStorePickupLocations",
    eC: "order",
    ed: "getOrders",
    eD: "getTaxableOrders",
    ee: "getOrder",
    eE: "createOrderFromCart",
    ef: "createOrder",
    eF: "performOrderAction",
    eg: "priceOrder",
    eG: "updateOrderDiscount",
    eh: "deleteOrderDraft",
    eH: "resendOrderConfirmationEmail",
    ei: "changeOrderPriceList",
    eI: "changeOrderUserId",
    ej: "updateOrder",
    eJ: "orders",
    ek: "adjustment",
    eK: "applyHandlingAdjustment",
    el: "applyShippingAdjustment",
    eL: "applyAdjustment",
    em: "removeHandlingAdjustment",
    eM: "removeShippingAdjustment",
    en: "removeAdjustment",
    eN: "billingInfo",
    eo: "getBillingInfo",
    eO: "setBillingInfo",
    ep: "digitalPackage",
    eP: "getAvailableDigitalPackageFulfillmentActions",
    eq: "getDigitalPackage",
    eQ: "createDigitalPackage",
    er: "updateDigitalPackage",
    eR: "deleteDigitalPackage",
    es: "fulfillmentAction",
    eS: "performFulfillmentAction",
    et: "resendPackageFulfillmentEmail",
    eT: "fulfillmentInfo",
    eu: "getFulfillmentInfo",
    eU: "setFulFillmentInfo",
    ev: "getOrderAttributes",
    eV: "createOrderAttributes",
    ew: "updateOrderAttributes",
    eW: "getOrderItemViaLineId",
    ex: "getOrderItem",
    eX: "getOrderItems",
    ey: "createOrderItem",
    eY: "updateOrderItemDiscount",
    ez: "updateItemDuty",
    eZ: "updateItemFulfillment",
    Ea: "updateItemProductPrice",
    EA: "updateItemQuantity",
    Eb: "deleteOrderItem",
    EB: "getOrderNotes",
    Ec: "getOrderNote",
    EC: "createOrderNote",
    Ed: "updateOrderNote",
    ED: "deleteOrderNote",
    Ee: "orderReturnableItem",
    EE: "getOrderReturnableItems",
    Ef: "orderValidationResult",
    EF: "getValidationResults",
    Eg: "addValidationResult",
    EG: "package",
    Eh: "getAvailablePackageFulfillmentActions",
    EH: "getPackageLabel",
    Ei: "getPackage",
    EI: "createPackage",
    Ej: "updatePackage",
    EJ: "deletePackage",
    Ek: "getPayments",
    EK: "getAvailablePaymentActions",
    El: "getPayment",
    EL: "pickup",
    Em: "getAvailablePickupFulfillmentActions",
    EM: "getPickup",
    En: "createPickup",
    EN: "updatePickup",
    Eo: "deletePickup",
    EO: "refund",
    Ep: "createRefund",
    EP: "resendRefundEmail",
    Eq: "shipment",
    EQ: "getShipment",
    Er: "getAvailableShipmentMethods",
    ER: "createPackageShipments",
    Es: "deleteShipment",
    ES: "payments",
    Et: "fraudScreen",
    ET: "screen",
    Eu: "fraudScreenResponse",
    EU: "publicCard",
    Ev: "create",
    EV: "getGiftCardBalance",
    Ew: "getUnregisteredGiftCardBalance",
    EW: "update",
    Ex: "delete",
    EX: "publicToken",
    Ey: "execute",
    EY: "return",
    Ez: "getReturns",
    EZ: "getAvailableReturnActions",
    fa: "getReturnItem",
    fA: "getReturnItems",
    fb: "getAvailablePaymentActionsForReturn",
    fB: "getReturn",
    fc: "getReasons",
    fC: "createReturn",
    fd: "createReturnItem",
    fD: "performPaymentActionForReturn",
    fe: "createPaymentActionForReturn",
    fE: "createReturnShippingOrder",
    ff: "performReturnActions",
    fF: "updateReturn",
    fg: "resendReturnEmail",
    fG: "deleteReturn",
    fh: "returns",
    fH: "getReturnNotes",
    fi: "getReturnNote",
    fI: "createReturnNote",
    fj: "updateReturnNote",
    fJ: "deleteReturnNote",
    fk: "settings",
    fK: "application",
    fl: "thirdPartyGetApplication",
    fL: "thirdPartyUpdateApplication",
    fm: "cartSettings",
    fM: "getCartSettings",
    fn: "createCartSettings",
    fN: "updateCartSettings",
    fo: "customerCheckoutSettings",
    fO: "getCustomerCheckoutSettings",
    fp: "updateCustomerCheckoutSettings",
    fP: "orderProcessingSettings",
    fq: "getOrderProcessingSettings",
    fQ: "paymentSettings",
    fr: "getThirdPartyPaymentWorkflowWithValues",
    fR: "getThirdPartyPaymentWorkflows",
    fs: "addThirdPartyPaymentWorkflow",
    fS: "deleteThirdPartyPaymentWorkflow",
    ft: "checkoutSettings",
    fT: "getCheckoutSettings",
    fu: "general",
    fU: "customRouteSettings",
    fv: "getCustomRouteSettings",
    fV: "createCustomRouteSettings",
    fw: "updateCustomRouteSettings",
    fW: "deleteCustomRouteSettings",
    fx: "taxableTerritory",
    fX: "getTaxableTerritories",
    fy: "addTaxableTerritory",
    fY: "updateTaxableTerritories",
    fz: "generalSettings",
    fZ: "getGeneralSettings",
    Fa: "updateGeneralSettings",
    FA: "locationUsage",
    Fb: "getLocationUsages",
    FB: "getLocationUsage",
    Fc: "updateLocationUsage",
    FC: "siteShippingHandlingFee",
    Fd: "getOrderHandlingFee",
    FD: "createOrderHandlingFee",
    Fe: "updateOrderHandlingFee",
    FE: "siteShippingSettings",
    Ff: "getSiteShippingSettings",
    FF: "carrierConfiguration",
    Fg: "getConfigurations",
    FG: "getConfiguration",
    Fh: "createConfiguration",
    FH: "updateConfiguration",
    Fi: "deleteConfiguration",
    FI: "profiles",
    Fj: "handlingFeeRule",
    FJ: "getProductHandlingFeeRule",
    Fk: "getProductHandlingFeeRules",
    FK: "createProductHandlingFeeRule",
    Fl: "updateProductHandlingFeeRule",
    FL: "deleteProductHandlingFeeRule",
    Fm: "orderHandlingFeeRules",
    FM: "getOrderHandlingFeeRule",
    Fn: "getOrderHandlingFeeRules",
    FN: "createOrderHandlingFeeRule",
    Fo: "updateOrderHandlingFeeRule",
    FO: "deleteOrderHandlingFeeRule",
    Fp: "productHandlingFeeRules",
    FP: "shippingInclusionRule",
    Fq: "getShippingInclusionRule",
    FQ: "getShippingInclusionRules",
    Fr: "createShippingInclusionRule",
    FR: "updateShippingInclusionRule",
    Fs: "deleteShippingInclusionRule",
    FS: "shippingStates",
    Ft: "getStates",
    FT: "updateStates",
    Fu: "shippingProfile",
    FU: "getProfiles",
    Fv: "targetRule",
    FV: "getTargetRules",
    Fw: "getTargetRule",
    FW: "createTargetRule",
    Fx: "validateTargetRule",
    FX: "updateTargetRule",
    Fy: "deleteTargetRule",
    FY: "wishlist",
    Fz: "getWishlists",
    FZ: "getWishlist",
    ga: "getWishlistByName",
    gA: "createWishlist",
    gb: "updateWishlist",
    gB: "deleteWishlist",
    gc: "wishlists",
    gC: "wishlistItem",
    gd: "getWishlistItem",
    gD: "getWishlistItems",
    ge: "getWishlistItemsByWishlistName",
    gE: "addItemToWishlist",
    gf: "updateWishlistItemQuantity",
    gF: "updateWishlistItem",
    gg: "removeAllWishlistItems",
    gG: "deleteWishlistItem",
    gh: "content",
    gH: "documentDraftSummary",
    gi: "listDocumentDraftSummaries",
    gI: "deleteDocumentDrafts",
    gj: "publishDocuments",
    gJ: "documentList",
    gk: "getDocumentLists",
    gK: "getDocumentList",
    gl: "createDocumentList",
    gL: "updateDocumentList",
    gm: "deleteDocumentList",
    gM: "documentListType",
    gn: "getDocumentListTypes",
    gN: "getDocumentListType",
    go: "createDocumentListType",
    gO: "updateDocumentListType",
    gp: "documentType",
    gP: "getDocumentTypes",
    gq: "getDocumentType",
    gQ: "createDocumentType",
    gr: "updateDocumentType",
    gR: "documentlists",
    gs: "document",
    gS: "getDocumentContent",
    gt: "transformDocumentContent",
    gT: "getDocument",
    gu: "getDocuments",
    gU: "createDocument",
    gv: "updateDocumentContent",
    gV: "updateDocument",
    gw: "patchDocument",
    gW: "deleteDocument",
    gx: "deleteDocumentContent",
    gX: "documentTree",
    gy: "getTreeDocumentContent",
    gY: "transformTreeDocumentContent",
    gz: "getTreeDocument",
    gZ: "updateTreeDocumentContent",
    Ga: "deleteTreeDocumentContent",
    GA: "getFacets",
    Gb: "view",
    GB: "getViewDocuments",
    Gc: "propertyType",
    GC: "getPropertyTypes",
    Gd: "getPropertyType",
    GD: "createPropertyType",
    Ge: "updatePropertyType",
    GE: "deletePropertyType",
    Gf: "publishSetSummary",
    GF: "getPublishSetItems",
    Gg: "addPublishSetItems",
    GG: "event",
    Gh: "eventNotification",
    GH: "getEvents",
    Gi: "getEvent",
    GI: "push",
    Gj: "subscription",
    GJ: "getSubscriptions",
    Gk: "subscriptions",
    GK: "eventDeliverySummary",
    Gl: "getDeliveryAttemptSummary",
    GL: "getDeliveryAttemptSummaries",
    Gm: "platform",
    GM: "adminuser",
    Gn: "tenantAdminUserAuthTicket",
    GN: "refreshAuthTicket",
    Go: "deleteUserAuthTicket",
    GO: "appdev",
    Gp: "appPackage",
    GP: "getAllPackages",
    Gq: "getPackages",
    GQ: "getApplicationSummaryChildren",
    Gr: "getApplicationSummaryParents",
    GR: "clonePackage",
    Gs: "createNewCorePackage",
    GS: "getFile",
    Gt: "getAppPackageNames",
    GT: "getAppVersions",
    Gu: "getPackageFileMetadata",
    GU: "getPackageMetadata",
    Gv: "upsertPackageFile",
    GV: "renamePackageFile",
    Gw: "deletePackageFile",
    GW: "applications",
    Gx: "authTicket",
    GX: "authenticateApp",
    Gy: "refreshAppAuthTicket",
    GY: "deleteAppAuthTicket",
    Gz: "developer",
    GZ: "developerAdminUserAuthTicket",
    ha: "createDeveloperUserAuthTicket",
    hA: "refreshDeveloperAuthTicket",
    hb: "entityList",
    hB: "getEntityLists",
    hc: "getEntityList",
    hC: "createEntityList",
    hd: "updateEntityList",
    hD: "deleteEntityList",
    he: "entitylists",
    hE: "entity",
    hf: "getEntity",
    hF: "getEntities",
    hg: "insertEntity",
    hG: "updateEntity",
    hh: "deleteEntity",
    hH: "entityContainer",
    hi: "getEntityContainer",
    hI: "getEntityContainers",
    hj: "listView",
    hJ: "getViewEntity",
    hk: "getViewEntities",
    hK: "getViewEntityContainer",
    hl: "getViewEntityContainers",
    hL: "getEntityListView",
    hm: "getEntityListViews",
    hM: "createEntityListView",
    hn: "updateEntityListView",
    hN: "deleteEntityListView",
    ho: "extensions",
    hO: "credentialStoreEntry",
    hp: "storeCredentials",
    hP: "installedApplications",
    hq: "getApplication",
    hQ: "updateApplication",
    hr: "referenceData",
    hR: "getAddressSchema",
    hs: "getAddressSchemas",
    hS: "getBehavior",
    ht: "getBehaviorCategory",
    hT: "getBehaviorCategories",
    hu: "getBehaviors",
    hU: "getContentLocales",
    hv: "getCountries",
    hV: "getCountriesWithStates",
    hw: "getCurrencies",
    hW: "getTimeZones",
    hx: "getTopLevelDomains",
    hX: "getUnitsOfMeasure",
    hy: "secureAppData",
    hY: "getDBValue",
    hz: "createDBValue",
    hZ: "updateDBValue",
    Ha: "deleteDBValue",
    HA: "siteData",
    Hb: "tenant",
    HB: "getTenant",
    Hc: "tenantData",
    HC: "tenantExtensions",
    Hd: "getExtensions",
    HD: "updateExtensions",
    He: "userData",
    template: {
      a: "api",
      A: "commerce",
      b: "admin",
      B: "locations",
      c: "",
      C: "startIndex",
      d: "{startIndex}",
      D: "pageSize",
      e: "{pageSize}",
      E: "sortBy",
      f: "{sortBy}",
      F: "filter",
      g: "{filter}",
      G: "responseFields",
      h: "{responseFields}",
      H: "{locationCode}",
      i: "locationtypes",
      I: "{locationTypeCode}",
      j: "attributedefinition",
      J: "attributes",
      k: "{attributeFQN}",
      K: "VocabularyValues",
      l: "carts",
      L: "{cartId}",
      m: "current",
      M: "summary",
      n: "user",
      N: "{userId}",
      o: "coupons",
      O: "{couponCode}",
      p: "{couponcode}",
      P: "items",
      q: "{cartItemId}",
      Q: "{quantity}",
      r: "messages",
      R: "{messageId}",
      s: "extendedproperties",
      S: "{key}",
      t: "upsert",
      T: "{upsert}",
      u: "catalog",
      U: "LocalizedContent",
      v: "{localeCode}",
      V: "typerules",
      w: "{value}",
      W: "localizedContent",
      x: "producttypes",
      X: "{productTypeId}",
      y: "Extras",
      Y: "Options",
      z: "Properties",
      Z: "categories",
      Aa: "{categoryId}",
      AA: "children",
      Ab: "incrementSequence",
      AB: "{incrementSequence}",
      Ac: "useProvidedId",
      AC: "{useProvidedId}",
      Ad: "add-products",
      AD: "remove-products",
      Ae: "ValidateDynamicExpression",
      AE: "ValidateRealTimeDynamicExpression",
      Af: "cascadeVisibility",
      AF: "{cascadeVisibility}",
      Ag: "cascadeDelete",
      AG: "{cascadeDelete}",
      Ah: "forceDelete",
      AH: "{forceDelete}",
      Ai: "reassignToParent",
      AI: "{reassignToParent}",
      Aj: "couponsets",
      AJ: "includeCounts",
      Ak: "{includeCounts}",
      AK: "{couponSetCode}",
      Al: "unique-code",
      AL: "validate-unique-code",
      Am: "assigneddiscounts",
      AM: "{discountId}",
      An: "couponcodes",
      AN: "remove",
      Ao: "discounts",
      AO: "content",
      Ap: "generate-random-coupon",
      AP: "discountsettings",
      Aq: "{catalogId}",
      AQ: "target",
      Ar: "facets",
      AR: "{facetId}",
      As: "validate",
      AS: "{validate}",
      At: "category",
      AT: "includeAvailable",
      Au: "{includeAvailable}",
      AU: "locationinventory",
      Av: "{productCode}",
      AV: "filterFunctions",
      Aw: "{filterFunctions}",
      AW: "performUpserts",
      Ax: "{performUpserts}",
      AX: "mastercatalogs",
      Ay: "{masterCatalogId}",
      AY: "pricelists",
      Az: "{priceListCode}",
      AZ: "bulkaddentries",
      ba: "publishEvents",
      bA: "{publishEvents}",
      bb: "invalidateCache",
      bB: "{invalidateCache}",
      bc: "bulkdeleteentries",
      bC: "bulkupdateentries",
      bd: "cascadeDeleteEntries",
      bD: "{cascadeDeleteEntries}",
      be: "entries",
      bE: "{currencyCode}",
      bf: "startDate",
      bF: "{startDate}",
      bg: "products",
      bG: "q",
      bh: "{q}",
      bH: "qLimit",
      bi: "{qLimit}",
      bI: "noCount",
      bj: "{noCount}",
      bJ: "ProductInCatalogs",
      bk: "Actions",
      bK: "RenameProductCodes",
      bl: "productreservations",
      bL: "{productReservationId}",
      bm: "skipInventoryCheck",
      bM: "{skipInventoryCheck}",
      bn: "commit",
      bN: "productsortdefinitions",
      bo: "{productSortDefinitionId}",
      bO: "{ProductCode}",
      bp: "LocationInventory",
      bP: "{LocationCode}",
      bq: "Values",
      bQ: "localizedDeltaPrice",
      br: "values",
      bR: "publishing",
      bs: "publishsets",
      bS: "{publishSetCode}",
      bt: "discarddrafts",
      bT: "publishdrafts",
      bu: "discardDrafts",
      bU: "{discardDrafts}",
      bv: "search",
      bV: "searchtuningrules",
      bw: "{searchTuningRuleCode}",
      bW: "searchtuningrulesortfields",
      bx: "settings",
      bX: "synonym-definitions",
      by: "synonyms",
      bY: "{synonymId}",
      bz: "softallocations",
      bZ: "{softAllocationId}",
      Ba: "convert",
      BA: "renew",
      Bb: "storefront",
      BB: "allowInactive",
      Bc: "{allowInactive}",
      BC: "tree",
      Bd: "tax",
      BD: "estimate-order",
      Be: "resolved",
      BE: "customerAccountId",
      Bf: "{customerAccountId}",
      BF: "productsearch",
      Bg: "randomAccessCursor",
      BG: "query",
      Bh: "{query}",
      BH: "facetTemplate",
      Bi: "{facetTemplate}",
      BI: "facetTemplateSubset",
      Bj: "{facetTemplateSubset}",
      BJ: "facet",
      Bk: "{facet}",
      BK: "facetFieldRangeQuery",
      Bl: "{facetFieldRangeQuery}",
      BL: "facetHierPrefix",
      Bm: "{facetHierPrefix}",
      BM: "facetHierValue",
      Bn: "{facetHierValue}",
      BN: "facetHierDepth",
      Bo: "{facetHierDepth}",
      BO: "facetStartIndex",
      Bp: "{facetStartIndex}",
      BP: "facetPageSize",
      Bq: "{facetPageSize}",
      BQ: "facetSettings",
      Br: "{facetSettings}",
      BR: "facetValueFilter",
      Bs: "{facetValueFilter}",
      BS: "searchSettings",
      Bt: "{searchSettings}",
      BT: "enableSearchTuningRules",
      Bu: "{enableSearchTuningRules}",
      BU: "searchTuningRuleContext",
      Bv: "{searchTuningRuleContext}",
      BV: "searchTuningRuleCode",
      Bw: "facetTemplateExclude",
      BW: "{facetTemplateExclude}",
      Bx: "facetPrefix",
      BX: "{facetPrefix}",
      By: "responseOptions",
      BY: "{responseOptions}",
      Bz: "cursorMark",
      BZ: "{cursorMark}",
      ca: "facetValueSort",
      cA: "{facetValueSort}",
      cb: "defaultSort",
      cB: "{defaultSort}",
      cc: "sortDefinitionName",
      cC: "{sortDefinitionName}",
      cd: "defaultSortDefinitionName",
      cD: "{defaultSortDefinitionName}",
      ce: "suggest",
      cE: "groups",
      cf: "{groups}",
      cF: "shipping",
      cg: "request-multi-rates",
      cG: "request-rates",
      ch: "channels",
      cH: "{code}",
      ci: "channelgroups",
      cI: "checkouts",
      cj: "{checkoutId}",
      cJ: "actions",
      ck: "shippingMethods",
      cK: "cartId",
      cl: "email",
      cL: "resend",
      cm: "digitalWallet",
      cM: "{digitalWalletType}",
      cn: "priceList",
      cN: "destinations",
      co: "{destinationId}",
      cO: "removeMissing",
      cp: "{removeMissing}",
      cP: "{itemId}",
      cq: "split",
      cQ: "quantity",
      cr: "destination",
      cR: "notes",
      cs: "{noteId}",
      cS: "payments",
      ct: "{paymentId}",
      cT: "customer",
      cu: "accounts",
      cU: "{accountId}",
      cv: "cards",
      cV: "{cardId}",
      cw: "AuditLog",
      cW: "Entries",
      cx: "contacts",
      cX: "{contactId}",
      cy: "purchaseOrderAccount",
      cY: "PurchaseOrderTransaction",
      cz: "internal",
      cZ: "segments",
      Ca: "transactions",
      CA: "{transactionId}",
      Cb: "addressvalidation",
      CB: "credits",
      Cc: "associate-to-shopper",
      CC: "Resend-Email",
      Cd: "auditentries",
      CD: "fields",
      Ce: "{fields}",
      CE: "isAnonymous",
      Cf: "{isAnonymous}",
      CF: "loginstate",
      Cg: "Change-Password",
      CG: "unlockAccount",
      Ch: "{unlockAccount}",
      CH: "Create-Login",
      Ci: "recomputelifetimevalue",
      CI: "Set-Login-Locked",
      Cj: "Set-Password-Change-Required",
      CJ: "Add-Account-And-Login",
      Ck: "Bulk",
      CK: "Change-Passwords",
      Cl: "loginstatebyemailaddress",
      CL: "emailAddress",
      Cm: "{emailAddress}",
      CM: "loginstatebyusername",
      Cn: "userName",
      CN: "{userName}",
      Co: "customerSetCode",
      CO: "{customerSetCode}",
      Cp: "purchaseOrderAccounts",
      CP: "Reset-Password",
      Cq: "authtickets",
      CQ: "anonymousshopper",
      Cr: "refresh",
      CR: "refreshToken",
      Cs: "{refreshToken}",
      CS: "{id}",
      Ct: "customerSets",
      CT: "visits",
      Cu: "{visitId}",
      CU: "instocknotifications",
      Cv: "includeAttributeDefinition",
      CV: "{includeAttributeDefinition}",
      Cw: "locationUsageTypes",
      CW: "{locationUsageType}",
      Cx: "DS",
      CX: "location",
      Cy: "SP",
      CY: "orders",
      Cz: "includeBin",
      CZ: "{includeBin}",
      da: "{orderId}",
      dA: "taxableorders",
      db: "draft",
      dB: "{draft}",
      dc: "price",
      dC: "refreshShipping",
      dd: "{refreshShipping}",
      dD: "updatemode",
      de: "{updateMode}",
      dE: "version",
      df: "{version}",
      dF: "users",
      dg: "adjustment",
      dG: "handling",
      dh: "billinginfo",
      dH: "digitalpackages",
      di: "{digitalPackageId}",
      dI: "fulfillment",
      dj: "fulfillmentinfo",
      dJ: "{lineId}",
      dk: "{orderItemId}",
      dK: "dutyAmount",
      dl: "{dutyAmount}",
      dL: "{price}",
      dm: "returnableitems",
      dM: "validationresults",
      dn: "packages",
      dN: "{packageId}",
      do: "label",
      dO: "pickups",
      dp: "{pickupId}",
      dP: "refunds",
      dq: "{refundId}",
      dQ: "shipments",
      dr: "{shipmentId}",
      dR: "methods",
      ds: "fraudscreen",
      dS: "screen",
      dt: "balance",
      dT: "tokens",
      du: "{cardType}",
      dU: "execute",
      dv: "returns",
      dV: "{returnId}",
      dw: "{returnItemId}",
      dW: "reasons",
      dx: "ship",
      dX: "returnAsBase64Png",
      dy: "{returnAsBase64Png}",
      dY: "applications",
      dz: "cart",
      dZ: "cartsettings",
      Da: "checkout",
      DA: "customercheckoutsettings",
      Db: "orderprocessingsettings",
      DB: "paymentsettings",
      Dc: "thirdpartyworkflow",
      DC: "{fullyQualifiedName}",
      Dd: "thirdpartyworkflows",
      DD: "general",
      De: "customroutes",
      DE: "taxableterritories",
      Df: "locationUsages",
      DF: "orderhandlingfee",
      Dg: "carriers",
      DG: "{carrierId}",
      Dh: "profiles",
      DH: "{profilecode}",
      Di: "rules",
      DI: "producthandlingfees",
      Dj: "orderhandlingfees",
      DJ: "shippinginclusions",
      Dk: "shippingstates",
      DK: "targetrules",
      Dl: "wishlists",
      DL: "{wishlistId}",
      Dm: "customers",
      DM: "{wishlistName}",
      Dn: "{wishlistItemId}",
      DN: "documentpublishing",
      Do: "documentLists",
      DO: "{documentLists}",
      Dp: "active",
      DP: "documentlists",
      Dq: "{documentListName}",
      DQ: "documentlistTypes",
      Dr: "{documentListTypeFQN}",
      DR: "documenttypes",
      Ds: "{documentTypeName}",
      DS: "documents",
      Dt: "{documentId}",
      DT: "transform",
      Du: "width",
      DU: "{width}",
      Dv: "height",
      DV: "{height}",
      Dw: "maxWidth",
      DW: "{maxWidth}",
      Dx: "maxHeight",
      DX: "{maxHeight}",
      Dy: "crop",
      DY: "{crop}",
      Dz: "quality",
      DZ: "{quality}",
      ea: "includeInactive",
      eA: "{includeInactive}",
      eb: "PATCH",
      eB: "documentTree",
      ec: "{documentName}",
      eC: "folderPath",
      ed: "{folderPath}",
      eD: "folderId",
      ee: "{folderId}",
      eE: "{propertyName}",
      ef: "views",
      eF: "{viewName}",
      eg: "propertytypes",
      eG: "{propertyTypeName}",
      eh: "shouldDiscard",
      eH: "{shouldDiscard}",
      ei: "event",
      eI: "pull",
      ej: "{eventId}",
      eJ: "push",
      ek: "subscriptions",
      eK: "{subscriptionId}",
      el: "deliveryattempts",
      eL: "platform",
      em: "adminuser",
      eM: "tenants",
      en: "tenantId",
      eN: "{tenantId}",
      eo: "appdev",
      eO: "apppackages",
      ep: "{applicationKey}",
      eP: "includeChildren",
      eq: "{includeChildren}",
      eQ: "skipDevAccountCheck",
      er: "{skipDevAccountCheck}",
      eR: "apps",
      es: "{appId}",
      eS: "collection",
      et: "clone",
      eT: "{packageName}",
      eu: "create",
      eU: "project",
      ev: "projectId",
      eV: "{projectId}",
      ew: "filebasedpackage",
      eW: "fileName",
      ex: "{fileName}",
      eX: "developer",
      ey: "packagenames",
      eY: "versions",
      ez: "{nsAndAppId}",
      eZ: "filemetadata",
      Ea: "{filepath}",
      EA: "metadata",
      Eb: "files",
      EB: "lastModifiedTime",
      Ec: "{lastModifiedTime}",
      EC: "files_rename",
      Ed: "refresh-ticket",
      ED: "developerAccountId",
      Ee: "{developerAccountId}",
      EE: "entitylists",
      Ef: "{entityListFullName}",
      EF: "entities",
      Eg: "entityContainers",
      EG: "{entityId}",
      Eh: "extensions",
      EH: "credentialStore",
      Ei: "reference",
      EI: "addressschema",
      Ej: "{countryCode}",
      EJ: "addressschemas",
      Ek: "behaviors",
      EK: "{behaviorId}",
      El: "userType",
      EL: "{userType}",
      Em: "contentLocales",
      EM: "countries",
      En: "countrieswithstates",
      EN: "currencies",
      Eo: "timezones",
      EO: "topleveldomains",
      Ep: "unitsofmeasure",
      EP: "secureappdata",
      Eq: "{appKeyId}",
      EQ: "{dbEntryQuery}",
      Er: "sitedata",
      ER: "tenantdata",
      Es: "userdata",
      _tp: "{+tenantPod}",
      _pp: "{+pciPod}",
      _hp: "{+homePod}",
      _g: "GET",
      _p: "PUT",
      _u: "UPDATE",
      _d: "DELETE",
      _o: "POST"
    }
  }
};

function _isPlaceholder(a) {
       return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}
var _isPlaceholder_1 = _isPlaceholder;

/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder_1(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}
var _curry1_1 = _curry1;

/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder_1(a) ? f2 : _curry1_1(function (_b) {
          return fn(a, _b);
        });
      default:
        return _isPlaceholder_1(a) && _isPlaceholder_1(b) ? f2 : _isPlaceholder_1(a) ? _curry1_1(function (_a) {
          return fn(_a, b);
        }) : _isPlaceholder_1(b) ? _curry1_1(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}
var _curry2_1 = _curry2;

/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder_1(a) ? f3 : _curry2_1(function (_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return _isPlaceholder_1(a) && _isPlaceholder_1(b) ? f3 : _isPlaceholder_1(a) ? _curry2_1(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder_1(b) ? _curry2_1(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _curry1_1(function (_c) {
          return fn(a, b, _c);
        });
      default:
        return _isPlaceholder_1(a) && _isPlaceholder_1(b) && _isPlaceholder_1(c) ? f3 : _isPlaceholder_1(a) && _isPlaceholder_1(b) ? _curry2_1(function (_a, _b) {
          return fn(_a, _b, c);
        }) : _isPlaceholder_1(a) && _isPlaceholder_1(c) ? _curry2_1(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder_1(b) && _isPlaceholder_1(c) ? _curry2_1(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _isPlaceholder_1(a) ? _curry1_1(function (_a) {
          return fn(_a, b, c);
        }) : _isPlaceholder_1(b) ? _curry1_1(function (_b) {
          return fn(a, _b, c);
        }) : _isPlaceholder_1(c) ? _curry1_1(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}
var _curry3_1 = _curry3;

function _has$1(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
var _has_1 = _has$1;

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
var _isArray = Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
};

/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
var _isInteger = Number.isInteger || function _isInteger(n) {
  return n << 0 === n;
};

/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc, R.pick
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */


var assoc = /*#__PURE__*/_curry3_1(function assoc(prop, val, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = val;
  return result;
});
var assoc_1 = assoc;

/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */


var isNil = /*#__PURE__*/_curry1_1(function isNil(x) {
  return x == null;
});
var isNil_1 = isNil;

/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */


var assocPath = /*#__PURE__*/_curry3_1(function assocPath(path, val, obj) {
  if (path.length === 0) {
    return val;
  }
  var idx = path[0];
  if (path.length > 1) {
    var nextObj = !isNil_1(obj) && _has_1(idx, obj) ? obj[idx] : _isInteger(path[1]) ? [] : {};
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
  }
  if (_isInteger(idx) && _isArray(obj)) {
    var arr = [].concat(obj);
    arr[idx] = val;
    return arr;
  } else {
    return assoc_1(idx, val, obj);
  }
});
var assocPath_1 = assocPath;

function _isTransformer(obj) {
  return obj != null && typeof obj['@@transducer/step'] === 'function';
}
var _isTransformer_1 = _isTransformer;

/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */


function _dispatchable(methodNames, xf, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!_isArray(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }
        idx += 1;
      }
      if (_isTransformer_1(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
}
var _dispatchable_1 = _dispatchable;

function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
}
var _map_1 = _map;

function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}
var _isString_1 = _isString;

/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */


var _isArrayLike = /*#__PURE__*/_curry1_1(function isArrayLike(x) {
  if (_isArray(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if (typeof x !== 'object') {
    return false;
  }
  if (_isString_1(x)) {
    return false;
  }
  if (x.nodeType === 1) {
    return !!x.length;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});
var _isArrayLike_1 = _isArrayLike;

var XWrap = /*#__PURE__*/function () {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };
  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };

  return XWrap;
}();

function _xwrap(fn) {
  return new XWrap(fn);
}
var _xwrap_1 = _xwrap;

function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };
    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}
var _arity_1 = _arity;

/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      const log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */


var bind = /*#__PURE__*/_curry2_1(function bind(fn, thisObj) {
  return _arity_1(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});
var bind_1 = bind;

function _arrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    acc = xf['@@transducer/step'](acc, list[idx]);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    idx += 1;
  }
  return xf['@@transducer/result'](acc);
}

function _iterableReduce(xf, acc, iter) {
  var step = iter.next();
  while (!step.done) {
    acc = xf['@@transducer/step'](acc, step.value);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    step = iter.next();
  }
  return xf['@@transducer/result'](acc);
}

function _methodReduce(xf, acc, obj, methodName) {
  return xf['@@transducer/result'](obj[methodName](bind_1(xf['@@transducer/step'], xf), acc));
}

var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';

function _reduce(fn, acc, list) {
  if (typeof fn === 'function') {
    fn = _xwrap_1(fn);
  }
  if (_isArrayLike_1(list)) {
    return _arrayReduce(fn, acc, list);
  }
  if (typeof list['fantasy-land/reduce'] === 'function') {
    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
  }
  if (list[symIterator] != null) {
    return _iterableReduce(fn, acc, list[symIterator]());
  }
  if (typeof list.next === 'function') {
    return _iterableReduce(fn, acc, list);
  }
  if (typeof list.reduce === 'function') {
    return _methodReduce(fn, acc, list, 'reduce');
  }

  throw new TypeError('reduce: list must be array or iterable');
}
var _reduce_1 = _reduce;

var _xfBase = {
  init: function () {
    return this.xf['@@transducer/init']();
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result);
  }
};

var XMap = /*#__PURE__*/function () {

  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap.prototype['@@transducer/init'] = _xfBase.init;
  XMap.prototype['@@transducer/result'] = _xfBase.result;
  XMap.prototype['@@transducer/step'] = function (result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  return XMap;
}();

var _xmap = /*#__PURE__*/_curry2_1(function _xmap(f, xf) {
  return new XMap(f, xf);
});
var _xmap_1 = _xmap;

/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length && (!_isPlaceholder_1(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder_1(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined) : _arity_1(left, _curryN(length, combined, fn));
  };
}
var _curryN_1 = _curryN;

/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */


var curryN = /*#__PURE__*/_curry2_1(function curryN(length, fn) {
  if (length === 1) {
    return _curry1_1(fn);
  }
  return _arity_1(length, _curryN_1(length, [], fn));
});
var curryN_1 = curryN;

var toString$1 = Object.prototype.toString;
var _isArguments = /*#__PURE__*/function () {
  return toString$1.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return toString$1.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return _has_1('callee', x);
  };
}();

var _isArguments_1 = _isArguments;

// cover IE < 9 keys issues


var hasEnumBug = ! /*#__PURE__*/{ toString: null }.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
// Safari bug
var hasArgsEnumBug = /*#__PURE__*/function () {

  return arguments.propertyIsEnumerable('length');
}();

var contains = function contains(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};

/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? /*#__PURE__*/_curry1_1(function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) : /*#__PURE__*/_curry1_1(function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && _isArguments_1(obj);
  for (prop in obj) {
    if (_has_1(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];
      if (_has_1(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }
      nIdx -= 1;
    }
  }
  return ks;
});
var keys_1 = keys;

/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      const double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */


var map = /*#__PURE__*/_curry2_1( /*#__PURE__*/_dispatchable_1(['fantasy-land/map', 'map'], _xmap_1, function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return curryN_1(functor.length, function () {
        return fn.call(this, functor.apply(this, arguments));
      });
    case '[object Object]':
      return _reduce_1(function (acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, keys_1(functor));
    default:
      return _map_1(fn, functor);
  }
}));
var map_1 = map;

/**
 * Returns a lens for the given getter and setter functions. The getter "gets"
 * the value of the focus; the setter "sets" the value of the focus. The setter
 * should not mutate the data structure.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
 * @param {Function} getter
 * @param {Function} setter
 * @return {Lens}
 * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
 * @example
 *
 *      const xLens = R.lens(R.prop('x'), R.assoc('x'));
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */


var lens = /*#__PURE__*/_curry2_1(function lens(getter, setter) {
  return function (toFunctorFn) {
    return function (target) {
      return map_1(function (focus) {
        return setter(focus, target);
      }, toFunctorFn(getter(target)));
    };
  };
});
var lens_1 = lens;

/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */


var path = /*#__PURE__*/_curry2_1(function path(paths, obj) {
  var val = obj;
  var idx = 0;
  while (idx < paths.length) {
    if (val == null) {
      return;
    }
    val = val[paths[idx]];
    idx += 1;
  }
  return val;
});
var path_1 = path;

/**
 * Returns a lens whose focus is the specified path.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @typedefn Idx = String | Int
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig [Idx] -> Lens s a
 * @param {Array} path The path to use.
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      const xHeadYLens = R.lensPath(['x', 0, 'y']);
 *
 *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> 2
 *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
 *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
 */


var lensPath = /*#__PURE__*/_curry1_1(function lensPath(p) {
  return lens_1(path_1(p), assocPath_1(p));
});
var lensPath_1 = lensPath;

function _isObject$1(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}
var _isObject_1 = _isObject$1;

/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWithKey, R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */


var mergeWithKey = /*#__PURE__*/_curry3_1(function mergeWithKey(fn, l, r) {
  var result = {};
  var k;

  for (k in l) {
    if (_has_1(k, l)) {
      result[k] = _has_1(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }

  for (k in r) {
    if (_has_1(k, r) && !_has_1(k, result)) {
      result[k] = r[k];
    }
  }

  return result;
});
var mergeWithKey_1 = mergeWithKey;

/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */


var mergeDeepWithKey = /*#__PURE__*/_curry3_1(function mergeDeepWithKey(fn, lObj, rObj) {
  return mergeWithKey_1(function (k, lVal, rVal) {
    if (_isObject_1(lVal) && _isObject_1(rVal)) {
      return mergeDeepWithKey(fn, lVal, rVal);
    } else {
      return fn(k, lVal, rVal);
    }
  }, lObj, rObj);
});
var mergeDeepWithKey_1 = mergeDeepWithKey;

/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                       { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 */


var mergeDeepRight = /*#__PURE__*/_curry2_1(function mergeDeepRight(lObj, rObj) {
  return mergeDeepWithKey_1(function (k, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});
var mergeDeepRight_1 = mergeDeepRight;

function _identity(x) {
  return x;
}
var _identity_1 = _identity;

/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      const obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */


var identity = /*#__PURE__*/_curry1_1(_identity_1);
var identity_1 = identity;

function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}
var _arrayFromIterator_1 = _arrayFromIterator;

function _includesWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}
var _includesWith_1 = _includesWith;

function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}
var _functionName_1 = _functionName;

// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function _objectIs(a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
}

var _objectIs_1 = typeof Object.is === 'function' ? Object.is : _objectIs;

/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */


var type = /*#__PURE__*/_curry1_1(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});
var type_1 = type;

/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparision of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */

function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator_1(aIterator);
  var b = _arrayFromIterator_1(bIterator);

  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }

  // if *a* array contains any element that is not included in *b*
  return !_includesWith_1(function (b, aItem) {
    return !_includesWith_1(eq, aItem, b);
  }, b, a);
}

function _equals(a, b, stackA, stackB) {
  if (_objectIs_1(a, b)) {
    return true;
  }

  var typeA = type_1(a);

  if (typeA !== type_1(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }

  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && _functionName_1(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && _objectIs_1(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!_objectIs_1(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
  }

  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }

  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
    case 'Set':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = keys_1(a);
  if (keysA.length !== keys_1(b).length) {
    return false;
  }

  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);

  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has_1(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}
var _equals_1 = _equals;

/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */


var equals = /*#__PURE__*/_curry2_1(function equals(a, b) {
  return _equals_1(a, b, [], []);
});
var equals_1 = equals;

function _indexOf(list, a, idx) {
  var inf, item;
  // Array.prototype.indexOf doesn't exist below IE9
  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === 'number' && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        // non-zero numbers can utilise Set
        return list.indexOf(a, idx);

      // all these types can utilise Set
      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }
    }
  }
  // anything else not covered above, defer to R.equals
  while (idx < list.length) {
    if (equals_1(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}
var _indexOf_1 = _indexOf;

function _includes(a, list) {
  return _indexOf_1(list, a, 0) >= 0;
}
var _includes_1 = _includes;

var _Set = /*#__PURE__*/function () {

  function _Set() {
    /* globals Set */
    this._nativeSet = typeof Set === 'function' ? new Set() : null;
    this._items = {};
  }

  // until we figure out why jsdoc chokes on this
  // @param item The item to add to the Set
  // @returns {boolean} true if the item did not exist prior, otherwise false
  //
  _Set.prototype.add = function (item) {
    return !hasOrAdd(item, true, this);
  };

  //
  // @param item The item to check for existence in the Set
  // @returns {boolean} true if the item exists in the Set, otherwise false
  //
  _Set.prototype.has = function (item) {
    return hasOrAdd(item, false, this);
  };

  //
  // Combines the logic for checking whether an item is a member of the set and
  // for adding a new item to the set.
  //
  // @param item       The item to check or add to the Set instance.
  // @param shouldAdd  If true, the item will be added to the set if it doesn't
  //                   already exist.
  // @param set        The set instance to check or add to.
  // @return {boolean} true if the item already existed, otherwise false.
  //
  return _Set;
}();

function hasOrAdd(item, shouldAdd, set) {
  var type = typeof item;
  var prevSize, newSize;
  switch (type) {
    case 'string':
    case 'number':
      // distinguish between +0 and -0
      if (item === 0 && 1 / item === -Infinity) {
        if (set._items['-0']) {
          return true;
        } else {
          if (shouldAdd) {
            set._items['-0'] = true;
          }
          return false;
        }
      }
      // these types can all utilise the native Set
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = {};
            set._items[type][item] = true;
          }
          return false;
        } else if (item in set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][item] = true;
          }
          return false;
        }
      }

    case 'boolean':
      // set._items['boolean'] holds a two element array
      // representing [ falseExists, trueExists ]
      if (type in set._items) {
        var bIdx = item ? 1 : 0;
        if (set._items[type][bIdx]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][bIdx] = true;
          }
          return false;
        }
      } else {
        if (shouldAdd) {
          set._items[type] = item ? [false, true] : [true, false];
        }
        return false;
      }

    case 'function':
      // compare functions for reference equality
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }
          return false;
        }
        if (!_includes_1(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }
          return false;
        }
        return true;
      }

    case 'undefined':
      if (set._items[type]) {
        return true;
      } else {
        if (shouldAdd) {
          set._items[type] = true;
        }
        return false;
      }

    case 'object':
      if (item === null) {
        if (!set._items['null']) {
          if (shouldAdd) {
            set._items['null'] = true;
          }
          return false;
        }
        return true;
      }
    /* falls through */
    default:
      // reduce the search size of heterogeneous sets by creating buckets
      // for each type.
      type = Object.prototype.toString.call(item);
      if (!(type in set._items)) {
        if (shouldAdd) {
          set._items[type] = [item];
        }
        return false;
      }
      // scan through all previously applied items
      if (!_includes_1(item, set._items[type])) {
        if (shouldAdd) {
          set._items[type].push(item);
        }
        return false;
      }
      return true;
  }
}

// A simple Set type that honours R.equals semantics
var _Set_1 = _Set;

/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. [`R.equals`](#equals) is used for comparison.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 */


var uniqBy = /*#__PURE__*/_curry2_1(function uniqBy(fn, list) {
  var set = new _Set_1();
  var result = [];
  var idx = 0;
  var appliedItem, item;

  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn(item);
    if (set.add(appliedItem)) {
      result.push(item);
    }
    idx += 1;
  }
  return result;
});
var uniqBy_1 = uniqBy;

/**
 * Returns a new list containing only one copy of each element in the original
 * list. [`R.equals`](#equals) is used to determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */


var uniq = /*#__PURE__*/uniqBy_1(identity_1);
var uniq_1 = uniq;

/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit, R.props
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */


var pick = /*#__PURE__*/_curry2_1(function pick(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
});
var pick_1 = pick;

function _pipe(f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments));
  };
}
var _pipe_1 = _pipe;

/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */


var reduce = /*#__PURE__*/_curry3_1(_reduce_1);
var reduce_1 = reduce;

/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */


function _checkForMethod(methodname, fn) {
  return function () {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
}
var _checkForMethod_1 = _checkForMethod;

/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */


var slice = /*#__PURE__*/_curry3_1( /*#__PURE__*/_checkForMethod_1('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));
var slice_1 = slice;

/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */


var tail = /*#__PURE__*/_curry1_1( /*#__PURE__*/_checkForMethod_1('tail', /*#__PURE__*/slice_1(1, Infinity)));
var tail_1 = tail;

/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      const f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */


function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return _arity_1(arguments[0].length, reduce_1(_pipe_1, arguments[0], tail_1(arguments)));
}
var pipe_1 = pipe;

/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */


var reverse = /*#__PURE__*/_curry1_1(function reverse(list) {
  return _isString_1(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
});
var reverse_1 = reverse;

/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      const yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */


function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }
  return pipe_1.apply(this, reverse_1(arguments));
}
var compose_1 = compose;

function _isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
}
var _isFunction_1 = _isFunction;

function _quote(s) {
  var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
  .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');

  return '"' + escaped.replace(/"/g, '\\"') + '"';
}
var _quote_1 = _quote;

/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
var pad = function pad(n) {
  return (n < 10 ? '0' : '') + n;
};

var _toISOString = typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
  return d.toISOString();
} : function _toISOString(d) {
  return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
};

var _toISOString_1 = _toISOString;

function _complement(f) {
  return function () {
    return !f.apply(this, arguments);
  };
}
var _complement_1 = _complement;

function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
}
var _filter_1 = _filter;

var XFilter = /*#__PURE__*/function () {

  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = _xfBase.init;
  XFilter.prototype['@@transducer/result'] = _xfBase.result;
  XFilter.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return XFilter;
}();

var _xfilter = /*#__PURE__*/_curry2_1(function _xfilter(f, xf) {
  return new XFilter(f, xf);
});
var _xfilter_1 = _xfilter;

/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */


var filter = /*#__PURE__*/_curry2_1( /*#__PURE__*/_dispatchable_1(['filter'], _xfilter_1, function (pred, filterable) {
  return _isObject_1(filterable) ? _reduce_1(function (acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }
    return acc;
  }, {}, keys_1(filterable)) :
  // else
  _filter_1(pred, filterable);
}));
var filter_1 = filter;

/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      const isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */


var reject = /*#__PURE__*/_curry2_1(function reject(pred, filterable) {
  return filter_1(_complement_1(pred), filterable);
});
var reject_1 = reject;

function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return _includes_1(y, xs) ? '<Circular>' : _toString(y, xs);
  };

  //  mapPairs :: (Object, [String]) -> [String]
  var mapPairs = function (obj, keys) {
    return _map_1(function (k) {
      return _quote_1(k) + ': ' + recur(obj[k]);
    }, keys.slice().sort());
  };

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + _map_1(recur, x).join(', ') + '))';
    case '[object Array]':
      return '[' + _map_1(recur, x).concat(mapPairs(x, reject_1(function (k) {
        return (/^\d+$/.test(k)
        );
      }, keys_1(x)))).join(', ') + ']';
    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote_1(_toISOString_1(x))) + ')';
    case '[object Null]':
      return 'null';
    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote_1(x);
    case '[object Undefined]':
      return 'undefined';
    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();
        if (repr !== '[object Object]') {
          return repr;
        }
      }
      return '{' + mapPairs(x, keys_1(x)).join(', ') + '}';
  }
}
var _toString_1 = _toString;

/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */


var toString$2 = /*#__PURE__*/_curry1_1(function toString(val) {
  return _toString_1(val, []);
});
var toString_1 = toString$2;

/**
 * Turns a named method with a specified arity into a function that can be
 * called directly supplied with arguments and a target object.
 *
 * The returned function is curried and accepts `arity + 1` parameters where
 * the final parameter is the target object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of the method to call.
 * @return {Function} A new curried function.
 * @see R.construct
 * @example
 *
 *      const sliceFrom = R.invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *      const sliceFrom6 = R.invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 * @symb R.invoker(0, 'method')(o) = o['method']()
 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */


var invoker = /*#__PURE__*/_curry2_1(function invoker(arity, method) {
  return curryN_1(arity + 1, function () {
    var target = arguments[arity];
    if (target != null && _isFunction_1(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
    }
    throw new TypeError(toString_1(target) + ' does not have a method named "' + method + '"');
  });
});
var invoker_1 = invoker;

/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig String -> [a] -> String
 * @param {Number|String} separator The string used to separate the elements.
 * @param {Array} xs The elements to join into a string.
 * @return {String} str The string made by concatenating `xs` with `separator`.
 * @see R.split
 * @example
 *
 *      const spacer = R.join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
 */


var join = /*#__PURE__*/invoker_1(1, 'join');
var join_1 = join;

/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];

  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }
  return result;
}
var _concat_1 = _concat;

/**
 * Creates a new list iteration function from an existing one by adding two new
 * parameters to its callback function: the current index, and the entire list.
 *
 * This would turn, for instance, [`R.map`](#map) function into one that
 * more closely resembles `Array.prototype.map`. Note that this will only work
 * for functions in which the iteration callback function is the first
 * parameter, and where the list is the last parameter. (This latter might be
 * unimportant if the list parameter is not used.)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Function
 * @category List
 * @sig ((a ... -> b) ... -> [a] -> *) -> ((a ..., Int, [a] -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      const mapIndexed = R.addIndex(R.map);
 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */


var addIndex = /*#__PURE__*/_curry1_1(function addIndex(fn) {
  return curryN_1(fn.length, function () {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function () {
      var result = origFn.apply(this, _concat_1(arguments, [idx, list]));
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  });
});
var addIndex_1 = addIndex;

/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * The first two parameters correspond to the parameters of the
 * `String.prototype.replace()` function, so the second parameter can also be a
 * function.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category String
 * @sig RegExp|String -> String -> String -> String
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replacement The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 * @example
 *
 *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *
 *      // Use the "g" (global) flag to replace all occurrences:
 *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 */


var replace = /*#__PURE__*/_curry3_1(function replace(regex, replacement, str) {
  return str.replace(regex, replacement);
});
var replace_1 = replace;

/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN, R.partial
 * @example
 *
 *      const addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      const curriedAddFourNumbers = R.curry(addFourNumbers);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */


var curry = /*#__PURE__*/_curry1_1(function curry(fn) {
  return curryN_1(fn.length, fn);
});
var curry_1 = curry;

/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [String] -> {String: *} -> {String: *}
 * @param {Array} names an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @see R.pick
 * @example
 *
 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */


var omit = /*#__PURE__*/_curry2_1(function omit(names, obj) {
  var result = {};
  var index = {};
  var idx = 0;
  var len = names.length;

  while (idx < len) {
    index[names[idx]] = 1;
    idx += 1;
  }

  for (var prop in obj) {
    if (!index.hasOwnProperty(prop)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});
var omit_1 = omit;

// Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign


function _objectAssign(target) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  var idx = 1;
  var length = arguments.length;
  while (idx < length) {
    var source = arguments[idx];
    if (source != null) {
      for (var nextKey in source) {
        if (_has_1(nextKey, source)) {
          output[nextKey] = source[nextKey];
        }
      }
    }
    idx += 1;
  }
  return output;
}

var _objectAssign_1 = typeof Object.assign === 'function' ? Object.assign : _objectAssign;

/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeRight, R.mergeDeepRight, R.mergeWith, R.mergeWithKey
 * @deprecated
 * @example
 *
 *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      const withDefaults = R.merge({x: 0, y: 0});
 *      withDefaults({y: 2}); //=> {x: 0, y: 2}
 * @symb R.merge(a, b) = {...a, ...b}
 */


var merge = /*#__PURE__*/_curry2_1(function merge(l, r) {
  return _objectAssign_1({}, l, r);
});
var merge_1 = merge;

/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties.
 * @see R.fromPairs
 * @example
 *
 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */


var toPairs = /*#__PURE__*/_curry1_1(function toPairs(obj) {
  var pairs = [];
  for (var prop in obj) {
    if (_has_1(prop, obj)) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
  }
  return pairs;
});
var toPairs_1 = toPairs;

/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      const t = R.always('Tee');
 *      t(); //=> 'Tee'
 */


var always = /*#__PURE__*/_curry1_1(function always(val) {
  return function () {
    return val;
  };
});
var always_1 = always;

// `Identity` is a functor that holds a single value, where `map` simply
// transforms the held value with the provided function.


var Identity = function (x) {
  return { value: x, map: function (f) {
      return Identity(f(x));
    } };
};

/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> (a -> a) -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      const headLens = R.lensIndex(0);
 *
 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */
var over = /*#__PURE__*/_curry3_1(function over(lens, f, x) {
  // The value returned by the getter function is first transformed with `f`,
  // then set as the value of an `Identity`. This is then mapped over with the
  // setter function of the lens.
  return lens(function (y) {
    return Identity(f(y));
  })(x).value;
});
var over_1 = over;

/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> a -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      const xLens = R.lensProp('x');
 *
 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
 */


var set$1 = /*#__PURE__*/_curry3_1(function set(lens, v, x) {
  return over_1(lens, always_1(v), x);
});
var set_1 = set$1;

/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 *      R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
 */

var prop = /*#__PURE__*/_curry2_1(function prop(p, obj) {
  return path_1([p], obj);
});
var prop_1 = prop;

/**
 * Returns a lens whose focus is the specified property.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig String -> Lens s a
 * @param {String} k
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      const xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */


var lensProp = /*#__PURE__*/_curry1_1(function lensProp(k) {
  return lens_1(prop_1(k), assoc_1(k));
});
var lensProp_1 = lensProp;

/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      const defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42(false);  //=> false
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */


var defaultTo = /*#__PURE__*/_curry2_1(function defaultTo(d, v) {
  return v == null || v !== v ? d : v;
});
var defaultTo_1 = defaultTo;

/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */


var pathOr = /*#__PURE__*/_curry3_1(function pathOr(d, p, obj) {
  return defaultTo_1(d, path_1(p, obj));
});
var pathOr_1 = pathOr;

/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeLeft, R.mergeDeepRight, R.mergeWith, R.mergeWithKey
 * @example
 *
 *      R.mergeRight({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      const withDefaults = R.mergeRight({x: 0, y: 0});
 *      withDefaults({y: 2}); //=> {x: 0, y: 2}
 * @symb R.mergeRight(a, b) = {...a, ...b}
 */


var mergeRight = /*#__PURE__*/_curry2_1(function mergeRight(l, r) {
  return _objectAssign_1({}, l, r);
});
var mergeRight_1 = mergeRight;

/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when, R.cond
 * @example
 *
 *      const incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({});           //=> { count: 1 }
 *      incCount({ count: 1 }); //=> { count: 2 }
 */


var ifElse = /*#__PURE__*/_curry3_1(function ifElse(condition, onTrue, onFalse) {
  return curryN_1(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
    return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
  });
});
var ifElse_1 = ifElse;

/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig (String | RegExp) -> String -> [String]
 * @param {String|RegExp} sep The pattern.
 * @param {String} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `str`.
 * @see R.join
 * @example
 *
 *      const pathComponents = R.split('/');
 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 *
 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 */


var split = /*#__PURE__*/invoker_1(1, 'split');
var split_1 = split;

/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      const mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * @symb R.flip(f)(a, b, c) = f(b, a, c)
 */


var flip = /*#__PURE__*/_curry1_1(function flip(fn) {
  return curryN_1(fn.length, function (a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});
var flip_1 = flip;

function _cloneRegExp(pattern) {
                                  return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
}
var _cloneRegExp_1 = _cloneRegExp;

/**
 * Copies an object.
 *
 * @private
 * @param {*} value The value to be copied
 * @param {Array} refFrom Array containing the source references
 * @param {Array} refTo Array containing the copied source references
 * @param {Boolean} deep Whether or not to perform deep cloning.
 * @return {*} The copied value.
 */


function _clone(value, refFrom, refTo, deep) {
  var copy = function copy(copiedValue) {
    var len = refFrom.length;
    var idx = 0;
    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx];
      }
      idx += 1;
    }
    refFrom[idx + 1] = value;
    refTo[idx + 1] = copiedValue;
    for (var key in value) {
      copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
    }
    return copiedValue;
  };
  switch (type_1(value)) {
    case 'Object':
      return copy({});
    case 'Array':
      return copy([]);
    case 'Date':
      return new Date(value.valueOf());
    case 'RegExp':
      return _cloneRegExp_1(value);
    default:
      return value;
  }
}
var _clone_1 = _clone;

/**
 * Creates a deep copy of the value which may contain (nested) `Array`s and
 * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
 * assigned by reference rather than copied
 *
 * Dispatches to a `clone` method if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {*} -> {*}
 * @param {*} value The object or array to clone
 * @return {*} A deeply cloned copy of `val`
 * @example
 *
 *      const objects = [{}, {}, {}];
 *      const objectsClone = R.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */


var clone = /*#__PURE__*/_curry1_1(function clone(value) {
  return value != null && typeof value.clone === 'function' ? value.clone() : _clone_1(value, [], [], true);
});
var clone_1 = clone;

function _isRegExp(x) {
  return Object.prototype.toString.call(x) === '[object RegExp]';
}
var _isRegExp_1 = _isRegExp;

/**
 * Determines whether a given string matches a given regular expression.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category String
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @see R.match
 * @example
 *
 *      R.test(/^x/, 'xyz'); //=> true
 *      R.test(/^y/, 'xyz'); //=> false
 */


var test = /*#__PURE__*/_curry2_1(function test(pattern, str) {
  if (!_isRegExp_1(pattern)) {
    throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + toString_1(pattern));
  }
  return _cloneRegExp_1(pattern).test(str);
});
var test_1 = test;

/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      const alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      const favorite = R.prop('favoriteLibrary');
 *      const favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */


var propOr = /*#__PURE__*/_curry3_1(function propOr(val, p, obj) {
  return pathOr_1(val, [p], obj);
});
var propOr_1 = propOr;

/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 * @see R.valuesIn, R.keys
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */


var values = /*#__PURE__*/_curry1_1(function values(obj) {
  var props = keys_1(obj);
  var len = props.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props[idx]];
    idx += 1;
  }
  return vals;
});
var values_1 = values;

/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 *
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      const tomato = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 *      const transformations = {
 *        firstName: R.trim,
 *        lastName: R.trim, // Will not get invoked.
 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
 *      };
 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 */


var evolve = /*#__PURE__*/_curry2_1(function evolve(transformations, object) {
  var result = object instanceof Array ? [] : {};
  var transformation, key, type;
  for (key in object) {
    transformation = transformations[key];
    type = typeof transformation;
    result[key] = type === 'function' ? transformation(object[key]) : transformation && type === 'object' ? evolve(transformation, object[key]) : object[key];
  }
  return result;
});
var evolve_1 = evolve;

/**
 * Merges a list of objects together into one object.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig [{k: v}] -> {k: v}
 * @param {Array} list An array of objects
 * @return {Object} A merged object.
 * @see R.reduce
 * @example
 *
 *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
 *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
 * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
 */


var mergeAll = /*#__PURE__*/_curry1_1(function mergeAll(list) {
  return _objectAssign_1.apply(null, [{}].concat(list));
});
var mergeAll_1 = mergeAll;

/**
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * which returns `null` when there are no matches.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig RegExp -> String -> [String | Undefined]
 * @param {RegExp} rx A regular expression.
 * @param {String} str The string to match against
 * @return {Array} The list of matches or empty array.
 * @see R.test
 * @example
 *
 *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
 *      R.match(/a/, 'b'); //=> []
 *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
 */


var match = /*#__PURE__*/_curry2_1(function match(rx, str) {
  return str.match(rx) || [];
});
var match_1 = match;

/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      const list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */


var nth = /*#__PURE__*/_curry2_1(function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString_1(list) ? list.charAt(idx) : list[idx];
});
var nth_1 = nth;

/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> ''
 */


var last = /*#__PURE__*/nth_1(-1);
var last_1 = last;

var R$1 = {
  lensPath: lensPath_1,
  mergeDeepRight: mergeDeepRight_1,
  uniq: uniq_1,
  map: map_1,
  pick: pick_1,
  compose: compose_1,
  join: join_1,
  addIndex: addIndex_1,
  replace: replace_1,
  curryN: curryN_1,
  curry: curry_1,
  omit: omit_1,
  merge: merge_1,
  toPairs: toPairs_1,
  set: set_1,
  lensProp: lensProp_1,
  pathOr: pathOr_1,
  path: path_1,
  keys: keys_1,
  reduce: reduce_1,
  mergeRight: mergeRight_1,
  ifElse: ifElse_1,
  split: split_1,
  assocPath: assocPath_1,
  flip: flip_1,
  prop: prop_1,
  clone: clone_1,
  test: test_1,
  propOr: propOr_1,
  values: values_1,
  evolve: evolve_1,
  mergeAll: mergeAll_1,
  match: match_1,
  last: last_1
};

var _strictMethod = function (method, arg) {
  return !!method && _fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};

var $sort = [].sort;
var test$1 = [1, 2, 3];

_export(_export.P + _export.F * (_fails(function () {
  // IE8-
  test$1.sort(undefined);
}) || !_fails(function () {
  // V8 bug
  test$1.sort(null);
  // Old WebKit
}) || !_strictMethod($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(_toObject(this))
      : $sort.call(_toObject(this), _aFunction(comparefn));
  }
});

// 19.1.2.14 Object.keys(O)



_objectSap('keys', function () {
  return function keys(it) {
    return _objectKeys(_toObject(it));
  };
});

var f$3 = _wks;

var _wksExt = {
	f: f$3
};

var defineProperty = _objectDp.f;
var _wksDefine = function (name) {
  var $Symbol = _core.Symbol || (_core.Symbol = _global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
};

_wksDefine('asyncIterator');

var f$4 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$4
};

// all enumerable object keys, includes symbols



var _enumKeys = function (it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

// 7.2.2 IsArray(argument)

var _isArray$1 = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
	f: f$5
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN = _objectGopn.f;
var toString$3 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$6 = function getOwnPropertyNames(it) {
  return windowNames && toString$3.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
};

var _objectGopnExt = {
	f: f$6
};

var gOPD = Object.getOwnPropertyDescriptor;

var f$7 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive$1(P, true);
  if (_ie8DomDefine) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$7
};

// ECMAScript 6 symbols shim





var META = _meta.KEY;



















var gOPD$1 = _objectGopd.f;
var dP$1 = _objectDp.f;
var gOPN$1 = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE$2 = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum$1 = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols = _shared('symbols');
var OPSymbols = _shared('op-symbols');
var ObjectProto$1 = Object[PROTOTYPE$2];
var USE_NATIVE$1 = typeof $Symbol == 'function';
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function () {
  return _objectCreate(dP$1({}, 'a', {
    get: function () { return dP$1(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD$1(ObjectProto$1, key);
  if (protoDesc) delete ObjectProto$1[key];
  dP$1(it, key, D);
  if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
} : dP$1;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE$1 && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive$1(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP$1(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys(P = _toIobject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum$1.call(this, key = _toPrimitive$1(key, true));
  if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive$1(key, true);
  if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
  var D = gOPD$1(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN$1(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$1;
  var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE$1) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto$1) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f = $defineProperty;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if (_descriptors && !_library) {
    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function (name) {
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE$1, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

_export(_export.S + _export.F * !USE_NATIVE$1, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return _has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

_export(_export.S + _export.F * !USE_NATIVE$1, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export(_export.S + _export.F * (!USE_NATIVE$1 || _fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!_isArray$1(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

// https://github.com/tc39/proposal-object-values-entries

var $entries = _objectToArray(true);

_export(_export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

// 19.1.2.1 Object.assign(target, source, ...)





var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign$1 = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', { assign: _objectAssign$1 });

// 21.2.5.3 get RegExp.prototype.flags()
if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
  configurable: true,
  get: _flags
});

var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  _redefine(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (_fails(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = _anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

var type$1 = function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
};
var mixin = function mixin(proto) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  return Object.assign.apply(Object, [Object.create(proto)].concat(sources));
};

var _curryN$1 = function _curryN(len, fn) {
  return function () {
    var _curryN2;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (args.length >= len) return fn.apply(void 0, args);
    if (!args.length) return fn;
    return (_curryN2 = _curryN(len, fn)).bind.apply(_curryN2, [null].concat(args));
  };
};

var curry$1 = function curry(fn) {
  return function () {
    return arguments.length === fn.length ? fn.apply(void 0, arguments) : _curryN$1(fn.length, fn).apply(void 0, arguments);
  };
};
var curryN$1 = curry$1(_curryN$1);
var ifType = curry$1(function (valueType, value, def) {
  return type$1(value) === valueType ? value : def || null;
});
var testIsServer = new Function('try {return this===global;}catch(e){return false;}');
var dive = curryN$1(2, function () {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var def = arguments.length > 2 ? arguments[2] : undefined;
  return (path instanceof Array ? path : path.split('.')).reduce(function (obj, key, dex, ray) {
    var last = dex === ray.length - 1;
    return obj ? obj['@@reduced'] ? last ? obj.value : obj : obj[key] || last && def : {
      '@@reduced': 1,
      value: def
    };
  }, obj);
});
var isFn = function isFn(x) {
  return 'function' === typeof x;
};
var isObj = function isObj(x) {
  return 'Object' === type$1(x);
};

Function.prototype.papp = function () {
  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  var fn = this;
  return function () {
    for (var _len8 = arguments.length, newArgs = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      newArgs[_key8] = arguments[_key8];
    }

    return fn.apply(this, args.concat(newArgs));
  };
};
var isBuffer = function isBuffer(obj) {
  return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
};
var flatMap = function flatMap(f, a) {
  return a.chain ? a.chain(function (b) {
    return f(b);
  }) : a.reduce ? a.reduce(function (b, x) {
    return b.concat(x.map ? x.map(f) : f(x));
  }, []) : f(a);
};
var radix = function radix(list) {
  var map = list.reduce(function (m, letter, dex) {
    m[letter] = dex;
    return m;
  }, {});
  var reverseMap = Object.entries(map).reduce(function (a, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    a[value] = key;
    return a;
  }, {});
  var len = list.length; // let charValue = char => a.charCodeAt(0) - (/[a-z]/i.test(x) ? 97 : 65)

  var toNum = function toNum(char) {
    return map[char];
  };

  var toChar = function toChar(num) {
    return reverseMap[num];
  };

  var parse = function parse(str) {
    return 'string' === typeof str ? str.split('').reduce(function (a, x) {
      return a * len + toNum(x);
    }, 0) : str;
  };

  var stringify = function stringify(num) {
    if ('number' !== typeof num) return num;
    var digit;
    var residual = Math.floor(num);
    var result = '';

    do {
      digit = residual % len;
      result = toChar(digit) + result;
      residual = Math.floor(residual / len);
    } while (residual > 0);

    return result;
  };

  var add = function add(p, x) {
    var result = parse(p) + x;
    return typeof p === 'string' ? stringify(result) : result;
  };

  return function () {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'a';

    var prop = function prop(x) {
      if (x) value = x;
      return value;
    };

    prop.parse = function () {
      return prop(parse(prop()));
    };

    prop.stringify = function () {
      return prop(stringify(prop()));
    };

    prop.add = function (x) {
      return prop(add(prop(), x));
    };

    return prop;
  };
};
var base54 = radix(flatMap(function (letter) {
  return [letter, letter.toUpperCase()];
}, 'a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z'.split('.')));
var splitWhenStr = curry$1(function (predicate, str) {
  return str.split('').reduce(function (a, x) {
    if (predicate(x)) a.push([x], []);else a[a.length - 1].push(x);
    return a;
  }, [[]]).map(function (s) {
    return s.join('');
  });
});
var uncompressFlattened = function uncompressFlattened() {
  var compressed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';
  var output = compressed.output,
      reference = compressed.reference;
  return Object.entries(output).reduce(function (result, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        keys = _ref6[0],
        value = _ref6[1];

    result[keys.split(delimiter).filter(Boolean).map(function (key) {
      return reference[key] || key;
    }).join(delimiter)] = value;
    return result;
  }, {});
};
var crawl = curry$1(function (process, obj) {
  var step = function step(obj) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    Object.entries(obj).forEach(function (_ref9) {
      var _ref10 = _slicedToArray(_ref9, 2),
          key = _ref10[0],
          value = _ref10[1];

      if (type$1(value) === 'Object' || type$1(value) === 'Function') {
        path.push(key);
        obj[key] = step(process(value, key, _toConsumableArray(path), obj), path);
        path.pop();
      }
    });
    return obj;
  };

  return step(obj);
});
var unflatten = function unflatten() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _opts$delimiter2 = opts.delimiter,
      delimiter = _opts$delimiter2 === void 0 ? '.' : _opts$delimiter2,
      overwrite = opts.overwrite,
      object = opts.object,
      _opts$reference2 = opts.reference,
      reference = _opts$reference2 === void 0 ? {} : _opts$reference2;
  var isbuffer = isBuffer(target);
  if (isbuffer || type$1(target) !== 'Object') return target;

  var parseKey = function parseKey(key) {
    return isNaN(key) && parseInt(key) || key;
  };

  return Object.keys(target).sort(function (a, b) {
    return a.length - b.length;
  }).reduce(function (result, joinedKey) {
    var split = joinedKey.split(delimiter);
    if (reference) split = split.map(function (key) {
      return reference[key] || key;
    });
    var key1 = parseKey(split.shift());
    var key2 = parseKey(split[0]);
    var container = result;

    while (key2 !== undefined) {
      var vType = type$1(container[key1]);
      var isObject = vType === 'Object' || vType === 'Array';

      if (!overwrite && !isObject && typeof container[key1] !== 'undefined') {
        return result;
      }

      if (overwrite && !isObject || !overwrite && container[key1] == null) {
        container[key1] = typeof key2 === 'number' && !object ? [] : {};
      }

      container = container[key1];

      if (split.length > 0) {
        key1 = parseKey(split.shift());
        key2 = parseKey(split[0]);
      }
    }

    container[key1] = unflatten(target[joinedKey]);
    return result;
  }, {});
};

var version = '1.1705.17038.0',
    DEVELOPER = 1,
    ADMINUSER = 2,
    SHOPPER = 4,
    TENANT = 8,
    SITE = 16,
    MASTERCATALOG = 32,
    CATALOG = 64,
    APP_ONLY = 128,
    NONE = 256,
    APP_REQUIRED = 512; // scopes are not yet in use, but when the services can reflect
// their required scope, here will be all the bitmask constants
// some contexts are always additive

TENANT |= ADMINUSER;
SITE |= TENANT;
MASTERCATALOG |= TENANT;
CATALOG |= MASTERCATALOG;
SHOPPER |= SITE | CATALOG;
var constants = {
  scopes: {
    APP_REQUIRED: APP_REQUIRED,
    DEVELOPER: DEVELOPER,
    ADMINUSER: ADMINUSER,
    SHOPPER: SHOPPER,
    TENANT: TENANT,
    SITE: SITE,
    MASTERCATALOG: MASTERCATALOG,
    CATALOG: CATALOG,
    APP_ONLY: APP_ONLY,
    NONE: NONE
  },
  verbs: {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
  },
  headerPrefix: 'x-vol-',
  headers: {
    APPCLAIMS: 'app-claims',
    USERCLAIMS: 'user-claims',
    TENANT: 'tenant',
    SITE: 'site',
    MASTERCATALOG: 'master-catalog',
    CATALOG: 'catalog',
    DATAVIEWMODE: 'dataview-mode',
    VERSION: 'version',
    SHA256: 'hmac-sha256'
  },
  dataViewModes: {
    LIVE: 'Live',
    PENDING: 'Pending'
  },
  baseUrl: 'https://home.mozu.com/',
  basePciUrl: 'https://pmts.mozu.com/',
  capabilityTimeoutInSeconds: 180,
  version: version,
  templateBraceRegex: /\{([^}]+)\}/g,
  urlTemplateSplitRegex: /[\/\?=\&~]/g
};

var authenticate = (function (api) {
  var auth = {};
  var assignKey = R$1.curry(function (key, ref, val) {
    ref[key] = val;
    return ref;
  });
  var isServer = testIsServer();
  var userclaims = 'USERCLAIMS';
  var appclaims = 'APPCLAIMS';
  var headerType = R$1.flip(R$1.prop)(constants.headers);
  var addClaimToRequest = R$1.curry(function (type, requestOptions, claim) {
    return R$1.assocPath(['headers', constants.headerPrefix + headerType(type)], claim.accessToken, requestOptions);
  });
  var addUserClaimToRequest = addClaimToRequest(userclaims);
  var addAppClaimToRequest = addClaimToRequest(appclaims);

  var constructDate = function constructDate(date) {
    return new Date(date);
  };

  var setClaim = R$1.curry(function (type, auth) {
    return R$1.compose(assignKey(type, auth), R$1.evolve({
      accessTokenExpiration: constructDate,
      refreshTokenExpiration: constructDate
    }));
  });
  var setUserClaim = setClaim(userclaims);
  var setAppClaim = setClaim(appclaims);
  var getClaim = R$1.curry(function (type, auth) {
    return R$1.pathOr({}, [type], auth);
  });
  var getUserClaim = getClaim(userclaims);
  var getAppClaim = getClaim(appclaims);

  var validClaim = function validClaim(claim) {
    return claim && new Date() < claim.accessTokenExpiration;
  };

  var staleClaim = function staleClaim(claim) {
    return claim && new Date() < claim.refreshTokenExpiration;
  };

  var internalAuthRequest = {
    internal: 1,
    headers: {}
  };
  var getAppAccessToken = R$1.compose(function (body) {
    return api.platform.applications.authTicket.authenticateApp(body, internalAuthRequest);
  }, R$1.pick(['applicationId', 'sharedSecret']));
  var refreshAppAccessToken = R$1.compose(function (body) {
    return api.platform.applications.authTicket.refreshAppAuthTicket(body, internalAuthRequest);
  }, R$1.pick(['refreshToken']));
  var getUserAccessToken = R$1.compose(function (body) {
    return api.platform.developer.developerAdminUserAuthTicket.createDeveloperUserAuthTicket(body, internalAuthRequest);
  }, R$1.pick(['emailAddress', 'password']), R$1.prop('developerAccount'));
  var refreshUserAccessToken = R$1.compose(function (body) {
    return api.platform.developer.developerAdminUserAuthTicket.refreshDeveloperAuthTicket(body, internalAuthRequest);
  }, R$1.pick(['refreshToken']));
  var password;

  var passwordPrompt = function () {
    var readline = function readline() {
      return Promise.resolve(require('readline'));
    }; // let readline = new Function("return import('readline')")


    var userLoginAttempts = 0;
    return function (requestOptions) {
      return (isObj(readline) ? Promise.resolve(readline) : readline().then(function (r) {
        readline = r.createInterface({
          input: process.stdin,
          output: process.stdout,
          terminal: true
        });
        readline.on('SIGINT', function () {
          readline.clearLine();
          return process.exit();
        });

        readline._writeToOutput = function (str) {
          // log(arguments)
          if (str.includes(this._prompt)) {
            readline.history.pop();
            readline.output.write(this._prompt + str.replace(this._prompt, '').replace(/[\r\n]/g, '').replace(/./g, '*'));
            return;
          }

          if (str === '\r\n') return;
          if (readline.mask) readline.output.write('*');else readline.output.write(str);
        };

        var question = readline.question.bind(readline);

        readline.question = function (q, cb) {
          readline.mask = false;
          question(q, function (answer) {
            readline.mask = false;
            cb(answer);
          });
          readline.mask = true;
        };

        return readline;
      })).then(function (readline) {
        return api.newTask(function (reject, resolve) {
          readline.question('developer password: ', function (answer) {
            if (!answer) {
              readline.output.write("\ni don't think your password is an empty string\n");
              return reject('invalid password');
            }

            readline.write('\n');
            resolve(password);
          });
        });
      }).then(function (password) {
        return getUserAccessToken(R$1.assocPath(['developerAccount', 'password'], password, api.context));
      }).then(R$1.compose(setUserClaim(auth), R$1.prop('data'))).then(R$1.compose(addUserClaimToRequest(requestOptions), getUserClaim)).catch(function (e) {
        if (e && e.response.status === 401 && userLoginAttempts < 3) {
          userLoginAttempts += 1;
          readline.output.write('\ninvalid password. try again?\n');
          return passwordPrompt(requestOptions);
        }

        readline.close();
        return Promise.reject(e);
      });
    };
  }();

  var authenticate = function authenticate(requestOptions) {
    var appClaim = getAppClaim(auth);
    var userClaim = getUserClaim(auth);
    /**
     * if this is not being run in node don't do anything. otherwise use the appclaim from state if it is
     * valid and not stale. refresh the token if it is stale. request a token if one does not yet exist
     * using either application credentials (checked first) or user credentials
     *
     */

    if (isServer) {
      if (appClaim.accessToken || requestOptions.context.sharedSecret) {
        appClaim.valid = validClaim(appClaim);
        appClaim.stale = !appClaim.valid && staleClaim(appClaim);
        if (appClaim.valid) return Promise.resolve(addAppClaimToRequest(requestOptions, appClaim));
        return appClaim.stale ? refreshAppAccessToken(appClaim) : getAppAccessToken(api.context).then(R$1.compose(setAppClaim(auth), R$1.prop('data'))).then(R$1.compose(addAppClaimToRequest(requestOptions), getAppClaim));
      }

      if (userClaim.accessToken || requestOptions.context.developerAccount) {
        userClaim.valid = validClaim(userClaim);
        userClaim.stale = !userClaim.valid && staleClaim(userClaim);
        if (!password && requestOptions.context.developerAccount.password) password = requestOptions.context.developerAccount.password;
        if (userClaim.valid) return Promise.resolve(addUserClaimToRequest(requestOptions, userClaim));
        return userClaim.stale ? refreshUserAccessToken(userClaim) : password ? Promise.resolve(password) : !isServer ? Promise.reject('no password for user auth in context') : passwordPrompt(requestOptions);
      }
    } else return Promise.resolve(requestOptions);

    return Promise.reject('unable to authenticate');
  };

  authenticate.setAppClaim = setAppClaim;
  authenticate.getAppClaim = getAppClaim;
  authenticate.setUserClaim = setUserClaim;
  authenticate.getUserClaim = getUserClaim;
  return authenticate;
});

var CONSTANTS = Object.freeze({
  isServer: testIsServer(),
  hooks: ['beforeRequest', 'withRequest', 'afterRequest'],
  hookReference: {
    beforeRequest: 'accepts as the first parameter the request configuration options and should return a modified version',
    withRequest: 'accepts as the first parameter and should return the promise that will be returned by the request method',
    afterRequest: 'accepts as the first parameter and should return the response that will occur after the request promise settles'
  },
  defaultOptions: {
    hooks: {},
    apiBasePath: '/api',
    requestClient: function requestClient() {
      return Promise.reject('requestClient not defined');
    }
  },
  delimiter: '_'
});

var Api = function Api() {
  var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CONSTANTS.defaultOptions;
  var definition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDefinition;
  console.time('construct api');
  /**
   * only the interface intended for use when consuming the library should be exposed on
   * api. everything else will be put in proto.
   */

  var api = {};
  var proto = {};
  options = R$1.merge(CONSTANTS.defaultOptions, options); //#region set context

  if (CONSTANTS.isServer) ;

  var headerDefaults = {
    VERSION: constants.version,
    DATAVIEWMODE: constants.dataViewModes.LIVE //all uppercase is a valid key as well

  };
  var normalizedContextKeys = R$1.reduce(function (keyMap, key) {
    keyMap[key.replace(/[^0-9a-zA-Z]/g, '').toUpperCase()] = key;
    return keyMap;
  }, {}, R$1.keys(context));
  context.homePod = context.baseUrl || context.homePod || 'https://home.mozu.com/';
  context.pciPod = context.basePciUrl || context.pciPod || 'https://pmts.mozu.com/';
  context.tenantPod = context.tenantPod || "https://t".concat(context.tenant, ".sandbox.mozu.com/");
  proto.context = context;
  proto.options = options; //set default headers

  proto.headers = R$1.reduce(function (headers, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        name = _ref2[1];

    var value = proto.context[normalizedContextKeys[key] || key] || headerDefaults[key];
    if (value) headers[constants.headerPrefix + name] = value;
    return headers;
  }, {}, R$1.toPairs(constants.headers));
  proto.methods = R$1.values(constants.verbs).map(function (v) {
    return v.toLowerCase();
  });

  if (CONSTANTS.isServer) {
    proto.headers['User-Agent'] = "K Isomorphic SDK v".concat(constants.version, " (Node.js ").concat(process.version, "; ").concat(process.platform, " ").concat(process.arch, ")");
  } //#endregion set context
  //#region request handler


  proto.requestClient = options.requestClient;

  proto.parseTemplate = function () {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    /**
     * replace +contextVars from context map. template variables
     * and query parameters will both be in data. replace the appropriate
     * key in the template string and return a map containing the used keys
     * so that the request handler can remove them from the body if it is a post
     * request.
     */
    var usedKeys = [];
    var url = R$1.compose(R$1.join('?'), R$1.addIndex(R$1.map)(function (l, x) {
      return x ? l.filter(function (v) {
        return v[1];
      }).map(function (m) {
        return m.join('=');
      }).join('&') : l;
    }), R$1.addIndex(R$1.map)(function (c, x) {
      return x ? c.split('&').map(function (q) {
        return q.split('=');
      }) : c;
    }), R$1.split('?'), R$1.replace(constants.templateBraceRegex, function (str) {
      var fromContext = str[1] === '+';
      var key = str.slice(1 + fromContext, str.length - 1);
      var value = (fromContext ? context : data)[key] || (fromContext ? constants.baseUrl : '');
      if (value) usedKeys.push(key);
      return value;
    }))(template);
    return {
      url: url,
      usedKeys: usedKeys
    };
  };
  /**
   * requestOptions should be the same as the axios options with the addition
   * of the ability to pass in the context to make testing easier.
   */


  proto.request = R$1.curryN(4, function () {
    var method = arguments.length > 1 ? arguments[1] : undefined;
    var templateOrId = arguments.length > 2 ? arguments[2] : undefined;
    var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var requestOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var context = requestOptions.context || api.context || {}; //data is overloaded.. it fills in template keys and is sent as the body
    //if the method is PUT/POST. this was changed in node-sdk at some point
    //if it becomes a problem consider removing used keys from body
    //also consider removing items from the body that are used in the template

    if (CONSTANTS.isServer) {
      var _api$parseTemplate = api.parseTemplate(context, templateOrId, data),
          url = _api$parseTemplate.url,
          usedKeys = _api$parseTemplate.usedKeys;

      var config = R$1.mergeDeepRight({
        headers: api.headers,
        method: method,
        url: url
      }, R$1.omit(['context'], requestOptions));

      if ([constants.verbs.POST, constants.verbs.PUT].map(function (str) {
        return str.toLowerCase();
      }).includes(method.toLowerCase())) {
        config.data = R$1.omit(usedKeys, data);
      }
    } else {
      //call api.request from server with the arguments passed in the body of the client request
      config = {
        method: 'POST',
        url: options.apiBasePath,
        data: {
          args: Array.from(arguments)
        },
        headers: headers
      };
    } //this is mainly being used to prevent infinite recursion from the auth step
    //it might not be necessary anymore


    if (requestOptions.internal) return api.requestClient(config);
    config = api.hookMap.beforeRequest(config);
    console.log(config);
    if (config instanceof Promise) return config;
    return api.hookMap.withRequest((config.headers[constants.headerPrefix + constants.headers.USERCLAIMS] ? Promise.resolve(config) : api.auth(R$1.merge({
      context: context
    }, config))).then(api.requestClient).then(function (response) {
      if (!requestOptions.preserveRequest) response = response.data;
      return api.hookMap.afterRequest(response);
    }));
  }); //#endregion request handler
  //#region set hookMap

  proto.hookMap = CONSTANTS.hooks.reduce(function (acc, hookName) {
    return R$1.set(R$1.lensProp(hookName), ifType('Function', options.hooks[hookName], function (x) {
      return x;
    }), acc);
  }, {}); //#endregion set hookMap
  //#region expand and build service tree / methods

  console.time('expand');
  var templateReference = definition.reference.template;
  var uncompressedServices = R$1.map(R$1.compose(R$1.replace('~', ''), R$1.join(''), R$1.map(function (piece) {
    return R$1.propOr(piece, piece, templateReference);
  }), splitWhenStr(R$1.test(constants.urlTemplateSplitRegex))), uncompressFlattened(definition, CONSTANTS.delimiter));
  var nodeActions = {}; //client tree

  var services = crawl(function (obj, key, path) {
    if (!obj.url || !obj.method) return obj;
    var url = obj.url,
        method = obj.method;

    var _url$split = url.split('?'),
        _url$split2 = _slicedToArray(_url$split, 2),
        route = _url$split2[0],
        _url$split2$ = _url$split2[1],
        query = _url$split2$ === void 0 ? '' : _url$split2$;

    var args = R$1.match(constants.templateBraceRegex, route).map(function (match) {
      var innerMatch = match.substring(1, match.length - 1);
      return innerMatch[0] === '+' ? '' : innerMatch;
    }).filter(Boolean);
    var params = R$1.match(constants.templateBraceRegex, query).map(function (match) {
      return match.substring(1, match.length - 1);
    });
    var request = proto.request(path, method, url); //store useful information on the method

    request.url = url;
    request.method = method;
    request.args = args;
    request.params = params;
    request.path = path;
    nodeActions[key] = request;
    return request;
  }, unflatten(uncompressedServices, {
    delimiter: CONSTANTS.delimiter
  }));
  console.timeEnd('expand'); //api.(set|post|etc)

  var methods = Object.values(constants.verbs).reduce(function (a, verb) {
    return R$1.merge(_defineProperty({}, verb.toLowerCase(), proto.request(verb)), a);
  }, {});
  proto.nodeActions = nodeActions; //#endregion expand and build service tree / methods
  // proto = R.merge(proto, methods)

  api = mixin(proto, R$1.merge(api, services)); //#region api utilities
  //api.client('commerce.order.getOrder', {orderId: 'asdf'})

  proto.client = function () {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return R$1.compose(function (client) {
      return isObj(client) ? api.resolve(client) : isFn(client) ? client.apply(void 0, args) : api.reject("invalid client path: ".concat(client));
    }, function (path) {
      return R$1.pathOr(path, util.detectPath(path), api);
    })(path);
  };

  proto.auth = authenticate(api); //#endregion api utilities

  console.timeEnd('construct api');
  return api;
};

Api.hooks = CONSTANTS.hooks;
Api.hookReference = CONSTANTS.hookReference;
Api.defaultOptions = CONSTANTS.defaultOptions;

module.exports = Api;
