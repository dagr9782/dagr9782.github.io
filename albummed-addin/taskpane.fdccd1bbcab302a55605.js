/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/taskpane/taskpane.js ***!
  \**********************************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* global document, Office, console, PowerPoint */

Office.onReady(function (info) {
  /* QR Code */
  document.getElementById("Botao1").control.style.background = "#43AC68";
  document.getElementById("Botao1").addEventListener("mouseover", function () {
    document.getElementById("Botao1").control.style.backgroundColor = "#53BC78";
  });
  document.getElementById("Botao1").addEventListener("mouseout", function () {
    document.getElementById("Botao1").control.style.backgroundColor = "#43AC68";
  });
  document.getElementById("Voltar1").control.style.background = "#525252";
  document.getElementById("Voltar1").addEventListener("mouseover", function () {
    document.getElementById("Voltar1").control.style.backgroundColor = "#626262";
  });
  document.getElementById("Voltar1").addEventListener("mouseout", function () {
    document.getElementById("Voltar1").control.style.backgroundColor = "#525252";
  });
  document.getElementById("Botao1").onclick = qrcode;
  /* Image Search */
  document.getElementById("Botao2").control.style.background = "#43AC68";
  document.getElementById("Botao2").addEventListener("mouseover", function () {
    document.getElementById("Botao2").control.style.backgroundColor = "#53BC78";
  });
  document.getElementById("Botao2").addEventListener("mouseout", function () {
    document.getElementById("Botao2").control.style.backgroundColor = "#43AC68";
  });
  document.getElementById("Voltar2").control.style.background = "#525252";
  document.getElementById("Voltar2").addEventListener("mouseover", function () {
    document.getElementById("Voltar2").control.style.backgroundColor = "#626262";
  });
  document.getElementById("Voltar2").addEventListener("mouseout", function () {
    document.getElementById("Voltar2").control.style.backgroundColor = "#525252";
  });
  document.getElementById("Botao2").onclick = imagem;
  // Troca
  //document.getElementById("Troca").addEventListener("click", add);
  if (info.host === Office.HostType.PowerPoint) {
    // Traduções
    var UIText = UIStrings.getLocaleStrings(Office.context.displayLanguage);
    for (var _i = 0, _arr = ["Greeting", "Introduction", "More", "Escolha", "Certificado", "QRCode", "Imagens", "Texto1", "Site1", "Botao1", "Voltar1", "Texto2", "Imagem2", "Botao2", "Voltar2", "Texto3", "Cert3", "Botao3", "Botao4", "Voltar3"]; _i < _arr.length; _i++) {
      var value = _arr[_i];
      document.getElementById(value).innerHTML = UIText[value];
    }
    document.getElementById("Nomes").value = UIText["Nomes"];
  }
});

// Imagem
function imagem() {
  return _imagem.apply(this, arguments);
} // QR Code
function _imagem() {
  _imagem = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            document.getElementById("Frame2").src = "https://album.med.br/addin/imagem.php?q=" + document.getElementById("Busca2").value;
          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _imagem.apply(this, arguments);
}
function qrcode() {
  return _qrcode.apply(this, arguments);
}
/*
  Office.context.document.setSelectedDataAsync(
    "Texto adicionado pelo add-in AlbumMed!",
    {
      coercionType: Office.CoercionType.Text,
    },
    (result) => {
      if (result.status === Office.AsyncResultStatus.Failed) {
        console.error(result.error.message);
      }
    }
  );

async function removeAll() {
  // This function gets the collection of shapes on the first slide,
  // and then iterates through them, deleting each one.
  await PowerPoint.run(async (context) => {
    const slide = context.presentation.slides.getItemAt(0);
    await context.sync();
    const shapes = slide.shapes;
    // Load all the shapes in the collection without loading their properties.
    shapes.load("items/type");
    await context.sync();
    //shapes.items.forEach((shape) => shape.delete());
    shapes.items.forEach((shape) => {
      if (shape.type == "Image") shape.delete();
    });
    await context.sync();
  });
}

let saida = "inicial";
function add() {
  // This function gets the collection of shapes on the first slide,
  // and adds a text box to the collection, while specifying its text,
  // location, and size. Then it names the text box.
  return PowerPoint.run(function (context) {
    Office.context.document.getSelectedDataAsync(Office.CoercionType.Text, (asyncResult) => {
      if (asyncResult.status === Office.AsyncResultStatus.Failed) {
        saida = asyncResult.error.message;
      } else {
        saida = asyncResult.value;
      }
    });
    const shapes = context.presentation.slides.getItemAt(0).shapes;
    const textbox = shapes.addTextBox(saida, {
      left: 100,
      top: 100,
      height: 200,
      width: 200,
    });
    textbox.name = "Diego";
    return context.sync();
  });
}
*/
/** Default helper for invoking an action and handling errors.
async function tryCatch(callback) {
  try {
    await callback();
  } catch (error) {
    // Note: In a production add-in, you'd want to notify the user through your add-in's UI.
    console.error(error);
  }
}*/
// Traduções
function _qrcode() {
  _qrcode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var url, xhttp;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // Clean
            if (document.getElementById("urlqrcode").value.startsWith("https://")) {
              document.getElementById("urltype").value = "https://";
              document.getElementById("urlqrcode").value = document.getElementById("urlqrcode").value.replace(/^https:\/\//, "");
            } else if (document.getElementById("urlqrcode").value.startsWith("http://")) {
              document.getElementById("urltype").value = "http://";
              document.getElementById("urlqrcode").value = document.getElementById("urlqrcode").value.replace(/^http:\/\//, "");
            }
            // API
            url = "https://album.med.br/addin/qrcode.php?u=" + document.getElementById("urltype").value + document.getElementById("urlqrcode").value;
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
              if (xhttp.readyState !== 4) {
                return;
              }
              if (xhttp.status == 200) {
                Office.context.document.setSelectedDataAsync(xhttp.responseText, {
                  coercionType: Office.CoercionType.XmlSvg,
                  imageLeft: 830,
                  imageTop: 410,
                  imageWidth: 100
                });
              } else if (xhttp.status == 404) {
                console.log(xhttp.responseText);
              } else {
                console.error({
                  status: xhttp.status,
                  statusText: xhttp.statusText
                });
              }
            };
            xhttp.open("GET", url, true);
            xhttp.send();
          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _qrcode.apply(this, arguments);
}
var UIStrings = function () {
  "use strict";

  var UIStrings = {};
  // English
  UIStrings.EN = {
    Greeting: 'Welcome to the <span style="color:#43AC68">AlbumMed</span> add-in package',
    Introduction: "<strong>AlbumMed</strong> will help you transform your project in dynamic, interactive and easy-to-use slides.",
    More: "Check below the apps to improve your work using AlbumMed image bank, a plugin for generating QRCode and complete your course with the certificate issuer tool.",
    Escolha: '<span style="color:#43AC68">Click the icons below to choose:</span>',
    Certificado: "Certificate",
    QRCode: "QR Code",
    Imagens: "Images",
    Texto1: 'Welcome to the <span style="color:#43AC68">AlbumMed QRCode</span> add-in',
    Site1: "Type the URL",
    Botao1: "Insert",
    Voltar1: "Back",
    Texto2: 'Welcome to the <span style="color:#43AC68">AlbumMed Image Search</span> add-in',
    Imagem2: "Type below to search",
    Botao2: "Go",
    Voltar2: "Back",
    Texto3: 'Welcome to the <span style="color:#43AC68">AlbumMed Certificate Issuer</span> add-in',
    Cert3: "To use it, acquire a certificate template on the AlbumMed website",
    Botao3: "Certificate",
    Botao4: "Delete Slides",
    Voltar3: "Back",
    Nomes: "Type or paste names here\nOne name per line"
  };
  // Português
  UIStrings.BR = {
    Greeting: 'Bem-vindo ao Pacote de suplementos do <span style="color:#43AC68">AlbumMed</span>',
    Introduction: "O <strong>AlbumMed</strong> irá ajudá-lo a transformar o seu projeto em slides dinâmicos, interativos e de fácil manuseio.",
    More: "Confira abaixo os aplicativos para melhorar o seu trabalho utilizando imagens do banco AlbumMed, um plugin para gerar QRCode e complete seu curso com a ferramenta para emitir certificado.",
    Escolha: '<span style="color:#43AC68">Clique nos ícones abaixo para escolher:</span>',
    Certificado: "Certificado",
    QRCode: "QR Code",
    Imagens: "Imagens",
    Texto1: 'Bem-vindo ao suplemento do <span style="color:#43AC68">QRCode do AlbumMed</span>',
    Site1: "Entre com a URL",
    Botao1: "Inserir",
    Voltar1: "Voltar",
    Texto2: 'Bem-vindo ao suplemento de <span style="color:#43AC68">Busca de Imagens do AlbumMed</span>',
    Imagem2: "Digite abaixo para buscar",
    Botao2: "Buscar",
    Voltar2: "Voltar",
    Texto3: 'Bem-vindo ao suplemento de <span style="color:#43AC68">Gerar Certificados do AlbumMed</span>',
    Cert3: "Para utilizar, obtenha um template de certificação no site AlbumMed",
    Botao3: "Certificado",
    Botao4: "Excluir Slides",
    Voltar3: "Voltar",
    Nomes: "Digite ou cole os nomes aqui\nUm nome por linha"
  };
  UIStrings.getLocaleStrings = function (locale) {
    var text;
    switch (locale) {
      case "en-US":
        text = UIStrings.EN;
        break;
      case "pt-BR":
        text = UIStrings.BR;
        break;
      default:
        text = UIStrings.EN;
        break;
    }
    return text;
  };
  return UIStrings;
}();
/******/ })()
;
//# sourceMappingURL=taskpane.fdccd1bbcab302a55605.js.map