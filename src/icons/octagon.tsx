import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgOctagon = (props: SvgProps) => (
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
      d="M14.405 21H9.594c-.49 0-.734 0-.964-.056a2 2 0 0 1-.578-.239c-.202-.123-.374-.296-.72-.642L3.938 16.67c-.346-.346-.52-.519-.643-.72a2 2 0 0 1-.24-.579C3 15.14 3 14.895 3 14.405V9.594c0-.49 0-.734.055-.964q.075-.308.24-.578c.122-.2.293-.37.633-.71l.01-.01 3.394-3.394.01-.01c.34-.34.51-.51.71-.633q.27-.165.578-.24C8.86 3 9.105 3 9.594 3h4.811c.49 0 .735 0 .965.055.204.05.4.13.578.24.202.124.375.297.72.643l3.395 3.394c.346.346.519.518.642.72q.165.27.24.578c.055.23.055.475.055.964v4.811m0 .001c0 .49 0 .734-.056.964-.049.204-.129.4-.239.578-.123.202-.296.375-.642.72l-3.394 3.395c-.346.346-.519.519-.72.642q-.271.165-.579.24c-.23.055-.475.055-.964.055"
    />
  </Svg>
);
export default SvgOctagon;