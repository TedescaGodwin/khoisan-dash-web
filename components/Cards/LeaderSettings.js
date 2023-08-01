"use client";
import { React, useState, useEffect } from "react";
import { Form, Formik } from "formik";
import applicantLeaderValidationSchema from "form/validation-schema/applicant-leader-validation-schema";
import { onSaveMember, uploadFiles, getMembers} from "form/services/applicant-leader-service";

export default function LeaderSettings() {
  const [files, setFiles] = useState({});
  const [base64Strings] = useState([]);
  const [options, setOptions] = useState([]);

  const onSubmit = async (values, actions) => {
    onSaveMember(values, actions, base64Strings);
  };
  const handleFileUpload = (file, id) => {
    uploadFiles(file, id, files, setFiles, base64Strings);
  };
  useEffect(() => {
    async function fetchData() {      
      var data = await getMembers();
      setOptions(data);
    }

    fetchData();
  }, []);
  return (
  <Formik
  initialValues={{ memberId: "", isLeader: true}}
  validationSchema={applicantLeaderValidationSchema}
  onSubmit={onSubmit}
>
  {(formikProps, isSubmitting) => (
    <Form>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold"> <i className='fas fa-graduation-cap'></i>Applicant | Leader</h6>
            <button
              className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
              onSubmit={onSubmit}
              disabled={isSubmitting}
            >
               Save
            </button>
          </div>
        </div>

        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="communityGroup"
                >
                  Select Applicant Member
                </label>
          
              <select 
              id="communityGroup" 
              name="memberId"
              onChange={formikProps.handleChange}
              className="border-0 px-3 py-3
              onChange={formikProps.handleChange}
              placeholder-blueGray-300
              text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">                
                <option value="">select member</option>
                {options.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.firstname} {option.surname}
                        </option>
                      ))}
              </select>
              </div>
          </div>
          
          <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="metropolitan"
                  >
                    Mask as Leader
                  </label>
                  <input
                    type="checkbox"
                    name="isLeader"
                    onChange={formikProps.handleChange}
                    className=" w-8 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    id="metropolitan"
                  />
                     
                </div>
              </div>
        </div>
        <hr className="mt-6 border-b-1 border-blueGray-300" />
        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Compliance with section 7(2) of the act: criteria for recognition of a Khoi-San Leader
        </h6>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                A proven history of existence of the senior call Khoi-San 
                leadership position within the community concerned
              </label>
              <input
                type="file"
                onChange={(event) =>
                  handleFileUpload(event.target.files[0], 4)
                }                
                className="block
                border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 
                bg-white rounded text-sm shadow focus:outline-none 
                focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
               A proven history of acceptance of such senior Khoi-San
               leadership position by the community concerned
                <p></p>
                </label>
                <input
                  type="file"
                  onChange={(event) =>
                    handleFileUpload(event.target.files[0], 5)
                  }
                  className="block
                  border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-8"
                  htmlFor="grid-password"
                >
                A history of functions and powers of the senior Khoi-San leadership 
                position in terms of the established
                customary law and customs within the particular community
                </label>
                <input
                  type="file"
                  onChange={(event) =>
                    handleFileUpload(event.target.files[0], 6)
                  }
                  className="block
                  border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-0"
                    htmlFor="grid-password"
                  >
                      A proven history of either – <br />
                      hereditary leadership in terms of customary law or customs or 
                      customs of the community within or without a customary role of 
                      for community participation in the determination or confirmation 
                      of the individual senior Khoi-San leader or

                  </label>
                  <input
                    type="file"
                    onChange={(event) =>
                      handleFileUpload(event.target.files[0], 7)
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
  )
}
