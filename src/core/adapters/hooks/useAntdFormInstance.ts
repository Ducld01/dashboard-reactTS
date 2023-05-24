import { Form } from 'antd';

export function useAntdFormInstance<T>() {
  return Form.useFormInstance<T>();
}
