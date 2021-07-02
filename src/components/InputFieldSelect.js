import React from "react";

// iF = input Field

class InputFieldSelect extends React.Component {
  render() {
    const { iFLabel, options, chosen, onChange } = this.props;

    return (
      <>
        <div>
          <label>{iFLabel}</label>
          <br />
          <br />
          <select className="form-select" onChange={onChange}>
            <option value="">Choose: </option>
            {options.map((option) => (
              <option
                value={option.text}
                selected={chosen == option.text ? "selected" : ""}
              >
                {option.text}
              </option>
            ))}
          </select>
          <br />
        </div>
      </>
    );
  }
}

export default InputFieldSelect;
