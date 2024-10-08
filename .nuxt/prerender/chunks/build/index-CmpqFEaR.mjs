import { capitalize, computed, h, useSSRContext, defineComponent, withCtx, createVNode, resolveComponent, mergeProps, openBlock, createBlock, createTextVNode } from 'file:///Users/qiurui/Desktop/SF/personsal-web/RyanQ96.github.io/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'file:///Users/qiurui/Desktop/SF/personsal-web/RyanQ96.github.io/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { Y as breakpoints, p as propsFactory, m as makeComponentProps, j as makeTagProps, l as genericComponent, _ as _export_sfc } from './server.mjs';
import { c as VCard, d as VCardTitle, e as VCardText, f as VCardSubtitle } from './VCard-D8XDrysE.mjs';
import { V as VBtn } from './VBtn-DQkNBCQR.mjs';

const breakpointProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false
    };
    return props;
  }, {});
})();
const offsetProps = (() => {
  return breakpoints.reduce((props, val) => {
    const offsetKey = "offset" + capitalize(val);
    props[offsetKey] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();
const orderProps = (() => {
  return breakpoints.reduce((props, val) => {
    const orderKey = "order" + capitalize(val);
    props[orderKey] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();
const propMap$1 = {
  col: Object.keys(breakpointProps),
  offset: Object.keys(offsetProps),
  order: Object.keys(orderProps)
};
function breakpointClass$1(type, prop, val) {
  let className = type;
  if (val == null || val === false) {
    return void 0;
  }
  if (prop) {
    const breakpoint = prop.replace(type, "");
    className += `-${breakpoint}`;
  }
  if (type === "col") {
    className = "v-" + className;
  }
  if (type === "col" && (val === "" || val === true)) {
    return className.toLowerCase();
  }
  className += `-${val}`;
  return className.toLowerCase();
}
const ALIGN_SELF_VALUES = ["auto", "start", "end", "center", "baseline", "stretch"];
const makeVColProps = propsFactory({
  cols: {
    type: [Boolean, String, Number],
    default: false
  },
  ...breakpointProps,
  offset: {
    type: [String, Number],
    default: null
  },
  ...offsetProps,
  order: {
    type: [String, Number],
    default: null
  },
  ...orderProps,
  alignSelf: {
    type: String,
    default: null,
    validator: (str) => ALIGN_SELF_VALUES.includes(str)
  },
  ...makeComponentProps(),
  ...makeTagProps()
}, "VCol");
const VCol = genericComponent()({
  name: "VCol",
  props: makeVColProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const classes = computed(() => {
      const classList = [];
      let type;
      for (type in propMap$1) {
        propMap$1[type].forEach((prop) => {
          const value = props[prop];
          const className = breakpointClass$1(type, prop, value);
          if (className)
            classList.push(className);
        });
      }
      const hasColClasses = classList.some((className) => className.startsWith("v-col-"));
      classList.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !hasColClasses || !props.cols,
        [`v-col-${props.cols}`]: props.cols,
        [`offset-${props.offset}`]: props.offset,
        [`order-${props.order}`]: props.order,
        [`align-self-${props.alignSelf}`]: props.alignSelf
      });
      return classList;
    });
    return () => {
      var _a;
      return h(props.tag, {
        class: [classes.value, props.class],
        style: props.style
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
});
const ALIGNMENT = ["start", "end", "center"];
const SPACE = ["space-between", "space-around", "space-evenly"];
function makeRowProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    const prefixKey = prefix + capitalize(val);
    props[prefixKey] = def();
    return props;
  }, {});
}
const ALIGN_VALUES = [...ALIGNMENT, "baseline", "stretch"];
const alignValidator = (str) => ALIGN_VALUES.includes(str);
const alignProps = makeRowProps("align", () => ({
  type: String,
  default: null,
  validator: alignValidator
}));
const JUSTIFY_VALUES = [...ALIGNMENT, ...SPACE];
const justifyValidator = (str) => JUSTIFY_VALUES.includes(str);
const justifyProps = makeRowProps("justify", () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));
const ALIGN_CONTENT_VALUES = [...ALIGNMENT, ...SPACE, "stretch"];
const alignContentValidator = (str) => ALIGN_CONTENT_VALUES.includes(str);
const alignContentProps = makeRowProps("alignContent", () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function breakpointClass(type, prop, val) {
  let className = classMap[type];
  if (val == null) {
    return void 0;
  }
  if (prop) {
    const breakpoint = prop.replace(type, "");
    className += `-${breakpoint}`;
  }
  className += `-${val}`;
  return className.toLowerCase();
}
const makeVRowProps = propsFactory({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: alignValidator
  },
  ...alignProps,
  justify: {
    type: String,
    default: null,
    validator: justifyValidator
  },
  ...justifyProps,
  alignContent: {
    type: String,
    default: null,
    validator: alignContentValidator
  },
  ...alignContentProps,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VRow");
const VRow = genericComponent()({
  name: "VRow",
  props: makeVRowProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const classes = computed(() => {
      const classList = [];
      let type;
      for (type in propMap) {
        propMap[type].forEach((prop) => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className)
            classList.push(className);
        });
      }
      classList.push({
        "v-row--no-gutters": props.noGutters,
        "v-row--dense": props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      return classList;
    });
    return () => {
      var _a;
      return h(props.tag, {
        class: ["v-row", classes.value, props.class],
        style: props.style
      }, (_a = slots.default) == null ? void 0 : _a.call(slots));
    };
  }
});
const _imports_0 = publicAssetsURL("/projects/chatflare.png");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_space = resolveComponent("v-space");
  _push(ssrRenderComponent(VCol, mergeProps({
    cols: "12",
    md: "5"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCard, {
          class: "mx-auto",
          variant: "flat"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="project-card-img"${ssrRenderAttr("src", _imports_0)} data-v-a5bcac76${_scopeId2}>`);
              _push3(ssrRenderComponent(VCardTitle, { style: { "font-weight": "bold" } }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Chatflare <a href="https://github.com/RyanQ96/ChatFlare/tree/main" data-v-a5bcac76${_scopeId3}>`);
                    _push4(ssrRenderComponent(VBtn, {
                      style: { "width": "0px", "transform": "translate(-50%, -5%)" },
                      class: "ma-2",
                      color: "red-lighten-2",
                      variant: "text"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" data-v-a5bcac76${_scopeId4}><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z" data-v-a5bcac76${_scopeId4}></path></svg>`);
                        } else {
                          return [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "20",
                              height: "20",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                fill: "currentColor",
                                d: "M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"
                              })
                            ]))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</a>`);
                  } else {
                    return [
                      createTextVNode(" Chatflare "),
                      createVNode("a", { href: "https://github.com/RyanQ96/ChatFlare/tree/main" }, [
                        createVNode(VBtn, {
                          style: { "width": "0px", "transform": "translate(-50%, -5%)" },
                          class: "ma-2",
                          color: "red-lighten-2",
                          variant: "text"
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "20",
                              height: "20",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                fill: "currentColor",
                                d: "M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"
                              })
                            ]))
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCardText, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` ChatFlare is a Lightning framework for building and prototying Large Language Models (LLM) applications with ease and efficiency. Inspired by the powerful usage of Langchain but with much less abstraction, ChatFlare aims to provide a streamlined and modular approach to working with LLM chains. `);
                  } else {
                    return [
                      createTextVNode(" ChatFlare is a Lightning framework for building and prototying Large Language Models (LLM) applications with ease and efficiency. Inspired by the powerful usage of Langchain but with much less abstraction, ChatFlare aims to provide a streamlined and modular approach to working with LLM chains. ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_space, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCardSubtitle, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span style="${ssrRenderStyle({ "font-size": "1rem" })}" data-v-a5bcac76${_scopeId3}>May 10, 2024</span>`);
                  } else {
                    return [
                      createVNode("span", { style: { "font-size": "1rem" } }, "May 10, 2024")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode("img", {
                  class: "project-card-img",
                  src: _imports_0
                }),
                createVNode(VCardTitle, { style: { "font-weight": "bold" } }, {
                  default: withCtx(() => [
                    createTextVNode(" Chatflare "),
                    createVNode("a", { href: "https://github.com/RyanQ96/ChatFlare/tree/main" }, [
                      createVNode(VBtn, {
                        style: { "width": "0px", "transform": "translate(-50%, -5%)" },
                        class: "ma-2",
                        color: "red-lighten-2",
                        variant: "text"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", {
                              fill: "currentColor",
                              d: "M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"
                            })
                          ]))
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    createTextVNode(" ChatFlare is a Lightning framework for building and prototying Large Language Models (LLM) applications with ease and efficiency. Inspired by the powerful usage of Langchain but with much less abstraction, ChatFlare aims to provide a streamlined and modular approach to working with LLM chains. ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_space),
                createVNode(VCardSubtitle, null, {
                  default: withCtx(() => [
                    createVNode("span", { style: { "font-size": "1rem" } }, "May 10, 2024")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCard, {
            class: "mx-auto",
            variant: "flat"
          }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "project-card-img",
                src: _imports_0
              }),
              createVNode(VCardTitle, { style: { "font-weight": "bold" } }, {
                default: withCtx(() => [
                  createTextVNode(" Chatflare "),
                  createVNode("a", { href: "https://github.com/RyanQ96/ChatFlare/tree/main" }, [
                    createVNode(VBtn, {
                      style: { "width": "0px", "transform": "translate(-50%, -5%)" },
                      class: "ma-2",
                      color: "red-lighten-2",
                      variant: "text"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "20",
                          height: "20",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            fill: "currentColor",
                            d: "M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"
                          })
                        ]))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createTextVNode(" ChatFlare is a Lightning framework for building and prototying Large Language Models (LLM) applications with ease and efficiency. Inspired by the powerful usage of Langchain but with much less abstraction, ChatFlare aims to provide a streamlined and modular approach to working with LLM chains. ")
                ]),
                _: 1
              }),
              createVNode(_component_v_space),
              createVNode(VCardSubtitle, null, {
                default: withCtx(() => [
                  createVNode("span", { style: { "font-size": "1rem" } }, "May 10, 2024")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects/ProjectChatFlare.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProjectChatFlare = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a5bcac76"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c12da78a><div class="project-container" data-v-c12da78a><h1 class="section-title" data-v-c12da78a>Open-Source Projects</h1>`);
      _push(ssrRenderComponent(VRow, { style: { "margin-top": "20px" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ProjectChatFlare, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ProjectChatFlare)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProjectComp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c12da78a"]]);

export { ProjectComp as P };
//# sourceMappingURL=index-CmpqFEaR.mjs.map
