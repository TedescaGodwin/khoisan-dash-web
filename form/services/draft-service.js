import { Router } from "next/navigation";
import { showSuccess, showError } from "../utils/alert-service";
import { getToken } from "form/utils/auth-service";

import {baseUrl} from "env-config";

const uploadFile = (event, setBase64String) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setBase64String(reader.result);
    };
};

const onSaveDraft = async (values, actions, base64String, fileName) => {
    values.document.document = base64String.split(',')[1];
    values.document.name=fileName;
    const val = getToken();
    if(!val){
      Router.push('/login');
    }
    const response = await  fetch(`${baseUrl}/api/drafts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+val
      },
      body: JSON.stringify(values)
    }).catch(err => {
      console.log(err.response.data);
    });
    console.log(response);
  if (response.ok) {
    showSuccess("Draft added! " + response.statusText);
    //Navigation.push("/report/dashboard");
  } else {
    showError("Failed to upload draft" + response.statusText);
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};


export { uploadFile, onSaveDraft };
