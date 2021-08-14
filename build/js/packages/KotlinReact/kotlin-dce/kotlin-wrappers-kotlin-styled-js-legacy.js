(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-css', 'kotlin-wrappers-kotlin-extensions-js-legacy', 'inline-style-prefixer', 'kotlin-wrappers-kotlin-react-js-legacy', 'kotlin-wrappers-kotlin-react-dom-js-legacy', 'styled-components', 'react', 'react-dom', 'react', 'kotlinx-html-js', 'styled-components'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-css'), require('kotlin-wrappers-kotlin-extensions-js-legacy'), require('inline-style-prefixer'), require('kotlin-wrappers-kotlin-react-js-legacy'), require('kotlin-wrappers-kotlin-react-dom-js-legacy'), require('styled-components'), require('react'), require('react-dom'), require('react'), require('kotlinx-html-js'), require('styled-components'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof this['kotlin-wrappers-kotlin-extensions-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'kotlin-wrappers-kotlin-extensions-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-extensions-js-legacy' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof this['inline-style-prefixer'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'inline-style-prefixer' was not found. Please, check whether 'inline-style-prefixer' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'kotlin-wrappers-kotlin-react-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-js-legacy' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'kotlin-wrappers-kotlin-react-dom-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-js-legacy' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof this['styled-components'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'styled-components' was not found. Please, check whether 'styled-components' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof this['react-dom'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'react-dom' was not found. Please, check whether 'react-dom' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof ReactModule === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }if (typeof StyledComponents === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-legacy'. Its dependency 'styled-components' was not found. Please, check whether 'styled-components' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-legacy'.");
    }root['kotlin-wrappers-kotlin-styled-js-legacy'] = factory(typeof this['kotlin-wrappers-kotlin-styled-js-legacy'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-styled-js-legacy'], kotlin, this['kotlin-css'], this['kotlin-wrappers-kotlin-extensions-js-legacy'], this['inline-style-prefixer'], this['kotlin-wrappers-kotlin-react-js-legacy'], this['kotlin-wrappers-kotlin-react-dom-js-legacy'], this['styled-components'], react, this['react-dom'], ReactModule, this['kotlinx-html-js'], StyledComponents);
  }
}(this, function (_, Kotlin, $module$kotlin_css, $module$kotlin_wrappers_kotlin_extensions_js_legacy, $module$inline_style_prefixer, $module$kotlin_wrappers_kotlin_react_js_legacy, $module$kotlin_wrappers_kotlin_react_dom_js_legacy, $module$styled_components, $module$react, $module$react_dom, $module$react_0, $module$kotlinx_html_js, $module$styled_components_0) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var KeyframesBuilder = $module$kotlin_css.kotlinx.css.properties.KeyframesBuilder;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var StyledElement = $module$kotlin_css.kotlinx.css.StyledElement;
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var CSSBuilder = $module$kotlin_css.kotlinx.css.CSSBuilder;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var RElementBuilder = $module$kotlin_wrappers_kotlin_react_js_legacy.react.RElementBuilder;
  var RElementBuilderImpl = $module$kotlin_wrappers_kotlin_react_js_legacy.react.RElementBuilderImpl;
  var RDOMBuilder = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.react.dom.RDOMBuilder;
  var RDOMBuilderImpl = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.react.dom.RDOMBuilderImpl;
  var invoke = $module$kotlin_wrappers_kotlin_extensions_js_legacy.kotlinext.js.invoke_dgimx$;
  var invoke_0 = $module$kotlin_wrappers_kotlin_extensions_js_legacy.kotlinext.js.invoke_9p99ed$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var invoke_1 = $module$kotlin_wrappers_kotlin_extensions_js_legacy.kotlinext.js.invoke_z5wujd$;
  var createElement = $module$react.createElement;
  var render = $module$react_dom.render;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var functionalComponent = $module$kotlin_wrappers_kotlin_react_js_legacy.react.functionalComponent_7g4vsr$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  StyledElementBuilderImpl.prototype = Object.create(RElementBuilderImpl.prototype);
  StyledDOMBuilderImpl.prototype = Object.create(RDOMBuilderImpl.prototype);
  StyledDOMBuilderImpl.prototype.constructor = StyledDOMBuilderImpl;
  function StyleSheet(name, isStatic) {
    if (isStatic === void 0)
      isStatic = false;
    this.name = name;
    this.isStatic = isStatic;
    this.isLoaded_1mk3xi$_0 = false;
    this.holders_q142jc$_0 = ArrayList_init();
  }
  StyleSheet.prototype.dependsOn_tsq8y7$ = function (handler) {
    handler().inject();
  };
  StyleSheet.prototype.css_wopuc9$ = function (parents, builder) {
    var $receiver = new CssHolder(this, parents.concat([builder]));
    this.addCssHolder_jwasi7$($receiver);
    return $receiver;
  };
  StyleSheet.prototype.addCssHolder_jwasi7$ = function (holder) {
    this.holders_q142jc$_0.add_11rb$(holder);
  };
  function StyleSheet$inject$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      tmp$ = closure$it.second.ruleSets_8be2vx$;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var r = tmp$[tmp$_0];
        r($receiver);
      }
      return Unit;
    };
  }
  StyleSheet.prototype.inject = function () {
    if (!this.isLoaded_1mk3xi$_0 && this.isStatic) {
      this.isLoaded_1mk3xi$_0 = true;
      var $receiver = this.holders_q142jc$_0;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var $receiver_0 = element.properties;
        var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          destination_0.add_11rb$(to(item, element));
        }
        var list = destination_0;
        addAll(destination, list);
      }
      var keys = destination;
      var $receiver_1 = new CSSBuilder(void 0, false);
      var tmp$_1;
      tmp$_1 = keys.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        $receiver_1.invoke_32jdrg$('.' + getClassName_0(this, element_0.first), StyleSheet$inject$lambda$lambda$lambda(element_0));
      }
      var builder = $receiver_1;
      injectGlobal(builder.toString());
      this.holders_q142jc$_0.clear();
    }};
  StyleSheet.$metadata$ = {kind: Kind_CLASS, simpleName: 'StyleSheet', interfaces: []};
  function CssHolder(sheet, ruleSets) {
    this.sheet_0 = sheet;
    this.ruleSets_8be2vx$ = ruleSets;
    this._properties_0 = ArrayList_init();
  }
  Object.defineProperty(CssHolder.prototype, 'properties', {configurable: true, get: function () {
    return this._properties_0;
  }});
  function CssHolder$provideDelegate$lambda$lambda(this$CssHolder, closure$property) {
    return function ($receiver) {
      if (this$CssHolder.sheet_0.isStatic) {
        $receiver.unaryPlus_pdl1vz$(getClassName_0(this$CssHolder.sheet_0, closure$property));
        this$CssHolder.sheet_0.inject();
      }if (!this$CssHolder.sheet_0.isStatic || !$receiver.allowClasses) {
        $receiver.styleName.add_11rb$(getClassName_0(this$CssHolder.sheet_0, closure$property));
        var $receiver_0 = this$CssHolder.ruleSets_8be2vx$;
        var tmp$;
        for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
          var element = $receiver_0[tmp$];
          element($receiver);
        }
      }return Unit;
    };
  }
  function CssHolder$provideDelegate$lambda(this$CssHolder) {
    return function (f, property) {
      return CssHolder$provideDelegate$lambda$lambda(this$CssHolder, property);
    };
  }
  CssHolder.prototype.provideDelegate_n5byny$ = function (thisRef, providingProperty) {
    this._properties_0.add_11rb$(providingProperty);
    return new ReadOnlyProperty(CssHolder$provideDelegate$lambda(this));
  };
  CssHolder.$metadata$ = {kind: Kind_CLASS, simpleName: 'CssHolder', interfaces: []};
  function getClassName_0($receiver, property) {
    return $receiver.name + '-' + property.callableName;
  }
  function StyledBuilder() {
  }
  StyledBuilder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'StyledBuilder', interfaces: []};
  function StyledElementBuilder() {
    StyledElementBuilder$Companion_getInstance();
  }
  var StyledElementBuilder$Companion_instance = null;
  function StyledElementBuilderImpl(type, attrs) {
    if (attrs === void 0) {
      attrs = {};
    }RElementBuilderImpl.call(this, attrs);
    this.type_j70h7l$_0 = type;
    this.css_l8ze94$_0 = new CSSBuilder();
  }
  function StyledDOMBuilder() {
    StyledDOMBuilder$Companion_getInstance();
  }
  Object.defineProperty(StyledDOMBuilder.prototype, 'type', {configurable: true, get: function () {
    return this.attrs.tagName;
  }});
  StyledDOMBuilder.prototype.create = function () {
    return Styled_getInstance().createElement_lnfw8r$(this.type, this.css, this.domProps, this.childList);
  };
  function StyledDOMBuilder$Companion() {
    StyledDOMBuilder$Companion_instance = this;
  }
  StyledDOMBuilder$Companion.prototype.invoke_f6ihu2$ = function (factory) {
    return new StyledDOMBuilderImpl(factory);
  };
  StyledDOMBuilder$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var StyledDOMBuilder$Companion_instance = null;
  function StyledDOMBuilder$Companion_getInstance() {
    if (StyledDOMBuilder$Companion_instance === null) {
      new StyledDOMBuilder$Companion();
    }return StyledDOMBuilder$Companion_instance;
  }
  StyledDOMBuilder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'StyledDOMBuilder', interfaces: [StyledBuilder, RDOMBuilder]};
  function StyledDOMBuilderImpl(factory) {
    RDOMBuilderImpl.call(this, factory);
    this.css_sotjku$_0 = new CSSBuilder();
  }
  Object.defineProperty(StyledDOMBuilderImpl.prototype, 'css', {configurable: true, get: function () {
    return this.css_sotjku$_0;
  }});
  StyledDOMBuilderImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'StyledDOMBuilderImpl', interfaces: [RDOMBuilderImpl, StyledDOMBuilder]};
  function GlobalStyles() {
    GlobalStyles_instance = this;
    this.component_0 = functionalComponent(void 0, GlobalStyles$component$lambda);
    this.root_djryty$_0 = lazy(GlobalStyles$root$lambda);
    this.styles_0 = ArrayList_init();
  }
  Object.defineProperty(GlobalStyles.prototype, 'root_0', {configurable: true, get: function () {
    return this.root_djryty$_0.value;
  }});
  GlobalStyles.prototype.add_tpp4ch$ = function (globalStyle) {
    this.styles_0.add_11rb$(globalStyle);
    var tmp$ = GlobalStyles_getInstance().component_0;
    var $receiver = {};
    $receiver.globalStyles = this.styles_0;
    var reactElement = createElement(tmp$, $receiver);
    render(reactElement, this.root_0);
  };
  function GlobalStyles$component$lambda($receiver, props) {
    var tmp$;
    tmp$ = props.globalStyles.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_0 = {};
      $receiver.child_k3oess$(element, $receiver_0, emptyList());
    }
    return Unit;
  }
  function GlobalStyles$root$lambda() {
    var tmp$;
    var element = Kotlin.isType(tmp$ = ensureNotNull(window.document.body).appendChild(window.document.createElement('div')), Element) ? tmp$ : throwCCE();
    element.setAttribute('id', 'sc-global-styles');
    return element;
  }
  GlobalStyles.$metadata$ = {kind: Kind_OBJECT, simpleName: 'GlobalStyles', interfaces: []};
  var GlobalStyles_instance = null;
  function GlobalStyles_getInstance() {
    if (GlobalStyles_instance === null) {
      new GlobalStyles();
    }return GlobalStyles_instance;
  }
  function injectGlobal$lambda(closure$string) {
    return function () {
      return invoke($module$styled_components.createGlobalStyle, closure$string, []);
    };
  }
  function injectGlobal$lambda_0(closure$globalStyle) {
    return function (it) {
      GlobalStyles_getInstance().add_tpp4ch$(closure$globalStyle);
      return Unit;
    };
  }
  function injectGlobal(string) {
    var globalStyle = devOverrideUseRef(injectGlobal$lambda(string));
    Promise.resolve(Unit).then(injectGlobal$lambda_0(globalStyle));
  }
  function devOverrideUseRef$lambda() {
    throw Error_init('invalid hook call');
  }
  function devOverrideUseRef(action) {
    var tmp$;
    if (process.env.NODE_ENV !== 'production') {
      var useRef = $module$react_0.useRef;
      $module$react_0.useRef = devOverrideUseRef$lambda;
      var result = action();
      $module$react_0.useRef = useRef;
      tmp$ = result;
    } else
      tmp$ = action();
    return tmp$;
  }
  function Styled() {
    Styled_instance = this;
    this.cache_0 = LinkedHashMap_init();
  }
  function Styled$wrap$lambda$lambda$lambda(it) {
    return it._css;
  }
  function Styled$wrap$lambda$lambda(closure$type) {
    return function () {
      return invoke_0(rawStyled(closure$type), [Styled$wrap$lambda$lambda$lambda]);
    };
  }
  Styled.prototype.wrap_0 = function (type) {
    var $receiver = this.cache_0;
    var tmp$;
    var value = $receiver.get_11rb$(type);
    if (value == null) {
      var answer = devOverrideUseRef(Styled$wrap$lambda$lambda(type));
      $receiver.put_xwzc9p$(type, answer);
      tmp$ = answer;
    } else {
      tmp$ = value;
    }
    return tmp$;
  };
  Styled.prototype.createElement_lnfw8r$ = function (type, css, props, children) {
    var wrappedType = this.wrap_0(type);
    var styledProps = props;
    var tmp$ = !css.rules.isEmpty();
    if (!tmp$) {
      tmp$ = !css.multiRules.isEmpty();
    }var tmp$_0 = tmp$;
    if (!tmp$_0) {
      tmp$_0 = !css.declarations.isEmpty();
    }if (tmp$_0) {
      styledProps._css = css.toString();
    }if (!css.classes.isEmpty()) {
      styledProps.className = joinToString(css.classes, ' ');
    }if (!css.styleName.isEmpty()) {
      styledProps['data-style'] = joinToString(css.styleName, ' ');
    }return createElement.apply(null, [wrappedType, styledProps].concat(copyToArray(children)));
  };
  Styled.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Styled', interfaces: []};
  var Styled_instance = null;
  function Styled_getInstance() {
    if (Styled_instance === null) {
      new Styled();
    }return Styled_instance;
  }
  function rawStyled(target) {
    return $module$styled_components_0.default(target);
  }
  var package$styled = _.styled || (_.styled = {});
  $$importsForInline$$['kotlin-css'] = $module$kotlin_css;
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-js-legacy'] = $module$kotlin_wrappers_kotlin_extensions_js_legacy;
  package$styled.StyleSheet = StyleSheet;
  package$styled.CssHolder = CssHolder;
  package$styled.StyledBuilder = StyledBuilder;
  package$styled.StyledElementBuilder = StyledElementBuilder;
  package$styled.StyledElementBuilderImpl = StyledElementBuilderImpl;
  Object.defineProperty(StyledDOMBuilder, 'Companion', {get: StyledDOMBuilder$Companion_getInstance});
  package$styled.StyledDOMBuilder = StyledDOMBuilder;
  package$styled.StyledDOMBuilderImpl = StyledDOMBuilderImpl;
  package$styled.injectGlobal_61zpoe$ = injectGlobal;
  Object.defineProperty(package$styled, 'Styled', {get: Styled_getInstance});
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  package$styled.rawStyled_za3rmp$ = rawStyled;
  Object.defineProperty(StyledElementBuilder.prototype, 'key', Object.getOwnPropertyDescriptor(RElementBuilder.prototype, 'key'));
  Object.defineProperty(StyledElementBuilder.prototype, 'ref', Object.getOwnPropertyDescriptor(RElementBuilder.prototype, 'ref'));
  StyledElementBuilder.prototype.attrs_slhiwc$ = RElementBuilder.prototype.attrs_slhiwc$;
  StyledElementBuilder.prototype.child_52psg1$ = RElementBuilder.prototype.child_52psg1$;
  StyledElementBuilder.prototype.child_k3oess$ = RElementBuilder.prototype.child_k3oess$;
  StyledElementBuilder.prototype.child_4dvv5y$ = RElementBuilder.prototype.child_4dvv5y$;
  StyledElementBuilder.prototype.child_ssazr1$ = RElementBuilder.prototype.child_ssazr1$;
  StyledElementBuilder.prototype.childFunction_2656uf$ = RElementBuilder.prototype.childFunction_2656uf$;
  StyledElementBuilder.prototype.node_3ecl1l$$default = RElementBuilder.prototype.node_3ecl1l$$default;
  StyledElementBuilder.prototype.node_rwypko$$default = RElementBuilder.prototype.node_rwypko$$default;
  StyledElementBuilder.prototype.ref_5ij4lk$ = RElementBuilder.prototype.ref_5ij4lk$;
  StyledElementBuilder.prototype.children_yllgzm$ = RElementBuilder.prototype.children_yllgzm$;
  StyledElementBuilder.prototype.children_48djri$ = RElementBuilder.prototype.children_48djri$;
  StyledElementBuilder.prototype.invoke_eb8iu4$ = RElementBuilder.prototype.invoke_eb8iu4$;
  StyledElementBuilder.prototype.invoke_ory6b3$ = RElementBuilder.prototype.invoke_ory6b3$;
  StyledElementBuilder.prototype.invoke_csqs6z$ = RElementBuilder.prototype.invoke_csqs6z$;
  StyledElementBuilder.prototype.renderEach_ezdo97$ = RElementBuilder.prototype.renderEach_ezdo97$;
  StyledElementBuilder.prototype.renderEachIndexed_cfwqen$ = RElementBuilder.prototype.renderEachIndexed_cfwqen$;
  StyledElementBuilder.prototype.unaryPlus_pdl1vz$ = RElementBuilder.prototype.unaryPlus_pdl1vz$;
  StyledElementBuilder.prototype.unaryPlus_84gpoi$ = RElementBuilder.prototype.unaryPlus_84gpoi$;
  StyledElementBuilder.prototype.withKey_pspxar$ = RElementBuilder.prototype.withKey_pspxar$;
  StyledElementBuilder.prototype.withKey_s5hl0b$ = RElementBuilder.prototype.withKey_s5hl0b$;
  StyledElementBuilder.prototype.node_3ecl1l$ = RElementBuilder.prototype.node_3ecl1l$;
  StyledElementBuilder.prototype.node_rwypko$ = RElementBuilder.prototype.node_rwypko$;
  Object.defineProperty(StyledElementBuilderImpl.prototype, 'key', Object.getOwnPropertyDescriptor(StyledElementBuilder.prototype, 'key'));
  Object.defineProperty(StyledElementBuilderImpl.prototype, 'ref', Object.getOwnPropertyDescriptor(StyledElementBuilder.prototype, 'ref'));
  StyledElementBuilderImpl.prototype.attrs_slhiwc$ = StyledElementBuilder.prototype.attrs_slhiwc$;
  StyledElementBuilderImpl.prototype.child_52psg1$ = StyledElementBuilder.prototype.child_52psg1$;
  StyledElementBuilderImpl.prototype.child_k3oess$ = StyledElementBuilder.prototype.child_k3oess$;
  StyledElementBuilderImpl.prototype.child_4dvv5y$ = StyledElementBuilder.prototype.child_4dvv5y$;
  StyledElementBuilderImpl.prototype.child_ssazr1$ = StyledElementBuilder.prototype.child_ssazr1$;
  StyledElementBuilderImpl.prototype.childFunction_2656uf$ = StyledElementBuilder.prototype.childFunction_2656uf$;
  StyledElementBuilderImpl.prototype.node_3ecl1l$$default = StyledElementBuilder.prototype.node_3ecl1l$$default;
  StyledElementBuilderImpl.prototype.node_rwypko$$default = StyledElementBuilder.prototype.node_rwypko$$default;
  StyledElementBuilderImpl.prototype.ref_5ij4lk$ = StyledElementBuilder.prototype.ref_5ij4lk$;
  StyledElementBuilderImpl.prototype.children_yllgzm$ = StyledElementBuilder.prototype.children_yllgzm$;
  StyledElementBuilderImpl.prototype.children_48djri$ = StyledElementBuilder.prototype.children_48djri$;
  StyledElementBuilderImpl.prototype.invoke_eb8iu4$ = StyledElementBuilder.prototype.invoke_eb8iu4$;
  StyledElementBuilderImpl.prototype.invoke_ory6b3$ = StyledElementBuilder.prototype.invoke_ory6b3$;
  StyledElementBuilderImpl.prototype.invoke_csqs6z$ = StyledElementBuilder.prototype.invoke_csqs6z$;
  StyledElementBuilderImpl.prototype.renderEach_ezdo97$ = StyledElementBuilder.prototype.renderEach_ezdo97$;
  StyledElementBuilderImpl.prototype.renderEachIndexed_cfwqen$ = StyledElementBuilder.prototype.renderEachIndexed_cfwqen$;
  StyledElementBuilderImpl.prototype.unaryPlus_pdl1vz$ = StyledElementBuilder.prototype.unaryPlus_pdl1vz$;
  StyledElementBuilderImpl.prototype.unaryPlus_84gpoi$ = StyledElementBuilder.prototype.unaryPlus_84gpoi$;
  StyledElementBuilderImpl.prototype.withKey_pspxar$ = StyledElementBuilder.prototype.withKey_pspxar$;
  StyledElementBuilderImpl.prototype.withKey_s5hl0b$ = StyledElementBuilder.prototype.withKey_s5hl0b$;
  StyledElementBuilderImpl.prototype.node_3ecl1l$ = StyledElementBuilder.prototype.node_3ecl1l$;
  StyledElementBuilderImpl.prototype.node_rwypko$ = StyledElementBuilder.prototype.node_rwypko$;
  Object.defineProperty(StyledDOMBuilder.prototype, 'key', Object.getOwnPropertyDescriptor(RDOMBuilder.prototype, 'key'));
  Object.defineProperty(StyledDOMBuilder.prototype, 'ref', Object.getOwnPropertyDescriptor(RDOMBuilder.prototype, 'ref'));
  StyledDOMBuilder.prototype.get_defaultChecked_a2ovwx$ = RDOMBuilder.prototype.get_defaultChecked_a2ovwx$;
  StyledDOMBuilder.prototype.set_defaultChecked_47da7g$ = RDOMBuilder.prototype.set_defaultChecked_47da7g$;
  StyledDOMBuilder.prototype.get_value_sktobr$ = RDOMBuilder.prototype.get_value_sktobr$;
  StyledDOMBuilder.prototype.set_value_g9clh3$ = RDOMBuilder.prototype.set_value_g9clh3$;
  StyledDOMBuilder.prototype.get_values_sktobr$ = RDOMBuilder.prototype.get_values_sktobr$;
  StyledDOMBuilder.prototype.set_values_d8zj82$ = RDOMBuilder.prototype.set_values_d8zj82$;
  StyledDOMBuilder.prototype.child_52psg1$ = RDOMBuilder.prototype.child_52psg1$;
  StyledDOMBuilder.prototype.child_k3oess$ = RDOMBuilder.prototype.child_k3oess$;
  StyledDOMBuilder.prototype.child_4dvv5y$ = RDOMBuilder.prototype.child_4dvv5y$;
  StyledDOMBuilder.prototype.child_ssazr1$ = RDOMBuilder.prototype.child_ssazr1$;
  StyledDOMBuilder.prototype.childFunction_2656uf$ = RDOMBuilder.prototype.childFunction_2656uf$;
  StyledDOMBuilder.prototype.node_3ecl1l$$default = RDOMBuilder.prototype.node_3ecl1l$$default;
  StyledDOMBuilder.prototype.node_rwypko$$default = RDOMBuilder.prototype.node_rwypko$$default;
  StyledDOMBuilder.prototype.ref_5ij4lk$ = RDOMBuilder.prototype.ref_5ij4lk$;
  StyledDOMBuilder.prototype.setProp_4w9ihe$ = RDOMBuilder.prototype.setProp_4w9ihe$;
  StyledDOMBuilder.prototype.children_yllgzm$ = RDOMBuilder.prototype.children_yllgzm$;
  StyledDOMBuilder.prototype.children_48djri$ = RDOMBuilder.prototype.children_48djri$;
  StyledDOMBuilder.prototype.get_g0n3bx$ = RDOMBuilder.prototype.get_g0n3bx$;
  StyledDOMBuilder.prototype.invoke_eb8iu4$ = RDOMBuilder.prototype.invoke_eb8iu4$;
  StyledDOMBuilder.prototype.invoke_ory6b3$ = RDOMBuilder.prototype.invoke_ory6b3$;
  StyledDOMBuilder.prototype.invoke_csqs6z$ = RDOMBuilder.prototype.invoke_csqs6z$;
  StyledDOMBuilder.prototype.renderEach_ezdo97$ = RDOMBuilder.prototype.renderEach_ezdo97$;
  StyledDOMBuilder.prototype.renderEachIndexed_cfwqen$ = RDOMBuilder.prototype.renderEachIndexed_cfwqen$;
  StyledDOMBuilder.prototype.set_hpg2xa$ = RDOMBuilder.prototype.set_hpg2xa$;
  StyledDOMBuilder.prototype.unaryPlus_pdl1vz$ = RDOMBuilder.prototype.unaryPlus_pdl1vz$;
  StyledDOMBuilder.prototype.unaryPlus_84gpoi$ = RDOMBuilder.prototype.unaryPlus_84gpoi$;
  StyledDOMBuilder.prototype.withKey_pspxar$ = RDOMBuilder.prototype.withKey_pspxar$;
  StyledDOMBuilder.prototype.withKey_s5hl0b$ = RDOMBuilder.prototype.withKey_s5hl0b$;
  StyledDOMBuilder.prototype.node_3ecl1l$ = RDOMBuilder.prototype.node_3ecl1l$;
  StyledDOMBuilder.prototype.node_rwypko$ = RDOMBuilder.prototype.node_rwypko$;
  Object.defineProperty(StyledDOMBuilderImpl.prototype, 'type', Object.getOwnPropertyDescriptor(StyledDOMBuilder.prototype, 'type'));
  StyledDOMBuilderImpl.prototype.create = StyledDOMBuilder.prototype.create;
  Object.defineProperty(StyledDOMBuilderImpl.prototype, 'key', Object.getOwnPropertyDescriptor(StyledDOMBuilder.prototype, 'key'));
  Object.defineProperty(StyledDOMBuilderImpl.prototype, 'ref', Object.getOwnPropertyDescriptor(StyledDOMBuilder.prototype, 'ref'));
  StyledDOMBuilderImpl.prototype.get_defaultChecked_a2ovwx$ = StyledDOMBuilder.prototype.get_defaultChecked_a2ovwx$;
  StyledDOMBuilderImpl.prototype.set_defaultChecked_47da7g$ = StyledDOMBuilder.prototype.set_defaultChecked_47da7g$;
  StyledDOMBuilderImpl.prototype.get_value_sktobr$ = StyledDOMBuilder.prototype.get_value_sktobr$;
  StyledDOMBuilderImpl.prototype.set_value_g9clh3$ = StyledDOMBuilder.prototype.set_value_g9clh3$;
  StyledDOMBuilderImpl.prototype.get_values_sktobr$ = StyledDOMBuilder.prototype.get_values_sktobr$;
  StyledDOMBuilderImpl.prototype.set_values_d8zj82$ = StyledDOMBuilder.prototype.set_values_d8zj82$;
  StyledDOMBuilderImpl.prototype.child_52psg1$ = StyledDOMBuilder.prototype.child_52psg1$;
  StyledDOMBuilderImpl.prototype.child_k3oess$ = StyledDOMBuilder.prototype.child_k3oess$;
  StyledDOMBuilderImpl.prototype.child_4dvv5y$ = StyledDOMBuilder.prototype.child_4dvv5y$;
  StyledDOMBuilderImpl.prototype.child_ssazr1$ = StyledDOMBuilder.prototype.child_ssazr1$;
  StyledDOMBuilderImpl.prototype.childFunction_2656uf$ = StyledDOMBuilder.prototype.childFunction_2656uf$;
  StyledDOMBuilderImpl.prototype.node_3ecl1l$$default = StyledDOMBuilder.prototype.node_3ecl1l$$default;
  StyledDOMBuilderImpl.prototype.node_rwypko$$default = StyledDOMBuilder.prototype.node_rwypko$$default;
  StyledDOMBuilderImpl.prototype.ref_5ij4lk$ = StyledDOMBuilder.prototype.ref_5ij4lk$;
  StyledDOMBuilderImpl.prototype.setProp_4w9ihe$ = StyledDOMBuilder.prototype.setProp_4w9ihe$;
  StyledDOMBuilderImpl.prototype.children_yllgzm$ = StyledDOMBuilder.prototype.children_yllgzm$;
  StyledDOMBuilderImpl.prototype.children_48djri$ = StyledDOMBuilder.prototype.children_48djri$;
  StyledDOMBuilderImpl.prototype.get_g0n3bx$ = StyledDOMBuilder.prototype.get_g0n3bx$;
  StyledDOMBuilderImpl.prototype.invoke_eb8iu4$ = StyledDOMBuilder.prototype.invoke_eb8iu4$;
  StyledDOMBuilderImpl.prototype.invoke_ory6b3$ = StyledDOMBuilder.prototype.invoke_ory6b3$;
  StyledDOMBuilderImpl.prototype.invoke_csqs6z$ = StyledDOMBuilder.prototype.invoke_csqs6z$;
  StyledDOMBuilderImpl.prototype.renderEach_ezdo97$ = StyledDOMBuilder.prototype.renderEach_ezdo97$;
  StyledDOMBuilderImpl.prototype.renderEachIndexed_cfwqen$ = StyledDOMBuilder.prototype.renderEachIndexed_cfwqen$;
  StyledDOMBuilderImpl.prototype.set_hpg2xa$ = StyledDOMBuilder.prototype.set_hpg2xa$;
  StyledDOMBuilderImpl.prototype.unaryPlus_pdl1vz$ = StyledDOMBuilder.prototype.unaryPlus_pdl1vz$;
  StyledDOMBuilderImpl.prototype.unaryPlus_84gpoi$ = StyledDOMBuilder.prototype.unaryPlus_84gpoi$;
  StyledDOMBuilderImpl.prototype.withKey_pspxar$ = StyledDOMBuilder.prototype.withKey_pspxar$;
  StyledDOMBuilderImpl.prototype.withKey_s5hl0b$ = StyledDOMBuilder.prototype.withKey_s5hl0b$;
  StyledDOMBuilderImpl.prototype.node_3ecl1l$ = StyledDOMBuilder.prototype.node_3ecl1l$;
  StyledDOMBuilderImpl.prototype.node_rwypko$ = StyledDOMBuilder.prototype.node_rwypko$;
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-styled-js-legacy.js.map
