/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./src/taskpane/certificado.js ***!
  \*************************************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* global document, Office, PowerPoint */

Office.onReady(function (info) {
  /* Certificate */
  document.getElementById("Botao3").control.style.background = "#43AC68";
  document.getElementById("Botao3").addEventListener("mouseover", function () {
    document.getElementById("Botao3").control.style.backgroundColor = "#53BC78";
  });
  document.getElementById("Botao3").addEventListener("mouseout", function () {
    document.getElementById("Botao3").control.style.backgroundColor = "#43AC68";
  });
  document.getElementById("Voltar3").control.style.background = "#525252";
  document.getElementById("Voltar3").addEventListener("mouseover", function () {
    document.getElementById("Voltar3").control.style.backgroundColor = "#626262";
  });
  document.getElementById("Voltar3").addEventListener("mouseout", function () {
    document.getElementById("Voltar3").control.style.backgroundColor = "#525252";
  });
  document.getElementById("Nomes").control.style.height = "100px";
  // Funções dos Botões
  document.getElementById("Botao3").addEventListener("click", certificado);
  document.getElementById("Botao4").addEventListener("click", apagar_slides);
  // Texto do Select
  if (info.host === Office.HostType.PowerPoint) {
    if (Office.context.displayLanguage == "pt-BR") {
      certificado_load("Escolha o modelo...");
    } else {
      certificado_load("Choose the template...");
    }
  }
});

// Nomes para o Certificado vindo do site
/*
async function nomes() {
  const url = "https://album.med.br/addin/certificate.php";
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState !== 4) {
      return;
    }
    if (xhttp.status == 200) {
      document.getElementById("Nomes").value = xhttp.responseText;
    } else if (xhttp.status == 404) {
      console.log(xhttp.responseText);
    } else {
      console.error({
        status: xhttp.status,
        statusText: xhttp.statusText,
      });
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
*/

// Carrega modelos de certificado
function certificado_load(_x) {
  return _certificado_load.apply(this, arguments);
} // Cria slide com o modelo escolhido
function _certificado_load() {
  _certificado_load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(texto) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return PowerPoint.run( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
                var mestre, i, layoutsInMaster, j;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        mestre = context.presentation.slideMasters.load("items/name, items/id, items/layouts/items/name, items/layouts/items/id");
                        _context.next = 3;
                        return context.sync();
                      case 3:
                        document.getElementById("template").innerHTML = "<fluent-option selected>" + texto + "</fluent-option>";
                        for (i = 0; i < mestre.items.length; i++) {
                          layoutsInMaster = mestre.items[i].layouts;
                          for (j = 0; j < layoutsInMaster.items.length; j++) {
                            if (layoutsInMaster.items[j].name.startsWith("Certificado")) {
                              document.getElementById("template").innerHTML = document.getElementById("template").innerHTML + '<fluent-option value="' + layoutsInMaster.items[j].name + '">' + layoutsInMaster.items[j].name + "</fluent-option>";
                            }
                          }
                        }
                        document.getElementById("template").onchange = certificado_template;
                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
              return function (_x2) {
                return _ref.apply(this, arguments);
              };
            }());
          case 2:
            return _context2.abrupt("return", _context2.sent);
          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _certificado_load.apply(this, arguments);
}
function certificado_template() {
  return _certificado_template.apply(this, arguments);
} // Gera certificados com os nomes
function _certificado_template() {
  _certificado_template = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var selectedSlideIndex;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            selectedSlideIndex = 0;
            Office.context.document.getSelectedDataAsync(Office.CoercionType.SlideRange, function (asyncResult) {
              if (asyncResult.status === Office.AsyncResultStatus.Failed) {
                selectedSlideIndex = asyncResult.error.message;
              } else {
                selectedSlideIndex = asyncResult.value.slides[0].index;
              }
            });
            _context4.next = 4;
            return PowerPoint.run( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(context) {
                var ultimo, template, mestre, mestreId, certificadoId, i, layoutsInMaster, j, para, nome, de;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        ultimo = context.presentation.slides.getCount();
                        template = document.getElementById("template").value;
                        mestre = context.presentation.slideMasters.load("items/name, items/id, items/layouts/items/name, items/layouts/items/id");
                        _context3.next = 5;
                        return context.sync();
                      case 5:
                        certificadoId = "";
                        for (i = 0; i < mestre.items.length; i++) {
                          layoutsInMaster = mestre.items[i].layouts;
                          for (j = 0; j < layoutsInMaster.items.length; j++) {
                            if (layoutsInMaster.items[j].name == template) {
                              mestreId = mestre.items[i].id;
                              certificadoId = layoutsInMaster.items[j].id;
                            }
                          }
                        }
                        context.presentation.slides.add({
                          slideMasterId: mestreId,
                          layoutId: certificadoId
                        });
                        _context3.next = 10;
                        return context.sync();
                      case 10:
                        para = context.presentation.slides.getItemAt(ultimo.value);
                        nome = para.shapes.addTextBox("Nome Sobrenome", {
                          left: certificadosNomes[template].left,
                          top: certificadosNomes[template].top,
                          height: certificadosNomes[template].height,
                          width: certificadosNomes[template].width
                        });
                        nome.textFrame.textRange.font.bold = certificadosNomes[template].bold;
                        nome.textFrame.textRange.font.color = certificadosNomes[template].color;
                        nome.textFrame.textRange.font.italic = certificadosNomes[template].italic;
                        nome.textFrame.textRange.font.name = certificadosNomes[template].name;
                        nome.textFrame.textRange.font.size = certificadosNomes[template].size;
                        nome.textFrame.textRange.font.underline = certificadosNomes[template].underline;
                        nome.textFrame.textRange.paragraphFormat.horizontalAlignment = certificadosNomes[template].horizontalAlignment;
                        // apaga slide
                        if (selectedSlideIndex > 1) {
                          de = context.presentation.slides.getItemAt(selectedSlideIndex - 1);
                          de.delete();
                        }
                        para.load("id");
                        _context3.next = 23;
                        return context.sync();
                      case 23:
                        context.presentation.setSelectedSlides([para.id]);
                        // tira o foco
                        document.getElementById("Nomes").focus();
                      case 25:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));
              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());
          case 4:
            return _context4.abrupt("return", _context4.sent);
          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _certificado_template.apply(this, arguments);
}
function certificado() {
  return _certificado.apply(this, arguments);
} // Apaga slides mantendo apenas o primeiro
function _certificado() {
  _certificado = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var selectedSlideIndex;
    return _regeneratorRuntime().wrap(function _callee6$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            selectedSlideIndex = 0;
            Office.context.document.getSelectedDataAsync(Office.CoercionType.SlideRange, function (asyncResult) {
              if (asyncResult.status === Office.AsyncResultStatus.Failed) {
                selectedSlideIndex = asyncResult.error.message;
              } else {
                selectedSlideIndex = asyncResult.value.slides[0].index;
              }
            });
            _context7.next = 4;
            return PowerPoint.run( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(context) {
                var ultimo, template, mestre, mestreId, certificadoId, i, layoutsInMaster, _j, de, shapes, lines, _loop, j;
                return _regeneratorRuntime().wrap(function _callee5$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        ultimo = context.presentation.slides.getCount();
                        template = document.getElementById("template").value;
                        mestre = context.presentation.slideMasters.load("items/name, items/id, items/layouts/items/name, items/layouts/items/id");
                        _context6.next = 5;
                        return context.sync();
                      case 5:
                        certificadoId = "";
                        for (i = 0; i < mestre.items.length; i++) {
                          layoutsInMaster = mestre.items[i].layouts;
                          for (_j = 0; _j < layoutsInMaster.items.length; _j++) {
                            if (layoutsInMaster.items[_j].name == template) {
                              mestreId = mestre.items[i].id;
                              certificadoId = layoutsInMaster.items[_j].id;
                            }
                          }
                        }
                        de = context.presentation.slides.getItemAt(selectedSlideIndex - 1);
                        shapes = de.shapes;
                        shapes.load("items, height, left, top, width, textFrame/textRange/font/bold, textFrame/textRange/font/color, textFrame/textRange/font/italic, textFrame/textRange/font/name, textFrame/textRange/font/size, textFrame/textRange/font/underline, textFrame/textRange/paragraphFormat/bulletFormat, textFrame/textRange/paragraphFormat/horizontalAlignment");
                        lines = document.getElementById("Nomes").value.split("\n");
                        _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                          var para;
                          return _regeneratorRuntime().wrap(function _loop$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  context.presentation.slides.add({
                                    slideMasterId: mestreId,
                                    layoutId: certificadoId
                                  });
                                  _context5.next = 3;
                                  return context.sync();
                                case 3:
                                  para = context.presentation.slides.getItemAt(ultimo.value + j);
                                  shapes.items.forEach(function (shape) {
                                    var nome = para.shapes.addTextBox(lines[j], {
                                      left: shape.left,
                                      top: shape.top,
                                      height: shape.height,
                                      width: shape.width
                                    });
                                    nome.textFrame.textRange.font.bold = shape.textFrame.textRange.font.bold;
                                    nome.textFrame.textRange.font.color = shape.textFrame.textRange.font.color;
                                    nome.textFrame.textRange.font.italic = shape.textFrame.textRange.font.italic;
                                    nome.textFrame.textRange.font.name = shape.textFrame.textRange.font.name;
                                    nome.textFrame.textRange.font.size = shape.textFrame.textRange.font.size;
                                    nome.textFrame.textRange.font.underline = shape.textFrame.textRange.font.underline;
                                    nome.textFrame.textRange.paragraphFormat.horizontalAlignment = shape.textFrame.textRange.paragraphFormat.horizontalAlignment;
                                  });
                                case 5:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _loop);
                        });
                        j = 0;
                      case 13:
                        if (!(j < lines.length)) {
                          _context6.next = 18;
                          break;
                        }
                        return _context6.delegateYield(_loop(), "t0", 15);
                      case 15:
                        j++;
                        _context6.next = 13;
                        break;
                      case 18:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee5);
              }));
              return function (_x4) {
                return _ref3.apply(this, arguments);
              };
            }());
          case 4:
            return _context7.abrupt("return", _context7.sent);
          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee6);
  }));
  return _certificado.apply(this, arguments);
}
function apagar_slides() {
  return _apagar_slides.apply(this, arguments);
}
/*
async function propriedades() {
  console.log("ok");
  let selectedSlideIndex = 0;
  Office.context.document.getSelectedDataAsync(Office.CoercionType.SlideRange, (asyncResult) => {
    if (asyncResult.status === Office.AsyncResultStatus.Failed) {
      selectedSlideIndex = asyncResult.error.message;
    } else {
      selectedSlideIndex = asyncResult.value.slides[0].index;
    }
  });
  return await PowerPoint.run(async function (context) {
    const shapes = context.presentation.getSelectedShapes();
    shapes.load(
      "items, height, left, top, width, textFrame/textRange/font/bold, textFrame/textRange/font/color, textFrame/textRange/font/italic, textFrame/textRange/font/name, textFrame/textRange/font/size, textFrame/textRange/font/underline, textFrame/textRange/paragraphFormat/bulletFormat, textFrame/textRange/paragraphFormat/horizontalAlignment"
    );
    await context.sync();
    shapes.items.forEach((shape) => {
      console.log('left:'+shape.left);
      console.log('top:'+shape.top);
      console.log('height:'+shape.height);
      console.log('width:'+shape.width);
      console.log('bold:'+shape.textFrame.textRange.font.bold);
      console.log('color:'+shape.textFrame.textRange.font.color);
      console.log('italic:'+shape.textFrame.textRange.font.italic);
      console.log('name:'+shape.textFrame.textRange.font.name);
      console.log('size:'+shape.textFrame.textRange.font.size);
      console.log('underline:'+shape.textFrame.textRange.font.underline);
      console.log('horizontalAlignment:'+shape.textFrame.textRange.paragraphFormat.horizontalAlignment);
    });
  });
}
*/
function _apagar_slides() {
  _apagar_slides = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    return _regeneratorRuntime().wrap(function _callee8$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return PowerPoint.run( /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(context) {
                var ultimo, i;
                return _regeneratorRuntime().wrap(function _callee7$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        context.presentation.load("slides");
                        ultimo = context.presentation.slides.getCount();
                        _context8.next = 4;
                        return context.sync();
                      case 4:
                        for (i = ultimo.value - 1; i > 0; i--) {
                          context.presentation.slides.getItemAt(i).delete();
                        }
                      case 5:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee7);
              }));
              return function (_x5) {
                return _ref4.apply(this, arguments);
              };
            }());
          case 2:
            return _context9.abrupt("return", _context9.sent);
          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee8);
  }));
  return _apagar_slides.apply(this, arguments);
}
var certificadosNomes = [];
certificadosNomes["Certificado 1"] = {
  left: 0,
  top: 192,
  height: 50,
  width: 780,
  bold: true,
  color: "#000000",
  italic: false,
  name: "Univers",
  size: 36,
  underline: "None",
  horizontalAlignment: "Center"
};
certificadosNomes["Certificado 2"] = {
  left: 0,
  top: 180,
  height: 80,
  width: 780,
  bold: true,
  color: "#251A74",
  italic: false,
  name: "Gabriola",
  size: 60,
  underline: "None",
  horizontalAlignment: "Center"
};
certificadosNomes["Certificado 3"] = {
  left: 0,
  top: 251,
  height: 70,
  width: 780,
  bold: true,
  color: "#0D0D0D",
  italic: false,
  name: "Vivaldi",
  size: 52,
  underline: "None",
  horizontalAlignment: "Center"
};
certificadosNomes["Certificado 4"] = {
  left: 0,
  top: 258,
  height: 72,
  width: 780,
  bold: true,
  color: "#203966",
  italic: false,
  name: "Rage Italic",
  size: 54,
  underline: "None",
  horizontalAlignment: "Center"
};
certificadosNomes["Certificado 5"] = {
  left: 0,
  top: 202,
  height: 104,
  width: 780,
  bold: true,
  color: "#000000",
  italic: false,
  name: "Cochocib Script Latin Pro",
  size: 70,
  underline: "None",
  horizontalAlignment: "Center"
};
certificadosNomes["Certificado 6"] = {
  left: 0,
  top: 231,
  height: 104,
  width: 780,
  bold: true,
  color: "#000000",
  italic: false,
  name: "Palace Script MT",
  size: 72,
  underline: "None",
  horizontalAlignment: "Center"
};
certificadosNomes["Certificado 7"] = {
  left: 24.2,
  top: 216.5,
  height: 60.6,
  width: 612.54,
  bold: true,
  color: "#17512D",
  italic: false,
  name: "Roboto",
  size: 44,
  underline: "None",
  horizontalAlignment: "Center"
};
certificadosNomes["Certificado 8"] = {
  left: 0,
  top: 240,
  height: 113.9,
  width: 780,
  bold: true,
  color: "#000000",
  italic: false,
  name: "Cochocib Script Latin Pro",
  size: 70,
  underline: "None",
  horizontalAlignment: "Center"
};
certificadosNomes["Certificado 9"] = {
  left: 0,
  top: 233,
  height: 113.9,
  width: 780,
  bold: true,
  color: "#3B572B",
  italic: false,
  name: "Cochocib Script Latin Pro",
  size: 70,
  underline: "None",
  horizontalAlignment: "Center"
};
certificadosNomes["Certificado 10"] = {
  left: 0,
  top: 268,
  height: 73,
  width: 780,
  bold: true,
  color: "#C55A11",
  italic: false,
  name: "Vivaldi",
  size: 54,
  underline: "None",
  horizontalAlignment: "Center"
};
/******/ })()
;
//# sourceMappingURL=certificado.7e5951b91b6f4cd4f4ac.js.map