import { Space, Input } from "antd";
//
import { Logo, MenuCollapseOpen, Search } from "@/shared/assets/icons";
import { styled } from "@/shared/stitches.config";

const StyledHeader = styled("div", {
  padding: "$3 $5",
  display: "flex",
});
export const Header = () => {
  return (
    <StyledHeader>
      <Space>
        <MenuCollapseOpen />
        <Logo />
        <Input prefix={<Search />} />
      </Space>
    </StyledHeader>
  );
};
