import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios"; 
import {useNavigate} from "react-router-dom";


function CreatePost() {

  // Initial values of the form
  const initialValues = {
    title: "",
    postText: "",
    userName: "",
  };

  // Validate the form
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    postText: Yup.string().required('Post text is required'),
    userName: Yup.string().min(3, 'Username must be at least 3 characters').max(15, 'Username must be less than 15 characters').required('Username is required'),
  });

  // Just for see the data
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then(() =>{
      //redirect to the home page
        navigate("/");
    });
  };

  let navigate = useNavigate();

  return (
    <div className="createPostPage">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {() => (
          <Form className="formContainer">
            <label>Title: </label>
            <ErrorMessage name="title" component="span" />
            <Field id="inputCreatePost" name="title" placeholder="(Ex. Title)" />

            <label>Post: </label>
            <ErrorMessage name="postText" component="span" />
            <Field id="inputCreatePost" name="postText" placeholder="(Ex. Post..)" />

            <label>Username: </label>
            <ErrorMessage name="userName" component="span" />
            <Field id="inputCreatePost" name="userName" placeholder="(Ex. John123..)" />

            <button type='submit'>Create Post</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreatePost;
