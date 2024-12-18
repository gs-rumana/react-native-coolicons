import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCrop = (props: SvgProps) => (
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
      d="M18 21v-3m0 0H9.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C6 16.48 6 15.92 6 14.8V6m12 12h3M6 6H3m3 0V3m4 3h4.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V14"
    />
  </Svg>
);
export default SvgCrop;
