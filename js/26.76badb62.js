webpackJsonp([26],{148:function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=o(65),i=o.n(e),r=o(66),c=o.n(r),m=o(67),p=o.n(m),u=o(68),f=o.n(u),d=o(69),g=o.n(d),s=o(265),l=(o(459),o(267),function(n){function t(){return c()(this,t),f()(this,(t.__proto__||i()(t)).apply(this,arguments))}return g()(t,n),p()(t,[{key:"document",value:function(){return o(461)}}]),t}(s.a));t.default=l},459:function(n,t,o){"use strict";o(295),o(267)},461:function(n,t){n.exports="## Popconfirm 气泡确认框\n\n点击或移入元素，弹出气泡式的确认框。\n\n### 基本用法\n\n最简单的使用方式。\n\n::: demo\n```js\n  render() {\n    return (\n      <div>\n        <Popconfirm content={'确认删除吗'} onOk={() => {alert('confirmed')}} direction=\"top\">\n          <Button>Delete</Button>\n        </Popconfirm>\n      </div>\n    );\n  }\n```\n:::\n\n### 不同方位\n\n可自定义方位。\n\n::: demo 通过`direction`属性设置方位。\n```js\n  render() {\n    return (\n      <div>\n        <div style={{ marginBottom: 8 }}>\n        {\n          ['left', 'leftTop',  'leftBottom', 'right', 'rightTop', 'rightBottom'].map(item => {\n            return (\n              <Popconfirm key={item} content={'这是一个' + item + '的Popconfirm' } direction={item}>\n                <Button theme=\"info\" style={{marginRight: 10}}>{item}</Button>\n              </Popconfirm>\n            );\n          }) \n        }\n        </div>\n        {\n          ['top', 'topLeft',  'topRight', 'bottom', 'bottomLeft', 'bottomRight'].map(item => {\n            return (\n              <Popconfirm key={item} content={'这是一个' + item + '的Popconfirm' } direction={item}>\n                <Button theme=\"warning\" style={{marginRight: 10}}>{item}</Button>\n              </Popconfirm>\n            );\n          }) \n        }\n      </div>\n    );\n  }\n```\n:::\n\n### 不同触发方式\n\n可以设置触发的方式。\n\n::: demo 通过设置`trigger`属性设置触发方式，默认`click`。\n```js\n  render() {\n    return (\n      <div>\n        <Popconfirm trigger=\"hover\" content={'这是一个Popconfirm' } direction=\"top\">\n          <Button theme=\"info\">Hover</Button>\n        </Popconfirm>\n      </div>\n    );\n  }\n```\n:::\n\n\n### Attributes\n| 参数      | 说明          | 类型      | 可选值                           | 默认值  |\n|---------- |-------------- |---------- |--------------------------------  |-------- |\n| content | 需要展示的内容 | string/element | — | '' |\n| direction | 展示方位 | string | topLeft, top, topRight... | bottomRight |\n| trigger | 触发方式 | string | hover/click | click |\n| okText | 确认文案 | string | - | 确认 |\n| cancelText | 取消文案 | string | - | 取消 |\n\n\n### Events\n| 事件名称 | 说明 | 回调参数 |\n|---------- |-------- |---------- |\n| onOk | 点击确认时候触发的事件 | — |\n| onCancel | 点击取消时候触发的事件 | — |"}});