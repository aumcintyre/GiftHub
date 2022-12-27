import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap/';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Card from 'react-bootstrap/Card';

//NEED TO IMPORT QUERIES AND MUTATIONS HERE

const SignupForm = () => {
    // set initial form state
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    const [addUser, { error }] = useMutation(ADD_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            console.log("TRYING!!!!!");
            // const { data } = await addUser({
            const { data } = await addUser({
                variables: { ...userFormData }
            });
            console.log('data::::', data)
            // console.log("TOKEN IS BREAKING IT");
            console.log("Token::::", data.addUser.token)

            // const token = mutationResponse.data.addUser.token;
            // Auth.login(token);
            Auth.login(data.addUser.token);

            console.log("GOT TOKEN")

        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };


    return (
        <>
            <div className="center-box">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <div className="">
                            {/* This is needed for the validation functionality above */}
                            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                                {/* show alert if server response is bad */}
                                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                                    Something went wrong with your signup!
                                </Alert>
                                <h1> Sign Up </h1>
                                <Form.Group>
                                    <Form.Label htmlFor='username'>Username</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Your username'
                                        name='username'
                                        onChange={handleInputChange}
                                        value={userFormData.username}
                                        required
                                    />
                                    <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label htmlFor='email'>Email</Form.Label>
                                    <Form.Control
                                        type='email'
                                        placeholder='Your email address'
                                        name='email'
                                        onChange={handleInputChange}
                                        value={userFormData.email}
                                        required
                                    />
                                    <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label htmlFor='password'>Password</Form.Label>
                                    <Form.Control
                                        type='password'
                                        placeholder='Your password'
                                        name='password'
                                        onChange={handleInputChange}
                                        value={userFormData.password}
                                        required
                                    />
                                    <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                                </Form.Group>
                                <button class='btn-one'
                                    disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                                    type='submit'
                                    variant='success'>
                                    Sign up
                                </button>
                            </Form>
                        </div>




                    </Card.Body>
                </Card>
            </div>
        </>
    );

};

export default SignupForm;
