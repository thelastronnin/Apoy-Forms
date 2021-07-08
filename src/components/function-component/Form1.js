import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  first_name: yup
    .string()
    .required("*This is required")
    .matches(/^[A-Za-z]+$/i, "*Invalid characters"),
  middle_name: yup
    .string()
    .required("*This is required")
    .matches(/^[A-Za-z]+$/i, "*Invalid characters"),
  last_name: yup
    .string()
    .required("*This is required")
    .matches(/^[A-Za-z]+$/i, "*Invalid characters"),
  contact_number: yup
    .string()
    .required("*This is required")
    .matches(/^[0-9]/, "*Invalid characters"),
  email: yup
    .string()
    .required("*This is required")
    .email("*Valid email address only"),
  purpose: yup
    .string()
    .required("*This is required")
    .matches(/^[A-Za-z ]+$/i, "*Invalid characters"),
  id_photo: yup
    .mixed()
    .required("*This is required")
    .test("type", "PNG or JPEG", (value) => {
      return (
        value &&
        (value[0].type === "image/jpeg" || value[0].type === "image/png")
      );
    }),

  docus: yup
    .mixed()
    .required("*This is required")
    .test("type", "PDF only", (value) => {
      return value && value[0].type === "application/pdf";
    }),
});

const Form1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First name</label>
        <p className="error-message">{errors.first_name?.message}</p>
        <input
          type="text"
          className="form-control"
          {...register("first_name")}
        />
      </div>

      <div>
        <label>Middle name</label>
        <p className="error-message">{errors.middle_name?.message}</p>
        <input
          type="text"
          className="form-control"
          {...register("middle_name")}
        />
      </div>

      <div>
        <label>Last name</label>
        <p className="error-message">{errors.last_name?.message}</p>
        <input
          type="text"
          className="form-control"
          {...register("last_name")}
        />
      </div>

      <div>
        <label>Contact number</label>
        <p className="error-message">{errors.contact_number?.message}</p>
        <input
          type="text"
          className="form-control"
          {...register("contact_number")}
        />
      </div>

      <div>
        <label>Email address</label>
        <p className="error-message">{errors.email?.message}</p>
        <input type="email" className="form-control" {...register("email")} />
      </div>

      <div>
        <label>Purpose</label>
        <p className="error-message">{errors.purpose?.message}</p>
        <textarea className="form-control" {...register("purpose")} />
      </div>

      <div>
        <label>ID</label>
        <p className="error-message">{errors.id_photo?.message}</p>
        <input
          type="file"
          className="form-control"
          {...register("id_photo")}
          accept="image/jpeg"
        />
      </div>

      <div>
        <label>Documents</label>
        <p className="error-message">{errors.docus?.message}</p>
        <input
          type="file"
          className="form-control"
          {...register("docus")}
          accept="application/pdf"
        />
      </div>

      <div className="btn-position">
        <input type="submit" className="btn" value="Save" />
      </div>
    </form>
  );
};

export default Form1;
