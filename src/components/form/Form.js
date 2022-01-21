import React from "react";
import PropTypes from "prop-types";

const Form = ({ children, spacing = 2, direction = "row", wrap = false }) => {
  const style = {
    display: "flex",
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? "wrap" : "nowrap",
    flexDirection: direction,
  };
  return <form style={style}>{children}</form>;
};
Form.propTypes = {
  spacing: PropTypes.number,
  wrap: PropTypes.bool,
  direction: PropTypes.oneOf(["row", "column"]),
};

export default Form;
