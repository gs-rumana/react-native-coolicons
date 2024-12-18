import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCarAuto = (props: SvgProps) => (
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
      d="M3 11h1.045m0 0h15.91m-15.91 0q.018-.077.04-.153c.036-.12.087-.236.19-.467L5.822 6.9c.305-.687.458-1.032.7-1.284.214-.223.476-.393.766-.498C7.617 5 7.993 5 8.746 5h6.508c.752 0 1.13 0 1.458.118.29.105.552.275.765.498.242.252.395.596.7 1.283l1.553 3.493c.099.223.15.337.185.455q.022.075.04.153m-15.91 0a2 2 0 0 0-.03.174C4 11.3 4 11.426 4 11.68V17m15.955-6H21m-1.046 0q.02.087.03.174c.016.124.016.25.016.5V17m0 0h-4m4 0v1a2 2 0 1 1-4 0v-1m0 0H8m0 0H4m4 0v1a2 2 0 1 1-4 0v-1"
    />
  </Svg>
);
export default SvgCarAuto;
