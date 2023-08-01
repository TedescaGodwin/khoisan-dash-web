import * as yup from 'yup';
const branchDocumentSchema = yup.object().shape({
      branchDocumentTypeId: yup
              .number(),
              //.required()
      document: yup.string()//.required()
    });

const branchValidationSchema = yup.object().shape({
      name: yup
            .string(),
            //.required("Name is Required."),
      province: yup
            .string(),
            //.required("Province is Required."),
      status: yup
            .string(),
            //.required("Status is Required."),
      communityId: yup
            .number()
            .required("Community is Required."),
      documents: yup
            .array().of(yup.string())
      
            

});

export default branchValidationSchema;