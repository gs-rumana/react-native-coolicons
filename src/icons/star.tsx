import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStar = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.335 10.337a.5.5 0 0 1 .28-.864l6.004-.712a.5.5 0 0 0 .396-.287l2.532-5.49a.5.5 0 0 1 .908 0l2.532 5.49a.5.5 0 0 0 .395.287l6.004.712a.5.5 0 0 1 .28.864l-4.438 4.105a.5.5 0 0 0-.15.464l1.177 5.93a.5.5 0 0 1-.735.534l-5.275-2.953a.5.5 0 0 0-.488 0l-5.276 2.952a.5.5 0 0 1-.735-.533l1.178-5.93a.5.5 0 0 0-.15-.464z"
    />
  </Svg>
);
export default SvgStar;