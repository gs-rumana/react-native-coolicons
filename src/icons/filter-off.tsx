import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFilterOff = (props: SvgProps) => (
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
      d="M13 4h5.4c.56 0 .84 0 1.055.109.188.096.34.249.436.437C20 4.76 20 5.04 20 5.6v.745c0 .24 0 .36-.027.474q-.038.154-.12.29c-.062.1-.149.187-.322.36L18 9M7.5 4H5.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C4 4.76 4 5.04 4 5.6v.737c0 .245 0 .367.028.482a1 1 0 0 0 .12.29c.061.1.148.187.32.36l5.063 5.062c.173.173.26.26.321.36q.083.136.12.29c.028.114.028.235.028.474v4.756c0 .857 0 1.286.18 1.544a1 1 0 0 0 .674.416c.311.046.695-.145 1.461-.529l.8-.4c.322-.16.482-.24.599-.36a1 1 0 0 0 .231-.374c.055-.158.055-.338.055-.697v-4.348c0-.245 0-.367.028-.482a1 1 0 0 1 .12-.29c.061-.1.147-.186.319-.358l.002-.002 1.031-1.03m0 0L5 1m10.5 10.5L19 15"
    />
  </Svg>
);
export default SvgFilterOff;
