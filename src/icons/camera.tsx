import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCamera = (props: SvgProps) => (
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
      d="M9.489 7H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 8.52 3 9.08 3 10.2v5.6c0 1.12 0 1.68.218 2.107.192.377.497.683.874.875.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218.377-.192.683-.498.875-.875.218-.427.218-.986.218-2.104v-5.606c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C19.48 7 18.92 7 17.8 7h-3.29M9.49 7h.062m-.062 0h.062m-.062 0c-.106 0-.166 0-.213-.006a1 1 0 0 1-.867-1.203c.012-.054.034-.122.08-.257l.001-.006c.052-.154.077-.23.106-.299a2 2 0 0 1 1.699-1.224C10.368 4 10.449 4 10.61 4h2.778c.162 0 .243 0 .317.005a2 2 0 0 1 1.698 1.224c.029.068.054.145.106.3.046.138.07.207.08.262a1 1 0 0 1-.866 1.203 2 2 0 0 1-.213.006M9.55 7h4.898m0 0h.062m-.062 0h.062M12 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
    />
  </Svg>
);
export default SvgCamera;
