import { Box, Button, Container, Flex, Input } from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { ReactElement, ReactNode } from "react";
import useGlobalState from "./globalStore/useGlobalState";
import { useFetchLoginDetails } from "./queries/useFetchLoginDetails";

export const Login = (): ReactElement => {
  const name = useGlobalState((state) => state.name);
  const password = useGlobalState((state) => state.password);
  const { data } = useFetchLoginDetails({ name, password });
  return (
    <Formik
      initialValues={{ name: "", password: "" }}
      onSubmit={(values) => {
        console.log({ values });
        useFetchLoginDetails(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Container>
            <Field type="name" name="username" placeholder="name" />
            <ErrorMessage name="name" component="div" />
            <Field type="password" name="password" placeholder="password" />
            <ErrorMessage name="password" component="div" />
            <Button type="submit">Submit</Button>
          </Container>
        </Form>
      )}
    </Formik>
  );
};
