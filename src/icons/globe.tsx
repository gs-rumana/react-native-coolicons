import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGlobe = (props: SvgProps) => (
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
      d="M3 12h5m-5 0a9 9 0 0 0 9 9m-9-9a9 9 0 0 1 9-9m-4 9h8m-8 0c0 4.97 1.79 9 4 9m-4-9c0-4.97 1.79-9 4-9m4 9h5m-5 0c0-4.97-1.79-9-4-9m4 9c0 4.97-1.79 9-4 9m9-9a9 9 0 0 0-9-9m9 9a9 9 0 0 1-9 9"
    />
  </Svg>
);
export default SvgGlobe;
