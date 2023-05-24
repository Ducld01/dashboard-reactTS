import { Col, ColProps, Row, RowProps, Space, SpaceProps } from "antd";
import { ReactNode, Fragment } from "react";
import { NamePath } from "antd/es/form/interface";

import { useLocales } from "@/shared/hooks/useLocales";
import { css, styled } from "@/shared/stitches.config";
import { FieldLabel, FieldText } from "..";
import { FormItemEssentialProps } from "../AntdForm/type";
import { AFInput, AFInputProps } from "../AntdForm";
import { useAntdFormInstance } from "@/core/adapters/hooks/useAntdFormInstance";

const FieldCol = styled(Col, {
  display: "flex !important",
  flexDirection: "column",
  gap: "$space$2",
});

type OptionalField<T, Field extends keyof T> = Omit<T, Field> &
  Partial<Pick<T, Field>>;

type ReadOnlyFieldProps = {
  label: ReactNode;
  value: string | number | ReactNode;
  renderValue?(rawValue: string | number): ReactNode;
  bordered?: boolean;
} & Pick<SpaceProps, "direction">;

const ReadOnlyField = ({
  label,
  value,
  renderValue,
  direction = "vertical",
  bordered,
}: ReadOnlyFieldProps) => {
  const { translate: t } = useLocales();

  const _renderValue = () => {
    if (
      renderValue &&
      (typeof value === "string" || typeof value === "number")
    ) {
      return renderValue(value);
    }
    return typeof value === "string" ? t(value) : value;
  };
  return (
    <Space
      className={css({
        display: "flex !important",
        marginBottom: "$3",
        "& :first-child": { flex: 1 },
      })()}
      direction={direction}
    >
      {label && <FieldLabel>{label}</FieldLabel>}
      <FieldText bordered={bordered}>{_renderValue()}</FieldText>
    </Space>
  );
};

export type AFFormFieldProps = {
  name: NamePath;
  hidden?: boolean;
  invisible?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  readOnlyProps?: Partial<
    Pick<ReadOnlyFieldProps, "direction" | "value" | "renderValue" | "bordered">
  >;
} & Pick<FormItemEssentialProps, "rules" | "noMargin"> &
  Partial<{
    afInputProps: OptionalField<AFInputProps, "name">;
  }>;

export const AFFormField = ({
  hidden,
  invisible,
  readOnly,
  readOnlyProps,
  ...props
}: AFFormFieldProps) => {
  const form = useAntdFormInstance();

  const generalProps = {
    noMargin: props.noMargin,
    rules: props.rules,
    name: props.afInputProps?.name || props.name,
    label: props.afInputProps?.label || "",
    hidden: invisible,
  };

  const placeholder = (props.afInputProps?.inputProps?.placeholder ||
    props.placeholder) as string;

  if (hidden) return null;
  if (readOnly && !invisible) {
    return (
      <>
        <ReadOnlyField
          {...readOnlyProps}
          label={generalProps.label}
          value={
            readOnlyProps?.value ||
            ((form?.getFieldValue(generalProps.name) || "") as string)
          }
        />
        {/* Store field value but hide on the screen */}
        <AFInput name={generalProps.name} hidden />
      </>
    );
  }

  if (props.afInputProps) {
    return (
      <AFInput
        {...props.afInputProps}
        {...generalProps}
        inputProps={{ ...props.afInputProps.inputProps, placeholder }}
      />
    );
  }

  return <>Invalid component</>;
};

export type AFFormFieldGroupProps = {
  rowProps?: RowProps;
  cols: Array<{
    colProps: ColProps;
    fieldProps: AFFormFieldProps;
  }>;
};

export const AFFormFieldGroup = ({ rowProps, cols }: AFFormFieldGroupProps) => {
  return (
    <Row {...rowProps} gutter={rowProps?.gutter || 20}>
      {cols.map((e) => {
        const key =
          typeof e.fieldProps.name === "string" ||
          typeof e.fieldProps.name === "number"
            ? e.fieldProps.name
            : e.fieldProps.name[e.fieldProps.name.length - 1];
        return (
          <Fragment key={key}>
            <FieldCol {...e.colProps}>
              <AFFormField {...e.fieldProps} />
            </FieldCol>
          </Fragment>
        );
      })}
    </Row>
  );
};
