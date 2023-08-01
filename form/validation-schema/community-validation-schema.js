import * as yup from 'yup';

const communityDocumentSchema = yup.object().shape({
    communityDocumentTypeId: yup
            .number(),
            //.required()
    document: yup.string(),
    name: yup.string()
  });

const communitydataValidationSchema = yup.object().shape({
      name: yup
            .string()
            .required("Name is Required."),
      province: yup
            .string()
            .required("Province is Required."),
      communityTypeId: yup
            .string()
            .required("CommunityType is Required."),
      isMetropolitanMunicipality: yup
            .boolean(),
      isLocalMunicipality: yup
            .boolean(),
      isDistrictMunicipality: yup
            .boolean(),
       communityDocuments: yup
            .array().of(communityDocumentSchema), 
            //.required("Date of Birth is Required."),
      otherOccupiedProvinces: yup
            .array().of(yup.string())
      
            

});

const communityValidationSchema = {communitydataValidationSchema, communityDocumentSchema}

export default communityValidationSchema;