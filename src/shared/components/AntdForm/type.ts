import type { FormItemProps } from 'antd';
import { NamePath } from 'antd/es/form/interface';

export type FormItemEssentialProps = Omit<FormItemProps, 'children'> & {
  name: string | NamePath;
  noMargin?: boolean;
};
