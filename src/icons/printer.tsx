import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPrinter = (props: SvgProps) => (
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
      d="M18 17c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 15.398 21 14.932 21 14v-3.803c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C19.506 7.013 18.988 7.001 18 7m0 0H6m12 0H6m12 0v-.803c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C16.48 3 15.92 3 14.8 3H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 4.52 6 5.08 6 6.2V7m0 0c-.988 0-1.507.013-1.908.218a2 2 0 0 0-.874.874C3 8.52 3 9.08 3 10.2V14c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.082 1.083C4.602 17 5.068 17 6 17m4-6h4m-5 4h6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.082C18 16.602 18 17.068 18 18s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C16.398 21 15.932 21 15 21H9c-.932 0-1.398 0-1.766-.152a2 2 0 0 1-1.082-1.082C6 19.398 6 18.932 6 18s0-1.398.152-1.766a2 2 0 0 1 1.082-1.082C7.602 15 8.068 15 9 15"
    />
  </Svg>
);
export default SvgPrinter;
