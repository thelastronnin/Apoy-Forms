import React from "react";

// iF = input Field

class InputField extends React.Component {
  render() {
    const {
      iFLabel,
      iFType,
      iFPlaceholder,
      iFvalue,
      onChange,
      iFErrorMessage,
      maxlength,
      elName,
    } = this.props;

    return (
      <div>
        <label>{iFLabel}</label>
        <br />
        {iFErrorMessage !== "" && (
          <label className="error-message">{iFErrorMessage}</label>
        )}

        <input
          className="form-control"
          type={iFType}
          placeholder={iFPlaceholder}
          value={iFvalue}
          onChange={onChange}
          style={
            iFErrorMessage !== ""
              ? { borderColor: "red", borderWidth: "3px" }
              : {}
          }
          maxLength={maxlength}
          name={elName}
        />
      </div>
    );
  }
}

export default InputField;
