import React, { Component } from "react";

import InputField from "./InputField";
import InputFieldSelect from "./InputFieldSelect";
import InputFieldCheckbox from "./InputFieldCheckbox";
import Button from "./Button";

import { checkName, checkAddress, checkNumber } from "./InputFieldValidations";

export class Form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      head_first_name: "",
      head_middle_name: "",
      head_last_name: "",
      head_address: "",
      head_working: false,
      head_working_status: [
        {
          id: 1,
          text: "Regular",
          value: "Regular",
        },
        {
          id: 2,
          text: "Contractual",
          value: "Contractual",
        },
        {
          id: 3,
          text: "Seasonal",
          value: "Seasonal",
        },
      ],
      selected_head_working_status: "",

      total_legal_age: "",
      total_minor: "",

      legal_age_first_name: "",
      legal_age_middle_name: "",
      legal_age_last_name: "",
      legal_age_address: "",
      legal_age_civil_status: [
        {
          id: 1,
          text: "Single",
          value: "Single",
        },
        {
          id: 2,
          text: "Married",
          value: "Married",
        },
        {
          id: 3,
          text: "Separated",
          value: "Separated",
        },
        {
          id: 4,
          text: "Live in",
          value: "Live in",
        },
        {
          id: 5,
          text: "Widow/Widowee",
          value: "Widow",
        },
      ],
      legal_age_age: "",
      legal_age_birthdate: "",
      selected_legal_age_civil_status: "",
      legal_age_educational_attainment: [
        {
          id: 1,
          text: "College",
          value: "College",
        },
        {
          id: 2,
          text: "Senior High",
          value: "Senior High",
        },
        {
          id: 3,
          text: "Elementary",
          value: "Elementary",
        },
      ],
      selected_legal_age_educational_attainment: "",
      legal_age_working: false,
      legal_age_working_status: [
        {
          id: 1,
          text: "Regular",
          value: "Regular",
        },
        {
          id: 2,
          text: "Contractual",
          value: "Contractual",
        },
        {
          id: 3,
          text: "Seasonal",
          value: "Seasonal",
        },
      ],
      legal_age_monthly_income: "",

      minor_first_name: "",
      minor_middle_name: "",
      minor_last_name: "",
      minor_address: "",
      minor_age: "",
      minor_birthdate: "",
      minor_educational_attainment: [
        {
          id: 1,
          text: "College",
          value: "College",
        },
        {
          id: 2,
          text: "Senior High",
          value: "Senior High",
        },
        {
          id: 3,
          text: "Elementary",
          value: "Elementary",
        },
      ],
      selected_minor_educational_attainment: "",
      minor_studying: false,
      minor_studying_type: [
        {
          id: 1,
          text: "Private",
          value: "Private",
        },
        {
          id: 2,
          text: "Public",
          value: "Public",
        },
      ],
      selected_minor_studying_type: "",

      error_head_first_name: "",
      error_head_middle_name: "",
      error_head_last_name: "",
      error_head_address: "",
      error_head_working: "",
      error_head_monthly_income: "",

      error_total_legal_age: "",
      error_total_minor: "",

      error_legal_age_first_name: "",
      error_legal_age_middle_name: "",
      error_legal_age_last_name: "",
      error_legal_age_address: "",
      error_legal_age_birthdate: "",
      error_legal_age_civil_status: "",
      error_legal_age_age: "",
      error_selected_legal_age_civil_status: "",
      error_selected_legal_age_educational_attainment: "",
      error_legal_age_working: "",
      error_legal_age_monthly_income: "",

      error_minor_first_name: "",
      error_minor_middle_name: "",
      error_minor_last_name: "",
      error_minor_address: "",
      error_minor_age: "",
      error_minor_birthdate: "",
      error_selected_minor_educational_attainment: "",
      error_minor_studying: "",

      page: Number(1),

      count_total_legal_age: [],
      count_string_total_legal_age: "",

      count_total_minor: [],
      count_string_total_minor: "",
    };
  }

  onChangeFirstName = (e) => {
    this.setState({ head_first_name: e, error_head_first_name: checkName(e) });
  };

  onChangeMiddleName = (e) => {
    this.setState({
      head_middle_name: e,
      error_head_middle_name: checkName(e),
    });
  };

  onChangeLastName = (e) => {
    this.setState({ head_last_name: e, error_head_last_name: checkName(e) });
  };

  onChangeAddress = (e) => {
    this.setState({ head_address: e, error_head_address: checkAddress(e) });
  };

  onChangeTotalLegalAge = (value) => {
    this.setState({
      error_total_legal_age: checkNumber(value),
      total_legal_age: value,
      count_total_legal_age: [],
      count_string_total_legal_age: "",
    });

    this.totalLegalAge(value);
  };

  totalLegalAge = (value) => {
    // PLEASE READ HOUSEHOLD DOCUMENTATION
    if (value !== "" && value > 0) {
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        for (var x = 1; x <= value; x++) {
          if (x < value) {
            this.setState({
              count_string_total_legal_age:
                (this.state.count_string_total_legal_age += x + ","),
            });
          }
          if (x == value) {
            this.setState({
              count_string_total_legal_age:
                (this.state.count_string_total_legal_age += x),
            });
          }
        }

        this.setState({
          count_total_legal_age:
            this.state.count_string_total_legal_age.split(","),
        });
      }, 800);
    }
    // alert("Legal Age");
  };

  onChangeTotalMinor = (value) => {
    this.setState({
      error_total_minor: checkNumber(value),
      total_minor: value,
      count_total_minor: [],
      count_string_total_minor: "",
    });

    this.totalMinor(value);
  };

  totalMinor = (value) => {
    // PLEASE READ HOUSEHOLD DOCUMENTATION
    if (value !== "" && value > 0) {
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        for (var x = 1; x <= value; x++) {
          if (x < value) {
            this.setState({
              count_string_total_minor: (this.state.count_string_total_minor +=
                x + ","),
            });
          }
          if (x == value) {
            this.setState({
              count_string_total_minor: (this.state.count_string_total_minor +=
                x),
            });
          }
        }

        this.setState({
          count_total_minor: this.state.count_string_total_minor.split(","),
        });
      }, 800);
    }
    // alert("Minor");
  };

  onChangeMonthlyIncome = (e) => {
    this.setState({
      head_monthly_income: e,
      error_head_monthly_income: checkNumber(e),
    });
  };

  onChangeLegalAgeFirstName = (e) => {
    this.setState({
      legal_age_first_name: e,
      error_legal_age_first_name: checkName(e),
    });
  };

  onChangeLegalAgeMiddleName = (e) => {
    this.setState({
      legal_age_middle_name: e,
      error_legal_age_middle_name: checkName(e),
    });
  };

  onChangeLegalAgeLastName = (e) => {
    this.setState({
      legal_age_last_name: e,
      error_legal_age_last_name: checkName(e),
    });
  };

  onChangeLegalAgeAddress = (e) => {
    this.setState({
      legal_age_address: e,
      error_legal_age_address: checkAddress(e),
    });
  };

  onChangeLegalAgeAge = (e) => {
    this.setState({
      legal_age_age: e,
      error_legal_age_age: checkNumber(e),
    });
  };

  onChangeLegalAgeBirthdate = (e) => {
    this.setState({ legal_age_birthdate: e });
  };

  onChangeLegalAgeMonthlyIncome = (e) => {
    this.setState({
      legal_age_monthly_income: e,
      error_legal_age_monthly_income: checkNumber(e),
    });
  };

  onChangeMinorFirstName = (e) => {
    this.setState({
      minor_first_name: e,
      error_minor_first_name: checkName(e),
    });
  };

  onChangeMinorMiddleName = (e) => {
    this.setState({
      minor_middle_name: e,
      error_minor_middle_name: checkName(e),
    });
  };

  onChangeMinorLastName = (e) => {
    this.setState({
      minor_last_name: e,
      error_minor_last_name: checkName(e),
    });
  };

  onChangeMinorAge = (e) => {
    this.setState({
      minor_age: e,
      error_minor_age: checkNumber(e),
    });
  };

  onChangeMinorBirthdate = (e) => {
    this.setState({ minor_birthdate: e });
  };

  onClickNext = () => {
    if (Number(this.state.page) > 0 && Number(this.state.page) < 3) {
      this.setState({
        page: Number(this.state.page + 1),
      });
    }
  };

  onClickPrev = () => {
    if (this.state.page > 1 && this.state.page < 4) {
      this.setState({
        page: Number(this.state.page - 1),
      });
    }
  };

  render() {
    return (
      <>
        <div>
          {/* HEAD OF THE FAMILY */}
          {this.state.page === Number(1) && (
            <div>
              <h4>Head of the Family</h4>

              <InputField
                iFLabel="First name"
                iFType="text"
                iFPlaceholder="First name"
                iFvalue={this.state.head_first_name}
                onChange={(e) => this.onChangeFirstName(e.target.value)}
                iFErrorMessage={this.state.error_head_first_name}
                maxlength="255"
                elName="head_first_name"
              />

              <InputField
                iFLabel="Middle name"
                iFType="text"
                iFPlaceholder="Middle name"
                iFvalue={this.state.head_middle_name}
                onChange={(e) => this.onChangeMiddleName(e.target.value)}
                iFErrorMessage={this.state.error_head_middle_name}
                maxlength="255"
                elName="head_middle_name"
              />

              <InputField
                iFLabel="Last name"
                iFType="text"
                iFPlaceholder="Last name"
                iFvalue={this.state.head_last_name}
                onChange={(e) => this.onChangeLastName(e.target.value)}
                iFErrorMessage={this.state.error_head_last_name}
                maxlength="255"
                elName="head_last_name"
              />

              <InputField
                iFLabel="Address"
                iFType="text"
                iFPlaceholder="Address"
                iFvalue={this.state.head_address}
                onChange={(e) => this.onChangeAddress(e.target.value)}
                iFErrorMessage={this.state.error_head_address}
                maxlength="255"
                elName="head_address"
              />

              <InputField
                iFLabel="Total legal age in the household"
                iFType="text"
                iFPlaceholder="Total legal age in the household"
                iFvalue={this.state.total_legal_age}
                onChange={(e) => this.onChangeTotalLegalAge(e.target.value)}
                iFErrorMessage={this.state.error_total_legal_age}
                maxlength="255"
                elName="total_legal_age"
              />

              <InputField
                iFLabel="Total minor in the household"
                iFType="text"
                iFPlaceholder="Total minor in the household"
                iFvalue={this.state.total_minor}
                onChange={(e) => this.onChangeTotalMinor(e.target.value)}
                iFErrorMessage={this.state.error_total_minor}
                maxlength="255"
                elName="total_minor"
              />

              <InputFieldCheckbox
                iFLabel="Working?"
                iFvalue={this.state.head_working}
                onChange={(e) =>
                  this.setState({
                    head_working: e.target.checked,
                  })
                }
                iFChecked={this.state.head_working}
              />

              {this.state.head_working && (
                <>
                  <InputFieldSelect
                    iFLabel="Working Status"
                    options={this.state.head_working_status}
                    chosen={this.state.selected_head_working_status}
                    onChange={(e) =>
                      this.setState({
                        selected_head_working_status: e.target.selected,
                      })
                    }
                  />

                  <InputField
                    iFLabel="Monthly Income"
                    iFType="text"
                    iFPlaceholder="Monthly Income"
                    iFvalue={this.state.head_monthly_income}
                    onChange={(e) => this.onChangeMonthlyIncome(e.target.value)}
                    iFErrorMessage={this.state.error_head_monthly_income}
                    maxlength="255"
                    elName="head_monthly_income"
                  />
                </>
              )}
            </div>
          )}

          {/* LEGAL AGE */}
          {this.state.page === Number(2) && (
            <div>
              {this.state.count_total_legal_age.map((count) => (
                <>
                  <h4>Legal ages of the Family</h4>

                  <InputField
                    iFLabel="First name"
                    iFType="text"
                    iFPlaceholder="First name"
                    iFvalue={this.state.legal_age_first_name}
                    onChange={(e) =>
                      this.onChangeLegalAgeFirstName(e.target.value)
                    }
                    iFErrorMessage={this.state.error_legal_age_first_name}
                    maxlength="255"
                    elName="legal_age_first_name"
                  />

                  <InputField
                    iFLabel="Middle name"
                    iFType="text"
                    iFPlaceholder="Middle name"
                    iFvalue={this.state.legal_age_middle_name}
                    onChange={(e) =>
                      this.onChangeLegalAgeMiddleName(e.target.value)
                    }
                    iFErrorMessage={this.state.error_legal_age_middle_name}
                    maxlength="255"
                    elName="legal_age_middle_name"
                  />

                  <InputField
                    iFLabel="Last name"
                    iFType="text"
                    iFPlaceholder="Last name"
                    iFvalue={this.state.legal_age_last_name}
                    onChange={(e) =>
                      this.onChangeLegalAgeLastName(e.target.value)
                    }
                    iFErrorMessage={this.state.error_head_last_name}
                    maxlength="255"
                    elName="legal_age_last_name"
                  />

                  <InputFieldSelect
                    iFLabel="Civil Status"
                    options={this.state.legal_age_civil_status}
                    chosen={this.state.selected_legal_age_civil_status}
                    onChange={(e) =>
                      this.setState({
                        selected_legal_age_civil_status: e.target.selected,
                      })
                    }
                  />

                  <InputField
                    iFLabel="Age"
                    iFType="text"
                    iFPlaceholder="Age"
                    iFvalue={this.state.legal_age_age}
                    onChange={(e) => this.onChangeLegalAgeAge(e.target.value)}
                    iFErrorMessage={this.state.error_legal_age_age}
                    maxlength="255"
                    elName="legal_age_age"
                  />

                  <InputField
                    iFLabel="Birthdate"
                    iFType="date"
                    iFPlaceholder=""
                    iFvalue={this.state.legal_age_birthdate}
                    onChange={(e) =>
                      this.onChangeLegalAgeBirthdate(e.target.value)
                    }
                    iFErrorMessage={this.state.error_legal_age_birthdate}
                    maxlength="255"
                    elName="legal_age_birthdate"
                  />

                  <InputFieldSelect
                    iFLabel="Educational Attainment"
                    options={this.state.legal_age_educational_attainment}
                    chosen={
                      this.state.selected_legal_age_educational_attainment
                    }
                    onChange={(e) =>
                      this.setState({
                        selected_legal_age_educational_attainment:
                          e.target.selected,
                      })
                    }
                  />

                  <InputFieldCheckbox
                    iFLabel="Working?"
                    iFvalue={this.state.legal_age_working}
                    onChange={(e) =>
                      this.setState({
                        legal_age_working: e.target.checked,
                      })
                    }
                    iFChecked={this.state.legal_age_working}
                  />

                  {this.state.legal_age_working && (
                    <>
                      <InputFieldSelect
                        iFLabel="Working Status"
                        options={this.state.legal_age_working_status}
                        chosen={this.state.selected_legal_age_working_status}
                        onChange={(e) =>
                          this.setState({
                            selected_legal_age_working_status:
                              e.target.selected,
                          })
                        }
                      />

                      <InputField
                        iFLabel="Monthly Income"
                        iFType="text"
                        iFPlaceholder="Monthly Income"
                        iFvalue={this.state.legal_age_monthly_income}
                        onChange={(e) =>
                          this.onChangeLegalAgeMonthlyIncome(e.target.value)
                        }
                        iFErrorMessage={
                          this.state.error_legal_age_monthly_income
                        }
                        maxlength="255"
                        elName="legal_age_monthly_income"
                      />
                    </>
                  )}
                </>
              ))}
            </div>
          )}

          {/* MINOR */}
          {this.state.page === Number(3) && (
            <div>
              {this.state.count_total_minor.map((count) => (
                <>
                  <h4>Minors of the Family</h4>

                  <InputField
                    iFLabel="First name"
                    iFType="text"
                    iFPlaceholder="First name"
                    iFvalue={this.state.minor_first_name}
                    onChange={(e) =>
                      this.onChangeMinorFirstName(e.target.value)
                    }
                    iFErrorMessage={this.state.error_minor_first_name}
                    maxlength="255"
                    elName="minor_first_name"
                  />

                  <InputField
                    iFLabel="Middle name"
                    iFType="text"
                    iFPlaceholder="Middle name"
                    iFvalue={this.state.minor_middle_name}
                    onChange={(e) =>
                      this.onChangeMinorMiddleName(e.target.value)
                    }
                    iFErrorMessage={this.state.error_minor_middle_name}
                    maxlength="255"
                    elName="minor_middle_name"
                  />

                  <InputField
                    iFLabel="Last name"
                    iFType="text"
                    iFPlaceholder="Last name"
                    iFvalue={this.state.minor_last_name}
                    onChange={(e) => this.onChangeMinorLastName(e.target.value)}
                    iFErrorMessage={this.state.error_minor_last_name}
                    maxlength="255"
                    elName="minor_last_name"
                  />

                  <InputField
                    iFLabel="Age"
                    iFType="text"
                    iFPlaceholder="Age"
                    iFvalue={this.state.minor_age}
                    onChange={(e) => this.onChangeMinorAge(e.target.value)}
                    iFErrorMessage={this.state.error_minor_age}
                    maxlength="255"
                    elName="minor_age"
                  />

                  <InputField
                    iFLabel="Birthdate"
                    iFType="date"
                    iFPlaceholder=""
                    iFvalue={this.state.minor_birthdate}
                    onChange={(e) =>
                      this.onChangeMinorBirthdate(e.target.value)
                    }
                    iFErrorMessage={this.state.error_minor_birthdate}
                    maxlength="255"
                    elName="minor_birthdate"
                  />

                  <InputFieldCheckbox
                    iFLabel="Studying?"
                    iFvalue={this.state.minor_studying}
                    onChange={(e) =>
                      this.setState({
                        minor_studying: e.target.checked,
                      })
                    }
                    iFChecked={this.state.minor_studying}
                  />

                  {this.state.minor_studying && (
                    <>
                      <InputFieldSelect
                        iFLabel="Educational Attainment"
                        options={this.state.minor_educational_attainment}
                        chosen={
                          this.state.selected_minor_educational_attainment
                        }
                        onChange={(e) =>
                          this.setState({
                            selected_minor_educational_attainment:
                              e.target.selected,
                          })
                        }
                      />

                      <InputFieldSelect
                        iFLabel="School type"
                        options={this.state.minor_studying_type}
                        chosen={this.state.selected_minor_studying_type}
                        onChange={(e) =>
                          this.setState({
                            selected_minor_studying_type: e.target.selected,
                          })
                        }
                      />
                    </>
                  )}
                </>
              ))}
            </div>
          )}

          <div className="div-form-2-pagination-container">
            <div className="div-form-2-pagination-container-items">
              <Button
                color="black"
                text="Prev"
                onClick={() => this.onClickPrev()}
              />
            </div>

            <div className="div-form-2-pagination-container-items">
              <p>Page {this.state.page} of 3</p>
            </div>

            <div>
              <Button
                color="black"
                text="Next"
                onClick={() => this.onClickNext()}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Form2;
