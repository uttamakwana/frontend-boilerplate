// css
import "./loader.css";
// prop types
import PropTypes from "prop-types";
// custom props
import { borderStyles } from "../../../constants/props";

// component
export default function Loader({
  width = "3rem",
  borderWidth = "2px",
  borderStyle = "solid",
  borderColor = "hsl(0, 0%, 75%)",
  borderRightColor = "hsl(0, 0%, 25%)",
  animationTime = "1s",
}) {
  return (
    <div className="| overlay flex-center">
      <div
        className="spinner"
        style={{
          width,
          border: `${borderWidth} ${borderStyle} ${borderColor}`,
          borderRightColor,
          animation: `l2 ${animationTime} infinite linear`,
        }}
      ></div>
    </div>
  );
}

// defining props
Loader.propTypes = {
  width: PropTypes.string,
  borderWidth: PropTypes.string,
  borderStyle: PropTypes.oneOf(borderStyles),
  borderColor: PropTypes.string,
  borderRightColor: PropTypes.string,
  animationTime: PropTypes.string,
};
