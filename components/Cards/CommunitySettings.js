'use client'
import { Form, Formik } from "formik";
import {React, useState} from "react";
import communityValidationSchema from "form/validation-schema/community-validation-schema";
import {onSaveCommunity, uploadFiles} from "form/services/community-service"

export default function CommunitySettings() {
  const [files, setFiles] = useState({});
  const [base64Strings] = useState([]);
  const [initialValuesData] = useState({
    name:"", province:"", communityTypeId:1, otherOccupiedProvinces: [], 
    isMetropolitanMunicipality:false, isDistrictMunicipality:false, isLocalMunicipality:false
  });
  const handleFileUpload = (file, id) => {
    uploadFiles(file, id, files, setFiles, base64Strings);
  };
  
  const onSubmit = async (values, actions) => {
   onSaveCommunity(values, actions, base64Strings);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  return (
    <Formik
        initialValues={initialValuesData}
        validationSchema={communityValidationSchema.communitydataValidationSchema}
        onSubmit={onSubmit}
      >
         {(formikProps) => (
    <Form>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Applicant Community</h6>
            <button
              className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
              //disabled={isSubmitting}
            >
               Save
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <hr className="mt-6 border-b-1 border-blueGray-300" />
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Community Information
            </h6>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                   
                  >
                    Name of the Applicant Community
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="name"
                    id="name"
                    autoComplete="false"
                    value={formikProps.values.name}
                    onChange={formikProps.handleChange}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />
      
      <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
        sub-grouping that the Applicant community belongs to
      </h6>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="subGroupName"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="subGroupName"
                    id="subGroupName"
                  />
                </div>
              </div>
 
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="communityTypeId"
                  >
                    Select Group
                  </label>
            
                <select 
                id="communityTypeId" 
                name="communityTypeId"
                //value={formikProps.values.communityTypeId}
                onChange={formikProps.handleChange}
                className="border-0 px-3 py-3
                 placeholder-blueGray-300
                 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                  <option defaultValue=""></option>
                  <option value="1">Cape-Khoi</option>
                  <option value="2">Griqua</option>
                  <option value="3">Koranna</option>
                  <option value="4">Nama</option>
                  <option value="5">San</option>
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
              Select Province
            </label>
      
          <select 
          id="province" 
          name="province"
          value={formikProps.values.province}
          onChange={formikProps.handleChange}
          className="border-0 px-3 py-3
           placeholder-blueGray-300
           text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
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

        <div className="w-full lg:w-6/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="otherProvince"
            >
              Select Other Province
            </label>
      
          <select 
          id="otherProvince" 
          name="otherProvince"          
          onChange={formikProps.handleChange}
          className="border-0 px-3 py-3
           placeholder-blueGray-300
           text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
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

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Municipality the Applicant community is located within
            </h6>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-3/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="isMetropolitanMunicipality"
                  >
                    Metropolitan municipality
                  </label>
                  <input
                    type="checkbox"
                    className=" w-8 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    id="isMetropolitanMunicipality"
                    name="isMetropolitanMunicipality"
                    onChange={formikProps.handleChange}
                  />
                     
                </div>
              </div>
              <div className="w-full lg:w-3/12 px-4">
                <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="isDistrictMunicipality"
                  >
                    District municipality
                  </label>
                  <input
                    type="checkbox"
                    className=" w-8 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    id="isDistrictMunicipality"
                    name="isDistrictMunicipality"
                    onChange={formikProps.handleChange}
                  />
                  
                </div>
              </div>
              <div className="w-full lg:w-3/12 px-4">
                <div className="relative w-full mb-3">
               <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="isLocalMunicipality"
                  >
                    Local municipality
                  </label>
                  <input
                    type="checkbox"
                    className=" w-8 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    id="isLocalMunicipality"
                    name="isLocalMunicipality"
                    onChange={formikProps.handleChange}
                  />
                </div>
              </div>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Compliance with section 5(1)(a) and (b) of the act: criteria for recognition of a community as KHOI-SAN Community
            </h6>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="doc1"
              >
                The community has a history of self-identification 
                by its members, belonging to a unique community 
                distinct from all other communities
              </label>
              <input
                type="file"
                id="doc1"
                className="block
                border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 
                bg-white rounded text-sm shadow focus:outline-none 
                focus:ring w-full ease-linear transition-all duration-150"
                onChange={(event) => handleFileUpload (event.target.files[0], 1)}
              />
            </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-6"
                  htmlFor="doc2"
                >
                The community observes distinctive established
                Khoi-San customary law and customary
                <p></p>
                </label>
                <input
                  type="file"
                  id="doc2"
                  className="block
                  border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  onChange={(event) => handleFileUpload (event.target.files[0], 2)}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="doc3"
                >
                The community is subject to a system herediary
                or elected Khoi-San leadership with structure exercising 
                authority in terms of customary law and customs of that community
                </label>
                <input
                  type="file"
                  id="doc3"
                  className="block
                  border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  onChange={(event) => handleFileUpload (event.target.files[0], 3)}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="doc4"
                  >
                  The community has a history of self-identification 
                  by its members, belonging to a unique community 
                  distinct from all other communities
                  </label>
                  <input
                    type="file"
                    id="doc4"
                    className="block
                    border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 
                    bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(event) => handleFileUpload (event.target.files[0], 4)}
                  />
                </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-6"
                    htmlFor="doc5"
                  >
                  The community observes distinctive established
                  Khoi-San customary law and customary
                  <p></p>
                  </label>
                  <input
                    type="file"
                    id="doc5"
                    className="block
                    border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(event) => handleFileUpload (event.target.files[0], 5)}
                  />
                </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="doc6"
                >
                The community is subject to a system herediary
                or elected Khoi-San leadership with structure exercising 
                authority in terms of customary law and customs of that community
                </label>
                <input
                  type="file"
                  id="doc6"
                  className="block
                  border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  onChange={(event) => handleFileUpload (event.target.files[0], 6)}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="doc7"
                >
                A list of all community
                NOTE: a person who has confirmed his or her association with a particular Khoi-San
                community by signing a list may not be a member of any other <br />Khoi-Community
                </label>
                <input
                  type="file"
                  id="doc7"
                  className="block
                  border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  onChange={(event) => handleFileUpload (event.target.files[0], 7)}
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
