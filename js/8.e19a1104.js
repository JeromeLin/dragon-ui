webpackJsonp([8],{159:function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(65),r=a.n(s),i=a(66),t=a.n(i),o=a(67),g=a.n(o),d=a(68),u=a.n(d),l=a(69),T=a.n(l),c=a(265),m=(a(487),a(270),function(n){function e(){return t()(this,e),u()(this,(e.__proto__||r()(e)).apply(this,arguments))}return T()(e,n),g()(e,[{key:"document",value:function(){return a(489)}}]),e}(c.a));e.default=m},487:function(n,e,a){"use strict";var s=a(488);a.n(s)},488:function(n,e){},489:function(n,e){n.exports='## Tag 标签\n用于标记和分类。\n\n### 基础用法\n\n五种主题。\n\n:::demo Button 组件提供5种主题，由`theme`属性来定义，默认为`default`。\n\n```js\n  render() {\n    return (\n      <div>\n        <Tag>default</Tag>\n        <Tag theme="info">info</Tag>\n        <Tag theme="success">success</Tag>\n        <Tag theme="warning">warning</Tag>\n        <Tag theme="error">error</Tag>\n      </div>\n    )\n  }\n```\n:::\n\n### 禁用状态\n\n可以设置禁用状态。\n\n:::demo 可以使用`disabled`属性来定义标签是否禁用。\n\n```js\n  render() {\n    return (\n      <div>\n        <Tag disabled>default</Tag>\n        <Tag disabled theme="info">info</Tag>\n        <Tag disabled theme="success">success</Tag>\n        <Tag disabled theme="warning">warning</Tag>\n        <Tag disabled theme="error">error</Tag>\n      </div>\n    )\n  }\n```\n:::\n\n### 圆角标签\n\n可以设置圆角或椭圆角的标签\n\n:::demo 使用`radius`，`round`属性设置圆角、椭圆角\n\n```js\n  render() {\n    return (\n      <div>\n        <div className="multi-rows">\n          <Tag radius>default</Tag>\n          <Tag radius theme="info">info</Tag>\n          <Tag radius theme="success">success</Tag>\n          <Tag radius theme="warning">warning</Tag>\n          <Tag radius theme="error">error</Tag>\n        </div>\n        <div className="multi-rows">\n          <Tag round>default</Tag>\n          <Tag round theme="info">info</Tag>\n          <Tag round theme="success">success</Tag>\n          <Tag round theme="warning">warning</Tag>\n          <Tag round theme="error">error</Tag>\n        </div>\n      </div>\n    )\n  }\n```\n:::\n\n### 不同尺寸\n\n除了默认尺寸外，可以额外设置四种尺寸。\n\n:::demo 额外的尺寸：`xl`、`lg`、`sm`，`xs`，通过设置`size`属性来配置它们。\n\n```js\n  render() {\n    return (\n      <div>\n        <Tag size=\'xl\' theme="info">xl尺寸</Tag>\n        <Tag size=\'lg\' theme="info">lg尺寸</Tag>\n        <Tag theme="info">默认尺寸</Tag>\n        <Tag size=\'sm\' theme="info">sm尺寸</Tag>\n        <Tag size=\'xs\' theme="info">xs尺寸</Tag>\n      </div>\n    )\n  }\n```\n:::\n\n### 可关闭标签\n\n支持标签可关闭。\n\n:::demo 可以通过设置`onClose`添加关闭回调。\n\n```js\n  constructor(props) {\n    super(props);\n    this.state = {\n      visible: true\n    };\n  }\n  handleClose() {\n    this.setState({\n      visible: false\n    });\n  }\n  render() {\n    const style = {\n      display: this.state.visible ? \'block\' : \'none\'\n    }\n    return (\n      <div style={style}>\n        <Tag theme="info" onClose={() => this.handleClose()}>可关闭标签</Tag>\n      </div>\n    );\n  }\n```\n:::\n\n\n### Attributes\n| 参数      | 说明    | 类型      | 可选值       | 默认值   |\n|---------- |-------- |---------- |-------------  |-------- |\n| size     | 尺寸   | string  |   xl,lg,sm,xs            |    —     |\n| theme     | 主题   | string    |   info,success,warning,error,default |     default   |\n| radius     | 是否圆角   | boolean    | — | false   |\n| round     | 是否椭圆角   | boolean    | — | false   |\n| circle     | 是否圆形   | boolean    | — | false   |\n| disabled  | 是否禁用    | boolean   | true, false   | false   |\n\n### Events\n| 事件名称 | 说明 | 回调参数 |\n|---------- |-------- |---------- |\n| onClose | 点击关闭触发的事件 | — |'}});