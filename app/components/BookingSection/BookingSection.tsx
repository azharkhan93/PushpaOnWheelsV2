"use client"
import React from 'react';
import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';


type BookingFormValues = {
  name: string;
  email: string;
  date: string; 
  time: string;
  message?: string;
  phoneNumber: number | string;
}


const initialValues: BookingFormValues = {
  name: '',
  email: '',
  date: '',
  time: '',
  message: '',
  phoneNumber: '',
};


const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  date: Yup.date().required('Date is required'),
  time: Yup.string().required('Time is required'),
  message: Yup.string(),
  phoneNumber: Yup.string().matches(/^[0-9]+$/, 'Must be only digits').required('Phone number is required'),
});


interface BookingSectionProps {}


export const BookingSection: React.FC<BookingSectionProps> = () => {
  // Handle form submission
  const handleSubmit = (values: BookingFormValues, { setSubmitting }: FormikHelpers<BookingFormValues>) => {
    // Handle form submission logic here
    console.log(values);
    // Example: submitForm(values).then(() => setSubmitting(false));
  };

  return (
    <div id="Booking" className="flex items-center justify-center flex-col min-h-screen bg-gray-800 py-6 w-full gap-3" style={{backgroundColor:"#FF00FF"}}>
      <h2 className="text-4xl lg:text-5xl text-white text-start mt-8">Book Your Table</h2>
      <div className="w-[200px] h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-md"></div>
      <p className="text-lg text-white mb-6 w-[80%] lg:w-[50%] font-quicksand">
        Fill out the form below to book a table at our restaurant. We offer a variety of vegetarian foods and a top-notch dining experience.
      </p>
      <div className="w-[92%] lg:w-[80%] overflow-hidden flex items-center shadow-slate-950">
        <div className="lg:w-[800px] h-[500px] relative shadow-slate-950 rounded-lg">
          <Image src="/images/veg.jpg" alt="Booking Image" layout="fill" objectFit="cover" className="rounded-md shadow-slate-950" />
        </div>
        {/* Form Section */}
        <div className="w-[650px] p-8 border-3 bg-black rounded-l-3xl">
          <h2 className="text-2xl font-semibold text-white mb-4">Book Your Table</h2>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white">
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-4">
                  <label htmlFor="phoneNumber" className="block text-white">
                    Phone Number
                  </label>
                  <Field
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-white">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className='flex  justify-between'>
                <div className="mb-4">
                  <label htmlFor="date" className="block text-white">
                    Date
                  </label>
                  <Field
                    type="date"
                    id="date"
                    name="date"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="date" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-4">
                  <label htmlFor="time" className="block text-white">
                    Time
                  </label>
                  <Field
                    type="time"
                    id="time"
                    name="time"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage name="time" component="div" className="text-red-500 text-sm mt-1" />
                </div>
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
                  className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-white rounded-r-3xl rounded-b-3xl border-2 border-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};






