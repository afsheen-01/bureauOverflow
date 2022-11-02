import { Box, Button, Input } from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { ReactElement } from "react";
import { useFetchLoginDetails } from "./queries/useFetchLoginDetails";

export const Login = (): ReactElement => {
  //   const { data } = useFetchLoginDetails();
  return (
    <Formik
      initialValues={{ name: "", password: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="name" name="name" />
          <ErrorMessage name="name" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
