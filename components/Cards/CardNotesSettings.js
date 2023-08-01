import TextareaInput from "form/components/textarea-input";
import TextFieldInput from "form/components/text-field-input";
import { Formik } from "formik";
import React from "react";

// components

export default function CardNotesSettings() {
  return (
    <Formik>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
              <span className="mt-5 text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    Application Overview
                  </span>
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    0103202301
                  </span>
                  <span className="text-sm text-blueGray-400">Application Ref</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    Incomplete
                  </span>
                  <span className="text-sm text-blueGray-400">Status</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    STAGE
                  </span>
                  <span className="text-sm text-blueGray-400">Lodgement</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
              Applicant Member
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-user mr-2 text-lg text-blueGray-400"></i>
              Tedesca Mackay
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-users mr-2 text-lg text-blueGray-400"></i>
              Community - clever community
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-graduation-cap mr-2 text-lg text-blueGray-400"></i>
              Leader - Thomas James
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 ">
            <div className="flex flex-wrap ">
              <div className="w-full lg:w-9/12 px-4">
              <TextareaInput
                label="Capture Notes"
                type="textarea"
                name="notes"
                placeholder="Notes"
               />
              </div>
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 ">
            <div className="flex flex-wrap ">
              <div className="w-full lg:w-9/12 px-4">
              <TextFieldInput
                label="Additional Notes"
                type="file"
                name="notes"
                placeholder="Notes"
               />
                <a
                  href="#welt"
                  className="font-normal text-lightBlue-500 mt-4 text-right"
                  onClick={(e) => e.preventDefault()}
                >
                  View Application
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Formik>
  );
}
