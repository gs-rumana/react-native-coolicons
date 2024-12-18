import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRuler = (props: SvgProps) => (
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
      d="m6.344 12 2.121 2.122m.707-4.95 2.121 2.12M12 6.344l2.122 2.122M5.07 13.273l8.202-8.203c.792-.792 1.188-1.188 1.645-1.336a2 2 0 0 1 1.236 0c.456.148.852.544 1.643 1.335L18.93 6.2c.792.792 1.188 1.19 1.337 1.646.13.402.13.834 0 1.235-.149.457-.545.853-1.337 1.645l-8.202 8.203c-.792.792-1.189 1.188-1.645 1.336-.402.13-.834.13-1.235 0-.457-.148-.854-.544-1.646-1.336l-1.133-1.133c-.79-.791-1.187-1.187-1.335-1.643a2 2 0 0 1 0-1.236c.148-.457.545-.853 1.337-1.645"
    />
  </Svg>
);
export default SvgRuler;
