import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios"; 

function Registration() {

// Initial values of the form
  const initialValues = {
    userName: "",
    password: "",
    
  };

  // Validate the form
  const validationSchema = Yup.object().shape({
    password: Yup.string().min(3).max(15).required('Password text is required'),
    userName: Yup.string().min(3, 'Username must be at least 3 characters').max(15, 'Username must be less than 15 characters').required('Username is required'),
  });

  //Submit the username and password
  const onSubmit = (data) =>{
    axios.post("http://localhost:3001/auth", data).then( () =>{
        console.log(data);
    })
  };


  return (
    <div>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {() => (
          <Form className="formContainer">
            <label>Username: </label>
            <ErrorMessage name="userName" component="span" />
            <Field id="inputCreatePost" name="userName" placeholder="(Ex. John123..)" />

            <label>Password: </label>
            <ErrorMessage name="password" component="span" />
            <Field type="password" id="inputCreatePost" name="password" placeholder="Your password..." />
            <button type='submit'>Register</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Registration;
