import { Col, Row } from "antd";
//
import { Logo, MenuCollapseOpen } from "@/shared/assets/icons";
import { css, styled } from "@/shared/stitches.config";
import { Button } from "@/shared/components/Button";
import { Avatar, HeaderSearch, Notification } from "@/ui/features";

const StyledHeader = styled("div", {
  padding: "$3 $5",
  display: "flex",
  borderBottom: "1px solid $gray200",
});

const StyledButton = styled(Button, {
  marginRight: "$6",
  padding: "0 !important",
  fontSize: "26px !important",
});
export const Header = () => {
  return (
    <StyledHeader>
      <Row className={css({ flex: "1 !important" })()}>
        <Col span={12}>
          <Row>
            <StyledButton icon={<MenuCollapseOpen />} variant="text" />
            <Button
              className={css({ padding: "0 !important" })()}
              icon={<Logo />}
              variant="icon"
              href=""
            />
            <HeaderSearch />
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="end">
            <Notification />
            <Avatar />
          </Row>
        </Col>
      </Row>
    </StyledHeader>
  );
};
