import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWavy = (props: SvgProps) => (
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
      d="m18.92 17.158.128-1.599a1.92 1.92 0 0 1 .453-1.092l1.04-1.222a1.92 1.92 0 0 0 0-2.491L19.5 9.533a1.92 1.92 0 0 1-.454-1.093l-.127-1.6a1.92 1.92 0 0 0-1.762-1.761l-1.599-.128a1.9 1.9 0 0 1-1.092-.452l-1.221-1.04a1.92 1.92 0 0 0-2.492 0l-1.221 1.04c-.308.262-.69.42-1.093.453l-1.6.128m12.08 12.079a1.92 1.92 0 0 1-1.76 1.762m-.001-.001-1.6.127a1.92 1.92 0 0 0-1.092.453l-1.221 1.04a1.92 1.92 0 0 1-2.492 0l-1.22-1.04a1.92 1.92 0 0 0-1.094-.452l-1.6-.128m.002 0A1.92 1.92 0 0 1 5.08 17.16l-.128-1.6a1.92 1.92 0 0 0-.453-1.092l-1.04-1.221a1.92 1.92 0 0 1 0-2.492l1.04-1.221c.263-.308.42-.69.452-1.093l.128-1.6m.001.002A1.92 1.92 0 0 1 6.842 5.08"
    />
  </Svg>
);
export default SvgWavy;
