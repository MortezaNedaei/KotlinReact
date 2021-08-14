(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-extensions-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-wrappers-kotlin-extensions-js-legacy'.");
    }root['kotlin-wrappers-kotlin-extensions-js-legacy'] = factory(typeof this['kotlin-wrappers-kotlin-extensions-js-legacy'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-extensions-js-legacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var getCallableRef = Kotlin.getCallableRef;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  function clone(obj) {
    return Object.assign({}, obj);
  }
  function invoke_3($receiver, strings, values) {
    var tmp$;
    return (tmp$ = $receiver).call.apply(tmp$, [null, strings].concat(values));
  }
  function invoke_4($receiver, string, values) {
    return invoke_3($receiver, [string], values.slice());
  }
  function invoke_5($receiver, values) {
    return invoke_3($receiver, [], values.slice());
  }
  var package$kotlinext = _.kotlinext || (_.kotlinext = {});
  var package$js = package$kotlinext.js || (package$kotlinext.js = {});
  package$js.clone_issdgt$ = clone;
  package$js.invoke_z5wujd$ = invoke_3;
  package$js.invoke_dgimx$ = invoke_4;
  package$js.invoke_9p99ed$ = invoke_5;
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-extensions-js-legacy.js.map
