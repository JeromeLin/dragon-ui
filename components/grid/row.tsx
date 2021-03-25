import React from 'react';
import cls from 'classnames';

export type RowAlign = 'top' | 'middle' | 'bottom' | 'stretch';
export type RowJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  gutter?: number | [number, number];
  align?: RowAlign;
  justify?: RowJustify;
}

export const GutterContext = React.createContext({ gutter: [0, 0] });

export default function Row(props: RowProps) {
  const { prefixCls = 'zw-row', align, justify, className, style, children } = props;
  let { gutter = 0 } = props;

  if (!Array.isArray(gutter)) {
    gutter = [gutter, 0];
  }

  const x = gutter[0] / 2;
  const y = gutter[1] / 2;

  const innerStyle = {
    ...(x > 0 ? { marginLeft: -x, marginRight: -x } : {}),
    ...(y > 0 ? { marginTop: -y, marginBottom: y } : {}),
    ...style,
  };

  const clsName = cls(prefixCls, className, {
    [`${prefixCls}--${align}`]: align,
    [`${prefixCls}--${justify}`]: justify,
  });

  return (
    <div className={clsName} style={innerStyle}>
      <GutterContext.Provider value={{ gutter }}>{children}</GutterContext.Provider>
    </div>
  );
}
