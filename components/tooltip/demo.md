# Tooltip 文字提示

文字提示。

## 基本用法

```jsx
import { Tooltip } from 'zarm-web';

ReactDOM.render(<Tooltip content="我是提示框内容">鼠标移入显示提示框</Tooltip>, mountNode);
```

## 触发方式

通过 trigger 属性设置不同的 tooltip 触发方式

```jsx
import { Tooltip, Button } from 'zarm-web';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    return (
      <>
        <Tooltip trigger="click" content="我是click触发方式">
          <Button>click me</Button>
        </Tooltip>
        <Tooltip trigger="hover" content="我是鼠标移入触发方式">
          <Button>hover me</Button>
        </Tooltip>
        <Tooltip
          trigger="manual"
          visible={this.state.visible}
          content="我是manual触发方式，通过传入的visible props控制"
        >
          <Button onClick={() => this.setState({ visible: !this.state.visible })}>manual</Button>
        </Tooltip>
        <Tooltip trigger="focus" content="我是focus触发方式">
          <Button>focus</Button>
        </Tooltip>
        <Tooltip trigger="contextMenu" content="我是右键点击触发方式">
          <Button>contextmenu</Button>
        </Tooltip>
      </>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

## 位置

支持各种方位。

```jsx
import { Tooltip, Button } from 'zarm-web';

const Demo = () => (
  <div className="direction-demo">
    <div style={{ marginLeft: 80, whiteSpace: 'nowrap' }}>
      <Tooltip direction="topLeft" content="topLeft text">
        <Button>TL</Button>
      </Tooltip>

      <Tooltip direction="top" content="top text">
        <Button>Top</Button>
      </Tooltip>

      <Tooltip direction="topRight" content="topRight text">
        <Button>TR</Button>
      </Tooltip>
    </div>

    <div style={{ width: 80, float: 'left', clear: 'both' }}>
      <Tooltip direction="leftTop" content="leftTop text">
        <Button>LT</Button>
      </Tooltip>

      <Tooltip direction="left" content="left text">
        <Button>Left</Button>
      </Tooltip>

      <Tooltip direction="leftBottom" content="leftBottom text">
        <Button>LB</Button>
      </Tooltip>
    </div>

    <div style={{ width: 80, marginLeft: 80 * 4 + 20 }}>
      <Tooltip direction="rightTop" content="rightTop text">
        <Button>RT</Button>
      </Tooltip>

      <Tooltip direction="right" content="right text">
        <Button>Right</Button>
      </Tooltip>

      <Tooltip direction="rightBottom" content="rightBottom text">
        <Button>RB</Button>
      </Tooltip>
    </div>

    <div style={{ marginLeft: 80, clear: 'both', whiteSpace: 'nowrap' }}>
      <Tooltip direction="bottomLeft" content="bottomLeft text">
        <Button>BL</Button>
      </Tooltip>

      <Tooltip direction="bottom" content="bottom text">
        <Button>Bottom</Button>
      </Tooltip>

      <Tooltip direction="bottomRight" content="bottomRight text">
        <Button>BR</Button>
      </Tooltip>
    </div>
  </div>
);

ReactDOM.render(<Demo />, mountNode);
```

## 箭头指向

```jsx
import { Tooltip, Button } from 'zarm-web';

ReactDOM.render(
  <>
    <Tooltip direction="topLeft" content="Prompt Text">
      <Button>跟随方向</Button>
    </Tooltip>
    <Tooltip direction="topLeft" content="Prompt Text" arrowPointAtCenter>
      <Button>元素中心</Button>
    </Tooltip>
  </>,
  mountNode,
);
```

## API

| 属性               | 类型                                 | 默认值                                 | 说明                                                                                                                                                      |
| :----------------- | :----------------------------------- | :------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| theme              | string                               | light/dark                             | 默认提供的主题                                                                                                                                            |
| className          | string                               | -                                      | 类名追加                                                                                                                                                  |
| content            | ReactNode                            | -                                      | 显示内容                                                                                                                                                  |
| hasArrow           | boolean                              | false                                  | 是否显示箭头节点                                                                                                                                          |
| destroy            | boolean                              | true                                   | 关闭后是否移除节点                                                                                                                                        |
| getContainer       | HTMLElement &#124; () => HTMLElement | document.body                          | 指定 Tooltip 挂载的 HTML 节点                                                                                                                             |
| animationType      | string                               | 'zoom-fade'                            | 可选值 `fade`, `door`, `flip`, `rotate`, `zoom`,`moveUp`, `moveDown`, `moveLeft`, `moveRight`,`slideUp`, `slideDown`, `slideLeft`, `slideRight`           |
| animationDuration  | number                               | 200                                    | 动画执行时间（单位：毫秒）                                                                                                                                |
| arrowPointAtCenter | boolean                              | false                                  | 箭头是否指向目标元素中心                                                                                                                                  |
| mouseEnterDelay    | number                               | 100                                    | 鼠标移入显示的延时时间（单位：毫秒）                                                                                                                      |
| mouseLeaveDelay    | number                               | 100                                    | 鼠标移出隐藏的延时时间（单位：毫秒）                                                                                                                      |
| direction          | string                               | 'top'                                  | 显示方向，可选值 `topLeft`、`top`、`topRight`、`rightTop`、`right`、`rightBottom`、`bottomLeft`、`bottom`、`bottomRight`、`leftTop`、`left`、`leftBottom` |
| trigger            | string                               | 移动端为'click' <br /> 桌面端为'hover' | 触发方式，可选值为：`click` 点击触发状态、`hover` hover 状态触发、`focus` 聚焦状态触发、`manual` 受控触发、`contextMenu` 右键触发                         |
| visible            | boolean                              | false                                  | 是否显示，`trigger='manual'` 时有效                                                                                                                       |
| onVisibleChange    | (visible?: boolean) => void          | noop                                   | 显示/隐藏 触发的事件                                                                                                                                      |
