webpackJsonp([17],{147:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(65),r=t.n(a),o=t(66),i=t.n(o),l=t(67),c=t.n(l),u=t(68),s=t.n(u),f=t(69),y=t.n(f),p=t(265),h=(t(456),function(e){function n(){return i()(this,n),s()(this,(n.__proto__||r()(n)).apply(this,arguments))}return y()(n,e),c()(n,[{key:"document",value:function(){return t(458)}}]),n}(p.a));n.default=h},456:function(e,n,t){"use strict";var a=t(457);t.n(a)},457:function(e,n){},458:function(e,n){e.exports="## Panel 面板\n用于结构化展示信息。\n\n### 基础用法\n\n:::demo\n\n```js\n  render() {\n    return (\n      <div>\n        <Panel>\n          <Panel.Header>\n            <Panel.Title>头部左侧</Panel.Title>\n            <Panel.More>\n              头部右侧\n            </Panel.More>\n          </Panel.Header>\n          <Panel.Body>\n            React is the entry point to the React library. If you load React from a script tag, these top-level APIs are available on the React global. If you use ES6 with npm, you can write import React from 'react'. If you use ES5 with npm, you can write var React = require('react').\n            React is the entry point to the React library. If you load React from a script tag, these top-level APIs are available on the React global. If you use ES6 with npm, you can write import React from 'react'. If you use ES5 with npm, you can write var React = require('react').\n            React is the entry point to the React library. If you load React from a script tag, these top-level APIs are available on the React global. If you use ES6 with npm, you can write import React from 'react'. If you use ES5 with npm, you can write var React = require('react').\n          </Panel.Body>\n          <Panel.Footer>\n            <Panel.Title>底部左侧</Panel.Title>\n            <Panel.More>\n              底部右侧\n            </Panel.More>\n          </Panel.Footer>\n        </Panel>\n      </div>\n    )\n  }\n```\n:::\n\n### Attributes\n| 参数      | 说明    | 类型      | 可选值       | 默认值   |\n|---------- |-------- |---------- |-------------  |-------- |\n| radius    | 是否圆角 | boolean |   -  |    -  |\n| theme   | 主题 | string |   defualt,info,success,warning,error  |   default  |"}});