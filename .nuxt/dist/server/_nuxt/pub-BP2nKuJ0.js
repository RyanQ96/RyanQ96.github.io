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
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "intro" }, _attrs))} data-v-32f83e9b><h1 data-v-32f83e9b>👋 Welcome to Rui&#39;Log</h1><br data-v-32f83e9b><span class="intro-content" data-v-32f83e9b> Hi, this is Rui. I&#39;m a Ph. D. student in Ohio State University. My research interests are broad range of Visual Analytics Science and Technologies (VAST). I&#39;m documenting my learning notes and open source projects here in this blog. Besides, I&#39;m a huge fan of VueJS, Vite and Observablehq. </span></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pub.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pub = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-32f83e9b"]]);
export {
  pub as default
};
//# sourceMappingURL=pub-BP2nKuJ0.js.map
