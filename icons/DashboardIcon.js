import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'DashboardIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        "stroke-width": "2",
        stroke: "currentColor",
        fill: "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "icon icon-tabler icon-tabler-dashboard"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "12",
        cy: "13",
        r: "2"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "13.45",
        y1: "11.55",
        x2: "15.5",
        y2: "9.5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M6.4 20a9 9 0 1 1 11.2 0Z"
      }
    }), " "]);
  }
};