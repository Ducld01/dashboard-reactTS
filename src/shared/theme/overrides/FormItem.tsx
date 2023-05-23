import { styled } from "@/shared/stitches.config";
import { Form } from "antd";

export const StyledFormItem = styled(Form.Item, {
  [`&.ant-form-item `]: {
    marginBottom: "$6",
  },

  [`& .ant-form-item-explain-error`]: {
    color: "$red",
  },
  [`& .ant-input-status-error`]: {
    backgroundColor: "$red50",
  },

  [`& label.ant-form-item-required`]: {
    alignItems: "baseline",
  },

  [`& .ant-form-item-label`]: {
    overflow: "initial",
    textAlign: "left",

    [`& > label`]: {
      height: "auto",
    },
  },
  [`& .ant-form-item-has-error`]: {
    [`& label.ant-form-item-required`]: {
      color: "$red500",
    },
  },
  // DatePicker
  [`&.ant-form-item-has-error .MuiInputBase-root`]: {
    borderColor: "$error1 !important",
  },
});
