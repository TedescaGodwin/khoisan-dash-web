'use client'

import Image from 'next/image'
import registerValidationSchema from "form/validation-schema/registration-validation-schema";
import { Form, Formik } from "formik";
import TextFieldInput from "form/components/text-field-input";
import CheckboxInput from "form/components/text-field-input";
import { showSuccess, showError } from "form/utils/alert-service";
import {baseUrl} from "env-config";

const onSubmit = async (values, actions) => {
  const response = await  fetch(`${baseUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  }).catch(err => {
    console.log(err.response.data);
  });
  console.log(response);
  if (response.ok){
    showSuccess('Reg successful');
    }else{      
      showError('🦄 Failed successful');
    }
  
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};
const RegisterPage = () => {
  
  return (
    <Formik
      initialValues={{ username:"", password:"", email: ""}}
      validationSchema={registerValidationSchema}
      onSubmit={onSubmit}
    >
       {({ isSubmitting }) => (
    <Form>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <Image src="/img/logo.png" alt="Khoi Dash Logo" width={160} height={120} />
                    <div className='flex text-3xl font-light tracking-wide items-center'>
                      <div className="ml-3">Register to&nbsp;</div>
                        <div className='text-green-900'>
                          KhoiSan</div>
                        <div className='text-orange-500'>Dash</div>
                        <div className="ml-3">as a user&nbsp;</div>
                      </div>
                  </div>
                  
                </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                  <div className="relative w-full mb-3">                    
                    <TextFieldInput 
                    label="Name"
                    name="username"
                    type="text"
                    placeholder="Please enter username"
                  />                    
                  </div>

                  <div className="relative w-full mb-3">
                    <TextFieldInput 
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Please enter email"
                  /> 
                  </div>

                  <div className="relative w-full mb-3">
                    <TextFieldInput 
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Please enter email"
                  /> 
                  </div>

                  <div className="relative w-full mb-3">
                    <TextFieldInput 
                    label="Confirm Password"
                    name="passwordConfirmation"
                    type="password"
                    placeholder="Please confirm password"
                  /> 
                  </div>

                  <div className="relative w-full mb-3">
                    <CheckboxInput 
                    label="I Agree with Privacy Policy"
                    name="consent"
                    type="checkbox"
                    
                  /> 
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit" disabled={isSubmitting}
                    >
                      Create Account
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Form>
       )}
  </Formik>
  );
}

export default RegisterPage;
