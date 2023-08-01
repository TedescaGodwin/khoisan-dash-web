'use client';

import { useField } from "formik";

const SearchFieldInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const defaultStyle =  
        "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 " +
        "bg-white rounded text-sm shadow focus:outline-none " +
        "focus:ring w-full ease-linear transition-all duration-150" +
        "block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"; 
  return (
    <>
      <label htmlFor={props.id} className="block uppercase text-blueGray-600 text-xs font-bold mb-2">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="mt-3 w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
            </path>
          </svg>    
        </div>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? defaultStyle + " input-error" : defaultStyle}
      />

      </div>
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
      
    </>
  );
};
export default SearchFieldInput;
