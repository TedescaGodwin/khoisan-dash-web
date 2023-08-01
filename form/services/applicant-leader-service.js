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
  values.documents = docs;
  const val = getToken();
  if (!val) {
    Router.push("/login");
  }
  const response = await fetch(`${baseUrl}/api/member/${values.memberId}/leader`, {
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
    showSuccess("Member updated successfully! " + response.statusText);
    //Navigation.push("/report/dashboard");
  } else {
    showError("Failed to be update member" + response.statusText);
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const getMembers = async () => {
    const response = await fetch(`${baseUrl}/api/members`);
    const data = await response.json();
    return data.items;
};

export { getMembers, uploadFiles, onSaveMember };
