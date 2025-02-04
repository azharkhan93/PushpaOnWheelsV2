"use client";
import React from "react";
import Image from "next/image";
import { Formik, Form, FormikHelpers, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { API_URL } from "@/constants";
import { InputField } from "../InputField";
import { FaSpinner } from "react-icons/fa";

type BookingFormValues = {
  name: string;
  email: string;
  date: string;
  time: string;
  message?: string;
  phoneNumber: number | string;
};

const initialValues: BookingFormValues = {
  name: "",
  email: "",
  date: "",
  time: "",
  message: "",
  phoneNumber: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  date: Yup.date().required("Date is required"),
  time: Yup.string().required("Time is required"),
  message: Yup.string(),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("Phone number is required"),
});

interface BookingSectionProps {}

export const BookingSection: React.FC<BookingSectionProps> = () => {
  const handleSubmit = async (
    values: BookingFormValues,
    { setSubmitting, resetForm }: FormikHelpers<BookingFormValues>
  ) => {
    try {
      const response = await axios.post(API_URL, values);
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Booking request sent",
          showConfirmButton: false,
          timer: 1500,
        });
        resetForm();
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Failed to send booking request",
        text: "Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      id="Booking"
      className="flex items-center justify-center flex-col min-h-screen bg-magenta py-6 w-full gap-3"
    >
      <h2 className="text-4xl lg:text-5xl text-white text-start mt-8">
        Terrace Booking Form
      </h2>
      <div className="w-[200px] h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-md"></div>
      <p className="text-lg text-white mb-6 w-[80%] lg:w-[50%] font-quicksand capitalize">
        Fill out the form below to book a table at our restaurant. We offer a
        variety of vegetarian foods and a top-notch dining experience.
      </p>
      <div className="w-[92%] lg:w-[80%] overflow-hidden flex items-center shadow-slate-950">
        <div className="lg:w-[800px] h-[500px] relative shadow-slate-950 rounded-lg ">
          <Image
            src="/images/veg.jpg"
            alt="Booking Image"
            layout="fill"
            objectFit="cover"
            className="rounded-md shadow-slate-950"
          />
        </div>
        <div className="w-[650px] p-8 border-3 bg-black rounded-l-3xl ">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Enter Your Details
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <InputField label="Name" name="name" type="text" />
                <InputField label="Phone Number" name="phoneNumber" type="number" />
                <InputField label="Email" name="email" type="email" />
                <div className="flex justify-between">
                  <InputField label="Date" name="date" type="date" />
                  <InputField label="Time" name="time" type="time" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-white">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-white rounded-r-3xl rounded-b-3xl border-2 border-white flex justify-center items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <FaSpinner size={20} className="animate-spin" /> : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};


