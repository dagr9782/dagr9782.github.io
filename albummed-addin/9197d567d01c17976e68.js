var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _qo, _Ae, _Ae2, _Object$freeze, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150, _templateObject151, _templateObject152, _templateObject153, _templateObject154, _templateObject155, _templateObject156, _templateObject157, _templateObject158, _templateObject159, _templateObject160, _templateObject161, _templateObject162, _templateObject163, _templateObject164, _templateObject165, _templateObject166, _templateObject167, _templateObject168, _templateObject169, _templateObject170, _templateObject171, _templateObject172, _templateObject173, _templateObject174, _templateObject175, _templateObject176, _templateObject177, _templateObject178, _templateObject179, _templateObject180, _templateObject181, _templateObject182, _templateObject183, _templateObject184, _templateObject185, _templateObject186, _templateObject187, _templateObject188, _templateObject189, _templateObject190, _templateObject191, _templateObject192, _templateObject193, _templateObject194, _templateObject195, _templateObject196, _templateObject197, _templateObject198, _templateObject199;
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e83) { throw _e83; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e84) { didErr = true; err = _e84; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var t = function () {
  if ("undefined" != typeof globalThis) return globalThis;
  if ("undefined" != typeof global) return global;
  if ("undefined" != typeof self) return self;
  if ("undefined" != typeof window) return window;
  try {
    return new Function("return this")();
  } catch (t) {
    return {};
  }
}();
void 0 === t.trustedTypes && (t.trustedTypes = {
  createPolicy: function createPolicy(t, e) {
    return e;
  }
});
var e = {
  configurable: !1,
  enumerable: !1,
  writable: !1
};
void 0 === t.FAST && Reflect.defineProperty(t, "FAST", Object.assign({
  value: Object.create(null)
}, e));
var i = t.FAST;
if (void 0 === i.getById) {
  var _t2 = Object.create(null);
  Reflect.defineProperty(i, "getById", Object.assign({
    value: function value(e, i) {
      var o = _t2[e];
      return void 0 === o && (o = i ? _t2[e] = i() : null), o;
    }
  }, e));
}
var o = Object.freeze([]);
function s() {
  var t = new WeakMap();
  return function (e) {
    var i = t.get(e);
    if (void 0 === i) {
      var _o2 = Reflect.getPrototypeOf(e);
      for (; void 0 === i && null !== _o2;) {
        i = t.get(_o2), _o2 = Reflect.getPrototypeOf(_o2);
      }
      i = void 0 === i ? [] : i.slice(0), t.set(e, i);
    }
    return i;
  };
}
var n = t.FAST.getById(1, function () {
    var e = [],
      i = [];
    function o() {
      if (i.length) throw i.shift();
    }
    function s(t) {
      try {
        t.call();
      } catch (t) {
        i.push(t), setTimeout(o, 0);
      }
    }
    function n() {
      var t = 0;
      for (; t < e.length;) {
        if (s(e[t]), t++, t > 1024) {
          for (var _i2 = 0, _o3 = e.length - t; _i2 < _o3; _i2++) {
            e[_i2] = e[_i2 + t];
          }
          e.length -= t, t = 0;
        }
      }
      e.length = 0;
    }
    return Object.freeze({
      enqueue: function enqueue(i) {
        e.length < 1 && t.requestAnimationFrame(n), e.push(i);
      },
      process: n
    });
  }),
  r = t.trustedTypes.createPolicy("fast-html", {
    createHTML: function createHTML(t) {
      return t;
    }
  });
var a = r;
var l = "fast-" + Math.random().toString(36).substring(2, 8),
  c = l + "{",
  h = "}" + l,
  d = Object.freeze({
    supportsAdoptedStyleSheets: Array.isArray(document.adoptedStyleSheets) && "replace" in CSSStyleSheet.prototype,
    setHTMLPolicy: function setHTMLPolicy(t) {
      if (a !== r) throw new Error("The HTML policy can only be set once.");
      a = t;
    },
    createHTML: function createHTML(t) {
      return a.createHTML(t);
    },
    isMarker: function isMarker(t) {
      return t && 8 === t.nodeType && t.data.startsWith(l);
    },
    extractDirectiveIndexFromMarker: function extractDirectiveIndexFromMarker(t) {
      return parseInt(t.data.replace(l + ":", ""));
    },
    createInterpolationPlaceholder: function createInterpolationPlaceholder(t) {
      return "".concat(c).concat(t).concat(h);
    },
    createCustomAttributePlaceholder: function createCustomAttributePlaceholder(t, e) {
      return "".concat(t, "=\"").concat(this.createInterpolationPlaceholder(e), "\"");
    },
    createBlockPlaceholder: function createBlockPlaceholder(t) {
      return "<!--".concat(l, ":").concat(t, "-->");
    },
    queueUpdate: n.enqueue,
    processUpdates: n.process,
    nextUpdate: function nextUpdate() {
      return new Promise(n.enqueue);
    },
    setAttribute: function setAttribute(t, e, i) {
      null == i ? t.removeAttribute(e) : t.setAttribute(e, i);
    },
    setBooleanAttribute: function setBooleanAttribute(t, e, i) {
      i ? t.setAttribute(e, "") : t.removeAttribute(e);
    },
    removeChildNodes: function removeChildNodes(t) {
      for (var _e2 = t.firstChild; null !== _e2; _e2 = t.firstChild) {
        t.removeChild(_e2);
      }
    },
    createTemplateWalker: function createTemplateWalker(t) {
      return document.createTreeWalker(t, 133, null, !1);
    }
  });
var u = /*#__PURE__*/function () {
  function u(t, e) {
    _classCallCheck(this, u);
    this.sub1 = void 0, this.sub2 = void 0, this.spillover = void 0, this.source = t, this.sub1 = e;
  }
  _createClass(u, [{
    key: "has",
    value: function has(t) {
      return void 0 === this.spillover ? this.sub1 === t || this.sub2 === t : -1 !== this.spillover.indexOf(t);
    }
  }, {
    key: "subscribe",
    value: function subscribe(t) {
      var e = this.spillover;
      if (void 0 === e) {
        if (this.has(t)) return;
        if (void 0 === this.sub1) return void (this.sub1 = t);
        if (void 0 === this.sub2) return void (this.sub2 = t);
        this.spillover = [this.sub1, this.sub2, t], this.sub1 = void 0, this.sub2 = void 0;
      } else {
        -1 === e.indexOf(t) && e.push(t);
      }
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(t) {
      var e = this.spillover;
      if (void 0 === e) this.sub1 === t ? this.sub1 = void 0 : this.sub2 === t && (this.sub2 = void 0);else {
        var _i3 = e.indexOf(t);
        -1 !== _i3 && e.splice(_i3, 1);
      }
    }
  }, {
    key: "notify",
    value: function notify(t) {
      var e = this.spillover,
        i = this.source;
      if (void 0 === e) {
        var _e3 = this.sub1,
          _o4 = this.sub2;
        void 0 !== _e3 && _e3.handleChange(i, t), void 0 !== _o4 && _o4.handleChange(i, t);
      } else for (var _o5 = 0, _s2 = e.length; _o5 < _s2; ++_o5) {
        e[_o5].handleChange(i, t);
      }
    }
  }]);
  return u;
}();
var p = /*#__PURE__*/function () {
  function p(t) {
    _classCallCheck(this, p);
    this.subscribers = {}, this.sourceSubscribers = null, this.source = t;
  }
  _createClass(p, [{
    key: "notify",
    value: function notify(t) {
      var e;
      var i = this.subscribers[t];
      void 0 !== i && i.notify(t), null === (e = this.sourceSubscribers) || void 0 === e || e.notify(t);
    }
  }, {
    key: "subscribe",
    value: function subscribe(t, e) {
      var i;
      if (e) {
        var _i4 = this.subscribers[e];
        void 0 === _i4 && (this.subscribers[e] = _i4 = new u(this.source)), _i4.subscribe(t);
      } else this.sourceSubscribers = null !== (i = this.sourceSubscribers) && void 0 !== i ? i : new u(this.source), this.sourceSubscribers.subscribe(t);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(t, e) {
      var i;
      if (e) {
        var _i5 = this.subscribers[e];
        void 0 !== _i5 && _i5.unsubscribe(t);
      } else null === (i = this.sourceSubscribers) || void 0 === i || i.unsubscribe(t);
    }
  }]);
  return p;
}();
var g = i.getById(2, function () {
  var t = /(:|&&|\|\||if)/,
    e = new WeakMap(),
    i = d.queueUpdate;
  var o = void 0,
    n = function n(t) {
      throw new Error("Must call enableArrayObservation before observing arrays.");
    };
  function r(t) {
    var i = t.$fastController || e.get(t);
    return void 0 === i && (Array.isArray(t) ? i = n(t) : e.set(t, i = new p(t))), i;
  }
  var a = s();
  var l = /*#__PURE__*/function () {
    function l(t) {
      _classCallCheck(this, l);
      this.name = t, this.field = "_" + t, this.callback = t + "Changed";
    }
    _createClass(l, [{
      key: "getValue",
      value: function getValue(t) {
        return void 0 !== o && o.watch(t, this.name), t[this.field];
      }
    }, {
      key: "setValue",
      value: function setValue(t, e) {
        var i = this.field,
          o = t[i];
        if (o !== e) {
          t[i] = e;
          var _s3 = t[this.callback];
          "function" == typeof _s3 && _s3.call(t, o, e), r(t).notify(this.name);
        }
      }
    }]);
    return l;
  }();
  var c = /*#__PURE__*/function (_u2) {
    _inherits(c, _u2);
    var _super = _createSuper(c);
    function c(t, e) {
      var _this;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      _classCallCheck(this, c);
      _this = _super.call(this, t, e), _this.binding = t, _this.isVolatileBinding = i, _this.needsRefresh = !0, _this.needsQueue = !0, _this.first = _assertThisInitialized(_this), _this.last = null, _this.propertySource = void 0, _this.propertyName = void 0, _this.notifier = void 0, _this.next = void 0;
      return _this;
    }
    _createClass(c, [{
      key: "observe",
      value: function observe(t, e) {
        this.needsRefresh && null !== this.last && this.disconnect();
        var i = o;
        o = this.needsRefresh ? this : void 0, this.needsRefresh = this.isVolatileBinding;
        var s = this.binding(t, e);
        return o = i, s;
      }
    }, {
      key: "disconnect",
      value: function disconnect() {
        if (null !== this.last) {
          var _t3 = this.first;
          for (; void 0 !== _t3;) {
            _t3.notifier.unsubscribe(this, _t3.propertyName), _t3 = _t3.next;
          }
          this.last = null, this.needsRefresh = this.needsQueue = !0;
        }
      }
    }, {
      key: "watch",
      value: function watch(t, e) {
        var i = this.last,
          s = r(t),
          n = null === i ? this.first : {};
        if (n.propertySource = t, n.propertyName = e, n.notifier = s, s.subscribe(this, e), null !== i) {
          if (!this.needsRefresh) {
            var _e4;
            o = void 0, _e4 = i.propertySource[i.propertyName], o = this, t === _e4 && (this.needsRefresh = !0);
          }
          i.next = n;
        }
        this.last = n;
      }
    }, {
      key: "handleChange",
      value: function handleChange() {
        this.needsQueue && (this.needsQueue = !1, i(this));
      }
    }, {
      key: "call",
      value: function call() {
        null !== this.last && (this.needsQueue = !0, this.notify(this));
      }
    }, {
      key: "records",
      value: function records() {
        var t = this.first;
        return _defineProperty({
          next: function next() {
            var e = t;
            return void 0 === e ? {
              value: void 0,
              done: !0
            } : (t = t.next, {
              value: e,
              done: !1
            });
          }
        }, Symbol.iterator, function () {
          return this;
        });
      }
    }]);
    return c;
  }(u);
  return Object.freeze({
    setArrayObserverFactory: function setArrayObserverFactory(t) {
      n = t;
    },
    getNotifier: r,
    track: function track(t, e) {
      void 0 !== o && o.watch(t, e);
    },
    trackVolatile: function trackVolatile() {
      void 0 !== o && (o.needsRefresh = !0);
    },
    notify: function notify(t, e) {
      r(t).notify(e);
    },
    defineProperty: function defineProperty(t, e) {
      "string" == typeof e && (e = new l(e)), a(t).push(e), Reflect.defineProperty(t, e.name, {
        enumerable: !0,
        get: function get() {
          return e.getValue(this);
        },
        set: function set(t) {
          e.setValue(this, t);
        }
      });
    },
    getAccessors: a,
    binding: function binding(t, e) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.isVolatileBinding(t);
      return new c(t, e, i);
    },
    isVolatileBinding: function isVolatileBinding(e) {
      return t.test(e.toString());
    }
  });
});
function f(t, e) {
  g.defineProperty(t, e);
}
var m = i.getById(3, function () {
  var t = null;
  return {
    get: function get() {
      return t;
    },
    set: function set(e) {
      t = e;
    }
  };
});
var v = /*#__PURE__*/function () {
  function v() {
    _classCallCheck(this, v);
    this.index = 0, this.length = 0, this.parent = null, this.parentContext = null;
  }
  _createClass(v, [{
    key: "event",
    get: function get() {
      return m.get();
    }
  }, {
    key: "isEven",
    get: function get() {
      return this.index % 2 == 0;
    }
  }, {
    key: "isOdd",
    get: function get() {
      return this.index % 2 != 0;
    }
  }, {
    key: "isFirst",
    get: function get() {
      return 0 === this.index;
    }
  }, {
    key: "isInMiddle",
    get: function get() {
      return !this.isFirst && !this.isLast;
    }
  }, {
    key: "isLast",
    get: function get() {
      return this.index === this.length - 1;
    }
  }], [{
    key: "setEvent",
    value: function setEvent(t) {
      m.set(t);
    }
  }]);
  return v;
}();
g.defineProperty(v.prototype, "index"), g.defineProperty(v.prototype, "length");
var b = Object.seal(new v());
var y = /*#__PURE__*/_createClass(function y() {
  _classCallCheck(this, y);
  this.targetIndex = 0;
});
var x = /*#__PURE__*/function (_y) {
  _inherits(x, _y);
  var _super2 = _createSuper(x);
  function x() {
    var _this2;
    _classCallCheck(this, x);
    _this2 = _super2.apply(this, arguments), _this2.createPlaceholder = d.createInterpolationPlaceholder;
    return _this2;
  }
  return _createClass(x);
}(y);
var $ = /*#__PURE__*/function (_y2) {
  _inherits($, _y2);
  var _super3 = _createSuper($);
  function $(t, e, i) {
    var _this3;
    _classCallCheck(this, $);
    _this3 = _super3.call(this), _this3.name = t, _this3.behavior = e, _this3.options = i;
    return _this3;
  }
  _createClass($, [{
    key: "createPlaceholder",
    value: function createPlaceholder(t) {
      return d.createCustomAttributePlaceholder(this.name, t);
    }
  }, {
    key: "createBehavior",
    value: function createBehavior(t) {
      return new this.behavior(t, this.options);
    }
  }]);
  return $;
}(y);
function w(t, e) {
  this.source = t, this.context = e, null === this.bindingObserver && (this.bindingObserver = g.binding(this.binding, this, this.isBindingVolatile)), this.updateTarget(this.bindingObserver.observe(t, e));
}
function k(t, e) {
  this.source = t, this.context = e, this.target.addEventListener(this.targetName, this);
}
function C() {
  this.bindingObserver.disconnect(), this.source = null, this.context = null;
}
function I() {
  this.bindingObserver.disconnect(), this.source = null, this.context = null;
  var t = this.target.$fastView;
  void 0 !== t && t.isComposed && (t.unbind(), t.needsBindOnly = !0);
}
function F() {
  this.target.removeEventListener(this.targetName, this), this.source = null, this.context = null;
}
function D(t) {
  d.setAttribute(this.target, this.targetName, t);
}
function T(t) {
  d.setBooleanAttribute(this.target, this.targetName, t);
}
function S(t) {
  if (null == t && (t = ""), t.create) {
    this.target.textContent = "";
    var _e5 = this.target.$fastView;
    void 0 === _e5 ? _e5 = t.create() : this.target.$fastTemplate !== t && (_e5.isComposed && (_e5.remove(), _e5.unbind()), _e5 = t.create()), _e5.isComposed ? _e5.needsBindOnly && (_e5.needsBindOnly = !1, _e5.bind(this.source, this.context)) : (_e5.isComposed = !0, _e5.bind(this.source, this.context), _e5.insertBefore(this.target), this.target.$fastView = _e5, this.target.$fastTemplate = t);
  } else {
    var _e6 = this.target.$fastView;
    void 0 !== _e6 && _e6.isComposed && (_e6.isComposed = !1, _e6.remove(), _e6.needsBindOnly ? _e6.needsBindOnly = !1 : _e6.unbind()), this.target.textContent = t;
  }
}
function O(t) {
  this.target[this.targetName] = t;
}
function E(t) {
  var e = this.classVersions || Object.create(null),
    i = this.target;
  var o = this.version || 0;
  if (null != t && t.length) {
    var _s4 = t.split(/\s+/);
    for (var _t4 = 0, _n2 = _s4.length; _t4 < _n2; ++_t4) {
      var _n3 = _s4[_t4];
      "" !== _n3 && (e[_n3] = o, i.classList.add(_n3));
    }
  }
  if (this.classVersions = e, this.version = o + 1, 0 !== o) {
    o -= 1;
    for (var _t5 in e) {
      e[_t5] === o && i.classList.remove(_t5);
    }
  }
}
var V = /*#__PURE__*/function (_x) {
  _inherits(V, _x);
  var _super4 = _createSuper(V);
  function V(t) {
    var _this4;
    _classCallCheck(this, V);
    _this4 = _super4.call(this), _this4.binding = t, _this4.bind = w, _this4.unbind = C, _this4.updateTarget = D, _this4.isBindingVolatile = g.isVolatileBinding(_this4.binding);
    return _this4;
  }
  _createClass(V, [{
    key: "targetName",
    get: function get() {
      return this.originalTargetName;
    },
    set: function set(t) {
      if (this.originalTargetName = t, void 0 !== t) switch (t[0]) {
        case ":":
          if (this.cleanedTargetName = t.substr(1), this.updateTarget = O, "innerHTML" === this.cleanedTargetName) {
            var _t6 = this.binding;
            this.binding = function (e, i) {
              return d.createHTML(_t6(e, i));
            };
          }
          break;
        case "?":
          this.cleanedTargetName = t.substr(1), this.updateTarget = T;
          break;
        case "@":
          this.cleanedTargetName = t.substr(1), this.bind = k, this.unbind = F;
          break;
        default:
          this.cleanedTargetName = t, "class" === t && (this.updateTarget = E);
      }
    }
  }, {
    key: "targetAtContent",
    value: function targetAtContent() {
      this.updateTarget = S, this.unbind = I;
    }
  }, {
    key: "createBehavior",
    value: function createBehavior(t) {
      return new R(t, this.binding, this.isBindingVolatile, this.bind, this.unbind, this.updateTarget, this.cleanedTargetName);
    }
  }]);
  return V;
}(x);
var R = /*#__PURE__*/function () {
  function R(t, e, i, o, s, n, r) {
    _classCallCheck(this, R);
    this.source = null, this.context = null, this.bindingObserver = null, this.target = t, this.binding = e, this.isBindingVolatile = i, this.bind = o, this.unbind = s, this.updateTarget = n, this.targetName = r;
  }
  _createClass(R, [{
    key: "handleChange",
    value: function handleChange() {
      this.updateTarget(this.bindingObserver.observe(this.source, this.context));
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(t) {
      v.setEvent(t);
      var e = this.binding(this.source, this.context);
      v.setEvent(null), !0 !== e && t.preventDefault();
    }
  }]);
  return R;
}();
var A = null;
var L = /*#__PURE__*/function () {
  function L() {
    _classCallCheck(this, L);
  }
  _createClass(L, [{
    key: "addFactory",
    value: function addFactory(t) {
      t.targetIndex = this.targetIndex, this.behaviorFactories.push(t);
    }
  }, {
    key: "captureContentBinding",
    value: function captureContentBinding(t) {
      t.targetAtContent(), this.addFactory(t);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.behaviorFactories = [], this.targetIndex = -1;
    }
  }, {
    key: "release",
    value: function release() {
      A = this;
    }
  }], [{
    key: "borrow",
    value: function borrow(t) {
      var e = A || new L();
      return e.directives = t, e.reset(), A = null, e;
    }
  }]);
  return L;
}();
function P(t) {
  if (1 === t.length) return t[0];
  var e;
  var i = t.length,
    o = t.map(function (t) {
      return "string" == typeof t ? function () {
        return t;
      } : (e = t.targetName || e, t.binding);
    }),
    s = new V(function (t, e) {
      var s = "";
      for (var _n4 = 0; _n4 < i; ++_n4) {
        s += o[_n4](t, e);
      }
      return s;
    });
  return s.targetName = e, s;
}
var z = h.length;
function H(t, e) {
  var i = e.split(c);
  if (1 === i.length) return null;
  var o = [];
  for (var _e7 = 0, _s5 = i.length; _e7 < _s5; ++_e7) {
    var _s6 = i[_e7],
      _n5 = _s6.indexOf(h);
    var _r2 = void 0;
    if (-1 === _n5) _r2 = _s6;else {
      var _e8 = parseInt(_s6.substring(0, _n5));
      o.push(t.directives[_e8]), _r2 = _s6.substring(_n5 + z);
    }
    "" !== _r2 && o.push(_r2);
  }
  return o;
}
function M(t, e) {
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
  var o = e.attributes;
  var _loop = function _loop(_s8, _n7) {
    var r = o[_s8],
      a = r.value,
      l = H(t, a);
    var c = null;
    null === l ? i && (c = new V(function () {
      return a;
    }), c.targetName = r.name) : c = P(l), null !== c && (e.removeAttributeNode(r), _s8--, _n7--, t.addFactory(c));
    _s7 = _s8;
    _n6 = _n7;
  };
  for (var _s7 = 0, _n6 = o.length; _s7 < _n6; ++_s7) {
    _loop(_s7, _n6);
  }
}
function B(t, e, i) {
  var o = H(t, e.textContent);
  if (null !== o) {
    var _s9 = e;
    for (var _n8 = 0, _r3 = o.length; _n8 < _r3; ++_n8) {
      var _r4 = o[_n8],
        _a2 = 0 === _n8 ? e : _s9.parentNode.insertBefore(document.createTextNode(""), _s9.nextSibling);
      "string" == typeof _r4 ? _a2.textContent = _r4 : (_a2.textContent = " ", t.captureContentBinding(_r4)), _s9 = _a2, t.targetIndex++, _a2 !== e && i.nextNode();
    }
    t.targetIndex--;
  }
}
var N = document.createRange();
var j = /*#__PURE__*/function () {
  function j(t, e) {
    _classCallCheck(this, j);
    this.fragment = t, this.behaviors = e, this.source = null, this.context = null, this.firstChild = t.firstChild, this.lastChild = t.lastChild;
  }
  _createClass(j, [{
    key: "appendTo",
    value: function appendTo(t) {
      t.appendChild(this.fragment);
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(t) {
      if (this.fragment.hasChildNodes()) t.parentNode.insertBefore(this.fragment, t);else {
        var _e9 = this.lastChild;
        if (t.previousSibling === _e9) return;
        var _i6 = t.parentNode;
        var _o6,
          _s10 = this.firstChild;
        for (; _s10 !== _e9;) {
          _o6 = _s10.nextSibling, _i6.insertBefore(_s10, t), _s10 = _o6;
        }
        _i6.insertBefore(_e9, t);
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      var t = this.fragment,
        e = this.lastChild;
      var i,
        o = this.firstChild;
      for (; o !== e;) {
        i = o.nextSibling, t.appendChild(o), o = i;
      }
      t.appendChild(e);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var t = this.firstChild.parentNode,
        e = this.lastChild;
      var i,
        o = this.firstChild;
      for (; o !== e;) {
        i = o.nextSibling, t.removeChild(o), o = i;
      }
      t.removeChild(e);
      var s = this.behaviors,
        n = this.source;
      for (var _t7 = 0, _e10 = s.length; _t7 < _e10; ++_t7) {
        s[_t7].unbind(n);
      }
    }
  }, {
    key: "bind",
    value: function bind(t, e) {
      var i = this.behaviors;
      if (this.source !== t) if (null !== this.source) {
        var _o7 = this.source;
        this.source = t, this.context = e;
        for (var _s11 = 0, _n9 = i.length; _s11 < _n9; ++_s11) {
          var _n10 = i[_s11];
          _n10.unbind(_o7), _n10.bind(t, e);
        }
      } else {
        this.source = t, this.context = e;
        for (var _o8 = 0, _s12 = i.length; _o8 < _s12; ++_o8) {
          i[_o8].bind(t, e);
        }
      }
    }
  }, {
    key: "unbind",
    value: function unbind() {
      if (null === this.source) return;
      var t = this.behaviors,
        e = this.source;
      for (var _i7 = 0, _o9 = t.length; _i7 < _o9; ++_i7) {
        t[_i7].unbind(e);
      }
      this.source = null;
    }
  }], [{
    key: "disposeContiguousBatch",
    value: function disposeContiguousBatch(t) {
      if (0 !== t.length) {
        N.setStartBefore(t[0].firstChild), N.setEndAfter(t[t.length - 1].lastChild), N.deleteContents();
        for (var _e11 = 0, _i8 = t.length; _e11 < _i8; ++_e11) {
          var _i9 = t[_e11],
            _o10 = _i9.behaviors,
            _s13 = _i9.source;
          for (var _t8 = 0, _e12 = _o10.length; _t8 < _e12; ++_t8) {
            _o10[_t8].unbind(_s13);
          }
        }
      }
    }
  }]);
  return j;
}();
var U = /*#__PURE__*/function () {
  function U(t, e) {
    _classCallCheck(this, U);
    this.behaviorCount = 0, this.hasHostBehaviors = !1, this.fragment = null, this.targetOffset = 0, this.viewBehaviorFactories = null, this.hostBehaviorFactories = null, this.html = t, this.directives = e;
  }
  _createClass(U, [{
    key: "create",
    value: function create(t) {
      if (null === this.fragment) {
        var _t9;
        var _e13 = this.html;
        if ("string" == typeof _e13) {
          _t9 = document.createElement("template"), _t9.innerHTML = d.createHTML(_e13);
          var _i11 = _t9.content.firstElementChild;
          null !== _i11 && "TEMPLATE" === _i11.tagName && (_t9 = _i11);
        } else _t9 = _e13;
        var _i10 = function (t, e) {
          var i = t.content;
          document.adoptNode(i);
          var o = L.borrow(e);
          M(o, t, !0);
          var s = o.behaviorFactories;
          o.reset();
          var n = d.createTemplateWalker(i);
          var r;
          for (; r = n.nextNode();) {
            switch (o.targetIndex++, r.nodeType) {
              case 1:
                M(o, r);
                break;
              case 3:
                B(o, r, n);
                break;
              case 8:
                d.isMarker(r) && o.addFactory(e[d.extractDirectiveIndexFromMarker(r)]);
            }
          }
          var a = 0;
          (d.isMarker(i.firstChild) || 1 === i.childNodes.length && e.length) && (i.insertBefore(document.createComment(""), i.firstChild), a = -1);
          var l = o.behaviorFactories;
          return o.release(), {
            fragment: i,
            viewBehaviorFactories: l,
            hostBehaviorFactories: s,
            targetOffset: a
          };
        }(_t9, this.directives);
        this.fragment = _i10.fragment, this.viewBehaviorFactories = _i10.viewBehaviorFactories, this.hostBehaviorFactories = _i10.hostBehaviorFactories, this.targetOffset = _i10.targetOffset, this.behaviorCount = this.viewBehaviorFactories.length + this.hostBehaviorFactories.length, this.hasHostBehaviors = this.hostBehaviorFactories.length > 0;
      }
      var e = this.fragment.cloneNode(!0),
        i = this.viewBehaviorFactories,
        o = new Array(this.behaviorCount),
        s = d.createTemplateWalker(e);
      var n = 0,
        r = this.targetOffset,
        a = s.nextNode();
      for (var _t10 = i.length; n < _t10; ++n) {
        var _t11 = i[n],
          _e14 = _t11.targetIndex;
        for (; null !== a;) {
          if (r === _e14) {
            o[n] = _t11.createBehavior(a);
            break;
          }
          a = s.nextNode(), r++;
        }
      }
      if (this.hasHostBehaviors) {
        var _e15 = this.hostBehaviorFactories;
        for (var _i12 = 0, _s14 = _e15.length; _i12 < _s14; ++_i12, ++n) {
          o[n] = _e15[_i12].createBehavior(t);
        }
      }
      return new j(e, o);
    }
  }, {
    key: "render",
    value: function render(t, e, i) {
      "string" == typeof e && (e = document.getElementById(e)), void 0 === i && (i = e);
      var o = this.create(i);
      return o.bind(t, b), o.appendTo(e), o;
    }
  }]);
  return U;
}();
var q = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
function _(t) {
  var i = [];
  var o = "";
  for (var _s15 = 0, _n11 = t.length - 1; _s15 < _n11; ++_s15) {
    var _n12 = t[_s15];
    var _r5 = _s15 + 1 < 1 || arguments.length <= _s15 + 1 ? undefined : arguments[_s15 + 1];
    if (o += _n12, _r5 instanceof U) {
      (function () {
        var t = _r5;
        _r5 = function _r5() {
          return t;
        };
      })();
    }
    if ("function" == typeof _r5 && (_r5 = new V(_r5)), _r5 instanceof x) {
      var _t12 = q.exec(_n12);
      null !== _t12 && (_r5.targetName = _t12[2]);
    }
    _r5 instanceof y ? (o += _r5.createPlaceholder(i.length), i.push(_r5)) : o += _r5;
  }
  return o += t[t.length - 1], new U(o, i);
}
var G = /*#__PURE__*/function () {
  function G() {
    _classCallCheck(this, G);
    this.targets = new WeakSet();
  }
  _createClass(G, [{
    key: "addStylesTo",
    value: function addStylesTo(t) {
      this.targets.add(t);
    }
  }, {
    key: "removeStylesFrom",
    value: function removeStylesFrom(t) {
      this.targets.delete(t);
    }
  }, {
    key: "isAttachedTo",
    value: function isAttachedTo(t) {
      return this.targets.has(t);
    }
  }, {
    key: "withBehaviors",
    value: function withBehaviors() {
      for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
        t[_key] = arguments[_key];
      }
      return this.behaviors = null === this.behaviors ? t : this.behaviors.concat(t), this;
    }
  }]);
  return G;
}();
function W(t) {
  return t.map(function (t) {
    return t instanceof G ? W(t.styles) : [t];
  }).reduce(function (t, e) {
    return t.concat(e);
  }, []);
}
function K(t) {
  return t.map(function (t) {
    return t instanceof G ? t.behaviors : null;
  }).reduce(function (t, e) {
    return null === e ? t : (null === t && (t = []), t.concat(e));
  }, null);
}
G.create = function () {
  if (d.supportsAdoptedStyleSheets) {
    var _t13 = new Map();
    return function (e) {
      return new X(e, _t13);
    };
  }
  return function (t) {
    return new Q(t);
  };
}();
var X = /*#__PURE__*/function (_G) {
  _inherits(X, _G);
  var _super5 = _createSuper(X);
  function X(t, e) {
    var _this5;
    _classCallCheck(this, X);
    _this5 = _super5.call(this), _this5.styles = t, _this5.styleSheetCache = e, _this5._styleSheets = void 0, _this5.behaviors = K(t);
    return _this5;
  }
  _createClass(X, [{
    key: "styleSheets",
    get: function get() {
      if (void 0 === this._styleSheets) {
        var _t14 = this.styles,
          _e16 = this.styleSheetCache;
        this._styleSheets = W(_t14).map(function (t) {
          if (t instanceof CSSStyleSheet) return t;
          var i = _e16.get(t);
          return void 0 === i && (i = new CSSStyleSheet(), i.replaceSync(t), _e16.set(t, i)), i;
        });
      }
      return this._styleSheets;
    }
  }, {
    key: "addStylesTo",
    value: function addStylesTo(t) {
      t.adoptedStyleSheets = [].concat(_toConsumableArray(t.adoptedStyleSheets), _toConsumableArray(this.styleSheets)), _get(_getPrototypeOf(X.prototype), "addStylesTo", this).call(this, t);
    }
  }, {
    key: "removeStylesFrom",
    value: function removeStylesFrom(t) {
      var e = this.styleSheets;
      t.adoptedStyleSheets = t.adoptedStyleSheets.filter(function (t) {
        return -1 === e.indexOf(t);
      }), _get(_getPrototypeOf(X.prototype), "removeStylesFrom", this).call(this, t);
    }
  }]);
  return X;
}(G);
var Y = 0;
var Q = /*#__PURE__*/function (_G2) {
  _inherits(Q, _G2);
  var _super6 = _createSuper(Q);
  function Q(t) {
    var _this6;
    _classCallCheck(this, Q);
    _this6 = _super6.call(this), _this6.styles = t, _this6.behaviors = null, _this6.behaviors = K(t), _this6.styleSheets = W(t), _this6.styleClass = "fast-style-class-" + ++Y;
    return _this6;
  }
  _createClass(Q, [{
    key: "addStylesTo",
    value: function addStylesTo(t) {
      var e = this.styleSheets,
        i = this.styleClass;
      t = this.normalizeTarget(t);
      for (var _o11 = 0; _o11 < e.length; _o11++) {
        var _s16 = document.createElement("style");
        _s16.innerHTML = e[_o11], _s16.className = i, t.append(_s16);
      }
      _get(_getPrototypeOf(Q.prototype), "addStylesTo", this).call(this, t);
    }
  }, {
    key: "removeStylesFrom",
    value: function removeStylesFrom(t) {
      var e = (t = this.normalizeTarget(t)).querySelectorAll("." + this.styleClass);
      for (var _i13 = 0, _o12 = e.length; _i13 < _o12; ++_i13) {
        t.removeChild(e[_i13]);
      }
      _get(_getPrototypeOf(Q.prototype), "removeStylesFrom", this).call(this, t);
    }
  }, {
    key: "isAttachedTo",
    value: function isAttachedTo(t) {
      return _get(_getPrototypeOf(Q.prototype), "isAttachedTo", this).call(this, this.normalizeTarget(t));
    }
  }, {
    key: "normalizeTarget",
    value: function normalizeTarget(t) {
      return t === document ? document.body : t;
    }
  }]);
  return Q;
}(G);
var Z = Object.freeze({
    locate: s()
  }),
  J = {
    toView: function toView(t) {
      return t ? "true" : "false";
    },
    fromView: function fromView(t) {
      return null != t && "false" !== t && !1 !== t && 0 !== t;
    }
  },
  tt = {
    toView: function toView(t) {
      if (null == t) return null;
      var e = 1 * t;
      return isNaN(e) ? null : e.toString();
    },
    fromView: function fromView(t) {
      if (null == t) return null;
      var e = 1 * t;
      return isNaN(e) ? null : e;
    }
  };
var et = /*#__PURE__*/function () {
  function et(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e.toLowerCase();
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "reflect";
    var s = arguments.length > 4 ? arguments[4] : undefined;
    _classCallCheck(this, et);
    this.guards = new Set(), this.Owner = t, this.name = e, this.attribute = i, this.mode = o, this.converter = s, this.fieldName = "_" + e, this.callbackName = e + "Changed", this.hasCallback = this.callbackName in t.prototype, "boolean" === o && void 0 === s && (this.converter = J);
  }
  _createClass(et, [{
    key: "setValue",
    value: function setValue(t, e) {
      var i = t[this.fieldName],
        o = this.converter;
      void 0 !== o && (e = o.fromView(e)), i !== e && (t[this.fieldName] = e, this.tryReflectToAttribute(t), this.hasCallback && t[this.callbackName](i, e), t.$fastController.notify(this.name));
    }
  }, {
    key: "getValue",
    value: function getValue(t) {
      return g.track(t, this.name), t[this.fieldName];
    }
  }, {
    key: "onAttributeChangedCallback",
    value: function onAttributeChangedCallback(t, e) {
      this.guards.has(t) || (this.guards.add(t), this.setValue(t, e), this.guards.delete(t));
    }
  }, {
    key: "tryReflectToAttribute",
    value: function tryReflectToAttribute(t) {
      var _this7 = this;
      var e = this.mode,
        i = this.guards;
      i.has(t) || "fromView" === e || d.queueUpdate(function () {
        i.add(t);
        var o = t[_this7.fieldName];
        switch (e) {
          case "reflect":
            var _e17 = _this7.converter;
            d.setAttribute(t, _this7.attribute, void 0 !== _e17 ? _e17.toView(o) : o);
            break;
          case "boolean":
            d.setBooleanAttribute(t, _this7.attribute, o);
        }
        i.delete(t);
      });
    }
  }], [{
    key: "collect",
    value: function collect(t) {
      var i = [];
      for (var _len2 = arguments.length, e = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }
      e.push(Z.locate(t));
      for (var _o13 = 0, _s17 = e.length; _o13 < _s17; ++_o13) {
        var _s18 = e[_o13];
        if (void 0 !== _s18) for (var _e18 = 0, _o14 = _s18.length; _e18 < _o14; ++_e18) {
          var _o15 = _s18[_e18];
          "string" == typeof _o15 ? i.push(new et(t, _o15)) : i.push(new et(t, _o15.property, _o15.attribute, _o15.mode, _o15.converter));
        }
      }
      return i;
    }
  }]);
  return et;
}();
function it(t, e) {
  var i;
  function o(t, e) {
    arguments.length > 1 && (i.property = e), Z.locate(t.constructor).push(i);
  }
  return arguments.length > 1 ? (i = {}, void o(t, e)) : (i = void 0 === t ? {} : t, o);
}
var ot = {
    mode: "open"
  },
  st = {},
  nt = i.getById(4, function () {
    var t = new Map();
    return Object.freeze({
      register: function register(e) {
        return !t.has(e.type) && (t.set(e.type, e), !0);
      },
      getByType: function getByType(e) {
        return t.get(e);
      }
    });
  });
var rt = /*#__PURE__*/function () {
  function rt(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t.definition;
    _classCallCheck(this, rt);
    "string" == typeof e && (e = {
      name: e
    }), this.type = t, this.name = e.name, this.template = e.template;
    var i = et.collect(t, e.attributes),
      o = new Array(i.length),
      s = {},
      n = {};
    for (var _t15 = 0, _e19 = i.length; _t15 < _e19; ++_t15) {
      var _e20 = i[_t15];
      o[_t15] = _e20.attribute, s[_e20.name] = _e20, n[_e20.attribute] = _e20;
    }
    this.attributes = i, this.observedAttributes = o, this.propertyLookup = s, this.attributeLookup = n, this.shadowOptions = void 0 === e.shadowOptions ? ot : null === e.shadowOptions ? void 0 : Object.assign(Object.assign({}, ot), e.shadowOptions), this.elementOptions = void 0 === e.elementOptions ? st : Object.assign(Object.assign({}, st), e.elementOptions), this.styles = void 0 === e.styles ? void 0 : Array.isArray(e.styles) ? G.create(e.styles) : e.styles instanceof G ? e.styles : G.create([e.styles]);
  }
  _createClass(rt, [{
    key: "isDefined",
    get: function get() {
      return !!nt.getByType(this.type);
    }
  }, {
    key: "define",
    value: function define() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : customElements;
      var e = this.type;
      if (nt.register(this)) {
        var _t16 = this.attributes,
          _i14 = e.prototype;
        for (var _e21 = 0, _o16 = _t16.length; _e21 < _o16; ++_e21) {
          g.defineProperty(_i14, _t16[_e21]);
        }
        Reflect.defineProperty(e, "observedAttributes", {
          value: this.observedAttributes,
          enumerable: !0
        });
      }
      return t.get(this.name) || t.define(this.name, e, this.elementOptions), this;
    }
  }]);
  return rt;
}();
rt.forType = nt.getByType;
var at = new WeakMap(),
  lt = {
    bubbles: !0,
    composed: !0,
    cancelable: !0
  };
function ct(t) {
  return t.shadowRoot || at.get(t) || null;
}
var ht = /*#__PURE__*/function (_p2) {
  _inherits(ht, _p2);
  var _super7 = _createSuper(ht);
  function ht(t, e) {
    var _this8;
    _classCallCheck(this, ht);
    _this8 = _super7.call(this, t), _this8.boundObservables = null, _this8.behaviors = null, _this8.needsInitialization = !0, _this8._template = null, _this8._styles = null, _this8._isConnected = !1, _this8.$fastController = _assertThisInitialized(_this8), _this8.view = null, _this8.element = t, _this8.definition = e;
    var i = e.shadowOptions;
    if (void 0 !== i) {
      var _e22 = t.attachShadow(i);
      "closed" === i.mode && at.set(t, _e22);
    }
    var o = g.getAccessors(t);
    if (o.length > 0) {
      var _e23 = _this8.boundObservables = Object.create(null);
      for (var _i15 = 0, _s19 = o.length; _i15 < _s19; ++_i15) {
        var _s20 = o[_i15].name,
          _n13 = t[_s20];
        void 0 !== _n13 && (delete t[_s20], _e23[_s20] = _n13);
      }
    }
    return _this8;
  }
  _createClass(ht, [{
    key: "isConnected",
    get: function get() {
      return g.track(this, "isConnected"), this._isConnected;
    }
  }, {
    key: "setIsConnected",
    value: function setIsConnected(t) {
      this._isConnected = t, g.notify(this, "isConnected");
    }
  }, {
    key: "template",
    get: function get() {
      return this._template;
    },
    set: function set(t) {
      this._template !== t && (this._template = t, this.needsInitialization || this.renderTemplate(t));
    }
  }, {
    key: "styles",
    get: function get() {
      return this._styles;
    },
    set: function set(t) {
      this._styles !== t && (null !== this._styles && this.removeStyles(this._styles), this._styles = t, this.needsInitialization || null === t || this.addStyles(t));
    }
  }, {
    key: "addStyles",
    value: function addStyles(t) {
      var e = ct(this.element) || this.element.getRootNode();
      if (t instanceof HTMLStyleElement) e.append(t);else if (!t.isAttachedTo(e)) {
        var _i16 = t.behaviors;
        t.addStylesTo(e), null !== _i16 && this.addBehaviors(_i16);
      }
    }
  }, {
    key: "removeStyles",
    value: function removeStyles(t) {
      var e = ct(this.element) || this.element.getRootNode();
      if (t instanceof HTMLStyleElement) e.removeChild(t);else if (t.isAttachedTo(e)) {
        var _i17 = t.behaviors;
        t.removeStylesFrom(e), null !== _i17 && this.removeBehaviors(_i17);
      }
    }
  }, {
    key: "addBehaviors",
    value: function addBehaviors(t) {
      var e = this.behaviors || (this.behaviors = new Map()),
        i = t.length,
        o = [];
      for (var _s21 = 0; _s21 < i; ++_s21) {
        var _i18 = t[_s21];
        e.has(_i18) ? e.set(_i18, e.get(_i18) + 1) : (e.set(_i18, 1), o.push(_i18));
      }
      if (this._isConnected) {
        var _t17 = this.element;
        for (var _e24 = 0; _e24 < o.length; ++_e24) {
          o[_e24].bind(_t17, b);
        }
      }
    }
  }, {
    key: "removeBehaviors",
    value: function removeBehaviors(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      var i = this.behaviors;
      if (null === i) return;
      var o = t.length,
        s = [];
      for (var _n14 = 0; _n14 < o; ++_n14) {
        var _o17 = t[_n14];
        if (i.has(_o17)) {
          var _t18 = i.get(_o17) - 1;
          0 === _t18 || e ? i.delete(_o17) && s.push(_o17) : i.set(_o17, _t18);
        }
      }
      if (this._isConnected) {
        var _t19 = this.element;
        for (var _e25 = 0; _e25 < s.length; ++_e25) {
          s[_e25].unbind(_t19);
        }
      }
    }
  }, {
    key: "onConnectedCallback",
    value: function onConnectedCallback() {
      if (this._isConnected) return;
      var t = this.element;
      this.needsInitialization ? this.finishInitialization() : null !== this.view && this.view.bind(t, b);
      var e = this.behaviors;
      if (null !== e) {
        var _iterator = _createForOfIteratorHelper(e),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 1),
              _i19 = _step$value[0];
            _i19.bind(t, b);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      this.setIsConnected(!0);
    }
  }, {
    key: "onDisconnectedCallback",
    value: function onDisconnectedCallback() {
      if (!this._isConnected) return;
      this.setIsConnected(!1);
      var t = this.view;
      null !== t && t.unbind();
      var e = this.behaviors;
      if (null !== e) {
        var _t20 = this.element;
        var _iterator2 = _createForOfIteratorHelper(e),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _slicedToArray(_step2.value, 1),
              _i20 = _step2$value[0];
            _i20.unbind(_t20);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  }, {
    key: "onAttributeChangedCallback",
    value: function onAttributeChangedCallback(t, e, i) {
      var o = this.definition.attributeLookup[t];
      void 0 !== o && o.onAttributeChangedCallback(this.element, i);
    }
  }, {
    key: "emit",
    value: function emit(t, e, i) {
      return !!this._isConnected && this.element.dispatchEvent(new CustomEvent(t, Object.assign(Object.assign({
        detail: e
      }, lt), i)));
    }
  }, {
    key: "finishInitialization",
    value: function finishInitialization() {
      var t = this.element,
        e = this.boundObservables;
      if (null !== e) {
        var _i21 = Object.keys(e);
        for (var _o18 = 0, _s22 = _i21.length; _o18 < _s22; ++_o18) {
          var _s23 = _i21[_o18];
          t[_s23] = e[_s23];
        }
        this.boundObservables = null;
      }
      var i = this.definition;
      null === this._template && (this.element.resolveTemplate ? this._template = this.element.resolveTemplate() : i.template && (this._template = i.template || null)), null !== this._template && this.renderTemplate(this._template), null === this._styles && (this.element.resolveStyles ? this._styles = this.element.resolveStyles() : i.styles && (this._styles = i.styles || null)), null !== this._styles && this.addStyles(this._styles), this.needsInitialization = !1;
    }
  }, {
    key: "renderTemplate",
    value: function renderTemplate(t) {
      var e = this.element,
        i = ct(e) || e;
      null !== this.view ? (this.view.dispose(), this.view = null) : this.needsInitialization || d.removeChildNodes(i), t && (this.view = t.render(e, i, e));
    }
  }], [{
    key: "forCustomElement",
    value: function forCustomElement(t) {
      var e = t.$fastController;
      if (void 0 !== e) return e;
      var i = rt.forType(t.constructor);
      if (void 0 === i) throw new Error("Missing FASTElement definition.");
      return t.$fastController = new ht(t, i);
    }
  }]);
  return ht;
}(p);
function dt(t) {
  return /*#__PURE__*/function (_t21) {
    _inherits(_class, _t21);
    var _super8 = _createSuper(_class);
    function _class() {
      var _this9;
      _classCallCheck(this, _class);
      _this9 = _super8.call(this), ht.forCustomElement(_assertThisInitialized(_this9));
      return _this9;
    }
    _createClass(_class, [{
      key: "$emit",
      value: function $emit(t, e, i) {
        return this.$fastController.emit(t, e, i);
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        this.$fastController.onConnectedCallback();
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.$fastController.onDisconnectedCallback();
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(t, e, i) {
        this.$fastController.onAttributeChangedCallback(t, e, i);
      }
    }]);
    return _class;
  }(t);
}
var ut = Object.assign(dt(HTMLElement), {
  from: function from(t) {
    return dt(t);
  },
  define: function define(t, e) {
    return new rt(t, e).define().type;
  }
});
var pt = /*#__PURE__*/function () {
  function pt() {
    _classCallCheck(this, pt);
  }
  _createClass(pt, [{
    key: "createCSS",
    value: function createCSS() {
      return "";
    }
  }, {
    key: "createBehavior",
    value: function createBehavior() {}
  }]);
  return pt;
}();
function gt(t, e) {
  var i = [];
  var o = "";
  var s = [];
  for (var _n15 = 0, _r6 = t.length - 1; _n15 < _r6; ++_n15) {
    o += t[_n15];
    var _r7 = e[_n15];
    if (_r7 instanceof pt) {
      var _t22 = _r7.createBehavior();
      _r7 = _r7.createCSS(), _t22 && s.push(_t22);
    }
    _r7 instanceof G || _r7 instanceof CSSStyleSheet ? ("" !== o.trim() && (i.push(o), o = ""), i.push(_r7)) : o += _r7;
  }
  return o += t[t.length - 1], "" !== o.trim() && i.push(o), {
    styles: i,
    behaviors: s
  };
}
function ft(t) {
  for (var _len3 = arguments.length, e = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    e[_key3 - 1] = arguments[_key3];
  }
  var _gt = gt(t, e),
    i = _gt.styles,
    o = _gt.behaviors,
    s = G.create(i);
  return o.length && s.withBehaviors.apply(s, _toConsumableArray(o)), s;
}
var mt = /*#__PURE__*/function (_pt) {
  _inherits(mt, _pt);
  var _super9 = _createSuper(mt);
  function mt(t, e) {
    var _this10;
    _classCallCheck(this, mt);
    _this10 = _super9.call(this), _this10.behaviors = e, _this10.css = "";
    var i = t.reduce(function (t, e) {
      return "string" == typeof e ? _this10.css += e : t.push(e), t;
    }, []);
    i.length && (_this10.styles = G.create(i));
    return _this10;
  }
  _createClass(mt, [{
    key: "createBehavior",
    value: function createBehavior() {
      return this;
    }
  }, {
    key: "createCSS",
    value: function createCSS() {
      return this.css;
    }
  }, {
    key: "bind",
    value: function bind(t) {
      this.styles && t.$fastController.addStyles(this.styles), this.behaviors.length && t.$fastController.addBehaviors(this.behaviors);
    }
  }, {
    key: "unbind",
    value: function unbind(t) {
      this.styles && t.$fastController.removeStyles(this.styles), this.behaviors.length && t.$fastController.removeBehaviors(this.behaviors);
    }
  }]);
  return mt;
}(pt);
function vt(t) {
  for (var _len4 = arguments.length, e = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    e[_key4 - 1] = arguments[_key4];
  }
  var _gt2 = gt(t, e),
    i = _gt2.styles,
    o = _gt2.behaviors;
  return new mt(i, o);
}
function bt(t, e, i) {
  return {
    index: t,
    removed: e,
    addedCount: i
  };
}
function yt(t, e, i, s, n, r) {
  var a = 0,
    l = 0;
  var c = Math.min(i - e, r - n);
  if (0 === e && 0 === n && (a = function (t, e, i) {
    for (var _o19 = 0; _o19 < i; ++_o19) {
      if (t[_o19] !== e[_o19]) return _o19;
    }
    return i;
  }(t, s, c)), i === t.length && r === s.length && (l = function (t, e, i) {
    var o = t.length,
      s = e.length,
      n = 0;
    for (; n < i && t[--o] === e[--s];) {
      n++;
    }
    return n;
  }(t, s, c - a)), n += a, r -= l, (i -= l) - (e += a) == 0 && r - n == 0) return o;
  if (e === i) {
    var _t23 = bt(e, [], 0);
    for (; n < r;) {
      _t23.removed.push(s[n++]);
    }
    return [_t23];
  }
  if (n === r) return [bt(e, [], i - e)];
  var h = function (t) {
      var e = t.length - 1,
        i = t[0].length - 1,
        o = t[e][i];
      var s = [];
      for (; e > 0 || i > 0;) {
        if (0 === e) {
          s.push(2), i--;
          continue;
        }
        if (0 === i) {
          s.push(3), e--;
          continue;
        }
        var _n16 = t[e - 1][i - 1],
          _r8 = t[e - 1][i],
          _a3 = t[e][i - 1];
        var _l2 = void 0;
        _l2 = _r8 < _a3 ? _r8 < _n16 ? _r8 : _n16 : _a3 < _n16 ? _a3 : _n16, _l2 === _n16 ? (_n16 === o ? s.push(0) : (s.push(1), o = _n16), e--, i--) : _l2 === _r8 ? (s.push(3), e--, o = _r8) : (s.push(2), i--, o = _a3);
      }
      return s.reverse(), s;
    }(function (t, e, i, o, s, n) {
      var r = n - s + 1,
        a = i - e + 1,
        l = new Array(r);
      var c, h;
      for (var _t24 = 0; _t24 < r; ++_t24) {
        l[_t24] = new Array(a), l[_t24][0] = _t24;
      }
      for (var _t25 = 0; _t25 < a; ++_t25) {
        l[0][_t25] = _t25;
      }
      for (var _i22 = 1; _i22 < r; ++_i22) {
        for (var _n17 = 1; _n17 < a; ++_n17) {
          t[e + _n17 - 1] === o[s + _i22 - 1] ? l[_i22][_n17] = l[_i22 - 1][_n17 - 1] : (c = l[_i22 - 1][_n17] + 1, h = l[_i22][_n17 - 1] + 1, l[_i22][_n17] = c < h ? c : h);
        }
      }
      return l;
    }(t, e, i, s, n, r)),
    d = [];
  var u = void 0,
    p = e,
    g = n;
  for (var _t26 = 0; _t26 < h.length; ++_t26) {
    switch (h[_t26]) {
      case 0:
        void 0 !== u && (d.push(u), u = void 0), p++, g++;
        break;
      case 1:
        void 0 === u && (u = bt(p, [], 0)), u.addedCount++, p++, u.removed.push(s[g]), g++;
        break;
      case 2:
        void 0 === u && (u = bt(p, [], 0)), u.addedCount++, p++;
        break;
      case 3:
        void 0 === u && (u = bt(p, [], 0)), u.removed.push(s[g]), g++;
    }
  }
  return void 0 !== u && d.push(u), d;
}
var xt = Array.prototype.push;
function $t(t, e, i, o) {
  var s = bt(e, i, o);
  var n = !1,
    r = 0;
  for (var _e26 = 0; _e26 < t.length; _e26++) {
    var _i23 = t[_e26];
    if (_i23.index += r, n) continue;
    var _o20 = (a = s.index, l = s.index + s.removed.length, c = _i23.index, h = _i23.index + _i23.addedCount, l < c || h < a ? -1 : l === c || h === a ? 0 : a < c ? l < h ? l - c : h - c : h < l ? h - a : l - a);
    if (_o20 >= 0) {
      t.splice(_e26, 1), _e26--, r -= _i23.addedCount - _i23.removed.length, s.addedCount += _i23.addedCount - _o20;
      var _a4 = s.removed.length + _i23.removed.length - _o20;
      if (s.addedCount || _a4) {
        var _t27 = _i23.removed;
        if (s.index < _i23.index) {
          var _e27 = s.removed.slice(0, _i23.index - s.index);
          xt.apply(_e27, _t27), _t27 = _e27;
        }
        if (s.index + s.removed.length > _i23.index + _i23.addedCount) {
          var _e28 = s.removed.slice(_i23.index + _i23.addedCount - s.index);
          xt.apply(_t27, _e28);
        }
        s.removed = _t27, _i23.index < s.index && (s.index = _i23.index);
      } else n = !0;
    } else if (s.index < _i23.index) {
      n = !0, t.splice(_e26, 0, s), _e26++;
      var _o21 = s.addedCount - s.removed.length;
      _i23.index += _o21, r += _o21;
    }
  }
  var a, l, c, h;
  n || t.push(s);
}
function wt(t, e) {
  var i = [];
  var o = function (t) {
    var e = [];
    for (var _i24 = 0, _o22 = t.length; _i24 < _o22; _i24++) {
      var _o23 = t[_i24];
      $t(e, _o23.index, _o23.removed, _o23.addedCount);
    }
    return e;
  }(e);
  for (var _e29 = 0, _s24 = o.length; _e29 < _s24; ++_e29) {
    var _s25 = o[_e29];
    1 !== _s25.addedCount || 1 !== _s25.removed.length ? i = i.concat(yt(t, _s25.index, _s25.index + _s25.addedCount, _s25.removed, 0, _s25.removed.length)) : _s25.removed[0] !== t[_s25.index] && i.push(_s25);
  }
  return i;
}
var kt = !1;
function Ct(t, e) {
  var i = t.index;
  var o = e.length;
  return i > o ? i = o - t.addedCount : i < 0 && (i = o + t.removed.length + i - t.addedCount), i < 0 && (i = 0), t.index = i, t;
}
var It = /*#__PURE__*/function (_u3) {
  _inherits(It, _u3);
  var _super10 = _createSuper(It);
  function It(t) {
    var _this11;
    _classCallCheck(this, It);
    _this11 = _super10.call(this, t), _this11.oldCollection = void 0, _this11.splices = void 0, _this11.needsQueue = !0, _this11.call = _this11.flush, Reflect.defineProperty(t, "$fastController", {
      value: _assertThisInitialized(_this11),
      enumerable: !1
    });
    return _this11;
  }
  _createClass(It, [{
    key: "subscribe",
    value: function subscribe(t) {
      this.flush(), _get(_getPrototypeOf(It.prototype), "subscribe", this).call(this, t);
    }
  }, {
    key: "addSplice",
    value: function addSplice(t) {
      void 0 === this.splices ? this.splices = [t] : this.splices.push(t), this.needsQueue && (this.needsQueue = !1, d.queueUpdate(this));
    }
  }, {
    key: "reset",
    value: function reset(t) {
      this.oldCollection = t, this.needsQueue && (this.needsQueue = !1, d.queueUpdate(this));
    }
  }, {
    key: "flush",
    value: function flush() {
      var t = this.splices,
        e = this.oldCollection;
      if (void 0 === t && void 0 === e) return;
      this.needsQueue = !0, this.splices = void 0, this.oldCollection = void 0;
      var i = void 0 === e ? wt(this.source, t) : yt(this.source, 0, this.source.length, e, 0, e.length);
      this.notify(i);
    }
  }]);
  return It;
}(u);
var Ft = /*#__PURE__*/function () {
  function Ft(t, e) {
    _classCallCheck(this, Ft);
    this.target = t, this.propertyName = e;
  }
  _createClass(Ft, [{
    key: "bind",
    value: function bind(t) {
      t[this.propertyName] = this.target;
    }
  }, {
    key: "unbind",
    value: function unbind() {}
  }]);
  return Ft;
}();
function Dt(t) {
  return new $("fast-ref", Ft, t);
}
function Tt(t, e) {
  var i = "function" == typeof e ? e : function () {
    return e;
  };
  return function (e, o) {
    return t(e, o) ? i(e, o) : null;
  };
}
var St = Object.freeze({
  positioning: !1,
  recycle: !0
});
function Ot(t, e, i, o) {
  t.bind(e[i], o);
}
function Et(t, e, i, o) {
  var s = Object.create(o);
  s.index = i, s.length = e.length, t.bind(e[i], s);
}
var Vt = /*#__PURE__*/function () {
  function Vt(t, e, i, o, s, n) {
    _classCallCheck(this, Vt);
    this.location = t, this.itemsBinding = e, this.templateBinding = o, this.options = n, this.source = null, this.views = [], this.items = null, this.itemsObserver = null, this.originalContext = void 0, this.childContext = void 0, this.bindView = Ot, this.itemsBindingObserver = g.binding(e, this, i), this.templateBindingObserver = g.binding(o, this, s), n.positioning && (this.bindView = Et);
  }
  _createClass(Vt, [{
    key: "bind",
    value: function bind(t, e) {
      this.source = t, this.originalContext = e, this.childContext = Object.create(e), this.childContext.parent = t, this.childContext.parentContext = this.originalContext, this.items = this.itemsBindingObserver.observe(t, this.originalContext), this.template = this.templateBindingObserver.observe(t, this.originalContext), this.observeItems(!0), this.refreshAllViews();
    }
  }, {
    key: "unbind",
    value: function unbind() {
      this.source = null, this.items = null, null !== this.itemsObserver && this.itemsObserver.unsubscribe(this), this.unbindAllViews(), this.itemsBindingObserver.disconnect(), this.templateBindingObserver.disconnect();
    }
  }, {
    key: "handleChange",
    value: function handleChange(t, e) {
      t === this.itemsBinding ? (this.items = this.itemsBindingObserver.observe(this.source, this.originalContext), this.observeItems(), this.refreshAllViews()) : t === this.templateBinding ? (this.template = this.templateBindingObserver.observe(this.source, this.originalContext), this.refreshAllViews(!0)) : this.updateViews(e);
    }
  }, {
    key: "observeItems",
    value: function observeItems() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      if (!this.items) return void (this.items = o);
      var e = this.itemsObserver,
        i = this.itemsObserver = g.getNotifier(this.items),
        s = e !== i;
      s && null !== e && e.unsubscribe(this), (s || t) && i.subscribe(this);
    }
  }, {
    key: "updateViews",
    value: function updateViews(t) {
      var e = this.childContext,
        i = this.views,
        o = this.bindView,
        s = this.items,
        n = this.template,
        r = this.options.recycle,
        a = [];
      var l = 0,
        c = 0;
      for (var _h2 = 0, _d2 = t.length; _h2 < _d2; ++_h2) {
        var _d3 = t[_h2],
          _u4 = _d3.removed;
        var _p3 = 0,
          _g = _d3.index;
        var _f = _g + _d3.addedCount,
          _m = i.splice(_d3.index, _u4.length),
          _v = c = a.length + _m.length;
        for (; _g < _f; ++_g) {
          var _t28 = i[_g],
            _h3 = _t28 ? _t28.firstChild : this.location;
          var _d4 = void 0;
          r && c > 0 ? (_p3 <= _v && _m.length > 0 ? (_d4 = _m[_p3], _p3++) : (_d4 = a[l], l++), c--) : _d4 = n.create(), i.splice(_g, 0, _d4), o(_d4, s, _g, e), _d4.insertBefore(_h3);
        }
        _m[_p3] && a.push.apply(a, _toConsumableArray(_m.slice(_p3)));
      }
      for (var _t29 = l, _e30 = a.length; _t29 < _e30; ++_t29) {
        a[_t29].dispose();
      }
      if (this.options.positioning) for (var _t30 = 0, _e31 = i.length; _t30 < _e31; ++_t30) {
        var _o24 = i[_t30].context;
        _o24.length = _e31, _o24.index = _t30;
      }
    }
  }, {
    key: "refreshAllViews",
    value: function refreshAllViews() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      var e = this.items,
        i = this.childContext,
        o = this.template,
        s = this.location,
        n = this.bindView;
      var r = e.length,
        a = this.views,
        l = a.length;
      if (0 !== r && !t && this.options.recycle || (j.disposeContiguousBatch(a), l = 0), 0 === l) {
        this.views = a = new Array(r);
        for (var _t31 = 0; _t31 < r; ++_t31) {
          var _r9 = o.create();
          n(_r9, e, _t31, i), a[_t31] = _r9, _r9.insertBefore(s);
        }
      } else {
        var _t32 = 0;
        for (; _t32 < r; ++_t32) {
          if (_t32 < l) {
            n(a[_t32], e, _t32, i);
          } else {
            var _r10 = o.create();
            n(_r10, e, _t32, i), a.push(_r10), _r10.insertBefore(s);
          }
        }
        var _c2 = a.splice(_t32, l - _t32);
        for (_t32 = 0, r = _c2.length; _t32 < r; ++_t32) {
          _c2[_t32].dispose();
        }
      }
    }
  }, {
    key: "unbindAllViews",
    value: function unbindAllViews() {
      var t = this.views;
      for (var _e32 = 0, _i25 = t.length; _e32 < _i25; ++_e32) {
        t[_e32].unbind();
      }
    }
  }]);
  return Vt;
}();
var Rt = /*#__PURE__*/function (_y3) {
  _inherits(Rt, _y3);
  var _super11 = _createSuper(Rt);
  function Rt(t, e, i) {
    var _this12;
    _classCallCheck(this, Rt);
    _this12 = _super11.call(this), _this12.itemsBinding = t, _this12.templateBinding = e, _this12.options = i, _this12.createPlaceholder = d.createBlockPlaceholder, function () {
      if (kt) return;
      kt = !0, g.setArrayObserverFactory(function (t) {
        return new It(t);
      });
      var t = Array.prototype;
      if (t.$fastPatch) return;
      Reflect.defineProperty(t, "$fastPatch", {
        value: 1,
        enumerable: !1
      });
      var e = t.pop,
        i = t.push,
        o = t.reverse,
        s = t.shift,
        n = t.sort,
        r = t.splice,
        a = t.unshift;
      t.pop = function () {
        var t = this.length > 0,
          i = e.apply(this, arguments),
          o = this.$fastController;
        return void 0 !== o && t && o.addSplice(bt(this.length, [i], 0)), i;
      }, t.push = function () {
        var t = i.apply(this, arguments),
          e = this.$fastController;
        return void 0 !== e && e.addSplice(Ct(bt(this.length - arguments.length, [], arguments.length), this)), t;
      }, t.reverse = function () {
        var t;
        var e = this.$fastController;
        void 0 !== e && (e.flush(), t = this.slice());
        var i = o.apply(this, arguments);
        return void 0 !== e && e.reset(t), i;
      }, t.shift = function () {
        var t = this.length > 0,
          e = s.apply(this, arguments),
          i = this.$fastController;
        return void 0 !== i && t && i.addSplice(bt(0, [e], 0)), e;
      }, t.sort = function () {
        var t;
        var e = this.$fastController;
        void 0 !== e && (e.flush(), t = this.slice());
        var i = n.apply(this, arguments);
        return void 0 !== e && e.reset(t), i;
      }, t.splice = function () {
        var t = r.apply(this, arguments),
          e = this.$fastController;
        return void 0 !== e && e.addSplice(Ct(bt(+arguments[0], t, arguments.length > 2 ? arguments.length - 2 : 0), this)), t;
      }, t.unshift = function () {
        var t = a.apply(this, arguments),
          e = this.$fastController;
        return void 0 !== e && e.addSplice(Ct(bt(0, [], arguments.length), this)), t;
      };
    }(), _this12.isItemsBindingVolatile = g.isVolatileBinding(t), _this12.isTemplateBindingVolatile = g.isVolatileBinding(e);
    return _this12;
  }
  _createClass(Rt, [{
    key: "createBehavior",
    value: function createBehavior(t) {
      return new Vt(t, this.itemsBinding, this.isItemsBindingVolatile, this.templateBinding, this.isTemplateBindingVolatile, this.options);
    }
  }]);
  return Rt;
}(y);
function At(t, e) {
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : St;
  return new Rt(t, "function" == typeof e ? e : function () {
    return e;
  }, Object.assign(Object.assign({}, St), i));
}
function Lt(t) {
  return t ? function (e, i, o) {
    return 1 === e.nodeType && e.matches(t);
  } : function (t, e, i) {
    return 1 === t.nodeType;
  };
}
var Pt = /*#__PURE__*/function () {
  function Pt(t, e) {
    _classCallCheck(this, Pt);
    this.target = t, this.options = e, this.source = null;
  }
  _createClass(Pt, [{
    key: "bind",
    value: function bind(t) {
      var e = this.options.property;
      this.shouldUpdate = g.getAccessors(t).some(function (t) {
        return t.name === e;
      }), this.source = t, this.updateTarget(this.computeNodes()), this.shouldUpdate && this.observe();
    }
  }, {
    key: "unbind",
    value: function unbind() {
      this.updateTarget(o), this.source = null, this.shouldUpdate && this.disconnect();
    }
  }, {
    key: "handleEvent",
    value: function handleEvent() {
      this.updateTarget(this.computeNodes());
    }
  }, {
    key: "computeNodes",
    value: function computeNodes() {
      var t = this.getNodes();
      return void 0 !== this.options.filter && (t = t.filter(this.options.filter)), t;
    }
  }, {
    key: "updateTarget",
    value: function updateTarget(t) {
      this.source[this.options.property] = t;
    }
  }]);
  return Pt;
}();
var zt = /*#__PURE__*/function (_Pt) {
  _inherits(zt, _Pt);
  var _super12 = _createSuper(zt);
  function zt(t, e) {
    _classCallCheck(this, zt);
    return _super12.call(this, t, e);
  }
  _createClass(zt, [{
    key: "observe",
    value: function observe() {
      this.target.addEventListener("slotchange", this);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.target.removeEventListener("slotchange", this);
    }
  }, {
    key: "getNodes",
    value: function getNodes() {
      return this.target.assignedNodes(this.options);
    }
  }]);
  return zt;
}(Pt);
function Ht(t) {
  return "string" == typeof t && (t = {
    property: t
  }), new $("fast-slotted", zt, t);
}
var Mt = /*#__PURE__*/function (_Pt2) {
  _inherits(Mt, _Pt2);
  var _super13 = _createSuper(Mt);
  function Mt(t, e) {
    var _this13;
    _classCallCheck(this, Mt);
    _this13 = _super13.call(this, t, e), _this13.observer = null, e.childList = !0;
    return _this13;
  }
  _createClass(Mt, [{
    key: "observe",
    value: function observe() {
      null === this.observer && (this.observer = new MutationObserver(this.handleEvent.bind(this))), this.observer.observe(this.target, this.options);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.observer.disconnect();
    }
  }, {
    key: "getNodes",
    value: function getNodes() {
      return "subtree" in this.options ? Array.from(this.target.querySelectorAll(this.options.selector)) : Array.from(this.target.childNodes);
    }
  }]);
  return Mt;
}(Pt);
function Bt(t) {
  return "string" == typeof t && (t = {
    property: t
  }), new $("fast-children", Mt, t);
}
var Nt = /*#__PURE__*/function () {
  function Nt() {
    _classCallCheck(this, Nt);
  }
  _createClass(Nt, [{
    key: "handleStartContentChange",
    value: function handleStartContentChange() {
      this.startContainer.classList.toggle("start", this.start.assignedNodes().length > 0);
    }
  }, {
    key: "handleEndContentChange",
    value: function handleEndContentChange() {
      this.endContainer.classList.toggle("end", this.end.assignedNodes().length > 0);
    }
  }]);
  return Nt;
}();
var jt = function jt(t, e) {
    return _(_templateObject || (_templateObject = _taggedTemplateLiteral(["<span part=\"end\" ", " class=", "><slot name=\"end\" ", " @slotchange=\"", "\">", "</slot></span>"])), Dt("endContainer"), function (t) {
      return e.end ? "end" : void 0;
    }, Dt("end"), function (t) {
      return t.handleEndContentChange();
    }, e.end || "");
  },
  Ut = function Ut(t, e) {
    return _(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<span part=\"start\" ", " class=\"", "\"><slot name=\"start\" ", " @slotchange=\"", "\">", "</slot></span>"])), Dt("startContainer"), function (t) {
      return e.start ? "start" : void 0;
    }, Dt("start"), function (t) {
      return t.handleStartContentChange();
    }, e.start || "");
  },
  qt = _(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<span part=\"end\" ", "><slot name=\"end\" ", " @slotchange=\"", "\"></slot></span>"])), Dt("endContainer"), Dt("end"), function (t) {
    return t.handleEndContentChange();
  }),
  _t = _(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<span part=\"start\" ", "><slot name=\"start\" ", " @slotchange=\"", "\"></slot></span>"])), Dt("startContainer"), Dt("start"), function (t) {
    return t.handleStartContentChange();
  });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Gt(t, e, i, o) {
  var s,
    n = arguments.length,
    r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
  if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);else for (var a = t.length - 1; a >= 0; a--) {
    (s = t[a]) && (r = (n < 3 ? s(r) : n > 3 ? s(e, i, r) : s(e, i)) || r);
  }
  return n > 3 && r && Object.defineProperty(e, i, r), r;
}
var Wt = new Map();
"metadata" in Reflect || (Reflect.metadata = function (t, e) {
  return function (i) {
    Reflect.defineMetadata(t, e, i);
  };
}, Reflect.defineMetadata = function (t, e, i) {
  var o = Wt.get(i);
  void 0 === o && Wt.set(i, o = new Map()), o.set(t, e);
}, Reflect.getOwnMetadata = function (t, e) {
  var i = Wt.get(e);
  if (void 0 !== i) return i.get(t);
});
var Kt = /*#__PURE__*/function () {
  function Kt(t, e) {
    _classCallCheck(this, Kt);
    this.container = t, this.key = e;
  }
  _createClass(Kt, [{
    key: "instance",
    value: function instance(t) {
      return this.registerResolver(0, t);
    }
  }, {
    key: "singleton",
    value: function singleton(t) {
      return this.registerResolver(1, t);
    }
  }, {
    key: "transient",
    value: function transient(t) {
      return this.registerResolver(2, t);
    }
  }, {
    key: "callback",
    value: function callback(t) {
      return this.registerResolver(3, t);
    }
  }, {
    key: "cachedCallback",
    value: function cachedCallback(t) {
      return this.registerResolver(3, me(t));
    }
  }, {
    key: "aliasTo",
    value: function aliasTo(t) {
      return this.registerResolver(5, t);
    }
  }, {
    key: "registerResolver",
    value: function registerResolver(t, e) {
      var i = this.container,
        o = this.key;
      return this.container = this.key = void 0, i.registerResolver(o, new se(o, t, e));
    }
  }]);
  return Kt;
}();
function Xt(t) {
  var e = t.slice(),
    i = Object.keys(t),
    o = i.length;
  var s;
  for (var _n18 = 0; _n18 < o; ++_n18) {
    s = i[_n18], Ce(s) || (e[s] = t[s]);
  }
  return e;
}
var Yt = Object.freeze({
    none: function none(t) {
      throw Error(t.toString() + " not registered, did you forget to add @singleton()?");
    },
    singleton: function singleton(t) {
      return new se(t, 1, t);
    },
    transient: function transient(t) {
      return new se(t, 2, t);
    }
  }),
  Qt = Object.freeze({
    default: Object.freeze({
      parentLocator: function parentLocator() {
        return null;
      },
      responsibleForOwnerRequests: !1,
      defaultResolver: Yt.singleton
    })
  }),
  Zt = new Map();
function Jt(t) {
  return function (e) {
    return Reflect.getOwnMetadata(t, e);
  };
}
var te = null;
var ee = Object.freeze({
    createContainer: function createContainer(t) {
      return new ge(null, Object.assign({}, Qt.default, t));
    },
    findResponsibleContainer: function findResponsibleContainer(t) {
      var e = t.$$container$$;
      return e && e.responsibleForOwnerRequests ? e : ee.findParentContainer(t);
    },
    findParentContainer: function findParentContainer(t) {
      var e = new CustomEvent(ue, {
        bubbles: !0,
        composed: !0,
        cancelable: !0,
        detail: {
          container: void 0
        }
      });
      return t.dispatchEvent(e), e.detail.container || ee.getOrCreateDOMContainer();
    },
    getOrCreateDOMContainer: function getOrCreateDOMContainer(t, e) {
      return t ? t.$$container$$ || new ge(t, Object.assign({}, Qt.default, e, {
        parentLocator: ee.findParentContainer
      })) : te || (te = new ge(null, Object.assign({}, Qt.default, e, {
        parentLocator: function parentLocator() {
          return null;
        }
      })));
    },
    getDesignParamtypes: Jt("design:paramtypes"),
    getAnnotationParamtypes: Jt("di:paramtypes"),
    getOrCreateAnnotationParamTypes: function getOrCreateAnnotationParamTypes(t) {
      var e = this.getAnnotationParamtypes(t);
      return void 0 === e && Reflect.defineMetadata("di:paramtypes", e = [], t), e;
    },
    getDependencies: function getDependencies(t) {
      var e = Zt.get(t);
      if (void 0 === e) {
        var _i26 = t.inject;
        if (void 0 === _i26) {
          var _i27 = ee.getDesignParamtypes(t),
            _o25 = ee.getAnnotationParamtypes(t);
          if (void 0 === _i27) {
            if (void 0 === _o25) {
              var _i28 = Object.getPrototypeOf(t);
              e = "function" == typeof _i28 && _i28 !== Function.prototype ? Xt(ee.getDependencies(_i28)) : [];
            } else e = Xt(_o25);
          } else if (void 0 === _o25) e = Xt(_i27);else {
            e = Xt(_i27);
            var _t33,
              _s26 = _o25.length;
            for (var _i29 = 0; _i29 < _s26; ++_i29) {
              _t33 = _o25[_i29], void 0 !== _t33 && (e[_i29] = _t33);
            }
            var _n19 = Object.keys(_o25);
            var _r11;
            _s26 = _n19.length;
            for (var _t34 = 0; _t34 < _s26; ++_t34) {
              _r11 = _n19[_t34], Ce(_r11) || (e[_r11] = _o25[_r11]);
            }
          }
        } else e = Xt(_i26);
        Zt.set(t, e);
      }
      return e;
    },
    defineProperty: function defineProperty(t, e, i) {
      var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
      var s = "$di_" + e;
      Reflect.defineProperty(t, e, {
        get: function get() {
          var _this14 = this;
          var t = this[s];
          if (void 0 === t) {
            var _n20 = this instanceof HTMLElement ? ee.findResponsibleContainer(this) : ee.getOrCreateDOMContainer();
            if (t = _n20.get(i), this[s] = t, o && this instanceof ut) {
              var _o26 = this.$fastController,
                _n21 = function _n21() {
                  ee.findResponsibleContainer(_this14).get(i) !== _this14[s] && (_this14[s] = t, _o26.notify(e));
                };
              _o26.subscribe({
                handleChange: _n21
              }, "isConnected");
            }
          }
          return t;
        }
      });
    },
    createInterface: function createInterface(t, e) {
      var i = "function" == typeof t ? t : e,
        o = "string" == typeof t ? t : t && "friendlyName" in t && t.friendlyName || xe,
        s = "string" != typeof t && (t && "respectConnection" in t && t.respectConnection || !1),
        n = function _target(t, e, i) {
          if (null == t || void 0 !== (this instanceof _target ? this.constructor : void 0)) throw new Error("No registration for interface: '".concat(n.friendlyName, "'"));
          if (e) ee.defineProperty(t, e, n, s);else {
            ee.getOrCreateAnnotationParamTypes(t)[i] = n;
          }
        };
      return n.$isInterface = !0, n.friendlyName = null == o ? "(anonymous)" : o, null != i && (n.register = function (t, e) {
        return i(new Kt(t, null != e ? e : n));
      }), n.toString = function () {
        return "InterfaceSymbol<".concat(n.friendlyName, ">");
      }, n;
    },
    inject: function inject() {
      for (var _len5 = arguments.length, t = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        t[_key5] = arguments[_key5];
      }
      return function (e, i, o) {
        if ("number" == typeof o) {
          var _i30 = ee.getOrCreateAnnotationParamTypes(e),
            _s27 = t[0];
          void 0 !== _s27 && (_i30[o] = _s27);
        } else if (i) ee.defineProperty(e, i, t[0]);else {
          var _i31 = o ? ee.getOrCreateAnnotationParamTypes(o.value) : ee.getOrCreateAnnotationParamTypes(e);
          var _s28;
          for (var _e33 = 0; _e33 < t.length; ++_e33) {
            _s28 = t[_e33], void 0 !== _s28 && (_i31[_e33] = _s28);
          }
        }
      };
    },
    transient: function transient(t) {
      return t.register = function (e) {
        return ve.transient(t, t).register(e);
      }, t.registerInRequestor = !1, t;
    },
    singleton: function singleton(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : oe;
      return t.register = function (e) {
        return ve.singleton(t, t).register(e);
      }, t.registerInRequestor = e.scoped, t;
    }
  }),
  ie = ee.createInterface("Container");
ee.inject;
var oe = {
  scoped: !1
};
var se = /*#__PURE__*/function () {
  function se(t, e, i) {
    _classCallCheck(this, se);
    this.key = t, this.strategy = e, this.state = i, this.resolving = !1;
  }
  _createClass(se, [{
    key: "$isResolver",
    get: function get() {
      return !0;
    }
  }, {
    key: "register",
    value: function register(t) {
      return t.registerResolver(this.key, this);
    }
  }, {
    key: "resolve",
    value: function resolve(t, e) {
      switch (this.strategy) {
        case 0:
          return this.state;
        case 1:
          if (this.resolving) throw new Error("Cyclic dependency found: " + this.state.name);
          return this.resolving = !0, this.state = t.getFactory(this.state).construct(e), this.strategy = 0, this.resolving = !1, this.state;
        case 2:
          {
            var _i32 = t.getFactory(this.state);
            if (null === _i32) throw new Error("Resolver for ".concat(String(this.key), " returned a null factory"));
            return _i32.construct(e);
          }
        case 3:
          return this.state(t, e, this);
        case 4:
          return this.state[0].resolve(t, e);
        case 5:
          return e.get(this.state);
        default:
          throw new Error("Invalid resolver strategy specified: ".concat(this.strategy, "."));
      }
    }
  }, {
    key: "getFactory",
    value: function getFactory(t) {
      var e, i, o;
      switch (this.strategy) {
        case 1:
        case 2:
          return t.getFactory(this.state);
        case 5:
          return null !== (o = null === (i = null === (e = t.getResolver(this.state)) || void 0 === e ? void 0 : e.getFactory) || void 0 === i ? void 0 : i.call(e, t)) && void 0 !== o ? o : null;
        default:
          return null;
      }
    }
  }]);
  return se;
}();
function ne(t) {
  return this.get(t);
}
function re(t, e) {
  return e(t);
}
var ae = /*#__PURE__*/function () {
  function ae(t, e) {
    _classCallCheck(this, ae);
    this.Type = t, this.dependencies = e, this.transformers = null;
  }
  _createClass(ae, [{
    key: "construct",
    value: function construct(t, e) {
      var i;
      return i = void 0 === e ? _construct(this.Type, _toConsumableArray(this.dependencies.map(ne, t))) : _construct(this.Type, _toConsumableArray(this.dependencies.map(ne, t)).concat(_toConsumableArray(e))), null == this.transformers ? i : this.transformers.reduce(re, i);
    }
  }, {
    key: "registerTransformer",
    value: function registerTransformer(t) {
      (this.transformers || (this.transformers = [])).push(t);
    }
  }]);
  return ae;
}();
var le = {
  $isResolver: !0,
  resolve: function resolve(t, e) {
    return e;
  }
};
function ce(t) {
  return "function" == typeof t.register;
}
function he(t) {
  return function (t) {
    return ce(t) && "boolean" == typeof t.registerInRequestor;
  }(t) && t.registerInRequestor;
}
var de = new Set(["Array", "ArrayBuffer", "Boolean", "DataView", "Date", "Error", "EvalError", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Number", "Object", "Promise", "RangeError", "ReferenceError", "RegExp", "Set", "SharedArrayBuffer", "String", "SyntaxError", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "URIError", "WeakMap", "WeakSet"]),
  ue = "__DI_LOCATE_PARENT__",
  pe = new Map();
var ge = /*#__PURE__*/function () {
  function ge(t, e) {
    var _this15 = this;
    _classCallCheck(this, ge);
    this.owner = t, this.config = e, this._parent = void 0, this.registerDepth = 0, this.context = null, null !== t && (t.$$container$$ = this), this.resolvers = new Map(), this.resolvers.set(ie, le), t instanceof Node && t.addEventListener(ue, function (t) {
      t.composedPath()[0] !== _this15.owner && (t.detail.container = _this15, t.stopImmediatePropagation());
    });
  }
  _createClass(ge, [{
    key: "parent",
    get: function get() {
      return void 0 === this._parent && (this._parent = this.config.parentLocator(this.owner)), this._parent;
    }
  }, {
    key: "depth",
    get: function get() {
      return null === this.parent ? 0 : this.parent.depth + 1;
    }
  }, {
    key: "responsibleForOwnerRequests",
    get: function get() {
      return this.config.responsibleForOwnerRequests;
    }
  }, {
    key: "registerWithContext",
    value: function registerWithContext(t) {
      for (var _len6 = arguments.length, e = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        e[_key6 - 1] = arguments[_key6];
      }
      return this.context = t, this.register.apply(this, e), this.context = null, this;
    }
  }, {
    key: "register",
    value: function register() {
      if (100 == ++this.registerDepth) throw new Error("Unable to autoregister dependency");
      var e, i, o, s, n;
      var r = this.context;
      for (var _a5 = 0, _l3 = arguments.length; _a5 < _l3; ++_a5) {
        if (e = _a5 < 0 || arguments.length <= _a5 ? undefined : arguments[_a5], $e(e)) if (ce(e)) e.register(this, r);else if (void 0 !== e.prototype) ve.singleton(e, e).register(this);else for (i = Object.keys(e), s = 0, n = i.length; s < n; ++s) {
          o = e[i[s]], $e(o) && (ce(o) ? o.register(this, r) : this.register(o));
        }
      }
      return --this.registerDepth, this;
    }
  }, {
    key: "registerResolver",
    value: function registerResolver(t, e) {
      be(t);
      var i = this.resolvers,
        o = i.get(t);
      return null == o ? i.set(t, e) : o instanceof se && 4 === o.strategy ? o.state.push(e) : i.set(t, new se(t, 4, [o, e])), e;
    }
  }, {
    key: "registerTransformer",
    value: function registerTransformer(t, e) {
      var i = this.getResolver(t);
      if (null == i) return !1;
      if (i.getFactory) {
        var _t35 = i.getFactory(this);
        return null != _t35 && (_t35.registerTransformer(e), !0);
      }
      return !1;
    }
  }, {
    key: "getResolver",
    value: function getResolver(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      if (be(t), void 0 !== t.resolve) return t;
      var i,
        o = this;
      for (; null != o;) {
        if (i = o.resolvers.get(t), null != i) return i;
        if (null == o.parent) {
          var _i33 = he(t) ? this : o;
          return e ? this.jitRegister(t, _i33) : null;
        }
        o = o.parent;
      }
      return null;
    }
  }, {
    key: "has",
    value: function has(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      return !!this.resolvers.has(t) || !(!e || null == this.parent) && this.parent.has(t, !0);
    }
  }, {
    key: "get",
    value: function get(t) {
      if (be(t), t.$isResolver) return t.resolve(this, this);
      var e,
        i = this;
      for (; null != i;) {
        if (e = i.resolvers.get(t), null != e) return e.resolve(i, this);
        if (null == i.parent) {
          var _o27 = he(t) ? this : i;
          return e = this.jitRegister(t, _o27), e.resolve(i, this);
        }
        i = i.parent;
      }
      throw new Error("Unable to resolve key: " + t);
    }
  }, {
    key: "getAll",
    value: function getAll(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      be(t);
      var i = this;
      var s,
        n = i;
      if (e) {
        var _e34 = o;
        for (; null != n;) {
          s = n.resolvers.get(t), null != s && (_e34 = _e34.concat(ye(s, n, i))), n = n.parent;
        }
        return _e34;
      }
      for (; null != n;) {
        if (s = n.resolvers.get(t), null != s) return ye(s, n, i);
        if (n = n.parent, null == n) return o;
      }
      return o;
    }
  }, {
    key: "getFactory",
    value: function getFactory(t) {
      var e = pe.get(t);
      if (void 0 === e) {
        if (we(t)) throw new Error(t.name + " is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.");
        pe.set(t, e = new ae(t, ee.getDependencies(t)));
      }
      return e;
    }
  }, {
    key: "registerFactory",
    value: function registerFactory(t, e) {
      pe.set(t, e);
    }
  }, {
    key: "createChild",
    value: function createChild(t) {
      var _this16 = this;
      return new ge(null, Object.assign({}, this.config, t, {
        parentLocator: function parentLocator() {
          return _this16;
        }
      }));
    }
  }, {
    key: "jitRegister",
    value: function jitRegister(t, e) {
      if ("function" != typeof t) throw new Error("Attempted to jitRegister something that is not a constructor: '".concat(t, "'. Did you forget to register this dependency?"));
      if (de.has(t.name)) throw new Error("Attempted to jitRegister an intrinsic type: ".concat(t.name, ". Did you forget to add @inject(Key)"));
      if (ce(t)) {
        var _i34 = t.register(e);
        if (!(_i34 instanceof Object) || null == _i34.resolve) {
          var _i35 = e.resolvers.get(t);
          if (null != _i35) return _i35;
          throw new Error("A valid resolver was not returned from the static register method");
        }
        return _i34;
      }
      if (t.$isInterface) throw new Error("Attempted to jitRegister an interface: " + t.friendlyName);
      {
        var _i36 = this.config.defaultResolver(t, e);
        return e.resolvers.set(t, _i36), _i36;
      }
    }
  }]);
  return ge;
}();
var fe = new WeakMap();
function me(t) {
  return function (e, i, o) {
    if (fe.has(o)) return fe.get(o);
    var s = t(e, i, o);
    return fe.set(o, s), s;
  };
}
var ve = Object.freeze({
  instance: function instance(t, e) {
    return new se(t, 0, e);
  },
  singleton: function singleton(t, e) {
    return new se(t, 1, e);
  },
  transient: function transient(t, e) {
    return new se(t, 2, e);
  },
  callback: function callback(t, e) {
    return new se(t, 3, e);
  },
  cachedCallback: function cachedCallback(t, e) {
    return new se(t, 3, me(e));
  },
  aliasTo: function aliasTo(t, e) {
    return new se(e, 5, t);
  }
});
function be(t) {
  if (null == t) throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?");
}
function ye(t, e, i) {
  if (t instanceof se && 4 === t.strategy) {
    var _o28 = t.state;
    var _s29 = _o28.length;
    var _n22 = new Array(_s29);
    for (; _s29--;) {
      _n22[_s29] = _o28[_s29].resolve(e, i);
    }
    return _n22;
  }
  return [t.resolve(e, i)];
}
var xe = "(anonymous)";
function $e(t) {
  return "object" == _typeof(t) && null !== t || "function" == typeof t;
}
var we = function () {
    var t = new WeakMap();
    var e = !1,
      i = "",
      o = 0;
    return function (s) {
      return e = t.get(s), void 0 === e && (i = s.toString(), o = i.length, e = o >= 29 && o <= 100 && 125 === i.charCodeAt(o - 1) && i.charCodeAt(o - 2) <= 32 && 93 === i.charCodeAt(o - 3) && 101 === i.charCodeAt(o - 4) && 100 === i.charCodeAt(o - 5) && 111 === i.charCodeAt(o - 6) && 99 === i.charCodeAt(o - 7) && 32 === i.charCodeAt(o - 8) && 101 === i.charCodeAt(o - 9) && 118 === i.charCodeAt(o - 10) && 105 === i.charCodeAt(o - 11) && 116 === i.charCodeAt(o - 12) && 97 === i.charCodeAt(o - 13) && 110 === i.charCodeAt(o - 14) && 88 === i.charCodeAt(o - 15), t.set(s, e)), e;
    };
  }(),
  ke = {};
function Ce(t) {
  switch (_typeof(t)) {
    case "number":
      return t >= 0 && (0 | t) === t;
    case "string":
      {
        var _e35 = ke[t];
        if (void 0 !== _e35) return _e35;
        var _i37 = t.length;
        if (0 === _i37) return ke[t] = !1;
        var _o29 = 0;
        for (var _e36 = 0; _e36 < _i37; ++_e36) {
          if (_o29 = t.charCodeAt(_e36), 0 === _e36 && 48 === _o29 && _i37 > 1 || _o29 < 48 || _o29 > 57) return ke[t] = !1;
        }
        return ke[t] = !0;
      }
    default:
      return !1;
  }
}
function Ie(t) {
  return t.toLowerCase() + ":presentation";
}
var Fe = new Map(),
  De = Object.freeze({
    define: function define(t, e, i) {
      var o = Ie(t);
      void 0 === Fe.get(o) ? Fe.set(o, e) : Fe.set(o, !1), i.register(ve.instance(o, e));
    },
    forTag: function forTag(t, e) {
      var i = Ie(t),
        o = Fe.get(i);
      if (!1 === o) {
        return ee.findResponsibleContainer(e).get(i);
      }
      return o || null;
    }
  });
var Te = /*#__PURE__*/function () {
  function Te(t, e) {
    _classCallCheck(this, Te);
    this.template = t || null, this.styles = void 0 === e ? null : Array.isArray(e) ? G.create(e) : e instanceof G ? e : G.create([e]);
  }
  _createClass(Te, [{
    key: "applyTo",
    value: function applyTo(t) {
      var e = t.$fastController;
      null === e.template && (e.template = this.template), null === e.styles && (e.styles = this.styles);
    }
  }]);
  return Te;
}();
var Se = /*#__PURE__*/function (_ut) {
  _inherits(Se, _ut);
  var _super14 = _createSuper(Se);
  function Se() {
    var _this17;
    _classCallCheck(this, Se);
    _this17 = _super14.apply(this, arguments), _this17._presentation = void 0;
    return _this17;
  }
  _createClass(Se, [{
    key: "$presentation",
    get: function get() {
      return void 0 === this._presentation && (this._presentation = De.forTag(this.tagName, this)), this._presentation;
    }
  }, {
    key: "templateChanged",
    value: function templateChanged() {
      void 0 !== this.template && (this.$fastController.template = this.template);
    }
  }, {
    key: "stylesChanged",
    value: function stylesChanged() {
      void 0 !== this.styles && (this.$fastController.styles = this.styles);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      null !== this.$presentation && this.$presentation.applyTo(this), _get(_getPrototypeOf(Se.prototype), "connectedCallback", this).call(this);
    }
  }], [{
    key: "compose",
    value: function compose(t) {
      var _this18 = this;
      return function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return new Ee(_this18 === Se ? /*#__PURE__*/function (_Se) {
          _inherits(_class2, _Se);
          var _super15 = _createSuper(_class2);
          function _class2() {
            _classCallCheck(this, _class2);
            return _super15.apply(this, arguments);
          }
          return _createClass(_class2);
        }(Se) : _this18, t, e);
      };
    }
  }]);
  return Se;
}(ut);
function Oe(t, e, i) {
  return "function" == typeof t ? t(e, i) : t;
}
Gt([f], Se.prototype, "template", void 0), Gt([f], Se.prototype, "styles", void 0);
var Ee = /*#__PURE__*/function () {
  function Ee(t, e, i) {
    _classCallCheck(this, Ee);
    this.type = t, this.elementDefinition = e, this.overrideDefinition = i, this.definition = Object.assign(Object.assign({}, this.elementDefinition), this.overrideDefinition);
  }
  _createClass(Ee, [{
    key: "register",
    value: function register(t, e) {
      var i = this.definition,
        o = this.overrideDefinition,
        s = "".concat(i.prefix || e.elementPrefix, "-").concat(i.baseName);
      e.tryDefineElement({
        name: s,
        type: this.type,
        baseClass: this.elementDefinition.baseClass,
        callback: function callback(t) {
          var e = new Te(Oe(i.template, t, i), Oe(i.styles, t, i));
          t.definePresentation(e);
          var s = Oe(i.shadowOptions, t, i);
          t.shadowRootMode && (s ? o.shadowOptions || (s.mode = t.shadowRootMode) : null !== s && (s = {
            mode: t.shadowRootMode
          })), t.defineElement({
            elementOptions: Oe(i.elementOptions, t, i),
            shadowOptions: s,
            attributes: Oe(i.attributes, t, i)
          });
        }
      });
    }
  }]);
  return Ee;
}();
function Ve(t) {
  var i = Z.locate(t);
  for (var _len7 = arguments.length, e = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    e[_key7 - 1] = arguments[_key7];
  }
  e.forEach(function (e) {
    Object.getOwnPropertyNames(e.prototype).forEach(function (i) {
      "constructor" !== i && Object.defineProperty(t.prototype, i, Object.getOwnPropertyDescriptor(e.prototype, i));
    });
    Z.locate(e).forEach(function (t) {
      return i.push(t);
    });
  });
}
var Re = /*#__PURE__*/function (_Se2) {
  _inherits(Re, _Se2);
  var _super16 = _createSuper(Re);
  function Re() {
    var _this19;
    _classCallCheck(this, Re);
    _this19 = _super16.apply(this, arguments), _this19.headinglevel = 2, _this19.expanded = !1, _this19.clickHandler = function (t) {
      _this19.expanded = !_this19.expanded, _this19.change();
    }, _this19.change = function () {
      _this19.$emit("change");
    };
    return _this19;
  }
  return _createClass(Re);
}(Se);
Gt([it({
  attribute: "heading-level",
  mode: "fromView",
  converter: tt
})], Re.prototype, "headinglevel", void 0), Gt([it({
  mode: "boolean"
})], Re.prototype, "expanded", void 0), Gt([it], Re.prototype, "id", void 0), Ve(Re, Nt);
var Ae = "horizontal",
  Le = "vertical";
function Pe() {
  for (var _len8 = arguments.length, t = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    t[_key8] = arguments[_key8];
  }
  return t.every(function (t) {
    return t instanceof HTMLElement;
  });
}
var ze;
var He;
!function (t) {
  t[t.alt = 18] = "alt", t[t.arrowDown = 40] = "arrowDown", t[t.arrowLeft = 37] = "arrowLeft", t[t.arrowRight = 39] = "arrowRight", t[t.arrowUp = 38] = "arrowUp", t[t.back = 8] = "back", t[t.backSlash = 220] = "backSlash", t[t.break = 19] = "break", t[t.capsLock = 20] = "capsLock", t[t.closeBracket = 221] = "closeBracket", t[t.colon = 186] = "colon", t[t.colon2 = 59] = "colon2", t[t.comma = 188] = "comma", t[t.ctrl = 17] = "ctrl", t[t.delete = 46] = "delete", t[t.end = 35] = "end", t[t.enter = 13] = "enter", t[t.equals = 187] = "equals", t[t.equals2 = 61] = "equals2", t[t.equals3 = 107] = "equals3", t[t.escape = 27] = "escape", t[t.forwardSlash = 191] = "forwardSlash", t[t.function1 = 112] = "function1", t[t.function10 = 121] = "function10", t[t.function11 = 122] = "function11", t[t.function12 = 123] = "function12", t[t.function2 = 113] = "function2", t[t.function3 = 114] = "function3", t[t.function4 = 115] = "function4", t[t.function5 = 116] = "function5", t[t.function6 = 117] = "function6", t[t.function7 = 118] = "function7", t[t.function8 = 119] = "function8", t[t.function9 = 120] = "function9", t[t.home = 36] = "home", t[t.insert = 45] = "insert", t[t.menu = 93] = "menu", t[t.minus = 189] = "minus", t[t.minus2 = 109] = "minus2", t[t.numLock = 144] = "numLock", t[t.numPad0 = 96] = "numPad0", t[t.numPad1 = 97] = "numPad1", t[t.numPad2 = 98] = "numPad2", t[t.numPad3 = 99] = "numPad3", t[t.numPad4 = 100] = "numPad4", t[t.numPad5 = 101] = "numPad5", t[t.numPad6 = 102] = "numPad6", t[t.numPad7 = 103] = "numPad7", t[t.numPad8 = 104] = "numPad8", t[t.numPad9 = 105] = "numPad9", t[t.numPadDivide = 111] = "numPadDivide", t[t.numPadDot = 110] = "numPadDot", t[t.numPadMinus = 109] = "numPadMinus", t[t.numPadMultiply = 106] = "numPadMultiply", t[t.numPadPlus = 107] = "numPadPlus", t[t.openBracket = 219] = "openBracket", t[t.pageDown = 34] = "pageDown", t[t.pageUp = 33] = "pageUp", t[t.period = 190] = "period", t[t.print = 44] = "print", t[t.quote = 222] = "quote", t[t.scrollLock = 145] = "scrollLock", t[t.shift = 16] = "shift", t[t.space = 32] = "space", t[t.tab = 9] = "tab", t[t.tilde = 192] = "tilde", t[t.windowsLeft = 91] = "windowsLeft", t[t.windowsOpera = 219] = "windowsOpera", t[t.windowsRight = 92] = "windowsRight";
}(He || (He = {}));
var Me = {
  ArrowDown: "ArrowDown",
  ArrowLeft: "ArrowLeft",
  ArrowRight: "ArrowRight",
  ArrowUp: "ArrowUp"
};
var Be;
function Ne(t, e, i) {
  return i < t ? e : i > e ? t : i;
}
function je(t, e, i) {
  return Math.min(Math.max(i, t), e);
}
function Ue(t, e) {
  var _sort, _sort2;
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return (_sort = [e, i].sort(function (t, e) {
    return t - e;
  }), _sort2 = _slicedToArray(_sort, 2), e = _sort2[0], i = _sort2[1]), e <= t && t < i;
}
!function (t) {
  t.ltr = "ltr", t.rtl = "rtl";
}(Be || (Be = {}));
var qe = 0;
function _e() {
  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return "".concat(t).concat(qe++);
}
var Ge;
!function (t) {
  t.Canvas = "Canvas", t.CanvasText = "CanvasText", t.LinkText = "LinkText", t.VisitedText = "VisitedText", t.ActiveText = "ActiveText", t.ButtonFace = "ButtonFace", t.ButtonText = "ButtonText", t.Field = "Field", t.FieldText = "FieldText", t.Highlight = "Highlight", t.HighlightText = "HighlightText", t.GrayText = "GrayText";
}(Ge || (Ge = {}));
var We = "single",
  Ke = "multi";
var Xe = /*#__PURE__*/function (_Se3) {
  _inherits(Xe, _Se3);
  var _super17 = _createSuper(Xe);
  function Xe() {
    var _this20;
    _classCallCheck(this, Xe);
    _this20 = _super17.apply(this, arguments), _this20.expandmode = Ke, _this20.activeItemIndex = 0, _this20.change = function () {
      _this20.$emit("change", _this20.activeid);
    }, _this20.setItems = function () {
      var t;
      if (0 !== _this20.accordionItems.length && (_this20.accordionIds = _this20.getItemIds(), _this20.accordionItems.forEach(function (t, e) {
        t instanceof Re && (t.addEventListener("change", _this20.activeItemChange), _this20.isSingleExpandMode() && (_this20.activeItemIndex !== e ? t.expanded = !1 : t.expanded = !0));
        var i = _this20.accordionIds[e];
        t.setAttribute("id", "string" != typeof i ? "accordion-" + (e + 1) : i), _this20.activeid = _this20.accordionIds[_this20.activeItemIndex], t.addEventListener("keydown", _this20.handleItemKeyDown), t.addEventListener("focus", _this20.handleItemFocus);
      }), _this20.isSingleExpandMode())) {
        (null !== (t = _this20.findExpandedItem()) && void 0 !== t ? t : _this20.accordionItems[0]).setAttribute("aria-disabled", "true");
      }
    }, _this20.removeItemListeners = function (t) {
      t.forEach(function (t, e) {
        t.removeEventListener("change", _this20.activeItemChange), t.removeEventListener("keydown", _this20.handleItemKeyDown), t.removeEventListener("focus", _this20.handleItemFocus);
      });
    }, _this20.activeItemChange = function (t) {
      if (t.defaultPrevented || t.target !== t.currentTarget) return;
      t.preventDefault();
      var e = t.target;
      _this20.activeid = e.getAttribute("id"), _this20.isSingleExpandMode() && (_this20.resetItems(), e.expanded = !0, e.setAttribute("aria-disabled", "true"), _this20.accordionItems.forEach(function (t) {
        t.hasAttribute("disabled") || t.id === _this20.activeid || t.removeAttribute("aria-disabled");
      })), _this20.activeItemIndex = Array.from(_this20.accordionItems).indexOf(e), _this20.change();
    }, _this20.handleItemKeyDown = function (t) {
      if (t.target === t.currentTarget) switch (_this20.accordionIds = _this20.getItemIds(), t.key) {
        case "ArrowUp":
          t.preventDefault(), _this20.adjust(-1);
          break;
        case "ArrowDown":
          t.preventDefault(), _this20.adjust(1);
          break;
        case "Home":
          _this20.activeItemIndex = 0, _this20.focusItem();
          break;
        case "End":
          _this20.activeItemIndex = _this20.accordionItems.length - 1, _this20.focusItem();
      }
    }, _this20.handleItemFocus = function (t) {
      if (t.target === t.currentTarget) {
        var _e37 = t.target,
          _i38 = _this20.activeItemIndex = Array.from(_this20.accordionItems).indexOf(_e37);
        _this20.activeItemIndex !== _i38 && -1 !== _i38 && (_this20.activeItemIndex = _i38, _this20.activeid = _this20.accordionIds[_this20.activeItemIndex]);
      }
    };
    return _this20;
  }
  _createClass(Xe, [{
    key: "accordionItemsChanged",
    value: function accordionItemsChanged(t, e) {
      this.$fastController.isConnected && (this.removeItemListeners(t), this.setItems());
    }
  }, {
    key: "findExpandedItem",
    value: function findExpandedItem() {
      for (var _t36 = 0; _t36 < this.accordionItems.length; _t36++) {
        if ("true" === this.accordionItems[_t36].getAttribute("expanded")) return this.accordionItems[_t36];
      }
      return null;
    }
  }, {
    key: "resetItems",
    value: function resetItems() {
      this.accordionItems.forEach(function (t, e) {
        t.expanded = !1;
      });
    }
  }, {
    key: "getItemIds",
    value: function getItemIds() {
      return this.accordionItems.map(function (t) {
        return t.getAttribute("id");
      });
    }
  }, {
    key: "isSingleExpandMode",
    value: function isSingleExpandMode() {
      return this.expandmode === We;
    }
  }, {
    key: "adjust",
    value: function adjust(t) {
      this.activeItemIndex = Ne(0, this.accordionItems.length - 1, this.activeItemIndex + t), this.focusItem();
    }
  }, {
    key: "focusItem",
    value: function focusItem() {
      var t = this.accordionItems[this.activeItemIndex];
      t instanceof Re && t.expandbutton.focus();
    }
  }]);
  return Xe;
}(Se);
Gt([it({
  attribute: "expand-mode"
})], Xe.prototype, "expandmode", void 0), Gt([f], Xe.prototype, "accordionItems", void 0);
var Ye = function Ye(t, e) {
  return _(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<a class=\"control\" part=\"control\" download=\"", "\" href=\"", "\" hreflang=\"", "\" ping=\"", "\" referrerpolicy=\"", "\" rel=\"", "\" target=\"", "\" type=\"", "\" aria-atomic=\"", "\" aria-busy=\"", "\" aria-controls=\"", "\" aria-current=\"", "\" aria-describedby=\"", "\" aria-details=\"", "\" aria-disabled=\"", "\" aria-errormessage=\"", "\" aria-expanded=\"", "\" aria-flowto=\"", "\" aria-haspopup=\"", "\" aria-hidden=\"", "\" aria-invalid=\"", "\" aria-keyshortcuts=\"", "\" aria-label=\"", "\" aria-labelledby=\"", "\" aria-live=\"", "\" aria-owns=\"", "\" aria-relevant=\"", "\" aria-roledescription=\"", "\" ", ">", "<span class=\"content\" part=\"content\"><slot ", "></slot></span>", "</a>"])), function (t) {
    return t.download;
  }, function (t) {
    return t.href;
  }, function (t) {
    return t.hreflang;
  }, function (t) {
    return t.ping;
  }, function (t) {
    return t.referrerpolicy;
  }, function (t) {
    return t.rel;
  }, function (t) {
    return t.target;
  }, function (t) {
    return t.type;
  }, function (t) {
    return t.ariaAtomic;
  }, function (t) {
    return t.ariaBusy;
  }, function (t) {
    return t.ariaControls;
  }, function (t) {
    return t.ariaCurrent;
  }, function (t) {
    return t.ariaDescribedby;
  }, function (t) {
    return t.ariaDetails;
  }, function (t) {
    return t.ariaDisabled;
  }, function (t) {
    return t.ariaErrormessage;
  }, function (t) {
    return t.ariaExpanded;
  }, function (t) {
    return t.ariaFlowto;
  }, function (t) {
    return t.ariaHaspopup;
  }, function (t) {
    return t.ariaHidden;
  }, function (t) {
    return t.ariaInvalid;
  }, function (t) {
    return t.ariaKeyshortcuts;
  }, function (t) {
    return t.ariaLabel;
  }, function (t) {
    return t.ariaLabelledby;
  }, function (t) {
    return t.ariaLive;
  }, function (t) {
    return t.ariaOwns;
  }, function (t) {
    return t.ariaRelevant;
  }, function (t) {
    return t.ariaRoledescription;
  }, Dt("control"), Ut(0, e), Ht("defaultSlottedContent"), jt(0, e));
};
var Qe = /*#__PURE__*/_createClass(function Qe() {
  _classCallCheck(this, Qe);
});
Gt([it({
  attribute: "aria-atomic"
})], Qe.prototype, "ariaAtomic", void 0), Gt([it({
  attribute: "aria-busy"
})], Qe.prototype, "ariaBusy", void 0), Gt([it({
  attribute: "aria-controls"
})], Qe.prototype, "ariaControls", void 0), Gt([it({
  attribute: "aria-current"
})], Qe.prototype, "ariaCurrent", void 0), Gt([it({
  attribute: "aria-describedby"
})], Qe.prototype, "ariaDescribedby", void 0), Gt([it({
  attribute: "aria-details"
})], Qe.prototype, "ariaDetails", void 0), Gt([it({
  attribute: "aria-disabled"
})], Qe.prototype, "ariaDisabled", void 0), Gt([it({
  attribute: "aria-errormessage"
})], Qe.prototype, "ariaErrormessage", void 0), Gt([it({
  attribute: "aria-flowto"
})], Qe.prototype, "ariaFlowto", void 0), Gt([it({
  attribute: "aria-haspopup"
})], Qe.prototype, "ariaHaspopup", void 0), Gt([it({
  attribute: "aria-hidden"
})], Qe.prototype, "ariaHidden", void 0), Gt([it({
  attribute: "aria-invalid"
})], Qe.prototype, "ariaInvalid", void 0), Gt([it({
  attribute: "aria-keyshortcuts"
})], Qe.prototype, "ariaKeyshortcuts", void 0), Gt([it({
  attribute: "aria-label"
})], Qe.prototype, "ariaLabel", void 0), Gt([it({
  attribute: "aria-labelledby"
})], Qe.prototype, "ariaLabelledby", void 0), Gt([it({
  attribute: "aria-live"
})], Qe.prototype, "ariaLive", void 0), Gt([it({
  attribute: "aria-owns"
})], Qe.prototype, "ariaOwns", void 0), Gt([it({
  attribute: "aria-relevant"
})], Qe.prototype, "ariaRelevant", void 0), Gt([it({
  attribute: "aria-roledescription"
})], Qe.prototype, "ariaRoledescription", void 0);
var Ze = /*#__PURE__*/function (_Se4) {
  _inherits(Ze, _Se4);
  var _super18 = _createSuper(Ze);
  function Ze() {
    var _this21;
    _classCallCheck(this, Ze);
    _this21 = _super18.apply(this, arguments), _this21.handleUnsupportedDelegatesFocus = function () {
      var t;
      window.ShadowRoot && !window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus") && (null === (t = _this21.$fastController.definition.shadowOptions) || void 0 === t ? void 0 : t.delegatesFocus) && (_this21.focus = function () {
        _this21.control.focus();
      });
    };
    return _this21;
  }
  _createClass(Ze, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(Ze.prototype), "connectedCallback", this).call(this), this.handleUnsupportedDelegatesFocus();
    }
  }]);
  return Ze;
}(Se);
Gt([it], Ze.prototype, "download", void 0), Gt([it], Ze.prototype, "href", void 0), Gt([it], Ze.prototype, "hreflang", void 0), Gt([it], Ze.prototype, "ping", void 0), Gt([it], Ze.prototype, "referrerpolicy", void 0), Gt([it], Ze.prototype, "rel", void 0), Gt([it], Ze.prototype, "target", void 0), Gt([it], Ze.prototype, "type", void 0), Gt([f], Ze.prototype, "defaultSlottedContent", void 0);
var Je = /*#__PURE__*/_createClass(function Je() {
  _classCallCheck(this, Je);
});
Gt([it({
  attribute: "aria-expanded"
})], Je.prototype, "ariaExpanded", void 0), Ve(Je, Qe), Ve(Ze, Nt, Je);
var ti = function ti(t) {
  var e = t.closest("[dir]");
  return null !== e && "rtl" === e.dir ? Be.rtl : Be.ltr;
};
var ei = /*#__PURE__*/function (_Se5) {
  _inherits(ei, _Se5);
  var _super19 = _createSuper(ei);
  function ei() {
    var _this22;
    _classCallCheck(this, ei);
    _this22 = _super19.apply(this, arguments), _this22.anchor = "", _this22.viewport = "", _this22.horizontalPositioningMode = "uncontrolled", _this22.horizontalDefaultPosition = "unset", _this22.horizontalViewportLock = !1, _this22.horizontalInset = !1, _this22.horizontalScaling = "content", _this22.verticalPositioningMode = "uncontrolled", _this22.verticalDefaultPosition = "unset", _this22.verticalViewportLock = !1, _this22.verticalInset = !1, _this22.verticalScaling = "content", _this22.fixedPlacement = !1, _this22.autoUpdateMode = "anchor", _this22.anchorElement = null, _this22.viewportElement = null, _this22.initialLayoutComplete = !1, _this22.resizeDetector = null, _this22.baseHorizontalOffset = 0, _this22.baseVerticalOffset = 0, _this22.pendingPositioningUpdate = !1, _this22.pendingReset = !1, _this22.currentDirection = Be.ltr, _this22.regionVisible = !1, _this22.forceUpdate = !1, _this22.updateThreshold = .5, _this22.update = function () {
      _this22.pendingPositioningUpdate || _this22.requestPositionUpdates();
    }, _this22.startObservers = function () {
      _this22.stopObservers(), null !== _this22.anchorElement && (_this22.requestPositionUpdates(), null !== _this22.resizeDetector && (_this22.resizeDetector.observe(_this22.anchorElement), _this22.resizeDetector.observe(_assertThisInitialized(_this22))));
    }, _this22.requestPositionUpdates = function () {
      null === _this22.anchorElement || _this22.pendingPositioningUpdate || (ei.intersectionService.requestPosition(_assertThisInitialized(_this22), _this22.handleIntersection), ei.intersectionService.requestPosition(_this22.anchorElement, _this22.handleIntersection), null !== _this22.viewportElement && ei.intersectionService.requestPosition(_this22.viewportElement, _this22.handleIntersection), _this22.pendingPositioningUpdate = !0);
    }, _this22.stopObservers = function () {
      _this22.pendingPositioningUpdate && (_this22.pendingPositioningUpdate = !1, ei.intersectionService.cancelRequestPosition(_assertThisInitialized(_this22), _this22.handleIntersection), null !== _this22.anchorElement && ei.intersectionService.cancelRequestPosition(_this22.anchorElement, _this22.handleIntersection), null !== _this22.viewportElement && ei.intersectionService.cancelRequestPosition(_this22.viewportElement, _this22.handleIntersection)), null !== _this22.resizeDetector && _this22.resizeDetector.disconnect();
    }, _this22.getViewport = function () {
      return "string" != typeof _this22.viewport || "" === _this22.viewport ? document.documentElement : document.getElementById(_this22.viewport);
    }, _this22.getAnchor = function () {
      return document.getElementById(_this22.anchor);
    }, _this22.handleIntersection = function (t) {
      _this22.pendingPositioningUpdate && (_this22.pendingPositioningUpdate = !1, _this22.applyIntersectionEntries(t) && _this22.updateLayout());
    }, _this22.applyIntersectionEntries = function (t) {
      var e = t.find(function (t) {
          return t.target === _assertThisInitialized(_this22);
        }),
        i = t.find(function (t) {
          return t.target === _this22.anchorElement;
        }),
        o = t.find(function (t) {
          return t.target === _this22.viewportElement;
        });
      return void 0 !== e && void 0 !== o && void 0 !== i && !!(!_this22.regionVisible || _this22.forceUpdate || void 0 === _this22.regionRect || void 0 === _this22.anchorRect || void 0 === _this22.viewportRect || _this22.isRectDifferent(_this22.anchorRect, i.boundingClientRect) || _this22.isRectDifferent(_this22.viewportRect, o.boundingClientRect) || _this22.isRectDifferent(_this22.regionRect, e.boundingClientRect)) && (_this22.regionRect = e.boundingClientRect, _this22.anchorRect = i.boundingClientRect, _this22.viewportElement === document.documentElement ? _this22.viewportRect = new DOMRectReadOnly(o.boundingClientRect.x + document.documentElement.scrollLeft, o.boundingClientRect.y + document.documentElement.scrollTop, o.boundingClientRect.width, o.boundingClientRect.height) : _this22.viewportRect = o.boundingClientRect, _this22.updateRegionOffset(), _this22.forceUpdate = !1, !0);
    }, _this22.updateRegionOffset = function () {
      _this22.anchorRect && _this22.regionRect && (_this22.baseHorizontalOffset = _this22.baseHorizontalOffset + (_this22.anchorRect.left - _this22.regionRect.left) + (_this22.translateX - _this22.baseHorizontalOffset), _this22.baseVerticalOffset = _this22.baseVerticalOffset + (_this22.anchorRect.top - _this22.regionRect.top) + (_this22.translateY - _this22.baseVerticalOffset));
    }, _this22.isRectDifferent = function (t, e) {
      return Math.abs(t.top - e.top) > _this22.updateThreshold || Math.abs(t.right - e.right) > _this22.updateThreshold || Math.abs(t.bottom - e.bottom) > _this22.updateThreshold || Math.abs(t.left - e.left) > _this22.updateThreshold;
    }, _this22.handleResize = function (t) {
      _this22.update();
    }, _this22.reset = function () {
      _this22.pendingReset && (_this22.pendingReset = !1, null === _this22.anchorElement && (_this22.anchorElement = _this22.getAnchor()), null === _this22.viewportElement && (_this22.viewportElement = _this22.getViewport()), _this22.currentDirection = ti(_assertThisInitialized(_this22)), _this22.startObservers());
    }, _this22.updateLayout = function () {
      var t = void 0,
        e = void 0;
      if ("uncontrolled" !== _this22.horizontalPositioningMode) {
        var _t37 = _this22.getPositioningOptions(_this22.horizontalInset);
        if ("center" === _this22.horizontalDefaultPosition) e = "center";else if ("unset" !== _this22.horizontalDefaultPosition) {
          var _t38 = _this22.horizontalDefaultPosition;
          if ("start" === _t38 || "end" === _t38) {
            var _e38 = ti(_assertThisInitialized(_this22));
            if (_e38 !== _this22.currentDirection) return _this22.currentDirection = _e38, void _this22.initialize();
            _t38 = _this22.currentDirection === Be.ltr ? "start" === _t38 ? "left" : "right" : "start" === _t38 ? "right" : "left";
          }
          switch (_t38) {
            case "left":
              e = _this22.horizontalInset ? "insetStart" : "start";
              break;
            case "right":
              e = _this22.horizontalInset ? "insetEnd" : "end";
          }
        }
        var _i39 = void 0 !== _this22.horizontalThreshold ? _this22.horizontalThreshold : void 0 !== _this22.regionRect ? _this22.regionRect.width : 0,
          _o30 = void 0 !== _this22.anchorRect ? _this22.anchorRect.left : 0,
          _s30 = void 0 !== _this22.anchorRect ? _this22.anchorRect.right : 0,
          _n23 = void 0 !== _this22.anchorRect ? _this22.anchorRect.width : 0,
          _r12 = void 0 !== _this22.viewportRect ? _this22.viewportRect.left : 0,
          _a6 = void 0 !== _this22.viewportRect ? _this22.viewportRect.right : 0;
        (void 0 === e || "locktodefault" !== _this22.horizontalPositioningMode && _this22.getAvailableSpace(e, _o30, _s30, _n23, _r12, _a6) < _i39) && (e = _this22.getAvailableSpace(_t37[0], _o30, _s30, _n23, _r12, _a6) > _this22.getAvailableSpace(_t37[1], _o30, _s30, _n23, _r12, _a6) ? _t37[0] : _t37[1]);
      }
      if ("uncontrolled" !== _this22.verticalPositioningMode) {
        var _e39 = _this22.getPositioningOptions(_this22.verticalInset);
        if ("center" === _this22.verticalDefaultPosition) t = "center";else if ("unset" !== _this22.verticalDefaultPosition) switch (_this22.verticalDefaultPosition) {
          case "top":
            t = _this22.verticalInset ? "insetStart" : "start";
            break;
          case "bottom":
            t = _this22.verticalInset ? "insetEnd" : "end";
        }
        var _i40 = void 0 !== _this22.verticalThreshold ? _this22.verticalThreshold : void 0 !== _this22.regionRect ? _this22.regionRect.height : 0,
          _o31 = void 0 !== _this22.anchorRect ? _this22.anchorRect.top : 0,
          _s31 = void 0 !== _this22.anchorRect ? _this22.anchorRect.bottom : 0,
          _n24 = void 0 !== _this22.anchorRect ? _this22.anchorRect.height : 0,
          _r13 = void 0 !== _this22.viewportRect ? _this22.viewportRect.top : 0,
          _a7 = void 0 !== _this22.viewportRect ? _this22.viewportRect.bottom : 0;
        (void 0 === t || "locktodefault" !== _this22.verticalPositioningMode && _this22.getAvailableSpace(t, _o31, _s31, _n24, _r13, _a7) < _i40) && (t = _this22.getAvailableSpace(_e39[0], _o31, _s31, _n24, _r13, _a7) > _this22.getAvailableSpace(_e39[1], _o31, _s31, _n24, _r13, _a7) ? _e39[0] : _e39[1]);
      }
      var i = _this22.getNextRegionDimension(e, t),
        o = _this22.horizontalPosition !== e || _this22.verticalPosition !== t;
      if (_this22.setHorizontalPosition(e, i), _this22.setVerticalPosition(t, i), _this22.updateRegionStyle(), !_this22.initialLayoutComplete) return _this22.initialLayoutComplete = !0, void _this22.requestPositionUpdates();
      _this22.regionVisible || (_this22.regionVisible = !0, _this22.style.removeProperty("pointer-events"), _this22.style.removeProperty("opacity"), _this22.classList.toggle("loaded", !0), _this22.$emit("loaded", _assertThisInitialized(_this22), {
        bubbles: !1
      })), _this22.updatePositionClasses(), o && _this22.$emit("positionchange", _assertThisInitialized(_this22), {
        bubbles: !1
      });
    }, _this22.updateRegionStyle = function () {
      _this22.style.width = _this22.regionWidth, _this22.style.height = _this22.regionHeight, _this22.style.transform = "translate(".concat(_this22.translateX, "px, ").concat(_this22.translateY, "px)");
    }, _this22.updatePositionClasses = function () {
      _this22.classList.toggle("top", "start" === _this22.verticalPosition), _this22.classList.toggle("bottom", "end" === _this22.verticalPosition), _this22.classList.toggle("inset-top", "insetStart" === _this22.verticalPosition), _this22.classList.toggle("inset-bottom", "insetEnd" === _this22.verticalPosition), _this22.classList.toggle("vertical-center", "center" === _this22.verticalPosition), _this22.classList.toggle("left", "start" === _this22.horizontalPosition), _this22.classList.toggle("right", "end" === _this22.horizontalPosition), _this22.classList.toggle("inset-left", "insetStart" === _this22.horizontalPosition), _this22.classList.toggle("inset-right", "insetEnd" === _this22.horizontalPosition), _this22.classList.toggle("horizontal-center", "center" === _this22.horizontalPosition);
    }, _this22.setHorizontalPosition = function (t, e) {
      if (void 0 === t || void 0 === _this22.regionRect || void 0 === _this22.anchorRect || void 0 === _this22.viewportRect) return;
      var i = 0;
      switch (_this22.horizontalScaling) {
        case "anchor":
        case "fill":
          i = _this22.horizontalViewportLock ? _this22.viewportRect.width : e.width, _this22.regionWidth = i + "px";
          break;
        case "content":
          i = _this22.regionRect.width, _this22.regionWidth = "unset";
      }
      var o = 0;
      switch (t) {
        case "start":
          _this22.translateX = _this22.baseHorizontalOffset - i, _this22.horizontalViewportLock && _this22.anchorRect.left > _this22.viewportRect.right && (_this22.translateX = _this22.translateX - (_this22.anchorRect.left - _this22.viewportRect.right));
          break;
        case "insetStart":
          _this22.translateX = _this22.baseHorizontalOffset - i + _this22.anchorRect.width, _this22.horizontalViewportLock && _this22.anchorRect.right > _this22.viewportRect.right && (_this22.translateX = _this22.translateX - (_this22.anchorRect.right - _this22.viewportRect.right));
          break;
        case "insetEnd":
          _this22.translateX = _this22.baseHorizontalOffset, _this22.horizontalViewportLock && _this22.anchorRect.left < _this22.viewportRect.left && (_this22.translateX = _this22.translateX - (_this22.anchorRect.left - _this22.viewportRect.left));
          break;
        case "end":
          _this22.translateX = _this22.baseHorizontalOffset + _this22.anchorRect.width, _this22.horizontalViewportLock && _this22.anchorRect.right < _this22.viewportRect.left && (_this22.translateX = _this22.translateX - (_this22.anchorRect.right - _this22.viewportRect.left));
          break;
        case "center":
          if (o = (_this22.anchorRect.width - i) / 2, _this22.translateX = _this22.baseHorizontalOffset + o, _this22.horizontalViewportLock) {
            var _t39 = _this22.anchorRect.left + o,
              _e40 = _this22.anchorRect.right - o;
            _t39 < _this22.viewportRect.left && !(_e40 > _this22.viewportRect.right) ? _this22.translateX = _this22.translateX - (_t39 - _this22.viewportRect.left) : _e40 > _this22.viewportRect.right && !(_t39 < _this22.viewportRect.left) && (_this22.translateX = _this22.translateX - (_e40 - _this22.viewportRect.right));
          }
      }
      _this22.horizontalPosition = t;
    }, _this22.setVerticalPosition = function (t, e) {
      if (void 0 === t || void 0 === _this22.regionRect || void 0 === _this22.anchorRect || void 0 === _this22.viewportRect) return;
      var i = 0;
      switch (_this22.verticalScaling) {
        case "anchor":
        case "fill":
          i = _this22.verticalViewportLock ? _this22.viewportRect.height : e.height, _this22.regionHeight = i + "px";
          break;
        case "content":
          i = _this22.regionRect.height, _this22.regionHeight = "unset";
      }
      var o = 0;
      switch (t) {
        case "start":
          _this22.translateY = _this22.baseVerticalOffset - i, _this22.verticalViewportLock && _this22.anchorRect.top > _this22.viewportRect.bottom && (_this22.translateY = _this22.translateY - (_this22.anchorRect.top - _this22.viewportRect.bottom));
          break;
        case "insetStart":
          _this22.translateY = _this22.baseVerticalOffset - i + _this22.anchorRect.height, _this22.verticalViewportLock && _this22.anchorRect.bottom > _this22.viewportRect.bottom && (_this22.translateY = _this22.translateY - (_this22.anchorRect.bottom - _this22.viewportRect.bottom));
          break;
        case "insetEnd":
          _this22.translateY = _this22.baseVerticalOffset, _this22.verticalViewportLock && _this22.anchorRect.top < _this22.viewportRect.top && (_this22.translateY = _this22.translateY - (_this22.anchorRect.top - _this22.viewportRect.top));
          break;
        case "end":
          _this22.translateY = _this22.baseVerticalOffset + _this22.anchorRect.height, _this22.verticalViewportLock && _this22.anchorRect.bottom < _this22.viewportRect.top && (_this22.translateY = _this22.translateY - (_this22.anchorRect.bottom - _this22.viewportRect.top));
          break;
        case "center":
          if (o = (_this22.anchorRect.height - i) / 2, _this22.translateY = _this22.baseVerticalOffset + o, _this22.verticalViewportLock) {
            var _t40 = _this22.anchorRect.top + o,
              _e41 = _this22.anchorRect.bottom - o;
            _t40 < _this22.viewportRect.top && !(_e41 > _this22.viewportRect.bottom) ? _this22.translateY = _this22.translateY - (_t40 - _this22.viewportRect.top) : _e41 > _this22.viewportRect.bottom && !(_t40 < _this22.viewportRect.top) && (_this22.translateY = _this22.translateY - (_e41 - _this22.viewportRect.bottom));
          }
      }
      _this22.verticalPosition = t;
    }, _this22.getPositioningOptions = function (t) {
      return t ? ["insetStart", "insetEnd"] : ["start", "end"];
    }, _this22.getAvailableSpace = function (t, e, i, o, s, n) {
      var r = e - s,
        a = n - (e + o);
      switch (t) {
        case "start":
          return r;
        case "insetStart":
          return r + o;
        case "insetEnd":
          return a + o;
        case "end":
          return a;
        case "center":
          return 2 * Math.min(r, a) + o;
      }
    }, _this22.getNextRegionDimension = function (t, e) {
      var i = {
        height: void 0 !== _this22.regionRect ? _this22.regionRect.height : 0,
        width: void 0 !== _this22.regionRect ? _this22.regionRect.width : 0
      };
      return void 0 !== t && "fill" === _this22.horizontalScaling ? i.width = _this22.getAvailableSpace(t, void 0 !== _this22.anchorRect ? _this22.anchorRect.left : 0, void 0 !== _this22.anchorRect ? _this22.anchorRect.right : 0, void 0 !== _this22.anchorRect ? _this22.anchorRect.width : 0, void 0 !== _this22.viewportRect ? _this22.viewportRect.left : 0, void 0 !== _this22.viewportRect ? _this22.viewportRect.right : 0) : "anchor" === _this22.horizontalScaling && (i.width = void 0 !== _this22.anchorRect ? _this22.anchorRect.width : 0), void 0 !== e && "fill" === _this22.verticalScaling ? i.height = _this22.getAvailableSpace(e, void 0 !== _this22.anchorRect ? _this22.anchorRect.top : 0, void 0 !== _this22.anchorRect ? _this22.anchorRect.bottom : 0, void 0 !== _this22.anchorRect ? _this22.anchorRect.height : 0, void 0 !== _this22.viewportRect ? _this22.viewportRect.top : 0, void 0 !== _this22.viewportRect ? _this22.viewportRect.bottom : 0) : "anchor" === _this22.verticalScaling && (i.height = void 0 !== _this22.anchorRect ? _this22.anchorRect.height : 0), i;
    }, _this22.startAutoUpdateEventListeners = function () {
      window.addEventListener("resize", _this22.update, {
        passive: !0
      }), window.addEventListener("scroll", _this22.update, {
        passive: !0,
        capture: !0
      }), null !== _this22.resizeDetector && null !== _this22.viewportElement && _this22.resizeDetector.observe(_this22.viewportElement);
    }, _this22.stopAutoUpdateEventListeners = function () {
      window.removeEventListener("resize", _this22.update), window.removeEventListener("scroll", _this22.update), null !== _this22.resizeDetector && null !== _this22.viewportElement && _this22.resizeDetector.unobserve(_this22.viewportElement);
    };
    return _this22;
  }
  _createClass(ei, [{
    key: "anchorChanged",
    value: function anchorChanged() {
      this.initialLayoutComplete && (this.anchorElement = this.getAnchor());
    }
  }, {
    key: "viewportChanged",
    value: function viewportChanged() {
      this.initialLayoutComplete && (this.viewportElement = this.getViewport());
    }
  }, {
    key: "horizontalPositioningModeChanged",
    value: function horizontalPositioningModeChanged() {
      this.requestReset();
    }
  }, {
    key: "horizontalDefaultPositionChanged",
    value: function horizontalDefaultPositionChanged() {
      this.updateForAttributeChange();
    }
  }, {
    key: "horizontalViewportLockChanged",
    value: function horizontalViewportLockChanged() {
      this.updateForAttributeChange();
    }
  }, {
    key: "horizontalInsetChanged",
    value: function horizontalInsetChanged() {
      this.updateForAttributeChange();
    }
  }, {
    key: "horizontalThresholdChanged",
    value: function horizontalThresholdChanged() {
      this.updateForAttributeChange();
    }
  }, {
    key: "horizontalScalingChanged",
    value: function horizontalScalingChanged() {
      this.updateForAttributeChange();
    }
  }, {
    key: "verticalPositioningModeChanged",
    value: function verticalPositioningModeChanged() {
      this.requestReset();
    }
  }, {
    key: "verticalDefaultPositionChanged",
    value: function verticalDefaultPositionChanged() {
      this.updateForAttributeChange();
    }
  }, {
    key: "verticalViewportLockChanged",
    value: function verticalViewportLockChanged() {
      this.updateForAttributeChange();
    }
  }, {
    key: "verticalInsetChanged",
    value: function verticalInsetChanged() {
      this.updateForAttributeChange();
    }
  }, {
    key: "verticalThresholdChanged",
    value: function verticalThresholdChanged() {
      this.updateForAttributeChange();
    }
  }, {
    key: "verticalScalingChanged",
    value: function verticalScalingChanged() {
      this.updateForAttributeChange();
    }
  }, {
    key: "fixedPlacementChanged",
    value: function fixedPlacementChanged() {
      this.$fastController.isConnected && this.initialLayoutComplete && this.initialize();
    }
  }, {
    key: "autoUpdateModeChanged",
    value: function autoUpdateModeChanged(t, e) {
      this.$fastController.isConnected && this.initialLayoutComplete && ("auto" === t && this.stopAutoUpdateEventListeners(), "auto" === e && this.startAutoUpdateEventListeners());
    }
  }, {
    key: "anchorElementChanged",
    value: function anchorElementChanged() {
      this.requestReset();
    }
  }, {
    key: "viewportElementChanged",
    value: function viewportElementChanged() {
      this.$fastController.isConnected && this.initialLayoutComplete && this.initialize();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(ei.prototype), "connectedCallback", this).call(this), "auto" === this.autoUpdateMode && this.startAutoUpdateEventListeners(), this.initialize();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(ei.prototype), "disconnectedCallback", this).call(this), "auto" === this.autoUpdateMode && this.stopAutoUpdateEventListeners(), this.stopObservers(), this.disconnectResizeDetector();
    }
  }, {
    key: "adoptedCallback",
    value: function adoptedCallback() {
      this.initialize();
    }
  }, {
    key: "disconnectResizeDetector",
    value: function disconnectResizeDetector() {
      null !== this.resizeDetector && (this.resizeDetector.disconnect(), this.resizeDetector = null);
    }
  }, {
    key: "initializeResizeDetector",
    value: function initializeResizeDetector() {
      this.disconnectResizeDetector(), this.resizeDetector = new window.ResizeObserver(this.handleResize);
    }
  }, {
    key: "updateForAttributeChange",
    value: function updateForAttributeChange() {
      this.$fastController.isConnected && this.initialLayoutComplete && (this.forceUpdate = !0, this.update());
    }
  }, {
    key: "initialize",
    value: function initialize() {
      this.initializeResizeDetector(), null === this.anchorElement && (this.anchorElement = this.getAnchor()), this.requestReset();
    }
  }, {
    key: "requestReset",
    value: function requestReset() {
      var _this23 = this;
      this.$fastController.isConnected && !1 === this.pendingReset && (this.setInitialState(), d.queueUpdate(function () {
        return _this23.reset();
      }), this.pendingReset = !0);
    }
  }, {
    key: "setInitialState",
    value: function setInitialState() {
      this.initialLayoutComplete = !1, this.regionVisible = !1, this.translateX = 0, this.translateY = 0, this.baseHorizontalOffset = 0, this.baseVerticalOffset = 0, this.viewportRect = void 0, this.regionRect = void 0, this.anchorRect = void 0, this.verticalPosition = void 0, this.horizontalPosition = void 0, this.style.opacity = "0", this.style.pointerEvents = "none", this.forceUpdate = !1, this.style.position = this.fixedPlacement ? "fixed" : "absolute", this.updatePositionClasses(), this.updateRegionStyle();
    }
  }]);
  return ei;
}(Se);
ei.intersectionService = new ( /*#__PURE__*/function () {
  function _class3() {
    var _this24 = this;
    _classCallCheck(this, _class3);
    this.intersectionDetector = null, this.observedElements = new Map(), this.requestPosition = function (t, e) {
      var i;
      null !== _this24.intersectionDetector && (_this24.observedElements.has(t) ? null === (i = _this24.observedElements.get(t)) || void 0 === i || i.push(e) : (_this24.observedElements.set(t, [e]), _this24.intersectionDetector.observe(t)));
    }, this.cancelRequestPosition = function (t, e) {
      var i = _this24.observedElements.get(t);
      if (void 0 !== i) {
        var _t41 = i.indexOf(e);
        -1 !== _t41 && i.splice(_t41, 1);
      }
    }, this.initializeIntersectionDetector = function () {
      t.IntersectionObserver && (_this24.intersectionDetector = new IntersectionObserver(_this24.handleIntersection, {
        root: null,
        rootMargin: "0px",
        threshold: [0, 1]
      }));
    }, this.handleIntersection = function (t) {
      if (null === _this24.intersectionDetector) return;
      var e = [],
        i = [];
      t.forEach(function (t) {
        var o;
        null === (o = _this24.intersectionDetector) || void 0 === o || o.unobserve(t.target);
        var s = _this24.observedElements.get(t.target);
        void 0 !== s && (s.forEach(function (o) {
          var s = e.indexOf(o);
          -1 === s && (s = e.length, e.push(o), i.push([])), i[s].push(t);
        }), _this24.observedElements.delete(t.target));
      }), e.forEach(function (t, e) {
        t(i[e]);
      });
    }, this.initializeIntersectionDetector();
  }
  return _createClass(_class3);
}())(), Gt([it], ei.prototype, "anchor", void 0), Gt([it], ei.prototype, "viewport", void 0), Gt([it({
  attribute: "horizontal-positioning-mode"
})], ei.prototype, "horizontalPositioningMode", void 0), Gt([it({
  attribute: "horizontal-default-position"
})], ei.prototype, "horizontalDefaultPosition", void 0), Gt([it({
  attribute: "horizontal-viewport-lock",
  mode: "boolean"
})], ei.prototype, "horizontalViewportLock", void 0), Gt([it({
  attribute: "horizontal-inset",
  mode: "boolean"
})], ei.prototype, "horizontalInset", void 0), Gt([it({
  attribute: "horizontal-threshold"
})], ei.prototype, "horizontalThreshold", void 0), Gt([it({
  attribute: "horizontal-scaling"
})], ei.prototype, "horizontalScaling", void 0), Gt([it({
  attribute: "vertical-positioning-mode"
})], ei.prototype, "verticalPositioningMode", void 0), Gt([it({
  attribute: "vertical-default-position"
})], ei.prototype, "verticalDefaultPosition", void 0), Gt([it({
  attribute: "vertical-viewport-lock",
  mode: "boolean"
})], ei.prototype, "verticalViewportLock", void 0), Gt([it({
  attribute: "vertical-inset",
  mode: "boolean"
})], ei.prototype, "verticalInset", void 0), Gt([it({
  attribute: "vertical-threshold"
})], ei.prototype, "verticalThreshold", void 0), Gt([it({
  attribute: "vertical-scaling"
})], ei.prototype, "verticalScaling", void 0), Gt([it({
  attribute: "fixed-placement",
  mode: "boolean"
})], ei.prototype, "fixedPlacement", void 0), Gt([it({
  attribute: "auto-update-mode"
})], ei.prototype, "autoUpdateMode", void 0), Gt([f], ei.prototype, "anchorElement", void 0), Gt([f], ei.prototype, "viewportElement", void 0), Gt([f], ei.prototype, "initialLayoutComplete", void 0);
var ii = /*#__PURE__*/function (_Se6) {
  _inherits(ii, _Se6);
  var _super20 = _createSuper(ii);
  function ii() {
    var _this25;
    _classCallCheck(this, ii);
    _this25 = _super20.apply(this, arguments), _this25.generateBadgeStyle = function () {
      if (!_this25.fill && !_this25.color) return;
      var t = "background-color: var(--badge-fill-".concat(_this25.fill, ");"),
        e = "color: var(--badge-color-".concat(_this25.color, ");");
      return _this25.fill && !_this25.color ? t : _this25.color && !_this25.fill ? e : "".concat(e, " ").concat(t);
    };
    return _this25;
  }
  return _createClass(ii);
}(Se);
Gt([it({
  attribute: "fill"
})], ii.prototype, "fill", void 0), Gt([it({
  attribute: "color"
})], ii.prototype, "color", void 0), Gt([it({
  mode: "boolean"
})], ii.prototype, "circular", void 0);
var oi = /*#__PURE__*/function (_Ze) {
  _inherits(oi, _Ze);
  var _super21 = _createSuper(oi);
  function oi() {
    var _this26;
    _classCallCheck(this, oi);
    _this26 = _super21.apply(this, arguments), _this26.separator = !0;
    return _this26;
  }
  return _createClass(oi);
}(Ze);
Gt([f], oi.prototype, "separator", void 0), Ve(oi, Nt, Je);
var si = /*#__PURE__*/function (_Se7) {
  _inherits(si, _Se7);
  var _super22 = _createSuper(si);
  function si() {
    _classCallCheck(this, si);
    return _super22.apply(this, arguments);
  }
  _createClass(si, [{
    key: "slottedBreadcrumbItemsChanged",
    value: function slottedBreadcrumbItemsChanged() {
      var _this27 = this;
      if (this.$fastController.isConnected) {
        if (void 0 === this.slottedBreadcrumbItems || 0 === this.slottedBreadcrumbItems.length) return;
        var _t42 = this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length - 1];
        this.slottedBreadcrumbItems.forEach(function (e) {
          var i = e === _t42;
          _this27.setItemSeparator(e, i), _this27.setAriaCurrent(e, i);
        });
      }
    }
  }, {
    key: "setItemSeparator",
    value: function setItemSeparator(t, e) {
      t instanceof oi && (t.separator = !e);
    }
  }, {
    key: "findChildWithHref",
    value: function findChildWithHref(t) {
      var e, i;
      return t.childElementCount > 0 ? t.querySelector("a[href]") : (null === (e = t.shadowRoot) || void 0 === e ? void 0 : e.childElementCount) ? null === (i = t.shadowRoot) || void 0 === i ? void 0 : i.querySelector("a[href]") : null;
    }
  }, {
    key: "setAriaCurrent",
    value: function setAriaCurrent(t, e) {
      var i = this.findChildWithHref(t);
      null === i && t.hasAttribute("href") && t instanceof oi ? e ? t.setAttribute("aria-current", "page") : t.removeAttribute("aria-current") : null !== i && (e ? i.setAttribute("aria-current", "page") : i.removeAttribute("aria-current"));
    }
  }]);
  return si;
}(Se);
Gt([f], si.prototype, "slottedBreadcrumbItems", void 0);
var ni = "ElementInternals" in window && "setFormValue" in window.ElementInternals.prototype,
  ri = new WeakMap();
function ai(t) {
  var e = /*#__PURE__*/function (_t43) {
    _inherits(e, _t43);
    var _super23 = _createSuper(e);
    function e() {
      var _this28;
      _classCallCheck(this, e);
      for (var _len9 = arguments.length, t = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        t[_key9] = arguments[_key9];
      }
      _this28 = _super23.call.apply(_super23, [this].concat(t)), _this28.dirtyValue = !1, _this28.disabled = !1, _this28.proxyEventsToBlock = ["change", "click"], _this28.proxyInitialized = !1, _this28.required = !1, _this28.initialValue = _this28.initialValue || "", _this28.elementInternals || (_this28.formResetCallback = _this28.formResetCallback.bind(_assertThisInitialized(_this28)));
      return _this28;
    }
    _createClass(e, [{
      key: "validity",
      get: function get() {
        return this.elementInternals ? this.elementInternals.validity : this.proxy.validity;
      }
    }, {
      key: "form",
      get: function get() {
        return this.elementInternals ? this.elementInternals.form : this.proxy.form;
      }
    }, {
      key: "validationMessage",
      get: function get() {
        return this.elementInternals ? this.elementInternals.validationMessage : this.proxy.validationMessage;
      }
    }, {
      key: "willValidate",
      get: function get() {
        return this.elementInternals ? this.elementInternals.willValidate : this.proxy.willValidate;
      }
    }, {
      key: "labels",
      get: function get() {
        if (this.elementInternals) return Object.freeze(Array.from(this.elementInternals.labels));
        if (this.proxy instanceof HTMLElement && this.proxy.ownerDocument && this.id) {
          var _t44 = this.proxy.labels,
            _e50 = Array.from(this.proxy.getRootNode().querySelectorAll("[for='".concat(this.id, "']"))),
            _i41 = _t44 ? _e50.concat(Array.from(_t44)) : _e50;
          return Object.freeze(_i41);
        }
        return o;
      }
    }, {
      key: "valueChanged",
      value: function valueChanged(t, _e43) {
        this.dirtyValue = !0, this.proxy instanceof HTMLElement && (this.proxy.value = this.value), this.currentValue = this.value, this.setFormValue(this.value), this.validate();
      }
    }, {
      key: "currentValueChanged",
      value: function currentValueChanged() {
        this.value = this.currentValue;
      }
    }, {
      key: "initialValueChanged",
      value: function initialValueChanged(t, _e44) {
        this.dirtyValue || (this.value = this.initialValue, this.dirtyValue = !1);
      }
    }, {
      key: "disabledChanged",
      value: function disabledChanged(t, _e45) {
        var _this29 = this;
        this.proxy instanceof HTMLElement && (this.proxy.disabled = this.disabled), d.queueUpdate(function () {
          return _this29.classList.toggle("disabled", _this29.disabled);
        });
      }
    }, {
      key: "nameChanged",
      value: function nameChanged(t, _e46) {
        this.proxy instanceof HTMLElement && (this.proxy.name = this.name);
      }
    }, {
      key: "requiredChanged",
      value: function requiredChanged(t, _e47) {
        var _this30 = this;
        this.proxy instanceof HTMLElement && (this.proxy.required = this.required), d.queueUpdate(function () {
          return _this30.classList.toggle("required", _this30.required);
        }), this.validate();
      }
    }, {
      key: "elementInternals",
      get: function get() {
        if (!ni) return null;
        var t = ri.get(this);
        return t || (t = this.attachInternals(), ri.set(this, t)), t;
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(e.prototype), "connectedCallback", this).call(this), this.addEventListener("keypress", this._keypressHandler), this.value || (this.value = this.initialValue, this.dirtyValue = !1), this.elementInternals || (this.attachProxy(), this.form && this.form.addEventListener("reset", this.formResetCallback));
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        var _this31 = this;
        this.proxyEventsToBlock.forEach(function (t) {
          return _this31.proxy.removeEventListener(t, _this31.stopPropagation);
        }), !this.elementInternals && this.form && this.form.removeEventListener("reset", this.formResetCallback);
      }
    }, {
      key: "checkValidity",
      value: function checkValidity() {
        return this.elementInternals ? this.elementInternals.checkValidity() : this.proxy.checkValidity();
      }
    }, {
      key: "reportValidity",
      value: function reportValidity() {
        return this.elementInternals ? this.elementInternals.reportValidity() : this.proxy.reportValidity();
      }
    }, {
      key: "setValidity",
      value: function setValidity(t, _e48, i) {
        this.elementInternals ? this.elementInternals.setValidity(t, _e48, i) : "string" == typeof _e48 && this.proxy.setCustomValidity(_e48);
      }
    }, {
      key: "formDisabledCallback",
      value: function formDisabledCallback(t) {
        this.disabled = t;
      }
    }, {
      key: "formResetCallback",
      value: function formResetCallback() {
        this.value = this.initialValue, this.dirtyValue = !1;
      }
    }, {
      key: "attachProxy",
      value: function attachProxy() {
        var _this32 = this;
        var t;
        this.proxyInitialized || (this.proxyInitialized = !0, this.proxy.style.display = "none", this.proxyEventsToBlock.forEach(function (t) {
          return _this32.proxy.addEventListener(t, _this32.stopPropagation);
        }), this.proxy.disabled = this.disabled, this.proxy.required = this.required, "string" == typeof this.name && (this.proxy.name = this.name), "string" == typeof this.value && (this.proxy.value = this.value), this.proxy.setAttribute("slot", "form-associated-proxy"), this.proxySlot = document.createElement("slot"), this.proxySlot.setAttribute("name", "form-associated-proxy")), null === (t = this.shadowRoot) || void 0 === t || t.appendChild(this.proxySlot), this.appendChild(this.proxy);
      }
    }, {
      key: "detachProxy",
      value: function detachProxy() {
        var t;
        this.removeChild(this.proxy), null === (t = this.shadowRoot) || void 0 === t || t.removeChild(this.proxySlot);
      }
    }, {
      key: "validate",
      value: function validate(t) {
        this.proxy instanceof HTMLElement && this.setValidity(this.proxy.validity, this.proxy.validationMessage, t);
      }
    }, {
      key: "setFormValue",
      value: function setFormValue(t, _e49) {
        this.elementInternals && this.elementInternals.setFormValue(t, _e49 || t);
      }
    }, {
      key: "_keypressHandler",
      value: function _keypressHandler(t) {
        switch (t.key) {
          case "Enter":
            if (this.form instanceof HTMLFormElement) {
              var _t45 = this.form.querySelector("[type=submit]");
              null == _t45 || _t45.click();
            }
        }
      }
    }, {
      key: "stopPropagation",
      value: function stopPropagation(t) {
        t.stopPropagation();
      }
    }], [{
      key: "formAssociated",
      get: function get() {
        return ni;
      }
    }]);
    return e;
  }(t);
  return it({
    mode: "boolean"
  })(e.prototype, "disabled"), it({
    mode: "fromView",
    attribute: "value"
  })(e.prototype, "initialValue"), it({
    attribute: "current-value"
  })(e.prototype, "currentValue"), it(e.prototype, "name"), it({
    mode: "boolean"
  })(e.prototype, "required"), f(e.prototype, "value"), e;
}
function li(t) {
  var e = /*#__PURE__*/function (_ai) {
    _inherits(e, _ai);
    var _super24 = _createSuper(e);
    function e() {
      _classCallCheck(this, e);
      return _super24.apply(this, arguments);
    }
    return _createClass(e);
  }(ai(t));
  var i = /*#__PURE__*/function (_e51) {
    _inherits(i, _e51);
    var _super25 = _createSuper(i);
    function i() {
      var _this33;
      _classCallCheck(this, i);
      for (var _len10 = arguments.length, t = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        t[_key10] = arguments[_key10];
      }
      _this33 = _super25.call(this, t), _this33.dirtyChecked = !1, _this33.checkedAttribute = !1, _this33.checked = !1, _this33.dirtyChecked = !1;
      return _this33;
    }
    _createClass(i, [{
      key: "checkedAttributeChanged",
      value: function checkedAttributeChanged() {
        this.defaultChecked = this.checkedAttribute;
      }
    }, {
      key: "defaultCheckedChanged",
      value: function defaultCheckedChanged() {
        this.dirtyChecked || (this.checked = this.defaultChecked, this.dirtyChecked = !1);
      }
    }, {
      key: "checkedChanged",
      value: function checkedChanged(t, e) {
        this.dirtyChecked || (this.dirtyChecked = !0), this.currentChecked = this.checked, this.updateForm(), this.proxy instanceof HTMLInputElement && (this.proxy.checked = this.checked), void 0 !== t && this.$emit("change"), this.validate();
      }
    }, {
      key: "currentCheckedChanged",
      value: function currentCheckedChanged(t, e) {
        this.checked = this.currentChecked;
      }
    }, {
      key: "updateForm",
      value: function updateForm() {
        var t = this.checked ? this.value : null;
        this.setFormValue(t, t);
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(i.prototype), "connectedCallback", this).call(this), this.updateForm();
      }
    }, {
      key: "formResetCallback",
      value: function formResetCallback() {
        _get(_getPrototypeOf(i.prototype), "formResetCallback", this).call(this), this.checked = !!this.checkedAttribute, this.dirtyChecked = !1;
      }
    }]);
    return i;
  }(e);
  return it({
    attribute: "checked",
    mode: "boolean"
  })(i.prototype, "checkedAttribute"), it({
    attribute: "current-checked",
    converter: J
  })(i.prototype, "currentChecked"), f(i.prototype, "defaultChecked"), f(i.prototype, "checked"), i;
}
var ci = /*#__PURE__*/function (_Se8) {
  _inherits(ci, _Se8);
  var _super26 = _createSuper(ci);
  function ci() {
    _classCallCheck(this, ci);
    return _super26.apply(this, arguments);
  }
  return _createClass(ci);
}(Se);
var hi = /*#__PURE__*/function (_ai2) {
  _inherits(hi, _ai2);
  var _super27 = _createSuper(hi);
  function hi() {
    var _this34;
    _classCallCheck(this, hi);
    _this34 = _super27.apply(this, arguments), _this34.proxy = document.createElement("input");
    return _this34;
  }
  return _createClass(hi);
}(ai(ci));
var di = /*#__PURE__*/function (_hi) {
  _inherits(di, _hi);
  var _super28 = _createSuper(di);
  function di() {
    var _this35;
    _classCallCheck(this, di);
    _this35 = _super28.apply(this, arguments), _this35.handleClick = function (t) {
      var e;
      _this35.disabled && (null === (e = _this35.defaultSlottedContent) || void 0 === e ? void 0 : e.length) <= 1 && t.stopPropagation();
    }, _this35.handleSubmission = function () {
      if (!_this35.form) return;
      var t = _this35.proxy.isConnected;
      t || _this35.attachProxy(), "function" == typeof _this35.form.requestSubmit ? _this35.form.requestSubmit(_this35.proxy) : _this35.proxy.click(), t || _this35.detachProxy();
    }, _this35.handleFormReset = function () {
      var t;
      null === (t = _this35.form) || void 0 === t || t.reset();
    }, _this35.handleUnsupportedDelegatesFocus = function () {
      var t;
      window.ShadowRoot && !window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus") && (null === (t = _this35.$fastController.definition.shadowOptions) || void 0 === t ? void 0 : t.delegatesFocus) && (_this35.focus = function () {
        _this35.control.focus();
      });
    };
    return _this35;
  }
  _createClass(di, [{
    key: "formactionChanged",
    value: function formactionChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.formAction = this.formaction);
    }
  }, {
    key: "formenctypeChanged",
    value: function formenctypeChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.formEnctype = this.formenctype);
    }
  }, {
    key: "formmethodChanged",
    value: function formmethodChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.formMethod = this.formmethod);
    }
  }, {
    key: "formnovalidateChanged",
    value: function formnovalidateChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.formNoValidate = this.formnovalidate);
    }
  }, {
    key: "formtargetChanged",
    value: function formtargetChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.formTarget = this.formtarget);
    }
  }, {
    key: "typeChanged",
    value: function typeChanged(t, e) {
      this.proxy instanceof HTMLInputElement && (this.proxy.type = this.type), "submit" === e && this.addEventListener("click", this.handleSubmission), "submit" === t && this.removeEventListener("click", this.handleSubmission), "reset" === e && this.addEventListener("click", this.handleFormReset), "reset" === t && this.removeEventListener("click", this.handleFormReset);
    }
  }, {
    key: "validate",
    value: function validate() {
      _get(_getPrototypeOf(di.prototype), "validate", this).call(this, this.control);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this36 = this;
      var t;
      _get(_getPrototypeOf(di.prototype), "connectedCallback", this).call(this), this.proxy.setAttribute("type", this.type), this.handleUnsupportedDelegatesFocus();
      var e = Array.from(null === (t = this.control) || void 0 === t ? void 0 : t.children);
      e && e.forEach(function (t) {
        t.addEventListener("click", _this36.handleClick);
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this37 = this;
      var t;
      _get(_getPrototypeOf(di.prototype), "disconnectedCallback", this).call(this);
      var e = Array.from(null === (t = this.control) || void 0 === t ? void 0 : t.children);
      e && e.forEach(function (t) {
        t.removeEventListener("click", _this37.handleClick);
      });
    }
  }]);
  return di;
}(hi);
Gt([it({
  mode: "boolean"
})], di.prototype, "autofocus", void 0), Gt([it({
  attribute: "form"
})], di.prototype, "formId", void 0), Gt([it], di.prototype, "formaction", void 0), Gt([it], di.prototype, "formenctype", void 0), Gt([it], di.prototype, "formmethod", void 0), Gt([it({
  mode: "boolean"
})], di.prototype, "formnovalidate", void 0), Gt([it], di.prototype, "formtarget", void 0), Gt([it], di.prototype, "type", void 0), Gt([f], di.prototype, "defaultSlottedContent", void 0);
var ui = /*#__PURE__*/_createClass(function ui() {
  _classCallCheck(this, ui);
});
Gt([it({
  attribute: "aria-expanded"
})], ui.prototype, "ariaExpanded", void 0), Gt([it({
  attribute: "aria-pressed"
})], ui.prototype, "ariaPressed", void 0), Ve(ui, Qe), Ve(di, Nt, ui);
var pi = /*#__PURE__*/function () {
  function pi(t) {
    _classCallCheck(this, pi);
    if (this.dayFormat = "numeric", this.weekdayFormat = "long", this.monthFormat = "long", this.yearFormat = "numeric", this.date = new Date(), t) for (var _e52 in t) {
      var _i42 = t[_e52];
      "date" === _e52 ? this.date = this.getDateObject(_i42) : this[_e52] = _i42;
    }
  }
  _createClass(pi, [{
    key: "getDateObject",
    value: function getDateObject(t) {
      if ("string" == typeof t) {
        var _e53 = t.split(/[/-]/);
        return _e53.length < 3 ? new Date() : new Date(parseInt(_e53[2], 10), parseInt(_e53[0], 10) - 1, parseInt(_e53[1], 10));
      }
      if ("day" in t && "month" in t && "year" in t) {
        var _e54 = t.day,
          _i43 = t.month,
          _o32 = t.year;
        return new Date(_o32, _i43 - 1, _e54);
      }
      return t;
    }
  }, {
    key: "getDate",
    value: function getDate() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.date;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        weekday: this.weekdayFormat,
        month: this.monthFormat,
        day: this.dayFormat,
        year: this.yearFormat
      };
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.locale;
      var o = this.getDateObject(t),
        s = Object.assign({
          timeZone: "utc"
        }, e);
      return new Intl.DateTimeFormat(i, s).format(o);
    }
  }, {
    key: "getDay",
    value: function getDay() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.date.getDate();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.dayFormat;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.locale;
      return this.getDate({
        month: 1,
        day: t,
        year: 2020
      }, {
        day: e
      }, i);
    }
  }, {
    key: "getMonth",
    value: function getMonth() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.date.getMonth() + 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.monthFormat;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.locale;
      return this.getDate({
        month: t,
        day: 2,
        year: 2020
      }, {
        month: e
      }, i);
    }
  }, {
    key: "getYear",
    value: function getYear() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.date.getFullYear();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.yearFormat;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.locale;
      return this.getDate({
        month: 2,
        day: 2,
        year: t
      }, {
        year: e
      }, i);
    }
  }, {
    key: "getWeekday",
    value: function getWeekday() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.weekdayFormat;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.locale;
      var o = "1-".concat(t + 1, "-2017");
      return this.getDate(o, {
        weekday: e
      }, i);
    }
  }, {
    key: "getWeekdays",
    value: function getWeekdays() {
      var _this38 = this;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.weekdayFormat;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.locale;
      return Array(7).fill(null).map(function (i, o) {
        return _this38.getWeekday(o, t, e);
      });
    }
  }]);
  return pi;
}();
var gi = /*#__PURE__*/function (_Se9) {
  _inherits(gi, _Se9);
  var _super29 = _createSuper(gi);
  function gi() {
    var _this39;
    _classCallCheck(this, gi);
    _this39 = _super29.apply(this, arguments), _this39.dateFormatter = new pi(), _this39.readonly = !1, _this39.locale = "en-US", _this39.month = new Date().getMonth() + 1, _this39.year = new Date().getFullYear(), _this39.dayFormat = "numeric", _this39.weekdayFormat = "short", _this39.monthFormat = "long", _this39.yearFormat = "numeric", _this39.minWeeks = 0, _this39.disabledDates = "", _this39.selectedDates = "", _this39.oneDayInMs = 864e5;
    return _this39;
  }
  _createClass(gi, [{
    key: "localeChanged",
    value: function localeChanged() {
      this.dateFormatter.locale = this.locale;
    }
  }, {
    key: "dayFormatChanged",
    value: function dayFormatChanged() {
      this.dateFormatter.dayFormat = this.dayFormat;
    }
  }, {
    key: "weekdayFormatChanged",
    value: function weekdayFormatChanged() {
      this.dateFormatter.weekdayFormat = this.weekdayFormat;
    }
  }, {
    key: "monthFormatChanged",
    value: function monthFormatChanged() {
      this.dateFormatter.monthFormat = this.monthFormat;
    }
  }, {
    key: "yearFormatChanged",
    value: function yearFormatChanged() {
      this.dateFormatter.yearFormat = this.yearFormat;
    }
  }, {
    key: "getMonthInfo",
    value: function getMonthInfo() {
      var _this40 = this;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.month;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.year;
      var i = function i(t) {
          return new Date(t.getFullYear(), t.getMonth(), 1).getDay();
        },
        o = function o(t) {
          var e = new Date(t.getFullYear(), t.getMonth() + 1, 1);
          return new Date(e.getTime() - _this40.oneDayInMs).getDate();
        },
        s = new Date(e, t - 1),
        n = new Date(e, t),
        r = new Date(e, t - 2);
      return {
        length: o(s),
        month: t,
        start: i(s),
        year: e,
        previous: {
          length: o(r),
          month: r.getMonth() + 1,
          start: i(r),
          year: r.getFullYear()
        },
        next: {
          length: o(n),
          month: n.getMonth() + 1,
          start: i(n),
          year: n.getFullYear()
        }
      };
    }
  }, {
    key: "getDays",
    value: function getDays() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getMonthInfo();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.minWeeks;
      e = e > 10 ? 10 : e;
      var i = t.start,
        o = t.length,
        s = t.previous,
        n = t.next,
        r = [];
      var a = 1 - i;
      for (; a < o + 1 || r.length < e || r[r.length - 1].length % 7 != 0;) {
        var _ref2 = a < 1 ? s : a > o ? n : t,
          _e55 = _ref2.month,
          _i44 = _ref2.year,
          _l4 = a < 1 ? s.length + a : a > o ? a - o : a,
          _c3 = "".concat(_e55, "-").concat(_l4, "-").concat(_i44),
          _h4 = {
            day: _l4,
            month: _e55,
            year: _i44,
            disabled: this.dateInString(_c3, this.disabledDates),
            selected: this.dateInString(_c3, this.selectedDates)
          },
          _d5 = r[r.length - 1];
        0 === r.length || _d5.length % 7 == 0 ? r.push([_h4]) : _d5.push(_h4), a++;
      }
      return r;
    }
  }, {
    key: "dateInString",
    value: function dateInString(t, e) {
      var i = e.split(",").map(function (t) {
        return t.trim();
      });
      return t = "string" == typeof t ? t : "".concat(t.getMonth() + 1, "-").concat(t.getDate(), "-").concat(t.getFullYear()), i.some(function (e) {
        return e === t;
      });
    }
  }, {
    key: "getDayClassNames",
    value: function getDayClassNames(t, e) {
      var i = t.day,
        o = t.month,
        s = t.year,
        n = t.disabled,
        r = t.selected;
      return ["day", e === "".concat(o, "-").concat(i, "-").concat(s) && "today", this.month !== o && "inactive", n && "disabled", r && "selected"].filter(Boolean).join(" ");
    }
  }, {
    key: "getWeekdayText",
    value: function getWeekdayText() {
      var t = this.dateFormatter.getWeekdays().map(function (t) {
        return {
          text: t
        };
      });
      if ("long" !== this.weekdayFormat) {
        var _e56 = this.dateFormatter.getWeekdays("long");
        t.forEach(function (t, i) {
          t.abbr = _e56[i];
        });
      }
      return t;
    }
  }, {
    key: "handleDateSelect",
    value: function handleDateSelect(t, e) {
      t.preventDefault, this.$emit("dateselected", e);
    }
  }, {
    key: "handleKeydown",
    value: function handleKeydown(t, e) {
      return "Enter" === t.key && this.handleDateSelect(t, e), !0;
    }
  }]);
  return gi;
}(Se);
Gt([it({
  mode: "boolean"
})], gi.prototype, "readonly", void 0), Gt([it], gi.prototype, "locale", void 0), Gt([it({
  converter: tt
})], gi.prototype, "month", void 0), Gt([it({
  converter: tt
})], gi.prototype, "year", void 0), Gt([it({
  attribute: "day-format",
  mode: "fromView"
})], gi.prototype, "dayFormat", void 0), Gt([it({
  attribute: "weekday-format",
  mode: "fromView"
})], gi.prototype, "weekdayFormat", void 0), Gt([it({
  attribute: "month-format",
  mode: "fromView"
})], gi.prototype, "monthFormat", void 0), Gt([it({
  attribute: "year-format",
  mode: "fromView"
})], gi.prototype, "yearFormat", void 0), Gt([it({
  attribute: "min-weeks",
  converter: tt
})], gi.prototype, "minWeeks", void 0), Gt([it({
  attribute: "disabled-dates"
})], gi.prototype, "disabledDates", void 0), Gt([it({
  attribute: "selected-dates"
})], gi.prototype, "selectedDates", void 0);
var fi = "none",
  mi = "default",
  vi = "sticky",
  bi = "default",
  yi = "columnheader",
  xi = "rowheader",
  $i = "default",
  wi = "header",
  ki = "sticky-header";
var Ci = /*#__PURE__*/function (_Se10) {
  _inherits(Ci, _Se10);
  var _super30 = _createSuper(Ci);
  function Ci() {
    var _this41;
    _classCallCheck(this, Ci);
    _this41 = _super30.apply(this, arguments), _this41.rowType = $i, _this41.rowData = null, _this41.columnDefinitions = null, _this41.isActiveRow = !1, _this41.cellsRepeatBehavior = null, _this41.cellsPlaceholder = null, _this41.focusColumnIndex = 0, _this41.refocusOnLoad = !1, _this41.updateRowStyle = function () {
      _this41.style.gridTemplateColumns = _this41.gridTemplateColumns;
    };
    return _this41;
  }
  _createClass(Ci, [{
    key: "gridTemplateColumnsChanged",
    value: function gridTemplateColumnsChanged() {
      this.$fastController.isConnected && this.updateRowStyle();
    }
  }, {
    key: "rowTypeChanged",
    value: function rowTypeChanged() {
      this.$fastController.isConnected && this.updateItemTemplate();
    }
  }, {
    key: "rowDataChanged",
    value: function rowDataChanged() {
      null !== this.rowData && this.isActiveRow && (this.refocusOnLoad = !0);
    }
  }, {
    key: "cellItemTemplateChanged",
    value: function cellItemTemplateChanged() {
      this.updateItemTemplate();
    }
  }, {
    key: "headerCellItemTemplateChanged",
    value: function headerCellItemTemplateChanged() {
      this.updateItemTemplate();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(Ci.prototype), "connectedCallback", this).call(this), null === this.cellsRepeatBehavior && (this.cellsPlaceholder = document.createComment(""), this.appendChild(this.cellsPlaceholder), this.updateItemTemplate(), this.cellsRepeatBehavior = new Rt(function (t) {
        return t.columnDefinitions;
      }, function (t) {
        return t.activeCellItemTemplate;
      }, {
        positioning: !0
      }).createBehavior(this.cellsPlaceholder), this.$fastController.addBehaviors([this.cellsRepeatBehavior])), this.addEventListener("cell-focused", this.handleCellFocus), this.addEventListener("focusout", this.handleFocusout), this.addEventListener("keydown", this.handleKeydown), this.updateRowStyle(), this.refocusOnLoad && (this.refocusOnLoad = !1, this.cellElements.length > this.focusColumnIndex && this.cellElements[this.focusColumnIndex].focus());
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(Ci.prototype), "disconnectedCallback", this).call(this), this.removeEventListener("cell-focused", this.handleCellFocus), this.removeEventListener("focusout", this.handleFocusout), this.removeEventListener("keydown", this.handleKeydown);
    }
  }, {
    key: "handleFocusout",
    value: function handleFocusout(t) {
      this.contains(t.target) || (this.isActiveRow = !1, this.focusColumnIndex = 0);
    }
  }, {
    key: "handleCellFocus",
    value: function handleCellFocus(t) {
      this.isActiveRow = !0, this.focusColumnIndex = this.cellElements.indexOf(t.target), this.$emit("row-focused", this);
    }
  }, {
    key: "handleKeydown",
    value: function handleKeydown(t) {
      if (t.defaultPrevented) return;
      var e = 0;
      switch (t.key) {
        case "ArrowLeft":
          e = Math.max(0, this.focusColumnIndex - 1), this.cellElements[e].focus(), t.preventDefault();
          break;
        case "ArrowRight":
          e = Math.min(this.cellElements.length - 1, this.focusColumnIndex + 1), this.cellElements[e].focus(), t.preventDefault();
          break;
        case "Home":
          t.ctrlKey || (this.cellElements[0].focus(), t.preventDefault());
          break;
        case "End":
          t.ctrlKey || (this.cellElements[this.cellElements.length - 1].focus(), t.preventDefault());
      }
    }
  }, {
    key: "updateItemTemplate",
    value: function updateItemTemplate() {
      this.activeCellItemTemplate = this.rowType === $i && void 0 !== this.cellItemTemplate ? this.cellItemTemplate : this.rowType === $i && void 0 === this.cellItemTemplate ? this.defaultCellItemTemplate : void 0 !== this.headerCellItemTemplate ? this.headerCellItemTemplate : this.defaultHeaderCellItemTemplate;
    }
  }]);
  return Ci;
}(Se);
Gt([it({
  attribute: "grid-template-columns"
})], Ci.prototype, "gridTemplateColumns", void 0), Gt([it({
  attribute: "row-type"
})], Ci.prototype, "rowType", void 0), Gt([f], Ci.prototype, "rowData", void 0), Gt([f], Ci.prototype, "columnDefinitions", void 0), Gt([f], Ci.prototype, "cellItemTemplate", void 0), Gt([f], Ci.prototype, "headerCellItemTemplate", void 0), Gt([f], Ci.prototype, "rowIndex", void 0), Gt([f], Ci.prototype, "isActiveRow", void 0), Gt([f], Ci.prototype, "activeCellItemTemplate", void 0), Gt([f], Ci.prototype, "defaultCellItemTemplate", void 0), Gt([f], Ci.prototype, "defaultHeaderCellItemTemplate", void 0), Gt([f], Ci.prototype, "cellElements", void 0);
var Ii = /*#__PURE__*/function (_Se11) {
  _inherits(Ii, _Se11);
  var _super31 = _createSuper(Ii);
  function Ii() {
    var _this42;
    _classCallCheck(this, Ii);
    _this42 = _super31.call(this), _this42.noTabbing = !1, _this42.generateHeader = mi, _this42.rowsData = [], _this42.columnDefinitions = null, _this42.focusRowIndex = 0, _this42.focusColumnIndex = 0, _this42.rowsPlaceholder = null, _this42.generatedHeader = null, _this42.isUpdatingFocus = !1, _this42.pendingFocusUpdate = !1, _this42.rowindexUpdateQueued = !1, _this42.columnDefinitionsStale = !0, _this42.generatedGridTemplateColumns = "", _this42.focusOnCell = function (t, e, i) {
      if (0 === _this42.rowElements.length) return _this42.focusRowIndex = 0, void (_this42.focusColumnIndex = 0);
      var o = Math.max(0, Math.min(_this42.rowElements.length - 1, t)),
        s = _this42.rowElements[o].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),
        n = s[Math.max(0, Math.min(s.length - 1, e))];
      i && _this42.scrollHeight !== _this42.clientHeight && (o < _this42.focusRowIndex && _this42.scrollTop > 0 || o > _this42.focusRowIndex && _this42.scrollTop < _this42.scrollHeight - _this42.clientHeight) && n.scrollIntoView({
        block: "center",
        inline: "center"
      }), n.focus();
    }, _this42.onChildListChange = function (t, e) {
      t && t.length && (t.forEach(function (t) {
        t.addedNodes.forEach(function (t) {
          1 === t.nodeType && "row" === t.getAttribute("role") && (t.columnDefinitions = _this42.columnDefinitions);
        });
      }), _this42.queueRowIndexUpdate());
    }, _this42.queueRowIndexUpdate = function () {
      _this42.rowindexUpdateQueued || (_this42.rowindexUpdateQueued = !0, d.queueUpdate(_this42.updateRowIndexes));
    }, _this42.updateRowIndexes = function () {
      var t = _this42.gridTemplateColumns;
      if (void 0 === t) {
        if ("" === _this42.generatedGridTemplateColumns && _this42.rowElements.length > 0) {
          var _t46 = _this42.rowElements[0];
          _this42.generatedGridTemplateColumns = new Array(_t46.cellElements.length).fill("1fr").join(" ");
        }
        t = _this42.generatedGridTemplateColumns;
      }
      _this42.rowElements.forEach(function (e, i) {
        var o = e;
        o.rowIndex = i, o.gridTemplateColumns = t, _this42.columnDefinitionsStale && (o.columnDefinitions = _this42.columnDefinitions);
      }), _this42.rowindexUpdateQueued = !1, _this42.columnDefinitionsStale = !1;
    };
    return _this42;
  }
  _createClass(Ii, [{
    key: "noTabbingChanged",
    value: function noTabbingChanged() {
      this.$fastController.isConnected && (this.noTabbing ? this.setAttribute("tabIndex", "-1") : this.setAttribute("tabIndex", this.contains(document.activeElement) || this === document.activeElement ? "-1" : "0"));
    }
  }, {
    key: "generateHeaderChanged",
    value: function generateHeaderChanged() {
      this.$fastController.isConnected && this.toggleGeneratedHeader();
    }
  }, {
    key: "gridTemplateColumnsChanged",
    value: function gridTemplateColumnsChanged() {
      this.$fastController.isConnected && this.updateRowIndexes();
    }
  }, {
    key: "rowsDataChanged",
    value: function rowsDataChanged() {
      null === this.columnDefinitions && this.rowsData.length > 0 && (this.columnDefinitions = Ii.generateColumns(this.rowsData[0])), this.$fastController.isConnected && this.toggleGeneratedHeader();
    }
  }, {
    key: "columnDefinitionsChanged",
    value: function columnDefinitionsChanged() {
      null !== this.columnDefinitions ? (this.generatedGridTemplateColumns = Ii.generateTemplateColumns(this.columnDefinitions), this.$fastController.isConnected && (this.columnDefinitionsStale = !0, this.queueRowIndexUpdate())) : this.generatedGridTemplateColumns = "";
    }
  }, {
    key: "headerCellItemTemplateChanged",
    value: function headerCellItemTemplateChanged() {
      this.$fastController.isConnected && null !== this.generatedHeader && (this.generatedHeader.headerCellItemTemplate = this.headerCellItemTemplate);
    }
  }, {
    key: "focusRowIndexChanged",
    value: function focusRowIndexChanged() {
      this.$fastController.isConnected && this.queueFocusUpdate();
    }
  }, {
    key: "focusColumnIndexChanged",
    value: function focusColumnIndexChanged() {
      this.$fastController.isConnected && this.queueFocusUpdate();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(Ii.prototype), "connectedCallback", this).call(this), void 0 === this.rowItemTemplate && (this.rowItemTemplate = this.defaultRowItemTemplate), this.rowsPlaceholder = document.createComment(""), this.appendChild(this.rowsPlaceholder), this.toggleGeneratedHeader(), this.rowsRepeatBehavior = new Rt(function (t) {
        return t.rowsData;
      }, function (t) {
        return t.rowItemTemplate;
      }, {
        positioning: !0
      }).createBehavior(this.rowsPlaceholder), this.$fastController.addBehaviors([this.rowsRepeatBehavior]), this.addEventListener("row-focused", this.handleRowFocus), this.addEventListener("focus", this.handleFocus), this.addEventListener("keydown", this.handleKeydown), this.addEventListener("focusout", this.handleFocusOut), this.observer = new MutationObserver(this.onChildListChange), this.observer.observe(this, {
        childList: !0
      }), this.noTabbing && this.setAttribute("tabindex", "-1"), d.queueUpdate(this.queueRowIndexUpdate);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(Ii.prototype), "disconnectedCallback", this).call(this), this.removeEventListener("row-focused", this.handleRowFocus), this.removeEventListener("focus", this.handleFocus), this.removeEventListener("keydown", this.handleKeydown), this.removeEventListener("focusout", this.handleFocusOut), this.observer.disconnect(), this.rowsPlaceholder = null, this.generatedHeader = null;
    }
  }, {
    key: "handleRowFocus",
    value: function handleRowFocus(t) {
      this.isUpdatingFocus = !0;
      var e = t.target;
      this.focusRowIndex = this.rowElements.indexOf(e), this.focusColumnIndex = e.focusColumnIndex, this.setAttribute("tabIndex", "-1"), this.isUpdatingFocus = !1;
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(t) {
      this.focusOnCell(this.focusRowIndex, this.focusColumnIndex, !0);
    }
  }, {
    key: "handleFocusOut",
    value: function handleFocusOut(t) {
      null !== t.relatedTarget && this.contains(t.relatedTarget) || this.setAttribute("tabIndex", this.noTabbing ? "-1" : "0");
    }
  }, {
    key: "handleKeydown",
    value: function handleKeydown(t) {
      if (t.defaultPrevented) return;
      var e;
      var i = this.rowElements.length - 1,
        o = this.offsetHeight + this.scrollTop,
        s = this.rowElements[i];
      switch (t.key) {
        case "ArrowUp":
          t.preventDefault(), this.focusOnCell(this.focusRowIndex - 1, this.focusColumnIndex, !0);
          break;
        case "ArrowDown":
          t.preventDefault(), this.focusOnCell(this.focusRowIndex + 1, this.focusColumnIndex, !0);
          break;
        case "PageUp":
          if (t.preventDefault(), 0 === this.rowElements.length) {
            this.focusOnCell(0, 0, !1);
            break;
          }
          if (0 === this.focusRowIndex) return void this.focusOnCell(0, this.focusColumnIndex, !1);
          for (e = this.focusRowIndex - 1; e >= 0; e--) {
            var _t47 = this.rowElements[e];
            if (_t47.offsetTop < this.scrollTop) {
              this.scrollTop = _t47.offsetTop + _t47.clientHeight - this.clientHeight;
              break;
            }
          }
          this.focusOnCell(e, this.focusColumnIndex, !1);
          break;
        case "PageDown":
          if (t.preventDefault(), 0 === this.rowElements.length) {
            this.focusOnCell(0, 0, !1);
            break;
          }
          if (this.focusRowIndex >= i || s.offsetTop + s.offsetHeight <= o) return void this.focusOnCell(i, this.focusColumnIndex, !1);
          for (e = this.focusRowIndex + 1; e <= i; e++) {
            var _t48 = this.rowElements[e];
            if (_t48.offsetTop + _t48.offsetHeight > o) {
              var _e57 = 0;
              this.generateHeader === vi && null !== this.generatedHeader && (_e57 = this.generatedHeader.clientHeight), this.scrollTop = _t48.offsetTop - _e57;
              break;
            }
          }
          this.focusOnCell(e, this.focusColumnIndex, !1);
          break;
        case "Home":
          t.ctrlKey && (t.preventDefault(), this.focusOnCell(0, 0, !0));
          break;
        case "End":
          t.ctrlKey && null !== this.columnDefinitions && (t.preventDefault(), this.focusOnCell(this.rowElements.length - 1, this.columnDefinitions.length - 1, !0));
      }
    }
  }, {
    key: "queueFocusUpdate",
    value: function queueFocusUpdate() {
      var _this43 = this;
      this.isUpdatingFocus && (this.contains(document.activeElement) || this === document.activeElement) || !1 === this.pendingFocusUpdate && (this.pendingFocusUpdate = !0, d.queueUpdate(function () {
        return _this43.updateFocus();
      }));
    }
  }, {
    key: "updateFocus",
    value: function updateFocus() {
      this.pendingFocusUpdate = !1, this.focusOnCell(this.focusRowIndex, this.focusColumnIndex, !0);
    }
  }, {
    key: "toggleGeneratedHeader",
    value: function toggleGeneratedHeader() {
      if (null !== this.generatedHeader && (this.removeChild(this.generatedHeader), this.generatedHeader = null), this.generateHeader !== fi && this.rowsData.length > 0) {
        var _t49 = document.createElement(this.rowElementTag);
        return this.generatedHeader = _t49, this.generatedHeader.columnDefinitions = this.columnDefinitions, this.generatedHeader.gridTemplateColumns = this.gridTemplateColumns, this.generatedHeader.rowType = this.generateHeader === vi ? ki : wi, void (null === this.firstChild && null === this.rowsPlaceholder || this.insertBefore(_t49, null !== this.firstChild ? this.firstChild : this.rowsPlaceholder));
      }
    }
  }], [{
    key: "generateTemplateColumns",
    value: function generateTemplateColumns(t) {
      var e = "";
      return t.forEach(function (t) {
        e = "".concat(e).concat("" === e ? "" : " ", "1fr");
      }), e;
    }
  }]);
  return Ii;
}(Se);
Ii.generateColumns = function (t) {
  return Object.getOwnPropertyNames(t).map(function (t, e) {
    return {
      columnDataKey: t,
      gridColumn: "" + e
    };
  });
}, Gt([it({
  attribute: "no-tabbing",
  mode: "boolean"
})], Ii.prototype, "noTabbing", void 0), Gt([it({
  attribute: "generate-header"
})], Ii.prototype, "generateHeader", void 0), Gt([it({
  attribute: "grid-template-columns"
})], Ii.prototype, "gridTemplateColumns", void 0), Gt([f], Ii.prototype, "rowsData", void 0), Gt([f], Ii.prototype, "columnDefinitions", void 0), Gt([f], Ii.prototype, "rowItemTemplate", void 0), Gt([f], Ii.prototype, "cellItemTemplate", void 0), Gt([f], Ii.prototype, "headerCellItemTemplate", void 0), Gt([f], Ii.prototype, "focusRowIndex", void 0), Gt([f], Ii.prototype, "focusColumnIndex", void 0), Gt([f], Ii.prototype, "defaultRowItemTemplate", void 0), Gt([f], Ii.prototype, "rowElementTag", void 0), Gt([f], Ii.prototype, "rowElements", void 0);
var Fi = _(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["<template>", "</template>"])), function (t) {
    return null === t.rowData || null === t.columnDefinition || null === t.columnDefinition.columnDataKey ? null : t.rowData[t.columnDefinition.columnDataKey];
  }),
  Di = _(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["<template>", "</template>"])), function (t) {
    return null === t.columnDefinition ? null : void 0 === t.columnDefinition.title ? t.columnDefinition.columnDataKey : t.columnDefinition.title;
  });
var Ti = /*#__PURE__*/function (_Se12) {
  _inherits(Ti, _Se12);
  var _super32 = _createSuper(Ti);
  function Ti() {
    var _this44;
    _classCallCheck(this, Ti);
    _this44 = _super32.apply(this, arguments), _this44.cellType = bi, _this44.rowData = null, _this44.columnDefinition = null, _this44.isActiveCell = !1, _this44.customCellView = null, _this44.updateCellStyle = function () {
      _this44.style.gridColumn = _this44.gridColumn;
    };
    return _this44;
  }
  _createClass(Ti, [{
    key: "cellTypeChanged",
    value: function cellTypeChanged() {
      this.$fastController.isConnected && this.updateCellView();
    }
  }, {
    key: "gridColumnChanged",
    value: function gridColumnChanged() {
      this.$fastController.isConnected && this.updateCellStyle();
    }
  }, {
    key: "columnDefinitionChanged",
    value: function columnDefinitionChanged(t, e) {
      this.$fastController.isConnected && this.updateCellView();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var t;
      _get(_getPrototypeOf(Ti.prototype), "connectedCallback", this).call(this), this.addEventListener("focusin", this.handleFocusin), this.addEventListener("focusout", this.handleFocusout), this.addEventListener("keydown", this.handleKeydown), this.style.gridColumn = "" + (void 0 === (null === (t = this.columnDefinition) || void 0 === t ? void 0 : t.gridColumn) ? 0 : this.columnDefinition.gridColumn), this.updateCellView(), this.updateCellStyle();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(Ti.prototype), "disconnectedCallback", this).call(this), this.removeEventListener("focusin", this.handleFocusin), this.removeEventListener("focusout", this.handleFocusout), this.removeEventListener("keydown", this.handleKeydown), this.disconnectCellView();
    }
  }, {
    key: "handleFocusin",
    value: function handleFocusin(t) {
      if (!this.isActiveCell) {
        switch (this.isActiveCell = !0, this.cellType) {
          case yi:
            if (null !== this.columnDefinition && !0 !== this.columnDefinition.headerCellInternalFocusQueue && "function" == typeof this.columnDefinition.headerCellFocusTargetCallback) {
              var _t50 = this.columnDefinition.headerCellFocusTargetCallback(this);
              null !== _t50 && _t50.focus();
            }
            break;
          default:
            if (null !== this.columnDefinition && !0 !== this.columnDefinition.cellInternalFocusQueue && "function" == typeof this.columnDefinition.cellFocusTargetCallback) {
              var _t51 = this.columnDefinition.cellFocusTargetCallback(this);
              null !== _t51 && _t51.focus();
            }
        }
        this.$emit("cell-focused", this);
      }
    }
  }, {
    key: "handleFocusout",
    value: function handleFocusout(t) {
      this === document.activeElement || this.contains(document.activeElement) || (this.isActiveCell = !1);
    }
  }, {
    key: "handleKeydown",
    value: function handleKeydown(t) {
      if (!(t.defaultPrevented || null === this.columnDefinition || this.cellType === bi && !0 !== this.columnDefinition.cellInternalFocusQueue || this.cellType === yi && !0 !== this.columnDefinition.headerCellInternalFocusQueue)) switch (t.key) {
        case "Enter":
        case "F2":
          if (this.contains(document.activeElement) && document.activeElement !== this) return;
          switch (this.cellType) {
            case yi:
              if (void 0 !== this.columnDefinition.headerCellFocusTargetCallback) {
                var _e58 = this.columnDefinition.headerCellFocusTargetCallback(this);
                null !== _e58 && _e58.focus(), t.preventDefault();
              }
              break;
            default:
              if (void 0 !== this.columnDefinition.cellFocusTargetCallback) {
                var _e59 = this.columnDefinition.cellFocusTargetCallback(this);
                null !== _e59 && _e59.focus(), t.preventDefault();
              }
          }
          break;
        case "Escape":
          this.contains(document.activeElement) && document.activeElement !== this && (this.focus(), t.preventDefault());
      }
    }
  }, {
    key: "updateCellView",
    value: function updateCellView() {
      if (this.disconnectCellView(), null !== this.columnDefinition) switch (this.cellType) {
        case yi:
          void 0 !== this.columnDefinition.headerCellTemplate ? this.customCellView = this.columnDefinition.headerCellTemplate.render(this, this) : this.customCellView = Di.render(this, this);
          break;
        case void 0:
        case xi:
        case bi:
          void 0 !== this.columnDefinition.cellTemplate ? this.customCellView = this.columnDefinition.cellTemplate.render(this, this) : this.customCellView = Fi.render(this, this);
      }
    }
  }, {
    key: "disconnectCellView",
    value: function disconnectCellView() {
      null !== this.customCellView && (this.customCellView.dispose(), this.customCellView = null);
    }
  }]);
  return Ti;
}(Se);
Gt([it({
  attribute: "cell-type"
})], Ti.prototype, "cellType", void 0), Gt([it({
  attribute: "grid-column"
})], Ti.prototype, "gridColumn", void 0), Gt([f], Ti.prototype, "rowData", void 0), Gt([f], Ti.prototype, "columnDefinition", void 0);
var Si = _(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["<div class=\"title\" part=\"title\" aria-label=\"", "\"><span part=\"month\">", "</span><span part=\"year\">", "</span></div>"])), function (t) {
    return t.dateFormatter.getDate("".concat(t.month, "-2-").concat(t.year), {
      month: "long",
      year: "numeric"
    });
  }, function (t) {
    return t.dateFormatter.getMonth(t.month);
  }, function (t) {
    return t.dateFormatter.getYear(t.year);
  }),
  Oi = function Oi(t, e) {
    var i = t.tagFor(Ci);
    return _(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["<", " class=\"week\" part=\"week\" role=\"row\" role-type=\"default\" grid-template-columns=\"1fr 1fr 1fr 1fr 1fr 1fr 1fr\">", "</", ">"])), i, At(function (t) {
      return t;
    }, function (t, e) {
      var i = t.tagFor(Ti);
      return _(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["<", " class=\"", "\" part=\"day\" tabindex=\"-1\" role=\"gridcell\" grid-column=\"", "\" @click=\"", "\" @keydown=\"", "\" aria-label=\"", "\"><div class=\"date\" part=\"", "\">", "</div><slot name=\"", "-", "-", "\"></slot></", ">"])), i, function (t, i) {
        return i.parentContext.parent.getDayClassNames(t, e);
      }, function (t, e) {
        return e.index + 1;
      }, function (t, e) {
        return e.parentContext.parent.handleDateSelect(e.event, t);
      }, function (t, e) {
        return e.parentContext.parent.handleKeydown(e.event, t);
      }, function (t, e) {
        return e.parentContext.parent.dateFormatter.getDate("".concat(t.month, "-").concat(t.day, "-").concat(t.year), {
          month: "long",
          day: "numeric"
        });
      }, function (t) {
        return e === "".concat(t.month, "-").concat(t.day, "-").concat(t.year) ? "today" : "date";
      }, function (t, e) {
        return e.parentContext.parent.dateFormatter.getDay(t.day);
      }, function (t) {
        return t.month;
      }, function (t) {
        return t.day;
      }, function (t) {
        return t.year;
      }, i);
    }(t, e), {
      positioning: !0
    }), i);
  },
  Ei = function Ei(t, e) {
    var i = t.tagFor(Ii),
      o = t.tagFor(Ci);
    return _(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["<", " class=\"days interact\" part=\"days\" generate-header=\"none\"><", " class=\"week-days\" part=\"week-days\" role=\"row\" row-type=\"header\" grid-template-columns=\"1fr 1fr 1fr 1fr 1fr 1fr 1fr\">", "</", ">", "</", ">"])), i, o, At(function (t) {
      return t.getWeekdayText();
    }, function (t) {
      var e = t.tagFor(Ti);
      return _(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["<", " class=\"week-day\" part=\"week-day\" tabindex=\"-1\" grid-column=\"", "\" abbr=\"", "\">", "</", ">"])), e, function (t, e) {
        return e.index + 1;
      }, function (t) {
        return t.abbr;
      }, function (t) {
        return t.text;
      }, e);
    }(t), {
      positioning: !0
    }), o, At(function (t) {
      return t.getDays();
    }, Oi(t, e)), i);
  };
var Vi = /*#__PURE__*/function (_Se13) {
  _inherits(Vi, _Se13);
  var _super33 = _createSuper(Vi);
  function Vi() {
    _classCallCheck(this, Vi);
    return _super33.apply(this, arguments);
  }
  return _createClass(Vi);
}(Se);
var Ri = /*#__PURE__*/function (_Se14) {
  _inherits(Ri, _Se14);
  var _super34 = _createSuper(Ri);
  function Ri() {
    _classCallCheck(this, Ri);
    return _super34.apply(this, arguments);
  }
  return _createClass(Ri);
}(Se);
var Ai = /*#__PURE__*/function (_li) {
  _inherits(Ai, _li);
  var _super35 = _createSuper(Ai);
  function Ai() {
    var _this45;
    _classCallCheck(this, Ai);
    _this45 = _super35.apply(this, arguments), _this45.proxy = document.createElement("input");
    return _this45;
  }
  return _createClass(Ai);
}(li(Ri));
var Li = /*#__PURE__*/function (_Ai) {
  _inherits(Li, _Ai);
  var _super36 = _createSuper(Li);
  function Li() {
    var _this46;
    _classCallCheck(this, Li);
    _this46 = _super36.call(this), _this46.initialValue = "on", _this46.indeterminate = !1, _this46.keypressHandler = function (t) {
      if (!_this46.readOnly) switch (t.key) {
        case " ":
          _this46.indeterminate && (_this46.indeterminate = !1), _this46.checked = !_this46.checked;
      }
    }, _this46.clickHandler = function (t) {
      _this46.disabled || _this46.readOnly || (_this46.indeterminate && (_this46.indeterminate = !1), _this46.checked = !_this46.checked);
    }, _this46.proxy.setAttribute("type", "checkbox");
    return _this46;
  }
  _createClass(Li, [{
    key: "readOnlyChanged",
    value: function readOnlyChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.readOnly = this.readOnly);
    }
  }]);
  return Li;
}(Ai);
function Pi(t) {
  return Pe(t) && ("option" === t.getAttribute("role") || t instanceof HTMLOptionElement);
}
Gt([it({
  attribute: "readonly",
  mode: "boolean"
})], Li.prototype, "readOnly", void 0), Gt([f], Li.prototype, "defaultSlottedNodes", void 0), Gt([f], Li.prototype, "indeterminate", void 0);
var zi = /*#__PURE__*/function (_Se15) {
  _inherits(zi, _Se15);
  var _super37 = _createSuper(zi);
  function zi(t, e, i, o) {
    var _this47;
    _classCallCheck(this, zi);
    _this47 = _super37.call(this), _this47.defaultSelected = !1, _this47.dirtySelected = !1, _this47.selected = _this47.defaultSelected, _this47.dirtyValue = !1, t && (_this47.textContent = t), e && (_this47.initialValue = e), i && (_this47.defaultSelected = i), o && (_this47.selected = o), _this47.proxy = new Option("" + _this47.textContent, _this47.initialValue, _this47.defaultSelected, _this47.selected), _this47.proxy.disabled = _this47.disabled;
    return _this47;
  }
  _createClass(zi, [{
    key: "checkedChanged",
    value: function checkedChanged(t, e) {
      this.ariaChecked = "boolean" != typeof e ? null : e ? "true" : "false";
    }
  }, {
    key: "contentChanged",
    value: function contentChanged(t, e) {
      this.proxy instanceof HTMLOptionElement && (this.proxy.textContent = this.textContent), this.$emit("contentchange", null, {
        bubbles: !0
      });
    }
  }, {
    key: "defaultSelectedChanged",
    value: function defaultSelectedChanged() {
      this.dirtySelected || (this.selected = this.defaultSelected, this.proxy instanceof HTMLOptionElement && (this.proxy.selected = this.defaultSelected));
    }
  }, {
    key: "disabledChanged",
    value: function disabledChanged(t, e) {
      this.ariaDisabled = this.disabled ? "true" : "false", this.proxy instanceof HTMLOptionElement && (this.proxy.disabled = this.disabled);
    }
  }, {
    key: "selectedAttributeChanged",
    value: function selectedAttributeChanged() {
      this.defaultSelected = this.selectedAttribute, this.proxy instanceof HTMLOptionElement && (this.proxy.defaultSelected = this.defaultSelected);
    }
  }, {
    key: "selectedChanged",
    value: function selectedChanged() {
      this.ariaSelected = this.selected ? "true" : "false", this.dirtySelected || (this.dirtySelected = !0), this.proxy instanceof HTMLOptionElement && (this.proxy.selected = this.selected);
    }
  }, {
    key: "initialValueChanged",
    value: function initialValueChanged(t, e) {
      this.dirtyValue || (this.value = this.initialValue, this.dirtyValue = !1);
    }
  }, {
    key: "label",
    get: function get() {
      var t;
      return null !== (t = this.value) && void 0 !== t ? t : this.text;
    }
  }, {
    key: "text",
    get: function get() {
      var t, e;
      return null !== (e = null === (t = this.textContent) || void 0 === t ? void 0 : t.replace(/\s+/g, " ").trim()) && void 0 !== e ? e : "";
    }
  }, {
    key: "value",
    get: function get() {
      var t;
      return g.track(this, "value"), null !== (t = this._value) && void 0 !== t ? t : this.text;
    },
    set: function set(t) {
      var e = "" + (null != t ? t : "");
      this._value = e, this.dirtyValue = !0, this.proxy instanceof HTMLOptionElement && (this.proxy.value = e), g.notify(this, "value");
    }
  }, {
    key: "form",
    get: function get() {
      return this.proxy ? this.proxy.form : null;
    }
  }]);
  return zi;
}(Se);
Gt([f], zi.prototype, "checked", void 0), Gt([f], zi.prototype, "content", void 0), Gt([f], zi.prototype, "defaultSelected", void 0), Gt([it({
  mode: "boolean"
})], zi.prototype, "disabled", void 0), Gt([it({
  attribute: "selected",
  mode: "boolean"
})], zi.prototype, "selectedAttribute", void 0), Gt([f], zi.prototype, "selected", void 0), Gt([it({
  attribute: "value",
  mode: "fromView"
})], zi.prototype, "initialValue", void 0);
var Hi = /*#__PURE__*/_createClass(function Hi() {
  _classCallCheck(this, Hi);
});
Gt([f], Hi.prototype, "ariaChecked", void 0), Gt([f], Hi.prototype, "ariaPosInSet", void 0), Gt([f], Hi.prototype, "ariaSelected", void 0), Gt([f], Hi.prototype, "ariaSetSize", void 0), Ve(Hi, Qe), Ve(zi, Nt, Hi);
var Mi = /*#__PURE__*/function (_Se16) {
  _inherits(Mi, _Se16);
  var _super38 = _createSuper(Mi);
  function Mi() {
    var _this48;
    _classCallCheck(this, Mi);
    _this48 = _super38.apply(this, arguments), _this48._options = [], _this48.selectedIndex = -1, _this48.selectedOptions = [], _this48.shouldSkipFocus = !1, _this48.typeaheadBuffer = "", _this48.typeaheadExpired = !0, _this48.typeaheadTimeout = -1;
    return _this48;
  }
  _createClass(Mi, [{
    key: "firstSelectedOption",
    get: function get() {
      var t;
      return null !== (t = this.selectedOptions[0]) && void 0 !== t ? t : null;
    }
  }, {
    key: "hasSelectableOptions",
    get: function get() {
      return this.options.length > 0 && !this.options.every(function (t) {
        return t.disabled;
      });
    }
  }, {
    key: "length",
    get: function get() {
      var t, e;
      return null !== (e = null === (t = this.options) || void 0 === t ? void 0 : t.length) && void 0 !== e ? e : 0;
    }
  }, {
    key: "options",
    get: function get() {
      return g.track(this, "options"), this._options;
    },
    set: function set(t) {
      this._options = t, g.notify(this, "options");
    }
  }, {
    key: "typeAheadExpired",
    get: function get() {
      return this.typeaheadExpired;
    },
    set: function set(t) {
      this.typeaheadExpired = t;
    }
  }, {
    key: "clickHandler",
    value: function clickHandler(t) {
      var e = t.target.closest("option,[role=option]");
      if (e && !e.disabled) return this.selectedIndex = this.options.indexOf(e), !0;
    }
  }, {
    key: "focusAndScrollOptionIntoView",
    value: function focusAndScrollOptionIntoView() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.firstSelectedOption;
      this.contains(document.activeElement) && null !== t && (t.focus(), requestAnimationFrame(function () {
        t.scrollIntoView({
          block: "nearest"
        });
      }));
    }
  }, {
    key: "focusinHandler",
    value: function focusinHandler(t) {
      this.shouldSkipFocus || t.target !== t.currentTarget || (this.setSelectedOptions(), this.focusAndScrollOptionIntoView()), this.shouldSkipFocus = !1;
    }
  }, {
    key: "getTypeaheadMatches",
    value: function getTypeaheadMatches() {
      var t = this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"),
        e = new RegExp("^" + t, "gi");
      return this.options.filter(function (t) {
        return t.text.trim().match(e);
      });
    }
  }, {
    key: "getSelectableIndex",
    value: function getSelectableIndex() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.selectedIndex;
      var e = arguments.length > 1 ? arguments[1] : undefined;
      var i = t > e ? -1 : t < e ? 1 : 0,
        o = t + i;
      var s = null;
      switch (i) {
        case -1:
          s = this.options.reduceRight(function (t, e, i) {
            return !t && !e.disabled && i < o ? e : t;
          }, s);
          break;
        case 1:
          s = this.options.reduce(function (t, e, i) {
            return !t && !e.disabled && i > o ? e : t;
          }, s);
      }
      return this.options.indexOf(s);
    }
  }, {
    key: "handleChange",
    value: function handleChange(t, e) {
      switch (e) {
        case "selected":
          Mi.slottedOptionFilter(t) && (this.selectedIndex = this.options.indexOf(t)), this.setSelectedOptions();
      }
    }
  }, {
    key: "handleTypeAhead",
    value: function handleTypeAhead(t) {
      var _this49 = this;
      this.typeaheadTimeout && window.clearTimeout(this.typeaheadTimeout), this.typeaheadTimeout = window.setTimeout(function () {
        return _this49.typeaheadExpired = !0;
      }, Mi.TYPE_AHEAD_TIMEOUT_MS), t.length > 1 || (this.typeaheadBuffer = "".concat(this.typeaheadExpired ? "" : this.typeaheadBuffer).concat(t));
    }
  }, {
    key: "keydownHandler",
    value: function keydownHandler(t) {
      if (this.disabled) return !0;
      this.shouldSkipFocus = !1;
      var e = t.key;
      switch (e) {
        case "Home":
          t.shiftKey || (t.preventDefault(), this.selectFirstOption());
          break;
        case "ArrowDown":
          t.shiftKey || (t.preventDefault(), this.selectNextOption());
          break;
        case "ArrowUp":
          t.shiftKey || (t.preventDefault(), this.selectPreviousOption());
          break;
        case "End":
          t.preventDefault(), this.selectLastOption();
          break;
        case "Tab":
          return this.focusAndScrollOptionIntoView(), !0;
        case "Enter":
        case "Escape":
          return !0;
        case " ":
          if (this.typeaheadExpired) return !0;
        default:
          return 1 === e.length && this.handleTypeAhead("" + e), !0;
      }
    }
  }, {
    key: "mousedownHandler",
    value: function mousedownHandler(t) {
      return this.shouldSkipFocus = !this.contains(document.activeElement), !0;
    }
  }, {
    key: "multipleChanged",
    value: function multipleChanged(t, e) {
      this.ariaMultiSelectable = e ? "true" : null;
    }
  }, {
    key: "selectedIndexChanged",
    value: function selectedIndexChanged(t, e) {
      var i;
      if (this.hasSelectableOptions) {
        if ((null === (i = this.options[this.selectedIndex]) || void 0 === i ? void 0 : i.disabled) && "number" == typeof t) {
          var _i45 = this.getSelectableIndex(t, e),
            _o33 = _i45 > -1 ? _i45 : t;
          return this.selectedIndex = _o33, void (e === _o33 && this.selectedIndexChanged(e, _o33));
        }
        this.setSelectedOptions();
      } else this.selectedIndex = -1;
    }
  }, {
    key: "selectedOptionsChanged",
    value: function selectedOptionsChanged(t, e) {
      var _this50 = this;
      var i;
      var o = e.filter(Mi.slottedOptionFilter);
      null === (i = this.options) || void 0 === i || i.forEach(function (t) {
        var e = g.getNotifier(t);
        e.unsubscribe(_this50, "selected"), t.selected = o.includes(t), e.subscribe(_this50, "selected");
      });
    }
  }, {
    key: "selectFirstOption",
    value: function selectFirstOption() {
      var t, e;
      this.disabled || (this.selectedIndex = null !== (e = null === (t = this.options) || void 0 === t ? void 0 : t.findIndex(function (t) {
        return !t.disabled;
      })) && void 0 !== e ? e : -1);
    }
  }, {
    key: "selectLastOption",
    value: function selectLastOption() {
      this.disabled || (this.selectedIndex = function (t, e) {
        var i = t.length;
        for (; i--;) {
          if (e(t[i], i, t)) return i;
        }
        return -1;
      }(this.options, function (t) {
        return !t.disabled;
      }));
    }
  }, {
    key: "selectNextOption",
    value: function selectNextOption() {
      !this.disabled && this.selectedIndex < this.options.length - 1 && (this.selectedIndex += 1);
    }
  }, {
    key: "selectPreviousOption",
    value: function selectPreviousOption() {
      !this.disabled && this.selectedIndex > 0 && (this.selectedIndex = this.selectedIndex - 1);
    }
  }, {
    key: "setDefaultSelectedOption",
    value: function setDefaultSelectedOption() {
      var t, e;
      this.selectedIndex = null !== (e = null === (t = this.options) || void 0 === t ? void 0 : t.findIndex(function (t) {
        return t.defaultSelected;
      })) && void 0 !== e ? e : -1;
    }
  }, {
    key: "setSelectedOptions",
    value: function setSelectedOptions() {
      var t, e, i;
      (null === (t = this.options) || void 0 === t ? void 0 : t.length) && (this.selectedOptions = [this.options[this.selectedIndex]], this.ariaActiveDescendant = null !== (i = null === (e = this.firstSelectedOption) || void 0 === e ? void 0 : e.id) && void 0 !== i ? i : "", this.focusAndScrollOptionIntoView());
    }
  }, {
    key: "slottedOptionsChanged",
    value: function slottedOptionsChanged(t, e) {
      this.options = e.reduce(function (t, e) {
        return Pi(e) && t.push(e), t;
      }, []);
      var i = "" + this.options.length;
      this.options.forEach(function (t, e) {
        t.id || (t.id = _e("option-")), t.ariaPosInSet = "" + (e + 1), t.ariaSetSize = i;
      }), this.$fastController.isConnected && (this.setSelectedOptions(), this.setDefaultSelectedOption());
    }
  }, {
    key: "typeaheadBufferChanged",
    value: function typeaheadBufferChanged(t, e) {
      if (this.$fastController.isConnected) {
        var _t52 = this.getTypeaheadMatches();
        if (_t52.length) {
          var _e60 = this.options.indexOf(_t52[0]);
          _e60 > -1 && (this.selectedIndex = _e60);
        }
        this.typeaheadExpired = !1;
      }
    }
  }]);
  return Mi;
}(Se);
Mi.slottedOptionFilter = function (t) {
  return Pi(t) && !t.hidden;
}, Mi.TYPE_AHEAD_TIMEOUT_MS = 1e3, Gt([it({
  mode: "boolean"
})], Mi.prototype, "disabled", void 0), Gt([f], Mi.prototype, "selectedIndex", void 0), Gt([f], Mi.prototype, "selectedOptions", void 0), Gt([f], Mi.prototype, "slottedOptions", void 0), Gt([f], Mi.prototype, "typeaheadBuffer", void 0);
var Bi = /*#__PURE__*/_createClass(function Bi() {
  _classCallCheck(this, Bi);
});
Gt([f], Bi.prototype, "ariaActiveDescendant", void 0), Gt([f], Bi.prototype, "ariaDisabled", void 0), Gt([f], Bi.prototype, "ariaExpanded", void 0), Gt([f], Bi.prototype, "ariaMultiSelectable", void 0), Ve(Bi, Qe), Ve(Mi, Bi);
var Ni = "above",
  ji = "below";
var Ui = /*#__PURE__*/function (_Mi) {
  _inherits(Ui, _Mi);
  var _super39 = _createSuper(Ui);
  function Ui() {
    _classCallCheck(this, Ui);
    return _super39.apply(this, arguments);
  }
  return _createClass(Ui);
}(Mi);
var qi = /*#__PURE__*/function (_ai3) {
  _inherits(qi, _ai3);
  var _super40 = _createSuper(qi);
  function qi() {
    var _this51;
    _classCallCheck(this, qi);
    _this51 = _super40.apply(this, arguments), _this51.proxy = document.createElement("input");
    return _this51;
  }
  return _createClass(qi);
}(ai(Ui));
var _i = "inline",
  Gi = "list",
  Wi = "both",
  Ki = "none";
var Xi = /*#__PURE__*/function (_qi) {
  _inherits(Xi, _qi);
  var _super41 = _createSuper(Xi);
  function Xi() {
    var _this52;
    _classCallCheck(this, Xi);
    _this52 = _super41.apply(this, arguments), _this52._value = "", _this52.filteredOptions = [], _this52.filter = "", _this52.forcedPosition = !1, _this52.listboxId = _e("listbox-"), _this52.maxHeight = 0, _this52.open = !1;
    return _this52;
  }
  _createClass(Xi, [{
    key: "formResetCallback",
    value: function formResetCallback() {
      _get(_getPrototypeOf(Xi.prototype), "formResetCallback", this).call(this), this.setDefaultSelectedOption(), this.updateValue();
    }
  }, {
    key: "validate",
    value: function validate() {
      _get(_getPrototypeOf(Xi.prototype), "validate", this).call(this, this.control);
    }
  }, {
    key: "isAutocompleteInline",
    get: function get() {
      return this.autocomplete === _i || this.isAutocompleteBoth;
    }
  }, {
    key: "isAutocompleteList",
    get: function get() {
      return this.autocomplete === Gi || this.isAutocompleteBoth;
    }
  }, {
    key: "isAutocompleteBoth",
    get: function get() {
      return this.autocomplete === Wi;
    }
  }, {
    key: "openChanged",
    value: function openChanged() {
      var _this53 = this;
      if (this.open) return this.ariaControls = this.listboxId, this.ariaExpanded = "true", this.setPositioning(), this.focusAndScrollOptionIntoView(), void d.queueUpdate(function () {
        return _this53.focus();
      });
      this.ariaControls = "", this.ariaExpanded = "false";
    }
  }, {
    key: "options",
    get: function get() {
      return g.track(this, "options"), this.filteredOptions.length ? this.filteredOptions : this._options;
    },
    set: function set(t) {
      this._options = t, g.notify(this, "options");
    }
  }, {
    key: "placeholderChanged",
    value: function placeholderChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.placeholder = this.placeholder);
    }
  }, {
    key: "positionChanged",
    value: function positionChanged(t, e) {
      this.positionAttribute = e, this.setPositioning();
    }
  }, {
    key: "value",
    get: function get() {
      return g.track(this, "value"), this._value;
    },
    set: function set(t) {
      var e, i, o;
      var s = "" + this._value;
      if (this.$fastController.isConnected && this.options) {
        var _s32 = this.options.findIndex(function (e) {
            return e.text.toLowerCase() === t.toLowerCase();
          }),
          _n25 = null === (e = this.options[this.selectedIndex]) || void 0 === e ? void 0 : e.text,
          _r14 = null === (i = this.options[_s32]) || void 0 === i ? void 0 : i.text;
        this.selectedIndex = _n25 !== _r14 ? _s32 : this.selectedIndex, t = (null === (o = this.firstSelectedOption) || void 0 === o ? void 0 : o.text) || t;
      }
      s !== t && (this._value = t, _get(_getPrototypeOf(Xi.prototype), "valueChanged", this).call(this, s, t), g.notify(this, "value"));
    }
  }, {
    key: "clickHandler",
    value: function clickHandler(t) {
      if (!this.disabled) {
        if (this.open) {
          var _e61 = t.target.closest("option,[role=option]");
          if (!_e61 || _e61.disabled) return;
          this.selectedOptions = [_e61], this.control.value = _e61.text, this.clearSelectionRange(), this.updateValue(!0);
        }
        return this.open = !this.open, this.open && this.control.focus(), !0;
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(Xi.prototype), "connectedCallback", this).call(this), this.forcedPosition = !!this.positionAttribute, this.value && (this.initialValue = this.value);
    }
  }, {
    key: "disabledChanged",
    value: function disabledChanged(t, e) {
      _get(_getPrototypeOf(Xi.prototype), "disabledChanged", this) && _get(_getPrototypeOf(Xi.prototype), "disabledChanged", this).call(this, t, e), this.ariaDisabled = this.disabled ? "true" : "false";
    }
  }, {
    key: "filterOptions",
    value: function filterOptions() {
      var _this54 = this;
      this.autocomplete && this.autocomplete !== Ki || (this.filter = "");
      var t = this.filter.toLowerCase();
      this.filteredOptions = this._options.filter(function (t) {
        return t.text.toLowerCase().startsWith(_this54.filter.toLowerCase());
      }), this.isAutocompleteList && (this.filteredOptions.length || t || (this.filteredOptions = this._options), this._options.forEach(function (t) {
        t.hidden = !_this54.filteredOptions.includes(t);
      }));
    }
  }, {
    key: "focusAndScrollOptionIntoView",
    value: function focusAndScrollOptionIntoView() {
      var _this55 = this;
      this.contains(document.activeElement) && (this.control.focus(), this.firstSelectedOption && requestAnimationFrame(function () {
        var t;
        null === (t = _this55.firstSelectedOption) || void 0 === t || t.scrollIntoView({
          block: "nearest"
        });
      }));
    }
  }, {
    key: "focusoutHandler",
    value: function focusoutHandler(t) {
      if (this.syncValue(), !this.open) return !0;
      var e = t.relatedTarget;
      this.isSameNode(e) ? this.focus() : this.options && this.options.includes(e) || (this.open = !1);
    }
  }, {
    key: "inputHandler",
    value: function inputHandler(t) {
      if (this.filter = this.control.value, this.filterOptions(), this.isAutocompleteInline || (this.selectedIndex = this.options.map(function (t) {
        return t.text;
      }).indexOf(this.control.value)), t.inputType.includes("deleteContent") || !this.filter.length) return !0;
      this.isAutocompleteList && !this.open && (this.open = !0), this.isAutocompleteInline && (this.filteredOptions.length ? (this.selectedOptions = [this.filteredOptions[0]], this.selectedIndex = this.options.indexOf(this.firstSelectedOption), this.setInlineSelection()) : this.selectedIndex = -1);
    }
  }, {
    key: "keydownHandler",
    value: function keydownHandler(t) {
      var e = t.key;
      if (t.ctrlKey || t.shiftKey) return !0;
      switch (e) {
        case "Enter":
          this.syncValue(), this.isAutocompleteInline && (this.filter = this.value), this.open = !1, this.clearSelectionRange();
          break;
        case "Escape":
          if (this.isAutocompleteInline || (this.selectedIndex = -1), this.open) {
            this.open = !1;
            break;
          }
          this.value = "", this.control.value = "", this.filter = "", this.filterOptions();
          break;
        case "Tab":
          if (this.setInputToSelection(), !this.open) return !0;
          t.preventDefault(), this.open = !1;
          break;
        case "ArrowUp":
        case "ArrowDown":
          if (this.filterOptions(), !this.open) {
            this.open = !0;
            break;
          }
          this.filteredOptions.length > 0 && _get(_getPrototypeOf(Xi.prototype), "keydownHandler", this).call(this, t), this.isAutocompleteInline && this.setInlineSelection();
          break;
        default:
          return !0;
      }
    }
  }, {
    key: "keyupHandler",
    value: function keyupHandler(t) {
      switch (t.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "Backspace":
        case "Delete":
        case "Home":
        case "End":
          this.filter = this.control.value, this.selectedIndex = -1, this.filterOptions();
      }
    }
  }, {
    key: "selectedIndexChanged",
    value: function selectedIndexChanged(t, e) {
      if (this.$fastController.isConnected) {
        if ((e = je(-1, this.options.length - 1, e)) !== this.selectedIndex) return void (this.selectedIndex = e);
        _get(_getPrototypeOf(Xi.prototype), "selectedIndexChanged", this).call(this, t, e);
      }
    }
  }, {
    key: "selectPreviousOption",
    value: function selectPreviousOption() {
      !this.disabled && this.selectedIndex >= 0 && (this.selectedIndex = this.selectedIndex - 1);
    }
  }, {
    key: "setDefaultSelectedOption",
    value: function setDefaultSelectedOption() {
      if (this.$fastController.isConnected && this.options) {
        var _t53 = this.options.findIndex(function (t) {
          return null !== t.getAttribute("selected") || t.selected;
        });
        this.selectedIndex = _t53, !this.dirtyValue && this.firstSelectedOption && (this.value = this.firstSelectedOption.text), this.setSelectedOptions();
      }
    }
  }, {
    key: "setInputToSelection",
    value: function setInputToSelection() {
      this.firstSelectedOption && (this.control.value = this.firstSelectedOption.text, this.control.focus());
    }
  }, {
    key: "setInlineSelection",
    value: function setInlineSelection() {
      this.firstSelectedOption && (this.setInputToSelection(), this.control.setSelectionRange(this.filter.length, this.control.value.length, "backward"));
    }
  }, {
    key: "syncValue",
    value: function syncValue() {
      var t;
      var e = this.selectedIndex > -1 ? null === (t = this.firstSelectedOption) || void 0 === t ? void 0 : t.text : this.control.value;
      this.updateValue(this.value !== e);
    }
  }, {
    key: "setPositioning",
    value: function setPositioning() {
      var t = this.getBoundingClientRect(),
        e = window.innerHeight - t.bottom;
      this.position = this.forcedPosition ? this.positionAttribute : t.top > e ? Ni : ji, this.positionAttribute = this.forcedPosition ? this.positionAttribute : this.position, this.maxHeight = this.position === Ni ? ~~t.top : ~~e;
    }
  }, {
    key: "selectedOptionsChanged",
    value: function selectedOptionsChanged(t, e) {
      this.$fastController.isConnected && this._options.forEach(function (t) {
        t.selected = e.includes(t);
      });
    }
  }, {
    key: "slottedOptionsChanged",
    value: function slottedOptionsChanged(t, e) {
      _get(_getPrototypeOf(Xi.prototype), "slottedOptionsChanged", this).call(this, t, e), this.updateValue();
    }
  }, {
    key: "updateValue",
    value: function updateValue(t) {
      var e;
      this.$fastController.isConnected && (this.value = (null === (e = this.firstSelectedOption) || void 0 === e ? void 0 : e.text) || this.control.value, this.control.value = this.value), t && this.$emit("change");
    }
  }, {
    key: "clearSelectionRange",
    value: function clearSelectionRange() {
      var t = this.control.value.length;
      this.control.setSelectionRange(t, t);
    }
  }]);
  return Xi;
}(qi);
Gt([it({
  attribute: "autocomplete",
  mode: "fromView"
})], Xi.prototype, "autocomplete", void 0), Gt([f], Xi.prototype, "maxHeight", void 0), Gt([it({
  attribute: "open",
  mode: "boolean"
})], Xi.prototype, "open", void 0), Gt([it], Xi.prototype, "placeholder", void 0), Gt([it({
  attribute: "position"
})], Xi.prototype, "positionAttribute", void 0), Gt([f], Xi.prototype, "position", void 0);
var Yi = /*#__PURE__*/_createClass(function Yi() {
  _classCallCheck(this, Yi);
});
Gt([f], Yi.prototype, "ariaAutoComplete", void 0), Gt([f], Yi.prototype, "ariaControls", void 0), Ve(Yi, Bi), Ve(Xi, Nt, Yi);
function Qi(t) {
  var e = t.parentElement;
  if (e) return e;
  {
    var _e62 = t.getRootNode();
    if (_e62.host instanceof HTMLElement) return _e62.host;
  }
  return null;
}
var Zi = document.createElement("div");
var Ji = /*#__PURE__*/function () {
  function Ji() {
    _classCallCheck(this, Ji);
  }
  _createClass(Ji, [{
    key: "setProperty",
    value: function setProperty(t, e) {
      var _this56 = this;
      d.queueUpdate(function () {
        return _this56.target.setProperty(t, e);
      });
    }
  }, {
    key: "removeProperty",
    value: function removeProperty(t) {
      var _this57 = this;
      d.queueUpdate(function () {
        return _this57.target.removeProperty(t);
      });
    }
  }]);
  return Ji;
}();
var to = /*#__PURE__*/function (_Ji) {
  _inherits(to, _Ji);
  var _super42 = _createSuper(to);
  function to() {
    var _this58;
    _classCallCheck(this, to);
    _this58 = _super42.call(this);
    var t = new CSSStyleSheet();
    _this58.target = t.cssRules[t.insertRule(":root{}")].style, document.adoptedStyleSheets = [].concat(_toConsumableArray(document.adoptedStyleSheets), [t]);
    return _this58;
  }
  return _createClass(to);
}(Ji);
var eo = /*#__PURE__*/function (_Ji2) {
  _inherits(eo, _Ji2);
  var _super43 = _createSuper(eo);
  function eo() {
    var _this59;
    _classCallCheck(this, eo);
    _this59 = _super43.call(this), _this59.style = document.createElement("style"), document.head.appendChild(_this59.style);
    var t = _this59.style.sheet;
    if (t) {
      var _e63 = t.insertRule(":root{}", t.cssRules.length);
      _this59.target = t.cssRules[_e63].style;
    }
    return _this59;
  }
  return _createClass(eo);
}(Ji);
var io = /*#__PURE__*/function () {
  function io(t) {
    _classCallCheck(this, io);
    this.store = new Map(), this.target = null;
    var e = t.$fastController;
    this.style = document.createElement("style"), e.addStyles(this.style), g.getNotifier(e).subscribe(this, "isConnected"), this.handleChange(e, "isConnected");
  }
  _createClass(io, [{
    key: "targetChanged",
    value: function targetChanged() {
      if (null !== this.target) {
        var _iterator3 = _createForOfIteratorHelper(this.store.entries()),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _step3$value = _slicedToArray(_step3.value, 2),
              _t54 = _step3$value[0],
              _e64 = _step3$value[1];
            this.target.setProperty(_t54, _e64);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }
  }, {
    key: "setProperty",
    value: function setProperty(t, e) {
      var _this60 = this;
      this.store.set(t, e), d.queueUpdate(function () {
        null !== _this60.target && _this60.target.setProperty(t, e);
      });
    }
  }, {
    key: "removeProperty",
    value: function removeProperty(t) {
      var _this61 = this;
      this.store.delete(t), d.queueUpdate(function () {
        null !== _this61.target && _this61.target.removeProperty(t);
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(t, e) {
      var i = this.style.sheet;
      if (i) {
        var _t55 = i.insertRule(":host{}", i.cssRules.length);
        this.target = i.cssRules[_t55].style;
      } else this.target = null;
    }
  }]);
  return io;
}();
Gt([f], io.prototype, "target", void 0);
var oo = /*#__PURE__*/function () {
  function oo(t) {
    _classCallCheck(this, oo);
    this.target = t.style;
  }
  _createClass(oo, [{
    key: "setProperty",
    value: function setProperty(t, e) {
      var _this62 = this;
      d.queueUpdate(function () {
        return _this62.target.setProperty(t, e);
      });
    }
  }, {
    key: "removeProperty",
    value: function removeProperty(t) {
      var _this63 = this;
      d.queueUpdate(function () {
        return _this63.target.removeProperty(t);
      });
    }
  }]);
  return oo;
}();
var so = /*#__PURE__*/function () {
  function so() {
    _classCallCheck(this, so);
  }
  _createClass(so, [{
    key: "setProperty",
    value: function setProperty(t, e) {
      so.properties[t] = e;
      var _iterator4 = _createForOfIteratorHelper(so.roots.values()),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _i46 = _step4.value;
          ao.getOrCreate(so.normalizeRoot(_i46)).setProperty(t, e);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "removeProperty",
    value: function removeProperty(t) {
      delete so.properties[t];
      var _iterator5 = _createForOfIteratorHelper(so.roots.values()),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _e65 = _step5.value;
          ao.getOrCreate(so.normalizeRoot(_e65)).removeProperty(t);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }], [{
    key: "registerRoot",
    value: function registerRoot(t) {
      var e = so.roots;
      if (!e.has(t)) {
        e.add(t);
        var _i47 = ao.getOrCreate(this.normalizeRoot(t));
        for (var _t56 in so.properties) {
          _i47.setProperty(_t56, so.properties[_t56]);
        }
      }
    }
  }, {
    key: "unregisterRoot",
    value: function unregisterRoot(t) {
      var e = so.roots;
      if (e.has(t)) {
        e.delete(t);
        var _i48 = ao.getOrCreate(so.normalizeRoot(t));
        for (var _t57 in so.properties) {
          _i48.removeProperty(_t57);
        }
      }
    }
  }, {
    key: "normalizeRoot",
    value: function normalizeRoot(t) {
      return t === Zi ? document : t;
    }
  }]);
  return so;
}();
so.roots = new Set(), so.properties = {};
var no = new WeakMap(),
  ro = d.supportsAdoptedStyleSheets ? /*#__PURE__*/function (_Ji3) {
    _inherits(_class4, _Ji3);
    var _super44 = _createSuper(_class4);
    function _class4(t) {
      var _this64;
      _classCallCheck(this, _class4);
      _this64 = _super44.call(this);
      var e = new CSSStyleSheet();
      _this64.target = e.cssRules[e.insertRule(":host{}")].style, t.$fastController.addStyles(G.create([e]));
      return _this64;
    }
    return _createClass(_class4);
  }(Ji) : io,
  ao = Object.freeze({
    getOrCreate: function getOrCreate(t) {
      if (no.has(t)) return no.get(t);
      var e;
      return t === Zi ? e = new so() : t instanceof Document ? e = d.supportsAdoptedStyleSheets ? new to() : new eo() : e = t instanceof ut ? new ro(t) : new oo(t), no.set(t, e), e;
    }
  });
var lo = /*#__PURE__*/function (_pt2) {
  _inherits(lo, _pt2);
  var _super45 = _createSuper(lo);
  function lo(t) {
    var _this65;
    _classCallCheck(this, lo);
    _this65 = _super45.call(this), _this65.subscribers = new WeakMap(), _this65._appliedTo = new Set(), _this65.name = t.name, null !== t.cssCustomPropertyName && (_this65.cssCustomProperty = "--" + t.cssCustomPropertyName, _this65.cssVar = "var(".concat(_this65.cssCustomProperty, ")")), _this65.id = lo.uniqueId(), lo.tokensById.set(_this65.id, _assertThisInitialized(_this65));
    return _this65;
  }
  _createClass(lo, [{
    key: "appliedTo",
    get: function get() {
      return _toConsumableArray(this._appliedTo);
    }
  }, {
    key: "getOrCreateSubscriberSet",
    value: function getOrCreateSubscriberSet() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
      return this.subscribers.get(t) || this.subscribers.set(t, new Set()) && this.subscribers.get(t);
    }
  }, {
    key: "createCSS",
    value: function createCSS() {
      return this.cssVar || "";
    }
  }, {
    key: "getValueFor",
    value: function getValueFor(t) {
      var e = go.getOrCreate(t).get(this);
      if (void 0 !== e) return e;
      throw new Error("Value could not be retrieved for token named \"".concat(this.name, "\". Ensure the value is set for ").concat(t, " or an ancestor of ").concat(t, "."));
    }
  }, {
    key: "setValueFor",
    value: function setValueFor(t, e) {
      return this._appliedTo.add(t), e instanceof lo && (e = this.alias(e)), go.getOrCreate(t).set(this, e), this;
    }
  }, {
    key: "deleteValueFor",
    value: function deleteValueFor(t) {
      return this._appliedTo.delete(t), go.existsFor(t) && go.getOrCreate(t).delete(this), this;
    }
  }, {
    key: "withDefault",
    value: function withDefault(t) {
      return this.setValueFor(Zi, t), this;
    }
  }, {
    key: "subscribe",
    value: function subscribe(t, e) {
      var i = this.getOrCreateSubscriberSet(e);
      e && !go.existsFor(e) && go.getOrCreate(e), i.has(t) || i.add(t);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(t, e) {
      var i = this.subscribers.get(e || this);
      i && i.has(t) && i.delete(t);
    }
  }, {
    key: "notify",
    value: function notify(t) {
      var e = Object.freeze({
        token: this,
        target: t
      });
      this.subscribers.has(this) && this.subscribers.get(this).forEach(function (t) {
        return t.handleChange(e);
      }), this.subscribers.has(t) && this.subscribers.get(t).forEach(function (t) {
        return t.handleChange(e);
      });
    }
  }, {
    key: "alias",
    value: function alias(t) {
      return function (e) {
        return t.getValueFor(e);
      };
    }
  }], [{
    key: "from",
    value: function from(t) {
      return new lo({
        name: "string" == typeof t ? t : t.name,
        cssCustomPropertyName: "string" == typeof t ? t : void 0 === t.cssCustomPropertyName ? t.name : t.cssCustomPropertyName
      });
    }
  }, {
    key: "isCSSDesignToken",
    value: function isCSSDesignToken(t) {
      return "string" == typeof t.cssCustomProperty;
    }
  }, {
    key: "isDerivedDesignTokenValue",
    value: function isDerivedDesignTokenValue(t) {
      return "function" == typeof t;
    }
  }, {
    key: "getTokenById",
    value: function getTokenById(t) {
      return lo.tokensById.get(t);
    }
  }]);
  return lo;
}(pt);
lo.uniqueId = function () {
  var t = 0;
  return function () {
    return t++, t.toString(16);
  };
}(), lo.tokensById = new Map();
var co = /*#__PURE__*/function () {
  function co(t, e, i) {
    _classCallCheck(this, co);
    this.source = t, this.token = e, this.node = i, this.dependencies = new Set(), this.observer = g.binding(t, this, !1), this.observer.handleChange = this.observer.call, this.handleChange();
  }
  _createClass(co, [{
    key: "disconnect",
    value: function disconnect() {
      this.observer.disconnect();
    }
  }, {
    key: "handleChange",
    value: function handleChange() {
      this.node.store.set(this.token, this.observer.observe(this.node.target, b));
    }
  }]);
  return co;
}();
var ho = /*#__PURE__*/function () {
  function ho() {
    _classCallCheck(this, ho);
    this.values = new Map();
  }
  _createClass(ho, [{
    key: "set",
    value: function set(t, e) {
      this.values.get(t) !== e && (this.values.set(t, e), g.getNotifier(this).notify(t.id));
    }
  }, {
    key: "get",
    value: function get(t) {
      return g.track(this, t.id), this.values.get(t);
    }
  }, {
    key: "delete",
    value: function _delete(t) {
      this.values.delete(t);
    }
  }, {
    key: "all",
    value: function all() {
      return this.values.entries();
    }
  }]);
  return ho;
}();
var uo = new WeakMap(),
  po = new WeakMap();
var go = /*#__PURE__*/function () {
  function go(t) {
    var _this66 = this;
    _classCallCheck(this, go);
    this.target = t, this.store = new ho(), this.children = [], this.assignedValues = new Map(), this.reflecting = new Set(), this.bindingObservers = new Map(), this.tokenValueChangeHandler = {
      handleChange: function handleChange(t, e) {
        var i = lo.getTokenById(e);
        if (i && (i.notify(_this66.target), lo.isCSSDesignToken(i))) {
          var _e66 = _this66.parent,
            _o34 = _this66.isReflecting(i);
          if (_e66) {
            var _s33 = _e66.get(i),
              _n26 = t.get(i);
            _s33 === _n26 || _o34 ? _s33 === _n26 && _o34 && _this66.stopReflectToCSS(i) : _this66.reflectToCSS(i);
          } else _o34 || _this66.reflectToCSS(i);
        }
      }
    }, uo.set(t, this), g.getNotifier(this.store).subscribe(this.tokenValueChangeHandler), t instanceof ut ? t.$fastController.addBehaviors([this]) : t.isConnected && this.bind();
  }
  _createClass(go, [{
    key: "parent",
    get: function get() {
      return po.get(this) || null;
    }
  }, {
    key: "has",
    value: function has(t) {
      return this.assignedValues.has(t);
    }
  }, {
    key: "get",
    value: function get(t) {
      var e = this.store.get(t);
      if (void 0 !== e) return e;
      var i = this.getRaw(t);
      return void 0 !== i ? (this.hydrate(t, i), this.get(t)) : void 0;
    }
  }, {
    key: "getRaw",
    value: function getRaw(t) {
      var e;
      return this.assignedValues.has(t) ? this.assignedValues.get(t) : null === (e = go.findClosestAssignedNode(t, this)) || void 0 === e ? void 0 : e.getRaw(t);
    }
  }, {
    key: "set",
    value: function set(t, e) {
      lo.isDerivedDesignTokenValue(this.assignedValues.get(t)) && this.tearDownBindingObserver(t), this.assignedValues.set(t, e), lo.isDerivedDesignTokenValue(e) ? this.setupBindingObserver(t, e) : this.store.set(t, e);
    }
  }, {
    key: "delete",
    value: function _delete(t) {
      this.assignedValues.delete(t), this.tearDownBindingObserver(t);
      var e = this.getRaw(t);
      e ? this.hydrate(t, e) : this.store.delete(t);
    }
  }, {
    key: "bind",
    value: function bind() {
      var t = go.findParent(this);
      t && t.appendChild(this);
      var _iterator6 = _createForOfIteratorHelper(this.assignedValues.keys()),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _t58 = _step6.value;
          _t58.notify(this.target);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  }, {
    key: "unbind",
    value: function unbind() {
      if (this.parent) {
        po.get(this).removeChild(this);
      }
    }
  }, {
    key: "appendChild",
    value: function appendChild(t) {
      t.parent && po.get(t).removeChild(t);
      var e = this.children.filter(function (e) {
        return t.contains(e);
      });
      po.set(t, this), this.children.push(t), e.forEach(function (e) {
        return t.appendChild(e);
      }), g.getNotifier(this.store).subscribe(t);
      var _iterator7 = _createForOfIteratorHelper(this.store.all()),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _step7$value = _slicedToArray(_step7.value, 2),
            _e67 = _step7$value[0],
            _i49 = _step7$value[1];
          t.hydrate(_e67, this.bindingObservers.has(_e67) ? this.getRaw(_e67) : _i49);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }, {
    key: "removeChild",
    value: function removeChild(t) {
      var e = this.children.indexOf(t);
      return -1 !== e && this.children.splice(e, 1), g.getNotifier(this.store).unsubscribe(t), t.parent === this && po.delete(t);
    }
  }, {
    key: "contains",
    value: function contains(t) {
      return function (t, e) {
        var i = e;
        for (; null !== i;) {
          if (i === t) return !0;
          i = Qi(i);
        }
        return !1;
      }(this.target, t.target);
    }
  }, {
    key: "reflectToCSS",
    value: function reflectToCSS(t) {
      this.isReflecting(t) || (this.reflecting.add(t), go.cssCustomPropertyReflector.startReflection(t, this.target));
    }
  }, {
    key: "stopReflectToCSS",
    value: function stopReflectToCSS(t) {
      this.isReflecting(t) && (this.reflecting.delete(t), go.cssCustomPropertyReflector.stopReflection(t, this.target));
    }
  }, {
    key: "isReflecting",
    value: function isReflecting(t) {
      return this.reflecting.has(t);
    }
  }, {
    key: "handleChange",
    value: function handleChange(t, e) {
      var i = lo.getTokenById(e);
      i && this.hydrate(i, this.getRaw(i));
    }
  }, {
    key: "hydrate",
    value: function hydrate(t, e) {
      if (!this.has(t)) {
        var _i50 = this.bindingObservers.get(t);
        lo.isDerivedDesignTokenValue(e) ? _i50 ? _i50.source !== e && (this.tearDownBindingObserver(t), this.setupBindingObserver(t, e)) : this.setupBindingObserver(t, e) : (_i50 && this.tearDownBindingObserver(t), this.store.set(t, e));
      }
    }
  }, {
    key: "setupBindingObserver",
    value: function setupBindingObserver(t, e) {
      var i = new co(e, t, this);
      return this.bindingObservers.set(t, i), i;
    }
  }, {
    key: "tearDownBindingObserver",
    value: function tearDownBindingObserver(t) {
      return !!this.bindingObservers.has(t) && (this.bindingObservers.get(t).disconnect(), this.bindingObservers.delete(t), !0);
    }
  }], [{
    key: "getOrCreate",
    value: function getOrCreate(t) {
      return uo.get(t) || new go(t);
    }
  }, {
    key: "existsFor",
    value: function existsFor(t) {
      return uo.has(t);
    }
  }, {
    key: "findParent",
    value: function findParent(t) {
      if (Zi !== t.target) {
        var _e68 = Qi(t.target);
        for (; null !== _e68;) {
          if (uo.has(_e68)) return uo.get(_e68);
          _e68 = Qi(_e68);
        }
        return go.getOrCreate(Zi);
      }
      return null;
    }
  }, {
    key: "findClosestAssignedNode",
    value: function findClosestAssignedNode(t, e) {
      var i = e;
      do {
        if (i.has(t)) return i;
        i = i.parent ? i.parent : i.target !== Zi ? go.getOrCreate(Zi) : null;
      } while (null !== i);
      return null;
    }
  }]);
  return go;
}();
go.cssCustomPropertyReflector = new ( /*#__PURE__*/function () {
  function _class5() {
    _classCallCheck(this, _class5);
  }
  _createClass(_class5, [{
    key: "startReflection",
    value: function startReflection(t, e) {
      t.subscribe(this, e), this.handleChange({
        token: t,
        target: e
      });
    }
  }, {
    key: "stopReflection",
    value: function stopReflection(t, e) {
      t.unsubscribe(this, e), this.remove(t, e);
    }
  }, {
    key: "handleChange",
    value: function handleChange(t) {
      var e = t.token,
        i = t.target;
      this.add(e, i);
    }
  }, {
    key: "add",
    value: function add(t, e) {
      ao.getOrCreate(e).setProperty(t.cssCustomProperty, this.resolveCSSValue(go.getOrCreate(e).get(t)));
    }
  }, {
    key: "remove",
    value: function remove(t, e) {
      ao.getOrCreate(e).removeProperty(t.cssCustomProperty);
    }
  }, {
    key: "resolveCSSValue",
    value: function resolveCSSValue(t) {
      return t && "function" == typeof t.createCSS ? t.createCSS() : t;
    }
  }]);
  return _class5;
}())(), Gt([f], go.prototype, "children", void 0);
var fo = Object.freeze({
    create: function create(t) {
      return lo.from(t);
    },
    notifyConnection: function notifyConnection(t) {
      return !(!t.isConnected || !go.existsFor(t)) && (go.getOrCreate(t).bind(), !0);
    },
    notifyDisconnection: function notifyDisconnection(t) {
      return !(t.isConnected || !go.existsFor(t)) && (go.getOrCreate(t).unbind(), !0);
    },
    registerRoot: function registerRoot() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Zi;
      so.registerRoot(t);
    },
    unregisterRoot: function unregisterRoot() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Zi;
      so.unregisterRoot(t);
    }
  }),
  mo = Object.freeze({
    definitionCallbackOnly: null,
    ignoreDuplicate: Symbol()
  }),
  vo = new Map(),
  bo = new Map();
var yo = null;
var xo = ee.createInterface(function (t) {
    return t.cachedCallback(function (t) {
      return null === yo && (yo = new wo(null, t)), yo;
    });
  }),
  $o = Object.freeze({
    tagFor: function tagFor(t) {
      return bo.get(t);
    },
    responsibleFor: function responsibleFor(t) {
      var e = t.$$designSystem$$;
      if (e) return e;
      return ee.findResponsibleContainer(t).get(xo);
    },
    getOrCreate: function getOrCreate(t) {
      if (!t) return null === yo && (yo = ee.getOrCreateDOMContainer().get(xo)), yo;
      var e = t.$$designSystem$$;
      if (e) return e;
      var i = ee.getOrCreateDOMContainer(t);
      if (i.has(xo, !1)) return i.get(xo);
      {
        var _e69 = new wo(t, i);
        return i.register(ve.instance(xo, _e69)), _e69;
      }
    }
  });
var wo = /*#__PURE__*/function () {
  function wo(t, e) {
    _classCallCheck(this, wo);
    this.owner = t, this.container = e, this.designTokensInitialized = !1, this.prefix = "fast", this.shadowRootMode = void 0, this.disambiguate = function () {
      return mo.definitionCallbackOnly;
    }, null !== t && (t.$$designSystem$$ = this);
  }
  _createClass(wo, [{
    key: "withPrefix",
    value: function withPrefix(t) {
      return this.prefix = t, this;
    }
  }, {
    key: "withShadowRootMode",
    value: function withShadowRootMode(t) {
      return this.shadowRootMode = t, this;
    }
  }, {
    key: "withElementDisambiguation",
    value: function withElementDisambiguation(t) {
      return this.disambiguate = t, this;
    }
  }, {
    key: "withDesignTokenRoot",
    value: function withDesignTokenRoot(t) {
      return this.designTokenRoot = t, this;
    }
  }, {
    key: "register",
    value: function register() {
      var e = this.container,
        i = [],
        o = this.disambiguate,
        s = this.shadowRootMode,
        n = {
          elementPrefix: this.prefix,
          tryDefineElement: function tryDefineElement(t, n, r) {
            var a = function (t, e, i) {
                return "string" == typeof t ? {
                  name: t,
                  type: e,
                  callback: i
                } : t;
              }(t, n, r),
              l = a.name,
              c = a.callback,
              h = a.baseClass;
            var _d6 = a.type,
              u = l,
              p = vo.get(u),
              g = !0;
            for (; p;) {
              var _t59 = o(u, _d6, p);
              switch (_t59) {
                case mo.ignoreDuplicate:
                  return;
                case mo.definitionCallbackOnly:
                  g = !1, p = void 0;
                  break;
                default:
                  u = _t59, p = vo.get(u);
              }
            }
            g && ((bo.has(_d6) || _d6 === Se) && (_d6 = /*#__PURE__*/function (_d7) {
              _inherits(d, _d7);
              var _super46 = _createSuper(d);
              function d() {
                _classCallCheck(this, d);
                return _super46.apply(this, arguments);
              }
              return _createClass(d);
            }(_d6)), vo.set(u, _d6), bo.set(_d6, u), h && bo.set(h, u)), i.push(new ko(e, u, _d6, s, c, g));
          }
        };
      for (var _len11 = arguments.length, t = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        t[_key11] = arguments[_key11];
      }
      this.designTokensInitialized || (this.designTokensInitialized = !0, null !== this.designTokenRoot && fo.registerRoot(this.designTokenRoot)), e.registerWithContext.apply(e, [n].concat(t));
      for (var _i52 = 0, _i51 = i; _i52 < _i51.length; _i52++) {
        var _t60 = _i51[_i52];
        _t60.callback(_t60), _t60.willDefine && null !== _t60.definition && _t60.definition.define();
      }
      return this;
    }
  }]);
  return wo;
}();
var ko = /*#__PURE__*/function () {
  function ko(t, e, i, o, s, n) {
    _classCallCheck(this, ko);
    this.container = t, this.name = e, this.type = i, this.shadowRootMode = o, this.callback = s, this.willDefine = n, this.definition = null;
  }
  _createClass(ko, [{
    key: "definePresentation",
    value: function definePresentation(t) {
      De.define(this.name, t, this.container);
    }
  }, {
    key: "defineElement",
    value: function defineElement(t) {
      this.definition = new rt(this.type, Object.assign(Object.assign({}, t), {
        name: this.name
      }));
    }
  }, {
    key: "tagFor",
    value: function tagFor(t) {
      return $o.tagFor(t);
    }
  }]);
  return ko;
}();
/*!
* tabbable 5.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Co = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"],
  Io = Co.join(","),
  Fo = "undefined" == typeof Element ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
  Do = function Do(t) {
    return "INPUT" === t.tagName;
  },
  To = function To(t) {
    return function (t) {
      return Do(t) && "radio" === t.type;
    }(t) && !function (t) {
      if (!t.name) return !0;
      var e,
        i = t.form || t.ownerDocument,
        o = function o(t) {
          return i.querySelectorAll('input[type="radio"][name="' + t + '"]');
        };
      if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) e = o(window.CSS.escape(t.name));else try {
        e = o(t.name);
      } catch (t) {
        return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", t.message), !1;
      }
      var s = function (t, e) {
        for (var i = 0; i < t.length; i++) {
          if (t[i].checked && t[i].form === e) return t[i];
        }
      }(e, t.form);
      return !s || s === t;
    }(t);
  },
  So = function So(t, e) {
    return !(e.disabled || function (t) {
      return Do(t) && "hidden" === t.type;
    }(e) || function (t, e) {
      if ("hidden" === getComputedStyle(t).visibility) return !0;
      var i = Fo.call(t, "details>summary:first-of-type") ? t.parentElement : t;
      if (Fo.call(i, "details:not([open]) *")) return !0;
      if (e && "full" !== e) {
        if ("non-zero-area" === e) {
          var o = t.getBoundingClientRect(),
            s = o.width,
            n = o.height;
          return 0 === s && 0 === n;
        }
      } else for (; t;) {
        if ("none" === getComputedStyle(t).display) return !0;
        t = t.parentElement;
      }
      return !1;
    }(e, t.displayCheck) || function (t) {
      return "DETAILS" === t.tagName && Array.prototype.slice.apply(t.children).some(function (t) {
        return "SUMMARY" === t.tagName;
      });
    }(e));
  },
  Oo = function Oo(t, e) {
    return !(!So(t, e) || To(e) || function (t) {
      var e = parseInt(t.getAttribute("tabindex"), 10);
      return isNaN(e) ? function (t) {
        return "true" === t.contentEditable;
      }(t) ? 0 : "AUDIO" !== t.nodeName && "VIDEO" !== t.nodeName && "DETAILS" !== t.nodeName || null !== t.getAttribute("tabindex") ? t.tabIndex : 0 : e;
    }(e) < 0);
  },
  Eo = function Eo(t, e) {
    if (e = e || {}, !t) throw new Error("No node provided");
    return !1 !== Fo.call(t, Io) && Oo(e, t);
  },
  Vo = Co.concat("iframe").join(","),
  Ro = function Ro(t, e) {
    if (e = e || {}, !t) throw new Error("No node provided");
    return !1 !== Fo.call(t, Vo) && So(e, t);
  };
var Ao = /*#__PURE__*/function (_Se17) {
  _inherits(Ao, _Se17);
  var _super47 = _createSuper(Ao);
  function Ao() {
    var _this67;
    _classCallCheck(this, Ao);
    _this67 = _super47.apply(this, arguments), _this67.modal = !0, _this67.hidden = !1, _this67.trapFocus = !0, _this67.trapFocusChanged = function () {
      _this67.$fastController.isConnected && _this67.updateTrapFocus();
    }, _this67.isTrappingFocus = !1, _this67.handleDocumentKeydown = function (t) {
      if (!t.defaultPrevented && !_this67.hidden) switch (t.key) {
        case "Escape":
          _this67.dismiss(), t.preventDefault();
          break;
        case "Tab":
          _this67.handleTabKeyDown(t);
      }
    }, _this67.handleDocumentFocus = function (t) {
      !t.defaultPrevented && _this67.shouldForceFocus(t.target) && (_this67.focusFirstElement(), t.preventDefault());
    }, _this67.handleTabKeyDown = function (t) {
      if (!_this67.trapFocus || _this67.hidden) return;
      var e = _this67.getTabQueueBounds();
      return 0 !== e.length ? 1 === e.length ? (e[0].focus(), void t.preventDefault()) : void (t.shiftKey && t.target === e[0] ? (e[e.length - 1].focus(), t.preventDefault()) : t.shiftKey || t.target !== e[e.length - 1] || (e[0].focus(), t.preventDefault())) : void 0;
    }, _this67.getTabQueueBounds = function () {
      return Ao.reduceTabbableItems([], _assertThisInitialized(_this67));
    }, _this67.focusFirstElement = function () {
      var t = _this67.getTabQueueBounds();
      t.length > 0 ? t[0].focus() : _this67.dialog instanceof HTMLElement && _this67.dialog.focus();
    }, _this67.shouldForceFocus = function (t) {
      return _this67.isTrappingFocus && !_this67.contains(t);
    }, _this67.shouldTrapFocus = function () {
      return _this67.trapFocus && !_this67.hidden;
    }, _this67.updateTrapFocus = function (t) {
      var e = void 0 === t ? _this67.shouldTrapFocus() : t;
      e && !_this67.isTrappingFocus ? (_this67.isTrappingFocus = !0, document.addEventListener("focusin", _this67.handleDocumentFocus), d.queueUpdate(function () {
        _this67.shouldForceFocus(document.activeElement) && _this67.focusFirstElement();
      })) : !e && _this67.isTrappingFocus && (_this67.isTrappingFocus = !1, document.removeEventListener("focusin", _this67.handleDocumentFocus));
    };
    return _this67;
  }
  _createClass(Ao, [{
    key: "dismiss",
    value: function dismiss() {
      this.$emit("dismiss"), this.$emit("cancel");
    }
  }, {
    key: "show",
    value: function show() {
      this.hidden = !1;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.hidden = !0, this.$emit("close");
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(Ao.prototype), "connectedCallback", this).call(this), document.addEventListener("keydown", this.handleDocumentKeydown), this.notifier = g.getNotifier(this), this.notifier.subscribe(this, "hidden"), this.updateTrapFocus();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(Ao.prototype), "disconnectedCallback", this).call(this), document.removeEventListener("keydown", this.handleDocumentKeydown), this.updateTrapFocus(!1), this.notifier.unsubscribe(this, "hidden");
    }
  }, {
    key: "handleChange",
    value: function handleChange(t, e) {
      switch (e) {
        case "hidden":
          this.updateTrapFocus();
      }
    }
  }], [{
    key: "reduceTabbableItems",
    value: function reduceTabbableItems(t, e) {
      return "-1" === e.getAttribute("tabindex") ? t : Eo(e) || Ao.isFocusableFastElement(e) && Ao.hasTabbableShadow(e) ? (t.push(e), t) : e.childElementCount ? t.concat(Array.from(e.children).reduce(Ao.reduceTabbableItems, [])) : t;
    }
  }, {
    key: "isFocusableFastElement",
    value: function isFocusableFastElement(t) {
      var e, i;
      return !!(null === (i = null === (e = t.$fastController) || void 0 === e ? void 0 : e.definition.shadowOptions) || void 0 === i ? void 0 : i.delegatesFocus);
    }
  }, {
    key: "hasTabbableShadow",
    value: function hasTabbableShadow(t) {
      var e, i;
      return Array.from(null !== (i = null === (e = t.shadowRoot) || void 0 === e ? void 0 : e.querySelectorAll("*")) && void 0 !== i ? i : []).some(function (t) {
        return Eo(t);
      });
    }
  }]);
  return Ao;
}(Se);
Gt([it({
  mode: "boolean"
})], Ao.prototype, "modal", void 0), Gt([it({
  mode: "boolean"
})], Ao.prototype, "hidden", void 0), Gt([it({
  attribute: "trap-focus",
  mode: "boolean"
})], Ao.prototype, "trapFocus", void 0), Gt([it({
  attribute: "aria-describedby"
})], Ao.prototype, "ariaDescribedby", void 0), Gt([it({
  attribute: "aria-labelledby"
})], Ao.prototype, "ariaLabelledby", void 0), Gt([it({
  attribute: "aria-label"
})], Ao.prototype, "ariaLabel", void 0);
var Lo = "separator";
var Po = /*#__PURE__*/function (_Se18) {
  _inherits(Po, _Se18);
  var _super48 = _createSuper(Po);
  function Po() {
    var _this68;
    _classCallCheck(this, Po);
    _this68 = _super48.apply(this, arguments), _this68.role = Lo, _this68.orientation = Ae;
    return _this68;
  }
  return _createClass(Po);
}(Se);
Gt([it], Po.prototype, "role", void 0), Gt([it], Po.prototype, "orientation", void 0);
var zo = "next",
  Ho = "previous";
var Mo = /*#__PURE__*/function (_Se19) {
  _inherits(Mo, _Se19);
  var _super49 = _createSuper(Mo);
  function Mo() {
    var _this69;
    _classCallCheck(this, Mo);
    _this69 = _super49.apply(this, arguments), _this69.hiddenFromAT = !0, _this69.direction = zo;
    return _this69;
  }
  _createClass(Mo, [{
    key: "keyupHandler",
    value: function keyupHandler(t) {
      if (!this.hiddenFromAT) {
        var _e70 = t.key;
        "Enter" !== _e70 && "Space" !== _e70 || this.$emit("click", t), "Escape" === _e70 && this.blur();
      }
    }
  }]);
  return Mo;
}(Se);
Gt([it({
  mode: "boolean"
})], Mo.prototype, "disabled", void 0), Gt([it({
  attribute: "aria-hidden",
  converter: J
})], Mo.prototype, "hiddenFromAT", void 0), Gt([it], Mo.prototype, "direction", void 0);
var Bo = /*#__PURE__*/function (_Mi2) {
  _inherits(Bo, _Mi2);
  var _super50 = _createSuper(Bo);
  function Bo() {
    var _this70;
    _classCallCheck(this, Bo);
    _this70 = _super50.apply(this, arguments), _this70.activeIndex = -1, _this70.rangeStartIndex = -1;
    return _this70;
  }
  _createClass(Bo, [{
    key: "activeOption",
    get: function get() {
      return this.options[this.activeIndex];
    }
  }, {
    key: "checkedOptions",
    get: function get() {
      var t;
      return null === (t = this.options) || void 0 === t ? void 0 : t.filter(function (t) {
        return t.checked;
      });
    }
  }, {
    key: "firstSelectedOptionIndex",
    get: function get() {
      return this.options.indexOf(this.firstSelectedOption);
    }
  }, {
    key: "activeIndexChanged",
    value: function activeIndexChanged(t, e) {
      var i, o;
      this.ariaActiveDescendant = null !== (o = null === (i = this.options[e]) || void 0 === i ? void 0 : i.id) && void 0 !== o ? o : "", this.focusAndScrollOptionIntoView();
    }
  }, {
    key: "checkActiveIndex",
    value: function checkActiveIndex() {
      if (!this.multiple) return;
      var t = this.activeOption;
      t && (t.checked = !0);
    }
  }, {
    key: "checkFirstOption",
    value: function checkFirstOption() {
      var _this71 = this;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      t ? (-1 === this.rangeStartIndex && (this.rangeStartIndex = this.activeIndex + 1), this.options.forEach(function (t, e) {
        t.checked = Ue(e, _this71.rangeStartIndex);
      })) : this.uncheckAllOptions(), this.activeIndex = 0, this.checkActiveIndex();
    }
  }, {
    key: "checkLastOption",
    value: function checkLastOption() {
      var _this72 = this;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      t ? (-1 === this.rangeStartIndex && (this.rangeStartIndex = this.activeIndex), this.options.forEach(function (t, e) {
        t.checked = Ue(e, _this72.rangeStartIndex, _this72.options.length);
      })) : this.uncheckAllOptions(), this.activeIndex = this.options.length - 1, this.checkActiveIndex();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(Bo.prototype), "connectedCallback", this).call(this), this.addEventListener("focusout", this.focusoutHandler);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.removeEventListener("focusout", this.focusoutHandler), _get(_getPrototypeOf(Bo.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    key: "checkNextOption",
    value: function checkNextOption() {
      var _this73 = this;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      t ? (-1 === this.rangeStartIndex && (this.rangeStartIndex = this.activeIndex), this.options.forEach(function (t, e) {
        t.checked = Ue(e, _this73.rangeStartIndex, _this73.activeIndex + 1);
      })) : this.uncheckAllOptions(), this.activeIndex += this.activeIndex < this.options.length - 1 ? 1 : 0, this.checkActiveIndex();
    }
  }, {
    key: "checkPreviousOption",
    value: function checkPreviousOption() {
      var _this74 = this;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      t ? (-1 === this.rangeStartIndex && (this.rangeStartIndex = this.activeIndex), 1 === this.checkedOptions.length && (this.rangeStartIndex += 1), this.options.forEach(function (t, e) {
        t.checked = Ue(e, _this74.activeIndex, _this74.rangeStartIndex);
      })) : this.uncheckAllOptions(), this.activeIndex -= this.activeIndex > 0 ? 1 : 0, this.checkActiveIndex();
    }
  }, {
    key: "clickHandler",
    value: function clickHandler(t) {
      var e;
      if (!this.multiple) return _get(_getPrototypeOf(Bo.prototype), "clickHandler", this).call(this, t);
      var i = null === (e = t.target) || void 0 === e ? void 0 : e.closest("[role=option]");
      return i && !i.disabled ? (this.uncheckAllOptions(), this.activeIndex = this.options.indexOf(i), this.checkActiveIndex(), this.toggleSelectedForAllCheckedOptions(), !0) : void 0;
    }
  }, {
    key: "focusAndScrollOptionIntoView",
    value: function focusAndScrollOptionIntoView() {
      _get(_getPrototypeOf(Bo.prototype), "focusAndScrollOptionIntoView", this).call(this, this.activeOption);
    }
  }, {
    key: "focusinHandler",
    value: function focusinHandler(t) {
      if (!this.multiple) return _get(_getPrototypeOf(Bo.prototype), "focusinHandler", this).call(this, t);
      this.shouldSkipFocus || t.target !== t.currentTarget || (this.uncheckAllOptions(), -1 === this.activeIndex && (this.activeIndex = -1 !== this.firstSelectedOptionIndex ? this.firstSelectedOptionIndex : 0), this.checkActiveIndex(), this.setSelectedOptions(), this.focusAndScrollOptionIntoView()), this.shouldSkipFocus = !1;
    }
  }, {
    key: "focusoutHandler",
    value: function focusoutHandler(t) {
      this.multiple && this.uncheckAllOptions();
    }
  }, {
    key: "keydownHandler",
    value: function keydownHandler(t) {
      if (!this.multiple) return _get(_getPrototypeOf(Bo.prototype), "keydownHandler", this).call(this, t);
      if (this.disabled) return !0;
      var e = t.key,
        i = t.shiftKey;
      switch (this.shouldSkipFocus = !1, e) {
        case "Home":
          return void this.checkFirstOption(i);
        case "ArrowDown":
          return void this.checkNextOption(i);
        case "ArrowUp":
          return void this.checkPreviousOption(i);
        case "End":
          return void this.checkLastOption(i);
        case "Tab":
          return this.focusAndScrollOptionIntoView(), !0;
        case "Escape":
          return this.uncheckAllOptions(), this.checkActiveIndex(), !0;
        case " ":
          if (t.preventDefault(), this.typeAheadExpired) return void this.toggleSelectedForAllCheckedOptions();
        default:
          return 1 === e.length && this.handleTypeAhead("" + e), !0;
      }
    }
  }, {
    key: "mousedownHandler",
    value: function mousedownHandler(t) {
      if (t.offsetX >= 0 && t.offsetX <= this.scrollWidth) return _get(_getPrototypeOf(Bo.prototype), "mousedownHandler", this).call(this, t);
    }
  }, {
    key: "multipleChanged",
    value: function multipleChanged(t, e) {
      var i;
      this.ariaMultiSelectable = e ? "true" : null, null === (i = this.options) || void 0 === i || i.forEach(function (t) {
        t.checked = !e && void 0;
      }), this.setSelectedOptions();
    }
  }, {
    key: "setSelectedOptions",
    value: function setSelectedOptions() {
      this.multiple ? this.$fastController.isConnected && this.options && (this.selectedOptions = this.options.filter(function (t) {
        return t.selected;
      }), this.focusAndScrollOptionIntoView()) : _get(_getPrototypeOf(Bo.prototype), "setSelectedOptions", this).call(this);
    }
  }, {
    key: "sizeChanged",
    value: function sizeChanged(t, e) {
      var _this75 = this;
      var i;
      var o = Math.max(0, parseInt(null !== (i = null == e ? void 0 : e.toFixed()) && void 0 !== i ? i : "", 10));
      o !== e && d.queueUpdate(function () {
        _this75.size = o;
      });
    }
  }, {
    key: "toggleSelectedForAllCheckedOptions",
    value: function toggleSelectedForAllCheckedOptions() {
      var t = this.checkedOptions.filter(function (t) {
          return !t.disabled;
        }),
        e = !t.every(function (t) {
          return t.selected;
        });
      t.forEach(function (t) {
        return t.selected = e;
      }), this.selectedIndex = this.options.indexOf(t[t.length - 1]), this.setSelectedOptions();
    }
  }, {
    key: "typeaheadBufferChanged",
    value: function typeaheadBufferChanged(t, e) {
      if (this.multiple) {
        if (this.$fastController.isConnected) {
          var _t61 = this.getTypeaheadMatches(),
            _e71 = this.options.indexOf(_t61[0]);
          _e71 > -1 && (this.activeIndex = _e71, this.uncheckAllOptions(), this.checkActiveIndex()), this.typeAheadExpired = !1;
        }
      } else _get(_getPrototypeOf(Bo.prototype), "typeaheadBufferChanged", this).call(this, t, e);
    }
  }, {
    key: "uncheckAllOptions",
    value: function uncheckAllOptions() {
      var _this76 = this;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      this.options.forEach(function (t) {
        return t.checked = !_this76.multiple && void 0;
      }), t || (this.rangeStartIndex = -1);
    }
  }]);
  return Bo;
}(Mi);
Gt([f], Bo.prototype, "activeIndex", void 0), Gt([it({
  mode: "boolean"
})], Bo.prototype, "multiple", void 0), Gt([it({
  converter: tt
})], Bo.prototype, "size", void 0);
var No = "menuitem",
  jo = "menuitemcheckbox",
  Uo = "menuitemradio",
  qo = (_qo = {}, _defineProperty(_qo, No, "menuitem"), _defineProperty(_qo, jo, "menuitemcheckbox"), _defineProperty(_qo, Uo, "menuitemradio"), _qo);
var _o = /*#__PURE__*/function (_Se20) {
  _inherits(_o, _Se20);
  var _super51 = _createSuper(_o);
  function _o() {
    var _this77;
    _classCallCheck(this, _o);
    _this77 = _super51.apply(this, arguments), _this77.role = No, _this77.hasSubmenu = !1, _this77.currentDirection = Be.ltr, _this77.focusSubmenuOnLoad = !1, _this77.handleMenuItemKeyDown = function (t) {
      if (t.defaultPrevented) return !1;
      switch (t.key) {
        case "Enter":
        case " ":
          return _this77.invoke(), !1;
        case "ArrowRight":
          return _this77.expandAndFocus(), !1;
        case "ArrowLeft":
          if (_this77.expanded) return _this77.expanded = !1, _this77.focus(), !1;
      }
      return !0;
    }, _this77.handleMenuItemClick = function (t) {
      return t.defaultPrevented || _this77.disabled || _this77.invoke(), !1;
    }, _this77.submenuLoaded = function () {
      _this77.focusSubmenuOnLoad && (_this77.focusSubmenuOnLoad = !1, _this77.hasSubmenu && (_this77.submenu.focus(), _this77.setAttribute("tabindex", "-1")));
    }, _this77.handleMouseOver = function (t) {
      return _this77.disabled || !_this77.hasSubmenu || _this77.expanded || (_this77.expanded = !0), !1;
    }, _this77.handleMouseOut = function (t) {
      return !_this77.expanded || _this77.contains(document.activeElement) || (_this77.expanded = !1), !1;
    }, _this77.expandAndFocus = function () {
      _this77.hasSubmenu && (_this77.focusSubmenuOnLoad = !0, _this77.expanded = !0);
    }, _this77.invoke = function () {
      if (!_this77.disabled) switch (_this77.role) {
        case jo:
          _this77.checked = !_this77.checked;
          break;
        case No:
          _this77.updateSubmenu(), _this77.hasSubmenu ? _this77.expandAndFocus() : _this77.$emit("change");
          break;
        case Uo:
          _this77.checked || (_this77.checked = !0);
      }
    }, _this77.updateSubmenu = function () {
      _this77.submenu = _this77.domChildren().find(function (t) {
        return "menu" === t.getAttribute("role");
      }), _this77.hasSubmenu = void 0 !== _this77.submenu;
    };
    return _this77;
  }
  _createClass(_o, [{
    key: "expandedChanged",
    value: function expandedChanged(t) {
      if (this.$fastController.isConnected) {
        if (void 0 === this.submenu) return;
        !1 === this.expanded ? this.submenu.collapseExpandedItem() : this.currentDirection = ti(this), this.$emit("expanded-change", this, {
          bubbles: !1
        });
      }
    }
  }, {
    key: "checkedChanged",
    value: function checkedChanged(t, e) {
      this.$fastController.isConnected && this.$emit("change");
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this78 = this;
      _get(_getPrototypeOf(_o.prototype), "connectedCallback", this).call(this), d.queueUpdate(function () {
        _this78.updateSubmenu();
      }), this.startColumnCount || (this.startColumnCount = 1), this.observer = new MutationObserver(this.updateSubmenu);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(_o.prototype), "disconnectedCallback", this).call(this), this.submenu = void 0, void 0 !== this.observer && (this.observer.disconnect(), this.observer = void 0);
    }
  }, {
    key: "domChildren",
    value: function domChildren() {
      return Array.from(this.children).filter(function (t) {
        return !t.hasAttribute("hidden");
      });
    }
  }]);
  return _o;
}(Se);
Gt([it({
  mode: "boolean"
})], _o.prototype, "disabled", void 0), Gt([it({
  mode: "boolean"
})], _o.prototype, "expanded", void 0), Gt([f], _o.prototype, "startColumnCount", void 0), Gt([it], _o.prototype, "role", void 0), Gt([it({
  mode: "boolean"
})], _o.prototype, "checked", void 0), Gt([f], _o.prototype, "submenuRegion", void 0), Gt([f], _o.prototype, "hasSubmenu", void 0), Gt([f], _o.prototype, "currentDirection", void 0), Gt([f], _o.prototype, "submenu", void 0), Ve(_o, Nt);
var Go = /*#__PURE__*/function (_Se21) {
  _inherits(Go, _Se21);
  var _super52 = _createSuper(Go);
  function Go() {
    var _this79;
    _classCallCheck(this, Go);
    _this79 = _super52.apply(this, arguments), _this79.expandedItem = null, _this79.focusIndex = -1, _this79.isNestedMenu = function () {
      return null !== _this79.parentElement && Pe(_this79.parentElement) && "menuitem" === _this79.parentElement.getAttribute("role");
    }, _this79.handleFocusOut = function (t) {
      if (!_this79.contains(t.relatedTarget) && void 0 !== _this79.menuItems) {
        _this79.collapseExpandedItem();
        var _t62 = _this79.menuItems.findIndex(_this79.isFocusableElement);
        _this79.menuItems[_this79.focusIndex].setAttribute("tabindex", "-1"), _this79.menuItems[_t62].setAttribute("tabindex", "0"), _this79.focusIndex = _t62;
      }
    }, _this79.handleItemFocus = function (t) {
      var e = t.target;
      void 0 !== _this79.menuItems && e !== _this79.menuItems[_this79.focusIndex] && (_this79.menuItems[_this79.focusIndex].setAttribute("tabindex", "-1"), _this79.focusIndex = _this79.menuItems.indexOf(e), e.setAttribute("tabindex", "0"));
    }, _this79.handleExpandedChanged = function (t) {
      if (t.defaultPrevented || null === t.target || void 0 === _this79.menuItems || _this79.menuItems.indexOf(t.target) < 0) return;
      t.preventDefault();
      var e = t.target;
      null === _this79.expandedItem || e !== _this79.expandedItem || !1 !== e.expanded ? e.expanded && (null !== _this79.expandedItem && _this79.expandedItem !== e && (_this79.expandedItem.expanded = !1), _this79.menuItems[_this79.focusIndex].setAttribute("tabindex", "-1"), _this79.expandedItem = e, _this79.focusIndex = _this79.menuItems.indexOf(e), e.setAttribute("tabindex", "0")) : _this79.expandedItem = null;
    }, _this79.removeItemListeners = function () {
      void 0 !== _this79.menuItems && _this79.menuItems.forEach(function (t) {
        t.removeEventListener("expanded-change", _this79.handleExpandedChanged), t.removeEventListener("focus", _this79.handleItemFocus);
      });
    }, _this79.setItems = function () {
      var t = _this79.domChildren();
      _this79.removeItemListeners(), _this79.menuItems = t;
      var e = _this79.menuItems.filter(_this79.isMenuItemElement);
      e.length && (_this79.focusIndex = 0);
      var i = e.reduce(function (t, e) {
        var i = function (t) {
          var e = t.getAttribute("role"),
            i = t.querySelector("[slot=start]");
          return e !== No && null === i || e === No && null !== i ? 1 : e !== No && null !== i ? 2 : 0;
        }(e);
        return t > i ? t : i;
      }, 0);
      e.forEach(function (t, e) {
        t.setAttribute("tabindex", 0 === e ? "0" : "-1"), t.addEventListener("expanded-change", _this79.handleExpandedChanged), t.addEventListener("focus", _this79.handleItemFocus), t instanceof _o && (t.startColumnCount = i);
      });
    }, _this79.changeHandler = function (t) {
      if (void 0 === _this79.menuItems) return;
      var e = t.target,
        i = _this79.menuItems.indexOf(e);
      if (-1 !== i && "menuitemradio" === e.role && !0 === e.checked) {
        for (var _t64 = i - 1; _t64 >= 0; --_t64) {
          var _e72 = _this79.menuItems[_t64],
            _i53 = _e72.getAttribute("role");
          if (_i53 === Uo && (_e72.checked = !1), "separator" === _i53) break;
        }
        var _t63 = _this79.menuItems.length - 1;
        for (var _e73 = i + 1; _e73 <= _t63; ++_e73) {
          var _t65 = _this79.menuItems[_e73],
            _i54 = _t65.getAttribute("role");
          if (_i54 === Uo && (_t65.checked = !1), "separator" === _i54) break;
        }
      }
    }, _this79.isMenuItemElement = function (t) {
      return Pe(t) && Go.focusableElementRoles.hasOwnProperty(t.getAttribute("role"));
    }, _this79.isFocusableElement = function (t) {
      return _this79.isMenuItemElement(t);
    };
    return _this79;
  }
  _createClass(Go, [{
    key: "itemsChanged",
    value: function itemsChanged(t, e) {
      this.$fastController.isConnected && void 0 !== this.menuItems && this.setItems();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this80 = this;
      _get(_getPrototypeOf(Go.prototype), "connectedCallback", this).call(this), d.queueUpdate(function () {
        _this80.setItems();
      }), this.addEventListener("change", this.changeHandler);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(Go.prototype), "disconnectedCallback", this).call(this), this.removeItemListeners(), this.menuItems = void 0, this.removeEventListener("change", this.changeHandler);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.setFocus(0, 1);
    }
  }, {
    key: "collapseExpandedItem",
    value: function collapseExpandedItem() {
      null !== this.expandedItem && (this.expandedItem.expanded = !1, this.expandedItem = null);
    }
  }, {
    key: "handleMenuKeyDown",
    value: function handleMenuKeyDown(t) {
      if (!t.defaultPrevented && void 0 !== this.menuItems) switch (t.key) {
        case "ArrowDown":
          return void this.setFocus(this.focusIndex + 1, 1);
        case "ArrowUp":
          return void this.setFocus(this.focusIndex - 1, -1);
        case "End":
          return void this.setFocus(this.menuItems.length - 1, -1);
        case "Home":
          return void this.setFocus(0, 1);
        default:
          return !0;
      }
    }
  }, {
    key: "domChildren",
    value: function domChildren() {
      return Array.from(this.children).filter(function (t) {
        return !t.hasAttribute("hidden");
      });
    }
  }, {
    key: "setFocus",
    value: function setFocus(t, e) {
      if (void 0 !== this.menuItems) for (; t >= 0 && t < this.menuItems.length;) {
        var _i55 = this.menuItems[t];
        if (this.isFocusableElement(_i55)) {
          this.focusIndex > -1 && this.menuItems.length >= this.focusIndex - 1 && this.menuItems[this.focusIndex].setAttribute("tabindex", "-1"), this.focusIndex = t, _i55.setAttribute("tabindex", "0"), _i55.focus();
          break;
        }
        t += e;
      }
    }
  }]);
  return Go;
}(Se);
Go.focusableElementRoles = qo, Gt([f], Go.prototype, "items", void 0);
var Wo = /*#__PURE__*/function (_Se22) {
  _inherits(Wo, _Se22);
  var _super53 = _createSuper(Wo);
  function Wo() {
    _classCallCheck(this, Wo);
    return _super53.apply(this, arguments);
  }
  return _createClass(Wo);
}(Se);
var Ko = /*#__PURE__*/function (_ai4) {
  _inherits(Ko, _ai4);
  var _super54 = _createSuper(Ko);
  function Ko() {
    var _this81;
    _classCallCheck(this, Ko);
    _this81 = _super54.apply(this, arguments), _this81.proxy = document.createElement("input");
    return _this81;
  }
  return _createClass(Ko);
}(ai(Wo));
var Xo = "text";
var Yo = /*#__PURE__*/function (_Ko) {
  _inherits(Yo, _Ko);
  var _super55 = _createSuper(Yo);
  function Yo() {
    var _this82;
    _classCallCheck(this, Yo);
    _this82 = _super55.apply(this, arguments), _this82.type = Xo;
    return _this82;
  }
  _createClass(Yo, [{
    key: "readOnlyChanged",
    value: function readOnlyChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.readOnly = this.readOnly, this.validate());
    }
  }, {
    key: "autofocusChanged",
    value: function autofocusChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.autofocus = this.autofocus, this.validate());
    }
  }, {
    key: "placeholderChanged",
    value: function placeholderChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.placeholder = this.placeholder);
    }
  }, {
    key: "typeChanged",
    value: function typeChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.type = this.type, this.validate());
    }
  }, {
    key: "listChanged",
    value: function listChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.setAttribute("list", this.list), this.validate());
    }
  }, {
    key: "maxlengthChanged",
    value: function maxlengthChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.maxLength = this.maxlength, this.validate());
    }
  }, {
    key: "minlengthChanged",
    value: function minlengthChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.minLength = this.minlength, this.validate());
    }
  }, {
    key: "patternChanged",
    value: function patternChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.pattern = this.pattern, this.validate());
    }
  }, {
    key: "sizeChanged",
    value: function sizeChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.size = this.size);
    }
  }, {
    key: "spellcheckChanged",
    value: function spellcheckChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.spellcheck = this.spellcheck);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this83 = this;
      _get(_getPrototypeOf(Yo.prototype), "connectedCallback", this).call(this), this.proxy.setAttribute("type", this.type), this.validate(), this.autofocus && d.queueUpdate(function () {
        _this83.focus();
      });
    }
  }, {
    key: "select",
    value: function select() {
      this.control.select(), this.$emit("select");
    }
  }, {
    key: "handleTextInput",
    value: function handleTextInput() {
      this.value = this.control.value;
    }
  }, {
    key: "handleChange",
    value: function handleChange() {
      this.$emit("change");
    }
  }, {
    key: "validate",
    value: function validate() {
      _get(_getPrototypeOf(Yo.prototype), "validate", this).call(this, this.control);
    }
  }]);
  return Yo;
}(Ko);
Gt([it({
  attribute: "readonly",
  mode: "boolean"
})], Yo.prototype, "readOnly", void 0), Gt([it({
  mode: "boolean"
})], Yo.prototype, "autofocus", void 0), Gt([it], Yo.prototype, "placeholder", void 0), Gt([it], Yo.prototype, "type", void 0), Gt([it], Yo.prototype, "list", void 0), Gt([it({
  converter: tt
})], Yo.prototype, "maxlength", void 0), Gt([it({
  converter: tt
})], Yo.prototype, "minlength", void 0), Gt([it], Yo.prototype, "pattern", void 0), Gt([it({
  converter: tt
})], Yo.prototype, "size", void 0), Gt([it({
  mode: "boolean"
})], Yo.prototype, "spellcheck", void 0), Gt([f], Yo.prototype, "defaultSlottedNodes", void 0);
var Qo = /*#__PURE__*/_createClass(function Qo() {
  _classCallCheck(this, Qo);
});
Ve(Qo, Qe), Ve(Yo, Nt, Qo);
var Zo = /*#__PURE__*/function (_Se23) {
  _inherits(Zo, _Se23);
  var _super56 = _createSuper(Zo);
  function Zo() {
    _classCallCheck(this, Zo);
    return _super56.apply(this, arguments);
  }
  return _createClass(Zo);
}(Se);
var Jo = /*#__PURE__*/function (_ai5) {
  _inherits(Jo, _ai5);
  var _super57 = _createSuper(Jo);
  function Jo() {
    var _this84;
    _classCallCheck(this, Jo);
    _this84 = _super57.apply(this, arguments), _this84.proxy = document.createElement("input");
    return _this84;
  }
  return _createClass(Jo);
}(ai(Zo));
var ts = /*#__PURE__*/function (_Jo) {
  _inherits(ts, _Jo);
  var _super58 = _createSuper(ts);
  function ts() {
    var _this85;
    _classCallCheck(this, ts);
    _this85 = _super58.apply(this, arguments), _this85.hideStep = !1, _this85.step = 1, _this85.isUserInput = !1;
    return _this85;
  }
  _createClass(ts, [{
    key: "maxChanged",
    value: function maxChanged(t, e) {
      var i;
      this.max = Math.max(e, null !== (i = this.min) && void 0 !== i ? i : e);
      var o = Math.min(this.min, this.max);
      void 0 !== this.min && this.min !== o && (this.min = o), this.value = this.getValidValue(this.value);
    }
  }, {
    key: "minChanged",
    value: function minChanged(t, e) {
      var i;
      this.min = Math.min(e, null !== (i = this.max) && void 0 !== i ? i : e);
      var o = Math.max(this.min, this.max);
      void 0 !== this.max && this.max !== o && (this.max = o), this.value = this.getValidValue(this.value);
    }
  }, {
    key: "valueAsNumber",
    get: function get() {
      return parseFloat(_get(_getPrototypeOf(ts.prototype), "value", this));
    },
    set: function set(t) {
      this.value = t.toString();
    }
  }, {
    key: "valueChanged",
    value: function valueChanged(t, e) {
      this.value = this.getValidValue(e), e === this.value && (this.control && !this.isUserInput && (this.control.value = this.value), _get(_getPrototypeOf(ts.prototype), "valueChanged", this).call(this, t, this.value), void 0 === t || this.isUserInput || (this.$emit("input"), this.$emit("change")), this.isUserInput = !1);
    }
  }, {
    key: "validate",
    value: function validate() {
      _get(_getPrototypeOf(ts.prototype), "validate", this).call(this, this.control);
    }
  }, {
    key: "getValidValue",
    value: function getValidValue(t) {
      var e, i;
      var o = parseFloat(parseFloat(t).toPrecision(12));
      return isNaN(o) ? o = "" : (o = Math.min(o, null !== (e = this.max) && void 0 !== e ? e : o), o = Math.max(o, null !== (i = this.min) && void 0 !== i ? i : o).toString()), o;
    }
  }, {
    key: "stepUp",
    value: function stepUp() {
      var t = parseFloat(this.value),
        e = isNaN(t) ? this.min > 0 ? this.min : this.max < 0 ? this.max : this.min ? 0 : this.step : t + this.step;
      this.value = e.toString();
    }
  }, {
    key: "stepDown",
    value: function stepDown() {
      var t = parseFloat(this.value),
        e = isNaN(t) ? this.min > 0 ? this.min : this.max < 0 ? this.max : this.min ? 0 : 0 - this.step : t - this.step;
      this.value = e.toString();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this86 = this;
      _get(_getPrototypeOf(ts.prototype), "connectedCallback", this).call(this), this.proxy.setAttribute("type", "number"), this.validate(), this.control.value = this.value, this.autofocus && d.queueUpdate(function () {
        _this86.focus();
      });
    }
  }, {
    key: "select",
    value: function select() {
      this.control.select(), this.$emit("select");
    }
  }, {
    key: "handleTextInput",
    value: function handleTextInput() {
      this.control.value = this.control.value.replace(/[^0-9\-+e.]/g, ""), this.isUserInput = !0, this.value = this.control.value;
    }
  }, {
    key: "handleChange",
    value: function handleChange() {
      this.$emit("change");
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(t) {
      switch (t.key) {
        case "ArrowUp":
          return this.stepUp(), !1;
        case "ArrowDown":
          return this.stepDown(), !1;
      }
      return !0;
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      this.control.value = this.value;
    }
  }]);
  return ts;
}(Jo);
Gt([it({
  attribute: "readonly",
  mode: "boolean"
})], ts.prototype, "readOnly", void 0), Gt([it({
  mode: "boolean"
})], ts.prototype, "autofocus", void 0), Gt([it({
  attribute: "hide-step",
  mode: "boolean"
})], ts.prototype, "hideStep", void 0), Gt([it], ts.prototype, "placeholder", void 0), Gt([it], ts.prototype, "list", void 0), Gt([it({
  converter: tt
})], ts.prototype, "maxlength", void 0), Gt([it({
  converter: tt
})], ts.prototype, "minlength", void 0), Gt([it({
  converter: tt
})], ts.prototype, "size", void 0), Gt([it({
  converter: tt
})], ts.prototype, "step", void 0), Gt([it({
  converter: tt
})], ts.prototype, "max", void 0), Gt([it({
  converter: tt
})], ts.prototype, "min", void 0), Gt([f], ts.prototype, "defaultSlottedNodes", void 0), Ve(ts, Nt, Qo);
var es = /*#__PURE__*/function (_Se24) {
  _inherits(es, _Se24);
  var _super59 = _createSuper(es);
  function es() {
    var _this87;
    _classCallCheck(this, es);
    _this87 = _super59.apply(this, arguments), _this87.percentComplete = 0;
    return _this87;
  }
  _createClass(es, [{
    key: "valueChanged",
    value: function valueChanged() {
      this.$fastController.isConnected && this.updatePercentComplete();
    }
  }, {
    key: "minChanged",
    value: function minChanged() {
      this.$fastController.isConnected && this.updatePercentComplete();
    }
  }, {
    key: "maxChanged",
    value: function maxChanged() {
      this.$fastController.isConnected && this.updatePercentComplete();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(es.prototype), "connectedCallback", this).call(this), this.updatePercentComplete();
    }
  }, {
    key: "updatePercentComplete",
    value: function updatePercentComplete() {
      var t = "number" == typeof this.min ? this.min : 0,
        e = "number" == typeof this.max ? this.max : 100,
        i = "number" == typeof this.value ? this.value : 0,
        o = e - t;
      this.percentComplete = 0 === o ? 0 : Math.fround((i - t) / o * 100);
    }
  }]);
  return es;
}(Se);
Gt([it({
  converter: tt
})], es.prototype, "value", void 0), Gt([it({
  converter: tt
})], es.prototype, "min", void 0), Gt([it({
  converter: tt
})], es.prototype, "max", void 0), Gt([it({
  mode: "boolean"
})], es.prototype, "paused", void 0), Gt([f], es.prototype, "percentComplete", void 0);
var is = /*#__PURE__*/function (_Se25) {
  _inherits(is, _Se25);
  var _super60 = _createSuper(is);
  function is() {
    var _this88;
    _classCallCheck(this, is);
    _this88 = _super60.apply(this, arguments), _this88.orientation = Ae, _this88.radioChangeHandler = function (t) {
      var e = t.target;
      e.checked && (_this88.slottedRadioButtons.forEach(function (t) {
        t !== e && (t.checked = !1, _this88.isInsideFoundationToolbar || t.setAttribute("tabindex", "-1"));
      }), _this88.selectedRadio = e, _this88.value = e.value, e.setAttribute("tabindex", "0"), _this88.focusedRadio = e), t.stopPropagation();
    }, _this88.moveToRadioByIndex = function (t, e) {
      var i = t[e];
      _this88.isInsideToolbar || (i.setAttribute("tabindex", "0"), i.readOnly ? _this88.slottedRadioButtons.forEach(function (t) {
        t !== i && t.setAttribute("tabindex", "-1");
      }) : (i.checked = !0, _this88.selectedRadio = i)), _this88.focusedRadio = i, i.focus();
    }, _this88.moveRightOffGroup = function () {
      var t;
      null === (t = _this88.nextElementSibling) || void 0 === t || t.focus();
    }, _this88.moveLeftOffGroup = function () {
      var t;
      null === (t = _this88.previousElementSibling) || void 0 === t || t.focus();
    }, _this88.focusOutHandler = function (t) {
      var e = _this88.slottedRadioButtons,
        i = t.target,
        o = null !== i ? e.indexOf(i) : 0,
        s = _this88.focusedRadio ? e.indexOf(_this88.focusedRadio) : -1;
      return (0 === s && o === s || s === e.length - 1 && s === o) && (_this88.selectedRadio ? (_this88.focusedRadio = _this88.selectedRadio, _this88.isInsideFoundationToolbar || (_this88.selectedRadio.setAttribute("tabindex", "0"), e.forEach(function (t) {
        t !== _this88.selectedRadio && t.setAttribute("tabindex", "-1");
      }))) : (_this88.focusedRadio = e[0], _this88.focusedRadio.setAttribute("tabindex", "0"), e.forEach(function (t) {
        t !== _this88.focusedRadio && t.setAttribute("tabindex", "-1");
      }))), !0;
    }, _this88.clickHandler = function (t) {
      var e = t.target;
      if (e) {
        var _t66 = _this88.slottedRadioButtons;
        e.checked || 0 === _t66.indexOf(e) ? (e.setAttribute("tabindex", "0"), _this88.selectedRadio = e) : (e.setAttribute("tabindex", "-1"), _this88.selectedRadio = null), _this88.focusedRadio = e;
      }
      t.preventDefault();
    }, _this88.shouldMoveOffGroupToTheRight = function (t, e, i) {
      return t === e.length && _this88.isInsideToolbar && "ArrowRight" === i;
    }, _this88.shouldMoveOffGroupToTheLeft = function (t, e) {
      return (_this88.focusedRadio ? t.indexOf(_this88.focusedRadio) - 1 : 0) < 0 && _this88.isInsideToolbar && "ArrowLeft" === e;
    }, _this88.checkFocusedRadio = function () {
      null === _this88.focusedRadio || _this88.focusedRadio.readOnly || _this88.focusedRadio.checked || (_this88.focusedRadio.checked = !0, _this88.focusedRadio.setAttribute("tabindex", "0"), _this88.focusedRadio.focus(), _this88.selectedRadio = _this88.focusedRadio);
    }, _this88.moveRight = function (t) {
      var e = _this88.slottedRadioButtons;
      var i = 0;
      if (i = _this88.focusedRadio ? e.indexOf(_this88.focusedRadio) + 1 : 1, _this88.shouldMoveOffGroupToTheRight(i, e, t.key)) _this88.moveRightOffGroup();else for (i === e.length && (i = 0); i < e.length && e.length > 1;) {
        if (!e[i].disabled) {
          _this88.moveToRadioByIndex(e, i);
          break;
        }
        if (_this88.focusedRadio && i === e.indexOf(_this88.focusedRadio)) break;
        if (i + 1 >= e.length) {
          if (_this88.isInsideToolbar) break;
          i = 0;
        } else i += 1;
      }
    }, _this88.moveLeft = function (t) {
      var e = _this88.slottedRadioButtons;
      var i = 0;
      if (i = _this88.focusedRadio ? e.indexOf(_this88.focusedRadio) - 1 : 0, i = i < 0 ? e.length - 1 : i, _this88.shouldMoveOffGroupToTheLeft(e, t.key)) _this88.moveLeftOffGroup();else for (; i >= 0 && e.length > 1;) {
        if (!e[i].disabled) {
          _this88.moveToRadioByIndex(e, i);
          break;
        }
        if (_this88.focusedRadio && i === e.indexOf(_this88.focusedRadio)) break;
        i - 1 < 0 ? i = e.length - 1 : i -= 1;
      }
    }, _this88.keydownHandler = function (t) {
      var e = t.key;
      if (e in Me && _this88.isInsideFoundationToolbar) return !0;
      switch (e) {
        case "Enter":
          _this88.checkFocusedRadio();
          break;
        case "ArrowRight":
        case "ArrowDown":
          _this88.direction === Be.ltr ? _this88.moveRight(t) : _this88.moveLeft(t);
          break;
        case "ArrowLeft":
        case "ArrowUp":
          _this88.direction === Be.ltr ? _this88.moveLeft(t) : _this88.moveRight(t);
          break;
        default:
          return !0;
      }
    };
    return _this88;
  }
  _createClass(is, [{
    key: "readOnlyChanged",
    value: function readOnlyChanged() {
      var _this89 = this;
      void 0 !== this.slottedRadioButtons && this.slottedRadioButtons.forEach(function (t) {
        _this89.readOnly ? t.readOnly = !0 : t.readOnly = !1;
      });
    }
  }, {
    key: "disabledChanged",
    value: function disabledChanged() {
      var _this90 = this;
      void 0 !== this.slottedRadioButtons && this.slottedRadioButtons.forEach(function (t) {
        _this90.disabled ? t.disabled = !0 : t.disabled = !1;
      });
    }
  }, {
    key: "nameChanged",
    value: function nameChanged() {
      var _this91 = this;
      this.slottedRadioButtons && this.slottedRadioButtons.forEach(function (t) {
        t.setAttribute("name", _this91.name);
      });
    }
  }, {
    key: "valueChanged",
    value: function valueChanged() {
      var _this92 = this;
      this.slottedRadioButtons && this.slottedRadioButtons.forEach(function (t) {
        t.value === _this92.value && (t.checked = !0, _this92.selectedRadio = t);
      }), this.$emit("change");
    }
  }, {
    key: "slottedRadioButtonsChanged",
    value: function slottedRadioButtonsChanged(t, e) {
      this.slottedRadioButtons && this.slottedRadioButtons.length > 0 && this.setupRadioButtons();
    }
  }, {
    key: "parentToolbar",
    get: function get() {
      return this.closest('[role="toolbar"]');
    }
  }, {
    key: "isInsideToolbar",
    get: function get() {
      var t;
      return null !== (t = this.parentToolbar) && void 0 !== t && t;
    }
  }, {
    key: "isInsideFoundationToolbar",
    get: function get() {
      var t;
      return !!(null === (t = this.parentToolbar) || void 0 === t ? void 0 : t.$fastController);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(is.prototype), "connectedCallback", this).call(this), this.direction = ti(this), this.setupRadioButtons();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this93 = this;
      this.slottedRadioButtons.forEach(function (t) {
        t.removeEventListener("change", _this93.radioChangeHandler);
      });
    }
  }, {
    key: "setupRadioButtons",
    value: function setupRadioButtons() {
      var _this94 = this;
      var t = this.slottedRadioButtons.filter(function (t) {
          return t.hasAttribute("checked");
        }),
        e = t ? t.length : 0;
      if (e > 1) {
        t[e - 1].checked = !0;
      }
      var i = !1;
      if (this.slottedRadioButtons.forEach(function (t) {
        void 0 !== _this94.name && t.setAttribute("name", _this94.name), _this94.disabled && (t.disabled = !0), _this94.readOnly && (t.readOnly = !0), _this94.value && _this94.value === t.value ? (_this94.selectedRadio = t, _this94.focusedRadio = t, t.checked = !0, t.setAttribute("tabindex", "0"), i = !0) : (_this94.isInsideFoundationToolbar || t.setAttribute("tabindex", "-1"), t.checked = !1), t.addEventListener("change", _this94.radioChangeHandler);
      }), void 0 === this.value && this.slottedRadioButtons.length > 0) {
        var _t67 = this.slottedRadioButtons.filter(function (t) {
            return t.hasAttribute("checked");
          }),
          _e74 = null !== _t67 ? _t67.length : 0;
        if (_e74 > 0 && !i) {
          var _i56 = _t67[_e74 - 1];
          _i56.checked = !0, this.focusedRadio = _i56, _i56.setAttribute("tabindex", "0");
        } else this.slottedRadioButtons[0].setAttribute("tabindex", "0"), this.focusedRadio = this.slottedRadioButtons[0];
      }
    }
  }]);
  return is;
}(Se);
Gt([it({
  attribute: "readonly",
  mode: "boolean"
})], is.prototype, "readOnly", void 0), Gt([it({
  attribute: "disabled",
  mode: "boolean"
})], is.prototype, "disabled", void 0), Gt([it], is.prototype, "name", void 0), Gt([it], is.prototype, "value", void 0), Gt([it], is.prototype, "orientation", void 0), Gt([f], is.prototype, "childItems", void 0), Gt([f], is.prototype, "slottedRadioButtons", void 0);
var os = /*#__PURE__*/function (_Se26) {
  _inherits(os, _Se26);
  var _super61 = _createSuper(os);
  function os() {
    _classCallCheck(this, os);
    return _super61.apply(this, arguments);
  }
  return _createClass(os);
}(Se);
var ss = /*#__PURE__*/function (_li2) {
  _inherits(ss, _li2);
  var _super62 = _createSuper(ss);
  function ss() {
    var _this95;
    _classCallCheck(this, ss);
    _this95 = _super62.apply(this, arguments), _this95.proxy = document.createElement("input");
    return _this95;
  }
  return _createClass(ss);
}(li(os));
var ns = /*#__PURE__*/function (_ss) {
  _inherits(ns, _ss);
  var _super63 = _createSuper(ns);
  function ns() {
    var _this96;
    _classCallCheck(this, ns);
    _this96 = _super63.call(this), _this96.initialValue = "on", _this96.keypressHandler = function (t) {
      switch (t.key) {
        case " ":
          return void (_this96.checked || _this96.readOnly || (_this96.checked = !0));
      }
      return !0;
    }, _this96.proxy.setAttribute("type", "radio");
    return _this96;
  }
  _createClass(ns, [{
    key: "readOnlyChanged",
    value: function readOnlyChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.readOnly = this.readOnly);
    }
  }, {
    key: "defaultCheckedChanged",
    value: function defaultCheckedChanged() {
      var t;
      this.$fastController.isConnected && !this.dirtyChecked && (this.isInsideRadioGroup() || (this.checked = null !== (t = this.defaultChecked) && void 0 !== t && t, this.dirtyChecked = !1));
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var t, e;
      _get(_getPrototypeOf(ns.prototype), "connectedCallback", this).call(this), this.validate(), "radiogroup" !== (null === (t = this.parentElement) || void 0 === t ? void 0 : t.getAttribute("role")) && null === this.getAttribute("tabindex") && (this.disabled || this.setAttribute("tabindex", "0")), this.checkedAttribute && (this.dirtyChecked || this.isInsideRadioGroup() || (this.checked = null !== (e = this.defaultChecked) && void 0 !== e && e, this.dirtyChecked = !1));
    }
  }, {
    key: "isInsideRadioGroup",
    value: function isInsideRadioGroup() {
      return null !== this.closest("[role=radiogroup]");
    }
  }, {
    key: "clickHandler",
    value: function clickHandler(t) {
      this.disabled || this.readOnly || this.checked || (this.checked = !0);
    }
  }]);
  return ns;
}(ss);
Gt([it({
  attribute: "readonly",
  mode: "boolean"
})], ns.prototype, "readOnly", void 0), Gt([f], ns.prototype, "name", void 0), Gt([f], ns.prototype, "defaultSlottedNodes", void 0);
var rs = /*#__PURE__*/function (_Se27) {
  _inherits(rs, _Se27);
  var _super64 = _createSuper(rs);
  function rs() {
    var _this97;
    _classCallCheck(this, rs);
    _this97 = _super64.apply(this, arguments), _this97.framesPerSecond = 60, _this97.updatingItems = !1, _this97.speed = 600, _this97.easing = "ease-in-out", _this97.flippersHiddenFromAT = !1, _this97.scrolling = !1, _this97.resizeDetector = null;
    return _this97;
  }
  _createClass(rs, [{
    key: "frameTime",
    get: function get() {
      return 1e3 / this.framesPerSecond;
    }
  }, {
    key: "scrollingChanged",
    value: function scrollingChanged(t, e) {
      if (this.scrollContainer) {
        var _t68 = 1 == this.scrolling ? "scrollstart" : "scrollend";
        this.$emit(_t68, this.scrollContainer.scrollLeft);
      }
    }
  }, {
    key: "isRtl",
    get: function get() {
      return this.scrollItems.length > 1 && this.scrollItems[0].offsetLeft > this.scrollItems[1].offsetLeft;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(rs.prototype), "connectedCallback", this).call(this), this.initializeResizeDetector();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.disconnectResizeDetector(), _get(_getPrototypeOf(rs.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    key: "scrollItemsChanged",
    value: function scrollItemsChanged(t, e) {
      var _this98 = this;
      e && !this.updatingItems && d.queueUpdate(function () {
        return _this98.setStops();
      });
    }
  }, {
    key: "disconnectResizeDetector",
    value: function disconnectResizeDetector() {
      this.resizeDetector && (this.resizeDetector.disconnect(), this.resizeDetector = null);
    }
  }, {
    key: "initializeResizeDetector",
    value: function initializeResizeDetector() {
      this.disconnectResizeDetector(), this.resizeDetector = new window.ResizeObserver(this.resized.bind(this)), this.resizeDetector.observe(this);
    }
  }, {
    key: "updateScrollStops",
    value: function updateScrollStops() {
      this.updatingItems = !0;
      var t = this.scrollItems.reduce(function (t, e) {
        return e instanceof HTMLSlotElement ? t.concat(e.assignedElements()) : (t.push(e), t);
      }, []);
      this.scrollItems = t, this.updatingItems = !1;
    }
  }, {
    key: "setStops",
    value: function setStops() {
      var _this99 = this;
      this.updateScrollStops();
      var t = this.scrollContainer,
        e = t.scrollLeft,
        _t$getBoundingClientR = t.getBoundingClientRect(),
        i = _t$getBoundingClientR.width,
        o = _t$getBoundingClientR.left;
      this.width = i;
      var s = 0,
        n = this.scrollItems.map(function (t, i) {
          var _t$getBoundingClientR2 = t.getBoundingClientRect(),
            n = _t$getBoundingClientR2.left,
            r = _t$getBoundingClientR2.width,
            a = Math.round(n + e - o),
            l = Math.round(a + r);
          return _this99.isRtl ? -l : (s = l, 0 === i ? 0 : a);
        }).concat(s);
      n = this.fixScrollMisalign(n), n.sort(function (t, e) {
        return Math.abs(t) - Math.abs(e);
      }), this.scrollStops = n, this.setFlippers();
    }
  }, {
    key: "fixScrollMisalign",
    value: function fixScrollMisalign(t) {
      if (this.isRtl && t.some(function (t) {
        return t > 0;
      })) {
        t.sort(function (t, e) {
          return e - t;
        });
        var _e75 = t[0];
        t = t.map(function (t) {
          return t - _e75;
        });
      }
      return t;
    }
  }, {
    key: "setFlippers",
    value: function setFlippers() {
      var t, e;
      var i = this.scrollContainer.scrollLeft;
      if (null === (t = this.previousFlipperContainer) || void 0 === t || t.classList.toggle("disabled", 0 === i), this.scrollStops) {
        var _t69 = Math.abs(this.scrollStops[this.scrollStops.length - 1]);
        null === (e = this.nextFlipperContainer) || void 0 === e || e.classList.toggle("disabled", Math.abs(i) + this.width >= _t69);
      }
    }
  }, {
    key: "scrollInView",
    value: function scrollInView(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var i = arguments.length > 2 ? arguments[2] : undefined;
      var o;
      if ("number" != typeof t && t && (t = this.scrollItems.findIndex(function (e) {
        return e === t || e.contains(t);
      })), void 0 !== t) {
        i = null != i ? i : e;
        var _s34 = this.scrollContainer,
          _n27 = this.scrollStops,
          _r15 = this.scrollItems,
          _a8 = this.scrollContainer.scrollLeft,
          _s34$getBoundingClien = _s34.getBoundingClientRect(),
          _l5 = _s34$getBoundingClien.width,
          _c4 = _n27[t],
          _r15$t$getBoundingCli = _r15[t].getBoundingClientRect(),
          _h5 = _r15$t$getBoundingCli.width,
          _d8 = _c4 + _h5,
          _u5 = _a8 + e > _c4;
        if (_u5 || _a8 + _l5 - i < _d8) {
          var _t70 = null !== (o = _toConsumableArray(_n27).sort(function (t, e) {
            return _u5 ? e - t : t - e;
          }).find(function (t) {
            return _u5 ? t + e < _c4 : t + _l5 - (null != i ? i : 0) > _d8;
          })) && void 0 !== o ? o : 0;
          this.scrollToPosition(_t70);
        }
      }
    }
  }, {
    key: "keyupHandler",
    value: function keyupHandler(t) {
      switch (t.key) {
        case "ArrowLeft":
          this.scrollToPrevious();
          break;
        case "ArrowRight":
          this.scrollToNext();
      }
    }
  }, {
    key: "scrollToPrevious",
    value: function scrollToPrevious() {
      var _this100 = this;
      var t = this.scrollContainer.scrollLeft,
        e = this.scrollStops.findIndex(function (e, i) {
          return e >= t && (_this100.isRtl || i === _this100.scrollStops.length - 1 || _this100.scrollStops[i + 1] > t);
        }),
        i = Math.abs(this.scrollStops[e + 1]);
      var o = this.scrollStops.findIndex(function (t) {
        return Math.abs(t) + _this100.width > i;
      });
      (o >= e || -1 === o) && (o = e > 0 ? e - 1 : 0), this.scrollToPosition(this.scrollStops[o], t);
    }
  }, {
    key: "scrollToNext",
    value: function scrollToNext() {
      var _this101 = this;
      var t = this.scrollContainer.scrollLeft,
        e = this.scrollStops.findIndex(function (e) {
          return Math.abs(e) >= Math.abs(t);
        }),
        i = this.scrollStops.findIndex(function (e) {
          return Math.abs(t) + _this101.width <= Math.abs(e);
        });
      var o = e;
      i > e + 2 ? o = i - 2 : e < this.scrollStops.length - 2 && (o = e + 1), this.scrollToPosition(this.scrollStops[o], t);
    }
  }, {
    key: "scrollToPosition",
    value: function scrollToPosition(t) {
      var _this102 = this;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.scrollContainer.scrollLeft;
      var i;
      if (this.scrolling) return;
      this.scrolling = !0;
      var o = null !== (i = this.duration) && void 0 !== i ? i : Math.abs(t - e) / this.speed + "s";
      this.content.style.setProperty("transition-duration", o);
      var s = parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),
        n = function n(e) {
          e && e.target !== e.currentTarget || (_this102.content.style.setProperty("transition-duration", "0s"), _this102.content.style.removeProperty("transform"), _this102.scrollContainer.style.setProperty("scroll-behavior", "auto"), _this102.scrollContainer.scrollLeft = t, _this102.setFlippers(), _this102.content.removeEventListener("transitionend", n), _this102.scrolling = !1);
        };
      if (0 === s) return void n();
      this.content.addEventListener("transitionend", n);
      var r = this.scrollContainer.scrollWidth - this.scrollContainer.clientWidth;
      var a = this.scrollContainer.scrollLeft - Math.min(t, r);
      this.isRtl && (a = this.scrollContainer.scrollLeft + Math.min(Math.abs(t), r)), this.content.style.setProperty("transition-property", "transform"), this.content.style.setProperty("transition-timing-function", this.easing), this.content.style.setProperty("transform", "translateX(".concat(a, "px)"));
    }
  }, {
    key: "resized",
    value: function resized() {
      var _this103 = this;
      this.resizeTimeout && (this.resizeTimeout = clearTimeout(this.resizeTimeout)), this.resizeTimeout = setTimeout(function () {
        _this103.width = _this103.scrollContainer.offsetWidth, _this103.setFlippers();
      }, this.frameTime);
    }
  }, {
    key: "scrolled",
    value: function scrolled() {
      var _this104 = this;
      this.scrollTimeout && (this.scrollTimeout = clearTimeout(this.scrollTimeout)), this.scrollTimeout = setTimeout(function () {
        _this104.setFlippers();
      }, this.frameTime);
    }
  }]);
  return rs;
}(Se);
Gt([it({
  converter: tt
})], rs.prototype, "speed", void 0), Gt([it], rs.prototype, "duration", void 0), Gt([it], rs.prototype, "easing", void 0), Gt([it({
  attribute: "flippers-hidden-from-at",
  converter: J
})], rs.prototype, "flippersHiddenFromAT", void 0), Gt([f], rs.prototype, "scrolling", void 0), Gt([f], rs.prototype, "scrollItems", void 0), Gt([it({
  attribute: "view"
})], rs.prototype, "view", void 0);
function as(t, e, i) {
  return t.nodeType !== Node.TEXT_NODE || "string" == typeof t.nodeValue && !!t.nodeValue.trim().length;
}
var ls = /*#__PURE__*/function (_Se28) {
  _inherits(ls, _Se28);
  var _super65 = _createSuper(ls);
  function ls() {
    _classCallCheck(this, ls);
    return _super65.apply(this, arguments);
  }
  return _createClass(ls);
}(Se);
var cs = /*#__PURE__*/function (_ai6) {
  _inherits(cs, _ai6);
  var _super66 = _createSuper(cs);
  function cs() {
    var _this105;
    _classCallCheck(this, cs);
    _this105 = _super66.apply(this, arguments), _this105.proxy = document.createElement("input");
    return _this105;
  }
  return _createClass(cs);
}(ai(ls));
var hs = /*#__PURE__*/function (_cs) {
  _inherits(hs, _cs);
  var _super67 = _createSuper(hs);
  function hs() {
    _classCallCheck(this, hs);
    return _super67.apply(this, arguments);
  }
  _createClass(hs, [{
    key: "readOnlyChanged",
    value: function readOnlyChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.readOnly = this.readOnly, this.validate());
    }
  }, {
    key: "autofocusChanged",
    value: function autofocusChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.autofocus = this.autofocus, this.validate());
    }
  }, {
    key: "placeholderChanged",
    value: function placeholderChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.placeholder = this.placeholder);
    }
  }, {
    key: "listChanged",
    value: function listChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.setAttribute("list", this.list), this.validate());
    }
  }, {
    key: "maxlengthChanged",
    value: function maxlengthChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.maxLength = this.maxlength, this.validate());
    }
  }, {
    key: "minlengthChanged",
    value: function minlengthChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.minLength = this.minlength, this.validate());
    }
  }, {
    key: "patternChanged",
    value: function patternChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.pattern = this.pattern, this.validate());
    }
  }, {
    key: "sizeChanged",
    value: function sizeChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.size = this.size);
    }
  }, {
    key: "spellcheckChanged",
    value: function spellcheckChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.spellcheck = this.spellcheck);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this106 = this;
      _get(_getPrototypeOf(hs.prototype), "connectedCallback", this).call(this), this.validate(), this.autofocus && d.queueUpdate(function () {
        _this106.focus();
      });
    }
  }, {
    key: "validate",
    value: function validate() {
      _get(_getPrototypeOf(hs.prototype), "validate", this).call(this, this.control);
    }
  }, {
    key: "handleTextInput",
    value: function handleTextInput() {
      this.value = this.control.value;
    }
  }, {
    key: "handleClearInput",
    value: function handleClearInput() {
      this.value = "", this.control.focus(), this.handleChange();
    }
  }, {
    key: "handleChange",
    value: function handleChange() {
      this.$emit("change");
    }
  }]);
  return hs;
}(cs);
Gt([it({
  attribute: "readonly",
  mode: "boolean"
})], hs.prototype, "readOnly", void 0), Gt([it({
  mode: "boolean"
})], hs.prototype, "autofocus", void 0), Gt([it], hs.prototype, "placeholder", void 0), Gt([it], hs.prototype, "list", void 0), Gt([it({
  converter: tt
})], hs.prototype, "maxlength", void 0), Gt([it({
  converter: tt
})], hs.prototype, "minlength", void 0), Gt([it], hs.prototype, "pattern", void 0), Gt([it({
  converter: tt
})], hs.prototype, "size", void 0), Gt([it({
  mode: "boolean"
})], hs.prototype, "spellcheck", void 0), Gt([f], hs.prototype, "defaultSlottedNodes", void 0);
var ds = /*#__PURE__*/_createClass(function ds() {
  _classCallCheck(this, ds);
});
Ve(ds, Qe), Ve(hs, Nt, ds);
var us = /*#__PURE__*/function (_Bo) {
  _inherits(us, _Bo);
  var _super68 = _createSuper(us);
  function us() {
    _classCallCheck(this, us);
    return _super68.apply(this, arguments);
  }
  return _createClass(us);
}(Bo);
var ps = /*#__PURE__*/function (_ai7) {
  _inherits(ps, _ai7);
  var _super69 = _createSuper(ps);
  function ps() {
    var _this107;
    _classCallCheck(this, ps);
    _this107 = _super69.apply(this, arguments), _this107.proxy = document.createElement("select");
    return _this107;
  }
  return _createClass(ps);
}(ai(us));
var gs = /*#__PURE__*/function (_ps) {
  _inherits(gs, _ps);
  var _super70 = _createSuper(gs);
  function gs() {
    var _this108;
    _classCallCheck(this, gs);
    _this108 = _super70.apply(this, arguments), _this108.open = !1, _this108.forcedPosition = !1, _this108.listboxId = _e("listbox-"), _this108.maxHeight = 0;
    return _this108;
  }
  _createClass(gs, [{
    key: "openChanged",
    value: function openChanged(t, e) {
      var _this109 = this;
      if (this.collapsible) {
        if (this.open) return this.ariaControls = this.listboxId, this.ariaExpanded = "true", this.setPositioning(), this.focusAndScrollOptionIntoView(), this.indexWhenOpened = this.selectedIndex, void d.queueUpdate(function () {
          return _this109.focus();
        });
        this.ariaControls = "", this.ariaExpanded = "false";
      }
    }
  }, {
    key: "collapsible",
    get: function get() {
      return !(this.multiple || "number" == typeof this.size);
    }
  }, {
    key: "value",
    get: function get() {
      return g.track(this, "value"), this._value;
    },
    set: function set(t) {
      var e, i, o, s, n, r, a;
      var l = "" + this._value;
      if (null === (e = this._options) || void 0 === e ? void 0 : e.length) {
        var _e76 = this._options.findIndex(function (e) {
            return e.value === t;
          }),
          _l6 = null !== (o = null === (i = this._options[this.selectedIndex]) || void 0 === i ? void 0 : i.value) && void 0 !== o ? o : null,
          _c5 = null !== (n = null === (s = this._options[_e76]) || void 0 === s ? void 0 : s.value) && void 0 !== n ? n : null;
        -1 !== _e76 && _l6 === _c5 || (t = "", this.selectedIndex = _e76), t = null !== (a = null === (r = this.firstSelectedOption) || void 0 === r ? void 0 : r.value) && void 0 !== a ? a : t;
      }
      l !== t && (this._value = t, _get(_getPrototypeOf(gs.prototype), "valueChanged", this).call(this, l, t), g.notify(this, "value"), this.updateDisplayValue());
    }
  }, {
    key: "updateValue",
    value: function updateValue(t) {
      var e, i;
      this.$fastController.isConnected && (this.value = null !== (i = null === (e = this.firstSelectedOption) || void 0 === e ? void 0 : e.value) && void 0 !== i ? i : ""), t && (this.$emit("input"), this.$emit("change", this, {
        bubbles: !0,
        composed: void 0
      }));
    }
  }, {
    key: "selectedIndexChanged",
    value: function selectedIndexChanged(t, e) {
      _get(_getPrototypeOf(gs.prototype), "selectedIndexChanged", this).call(this, t, e), this.updateValue();
    }
  }, {
    key: "positionChanged",
    value: function positionChanged(t, e) {
      this.positionAttribute = e, this.setPositioning();
    }
  }, {
    key: "setPositioning",
    value: function setPositioning() {
      var t = this.getBoundingClientRect(),
        e = window.innerHeight - t.bottom;
      this.position = this.forcedPosition ? this.positionAttribute : t.top > e ? Ni : ji, this.positionAttribute = this.forcedPosition ? this.positionAttribute : this.position, this.maxHeight = this.position === Ni ? ~~t.top : ~~e;
    }
  }, {
    key: "displayValue",
    get: function get() {
      var t, e;
      return g.track(this, "displayValue"), null !== (e = null === (t = this.firstSelectedOption) || void 0 === t ? void 0 : t.text) && void 0 !== e ? e : "";
    }
  }, {
    key: "disabledChanged",
    value: function disabledChanged(t, e) {
      _get(_getPrototypeOf(gs.prototype), "disabledChanged", this) && _get(_getPrototypeOf(gs.prototype), "disabledChanged", this).call(this, t, e), this.ariaDisabled = this.disabled ? "true" : "false";
    }
  }, {
    key: "formResetCallback",
    value: function formResetCallback() {
      this.setProxyOptions(), _get(_getPrototypeOf(gs.prototype), "setDefaultSelectedOption", this).call(this), -1 === this.selectedIndex && (this.selectedIndex = 0);
    }
  }, {
    key: "clickHandler",
    value: function clickHandler(t) {
      if (!this.disabled) {
        if (this.open) {
          var _e77 = t.target.closest("option,[role=option]");
          if (_e77 && _e77.disabled) return;
        }
        return _get(_getPrototypeOf(gs.prototype), "clickHandler", this).call(this, t), this.open = this.collapsible && !this.open, this.open || this.indexWhenOpened === this.selectedIndex || this.updateValue(!0), !0;
      }
    }
  }, {
    key: "focusoutHandler",
    value: function focusoutHandler(t) {
      var e;
      if (_get(_getPrototypeOf(gs.prototype), "focusoutHandler", this).call(this, t), !this.open) return !0;
      var i = t.relatedTarget;
      this.isSameNode(i) ? this.focus() : (null === (e = this.options) || void 0 === e ? void 0 : e.includes(i)) || (this.open = !1, this.indexWhenOpened !== this.selectedIndex && this.updateValue(!0));
    }
  }, {
    key: "handleChange",
    value: function handleChange(t, e) {
      _get(_getPrototypeOf(gs.prototype), "handleChange", this).call(this, t, e), "value" === e && this.updateValue();
    }
  }, {
    key: "slottedOptionsChanged",
    value: function slottedOptionsChanged(t, e) {
      var _this110 = this;
      this.options.forEach(function (t) {
        g.getNotifier(t).unsubscribe(_this110, "value");
      }), _get(_getPrototypeOf(gs.prototype), "slottedOptionsChanged", this).call(this, t, e), this.options.forEach(function (t) {
        g.getNotifier(t).subscribe(_this110, "value");
      }), this.setProxyOptions(), this.updateValue();
    }
  }, {
    key: "mousedownHandler",
    value: function mousedownHandler(t) {
      var e;
      return t.offsetX >= 0 && t.offsetX <= (null === (e = this.listbox) || void 0 === e ? void 0 : e.scrollWidth) ? _get(_getPrototypeOf(gs.prototype), "mousedownHandler", this).call(this, t) : this.collapsible;
    }
  }, {
    key: "multipleChanged",
    value: function multipleChanged(t, e) {
      _get(_getPrototypeOf(gs.prototype), "multipleChanged", this).call(this, t, e), this.proxy && (this.proxy.multiple = e);
    }
  }, {
    key: "selectedOptionsChanged",
    value: function selectedOptionsChanged(t, e) {
      var _this111 = this;
      var i;
      _get(_getPrototypeOf(gs.prototype), "selectedOptionsChanged", this).call(this, t, e), null === (i = this.options) || void 0 === i || i.forEach(function (t, e) {
        var i;
        var o = null === (i = _this111.proxy) || void 0 === i ? void 0 : i.options.item(e);
        o && (o.selected = t.selected);
      });
    }
  }, {
    key: "setDefaultSelectedOption",
    value: function setDefaultSelectedOption() {
      var _this112 = this;
      var t;
      var e = null !== (t = this.options) && void 0 !== t ? t : Array.from(this.children).filter(Mi.slottedOptionFilter),
        i = null == e ? void 0 : e.findIndex(function (t) {
          return t.hasAttribute("selected") || t.selected || t.value === _this112.value;
        });
      this.selectedIndex = -1 === i ? 0 : i;
    }
  }, {
    key: "setProxyOptions",
    value: function setProxyOptions() {
      var _this113 = this;
      this.proxy instanceof HTMLSelectElement && this.options && (this.proxy.options.length = 0, this.options.forEach(function (t) {
        var e = t.proxy || (t instanceof HTMLOptionElement ? t.cloneNode() : null);
        e && _this113.proxy.options.add(e);
      }));
    }
  }, {
    key: "keydownHandler",
    value: function keydownHandler(t) {
      _get(_getPrototypeOf(gs.prototype), "keydownHandler", this).call(this, t);
      var e = t.key || t.key.charCodeAt(0);
      switch (e) {
        case " ":
          t.preventDefault(), this.collapsible && this.typeAheadExpired && (this.open = !this.open);
          break;
        case "Home":
        case "End":
          t.preventDefault();
          break;
        case "Enter":
          t.preventDefault(), this.open = !this.open;
          break;
        case "Escape":
          this.collapsible && this.open && (t.preventDefault(), this.open = !1);
          break;
        case "Tab":
          return this.collapsible && this.open && (t.preventDefault(), this.open = !1), !0;
      }
      return this.open || this.indexWhenOpened === this.selectedIndex || (this.updateValue(!0), this.indexWhenOpened = this.selectedIndex), !("ArrowDown" === e || "ArrowUp" === e);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(gs.prototype), "connectedCallback", this).call(this), this.forcedPosition = !!this.positionAttribute, this.addEventListener("contentchange", this.updateDisplayValue);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.removeEventListener("contentchange", this.updateDisplayValue), _get(_getPrototypeOf(gs.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    key: "sizeChanged",
    value: function sizeChanged(t, e) {
      _get(_getPrototypeOf(gs.prototype), "sizeChanged", this).call(this, t, e), this.proxy && (this.proxy.size = e);
    }
  }, {
    key: "updateDisplayValue",
    value: function updateDisplayValue() {
      this.collapsible && g.notify(this, "displayValue");
    }
  }]);
  return gs;
}(ps);
Gt([it({
  attribute: "open",
  mode: "boolean"
})], gs.prototype, "open", void 0), Gt([function (t, e, i) {
  return Object.assign({}, i, {
    get: function get() {
      return g.trackVolatile(), i.get.apply(this);
    }
  });
}], gs.prototype, "collapsible", null), Gt([f], gs.prototype, "control", void 0), Gt([it({
  attribute: "position"
})], gs.prototype, "positionAttribute", void 0), Gt([f], gs.prototype, "position", void 0), Gt([f], gs.prototype, "maxHeight", void 0);
var fs = /*#__PURE__*/_createClass(function fs() {
  _classCallCheck(this, fs);
});
Gt([f], fs.prototype, "ariaControls", void 0), Ve(fs, Bi), Ve(gs, Nt, fs);
var ms = /*#__PURE__*/function (_Se29) {
  _inherits(ms, _Se29);
  var _super71 = _createSuper(ms);
  function ms() {
    var _this114;
    _classCallCheck(this, ms);
    _this114 = _super71.apply(this, arguments), _this114.shape = "rect";
    return _this114;
  }
  return _createClass(ms);
}(Se);
Gt([it], ms.prototype, "fill", void 0), Gt([it], ms.prototype, "shape", void 0), Gt([it], ms.prototype, "pattern", void 0), Gt([it({
  mode: "boolean"
})], ms.prototype, "shimmer", void 0);
function vs(t, e, i, o) {
  var s = je(0, 1, (t - e) / (i - e));
  return o === Be.rtl && (s = 1 - s), s;
}
var bs = {
  min: 0,
  max: 0,
  direction: Be.ltr,
  orientation: Ae,
  disabled: !1
};
var ys = /*#__PURE__*/function (_Se30) {
  _inherits(ys, _Se30);
  var _super72 = _createSuper(ys);
  function ys() {
    var _this115;
    _classCallCheck(this, ys);
    _this115 = _super72.apply(this, arguments), _this115.hideMark = !1, _this115.sliderDirection = Be.ltr, _this115.getSliderConfiguration = function () {
      if (_this115.isSliderConfig(_this115.parentNode)) {
        var _t71 = _this115.parentNode,
          _e78 = _t71.min,
          _i57 = _t71.max,
          _o35 = _t71.direction,
          _s35 = _t71.orientation,
          _n28 = _t71.disabled;
        void 0 !== _n28 && (_this115.disabled = _n28), _this115.sliderDirection = _o35 || Be.ltr, _this115.sliderOrientation = _s35 || Ae, _this115.sliderMaxPosition = _i57, _this115.sliderMinPosition = _e78;
      } else _this115.sliderDirection = bs.direction || Be.ltr, _this115.sliderOrientation = bs.orientation, _this115.sliderMaxPosition = bs.max, _this115.sliderMinPosition = bs.min;
    }, _this115.positionAsStyle = function () {
      var t = _this115.sliderDirection ? _this115.sliderDirection : Be.ltr,
        e = vs(Number(_this115.position), Number(_this115.sliderMinPosition), Number(_this115.sliderMaxPosition));
      var i = Math.round(100 * (1 - e)),
        o = Math.round(100 * e);
      return Number.isNaN(o) && Number.isNaN(i) && (i = 50, o = 50), _this115.sliderOrientation === Ae ? t === Be.rtl ? "right: ".concat(o, "%; left: ").concat(i, "%;") : "left: ".concat(o, "%; right: ").concat(i, "%;") : "top: ".concat(o, "%; bottom: ").concat(i, "%;");
    };
    return _this115;
  }
  _createClass(ys, [{
    key: "positionChanged",
    value: function positionChanged() {
      this.positionStyle = this.positionAsStyle();
    }
  }, {
    key: "sliderOrientationChanged",
    value: function sliderOrientationChanged() {}
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(ys.prototype), "connectedCallback", this).call(this), this.getSliderConfiguration(), this.positionStyle = this.positionAsStyle(), this.notifier = g.getNotifier(this.parentNode), this.notifier.subscribe(this, "orientation"), this.notifier.subscribe(this, "direction"), this.notifier.subscribe(this, "max"), this.notifier.subscribe(this, "min");
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(ys.prototype), "disconnectedCallback", this).call(this), this.notifier.unsubscribe(this, "orientation"), this.notifier.unsubscribe(this, "direction"), this.notifier.unsubscribe(this, "max"), this.notifier.unsubscribe(this, "min");
    }
  }, {
    key: "handleChange",
    value: function handleChange(t, e) {
      switch (e) {
        case "direction":
          this.sliderDirection = t.direction;
          break;
        case "orientation":
          this.sliderOrientation = t.orientation;
          break;
        case "max":
          this.sliderMaxPosition = t.max;
          break;
        case "min":
          this.sliderMinPosition = t.min;
      }
      this.positionStyle = this.positionAsStyle();
    }
  }, {
    key: "isSliderConfig",
    value: function isSliderConfig(t) {
      return void 0 !== t.max && void 0 !== t.min;
    }
  }]);
  return ys;
}(Se);
Gt([f], ys.prototype, "positionStyle", void 0), Gt([it], ys.prototype, "position", void 0), Gt([it({
  attribute: "hide-mark",
  mode: "boolean"
})], ys.prototype, "hideMark", void 0), Gt([it({
  attribute: "disabled",
  mode: "boolean"
})], ys.prototype, "disabled", void 0), Gt([f], ys.prototype, "sliderOrientation", void 0), Gt([f], ys.prototype, "sliderMinPosition", void 0), Gt([f], ys.prototype, "sliderMaxPosition", void 0), Gt([f], ys.prototype, "sliderDirection", void 0);
var xs = /*#__PURE__*/function (_Se31) {
  _inherits(xs, _Se31);
  var _super73 = _createSuper(xs);
  function xs() {
    _classCallCheck(this, xs);
    return _super73.apply(this, arguments);
  }
  return _createClass(xs);
}(Se);
var $s = /*#__PURE__*/function (_ai8) {
  _inherits($s, _ai8);
  var _super74 = _createSuper($s);
  function $s() {
    var _this116;
    _classCallCheck(this, $s);
    _this116 = _super74.apply(this, arguments), _this116.proxy = document.createElement("input");
    return _this116;
  }
  return _createClass($s);
}(ai(xs));
var ws = "single-value";
var ks = /*#__PURE__*/function (_$s) {
  _inherits(ks, _$s);
  var _super75 = _createSuper(ks);
  function ks() {
    var _this117;
    _classCallCheck(this, ks);
    _this117 = _super75.apply(this, arguments), _this117.direction = Be.ltr, _this117.isDragging = !1, _this117.trackWidth = 0, _this117.trackMinWidth = 0, _this117.trackHeight = 0, _this117.trackLeft = 0, _this117.trackMinHeight = 0, _this117.valueTextFormatter = function () {
      return null;
    }, _this117.min = 0, _this117.max = 10, _this117.step = 1, _this117.orientation = Ae, _this117.mode = ws, _this117.keypressHandler = function (t) {
      if (!_this117.readOnly) if ("Home" === t.key) t.preventDefault(), _this117.value = "" + _this117.min;else if ("End" === t.key) t.preventDefault(), _this117.value = "" + _this117.max;else if (!t.shiftKey) switch (t.key) {
        case "ArrowRight":
        case "ArrowUp":
          t.preventDefault(), _this117.increment();
          break;
        case "ArrowLeft":
        case "ArrowDown":
          t.preventDefault(), _this117.decrement();
      }
    }, _this117.setupTrackConstraints = function () {
      var t = _this117.track.getBoundingClientRect();
      _this117.trackWidth = _this117.track.clientWidth, _this117.trackMinWidth = _this117.track.clientLeft, _this117.trackHeight = t.bottom, _this117.trackMinHeight = t.top, _this117.trackLeft = _this117.getBoundingClientRect().left, 0 === _this117.trackWidth && (_this117.trackWidth = 1);
    }, _this117.setupListeners = function () {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      var e = (t ? "remove" : "add") + "EventListener";
      _this117[e]("keydown", _this117.keypressHandler), _this117[e]("mousedown", _this117.handleMouseDown), _this117.thumb[e]("mousedown", _this117.handleThumbMouseDown, {
        passive: !0
      }), _this117.thumb[e]("touchstart", _this117.handleThumbMouseDown, {
        passive: !0
      }), t && (_this117.handleMouseDown(null), _this117.handleThumbMouseDown(null));
    }, _this117.initialValue = "", _this117.handleThumbMouseDown = function (t) {
      if (t) {
        if (_this117.readOnly || _this117.disabled || t.defaultPrevented) return;
        t.target.focus();
      }
      var e = (null !== t ? "add" : "remove") + "EventListener";
      window[e]("mouseup", _this117.handleWindowMouseUp), window[e]("mousemove", _this117.handleMouseMove, {
        passive: !0
      }), window[e]("touchmove", _this117.handleMouseMove, {
        passive: !0
      }), window[e]("touchend", _this117.handleWindowMouseUp), _this117.isDragging = null !== t;
    }, _this117.handleMouseMove = function (t) {
      if (_this117.readOnly || _this117.disabled || t.defaultPrevented) return;
      var e = window.TouchEvent && t instanceof TouchEvent ? t.touches[0] : t,
        i = _this117.orientation === Ae ? e.pageX - document.documentElement.scrollLeft - _this117.trackLeft : e.pageY - document.documentElement.scrollTop;
      _this117.value = "" + _this117.calculateNewValue(i);
    }, _this117.calculateNewValue = function (t) {
      var e = vs(t, _this117.orientation === Ae ? _this117.trackMinWidth : _this117.trackMinHeight, _this117.orientation === Ae ? _this117.trackWidth : _this117.trackHeight, _this117.direction),
        i = (_this117.max - _this117.min) * e + _this117.min;
      return _this117.convertToConstrainedValue(i);
    }, _this117.handleWindowMouseUp = function (t) {
      _this117.stopDragging();
    }, _this117.stopDragging = function () {
      _this117.isDragging = !1, _this117.handleMouseDown(null), _this117.handleThumbMouseDown(null);
    }, _this117.handleMouseDown = function (t) {
      var e = (null !== t ? "add" : "remove") + "EventListener";
      if ((null === t || !_this117.disabled && !_this117.readOnly) && (window[e]("mouseup", _this117.handleWindowMouseUp), window.document[e]("mouseleave", _this117.handleWindowMouseUp), window[e]("mousemove", _this117.handleMouseMove), t)) {
        t.preventDefault(), _this117.setupTrackConstraints(), t.target.focus();
        var _e79 = _this117.orientation === Ae ? t.pageX - document.documentElement.scrollLeft - _this117.trackLeft : t.pageY - document.documentElement.scrollTop;
        _this117.value = "" + _this117.calculateNewValue(_e79);
      }
    }, _this117.convertToConstrainedValue = function (t) {
      isNaN(t) && (t = _this117.min);
      var e = t - _this117.min;
      var i = e - Math.round(e / _this117.step) * (_this117.stepMultiplier * _this117.step) / _this117.stepMultiplier;
      return e = i >= Number(_this117.step) / 2 ? e - i + Number(_this117.step) : e - i, e + _this117.min;
    };
    return _this117;
  }
  _createClass(ks, [{
    key: "readOnlyChanged",
    value: function readOnlyChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.readOnly = this.readOnly);
    }
  }, {
    key: "valueAsNumber",
    get: function get() {
      return parseFloat(_get(_getPrototypeOf(ks.prototype), "value", this));
    },
    set: function set(t) {
      this.value = t.toString();
    }
  }, {
    key: "valueChanged",
    value: function valueChanged(t, e) {
      _get(_getPrototypeOf(ks.prototype), "valueChanged", this).call(this, t, e), this.$fastController.isConnected && this.setThumbPositionForOrientation(this.direction), this.$emit("change");
    }
  }, {
    key: "minChanged",
    value: function minChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.min = "" + this.min), this.validate();
    }
  }, {
    key: "maxChanged",
    value: function maxChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.max = "" + this.max), this.validate();
    }
  }, {
    key: "stepChanged",
    value: function stepChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.step = "" + this.step), this.updateStepMultiplier(), this.validate();
    }
  }, {
    key: "orientationChanged",
    value: function orientationChanged() {
      this.$fastController.isConnected && this.setThumbPositionForOrientation(this.direction);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(ks.prototype), "connectedCallback", this).call(this), this.proxy.setAttribute("type", "range"), this.direction = ti(this), this.updateStepMultiplier(), this.setupTrackConstraints(), this.setupListeners(), this.setupDefaultValue(), this.setThumbPositionForOrientation(this.direction);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.setupListeners(!0);
    }
  }, {
    key: "increment",
    value: function increment() {
      var t = this.direction !== Be.rtl && this.orientation !== Le ? Number(this.value) + Number(this.step) : Number(this.value) - Number(this.step),
        e = this.convertToConstrainedValue(t),
        i = e < Number(this.max) ? "" + e : "" + this.max;
      this.value = i;
    }
  }, {
    key: "decrement",
    value: function decrement() {
      var t = this.direction !== Be.rtl && this.orientation !== Le ? Number(this.value) - Number(this.step) : Number(this.value) + Number(this.step),
        e = this.convertToConstrainedValue(t),
        i = e > Number(this.min) ? "" + e : "" + this.min;
      this.value = i;
    }
  }, {
    key: "setThumbPositionForOrientation",
    value: function setThumbPositionForOrientation(t) {
      var e = 100 * (1 - vs(Number(this.value), Number(this.min), Number(this.max), t));
      this.orientation === Ae ? this.position = this.isDragging ? "right: ".concat(e, "%; transition: none;") : "right: ".concat(e, "%; transition: all 0.2s ease;") : this.position = this.isDragging ? "bottom: ".concat(e, "%; transition: none;") : "bottom: ".concat(e, "%; transition: all 0.2s ease;");
    }
  }, {
    key: "updateStepMultiplier",
    value: function updateStepMultiplier() {
      var t = this.step + "",
        e = this.step % 1 ? t.length - t.indexOf(".") - 1 : 0;
      this.stepMultiplier = Math.pow(10, e);
    }
  }, {
    key: "midpoint",
    get: function get() {
      return "" + this.convertToConstrainedValue((this.max + this.min) / 2);
    }
  }, {
    key: "setupDefaultValue",
    value: function setupDefaultValue() {
      if ("string" == typeof this.value) if (0 === this.value.length) this.initialValue = this.midpoint;else {
        var _t72 = parseFloat(this.value);
        !Number.isNaN(_t72) && (_t72 < this.min || _t72 > this.max) && (this.value = this.midpoint);
      }
    }
  }]);
  return ks;
}($s);
Gt([it({
  attribute: "readonly",
  mode: "boolean"
})], ks.prototype, "readOnly", void 0), Gt([f], ks.prototype, "direction", void 0), Gt([f], ks.prototype, "isDragging", void 0), Gt([f], ks.prototype, "position", void 0), Gt([f], ks.prototype, "trackWidth", void 0), Gt([f], ks.prototype, "trackMinWidth", void 0), Gt([f], ks.prototype, "trackHeight", void 0), Gt([f], ks.prototype, "trackLeft", void 0), Gt([f], ks.prototype, "trackMinHeight", void 0), Gt([f], ks.prototype, "valueTextFormatter", void 0), Gt([it({
  converter: tt
})], ks.prototype, "min", void 0), Gt([it({
  converter: tt
})], ks.prototype, "max", void 0), Gt([it({
  converter: tt
})], ks.prototype, "step", void 0), Gt([it], ks.prototype, "orientation", void 0), Gt([it], ks.prototype, "mode", void 0);
var Cs = /*#__PURE__*/function (_Se32) {
  _inherits(Cs, _Se32);
  var _super76 = _createSuper(Cs);
  function Cs() {
    _classCallCheck(this, Cs);
    return _super76.apply(this, arguments);
  }
  return _createClass(Cs);
}(Se);
var Is = /*#__PURE__*/function (_li3) {
  _inherits(Is, _li3);
  var _super77 = _createSuper(Is);
  function Is() {
    var _this118;
    _classCallCheck(this, Is);
    _this118 = _super77.apply(this, arguments), _this118.proxy = document.createElement("input");
    return _this118;
  }
  return _createClass(Is);
}(li(Cs));
var Fs = /*#__PURE__*/function (_Is) {
  _inherits(Fs, _Is);
  var _super78 = _createSuper(Fs);
  function Fs() {
    var _this119;
    _classCallCheck(this, Fs);
    _this119 = _super78.call(this), _this119.initialValue = "on", _this119.keypressHandler = function (t) {
      if (!_this119.readOnly) switch (t.key) {
        case "Enter":
        case " ":
          _this119.checked = !_this119.checked;
      }
    }, _this119.clickHandler = function (t) {
      _this119.disabled || _this119.readOnly || (_this119.checked = !_this119.checked);
    }, _this119.proxy.setAttribute("type", "checkbox");
    return _this119;
  }
  _createClass(Fs, [{
    key: "readOnlyChanged",
    value: function readOnlyChanged() {
      this.proxy instanceof HTMLInputElement && (this.proxy.readOnly = this.readOnly), this.readOnly ? this.classList.add("readonly") : this.classList.remove("readonly");
    }
  }, {
    key: "checkedChanged",
    value: function checkedChanged(t, e) {
      _get(_getPrototypeOf(Fs.prototype), "checkedChanged", this).call(this, t, e), this.checked ? this.classList.add("checked") : this.classList.remove("checked");
    }
  }]);
  return Fs;
}(Is);
Gt([it({
  attribute: "readonly",
  mode: "boolean"
})], Fs.prototype, "readOnly", void 0), Gt([f], Fs.prototype, "defaultSlottedNodes", void 0);
var Ds = /*#__PURE__*/function (_Se33) {
  _inherits(Ds, _Se33);
  var _super79 = _createSuper(Ds);
  function Ds() {
    _classCallCheck(this, Ds);
    return _super79.apply(this, arguments);
  }
  return _createClass(Ds);
}(Se);
var Ts = /*#__PURE__*/function (_Se34) {
  _inherits(Ts, _Se34);
  var _super80 = _createSuper(Ts);
  function Ts() {
    _classCallCheck(this, Ts);
    return _super80.apply(this, arguments);
  }
  return _createClass(Ts);
}(Se);
Gt([it({
  mode: "boolean"
})], Ts.prototype, "disabled", void 0);
var Ss = "horizontal";
var Os = /*#__PURE__*/function (_Se35) {
  _inherits(Os, _Se35);
  var _super81 = _createSuper(Os);
  function Os() {
    var _this120;
    _classCallCheck(this, Os);
    _this120 = _super81.apply(this, arguments), _this120.orientation = Ss, _this120.activeindicator = !0, _this120.showActiveIndicator = !0, _this120.prevActiveTabIndex = 0, _this120.activeTabIndex = 0, _this120.ticking = !1, _this120.change = function () {
      _this120.$emit("change", _this120.activetab);
    }, _this120.isDisabledElement = function (t) {
      return "true" === t.getAttribute("aria-disabled");
    }, _this120.isFocusableElement = function (t) {
      return !_this120.isDisabledElement(t);
    }, _this120.setTabs = function () {
      var t = _this120.isHorizontal() ? "gridColumn" : "gridRow";
      _this120.activeTabIndex = _this120.getActiveIndex(), _this120.showActiveIndicator = !1, _this120.tabs.forEach(function (e, i) {
        if ("tab" === e.slot) {
          var _t73 = _this120.activeTabIndex === i && _this120.isFocusableElement(e);
          _this120.activeindicator && _this120.isFocusableElement(e) && (_this120.showActiveIndicator = !0);
          var _o36 = _this120.tabIds[i],
            _s36 = _this120.tabpanelIds[i];
          e.setAttribute("id", _o36), e.setAttribute("aria-selected", _t73 ? "true" : "false"), e.setAttribute("aria-controls", _s36), e.addEventListener("click", _this120.handleTabClick), e.addEventListener("keydown", _this120.handleTabKeyDown), e.setAttribute("tabindex", _t73 ? "0" : "-1"), _t73 && (_this120.activetab = e);
        }
        e.style.gridColumn = "", e.style.gridRow = "", e.style[t] = "" + (i + 1), _this120.isHorizontal() ? e.classList.remove("vertical") : e.classList.add("vertical");
      });
    }, _this120.setTabPanels = function () {
      _this120.tabpanels.forEach(function (t, e) {
        var i = _this120.tabIds[e],
          o = _this120.tabpanelIds[e];
        t.setAttribute("id", o), t.setAttribute("aria-labelledby", i), _this120.activeTabIndex !== e ? t.setAttribute("hidden", "") : t.removeAttribute("hidden");
      });
    }, _this120.handleTabClick = function (t) {
      var e = t.currentTarget;
      1 === e.nodeType && _this120.isFocusableElement(e) && (_this120.prevActiveTabIndex = _this120.activeTabIndex, _this120.activeTabIndex = _this120.tabs.indexOf(e), _this120.setComponent());
    }, _this120.handleTabKeyDown = function (t) {
      if (_this120.isHorizontal()) switch (t.key) {
        case "ArrowLeft":
          t.preventDefault(), _this120.adjustBackward(t);
          break;
        case "ArrowRight":
          t.preventDefault(), _this120.adjustForward(t);
      } else switch (t.key) {
        case "ArrowUp":
          t.preventDefault(), _this120.adjustBackward(t);
          break;
        case "ArrowDown":
          t.preventDefault(), _this120.adjustForward(t);
      }
      switch (t.key) {
        case "Home":
          t.preventDefault(), _this120.adjust(-_this120.activeTabIndex);
          break;
        case "End":
          t.preventDefault(), _this120.adjust(_this120.tabs.length - _this120.activeTabIndex - 1);
      }
    }, _this120.adjustForward = function (t) {
      var e = _this120.tabs;
      var i = 0;
      for (i = _this120.activetab ? e.indexOf(_this120.activetab) + 1 : 1, i === e.length && (i = 0); i < e.length && e.length > 1;) {
        if (_this120.isFocusableElement(e[i])) {
          _this120.moveToTabByIndex(e, i);
          break;
        }
        if (_this120.activetab && i === e.indexOf(_this120.activetab)) break;
        i + 1 >= e.length ? i = 0 : i += 1;
      }
    }, _this120.adjustBackward = function (t) {
      var e = _this120.tabs;
      var i = 0;
      for (i = _this120.activetab ? e.indexOf(_this120.activetab) - 1 : 0, i = i < 0 ? e.length - 1 : i; i >= 0 && e.length > 1;) {
        if (_this120.isFocusableElement(e[i])) {
          _this120.moveToTabByIndex(e, i);
          break;
        }
        i - 1 < 0 ? i = e.length - 1 : i -= 1;
      }
    }, _this120.moveToTabByIndex = function (t, e) {
      var i = t[e];
      _this120.activetab = i, _this120.prevActiveTabIndex = _this120.activeTabIndex, _this120.activeTabIndex = e, i.focus(), _this120.setComponent();
    };
    return _this120;
  }
  _createClass(Os, [{
    key: "orientationChanged",
    value: function orientationChanged() {
      this.$fastController.isConnected && (this.setTabs(), this.setTabPanels(), this.handleActiveIndicatorPosition());
    }
  }, {
    key: "activeidChanged",
    value: function activeidChanged(t, e) {
      this.$fastController.isConnected && this.tabs.length <= this.tabpanels.length && (this.prevActiveTabIndex = this.tabs.findIndex(function (e) {
        return e.id === t;
      }), this.setTabs(), this.setTabPanels(), this.handleActiveIndicatorPosition());
    }
  }, {
    key: "tabsChanged",
    value: function tabsChanged() {
      this.$fastController.isConnected && this.tabs.length <= this.tabpanels.length && (this.tabIds = this.getTabIds(), this.tabpanelIds = this.getTabPanelIds(), this.setTabs(), this.setTabPanels(), this.handleActiveIndicatorPosition());
    }
  }, {
    key: "tabpanelsChanged",
    value: function tabpanelsChanged() {
      this.$fastController.isConnected && this.tabpanels.length <= this.tabs.length && (this.tabIds = this.getTabIds(), this.tabpanelIds = this.getTabPanelIds(), this.setTabs(), this.setTabPanels(), this.handleActiveIndicatorPosition());
    }
  }, {
    key: "getActiveIndex",
    value: function getActiveIndex() {
      return void 0 !== this.activeid ? -1 === this.tabIds.indexOf(this.activeid) ? 0 : this.tabIds.indexOf(this.activeid) : 0;
    }
  }, {
    key: "getTabIds",
    value: function getTabIds() {
      return this.tabs.map(function (t) {
        var e;
        return null !== (e = t.getAttribute("id")) && void 0 !== e ? e : "tab-" + _e();
      });
    }
  }, {
    key: "getTabPanelIds",
    value: function getTabPanelIds() {
      return this.tabpanels.map(function (t) {
        var e;
        return null !== (e = t.getAttribute("id")) && void 0 !== e ? e : "panel-" + _e();
      });
    }
  }, {
    key: "setComponent",
    value: function setComponent() {
      this.activeTabIndex !== this.prevActiveTabIndex && (this.activeid = this.tabIds[this.activeTabIndex], this.focusTab(), this.change());
    }
  }, {
    key: "isHorizontal",
    value: function isHorizontal() {
      return this.orientation === Ss;
    }
  }, {
    key: "handleActiveIndicatorPosition",
    value: function handleActiveIndicatorPosition() {
      this.showActiveIndicator && this.activeindicator && this.activeTabIndex !== this.prevActiveTabIndex && (this.ticking ? this.ticking = !1 : (this.ticking = !0, this.animateActiveIndicator()));
    }
  }, {
    key: "animateActiveIndicator",
    value: function animateActiveIndicator() {
      var _this121 = this;
      this.ticking = !0;
      var t = this.isHorizontal() ? "gridColumn" : "gridRow",
        e = this.isHorizontal() ? "translateX" : "translateY",
        i = this.isHorizontal() ? "offsetLeft" : "offsetTop",
        o = this.activeIndicatorRef[i];
      this.activeIndicatorRef.style[t] = "" + (this.activeTabIndex + 1);
      var s = this.activeIndicatorRef[i];
      this.activeIndicatorRef.style[t] = "" + (this.prevActiveTabIndex + 1);
      var n = s - o;
      this.activeIndicatorRef.style.transform = "".concat(e, "(").concat(n, "px)"), this.activeIndicatorRef.classList.add("activeIndicatorTransition"), this.activeIndicatorRef.addEventListener("transitionend", function () {
        _this121.ticking = !1, _this121.activeIndicatorRef.style[t] = "" + (_this121.activeTabIndex + 1), _this121.activeIndicatorRef.style.transform = e + "(0px)", _this121.activeIndicatorRef.classList.remove("activeIndicatorTransition");
      });
    }
  }, {
    key: "adjust",
    value: function adjust(t) {
      this.prevActiveTabIndex = this.activeTabIndex, this.activeTabIndex = Ne(0, this.tabs.length - 1, this.activeTabIndex + t), this.setComponent();
    }
  }, {
    key: "focusTab",
    value: function focusTab() {
      this.tabs[this.activeTabIndex].focus();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(Os.prototype), "connectedCallback", this).call(this), this.tabIds = this.getTabIds(), this.tabpanelIds = this.getTabPanelIds(), this.activeTabIndex = this.getActiveIndex();
    }
  }]);
  return Os;
}(Se);
Gt([it], Os.prototype, "orientation", void 0), Gt([it], Os.prototype, "activeid", void 0), Gt([f], Os.prototype, "tabs", void 0), Gt([f], Os.prototype, "tabpanels", void 0), Gt([it({
  mode: "boolean"
})], Os.prototype, "activeindicator", void 0), Gt([f], Os.prototype, "activeIndicatorRef", void 0), Gt([f], Os.prototype, "showActiveIndicator", void 0), Ve(Os, Nt);
var Es = /*#__PURE__*/function (_Se36) {
  _inherits(Es, _Se36);
  var _super82 = _createSuper(Es);
  function Es() {
    _classCallCheck(this, Es);
    return _super82.apply(this, arguments);
  }
  return _createClass(Es);
}(Se);
var Vs = /*#__PURE__*/function (_ai9) {
  _inherits(Vs, _ai9);
  var _super83 = _createSuper(Vs);
  function Vs() {
    var _this122;
    _classCallCheck(this, Vs);
    _this122 = _super83.apply(this, arguments), _this122.proxy = document.createElement("textarea");
    return _this122;
  }
  return _createClass(Vs);
}(ai(Es));
var Rs = "none";
var As = /*#__PURE__*/function (_Vs) {
  _inherits(As, _Vs);
  var _super84 = _createSuper(As);
  function As() {
    var _this123;
    _classCallCheck(this, As);
    _this123 = _super84.apply(this, arguments), _this123.resize = Rs, _this123.cols = 20, _this123.handleTextInput = function () {
      _this123.value = _this123.control.value;
    };
    return _this123;
  }
  _createClass(As, [{
    key: "readOnlyChanged",
    value: function readOnlyChanged() {
      this.proxy instanceof HTMLTextAreaElement && (this.proxy.readOnly = this.readOnly);
    }
  }, {
    key: "autofocusChanged",
    value: function autofocusChanged() {
      this.proxy instanceof HTMLTextAreaElement && (this.proxy.autofocus = this.autofocus);
    }
  }, {
    key: "listChanged",
    value: function listChanged() {
      this.proxy instanceof HTMLTextAreaElement && this.proxy.setAttribute("list", this.list);
    }
  }, {
    key: "maxlengthChanged",
    value: function maxlengthChanged() {
      this.proxy instanceof HTMLTextAreaElement && (this.proxy.maxLength = this.maxlength);
    }
  }, {
    key: "minlengthChanged",
    value: function minlengthChanged() {
      this.proxy instanceof HTMLTextAreaElement && (this.proxy.minLength = this.minlength);
    }
  }, {
    key: "spellcheckChanged",
    value: function spellcheckChanged() {
      this.proxy instanceof HTMLTextAreaElement && (this.proxy.spellcheck = this.spellcheck);
    }
  }, {
    key: "select",
    value: function select() {
      this.control.select(), this.$emit("select");
    }
  }, {
    key: "handleChange",
    value: function handleChange() {
      this.$emit("change");
    }
  }, {
    key: "validate",
    value: function validate() {
      _get(_getPrototypeOf(As.prototype), "validate", this).call(this, this.control);
    }
  }]);
  return As;
}(Vs);
Gt([it({
  mode: "boolean"
})], As.prototype, "readOnly", void 0), Gt([it], As.prototype, "resize", void 0), Gt([it({
  mode: "boolean"
})], As.prototype, "autofocus", void 0), Gt([it({
  attribute: "form"
})], As.prototype, "formId", void 0), Gt([it], As.prototype, "list", void 0), Gt([it({
  converter: tt
})], As.prototype, "maxlength", void 0), Gt([it({
  converter: tt
})], As.prototype, "minlength", void 0), Gt([it], As.prototype, "name", void 0), Gt([it], As.prototype, "placeholder", void 0), Gt([it({
  converter: tt,
  mode: "fromView"
})], As.prototype, "cols", void 0), Gt([it({
  converter: tt,
  mode: "fromView"
})], As.prototype, "rows", void 0), Gt([it({
  mode: "boolean"
})], As.prototype, "spellcheck", void 0), Gt([f], As.prototype, "defaultSlottedNodes", void 0), Ve(As, Qo);
var Ls = Object.freeze((_Object$freeze = {}, _defineProperty(_Object$freeze, Me.ArrowUp, _defineProperty({}, Le, -1)), _defineProperty(_Object$freeze, Me.ArrowDown, _defineProperty({}, Le, 1)), _defineProperty(_Object$freeze, Me.ArrowLeft, _defineProperty({}, Ae, (_Ae = {}, _defineProperty(_Ae, Be.ltr, -1), _defineProperty(_Ae, Be.rtl, 1), _Ae))), _defineProperty(_Object$freeze, Me.ArrowRight, _defineProperty({}, Ae, (_Ae2 = {}, _defineProperty(_Ae2, Be.ltr, 1), _defineProperty(_Ae2, Be.rtl, -1), _Ae2))), _Object$freeze));
var Ps = /*#__PURE__*/function (_Se37) {
  _inherits(Ps, _Se37);
  var _super85 = _createSuper(Ps);
  function Ps() {
    var _this124;
    _classCallCheck(this, Ps);
    _this124 = _super85.apply(this, arguments), _this124._activeIndex = 0, _this124.direction = Be.ltr, _this124.orientation = Ae;
    return _this124;
  }
  _createClass(Ps, [{
    key: "activeIndex",
    get: function get() {
      return g.track(this, "activeIndex"), this._activeIndex;
    },
    set: function set(t) {
      this.$fastController.isConnected && (this._activeIndex = je(0, this.focusableElements.length - 1, t), g.notify(this, "activeIndex"));
    }
  }, {
    key: "slottedItemsChanged",
    value: function slottedItemsChanged() {
      this.$fastController.isConnected && this.reduceFocusableElements();
    }
  }, {
    key: "clickHandler",
    value: function clickHandler(t) {
      var e;
      var i = null === (e = this.focusableElements) || void 0 === e ? void 0 : e.indexOf(t.target);
      return i > -1 && this.activeIndex !== i && this.setFocusedElement(i), !0;
    }
  }, {
    key: "childItemsChanged",
    value: function childItemsChanged(t, e) {
      this.$fastController.isConnected && this.reduceFocusableElements();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(Ps.prototype), "connectedCallback", this).call(this), this.direction = ti(this);
    }
  }, {
    key: "focusinHandler",
    value: function focusinHandler(t) {
      var e = t.relatedTarget;
      e && !this.contains(e) && this.setFocusedElement();
    }
  }, {
    key: "getDirectionalIncrementer",
    value: function getDirectionalIncrementer(t) {
      var e, i, o, s, n;
      return null !== (n = null !== (o = null === (i = null === (e = Ls[t]) || void 0 === e ? void 0 : e[this.orientation]) || void 0 === i ? void 0 : i[this.direction]) && void 0 !== o ? o : null === (s = Ls[t]) || void 0 === s ? void 0 : s[this.orientation]) && void 0 !== n ? n : 0;
    }
  }, {
    key: "keydownHandler",
    value: function keydownHandler(t) {
      var e = t.key;
      if (!(e in Me) || t.defaultPrevented || t.shiftKey) return !0;
      var i = this.getDirectionalIncrementer(e);
      if (!i) return !t.target.closest("[role=radiogroup]");
      var o = this.activeIndex + i;
      return this.focusableElements[o] && t.preventDefault(), this.setFocusedElement(o), !0;
    }
  }, {
    key: "allSlottedItems",
    get: function get() {
      return [].concat(_toConsumableArray(this.start.assignedElements()), _toConsumableArray(this.slottedItems), _toConsumableArray(this.end.assignedElements()));
    }
  }, {
    key: "reduceFocusableElements",
    value: function reduceFocusableElements() {
      var t;
      var e = null === (t = this.focusableElements) || void 0 === t ? void 0 : t[this.activeIndex];
      this.focusableElements = this.allSlottedItems.reduce(Ps.reduceFocusableItems, []);
      var i = this.focusableElements.indexOf(e);
      this.activeIndex = Math.max(0, i), this.setFocusableElements();
    }
  }, {
    key: "setFocusedElement",
    value: function setFocusedElement() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.activeIndex;
      var e;
      this.activeIndex = t, this.setFocusableElements(), null === (e = this.focusableElements[this.activeIndex]) || void 0 === e || e.focus();
    }
  }, {
    key: "setFocusableElements",
    value: function setFocusableElements() {
      var _this125 = this;
      this.$fastController.isConnected && this.focusableElements.length > 0 && this.focusableElements.forEach(function (t, e) {
        t.tabIndex = _this125.activeIndex === e ? 0 : -1;
      });
    }
  }], [{
    key: "reduceFocusableItems",
    value: function reduceFocusableItems(t, e) {
      var i, o, s, n;
      var r = "radio" === e.getAttribute("role"),
        a = null === (o = null === (i = e.$fastController) || void 0 === i ? void 0 : i.definition.shadowOptions) || void 0 === o ? void 0 : o.delegatesFocus,
        l = Array.from(null !== (n = null === (s = e.shadowRoot) || void 0 === s ? void 0 : s.querySelectorAll("*")) && void 0 !== n ? n : []).some(function (t) {
          return Ro(t);
        });
      return e.hasAttribute("disabled") || e.hasAttribute("hidden") || !(Ro(e) || r || a || l) ? e.childElementCount ? t.concat(Array.from(e.children).reduce(Ps.reduceFocusableItems, [])) : t : (t.push(e), t);
    }
  }]);
  return Ps;
}(Se);
Gt([f], Ps.prototype, "direction", void 0), Gt([it], Ps.prototype, "orientation", void 0), Gt([f], Ps.prototype, "slottedItems", void 0), Gt([f], Ps.prototype, "slottedLabel", void 0), Gt([f], Ps.prototype, "childItems", void 0);
var zs = /*#__PURE__*/_createClass(function zs() {
  _classCallCheck(this, zs);
});
Gt([it({
  attribute: "aria-labelledby"
})], zs.prototype, "ariaLabelledby", void 0), Gt([it({
  attribute: "aria-label"
})], zs.prototype, "ariaLabel", void 0), Ve(zs, Qe), Ve(Ps, Nt, zs);
var Hs = "top",
  Ms = "right",
  Bs = "bottom",
  Ns = "left",
  js = "start",
  Us = "end",
  qs = "top-left",
  _s = "top-right",
  Gs = "bottom-left",
  Ws = "bottom-right",
  Ks = "top-start",
  Xs = "top-end",
  Ys = "bottom-start",
  Qs = "bottom-end";
var Zs = /*#__PURE__*/function (_Se38) {
  _inherits(Zs, _Se38);
  var _super86 = _createSuper(Zs);
  function Zs() {
    var _this126;
    _classCallCheck(this, Zs);
    _this126 = _super86.apply(this, arguments), _this126.anchor = "", _this126.delay = 300, _this126.autoUpdateMode = "anchor", _this126.anchorElement = null, _this126.viewportElement = null, _this126.verticalPositioningMode = "dynamic", _this126.horizontalPositioningMode = "dynamic", _this126.horizontalInset = "false", _this126.verticalInset = "false", _this126.horizontalScaling = "content", _this126.verticalScaling = "content", _this126.verticalDefaultPosition = void 0, _this126.horizontalDefaultPosition = void 0, _this126.tooltipVisible = !1, _this126.currentDirection = Be.ltr, _this126.showDelayTimer = null, _this126.hideDelayTimer = null, _this126.isAnchorHoveredFocused = !1, _this126.isRegionHovered = !1, _this126.handlePositionChange = function (t) {
      _this126.classList.toggle("top", "start" === _this126.region.verticalPosition), _this126.classList.toggle("bottom", "end" === _this126.region.verticalPosition), _this126.classList.toggle("inset-top", "insetStart" === _this126.region.verticalPosition), _this126.classList.toggle("inset-bottom", "insetEnd" === _this126.region.verticalPosition), _this126.classList.toggle("center-vertical", "center" === _this126.region.verticalPosition), _this126.classList.toggle("left", "start" === _this126.region.horizontalPosition), _this126.classList.toggle("right", "end" === _this126.region.horizontalPosition), _this126.classList.toggle("inset-left", "insetStart" === _this126.region.horizontalPosition), _this126.classList.toggle("inset-right", "insetEnd" === _this126.region.horizontalPosition), _this126.classList.toggle("center-horizontal", "center" === _this126.region.horizontalPosition);
    }, _this126.handleRegionMouseOver = function (t) {
      _this126.isRegionHovered = !0;
    }, _this126.handleRegionMouseOut = function (t) {
      _this126.isRegionHovered = !1, _this126.startHideDelayTimer();
    }, _this126.handleAnchorMouseOver = function (t) {
      _this126.tooltipVisible ? _this126.isAnchorHoveredFocused = !0 : _this126.startShowDelayTimer();
    }, _this126.handleAnchorMouseOut = function (t) {
      _this126.isAnchorHoveredFocused = !1, _this126.clearShowDelayTimer(), _this126.startHideDelayTimer();
    }, _this126.handleAnchorFocusIn = function (t) {
      _this126.startShowDelayTimer();
    }, _this126.handleAnchorFocusOut = function (t) {
      _this126.isAnchorHoveredFocused = !1, _this126.clearShowDelayTimer(), _this126.startHideDelayTimer();
    }, _this126.startHideDelayTimer = function () {
      _this126.clearHideDelayTimer(), _this126.tooltipVisible && (_this126.hideDelayTimer = window.setTimeout(function () {
        _this126.updateTooltipVisibility();
      }, 60));
    }, _this126.clearHideDelayTimer = function () {
      null !== _this126.hideDelayTimer && (clearTimeout(_this126.hideDelayTimer), _this126.hideDelayTimer = null);
    }, _this126.startShowDelayTimer = function () {
      _this126.isAnchorHoveredFocused || (_this126.delay > 1 ? null === _this126.showDelayTimer && (_this126.showDelayTimer = window.setTimeout(function () {
        _this126.startHover();
      }, _this126.delay)) : _this126.startHover());
    }, _this126.startHover = function () {
      _this126.isAnchorHoveredFocused = !0, _this126.updateTooltipVisibility();
    }, _this126.clearShowDelayTimer = function () {
      null !== _this126.showDelayTimer && (clearTimeout(_this126.showDelayTimer), _this126.showDelayTimer = null);
    }, _this126.getAnchor = function () {
      var t = _this126.getRootNode();
      return t instanceof ShadowRoot ? t.getElementById(_this126.anchor) : document.getElementById(_this126.anchor);
    }, _this126.handleDocumentKeydown = function (t) {
      if (!t.defaultPrevented && _this126.tooltipVisible) switch (t.key) {
        case "Escape":
          _this126.isAnchorHoveredFocused = !1, _this126.updateTooltipVisibility(), _this126.$emit("dismiss");
      }
    }, _this126.updateTooltipVisibility = function () {
      if (!1 === _this126.visible) _this126.hideTooltip();else {
        if (!0 === _this126.visible) return void _this126.showTooltip();
        if (_this126.isAnchorHoveredFocused || _this126.isRegionHovered) return void _this126.showTooltip();
        _this126.hideTooltip();
      }
    }, _this126.showTooltip = function () {
      _this126.tooltipVisible || (_this126.currentDirection = ti(_assertThisInitialized(_this126)), _this126.tooltipVisible = !0, document.addEventListener("keydown", _this126.handleDocumentKeydown), d.queueUpdate(_this126.setRegionProps));
    }, _this126.hideTooltip = function () {
      _this126.tooltipVisible && (_this126.clearHideDelayTimer(), null !== _this126.region && void 0 !== _this126.region && (_this126.region.removeEventListener("positionchange", _this126.handlePositionChange), _this126.region.viewportElement = null, _this126.region.anchorElement = null, _this126.region.removeEventListener("mouseover", _this126.handleRegionMouseOver), _this126.region.removeEventListener("mouseout", _this126.handleRegionMouseOut)), document.removeEventListener("keydown", _this126.handleDocumentKeydown), _this126.tooltipVisible = !1);
    }, _this126.setRegionProps = function () {
      _this126.tooltipVisible && (_this126.region.viewportElement = _this126.viewportElement, _this126.region.anchorElement = _this126.anchorElement, _this126.region.addEventListener("positionchange", _this126.handlePositionChange), _this126.region.addEventListener("mouseover", _this126.handleRegionMouseOver, {
        passive: !0
      }), _this126.region.addEventListener("mouseout", _this126.handleRegionMouseOut, {
        passive: !0
      }));
    };
    return _this126;
  }
  _createClass(Zs, [{
    key: "visibleChanged",
    value: function visibleChanged() {
      this.$fastController.isConnected && (this.updateTooltipVisibility(), this.updateLayout());
    }
  }, {
    key: "anchorChanged",
    value: function anchorChanged() {
      this.$fastController.isConnected && (this.anchorElement = this.getAnchor());
    }
  }, {
    key: "positionChanged",
    value: function positionChanged() {
      this.$fastController.isConnected && this.updateLayout();
    }
  }, {
    key: "anchorElementChanged",
    value: function anchorElementChanged(t) {
      var _this127 = this;
      if (this.$fastController.isConnected) {
        if (null != t && (t.removeEventListener("mouseover", this.handleAnchorMouseOver), t.removeEventListener("mouseout", this.handleAnchorMouseOut), t.removeEventListener("focusin", this.handleAnchorFocusIn), t.removeEventListener("focusout", this.handleAnchorFocusOut)), null !== this.anchorElement && void 0 !== this.anchorElement) {
          this.anchorElement.addEventListener("mouseover", this.handleAnchorMouseOver, {
            passive: !0
          }), this.anchorElement.addEventListener("mouseout", this.handleAnchorMouseOut, {
            passive: !0
          }), this.anchorElement.addEventListener("focusin", this.handleAnchorFocusIn, {
            passive: !0
          }), this.anchorElement.addEventListener("focusout", this.handleAnchorFocusOut, {
            passive: !0
          });
          var _t74 = this.anchorElement.id;
          null !== this.anchorElement.parentElement && this.anchorElement.parentElement.querySelectorAll(":hover").forEach(function (e) {
            e.id === _t74 && _this127.startShowDelayTimer();
          });
        }
        null !== this.region && void 0 !== this.region && this.tooltipVisible && (this.region.anchorElement = this.anchorElement), this.updateLayout();
      }
    }
  }, {
    key: "viewportElementChanged",
    value: function viewportElementChanged() {
      null !== this.region && void 0 !== this.region && (this.region.viewportElement = this.viewportElement), this.updateLayout();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(Zs.prototype), "connectedCallback", this).call(this), this.anchorElement = this.getAnchor(), this.updateTooltipVisibility();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.hideTooltip(), this.clearShowDelayTimer(), this.clearHideDelayTimer(), _get(_getPrototypeOf(Zs.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    key: "updateLayout",
    value: function updateLayout() {
      switch (this.verticalPositioningMode = "locktodefault", this.horizontalPositioningMode = "locktodefault", this.position) {
        case Hs:
        case Bs:
          this.verticalDefaultPosition = this.position, this.horizontalDefaultPosition = "center";
          break;
        case Ms:
        case Ns:
        case js:
        case Us:
          this.verticalDefaultPosition = "center", this.horizontalDefaultPosition = this.position;
          break;
        case qs:
          this.verticalDefaultPosition = "top", this.horizontalDefaultPosition = "left";
          break;
        case _s:
          this.verticalDefaultPosition = "top", this.horizontalDefaultPosition = "right";
          break;
        case Gs:
          this.verticalDefaultPosition = "bottom", this.horizontalDefaultPosition = "left";
          break;
        case Ws:
          this.verticalDefaultPosition = "bottom", this.horizontalDefaultPosition = "right";
          break;
        case Ks:
          this.verticalDefaultPosition = "top", this.horizontalDefaultPosition = "start";
          break;
        case Xs:
          this.verticalDefaultPosition = "top", this.horizontalDefaultPosition = "end";
          break;
        case Ys:
          this.verticalDefaultPosition = "bottom", this.horizontalDefaultPosition = "start";
          break;
        case Qs:
          this.verticalDefaultPosition = "bottom", this.horizontalDefaultPosition = "end";
          break;
        default:
          this.verticalPositioningMode = "dynamic", this.horizontalPositioningMode = "dynamic", this.verticalDefaultPosition = void 0, this.horizontalDefaultPosition = "center";
      }
    }
  }]);
  return Zs;
}(Se);
Gt([it({
  mode: "boolean"
})], Zs.prototype, "visible", void 0), Gt([it], Zs.prototype, "anchor", void 0), Gt([it], Zs.prototype, "delay", void 0), Gt([it], Zs.prototype, "position", void 0), Gt([it({
  attribute: "auto-update-mode"
})], Zs.prototype, "autoUpdateMode", void 0), Gt([it({
  attribute: "horizontal-viewport-lock"
})], Zs.prototype, "horizontalViewportLock", void 0), Gt([it({
  attribute: "vertical-viewport-lock"
})], Zs.prototype, "verticalViewportLock", void 0), Gt([f], Zs.prototype, "anchorElement", void 0), Gt([f], Zs.prototype, "viewportElement", void 0), Gt([f], Zs.prototype, "verticalPositioningMode", void 0), Gt([f], Zs.prototype, "horizontalPositioningMode", void 0), Gt([f], Zs.prototype, "horizontalInset", void 0), Gt([f], Zs.prototype, "verticalInset", void 0), Gt([f], Zs.prototype, "horizontalScaling", void 0), Gt([f], Zs.prototype, "verticalScaling", void 0), Gt([f], Zs.prototype, "verticalDefaultPosition", void 0), Gt([f], Zs.prototype, "horizontalDefaultPosition", void 0), Gt([f], Zs.prototype, "tooltipVisible", void 0), Gt([f], Zs.prototype, "currentDirection", void 0);
function Js(t) {
  return Pe(t) && "treeitem" === t.getAttribute("role");
}
var tn = /*#__PURE__*/function (_Se39) {
  _inherits(tn, _Se39);
  var _super87 = _createSuper(tn);
  function tn() {
    var _this128;
    _classCallCheck(this, tn);
    _this128 = _super87.apply(this, arguments), _this128.expanded = !1, _this128.focusable = !1, _this128.isNestedItem = function () {
      return Js(_this128.parentElement);
    }, _this128.handleExpandCollapseButtonClick = function (t) {
      _this128.disabled || t.defaultPrevented || (_this128.expanded = !_this128.expanded);
    }, _this128.handleFocus = function (t) {
      _this128.setAttribute("tabindex", "0");
    }, _this128.handleBlur = function (t) {
      _this128.setAttribute("tabindex", "-1");
    };
    return _this128;
  }
  _createClass(tn, [{
    key: "expandedChanged",
    value: function expandedChanged() {
      this.$fastController.isConnected && this.$emit("expanded-change", this);
    }
  }, {
    key: "selectedChanged",
    value: function selectedChanged() {
      this.$fastController.isConnected && this.$emit("selected-change", this);
    }
  }, {
    key: "itemsChanged",
    value: function itemsChanged(t, e) {
      this.$fastController.isConnected && this.items.forEach(function (t) {
        Js(t) && (t.nested = !0);
      });
    }
  }, {
    key: "childItemLength",
    value: function childItemLength() {
      var t = this.childItems.filter(function (t) {
        return Js(t);
      });
      return t ? t.length : 0;
    }
  }], [{
    key: "focusItem",
    value: function focusItem(t) {
      t.focusable = !0, t.focus();
    }
  }]);
  return tn;
}(Se);
Gt([it({
  mode: "boolean"
})], tn.prototype, "expanded", void 0), Gt([it({
  mode: "boolean"
})], tn.prototype, "selected", void 0), Gt([it({
  mode: "boolean"
})], tn.prototype, "disabled", void 0), Gt([f], tn.prototype, "focusable", void 0), Gt([f], tn.prototype, "childItems", void 0), Gt([f], tn.prototype, "items", void 0), Gt([f], tn.prototype, "nested", void 0), Gt([f], tn.prototype, "renderCollapsedChildren", void 0), Ve(tn, Nt);
var en = /*#__PURE__*/function (_Se40) {
  _inherits(en, _Se40);
  var _super88 = _createSuper(en);
  function en() {
    var _this129;
    _classCallCheck(this, en);
    _this129 = _super88.apply(this, arguments), _this129.currentFocused = null, _this129.handleFocus = function (t) {
      if (!(_this129.slottedTreeItems.length < 1)) return t.target === _assertThisInitialized(_this129) ? (null === _this129.currentFocused && (_this129.currentFocused = _this129.getValidFocusableItem()), void (null !== _this129.currentFocused && tn.focusItem(_this129.currentFocused))) : void (_this129.contains(t.target) && (_this129.setAttribute("tabindex", "-1"), _this129.currentFocused = t.target));
    }, _this129.handleBlur = function (t) {
      t.target instanceof HTMLElement && (null === t.relatedTarget || !_this129.contains(t.relatedTarget)) && _this129.setAttribute("tabindex", "0");
    }, _this129.handleKeyDown = function (t) {
      if (t.defaultPrevented) return;
      if (_this129.slottedTreeItems.length < 1) return !0;
      var e = _this129.getVisibleNodes();
      switch (t.key) {
        case "Home":
          return void (e.length && tn.focusItem(e[0]));
        case "End":
          return void (e.length && tn.focusItem(e[e.length - 1]));
        case "ArrowLeft":
          if (t.target && _this129.isFocusableElement(t.target)) {
            var _e80 = t.target;
            _e80 instanceof tn && _e80.childItemLength() > 0 && _e80.expanded ? _e80.expanded = !1 : _e80 instanceof tn && _e80.parentElement instanceof tn && tn.focusItem(_e80.parentElement);
          }
          return !1;
        case "ArrowRight":
          if (t.target && _this129.isFocusableElement(t.target)) {
            var _e81 = t.target;
            _e81 instanceof tn && _e81.childItemLength() > 0 && !_e81.expanded ? _e81.expanded = !0 : _e81 instanceof tn && _e81.childItemLength() > 0 && _this129.focusNextNode(1, t.target);
          }
          return;
        case "ArrowDown":
          return void (t.target && _this129.isFocusableElement(t.target) && _this129.focusNextNode(1, t.target));
        case "ArrowUp":
          return void (t.target && _this129.isFocusableElement(t.target) && _this129.focusNextNode(-1, t.target));
        case "Enter":
          return void _this129.handleClick(t);
      }
      return !0;
    }, _this129.handleSelectedChange = function (t) {
      if (t.defaultPrevented) return;
      if (!(t.target instanceof Element && Js(t.target))) return !0;
      var e = t.target;
      e.selected ? (_this129.currentSelected && _this129.currentSelected !== e && (_this129.currentSelected.selected = !1), _this129.currentSelected = e) : e.selected || _this129.currentSelected !== e || (_this129.currentSelected = null);
    }, _this129.setItems = function () {
      var t = _this129.treeView.querySelector("[aria-selected='true']");
      _this129.currentSelected = t, null !== _this129.currentFocused && _this129.contains(_this129.currentFocused) || (_this129.currentFocused = _this129.getValidFocusableItem()), _this129.nested = _this129.checkForNestedItems();
      _this129.getVisibleNodes().forEach(function (t) {
        Js(t) && (t.nested = _this129.nested);
      });
    }, _this129.isFocusableElement = function (t) {
      return Js(t);
    }, _this129.isSelectedElement = function (t) {
      return t.selected;
    };
    return _this129;
  }
  _createClass(en, [{
    key: "slottedTreeItemsChanged",
    value: function slottedTreeItemsChanged() {
      this.$fastController.isConnected && this.setItems();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this130 = this;
      _get(_getPrototypeOf(en.prototype), "connectedCallback", this).call(this), this.setAttribute("tabindex", "0"), d.queueUpdate(function () {
        _this130.setItems();
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(t) {
      if (t.defaultPrevented) return;
      if (!(t.target instanceof Element && Js(t.target))) return !0;
      var e = t.target;
      e.disabled || (e.selected = !e.selected);
    }
  }, {
    key: "focusNextNode",
    value: function focusNextNode(t, e) {
      var i = this.getVisibleNodes();
      if (!i) return;
      var o = i[i.indexOf(e) + t];
      Pe(o) && tn.focusItem(o);
    }
  }, {
    key: "getValidFocusableItem",
    value: function getValidFocusableItem() {
      var t = this.getVisibleNodes();
      var e = t.findIndex(this.isSelectedElement);
      return -1 === e && (e = t.findIndex(this.isFocusableElement)), -1 !== e ? t[e] : null;
    }
  }, {
    key: "checkForNestedItems",
    value: function checkForNestedItems() {
      return this.slottedTreeItems.some(function (t) {
        return Js(t) && t.querySelector("[role='treeitem']");
      });
    }
  }, {
    key: "getVisibleNodes",
    value: function getVisibleNodes() {
      return function (t, e) {
        if (!t || !e || !Pe(t)) return;
        return Array.from(t.querySelectorAll(e)).filter(function (t) {
          return null !== t.offsetParent;
        });
      }(this, "[role='treeitem']") || [];
    }
  }]);
  return en;
}(Se);
Gt([it({
  attribute: "render-collapsed-nodes"
})], en.prototype, "renderCollapsedNodes", void 0), Gt([f], en.prototype, "currentSelected", void 0), Gt([f], en.prototype, "slottedTreeItems", void 0);
var on = /*#__PURE__*/function (_ref3) {
  _inherits(on, _ref3);
  var _super89 = _createSuper(on);
  function on(t, e) {
    var _this131;
    _classCallCheck(this, on);
    _this131 = _super89.call(this, t), _this131.styles = e;
    return _this131;
  }
  _createClass(on, [{
    key: "constructListener",
    value: function constructListener(t) {
      var e = !1;
      var i = this.styles;
      return function () {
        var o = this.matches;
        o && !e ? (t.$fastController.addStyles(i), e = o) : !o && e && (t.$fastController.removeStyles(i), e = o);
      };
    }
  }, {
    key: "unbind",
    value: function unbind(t) {
      _get(_getPrototypeOf(on.prototype), "unbind", this).call(this, t), t.$fastController.removeStyles(this.styles);
    }
  }], [{
    key: "with",
    value: function _with(t) {
      return function (e) {
        return new on(t, e);
      };
    }
  }]);
  return on;
}( /*#__PURE__*/function () {
  function _class6(t) {
    _classCallCheck(this, _class6);
    this.listenerCache = new WeakMap(), this.query = t;
  }
  _createClass(_class6, [{
    key: "bind",
    value: function bind(t) {
      var e = this.query,
        i = this.constructListener(t);
      i.bind(e)(), e.addListener(i), this.listenerCache.set(t, i);
    }
  }, {
    key: "unbind",
    value: function unbind(t) {
      var e = this.listenerCache.get(t);
      e && (this.query.removeListener(e), this.listenerCache.delete(t));
    }
  }]);
  return _class6;
}());
var sn = on.with(window.matchMedia("(forced-colors)"));
on.with(window.matchMedia("(prefers-color-scheme: dark)")), on.with(window.matchMedia("(prefers-color-scheme: light)"));
var nn = /*#__PURE__*/function () {
  function nn(t, e, i) {
    _classCallCheck(this, nn);
    this.propertyName = t, this.value = e, this.styles = i;
  }
  _createClass(nn, [{
    key: "bind",
    value: function bind(t) {
      g.getNotifier(t).subscribe(this, this.propertyName), this.handleChange(t, this.propertyName);
    }
  }, {
    key: "unbind",
    value: function unbind(t) {
      g.getNotifier(t).unsubscribe(this, this.propertyName), t.$fastController.removeStyles(this.styles);
    }
  }, {
    key: "handleChange",
    value: function handleChange(t, e) {
      t[e] === this.value ? t.$fastController.addStyles(this.styles) : t.$fastController.removeStyles(this.styles);
    }
  }]);
  return nn;
}();
function rn(t) {
  return ":host([hidden]){display:none}:host{display:".concat(t, "}");
}
var an = function () {
  if ("boolean" == typeof ze) return ze;
  if ("undefined" == typeof window || !window.document || !window.document.createElement) return ze = !1, ze;
  var t = document.createElement("style"),
    e = function () {
      var t = document.querySelector('meta[property="csp-nonce"]');
      return t ? t.getAttribute("content") : null;
    }();
  null !== e && t.setAttribute("nonce", e), document.head.appendChild(t);
  try {
    t.sheet.insertRule("foo:focus-visible {color:inherit}", 0), ze = !0;
  } catch (t) {
    ze = !1;
  } finally {
    document.head.removeChild(t);
  }
  return ze;
}() ? "focus-visible" : "focus";
function ln(t, e, i) {
  return isNaN(t) || t <= e ? e : t >= i ? i : t;
}
function cn(t, e, i) {
  return isNaN(t) || t <= e ? 0 : t >= i ? 1 : t / (i - e);
}
function hn(t, e, i) {
  return isNaN(t) ? e : e + t * (i - e);
}
function dn(t, e, i) {
  return isNaN(t) || t <= 0 ? e : t >= 1 ? i : e + t * (i - e);
}
function un(t, e) {
  var i = Math.pow(10, e);
  return Math.round(t * i) / i;
}
var pn = /*#__PURE__*/function () {
  function pn(t, e, i) {
    _classCallCheck(this, pn);
    this.h = t, this.s = e, this.l = i;
  }
  _createClass(pn, [{
    key: "equalValue",
    value: function equalValue(t) {
      return this.h === t.h && this.s === t.s && this.l === t.l;
    }
  }, {
    key: "roundToPrecision",
    value: function roundToPrecision(t) {
      return new pn(un(this.h, t), un(this.s, t), un(this.l, t));
    }
  }, {
    key: "toObject",
    value: function toObject() {
      return {
        h: this.h,
        s: this.s,
        l: this.l
      };
    }
  }], [{
    key: "fromObject",
    value: function fromObject(t) {
      return !t || isNaN(t.h) || isNaN(t.s) || isNaN(t.l) ? null : new pn(t.h, t.s, t.l);
    }
  }]);
  return pn;
}();
var gn = /*#__PURE__*/function () {
  function gn(t, e, i) {
    _classCallCheck(this, gn);
    this.l = t, this.a = e, this.b = i;
  }
  _createClass(gn, [{
    key: "equalValue",
    value: function equalValue(t) {
      return this.l === t.l && this.a === t.a && this.b === t.b;
    }
  }, {
    key: "roundToPrecision",
    value: function roundToPrecision(t) {
      return new gn(un(this.l, t), un(this.a, t), un(this.b, t));
    }
  }, {
    key: "toObject",
    value: function toObject() {
      return {
        l: this.l,
        a: this.a,
        b: this.b
      };
    }
  }], [{
    key: "fromObject",
    value: function fromObject(t) {
      return !t || isNaN(t.l) || isNaN(t.a) || isNaN(t.b) ? null : new gn(t.l, t.a, t.b);
    }
  }]);
  return gn;
}();
gn.epsilon = 216 / 24389, gn.kappa = 24389 / 27;
var fn = /*#__PURE__*/function () {
  function fn(t, e, i, o) {
    _classCallCheck(this, fn);
    this.r = t, this.g = e, this.b = i, this.a = "number" != typeof o || isNaN(o) ? 1 : o;
  }
  _createClass(fn, [{
    key: "equalValue",
    value: function equalValue(t) {
      return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
    }
  }, {
    key: "toStringHexRGB",
    value: function toStringHexRGB() {
      return "#" + [this.r, this.g, this.b].map(this.formatHexValue).join("");
    }
  }, {
    key: "toStringHexRGBA",
    value: function toStringHexRGBA() {
      return this.toStringHexRGB() + this.formatHexValue(this.a);
    }
  }, {
    key: "toStringHexARGB",
    value: function toStringHexARGB() {
      return "#" + [this.a, this.r, this.g, this.b].map(this.formatHexValue).join("");
    }
  }, {
    key: "toStringWebRGB",
    value: function toStringWebRGB() {
      return "rgb(".concat(Math.round(hn(this.r, 0, 255)), ",").concat(Math.round(hn(this.g, 0, 255)), ",").concat(Math.round(hn(this.b, 0, 255)), ")");
    }
  }, {
    key: "toStringWebRGBA",
    value: function toStringWebRGBA() {
      return "rgba(".concat(Math.round(hn(this.r, 0, 255)), ",").concat(Math.round(hn(this.g, 0, 255)), ",").concat(Math.round(hn(this.b, 0, 255)), ",").concat(ln(this.a, 0, 1), ")");
    }
  }, {
    key: "roundToPrecision",
    value: function roundToPrecision(t) {
      return new fn(un(this.r, t), un(this.g, t), un(this.b, t), un(this.a, t));
    }
  }, {
    key: "clamp",
    value: function clamp() {
      return new fn(ln(this.r, 0, 1), ln(this.g, 0, 1), ln(this.b, 0, 1), ln(this.a, 0, 1));
    }
  }, {
    key: "toObject",
    value: function toObject() {
      return {
        r: this.r,
        g: this.g,
        b: this.b,
        a: this.a
      };
    }
  }, {
    key: "formatHexValue",
    value: function formatHexValue(t) {
      return function (t) {
        var e = Math.round(ln(t, 0, 255)).toString(16);
        return 1 === e.length ? "0" + e : e;
      }(hn(t, 0, 255));
    }
  }], [{
    key: "fromObject",
    value: function fromObject(t) {
      return !t || isNaN(t.r) || isNaN(t.g) || isNaN(t.b) ? null : new fn(t.r, t.g, t.b, t.a);
    }
  }]);
  return fn;
}();
var mn = /*#__PURE__*/function () {
  function mn(t, e, i) {
    _classCallCheck(this, mn);
    this.x = t, this.y = e, this.z = i;
  }
  _createClass(mn, [{
    key: "equalValue",
    value: function equalValue(t) {
      return this.x === t.x && this.y === t.y && this.z === t.z;
    }
  }, {
    key: "roundToPrecision",
    value: function roundToPrecision(t) {
      return new mn(un(this.x, t), un(this.y, t), un(this.z, t));
    }
  }, {
    key: "toObject",
    value: function toObject() {
      return {
        x: this.x,
        y: this.y,
        z: this.z
      };
    }
  }], [{
    key: "fromObject",
    value: function fromObject(t) {
      return !t || isNaN(t.x) || isNaN(t.y) || isNaN(t.z) ? null : new mn(t.x, t.y, t.z);
    }
  }]);
  return mn;
}();
function vn(t) {
  function e(t) {
    return t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  }
  return function (t) {
    return .2126 * t.r + .7152 * t.g + .0722 * t.b;
  }(new fn(e(t.r), e(t.g), e(t.b), 1));
}
function bn(t, e, i) {
  return i - e == 0 ? 0 : (t - e) / (i - e);
}
function yn(t, e, i) {
  return (bn(t.r, e.r, i.r) + bn(t.g, e.g, i.g) + bn(t.b, e.b, i.b)) / 3;
}
function xn(t) {
  var e = Math.max(t.r, t.g, t.b),
    i = Math.min(t.r, t.g, t.b),
    o = e - i;
  var s = 0;
  0 !== o && (s = e === t.r ? (t.g - t.b) / o % 6 * 60 : e === t.g ? 60 * ((t.b - t.r) / o + 2) : 60 * ((t.r - t.g) / o + 4)), s < 0 && (s += 360);
  var n = (e + i) / 2;
  var r = 0;
  return 0 !== o && (r = o / (1 - Math.abs(2 * n - 1))), new pn(s, r, n);
}
function $n(t) {
  return function (t) {
    function e(t) {
      return t > gn.epsilon ? Math.pow(t, 1 / 3) : (gn.kappa * t + 16) / 116;
    }
    var i = e(t.x / mn.whitePoint.x),
      o = e(t.y / mn.whitePoint.y),
      s = e(t.z / mn.whitePoint.z);
    return new gn(116 * o - 16, 500 * (i - o), 200 * (o - s));
  }(function (t) {
    function e(t) {
      return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
    }
    var i = e(t.r),
      o = e(t.g),
      s = e(t.b);
    return new mn(.4124564 * i + .3575761 * o + .1804375 * s, .2126729 * i + .7151522 * o + .072175 * s, .0193339 * i + .119192 * o + .9503041 * s);
  }(t));
}
function wn(t) {
  var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return function (t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    function i(t) {
      return t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055;
    }
    var o = i(3.2404542 * t.x - 1.5371385 * t.y - .4985314 * t.z),
      s = i(-.969266 * t.x + 1.8760108 * t.y + .041556 * t.z),
      n = i(.0556434 * t.x - .2040259 * t.y + 1.0572252 * t.z);
    return new fn(o, s, n, e);
  }(function (t) {
    var e = (t.l + 16) / 116,
      i = e + t.a / 500,
      o = e - t.b / 200,
      s = Math.pow(i, 3),
      n = Math.pow(e, 3),
      r = Math.pow(o, 3);
    var a = 0;
    a = s > gn.epsilon ? s : (116 * i - 16) / gn.kappa;
    var l = 0;
    l = t.l > gn.epsilon * gn.kappa ? n : t.l / gn.kappa;
    var c = 0;
    return c = r > gn.epsilon ? r : (116 * o - 16) / gn.kappa, a = mn.whitePoint.x * a, l = mn.whitePoint.y * l, c = mn.whitePoint.z * c, new mn(a, l, c);
  }(t), e);
}
var kn, Cn;
function In(t, e, i) {
  return isNaN(t) || t <= 0 ? e : t >= 1 ? i : new fn(dn(t, e.r, i.r), dn(t, e.g, i.g), dn(t, e.b, i.b), dn(t, e.a, i.a));
}
mn.whitePoint = new mn(.95047, 1, 1.08883), function (t) {
  t[t.Burn = 0] = "Burn", t[t.Color = 1] = "Color", t[t.Darken = 2] = "Darken", t[t.Dodge = 3] = "Dodge", t[t.Lighten = 4] = "Lighten", t[t.Multiply = 5] = "Multiply", t[t.Overlay = 6] = "Overlay", t[t.Screen = 7] = "Screen";
}(kn || (kn = {})), function (t) {
  t[t.RGB = 0] = "RGB", t[t.HSL = 1] = "HSL", t[t.HSV = 2] = "HSV", t[t.XYZ = 3] = "XYZ", t[t.LAB = 4] = "LAB", t[t.LCH = 5] = "LCH";
}(Cn || (Cn = {}));
var Fn = /^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;
function Dn(t) {
  var e = Fn.exec(t);
  if (null === e) return null;
  var i = e[1];
  if (3 === i.length) {
    var _t75 = i.charAt(0),
      _e82 = i.charAt(1),
      _o37 = i.charAt(2);
    i = _t75.concat(_t75, _e82, _e82, _o37, _o37);
  }
  var o = parseInt(i, 16);
  return isNaN(o) ? null : new fn(cn((16711680 & o) >>> 16, 0, 255), cn((65280 & o) >>> 8, 0, 255), cn(255 & o, 0, 255), 1);
}
function Tn(t, e) {
  var i = t.relativeLuminance > e.relativeLuminance ? t : e,
    o = t.relativeLuminance > e.relativeLuminance ? e : t;
  return (i.relativeLuminance + .05) / (o.relativeLuminance + .05);
}
var Sn = Object.freeze({
  create: function create(t, e, i) {
    return new On(t, e, i);
  },
  from: function from(t) {
    return new On(t.r, t.g, t.b);
  }
});
var On = /*#__PURE__*/function (_fn) {
  _inherits(On, _fn);
  var _super90 = _createSuper(On);
  function On(t, e, i) {
    var _this132;
    _classCallCheck(this, On);
    _this132 = _super90.call(this, t, e, i, 1), _this132.toColorString = _this132.toStringHexRGB, _this132.contrast = Tn.bind(null, _assertThisInitialized(_this132)), _this132.createCSS = _this132.toColorString, _this132.relativeLuminance = vn(_assertThisInitialized(_this132));
    return _this132;
  }
  _createClass(On, null, [{
    key: "fromObject",
    value: function fromObject(t) {
      return new On(t.r, t.g, t.b);
    }
  }]);
  return On;
}(fn);
var En = (-.1 + Math.sqrt(.21)) / 2;
function Vn(t) {
  return t.relativeLuminance <= En;
}
function Rn(t) {
  return Vn(t) ? -1 : 1;
}
var An = {
  stepContrast: 1.03,
  stepContrastRamp: .03,
  preserveSource: !1
};
var Ln = Object.freeze({
  create: function create(t, e, i) {
    return "number" == typeof t ? Ln.from(Sn.create(t, e, i)) : Ln.from(t);
  },
  from: function from(t, e) {
    return function (t) {
      var e = {
        r: 0,
        g: 0,
        b: 0,
        toColorString: function toColorString() {
          return "";
        },
        contrast: function contrast() {
          return 0;
        },
        relativeLuminance: 0
      };
      for (var _i58 in e) {
        if (_typeof(e[_i58]) != _typeof(t[_i58])) return !1;
      }
      return !0;
    }(t) ? Pn.from(t, e) : Pn.from(Sn.create(t.r, t.g, t.b), e);
  }
});
var Pn = /*#__PURE__*/function () {
  function Pn(t, e) {
    _classCallCheck(this, Pn);
    this.closestIndexCache = new Map(), this.source = t, this.swatches = e, this.reversedSwatches = Object.freeze(_toConsumableArray(this.swatches).reverse()), this.lastIndex = this.swatches.length - 1;
  }
  _createClass(Pn, [{
    key: "colorContrast",
    value: function colorContrast(t, e, i, o) {
      void 0 === i && (i = this.closestIndexOf(t));
      var s = this.swatches;
      var n = this.lastIndex;
      var r = i;
      void 0 === o && (o = Rn(t));
      return -1 === o && (s = this.reversedSwatches, r = n - r), function t(e, i) {
        var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length - 1;
        if (s === o) return e[o];
        var n = Math.floor((s - o) / 2) + o;
        return i(e[n]) ? t(e, i, o, n) : t(e, i, n + 1, s);
      }(s, function (i) {
        return Tn(t, i) >= e;
      }, r, n);
    }
  }, {
    key: "get",
    value: function get(t) {
      return this.swatches[t] || this.swatches[ln(t, 0, this.lastIndex)];
    }
  }, {
    key: "closestIndexOf",
    value: function closestIndexOf(t) {
      if (this.closestIndexCache.has(t.relativeLuminance)) return this.closestIndexCache.get(t.relativeLuminance);
      var e = this.swatches.indexOf(t);
      if (-1 !== e) return this.closestIndexCache.set(t.relativeLuminance, e), e;
      var i = this.swatches.reduce(function (e, i) {
        return Math.abs(i.relativeLuminance - t.relativeLuminance) < Math.abs(e.relativeLuminance - t.relativeLuminance) ? i : e;
      });
      return e = this.swatches.indexOf(i), this.closestIndexCache.set(t.relativeLuminance, e), e;
    }
  }], [{
    key: "saturationBump",
    value: function saturationBump(t, e) {
      var i = xn(t).s,
        o = xn(e);
      if (o.s < i) {
        return function (t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var i = (1 - Math.abs(2 * t.l - 1)) * t.s,
            o = i * (1 - Math.abs(t.h / 60 % 2 - 1)),
            s = t.l - i / 2;
          var n = 0,
            r = 0,
            a = 0;
          return t.h < 60 ? (n = i, r = o, a = 0) : t.h < 120 ? (n = o, r = i, a = 0) : t.h < 180 ? (n = 0, r = i, a = o) : t.h < 240 ? (n = 0, r = o, a = i) : t.h < 300 ? (n = o, r = 0, a = i) : t.h < 360 && (n = i, r = 0, a = o), new fn(n + s, r + s, a + s, e);
        }(new pn(o.h, i, o.l));
      }
      return e;
    }
  }, {
    key: "ramp",
    value: function ramp(t) {
      var e = t / 100;
      return e > .5 ? (e - .5) / .5 : 2 * e;
    }
  }, {
    key: "createHighResolutionPalette",
    value: function createHighResolutionPalette(t) {
      var e = [],
        i = $n(fn.fromObject(t).roundToPrecision(4)),
        o = wn(new gn(0, i.a, i.b)).clamp().roundToPrecision(4),
        s = wn(new gn(50, i.a, i.b)).clamp().roundToPrecision(4),
        n = wn(new gn(100, i.a, i.b)).clamp().roundToPrecision(4),
        r = new fn(0, 0, 0),
        a = new fn(1, 1, 1),
        l = n.equalValue(a) ? 0 : 14,
        c = o.equalValue(r) ? 0 : 14;
      for (var _t76 = 100 + l; _t76 >= 0 - c; _t76 -= .5) {
        var _i59 = void 0;
        if (_t76 < 0) {
          _i59 = In(_t76 / c + 1, r, o);
        } else if (_t76 <= 50) _i59 = In(Pn.ramp(_t76), o, s);else if (_t76 <= 100) _i59 = In(Pn.ramp(_t76), s, n);else {
          _i59 = In((_t76 - 100) / l, n, a);
        }
        _i59 = Pn.saturationBump(s, _i59).roundToPrecision(4), e.push(Sn.from(_i59));
      }
      return new Pn(t, e);
    }
  }, {
    key: "adjustEnd",
    value: function adjustEnd(t, e, i, o) {
      var s = -1 === o ? e.swatches : e.reversedSwatches,
        n = function n(t) {
          var i = e.closestIndexOf(t);
          return 1 === o ? e.lastIndex - i : i;
        };
      1 === o && i.reverse();
      var r = t(i[i.length - 2]);
      if (un(Tn(i[i.length - 1], i[i.length - 2]), 2) < r) {
        i.pop();
        var _t77 = n(e.colorContrast(s[e.lastIndex], r, void 0, o)) - n(i[i.length - 2]);
        var _a9 = 1;
        for (var _o38 = i.length - _t77 - 1; _o38 < i.length; _o38++) {
          var _t78 = n(i[_o38]),
            _r16 = _o38 === i.length - 1 ? e.lastIndex : _t78 + _a9;
          i[_o38] = s[_r16], _a9++;
        }
      }
      1 === o && i.reverse();
    }
  }, {
    key: "createColorPaletteByContrast",
    value: function createColorPaletteByContrast(t, e) {
      var i = Pn.createHighResolutionPalette(t),
        o = function o(t) {
          return un(e.stepContrast + e.stepContrast * (1 - t.relativeLuminance) * e.stepContrastRamp, 2);
        },
        s = [];
      var n = e.preserveSource ? t : i.swatches[0];
      s.push(n);
      do {
        var _t79 = o(n);
        n = i.colorContrast(n, _t79, void 0, 1), s.push(n);
      } while (n.relativeLuminance > 0);
      if (e.preserveSource) {
        n = t;
        do {
          var _t80 = o(n);
          n = i.colorContrast(n, _t80, void 0, -1), s.unshift(n);
        } while (n.relativeLuminance < 1);
      }
      return this.adjustEnd(o, i, s, -1), e.preserveSource && this.adjustEnd(o, i, s, 1), s;
    }
  }, {
    key: "from",
    value: function from(t, e) {
      var i = void 0 === e ? An : Object.assign(Object.assign({}, An), e);
      return new Pn(t, Object.freeze(Pn.createColorPaletteByContrast(t, i)));
    }
  }]);
  return Pn;
}();
var zn = Sn.create(1, 1, 1),
  Hn = Sn.create(0, 0, 0),
  Mn = Sn.create(.5, .5, .5),
  Bn = Dn("#0078D4"),
  Nn = Sn.create(Bn.r, Bn.g, Bn.b);
function jn(t, e, i, o, s) {
  var n = function n(t) {
      return t.contrast(zn) >= s ? zn : Hn;
    },
    r = n(t),
    a = n(e);
  return {
    rest: r,
    hover: a,
    active: r.relativeLuminance === a.relativeLuminance ? r : n(i),
    focus: n(o)
  };
}
var Un = /*#__PURE__*/function () {
  function Un(t, e, i, o) {
    var _this133 = this;
    _classCallCheck(this, Un);
    this.toColorString = function () {
      return _this133.cssGradient;
    }, this.contrast = Tn.bind(null, this), this.createCSS = this.toColorString, this.color = new fn(t, e, i), this.cssGradient = o, this.relativeLuminance = vn(this.color), this.r = t, this.g = e, this.b = i;
  }
  _createClass(Un, null, [{
    key: "fromObject",
    value: function fromObject(t, e) {
      return new Un(t.r, t.g, t.b, e);
    }
  }]);
  return Un;
}();
var qn = new fn(0, 0, 0),
  _n = new fn(1, 1, 1);
function Gn(t, e, i, o, s, n, r, a) {
  var l = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 10;
  var c = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : !1;
  var h = t.closestIndexOf(e);
  function d(i) {
    if (c) {
      var _o39 = t.closestIndexOf(e),
        _s37 = t.get(_o39),
        _n29 = i.relativeLuminance < e.relativeLuminance ? qn : _n,
        _r17 = function (t, e) {
          var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var o = 0,
            s = i;
          return null !== s ? o = yn(t, e, s) : (s = new fn(0, 0, 0, 1), o = yn(t, e, s), o <= 0 && (s = new fn(1, 1, 1, 1), o = yn(t, e, s))), o = Math.round(1e3 * o) / 1e3, new fn(s.r, s.g, s.b, o);
        }(Dn(i.toColorString()), Dn(_s37.toColorString()), _n29).roundToPrecision(2),
        _a10 = function (t, e) {
          if (e.a >= 1) return e;
          if (e.a <= 0) return new fn(t.r, t.g, t.b, 1);
          var i = e.a * e.r + (1 - e.a) * t.r,
            o = e.a * e.g + (1 - e.a) * t.g,
            s = e.a * e.b + (1 - e.a) * t.b;
          return new fn(i, o, s, 1);
        }(Dn(e.toColorString()), _r17);
      return Sn.from(_a10);
    }
    return i;
  }
  void 0 === a && (a = Rn(e));
  var u = h + a * i,
    p = u + a * (o - i),
    g = u + a * (s - i),
    f = u + a * (n - i),
    m = -1 === a ? 0 : 100 - l,
    v = -1 === a ? l : 100;
  function b(e, i) {
    var o = t.get(e);
    if (i) {
      var _i60 = t.get(e + a * r),
        _s38 = -1 === a ? _i60 : o,
        _n30 = -1 === a ? o : _i60,
        _l7 = "linear-gradient(".concat(d(_s38).toColorString(), " ").concat(m, "%, ").concat(d(_n30).toColorString(), " ").concat(v, "%)");
      return Un.fromObject(_s38, _l7);
    }
    return d(o);
  }
  return {
    rest: b(u, !0),
    hover: b(p, !0),
    active: b(g, !1),
    focus: b(f, !0)
  };
}
function Wn(t, e, i, o, s, n, r, a) {
  null == a && (a = Rn(e));
  var l = t.closestIndexOf(t.colorContrast(e, i));
  return {
    rest: t.get(l + a * o),
    hover: t.get(l + a * s),
    active: t.get(l + a * n),
    focus: t.get(l + a * r)
  };
}
function Kn(t, e, i, o, s, n, r) {
  var a = t.closestIndexOf(e);
  return null == r && (r = Rn(e)), {
    rest: t.get(a + r * i),
    hover: t.get(a + r * o),
    active: t.get(a + r * s),
    focus: t.get(a + r * n)
  };
}
function Xn(t, e, i, o, s, n, r, a, l, c, h, d) {
  return Vn(e) ? Kn(t, e, a, l, c, h, d) : Kn(t, e, i, o, s, n, r);
}
var Yn;
function Qn(t, e) {
  return t.closestIndexOf((i = e, Sn.create(i, i, i)));
  var i;
}
function Zn(t, e, i) {
  return t.get(Qn(t, e) + -1 * i);
}
!function (t) {
  t[t.LightMode = .98] = "LightMode", t[t.DarkMode = .15] = "DarkMode";
}(Yn || (Yn = {}));
var Jn = fo.create;
function tr(t) {
  return fo.create({
    name: t,
    cssCustomPropertyName: null
  });
}
var er = Jn("direction").withDefault(Be.ltr),
  ir = Jn("disabled-opacity").withDefault(.3),
  or = Jn("base-height-multiplier").withDefault(8),
  sr = Jn("base-horizontal-spacing-multiplier").withDefault(3),
  nr = Jn("density").withDefault(0),
  rr = Jn("design-unit").withDefault(4),
  ar = Jn("control-corner-radius").withDefault(4),
  lr = Jn("layer-corner-radius").withDefault(8),
  cr = Jn("stroke-width").withDefault(1),
  hr = Jn("focus-stroke-width").withDefault(2),
  dr = Jn("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),
  ur = Jn("font-weight").withDefault(400);
function pr(t) {
  return function (e) {
    var i = t.getValueFor(e),
      o = ur.getValueFor(e);
    if (i.endsWith("px")) {
      var _t81 = Number.parseFloat(i.replace("px", ""));
      if (_t81 <= 12) return "\"wght\" ".concat(o, ", \"opsz\" 8");
      if (_t81 > 24) return "\"wght\" ".concat(o, ", \"opsz\" 36");
    }
    return "\"wght\" ".concat(o, ", \"opsz\" 10.5");
  };
}
var gr = Jn("type-ramp-base-font-size").withDefault("14px"),
  fr = Jn("type-ramp-base-line-height").withDefault("20px"),
  mr = Jn("type-ramp-base-font-variations").withDefault(pr(gr)),
  vr = Jn("type-ramp-minus-1-font-size").withDefault("12px"),
  br = Jn("type-ramp-minus-1-line-height").withDefault("16px"),
  yr = Jn("type-ramp-minus-1-font-variations").withDefault(pr(vr)),
  xr = Jn("type-ramp-minus-2-font-size").withDefault("10px"),
  $r = Jn("type-ramp-minus-2-line-height").withDefault("14px"),
  wr = Jn("type-ramp-minus-2-font-variations").withDefault(pr(xr)),
  kr = Jn("type-ramp-plus-1-font-size").withDefault("16px"),
  Cr = Jn("type-ramp-plus-1-line-height").withDefault("22px"),
  Ir = Jn("type-ramp-plus-1-font-variations").withDefault(pr(kr)),
  Fr = Jn("type-ramp-plus-2-font-size").withDefault("20px"),
  Dr = Jn("type-ramp-plus-2-line-height").withDefault("26px"),
  Tr = Jn("type-ramp-plus-2-font-variations").withDefault(pr(Fr)),
  Sr = Jn("type-ramp-plus-3-font-size").withDefault("24px"),
  Or = Jn("type-ramp-plus-3-line-height").withDefault("32px"),
  Er = Jn("type-ramp-plus-3-font-variations").withDefault(pr(Sr)),
  Vr = Jn("type-ramp-plus-4-font-size").withDefault("28px"),
  Rr = Jn("type-ramp-plus-4-line-height").withDefault("36px"),
  Ar = Jn("type-ramp-plus-4-font-variations").withDefault(pr(Vr)),
  Lr = Jn("type-ramp-plus-5-font-size").withDefault("32px"),
  Pr = Jn("type-ramp-plus-5-line-height").withDefault("40px"),
  zr = Jn("type-ramp-plus-5-font-variations").withDefault(pr(Lr)),
  Hr = Jn("type-ramp-plus-6-font-size").withDefault("40px"),
  Mr = Jn("type-ramp-plus-6-line-height").withDefault("52px"),
  Br = Jn("type-ramp-plus-6-font-variations").withDefault(pr(Hr)),
  Nr = Jn("base-layer-luminance").withDefault(Yn.LightMode),
  jr = tr("accent-fill-rest-delta").withDefault(0),
  Ur = tr("accent-fill-hover-delta").withDefault(-2),
  qr = tr("accent-fill-active-delta").withDefault(-5),
  _r = tr("accent-fill-focus-delta").withDefault(0),
  Gr = tr("accent-foreground-rest-delta").withDefault(0),
  Wr = tr("accent-foreground-hover-delta").withDefault(3),
  Kr = tr("accent-foreground-active-delta").withDefault(-8),
  Xr = tr("accent-foreground-focus-delta").withDefault(0),
  Yr = tr("neutral-fill-rest-delta").withDefault(-1),
  Qr = tr("neutral-fill-hover-delta").withDefault(1),
  Zr = tr("neutral-fill-active-delta").withDefault(0),
  Jr = tr("neutral-fill-focus-delta").withDefault(0),
  ta = tr("neutral-fill-input-rest-delta").withDefault(-1),
  ea = tr("neutral-fill-input-hover-delta").withDefault(1),
  ia = tr("neutral-fill-input-active-delta").withDefault(0),
  oa = tr("neutral-fill-input-focus-delta").withDefault(-2),
  sa = tr("neutral-fill-input-alt-rest-delta").withDefault(2),
  na = tr("neutral-fill-input-alt-hover-delta").withDefault(4),
  ra = tr("neutral-fill-input-alt-active-delta").withDefault(6),
  aa = tr("neutral-fill-input-alt-focus-delta").withDefault(2),
  la = tr("neutral-fill-layer-rest-delta").withDefault(-2),
  ca = tr("neutral-fill-layer-hover-delta").withDefault(-3),
  ha = tr("neutral-fill-layer-active-delta").withDefault(-3),
  da = tr("neutral-fill-layer-alt-rest-delta").withDefault(-1),
  ua = tr("neutral-fill-secondary-rest-delta").withDefault(3),
  pa = tr("neutral-fill-secondary-hover-delta").withDefault(2),
  ga = tr("neutral-fill-secondary-active-delta").withDefault(1),
  fa = tr("neutral-fill-secondary-focus-delta").withDefault(3),
  ma = tr("neutral-fill-stealth-rest-delta").withDefault(0),
  va = tr("neutral-fill-stealth-hover-delta").withDefault(3),
  ba = tr("neutral-fill-stealth-active-delta").withDefault(2),
  ya = tr("neutral-fill-stealth-focus-delta").withDefault(0),
  xa = tr("neutral-fill-strong-rest-delta").withDefault(0),
  $a = tr("neutral-fill-strong-hover-delta").withDefault(8),
  wa = tr("neutral-fill-strong-active-delta").withDefault(-5),
  ka = tr("neutral-fill-strong-focus-delta").withDefault(0),
  Ca = tr("neutral-stroke-rest-delta").withDefault(8),
  Ia = tr("neutral-stroke-hover-delta").withDefault(12),
  Fa = tr("neutral-stroke-active-delta").withDefault(6),
  Da = tr("neutral-stroke-focus-delta").withDefault(8),
  Ta = tr("neutral-stroke-control-rest-delta").withDefault(3),
  Sa = tr("neutral-stroke-control-hover-delta").withDefault(5),
  Oa = tr("neutral-stroke-control-active-delta").withDefault(5),
  Ea = tr("neutral-stroke-control-focus-delta").withDefault(5),
  Va = tr("neutral-stroke-divider-rest-delta").withDefault(4),
  Ra = tr("neutral-stroke-layer-rest-delta").withDefault(3),
  Aa = tr("neutral-stroke-layer-hover-delta").withDefault(3),
  La = tr("neutral-stroke-layer-active-delta").withDefault(3),
  Pa = tr("neutral-stroke-strong-hover-delta").withDefault(0),
  za = tr("neutral-stroke-strong-active-delta").withDefault(0),
  Ha = tr("neutral-stroke-strong-focus-delta").withDefault(0),
  Ma = Jn("neutral-base-color").withDefault(Mn),
  Ba = tr("neutral-palette").withDefault(function (t) {
    return Ln.from(Ma.getValueFor(t));
  }),
  Na = Jn("accent-base-color").withDefault(Nn),
  ja = tr("accent-palette").withDefault(function (t) {
    return Ln.from(Na.getValueFor(t));
  }),
  Ua = tr("neutral-layer-card-container-recipe").withDefault({
    evaluate: function evaluate(t) {
      return Zn(Ba.getValueFor(t), Nr.getValueFor(t), la.getValueFor(t));
    }
  }),
  qa = Jn("neutral-layer-card-container").withDefault(function (t) {
    return Ua.getValueFor(t).evaluate(t);
  }),
  _a = tr("neutral-layer-floating-recipe").withDefault({
    evaluate: function evaluate(t) {
      return function (t, e, i) {
        return t.get(Qn(t, e) + i);
      }(Ba.getValueFor(t), Nr.getValueFor(t), la.getValueFor(t));
    }
  }),
  Ga = Jn("neutral-layer-floating").withDefault(function (t) {
    return _a.getValueFor(t).evaluate(t);
  }),
  Wa = tr("neutral-layer-1-recipe").withDefault({
    evaluate: function evaluate(t) {
      return function (t, e) {
        return t.get(Qn(t, e));
      }(Ba.getValueFor(t), Nr.getValueFor(t));
    }
  }),
  Ka = Jn("neutral-layer-1").withDefault(function (t) {
    return Wa.getValueFor(t).evaluate(t);
  }),
  Xa = tr("neutral-layer-2-recipe").withDefault({
    evaluate: function evaluate(t) {
      return Zn(Ba.getValueFor(t), Nr.getValueFor(t), la.getValueFor(t));
    }
  }),
  Ya = Jn("neutral-layer-2").withDefault(function (t) {
    return Xa.getValueFor(t).evaluate(t);
  }),
  Qa = tr("neutral-layer-3-recipe").withDefault({
    evaluate: function evaluate(t) {
      return function (t, e, i) {
        return t.get(Qn(t, e) + -1 * i * 2);
      }(Ba.getValueFor(t), Nr.getValueFor(t), la.getValueFor(t));
    }
  }),
  Za = Jn("neutral-layer-3").withDefault(function (t) {
    return Qa.getValueFor(t).evaluate(t);
  }),
  Ja = tr("neutral-layer-4-recipe").withDefault({
    evaluate: function evaluate(t) {
      return function (t, e, i) {
        return t.get(Qn(t, e) + -1 * i * 3);
      }(Ba.getValueFor(t), Nr.getValueFor(t), la.getValueFor(t));
    }
  }),
  tl = Jn("neutral-layer-4").withDefault(function (t) {
    return Ja.getValueFor(t).evaluate(t);
  }),
  el = Jn("fill-color").withDefault(function (t) {
    return Ka.getValueFor(t);
  });
var il;
!function (t) {
  t[t.normal = 4.5] = "normal", t[t.large = 3] = "large";
}(il || (il = {}));
var ol = tr("accent-fill-recipe").withDefault({
    evaluate: function evaluate(t, e) {
      return function (t, e, i, o, s, n, r, a, l, c, h, d, u, p) {
        return Vn(e) ? Wn(t, e, l, c, h, d, u, p) : Wn(t, e, i, o, s, n, r, a);
      }(ja.getValueFor(t), e || el.getValueFor(t), 5, jr.getValueFor(t), Ur.getValueFor(t), qr.getValueFor(t), _r.getValueFor(t), void 0, 8, jr.getValueFor(t), Ur.getValueFor(t), qr.getValueFor(t), _r.getValueFor(t), void 0);
    }
  }),
  sl = Jn("accent-fill-rest").withDefault(function (t) {
    return ol.getValueFor(t).evaluate(t).rest;
  }),
  nl = Jn("accent-fill-hover").withDefault(function (t) {
    return ol.getValueFor(t).evaluate(t).hover;
  }),
  rl = Jn("accent-fill-active").withDefault(function (t) {
    return ol.getValueFor(t).evaluate(t).active;
  }),
  al = Jn("accent-fill-focus").withDefault(function (t) {
    return ol.getValueFor(t).evaluate(t).focus;
  }),
  ll = tr("foreground-on-accent-recipe").withDefault({
    evaluate: function evaluate(t) {
      return jn(sl.getValueFor(t), nl.getValueFor(t), rl.getValueFor(t), al.getValueFor(t), il.normal);
    }
  }),
  cl = Jn("foreground-on-accent-rest").withDefault(function (t) {
    return ll.getValueFor(t).evaluate(t).rest;
  }),
  hl = Jn("foreground-on-accent-hover").withDefault(function (t) {
    return ll.getValueFor(t).evaluate(t).hover;
  }),
  dl = Jn("foreground-on-accent-active").withDefault(function (t) {
    return ll.getValueFor(t).evaluate(t).active;
  }),
  ul = Jn("foreground-on-accent-focus").withDefault(function (t) {
    return ll.getValueFor(t).evaluate(t).focus;
  }),
  pl = tr("accent-foreground-recipe").withDefault({
    evaluate: function evaluate(t, e) {
      return Wn(ja.getValueFor(t), e || el.getValueFor(t), 9.5, Gr.getValueFor(t), Wr.getValueFor(t), Kr.getValueFor(t), Xr.getValueFor(t));
    }
  }),
  gl = Jn("accent-foreground-rest").withDefault(function (t) {
    return pl.getValueFor(t).evaluate(t).rest;
  }),
  fl = Jn("accent-foreground-hover").withDefault(function (t) {
    return pl.getValueFor(t).evaluate(t).hover;
  }),
  ml = Jn("accent-foreground-active").withDefault(function (t) {
    return pl.getValueFor(t).evaluate(t).active;
  }),
  vl = Jn("accent-foreground-focus").withDefault(function (t) {
    return pl.getValueFor(t).evaluate(t).focus;
  }),
  bl = tr("accent-stroke-control-recipe").withDefault({
    evaluate: function evaluate(t, e) {
      return Gn(Ba.getValueFor(t), e || el.getValueFor(t), -3, -3, -3, -3, 10, 1, void 0, !0);
    }
  }),
  yl = Jn("accent-stroke-control-rest").withDefault(function (t) {
    return bl.getValueFor(t).evaluate(t, sl.getValueFor(t)).rest;
  }),
  xl = Jn("accent-stroke-control-hover").withDefault(function (t) {
    return bl.getValueFor(t).evaluate(t, nl.getValueFor(t)).hover;
  }),
  $l = Jn("accent-stroke-control-active").withDefault(function (t) {
    return bl.getValueFor(t).evaluate(t, rl.getValueFor(t)).active;
  }),
  wl = Jn("accent-stroke-control-focus").withDefault(function (t) {
    return bl.getValueFor(t).evaluate(t, al.getValueFor(t)).focus;
  }),
  kl = tr("neutral-fill-recipe").withDefault({
    evaluate: function evaluate(t, e) {
      return Xn(Ba.getValueFor(t), e || el.getValueFor(t), Yr.getValueFor(t), Qr.getValueFor(t), Zr.getValueFor(t), Jr.getValueFor(t), void 0, 2, 3, 1, 2, void 0);
    }
  }),
  Cl = Jn("neutral-fill-rest").withDefault(function (t) {
    return kl.getValueFor(t).evaluate(t).rest;
  }),
  Il = Jn("neutral-fill-hover").withDefault(function (t) {
    return kl.getValueFor(t).evaluate(t).hover;
  }),
  Fl = Jn("neutral-fill-active").withDefault(function (t) {
    return kl.getValueFor(t).evaluate(t).active;
  }),
  Dl = Jn("neutral-fill-focus").withDefault(function (t) {
    return kl.getValueFor(t).evaluate(t).focus;
  }),
  Tl = tr("neutral-fill-input-recipe").withDefault({
    evaluate: function evaluate(t, e) {
      return Xn(Ba.getValueFor(t), e || el.getValueFor(t), ta.getValueFor(t), ea.getValueFor(t), ia.getValueFor(t), oa.getValueFor(t), void 0, 2, 3, 1, 0, void 0);
    }
  }),
  Sl = Jn("neutral-fill-input-rest").withDefault(function (t) {
    return Tl.getValueFor(t).evaluate(t).rest;
  }),
  Ol = Jn("neutral-fill-input-hover").withDefault(function (t) {
    return Tl.getValueFor(t).evaluate(t).hover;
  }),
  El = Jn("neutral-fill-input-active").withDefault(function (t) {
    return Tl.getValueFor(t).evaluate(t).active;
  }),
  Vl = Jn("neutral-fill-input-focus").withDefault(function (t) {
    return Tl.getValueFor(t).evaluate(t).focus;
  }),
  Rl = tr("neutral-fill-input-alt-recipe").withDefault({
    evaluate: function evaluate(t, e) {
      return Xn(Ba.getValueFor(t), e || el.getValueFor(t), sa.getValueFor(t), na.getValueFor(t), ra.getValueFor(t), aa.getValueFor(t), 1, sa.getValueFor(t), sa.getValueFor(t) - na.getValueFor(t), sa.getValueFor(t) - ra.getValueFor(t), aa.getValueFor(t), 1);
    }
  }),
  Al = Jn("neutral-fill-input-alt-rest").withDefault(function (t) {
    return Rl.getValueFor(t).evaluate(t).rest;
  }),
  Ll = Jn("neutral-fill-input-alt-hover").withDefault(function (t) {
    return Rl.getValueFor(t).evaluate(t).hover;
  }),
  Pl = Jn("neutral-fill-input-alt-active").withDefault(function (t) {
    return Rl.getValueFor(t).evaluate(t).active;
  }),
  zl = Jn("neutral-fill-input-alt-focus").withDefault(function (t) {
    return Rl.getValueFor(t).evaluate(t).focus;
  }),
  Hl = tr("neutral-fill-layer-recipe").withDefault({
    evaluate: function evaluate(t, e) {
      return Kn(Ba.getValueFor(t), e || el.getValueFor(t), la.getValueFor(t), ca.getValueFor(t), ha.getValueFor(t), la.getValueFor(t), 1);
    }
  }),
  Ml = Jn("neutral-fill-layer-rest").withDefault(function (t) {
    return Hl.getValueFor(t).evaluate(t).rest;
  }),
  Bl = Jn("neutral-fill-layer-hover").withDefault(function (t) {
    return Hl.getValueFor(t).evaluate(t).hover;
  }),
  Nl = Jn("neutral-fill-layer-active").withDefault(function (t) {
    return Hl.getValueFor(t).evaluate(t).active;
  }),
  jl = tr("neutral-fill-layer-alt-recipe").withDefault({
    evaluate: function evaluate(t, e) {
      return Kn(Ba.getValueFor(t), e || el.getValueFor(t), da.getValueFor(t), da.getValueFor(t), da.getValueFor(t), da.getValueFor(t));
    }
  }),
  Ul = Jn("neutral-fill-layer-alt-rest").withDefault(function (t) {
    return jl.getValueFor(t).evaluate(t).rest;
  }),
  ql = tr("neutral-fill-secondary-recipe").withDefault({
    evaluate: function evaluate(t, e) {
      return Kn(Ba.getValueFor(t), e || el.getValueFor(t), ua.getValueFor(t), pa.getValueFor(t), ga.getValueFor(t), fa.getValueFor(t));
    }
  }),
  _l = Jn("neutral-fill-secondary-rest").withDefault(function (t) {
    return ql.getValueFor(t).evaluate(t).rest;
  }),
  Gl = Jn("neutral-fill-secondary-hover").withDefault(function (t) {
    return ql.getValueFor(t).evaluate(t).hover;
  }),
  Wl = Jn("neutral-fill-secondary-active").withDefault(function (t) {
    return ql.getValueFor(t).evaluate(t).active;
  }),
  Kl = Jn("neutral-fill-secondary-focus").withDefault(function (t) {
    return ql.getValueFor(t).evaluate(t).focus;
  }),
  Xl = tr("neutral-fill-stealth-recipe").withDefault({
    evaluate: function evaluate(t, e) {
      return Kn(Ba.getValueFor(t), e || el.getValueFor(t), ma.getValueFor(t), va.getValueFor(t), ba.getValueFor(t), ya.getValueFor(t));
    }
  }),
  Yl = Jn("neutral-fill-stealth-rest").withDefault(function (t) {
    return Xl.getValueFor(t).evaluate(t).rest;
  }),
  Ql = Jn("neutral-fill-stealth-hover").withDefault(function (t) {
    return Xl.getValueFor(t).evaluate(t).hover;
  }),
  Zl = Jn("neutral-fill-stealth-active").withDefault(function (t) {
    return Xl.getValueFor(t).evaluate(t).active;
  }),
  Jl = Jn("neutral-fill-stealth-focus").withDefault(function (t) {
    return Xl.getValueFor(t).evaluate(t).focus;
  }),
  tc = tr("neutral-fill-strong-recipe").withDefault({
    evaluate: function evaluate(t, e) {
      return Wn(Ba.getValueFor(t), e || el.getValueFor(t), 4.5, xa.getValueFor(t), $a.getValueFor(t), wa.getValueFor(t), ka.getValueFor(t));
    }
  }),
  ec = Jn("neutral-fill-strong-rest").withDefault(function (t) {
    return tc.getValueFor(t).evaluate(t).rest;
  }),
  ic = Jn("neutral-fill-strong-hover").withDefault(function (t) {
    return tc.getValueFor(t).evaluate(t).hover;
  }),
  oc = Jn("neutral-fill-strong-active").withDefault(function (t) {
    return tc.getValueFor(t).evaluate(t).active;
  }),
  sc = Jn("neutral-fill-strong-focus").withDefault(function (t) {
    return tc.getValueFor(t).evaluate(t).focus;
  }),
  nc = tr("neutral-foreground-recipe").withDefault({
    evaluate: function evaluate(t, e) {
      return Wn(Ba.getValueFor(t), e || el.getValueFor(t), 16, 0, -19, -30, 0);
    }
  }),
  rc = Jn("neutral-foreground-rest").withDefault(function (t) {
    return nc.getValueFor(t).evaluate(t).rest;
  }),
  ac = Jn("neutral-foreground-hover").withDefault(function (t) {
    return nc.getValueFor(t).evaluate(t).hover;
  }),
  lc = Jn("neutral-foreground-active").withDefault(function (t) {
    return nc.getValueFor(t).evaluate(t).active;
  }),
  cc = Jn("neutral-foreground-focus").withDefault(function (t) {
    return nc.getValueFor(t).evaluate(t).focus;
  }),
  hc = tr("neutral-foreground-hint-recipe").withDefault({
    evaluate: function evaluate(t, e) {
      return function (t, e, i) {
        return t.colorContrast(e, i);
      }(Ba.getValueFor(t), e || el.getValueFor(t), 4.5);
    }
  }),
  dc = Jn("neutral-foreground-hint").withDefault(function (t) {
    return hc.getValueFor(t).evaluate(t);
  }),
  uc = tr("neutral-stroke-recipe").withDefault({
    evaluate: function evaluate(t, e) {
      return Kn(Ba.getValueFor(t), e || el.getValueFor(t), Ca.getValueFor(t), Ia.getValueFor(t), Fa.getValueFor(t), Da.getValueFor(t));
    }
  }),
  pc = Jn("neutral-stroke-rest").withDefault(function (t) {
    return uc.getValueFor(t).evaluate(t).rest;
  }),
  gc = Jn("neutral-stroke-hover").withDefault(function (t) {
    return uc.getValueFor(t).evaluate(t).hover;
  }),
  fc = Jn("neutral-stroke-active").withDefault(function (t) {
    return uc.getValueFor(t).evaluate(t).active;
  }),
  mc = Jn("neutral-stroke-focus").withDefault(function (t) {
    return uc.getValueFor(t).evaluate(t).focus;
  }),
  vc = tr("neutral-stroke-control-recipe").withDefault({
    evaluate: function evaluate(t, e) {
      return Gn(Ba.getValueFor(t), e || el.getValueFor(t), Ta.getValueFor(t), Sa.getValueFor(t), Oa.getValueFor(t), Ea.getValueFor(t), 5);
    }
  }),
  bc = Jn("neutral-stroke-control-rest").withDefault(function (t) {
    return vc.getValueFor(t).evaluate(t).rest;
  }),
  yc = Jn("neutral-stroke-control-hover").withDefault(function (t) {
    return vc.getValueFor(t).evaluate(t).hover;
  }),
  xc = Jn("neutral-stroke-control-active").withDefault(function (t) {
    return vc.getValueFor(t).evaluate(t).active;
  }),
  $c = Jn("neutral-stroke-control-focus").withDefault(function (t) {
    return vc.getValueFor(t).evaluate(t).focus;
  }),
  wc = tr("neutral-stroke-divider-recipe").withDefault({
    evaluate: function evaluate(t, e) {
      return function (t, e, i) {
        return t.get(t.closestIndexOf(e) + Rn(e) * i);
      }(Ba.getValueFor(t), e || el.getValueFor(t), Va.getValueFor(t));
    }
  }),
  kc = Jn("neutral-stroke-divider-rest").withDefault(function (t) {
    return wc.getValueFor(t).evaluate(t);
  }),
  Cc = tr("neutral-stroke-input-recipe").withDefault({
    evaluate: function evaluate(t, e) {
      return function (t, e, i, o, s, n, r, a) {
        var l = t.closestIndexOf(e),
          c = Rn(e),
          h = l + c * i,
          d = h + c * (o - i),
          u = h + c * (s - i),
          p = h + c * (n - i),
          g = "calc(100% - ".concat(a, ")");
        function f(e, i) {
          var o = t.get(e);
          if (i) {
            var _i61 = t.get(e + c * r),
              _s39 = "linear-gradient(".concat(o.toColorString(), " ").concat(g, ", ").concat(_i61.toColorString(), " ").concat(g, ", ").concat(_i61.toColorString(), ")");
            return Un.fromObject(o, _s39);
          }
          return o;
        }
        return {
          rest: f(h, !0),
          hover: f(d, !0),
          active: f(u, !1),
          focus: f(p, !0)
        };
      }(Ba.getValueFor(t), e || el.getValueFor(t), Ta.getValueFor(t), Sa.getValueFor(t), Oa.getValueFor(t), Ea.getValueFor(t), 20, cr.getValueFor(t) + "px");
    }
  }),
  Ic = Jn("neutral-stroke-input-rest").withDefault(function (t) {
    return Cc.getValueFor(t).evaluate(t).rest;
  }),
  Fc = Jn("neutral-stroke-input-hover").withDefault(function (t) {
    return Cc.getValueFor(t).evaluate(t).hover;
  }),
  Dc = Jn("neutral-stroke-input-active").withDefault(function (t) {
    return Cc.getValueFor(t).evaluate(t).active;
  }),
  Tc = Jn("neutral-stroke-input-focus").withDefault(function (t) {
    return Cc.getValueFor(t).evaluate(t).focus;
  }),
  Sc = tr("neutral-stroke-layer-recipe").withDefault({
    evaluate: function evaluate(t, e) {
      return Kn(Ba.getValueFor(t), e || el.getValueFor(t), Ra.getValueFor(t), Aa.getValueFor(t), La.getValueFor(t), Ra.getValueFor(t));
    }
  }),
  Oc = Jn("neutral-stroke-layer-rest").withDefault(function (t) {
    return Sc.getValueFor(t).evaluate(t).rest;
  }),
  Ec = Jn("neutral-stroke-layer-hover").withDefault(function (t) {
    return Sc.getValueFor(t).evaluate(t).hover;
  }),
  Vc = Jn("neutral-stroke-layer-active").withDefault(function (t) {
    return Sc.getValueFor(t).evaluate(t).active;
  }),
  Rc = tr("neutral-stroke-strong-recipe").withDefault({
    evaluate: function evaluate(t, e) {
      return Wn(Ba.getValueFor(t), e || el.getValueFor(t), 5.5, 0, Pa.getValueFor(t), za.getValueFor(t), Ha.getValueFor(t));
    }
  }),
  Ac = Jn("neutral-stroke-strong-rest").withDefault(function (t) {
    return Rc.getValueFor(t).evaluate(t).rest;
  }),
  Lc = Jn("neutral-stroke-strong-hover").withDefault(function (t) {
    return Rc.getValueFor(t).evaluate(t).hover;
  }),
  Pc = Jn("neutral-stroke-strong-active").withDefault(function (t) {
    return Rc.getValueFor(t).evaluate(t).active;
  }),
  zc = Jn("neutral-stroke-strong-focus").withDefault(function (t) {
    return Rc.getValueFor(t).evaluate(t).focus;
  }),
  Hc = tr("focus-stroke-outer-recipe").withDefault({
    evaluate: function evaluate(t) {
      return Ba.getValueFor(t), Vn(el.getValueFor(t)) ? zn : Hn;
    }
  }),
  Mc = Jn("focus-stroke-outer").withDefault(function (t) {
    return Hc.getValueFor(t).evaluate(t);
  }),
  Bc = tr("focus-stroke-inner-recipe").withDefault({
    evaluate: function evaluate(t) {
      return ja.getValueFor(t), e = el.getValueFor(t), Mc.getValueFor(t), Vn(e) ? Hn : zn;
      var e;
    }
  }),
  Nc = Jn("focus-stroke-inner").withDefault(function (t) {
    return Bc.getValueFor(t).evaluate(t);
  }),
  jc = tr("foreground-on-accent-large-recipe").withDefault({
    evaluate: function evaluate(t) {
      return jn(sl.getValueFor(t), nl.getValueFor(t), rl.getValueFor(t), al.getValueFor(t), il.large);
    }
  }),
  Uc = Jn("foreground-on-accent-rest-large").withDefault(function (t) {
    return jc.getValueFor(t).evaluate(t).rest;
  }),
  qc = Jn("foreground-on-accent-hover-large").withDefault(function (t) {
    return jc.getValueFor(t).evaluate(t, nl.getValueFor(t)).hover;
  }),
  _c = Jn("foreground-on-accent-active-large").withDefault(function (t) {
    return jc.getValueFor(t).evaluate(t, rl.getValueFor(t)).active;
  }),
  Gc = Jn("foreground-on-accent-focus-large").withDefault(function (t) {
    return jc.getValueFor(t).evaluate(t, al.getValueFor(t)).focus;
  }),
  Wc = Jn("neutral-fill-inverse-rest-delta").withDefault(0),
  Kc = Jn("neutral-fill-inverse-hover-delta").withDefault(-3),
  Xc = Jn("neutral-fill-inverse-active-delta").withDefault(7),
  Yc = Jn("neutral-fill-inverse-focus-delta").withDefault(0);
var Qc = tr("neutral-fill-inverse-recipe").withDefault({
    evaluate: function evaluate(t, e) {
      return function (t, e, i, o, s, n) {
        var r = Rn(e),
          a = t.closestIndexOf(t.colorContrast(e, 14)),
          l = a + r * Math.abs(i - o);
        var c, h;
        return (1 === r ? i < o : r * i > r * o) ? (c = a, h = l) : (c = l, h = a), {
          rest: t.get(c),
          hover: t.get(h),
          active: t.get(c + r * s),
          focus: t.get(c + r * n)
        };
      }(Ba.getValueFor(t), e || el.getValueFor(t), Wc.getValueFor(t), Kc.getValueFor(t), Xc.getValueFor(t), Yc.getValueFor(t));
    }
  }),
  Zc = Jn("neutral-fill-inverse-rest").withDefault(function (t) {
    return Qc.getValueFor(t).evaluate(t).rest;
  }),
  Jc = Jn("neutral-fill-inverse-hover").withDefault(function (t) {
    return Qc.getValueFor(t).evaluate(t).hover;
  }),
  th = Jn("neutral-fill-inverse-active").withDefault(function (t) {
    return Qc.getValueFor(t).evaluate(t).active;
  }),
  eh = Jn("neutral-fill-inverse-focus").withDefault(function (t) {
    return Qc.getValueFor(t).evaluate(t).focus;
  }),
  ih = ar,
  oh = lr,
  sh = cr,
  nh = hr,
  rh = Wc,
  ah = Kc,
  lh = Xc,
  ch = Yc,
  hh = la,
  dh = xa,
  uh = $a,
  ph = wa,
  gh = ka,
  fh = Va,
  mh = Ka,
  vh = Ya,
  bh = Za,
  yh = tl,
  xh = cl,
  $h = Uc,
  wh = kc,
  kh = Ml,
  Ch = Zc,
  Ih = Jc,
  Fh = th,
  Dh = eh,
  Th = ec,
  Sh = ic,
  Oh = oc,
  Eh = sc,
  Vh = Mc,
  Rh = Nc,
  Ah = pc,
  Lh = gc,
  Ph = fc,
  zh = mc,
  Hh = vt(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: initial;\n  font-variation-settings: ", ";\n"])), dr, gr, fr, mr),
  Mh = vt(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: initial;\n  font-variation-settings: ", ";\n"])), dr, vr, br, yr),
  Bh = vt(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: initial;\n  font-variation-settings: ", ";\n"])), dr, xr, $r, wr),
  Nh = vt(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: initial;\n  font-variation-settings: ", ";\n"])), dr, kr, Cr, Ir),
  jh = vt(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: initial;\n  font-variation-settings: ", ";\n"])), dr, Fr, Dr, Tr),
  Uh = vt(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: initial;\n  font-variation-settings: ", ";\n"])), dr, Sr, Or, Er),
  qh = vt(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: initial;\n  font-variation-settings: ", ";\n"])), dr, Vr, Rr, Ar),
  _h = vt(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: initial;\n  font-variation-settings: ", ";\n"])), dr, Lr, Pr, zr),
  Gh = vt(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: initial;\n  font-variation-settings: ", ";\n"])), dr, Hr, Mr, Br),
  Wh = function Wh(t, e) {
    return ft(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    ", " :host{box-sizing:border-box;flex-direction:column;", "\n      color:", ";gap:calc(", " * 1px)}"])), rn("flex"), Hh, rc, rr);
  },
  Kh = vt(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  outline: calc(", " * 1px) solid ", ";\n  outline-offset: calc(", " * -1px);\n"])), hr, Mc, hr),
  Xh = vt(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  outline: calc(", " * 1px) solid ", ";\n  outline-offset: calc(", " * 1px);\n"])), hr, Mc, cr),
  Yh = vt(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["(", " + ", ") * ", ""])), or, nr, rr),
  Qh = fo.create("neutral-fill-stealth-rest-on-neutral-fill-layer-rest").withDefault(function (t) {
    var e = Hl.getValueFor(t);
    return Xl.getValueFor(t).evaluate(t, e.evaluate(t).rest).rest;
  }),
  Zh = fo.create("neutral-fill-stealth-hover-on-neutral-fill-layer-rest").withDefault(function (t) {
    var e = Hl.getValueFor(t);
    return Xl.getValueFor(t).evaluate(t, e.evaluate(t).rest).hover;
  }),
  Jh = fo.create("neutral-fill-stealth-active-on-neutral-fill-layer-rest").withDefault(function (t) {
    var e = Hl.getValueFor(t);
    return Xl.getValueFor(t).evaluate(t, e.evaluate(t).rest).active;
  }),
  td = function td(t, e) {
    return ft(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    ", " :host{box-sizing:border-box;", ";flex-direction:column;background:", ";color:", ";border:calc(", " * 1px) solid ", ";border-radius:calc(", " * 1px)}.region{display:none;padding:calc(", " * 2 * 1px);background:", "}.heading{display:grid;position:relative;grid-template-columns:auto 1fr auto auto;align-items:center}.button{appearance:none;border:none;background:none;grid-column:2;grid-row:1;outline:none;margin:calc(", " * 3 * 1px) 0;padding:0 calc(", " * 2 * 1px);text-align:left;color:inherit;cursor:pointer;font:inherit}.button::before{content:'';position:absolute;top:calc(", " * -1px);left:calc(", " * -1px);right:calc(", " * -1px);bottom:calc(", " * -1px);cursor:pointer}.button:", "::before{", "\n      border-radius:calc(", " * 1px)}:host(.expanded) .button:", "::before{border-bottom-left-radius:0;border-bottom-right-radius:0}:host(.expanded) .region{display:block;border-top:calc(", " * 1px) solid ", ";border-bottom-left-radius:calc((", " - ", ") * 1px);border-bottom-right-radius:calc((", " - ", ") * 1px)}.icon{display:flex;align-items:center;justify-content:center;grid-column:4;pointer-events:none;background:", ";border-radius:calc(", " * 1px);fill:currentcolor;width:calc(", " * 1px);height:calc(", " * 1px);margin:calc(", " * 2 * 1px)}.heading:hover .icon{background:", "}.heading:active .icon{background:", "}slot[name='collapsed-icon']{display:flex}:host(.expanded) slot[name='collapsed-icon']{display:none}slot[name='expanded-icon']{display:none}:host(.expanded) slot[name='expanded-icon']{display:flex}.start{display:flex;align-items:center;padding-inline-start:calc(", " * 2 * 1px);justify-content:center;grid-column:1}.end{display:flex;align-items:center;justify-content:center;grid-column:3}.icon,.start,.end{position:relative}"])), rn("flex"), Hh, Ml, rc, cr, Oc, lr, rr, Ul, rr, rr, cr, cr, cr, cr, an, Kh, lr, an, cr, Oc, lr, cr, lr, cr, Qh, ar, Yh, Yh, rr, Zh, Jh, rr).withBehaviors(sn(ft(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n        .button:", "::before{outline-color:", "}.icon{fill:", "}"])), an, Ge.Highlight, Ge.ButtonText)));
  },
  ed = Re.compose({
    baseName: "accordion-item",
    template: function template(t, e) {
      return _(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["<template class=\"", "\"><div class=\"heading\" part=\"heading\" role=\"heading\" aria-level=\"", "\"><button class=\"button\" part=\"button\" ", " aria-expanded=\"", "\" aria-controls=\"", "-panel\" id=\"", "\" @click=\"", "\"><span class=\"heading-content\" part=\"heading-content\"><slot name=\"heading\"></slot></span></button>", " ", "<span class=\"icon\" part=\"icon\" aria-hidden=\"true\"><slot name=\"expanded-icon\" part=\"expanded-icon\">", "</slot><slot name=\"collapsed-icon\" part=\"collapsed-icon\">", "</slot><span></div><div class=\"region\" part=\"region\" id=\"", "-panel\" role=\"region\" aria-labelledby=\"", "\"><slot></slot></div></template>"])), function (t) {
        return t.expanded ? "expanded" : "";
      }, function (t) {
        return t.headinglevel;
      }, Dt("expandbutton"), function (t) {
        return t.expanded;
      }, function (t) {
        return t.id;
      }, function (t) {
        return t.id;
      }, function (t, e) {
        return t.clickHandler(e.event);
      }, Ut(0, e), jt(0, e), e.expandedIcon || "", e.collapsedIcon || "", function (t) {
        return t.id;
      }, function (t) {
        return t.id;
      });
    },
    styles: td,
    collapsedIcon: '\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  ',
    expandedIcon: '\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>\n    </svg>\n  '
  }),
  id = td,
  od = Xe.compose({
    baseName: "accordion",
    template: function template(t, e) {
      return _(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["<template><slot ", "></slot><slot name=\"item\" part=\"item\" ", "></slot></template>"])), Ht({
        property: "accordionItems",
        filter: Lt()
      }), Ht("accordionItems"));
    },
    styles: Wh
  }),
  sd = Wh;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function nd(t, e, i, o) {
  var s,
    n = arguments.length,
    r = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
  if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);else for (var a = t.length - 1; a >= 0; a--) {
    (s = t[a]) && (r = (n < 3 ? s(r) : n > 3 ? s(e, i, r) : s(e, i)) || r);
  }
  return n > 3 && r && Object.defineProperty(e, i, r), r;
}
var rd = /*#__PURE__*/function () {
  function rd(t, e) {
    _classCallCheck(this, rd);
    this.cache = new WeakMap(), this.ltr = t, this.rtl = e;
  }
  _createClass(rd, [{
    key: "bind",
    value: function bind(t) {
      this.attach(t);
    }
  }, {
    key: "unbind",
    value: function unbind(t) {
      var e = this.cache.get(t);
      e && er.unsubscribe(e);
    }
  }, {
    key: "attach",
    value: function attach(t) {
      var e = this.cache.get(t) || new ad(this.ltr, this.rtl, t),
        i = er.getValueFor(t);
      er.subscribe(e), e.attach(i), this.cache.set(t, e);
    }
  }]);
  return rd;
}();
var ad = /*#__PURE__*/function () {
  function ad(t, e, i) {
    _classCallCheck(this, ad);
    this.ltr = t, this.rtl = e, this.source = i, this.attached = null;
  }
  _createClass(ad, [{
    key: "handleChange",
    value: function handleChange(_ref) {
      var t = _ref.target,
        e = _ref.token;
      this.attach(e.getValueFor(this.source));
    }
  }, {
    key: "attach",
    value: function attach(t) {
      this.attached !== this[t] && (null !== this.attached && this.source.$fastController.removeStyles(this.attached), this.attached = this[t], null !== this.attached && this.source.$fastController.addStyles(this.attached));
    }
  }]);
  return ad;
}();
var ld = "0 0 2px rgba(0, 0, 0, 0.14)",
  cd = "0 calc(var(--elevation) * 0.5px) calc((var(--elevation) * 1px)) rgba(0, 0, 0, 0.2)",
  hd = "box-shadow: 0 0 2px rgba(0, 0, 0, 0.14), ".concat(cd, ";"),
  dd = fo.create({
    name: "elevation-shadow",
    cssCustomPropertyName: null
  }).withDefault({
    evaluate: function evaluate(t, e, i) {
      var o = .12,
        s = .14;
      e > 16 && (o = .2, s = .24);
      return "".concat("0 0 2px rgba(0, 0, 0, ".concat(o, ")"), ", ", "0 calc(".concat(e, " * 0.5px) calc((").concat(e, " * 1px)) rgba(0, 0, 0, ").concat(s, ")"));
    }
  }),
  ud = fo.create("elevation-shadow-card-rest-size").withDefault(4),
  pd = fo.create("elevation-shadow-card-hover-size").withDefault(8),
  gd = fo.create("elevation-shadow-card-active-size").withDefault(0),
  fd = fo.create("elevation-shadow-card-focus-size").withDefault(8),
  md = fo.create("elevation-shadow-card-rest").withDefault(function (t) {
    return dd.getValueFor(t).evaluate(t, ud.getValueFor(t));
  }),
  vd = fo.create("elevation-shadow-card-hover").withDefault(function (t) {
    return dd.getValueFor(t).evaluate(t, pd.getValueFor(t));
  }),
  bd = fo.create("elevation-shadow-card-active").withDefault(function (t) {
    return dd.getValueFor(t).evaluate(t, gd.getValueFor(t));
  }),
  yd = fo.create("elevation-shadow-card-focus").withDefault(function (t) {
    return dd.getValueFor(t).evaluate(t, fd.getValueFor(t));
  }),
  xd = fo.create("elevation-shadow-tooltip-size").withDefault(16),
  $d = fo.create("elevation-shadow-tooltip").withDefault(function (t) {
    return dd.getValueFor(t).evaluate(t, xd.getValueFor(t));
  }),
  wd = fo.create("elevation-shadow-flyout-size").withDefault(32),
  kd = fo.create("elevation-shadow-flyout").withDefault(function (t) {
    return dd.getValueFor(t).evaluate(t, wd.getValueFor(t));
  }),
  Cd = fo.create("elevation-shadow-dialog-size").withDefault(128),
  Id = fo.create("elevation-shadow-dialog").withDefault(function (t) {
    return dd.getValueFor(t).evaluate(t, Cd.getValueFor(t));
  }),
  Fd = function Fd(t, e, i) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "[disabled]";
    return ft(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n    ", "\n    \n    :host{position:relative;box-sizing:border-box;", "\n      height:calc(", " * 1px);min-width:calc(", " * 1px);color:", ";border-radius:calc(", " * 1px);fill:currentcolor}.control{border:calc(", " * 1px) solid transparent;flex-grow:1;box-sizing:border-box;display:inline-flex;justify-content:center;align-items:center;padding:0 calc((10 + (", " * 2 * ", ")) * 1px);white-space:nowrap;outline:none;text-decoration:none;color:inherit;border-radius:inherit;fill:inherit;font-family:inherit}.control,.end,.start{font:inherit}.control.icon-only{padding:0;line-height:0}.control:", "{", "}.control::-moz-focus-inner{border:0}.content{pointer-events:none}.start,.end{display:flex;pointer-events:none}.start{margin-inline-end:11px}.end{margin-inline-start:11px}"])), rn("inline-flex"), Hh, Yh, Yh, rc, ar, cr, rr, nr, an, Kh);
  },
  Dd = function Dd(t, e, i) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "[disabled]";
    return ft(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n    .control{background:padding-box linear-gradient(", ",", "),border-box ", "}:host(", ":hover) .control{background:padding-box linear-gradient(", ",", "),border-box ", "}:host(", ":active) .control{background:padding-box linear-gradient(", ",", "),border-box ", "}:host(", ") .control{background:padding-box linear-gradient(", ",", "),border-box ", "}"])), Cl, Cl, bc, i, Il, Il, yc, i, Fl, Fl, xc, o, Cl, Cl, pc).withBehaviors(sn(ft(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n        .control{background:", ";border-color:", ";color:", "}:host(", ":hover) .control,:host(", ":active) .control{forced-color-adjust:none;background:", ";border-color:", ";color:", "}:host(", ") .control{background:transparent;border-color:", ";color:", "}.control:", "{outline-color:", "}:host([href]) .control{background:transparent;border-color:", ";color:", "}:host([href]:hover) .control,:host([href]:active) .control{background:transparent;border-color:", ";color:", "}"])), Ge.ButtonFace, Ge.ButtonText, Ge.ButtonText, i, i, Ge.HighlightText, Ge.Highlight, Ge.Highlight, o, Ge.GrayText, Ge.GrayText, an, Ge.CanvasText, Ge.LinkText, Ge.LinkText, Ge.CanvasText, Ge.CanvasText)));
  },
  Td = function Td(t, e, i) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "[disabled]";
    return ft(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n    .control{background:padding-box linear-gradient(", ",", "),border-box ", ";color:", "}:host(", ":hover) .control{background:padding-box linear-gradient(", ",", "),border-box ", ";color:", "}:host(", ":active) .control{background:padding-box linear-gradient(", ",", "),border-box ", ";color:", "}:host(", ") .control{background:", "}.control:", "{box-shadow:0 0 0 calc(", " * 1px) ", " inset !important}"])), sl, sl, yl, cl, i, nl, nl, xl, hl, i, rl, rl, $l, dl, o, sl, an, hr, Nc).withBehaviors(sn(ft(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n        .control{forced-color-adjust:none;background:", ";color:", "}:host(", ":hover) .control,:host(", ":active) .control{background:", ";border-color:", ";color:", "}:host(", ") .control{background:transparent;border-color:", ";color:", "}.control:", "{outline-color:", ";box-shadow:0 0 0 calc(", " * 1px) ", " inset !important}:host([href]) .control{background:", ";color:", "}:host([href]:hover) .control,:host([href]:active) .control{background:", ";border-color:", ";color:", "}"])), Ge.Highlight, Ge.HighlightText, i, i, Ge.HighlightText, Ge.Highlight, Ge.Highlight, o, Ge.GrayText, Ge.GrayText, an, Ge.CanvasText, hr, Ge.HighlightText, Ge.LinkText, Ge.HighlightText, Ge.ButtonFace, Ge.LinkText, Ge.LinkText)));
  },
  Sd = function Sd(t, e, i) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "[disabled]";
    return ft(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n    :host{height:auto;font-family:inherit;font-size:inherit;line-height:inherit;min-width:0}.control{display:inline;padding:0;border:none;box-shadow:none;line-height:1}:host(", ") .control{color:", ";text-decoration:underline 1px}:host(", ":hover) .control{color:", ";text-decoration:none}:host(", ":active) .control{color:", ";text-decoration:none}.control:", "{", "}"])), i, gl, i, fl, i, ml, an, Xh).withBehaviors(sn(ft(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n        :host(", ") .control{color:", "}:host(", ":hover) .control,:host(", ":active) .control{color:", "}.control:", "{outline-color:", "}"])), i, Ge.LinkText, i, i, Ge.CanvasText, an, Ge.CanvasText)));
  },
  Od = function Od(t, e, i) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "[disabled]";
    return ft(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n    :host{color:", "}.control{background:", "}:host(", ":hover) .control{background:", ";color:", "}:host(", ":active) .control{background:", ";color:", "}:host(", ") .control{background:", "}"])), gl, Yl, i, Ql, fl, i, Zl, ml, o, Yl).withBehaviors(sn(ft(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n        :host{color:", "}.control{forced-color-adjust:none;background:transparent}:host(", ":hover) .control,:host(", ":active) .control{background:transparent;border-color:", ";color:", "}:host(", ") .control{background:transparent;color:", "}.control:", "{outline-color:", "}:host([href]) .control{color:", "}:host([href]:hover) .control,:host([href]:active) .control{border-color:", ";color:", "}"])), Ge.ButtonText, i, i, Ge.ButtonText, Ge.ButtonText, o, Ge.GrayText, an, Ge.CanvasText, Ge.LinkText, Ge.LinkText, Ge.LinkText)));
  },
  Ed = function Ed(t, e, i) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "[disabled]";
    return ft(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n    .control{background:transparent !important;border-color:", "}:host(", ":hover) .control{border-color:", "}:host(", ":active) .control{border-color:", "}:host(", ") .control{background:transparent !important;border-color:", "}"])), pc, i, gc, i, fc, o, pc).withBehaviors(sn(ft(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n        .control{border-color:", ";color:", "}:host(", ":hover) .control,:host(", ":active) .control{background:", ";border-color:", ";color:", "}:host(", ") .control{border-color:", ";color:", "}.control:", "{outline-color:", "}:host([href]) .control{border-color:", ";color:", "}:host([href]:hover) .control,:host([href]:active) .control{border-color:", ";color:", "}"])), Ge.ButtonText, Ge.ButtonText, i, i, Ge.HighlightText, Ge.Highlight, Ge.Highlight, o, Ge.GrayText, Ge.GrayText, an, Ge.CanvasText, Ge.LinkText, Ge.LinkText, Ge.CanvasText, Ge.CanvasText)));
  },
  Vd = function Vd(t, e, i) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "[disabled]";
    return ft(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n    .control{background:", "}:host(", ":hover) .control{background:", "}:host(", ":active) .control{background:", "}:host(", ") .control{background:", "}"])), Yl, i, Ql, i, Zl, o, Yl).withBehaviors(sn(ft(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n        .control{forced-color-adjust:none;background:transparent;color:", "}:host(", ":hover) .control,:host(", ":active) .control{background:transparent;border-color:", ";color:", "}:host(", ") .control{background:transparent;color:", "}.control:", "{outline-color:", "}:host([href]) .control{color:", "}:host([href]:hover) .control,:host([href]:active) .control{background:transparent;border-color:", ";color:", "}"])), Ge.ButtonText, i, i, Ge.ButtonText, Ge.ButtonText, o, Ge.GrayText, an, Ge.CanvasText, Ge.LinkText, Ge.LinkText, Ge.LinkText)));
  },
  Rd = fo.create("input-placeholder-rest").withDefault(function (t) {
    var e = Tl.getValueFor(t);
    return hc.getValueFor(t).evaluate(t, e.evaluate(t).rest);
  }),
  Ad = fo.create("input-placeholder-hover").withDefault(function (t) {
    var e = Tl.getValueFor(t);
    return hc.getValueFor(t).evaluate(t, e.evaluate(t).hover);
  }),
  Ld = fo.create("input-filled-placeholder-rest").withDefault(function (t) {
    var e = ql.getValueFor(t);
    return hc.getValueFor(t).evaluate(t, e.evaluate(t).rest);
  }),
  Pd = fo.create("input-filled-placeholder-hover").withDefault(function (t) {
    var e = ql.getValueFor(t);
    return hc.getValueFor(t).evaluate(t, e.evaluate(t).hover);
  }),
  zd = function zd(t, e, i) {
    return ft(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  :host{", "\n    color:", ";fill:currentcolor;user-select:none;position:relative}", "{box-sizing:border-box;position:relative;color:inherit;border:calc(", " * 1px) solid transparent;border-radius:calc(", " * 1px);height:calc(", " * 1px);font-family:inherit;font-size:inherit;line-height:inherit}.control{width:100%;outline:none}.label{display:block;color:", ";cursor:pointer;", "\n    margin-bottom:4px}.label__hidden{display:none;visibility:hidden}:host([disabled]) ", ",:host([readonly]) ", ",:host([disabled]) .label,:host([readonly]) .label,:host([disabled]) .control,:host([readonly]) .control{cursor:", "}:host([disabled]){opacity:", "}"])), Hh, rc, i, cr, ar, Yh, rc, Hh, i, i, "not-allowed", ir);
  },
  Hd = function Hd(t, e, i) {
    return ft(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n  @media (forced-colors:none){:host(:not([disabled]):active)::after{left:50%;width:40%;transform:translateX(-50%);border-bottom-left-radius:0;border-bottom-right-radius:0}:host(:not([disabled]):focus-within)::after{left:0;width:100%;transform:none}:host(:not([disabled]):active)::after,:host(:not([disabled]):focus-within:not(:active))::after{content:'';position:absolute;height:calc(", " * 1px);bottom:0;border-bottom:calc(", " * 1px) solid ", ";border-bottom-left-radius:calc(", " * 1px);border-bottom-right-radius:calc(", " * 1px);z-index:2;transition:all 300ms cubic-bezier(0.1,0.9,0.2,1)}}"])), hr, hr, sl, ar, ar);
  },
  Md = function Md(t, e, i) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ":not([disabled]):not(:focus-within)";
    return ft(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n  ", "{background:padding-box linear-gradient(", ",", "),border-box ", "}:host(", ":hover) ", "{background:padding-box linear-gradient(", ",", "),border-box ", "}:host(:not([disabled]):focus-within) ", "{background:padding-box linear-gradient(", ",", "),border-box ", "}:host([disabled]) ", "{background:padding-box linear-gradient(", ",", "),border-box ", "}.control::placeholder{color:", "}:host(", ":hover) .control::placeholder{color:", "}"])), i, Sl, Sl, Ic, o, i, Ol, Ol, Fc, i, Vl, Vl, Ic, i, Sl, Sl, pc, Rd, o, Ad);
  },
  Bd = function Bd(t, e, i) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ":not([disabled]):not(:focus-within)";
    return ft(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n  ", "{background:", "}:host(", ":hover) ", "{background:", "}:host(:not([disabled]):focus-within) ", "{background:", "}:host([disabled]) ", "{background:", "}.control::placeholder{color:", "}:host(", ":hover) .control::placeholder{color:", "}"])), i, _l, o, i, Gl, i, Kl, i, _l, Ld, o, Pd);
  },
  Nd = function Nd(t, e, i) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ":not([disabled]):not(:focus-within)";
    return ft(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n  :host{color:", "}", "{background:", ";border-color:", "}:host(", ":hover) ", ",:host(:not([disabled]):focus-within) ", "{border-color:", "}:host([disabled]) ", "{opacity:1;background:", ";border-color:", "}.control::placeholder,:host(", ":hover) .control::placeholder{color:", "}:host(:not([disabled]):focus) ", "{", "\n    outline-color:", "}:host([disabled]){opacity:1;color:", "}:host([disabled]) ::placeholder,:host([disabled]) ::-webkit-input-placeholder{color:", "}"])), Ge.ButtonText, i, Ge.ButtonFace, Ge.ButtonText, o, i, i, Ge.Highlight, i, Ge.ButtonFace, Ge.GrayText, o, Ge.CanvasText, i, Kh, Ge.Highlight, Ge.GrayText, Ge.GrayText);
  };
function jd(t, e) {
  return new nn("appearance", t, e);
}
var Ud = function Ud(t, e) {
  return Fd().withBehaviors(jd("neutral", Dd(0, 0, "[href]")), jd("accent", Td(0, 0, "[href]")), jd("hypertext", Sd(0, 0, "[href]")), jd("lightweight", Od(0, 0, "[href]")), jd("outline", Ed(0, 0, "[href]")), jd("stealth", Vd(0, 0, "[href]")));
};
var qd = /*#__PURE__*/function (_Ze2) {
  _inherits(qd, _Ze2);
  var _super91 = _createSuper(qd);
  function qd() {
    _classCallCheck(this, qd);
    return _super91.apply(this, arguments);
  }
  _createClass(qd, [{
    key: "appearanceChanged",
    value: function appearanceChanged(t, e) {
      t !== e && (this.classList.add(e), this.classList.remove(t));
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(qd.prototype), "connectedCallback", this).call(this), this.appearance || (this.appearance = "neutral");
    }
  }, {
    key: "defaultSlottedContentChanged",
    value: function defaultSlottedContentChanged() {
      var t = this.defaultSlottedContent.filter(function (t) {
        return t.nodeType === Node.ELEMENT_NODE;
      });
      1 === t.length && t[0] instanceof SVGElement ? this.control.classList.add("icon-only") : this.control.classList.remove("icon-only");
    }
  }]);
  return qd;
}(Ze);
nd([it], qd.prototype, "appearance", void 0);
var _d = Ud,
  Gd = qd.compose({
    baseName: "anchor",
    baseClass: Ze,
    template: Ye,
    styles: Ud,
    shadowOptions: {
      delegatesFocus: !0
    }
  }),
  Wd = function Wd(t, e) {
    return ft(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n  :host{contain:layout;display:block}"])));
  },
  Kd = ei.compose({
    baseName: "anchored-region",
    template: function template(t, e) {
      return _(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["<template class=\"", "\">", "</template>"])), function (t) {
        return t.initialLayoutComplete ? "loaded" : "";
      }, Tt(function (t) {
        return t.initialLayoutComplete;
      }, _(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["<slot></slot>"])))));
    },
    styles: Wd
  }),
  Xd = Wd,
  Yd = function Yd(t, e) {
    return ft(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["\n    ", " :host{box-sizing:border-box;", "}.control{border-radius:calc(", " * 1px);padding:calc(((", " * 0.5) - ", ") * 1px) calc((", " - ", ") * 1px);border:calc(", " * 1px) solid transparent}:host(.lightweight) .control{background:transparent;color:", ";font-weight:600}:host(.accent) .control{background:", ";color:", "}:host(.neutral) .control{background:", ";color:", "}:host([circular]) .control{border-radius:100px;min-width:calc(", " - calc(", " * 1px));display:flex;align-items:center;justify-content:center}"])), rn("inline-block"), Mh, ar, rr, cr, rr, cr, cr, rc, sl, cl, _l, rc, br, rr);
  };
var Qd = /*#__PURE__*/function (_ii) {
  _inherits(Qd, _ii);
  var _super92 = _createSuper(Qd);
  function Qd() {
    var _this134;
    _classCallCheck(this, Qd);
    _this134 = _super92.apply(this, arguments), _this134.appearance = "lightweight";
    return _this134;
  }
  _createClass(Qd, [{
    key: "appearanceChanged",
    value: function appearanceChanged(t, e) {
      var _this135 = this;
      t !== e && d.queueUpdate(function () {
        _this135.classList.add(e), _this135.classList.remove(t);
      });
    }
  }]);
  return Qd;
}(ii);
nd([it({
  mode: "fromView"
})], Qd.prototype, "appearance", void 0);
var Zd = Qd.compose({
    baseName: "badge",
    baseClass: ii,
    template: function template(t, e) {
      return _(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["<template class=\"", "\"><div class=\"control\" part=\"control\" style=\"", "\"><slot></slot></div></template>"])), function (t) {
        return t.circular ? "circular" : "";
      }, function (t) {
        return t.generateBadgeStyle();
      });
    },
    styles: Yd
  }),
  Jd = Yd,
  tu = function tu(t, e) {
    return ft(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["\n  ", " :host{box-sizing:border-box;", "}.list{display:flex}"])), rn("inline-block"), Hh);
  },
  eu = si.compose({
    baseName: "breadcrumb",
    template: function template(t, e) {
      return _(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["<template role=\"navigation\"><div role=\"list\" class=\"list\" part=\"list\"><slot ", "></slot></div></template>"])), Ht({
        property: "slottedBreadcrumbItems",
        filter: Lt()
      }));
    },
    styles: tu
  }),
  iu = tu,
  ou = function ou(t, e) {
    return ft(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["\n    ", " :host{background:transparent;color:", ";fill:currentcolor;box-sizing:border-box;", ";min-width:calc(", " * 1px);border-radius:calc(", " * 1px)}.listitem{display:flex;align-items:center;border-radius:inherit}.control{position:relative;align-items:center;box-sizing:border-box;color:inherit;fill:inherit;cursor:pointer;display:flex;outline:none;text-decoration:none;white-space:nowrap;border-radius:inherit}.control:hover{color:", "}.control:active{color:", "}.control:", "{", "}:host(:not([href])),:host([aria-current]) .control{color:", ";fill:currentcolor;cursor:default}.start{display:flex;margin-inline-end:6px}.end{display:flex;margin-inline-start:6px}.separator{display:flex}"])), rn("inline-flex"), rc, Hh, Yh, ar, ac, lc, an, Xh, rc).withBehaviors(sn(ft(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["\n        :host(:not([href])),.start,.end,.separator{background:", ";color:", ";fill:currentcolor}.separator{fill:", "}:host([href]){forced-color-adjust:none;background:", ";color:", "}:host([href]) .control:hover{background:", ";color:", ";fill:currentcolor}.control:", "{outline-color:", "}"])), Ge.ButtonFace, Ge.ButtonText, Ge.ButtonText, Ge.ButtonFace, Ge.LinkText, Ge.LinkText, Ge.HighlightText, an, Ge.LinkText)));
  },
  su = oi.compose({
    baseName: "breadcrumb-item",
    template: function template(t, e) {
      return _(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["<div role=\"listitem\" class=\"listitem\" part=\"listitem\">", " ", " ", "</div>"])), Tt(function (t) {
        return t.href && t.href.length > 0;
      }, _(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral([" ", " "])), Ye(0, e))), Tt(function (t) {
        return !t.href;
      }, _(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral([" ", "<slot></slot>", " "])), Ut(0, e), jt(0, e))), Tt(function (t) {
        return t.separator;
      }, _(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["<span class=\"separator\" part=\"separator\" aria-hidden=\"true\"><slot name=\"separator\">", "</slot></span>"])), e.separator || "")));
    },
    styles: ou,
    shadowOptions: {
      delegatesFocus: !0
    },
    separator: '\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  '
  }),
  nu = ou,
  ru = function ru(t, e) {
    return ft(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["\n    :host(", ") .control{cursor:pointer}:host(", ") .control{cursor:", "}@media (forced-colors:none){:host(", ") .control{opacity:", "}}", "\n  "])), ":not([disabled])", "[disabled]", "not-allowed", "[disabled]", ir, Fd(0, 0, 0, "[disabled]")).withBehaviors(jd("neutral", Dd(0, 0, ":not([disabled])", "[disabled]")), jd("accent", Td(0, 0, ":not([disabled])", "[disabled]")), jd("lightweight", Od(0, 0, ":not([disabled])", "[disabled]")), jd("outline", Ed(0, 0, ":not([disabled])", "[disabled]")), jd("stealth", Vd(0, 0, ":not([disabled])", "[disabled]")));
  };
var au = /*#__PURE__*/function (_di) {
  _inherits(au, _di);
  var _super93 = _createSuper(au);
  function au() {
    _classCallCheck(this, au);
    return _super93.apply(this, arguments);
  }
  _createClass(au, [{
    key: "appearanceChanged",
    value: function appearanceChanged(t, e) {
      t !== e && (this.classList.add(e), this.classList.remove(t));
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(au.prototype), "connectedCallback", this).call(this), this.appearance || (this.appearance = "neutral");
    }
  }, {
    key: "defaultSlottedContentChanged",
    value: function defaultSlottedContentChanged() {
      var t = this.defaultSlottedContent.filter(function (t) {
        return t.nodeType === Node.ELEMENT_NODE;
      });
      1 === t.length && t[0] instanceof SVGElement ? this.control.classList.add("icon-only") : this.control.classList.remove("icon-only");
    }
  }]);
  return au;
}(di);
nd([it], au.prototype, "appearance", void 0);
var lu = au.compose({
    baseName: "button",
    baseClass: di,
    template: function template(t, e) {
      return _(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["<button class=\"control\" part=\"control\" ?autofocus=\"", "\" ?disabled=\"", "\" form=\"", "\" formaction=\"", "\" formenctype=\"", "\" formmethod=\"", "\" formnovalidate=\"", "\" formtarget=\"", "\" name=\"", "\" type=\"", "\" value=\"", "\" aria-atomic=\"", "\" aria-busy=\"", "\" aria-controls=\"", "\" aria-current=\"", "\" aria-describedby=\"", "\" aria-details=\"", "\" aria-disabled=\"", "\" aria-errormessage=\"", "\" aria-expanded=\"", "\" aria-flowto=\"", "\" aria-haspopup=\"", "\" aria-hidden=\"", "\" aria-invalid=\"", "\" aria-keyshortcuts=\"", "\" aria-label=\"", "\" aria-labelledby=\"", "\" aria-live=\"", "\" aria-owns=\"", "\" aria-pressed=\"", "\" aria-relevant=\"", "\" aria-roledescription=\"", "\" ", ">", "<span class=\"content\" part=\"content\"><slot ", "></slot></span>", "</button>"])), function (t) {
        return t.autofocus;
      }, function (t) {
        return t.disabled;
      }, function (t) {
        return t.formId;
      }, function (t) {
        return t.formaction;
      }, function (t) {
        return t.formenctype;
      }, function (t) {
        return t.formmethod;
      }, function (t) {
        return t.formnovalidate;
      }, function (t) {
        return t.formtarget;
      }, function (t) {
        return t.name;
      }, function (t) {
        return t.type;
      }, function (t) {
        return t.value;
      }, function (t) {
        return t.ariaAtomic;
      }, function (t) {
        return t.ariaBusy;
      }, function (t) {
        return t.ariaControls;
      }, function (t) {
        return t.ariaCurrent;
      }, function (t) {
        return t.ariaDescribedby;
      }, function (t) {
        return t.ariaDetails;
      }, function (t) {
        return t.ariaDisabled;
      }, function (t) {
        return t.ariaErrormessage;
      }, function (t) {
        return t.ariaExpanded;
      }, function (t) {
        return t.ariaFlowto;
      }, function (t) {
        return t.ariaHaspopup;
      }, function (t) {
        return t.ariaHidden;
      }, function (t) {
        return t.ariaInvalid;
      }, function (t) {
        return t.ariaKeyshortcuts;
      }, function (t) {
        return t.ariaLabel;
      }, function (t) {
        return t.ariaLabelledby;
      }, function (t) {
        return t.ariaLive;
      }, function (t) {
        return t.ariaOwns;
      }, function (t) {
        return t.ariaPressed;
      }, function (t) {
        return t.ariaRelevant;
      }, function (t) {
        return t.ariaRoledescription;
      }, Dt("control"), Ut(0, e), Ht("defaultSlottedContent"), jt(0, e));
    },
    styles: ru,
    shadowOptions: {
      delegatesFocus: !0
    }
  }),
  cu = ru,
  hu = ft(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["\n.day.disabled::before{transform:translate(-50%,0) rotate(45deg)}"]))),
  du = ft(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["\n.day.disabled::before{transform:translate(50%,0) rotate(-45deg)}"])));
var uu = /*#__PURE__*/function (_gi) {
  _inherits(uu, _gi);
  var _super94 = _createSuper(uu);
  function uu() {
    var _this136;
    _classCallCheck(this, uu);
    _this136 = _super94.apply(this, arguments), _this136.readonly = !0;
    return _this136;
  }
  return _createClass(uu);
}(gi);
nd([it({
  converter: J
})], uu.prototype, "readonly", void 0);
var pu = uu.compose({
    baseName: "calendar",
    template: function template(t, e) {
      var i;
      var o = new Date(),
        s = "".concat(o.getMonth() + 1, "-").concat(o.getDate(), "-").concat(o.getFullYear());
      return _(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["<template>", " ", "<slot></slot>", " ", " ", "</template>"])), _t, e.title instanceof Function ? e.title(t, e) : null !== (i = e.title) && void 0 !== i ? i : "", Tt(function (t) {
        return !1 === t.readonly;
      }, Ei(t, s)), Tt(function (t) {
        return !0 === t.readonly;
      }, function (t) {
        return _(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["<div class=\"days\" part=\"days\"><div class=\"week-days\" part=\"week-days\">", "</div>", "</div>"])), At(function (t) {
          return t.getWeekdayText();
        }, _(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["<div class=\"week-day\" part=\"week-day\" abbr=\"", "\">", "</div>"])), function (t) {
          return t.abbr;
        }, function (t) {
          return t.text;
        })), At(function (t) {
          return t.getDays();
        }, _(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["<div class=\"week\">", "</div>"])), At(function (t) {
          return t;
        }, _(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["<div class=\"", "\" part=\"day\" aria-label=\"", "\"><div class=\"date\" part=\"", "\">", "</div><slot name=\"", "-", "-", "\"></slot></div>"])), function (e, i) {
          return i.parentContext.parent.getDayClassNames(e, t);
        }, function (t, e) {
          return e.parentContext.parent.dateFormatter.getDate("".concat(t.month, "-").concat(t.day, "-").concat(t.year), {
            month: "long",
            day: "numeric"
          });
        }, function (e) {
          return t === "".concat(e.month, "-").concat(e.day, "-").concat(e.year) ? "today" : "date";
        }, function (t, e) {
          return e.parentContext.parent.dateFormatter.getDay(t.day);
        }, function (t) {
          return t.month;
        }, function (t) {
          return t.day;
        }, function (t) {
          return t.year;
        })))));
      }(s)), qt);
    },
    styles: function styles(t, e) {
      return ft(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["\n", " :host{--calendar-cell-size:calc((", " + 2 + ", ") * ", " * 1px);--calendar-gap:2px;", "\n  color:", "}.title{padding:calc(", " * 2px);font-weight:600}.days{text-align:center}.week-days,.week{display:grid;grid-template-columns:repeat(7,1fr);grid-gap:var(--calendar-gap);border:0;padding:0}.day,.week-day{border:0;width:var(--calendar-cell-size);height:var(--calendar-cell-size);line-height:var(--calendar-cell-size);padding:0;box-sizing:initial}.week-day{font-weight:600}.day{border:calc(", " * 1px) solid transparent;border-radius:calc(", " * 1px)}.interact .day{cursor:pointer}.date{height:100%}.inactive .date,.inactive.disabled::before{color:", "}.disabled::before{content:'';display:inline-block;width:calc(var(--calendar-cell-size) * .8);height:calc(", " * 1px);background:currentColor;position:absolute;margin-top:calc(var(--calendar-cell-size) / 2);transform-origin:center;z-index:1}.selected{color:", ";border:1px solid ", ";background:", "}.selected + .selected{border-start-start-radius:0;border-end-start-radius:0;border-inline-start-width:0;padding-inline-start:calc(var(--calendar-gap) + (", " + ", ") * 1px);margin-inline-start:calc((", " * -1px) - var(--calendar-gap))}.today.disabled::before{color:", "}.today .date{color:", ";background:", ";border-radius:50%;position:relative}"])), rn("inline-block"), or, nr, rr, Hh, rc, rr, cr, ar, dc, cr, sl, sl, el, cr, ar, ar, cl, cl, sl).withBehaviors(sn(ft(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["\n          .day.selected{color:", "}.today .date{background:", ";color:", "}"])), Ge.Highlight, Ge.Highlight, Ge.HighlightText)), new rd(hu, du));
    },
    title: Si
  }),
  gu = function gu(t, e) {
    return ft(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["\n    ", " :host{display:block;contain:content;height:var(--card-height,100%);width:var(--card-width,100%);box-sizing:border-box;background:", ";color:", ";border:calc(", " * 1px) solid ", ";border-radius:calc(", " * 1px);box-shadow:", "}:host{content-visibility:auto}"])), rn("block"), el, rc, cr, Oc, lr, md).withBehaviors(sn(ft(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["\n        :host{background:", ";color:", "}"])), Ge.Canvas, Ge.CanvasText)));
  };
var fu = /*#__PURE__*/function (_Vi) {
  _inherits(fu, _Vi);
  var _super95 = _createSuper(fu);
  function fu() {
    _classCallCheck(this, fu);
    return _super95.apply(this, arguments);
  }
  _createClass(fu, [{
    key: "cardFillColorChanged",
    value: function cardFillColorChanged(t, e) {
      if (e) {
        var _t82 = Dn(e);
        null !== _t82 && (this.neutralPaletteSource = e, el.setValueFor(this, Sn.create(_t82.r, _t82.g, _t82.b)));
      }
    }
  }, {
    key: "neutralPaletteSourceChanged",
    value: function neutralPaletteSourceChanged(t, e) {
      if (e) {
        var _t83 = Dn(e),
          _i62 = Sn.create(_t83.r, _t83.g, _t83.b);
        Ba.setValueFor(this, Ln.create(_i62));
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(t, e) {
      this.cardFillColor || el.setValueFor(this, function (e) {
        return Hl.getValueFor(e).evaluate(e, el.getValueFor(t)).rest;
      });
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(fu.prototype), "connectedCallback", this).call(this);
      var t = Qi(this);
      if (t) {
        var _e42 = g.getNotifier(t);
        _e42.subscribe(this, "fillColor"), _e42.subscribe(this, "neutralPalette"), this.handleChange(t, "fillColor");
      }
    }
  }]);
  return fu;
}(Vi);
nd([it({
  attribute: "card-fill-color",
  mode: "fromView"
})], fu.prototype, "cardFillColor", void 0), nd([it({
  attribute: "neutral-palette-source",
  mode: "fromView"
})], fu.prototype, "neutralPaletteSource", void 0);
var mu = fu.compose({
    baseName: "card",
    baseClass: Vi,
    template: function template(t, e) {
      return _(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["<slot></slot>"])));
    },
    styles: gu
  }),
  vu = gu,
  bu = function bu(t, e) {
    return ft(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["\n    ", " :host{align-items:center;outline:none;", " user-select:none}.control{position:relative;width:calc((", " / 2 + ", ") * 1px);height:calc((", " / 2 + ", ") * 1px);box-sizing:border-box;border-radius:calc(", " * 1px);border:calc(", " * 1px) solid ", ";background:", ";cursor:pointer}.label__hidden{display:none;visibility:hidden}.label{", "\n      color:", ";", " padding-inline-start:calc(", " * 2px + 2px);margin-inline-end:calc(", " * 2px + 2px);cursor:pointer}slot[name='checked-indicator'],slot[name='indeterminate-indicator']{display:flex;align-items:center;justify-content:center;width:100%;height:100%;fill:", ";opacity:0;pointer-events:none}slot[name='indeterminate-indicator']{position:absolute;top:0}:host(.checked) slot[name='checked-indicator'],:host(.checked) slot[name='indeterminate-indicator']{fill:", "}:host(:not(.disabled):hover) .control{background:", ";border-color:", "}:host(:not(.disabled):active) .control{background:", ";border-color:", "}:host(:", ") .control{background:", ";", "}:host(.checked) .control{background:", ";border-color:transparent}:host(.checked:not(.disabled):hover) .control{background:", ";border-color:transparent}:host(.checked:not(.disabled):active) .control{background:", ";border-color:transparent}:host(.disabled) .label,:host(.readonly) .label,:host(.readonly) .control,:host(.disabled) .control{cursor:", "}:host(.checked:not(.indeterminate)) slot[name='checked-indicator'],:host(.indeterminate) slot[name='indeterminate-indicator']{opacity:1}:host(.disabled){opacity:", "}"])), rn("inline-flex"), "", Yh, rr, Yh, rr, ar, cr, Ac, Al, Hh, rc, "", rr, rr, rc, cl, Ll, Lc, Pl, Pc, an, zl, Xh, sl, nl, rl, "not-allowed", ir).withBehaviors(sn(ft(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["\n        .control{border-color:", ";background:", "}:host(:not(.disabled):hover) .control,:host(:not(.disabled):active) .control{border-color:", ";background:", "}slot[name='checked-indicator'],slot[name='indeterminate-indicator']{fill:", "}:host(:", ") .control{forced-color-adjust:none;outline-color:", ";background:", ";border-color:", "}:host(.checked) .control{background:", ";border-color:", "}:host(.checked:not(.disabled):hover) .control,:host(.checked:not(.disabled):active) .control{background:", ";border-color:", "}:host(.checked) slot[name='checked-indicator'],:host(.checked) slot[name='indeterminate-indicator']{fill:", "}:host(.checked:hover ) .control slot[name='checked-indicator'],:host(.checked:hover ) .control slot[name='indeterminate-indicator']{fill:", "}:host(.disabled){opacity:1}:host(.disabled) .control{border-color:", ";background:", "}:host(.disabled) slot[name='checked-indicator'],:host(.checked.disabled:hover) .control slot[name='checked-indicator'],:host(.disabled) slot[name='indeterminate-indicator'],:host(.checked.disabled:hover) .control slot[name='indeterminate-indicator']{fill:", "}"])), Ge.FieldText, Ge.Field, Ge.Highlight, Ge.Field, Ge.FieldText, an, Ge.FieldText, Ge.Field, Ge.Highlight, Ge.Highlight, Ge.Highlight, Ge.HighlightText, Ge.Highlight, Ge.HighlightText, Ge.Highlight, Ge.GrayText, Ge.Field, Ge.GrayText)));
  },
  yu = Li.compose({
    baseName: "checkbox",
    template: function template(t, e) {
      return _(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["<template role=\"checkbox\" aria-checked=\"", "\" aria-required=\"", "\" aria-disabled=\"", "\" aria-readonly=\"", "\" tabindex=\"", "\" @keypress=\"", "\" @click=\"", "\" class=\"", " ", " ", "\"><div part=\"control\" class=\"control\"><slot name=\"checked-indicator\">", "</slot><slot name=\"indeterminate-indicator\">", "</slot></div><label part=\"label\" class=\"", "\"><slot ", "></slot></label></template>"])), function (t) {
        return t.checked;
      }, function (t) {
        return t.required;
      }, function (t) {
        return t.disabled;
      }, function (t) {
        return t.readOnly;
      }, function (t) {
        return t.disabled ? null : 0;
      }, function (t, e) {
        return t.keypressHandler(e.event);
      }, function (t, e) {
        return t.clickHandler(e.event);
      }, function (t) {
        return t.readOnly ? "readonly" : "";
      }, function (t) {
        return t.checked ? "checked" : "";
      }, function (t) {
        return t.indeterminate ? "indeterminate" : "";
      }, e.checkedIndicator || "", e.indeterminateIndicator || "", function (t) {
        return t.defaultSlottedNodes && t.defaultSlottedNodes.length ? "label" : "label label__hidden";
      }, Ht("defaultSlottedNodes"));
    },
    styles: bu,
    checkedIndicator: '\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',
    indeterminateIndicator: '\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>\n    </svg>\n  '
  }),
  xu = bu,
  $u = function $u(t, e) {
    return ft(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["\n    ", "\n    \n    :host{border-radius:calc(", " * 1px);box-sizing:border-box;color:", ";fill:currentcolor;font-family:", ";position:relative;user-select:none;min-width:250px;vertical-align:top}.listbox{box-shadow:", ";background:", ";border-radius:calc(", " * 1px);box-sizing:border-box;display:inline-flex;flex-direction:column;left:0;max-height:calc(var(--max-height) - (", " * 1px));padding:calc((", " - ", " ) * 1px);overflow-y:auto;position:absolute;width:100%;z-index:1;margin:1px 0;border:calc(", " * 1px) solid transparent}.listbox[hidden]{display:none}.control{border:calc(", " * 1px) solid transparent;border-radius:calc(", " * 1px);height:calc(", " * 1px);align-items:center;box-sizing:border-box;cursor:pointer;display:flex;", "\n      min-height:100%;padding:0 calc(", " * 2.25px);width:100%}:host(:", "){", "}:host([disabled]) .control{cursor:", ";opacity:", ";user-select:none}:host([open][position='above']) .listbox{bottom:calc((", " + ", " * 2) * 1px)}:host([open][position='below']) .listbox{top:calc((", " + ", " * 2) * 1px)}.selected-value{font-family:inherit;flex:1 1 auto;text-align:start}.indicator{flex:0 0 auto;margin-inline-start:1em}slot[name='listbox']{display:none;width:100%}:host([open]) slot[name='listbox']{display:flex;position:absolute}.start{margin-inline-end:11px}.end{margin-inline-start:11px}.start,.end,.indicator,::slotted(svg){display:flex}::slotted([role='option']){flex:0 0 auto}"])), rn("inline-flex"), ar, rc, dr, kd, el, lr, Yh, rr, cr, cr, cr, ar, Yh, Hh, rr, an, Kh, "not-allowed", ir, Yh, rr, Yh, rr);
  },
  wu = function wu(t, e) {
    return $u().withBehaviors(jd("outline", Dd(0, 0, ":not([disabled]):not([open])", "[disabled]")), jd("filled", Bd(0, 0, ".control", ":not([disabled]):not([open])").withBehaviors(sn(Nd(0, 0, ".control", ":not([disabled]):not([open])")))), jd("stealth", Vd(0, 0, ":not([disabled]):not([open])", "[disabled]")), sn(ft(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["\n    :host([open]) .listbox{background:", ";border-color:", "}"])), Ge.ButtonFace, Ge.CanvasText)));
  },
  ku = function ku(t, e) {
    return ft(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["\n    ", "\n\n    ", "\n\n    :host(:empty) .listbox{display:none}:host([disabled]) *,:host([disabled]){cursor:", ";user-select:none}:host(:active) .selected-value{user-select:none}.selected-value{-webkit-appearance:none;background:transparent;border:none;color:inherit;", "\n      height:calc(100% - ", " * 1px));margin:auto 0;width:100%;outline:none}"])), $u(), Hd(), "not-allowed", Hh, cr).withBehaviors(jd("outline", Md(0, 0, ".control", ":not([disabled]):not([open])")), jd("filled", Bd(0, 0, ".control", ":not([disabled]):not([open])")), sn(Nd(0, 0, ".control", ":not([disabled]):not([open])")));
  };
var Cu = /*#__PURE__*/function (_Xi) {
  _inherits(Cu, _Xi);
  var _super96 = _createSuper(Cu);
  function Cu() {
    _classCallCheck(this, Cu);
    return _super96.apply(this, arguments);
  }
  _createClass(Cu, [{
    key: "appearanceChanged",
    value: function appearanceChanged(t, e) {
      t !== e && (this.classList.add(e), this.classList.remove(t));
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(Cu.prototype), "connectedCallback", this).call(this), this.appearance || (this.appearance = "outline"), this.listbox && el.setValueFor(this.listbox, Ga);
    }
  }]);
  return Cu;
}(Xi);
nd([it({
  mode: "fromView"
})], Cu.prototype, "appearance", void 0);
var Iu = Cu.compose({
    baseName: "combobox",
    baseClass: Xi,
    shadowOptions: {
      delegatesFocus: !0
    },
    template: function template(t, e) {
      return _(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral(["<template aria-disabled=\"", "\" autocomplete=\"", "\" class=\"", " ", " ", "\" ?open=\"", "\" tabindex=\"", "\" @click=\"", "\" @focusout=\"", "\" @keydown=\"", "\"><div class=\"control\" part=\"control\">", "<slot name=\"control\"><input aria-activedescendant=\"", "\" aria-autocomplete=\"", "\" aria-controls=\"", "\" aria-disabled=\"", "\" aria-expanded=\"", "\" aria-haspopup=\"listbox\" class=\"selected-value\" part=\"selected-value\" placeholder=\"", "\" role=\"combobox\" type=\"text\" ?disabled=\"", "\" :value=\"", "\" @input=\"", "\" @keyup=\"", "\" ", " /><div class=\"indicator\" part=\"indicator\" aria-hidden=\"true\"><slot name=\"indicator\">", "</slot></div></slot>", "</div><div class=\"listbox\" id=\"", "\" part=\"listbox\" role=\"listbox\" ?disabled=\"", "\" ?hidden=\"", "\" ", "><slot ", "></slot></div></template>"])), function (t) {
        return t.ariaDisabled;
      }, function (t) {
        return t.autocomplete;
      }, function (t) {
        return t.open ? "open" : "";
      }, function (t) {
        return t.disabled ? "disabled" : "";
      }, function (t) {
        return t.position;
      }, function (t) {
        return t.open;
      }, function (t) {
        return t.disabled ? null : "0";
      }, function (t, e) {
        return t.clickHandler(e.event);
      }, function (t, e) {
        return t.focusoutHandler(e.event);
      }, function (t, e) {
        return t.keydownHandler(e.event);
      }, Ut(0, e), function (t) {
        return t.open ? t.ariaActiveDescendant : null;
      }, function (t) {
        return t.ariaAutoComplete;
      }, function (t) {
        return t.ariaControls;
      }, function (t) {
        return t.ariaDisabled;
      }, function (t) {
        return t.ariaExpanded;
      }, function (t) {
        return t.placeholder;
      }, function (t) {
        return t.disabled;
      }, function (t) {
        return t.value;
      }, function (t, e) {
        return t.inputHandler(e.event);
      }, function (t, e) {
        return t.keyupHandler(e.event);
      }, Dt("control"), e.indicator || "", jt(0, e), function (t) {
        return t.listboxId;
      }, function (t) {
        return t.disabled;
      }, function (t) {
        return !t.open;
      }, Dt("listbox"), Ht({
        filter: Mi.slottedOptionFilter,
        flatten: !0,
        property: "slottedOptions"
      }));
    },
    styles: ku,
    indicator: '\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  '
  }),
  Fu = ku,
  Du = function Du(t, e) {
    return ft(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral(["\n  :host{display:flex;position:relative;flex-direction:column}"])));
  },
  Tu = function Tu(t, e) {
    return ft(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral(["\n    :host{display:grid;padding:1px 0;box-sizing:border-box;width:100%;border-bottom:calc(", " * 1px) solid ", "}:host(.header){}:host(.sticky-header){background:", ";position:sticky;top:0}"])), cr, kc, el).withBehaviors(sn(ft(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral(["\n        :host{}"])))));
  },
  Su = function Su(t, e) {
    return ft(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral(["\n    :host{padding:calc((", " + ", " - ", ") * 1px) calc(((", " * 3) + ", " - ", ") * 1px);color:", ";box-sizing:border-box;", "\n      border:transparent calc(", " * 1px) solid;overflow:hidden;white-space:nowrap;border-radius:calc(", " * 1px)}:host(.column-header){font-weight:600}:host(:", "){", "}"])), rr, hr, cr, rr, hr, cr, rc, Hh, cr, ar, an, Kh).withBehaviors(sn(ft(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral(["\n        :host{forced-color-adjust:none;background:", ";color:", "}:host(:", "){outline-color:", "}"])), Ge.Field, Ge.FieldText, an, Ge.FieldText)));
  },
  Ou = Ti.compose({
    baseName: "data-grid-cell",
    template: function template(t, e) {
      return _(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral(["<template tabindex=\"-1\" role=\"", "\" class=\" ", " \"><slot></slot></template>"])), function (t) {
        return t.cellType && "default" !== t.cellType ? t.cellType : "gridcell";
      }, function (t) {
        return "columnheader" === t.cellType ? "column-header" : "rowheader" === t.cellType ? "row-header" : "";
      });
    },
    styles: Su
  }),
  Eu = Su,
  Vu = Ci.compose({
    baseName: "data-grid-row",
    template: function template(t, e) {
      return _(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral(["<template role=\"row\" class=\"", "\" :defaultCellItemTemplate=\"", "\" :defaultHeaderCellItemTemplate=\"", "\" ", "><slot ", "></slot></template>"])), function (t) {
        return "default" !== t.rowType ? t.rowType : "";
      }, function (t) {
        var e = t.tagFor(Ti);
        return _(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral(["<", " cell-type=\"", "\" grid-column=\"", "\" :rowData=\"", "\" :columnDefinition=\"", "\"></", ">"])), e, function (t) {
          return t.isRowHeader ? "rowheader" : void 0;
        }, function (t, e) {
          return e.index + 1;
        }, function (t, e) {
          return e.parent.rowData;
        }, function (t) {
          return t;
        }, e);
      }(t), function (t) {
        var e = t.tagFor(Ti);
        return _(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral(["<", " cell-type=\"columnheader\" grid-column=\"", "\" :columnDefinition=\"", "\"></", ">"])), e, function (t, e) {
          return e.index + 1;
        }, function (t) {
          return t;
        }, e);
      }(t), Bt({
        property: "cellElements",
        filter: Lt('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')
      }), Ht("slottedCellElements"));
    },
    styles: Tu
  }),
  Ru = Tu,
  Au = Ii.compose({
    baseName: "data-grid",
    template: function template(t, e) {
      var i = function (t) {
          var e = t.tagFor(Ci);
          return _(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral(["<", " :rowData=\"", "\" :cellItemTemplate=\"", "\" :headerCellItemTemplate=\"", "\"></", ">"])), e, function (t) {
            return t;
          }, function (t, e) {
            return e.parent.cellItemTemplate;
          }, function (t, e) {
            return e.parent.headerCellItemTemplate;
          }, e);
        }(t),
        o = t.tagFor(Ci);
      return _(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral(["<template role=\"grid\" tabindex=\"0\" :rowElementTag=\"", "\" :defaultRowItemTemplate=\"", "\" ", "><slot></slot></template>"])), function () {
        return o;
      }, i, Bt({
        property: "rowElements",
        filter: Lt("[role=row]")
      }));
    },
    styles: Du
  }),
  Lu = Du,
  Pu = {
    toView: function toView(t) {
      var e;
      return null == t ? null : null === (e = t) || void 0 === e ? void 0 : e.toColorString();
    },
    fromView: function fromView(t) {
      if (null == t) return null;
      var e = Dn(t);
      return e ? Sn.create(e.r, e.g, e.b) : null;
    }
  },
  zu = ft(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral(["\n  :host{background-color:", ";color:", "}"])), el, rc).withBehaviors(sn(ft(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral(["\n      :host{background-color:", ";box-shadow:0 0 0 1px ", ";color:", "}"])), Ge.Canvas, Ge.CanvasText, Ge.CanvasText)));
function Hu(t) {
  return function (e, i) {
    e[i + "Changed"] = function (e, i) {
      null != i ? t.setValueFor(this, i) : t.deleteValueFor(this);
    };
  };
}
var Mu = /*#__PURE__*/function (_Se41) {
  _inherits(Mu, _Se41);
  var _super97 = _createSuper(Mu);
  function Mu() {
    var _this137;
    _classCallCheck(this, Mu);
    _this137 = _super97.call(this), _this137.noPaint = !1;
    var t = {
      handleChange: _this137.noPaintChanged.bind(_assertThisInitialized(_this137))
    };
    g.getNotifier(_assertThisInitialized(_this137)).subscribe(t, "fillColor"), g.getNotifier(_assertThisInitialized(_this137)).subscribe(t, "baseLayerLuminance");
    return _this137;
  }
  _createClass(Mu, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(Mu.prototype), "connectedCallback", this).call(this), this.noPaintChanged();
    }
  }, {
    key: "noPaintChanged",
    value: function noPaintChanged() {
      this.noPaint || void 0 === this.fillColor && !this.baseLayerLuminance ? this.$fastController.removeStyles(zu) : this.$fastController.addStyles(zu);
    }
  }]);
  return Mu;
}(Se);
nd([it({
  attribute: "no-paint",
  mode: "boolean"
})], Mu.prototype, "noPaint", void 0), nd([it({
  attribute: "fill-color",
  converter: Pu,
  mode: "fromView"
}), Hu(el)], Mu.prototype, "fillColor", void 0), nd([it({
  attribute: "accent-base-color",
  converter: Pu,
  mode: "fromView"
}), Hu(Na)], Mu.prototype, "accentBaseColor", void 0), nd([it({
  attribute: "neutral-base-color",
  converter: Pu,
  mode: "fromView"
}), Hu(Ma)], Mu.prototype, "neutralBaseColor", void 0), nd([it({
  converter: tt
}), Hu(nr)], Mu.prototype, "density", void 0), nd([it({
  attribute: "design-unit",
  converter: tt
}), Hu(rr)], Mu.prototype, "designUnit", void 0), nd([it({
  attribute: "direction"
}), Hu(er)], Mu.prototype, "direction", void 0), nd([it({
  attribute: "base-height-multiplier",
  converter: tt
}), Hu(or)], Mu.prototype, "baseHeightMultiplier", void 0), nd([it({
  attribute: "base-horizontal-spacing-multiplier",
  converter: tt
}), Hu(sr)], Mu.prototype, "baseHorizontalSpacingMultiplier", void 0), nd([it({
  attribute: "control-corner-radius",
  converter: tt
}), Hu(ar)], Mu.prototype, "controlCornerRadius", void 0), nd([it({
  attribute: "layer-corner-radius",
  converter: tt
}), Hu(lr)], Mu.prototype, "layerCornerRadius", void 0), nd([it({
  attribute: "stroke-width",
  converter: tt
}), Hu(cr)], Mu.prototype, "strokeWidth", void 0), nd([it({
  attribute: "focus-stroke-width",
  converter: tt
}), Hu(hr)], Mu.prototype, "focusStrokeWidth", void 0), nd([it({
  attribute: "disabled-opacity",
  converter: tt
}), Hu(ir)], Mu.prototype, "disabledOpacity", void 0), nd([it({
  attribute: "type-ramp-minus-2-font-size"
}), Hu(xr)], Mu.prototype, "typeRampMinus2FontSize", void 0), nd([it({
  attribute: "type-ramp-minus-2-line-height"
}), Hu($r)], Mu.prototype, "typeRampMinus2LineHeight", void 0), nd([it({
  attribute: "type-ramp-minus-1-font-size"
}), Hu(vr)], Mu.prototype, "typeRampMinus1FontSize", void 0), nd([it({
  attribute: "type-ramp-minus-1-line-height"
}), Hu(br)], Mu.prototype, "typeRampMinus1LineHeight", void 0), nd([it({
  attribute: "type-ramp-base-font-size"
}), Hu(gr)], Mu.prototype, "typeRampBaseFontSize", void 0), nd([it({
  attribute: "type-ramp-base-line-height"
}), Hu(fr)], Mu.prototype, "typeRampBaseLineHeight", void 0), nd([it({
  attribute: "type-ramp-plus-1-font-size"
}), Hu(kr)], Mu.prototype, "typeRampPlus1FontSize", void 0), nd([it({
  attribute: "type-ramp-plus-1-line-height"
}), Hu(Cr)], Mu.prototype, "typeRampPlus1LineHeight", void 0), nd([it({
  attribute: "type-ramp-plus-2-font-size"
}), Hu(Fr)], Mu.prototype, "typeRampPlus2FontSize", void 0), nd([it({
  attribute: "type-ramp-plus-2-line-height"
}), Hu(Dr)], Mu.prototype, "typeRampPlus2LineHeight", void 0), nd([it({
  attribute: "type-ramp-plus-3-font-size"
}), Hu(Sr)], Mu.prototype, "typeRampPlus3FontSize", void 0), nd([it({
  attribute: "type-ramp-plus-3-line-height"
}), Hu(Or)], Mu.prototype, "typeRampPlus3LineHeight", void 0), nd([it({
  attribute: "type-ramp-plus-4-font-size"
}), Hu(Vr)], Mu.prototype, "typeRampPlus4FontSize", void 0), nd([it({
  attribute: "type-ramp-plus-4-line-height"
}), Hu(Rr)], Mu.prototype, "typeRampPlus4LineHeight", void 0), nd([it({
  attribute: "type-ramp-plus-5-font-size"
}), Hu(Lr)], Mu.prototype, "typeRampPlus5FontSize", void 0), nd([it({
  attribute: "type-ramp-plus-5-line-height"
}), Hu(Pr)], Mu.prototype, "typeRampPlus5LineHeight", void 0), nd([it({
  attribute: "type-ramp-plus-6-font-size"
}), Hu(Hr)], Mu.prototype, "typeRampPlus6FontSize", void 0), nd([it({
  attribute: "type-ramp-plus-6-line-height"
}), Hu(Mr)], Mu.prototype, "typeRampPlus6LineHeight", void 0), nd([it({
  attribute: "accent-fill-rest-delta",
  converter: tt
}), Hu(jr)], Mu.prototype, "accentFillRestDelta", void 0), nd([it({
  attribute: "accent-fill-hover-delta",
  converter: tt
}), Hu(Ur)], Mu.prototype, "accentFillHoverDelta", void 0), nd([it({
  attribute: "accent-fill-active-delta",
  converter: tt
}), Hu(qr)], Mu.prototype, "accentFillActiveDelta", void 0), nd([it({
  attribute: "accent-fill-focus-delta",
  converter: tt
}), Hu(_r)], Mu.prototype, "accentFillFocusDelta", void 0), nd([it({
  attribute: "accent-foreground-rest-delta",
  converter: tt
}), Hu(Gr)], Mu.prototype, "accentForegroundRestDelta", void 0), nd([it({
  attribute: "accent-foreground-hover-delta",
  converter: tt
}), Hu(Wr)], Mu.prototype, "accentForegroundHoverDelta", void 0), nd([it({
  attribute: "accent-foreground-active-delta",
  converter: tt
}), Hu(Kr)], Mu.prototype, "accentForegroundActiveDelta", void 0), nd([it({
  attribute: "accent-foreground-focus-delta",
  converter: tt
}), Hu(Xr)], Mu.prototype, "accentForegroundFocusDelta", void 0), nd([it({
  attribute: "neutral-fill-rest-delta",
  converter: tt
}), Hu(Yr)], Mu.prototype, "neutralFillRestDelta", void 0), nd([it({
  attribute: "neutral-fill-hover-delta",
  converter: tt
}), Hu(Qr)], Mu.prototype, "neutralFillHoverDelta", void 0), nd([it({
  attribute: "neutral-fill-active-delta",
  converter: tt
}), Hu(Zr)], Mu.prototype, "neutralFillActiveDelta", void 0), nd([it({
  attribute: "neutral-fill-focus-delta",
  converter: tt
}), Hu(Jr)], Mu.prototype, "neutralFillFocusDelta", void 0), nd([it({
  attribute: "neutral-fill-input-rest-delta",
  converter: tt
}), Hu(ta)], Mu.prototype, "neutralFillInputRestDelta", void 0), nd([it({
  attribute: "neutral-fill-input-hover-delta",
  converter: tt
}), Hu(ea)], Mu.prototype, "neutralFillInputHoverDelta", void 0), nd([it({
  attribute: "neutral-fill-input-active-delta",
  converter: tt
}), Hu(ia)], Mu.prototype, "neutralFillInputActiveDelta", void 0), nd([it({
  attribute: "neutral-fill-input-focus-delta",
  converter: tt
}), Hu(oa)], Mu.prototype, "neutralFillInputFocusDelta", void 0), nd([it({
  attribute: "neutral-fill-layer-rest-delta",
  converter: tt
}), Hu(la)], Mu.prototype, "neutralFillLayerRestDelta", void 0), nd([it({
  attribute: "neutral-fill-stealth-rest-delta",
  converter: tt
}), Hu(ma)], Mu.prototype, "neutralFillStealthRestDelta", void 0), nd([it({
  attribute: "neutral-fill-stealth-hover-delta",
  converter: tt
}), Hu(va)], Mu.prototype, "neutralFillStealthHoverDelta", void 0), nd([it({
  attribute: "neutral-fill-stealth-active-delta",
  converter: tt
}), Hu(ba)], Mu.prototype, "neutralFillStealthActiveDelta", void 0), nd([it({
  attribute: "neutral-fill-stealth-focus-delta",
  converter: tt
}), Hu(ya)], Mu.prototype, "neutralFillStealthFocusDelta", void 0), nd([it({
  attribute: "neutral-fill-strong-hover-delta",
  converter: tt
}), Hu($a)], Mu.prototype, "neutralFillStrongHoverDelta", void 0), nd([it({
  attribute: "neutral-fill-strong-active-delta",
  converter: tt
}), Hu(wa)], Mu.prototype, "neutralFillStrongActiveDelta", void 0), nd([it({
  attribute: "neutral-fill-strong-focus-delta",
  converter: tt
}), Hu(ka)], Mu.prototype, "neutralFillStrongFocusDelta", void 0), nd([it({
  attribute: "base-layer-luminance",
  converter: tt
}), Hu(Nr)], Mu.prototype, "baseLayerLuminance", void 0), nd([it({
  attribute: "neutral-stroke-divider-rest-delta",
  converter: tt
}), Hu(Va)], Mu.prototype, "neutralStrokeDividerRestDelta", void 0), nd([it({
  attribute: "neutral-stroke-rest-delta",
  converter: tt
}), Hu(Ca)], Mu.prototype, "neutralStrokeRestDelta", void 0), nd([it({
  attribute: "neutral-stroke-hover-delta",
  converter: tt
}), Hu(Ia)], Mu.prototype, "neutralStrokeHoverDelta", void 0), nd([it({
  attribute: "neutral-stroke-active-delta",
  converter: tt
}), Hu(Fa)], Mu.prototype, "neutralStrokeActiveDelta", void 0), nd([it({
  attribute: "neutral-stroke-focus-delta",
  converter: tt
}), Hu(Da)], Mu.prototype, "neutralStrokeFocusDelta", void 0);
var Bu = Mu.compose({
    baseName: "design-system-provider",
    template: _(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral(["<slot></slot>"]))),
    styles: ft(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral(["\n    ", "\n  "])), rn("block"))
  }),
  Nu = function Nu(t, e) {
    return ft(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral(["\n  :host([hidden]){display:none}:host{--dialog-height:480px;--dialog-width:640px;display:block}.overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.3);touch-action:none}.positioning-region{display:flex;justify-content:center;position:fixed;top:0;bottom:0;left:0;right:0;overflow:auto}.control{box-shadow:", ";margin-top:auto;margin-bottom:auto;border-radius:calc(", " * 1px);width:var(--dialog-width);height:var(--dialog-height);background:", ";z-index:1;border:calc(", " * 1px) solid transparent}"])), Id, lr, el, cr);
  },
  ju = Ao.compose({
    baseName: "dialog",
    template: function template(t, e) {
      return _(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral(["<div class=\"positioning-region\" part=\"positioning-region\">", "<div role=\"dialog\" tabindex=\"-1\" class=\"control\" part=\"control\" aria-modal=\"", "\" aria-describedby=\"", "\" aria-labelledby=\"", "\" aria-label=\"", "\" ", "><slot></slot></div></div>"])), Tt(function (t) {
        return t.modal;
      }, _(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral(["<div class=\"overlay\" part=\"overlay\" role=\"presentation\" @click=\"", "\"></div>"])), function (t) {
        return t.dismiss();
      })), function (t) {
        return t.modal;
      }, function (t) {
        return t.ariaDescribedby;
      }, function (t) {
        return t.ariaLabelledby;
      }, function (t) {
        return t.ariaLabel;
      }, Dt("dialog"));
    },
    styles: Nu
  }),
  Uu = Nu,
  qu = function qu(t, e) {
    return ft(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral(["\n    ", " :host{box-sizing:content-box;height:0;border:none;border-top:calc(", " * 1px) solid ", "}"])), rn("block"), cr, kc);
  },
  _u = Po.compose({
    baseName: "divider",
    template: function template(t, e) {
      return _(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral(["<template role=\"", "\" aria-orientation=\"", "\"></template>"])), function (t) {
        return t.role;
      }, function (t) {
        return t.orientation;
      });
    },
    styles: qu
  }),
  Gu = qu,
  Wu = function Wu(t, e) {
    return ft(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral(["\n    ", " :host{height:calc((", " + ", ") * 1px);justify-content:center;align-items:center;fill:currentcolor;color:", ";background:padding-box linear-gradient(", ",", "),border-box ", ";box-sizing:border-box;border:calc(", " * 1px) solid transparent;border-radius:calc(", " * 1px);padding:0}:host(.disabled){opacity:", ";cursor:", ";pointer-events:none}.next,.previous{display:flex}:host(:not(.disabled):hover){cursor:pointer}:host(:not(.disabled):hover){color:", "}:host(:not(.disabled):active){color:", "}:host(:", "){", "}:host::-moz-focus-inner{border:0}"])), rn("inline-flex"), Yh, rr, ec, Cl, Cl, bc, cr, ar, ir, "not-allowed", ic, oc, an, Kh).withBehaviors(sn(ft(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral(["\n        :host{background:", ";border-color:", "}:host .next,:host .previous{color:", ";fill:currentcolor}:host(:not(.disabled):hover){background:", "}:host(:not(.disabled):hover) .next,:host(:not(.disabled):hover) .previous{color:", ";fill:currentcolor}:host(.disabled){opacity:1}:host(.disabled),:host(.disabled) .next,:host(.disabled) .previous{border-color:", ";color:", ";fill:currentcolor}:host(:", "){forced-color-adjust:none;outline-color:", "}"])), Ge.ButtonFace, Ge.ButtonText, Ge.ButtonText, Ge.Highlight, Ge.HighlightText, Ge.GrayText, Ge.GrayText, an, Ge.Highlight)));
  },
  Ku = Mo.compose({
    baseName: "flipper",
    template: function template(t, e) {
      return _(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral(["<template role=\"button\" aria-disabled=\"", "\" tabindex=\"", "\" class=\"", " ", "\" @keyup=\"", "\">", " ", "</template>"])), function (t) {
        return !!t.disabled || void 0;
      }, function (t) {
        return t.hiddenFromAT ? -1 : 0;
      }, function (t) {
        return t.direction;
      }, function (t) {
        return t.disabled ? "disabled" : "";
      }, function (t, e) {
        return t.keyupHandler(e.event);
      }, Tt(function (t) {
        return t.direction === zo;
      }, _(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral(["<span part=\"next\" class=\"next\"><slot name=\"next\">", "</slot></span>"])), e.next || "")), Tt(function (t) {
        return t.direction === Ho;
      }, _(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral(["<span part=\"previous\" class=\"previous\"><slot name=\"previous\">", "</slot></span>"])), e.previous || "")));
    },
    styles: Wu,
    next: '\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M7.57 11.84A1 1 0 016 11.02V4.98a1 1 0 011.57-.82l3.79 2.62c.85.59.85 1.85 0 2.44l-3.79 2.62z"/>\n    </svg>\n  ',
    previous: '\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M9.43 11.84a1 1 0 001.57-.82V4.98a1 1 0 00-1.57-.82L5.64 6.78c-.85.59-.85 1.85 0 2.44l3.79 2.62z"/>\n    </svg>\n  '
  }),
  Xu = Wu,
  Yu = ft(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral(["\n  .scroll-prev{right:auto;left:0}.scroll.scroll-next::before,.scroll-next .scroll-action{left:auto;right:0}.scroll.scroll-next::before{background:linear-gradient(to right,transparent,var(--scroll-fade-next))}.scroll-next .scroll-action{transform:translate(50%,-50%)}"]))),
  Qu = ft(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral(["\n  .scroll.scroll-next{right:auto;left:0}.scroll.scroll-next::before{background:linear-gradient(to right,var(--scroll-fade-next),transparent);left:auto;right:0}.scroll.scroll-prev::before{background:linear-gradient(to right,transparent,var(--scroll-fade-previous))}.scroll-prev .scroll-action{left:auto;right:0;transform:translate(50%,-50%)}"]))),
  Zu = ft(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral(["\n  .scroll-area{position:relative}div.scroll-view{overflow-x:hidden}.scroll{bottom:0;pointer-events:none;position:absolute;right:0;top:0;user-select:none;width:100px}.scroll.disabled{display:none}.scroll::before,.scroll-action{left:0;position:absolute}.scroll::before{background:linear-gradient(to right,var(--scroll-fade-previous),transparent);content:'';display:block;height:100%;width:100%}.scroll-action{pointer-events:auto;right:auto;top:50%;transform:translate(-50%,-50%)}::slotted(fluent-flipper){opacity:0;transition:opacity 0.2s ease-in-out}.scroll-area:hover ::slotted(fluent-flipper){opacity:1}"]))).withBehaviors(new rd(Yu, Qu)),
  Ju = function Ju(t, e) {
    return ft(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral(["\n  ", " :host{--scroll-align:center;--scroll-item-spacing:4px;contain:layout;position:relative}.scroll-view{overflow-x:auto;scrollbar-width:none}::-webkit-scrollbar{display:none}.content-container{align-items:var(--scroll-align);display:inline-flex;flex-wrap:nowrap;position:relative}.content-container ::slotted(*){margin-right:var(--scroll-item-spacing)}.content-container ::slotted(*:last-child){margin-right:0}"])), rn("block"));
  };
var tp = /*#__PURE__*/function (_rs) {
  _inherits(tp, _rs);
  var _super98 = _createSuper(tp);
  function tp() {
    _classCallCheck(this, tp);
    return _super98.apply(this, arguments);
  }
  _createClass(tp, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(tp.prototype), "connectedCallback", this).call(this), "mobile" !== this.view && this.$fastController.addStyles(Zu);
    }
  }]);
  return tp;
}(rs);
var ep = tp.compose({
    baseName: "horizontal-scroll",
    baseClass: rs,
    template: function template(t, e) {
      var i, o;
      return _(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral(["<template class=\"horizontal-scroll\" @keyup=\"", "\">", "<div class=\"scroll-area\" part=\"scroll-area\"><div class=\"scroll-view\" part=\"scroll-view\" @scroll=\"", "\" ", "><div class=\"content-container\" part=\"content-container\" ", "><slot ", "></slot></div></div>", "</div>", "</template>"])), function (t, e) {
        return t.keyupHandler(e.event);
      }, Ut(0, e), function (t) {
        return t.scrolled();
      }, Dt("scrollContainer"), Dt("content"), Ht({
        property: "scrollItems",
        filter: Lt()
      }), Tt(function (t) {
        return "mobile" !== t.view;
      }, _(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral(["<div class=\"scroll scroll-prev\" part=\"scroll-prev\" ", "><div class=\"scroll-action\" part=\"scroll-action-previous\"><slot name=\"previous-flipper\">", "</slot></div></div><div class=\"scroll scroll-next\" part=\"scroll-next\" ", "><div class=\"scroll-action\" part=\"scroll-action-next\"><slot name=\"next-flipper\">", "</slot></div></div>"])), Dt("previousFlipperContainer"), e.previousFlipper instanceof Function ? e.previousFlipper(t, e) : null !== (i = e.previousFlipper) && void 0 !== i ? i : "", Dt("nextFlipperContainer"), e.nextFlipper instanceof Function ? e.nextFlipper(t, e) : null !== (o = e.nextFlipper) && void 0 !== o ? o : "")), jt(0, e));
    },
    styles: Ju,
    nextFlipper: _(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral(["<fluent-flipper @click=\"", "\" aria-hidden=\"", "\"></fluent-flipper>"])), function (t) {
      return t.scrollToNext();
    }, function (t) {
      return t.flippersHiddenFromAT;
    }),
    previousFlipper: _(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral(["<fluent-flipper @click=\"", "\" direction=\"previous\" aria-hidden=\"", "\"></fluent-flipper>"])), function (t) {
      return t.scrollToPrevious();
    }, function (t) {
      return t.flippersHiddenFromAT;
    })
  }),
  ip = Ju,
  op = function op(t, e) {
    return ft(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral(["\n    ", " :host{border:calc(", " * 1px) solid ", ";border-radius:calc(", " * 1px);box-sizing:border-box;flex-direction:column;padding:calc(", " * 1px) 0}::slotted(", "){margin:0 calc(", " * 1px)}:host(:focus-within:not([disabled])){", "}"])), rn("inline-flex"), cr, pc, ar, rr, t.tagFor(zi), rr, Kh);
  };
var sp = /*#__PURE__*/function (_Mi3) {
  _inherits(sp, _Mi3);
  var _super99 = _createSuper(sp);
  function sp() {
    _classCallCheck(this, sp);
    return _super99.apply(this, arguments);
  }
  return _createClass(sp);
}(Mi);
var np = sp.compose({
    baseName: "listbox",
    template: function template(t, e) {
      return _(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral(["<template aria-activedescendant=\"", "\" aria-multiselectable=\"", "\" class=\"listbox\" role=\"listbox\" tabindex=\"", "\" @click=\"", "\" @focusin=\"", "\" @keydown=\"", "\" @mousedown=\"", "\"><slot ", "></slot></template>"])), function (t) {
        return t.ariaActiveDescendant;
      }, function (t) {
        return t.ariaMultiSelectable;
      }, function (t) {
        return t.disabled ? null : "0";
      }, function (t, e) {
        return t.clickHandler(e.event);
      }, function (t, e) {
        return t.focusinHandler(e.event);
      }, function (t, e) {
        return t.keydownHandler(e.event);
      }, function (t, e) {
        return t.mousedownHandler(e.event);
      }, Ht({
        filter: Bo.slottedOptionFilter,
        flatten: !0,
        property: "slottedOptions"
      }));
    },
    styles: op
  }),
  rp = op,
  ap = function ap(t, e) {
    return ft(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral(["\n    ", " :host{position:relative;", "\n      background:", ";border-radius:calc(", " * 1px);border:calc(", " * 1px) solid transparent;box-sizing:border-box;color:", ";cursor:pointer;fill:currentcolor;height:calc(", " * 1px);overflow:hidden;align-items:center;padding:0 calc(((", " * 3) - ", " - 1) * 1px);user-select:none;white-space:nowrap}:host::before{content:'';display:block;position:absolute;left:calc((", " - ", ") * 1px);top:calc((", " / 4) - ", " * 1px);width:3px;height:calc((", " / 2) * 1px);background:transparent;border-radius:calc(", " * 1px)}:host(:not([disabled]):hover){background:", "}:host(:not([disabled]):active){background:", "}:host(:not([disabled]):active)::before{background:", ";height:calc(((", " / 2) - 6) * 1px)}:host([aria-selected='true'])::before{background:", "}:host(:", "){", "\n      background:", "}:host([aria-selected='true']){background:", "}:host(:not([disabled])[aria-selected='true']:hover){background:", "}:host(:not([disabled])[aria-selected='true']:active){background:", "}:host(:not([disabled]):not([aria-selected='true']):hover){background:", "}:host(:not([disabled]):not([aria-selected='true']):active){background:", "}:host([disabled]){cursor:", ";opacity:", "}.content{grid-column-start:2;justify-self:start;overflow:hidden;text-overflow:ellipsis}.start,.end,::slotted(svg){display:flex}::slotted([slot='end']){margin-inline-start:1ch}::slotted([slot='start']){margin-inline-end:1ch}"])), rn("inline-flex"), Hh, Yl, ar, cr, rc, Yh, rr, cr, hr, cr, Yh, hr, Yh, ar, Ql, Zl, sl, Yh, sl, an, Kh, Jl, _l, Gl, Wl, Ql, Zl, "not-allowed", ir).withBehaviors(sn(ft(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral(["\n        :host{background:", ";border-color:", ";color:", "}:host(:not([disabled]):not([aria-selected=\"true\"]):hover),:host(:not([disabled])[aria-selected=\"true\"]:hover),:host([aria-selected=\"true\"]){forced-color-adjust:none;background:", ";color:", "}:host(:not([disabled]):active)::before,:host([aria-selected='true'])::before{background:", "}:host([disabled]),:host([disabled]:not([aria-selected='true']):hover){background:", ";color:", ";fill:currentcolor;opacity:1}:host(:", "){outline-color:", "}"])), Ge.ButtonFace, Ge.ButtonFace, Ge.ButtonText, Ge.Highlight, Ge.HighlightText, Ge.HighlightText, Ge.Canvas, Ge.GrayText, an, Ge.CanvasText)));
  },
  lp = zi.compose({
    baseName: "option",
    template: function template(t, e) {
      return _(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral(["<template aria-checked=\"", "\" aria-disabled=\"", "\" aria-posinset=\"", "\" aria-selected=\"", "\" aria-setsize=\"", "\" class=\"", "\" role=\"option\">", "<span class=\"content\" part=\"content\"><slot ", "></slot></span>", "</template>"])), function (t) {
        return t.ariaChecked;
      }, function (t) {
        return t.ariaDisabled;
      }, function (t) {
        return t.ariaPosInSet;
      }, function (t) {
        return t.ariaSelected;
      }, function (t) {
        return t.ariaSetSize;
      }, function (t) {
        return [t.checked && "checked", t.selected && "selected", t.disabled && "disabled"].filter(Boolean).join(" ");
      }, Ut(0, e), Ht("content"), jt(0, e));
    },
    styles: ap
  }),
  cp = ap,
  hp = function hp(t, e) {
    return ft(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral(["\n    ", " :host{background:", ";border:calc(", " * 1px) solid transparent;border-radius:calc(", " * 1px);box-shadow:", ";padding:calc((", " - ", ") * 1px) 0;max-width:368px;min-width:64px}:host([slot='submenu']){width:max-content;margin:0 calc(", " * 2px)}::slotted(", "){margin:0 calc(", " * 1px)}::slotted(", "){margin:calc(", " * 1px) 0}::slotted(hr){box-sizing:content-box;height:0;margin:calc(", " * 1px) 0;border:none;border-top:calc(", " * 1px) solid ", "}"])), rn("block"), Ga, cr, lr, kd, rr, cr, rr, t.tagFor(_o), rr, t.tagFor(Po), rr, rr, cr, kc).withBehaviors(sn(ft(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral(["\n        :host([slot='submenu']){background:", ";border-color:", "}"])), Ge.Canvas, Ge.CanvasText)));
  };
var dp = /*#__PURE__*/function (_Go) {
  _inherits(dp, _Go);
  var _super100 = _createSuper(dp);
  function dp() {
    _classCallCheck(this, dp);
    return _super100.apply(this, arguments);
  }
  _createClass(dp, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(dp.prototype), "connectedCallback", this).call(this), el.setValueFor(this, Ga);
    }
  }]);
  return dp;
}(Go);
var up = dp.compose({
    baseName: "menu",
    baseClass: Go,
    template: function template(t, e) {
      return _(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral(["<template slot=\"", "\" role=\"menu\" @keydown=\"", "\" @focusout=\"", "\"><slot ", "></slot></template>"])), function (t) {
        return t.slot ? t.slot : t.isNestedMenu() ? "submenu" : void 0;
      }, function (t, e) {
        return t.handleMenuKeyDown(e.event);
      }, function (t, e) {
        return t.handleFocusOut(e.event);
      }, Ht("items"));
    },
    styles: hp
  }),
  pp = hp,
  gp = function gp(t, e) {
    return ft(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral(["\n    ", " :host{contain:layout;overflow:visible;", "\n      box-sizing:border-box;height:calc(", " * 1px);grid-template-columns:minmax(32px,auto) 1fr minmax(32px,auto);grid-template-rows:auto;justify-items:center;align-items:center;padding:0;white-space:nowrap;color:", ";fill:currentcolor;cursor:pointer;border-radius:calc(", " * 1px);border:calc(", " * 1px) solid transparent}:host(.indent-0){grid-template-columns:auto 1fr minmax(32px,auto)}:host(.indent-0) .content{grid-column:1;grid-row:1;margin-inline-start:10px}:host(.indent-0) .expand-collapse-glyph-container{grid-column:5;grid-row:1}:host(.indent-2){grid-template-columns:minmax(32px,auto) minmax(32px,auto) 1fr minmax(32px,auto) minmax(32px,auto)}:host(.indent-2) .content{grid-column:3;grid-row:1;margin-inline-start:10px}:host(.indent-2) .expand-collapse-glyph-container{grid-column:5;grid-row:1}:host(.indent-2) .start{grid-column:2}:host(.indent-2) .end{grid-column:4}:host(:", "){", "}:host(:not([disabled]):hover){background:", "}:host(:not([disabled]):active),:host(.expanded){background:", ";color:", "}:host([disabled]){cursor:", ";opacity:", "}.content{grid-column-start:2;justify-self:start;overflow:hidden;text-overflow:ellipsis}.start,.end{display:flex;justify-content:center}:host(.indent-0[aria-haspopup='menu']){display:grid;grid-template-columns:minmax(32px,auto) auto 1fr minmax(32px,auto) minmax(32px,auto);align-items:center;min-height:32px}:host(.indent-1[aria-haspopup='menu']),:host(.indent-1[role='menuitemcheckbox']),:host(.indent-1[role='menuitemradio']){display:grid;grid-template-columns:minmax(32px,auto) auto 1fr minmax(32px,auto) minmax(32px,auto);align-items:center;min-height:32px}:host(.indent-2:not([aria-haspopup='menu'])) .end{grid-column:5}:host .input-container,:host .expand-collapse-glyph-container{display:none}:host([aria-haspopup='menu']) .expand-collapse-glyph-container,:host([role='menuitemcheckbox']) .input-container,:host([role='menuitemradio']) .input-container{display:grid}:host([aria-haspopup='menu']) .content,:host([role='menuitemcheckbox']) .content,:host([role='menuitemradio']) .content{grid-column-start:3}:host([aria-haspopup='menu'].indent-0) .content{grid-column-start:1}:host([aria-haspopup='menu']) .end,:host([role='menuitemcheckbox']) .end,:host([role='menuitemradio']) .end{grid-column-start:4}:host .expand-collapse,:host .checkbox,:host .radio{display:flex;align-items:center;justify-content:center;position:relative;box-sizing:border-box}:host .checkbox-indicator,:host .radio-indicator,slot[name='checkbox-indicator'],slot[name='radio-indicator']{display:none}::slotted([slot='end']:not(svg)){margin-inline-end:10px;color:", "}:host([aria-checked='true']) .checkbox-indicator,:host([aria-checked='true']) slot[name='checkbox-indicator'],:host([aria-checked='true']) .radio-indicator,:host([aria-checked='true']) slot[name='radio-indicator']{display:flex}"])), rn("grid"), Hh, Yh, rc, ar, cr, an, Kh, Ql, Zl, rc, "not-allowed", ir, dc).withBehaviors(sn(ft(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral(["\n        :host,::slotted([slot='end']:not(svg)){forced-color-adjust:none;color:", ";fill:currentcolor}:host(:not([disabled]):hover){background:", ";color:", ";fill:currentcolor}:host(:hover) .start,:host(:hover) .end,:host(:hover)::slotted(svg),:host(:active) .start,:host(:active) .end,:host(:active)::slotted(svg),:host(:hover) ::slotted([slot='end']:not(svg)),:host(:", ") ::slotted([slot='end']:not(svg)){color:", ";fill:currentcolor}:host(.expanded){background:", ";color:", "}:host(:", "){background:", ";outline-color:", ";color:", ";fill:currentcolor}:host([disabled]),:host([disabled]:hover),:host([disabled]:hover) .start,:host([disabled]:hover) .end,:host([disabled]:hover)::slotted(svg),:host([disabled]:", "){background:", ";color:", ";fill:currentcolor;opacity:1}:host([disabled]:", "){outline-color:", "}:host .expanded-toggle,:host .checkbox,:host .radio{border-color:", ";background:", "}:host([checked]) .checkbox,:host([checked]) .radio{background:", ";border-color:", "}:host(:hover) .expanded-toggle,:host(:hover) .checkbox,:host(:hover) .radio,:host(:", ") .expanded-toggle,:host(:", ") .checkbox,:host(:", ") .radio,:host([checked]:hover) .checkbox,:host([checked]:hover) .radio,:host([checked]:", ") .checkbox,:host([checked]:", ") .radio{border-color:", "}:host([aria-checked='true']){background:", ";color:", "}:host([aria-checked='true']) .checkbox-indicator,:host([aria-checked='true']) ::slotted([slot='checkbox-indicator']),:host([aria-checked='true']) ::slotted([slot='radio-indicator']){fill:", "}:host([aria-checked='true']) .radio-indicator{background:", "}"])), Ge.ButtonText, Ge.Highlight, Ge.HighlightText, an, Ge.HighlightText, Ge.Highlight, Ge.HighlightText, an, Ge.Highlight, Ge.ButtonText, Ge.HighlightText, an, Ge.ButtonFace, Ge.GrayText, an, Ge.GrayText, Ge.ButtonText, Ge.HighlightText, Ge.HighlightText, Ge.HighlightText, an, an, an, an, an, Ge.HighlightText, Ge.Highlight, Ge.HighlightText, Ge.Highlight, Ge.Highlight)), new rd(ft(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral(["\n        .expand-collapse-glyph-container{transform:rotate(0deg)}"]))), ft(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral(["\n        .expand-collapse-glyph-container{transform:rotate(180deg)}"])))));
  },
  fp = _o.compose({
    baseName: "menu-item",
    template: function template(t, e) {
      return _(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral(["<template role=\"", "\" aria-haspopup=\"", "\" aria-checked=\"", "\" aria-disabled=\"", "\" aria-expanded=\"", "\" @keydown=\"", "\" @click=\"", "\" @mouseover=\"", "\" @mouseout=\"", "\" class=\"", " ", " ", "\">", " ", "</div>", "<span class=\"content\" part=\"content\"><slot></slot></span>", " ", " ", "</template>"])), function (t) {
        return t.role;
      }, function (t) {
        return t.hasSubmenu ? "menu" : void 0;
      }, function (t) {
        return t.role !== No ? t.checked : void 0;
      }, function (t) {
        return t.disabled;
      }, function (t) {
        return t.expanded;
      }, function (t, e) {
        return t.handleMenuItemKeyDown(e.event);
      }, function (t, e) {
        return t.handleMenuItemClick(e.event);
      }, function (t, e) {
        return t.handleMouseOver(e.event);
      }, function (t, e) {
        return t.handleMouseOut(e.event);
      }, function (t) {
        return t.disabled ? "disabled" : "";
      }, function (t) {
        return t.expanded ? "expanded" : "";
      }, function (t) {
        return "indent-" + t.startColumnCount;
      }, Tt(function (t) {
        return t.role === jo;
      }, _(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral(["<div part=\"input-container\" class=\"input-container\"><span part=\"checkbox\" class=\"checkbox\"><slot name=\"checkbox-indicator\">", "</slot></span></div>"])), e.checkboxIndicator || "")), Tt(function (t) {
        return t.role === Uo;
      }, _(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral(["<div part=\"input-container\" class=\"input-container\"><span part=\"radio\" class=\"radio\"><slot name=\"radio-indicator\">", "</slot></span></div>"])), e.radioIndicator || "")), Ut(0, e), jt(0, e), Tt(function (t) {
        return t.hasSubmenu;
      }, _(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral(["<div part=\"expand-collapse-glyph-container\" class=\"expand-collapse-glyph-container\"><span part=\"expand-collapse\" class=\"expand-collapse\"><slot name=\"expand-collapse-indicator\">", "</slot></span></div>"])), e.expandCollapseGlyph || "")), Tt(function (t) {
        return t.expanded;
      }, _(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral(["<", " :anchorElement=\"", "\" vertical-positioning-mode=\"dynamic\" vertical-default-position=\"bottom\" vertical-inset=\"true\" horizontal-positioning-mode=\"dynamic\" horizontal-default-position=\"end\" class=\"submenu-region\" dir=\"", "\" @loaded=\"", "\" ", " part=\"submenu-region\"><slot name=\"submenu\"></slot></", ">"])), t.tagFor(ei), function (t) {
        return t;
      }, function (t) {
        return t.currentDirection;
      }, function (t) {
        return t.submenuLoaded();
      }, Dt("submenuRegion"), t.tagFor(ei))));
    },
    styles: gp,
    checkboxIndicator: '\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',
    expandCollapseGlyph: '\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M5.65 3.15a.5.5 0 000 .7L9.79 8l-4.14 4.15a.5.5 0 00.7.7l4.5-4.5a.5.5 0 000-.7l-4.5-4.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  ',
    radioIndicator: '\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="8" cy="8" r="2"/>\n    </svg>\n  '
  }),
  mp = gp,
  vp = function vp(t, e) {
    return ft(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral(["\n    ", "\n\n    ", "\n\n    ", "\n\n    .root{display:flex;flex-direction:row}.control{-webkit-appearance:none;color:inherit;background:transparent;border:0;height:calc(100% - 4px);margin-top:auto;margin-bottom:auto;padding:0 calc(", " * 2px + 1px);font-family:inherit;font-size:inherit;line-height:inherit}.start,.end{margin:auto;fill:currentcolor}.start{display:flex;margin-inline-start:11px}.end{display:flex;margin-inline-end:11px}.controls{opacity:0;position:relative;top:-1px;z-index:3}:host(:hover:not([disabled])) .controls,:host(:focus-within:not([disabled])) .controls{opacity:1}.step-up,.step-down{display:flex;padding:0 8px;cursor:pointer}.step-up{padding-top:3px}"])), rn("inline-block"), zd(0, 0, ".root"), Hd(), rr).withBehaviors(jd("outline", Md(0, 0, ".root")), jd("filled", Bd(0, 0, ".root")), sn(Nd(0, 0, ".root")));
  };
var bp = /*#__PURE__*/function (_ts) {
  _inherits(bp, _ts);
  var _super101 = _createSuper(bp);
  function bp() {
    _classCallCheck(this, bp);
    return _super101.apply(this, arguments);
  }
  _createClass(bp, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(bp.prototype), "connectedCallback", this).call(this), this.appearance || (this.appearance = "outline");
    }
  }]);
  return bp;
}(ts);
nd([it], bp.prototype, "appearance", void 0);
var yp = vp,
  xp = bp.compose({
    baseName: "number-field",
    baseClass: ts,
    styles: vp,
    template: function template(t, e) {
      return _(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral(["<template class=\"", "\"><label part=\"label\" for=\"control\" class=\"", "\"><slot ", "></slot></label><div class=\"root\" part=\"root\">", "<input class=\"control\" part=\"control\" id=\"control\" @input=\"", "\" @change=\"", "\" @keydown=\"", "\" @blur=\"", "\" ?autofocus=\"", "\" ?disabled=\"", "\" list=\"", "\" maxlength=\"", "\" minlength=\"", "\" placeholder=\"", "\" ?readonly=\"", "\" ?required=\"", "\" size=\"", "\" type=\"text\" inputmode=\"numeric\" min=\"", "\" max=\"", "\" step=\"", "\" aria-atomic=\"", "\" aria-busy=\"", "\" aria-controls=\"", "\" aria-current=\"", "\" aria-describedby=\"", "\" aria-details=\"", "\" aria-disabled=\"", "\" aria-errormessage=\"", "\" aria-flowto=\"", "\" aria-haspopup=\"", "\" aria-hidden=\"", "\" aria-invalid=\"", "\" aria-keyshortcuts=\"", "\" aria-label=\"", "\" aria-labelledby=\"", "\" aria-live=\"", "\" aria-owns=\"", "\" aria-relevant=\"", "\" aria-roledescription=\"", "\" ", " />", " ", "</div></template>"])), function (t) {
        return t.readOnly ? "readonly" : "";
      }, function (t) {
        return t.defaultSlottedNodes && t.defaultSlottedNodes.length ? "label" : "label label__hidden";
      }, Ht("defaultSlottedNodes"), Ut(0, e), function (t) {
        return t.handleTextInput();
      }, function (t) {
        return t.handleChange();
      }, function (t, e) {
        return t.handleKeyDown(e.event);
      }, function (t, e) {
        return t.handleBlur();
      }, function (t) {
        return t.autofocus;
      }, function (t) {
        return t.disabled;
      }, function (t) {
        return t.list;
      }, function (t) {
        return t.maxlength;
      }, function (t) {
        return t.minlength;
      }, function (t) {
        return t.placeholder;
      }, function (t) {
        return t.readOnly;
      }, function (t) {
        return t.required;
      }, function (t) {
        return t.size;
      }, function (t) {
        return t.min;
      }, function (t) {
        return t.max;
      }, function (t) {
        return t.step;
      }, function (t) {
        return t.ariaAtomic;
      }, function (t) {
        return t.ariaBusy;
      }, function (t) {
        return t.ariaControls;
      }, function (t) {
        return t.ariaCurrent;
      }, function (t) {
        return t.ariaDescribedby;
      }, function (t) {
        return t.ariaDetails;
      }, function (t) {
        return t.ariaDisabled;
      }, function (t) {
        return t.ariaErrormessage;
      }, function (t) {
        return t.ariaFlowto;
      }, function (t) {
        return t.ariaHaspopup;
      }, function (t) {
        return t.ariaHidden;
      }, function (t) {
        return t.ariaInvalid;
      }, function (t) {
        return t.ariaKeyshortcuts;
      }, function (t) {
        return t.ariaLabel;
      }, function (t) {
        return t.ariaLabelledby;
      }, function (t) {
        return t.ariaLive;
      }, function (t) {
        return t.ariaOwns;
      }, function (t) {
        return t.ariaRelevant;
      }, function (t) {
        return t.ariaRoledescription;
      }, Dt("control"), Tt(function (t) {
        return !t.hideStep && !t.readOnly && !t.disabled;
      }, _(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral(["<div class=\"controls\" part=\"controls\"><div class=\"step-up\" part=\"step-up\" @click=\"", "\"><slot name=\"step-up-glyph\">", "</slot></div><div class=\"step-down\" part=\"step-down\" @click=\"", "\"><slot name=\"step-down-glyph\">", "</slot></div></div>"])), function (t) {
        return t.stepUp();
      }, e.stepUpGlyph || "", function (t) {
        return t.stepDown();
      }, e.stepDownGlyph || "")), jt(0, e));
    },
    shadowOptions: {
      delegatesFocus: !0
    },
    stepDownGlyph: '\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  ',
    stepUpGlyph: '\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>\n    </svg>\n'
  }),
  $p = function $p(t, e) {
    return ft(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral(["\n    ", " :host{align-items:center;height:calc((", " * 3) * 1px)}.progress{background-color:", ";border-radius:calc(", " * 1px);width:100%;height:calc(", " * 1px);display:flex;align-items:center;position:relative}.determinate{background-color:", ";border-radius:calc(", " * 1px);height:calc((", " * 3) * 1px);transition:all 0.2s ease-in-out;display:flex}.indeterminate{height:calc((", " * 3) * 1px);border-radius:calc(", " * 1px);display:flex;width:100%;position:relative;overflow:hidden}.indeterminate-indicator-1{position:absolute;opacity:0;height:100%;background-color:", ";border-radius:calc(", " * 1px);animation-timing-function:cubic-bezier(0.4,0,0.6,1);width:40%;animation:indeterminate-1 2s infinite}.indeterminate-indicator-2{position:absolute;opacity:0;height:100%;background-color:", ";border-radius:calc(", " * 1px);animation-timing-function:cubic-bezier(0.4,0,0.6,1);width:60%;animation:indeterminate-2 2s infinite}:host(.paused) .indeterminate-indicator-1,:host(.paused) .indeterminate-indicator-2{animation:none;background-color:", ";width:100%;opacity:1}:host(.paused) .determinate{background-color:", "}@keyframes indeterminate-1{0%{opacity:1;transform:translateX(-100%)}70%{opacity:1;transform:translateX(300%)}70.01%{opacity:0}100%{opacity:0;transform:translateX(300%)}}@keyframes indeterminate-2{0%{opacity:0;transform:translateX(-150%)}29.99%{opacity:0}30%{opacity:1;transform:translateX(-150%)}100%{transform:translateX(166.66%);opacity:1}}"])), rn("flex"), cr, Ac, rr, cr, sl, rr, cr, cr, rr, sl, rr, sl, rr, dc, dc).withBehaviors(sn(ft(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral(["\n        .indeterminate-indicator-1,.indeterminate-indicator-2,.determinate,.progress{background-color:", "}:host(.paused) .indeterminate-indicator-1,:host(.paused) .indeterminate-indicator-2,:host(.paused) .determinate{background-color:", "}"])), Ge.ButtonText, Ge.GrayText)));
  };
var wp = /*#__PURE__*/function (_es) {
  _inherits(wp, _es);
  var _super102 = _createSuper(wp);
  function wp() {
    _classCallCheck(this, wp);
    return _super102.apply(this, arguments);
  }
  return _createClass(wp);
}(es);
var kp = wp.compose({
    baseName: "progress",
    template: function template(t, e) {
      return _(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral(["<template role=\"progressbar\" aria-valuenow=\"", "\" aria-valuemin=\"", "\" aria-valuemax=\"", "\" class=\"", "\">", " ", "</template>"])), function (t) {
        return t.value;
      }, function (t) {
        return t.min;
      }, function (t) {
        return t.max;
      }, function (t) {
        return t.paused ? "paused" : "";
      }, Tt(function (t) {
        return "number" == typeof t.value;
      }, _(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral(["<div class=\"progress\" part=\"progress\" slot=\"determinate\"><div class=\"determinate\" part=\"determinate\" style=\"width: ", "%\"></div></div>"])), function (t) {
        return t.percentComplete;
      })), Tt(function (t) {
        return "number" != typeof t.value;
      }, _(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral(["<div class=\"progress\" part=\"progress\" slot=\"indeterminate\"><slot class=\"indeterminate\" name=\"indeterminate\">", " ", "</slot></div>"])), e.indeterminateIndicator1 || "", e.indeterminateIndicator2 || "")));
    },
    styles: $p,
    indeterminateIndicator1: '\n    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>\n  ',
    indeterminateIndicator2: '\n    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>\n  '
  }),
  Cp = $p,
  Ip = function Ip(t, e) {
    return ft(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral(["\n    ", " :host{align-items:center;height:calc(", " * 1px);width:calc(", " * 1px)}.progress{height:100%;width:100%}.background{fill:none;stroke-width:2px}.determinate{stroke:", ";fill:none;stroke-width:2px;stroke-linecap:round;transform-origin:50% 50%;transform:rotate(-90deg);transition:all 0.2s ease-in-out}.indeterminate-indicator-1{stroke:", ";fill:none;stroke-width:2px;stroke-linecap:round;transform-origin:50% 50%;transform:rotate(-90deg);transition:all 0.2s ease-in-out;animation:spin-infinite 2s linear infinite}:host(.paused) .indeterminate-indicator-1{animation:none;stroke:", "}:host(.paused) .determinate{stroke:", "}@keyframes spin-infinite{0%{stroke-dasharray:0.01px 43.97px;transform:rotate(0deg)}50%{stroke-dasharray:21.99px 21.99px;transform:rotate(450deg)}100%{stroke-dasharray:0.01px 43.97px;transform:rotate(1080deg)}}"])), rn("flex"), Yh, Yh, sl, sl, dc, dc).withBehaviors(sn(ft(_templateObject141 || (_templateObject141 = _taggedTemplateLiteral(["\n        .background{stroke:", "}.determinate,.indeterminate-indicator-1{stroke:", "}:host(.paused) .determinate,:host(.paused) .indeterminate-indicator-1{stroke:", "}"])), Ge.Field, Ge.ButtonText, Ge.GrayText)));
  };
var Fp = /*#__PURE__*/function (_es2) {
  _inherits(Fp, _es2);
  var _super103 = _createSuper(Fp);
  function Fp() {
    _classCallCheck(this, Fp);
    return _super103.apply(this, arguments);
  }
  return _createClass(Fp);
}(es);
var Dp = Fp.compose({
    baseName: "progress-ring",
    template: function template(t, e) {
      return _(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral(["<template role=\"progressbar\" aria-valuenow=\"", "\" aria-valuemin=\"", "\" aria-valuemax=\"", "\" class=\"", "\">", " ", "</template>"])), function (t) {
        return t.value;
      }, function (t) {
        return t.min;
      }, function (t) {
        return t.max;
      }, function (t) {
        return t.paused ? "paused" : "";
      }, Tt(function (t) {
        return "number" == typeof t.value;
      }, _(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral(["<svg class=\"progress\" part=\"progress\" viewBox=\"0 0 16 16\" slot=\"determinate\"><circle class=\"background\" part=\"background\" cx=\"8px\" cy=\"8px\" r=\"7px\"></circle><circle class=\"determinate\" part=\"determinate\" style=\"stroke-dasharray: ", "px ", "px\" cx=\"8px\" cy=\"8px\" r=\"7px\"></circle></svg>"])), function (t) {
        return 44 * t.percentComplete / 100;
      }, 44)), Tt(function (t) {
        return "number" != typeof t.value;
      }, _(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral(["<slot name=\"indeterminate\" slot=\"indeterminate\">", "</slot>"])), e.indeterminateIndicator || "")));
    },
    styles: Ip,
    indeterminateIndicator: '\n    <svg class="progress" part="progress" viewBox="0 0 16 16">\n        <circle\n            class="background"\n            part="background"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n        <circle\n            class="indeterminate-indicator-1"\n            part="indeterminate-indicator-1"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n    </svg>\n  '
  }),
  Tp = Ip,
  Sp = function Sp(t, e) {
    return ft(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral(["\n    ", " :host{--input-size:calc((", " / 2) + ", ");align-items:center;outline:none;", " user-select:none;position:relative;flex-direction:row;transition:all 0.2s ease-in-out}.control{position:relative;width:calc(var(--input-size) * 1px);height:calc(var(--input-size) * 1px);box-sizing:border-box;border-radius:50%;border:calc(", " * 1px) solid ", ";background:", ";cursor:pointer}.label__hidden{display:none;visibility:hidden}.label{", "\n      color:", ";", " padding-inline-start:calc(", " * 2px + 2px);margin-inline-end:calc(", " * 2px + 2px);cursor:pointer}.control,slot[name='checked-indicator']{flex-shrink:0}slot[name='checked-indicator']{display:flex;align-items:center;justify-content:center;width:100%;height:100%;fill:", ";opacity:0;pointer-events:none}:host(:not(.disabled):hover) .control{background:", ";border-color:", "}:host(:not(.disabled):active) .control{background:", ";border-color:", "}:host(:not(.disabled):active) slot[name='checked-indicator']{opacity:1}:host(:", ") .control{", "\n      background:", "}:host(.checked) .control{background:", ";border-color:transparent}:host(.checked:not(.disabled):hover) .control{background:", ";border-color:transparent}:host(.checked:not(.disabled):active) .control{background:", ";border-color:transparent}:host(.disabled) .label,:host(.readonly) .label,:host(.readonly) .control,:host(.disabled) .control{cursor:", "}:host(.checked) slot[name='checked-indicator']{opacity:1}:host(.disabled){opacity:", "}"])), rn("inline-flex"), Yh, rr, "", cr, Ac, Al, Hh, rc, "", rr, rr, cl, Ll, Lc, Pl, Pc, an, Xh, zl, sl, nl, rl, "not-allowed", ir).withBehaviors(sn(ft(_templateObject146 || (_templateObject146 = _taggedTemplateLiteral(["\n        .control{background:", ";border-color:", "}:host(:not(.disabled):hover) .control,:host(:not(.disabled):active) .control{border-color:", "}:host(:", ") .control{forced-color-adjust:none;background:", ";outline-color:", "}:host(.checked:not(.disabled):hover) .control,:host(.checked:not(.disabled):active) .control{border-color:", ";background:", "}:host(.checked) slot[name='checked-indicator']{fill:", "}:host(.checked:hover) .control slot[name='checked-indicator']{fill:", "}:host(.disabled){opacity:1}:host(.disabled) .label{color:", "}:host(.disabled) .control,:host(.checked.disabled) .control{background:", ";border-color:", "}:host(.disabled) slot[name='checked-indicator'],:host(.checked.disabled) slot[name='checked-indicator']{fill:", "}"])), Ge.Field, Ge.FieldText, Ge.Highlight, an, Ge.Field, Ge.FieldText, Ge.Highlight, Ge.Highlight, Ge.Highlight, Ge.HighlightText, Ge.GrayText, Ge.Field, Ge.GrayText, Ge.GrayText)));
  },
  Op = ns.compose({
    baseName: "radio",
    template: function template(t, e) {
      return _(_templateObject147 || (_templateObject147 = _taggedTemplateLiteral(["<template role=\"radio\" class=\"", " ", "\" aria-checked=\"", "\" aria-required=\"", "\" aria-disabled=\"", "\" aria-readonly=\"", "\" @keypress=\"", "\" @click=\"", "\"><div part=\"control\" class=\"control\"><slot name=\"checked-indicator\">", "</slot></div><label part=\"label\" class=\"", "\"><slot ", "></slot></label></template>"])), function (t) {
        return t.checked ? "checked" : "";
      }, function (t) {
        return t.readOnly ? "readonly" : "";
      }, function (t) {
        return t.checked;
      }, function (t) {
        return t.required;
      }, function (t) {
        return t.disabled;
      }, function (t) {
        return t.readOnly;
      }, function (t, e) {
        return t.keypressHandler(e.event);
      }, function (t, e) {
        return t.clickHandler(e.event);
      }, e.checkedIndicator || "", function (t) {
        return t.defaultSlottedNodes && t.defaultSlottedNodes.length ? "label" : "label label__hidden";
      }, Ht("defaultSlottedNodes"));
    },
    styles: Sp,
    checkedIndicator: '\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="8" cy="8" r="4"/>\n    </svg>\n  '
  }),
  Ep = Sp,
  Vp = function Vp(t, e) {
    return ft(_templateObject148 || (_templateObject148 = _taggedTemplateLiteral(["\n  ", " :host{align-items:flex-start;flex-direction:column}.positioning-region{display:flex;flex-wrap:wrap}:host([orientation='vertical']) .positioning-region{flex-direction:column}:host([orientation='horizontal']) .positioning-region{flex-direction:row}"])), rn("flex"));
  },
  Rp = is.compose({
    baseName: "radio-group",
    template: function template(t, e) {
      return _(_templateObject149 || (_templateObject149 = _taggedTemplateLiteral(["<template role=\"radiogroup\" aria-disabled=\"", "\" aria-readonly=\"", "\" @click=\"", "\" @keydown=\"", "\" @focusout=\"", "\"><slot name=\"label\"></slot><div class=\"positioning-region ", "\" part=\"positioning-region\"><slot ", "></slot></div></template>"])), function (t) {
        return t.disabled;
      }, function (t) {
        return t.readOnly;
      }, function (t, e) {
        return t.clickHandler(e.event);
      }, function (t, e) {
        return t.keydownHandler(e.event);
      }, function (t, e) {
        return t.focusOutHandler(e.event);
      }, function (t) {
        return t.orientation === Ae ? "horizontal" : "vertical";
      }, Ht({
        property: "slottedRadioButtons",
        filter: Lt("[role=radio]")
      }));
    },
    styles: Vp
  }),
  Ap = Vp,
  Lp = function Lp(t, e) {
    return _(_templateObject150 || (_templateObject150 = _taggedTemplateLiteral(["<template class=\" ", " \"><label part=\"label\" for=\"control\" class=\"", "\"><slot ", "></slot></label><div class=\"root\" part=\"root\" ", ">", "<div class=\"input-wrapper\" part=\"input-wrapper\"><input class=\"control\" part=\"control\" id=\"control\" @input=\"", "\" @change=\"", "\" ?autofocus=\"", "\" ?disabled=\"", "\" list=\"", "\" maxlength=\"", "\" minlength=\"", "\" pattern=\"", "\" placeholder=\"", "\" ?readonly=\"", "\" ?required=\"", "\" size=\"", "\" ?spellcheck=\"", "\" :value=\"", "\" type=\"search\" aria-atomic=\"", "\" aria-busy=\"", "\" aria-controls=\"", "\" aria-current=\"", "\" aria-describedby=\"", "\" aria-details=\"", "\" aria-disabled=\"", "\" aria-errormessage=\"", "\" aria-flowto=\"", "\" aria-haspopup=\"", "\" aria-hidden=\"", "\" aria-invalid=\"", "\" aria-keyshortcuts=\"", "\" aria-label=\"", "\" aria-labelledby=\"", "\" aria-live=\"", "\" aria-owns=\"", "\" aria-relevant=\"", "\" aria-roledescription=\"", "\" ", " /><slot name=\"clear-button\"><button class=\"clear-button ", "\" part=\"clear-button\" tabindex=\"-1\" @click=", "><slot name=\"clear-glyph\"><svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m2.09 2.22.06-.07a.5.5 0 0 1 .63-.06l.07.06L6 5.29l3.15-3.14a.5.5 0 1 1 .7.7L6.71 6l3.14 3.15c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L6 6.71 2.85 9.85a.5.5 0 0 1-.7-.7L5.29 6 2.15 2.85a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z\" /></svg></slot></button></slot></div>", "</div></template>"])), function (t) {
      return t.readOnly ? "readonly" : "";
    }, function (t) {
      return t.defaultSlottedNodes && t.defaultSlottedNodes.length ? "label" : "label label__hidden";
    }, Ht({
      property: "defaultSlottedNodes",
      filter: as
    }), Dt("root"), Ut(0, e), function (t) {
      return t.handleTextInput();
    }, function (t) {
      return t.handleChange();
    }, function (t) {
      return t.autofocus;
    }, function (t) {
      return t.disabled;
    }, function (t) {
      return t.list;
    }, function (t) {
      return t.maxlength;
    }, function (t) {
      return t.minlength;
    }, function (t) {
      return t.pattern;
    }, function (t) {
      return t.placeholder;
    }, function (t) {
      return t.readOnly;
    }, function (t) {
      return t.required;
    }, function (t) {
      return t.size;
    }, function (t) {
      return t.spellcheck;
    }, function (t) {
      return t.value;
    }, function (t) {
      return t.ariaAtomic;
    }, function (t) {
      return t.ariaBusy;
    }, function (t) {
      return t.ariaControls;
    }, function (t) {
      return t.ariaCurrent;
    }, function (t) {
      return t.ariaDescribedby;
    }, function (t) {
      return t.ariaDetails;
    }, function (t) {
      return t.ariaDisabled;
    }, function (t) {
      return t.ariaErrormessage;
    }, function (t) {
      return t.ariaFlowto;
    }, function (t) {
      return t.ariaHaspopup;
    }, function (t) {
      return t.ariaHidden;
    }, function (t) {
      return t.ariaInvalid;
    }, function (t) {
      return t.ariaKeyshortcuts;
    }, function (t) {
      return t.ariaLabel;
    }, function (t) {
      return t.ariaLabelledby;
    }, function (t) {
      return t.ariaLive;
    }, function (t) {
      return t.ariaOwns;
    }, function (t) {
      return t.ariaRelevant;
    }, function (t) {
      return t.ariaRoledescription;
    }, Dt("control"), function (t) {
      return t.value ? "" : "clear-button__hidden";
    }, function (t) {
      return t.handleClearInput();
    }, jt(0, e));
  },
  Pp = fo.create("clear-button-hover").withDefault(function (t) {
    var e = Xl.getValueFor(t),
      i = Tl.getValueFor(t);
    return e.evaluate(t, i.evaluate(t).focus).hover;
  }),
  zp = fo.create("clear-button-active").withDefault(function (t) {
    var e = Xl.getValueFor(t),
      i = Tl.getValueFor(t);
    return e.evaluate(t, i.evaluate(t).focus).active;
  }),
  Hp = function Hp(t, e) {
    return ft(_templateObject151 || (_templateObject151 = _taggedTemplateLiteral(["\n    ", "\n\n    ", "\n\n    ", "\n\n    .root{display:flex;flex-direction:row}.control{-webkit-appearance:none;color:inherit;background:transparent;border:0;height:calc(100% - 4px);margin-top:auto;margin-bottom:auto;padding:0 calc(", " * 2px + 1px);font-family:inherit;font-size:inherit;line-height:inherit}.clear-button{display:inline-flex;align-items:center;margin:1px;height:calc(100% - 2px);opacity:0;background:transparent;color:", ";fill:currentcolor;border:none;border-radius:calc(", " * 1px);min-width:calc(", " * 1px);", "\n      outline:none;padding:0 calc((10 + (", " * 2 * ", ")) * 1px)}.clear-button:hover{background:", "}.clear-button:active{background:", "}:host(:hover:not([disabled],[readOnly])) .clear-button,:host(:active:not([disabled],[readOnly])) .clear-button,:host(:focus-within:not([disabled],[readOnly])) .clear-button{opacity:1}:host(:hover:not([disabled],[readOnly])) .clear-button__hidden,:host(:active:not([disabled],[readOnly])) .clear-button__hidden,:host(:focus-within:not([disabled],[readOnly])) .clear-button__hidden{opacity:0}.control::-webkit-search-cancel-button{-webkit-appearance:none}.input-wrapper{display:flex;position:relative;width:100%}.start,.end{display:flex;margin:1px;align-items:center}.start{display:flex;margin-inline-start:11px}::slotted([slot=\"end\"]){height:100%}.clear-button__hidden{opacity:0}.end{margin-inline-end:11px}::slotted(", "){margin-inline-end:1px}"])), rn("inline-block"), zd(0, 0, ".root"), Hd(), rr, rc, ar, Yh, Hh, rr, nr, Pp, zp, t.tagFor(di)).withBehaviors(jd("outline", Md(0, 0, ".root")), jd("filled", Bd(0, 0, ".root")), sn(Nd(0, 0, ".root")));
  };
var Mp = /*#__PURE__*/function (_hs) {
  _inherits(Mp, _hs);
  var _super104 = _createSuper(Mp);
  function Mp() {
    var _this138;
    _classCallCheck(this, Mp);
    _this138 = _super104.apply(this, arguments), _this138.appearance = "outline";
    return _this138;
  }
  return _createClass(Mp);
}(hs);
nd([it], Mp.prototype, "appearance", void 0);
var Bp = Mp.compose({
    baseName: "search",
    baseClass: hs,
    template: Lp,
    styles: Hp,
    start: '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>',
    shadowOptions: {
      delegatesFocus: !0
    }
  }),
  Np = Hp;
var jp = /*#__PURE__*/function (_gs) {
  _inherits(jp, _gs);
  var _super105 = _createSuper(jp);
  function jp() {
    _classCallCheck(this, jp);
    return _super105.apply(this, arguments);
  }
  _createClass(jp, [{
    key: "appearanceChanged",
    value: function appearanceChanged(t, e) {
      t !== e && (this.classList.add(e), this.classList.remove(t));
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(jp.prototype), "connectedCallback", this).call(this), this.appearance || (this.appearance = "outline"), this.listbox && el.setValueFor(this.listbox, Ga);
    }
  }]);
  return jp;
}(gs);
nd([it({
  mode: "fromView"
})], jp.prototype, "appearance", void 0);
var Up = jp.compose({
    baseName: "select",
    baseClass: gs,
    template: function template(t, e) {
      return _(_templateObject152 || (_templateObject152 = _taggedTemplateLiteral(["<template class=\"", "\" aria-activedescendant=\"", "\" aria-controls=\"", "\" aria-disabled=\"", "\" aria-expanded=\"", "\" aria-haspopup=\"", "\" aria-multiselectable=\"", "\" ?open=\"", "\" role=\"combobox\" tabindex=\"", "\" @click=\"", "\" @focusin=\"", "\" @focusout=\"", "\" @keydown=\"", "\" @mousedown=\"", "\">", "<div class=\"listbox\" id=\"", "\" part=\"listbox\" role=\"listbox\" ?disabled=\"", "\" ?hidden=\"", "\" ", "><slot ", "></slot></div></template>"])), function (t) {
        return [t.collapsible && "collapsible", t.collapsible && t.open && "open", t.disabled && "disabled", t.collapsible && t.position].filter(Boolean).join(" ");
      }, function (t) {
        return t.ariaActiveDescendant;
      }, function (t) {
        return t.ariaControls;
      }, function (t) {
        return t.ariaDisabled;
      }, function (t) {
        return t.ariaExpanded;
      }, function (t) {
        return t.collapsible ? "listbox" : null;
      }, function (t) {
        return t.ariaMultiSelectable;
      }, function (t) {
        return t.open;
      }, function (t) {
        return t.disabled ? null : "0";
      }, function (t, e) {
        return t.clickHandler(e.event);
      }, function (t, e) {
        return t.focusinHandler(e.event);
      }, function (t, e) {
        return t.focusoutHandler(e.event);
      }, function (t, e) {
        return t.keydownHandler(e.event);
      }, function (t, e) {
        return t.mousedownHandler(e.event);
      }, Tt(function (t) {
        return t.collapsible;
      }, _(_templateObject153 || (_templateObject153 = _taggedTemplateLiteral(["<div class=\"control\" part=\"control\" ?disabled=\"", "\" ", ">", "<slot name=\"button-container\"><div class=\"selected-value\" part=\"selected-value\"><slot name=\"selected-value\">", "</slot></div><div aria-hidden=\"true\" class=\"indicator\" part=\"indicator\"><slot name=\"indicator\">", "</slot></div></slot>", "</div>"])), function (t) {
        return t.disabled;
      }, Dt("control"), Ut(0, e), function (t) {
        return t.displayValue;
      }, e.indicator || "", jt(0, e))), function (t) {
        return t.listboxId;
      }, function (t) {
        return t.disabled;
      }, function (t) {
        return !!t.collapsible && !t.open;
      }, Dt("listbox"), Ht({
        filter: Mi.slottedOptionFilter,
        flatten: !0,
        property: "slottedOptions"
      }));
    },
    styles: wu,
    indicator: '\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  '
  }),
  qp = wu,
  _p = function _p(t, e) {
    return ft(_templateObject154 || (_templateObject154 = _taggedTemplateLiteral(["\n    ", " :host{--skeleton-fill-default:", ";overflow:hidden;width:100%;position:relative;background-color:var(--skeleton-fill,var(--skeleton-fill-default));--skeleton-animation-gradient-default:linear-gradient(\n        270deg,var(--skeleton-fill,var(--skeleton-fill-default)) 0%,", " 51%,var(--skeleton-fill,var(--skeleton-fill-default)) 100%\n      );--skeleton-animation-timing-default:ease-in-out}:host(.rect){border-radius:calc(", " * 1px)}:host(.circle){border-radius:100%;overflow:hidden}object{position:absolute;width:100%;height:auto;z-index:2}object img{width:100%;height:auto}", " span.shimmer{position:absolute;width:100%;height:100%;background-image:var(--skeleton-animation-gradient,var(--skeleton-animation-gradient-default));background-size:0px 0px / 90% 100%;background-repeat:no-repeat;background-color:var(--skeleton-animation-fill,", ");animation:shimmer 2s infinite;animation-timing-function:var(--skeleton-animation-timing,var(--skeleton-timing-default));animation-direction:normal;z-index:1}::slotted(svg){z-index:2}::slotted(.pattern){width:100%;height:100%}@keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}"])), rn("block"), _l, Gl, ar, rn("block"), _l).withBehaviors(sn(ft(_templateObject155 || (_templateObject155 = _taggedTemplateLiteral(["\n        :host{background-color:", "}"])), Ge.CanvasText)));
  },
  Gp = ms.compose({
    baseName: "skeleton",
    template: function template(t, e) {
      return _(_templateObject156 || (_templateObject156 = _taggedTemplateLiteral(["<template class=\"", "\" pattern=\"", "\" ?shimmer=\"", "\">", "<object type=\"image/svg+xml\" data=\"", "\" role=\"presentation\"><img class=\"pattern\" src=\"", "\" /></object><slot></slot></template>"])), function (t) {
        return "circle" === t.shape ? "circle" : "rect";
      }, function (t) {
        return t.pattern;
      }, function (t) {
        return t.shimmer;
      }, Tt(function (t) {
        return !0 === t.shimmer;
      }, _(_templateObject157 || (_templateObject157 = _taggedTemplateLiteral(["<span class=\"shimmer\"></span>"])))), function (t) {
        return t.pattern;
      }, function (t) {
        return t.pattern;
      });
    },
    styles: _p
  }),
  Wp = _p,
  Kp = function Kp(t, e) {
    return ft(_templateObject158 || (_templateObject158 = _taggedTemplateLiteral(["\n    ", " :host{--thumb-size:calc((", " / 2) + ", " + (", " * 2));--thumb-translate:calc(var(--thumb-size) * -0.5 + var(--track-width) / 2);--track-overhang:calc((", " / 2) * -1);--track-width:", ";align-items:center;width:100%;user-select:none;box-sizing:border-box;border-radius:calc(", " * 1px);outline:none;cursor:pointer}:host(.horizontal) .positioning-region{position:relative;margin:0 8px;display:grid;grid-template-rows:calc(var(--thumb-size) * 1px) 1fr}:host(.vertical) .positioning-region{position:relative;margin:0 8px;display:grid;height:100%;grid-template-columns:calc(var(--thumb-size) * 1px) 1fr}:host(:", ") .thumb-cursor{box-shadow:0 0 0 2px ", ",0 0 0 4px ", "}.thumb-container{position:absolute;height:calc(var(--thumb-size) * 1px);width:calc(var(--thumb-size) * 1px);transition:all 0.2s ease}.thumb-cursor{display:flex;position:relative;border:none;width:calc(var(--thumb-size) * 1px);height:calc(var(--thumb-size) * 1px);background:padding-box linear-gradient(", ",", "),border-box ", ";border:calc(", " * 1px) solid transparent;border-radius:50%;box-sizing:border-box}.thumb-cursor::after{content:'';display:block;border-radius:50%;width:100%;margin:4px;background:", "}:host(:not(.disabled)) .thumb-cursor:hover::after{background:", ";margin:3px}:host(:not(.disabled)) .thumb-cursor:active::after{background:", ";margin:5px}:host(:not(.disabled)) .thumb-cursor:hover{background:padding-box linear-gradient(", ",", "),border-box ", "}:host(:not(.disabled)) .thumb-cursor:active{background:padding-box linear-gradient(", ",", "),border-box ", "}.track-start{background:", ";position:absolute;height:100%;left:0;border-radius:calc(", " * 1px)}:host(.horizontal) .thumb-container{transform:translateX(calc(var(--thumb-size) * 0.5px)) translateY(calc(var(--thumb-translate) * 1px))}:host(.vertical) .thumb-container{transform:translateX(calc(var(--thumb-translate) * 1px)) translateY(calc(var(--thumb-size) * 0.5px))}:host(.horizontal){min-width:calc(var(--thumb-size) * 1px)}:host(.horizontal) .track{right:calc(var(--track-overhang) * 1px);left:calc(var(--track-overhang) * 1px);align-self:start;height:calc(var(--track-width) * 1px)}:host(.vertical) .track{top:calc(var(--track-overhang) * 1px);bottom:calc(var(--track-overhang) * 1px);width:calc(var(--track-width) * 1px);height:100%}.track{background:", ";border:1px solid ", ";border-radius:2px;box-sizing:border-box;position:absolute}:host(.vertical){height:100%;min-height:calc(", " * 60px);min-width:calc(", " * 20px)}:host(.vertical) .track-start{height:auto;width:100%;top:0}:host(.disabled),:host(.readonly){cursor:", "}:host(.disabled){opacity:", "}"])), rn("inline-grid"), Yh, rr, cr, rr, rr, ar, an, el, Mc, Cl, Cl, bc, cr, sl, nl, rl, Cl, Cl, yc, Cl, Cl, xc, sl, ar, ec, Ac, rr, rr, "not-allowed", ir).withBehaviors(sn(ft(_templateObject159 || (_templateObject159 = _taggedTemplateLiteral(["\n        .thumb-cursor{forced-color-adjust:none;border-color:", ";background:", "}:host(:not(.disabled)) .thumb-cursor:hover,:host(:not(.disabled)) .thumb-cursor:active{background:", "}.track{forced-color-adjust:none;background:", "}.thumb-cursor::after,:host(:not(.disabled)) .thumb-cursor:hover::after,:host(:not(.disabled)) .thumb-cursor:active::after{background:", "}:host(:", ") .thumb-cursor{background:", ";border-color:", ";box-shadow:0 0 0 1px ", ",0 0 0 3px ", "}:host(.disabled){opacity:1}:host(.disabled) .track,:host(.disabled) .thumb-cursor{forced-color-adjust:none;background:", "}"])), Ge.FieldText, Ge.FieldText, Ge.Highlight, Ge.FieldText, Ge.Field, an, Ge.Highlight, Ge.Highlight, Ge.Field, Ge.FieldText, Ge.GrayText)));
  },
  Xp = ks.compose({
    baseName: "slider",
    template: function template(t, e) {
      return _(_templateObject160 || (_templateObject160 = _taggedTemplateLiteral(["<template role=\"slider\" class=\"", " ", "\" tabindex=\"", "\" aria-valuetext=\"", "\" aria-valuenow=\"", "\" aria-valuemin=\"", "\" aria-valuemax=\"", "\" aria-disabled=\"", "\" aria-readonly=\"", "\" aria-orientation=\"", "\" class=\"", "\"><div part=\"positioning-region\" class=\"positioning-region\"><div ", " part=\"track-container\" class=\"track\"><slot name=\"track\"></slot><div part=\"track-start\" class=\"track-start\" style=\"", "\"><slot name=\"track-start\"></slot></div></div><slot></slot><div ", " part=\"thumb-container\" class=\"thumb-container\" style=\"", "\"><slot name=\"thumb\">", "</slot></div></div></template>"])), function (t) {
        return t.readOnly ? "readonly" : "";
      }, function (t) {
        return t.orientation || Ae;
      }, function (t) {
        return t.disabled ? null : 0;
      }, function (t) {
        return t.valueTextFormatter(t.value);
      }, function (t) {
        return t.value;
      }, function (t) {
        return t.min;
      }, function (t) {
        return t.max;
      }, function (t) {
        return !!t.disabled || void 0;
      }, function (t) {
        return !!t.readOnly || void 0;
      }, function (t) {
        return t.orientation;
      }, function (t) {
        return t.orientation;
      }, Dt("track"), function (t) {
        return t.position;
      }, Dt("thumb"), function (t) {
        return t.position;
      }, e.thumb || "");
    },
    styles: Kp,
    thumb: '\n    <div class="thumb-cursor"></div>\n  '
  }),
  Yp = Kp,
  Qp = function Qp(t, e) {
    return ft(_templateObject161 || (_templateObject161 = _taggedTemplateLiteral(["\n    ", " :host{", "}.root{position:absolute;display:grid}:host(.horizontal){align-self:start;grid-row:2;margin-top:-4px}:host(.vertical){justify-self:start;grid-column:2;margin-left:2px}.container{display:grid;justify-self:center}:host(.horizontal) .container{grid-template-rows:auto auto;grid-template-columns:0}:host(.vertical) .container{grid-template-columns:auto auto;grid-template-rows:0;min-width:calc(var(--thumb-size) * 1px);height:calc(var(--thumb-size) * 1px)}.label{justify-self:center;align-self:center;white-space:nowrap;max-width:30px;margin:2px 0}.mark{width:calc(", " * 1px);height:calc(", " * 1px);background:", ";justify-self:center}:host(.vertical) .mark{transform:rotate(90deg);align-self:center}:host(.vertical) .label{margin-left:calc((", " / 2) * 2px);align-self:center}:host(.disabled){opacity:", "}"])), rn("block"), Mh, cr, rr, Ac, rr, ir).withBehaviors(sn(ft(_templateObject162 || (_templateObject162 = _taggedTemplateLiteral(["\n        .mark{forced-color-adjust:none;background:", "}:host(.disabled){forced-color-adjust:none;opacity:1}:host(.disabled) .label{color:", "}:host(.disabled) .mark{background:", "}"])), Ge.FieldText, Ge.GrayText, Ge.GrayText)));
  },
  Zp = ys.compose({
    baseName: "slider-label",
    template: function template(t, e) {
      return _(_templateObject163 || (_templateObject163 = _taggedTemplateLiteral(["<template aria-disabled=\"", "\" class=\"", " ", "\"><div ", " part=\"root\" class=\"root\" style=\"", "\"><div class=\"container\">", "<div class=\"label\"><slot></slot></div></div></div></template>"])), function (t) {
        return t.disabled;
      }, function (t) {
        return t.sliderOrientation || Ae;
      }, function (t) {
        return t.disabled ? "disabled" : "";
      }, Dt("root"), function (t) {
        return t.positionStyle;
      }, Tt(function (t) {
        return !t.hideMark;
      }, _(_templateObject164 || (_templateObject164 = _taggedTemplateLiteral(["<div class=\"mark\"></div>"])))));
    },
    styles: Qp
  }),
  Jp = Qp,
  tg = function tg(t, e) {
    return ft(_templateObject165 || (_templateObject165 = _taggedTemplateLiteral(["\n    :host([hidden]){display:none}", " :host{align-items:center;outline:none;font-family:", ";", " user-select:none}:host(.disabled){opacity:", "}:host(.disabled) .label,:host(.readonly) .label,:host(.disabled) .switch,:host(.readonly) .switch,:host(.disabled) .status-message,:host(.readonly) .status-message{cursor:", "}.switch{position:relative;box-sizing:border-box;width:calc(((", " / 2) + ", ") * 2px);height:calc(((", " / 2) + ", ") * 1px);background:", ";border-radius:calc(", " * 1px);border:calc(", " * 1px) solid ", ";cursor:pointer}:host(:not(.disabled):hover) .switch{background:", ";border-color:", "}:host(:not(.disabled):active) .switch{background:", ";border-color:", "}:host(:", ") .switch{", "\n      background:", "}:host(.checked) .switch{background:", ";border-color:transparent}:host(.checked:not(.disabled):hover) .switch{background:", ";border-color:transparent}:host(.checked:not(.disabled):active) .switch{background:", ";border-color:transparent}slot[name='switch']{position:absolute;display:flex;border:1px solid transparent;fill:", ";transition:all 0.2s ease-in-out}.status-message{color:", ";cursor:pointer;", "}.label__hidden{display:none;visibility:hidden}.label{color:", ";", "\n      margin-inline-end:calc(", " * 2px + 2px);cursor:pointer}::slotted([slot=\"checked-message\"]),::slotted([slot=\"unchecked-message\"]){margin-inline-start:calc(", " * 2px + 2px)}:host(.checked) .switch{background:", "}:host(.checked) .switch slot[name='switch']{fill:", ";filter:drop-shadow(0px 1px 1px rgba(0,0,0,0.15))}:host(.checked:not(.disabled)) .switch:hover{background:", "}:host(.checked:not(.disabled)) .switch:hover slot[name='switch']{fill:", "}:host(.checked:not(.disabled)) .switch:active{background:", "}:host(.checked:not(.disabled)) .switch:active slot[name='switch']{fill:", "}.unchecked-message{display:block}.checked-message{display:none}:host(.checked) .unchecked-message{display:none}:host(.checked) .checked-message{display:block}"])), rn("inline-flex"), dr, "", ir, "not-allowed", Yh, rr, Yh, rr, Al, Yh, cr, Ac, Ll, Lc, Pl, Pc, an, Xh, zl, sl, nl, rl, rc, rc, Hh, rc, Hh, rr, rr, sl, cl, nl, hl, rl, dl).withBehaviors(new rd(ft(_templateObject166 || (_templateObject166 = _taggedTemplateLiteral(["\n        slot[name='switch']{left:0}:host(.checked) slot[name='switch']{left:100%;transform:translateX(-100%)}"]))), ft(_templateObject167 || (_templateObject167 = _taggedTemplateLiteral(["\n        slot[name='switch']{right:0}:host(.checked) slot[name='switch']{right:100%;transform:translateX(100%)}"])))), sn(ft(_templateObject168 || (_templateObject168 = _taggedTemplateLiteral(["\n        :host(:not(.disabled)) .switch slot[name='switch']{forced-color-adjust:none;fill:", "}.switch{background:", ";border-color:", "}:host(.checked) .switch{background:", ";border-color:", "}:host(:not(.disabled):hover) .switch,:host(:not(.disabled):active) .switch,:host(.checked:not(.disabled):hover) .switch{background:", ";border-color:", "}:host(.checked:not(.disabled)) .switch slot[name=\"switch\"]{fill:", "}:host(.checked:not(.disabled):hover) .switch slot[name='switch']{fill:", "}:host(:", ") .switch{forced-color-adjust:none;background:", ";border-color:", ";outline-color:", "}:host(.disabled){opacity:1}:host(.disabled) slot[name='switch']{forced-color-adjust:none;fill:", "}:host(.disabled) .switch{background:", ";border-color:", "}.status-message,.label{color:", "}"])), Ge.FieldText, Ge.Field, Ge.FieldText, Ge.Highlight, Ge.Highlight, Ge.HighlightText, Ge.Highlight, Ge.HighlightText, Ge.Highlight, an, Ge.Field, Ge.Highlight, Ge.FieldText, Ge.GrayText, Ge.Field, Ge.GrayText, Ge.FieldText)));
  },
  eg = Fs.compose({
    baseName: "switch",
    template: function template(t, e) {
      return _(_templateObject169 || (_templateObject169 = _taggedTemplateLiteral(["<template role=\"switch\" aria-checked=\"", "\" aria-disabled=\"", "\" aria-readonly=\"", "\" tabindex=\"", "\" @keypress=\"", "\" @click=\"", "\" class=\"", "\"><label part=\"label\" class=\"", "\"><slot ", "></slot></label><div part=\"switch\" class=\"switch\"><slot name=\"switch\">", "</slot></div><span class=\"status-message\" part=\"status-message\"><span class=\"checked-message\" part=\"checked-message\"><slot name=\"checked-message\"></slot></span><span class=\"unchecked-message\" part=\"unchecked-message\"><slot name=\"unchecked-message\"></slot></span></span></template>"])), function (t) {
        return t.checked;
      }, function (t) {
        return t.disabled;
      }, function (t) {
        return t.readOnly;
      }, function (t) {
        return t.disabled ? null : 0;
      }, function (t, e) {
        return t.keypressHandler(e.event);
      }, function (t, e) {
        return t.clickHandler(e.event);
      }, function (t) {
        return t.checked ? "checked" : "";
      }, function (t) {
        return t.defaultSlottedNodes && t.defaultSlottedNodes.length ? "label" : "label label__hidden";
      }, Ht("defaultSlottedNodes"), e.switch || "");
    },
    styles: tg,
    switch: '\n    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n      <rect x="2" y="2" width="12" height="12" rx="6"/>\n    </svg>\n  '
  }),
  ig = tg,
  og = function og(t, e) {
    return ft(_templateObject170 || (_templateObject170 = _taggedTemplateLiteral(["\n      ", " :host{box-sizing:border-box;", "\n        color:", ";grid-template-columns:auto 1fr auto;grid-template-rows:auto 1fr}.tablist{display:grid;grid-template-rows:calc(", " * 1px);auto;grid-template-columns:auto;position:relative;width:max-content;align-self:end}.start,.end{align-self:center}.activeIndicator{grid-row:2;grid-column:1;width:20px;height:3px;border-radius:calc(", " * 1px);justify-self:center;background:", "}.activeIndicatorTransition{transition:transform 0.2s ease-in-out}.tabpanel{grid-row:2;grid-column-start:1;grid-column-end:4;position:relative}:host(.vertical){grid-template-rows:auto 1fr auto;grid-template-columns:auto 1fr}:host(.vertical) .tablist{grid-row-start:2;grid-row-end:2;display:grid;grid-template-rows:auto;grid-template-columns:auto 1fr;position:relative;width:max-content;justify-self:end;align-self:flex-start;width:100%}:host(.vertical) .tabpanel{grid-column:2;grid-row-start:1;grid-row-end:4}:host(.vertical) .end{grid-row:3}:host(.vertical) .activeIndicator{grid-column:1;grid-row:1;width:3px;height:20px;margin-inline-start:calc(", " * 1px);border-radius:calc(", " * 1px);align-self:center;background:", "}:host(.vertical) .activeIndicatorTransition{transition:transform 0.2s linear}"])), rn("grid"), Hh, rc, Yh, ar, sl, hr, ar, sl).withBehaviors(sn(ft(_templateObject171 || (_templateObject171 = _taggedTemplateLiteral(["\n        .activeIndicator,:host(.vertical) .activeIndicator{background:", "}"])), Ge.Highlight)));
  },
  sg = function sg(t, e) {
    return ft(_templateObject172 || (_templateObject172 = _taggedTemplateLiteral(["\n      ", " :host{box-sizing:border-box;", "\n        height:calc((", " + (", " * 2)) * 1px);padding:0 calc((6 + (", " * 2 * ", ")) * 1px);color:", ";border-radius:calc(", " * 1px);border:calc(", " * 1px) solid transparent;align-items:center;justify-content:center;grid-row:1 / 3;cursor:pointer}:host([aria-selected='true']){z-index:2}:host(:hover),:host(:active){color:", "}:host(:", "){", "}:host(.vertical){justify-content:start;grid-column:1 / 3}:host(.vertical[aria-selected='true']){z-index:2}:host(.vertical:hover),:host(.vertical:active){color:", "}:host(.vertical:hover[aria-selected='true']){}"])), rn("inline-flex"), Hh, Yh, rr, rr, nr, rc, ar, cr, rc, an, Kh, rc).withBehaviors(sn(ft(_templateObject173 || (_templateObject173 = _taggedTemplateLiteral(["\n          :host{forced-color-adjust:none;border-color:transparent;color:", ";fill:currentcolor}:host(:hover),:host(.vertical:hover),:host([aria-selected='true']:hover){background:transparent;color:", ";fill:currentcolor}:host([aria-selected='true']){background:transparent;color:", ";fill:currentcolor}:host(:", "){background:transparent;outline-color:", "}"])), Ge.ButtonText, Ge.Highlight, Ge.Highlight, an, Ge.ButtonText)));
  },
  ng = Ts.compose({
    baseName: "tab",
    template: function template(t, e) {
      return _(_templateObject174 || (_templateObject174 = _taggedTemplateLiteral(["<template slot=\"tab\" role=\"tab\" aria-disabled=\"", "\"><slot></slot></template>"])), function (t) {
        return t.disabled;
      });
    },
    styles: sg
  }),
  rg = sg,
  ag = function ag(t, e) {
    return ft(_templateObject175 || (_templateObject175 = _taggedTemplateLiteral(["\n  ", " :host{box-sizing:border-box;", "\n    padding:0 calc((6 + (", " * 2 * ", ")) * 1px)}"])), rn("block"), Hh, rr, nr);
  },
  lg = Ds.compose({
    baseName: "tab-panel",
    template: function template(t, e) {
      return _(_templateObject176 || (_templateObject176 = _taggedTemplateLiteral(["<template slot=\"tabpanel\" role=\"tabpanel\"><slot></slot></template>"])));
    },
    styles: ag
  }),
  cg = ag,
  hg = Os.compose({
    baseName: "tabs",
    template: function template(t, e) {
      return _(_templateObject177 || (_templateObject177 = _taggedTemplateLiteral(["<template class=\"", "\">", "<div class=\"tablist\" part=\"tablist\" role=\"tablist\"><slot class=\"tab\" name=\"tab\" part=\"tab\" ", "></slot>", "</div>", "<div class=\"tabpanel\"><slot name=\"tabpanel\" part=\"tabpanel\" ", "></slot></div></template>"])), function (t) {
        return t.orientation;
      }, Ut(0, e), Ht("tabs"), Tt(function (t) {
        return t.showActiveIndicator;
      }, _(_templateObject178 || (_templateObject178 = _taggedTemplateLiteral(["<div ", " class=\"activeIndicator\" part=\"activeIndicator\"></div>"])), Dt("activeIndicatorRef"))), jt(0, e), Ht("tabpanels"));
    },
    styles: og
  }),
  dg = og,
  ug = function ug(t, e) {
    return ft(_templateObject179 || (_templateObject179 = _taggedTemplateLiteral(["\n    ", "\n\n    ", "\n\n    ", "\n\n    :host{flex-direction:column;vertical-align:bottom}.control{height:calc((", " * 2) * 1px);padding:calc(", " * 1.5px) calc(", " * 2px + 1px)}:host .control{resize:none}:host(.resize-both) .control{resize:both}:host(.resize-horizontal) .control{resize:horizontal}:host(.resize-vertical) .control{resize:vertical}"])), rn("inline-flex"), zd(0, 0, ".control"), Hd(), Yh, rr, rr).withBehaviors(jd("outline", Md(0, 0, ".control")), jd("filled", Bd(0, 0, ".control")), sn(Nd(0, 0, ".control")));
  };
var pg = /*#__PURE__*/function (_As) {
  _inherits(pg, _As);
  var _super106 = _createSuper(pg);
  function pg() {
    _classCallCheck(this, pg);
    return _super106.apply(this, arguments);
  }
  _createClass(pg, [{
    key: "appearanceChanged",
    value: function appearanceChanged(t, e) {
      t !== e && (this.classList.add(e), this.classList.remove(t));
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(pg.prototype), "connectedCallback", this).call(this), this.appearance || (this.appearance = "outline");
    }
  }]);
  return pg;
}(As);
nd([it], pg.prototype, "appearance", void 0);
var gg = pg.compose({
    baseName: "text-area",
    baseClass: As,
    template: function template(t, e) {
      return _(_templateObject180 || (_templateObject180 = _taggedTemplateLiteral(["<template class=\" ", " ", "\"><label part=\"label\" for=\"control\" class=\"", "\"><slot ", "></slot></label><textarea part=\"control\" class=\"control\" id=\"control\" ?autofocus=\"", "\" cols=\"", "\" ?disabled=\"", "\" form=\"", "\" list=\"", "\" maxlength=\"", "\" minlength=\"", "\" name=\"", "\" placeholder=\"", "\" ?readonly=\"", "\" ?required=\"", "\" rows=\"", "\" ?spellcheck=\"", "\" :value=\"", "\" aria-atomic=\"", "\" aria-busy=\"", "\" aria-controls=\"", "\" aria-current=\"", "\" aria-describedby=\"", "\" aria-details=\"", "\" aria-disabled=\"", "\" aria-errormessage=\"", "\" aria-flowto=\"", "\" aria-haspopup=\"", "\" aria-hidden=\"", "\" aria-invalid=\"", "\" aria-keyshortcuts=\"", "\" aria-label=\"", "\" aria-labelledby=\"", "\" aria-live=\"", "\" aria-owns=\"", "\" aria-relevant=\"", "\" aria-roledescription=\"", "\" @input=\"", "\" @change=\"", "\" ", "></textarea></template>"])), function (t) {
        return t.readOnly ? "readonly" : "";
      }, function (t) {
        return t.resize !== Rs ? "resize-" + t.resize : "";
      }, function (t) {
        return t.defaultSlottedNodes && t.defaultSlottedNodes.length ? "label" : "label label__hidden";
      }, Ht("defaultSlottedNodes"), function (t) {
        return t.autofocus;
      }, function (t) {
        return t.cols;
      }, function (t) {
        return t.disabled;
      }, function (t) {
        return t.form;
      }, function (t) {
        return t.list;
      }, function (t) {
        return t.maxlength;
      }, function (t) {
        return t.minlength;
      }, function (t) {
        return t.name;
      }, function (t) {
        return t.placeholder;
      }, function (t) {
        return t.readOnly;
      }, function (t) {
        return t.required;
      }, function (t) {
        return t.rows;
      }, function (t) {
        return t.spellcheck;
      }, function (t) {
        return t.value;
      }, function (t) {
        return t.ariaAtomic;
      }, function (t) {
        return t.ariaBusy;
      }, function (t) {
        return t.ariaControls;
      }, function (t) {
        return t.ariaCurrent;
      }, function (t) {
        return t.ariaDescribedby;
      }, function (t) {
        return t.ariaDetails;
      }, function (t) {
        return t.ariaDisabled;
      }, function (t) {
        return t.ariaErrormessage;
      }, function (t) {
        return t.ariaFlowto;
      }, function (t) {
        return t.ariaHaspopup;
      }, function (t) {
        return t.ariaHidden;
      }, function (t) {
        return t.ariaInvalid;
      }, function (t) {
        return t.ariaKeyshortcuts;
      }, function (t) {
        return t.ariaLabel;
      }, function (t) {
        return t.ariaLabelledby;
      }, function (t) {
        return t.ariaLive;
      }, function (t) {
        return t.ariaOwns;
      }, function (t) {
        return t.ariaRelevant;
      }, function (t) {
        return t.ariaRoledescription;
      }, function (t, e) {
        return t.handleTextInput();
      }, function (t) {
        return t.handleChange();
      }, Dt("control"));
    },
    styles: ug,
    shadowOptions: {
      delegatesFocus: !0
    }
  }),
  fg = ug,
  mg = function mg(t, e) {
    return ft(_templateObject181 || (_templateObject181 = _taggedTemplateLiteral(["\n    ", "\n\n    ", "\n\n    ", "\n\n    .root{display:flex;flex-direction:row}.control{-webkit-appearance:none;color:inherit;background:transparent;border:0;height:calc(100% - 4px);margin-top:auto;margin-bottom:auto;padding:0 calc(", " * 2px + 1px);font-family:inherit;font-size:inherit;line-height:inherit}.start,.end{display:flex;margin:auto}.start{display:flex;margin-inline-start:11px}.end{display:flex;margin-inline-end:11px}"])), rn("inline-block"), zd(0, 0, ".root"), Hd(), rr).withBehaviors(jd("outline", Md(0, 0, ".root")), jd("filled", Bd(0, 0, ".root")), sn(Nd(0, 0, ".root")));
  };
var vg = /*#__PURE__*/function (_Yo) {
  _inherits(vg, _Yo);
  var _super107 = _createSuper(vg);
  function vg() {
    _classCallCheck(this, vg);
    return _super107.apply(this, arguments);
  }
  _createClass(vg, [{
    key: "appearanceChanged",
    value: function appearanceChanged(t, e) {
      t !== e && (this.classList.add(e), this.classList.remove(t));
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(vg.prototype), "connectedCallback", this).call(this), this.appearance || (this.appearance = "outline");
    }
  }]);
  return vg;
}(Yo);
nd([it], vg.prototype, "appearance", void 0);
var bg = vg.compose({
    baseName: "text-field",
    baseClass: Yo,
    template: function template(t, e) {
      return _(_templateObject182 || (_templateObject182 = _taggedTemplateLiteral(["<template class=\" ", " \"><label part=\"label\" for=\"control\" class=\"", "\"><slot ", "></slot></label><div class=\"root\" part=\"root\">", "<input class=\"control\" part=\"control\" id=\"control\" @input=\"", "\" @change=\"", "\" ?autofocus=\"", "\" ?disabled=\"", "\" list=\"", "\" maxlength=\"", "\" minlength=\"", "\" pattern=\"", "\" placeholder=\"", "\" ?readonly=\"", "\" ?required=\"", "\" size=\"", "\" ?spellcheck=\"", "\" :value=\"", "\" type=\"", "\" aria-atomic=\"", "\" aria-busy=\"", "\" aria-controls=\"", "\" aria-current=\"", "\" aria-describedby=\"", "\" aria-details=\"", "\" aria-disabled=\"", "\" aria-errormessage=\"", "\" aria-flowto=\"", "\" aria-haspopup=\"", "\" aria-hidden=\"", "\" aria-invalid=\"", "\" aria-keyshortcuts=\"", "\" aria-label=\"", "\" aria-labelledby=\"", "\" aria-live=\"", "\" aria-owns=\"", "\" aria-relevant=\"", "\" aria-roledescription=\"", "\" ", " />", "</div></template>"])), function (t) {
        return t.readOnly ? "readonly" : "";
      }, function (t) {
        return t.defaultSlottedNodes && t.defaultSlottedNodes.length ? "label" : "label label__hidden";
      }, Ht({
        property: "defaultSlottedNodes",
        filter: as
      }), Ut(0, e), function (t) {
        return t.handleTextInput();
      }, function (t) {
        return t.handleChange();
      }, function (t) {
        return t.autofocus;
      }, function (t) {
        return t.disabled;
      }, function (t) {
        return t.list;
      }, function (t) {
        return t.maxlength;
      }, function (t) {
        return t.minlength;
      }, function (t) {
        return t.pattern;
      }, function (t) {
        return t.placeholder;
      }, function (t) {
        return t.readOnly;
      }, function (t) {
        return t.required;
      }, function (t) {
        return t.size;
      }, function (t) {
        return t.spellcheck;
      }, function (t) {
        return t.value;
      }, function (t) {
        return t.type;
      }, function (t) {
        return t.ariaAtomic;
      }, function (t) {
        return t.ariaBusy;
      }, function (t) {
        return t.ariaControls;
      }, function (t) {
        return t.ariaCurrent;
      }, function (t) {
        return t.ariaDescribedby;
      }, function (t) {
        return t.ariaDetails;
      }, function (t) {
        return t.ariaDisabled;
      }, function (t) {
        return t.ariaErrormessage;
      }, function (t) {
        return t.ariaFlowto;
      }, function (t) {
        return t.ariaHaspopup;
      }, function (t) {
        return t.ariaHidden;
      }, function (t) {
        return t.ariaInvalid;
      }, function (t) {
        return t.ariaKeyshortcuts;
      }, function (t) {
        return t.ariaLabel;
      }, function (t) {
        return t.ariaLabelledby;
      }, function (t) {
        return t.ariaLive;
      }, function (t) {
        return t.ariaOwns;
      }, function (t) {
        return t.ariaRelevant;
      }, function (t) {
        return t.ariaRoledescription;
      }, Dt("control"), jt(0, e));
    },
    styles: mg,
    shadowOptions: {
      delegatesFocus: !0
    }
  }),
  yg = mg;
var xg = /*#__PURE__*/function (_Ps) {
  _inherits(xg, _Ps);
  var _super108 = _createSuper(xg);
  function xg() {
    _classCallCheck(this, xg);
    return _super108.apply(this, arguments);
  }
  return _createClass(xg);
}(Ps);
var $g = xg.compose({
  baseName: "toolbar",
  baseClass: Ps,
  template: function template(t, e) {
    return _(_templateObject183 || (_templateObject183 = _taggedTemplateLiteral(["<template aria-label=\"", "\" aria-labelledby=\"", "\" aria-orientation=\"", "\" orientation=\"", "\" role=\"toolbar\" @click=\"", "\" @focusin=\"", "\" @keydown=\"", "\" ", "><slot name=\"label\"></slot><div class=\"positioning-region\" part=\"positioning-region\">", "<slot ", "></slot>", "</div></template>"])), function (t) {
      return t.ariaLabel;
    }, function (t) {
      return t.ariaLabelledby;
    }, function (t) {
      return t.orientation;
    }, function (t) {
      return t.orientation;
    }, function (t, e) {
      return t.clickHandler(e.event);
    }, function (t, e) {
      return t.focusinHandler(e.event);
    }, function (t, e) {
      return t.keydownHandler(e.event);
    }, Bt({
      property: "childItems",
      attributeFilter: ["disabled", "hidden"],
      filter: Lt(),
      subtree: !0
    }), Ut(0, e), Ht({
      filter: Lt(),
      property: "slottedItems"
    }), jt(0, e));
  },
  styles: function styles(t, e) {
    return ft(_templateObject184 || (_templateObject184 = _taggedTemplateLiteral(["\n    ", " :host{--toolbar-item-gap:calc(", " * 1px);background:", ";fill:currentcolor;padding:var(--toolbar-item-gap);box-sizing:border-box;align-items:center}:host(", "){", "}.positioning-region{align-items:center;display:inline-flex;flex-flow:row wrap;justify-content:flex-start;flex-grow:1}:host([orientation='vertical']) .positioning-region{flex-direction:column;align-items:start}::slotted(:not([slot])){flex:0 0 auto;margin:0 var(--toolbar-item-gap)}:host([orientation='vertical']) ::slotted(:not([slot])){margin:var(--toolbar-item-gap) 0}:host([orientation='vertical']){display:inline-flex;flex-direction:column}.start,.end{display:flex;align-items:center}.end{margin-inline-start:auto}.start__hidden,.end__hidden{display:none}::slotted(svg){", "\n      width:16px;height:16px}"])), rn("inline-flex"), rr, el, an, Kh, "").withBehaviors(sn(ft(_templateObject185 || (_templateObject185 = _taggedTemplateLiteral(["\n        :host(:", "){outline-color:", ";color:", ";forced-color-adjust:none}"])), an, Ge.Highlight, Ge.ButtonText)));
  }
});
var wg = /*#__PURE__*/function (_Zs) {
  _inherits(wg, _Zs);
  var _super109 = _createSuper(wg);
  function wg() {
    _classCallCheck(this, wg);
    return _super109.apply(this, arguments);
  }
  _createClass(wg, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(wg.prototype), "connectedCallback", this).call(this), el.setValueFor(this, Ga);
    }
  }]);
  return wg;
}(Zs);
var kg = wg.compose({
    baseName: "tooltip",
    baseClass: Zs,
    template: function template(t, e) {
      return _(_templateObject186 || (_templateObject186 = _taggedTemplateLiteral([" ", " "])), Tt(function (t) {
        return t.tooltipVisible;
      }, _(_templateObject187 || (_templateObject187 = _taggedTemplateLiteral(["<", " fixed-placement=\"true\" auto-update-mode=\"", "\" vertical-positioning-mode=\"", "\" vertical-default-position=\"", "\" vertical-inset=\"", "\" vertical-scaling=\"", "\" horizontal-positioning-mode=\"", "\" horizontal-default-position=\"", "\" horizontal-scaling=\"", "\" horizontal-inset=\"", "\" vertical-viewport-lock=\"", "\" horizontal-viewport-lock=\"", "\" dir=\"", "\" ", "><div class=\"tooltip\" part=\"tooltip\" role=\"tooltip\"><slot></slot></div></", ">"])), t.tagFor(ei), function (t) {
        return t.autoUpdateMode;
      }, function (t) {
        return t.verticalPositioningMode;
      }, function (t) {
        return t.verticalDefaultPosition;
      }, function (t) {
        return t.verticalInset;
      }, function (t) {
        return t.verticalScaling;
      }, function (t) {
        return t.horizontalPositioningMode;
      }, function (t) {
        return t.horizontalDefaultPosition;
      }, function (t) {
        return t.horizontalScaling;
      }, function (t) {
        return t.horizontalInset;
      }, function (t) {
        return t.horizontalViewportLock;
      }, function (t) {
        return t.verticalViewportLock;
      }, function (t) {
        return t.currentDirection;
      }, Dt("region"), t.tagFor(ei))));
    },
    styles: function styles(t, e) {
      return ft(_templateObject188 || (_templateObject188 = _taggedTemplateLiteral(["\n    :host{position:relative;contain:layout;overflow:visible;height:0;width:0;z-index:10000}.tooltip{box-sizing:border-box;border-radius:calc(", " * 1px);border:calc(", " * 1px) solid ", ";background:", ";color:", ";padding:4px 12px;height:fit-content;width:fit-content;", "\n      white-space:nowrap;box-shadow:", "}fluent-anchored-region{display:flex;justify-content:center;align-items:center;overflow:visible;flex-direction:row}fluent-anchored-region.right,fluent-anchored-region.left{flex-direction:column}fluent-anchored-region.top .tooltip::after,fluent-anchored-region.bottom .tooltip::after,fluent-anchored-region.left .tooltip::after,fluent-anchored-region.right .tooltip::after{content:'';width:12px;height:12px;background:", ";border-top:calc(", " * 1px) solid ", ";border-left:calc(", " * 1px) solid ", ";position:absolute}fluent-anchored-region.top .tooltip::after{transform:translateX(-50%) rotate(225deg);bottom:5px;left:50%}fluent-anchored-region.top .tooltip{margin-bottom:12px}fluent-anchored-region.bottom .tooltip::after{transform:translateX(-50%) rotate(45deg);top:5px;left:50%}fluent-anchored-region.bottom .tooltip{margin-top:12px}fluent-anchored-region.left .tooltip::after{transform:translateY(-50%) rotate(135deg);top:50%;right:5px}fluent-anchored-region.left .tooltip{margin-right:12px}fluent-anchored-region.right .tooltip::after{transform:translateY(-50%) rotate(-45deg);top:50%;left:5px}fluent-anchored-region.right .tooltip{margin-left:12px}"])), ar, cr, Oc, el, rc, Hh, $d, el, cr, Oc, cr, Oc).withBehaviors(sn(ft(_templateObject189 || (_templateObject189 = _taggedTemplateLiteral(["\n        :host([disabled]){opacity:1}fluent-anchored-region.top .tooltip::after,fluent-anchored-region.bottom .tooltip::after,fluent-anchored-region.left .tooltip::after,fluent-anchored-region.right .tooltip::after{content:'';width:unset;height:unset}"])))));
    }
  }),
  Cg = function Cg(t, e) {
    return ft(_templateObject190 || (_templateObject190 = _taggedTemplateLiteral(["\n  :host([hidden]){display:none}", " :host{flex-direction:column;align-items:stretch;min-width:fit-content;font-size:0}"])), rn("flex"));
  },
  Ig = en.compose({
    baseName: "tree-view",
    template: function template(t, e) {
      return _(_templateObject191 || (_templateObject191 = _taggedTemplateLiteral(["<template role=\"tree\" ", " @keydown=\"", "\" @focusin=\"", "\" @focusout=\"", "\" @click=\"", "\" @selected-change=\"", "\"><slot ", "></slot></template>"])), Dt("treeView"), function (t, e) {
        return t.handleKeyDown(e.event);
      }, function (t, e) {
        return t.handleFocus(e.event);
      }, function (t, e) {
        return t.handleBlur(e.event);
      }, function (t, e) {
        return t.handleClick(e.event);
      }, function (t, e) {
        return t.handleSelectedChange(e.event);
      }, Ht("slottedTreeItems"));
    },
    styles: Cg
  }),
  Fg = Cg,
  Dg = ft(_templateObject192 || (_templateObject192 = _taggedTemplateLiteral(["\n  .expand-collapse-button svg{transform:rotate(0deg)}:host(.nested) .expand-collapse-button{left:var(--expand-collapse-button-nested-width,calc(", " * -1px))}:host([selected])::after{left:calc(", " * 1px)}:host([expanded]) > .positioning-region .expand-collapse-button svg{transform:rotate(90deg)}"])), Yh, hr),
  Tg = ft(_templateObject193 || (_templateObject193 = _taggedTemplateLiteral(["\n  .expand-collapse-button svg{transform:rotate(180deg)}:host(.nested) .expand-collapse-button{right:var(--expand-collapse-button-nested-width,calc(", " * -1px))}:host([selected])::after{right:calc(", " * 1px)}:host([expanded]) > .positioning-region .expand-collapse-button svg{transform:rotate(90deg)}"])), Yh, hr),
  Sg = vt(_templateObject194 || (_templateObject194 = _taggedTemplateLiteral(["((", " / 2) * ", ") + ((", " * ", ") / 2)"])), or, rr, rr, nr),
  Og = fo.create("tree-item-expand-collapse-hover").withDefault(function (t) {
    var e = Xl.getValueFor(t);
    return e.evaluate(t, e.evaluate(t).hover).hover;
  }),
  Eg = fo.create("tree-item-expand-collapse-selected-hover").withDefault(function (t) {
    var e = ql.getValueFor(t);
    return Xl.getValueFor(t).evaluate(t, e.evaluate(t).rest).hover;
  }),
  Vg = function Vg(t, e) {
    return ft(_templateObject195 || (_templateObject195 = _taggedTemplateLiteral(["\n    ", " :host{contain:content;position:relative;outline:none;color:", ";fill:currentcolor;cursor:pointer;font-family:", ";--expand-collapse-button-size:calc(", " * 1px);--tree-item-nested-width:0}.positioning-region{display:flex;position:relative;box-sizing:border-box;background:", ";border:calc(", " * 1px) solid transparent;border-radius:calc(", " * 1px);height:calc((", " + 1) * 1px)}:host(:", ") .positioning-region{", "}.positioning-region::before{content:'';display:block;width:var(--tree-item-nested-width);flex-shrink:0}:host(:not([disabled])) .positioning-region:hover{background:", "}:host(:not([disabled])) .positioning-region:active{background:", "}.content-region{display:inline-flex;align-items:center;white-space:nowrap;width:100%;height:calc(", " * 1px);margin-inline-start:calc(", " * 2px + 8px);", "}.items{display:none;", " font-size:calc(1em + (", " + 16) * 1px)}.expand-collapse-button{background:none;border:none;border-radius:calc(", " * 1px);", " width:calc((", " + (", " * 2)) * 1px);height:calc((", " + (", " * 2)) * 1px);padding:0;display:flex;justify-content:center;align-items:center;cursor:pointer;margin:0 6px}.expand-collapse-button svg{transition:transform 0.1s linear;pointer-events:none}.start,.end{display:flex}.start{", " margin-inline-end:calc(", " * 2px + 2px)}.end{", " margin-inline-start:calc(", " * 2px + 2px)}:host(.expanded) > .items{display:block}:host([disabled]){opacity:", ";cursor:", "}:host(.nested) .content-region{position:relative;margin-inline-start:var(--expand-collapse-button-size)}:host(.nested) .expand-collapse-button{position:absolute}:host(.nested) .expand-collapse-button:hover{background:", "}:host(:not([disabled])[selected]) .positioning-region{background:", "}:host(:not([disabled])[selected]) .expand-collapse-button:hover{background:", "}:host([selected])::after{content:'';display:block;position:absolute;top:calc((", " / 4) * 1px);width:3px;height:calc((", " / 2) * 1px);", " background:", ";border-radius:calc(", " * 1px)}::slotted(fluent-tree-item){--tree-item-nested-width:1em;--expand-collapse-button-nested-width:calc(", " * -1px)}"])), rn("block"), rc, dr, Yh, Yl, cr, ar, Yh, an, Kh, Ql, Zl, Yh, rr, Hh, "", rr, ar, "", Sg, rr, Sg, rr, "", rr, "", rr, ir, "not-allowed", Og, _l, Eg, Yh, Yh, "", sl, ar, Yh).withBehaviors(new rd(Dg, Tg), sn(ft(_templateObject196 || (_templateObject196 = _taggedTemplateLiteral(["\n        :host{color:", "}.positioning-region{border-color:", ";background:", "}:host(:not([disabled])) .positioning-region:hover,:host(:not([disabled])) .positioning-region:active,:host(:not([disabled])[selected]) .positioning-region{background:", "}:host .positioning-region:hover .content-region,:host([selected]) .positioning-region .content-region{forced-color-adjust:none;color:", "}:host([disabled][selected]) .positioning-region .content-region{color:", "}:host([selected])::after{background:", "}:host(:", ") .positioning-region{forced-color-adjust:none;outline-color:", "}:host([disabled]),:host([disabled]) .content-region,:host([disabled]) .positioning-region:hover .content-region{opacity:1;color:", "}:host(.nested) .expand-collapse-button:hover,:host(:not([disabled])[selected]) .expand-collapse-button:hover{background:", ";fill:", "}"])), Ge.ButtonText, Ge.ButtonFace, Ge.ButtonFace, Ge.Highlight, Ge.HighlightText, Ge.GrayText, Ge.HighlightText, an, Ge.ButtonFace, Ge.GrayText, Ge.ButtonFace, Ge.ButtonText)));
  },
  Rg = tn.compose({
    baseName: "tree-item",
    template: function template(t, e) {
      return _(_templateObject197 || (_templateObject197 = _taggedTemplateLiteral(["<template role=\"treeitem\" slot=\"", "\" tabindex=\"-1\" class=\"", " ", " ", " ", "\" aria-expanded=\"", "\" aria-selected=\"", "\" aria-disabled=\"", "\" @focusin=\"", "\" @focusout=\"", "\" ", "><div class=\"positioning-region\" part=\"positioning-region\"><div class=\"content-region\" part=\"content-region\">", " ", "<slot></slot>", "</div></div>", "</template>"])), function (t) {
        return t.isNestedItem() ? "item" : void 0;
      }, function (t) {
        return t.expanded ? "expanded" : "";
      }, function (t) {
        return t.selected ? "selected" : "";
      }, function (t) {
        return t.nested ? "nested" : "";
      }, function (t) {
        return t.disabled ? "disabled" : "";
      }, function (t) {
        return t.childItems && t.childItemLength() > 0 ? t.expanded : void 0;
      }, function (t) {
        return t.selected;
      }, function (t) {
        return t.disabled;
      }, function (t, e) {
        return t.handleFocus(e.event);
      }, function (t, e) {
        return t.handleBlur(e.event);
      }, Bt({
        property: "childItems",
        filter: Lt()
      }), Tt(function (t) {
        return t.childItems && t.childItemLength() > 0;
      }, _(_templateObject198 || (_templateObject198 = _taggedTemplateLiteral(["<div aria-hidden=\"true\" class=\"expand-collapse-button\" part=\"expand-collapse-button\" @click=\"", "\" ", "><slot name=\"expand-collapse-glyph\">", "</slot></div>"])), function (t, e) {
        return t.handleExpandCollapseButtonClick(e.event);
      }, Dt("expandCollapseButton"), e.expandCollapseGlyph || "")), Ut(0, e), jt(0, e), Tt(function (t) {
        return t.childItems && t.childItemLength() > 0 && (t.expanded || t.renderCollapsedChildren);
      }, _(_templateObject199 || (_templateObject199 = _taggedTemplateLiteral(["<div role=\"group\" class=\"items\" part=\"items\"><slot name=\"item\" ", "></slot></div>"])), Ht("items"))));
    },
    styles: Vg,
    expandCollapseGlyph: '\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  '
  }),
  Ag = Vg,
  Lg = {
    fluentAccordion: od,
    fluentAccordionItem: ed,
    fluentAnchor: Gd,
    fluentAnchoredRegion: Kd,
    fluentBadge: Zd,
    fluentBreadcrumb: eu,
    fluentBreadcrumbItem: su,
    fluentButton: lu,
    fluentCalendar: pu,
    fluentCard: mu,
    fluentCheckbox: yu,
    fluentCombobox: Iu,
    fluentDataGrid: Au,
    fluentDataGridCell: Ou,
    fluentDataGridRow: Vu,
    fluentDesignSystemProvider: Bu,
    fluentDialog: ju,
    fluentDivider: _u,
    fluentFlipper: Ku,
    fluentHorizontalScroll: ep,
    fluentListbox: np,
    fluentOption: lp,
    fluentMenu: up,
    fluentMenuItem: fp,
    fluentNumberField: xp,
    fluentProgress: kp,
    fluentProgressRing: Dp,
    fluentRadio: Op,
    fluentRadioGroup: Rp,
    fluentSearch: Bp,
    fluentSelect: Up,
    fluentSkeleton: Gp,
    fluentSlider: Xp,
    fluentSliderLabel: Zp,
    fluentSwitch: eg,
    fluentTabs: hg,
    fluentTab: ng,
    fluentTabPanel: lg,
    fluentTextArea: gg,
    fluentTextField: bg,
    fluentToolbar: $g,
    fluentTooltip: kg,
    fluentTreeView: Ig,
    fluentTreeItem: Rg,
    register: function register(t) {
      for (var _len12 = arguments.length, e = new Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
        e[_key12 - 1] = arguments[_key12];
      }
      if (t) for (var _i63 in this) {
        var _this$_i;
        "register" !== _i63 && (_this$_i = this[_i63]()).register.apply(_this$_i, [t].concat(e));
      }
    }
  };
function Pg(t) {
  return $o.getOrCreate(t).withPrefix("fluent");
}
var zg = Pg().register(Lg);
export { Td as AccentButtonStyles, Xe as Accordion, Re as AccordionItem, qd as Anchor, ei as AnchoredRegion, Qd as Badge, si as Breadcrumb, oi as BreadcrumbItem, au as Button, fu as Card, Cu as Combobox, Ii as DataGrid, Ti as DataGridCell, Ci as DataGridRow, Mu as DesignSystemProvider, Ao as Dialog, rd as DirectionalStyleSheetBehavior, Po as Divider, Mo as Flipper, zg as FluentDesignSystem, tp as HorizontalScroll, Sd as HypertextStyles, Od as LightweightButtonStyles, sp as Listbox, dp as Menu, _o as MenuItem, Dd as NeutralButtonStyles, bp as NumberField, cp as OptionStyles, Ed as OutlineButtonStyles, Ln as PaletteRGB, wp as Progress, Fp as ProgressRing, ns as Radio, is as RadioGroup, Ep as RadioStyles, Mp as Search, jp as Select, ms as Skeleton, ks as Slider, ys as SliderLabel, Yn as StandardLuminance, Vd as StealthButtonStyles, Sn as SwatchRGB, Fs as Switch, Ts as Tab, Ds as TabPanel, Os as Tabs, pg as TextArea, vg as TextField, xg as Toolbar, wg as Tooltip, tn as TreeItem, en as TreeView, Na as accentBaseColor, rl as accentFillActive, qr as accentFillActiveDelta, al as accentFillFocus, _r as accentFillFocusDelta, nl as accentFillHover, Ur as accentFillHoverDelta, ol as accentFillRecipe, sl as accentFillRest, jr as accentFillRestDelta, ml as accentForegroundActive, Kr as accentForegroundActiveDelta, xh as accentForegroundCut, $h as accentForegroundCutLarge, vl as accentForegroundFocus, Xr as accentForegroundFocusDelta, fl as accentForegroundHover, Wr as accentForegroundHoverDelta, pl as accentForegroundRecipe, gl as accentForegroundRest, Gr as accentForegroundRestDelta, ja as accentPalette, $l as accentStrokeControlActive, wl as accentStrokeControlFocus, xl as accentStrokeControlHover, bl as accentStrokeControlRecipe, yl as accentStrokeControlRest, id as accordionItemStyles, sd as accordionStyles, Lg as allComponents, ld as ambientShadow, _d as anchorStyles, Xd as anchoredRegionStyles, Jd as badgeStyles, Fd as baseButtonStyles, or as baseHeightMultiplier, sr as baseHorizontalSpacingMultiplier, zd as baseInputStyles, Nr as baseLayerLuminance, dr as bodyFont, nu as breadcrumbItemStyles, iu as breadcrumbStyles, cu as buttonStyles, vu as cardStyles, xu as checkboxStyles, Fu as comboboxStyles, ar as controlCornerRadius, ih as cornerRadius, Eu as dataGridCellStyles, Ru as dataGridRowStyles, Lu as dataGridStyles, nr as density, rr as designUnit, Uu as dialogStyles, er as direction, cd as directionalShadow, ir as disabledOpacity, Gu as dividerStyles, oh as elevatedCornerRadius, hd as elevation, bd as elevationShadowCardActive, gd as elevationShadowCardActiveSize, yd as elevationShadowCardFocus, fd as elevationShadowCardFocusSize, vd as elevationShadowCardHover, pd as elevationShadowCardHoverSize, md as elevationShadowCardRest, ud as elevationShadowCardRestSize, Id as elevationShadowDialog, Cd as elevationShadowDialogSize, kd as elevationShadowFlyout, wd as elevationShadowFlyoutSize, dd as elevationShadowRecipe, $d as elevationShadowTooltip, xd as elevationShadowTooltipSize, el as fillColor, Xu as flipperStyles, od as fluentAccordion, ed as fluentAccordionItem, Gd as fluentAnchor, Kd as fluentAnchoredRegion, Zd as fluentBadge, eu as fluentBreadcrumb, su as fluentBreadcrumbItem, lu as fluentButton, pu as fluentCalendar, mu as fluentCard, yu as fluentCheckbox, Iu as fluentCombobox, Au as fluentDataGrid, Ou as fluentDataGridCell, Vu as fluentDataGridRow, Bu as fluentDesignSystemProvider, ju as fluentDialog, _u as fluentDivider, Ku as fluentFlipper, ep as fluentHorizontalScroll, np as fluentListbox, up as fluentMenu, fp as fluentMenuItem, xp as fluentNumberField, lp as fluentOption, kp as fluentProgress, Dp as fluentProgressRing, Op as fluentRadio, Rp as fluentRadioGroup, Bp as fluentSearch, Up as fluentSelect, Gp as fluentSkeleton, Xp as fluentSlider, Zp as fluentSliderLabel, eg as fluentSwitch, ng as fluentTab, lg as fluentTabPanel, hg as fluentTabs, gg as fluentTextArea, bg as fluentTextField, $g as fluentToolbar, kg as fluentTooltip, Rg as fluentTreeItem, Ig as fluentTreeView, nh as focusOutlineWidth, Nc as focusStrokeInner, Bc as focusStrokeInnerRecipe, Mc as focusStrokeOuter, Hc as focusStrokeOuterRecipe, hr as focusStrokeWidth, Kh as focusTreatmentBase, Xh as focusTreatmentTight, ur as fontWeight, dl as foregroundOnAccentActive, _c as foregroundOnAccentActiveLarge, ul as foregroundOnAccentFocus, Gc as foregroundOnAccentFocusLarge, hl as foregroundOnAccentHover, qc as foregroundOnAccentHoverLarge, jc as foregroundOnAccentLargeRecipe, ll as foregroundOnAccentRecipe, cl as foregroundOnAccentRest, Uc as foregroundOnAccentRestLarge, Yh as heightNumber, ip as horizontalScrollStyles, Bd as inputFilledStyles, Nd as inputForcedColorStyles, Md as inputOutlineStyles, Hd as inputStateStyles, Vn as isDark, lr as layerCornerRadius, rp as listboxStyles, mp as menuItemStyles, pp as menuStyles, Ma as neutralBaseColor, Fh as neutralContrastFillActive, lh as neutralContrastFillActiveDelta, Dh as neutralContrastFillFocus, ch as neutralContrastFillFocusDelta, Ih as neutralContrastFillHover, ah as neutralContrastFillHoverDelta, Ch as neutralContrastFillRest, rh as neutralContrastFillRestDelta, wh as neutralDivider, fh as neutralDividerRestDelta, Fl as neutralFillActive, Zr as neutralFillActiveDelta, kh as neutralFillCard, hh as neutralFillCardDelta, Dl as neutralFillFocus, Jr as neutralFillFocusDelta, Il as neutralFillHover, Qr as neutralFillHoverDelta, El as neutralFillInputActive, ia as neutralFillInputActiveDelta, Pl as neutralFillInputAltActive, ra as neutralFillInputAltActiveDelta, zl as neutralFillInputAltFocus, aa as neutralFillInputAltFocusDelta, Ll as neutralFillInputAltHover, na as neutralFillInputAltHoverDelta, Rl as neutralFillInputAltRecipe, Al as neutralFillInputAltRest, sa as neutralFillInputAltRestDelta, Vl as neutralFillInputFocus, oa as neutralFillInputFocusDelta, Ol as neutralFillInputHover, ea as neutralFillInputHoverDelta, Tl as neutralFillInputRecipe, Sl as neutralFillInputRest, ta as neutralFillInputRestDelta, th as neutralFillInverseActive, Xc as neutralFillInverseActiveDelta, eh as neutralFillInverseFocus, Yc as neutralFillInverseFocusDelta, Jc as neutralFillInverseHover, Kc as neutralFillInverseHoverDelta, Qc as neutralFillInverseRecipe, Zc as neutralFillInverseRest, Wc as neutralFillInverseRestDelta, Nl as neutralFillLayerActive, ha as neutralFillLayerActiveDelta, jl as neutralFillLayerAltRecipe, Ul as neutralFillLayerAltRest, da as neutralFillLayerAltRestDelta, Bl as neutralFillLayerHover, ca as neutralFillLayerHoverDelta, Hl as neutralFillLayerRecipe, Ml as neutralFillLayerRest, la as neutralFillLayerRestDelta, kl as neutralFillRecipe, Cl as neutralFillRest, Yr as neutralFillRestDelta, Wl as neutralFillSecondaryActive, ga as neutralFillSecondaryActiveDelta, Kl as neutralFillSecondaryFocus, fa as neutralFillSecondaryFocusDelta, Gl as neutralFillSecondaryHover, pa as neutralFillSecondaryHoverDelta, ql as neutralFillSecondaryRecipe, _l as neutralFillSecondaryRest, ua as neutralFillSecondaryRestDelta, Zl as neutralFillStealthActive, ba as neutralFillStealthActiveDelta, Jl as neutralFillStealthFocus, ya as neutralFillStealthFocusDelta, Ql as neutralFillStealthHover, va as neutralFillStealthHoverDelta, Xl as neutralFillStealthRecipe, Yl as neutralFillStealthRest, ma as neutralFillStealthRestDelta, oc as neutralFillStrongActive, wa as neutralFillStrongActiveDelta, sc as neutralFillStrongFocus, ka as neutralFillStrongFocusDelta, ic as neutralFillStrongHover, $a as neutralFillStrongHoverDelta, tc as neutralFillStrongRecipe, ec as neutralFillStrongRest, xa as neutralFillStrongRestDelta, Oh as neutralFillToggleActive, ph as neutralFillToggleActiveDelta, Eh as neutralFillToggleFocus, gh as neutralFillToggleFocusDelta, Sh as neutralFillToggleHover, uh as neutralFillToggleHoverDelta, Th as neutralFillToggleRest, dh as neutralFillToggleRestDelta, Vh as neutralFocus, Rh as neutralFocusInnerAccent, lc as neutralForegroundActive, cc as neutralForegroundFocus, dc as neutralForegroundHint, hc as neutralForegroundHintRecipe, ac as neutralForegroundHover, nc as neutralForegroundRecipe, rc as neutralForegroundRest, Ka as neutralLayer1, Wa as neutralLayer1Recipe, Ya as neutralLayer2, Xa as neutralLayer2Recipe, Za as neutralLayer3, Qa as neutralLayer3Recipe, tl as neutralLayer4, Ja as neutralLayer4Recipe, qa as neutralLayerCardContainer, Ua as neutralLayerCardContainerRecipe, Ga as neutralLayerFloating, _a as neutralLayerFloatingRecipe, mh as neutralLayerL1, vh as neutralLayerL2, bh as neutralLayerL3, yh as neutralLayerL4, Ph as neutralOutlineActive, zh as neutralOutlineFocus, Lh as neutralOutlineHover, Ah as neutralOutlineRest, Ba as neutralPalette, fc as neutralStrokeActive, Fa as neutralStrokeActiveDelta, xc as neutralStrokeControlActive, Oa as neutralStrokeControlActiveDelta, $c as neutralStrokeControlFocus, Ea as neutralStrokeControlFocusDelta, yc as neutralStrokeControlHover, Sa as neutralStrokeControlHoverDelta, vc as neutralStrokeControlRecipe, bc as neutralStrokeControlRest, Ta as neutralStrokeControlRestDelta, wc as neutralStrokeDividerRecipe, kc as neutralStrokeDividerRest, Va as neutralStrokeDividerRestDelta, mc as neutralStrokeFocus, Da as neutralStrokeFocusDelta, gc as neutralStrokeHover, Ia as neutralStrokeHoverDelta, Dc as neutralStrokeInputActive, Tc as neutralStrokeInputFocus, Fc as neutralStrokeInputHover, Cc as neutralStrokeInputRecipe, Ic as neutralStrokeInputRest, Vc as neutralStrokeLayerActive, La as neutralStrokeLayerActiveDelta, Ec as neutralStrokeLayerHover, Aa as neutralStrokeLayerHoverDelta, Sc as neutralStrokeLayerRecipe, Oc as neutralStrokeLayerRest, Ra as neutralStrokeLayerRestDelta, uc as neutralStrokeRecipe, pc as neutralStrokeRest, Ca as neutralStrokeRestDelta, Pc as neutralStrokeStrongActive, za as neutralStrokeStrongActiveDelta, zc as neutralStrokeStrongFocus, Ha as neutralStrokeStrongFocusDelta, Lc as neutralStrokeStrongHover, Pa as neutralStrokeStrongHoverDelta, Rc as neutralStrokeStrongRecipe, Ac as neutralStrokeStrongRest, yp as numberFieldStyles, sh as outlineWidth, Tp as progressRingStyles, Cp as progressStyles, Pg as provideFluentDesignSystem, Ap as radioGroupStyles, Np as searchStyles, Lp as searchTemplate, qp as selectStyles, Wp as skeletonStyles, Jp as sliderLabelStyles, Yp as sliderStyles, cr as strokeWidth, ig as switchStyles, cg as tabPanelStyles, rg as tabStyles, dg as tabsStyles, fg as textAreaStyles, yg as textFieldStyles, Ag as treeItemStyles, Fg as treeViewStyles, Hh as typeRampBase, gr as typeRampBaseFontSize, mr as typeRampBaseFontVariations, fr as typeRampBaseLineHeight, Mh as typeRampMinus1, vr as typeRampMinus1FontSize, yr as typeRampMinus1FontVariations, br as typeRampMinus1LineHeight, Bh as typeRampMinus2, xr as typeRampMinus2FontSize, wr as typeRampMinus2FontVariations, $r as typeRampMinus2LineHeight, Nh as typeRampPlus1, kr as typeRampPlus1FontSize, Ir as typeRampPlus1FontVariations, Cr as typeRampPlus1LineHeight, jh as typeRampPlus2, Fr as typeRampPlus2FontSize, Tr as typeRampPlus2FontVariations, Dr as typeRampPlus2LineHeight, Uh as typeRampPlus3, Sr as typeRampPlus3FontSize, Er as typeRampPlus3FontVariations, Or as typeRampPlus3LineHeight, qh as typeRampPlus4, Vr as typeRampPlus4FontSize, Ar as typeRampPlus4FontVariations, Rr as typeRampPlus4LineHeight, _h as typeRampPlus5, Lr as typeRampPlus5FontSize, zr as typeRampPlus5FontVariations, Pr as typeRampPlus5LineHeight, Gh as typeRampPlus6, Hr as typeRampPlus6FontSize, Br as typeRampPlus6FontVariations, Mr as typeRampPlus6LineHeight };