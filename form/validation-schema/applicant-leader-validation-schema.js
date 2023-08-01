import * as yup from 'yup';
const memberDocumentSchema = yup.object().shape({
        memberDocumentTypeId: yup
              .number(),
        name: yup.string(),
        document: yup.string()
    });

const applicantLeaderValidationSchema = yup.object().shape({
      memberId: yup
            .number(),
            //.required("Name is Required."),
      isLeader: yup
            .boolean(),
      documents: yup
            .array().of(memberDocumentSchema)
      
            

});

export default applicantLeaderValidationSchema;