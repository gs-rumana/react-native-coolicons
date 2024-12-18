import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMailOpen = (props: SvgProps) => (
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
      d="m4 10 6.108 4.612.002.002c.678.497 1.017.746 1.389.842.328.085.673.085 1.002 0 .372-.096.712-.346 1.392-.844L20 10m-.2-.96-5.599-4.483c-.695-.557-1.043-.835-1.43-.946a2 2 0 0 0-1.046-.014c-.389.1-.744.368-1.454.905L4.27 9.04c-.466.352-.699.528-.867.75a2 2 0 0 0-.327.658C3 10.716 3 11.008 3 11.592V17.8c0 1.12 0 1.68.218 2.108.192.377.497.682.874.874.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218.377-.192.683-.498.875-.874.218-.427.218-.987.218-2.105v-6.276c0-.558 0-.838-.071-1.097a2 2 0 0 0-.31-.642c-.159-.22-.378-.396-.819-.749"
    />
  </Svg>
);
export default SvgMailOpen;
