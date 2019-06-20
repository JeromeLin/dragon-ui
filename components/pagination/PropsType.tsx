export type size = 'md' | 'sm';

export default interface PropsType {
  prefixCls?: string;
  value?: number;
  defaultValue?: number;
  pageSize: number;
  pageSizeSource?: Array<number>;
  total: number;
  showTotal?: boolean;
  showJumper?: boolean;
  showPageSizeSelector?: boolean;
  className?: string;
  style?: object;
  shape: 'rect' | 'radius';
  radius: boolean;
  simple: boolean;
  size: size;
  bordered?: boolean;
  isBordered?: boolean;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  onPageChange: (value: number) => void;
  onPageSizeChange: (value: number) => void;
  locale: { [propName: string]: any };
  onChange: (pageInfo: { currentPage: number; pageSize: number }) => void;
}
