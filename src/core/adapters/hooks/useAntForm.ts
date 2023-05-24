import { Form } from 'antd';

export function useAntdForm<T>() {
  return Form.useForm<T>();
}
