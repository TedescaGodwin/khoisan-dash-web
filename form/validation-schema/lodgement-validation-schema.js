import * as yup from 'yup';
const IdExpression =/^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/;

const lodgementValidationSchema = yup.object().shape({
      title: yup
            .string()
            .required("Title is Required."),
      firstname: yup
            .string()
            .required("Firstname is Required."),
      surname: yup
            .string()
            .required("Surname is Required."),
      cellphone: yup
            .number()
            .required("Cellphone is Required."),
      email: yup
            .string()
            .email("Please enter a valid email")
            .required("Email Address is Required."),
      idNumber: yup
            .string()
            .matches(IdExpression, { message: "Only 13 characters and numeric digit." })
            .required("South Africa Id number is Required."),
      dob: yup
            .string()
            .required("Date of Birth is Required."),
      
            

});

export default lodgementValidationSchema;