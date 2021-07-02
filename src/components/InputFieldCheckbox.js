import React from "react";

// iF = input Field

class InputFieldCheckbox extends React.Component {
  render() {
    const { iFLabel, iFvalue, onChange, iFChecked } = this.props;

    return (
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={iFvalue}
          onChange={onChange}
          checked={iFChecked}
        />
        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
          {iFLabel}
        </label>
        <br />
        <br />
      </div>
    );
  }
}

export default InputFieldCheckbox;
