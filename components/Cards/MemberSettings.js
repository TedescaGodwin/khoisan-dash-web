'use client'

import {React, useState, useEffect} from "react";
import TextFieldInput from "form/components/text-field-input";
import SelectionInput from "form/components/selection-input";
import { Form, Formik } from "formik";
import {onSaveMember, uploadFiles, getBranches, getCommunities, initialValues} from "form/services/member-service"

import memberValidationSchema from "form/validation-schema/member-validation-schema";

export default function MemberSettings() {
  const [files, setFiles] = useState({});
  const [base64Strings] = useState([]);
  const [selectedCommunity, setSelectedCommunity] = useState([]);
  const [communities, setCommunities] = useState([]);
  const [branches, setBranches] = useState([]);
  
const onSubmit = async (values, actions) => {
  onSaveMember(values, actions, base64Strings)
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};
const handleFileUpload = (file, id) => {
  uploadFiles(file, id, files, setFiles, base64Strings);    
};

useEffect(() => {
  async function fetchData() {      
    var data = await getCommunities();
    setCommunities(data);
  }

  fetchData();
}, []);


const handleCommunityChangeEvent = async (event) => {
  setSelectedCommunity(event.target.value);
  initialValues.communityId=event.target.value;
  var data = await getBranches();
  let response = data.filter(item => item.communityId === event.target.value);
  setBranches(response);  
}

  return (
  <Formik
        initialValues={initialValues}
        validationSchema={memberValidationSchema}
        onSubmit={onSubmit}
      >
      {(formikProps, isSubmitting) => (
      <Form>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold"><i className='fas fa-file mr-2'></i>Applicant | Member</h6>
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
                Community & Branch Information
              </h6>
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
                      onChange={handleCommunityChangeEvent}
                      //value={selectedCommunity}
                      className="border-0 px-3 py-3
           placeholder-blueGray-300
           text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value="0">select a community</option>
                      {communities.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
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
                      Select Branch
                    </label>
                  {selectedCommunity && (
                    <select
                    //value={selectedBranch}
                      id="branchId"
                      name="branchId"
                      onChange={formikProps.handleChange}
                      className="border-0 px-3 py-3
           placeholder-blueGray-300
           text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value="0">Select a branch</option>
                      {branches.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>)}
                  </div>
                </div>
              </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Member Information
            </h6>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <SelectionInput
              id="title"
              label="title"
              onChange={formikProps.handleChange}
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
                  <SelectionInput
                    id="customaryTitle"
                    onChange={formikProps.handleChange}
                    label="Customary Title (if applicable)"
                    name="customaryTitle" >
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
                    onChange={formikProps.handleChange}
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
                    onChange={formikProps.handleChange}
                    name="surname"
                    type="text"
                    placeholder="Please enter surname"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                <TextFieldInput
                    label="Date of Birth"
                    name="dob"
                    type="date"
                    onChange={formikProps.handleChange}
                    placeholder="Please enter date of birth"
                  />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                <TextFieldInput
                    label="Identity Number"
                    name="idNumber"
                    onChange={formikProps.handleChange}
                    type="text"
                    placeholder="Please enter Identity Number"
                />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <TextFieldInput
                      label={"Identity Document Upload (Certified copy)"}
                      name="idDocument"
                      type="file"
                      onChange={(event) => handleFileUpload (event.target.files[0], 1)}
                      placeholder="Please enter Identity Number"
                  />
                </div>
              </div>

              <div className="flex justify-center">

            </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Residential Address Details
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <TextFieldInput
                      label="Physical Address"
                      name="contactDetails.physicalAddress"
                      onChange={formikProps.handleChange}
                      type="text"
                      placeholder="Please enter Physical Address"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <TextFieldInput
                      label="City"
                      name="contactDetails.physicalAddressCity"
                      onChange={formikProps.handleChange}
                      type="text"
                      placeholder="Please enter City"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <TextFieldInput
                      label="Country"
                      name="contactDetails.physicalAddressCountry"
                      onChange={formikProps.handleChange}
                      type="text"
                      placeholder="Please enter Country"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                <TextFieldInput
                      label="Postal Code"
                      name="contactDetails.physicalAddressPostalCode"
                      onChange={formikProps.handleChange}
                      type="text"
                      placeholder="Please enter Postal Code"
                  />

                </div>
              </div>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Postal Address Details
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <TextFieldInput
                      label="Postal Address"
                      name="contactDetails.postalAddress"
                      onChange={formikProps.handleChange}
                      type="text"
                      placeholder="Please enter Postal Address"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <TextFieldInput
                      label="City"
                      name="contactDetails.postalAddressCity"
                      onChange={formikProps.handleChange}
                      type="text"
                      placeholder="Please enter City"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <TextFieldInput
                      label="Country"
                      name="contactDetails.postalAddressCountry"
                      onChange={formikProps.handleChange}
                      type="text"
                      placeholder="Please enter Country"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                <TextFieldInput
                      label="Postal Code"
                      name="contactDetails.postalAddressPostalCode"
                      onChange={formikProps.handleChange}
                      type="text"
                      placeholder="Please enter Postal Code"
                  />

                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Contact Details
            </h6>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
            {/*<div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Same as Residential Address
                  </label>
                  <input
                    type="checkbox"
                    className=" w-8 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"

                /> 
            </div>*/}
            </div>
            </div>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <TextFieldInput
                      label="Cell Number"
                      name="phoneDetails.cellphone"
                      onChange={formikProps.handleChange}
                      type="text"
                      placeholder="Please enter cellphone number"
                  />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <TextFieldInput
                      label="Home Number"
                      name="phoneDetails.homeTelephone"
                      onChange={formikProps.handleChange}
                      type="text"
                      placeholder="Please enter Home Number"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                 
                  <TextFieldInput
                      label="Work Number"
                      name="phoneDetails.workTelephone"
                      onChange={formikProps.handleChange}
                      type="text"
                      placeholder="Please enter Work Number"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <TextFieldInput
                      label="Email Address"
                      name="phoneDetails.email"
                      onChange={formikProps.handleChange}
                      type="email"
                      placeholder="Please enter Email Address"
                  />
                </div>
              </div>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Authorization of the Member of the Applicant community to lodge Applicant
              with the commission in terms of section 56(2)(a) of the act
            </h6>

            <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <TextFieldInput
                      label="Authorised by the applicant community"
                      name="doc71"
                      type="file"
                      required
                      onChange={(event) => handleFileUpload (event.target.files[0], 2)}
                  />
                   <label
                    className="block lowercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Attach evidence of authorisation in the
                    form of original or certified copy of
                    community resolution and mark as A.7.1
                  </label>
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <TextFieldInput
                      label="Authorised by royal family"
                      name="doc72"
                      type="file"
                      required
                      onChange={(event) => handleFileUpload (event.target.files[0], 3)}
                  />
                  <label
                    className="block lowercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Attach evidence of authorisation in the
                    form of original or certified copy of royal
                    family resolution and mark as A.7.2
                  </label>
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase text-justify">
            I DECLARE THAT tHE FACTS, INFORMATION AND ANNEXURES CONTAINED AND PROVIDED
            IN THIS APPLICATION ARE TO THE bEST OF MY KNOWLEDGE TRUE, CORRECT AND
            CoMPLETE. I UNDeRSTAND THAT ANY FALSE INFORMATION SUPPLIED COULD LEAD TO
            CRIMINAL PROSECUTION AND THE POSSIBLE REJECTION OF THIS APPLICATION.
            </h6>
            <label
              className="block uppercase text-blueGray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Signature of authorised person (see par A.1)
            </label>
            <div className="mb-4"><hr className="mt-4 border-b-1 border-blueGray-300" /></div>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <TextFieldInput
                      label="Signed at"
                      name="memberSignatories.witness1"
                      onChange={formikProps.handleChange}
                      type="text"
                      placeholder="Signed at"
                  />
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <TextFieldInput
                      label="Date of Signature"
                      name="memberSignatories.witness1DateOfSignature"
                      type="date"
                      onChange={formikProps.handleChange}
                      placeholder="Date of Signature"
                  />
              </div>
            </div>
            </div>
            <label
              className="block uppercase text-blueGray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Witness 1: Signature
            </label>
            <div className="mb-4"><hr className="mt-4 border-b-1 border-blueGray-300" /></div>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                   <TextFieldInput
                      label="Full names and Surname"
                      name="memberSignatories.witness2"
                      type="text"
                      onChange={formikProps.handleChange}
                      placeholder="Full names and Surname"
                  />
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                {/* <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Date of Signature
                </label> */}
                <TextFieldInput
                      label="Date of Signature"
                      name="memberSignatories.witness2DateOfSignature"
                      type="date"
                      onChange={formikProps.handleChange}
                      placeholder="Date of Signature"
                  />
              </div>
            </div>
            </div>
            <label
              className="block uppercase text-blueGray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Witness 2: Signature
            </label>
            <div className="mb-4"><hr className="mt-4 border-b-1 border-blueGray-300" /></div>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
              <TextFieldInput
                      label="Full names and Surname"
                      name="memberSignatories.witness3"
                      type="text"
                      onChange={formikProps.handleChange}
                      placeholder="Full names and Surname"
                  />
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
              <TextFieldInput
                      label="Date of Signature"
                      name="memberSignatories.witness3DateOfSignature"
                      type="date"
                      onChange={formikProps.handleChange}
                      placeholder="Date of Signature"
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
