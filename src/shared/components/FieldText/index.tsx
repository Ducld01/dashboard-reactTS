import { HTMLAttributes } from "react";
import { styled } from "@/shared/stitches.config";

const StyledSpan = styled("span", {
  display: "inline-block",
  fontSize: "14px",
  fontWeight: 600,
  color: "$gray300",
  lineHeight: "20px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textAlign: "left",
  variants: {
    bordered: {
      true: {
        border: "1px solid $gray300",
        width: "100%",
        padding: "6px 12px",
        borderRadius: "$space$1",
        background: "$gray50",
      },
    },
  },
});

type Props = HTMLAttributes<HTMLSpanElement> & { bordered?: boolean };
export const FieldText = (props: Props) => <StyledSpan {...props} />;
