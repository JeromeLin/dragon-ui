import React, { Component } from 'react';
import classnames from 'classnames';
import { CheckboxProps } from './PropsType';

interface CheckboxStates {
  checked: boolean;
}

class Checkbox extends Component<CheckboxProps, CheckboxStates> {
  static Group;

  static displayName = 'Checkbox';

  static defaultProps = {
    prefixCls: 'zw-checkbox',
    defaultChecked: false,
    indeterminate: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked || props.defaultChecked,
    };
  }

  static getDerivedStateFromProps(nextProps) {
    if ('checked' in nextProps) {
      return {
        checked: !!nextProps.checked,
      };
    }
    return null;
  }

  _onClick(e) {
    const { checked } = this.state;
    const { onChange } = this.props;

    this.setState({
      checked: !checked,
    });
    if (onChange) {
      onChange(e);
    }
  }

  render() {
    const { checked } = this.state;
    const {
      prefixCls,
      value,
      className,
      children,
      style,
      id,
      indeterminate,
      disabled,
    } = this.props;

    const checkboxWrapperClass = classnames(className, prefixCls, {
      [`${prefixCls}--checked`]: checked,
      [`${prefixCls}--disabled`]: disabled,
      [`${prefixCls}--indeterminate`]: indeterminate,
    });

    return (
      <label className={checkboxWrapperClass} style={style}>
        <input
          className={`${prefixCls}__input`}
          type="checkbox"
          value={value}
          checked={checked}
          disabled={disabled}
          id={id}
          onChange={(e) => this._onClick(e)}
        />
        <span className={`${prefixCls}__inner`} />
        {children && <span className={`${prefixCls}__children`}>{children}</span>}
      </label>
    );
  }
}

export default Checkbox;
