import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'TreesIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,

  render(h, ctx) {
    const size = parseInt(ctx.props.size) + 'px';
    const attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "stroke-width": "2",
        "stroke": "currentColor",
        "fill": "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "icon icon-tabler icon-tabler-trees"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M16 5l3 3l-2 1l4 4l-3 1l4 4h-9"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "15",
        "y1": "21",
        "x2": "15",
        "y2": "18"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8 13l-2 -2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8 12l2 -2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8 21v-13"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M5.824 15.995a3 3 0 0 1 -2.743 -3.69a2.998 2.998 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a2.997 2.997 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h.001h-4z"
      }
    }), " "]);
  }

};