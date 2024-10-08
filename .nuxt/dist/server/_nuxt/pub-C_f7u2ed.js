import { _ as _sfc_main$1 } from "./index-CXkHQ6iP.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "tailwind-merge";
import "defu";
import "./VCard-O0Mey1lR.js";
import "./VBtn-pAGqAKGP.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
import "@vueuse/core";
import "klona";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PubComp = _sfc_main$1;
  _push(ssrRenderComponent(_component_PubComp, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pub.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pub = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-da2c9f17"]]);
export {
  pub as default
};
//# sourceMappingURL=pub-C_f7u2ed.js.map
