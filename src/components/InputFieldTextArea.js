import React from "react";

class InputFieldTextArea extends React.Component {
  render() {
    const { iFLabel, iFPlaceholder, iFvalue, onChange, iFErrorMessage, elName } =
      this.props;

    return (
      <div>
        <label>{iFLabel}</label>
        <br />
        {iFErrorMessage !== "" && (
          <label className="error-message">{iFErrorMessage}</label>
        )}
        <textarea
          className="form-control"
          // name="textarea"
          onChange={onChange}
          value={iFvalue}
          placeholder={iFPlaceholder}
          style={
            iFErrorMessage !== ""
              ? { borderColor: "red", borderWidth: "3px" }
              : {}
          }
          name={elName}
        />
      </div>
    );
  }
}

export default InputFieldTextArea;
