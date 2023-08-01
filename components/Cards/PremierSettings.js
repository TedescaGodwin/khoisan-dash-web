'use client'

'use client'
import TextareaInput from "form/components/textarea-input";
import TextFieldInput from "form/components/text-field-input";
import { Form, Formik } from "formik";
import {React, useState} from "react";
import draftValidationSchema from "form/validation-schema/draft-validation-schema";
import {onSaveDraft, uploadFile} from "form/services/draft-service"

export default function PremierSettings() {
  const [base64String, setBase64String] = useState('');
  const [fileName, SetFileName] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    SetFileName(file.name)
    uploadFile(event, setBase64String);
  };
  const onSubmit = async (values, actions) => {
    onSaveDraft(values, actions, base64String, fileName);
  };
  return (
    <Formik
    initialValues={{ name:"", description:"", draftTypeId:2,
      document: {document: '', name:''}  }}
      validationSchema={draftValidationSchema}
      onSubmit={onSubmit}
    >
         {({ isSubmitting }) => (
    <Form>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold"><i className='fas fa-file mr-2'></i>Draft | Premier</h6>
            <button
              className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
              disabled={isSubmitting}
            >
               Save
            </button>
          </div>
        </div>

        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

            <hr className="mt-6 border-b-1 border-blueGray-300" />
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Draft Details
            </h6>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
                  <TextFieldInput
                  label="Description"
                  name="name"
                  type="text"
                  placeholder="Description"
                  />
                </div>
                <div className="relative w-full mb-3">
                  <TextareaInput
                  label="Draft"
                  name="description"
                  placeholder="Draft details"
                  />
                </div>
                <div className="relative w-full mb-3">
                  <TextFieldInput
                  label="Supporting File"
                  name="draft"
                  type="file"
                  placeholder="Draft details" 
                  onChange={handleFileUpload}
                  />
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
