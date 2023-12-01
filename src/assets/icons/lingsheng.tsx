import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const SVGLingsheng = () => (
  <svg
    style={{
      width: "1em",
      height: "1em",
      fill: "currentcolor",
      overflow: "hidden",
    }}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M878.08 719.36c-125.44 0-115.2-294.4-115.2-294.4 0-102.4-81.92-181.76-176.64-209.92v-17.92C586.24 158.72 552.96 128 512 128c-40.96 0-74.24 30.72-74.24 69.12v15.36c-94.72 28.16-176.64 110.08-176.64 209.92 0 0 7.68 294.4-115.2 294.4v30.72h732.16v-28.16zM512 896c74.24 0 110.08-58.88 110.08-110.08h-220.16c0 51.2 38.4 110.08 110.08 110.08z"></path>
  </svg>
);

export const IconLingsheng = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={SVGLingsheng} {...props} />
);
