import * as yup from 'yup';
const IdExpression =/^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/;

const memberValidationSchema = yup.object().shape({
      communityId: yup
            .number(),//.required(),
      branchId: yup
            .number(),
      title: yup
            .string(),
            //.required("Title is Required."),
      customaryTitle: yup
            .string(),
            //.required("Customary Title is Required."),
      firstname: yup
            .string(),
            //.required("Firstname is Required."),
      surname: yup
            .string(),
            //.required("Surname is Required."),
      idNumber: yup
            .string(),
            //.matches(IdExpression, { message: "Only 13 characters and numeric digit." })
            //.required("South Africa Id number is Required."),
      //idDocument: yup
            //.string(),
            //.required("please upload South Africa Id book/card."),
      dob: yup
            .string(),
            //.required("Date of Birth is Required."),
      //RESIDENTIAL ADDRESS DETAILS
      contactDetails: yup.object().shape({
      physicalAddress: yup
            .string(),
            //.required("Physical Address  is Required."),
      physicalAddressCity: yup
            .string(),
            //.required("Residential City is Required."),
      physicalAddressCountry: yup
            .string(),
            //.required("Residential Country is Required."),
      physicalAddressPostalCode: yup
            .string(),
            //.required("Residential Postal code is Required."),

      //POSTAL ADDRESS DETAILS      
      postalAddress: yup
            .string(),
            //.required("Postal Address is Required."),
      postalAddressCity: yup
            .string(),
            //.required("Post City is Required."),
      postalAddressCountry: yup
            .string(),
            //.required("Post Country is Required."),
      postalAddressPostalCode: yup
            .string()
      }),
            //.required("Postal code is Required."),
      //CONTACT DETAILS 
      phoneDetails: yup.object().shape({
      cellNumber: yup
            .string(),
            //.required("Cell Number is Required."),
      homeTelephone: yup
            .string(),
            //.required("Home number is Required."),
      workTelephone: yup
            .string(),
            //.required("Work number is Required."),
      email: yup
            .string()
      }),
            //.email("Please enter a valid email")
            //.required("Email Address is Required."), 
      //ANNEXURE DOCUMENTS
     /*  doc71: yup
            .string(),
      doc72: yup
            .string(), */
      //Signature
      memberSignatories: yup.object().shape({
      witness1:yup
            .string(),
      witness1DateOfSignature:yup
            .string(),
      witness2:yup
            .string(),
      witness2DateOfSignature:yup
            .string(),
      witness3:yup
            .string(),
      witness3DateOfSignature:yup
            .string()
      })
});

export default memberValidationSchema;