import { c as create_ssr_component, d as createEventDispatcher, f as add_attribute, v as validate_component, e as escape, h as each, i as null_to_empty } from "../../chunks/ssr.js";
const Thumb_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '.thumb.svelte-8w8x88{position:absolute;top:50%;width:0;height:0}.thumb-content.svelte-8w8x88{position:relative;width:fit-content;height:fit-content;transform:translate(-50%, -50%)}.thumb-content.svelte-8w8x88::before{content:"";position:absolute;width:200%;height:200%;transform:translate(-25%, -25%) scale(0);border-radius:100vh;background:var(--thumb-bg, #5784fd);opacity:30%;transition:transform 100ms ease-in-out}.thumb-content.active.svelte-8w8x88::before{transform:translate(-25%, -25%) scale(1)}',
  map: null
};
const Thumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { pos } = $$props;
  if ($$props.pos === void 0 && $$bindings.pos && pos !== void 0)
    $$bindings.pos(pos);
  $$result.css.add(css$3);
  return `<div class="thumb svelte-8w8x88"${add_attribute("style", `left: ${pos * 100}%;`, 0)}><div class="${["thumb-content svelte-8w8x88", ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div> </div>`;
});
const Slider_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "input.svelte-1q9yxz9{display:none}.track.svelte-1q9yxz9{margin:16px 8px;position:relative;height:4px;width:calc(100% - 16px);border-radius:100vh;background:var(--track-bg, #ebebeb)}.progress.svelte-1q9yxz9{position:absolute;left:0;right:0;top:0;bottom:0;border-radius:100vh;background:var(--progress-bg, #8abdff)}.thumb.svelte-1q9yxz9{width:16px;height:16px;border-radius:100vh;background:var(--thumb-bg, #5784fd)}",
  map: null
};
function checkPos(pos) {
  return [Math.min(...pos), Math.max(...pos)];
}
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let progress;
  const dispatch = createEventDispatcher();
  let { name = [] } = $$props;
  let { range = false } = $$props;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { step = 1 } = $$props;
  let { value = [min, max] } = $$props;
  let pos;
  let active = false;
  let { order = false } = $$props;
  function setValue(pos2) {
    const offset = min % step;
    const width = max - min;
    value = pos2.map((v) => min + v * width).map((v) => Math.round((v - offset) / step) * step + offset);
    dispatch("input", value);
  }
  function setPos(value2) {
    pos = value2.map((v) => Math.min(Math.max(v, min), max)).map((v) => (v - min) / (max - min));
  }
  function clamp() {
    setPos(value);
    setValue(pos);
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.range === void 0 && $$bindings.range && range !== void 0)
    $$bindings.range(range);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.order === void 0 && $$bindings.order && order !== void 0)
    $$bindings.order(order);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (range && order && active)
        pos = checkPos(pos);
    }
    {
      setPos(value);
    }
    {
      clamp();
    }
    progress = `
    left: ${range ? Math.min(pos[0], pos[1]) * 100 : 0}%;
    right: ${100 - Math.max(pos[0], range ? pos[1] : pos[0]) * 100}%;
  `;
    $$rendered = `<input type="number"${add_attribute("value", value[0], 0)}${add_attribute("name", name[0], 0)} class="svelte-1q9yxz9"> ${range ? `<input type="number"${add_attribute("value", value[1], 0)}${add_attribute("name", name[1], 0)} class="svelte-1q9yxz9">` : ``} <div class="track svelte-1q9yxz9"><div class="progress svelte-1q9yxz9"${add_attribute("style", progress, 0)}></div> ${validate_component(Thumb, "Thumb").$$render(
      $$result,
      { pos: pos[0] },
      {
        pos: ($$value) => {
          pos[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.left ? slots.left({}) : ` ${slots.default ? slots.default({}) : ` <div class="thumb svelte-1q9yxz9"></div> `} `}`;
        }
      }
    )} ${range ? `${validate_component(Thumb, "Thumb").$$render(
      $$result,
      { pos: pos[1] },
      {
        pos: ($$value) => {
          pos[1] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.right ? slots.right({}) : ` ${slots.default ? slots.default({}) : ` <div class="thumb svelte-1q9yxz9"></div> `} `}`;
        }
      }
    )}` : ``} </div>`;
  } while (!$$settled);
  return $$rendered;
});
const box_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".disp.svelte-9bf2ao{display:none}.common.svelte-9bf2ao{display:flex;justify-content:center;align-items:center;width:auto;height:auto;border:1px;border-style:solid;min-width:20px;min-height:20px}.min.svelte-9bf2ao{min-width:50px;min-height:50px}.medium.svelte-9bf2ao{min-width:30px;min-height:30px}.huge.svelte-9bf2ao{min-width:10px;min-height:10px}.on.svelte-9bf2ao{background-color:#ff774d;border-color:red;color:#1c1c1c}.off.svelte-9bf2ao{background-color:#2e2e2e;border-color:black;color:#858585}@media(max-width: 600px){.common.svelte-9bf2ao{display:flex;justify-content:center;align-items:center;width:auto;height:auto;border:1px;border-style:solid;min-width:20px;min-height:20px}.min.svelte-9bf2ao{min-width:30px;min-height:30px}.medium.svelte-9bf2ao{min-width:30px;min-height:30px}}",
  map: null
};
const Box = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { row } = $$props;
  let { col } = $$props;
  let { arr } = $$props;
  let { view } = $$props;
  createEventDispatcher();
  if ($$props.row === void 0 && $$bindings.row && row !== void 0)
    $$bindings.row(row);
  if ($$props.col === void 0 && $$bindings.col && col !== void 0)
    $$bindings.col(col);
  if ($$props.arr === void 0 && $$bindings.arr && arr !== void 0)
    $$bindings.arr(arr);
  if ($$props.view === void 0 && $$bindings.view && view !== void 0)
    $$bindings.view(view);
  $$result.css.add(css$1);
  return `   <div class="${[
    "common svelte-9bf2ao",
    (arr.length <= 12 ? "min" : "") + " " + (arr.length < 20 && arr.length > 12 ? "medium" : "") + " " + (arr.length > 30 ? "huge" : "") + " " + (arr[row][col].status ? "on" : "") + " " + (!arr[row][col].status ? "off" : "")
  ].join(" ").trim()}"><span class="${["svelte-9bf2ao", !view ? "disp" : ""].join(" ").trim()}">${escape(arr[row][col].count)}</span> </div>`;
});
const Icon = "/_app/immutable/assets/gol.31db2d1f.svg";
const HideIcon = "/_app/immutable/assets/hide.13a35094.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.boxes.svelte-1bvmkad{padding-top:10px;display:flex;justify-content:center;height:100vh;max-width:100%;max-height:90vh;overflow:hidden}.navbar.svelte-1bvmkad{font-family:"Fira Sans","Overpass","Arial";background-color:#353535;overflow:hidden}.slide.svelte-1bvmkad{width:200px;padding-top:10px}.navright.svelte-1bvmkad{display:flex;justify-content:flex-end;float:right}.navleft.svelte-1bvmkad{display:flex;justify-content:flex-start;float:left;height:7vh}#name.svelte-1bvmkad{overflow:hidden;margin:0;padding-top:12px;padding-left:0px}.obtn.svelte-1bvmkad:hover{box-shadow:5px 5px 30px -10px, -5px -5px 30px -10px}.gbtn.svelte-1bvmkad:hover{box-shadow:5px 5px 30px -10px black, -5px -5px 30px -10px black}body{background-color:#1e1e1e;color:#f2f2f2;font-family:"Overpass";box-sizing:border-box;margin:0;padding:0}.obtn.svelte-1bvmkad{font-size:large;grid-area:btn;height:30px;width:100px;margin:10px;background-color:#ff774d;color:#1c1c1c;border-radius:5px;border:0px}.gbtn.svelte-1bvmkad{font-size:large;height:30px;width:100px;margin:10px;background-color:#767676;color:#ffffff;border-radius:5px;border:0px}:root{--track-bg:#292929;--progress-bg:#767676;--thumb-bg:#ff774d}@media(max-width:600px){.navright.svelte-1bvmkad{display:flex;flex-wrap:wrap;justify-content:center}.boxes.svelte-1bvmkad{padding-top:10px;display:flex;justify-content:center;height:100vh;max-width:100%;max-height:90vh;overflow:hidden}.navbar.svelte-1bvmkad{display:flex;justify-content:center;flex-wrap:wrap;font-family:"Fira Sans","Overpass","Arial";background-color:#353535}.slide.svelte-1bvmkad{width:100px;padding-top:10px;padding-left:20px}#name.svelte-1bvmkad{overflow:hidden;margin:0;padding-top:12px;padding-left:0px}.obtn.svelte-1bvmkad{font-size:smaller;grid-area:btn;height:30px;width:60px;margin:10px;background-color:#ff774d;color:#1c1c1c;border-radius:5px;border:0px}.gbtn.svelte-1bvmkad{font-size:smaller;height:30px;width:60px;margin:10px;background-color:#767676;color:#ffffff;border-radius:5px;border:0px}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let no;
  let val = [250, 1e3];
  let val2 = [10, 30];
  let view = false;
  let arr = Array.from({ length: no }, () => Array.from({ length: no }, () => ({ count: 0, status: false })));
  const update = () => {
    arr = arr;
  };
  const reconstructarr = () => {
    let arr2;
    arr2 = Array.from({ length: no }, () => Array.from({ length: no }, () => ({ count: 0, status: false })));
    arr = arr2;
    update();
  };
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    no = val2[0];
    {
      reconstructarr(val2[0]);
    }
    $$rendered = `<link href="https://fonts.googleapis.com/css?family=Overpass" rel="stylesheet"> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100&display=swap" rel="stylesheet"> <nav class="navbar svelte-1bvmkad"><div class="navleft svelte-1bvmkad" data-svelte-h="svelte-f9ca3x"><img alt="img"${add_attribute("src", Icon, 0)} width="50" height="50" style="padding-right: 5px; padding-top: 20px padding-left: 20px"> <h1 align="left" id="name" class="svelte-1bvmkad">Conway&#39;s <span style="color: #858585">Game of Life</span></h1></div> <div class="navright svelte-1bvmkad"><div class="slide svelte-1bvmkad">${validate_component(Slider, "Slider").$$render(
      $$result,
      { max: "30", step: "1", value: val2 },
      {
        value: ($$value) => {
          val2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <span style="padding-top: 20px; padding-right: 30px">${escape(val2[0])}x${escape(val2[0])}</span> <div class="slide svelte-1bvmkad">${validate_component(Slider, "Slider").$$render(
      $$result,
      { max: "1000", step: "10", value: val },
      {
        value: ($$value) => {
          val = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <span style="padding-top: 20px; padding-right: 30px">${escape(val[0])}ms</span> <button class="${escape(null_to_empty("obtn"), true) + " svelte-1bvmkad"}">Start</button> <button class="${escape(null_to_empty("gbtn"), true) + " svelte-1bvmkad"}">Stop</button> <button class="gbtn svelte-1bvmkad" data-svelte-h="svelte-1cv9wyo">Clear</button> <button class="gbtn svelte-1bvmkad"><img${add_attribute("src", HideIcon, 0)} alt="show/hide" id="showhide" height="30px" width="30px"></button></div></nav> <div class="boxes svelte-1bvmkad">${each({ length: no }, (_, i) => {
      return `<div style="display:inline-block ">${each({ length: no }, (_2, j) => {
        return `${validate_component(Box, "Box").$$render($$result, { row: i, col: j, arr, view }, {}, {})}`;
      })} </div>`;
    })}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
