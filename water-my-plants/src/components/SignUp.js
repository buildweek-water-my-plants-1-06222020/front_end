import React from "react";
import { withFormik, Field } from "formik";
import * as yup from "yup";
import styled from "styled-components";

import { 
  Input,
  Heading,
  FormDiv,
  Button ,
  Error
} from '../StyledComponents'
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Label = styled.label`
  margin: 1rem auto;
`;

const SignUp = props => {
  const { errors, touched, values } = props;
  return (
    <>
      <Heading>Sign Up</Heading>
      <FormDiv>

        {touched.username && errors.username && (
          <Error>{errors.username}</Error>
        )}
        <Input type="text" name="username" placeholder="Username" />

        {touched.phonenumber && errors.phonenumber && (
          <Error>{errors.phonenumber}</Error>
        )}
        <Input type="text" name="phonenumber" placeholder="Phone number" />

        {touched.password && errors.password && (
          <Error>{errors.password}</Error>
        )}
        <Input type="password" name="password" placeholder="Password" />

        {touched.password2 && errors.password2 && (
          <Error>{errors.password2.slice}</Error>
        )}
        <Input type="password" name="password2" placeholder="confirm password" />

        {touched.termsOfService && errors.termsOfService && (
          <Error>{errors.termsOfService.slice}</Error>
        )}
        <Label>
          <Field
            type="checkbox"
            name="termsOfService"
            checked={values.termsOfService}
          />
          <span>Terms of Service</span>
        </Label>
        <Button type="submit">Sign Up</Button>
      </FormDiv>
    </>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {
      username: values.username || "",
      password: values.password || "",
      password2: values.password2 || "",
      phonenumber: values.phonenumber || "",
      termsOfService: values.termsOfService || false
    };
  },
  validationSchema: yup.object().shape({
    username: yup
      .string()
      .min(3, "YOUR USERNAME MUST HAVE AT LEAST 3 LETTERS")
      .required(),
    password: yup
      .string()
      .min(8, "PASSWORD MUST HAVE AT LEAST 8 CHARACTERS")
      .required("PASSWORD REQUIRED"),
    password2: yup
      .string()
      .oneOf([yup.ref("password"), null, "PASSWORD MUST MATCH"])
      .required(),
    phonenumber: yup
      .number()
      .positive()
      .required(),
    termsOfService: yup
      .boolean()
      .oneOf([true, "YOU MUST AGREE TO THE TERMS"])
      .required()
  }),
  validateOnChange: false,
  validateOnBlur: false,
  handleSubmit: (values, { props, resetForm }) => {
    let userObj = {
      username: values.username,
      password: values.password,
      phonenumber: values.phonenumber
    };
    axiosWithAuth()
      .post(
        "/auth/register",
        userObj
      )
      .then(res => {
        localStorage.setItem("token", res.data.token);
        resetForm();
        return props.history.push("/home");
      })
      .catch(err => {
        return err.response;
      });
  }
})(SignUp);
