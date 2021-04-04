import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'DragDropIcon',
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
      "class": "icon icon-tabler icon-tabler-drag-drop"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M19 11v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M13 13l9 3l-4 2l-2 4l-3 -9"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "3",
        "y1": "3",
        "x2": "3",
        "y2": "3.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "7",
        "y1": "3",
        "x2": "7",
        "y2": "3.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "11",
        "y1": "3",
        "x2": "11",
        "y2": "3.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "15",
        "y1": "3",
        "x2": "15",
        "y2": "3.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "3",
        "y1": "7",
        "x2": "3",
        "y2": "7.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "3",
        "y1": "11",
        "x2": "3",
        "y2": "11.01"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "3",
        "y1": "15",
        "x2": "3",
        "y2": "15.01"
      }
    }), " "]);
  }

};