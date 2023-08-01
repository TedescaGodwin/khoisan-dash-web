'use client';

import "./styles/index.css";
import "./styles/tailwind.css";

import SearchFieldInput from "../form/components/search-field-input";
import searchValidationSchema from "../form/validation-schema/search-validation-scheme";
import KhoiSanLogo from "components/Logo/KhoisanLogo";
import { Form, Formik } from "formik";

export default async function Page() {

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ search: ""}}
      validationSchema={searchValidationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
      <Form>
        <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                    <KhoiSanLogo label="Search applications in"/>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-9/12 px-4">
                    <div className="relative w-full mb-3">
                      <SearchFieldInput 
                                label="CSKM Search Application"
                                name="search"
                                type="search"
                              />
                    </div>
                  </div>
                  <div className="w-full lg:w-3/12 px-2">
                    <div className="relative w-full mt-6">
                      <button
                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            Search
                      </button>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
            </div>
      </Form>
       )}
    </Formik>
  );

}


<button type="submit" class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
    </button>



