import { c as create_ssr_component } from "../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@font-face{font-family:'Gelasio';font-style:normal;font-weight:400;src:local('Gelasio Regular'), local('Gelasio-Regular'),\n			url(https://fonts.gstatic.com/s/gelasio/v1/cIf9MaFfvUQxTTqS9C6hYQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,\n			U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}h1.svelte-uguon7{font-family:Gelasio}p.svelte-uguon7{font-family:Gelasio}div.svelte-uguon7{background-color:#f3efe0}.header.svelte-uguon7{display:flex;justify-content:flex-end;padding:36px}.wrapper.svelte-uguon7{height:1024px;padding:72px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="wrapper svelte-uguon7" data-svelte-h="svelte-12mtf8c"><div class="header svelte-uguon7"><h1 class="svelte-uguon7">Hi, I&#39;m Henry</h1></div> <div class="svelte-uguon7"><p class="svelte-uguon7">I&#39;m a software engineer working in the political tech space.</p> <p class="svelte-uguon7">I principally work with Typescript, React, GraphQL, Node, and PostgreSQL, and I&#39;m currently
			learning Rust.</p> <p class="svelte-uguon7">I built this minimal site to play with Svelte and host a few projects (coming soon!)</p></div> </div>`;
});
export {
  Page as default
};
