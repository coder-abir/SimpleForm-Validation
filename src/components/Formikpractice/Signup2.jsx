import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
const Signup2 = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "must be minimum 3 character")
        .required("Required"),
      email: Yup.string().required("Email is Required"),
      password: Yup.string()
        .min(8, "Password must be 8 characters long")
        .required("Required"),
    }),

    onSubmit: (values) => {
      console.log(values);
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

  return (
    <div className="bg-slate-800 p-5 rounded">
      <h1 className="text-4xl text-center text-white uppercase mb-5 font-bold">
        SignUP form
      </h1>
      <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
        <div className="flex gap-5">
          <label
            htmlFor="name"
            className="basis-[20%] text-white font-semibold text-xl"
          >
            Name:
          </label>
          {nameError}
          <input
            className="basis-[80%] outline-none pl-2"
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div className="flex gap-5">
          <label
            htmlFor="email"
            className="basis-[20%] text-white font-semibold text-xl"
          >
            email:
          </label>
          {emailError}
          <input
            className="basis-[80%] outline-none pl-2"
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="flex gap-5">
          <label
            htmlFor="password"
            className="basis-[20%] text-white font-semibold text-xl"
          >
            password:
          </label>
          {passwordError}
          <input
            className="basis-[80%] outline-none pl-2"
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-slate-500 rounded py-2 font-semibold uppercase"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup2;
