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

const onSaveCommunity = async (values, actions, base64Strings) => {
  var docs = [];
  if (base64Strings instanceof Array) {
    // eslint-disable-next-line array-callback-return
    base64Strings.map((item) => {
      const document = {
        communityDocumentTypeId: item.id,
        name: item.name,
        document: item.fileContent.split(",")[1],
      };
      docs.push(document);
    });
  }
  values.communityDocuments = docs;
  let otherProvincesValue = [];
  otherProvincesValue.push(values.otherProvince);
  values.otherOccupiedProvinces = otherProvincesValue;
  const val = getToken();
  if (!val) {
    Router.push("/login");
  }
  const response = await fetch(`${baseUrl}/api/communities`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //Authorization: "Bearer " + val,
    },
    body: JSON.stringify(values),
  }).catch((err) => {
    console.log(err.response.data);
  });
  if (response.ok) {
    showSuccess("Community added! " + response.statusText);
    //Navigation.push("/report/dashboard");
  } else {
    showError("Failed to add community" + response.statusText);
  }
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

export { handleChange, uploadFiles, onSaveCommunity };
