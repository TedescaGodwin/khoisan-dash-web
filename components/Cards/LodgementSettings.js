'use client'

import React from "react";
import { Form, Formik } from "formik";

import lodgementValidationSchema from "form/validation-schema/lodgement-validation-schema";
import TextFieldInput from "form/components/text-field-input";
import SelectionInput from "form/components/selection-input";
import {onSaveLodgements} from 'form/services/lodgements-service'

const onSubmit = async (values, actions) => {
  onSaveLodgements(values, actions);
};

export default function LodgementSettings() {
  return (
  <Formik
      initialValues={{ title:"", firstname:"", surname:"",
      email: "", dob: "", idNumber: "", cellphone:"" }}
      validationSchema={lodgementValidationSchema}
      onSubmit={onSubmit}
    >
    {({ isSubmitting }) => (
    <Form>
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-blueGray-700 text-xl font-bold"><i className='fas fa-graduation-cap  mr-2'></i>Lodge Application</h6>
          <button
            className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="submit"
            disabled={isSubmitting}
          >
              Lodge
          </button>
        </div>
      </div>

      
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <hr className="mt-6 border-b-1 border-blueGray-300" />
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Applicant Member Details
          </h6>
          <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
        <div className="relative w-full mb-3">
          <SelectionInput
          id="title"
          label="title"
          name="title" >
            <option defaultValue=""></option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
            <option value="Prof">Prof</option>
          </SelectionInput>
        </div>
      </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <TextFieldInput 
                    label="Firstname"
                    name="firstname"
                    type="text"
                    placeholder="Please enter firstname"
                  />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
              <TextFieldInput 
                    label="Surname"
                    name="surname"
                    type="text"
                    placeholder="Please enter surname"
              />
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
              <TextFieldInput 
                    label="Cellphone"
                    name="cellphone"
                    id="cellphone"
                    type="text"
                    placeholder="Please enter cellphone"
              />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <TextFieldInput 
                    label="Date of Birth"
                    name="dob"
                    type="date"
                    placeholder="Please enter Date of Birth"
                />
              </div>
            </div>
     
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <TextFieldInput 
                    label="Identity Number"
                    name="idNumber"
                    type="text"
                    placeholder="Please enter Identity Number"
                />
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">


              <div className="relative w-full mb-3">
                <TextFieldInput 
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Please enter Email"
                />
              </div>
              </div>
            </div>

            <div className="flex justify-center">

          </div>
          </div>
      </div>

    </div>
    </Form>
       )}
  </Formik>
  );
}
