import { FocusEvent, forwardRef, useState } from "react";
//
import {
  StyledAntdInput,
  StyledAntdInputProps,
} from "@/shared/theme/overrides/Input";

export type InputProps = StyledAntdInputProps & {
  onBlurWithOldValue?(e: FocusEvent<HTMLInputElement>, oldValue: string): void;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Input = forwardRef<any, InputProps>(
  ({ size = "small", onBlurWithOldValue, ...props }, ref) => {
    const [oldValue, setOldValue] = useState("");

    return (
      <StyledAntdInput
        {...props}
        ref={ref}
        size={size}
        onFocus={(e) => {
          if (onBlurWithOldValue) {
            setOldValue(e.target.value);
          }
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          onBlurWithOldValue?.(e, oldValue);
          props.onBlur?.(e);
        }}
      />
    );
  }
);
