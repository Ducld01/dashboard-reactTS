import { Space } from "antd";

export default function NotFound() {
  const image404Page = "/images/404.png";
  return (
    <Space size="middle" align="center">
      <img src={image404Page} />
    </Space>
  );
}
