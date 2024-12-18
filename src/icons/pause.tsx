import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPause = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill={props.fill}
    {...props}
  >
    <G
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <Path d="M15 5.5v13c0 .465 0 .697.038.89a2 2 0 0 0 1.571 1.572c.194.038.426.038.89.038.465 0 .698 0 .892-.038a2 2 0 0 0 1.57-1.572C20 19.2 20 18.97 20 18.512V5.488c0-.457 0-.687-.038-.879a2 2 0 0 0-1.572-1.57C18.197 3 17.965 3 17.5 3s-.697 0-.89.038a2 2 0 0 0-1.572 1.571C15 4.803 15 5.035 15 5.5M4 5.5v13c0 .465 0 .697.038.89a2 2 0 0 0 1.571 1.572c.194.038.426.038.89.038.465 0 .698 0 .892-.038a2 2 0 0 0 1.57-1.572C9 19.2 9 18.97 9 18.512V5.488c0-.457 0-.687-.038-.879A2 2 0 0 0 7.39 3.04C7.197 3 6.965 3 6.5 3s-.697 0-.89.038A2 2 0 0 0 4.037 4.61C4 4.803 4 5.035 4 5.5" />
    </G>
  </Svg>
);
export default SvgPause;
