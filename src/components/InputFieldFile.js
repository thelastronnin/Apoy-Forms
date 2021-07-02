import React, { Component } from "react";

export class InputFieldFile extends Component {
  render() {
    const { iFLabel, onChange, iFErrorMessage, elName, fileMultiple } =
      this.props;
    return (
      <div>
        <label>{iFLabel}</label>
        <br />
        {iFErrorMessage !== "" && (
          <label className="error-message">{iFErrorMessage}</label>
        )}

        <input
          className="form-control"
          type="file"
          onChange={onChange}
          style={
            iFErrorMessage !== ""
              ? { borderColor: "red", borderWidth: "3px" }
              : {}
          }
          name={elName}
          multiple={fileMultiple}
        />
      </div>
    );
  }
}

export default InputFieldFile;
