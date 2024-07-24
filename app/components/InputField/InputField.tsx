"use client"
import { Field, ErrorMessage } from 'formik';
type FormFieldProps = {
    label: string;
    name: string;
    type: string;
  }

export const InputField:React.FC<FormFieldProps> = ({label, name , type}) => {
    return (

        <div className="mb-4">
      <label htmlFor={name} className="block text-white">
        {label}
      </label>
      <Field
        type={type}
        id={name}
        name={name}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
    </div>


    );
}