import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'MarsIcon',
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
      "class": "icon icon-tabler icon-tabler-mars"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "10",
        "cy": "14",
        "r": "5"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "19",
        "y1": "5",
        "x2": "13.6",
        "y2": "10.4"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "19",
        "y1": "5",
        "x2": "14",
        "y2": "5"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "19",
        "y1": "5",
        "x2": "19",
        "y2": "10"
      }
    }), " "]);
  }

};