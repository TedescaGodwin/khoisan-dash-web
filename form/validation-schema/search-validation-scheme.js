import * as yup from 'yup';

const searchValidationSchema = yup.object().shape({
  search: yup
        .string()
        .required("Search is Required."),

});

export default searchValidationSchema;