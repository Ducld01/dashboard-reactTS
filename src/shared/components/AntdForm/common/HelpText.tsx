import { styled } from '@/shared/styles';

export const HelpText = styled('span', {
  display: 'inline-block',
  fontSize: '14px',
  variants: {
    color: {
      error: {
        color: '$$red500',
      },
      default: {
        color: '$gray900',
      },
    },
  },
  defaultVariants: { color: 'default' },
});
