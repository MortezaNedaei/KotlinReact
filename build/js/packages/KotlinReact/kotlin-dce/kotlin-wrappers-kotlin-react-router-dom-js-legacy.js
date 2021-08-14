(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-wrappers-kotlin-react-js-legacy', 'react-router-dom', 'kotlin-wrappers-kotlin-extensions-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-react-js-legacy'), require('react-router-dom'), require('kotlin-wrappers-kotlin-extensions-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-router-dom-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-wrappers-kotlin-react-router-dom-js-legacy'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-router-dom-js-legacy'. Its dependency 'kotlin-wrappers-kotlin-react-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-js-legacy' is loaded prior to 'kotlin-wrappers-kotlin-react-router-dom-js-legacy'.");
    }if (typeof this['react-router-dom'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-router-dom-js-legacy'. Its dependency 'react-router-dom' was not found. Please, check whether 'react-router-dom' is loaded prior to 'kotlin-wrappers-kotlin-react-router-dom-js-legacy'.");
    }if (typeof this['kotlin-wrappers-kotlin-extensions-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-router-dom-js-legacy'. Its dependency 'kotlin-wrappers-kotlin-extensions-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-extensions-js-legacy' is loaded prior to 'kotlin-wrappers-kotlin-react-router-dom-js-legacy'.");
    }root['kotlin-wrappers-kotlin-react-router-dom-js-legacy'] = factory(typeof this['kotlin-wrappers-kotlin-react-router-dom-js-legacy'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-react-router-dom-js-legacy'], kotlin, this['kotlin-wrappers-kotlin-react-js-legacy'], this['react-router-dom'], this['kotlin-wrappers-kotlin-extensions-js-legacy']);
  }
}(this, function (_, Kotlin, $module$kotlin_wrappers_kotlin_react_js_legacy, $module$react_router_dom, $module$kotlin_wrappers_kotlin_extensions_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var get_rClass = $module$kotlin_wrappers_kotlin_react_js_legacy.react.get_rClass_inwa2g$;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var getKClass = Kotlin.getKClass;
  var Unit = Kotlin.kotlin.Unit;
  var HashType$slash_instance;
  var HashType$noslash_instance;
  var HashType$hashbang_instance;
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-js-legacy'] = $module$kotlin_wrappers_kotlin_extensions_js_legacy;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-js-legacy'] = $module$kotlin_wrappers_kotlin_react_js_legacy;
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-react-router-dom-js-legacy.js.map
