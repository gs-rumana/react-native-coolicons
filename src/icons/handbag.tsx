import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHandbag = (props: SvgProps) => (
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
      d="M8 8h-.29c-.962 0-1.443 0-1.834.175a2 2 0 0 0-.847.718c-.237.356-.316.83-.475 1.78l-.933 5.6v.003c-.214 1.28-.32 1.921-.135 2.42.163.439.475.806.88 1.039C4.828 20 5.478 20 6.777 20h10.445c1.3 0 1.95 0 2.413-.265a2 2 0 0 0 .88-1.038c.184-.5.078-1.14-.136-2.42v-.003l-.934-5.6c-.158-.95-.237-1.425-.474-1.781a2 2 0 0 0-.847-.718C17.734 8 17.252 8 16.289 8H16M8 8h8M8 8a4 4 0 1 1 8 0"
    />
  </Svg>
);
export default SvgHandbag;
