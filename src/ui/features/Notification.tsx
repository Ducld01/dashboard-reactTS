import { Popover } from "antd";
//
import { Button } from "@/shared/components";
import { styled } from "@/shared/stitches.config";
import { Bell } from "@/shared/assets/icons";

const StyleContainner = styled("div", {
  marginRight: "$2",
});

const StyledButton = styled(Button, {
  width: "100%",
  boxShadow: "none",
  textAlign: "left",
  paddingLeft: "$0",
});

const text = <p>Notifications</p>;
const content = (
  <>
    <StyledButton variant="text">Changle Password</StyledButton>
    <StyledButton variant="text">Sign out</StyledButton>
  </>
);
export const Notification = () => {
  return (
    <StyleContainner>
      <Popover
        placement="bottomRight"
        content={content}
        title={text}
        trigger="click"
      >
        <Button icon={<Bell />} variant="text" />
      </Popover>
    </StyleContainner>
  );
};
