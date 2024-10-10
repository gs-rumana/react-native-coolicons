import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgOctagonHelp = (props: SvgProps) => (
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
      d="M9.146 9.074a2.998 2.998 0 0 1 5.28-.838A3 3 0 0 1 12 13v1m.05 3v.1h-.1V17zM7.332 3.938 3.938 7.332l-.004.003c-.343.343-.516.516-.64.717q-.164.27-.239.578C3 8.86 3 9.105 3 9.594v4.812c0 .489 0 .733.055.964a2 2 0 0 0 .24.578c.124.201.297.375.643.72l3.394 3.395c.346.346.518.518.72.642q.27.165.578.24c.23.055.474.055.962.055h4.816c.487 0 .732 0 .962-.055.204-.05.4-.13.578-.24.202-.124.375-.296.72-.642l3.395-3.394c.346-.346.519-.52.642-.721q.165-.271.24-.578c.055-.23.055-.475.055-.964V9.594c0-.489 0-.733-.056-.964a2 2 0 0 0-.239-.578c-.123-.202-.296-.374-.642-.72L16.67 3.938c-.346-.346-.519-.52-.72-.643a2 2 0 0 0-.579-.24C15.14 3 14.895 3 14.405 3H9.594c-.49 0-.734 0-.964.055q-.308.075-.578.24c-.2.122-.37.293-.71.633z"
    />
  </Svg>
);
export default SvgOctagonHelp;
