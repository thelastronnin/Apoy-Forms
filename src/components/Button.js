import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  render() {
    const { color, text, onClick } = this.props;

    return (
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
}

Button.defaultProps = {
  color: "green",
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
