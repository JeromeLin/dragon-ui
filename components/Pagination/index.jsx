import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
  }

  render() {
    const { props } = this;
    const {
      isBordered,
      isRadius,
      className,
      total,
      pageSize,
      addonBefore,
      addonAfter,
      style
    } = props;

    const cls = classnames({
      'ui-pagination': true,
      bordered: 'bordered' in props || isBordered,
      radius: 'radius' in props || isRadius,
      [className]: !!className
    });

    const pageCount = Math.ceil(total / pageSize);
    let pagerList = [];
    let { value } = this.state;
    value = value < 1 ? 1 : value;
    value = value > pageCount ? pageCount : value;

    if (pageCount <= 9) {
      for (let i = 1; i <= pageCount; i++) {
        pagerList.push(
          <li
            key={i}
            title={i}
            className={classnames({
              'ui-pagination-item': true,
              'ui-pagination-item-active': value === i
            })}
            onClick={() => this._onPagerClick(i)}
          >
            {i}
          </li>
        );
      }
    } else {
      const firstPager = (
        <li
          key={1}
          title="第一页"
          className="ui-pagination-item"
          onClick={() => this._onPagerClick(1)}
        >
          1
        </li>
      );
      const lastPager = (
        <li
          key={pageCount}
          title="最后一页"
          className="ui-pagination-item"
          onClick={() => this._onPagerClick(pageCount)}
        >
          {pageCount}
        </li>
      );
      const prevPager = (
        <li
          key="prev"
          title="上一页"
          className={classnames({
            'ui-pagination-item': true,
            'ui-pagination-item-prev': true,
            'ui-pagination-item-disabled': Number(value) === 1
          })}
          onClick={() => value > 1 && this._onPagerClick(value - 1)}
        >
          <Icon type="arrow-left" />
        </li>
      );
      const nextPager = (
        <li
          key="next"
          title="下一页"
          className={classnames({
            'ui-pagination-item': true,
            'ui-pagination-item-next': true,
            'ui-pagination-item-disabled': Number(value) === pageCount
          })}
          onClick={() => value < pageCount && this._onPagerClick(value + 1)}
        >
          <Icon type="arrow-right" />
        </li>
      );
      const jumpPrev = (
        <li
          key="jump-prev"
          title="向前 5 页"
          className="ui-pagination-item ui-pagination-item-jump-prev"
          onClick={() => this._onPagerClick(value - 5)}
        />
      );
      const jumpNext = (
        <li
          key="jump-next"
          title="向后 5 页"
          className="ui-pagination-item ui-pagination-item-jump-next"
          onClick={() => this._onPagerClick(value + 5)}
        />
      );

      let left = Math.max(1, value - 2);
      let right = Math.min(value + 2, pageCount);

      if (value - 1 <= 2) {
        right = 1 + 4;
      }

      if (pageCount - value <= 2) {
        left = pageCount - 4;
      }

      for (let i = left; i <= right; i++) {
        pagerList.push(
          <li
            key={i}
            title={i}
            className={classnames({
              'ui-pagination-item': true,
              'ui-pagination-item-active': value === i
            })}
            onClick={() => this._onPagerClick(i)}
          >
            {i}
          </li>
        );
      }

      if (value - 1 >= 4) {
        pagerList.unshift(jumpPrev);
      }
      if (pageCount - value >= 4) {
        pagerList.push(jumpNext);
      }

      if (left !== 1) {
        pagerList.unshift(firstPager);
      }
      if (right !== pageCount) {
        pagerList.push(lastPager);
      }

      pagerList.unshift(prevPager);
      pagerList.push(nextPager);
    }

    if (addonBefore) {
      pagerList.unshift(
        <div key="addon-before" className="ui-pagination-addon-before">
          {addonBefore}
        </div>
      );
    }

    if (addonAfter) {
      pagerList.push(
        <div key="addon-after" className="ui-pagination-addon-after">
          {addonAfter}
        </div>
      );
    }

    return (
      <ul className={cls} style={style}>
        {pagerList}
      </ul>
    );
  }

  _onPagerClick(value) {
    this.setState({
      value
    });
    this.props.onPageChange(value);
  }
}

Pagination.propTypes = {
  defaultValue: PropTypes.number,
  isBordered: PropTypes.bool,
  isRadius: PropTypes.bool,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  onPageChange: PropTypes.func
};

Pagination.defaultProps = {
  defaultValue: 1,
  isBordered: false,
  isRadius: false,
  total: 0,
  pageSize: 10,
  onPageChange: () => {}
};

export default Pagination;
