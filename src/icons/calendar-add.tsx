import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCalendarAdd = (props: SvgProps) => (
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
      d="M4 8h16M4 8v8.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.607c1.118 0 1.677 0 2.104-.218.376-.192.682-.498.874-.874.218-.428.218-.986.218-2.104V8M4 8v-.8c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4H8m12 4v-.803c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.874-.874C18.48 4 17.92 4 16.8 4H16M8 4h8M8 4V2m8 2V2m-1.5 12H12m0 0H9.5m2.5 0v-2.5m0 2.5v2.5"
    />
  </Svg>
);
export default SvgCalendarAdd;
