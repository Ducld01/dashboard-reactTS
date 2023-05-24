import { useState } from "react";
//
import type { FormItemEssentialProps } from "./type";
import { useAntdFormInstance } from "@/core/adapters/hooks/useAntdFormInstance";
import { FormItem } from "./common";
import { Input, InputProps } from "..";

export type AFInputProps = FormItemEssentialProps & {
  inputProps?: InputProps;
  trimAfterBlur?: boolean;
  pattern?: RegExp;
};

export function AFInput({
  inputProps,
  name,
  trimAfterBlur,
  pattern,
  ...other
}: AFInputProps) {
  const [oldValue, setOldValue] = useState<string>("");
  const form = useAntdFormInstance();
  return (
    <FormItem name={name} {...other}>
      <Input
        {...inputProps}
        onBlur={(e) => {
          let { value } = e.target;
          if (form && trimAfterBlur) {
            value = e.target.value?.trim();
            form.setFields([{ name: name, value }]);
          }
          if (form && pattern && !pattern.test(value)) {
            value = oldValue;
            form.setFields([{ name: name, value }]);
          }
          setOldValue(value);
          inputProps?.onBlur?.({ ...e, target: { ...e.target, value } });
        }}
        onKeyDown={(e) => {
          if (
            pattern &&
            !pattern.test(e.key) &&
            e.key.length === 1 &&
            !e.ctrlKey
          ) {
            e.stopPropagation();
            e.preventDefault();
            return;
          }
          inputProps?.onKeyDown?.(e);
        }}
      />
    </FormItem>
  );
}
