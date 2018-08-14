(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["providers/LinkedIn"] = factory();
	else
		root["providers/LinkedIn"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1319":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "a1aa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkedIn_vue_vue_type_style_index_0_id_c643945a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1319");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkedIn_vue_vue_type_style_index_0_id_c643945a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkedIn_vue_vue_type_style_index_0_id_c643945a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkedIn_vue_vue_type_style_index_0_id_c643945a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("1eb2");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"47426207-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/providers/LinkedIn.vue?vue&type=template&id=c643945a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"button-social",class:_vm.buttonSocialDesignObject,attrs:{"page-url":_vm.page_url,"page-title":_vm.page_title,"page-description":_vm.page_description,"button-design":_vm.button_design,"title-social":_vm.title_social,"has-icon":_vm.has_icon,"has-square-edges":_vm.has_square_edges,"has-counter":_vm.has_counter},on:{"click":function($event){$event.preventDefault();return _vm.showShareWindow($event)}}},[(this.$props.has_icon)?_c('i',{staticClass:"icon-linkedin"}):_vm._e(),(this.$props.title_social)?_c('span',{staticClass:"title-social"},[_vm._v(_vm._s(_vm.title_social))]):_vm._e(),(this.$props.has_counter)?_c('span',{staticClass:"counter-linkedin",model:{value:(_vm.counter_linkedin),callback:function ($$v) {_vm.counter_linkedin=$$v},expression:"counter_linkedin"}},[_vm._v(_vm._s(_vm.counter_linkedin))]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/providers/LinkedIn.vue?vue&type=template&id=c643945a&scoped=true&

// CONCATENATED MODULE: ./src/helpers/href.js
/**
 * @return {String} document location href without hash
 */
function documentHrefWithoutHash() {
  return document.location.href.replace(
    document.location.hash,
    ''
  );
}

/**
 * @return {String} document location
 */
function documentHref() {
  return document.location.href;
}

// CONCATENATED MODULE: ./src/helpers/title.js
/**
 * @return {String} document title
 */
 function documentTitle() {
  return document.title;
}

// CONCATENATED MODULE: ./src/helpers/description.js
/**
 * @return {String} description meta content
 */
 function metaDescription() {
  const meta = document.querySelector('meta[name="description"]')
  return meta ? meta.content : ''
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/providers/LinkedIn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var LinkedInvue_type_script_lang_js_ = ({
  name: 'VueGoodshareLinkedIn',
  props: {
    page_url: {
      type: String,
      default: documentHref
    },
    page_title: {
      type: String,
      default: documentTitle
    },
    page_description: {
      type: String,
      default: metaDescription
    },
    button_design: {
      type: String,
      default: () => 'flat'
    },
    title_social: String,
    has_icon: Boolean,
    has_square_edges: Boolean,
    has_counter: Boolean
  },
  data () {
    return {
      buttonSocialDesignObject: {
        'button-social__square_edges': this.$props.has_square_edges,
        'linkedin__design__flat': this.$props.button_design === 'flat',
        'linkedin__design__gradient': this.$props.button_design === 'gradient',
        'linkedin__design__outline': this.$props.button_design === 'outline'
      },
      counter_linkedin: 0
    }
  },
  methods: {
    /**
     * Get a random integer between `min` and `max`.
     *
     * @param {number} min - min number
     * @param {number} max - max number
     * @return {number} a random integer
     */
    getRandomInt: (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    
    /**
     * Slice thousand integer and add `k` letter.
     *
     * @param {number} number - thousand integer
     * @return {string} a integer with letter
     */
    sliceThousandInt: (number) => {
      return (number / 1000).toFixed(1) + 'k'
    },
    
    /**
     * Show share window.
     *
     * @return {object} a pop-up window
     */
    showShareWindow: function () {
      // Variables
      const width = 640
      const height = 640
      let left = (screen.width / 2) - (width / 2)
      let top = (screen.height / 2) - (height / 2)
      const window_config = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top + ','
      const share_url = 'https://www.linkedin.com/shareArticle?'
        + 'url=' + encodeURIComponent(this.$props.page_url)
        + '&text=' + encodeURIComponent(this.$props.page_title)
        + '&summary=' + encodeURIComponent(this.$props.page_description)
        + '&mini=true'
      
      return window.open(share_url, 'Share this', window_config + 'toolbar=no,menubar=no,scrollbars=no')
    },
    
    /**
     * Get share counter.
     *
     * @return {object} a share counter
     */
    getShareCounter: function () {
      // Variables
      const script = document.createElement('script')
      const callback = 'vue_goodshare_' + this.getRandomInt(1, 2345)
      
      // Create `script` tag with share count URL
      script.src = 'https://www.linkedin.com/countserv/count/share?'
        + 'url=' + encodeURIComponent(this.$props.page_url)
        + '&callback=' + callback
      
      // Add `script` tag with share count URL
      // to end of `body` tag
      document.body.appendChild(script)
      
      // Set share count to `counter_linkedin` v-model
      window[callback] = (count) => {
        if (count) {
          this.counter_linkedin = (count.count >= 1000)
            ? this.sliceThousandInt(count.count)
            : count.count
        }
      }
    }
  },
  mounted () {
    // Show share counter when page loaded
    if (this.$props.has_counter) this.getShareCounter()
  }
});

// CONCATENATED MODULE: ./src/providers/LinkedIn.vue?vue&type=script&lang=js&
 /* harmony default export */ var providers_LinkedInvue_type_script_lang_js_ = (LinkedInvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/providers/LinkedIn.vue?vue&type=style&index=0&id=c643945a&scoped=true&lang=scss&
var LinkedInvue_type_style_index_0_id_c643945a_scoped_true_lang_scss_ = __webpack_require__("a1aa");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

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

// CONCATENATED MODULE: ./src/providers/LinkedIn.vue






/* normalize component */

var component = normalizeComponent(
  providers_LinkedInvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "c643945a",
  null
  
)

component.options.__file = "LinkedIn.vue"
/* harmony default export */ var LinkedIn = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


console.log('entry-lib', LinkedIn)
/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (LinkedIn);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=LinkedIn.umd.js.map