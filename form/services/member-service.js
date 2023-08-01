import { Router } from "next/navigation";
import { showSuccess, showError } from "../utils/alert-service";
import { getToken } from "form/utils/auth-service";

import {baseUrl} from "env-config";

const uploadFiles = (file, id, files, setFiles, base64Strings) => {
  //const file = event.target.files[0];
  setFiles({ ...files, [id]: file });
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    //setBase64Strings({ ...base64Strings, [id]: reader.result });
    base64Strings.push({ id: id, name: file.name, fileContent: reader.result });
  };
};

const onSaveMember = async (values, actions, base64Strings) => {
  var docs = [];
  if (base64Strings instanceof Array) {
    // eslint-disable-next-line array-callback-return
    base64Strings.map((item) => {
      const document = {
        memberDocumentTypeId: item.id,
        name: item.name,
        document: item.fileContent.split(",")[1],
      };
      docs.push(document);
    });
  }
  values.memberDocuments = docs;
  /* let otherProvincesValue = [];
  otherProvincesValue.push(values.otherProvince);
  values.otherProvinces = otherProvincesValue; */
  const val = getToken();
  if (!val) {
    Router.push("/login");
  }
  try {
  const response = await fetch(`${baseUrl}/api/members`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + val,
    },
    body: JSON.stringify(values),
  });
  if (response.ok) {
    showSuccess("Member added! " + response.statusText);
    //Navigation.push("/report/dashboard");
  } else {
    showError("Failed to add member " + response.statusText);
  }
}catch(err) {
  console.log(err.response.data);
};
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const handleChange = (e, setInitialValues) => {
  const { name, value } = e.target;
  setInitialValues((prevValues) => ({
    ...prevValues,
    [name]: value,
  }));
};

const getCommunities = async () => {
  const response = await fetch(`${baseUrl}/api/communities`);
  const data = await response.json();
  return data.items;
};
const getBranches = async () => {
  const response = await fetch(`${baseUrl}/api//branches`);
  const data = await response.json();
  return data.items;
};

const initialValues = { 
  title:"", 
  customaryTitle:"", 
  firstname:"", 
  surname:"", 
  communityId: "", 
  branchId: "",
  idNumber: "",
  dob: "", 
  contactDetails: {
    physicalAddress:"", 
    physicalAddressCity: "",
    physicalAddressCountry: "", 
    physicalAddressPostalCode: "", 
    postalAddress: "", 
    postalAddressPostalCode: "", 
    postalAddressCity: "", 
    postalAddressCountry: "" 
  },
  phoneDetails: {
    homeTelephone: "", 
    workTelephone:"",
    email: "", 
    cellphone:"" 
  },
  memberSignatories: {
    witness1: "", 
    witness1DateOfSignature: "", 
    witness2: "", 
    witness2DateOfSignature: "", 
    witness3: "", 
    witness3DateOfSignature: "" 
  }
}

export { handleChange, uploadFiles, onSaveMember, getCommunities, getBranches, initialValues };
