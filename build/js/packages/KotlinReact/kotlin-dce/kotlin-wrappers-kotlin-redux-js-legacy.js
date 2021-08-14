(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-wrappers-kotlin-extensions-js-legacy', 'redux', 'kotlinx-serialization-kotlinx-serialization-json-js-legacy', 'kotlinx-serialization-kotlinx-serialization-core-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-extensions-js-legacy'), require('redux'), require('kotlinx-serialization-kotlinx-serialization-json-js-legacy'), require('kotlinx-serialization-kotlinx-serialization-core-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-redux-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-wrappers-kotlin-redux-js-legacy'.");
    }if (typeof this['kotlin-wrappers-kotlin-extensions-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-redux-js-legacy'. Its dependency 'kotlin-wrappers-kotlin-extensions-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-extensions-js-legacy' is loaded prior to 'kotlin-wrappers-kotlin-redux-js-legacy'.");
    }if (typeof redux === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-redux-js-legacy'. Its dependency 'redux' was not found. Please, check whether 'redux' is loaded prior to 'kotlin-wrappers-kotlin-redux-js-legacy'.");
    }if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-redux-js-legacy'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-legacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-legacy' is loaded prior to 'kotlin-wrappers-kotlin-redux-js-legacy'.");
    }if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-redux-js-legacy'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' is loaded prior to 'kotlin-wrappers-kotlin-redux-js-legacy'.");
    }root['kotlin-wrappers-kotlin-redux-js-legacy'] = factory(typeof this['kotlin-wrappers-kotlin-redux-js-legacy'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-redux-js-legacy'], kotlin, this['kotlin-wrappers-kotlin-extensions-js-legacy'], redux, this['kotlinx-serialization-kotlinx-serialization-json-js-legacy'], this['kotlinx-serialization-kotlinx-serialization-core-js-legacy']);
  }
}(this, function (_, Kotlin, $module$kotlin_wrappers_kotlin_extensions_js_legacy, $module$redux, $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy, $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var clone = $module$kotlin_wrappers_kotlin_extensions_js_legacy.kotlinext.js.clone_issdgt$;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy.kotlinx.serialization.json.Json_x26noe$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  function defaultJson$lambda($receiver) {
    $receiver.isLenient = true;
    $receiver.ignoreUnknownKeys = true;
    $receiver.allowSpecialFloatingPointValues = true;
    $receiver.useArrayPolymorphism = true;
    return Unit;
  }
  var defaultJson;
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-js-legacy'] = $module$kotlin_wrappers_kotlin_extensions_js_legacy;
  $$importsForInline$$['kotlinx-serialization-kotlinx-serialization-json-js-legacy'] = $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy;
  $$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy;
  defaultJson = Json(void 0, defaultJson$lambda);
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-redux-js-legacy.js.map
