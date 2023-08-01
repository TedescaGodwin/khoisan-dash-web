"use client";
import { React, useState, useEffect } from "react";
import { Form, Formik } from "formik";
import branchValidationSchema from "form/validation-schema/branch-validation-schema";
import { onSaveBranch, uploadFiles, getCommunities} from "form/services/branch-service";

export default function BranchSettings() {
  const [files, setFiles] = useState({});
  const [base64Strings] = useState([]);
  const [options, setOptions] = useState([]);

  const onSubmit = async (values, actions) => {
    onSaveBranch(values, actions, base64Strings);
  };
  const handleFileUpload = (file, id) => {
    uploadFiles(file, id, files, setFiles, base64Strings);
  };
  useEffect(() => {
    async function fetchData() {      
      var data = await getCommunities();
      setOptions(data);
    }

    fetchData();
  }, []);
  return (
    <Formik
      initialValues={{ name: "", province: "", status: "", communityId: 1 }}
      validationSchema={branchValidationSchema}
      onSubmit={onSubmit}
    >
      {(formikProps, isSubmitting) => (
        <Form>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  <i className="fas fa-users mr-2"></i>Lookup | Branch Head
                </h6>
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
                Branch Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name of branch of the Applicant Community
                    </label>
                    <input
                      type="text"
                      onChange={formikProps.handleChange}
                      name="name"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="province"
                    >
                      Select Province
                    </label>

                    <select
                      id="province"
                      name="province"
                      onChange={formikProps.handleChange}
                      className="border-0 px-3 py-3
           placeholder-blueGray-300
           text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option defaultValue=""></option>
                      <option value="Eastern Cape">Eastern Cape</option>
                      <option value="Free State">Free State</option>
                      <option value="Gauteng">Gauteng</option>
                      <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                      <option value="Limpopo">Limpopo</option>
                      <option value="Mpumalanga">Mpumalanga</option>
                      <option value="Northern Cape">Northern Cape</option>
                      <option value="North West">North West</option>
                      <option value="Western Cape">Western Cape</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap">

                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="province"
                    >
                      Select Community
                    </label>

                    <select
                      id="communityId"
                      name="communityId"
                      onChange={formikProps.handleChange}
                      className="border-0 px-3 py-3
           placeholder-blueGray-300
           text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      {options.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                     {/*  <option selected></option>
                      <option value="Eastern Cape">Eastern Cape</option>
                      <option value="Free State">Free State</option>
                      <option value="Gauteng">Gauteng</option>
                      <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                      <option value="Limpopo">Limpopo</option>
                      <option value="Mpumalanga">Mpumalanga</option>
                      <option value="Northern Cape">Northern Cape</option>
                      <option value="North West">North West</option>
                      <option value="Western Cape">Western Cape</option> */}
                    </select>
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Compliance with section 5(4) of the act: criteria for
                recognition of a Branch
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-6"
                      htmlFor="grid-password"
                    >
                      Proof of recognition by the applicant Khoi-San community
                      as a branch of the community
                    </label>
                    <input
                      type="file"
                      name="doc1"
                      className="block
                border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 
                bg-white rounded text-sm shadow focus:outline-none 
                focus:ring w-full ease-linear transition-all duration-150"
                      onChange={(event) =>
                        handleFileUpload(event.target.files[0], 1)
                      }
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      The total number of members of the branch must consist of
                      not less than 10% of the total number of the applicant
                      community as reflected in the list of the applicant
                      community members
                      <p></p>
                    </label>
                    <input
                      type="file"
                      name="doc2"
                      onChange={(event) =>
                        handleFileUpload(event.target.files[0], 2)
                      }
                      className="block
                  border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      The motivation how the branch will contribute to a more
                      effective and efficient administration of the Khoi-San
                      council
                    </label>
                    <input
                      type="file"
                      name="doc3"
                      onChange={(event) =>
                        handleFileUpload(event.target.files[0], 3)
                      }
                      className="block
                  border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      The Branch recognizes the applicant communities senior
                      Khoi-San leader in terms of the customary law and customs
                    </label>
                    <input
                      type="file"
                      name="doc4"
                      onChange={(event) =>
                        handleFileUpload(event.target.files[0], 4)
                      }
                      className="block
                    border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 
                    bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
