import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import { render } from "react-dom";
import * as yup from "yup";
// name , email , password

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(2, "name must have at least 2 characters")
        .required(),
      email: yup.string().required(),
      password: yup
        .string()
        .min(6, "password must have at least 6 characters")
        .required(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });
  const nameError = formik.touched.name && formik.errors.name && (
    <span className="text-red-700">{formik.errors.name}</span>
  );
  const emailError = formik.touched.email && formik.errors.email && (
    <span className="text-red-700">{formik.errors.email}</span>
  );

  const passwordError = formik.touched.password && formik.errors.password && (
    <span className="text-red-700">{formik.errors.password}</span>
  );

  const renderForm = (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-10 bg-slate-800 p-5 rounded"
    >
      <div className="flex">
        <label className="basis-[20%] text-white" htmlFor="name">
          Name:
        </label>

        <input
          className="basis-[80%] rounded"
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          required
        />
        {nameError}
      </div>
      <div className="flex">
        <label className="basis-[20%] text-white" htmlFor="email">
          email:
        </label>
        {emailError}
        <input
          className="basis-[80%] rounded"
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />
      </div>
      <div className="flex gap-2">
        <label className="basis-[40%] text-white" htmlFor="password">
          password:
        </label>
        {passwordError}
        <input
          className="basis-[60%] rounded"
          type="password"
          name="password"
          id="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          required
        />
      </div>
      <button
        className="text-white bg-slate-500 rounded text-2xl font-semibold py-2 px-0 uppercase"
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );

  return (
    <div>
      <h2 className="text-4xl text-white uppercase mb-5 font-bold text-center">
        User Sign Up
      </h2>
      {renderForm}
    </div>
  );
};

export default Signup;
