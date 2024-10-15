import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWavyCheck = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={props.fill}
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15 10-4 4-2-2m4.246-8.541 1.221 1.04c.308.262.69.42 1.092.453l1.6.128a1.92 1.92 0 0 1 1.761 1.76l.127 1.6c.033.403.192.786.454 1.093l1.04 1.22a1.92 1.92 0 0 1 0 2.492l-1.04 1.221c-.262.308-.421.69-.453 1.093l-.128 1.6a1.92 1.92 0 0 1-1.76 1.761l-1.6.128a1.92 1.92 0 0 0-1.093.452l-1.221 1.04a1.92 1.92 0 0 1-2.492 0l-1.22-1.04a1.92 1.92 0 0 0-1.094-.452l-1.6-.128a1.92 1.92 0 0 1-1.76-1.762l-.128-1.599a1.92 1.92 0 0 0-.453-1.092l-1.04-1.222a1.92 1.92 0 0 1 0-2.49l1.04-1.222c.263-.308.42-.69.452-1.093l.128-1.599A1.92 1.92 0 0 1 6.842 5.08l1.598-.127a1.92 1.92 0 0 0 1.093-.453l1.221-1.04a1.92 1.92 0 0 1 2.492 0"
    />
  </Svg>
);
export default SvgWavyCheck;
