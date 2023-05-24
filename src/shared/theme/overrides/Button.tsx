import { styled } from "@/shared/stitches.config";
import { Button as AntdButton } from "antd";
import { ComponentProps } from "react";

export const StyledAntButton = styled(AntdButton, {
  $$focusColor: "#C3DDFD",

  borderRadius: "$2 !important",
  [`&.ant-btn-default`]: {
    // height: "auto",

    [`&:hover, &:focus, &.ant-btn:hover, &.ant-btn:focus`]: {
      border: "1px solid $$focusColor",
    },
  },

  "&[disabled]": {
    opacity: 0.24,
    pointerEvents: "none",
    userSelect: "none",
  },

  variants: {
    color: {
      blue: {
        color: "$white",
        [`&.ant-btn`]: {
          backgroundColor: "$blue600 !important",
          "&:hover": {
            backgroundColor: "$blue700 !important",
          },
        },
      },
      red: {
        color: "$white",
        [`&.ant-btn`]: {
          backgroundColor: "$red600 !important",
          "&:hover": {
            backgroundColor: "$red700 !important",
            border: "none !important",
          },
        },
      },
    },
    variant: {
      icon: {
        border: "none !important",

        "&[disabled]": {
          background: "transparent !important",
        },
        "&:not([disabled]):hover": {
          color: "$blue600 !important",
        },
      },
      ghost: {
        backgroundColor: "transparent",
        color: "$white !important",
        border: "1px solid $white !important",
        "&:focus": {
          borderColor: "$white !important",
          color: "$white !important",
        },
      },
      text: {
        border: "none",
        color: "$grey500 !important",
        backgroundColor: "transparent !important",

        [`&:hover, &:focus, &.ant-btn:hover, &.ant-btn:focus`]: {
            border: "none !important",
            backgroundColor: "$gray50 !important",
          },
      },
    },
  },
});

export type ButtonProps = Omit<
  ComponentProps<typeof StyledAntButton>,
  "type" | "danger"
> & {
  color?: "blue" | "red";
  variant?: "icon" | "ghost" | "text";
};
