(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{706:function(n,e,o){"use strict";o.r(e),e.default='# Loading \u52a0\u8f7d\n\n\n\n## \u57fa\u672c\u7528\u6cd5\n\n```jsx\nimport { Loading } from \'zarm-web\';\n\nReactDOM.render(\n  <Loading visible />\n, mountNode);\n```\n\n\n\n## \u81ea\u5b9a\u4e49\u6587\u5b57\n\n```jsx\nimport { Loading } from \'zarm-web\';\n\nReactDOM.render( \n  <Loading visible text="\u52a0\u8f7d\u4e2d" />\n, mountNode);\n```\n\n\n\n## \u81ea\u5b9a\u4e49\u52a0\u8f7d\u6307\u793a\u5668\n\n```jsx\nimport { Loading, Icon } from \'zarm-web\';\n\nconst icon = <Icon type="minus-round" className="rotate360" />\n\nReactDOM.render( \n  <Loading visible indicator={icon} />\n, mountNode);\n```\n\n\n\n## \u5361\u7247\u52a0\u8f7d\n\n```jsx\nimport { Loading, Icon, Alert } from \'zarm-web\';\n\nReactDOM.render( \n  <Loading visible>\n    <div className="loading-container">\n      \u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\u3002\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\u3002\n    </div>\n  </Loading>\n, mountNode);\n```\n\n\n\n## \u5ef6\u65f6\u52a0\u8f7d\n\n```jsx\nimport { useState } from \'react\';\nimport { Loading, Switch } from \'zarm-web\';\n\nconst Demo = () => {\n  const [loading, setLoading] = useState(false);\n\n  return (\n    <> \n      <Loading visible={loading} delay={500} text="\u52a0\u8f7d\u4e2d">\n        <div className="loading-container exp">\n          \u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\u3002\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u8fd9\u91cc\u662f\u4e00\u4e2a\u5bb9\u5668\u3002\n        </div>\n      </Loading>\n      <p>\n        <Switch value={loading} onChange={setLoading} />\n      </p>\n    </>\n  );\n};\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## \u4e0d\u540c\u5c3a\u5bf8\n\n```jsx\nimport { Loading } from \'zarm-web\';\n\nReactDOM.render(\n  <>\n    <Loading visible size="sm" />\n    <Loading visible size="md" />\n    <Loading visible size="lg" />\n  </>\n, mountNode);\n```\n\n\n\n## API\n\n| \u5c5e\u6027 | \u7c7b\u578b | \u9ed8\u8ba4\u503c | \u8bf4\u660e |\n| :--- | :--- | :--- | :--- |\n| size | string | \'md\' | \u8bbe\u7f6e\u5927\u5c0f\uff0c\u53ef\u9009\u503c\u4e3a `lg`\u3001`md`\u3001`xs`|\n| visible | boolean | false | \u662f\u5426\u663e\u793a |\n| fullscreen | boolean | false | \u662f\u5426\u663e\u793a\u5168\u5c4f |\n| delay | number | - | \u5ef6\u8fdf\u663e\u793a\u52a0\u8f7d\u6548\u679c\u7684\u65f6\u95f4\uff08\u9632\u6b62\u95ea\u70c1\uff09 |\n| text | ReactNode | - | \u81ea\u5b9a\u4e49\u6587\u6848 |\n| indicator | ReactNode | - | \u81ea\u5b9a\u4e49\u6d3b\u52a8\u6307\u793a\u5668 |\n'}}]);
//# sourceMappingURL=33.85bc7eb1.js.map