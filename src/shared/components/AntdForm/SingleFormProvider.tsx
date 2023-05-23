import { ReactNode } from "react";
import { Form, FormProps } from "antd";

type SingleFormProps<T> = Omit<FormProps<T>, "children"> & {
  children: ReactNode;
};

function SingleFormProvider<T>({ children, ...props }: SingleFormProps<T>) {
  return (
    <Form<T> {...props} layout={props.layout || "vertical"}>
      {children}
    </Form>
  );
}

export { SingleFormProvider };
