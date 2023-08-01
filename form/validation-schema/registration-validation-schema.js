import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const registrationValidationSchema = yup.object().shape({

  username: yup
        .string()
        .required("Name is Required."),

  email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email Address is Required."),
        
  password: yup
        .string()
        .min(5)
        .matches(passwordRules, { message: "min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit." })
        .required("Password is Required"),
  
  passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
});

export default registrationValidationSchema;