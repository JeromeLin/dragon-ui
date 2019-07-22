# Checkbox 多选框
多选框。


## 基础用法

单独使用，表示在两种状态之间切换。


```js
import { Checkbox } from 'zarm-web';

class Demo extends React.Component {
  onChange(e) {
    console.log(e.target.checked);
  }
  render() {
    return (
      <div>
        <Checkbox
          onChange={(e) => this.onChange(e)}
        >
          选择
        </Checkbox>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode);
```


## 组合使用

一组可选项中进行多项选择。


```js
import { Checkbox } from 'zarm-web';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxValue: []
    }
  }
  render() {
    return (
      <div>
        <div style={{marginBottom: 8}}>选择了：{this.state.checkboxValue.join(',')}</div>
        <Checkbox.Group
          value={this.state.checkboxValue}
          onChange={(values) => {
            this.setState({
              checkboxValue: values
            });
          }}
        >
          <Checkbox value="a">A</Checkbox>
          <Checkbox value="b">B</Checkbox>
          <Checkbox value="c">C</Checkbox>
          <Checkbox value="d">D</Checkbox>
        </Checkbox.Group>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode);
```

## 禁用状态

不可勾选状态。


```js
import { Checkbox } from 'zarm-web';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Checkbox
          disabled
          onChange={(e) => this.onChange(e)}
        >
          选择
        </Checkbox>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode);
```

## 部分选中状态

未全部选中，即部分选中状态。

可以使用`indeterminate`属性来定义样式是否为部分选中。

```js
import { Checkbox } from 'zarm-web';
const plainOptions = ['a','b','c','d'];
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxValue: ['a','c'],
      indeterminate: true,
      checkAll:false,
    }
  }

  onCheckAllChange = e => {
    this.setState({
      checkboxValue: e.target.checked ? JSON.parse(JSON.stringify(plainOptions)) : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };

  onChange = checkboxValue => {
    this.setState({
      checkboxValue,
      indeterminate: !!checkboxValue.length && checkboxValue.length < plainOptions.length,
      checkAll: checkboxValue.length === plainOptions.length,
    });
  };
 
  render() {
    return (
      <div>
       <div style={{marginBottom: 8}}>
        <Checkbox
          indeterminate={this.state.indeterminate}
          onChange={this.onCheckAllChange}
          checked={this.state.checkAll}
        >
          全选
        </Checkbox>
        </div>
        <Checkbox.Group
          value={this.state.checkboxValue}
          onChange={this.onChange}
        >
          <Checkbox value="a">A</Checkbox>
          <Checkbox value="b">B</Checkbox>
          <Checkbox value="c">C</Checkbox>
          <Checkbox value="d">D</Checkbox>
        </Checkbox.Group>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode);
```

## API

Checkbox Attribute

| 参数           | 说明                                                | 类型                | 可选值      | 默认值 |
| :------------- | :-------------------------------------------------- | :------------------ | :---------- | :----- |
| checked        | 是否选中                                            | boolean             | -           | false  |
| defaultChecked | 默认选中                                            | boolean             | -           | false  |
| disabled       | 禁用                                                | boolean             | -           | -      |
| value          | 选择框对应的值                                      | string              | number      | -      | - |
| indeterminate  | 是否是部分选中状态                                  | boolean             | true, false | false  |
| className      | 追加类名                                            | string              | string      |        |
| style          | 自定义样式                                          | React.CSSProperties | -           | -      |
| id             | 方便外部带有 for 属性的 label 标签控制当前 checkbox | string              | -           | -      |
| onChange       | 勾选状态变化触发的事件                              | event               |

Checkbox.Group Attribute

| 参数         | 说明                   | 类型                | 可选值   | 默认值 |
| ------------ | ---------------------- | ------------------- | -------- | ------ |
| value        | 选中的值               | string[]            | number[] | false  |
| defaultValue | 默认选中的值           | string[]            | number[] | false  |
| disabled     | 整组禁用               | boolean             | -        | false  |
| className    | 追加类名               | string              | string   |        |
| style        | 自定义样式             | React.CSSProperties | -        | -      |
| onChange     | 勾选状态变化触发的事件 | event               |

