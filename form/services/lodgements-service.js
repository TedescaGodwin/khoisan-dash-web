import { Router } from "next/navigation";
import { showSuccess, showError } from "../utils/alert-service";
import { getToken } from "form/utils/auth-service";

import {baseUrl} from "env-config";

const onSaveLodgements = async (values, actions) => {
  const val = getToken();
  if(!val){
    Router.push('/login');
  }
  let isSuccessful = false;
  const response = await fetch(`${baseUrl}/api/lodgements`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${val}`
    },
    body: JSON.stringify(values)
  }).catch(err => {
    console.log(err.response.data);
  });
  if (response.ok) {
    const result = await response.json();
    showSuccess(`Lodgement added! ${result.referenceNumber}`);
    isSuccessful = true;
    }else{ 
      showError("Failed to add lodgement" + response.statusText);
    }
  
  if(isSuccessful){
    Router.push("/member");
  }
  actions.resetForm();
};


export { onSaveLodgements };
