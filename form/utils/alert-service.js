
import { toast } from 'react-toastify';
const showSuccess = (message) => {
toast.success(message, {
    position: "top-right",      
    autoClose: 5000,      
    hideProgressBar: false,      
    closeOnClick: true,      
    pauseOnHover: true,      
    draggable: true,      
    progress: undefined,      
    theme: "colored",      
    });
}
    const showError = (message) => {
    toast.error(message, {
      position: "top-right",      
      autoClose: 5000,      
      hideProgressBar: false,      
      closeOnClick: true,      
      pauseOnHover: true,      
      draggable: true,      
      progress: undefined,      
      theme: "colored",      
      });
  }

  export {showSuccess, showError};
