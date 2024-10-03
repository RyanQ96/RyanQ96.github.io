import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "intro" }, _attrs))} data-v-d728e2cc><h1 data-v-d728e2cc>👋 Welcome to Rui&#39;Log</h1><br data-v-d728e2cc><span class="intro-content" data-v-d728e2cc> Hi, this is Rui. I&#39;m a Ph. D. student in Ohio State University. My research interests are broad range of Visual Analytics Science and Technologies (VAST). I&#39;m documenting my learning notes and open source projects here in this blog. Besides, I&#39;m a huge fan of VueJS, Vite and Observablehq. </span></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cv.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cv = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d728e2cc"]]);
export {
  cv as default
};
//# sourceMappingURL=cv-DgMNfoRn.js.map
