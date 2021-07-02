import React from "react";

import InputField from "./InputField";
import InputFieldTextArea from "./InputFieldTextArea";
import InputFieldFile from "./InputFieldFile";
import Button from "./Button";

import { checkName, checkNumber, checkEmail } from "./InputFieldValidations";

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "Aldrin",
      middle_name: "Onin",
      last_name: "Salonga",
      contact: "639212535461",
      email: "Aldrin@gmail.com ",
      purpose: "baranggay clearance",
      image: null,
      document: [],

      error_first_name: "",
      error_middle_name: "",
      error_last_name: "",
      error_contact: "",
      error_email: "",
      error_purpose: "",
      error_image: "",
      error_document: "",
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();

    this.submitPostRequest();
  };

  submitPostRequest = async () => {
    let formData = new FormData();

    formData.append("applicant_first_name", String(this.state.first_name));
    formData.append("applicant_middle_name", String(this.state.middle_name));
    formData.append("applicant_last_name", String(this.state.last_name));
    formData.append("applicant_mobile_number", String(this.state.contact));
    formData.append("applicant_email_address", String(this.state.email));
    formData.append("purpose", String(this.state.purpose));
    formData.append("document_type", String(this.state.purpose));
    formData.append("identification_photo", this.state.image);

    const res = await fetch("https://apoy.tech/request", {
      method: "POST",
      headers: {
        Cookie:
          "csrftoken=FvHKe6w4I35pKswvVSSczSSdBOXF8zO05j8SadPbaxvMyUvJbebYfp8nBtd5TXJ4",
      },
      body: formData,
    });

    const data = await res;

    console.log(data);
  };

  onChangeFirstName = (e) => {
    this.setState({
      first_name: e,
      error_first_name: checkName(e),
    });
  };

  onChangeMiddleName = (e) => {
    this.setState({
      middle_name: e,
      error_middle_name: checkName(e),
    });
  };

  onChangeLastName = (e) => {
    this.setState({
      last_name: e,
      error_last_name: checkName(e),
    });
  };

  onChangeContact = (e) => {
    this.setState({
      contact: e,
      error_contact: checkNumber(e),
    });
  };

  onChangeEmail = (e) => {
    this.setState({
      email: e,
      error_email: checkEmail(e),
    });
  };

  onChangePurpose = (e) => {
    this.setState({
      purpose: e,
      error_purpose: checkName(e),
    });
  };

  onChangeImage = (e) => {
    if (
      e.target.files[0].type === "image/jpeg" ||
      e.target.files[0].type === "image/png"
    ) {
      return this.setState({
        image: e.target.files[0],
      });
    } else {
      return this.setState({
        error_image: "Invalid Image Format",
      });
    }
  };

  onChangePdf = (e) => {
    if (e.target.files[0].type === "application/pdf") {
      for (var x = 0; x <= e.target.files.length - 1; x++) {
        this.setState({
          document: [...this.state.document, e.target.files[x]],
        });
      }
    } else {
      this.setState({
        error_document: "PDF Format Only",
      });
    }
  };

  render() {
    const { title } = this.props;

    var { first_name, middle_name, last_name, contact, email, purpose } =
      this.state;

    return (
      <form className="add-form">
        <h3>{title}</h3>
        {/* FIRST NAME INPUT FIELD */}
        <InputField
          iFLabel="First name"
          iFType="text"
          iFPlaceholder="First name"
          iFvalue={first_name}
          onChange={(e) => this.onChangeFirstName(e.target.value)}
          iFErrorMessage={this.state.error_first_name}
          maxlength="255"
          elName="applicant_first_name"
          fileMultiple={false}
        />

        {/* MIDDLE NAME INPUT FIELD */}
        <InputField
          iFLabel="Middle name"
          iFType="text"
          iFPlaceholder="Middle name"
          iFvalue={middle_name}
          onChange={(e) => this.onChangeMiddleName(e.target.value)}
          iFErrorMessage={this.state.error_middle_name}
          maxlength="255"
          elName="applicant_middle_name"
          fileMultiple={false}
        />

        {/* LAST NAME INPUT FIELD */}
        <InputField
          iFLabel="Last name"
          iFType="text"
          iFPlaceholder="Last name"
          iFvalue={last_name}
          onChange={(e) => this.onChangeLastName(e.target.value)}
          iFErrorMessage={this.state.error_last_name}
          maxlength="255"
          elName="applicant_last_name"
          fileMultiple={false}
        />

        {/* CONTACT INPUT FIELD */}
        <InputField
          iFLabel="Contact number"
          iFType="text"
          iFPlaceholder="+639--------"
          iFvalue={contact}
          onChange={(e) => this.onChangeContact(e.target.value)}
          iFErrorMessage={this.state.error_contact}
          maxlength="255"
          elName="applicant_mobile_number"
          fileMultiple={false}
        />

        {/* EMAIL INPUT FIELD */}
        <InputField
          iFLabel="Email address"
          iFType="text"
          iFPlaceholder="Email address"
          iFvalue={email}
          onChange={(e) => this.onChangeEmail(e.target.value)}
          iFErrorMessage={this.state.error_email}
          maxlength="255"
          elName="applicant_email_address"
          fileMultiple={false}
        />

        {/* PURPOSE INPUT FIELD */}
        <InputFieldTextArea
          iFLabel="Purpose"
          iFPlaceholder="Purpose"
          iFvalue={purpose}
          onChange={(e) => this.onChangePurpose(e.target.value)}
          iFErrorMessage={this.state.error_purpose}
          elName="purpose"
        />

        <InputFieldFile
          iFLabel="ID"
          onChange={(e) => this.onChangeImage(e)}
          iFErrorMessage={this.state.error_image}
          elName="identification_photo"
          fileMultiple={false}
        />

        <InputFieldFile
          iFLabel="Documents"
          onChange={(e) => this.onChangePdf(e)}
          iFErrorMessage={this.state.error_document}
          elName="identification_photo"
          fileMultiple={true}
        />

        <div className="btn-position">
          <Button text="Save" onClick={(e) => this.onSubmit(e)} />
        </div>
      </form>
    );
  }
}

export default Form1;
