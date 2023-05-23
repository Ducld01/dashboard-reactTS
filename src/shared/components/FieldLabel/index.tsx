import { HTMLAttributes, PropsWithChildren } from "react";
import { styled } from "@/shared/styles";

const StyledLabel = styled("label", {
  display: "inline-block",
  fontSize: "14px",
  fontWeight: 400,
  color: "$gray700",
  lineHeight: "20px",
  textAlign: "left",
  whiteSpace: "normal",

  variants: {
    bold: {
      true: {
        fontWeight: "600",
      },
    },
    color: {
      black: {
        color: "$grey900 ",
      },
    },
    required: {
      true: {
        [`&::before`]: {
          color: "red",
          content: "*",
          display: "inline-block",
          marginRight: "$1",
        },
      },
    },
  },
});

export type FieldLabelProps = PropsWithChildren<
  HTMLAttributes<HTMLLabelElement>
> & {
  color?: "black";
  required?: boolean;
  bold?: boolean;
};
export const FieldLabel = (props: FieldLabelProps) => {
  return <StyledLabel {...props} />;
};
