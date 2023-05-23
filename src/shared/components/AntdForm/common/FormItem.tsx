import { ReactNode } from 'react';
//
import { StyledFormItem } from '@/shared/theme/overrides/FormItem';
import { HelpText } from './HelpText';
import { FieldLabel, FieldLabelProps } from '../../FieldLabel';
import { useLocales } from '@/shared/hooks/useLocales';
//
import type { FormItemEssentialProps } from '../type';

export type FormItemProps = FormItemEssentialProps & {
  children: ReactNode;
  labelProps?: Omit<FieldLabelProps, 'children'>;
};

export const FormItem = ({
  help,
  label,
  children,
  labelProps,
  colon = false,
  ...others
}: FormItemProps) => {
  const { translate: t } = useLocales();
  const Helper = help ? (
    <HelpText color={others.validateStatus === 'error' ? 'error' : 'default'}>
      {typeof help === 'string' ? t(help) : help}
    </HelpText>
  ) : null;
  const Label =
    !others.hidden && label ? (
      <FieldLabel {...labelProps}>{typeof label === 'string' ? t(label) : label}</FieldLabel>
    ) : null;

  return (
    <StyledFormItem {...others} help={Helper} label={Label} colon={colon}>
      {children}
    </StyledFormItem>
  );
};
