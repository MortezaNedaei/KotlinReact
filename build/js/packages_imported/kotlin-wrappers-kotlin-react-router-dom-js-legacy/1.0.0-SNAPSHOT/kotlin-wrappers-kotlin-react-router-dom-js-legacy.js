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
  var rawWithRouter = $module$react_router_dom.withRouter;
  var rawUseParams = $module$react_router_dom.useParams;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var rawUseRouteMatch = $module$react_router_dom.useRouteMatch;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var getKClass = Kotlin.getKClass;
  var HashRouterComponent = $module$react_router_dom.HashRouter;
  var Unit = Kotlin.kotlin.Unit;
  var BrowserRouterComponent = $module$react_router_dom.BrowserRouter;
  var SwitchComponent = $module$react_router_dom.Switch;
  var RouteComponent = $module$react_router_dom.Route;
  var LinkComponent = $module$react_router_dom.Link;
  var NavLinkComponent = $module$react_router_dom.NavLink;
  var RedirectComponent = $module$react_router_dom.Redirect;
  var rawMatchPath = $module$react_router_dom.matchPath;
  HashType.prototype = Object.create(Enum.prototype);
  HashType.prototype.constructor = HashType;
  function withRouter(klazz) {
    return rawWithRouter(get_rClass(klazz));
  }
  function withRouter_0(component) {
    return rawWithRouter(component);
  }
  function useParams() {
    var tmp$, tmp$_0;
    var rawParams = rawUseParams();
    return Object.keys(Kotlin.isType(tmp$ = rawParams, Any) ? tmp$ : throwCCE()).length === 0 ? null : Kotlin.isType(tmp$_0 = rawParams, Object) ? tmp$_0 : throwCCE();
  }
  function useRouteMatch(path, exact, strict, sensitive) {
    if (exact === void 0)
      exact = false;
    if (strict === void 0)
      strict = false;
    if (sensitive === void 0)
      sensitive = false;
    if (path.length === 0) {
      return rawUseRouteMatch(null);
    }var $receiver = {};
    $receiver.path = path;
    $receiver.exact = exact;
    $receiver.strict = strict;
    $receiver.sensitive = sensitive;
    var options = $receiver;
    return rawUseRouteMatch(options);
  }
  function HashType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function HashType_initFields() {
    HashType_initFields = function () {
    };
    HashType$slash_instance = new HashType('slash', 0);
    HashType$noslash_instance = new HashType('noslash', 1);
    HashType$hashbang_instance = new HashType('hashbang', 2);
  }
  var HashType$slash_instance;
  function HashType$slash_getInstance() {
    HashType_initFields();
    return HashType$slash_instance;
  }
  var HashType$noslash_instance;
  function HashType$noslash_getInstance() {
    HashType_initFields();
    return HashType$noslash_instance;
  }
  var HashType$hashbang_instance;
  function HashType$hashbang_getInstance() {
    HashType_initFields();
    return HashType$hashbang_instance;
  }
  HashType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HashType',
    interfaces: [Enum]
  };
  function HashType$values() {
    return [HashType$slash_getInstance(), HashType$noslash_getInstance(), HashType$hashbang_getInstance()];
  }
  HashType.values = HashType$values;
  function HashType$valueOf(name) {
    switch (name) {
      case 'slash':
        return HashType$slash_getInstance();
      case 'noslash':
        return HashType$noslash_getInstance();
      case 'hashbang':
        return HashType$hashbang_getInstance();
      default:throwISE('No enum constant react.router.dom.HashType.' + name);
    }
  }
  HashType.valueOf_61zpoe$ = HashType$valueOf;
  function hashRouter$lambda$lambda(closure$basename, closure$hashType, closure$getUserConfirmation) {
    return function ($receiver) {
      $receiver.basename = closure$basename;
      $receiver.hashType = closure$hashType.name;
      $receiver.getUserConfirmation = closure$getUserConfirmation;
      return Unit;
    };
  }
  function hashRouter$lambda(closure$basename, closure$hashType, closure$getUserConfirmation, closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(hashRouter$lambda$lambda(closure$basename, closure$hashType, closure$getUserConfirmation));
      closure$handler($receiver);
      return Unit;
    };
  }
  function hashRouter($receiver, basename, hashType, getUserConfirmation, handler) {
    if (basename === void 0)
      basename = '';
    if (hashType === void 0)
      hashType = HashType$slash_getInstance();
    if (getUserConfirmation === void 0)
      getUserConfirmation = null;
    return $receiver.child_ssazr1$(getKClass(HashRouterComponent), hashRouter$lambda(basename, hashType, getUserConfirmation, handler));
  }
  function browserRouter$lambda$lambda(closure$basename, closure$getUserConfirmation, closure$forceRefresh, closure$keyLength) {
    return function ($receiver) {
      $receiver.basename = closure$basename;
      $receiver.getUserConfirmation = closure$getUserConfirmation;
      $receiver.forceRefresh = closure$forceRefresh;
      $receiver.keyLength = closure$keyLength;
      return Unit;
    };
  }
  function browserRouter$lambda(closure$basename, closure$getUserConfirmation, closure$forceRefresh, closure$keyLength, closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(browserRouter$lambda$lambda(closure$basename, closure$getUserConfirmation, closure$forceRefresh, closure$keyLength));
      closure$handler($receiver);
      return Unit;
    };
  }
  function browserRouter($receiver, basename, getUserConfirmation, forceRefresh, keyLength, handler) {
    if (basename === void 0)
      basename = '';
    if (getUserConfirmation === void 0)
      getUserConfirmation = null;
    if (forceRefresh === void 0)
      forceRefresh = false;
    if (keyLength === void 0)
      keyLength = 6;
    return $receiver.child_ssazr1$(getKClass(BrowserRouterComponent), browserRouter$lambda(basename, getUserConfirmation, forceRefresh, keyLength, handler));
  }
  function switch_0($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(SwitchComponent), handler);
  }
  function route$lambda$lambda(closure$path, closure$exact, closure$strict, closure$component) {
    return function ($receiver) {
      $receiver.path = closure$path;
      $receiver.exact = closure$exact;
      $receiver.strict = closure$strict;
      $receiver.component = get_rClass(closure$component);
      return Unit;
    };
  }
  function route$lambda(closure$path, closure$exact, closure$strict, closure$component) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(route$lambda$lambda(closure$path, closure$exact, closure$strict, closure$component));
      return Unit;
    };
  }
  function route($receiver, path, component, exact, strict) {
    if (exact === void 0)
      exact = false;
    if (strict === void 0)
      strict = false;
    return $receiver.child_ssazr1$(getKClass(RouteComponent), route$lambda(path, exact, strict, component));
  }
  function route$lambda$lambda_0(closure$path, closure$exact, closure$strict, closure$render) {
    return function ($receiver) {
      $receiver.path = closure$path;
      $receiver.exact = closure$exact;
      $receiver.strict = closure$strict;
      $receiver.render = closure$render;
      return Unit;
    };
  }
  function route$lambda_0(closure$path, closure$exact, closure$strict, closure$render) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(route$lambda$lambda_0(closure$path, closure$exact, closure$strict, closure$render));
      return Unit;
    };
  }
  function route_0($receiver, path, exact, strict, render) {
    if (exact === void 0)
      exact = false;
    if (strict === void 0)
      strict = false;
    return $receiver.child_ssazr1$(getKClass(RouteComponent), route$lambda_0(path, exact, strict, render));
  }
  function route$lambda$lambda$lambda(closure$render) {
    return function (it) {
      return closure$render();
    };
  }
  function route$lambda$lambda_1(closure$path, closure$exact, closure$strict, closure$render) {
    return function ($receiver) {
      $receiver.path = closure$path;
      $receiver.exact = closure$exact;
      $receiver.strict = closure$strict;
      $receiver.render = route$lambda$lambda$lambda(closure$render);
      return Unit;
    };
  }
  function route$lambda_1(closure$path, closure$exact, closure$strict, closure$render) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(route$lambda$lambda_1(closure$path, closure$exact, closure$strict, closure$render));
      return Unit;
    };
  }
  function route_1($receiver, path, exact, strict, render) {
    if (exact === void 0)
      exact = false;
    if (strict === void 0)
      strict = false;
    return $receiver.child_ssazr1$(getKClass(RouteComponent), route$lambda_1(path, exact, strict, render));
  }
  function routeLink$lambda$lambda(closure$to, closure$replace, closure$className) {
    return function ($receiver) {
      $receiver.to = closure$to;
      $receiver.replace = closure$replace;
      $receiver.className = closure$className;
      return Unit;
    };
  }
  function routeLink$lambda(closure$to, closure$replace, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(routeLink$lambda$lambda(closure$to, closure$replace, closure$className));
      closure$handler != null ? closure$handler($receiver) : null;
      return Unit;
    };
  }
  function routeLink($receiver, to, replace, className, handler) {
    if (replace === void 0)
      replace = false;
    if (className === void 0)
      className = null;
    return $receiver.child_ssazr1$(getKClass(LinkComponent), routeLink$lambda(to, replace, className, handler));
  }
  function navLink$lambda$lambda(closure$to, closure$replace, closure$className, closure$activeClassName, closure$exact, closure$strict, closure$isActive) {
    return function ($receiver) {
      $receiver.to = closure$to;
      $receiver.replace = closure$replace;
      $receiver.className = closure$className;
      $receiver.activeClassName = closure$activeClassName;
      $receiver.exact = closure$exact;
      $receiver.strict = closure$strict;
      $receiver.isActive = closure$isActive;
      return Unit;
    };
  }
  function navLink$lambda(closure$to, closure$replace, closure$className, closure$activeClassName, closure$exact, closure$strict, closure$isActive, closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(navLink$lambda$lambda(closure$to, closure$replace, closure$className, closure$activeClassName, closure$exact, closure$strict, closure$isActive));
      closure$handler != null ? closure$handler($receiver) : null;
      return Unit;
    };
  }
  function navLink($receiver, to, replace, className, activeClassName, exact, strict, isActive, handler) {
    if (replace === void 0)
      replace = false;
    if (className === void 0)
      className = null;
    if (activeClassName === void 0)
      activeClassName = 'active';
    if (exact === void 0)
      exact = false;
    if (strict === void 0)
      strict = false;
    if (isActive === void 0)
      isActive = null;
    return $receiver.child_ssazr1$(getKClass(NavLinkComponent), navLink$lambda(to, replace, className, activeClassName, exact, strict, isActive, handler));
  }
  function redirect$lambda$lambda(closure$from, closure$to, closure$push, closure$exact, closure$strict) {
    return function ($receiver) {
      $receiver.from = closure$from;
      $receiver.to = closure$to;
      $receiver.push = closure$push;
      $receiver.exact = closure$exact;
      $receiver.strict = closure$strict;
      return Unit;
    };
  }
  function redirect$lambda(closure$from, closure$to, closure$push, closure$exact, closure$strict) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(redirect$lambda$lambda(closure$from, closure$to, closure$push, closure$exact, closure$strict));
      return Unit;
    };
  }
  function redirect($receiver, from, to, push, exact, strict) {
    if (from === void 0)
      from = null;
    if (push === void 0)
      push = false;
    if (exact === void 0)
      exact = false;
    if (strict === void 0)
      strict = false;
    return $receiver.child_ssazr1$(getKClass(RedirectComponent), redirect$lambda(from, to, push, exact, strict));
  }
  function matchPath(patName, path, exact, strict, sensitive) {
    if (exact === void 0)
      exact = false;
    if (strict === void 0)
      strict = false;
    if (sensitive === void 0)
      sensitive = false;
    var $receiver = {};
    $receiver.path = path;
    $receiver.exact = exact;
    $receiver.strict = strict;
    $receiver.sensitive = sensitive;
    var options = $receiver;
    return rawMatchPath(patName, options);
  }
  var package$react = _.react || (_.react = {});
  var package$router = package$react.router || (package$react.router = {});
  var package$dom = package$router.dom || (package$router.dom = {});
  package$dom.withRouter_l8hryp$ = withRouter;
  package$dom.withRouter_nlczfw$ = withRouter_0;
  package$dom.useParams_xu0bud$ = useParams;
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-js-legacy'] = $module$kotlin_wrappers_kotlin_extensions_js_legacy;
  package$dom.useRouteMatch_yhu8lz$ = useRouteMatch;
  Object.defineProperty(HashType, 'slash', {
    get: HashType$slash_getInstance
  });
  Object.defineProperty(HashType, 'noslash', {
    get: HashType$noslash_getInstance
  });
  Object.defineProperty(HashType, 'hashbang', {
    get: HashType$hashbang_getInstance
  });
  package$dom.HashType = HashType;
  package$dom.hashRouter_tj5j28$ = hashRouter;
  package$dom.browserRouter_ysa1x$ = browserRouter;
  package$dom.switch_jg12zk$ = switch_0;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-js-legacy'] = $module$kotlin_wrappers_kotlin_react_js_legacy;
  package$dom.route_joyivp$ = route;
  package$dom.route_szp5ya$ = route_0;
  package$dom.route_gp7xrx$ = route_1;
  package$dom.routeLink_4zdlmx$ = routeLink;
  package$dom.navLink_qjl0av$ = navLink;
  package$dom.redirect_fpttgj$ = redirect;
  package$dom.matchPath_xaz4ud$ = matchPath;
  Kotlin.defineModule('kotlin-wrappers-kotlin-react-router-dom-js-legacy', _);
  return _;
}));
