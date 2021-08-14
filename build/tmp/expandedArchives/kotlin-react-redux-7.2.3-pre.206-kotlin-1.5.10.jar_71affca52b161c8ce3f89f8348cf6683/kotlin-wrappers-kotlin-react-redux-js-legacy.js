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
  var Provider = $module$react_redux.Provider;
  var getKClass = Kotlin.getKClass;
  var connect = $module$react_redux.connect;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  function provider$lambda(closure$store, closure$context, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.store = closure$store;
      if (closure$context != null)
        $receiver.attrs.context = closure$context;
      closure$handler($receiver);
      return Unit;
    };
  }
  function provider($receiver, store, context, handler) {
    if (context === void 0)
      context = null;
    return $receiver.child_ssazr1$(getKClass(Provider), provider$lambda(store, context, handler));
  }
  function rConnect$lambda($receiver) {
    return Unit;
  }
  function rConnect$lambda$lambda(name) {
    return 'RConnect(' + name + ')';
  }
  function rConnect(options) {
    if (options === void 0)
      options = rConnect$lambda;
    var tmp$ = undefined;
    var tmp$_0 = undefined;
    var tmp$_1 = undefined;
    var $receiver = {};
    $receiver.getDisplayName = rConnect$lambda$lambda;
    $receiver.methodName = 'rConnect';
    options($receiver);
    return connect(tmp$, tmp$_0, tmp$_1, $receiver);
  }
  function rConnect$lambda_0($receiver) {
    return Unit;
  }
  function rConnect$lambda_1(closure$mapStateToProps) {
    return function (state, ownProps) {
      var $receiver = {};
      closure$mapStateToProps($receiver, state, ownProps);
      return $receiver;
    };
  }
  function rConnect$lambda$lambda_0(name) {
    return 'RConnect(' + name + ')';
  }
  function rConnect_0(mapStateToProps, options) {
    if (options === void 0)
      options = rConnect$lambda_0;
    var tmp$ = undefined;
    var tmp$_0 = undefined;
    var $receiver = {};
    $receiver.getDisplayName = rConnect$lambda$lambda_0;
    $receiver.methodName = 'rConnect';
    options($receiver);
    return connect(rConnect$lambda_1(mapStateToProps), tmp$, tmp$_0, $receiver);
  }
  function rConnect$lambda_2($receiver) {
    return Unit;
  }
  function rConnect$lambda_3(closure$mapDispatchToProps) {
    return function (dispatch, ownProps) {
      var $receiver = {};
      closure$mapDispatchToProps($receiver, dispatch, ownProps);
      return $receiver;
    };
  }
  function rConnect$lambda$lambda_1(name) {
    return 'RConnect(' + name + ')';
  }
  function rConnect_1(mapDispatchToProps, options) {
    if (options === void 0)
      options = rConnect$lambda_2;
    var tmp$ = undefined;
    var tmp$_0 = undefined;
    var $receiver = {};
    $receiver.getDisplayName = rConnect$lambda$lambda_1;
    $receiver.methodName = 'rConnect';
    options($receiver);
    return connect(tmp$, rConnect$lambda_3(mapDispatchToProps), tmp$_0, $receiver);
  }
  function rConnect$lambda_4($receiver) {
    return Unit;
  }
  function rConnect$lambda_5(closure$mapStateToProps) {
    return function (state, ownProps) {
      var $receiver = {};
      closure$mapStateToProps($receiver, state, ownProps);
      return $receiver;
    };
  }
  function rConnect$lambda_6(closure$mapDispatchToProps) {
    return function (dispatch, ownProps) {
      var $receiver = {};
      closure$mapDispatchToProps($receiver, dispatch, ownProps);
      return $receiver;
    };
  }
  function rConnect$lambda$lambda_2(name) {
    return 'RConnect(' + name + ')';
  }
  function rConnect_2(mapStateToProps, mapDispatchToProps, options) {
    if (options === void 0)
      options = rConnect$lambda_4;
    var tmp$ = undefined;
    var $receiver = {};
    $receiver.getDisplayName = rConnect$lambda$lambda_2;
    $receiver.methodName = 'rConnect';
    options($receiver);
    return connect(rConnect$lambda_5(mapStateToProps), rConnect$lambda_6(mapDispatchToProps), tmp$, $receiver);
  }
  function rConnect$lambda_7($receiver) {
    return Unit;
  }
  function rConnect$lambda_8(closure$mapStateToProps) {
    return function (state, ownProps) {
      var $receiver = {};
      closure$mapStateToProps($receiver, state, ownProps);
      return $receiver;
    };
  }
  function rConnect$lambda_9(closure$mapDispatchToProps) {
    return function (dispatch, ownProps) {
      var $receiver = {};
      closure$mapDispatchToProps($receiver, dispatch, ownProps);
      return $receiver;
    };
  }
  function rConnect$lambda_10(closure$mergeProps) {
    return function (stateProps, dispatchProps, ownProps) {
      var $receiver = {};
      closure$mergeProps($receiver, stateProps, dispatchProps, ownProps);
      return $receiver;
    };
  }
  function rConnect$lambda$lambda_3(name) {
    return 'RConnect(' + name + ')';
  }
  function rConnect_3(mapStateToProps, mapDispatchToProps, mergeProps, options) {
    if (options === void 0)
      options = rConnect$lambda_7;
    var $receiver = {};
    $receiver.getDisplayName = rConnect$lambda$lambda_3;
    $receiver.methodName = 'rConnect';
    options($receiver);
    return connect(rConnect$lambda_8(mapStateToProps), rConnect$lambda_9(mapDispatchToProps), rConnect$lambda_10(mergeProps), $receiver);
  }
  function DispatchProps() {
  }
  DispatchProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DispatchProps',
    interfaces: []
  };
  $$importsForInline$$['kotlin-wrappers-kotlin-react-js-legacy'] = $module$kotlin_wrappers_kotlin_react_js_legacy;
  var package$react = _.react || (_.react = {});
  var package$redux = package$react.redux || (package$react.redux = {});
  package$redux.provider_ucqp27$ = provider;
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-js-legacy'] = $module$kotlin_wrappers_kotlin_extensions_js_legacy;
  package$redux.rConnect_p2uqna$ = rConnect;
  package$redux.rConnect_hfg8n2$ = rConnect_0;
  package$redux.rConnect_yelmmk$ = rConnect_1;
  package$redux.rConnect_aavpjk$ = rConnect_2;
  package$redux.rConnect_i7tzgj$ = rConnect_3;
  package$redux.DispatchProps = DispatchProps;
  Kotlin.defineModule('kotlin-wrappers-kotlin-react-redux-js-legacy', _);
  return _;
}));
