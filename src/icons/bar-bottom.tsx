import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBarBottom = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill={props.fill}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 15H4m16 0V7.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C18.48 4 17.92 4 16.8 4H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 5.52 4 6.08 4 7.2V15m16 0v1.803c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.875c-.427.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.875C4 18.48 4 17.92 4 16.8V15"
    />
  </Svg>
);
export default SvgBarBottom;
