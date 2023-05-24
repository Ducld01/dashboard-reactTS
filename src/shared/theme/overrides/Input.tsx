import { Input as AntdInput, InputProps } from "antd";

import { styled } from "@/shared/stitches.config";

export const StyledAntdInput = styled(AntdInput, {
 
  [`&.ant-input, 
      &.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-status-error)`]: {
    "&, & input": {
      backgroundColor: "$gray50 !important",
    },
  },

  [`&.ant-input:not(:disabled)::placeholder,
      & .ant-input:not(:disabled)::placeholder`]: {
    color: "$gray500",
  },
  [`&.ant-input, 
      &.ant-input-affix-wrapper`]: {
    padding: "$4",
    border: "1px solid $gray300",

    [`&[disabled]`]: {
      border: "1px solid $gray500",
    },
    [`&.ant-input-sm, 
        &.ant-input-affix-wrapper-sm`]: {
      padding: "6px $3",
    },
    [`&.ant-input-lg, 
        &.ant-input-affix-wrapper-lg`]: {
      padding: "19px $4",
    },
    [`&, & > .ant-input`]: {
      [`&:not(.ant-input-affix-wrapper-disabled):not(.ant-input-disabled)`]: {
        color: "$gray500",
      },
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "22px",

      //Size
      [`&.ant-input-lg`]: {
        fontSize: "18px !important",
        lineHeight: "26px",
      },
    },
    [`&[readonly], 
        & > .ant-input[readonly], 
        &.ant-input-affix-wrapper-readonly`]: {
      fontWeight: 600,
      color: "$gray300 !important",
    },
  },
  [`&.ant-input, &.ant-input-affix-wrapper`]: {
    boxShadow: "none !important",
  },
  [`&.ant-input:focus,
      &.ant-input-focused,
      &.ant-input-affix-wrapper:focus,
      &.ant-input-affix-wrapper-focused`]: {
    border: "1px solid $green300",
  },
  [`&.ant-input:hover,
      &.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover`]:
    {
      borderColor: "$green300",
    },

  /// Error
  [`&.ant-input-affix-wrapper-status-error:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper,
      &.ant-input-affix-wrapper-status-error:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover,
      &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input, 
      &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover
    `]: {
    borderColor: "$$errorBoderColor !important",
    [`&, & input, & .ant-input-prefix`]: {
      color: "$redDB !important",
    },
  },
  variants: {
    variant: {
      borderless: {
        border: "none !important",
        bgColor: "$white !important",
        padding: "6px 0 !important",
      },
      default: {
        [`&.ant-input, 
            &.ant-input-affix-wrapper`]: {
          "&, & input": {
            fontWeight: "600 !important",
          },
        },
        [`&.ant-input:focus,
            &.ant-input-focused,
            &.ant-input-affix-wrapper:focus,
            &.ant-input-affix-wrapper-focused`]: {
          "&, & input": {
            backgroundColor: "$red !important",
          },
        },
      },
    },
    bgColor: {
      white: {
        ["&"]: {
          bgColor: "$white",
        },

        [`&.ant-input, 
            &.ant-input-affix-wrapper`]: {
          "&, & input": {
            fontWeight: "600 !important",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type StyledAntdInputProps = InputProps & {
  variant?: "default" | "borderless";
  bgColor?: "white";
};
