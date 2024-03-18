// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aJPIF":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fe27fe52f5c48570";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8ZNvh":[function(require,module,exports) {
var _client = require("@gradio/client");
const submit = document.getElementById("predict-button");
const drag_over = document.getElementById("drop_zone");
const upload_input = document.getElementById("input_photo");
const image_zone = document.getElementById("drop_zone");
const upload_image = document.getElementById("upload_image");
const upload_title = document.getElementById("upload_title");
let file;
function addTitle(title) {
    const h2_title = document.getElementById("pet_breed");
    h2_title.innerHTML = title;
}
async function makePrediction(fl) {
    if (!fl) return;
    try {
        loadingSpinner();
        let reader = new FileReader();
        reader.onloadend = async function() {
            const app = await (0, _client.client)("airvit2/pet_classifier");
            const result = await app.predict("/predict", [
                reader.result
            ]);
            addTitle(result.data[0].label);
            loadingSpinner();
        };
        reader.readAsDataURL(fl);
    } catch (error) {
        console.log("An error occurred during prediction");
        console.error(error);
    }
}
function loadingSpinner() {
    const loading = document.getElementById("loading-spinner");
    const petBreed = document.getElementById("pet_breed");
    const form = document.getElementById("my-form");
    if (loading.classList.contains("hidden")) {
        loading.classList.remove("hidden");
        petBreed.classList.add("hidden");
        form.classList.add("hidden");
    } else {
        loading.classList.add("hidden");
        petBreed.classList.remove("hidden");
        form.classList.remove("hidden");
    }
}
function addImage(fl) {
    const bgUrl = URL.createObjectURL(fl);
    image_zone.classList.add("bg-cover");
    image_zone.classList.add("bg-center");
    image_zone.classList.add("bg-no-repeat");
    image_zone.style.backgroundImage = `url(${bgUrl})`;
    upload_image.classList.add("hidden");
    upload_title.classList.add("hidden");
    file = fl;
}
function removeImage() {
    image_zone.classList.remove("bg-cover");
    image_zone.classList.remove("bg-center");
    image_zone.classList.remove("bg-no-repeat");
    image_zone.style.backgroundImage = "";
    upload_image.classList.remove("hidden");
    upload_title.classList.remove("hidden");
}
function dropHandler(e) {
    e.preventDefault();
    removeImage();
    if (e.dataTransfer.items) [
        ...e.dataTransfer.items
    ].forEach((item, i)=>{
        if (item.kind == "file") {
            file = item.getAsFile();
            addImage(file);
        }
    });
    else [
        ...e.dataTransfer.files
    ].forEach((file, i)=>{
        console.log(`FILES  file[${i}].name = ${file.name}`);
    });
}
function dragOverHandler(e) {
    e.preventDefault();
}
function handleImageSelect(e) {
    const files = e.target.files;
    const file = files[0];
    const reader = new FileReader();
    const onReaderLoad = (file)=>{
        removeImage();
        addImage(file);
    };
    reader.onload = onReaderLoad(file);
    reader.readAsText(file);
}
function onClickHandler(e) {
    const input = document.getElementById("input_photo");
    input.click();
}
function onClickPredict(e) {
    e.preventDefault();
    makePrediction(file);
}
upload_input.addEventListener("change", handleImageSelect, false);
submit.addEventListener("click", onClickPredict);
drag_over.addEventListener("drop", dropHandler);
drag_over.addEventListener("dragover", dragOverHandler);
drag_over.addEventListener("click", onClickHandler);

},{"@gradio/client":"4zAaA"}],"4zAaA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FileData", ()=>FileData);
parcelHelpers.export(exports, "api_factory", ()=>api_factory);
parcelHelpers.export(exports, "client", ()=>client);
parcelHelpers.export(exports, "duplicate", ()=>duplicate);
parcelHelpers.export(exports, "post_data", ()=>post_data);
parcelHelpers.export(exports, "prepare_files", ()=>prepare_files);
parcelHelpers.export(exports, "upload", ()=>upload);
parcelHelpers.export(exports, "upload_files", ()=>upload_files);
var global = arguments[3];
var fn = new Intl.Collator(0, {
    numeric: 1
}).compare;
function semiver(a, b, bool) {
    a = a.split(".");
    b = b.split(".");
    return fn(a[0], b[0]) || fn(a[1], b[1]) || (b[2] = b.slice(2).join("."), bool = /[.-]/.test(a[2] = a.slice(2).join(".")), bool == /[.-]/.test(b[2]) ? fn(a[2], b[2]) : bool ? -1 : 1);
}
function resolve_root(base_url, root_path, prioritize_base) {
    if (root_path.startsWith("http://") || root_path.startsWith("https://")) return prioritize_base ? base_url : root_path;
    return base_url + root_path;
}
function determine_protocol(endpoint) {
    if (endpoint.startsWith("http")) {
        const { protocol, host } = new URL(endpoint);
        if (host.endsWith("hf.space")) return {
            ws_protocol: "wss",
            host,
            http_protocol: protocol
        };
        return {
            ws_protocol: protocol === "https:" ? "wss" : "ws",
            http_protocol: protocol,
            host
        };
    } else if (endpoint.startsWith("file:")) return {
        ws_protocol: "ws",
        http_protocol: "http:",
        host: "lite.local"
    };
    return {
        ws_protocol: "wss",
        http_protocol: "https:",
        host: endpoint
    };
}
const RE_SPACE_NAME = /^[^\/]*\/[^\/]*$/;
const RE_SPACE_DOMAIN = /.*hf\.space\/{0,1}$/;
async function process_endpoint(app_reference, token) {
    const headers = {};
    if (token) headers.Authorization = `Bearer ${token}`;
    const _app_reference = app_reference.trim();
    if (RE_SPACE_NAME.test(_app_reference)) try {
        const res = await fetch(`https://huggingface.co/api/spaces/${_app_reference}/host`, {
            headers
        });
        if (res.status !== 200) throw new Error("Space metadata could not be loaded.");
        const _host = (await res.json()).host;
        return {
            space_id: app_reference,
            ...determine_protocol(_host)
        };
    } catch (e) {
        throw new Error("Space metadata could not be loaded." + e.message);
    }
    if (RE_SPACE_DOMAIN.test(_app_reference)) {
        const { ws_protocol, http_protocol, host } = determine_protocol(_app_reference);
        return {
            space_id: host.replace(".hf.space", ""),
            ws_protocol,
            http_protocol,
            host
        };
    }
    return {
        space_id: false,
        ...determine_protocol(_app_reference)
    };
}
function map_names_to_ids(fns) {
    let apis = {};
    fns.forEach(({ api_name }, i)=>{
        if (api_name) apis[api_name] = i;
    });
    return apis;
}
const RE_DISABLED_DISCUSSION = /^(?=[^]*\b[dD]iscussions{0,1}\b)(?=[^]*\b[dD]isabled\b)[^]*$/;
async function discussions_enabled(space_id) {
    try {
        const r = await fetch(`https://huggingface.co/api/spaces/${space_id}/discussions`, {
            method: "HEAD"
        });
        const error = r.headers.get("x-error-message");
        if (error && RE_DISABLED_DISCUSSION.test(error)) return false;
        return true;
    } catch (e) {
        return false;
    }
}
async function get_space_hardware(space_id, token) {
    const headers = {};
    if (token) headers.Authorization = `Bearer ${token}`;
    try {
        const res = await fetch(`https://huggingface.co/api/spaces/${space_id}/runtime`, {
            headers
        });
        if (res.status !== 200) throw new Error("Space hardware could not be obtained.");
        const { hardware } = await res.json();
        return hardware;
    } catch (e) {
        throw new Error(e.message);
    }
}
async function set_space_hardware(space_id, new_hardware, token) {
    const headers = {};
    if (token) headers.Authorization = `Bearer ${token}`;
    try {
        const res = await fetch(`https://huggingface.co/api/spaces/${space_id}/hardware`, {
            headers,
            body: JSON.stringify(new_hardware)
        });
        if (res.status !== 200) throw new Error("Space hardware could not be set. Please ensure the space hardware provided is valid and that a Hugging Face token is passed in.");
        const { hardware } = await res.json();
        return hardware;
    } catch (e) {
        throw new Error(e.message);
    }
}
async function set_space_timeout(space_id, timeout, token) {
    const headers = {};
    if (token) headers.Authorization = `Bearer ${token}`;
    try {
        const res = await fetch(`https://huggingface.co/api/spaces/${space_id}/hardware`, {
            headers,
            body: JSON.stringify({
                seconds: timeout
            })
        });
        if (res.status !== 200) throw new Error("Space hardware could not be set. Please ensure the space hardware provided is valid and that a Hugging Face token is passed in.");
        const { hardware } = await res.json();
        return hardware;
    } catch (e) {
        throw new Error(e.message);
    }
}
const hardware_types = [
    "cpu-basic",
    "cpu-upgrade",
    "t4-small",
    "t4-medium",
    "a10g-small",
    "a10g-large",
    "a100-large"
];
function apply_edit(target, path, action, value) {
    if (path.length === 0) {
        if (action === "replace") return value;
        else if (action === "append") return target + value;
        throw new Error(`Unsupported action: ${action}`);
    }
    let current = target;
    for(let i = 0; i < path.length - 1; i++)current = current[path[i]];
    const last_path = path[path.length - 1];
    switch(action){
        case "replace":
            current[last_path] = value;
            break;
        case "append":
            current[last_path] += value;
            break;
        case "add":
            if (Array.isArray(current)) current.splice(Number(last_path), 0, value);
            else current[last_path] = value;
            break;
        case "delete":
            if (Array.isArray(current)) current.splice(Number(last_path), 1);
            else delete current[last_path];
            break;
        default:
            throw new Error(`Unknown action: ${action}`);
    }
    return target;
}
function apply_diff(obj, diff) {
    diff.forEach(([action, path, value])=>{
        obj = apply_edit(obj, path, action, value);
    });
    return obj;
}
async function upload(file_data, root, upload_id, upload_fn = upload_files) {
    let files = (Array.isArray(file_data) ? file_data : [
        file_data
    ]).map((file_data2)=>file_data2.blob);
    return await Promise.all(await upload_fn(root, files, void 0, upload_id).then(async (response)=>{
        if (response.error) throw new Error(response.error);
        else {
            if (response.files) return response.files.map((f, i)=>{
                const file = new FileData({
                    ...file_data[i],
                    path: f,
                    url: root + "/file=" + f
                });
                return file;
            });
            return [];
        }
    }));
}
async function prepare_files(files, is_stream) {
    return files.map((f, i)=>new FileData({
            path: f.name,
            orig_name: f.name,
            blob: f,
            size: f.size,
            mime_type: f.type,
            is_stream
        }));
}
class FileData {
    constructor({ path, url, orig_name, size, blob, is_stream, mime_type, alt_text }){
        this.meta = {
            _type: "gradio.FileData"
        };
        this.path = path;
        this.url = url;
        this.orig_name = orig_name;
        this.size = size;
        this.blob = url ? void 0 : blob;
        this.is_stream = is_stream;
        this.mime_type = mime_type;
        this.alt_text = alt_text;
    }
}
const QUEUE_FULL_MSG = "This application is too busy. Keep trying!";
const BROKEN_CONNECTION_MSG = "Connection errored out.";
let NodeBlob;
async function duplicate(app_reference, options) {
    const { hf_token, private: _private, hardware, timeout } = options;
    if (hardware && !hardware_types.includes(hardware)) throw new Error(`Invalid hardware type provided. Valid types are: ${hardware_types.map((v)=>`"${v}"`).join(",")}.`);
    const headers = {
        Authorization: `Bearer ${hf_token}`
    };
    const user = (await (await fetch(`https://huggingface.co/api/whoami-v2`, {
        headers
    })).json()).name;
    const space_name = app_reference.split("/")[1];
    const body = {
        repository: `${user}/${space_name}`
    };
    if (_private) body.private = true;
    try {
        const response = await fetch(`https://huggingface.co/api/spaces/${app_reference}/duplicate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
            body: JSON.stringify(body)
        });
        if (response.status === 409) return client(`${user}/${space_name}`, options);
        const duplicated_space = await response.json();
        let original_hardware;
        if (!hardware) original_hardware = await get_space_hardware(app_reference, hf_token);
        const requested_hardware = hardware || original_hardware || "cpu-basic";
        await set_space_hardware(`${user}/${space_name}`, requested_hardware, hf_token);
        await set_space_timeout(`${user}/${space_name}`, timeout || 300, hf_token);
        return client(duplicated_space.url, options);
    } catch (e) {
        throw new Error(e);
    }
}
function api_factory(fetch_implementation, EventSource_factory) {
    return {
        post_data: post_data2,
        upload_files: upload_files2,
        client: client2,
        handle_blob: handle_blob2
    };
    async function post_data2(url, body, token) {
        const headers = {
            "Content-Type": "application/json"
        };
        if (token) headers.Authorization = `Bearer ${token}`;
        try {
            var response = await fetch_implementation(url, {
                method: "POST",
                body: JSON.stringify(body),
                headers
            });
        } catch (e) {
            return [
                {
                    error: BROKEN_CONNECTION_MSG
                },
                500
            ];
        }
        let output;
        let status;
        try {
            output = await response.json();
            status = response.status;
        } catch (e) {
            output = {
                error: `Could not parse server response: ${e}`
            };
            status = 500;
        }
        return [
            output,
            status
        ];
    }
    async function upload_files2(root, files, token, upload_id) {
        const headers = {};
        if (token) headers.Authorization = `Bearer ${token}`;
        const chunkSize = 1e3;
        const uploadResponses = [];
        for(let i = 0; i < files.length; i += chunkSize){
            const chunk = files.slice(i, i + chunkSize);
            const formData = new FormData();
            chunk.forEach((file)=>{
                formData.append("files", file);
            });
            try {
                const upload_url = upload_id ? `${root}/upload?upload_id=${upload_id}` : `${root}/upload`;
                var response = await fetch_implementation(upload_url, {
                    method: "POST",
                    body: formData,
                    headers
                });
            } catch (e) {
                return {
                    error: BROKEN_CONNECTION_MSG
                };
            }
            const output = await response.json();
            uploadResponses.push(...output);
        }
        return {
            files: uploadResponses
        };
    }
    async function client2(app_reference, options = {}) {
        return new Promise(async (res)=>{
            const { status_callback, hf_token } = options;
            const return_obj = {
                predict,
                submit,
                view_api,
                component_server
            };
            if ((typeof window === "undefined" || !("WebSocket" in window)) && !global.Websocket) {
                const ws = await require("e90b01d85c36ae36");
                NodeBlob = (await require("83ccb8ffbee1bf02")).Blob;
                global.WebSocket = ws.WebSocket;
            }
            const { ws_protocol, http_protocol, host, space_id } = await process_endpoint(app_reference, hf_token);
            const session_hash = Math.random().toString(36).substring(2);
            const last_status = {};
            let stream_open = false;
            let pending_stream_messages = {};
            let pending_diff_streams = {};
            let event_stream = null;
            const event_callbacks = {};
            const unclosed_events = /* @__PURE__ */ new Set();
            let config;
            let api_map = {};
            let jwt = false;
            if (hf_token && space_id) jwt = await get_jwt(space_id, hf_token);
            async function config_success(_config) {
                config = _config;
                if (window.location.protocol === "https:") config.root = config.root.replace("http://", "https://");
                api_map = map_names_to_ids((_config == null ? void 0 : _config.dependencies) || []);
                if (config.auth_required) return {
                    config,
                    ...return_obj
                };
                try {
                    api = await view_api(config);
                } catch (e) {
                    console.error(`Could not get api details: ${e.message}`);
                }
                return {
                    config,
                    ...return_obj
                };
            }
            let api;
            async function handle_space_sucess(status) {
                if (status_callback) status_callback(status);
                if (status.status === "running") try {
                    config = await resolve_config(fetch_implementation, `${http_protocol}//${host}`, hf_token);
                    const _config = await config_success(config);
                    res(_config);
                } catch (e) {
                    console.error(e);
                    if (status_callback) status_callback({
                        status: "error",
                        message: "Could not load this space.",
                        load_status: "error",
                        detail: "NOT_FOUND"
                    });
                }
            }
            try {
                config = await resolve_config(fetch_implementation, `${http_protocol}//${host}`, hf_token);
                const _config = await config_success(config);
                res(_config);
            } catch (e) {
                console.error(e);
                if (space_id) check_space_status(space_id, RE_SPACE_NAME.test(space_id) ? "space_name" : "subdomain", handle_space_sucess);
                else if (status_callback) status_callback({
                    status: "error",
                    message: "Could not load this space.",
                    load_status: "error",
                    detail: "NOT_FOUND"
                });
            }
            function predict(endpoint, data, event_data) {
                let data_returned = false;
                let status_complete = false;
                let dependency;
                if (typeof endpoint === "number") dependency = config.dependencies[endpoint];
                else {
                    const trimmed_endpoint = endpoint.replace(/^\//, "");
                    dependency = config.dependencies[api_map[trimmed_endpoint]];
                }
                if (dependency.types.continuous) throw new Error("Cannot call predict on this function as it may run forever. Use submit instead");
                return new Promise((res2, rej)=>{
                    const app = submit(endpoint, data, event_data);
                    let result;
                    app.on("data", (d)=>{
                        if (status_complete) {
                            app.destroy();
                            res2(d);
                        }
                        data_returned = true;
                        result = d;
                    }).on("status", (status)=>{
                        if (status.stage === "error") rej(status);
                        if (status.stage === "complete") {
                            status_complete = true;
                            if (data_returned) {
                                app.destroy();
                                res2(result);
                            }
                        }
                    });
                });
            }
            function submit(endpoint, data, event_data, trigger_id = null) {
                let fn_index;
                let api_info;
                if (typeof endpoint === "number") {
                    fn_index = endpoint;
                    api_info = api.unnamed_endpoints[fn_index];
                } else {
                    const trimmed_endpoint = endpoint.replace(/^\//, "");
                    fn_index = api_map[trimmed_endpoint];
                    api_info = api.named_endpoints[endpoint.trim()];
                }
                if (typeof fn_index !== "number") throw new Error("There is no endpoint matching that name of fn_index matching that number.");
                let websocket;
                let eventSource;
                let protocol = config.protocol ?? "ws";
                const _endpoint = typeof endpoint === "number" ? "/predict" : endpoint;
                let payload;
                let event_id = null;
                let complete = false;
                const listener_map = {};
                let url_params = "";
                if (typeof window !== "undefined") url_params = new URLSearchParams(window.location.search).toString();
                handle_blob2(`${config.root}`, data, api_info, hf_token).then((_payload)=>{
                    payload = {
                        data: _payload || [],
                        event_data,
                        fn_index,
                        trigger_id
                    };
                    if (skip_queue(fn_index, config)) {
                        fire_event({
                            type: "status",
                            endpoint: _endpoint,
                            stage: "pending",
                            queue: false,
                            fn_index,
                            time: /* @__PURE__ */ new Date()
                        });
                        post_data2(`${config.root}/run${_endpoint.startsWith("/") ? _endpoint : `/${_endpoint}`}${url_params ? "?" + url_params : ""}`, {
                            ...payload,
                            session_hash
                        }, hf_token).then(([output, status_code])=>{
                            const data2 = output.data;
                            if (status_code == 200) {
                                fire_event({
                                    type: "data",
                                    endpoint: _endpoint,
                                    fn_index,
                                    data: data2,
                                    time: /* @__PURE__ */ new Date()
                                });
                                fire_event({
                                    type: "status",
                                    endpoint: _endpoint,
                                    fn_index,
                                    stage: "complete",
                                    eta: output.average_duration,
                                    queue: false,
                                    time: /* @__PURE__ */ new Date()
                                });
                            } else fire_event({
                                type: "status",
                                stage: "error",
                                endpoint: _endpoint,
                                fn_index,
                                message: output.error,
                                queue: false,
                                time: /* @__PURE__ */ new Date()
                            });
                        }).catch((e)=>{
                            fire_event({
                                type: "status",
                                stage: "error",
                                message: e.message,
                                endpoint: _endpoint,
                                fn_index,
                                queue: false,
                                time: /* @__PURE__ */ new Date()
                            });
                        });
                    } else if (protocol == "ws") {
                        fire_event({
                            type: "status",
                            stage: "pending",
                            queue: true,
                            endpoint: _endpoint,
                            fn_index,
                            time: /* @__PURE__ */ new Date()
                        });
                        let url = new URL(`${ws_protocol}://${resolve_root(host, config.path, true)}
							/queue/join${url_params ? "?" + url_params : ""}`);
                        if (jwt) url.searchParams.set("__sign", jwt);
                        websocket = new WebSocket(url);
                        websocket.onclose = (evt)=>{
                            if (!evt.wasClean) fire_event({
                                type: "status",
                                stage: "error",
                                broken: true,
                                message: BROKEN_CONNECTION_MSG,
                                queue: true,
                                endpoint: _endpoint,
                                fn_index,
                                time: /* @__PURE__ */ new Date()
                            });
                        };
                        websocket.onmessage = function(event) {
                            const _data = JSON.parse(event.data);
                            const { type, status, data: data2 } = handle_message(_data, last_status[fn_index]);
                            if (type === "update" && status && !complete) {
                                fire_event({
                                    type: "status",
                                    endpoint: _endpoint,
                                    fn_index,
                                    time: /* @__PURE__ */ new Date(),
                                    ...status
                                });
                                if (status.stage === "error") websocket.close();
                            } else if (type === "hash") {
                                websocket.send(JSON.stringify({
                                    fn_index,
                                    session_hash
                                }));
                                return;
                            } else if (type === "data") websocket.send(JSON.stringify({
                                ...payload,
                                session_hash
                            }));
                            else if (type === "complete") complete = status;
                            else if (type === "log") fire_event({
                                type: "log",
                                log: data2.log,
                                level: data2.level,
                                endpoint: _endpoint,
                                fn_index
                            });
                            else if (type === "generating") fire_event({
                                type: "status",
                                time: /* @__PURE__ */ new Date(),
                                ...status,
                                stage: status == null ? void 0 : status.stage,
                                queue: true,
                                endpoint: _endpoint,
                                fn_index
                            });
                            if (data2) {
                                fire_event({
                                    type: "data",
                                    time: /* @__PURE__ */ new Date(),
                                    data: data2.data,
                                    endpoint: _endpoint,
                                    fn_index
                                });
                                if (complete) {
                                    fire_event({
                                        type: "status",
                                        time: /* @__PURE__ */ new Date(),
                                        ...complete,
                                        stage: status == null ? void 0 : status.stage,
                                        queue: true,
                                        endpoint: _endpoint,
                                        fn_index
                                    });
                                    websocket.close();
                                }
                            }
                        };
                        if (semiver(config.version || "2.0.0", "3.6") < 0) addEventListener("open", ()=>websocket.send(JSON.stringify({
                                hash: session_hash
                            })));
                    } else if (protocol == "sse") {
                        fire_event({
                            type: "status",
                            stage: "pending",
                            queue: true,
                            endpoint: _endpoint,
                            fn_index,
                            time: /* @__PURE__ */ new Date()
                        });
                        var params = new URLSearchParams({
                            fn_index: fn_index.toString(),
                            session_hash
                        }).toString();
                        let url = new URL(`${config.root}/queue/join?${url_params ? url_params + "&" : ""}${params}`);
                        eventSource = EventSource_factory(url);
                        eventSource.onmessage = async function(event) {
                            const _data = JSON.parse(event.data);
                            const { type, status, data: data2 } = handle_message(_data, last_status[fn_index]);
                            if (type === "update" && status && !complete) {
                                fire_event({
                                    type: "status",
                                    endpoint: _endpoint,
                                    fn_index,
                                    time: /* @__PURE__ */ new Date(),
                                    ...status
                                });
                                if (status.stage === "error") eventSource.close();
                            } else if (type === "data") {
                                event_id = _data.event_id;
                                let [_, status2] = await post_data2(`${config.root}/queue/data`, {
                                    ...payload,
                                    session_hash,
                                    event_id
                                }, hf_token);
                                if (status2 !== 200) {
                                    fire_event({
                                        type: "status",
                                        stage: "error",
                                        message: BROKEN_CONNECTION_MSG,
                                        queue: true,
                                        endpoint: _endpoint,
                                        fn_index,
                                        time: /* @__PURE__ */ new Date()
                                    });
                                    eventSource.close();
                                }
                            } else if (type === "complete") complete = status;
                            else if (type === "log") fire_event({
                                type: "log",
                                log: data2.log,
                                level: data2.level,
                                endpoint: _endpoint,
                                fn_index
                            });
                            else if (type === "generating") fire_event({
                                type: "status",
                                time: /* @__PURE__ */ new Date(),
                                ...status,
                                stage: status == null ? void 0 : status.stage,
                                queue: true,
                                endpoint: _endpoint,
                                fn_index
                            });
                            if (data2) {
                                fire_event({
                                    type: "data",
                                    time: /* @__PURE__ */ new Date(),
                                    data: data2.data,
                                    endpoint: _endpoint,
                                    fn_index
                                });
                                if (complete) {
                                    fire_event({
                                        type: "status",
                                        time: /* @__PURE__ */ new Date(),
                                        ...complete,
                                        stage: status == null ? void 0 : status.stage,
                                        queue: true,
                                        endpoint: _endpoint,
                                        fn_index
                                    });
                                    eventSource.close();
                                }
                            }
                        };
                    } else if (protocol == "sse_v1" || protocol == "sse_v2" || protocol == "sse_v2.1") {
                        fire_event({
                            type: "status",
                            stage: "pending",
                            queue: true,
                            endpoint: _endpoint,
                            fn_index,
                            time: /* @__PURE__ */ new Date()
                        });
                        post_data2(`${config.root}/queue/join?${url_params}`, {
                            ...payload,
                            session_hash
                        }, hf_token).then(([response, status])=>{
                            if (status === 503) fire_event({
                                type: "status",
                                stage: "error",
                                message: QUEUE_FULL_MSG,
                                queue: true,
                                endpoint: _endpoint,
                                fn_index,
                                time: /* @__PURE__ */ new Date()
                            });
                            else if (status !== 200) fire_event({
                                type: "status",
                                stage: "error",
                                message: BROKEN_CONNECTION_MSG,
                                queue: true,
                                endpoint: _endpoint,
                                fn_index,
                                time: /* @__PURE__ */ new Date()
                            });
                            else {
                                event_id = response.event_id;
                                let callback = async function(_data) {
                                    try {
                                        const { type, status: status2, data: data2 } = handle_message(_data, last_status[fn_index]);
                                        if (type == "heartbeat") return;
                                        if (type === "update" && status2 && !complete) fire_event({
                                            type: "status",
                                            endpoint: _endpoint,
                                            fn_index,
                                            time: /* @__PURE__ */ new Date(),
                                            ...status2
                                        });
                                        else if (type === "complete") complete = status2;
                                        else if (type == "unexpected_error") {
                                            console.error("Unexpected error", status2 == null ? void 0 : status2.message);
                                            fire_event({
                                                type: "status",
                                                stage: "error",
                                                message: (status2 == null ? void 0 : status2.message) || "An Unexpected Error Occurred!",
                                                queue: true,
                                                endpoint: _endpoint,
                                                fn_index,
                                                time: /* @__PURE__ */ new Date()
                                            });
                                        } else if (type === "log") {
                                            fire_event({
                                                type: "log",
                                                log: data2.log,
                                                level: data2.level,
                                                endpoint: _endpoint,
                                                fn_index
                                            });
                                            return;
                                        } else if (type === "generating") {
                                            fire_event({
                                                type: "status",
                                                time: /* @__PURE__ */ new Date(),
                                                ...status2,
                                                stage: status2 == null ? void 0 : status2.stage,
                                                queue: true,
                                                endpoint: _endpoint,
                                                fn_index
                                            });
                                            if (data2 && (protocol === "sse_v2" || protocol === "sse_v2.1")) apply_diff_stream(event_id, data2);
                                        }
                                        if (data2) {
                                            fire_event({
                                                type: "data",
                                                time: /* @__PURE__ */ new Date(),
                                                data: data2.data,
                                                endpoint: _endpoint,
                                                fn_index
                                            });
                                            if (complete) fire_event({
                                                type: "status",
                                                time: /* @__PURE__ */ new Date(),
                                                ...complete,
                                                stage: status2 == null ? void 0 : status2.stage,
                                                queue: true,
                                                endpoint: _endpoint,
                                                fn_index
                                            });
                                        }
                                        if ((status2 == null ? void 0 : status2.stage) === "complete" || (status2 == null ? void 0 : status2.stage) === "error") {
                                            if (event_callbacks[event_id]) delete event_callbacks[event_id];
                                            if (event_id in pending_diff_streams) delete pending_diff_streams[event_id];
                                        }
                                    } catch (e) {
                                        console.error("Unexpected client exception", e);
                                        fire_event({
                                            type: "status",
                                            stage: "error",
                                            message: "An Unexpected Error Occurred!",
                                            queue: true,
                                            endpoint: _endpoint,
                                            fn_index,
                                            time: /* @__PURE__ */ new Date()
                                        });
                                        close_stream();
                                    }
                                };
                                if (event_id in pending_stream_messages) {
                                    pending_stream_messages[event_id].forEach((msg)=>callback(msg));
                                    delete pending_stream_messages[event_id];
                                }
                                event_callbacks[event_id] = callback;
                                unclosed_events.add(event_id);
                                if (!stream_open) open_stream();
                            }
                        });
                    }
                });
                function apply_diff_stream(event_id2, data2) {
                    let is_first_generation = !pending_diff_streams[event_id2];
                    if (is_first_generation) {
                        pending_diff_streams[event_id2] = [];
                        data2.data.forEach((value, i)=>{
                            pending_diff_streams[event_id2][i] = value;
                        });
                    } else data2.data.forEach((value, i)=>{
                        let new_data = apply_diff(pending_diff_streams[event_id2][i], value);
                        pending_diff_streams[event_id2][i] = new_data;
                        data2.data[i] = new_data;
                    });
                }
                function fire_event(event) {
                    const narrowed_listener_map = listener_map;
                    const listeners = narrowed_listener_map[event.type] || [];
                    listeners == null || listeners.forEach((l)=>l(event));
                }
                function on(eventType, listener) {
                    const narrowed_listener_map = listener_map;
                    const listeners = narrowed_listener_map[eventType] || [];
                    narrowed_listener_map[eventType] = listeners;
                    listeners == null || listeners.push(listener);
                    return {
                        on,
                        off,
                        cancel,
                        destroy
                    };
                }
                function off(eventType, listener) {
                    const narrowed_listener_map = listener_map;
                    let listeners = narrowed_listener_map[eventType] || [];
                    listeners = listeners == null ? void 0 : listeners.filter((l)=>l !== listener);
                    narrowed_listener_map[eventType] = listeners;
                    return {
                        on,
                        off,
                        cancel,
                        destroy
                    };
                }
                async function cancel() {
                    const _status = {
                        stage: "complete",
                        queue: false,
                        time: /* @__PURE__ */ new Date()
                    };
                    complete = _status;
                    fire_event({
                        ..._status,
                        type: "status",
                        endpoint: _endpoint,
                        fn_index
                    });
                    let cancel_request = {};
                    if (protocol === "ws") {
                        if (websocket && websocket.readyState === 0) websocket.addEventListener("open", ()=>{
                            websocket.close();
                        });
                        else websocket.close();
                        cancel_request = {
                            fn_index,
                            session_hash
                        };
                    } else {
                        eventSource.close();
                        cancel_request = {
                            event_id
                        };
                    }
                    try {
                        await fetch_implementation(`${config.root}/reset`, {
                            headers: {
                                "Content-Type": "application/json"
                            },
                            method: "POST",
                            body: JSON.stringify(cancel_request)
                        });
                    } catch (e) {
                        console.warn("The `/reset` endpoint could not be called. Subsequent endpoint results may be unreliable.");
                    }
                }
                function destroy() {
                    for(const event_type in listener_map)listener_map[event_type].forEach((fn2)=>{
                        off(event_type, fn2);
                    });
                }
                return {
                    on,
                    off,
                    cancel,
                    destroy
                };
            }
            function open_stream() {
                stream_open = true;
                let params = new URLSearchParams({
                    session_hash
                }).toString();
                let url = new URL(`${config.root}/queue/data?${params}`);
                event_stream = EventSource_factory(url);
                event_stream.onmessage = async function(event) {
                    let _data = JSON.parse(event.data);
                    const event_id = _data.event_id;
                    if (!event_id) await Promise.all(Object.keys(event_callbacks).map((event_id2)=>event_callbacks[event_id2](_data)));
                    else if (event_callbacks[event_id]) {
                        if (_data.msg === "process_completed") {
                            unclosed_events.delete(event_id);
                            if (unclosed_events.size === 0) close_stream();
                        }
                        let fn2 = event_callbacks[event_id];
                        window.setTimeout(fn2, 0, _data);
                    } else {
                        if (!pending_stream_messages[event_id]) pending_stream_messages[event_id] = [];
                        pending_stream_messages[event_id].push(_data);
                    }
                };
                event_stream.onerror = async function(event) {
                    await Promise.all(Object.keys(event_callbacks).map((event_id)=>event_callbacks[event_id]({
                            msg: "unexpected_error",
                            message: BROKEN_CONNECTION_MSG
                        })));
                    close_stream();
                };
            }
            function close_stream() {
                stream_open = false;
                event_stream == null || event_stream.close();
            }
            async function component_server(component_id, fn_name, data) {
                var _a;
                const headers = {
                    "Content-Type": "application/json"
                };
                if (hf_token) headers.Authorization = `Bearer ${hf_token}`;
                let root_url;
                let component = config.components.find((comp)=>comp.id === component_id);
                if ((_a = component == null ? void 0 : component.props) == null ? void 0 : _a.root_url) root_url = component.props.root_url;
                else root_url = config.root;
                const response = await fetch_implementation(`${root_url}/component_server/`, {
                    method: "POST",
                    body: JSON.stringify({
                        data,
                        component_id,
                        fn_name,
                        session_hash
                    }),
                    headers
                });
                if (!response.ok) throw new Error("Could not connect to component server: " + response.statusText);
                const output = await response.json();
                return output;
            }
            async function view_api(config2) {
                if (api) return api;
                const headers = {
                    "Content-Type": "application/json"
                };
                if (hf_token) headers.Authorization = `Bearer ${hf_token}`;
                let response;
                if (semiver(config2.version || "2.0.0", "3.30") < 0) response = await fetch_implementation("https://gradio-space-api-fetcher-v2.hf.space/api", {
                    method: "POST",
                    body: JSON.stringify({
                        serialize: false,
                        config: JSON.stringify(config2)
                    }),
                    headers
                });
                else response = await fetch_implementation(`${config2.root}/info`, {
                    headers
                });
                if (!response.ok) throw new Error(BROKEN_CONNECTION_MSG);
                let api_info = await response.json();
                if ("api" in api_info) api_info = api_info.api;
                if (api_info.named_endpoints["/predict"] && !api_info.unnamed_endpoints["0"]) api_info.unnamed_endpoints[0] = api_info.named_endpoints["/predict"];
                const x = transform_api_info(api_info, config2, api_map);
                return x;
            }
        });
    }
    async function handle_blob2(endpoint, data, api_info, token) {
        const blob_refs = await walk_and_store_blobs(data, void 0, [], true, api_info);
        return Promise.all(blob_refs.map(async ({ path, blob, type })=>{
            if (blob) {
                const file_url = (await upload_files2(endpoint, [
                    blob
                ], token)).files[0];
                return {
                    path,
                    file_url,
                    type,
                    name: blob == null ? void 0 : blob.name
                };
            }
            return {
                path,
                type
            };
        })).then((r)=>{
            r.forEach(({ path, file_url, type, name })=>{
                if (type === "Gallery") update_object(data, file_url, path);
                else if (file_url) {
                    const file = new FileData({
                        path: file_url,
                        orig_name: name
                    });
                    update_object(data, file, path);
                }
            });
            return data;
        });
    }
}
const { post_data, upload_files, client, handle_blob } = api_factory(fetch, (...args)=>new EventSource(...args));
function get_type(type, component, serializer, signature_type) {
    switch(type.type){
        case "string":
            return "string";
        case "boolean":
            return "boolean";
        case "number":
            return "number";
    }
    if (serializer === "JSONSerializable" || serializer === "StringSerializable") return "any";
    else if (serializer === "ListStringSerializable") return "string[]";
    else if (component === "Image") return signature_type === "parameter" ? "Blob | File | Buffer" : "string";
    else if (serializer === "FileSerializable") {
        if ((type == null ? void 0 : type.type) === "array") return signature_type === "parameter" ? "(Blob | File | Buffer)[]" : `{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}[]`;
        return signature_type === "parameter" ? "Blob | File | Buffer" : `{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}`;
    } else if (serializer === "GallerySerializable") return signature_type === "parameter" ? "[(Blob | File | Buffer), (string | null)][]" : `[{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}, (string | null))][]`;
}
function get_description(type, serializer) {
    if (serializer === "GallerySerializable") return "array of [file, label] tuples";
    else if (serializer === "ListStringSerializable") return "array of strings";
    else if (serializer === "FileSerializable") return "array of files or single file";
    return type.description;
}
function transform_api_info(api_info, config, api_map) {
    const new_data = {
        named_endpoints: {},
        unnamed_endpoints: {}
    };
    for(const key in api_info){
        const cat = api_info[key];
        for(const endpoint in cat){
            const dep_index = config.dependencies[endpoint] ? endpoint : api_map[endpoint.replace("/", "")];
            const info = cat[endpoint];
            new_data[key][endpoint] = {};
            new_data[key][endpoint].parameters = {};
            new_data[key][endpoint].returns = {};
            new_data[key][endpoint].type = config.dependencies[dep_index].types;
            new_data[key][endpoint].parameters = info.parameters.map(({ label, component, type, serializer })=>({
                    label,
                    component,
                    type: get_type(type, component, serializer, "parameter"),
                    description: get_description(type, serializer)
                }));
            new_data[key][endpoint].returns = info.returns.map(({ label, component, type, serializer })=>({
                    label,
                    component,
                    type: get_type(type, component, serializer, "return"),
                    description: get_description(type, serializer)
                }));
        }
    }
    return new_data;
}
async function get_jwt(space, token) {
    try {
        const r = await fetch(`https://huggingface.co/api/spaces/${space}/jwt`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const jwt = (await r.json()).token;
        return jwt || false;
    } catch (e) {
        console.error(e);
        return false;
    }
}
function update_object(object, newValue, stack) {
    while(stack.length > 1)object = object[stack.shift()];
    object[stack.shift()] = newValue;
}
async function walk_and_store_blobs(param, type, path = [], root = false, api_info) {
    if (Array.isArray(param)) {
        let blob_refs = [];
        await Promise.all(param.map(async (v, i)=>{
            var _a;
            let new_path = path.slice();
            new_path.push(i);
            const array_refs = await walk_and_store_blobs(param[i], root ? ((_a = api_info == null ? void 0 : api_info.parameters[i]) == null ? void 0 : _a.component) || void 0 : type, new_path, false, api_info);
            blob_refs = blob_refs.concat(array_refs);
        }));
        return blob_refs;
    } else if (globalThis.Buffer && param instanceof globalThis.Buffer) {
        const is_image = type === "Image";
        return [
            {
                path,
                blob: is_image ? false : new NodeBlob([
                    param
                ]),
                type
            }
        ];
    } else if (typeof param === "object") {
        let blob_refs = [];
        for(let key in param)if (param.hasOwnProperty(key)) {
            let new_path = path.slice();
            new_path.push(key);
            blob_refs = blob_refs.concat(await walk_and_store_blobs(param[key], void 0, new_path, false, api_info));
        }
        return blob_refs;
    }
    return [];
}
function skip_queue(id, config) {
    var _a, _b, _c, _d;
    return !(((_b = (_a = config == null ? void 0 : config.dependencies) == null ? void 0 : _a[id]) == null ? void 0 : _b.queue) === null ? config.enable_queue : (_d = (_c = config == null ? void 0 : config.dependencies) == null ? void 0 : _c[id]) == null ? void 0 : _d.queue) || false;
}
async function resolve_config(fetch_implementation, endpoint, token) {
    const headers = {};
    if (token) headers.Authorization = `Bearer ${token}`;
    if (typeof window !== "undefined" && window.gradio_config && location.origin !== "http://localhost:9876" && !window.gradio_config.dev_mode) {
        const path = window.gradio_config.root;
        const config = window.gradio_config;
        config.root = resolve_root(endpoint, config.root, false);
        return {
            ...config,
            path
        };
    } else if (endpoint) {
        let response = await fetch_implementation(`${endpoint}/config`, {
            headers
        });
        if (response.status === 200) {
            const config = await response.json();
            config.path = config.path ?? "";
            config.root = endpoint;
            return config;
        }
        throw new Error("Could not get config.");
    }
    throw new Error("No config or app endpoint found");
}
async function check_space_status(id, type, status_callback) {
    let endpoint = type === "subdomain" ? `https://huggingface.co/api/spaces/by-subdomain/${id}` : `https://huggingface.co/api/spaces/${id}`;
    let response;
    let _status;
    try {
        response = await fetch(endpoint);
        _status = response.status;
        if (_status !== 200) throw new Error();
        response = await response.json();
    } catch (e) {
        status_callback({
            status: "error",
            load_status: "error",
            message: "Could not get space status",
            detail: "NOT_FOUND"
        });
        return;
    }
    if (!response || _status !== 200) return;
    const { runtime: { stage }, id: space_name } = response;
    switch(stage){
        case "STOPPED":
        case "SLEEPING":
            status_callback({
                status: "sleeping",
                load_status: "pending",
                message: "Space is asleep. Waking it up...",
                detail: stage
            });
            setTimeout(()=>{
                check_space_status(id, type, status_callback);
            }, 1e3);
            break;
        case "PAUSED":
            status_callback({
                status: "paused",
                load_status: "error",
                message: "This space has been paused by the author. If you would like to try this demo, consider duplicating the space.",
                detail: stage,
                discussions_enabled: await discussions_enabled(space_name)
            });
            break;
        case "RUNNING":
        case "RUNNING_BUILDING":
            status_callback({
                status: "running",
                load_status: "complete",
                message: "",
                detail: stage
            });
            break;
        case "BUILDING":
            status_callback({
                status: "building",
                load_status: "pending",
                message: "Space is building...",
                detail: stage
            });
            setTimeout(()=>{
                check_space_status(id, type, status_callback);
            }, 1e3);
            break;
        default:
            status_callback({
                status: "space_error",
                load_status: "error",
                message: "This space is experiencing an issue.",
                detail: stage,
                discussions_enabled: await discussions_enabled(space_name)
            });
            break;
    }
}
function handle_message(data, last_status) {
    const queue = true;
    switch(data.msg){
        case "send_data":
            return {
                type: "data"
            };
        case "send_hash":
            return {
                type: "hash"
            };
        case "queue_full":
            return {
                type: "update",
                status: {
                    queue,
                    message: QUEUE_FULL_MSG,
                    stage: "error",
                    code: data.code,
                    success: data.success
                }
            };
        case "heartbeat":
            return {
                type: "heartbeat"
            };
        case "unexpected_error":
            return {
                type: "unexpected_error",
                status: {
                    queue,
                    message: data.message,
                    stage: "error",
                    success: false
                }
            };
        case "estimation":
            return {
                type: "update",
                status: {
                    queue,
                    stage: last_status || "pending",
                    code: data.code,
                    size: data.queue_size,
                    position: data.rank,
                    eta: data.rank_eta,
                    success: data.success
                }
            };
        case "progress":
            return {
                type: "update",
                status: {
                    queue,
                    stage: "pending",
                    code: data.code,
                    progress_data: data.progress_data,
                    success: data.success
                }
            };
        case "log":
            return {
                type: "log",
                data
            };
        case "process_generating":
            return {
                type: "generating",
                status: {
                    queue,
                    message: !data.success ? data.output.error : null,
                    stage: data.success ? "generating" : "error",
                    code: data.code,
                    progress_data: data.progress_data,
                    eta: data.average_duration
                },
                data: data.success ? data.output : null
            };
        case "process_completed":
            if ("error" in data.output) return {
                type: "update",
                status: {
                    queue,
                    message: data.output.error,
                    stage: "error",
                    code: data.code,
                    success: data.success
                }
            };
            return {
                type: "complete",
                status: {
                    queue,
                    message: !data.success ? data.output.error : void 0,
                    stage: data.success ? "complete" : "error",
                    code: data.code,
                    progress_data: data.progress_data
                },
                data: data.success ? data.output : null
            };
        case "process_starts":
            return {
                type: "update",
                status: {
                    queue,
                    stage: "pending",
                    code: data.code,
                    size: data.rank,
                    position: 0,
                    success: data.success,
                    eta: data.eta
                }
            };
    }
    return {
        type: "none",
        status: {
            stage: "error",
            queue
        }
    };
}

},{"e90b01d85c36ae36":"2huEM","83ccb8ffbee1bf02":"gigDu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2huEM":[function(require,module,exports) {
module.exports = Promise.all([
    require("fb44bd77726e4d38")(require("8a68c96e2fd2889c").getBundleURL("lORN7") + "buffer.ffc1592a.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("fb44bd77726e4d38")(require("8a68c96e2fd2889c").getBundleURL("lORN7") + "wrapper-6f348d45.7722cfd1.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("b12ov"));

},{"fb44bd77726e4d38":"61B45","8a68c96e2fd2889c":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gigDu":[function(require,module,exports) {
module.exports = require("1ed1bf8a15169461")(require("efc4d4cf2018eeb6").getBundleURL("lORN7") + "buffer.ffc1592a.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("fCgem"));

},{"1ed1bf8a15169461":"61B45","efc4d4cf2018eeb6":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["aJPIF","8ZNvh"], "8ZNvh", "parcelRequiref722")

//# sourceMappingURL=index.f5c48570.js.map
