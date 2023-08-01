'use client';

import { useField } from "formik";

const CheckboxInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const defaultStyle =  
        "form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"; 
        return (
          <>
            <label className="inline-flex items-center cursor-pointer">
            <input
              {...field}
              {...props}
              className={meta.touched && meta.error ? defaultStyle + " input-error" : defaultStyle}
            />
              <span className="ml-2 text-sm font-semibold text-blueOrange-400">
                {label}
              </span>
            </label>
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
          </>
        );
};
export default CheckboxInput;
