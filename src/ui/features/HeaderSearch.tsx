import { AFInput, SingleFormProvider } from "@/shared/components/AntdForm";
import { useAntdForm } from "@/core/adapters/hooks";
import { Search } from "@/shared/assets/icons";
import { Form } from "antd";
import { styled } from "@/shared/stitches.config";

type THeaderSearchFormModel = {
  value?: string;
};

const StyledForm = styled(SingleFormProvider, {
  paddingLeft: "$8",
  [`& .ant-form-item `]: {
    marginBottom: "0 !important",
  },
});

export const HeaderSearch = () => {
  const [form] = useAntdForm<THeaderSearchFormModel>();
  const value = Form.useWatch("value", form);

  console.log(value);

  return (
    <StyledForm layout="horizontal" form={form}>
      <AFInput
        name="value"
        inputProps={{
          placeholder: "Search",
          maxLength: 255,
          allowClear: true,
          prefix: <Search />,
          variant: "default",
        }}
      />
    </StyledForm>
  );
};
