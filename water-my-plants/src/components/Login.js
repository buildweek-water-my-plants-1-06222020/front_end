import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';


import { 
  Input,
  Heading,
  FormDiv,
  Button,
  Error
} from '../StyledComponents'
import { axiosWithAuth } from '../utils/axiosWithAuth';



const Login = props => {
  const { errors, touched} = props;
  
  
  return (
    <>
      <Heading>Login</Heading>
      <FormDiv>
        {touched.username && errors.username && (
          <Error>{errors.username}</Error>
        )}
        <Input type="text" name="username" placeholder="username" />

        {touched.password && errors.password && (
          <Error>{errors.password}</Error>
        )}
        <Input type="password" name="password" placeholder="password" />

        <Button type="submit">Login</Button>
      </FormDiv>
    </>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {
      username: values.username || '',
      password: values.password || ''
    };
  },
  validationSchema: yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
  }),
  validateOnChange: false,
  validateOnBlur: false,
  handleSubmit: (values, { props, resetForm }) => {
    axiosWithAuth()
      .post('/auth/login/', values)
      .then(res => {
        localStorage.setItem('userId', res.data.user_id)
        localStorage.setItem('token', res.data.token);
        resetForm();
        return props.history.push('/plantlist');
      })
      .catch(err => {
        return err.response;
      });
  }
})(Login);
