'use client'

import Link from "next/link";
import { Form, Formik } from "formik";
// layout for page

import loginValidationSchema from "form/validation-schema/login-validation-schema";
import TextFieldInput from "form/components/text-field-input";
import CheckboxInput from "form/components/checkbox-input";
import KhoiSanLogo from "components/Logo/KhoisanLogo";
import { showSuccess, showError } from "form/utils/alert-service";

import {baseUrl} from "env-config";
import { useRouter } from "next/navigation";
import { setToken } from "form/utils/auth-service";


const LoginPage = () => {
  const router = useRouter();
  const onSubmit = async (values, actions) => {

    let isSuccessful = false;
    const response = await fetch(`${baseUrl}/login`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).catch(err => {
      console.log(err.response.data);
    });
    if (response.ok) {
      const result = await response.json();
      showSuccess('Login successful');
      isSuccessful = true;
      console.log(result.token);
      setToken(result.token);
      }else{ 
        showError('Login failed, please check username and password');
      }
    
    if(isSuccessful){
      router.push("/dashboard");
    }
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      validationSchema={loginValidationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
      <Form>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <KhoiSanLogo label="Sign in to"/>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="relative w-full mb-3">
                    <TextFieldInput
                      label="Email"
                      name="email"
                      type="text"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                  <TextFieldInput
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Password"
                  />
                  </div>
                  <div>
                    <CheckboxInput
                      label="Remember me"
                      name="rememberMe"
                      type="checkbox"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap mt-6 relative">
                <div className="w-1/2">
                  <Link href="/forgot" className="text-blueGray-200">
                    <small>Forgot password?</small>
                  </Link>
                </div>
                <div className="w-1/2 text-right">
                  <Link href="/register" className="text-blueGray-200">
                    <small>Create new account</small>
                  </Link>
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

export default LoginPage;