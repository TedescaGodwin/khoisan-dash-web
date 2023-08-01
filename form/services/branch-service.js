import { Router } from "next/navigation";
import { showSuccess, showError } from "../utils/alert-service";
import { getToken } from "form/utils/auth-service";

import {baseUrl} from "env-config";

const uploadFiles = (file, id, files, setFiles, base64Strings) => {
  setFiles({ ...files, [id]: file });
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    base64Strings.push({ id: id, name: file.name, fileContent: reader.result });
  };
};

const onSaveBranch = async (values, actions, base64Strings) => {
  var docs = [];
  if (base64Strings instanceof Array) {
    // eslint-disable-next-line array-callback-return
    base64Strings.map((item) => {
      const document = {
        branchDocumentTypeId: item.id,
        name: item.name,
        document: item.fileContent.split(",")[1],
      };
      docs.push(document);
    });
  }
  values.documents = docs;
  const val = getToken();
  if (!val) {
    Router.push("/login");
  }
  const response = await fetch(`${baseUrl}/api/branches`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + val,
    },
    body: JSON.stringify(values),
  }).catch((err) => {
    console.log(err.response.data);
  });
  if (response.ok) {
    showSuccess("Branch added! " + response.statusText);
    //Navigation.push("/report/dashboard");
  } else {
    showError("Failed to add branch " + response.statusText);
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const getCommunities = async () => {
    const response = await fetch(`${baseUrl}/api/communities`);
    const data = await response.json();
    return data.items;
};

export { getCommunities, uploadFiles, onSaveBranch };
