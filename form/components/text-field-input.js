'use client';

import { useField } from "formik";

const TextFieldInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const defaultStyle =  
        "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 " +
        "bg-white rounded text-sm shadow focus:outline-none " +
        "focus:ring w-full ease-linear transition-all duration-150"; 
  return (
    <>
      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? defaultStyle + " input-error" : defaultStyle}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default TextFieldInput;
