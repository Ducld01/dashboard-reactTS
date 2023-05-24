import { Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";
//
import { Button } from "@/shared/components";
import { styled } from "@/shared/stitches.config";

const StyleContainner = styled("div", {
  marginRight: "$2",
});

const StyledButton = styled(Button, {
  width: "100%",
  boxShadow: "none",
  textAlign: "left",
  paddingLeft: "$0",
});
const text = (
  <>
    <p>Neil Sims</p>
    <p>neil.sims@windster.com</p>
  </>
);
const content = (
  <>
    <StyledButton variant="text">Changle Password</StyledButton>
    <StyledButton variant="text">Sign out</StyledButton>
  </>
);
export const Avatar = () => {
  return (
    <StyleContainner>
      <Popover
        placement="bottomRight"
        content={content}
        title={text}
        trigger="click"
      >
        <Button variant="text" icon={<UserOutlined />} />
      </Popover>
    </StyleContainner>
  );
};
