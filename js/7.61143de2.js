webpackJsonp([7],{160:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i(65),o=i.n(e),r=i(66),l=i.n(r),u=i(67),p=i.n(u),m=i(68),s=i.n(m),c=i(69),f=i.n(c),d=i(265),g=(i(490),function(t){function n(){return l()(this,n),s()(this,(n.__proto__||o()(n)).apply(this,arguments))}return f()(n,t),p()(n,[{key:"document",value:function(){return i(492)}}]),n}(d.a));n.default=g},490:function(t,n,i){"use strict";var e=i(491);i.n(e)},491:function(t,n){},492:function(t,n){t.exports="## Tooltip 文字提示\n文字提示气泡框。\n\n### 基础用法\n支持各种方位。\n\n:::demo\n\n```js\n  render() {\n    return (\n      <div>\n        {\n          ['left', 'right', 'top', 'bottom', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'].map((item, index) => {\n            let title = '这是一个' + item + '的Tooltip';\n            return (\n              <Tooltip key={index} title={title} direction={item} tipStyle={{width: 200}} style={{marginRight : 10}}>\n                <Button style={{marginRight: 0, marginBottom: 8}}>{item}</Button>\n              </Tooltip>\n            );\n          })\n        }\n      </div>\n    )\n  }\n```\n:::\n\n### Attributes\n| 参数      | 说明    | 类型      | 可选值       | 默认值   |\n|---------- |-------- |---------- |-------------  |-------- |\n| direction    | 方位  | string |   left,right,top...  |    bottom  |\n| title    | 文字  | string |   -  |    - |\n| tipStyle   | 气泡框样式  | object |   -  |    -  |\n\n\n\n"}});