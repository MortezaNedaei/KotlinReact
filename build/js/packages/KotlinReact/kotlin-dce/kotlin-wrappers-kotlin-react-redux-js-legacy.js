(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'react-redux', 'kotlin-wrappers-kotlin-react-js-legacy', 'kotlin-wrappers-kotlin-extensions-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('react-redux'), require('kotlin-wrappers-kotlin-react-js-legacy'), require('kotlin-wrappers-kotlin-extensions-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-redux-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-wrappers-kotlin-react-redux-js-legacy'.");
    }if (typeof this['react-redux'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-redux-js-legacy'. Its dependency 'react-redux' was not found. Please, check whether 'react-redux' is loaded prior to 'kotlin-wrappers-kotlin-react-redux-js-legacy'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-redux-js-legacy'. Its dependency 'kotlin-wrappers-kotlin-react-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-js-legacy' is loaded prior to 'kotlin-wrappers-kotlin-react-redux-js-legacy'.");
    }if (typeof this['kotlin-wrappers-kotlin-extensions-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-redux-js-legacy'. Its dependency 'kotlin-wrappers-kotlin-extensions-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-extensions-js-legacy' is loaded prior to 'kotlin-wrappers-kotlin-react-redux-js-legacy'.");
    }root['kotlin-wrappers-kotlin-react-redux-js-legacy'] = factory(typeof this['kotlin-wrappers-kotlin-react-redux-js-legacy'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-react-redux-js-legacy'], kotlin, this['react-redux'], this['kotlin-wrappers-kotlin-react-js-legacy'], this['kotlin-wrappers-kotlin-extensions-js-legacy']);
  }
}(this, function (_, Kotlin, $module$react_redux, $module$kotlin_wrappers_kotlin_react_js_legacy, $module$kotlin_wrappers_kotlin_extensions_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var getKClass = Kotlin.getKClass;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-js-legacy'] = $module$kotlin_wrappers_kotlin_react_js_legacy;
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-js-legacy'] = $module$kotlin_wrappers_kotlin_extensions_js_legacy;
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-react-redux-js-legacy.js.map
