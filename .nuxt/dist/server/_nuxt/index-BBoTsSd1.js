import { defineComponent, computed, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext, unref } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { V as VCard } from "./VCard-D8XDrysE.js";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BlogComp",
  __ssrInlineRender: true,
  props: {
    title: String,
    id: String,
    date: String,
    tags: Array,
    abstract: String,
    authors: String
  },
  setup(__props) {
    const props = __props;
    computed(() => {
      var _a;
      return (_a = props.authors) == null ? void 0 : _a.replace("Rui Qiu", "<a style='font-weight: bold; color:black'>Rui Qiu</a>");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({
        color: "transparent",
        class: "card-container",
        href: `/blogs/${props.id}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pub-card" data-v-b7af2e13${_scopeId}><div class="pub-detail" data-v-b7af2e13${_scopeId}><div data-v-b7af2e13${_scopeId}><h2 data-v-b7af2e13${_scopeId}><a class="title"${ssrRenderAttr("href", `/blogs/${props.id}`)} data-v-b7af2e13${_scopeId}>${ssrInterpolate(props.title)}</a></h2><div class="limited-content" data-v-b7af2e13${_scopeId}><p data-v-b7af2e13${_scopeId}>${ssrInterpolate(props.abstract)}</p></div><div style="${ssrRenderStyle({ "display": "flex" })}" data-v-b7af2e13${_scopeId}><div class="authors" data-v-b7af2e13${_scopeId}>Date: ${ssrInterpolate(props.date)} | </div>   <div class="authors" data-v-b7af2e13${_scopeId}>Author: ${ssrInterpolate(props.authors)}</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "pub-card" }, [
                createVNode("div", { class: "pub-detail" }, [
                  createVNode("div", null, [
                    createVNode("h2", null, [
                      createVNode("a", {
                        class: "title",
                        href: `/blogs/${props.id}`
                      }, toDisplayString(props.title), 9, ["href"])
                    ]),
                    createVNode("div", { class: "limited-content" }, [
                      createVNode("p", null, toDisplayString(props.abstract), 1)
                    ]),
                    createVNode("div", { style: { "display": "flex" } }, [
                      createVNode("div", { class: "authors" }, "Date: " + toDisplayString(props.date) + " | ", 1),
                      createTextVNode("   "),
                      createVNode("div", { class: "authors" }, "Author: " + toDisplayString(props.authors), 1)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogComp/BlogComp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BlogComp = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b7af2e13"]]);
const BlogData = [
  {
    id: "fisher",
    title: "Fisher Information and its Application in AI",
    date: "2022-07-01",
    authors: "Rui Qiu",
    tags: [
      "Fisher Information",
      "AI",
      "Machine Learning",
      "Statistics"
    ],
    importLink: "../public/assets/Blogs/first/fisher.html?raw",
    abstract: "This blog introduces Fisher Information and its role in model training and transfer learning. It explains how Fisher Information measures the sensitivity of a model’s likelihood to changes in its parameters, helping improve the robustness of estimates in generative modeling. The post highlights its relationship to the Hessian matrix, showing that Fisher Information can replace the Hessian in optimization tasks like ADAM, improving efficiency. Additionally, it previews how Fisher Information relates to KL-divergence and can be used to address challenges like catastrophic forgetting in transfer learning by limiting parameter updates in distribution space rather than Euclidean space."
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const blogData = BlogData;
    console.log(blogData);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><h1 class="section-title">Blogs</h1><div class="blog-list"><!--[-->`);
      ssrRenderList(unref(blogData), (item) => {
        _push(ssrRenderComponent(BlogComp, {
          key: item.id,
          id: item.id,
          title: item.title,
          authors: item.authors,
          date: item.date,
          abstract: item.abstract,
          tags: item.tags
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogComp/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=index-BBoTsSd1.js.map
