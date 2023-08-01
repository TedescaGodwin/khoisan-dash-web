import * as yup from 'yup';

const draftValidationSchema = yup.object().shape({

  name: yup
        .string()
        .required("Name is Required."),

  description: yup
        .string()
        .required("Description is Required."),     
  draftTypeId: yup
        .number()
        .required("Draft type is Required"),
  
document: yup.object().shape({  
  document: yup
        .string(),
  name: yup
        .string()
        //.required("Draft document is Required.")
        })
});

export default draftValidationSchema;

