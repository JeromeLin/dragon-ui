import React, { Component } from 'react';
import classnames from 'classnames';
import Icon from '../Icon';

class StepItem extends Component {
  render() {
    const { props } = this;
    const {
      isFinished, isProcess, index, children, style
    } = props;

    const cls = classnames({
      'ui-step-item': true,
      'ui-step-item-finish': 'finished' in props || isFinished,
      'ui-step-item-process': 'process' in props || isProcess
    });

    return (
      <div className={cls} style={style}>
        <div className="ui-step-item-line" />
        <div className="ui-step-item-header">
          <div className="ui-step-item-header-inner">
            <span>
              {!('finished' in props || isFinished) ? (
                index
              ) : (
                <Icon type="right" />
              )}
            </span>
          </div>
        </div>
        <div className="ui-step-item-body">{children}</div>
      </div>
    );
  }
}

export default StepItem;
