import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMobileButton = (props: SvgProps) => (
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
      d="M7 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h3.606c1.118 0 1.677 0 2.104-.218.377-.192.683-.498.875-.874.218-.428.218-.986.218-2.104V6.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C15.48 3 14.92 3 13.8 3h-3.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C7 4.52 7 5.08 7 6.2"
    />
  </Svg>
);
export default SvgMobileButton;
