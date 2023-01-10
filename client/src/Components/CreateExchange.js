import React, { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap/';
import { useMutation } from "@apollo/client";
import { ADD_EXCHANGE } from '../utils/mutations';

const CreateExchange = ({ currentPage, handlePageChange }) => {
    const [exchangeData, setExchangeData] = useState({ roomName: '', passphrase: '' });

    const [addExchange, { error }] = useMutation(ADD_EXCHANGE);
    const [showAlert, setShowAlert] = useState(false);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setExchangeData({ ...exchangeData, [name]: value });
    };

    const handleButtonClick = async (e) => {
        e.preventDefault();

        // const newExchange = [...exchangeData];
        // console.log(newExchange);

        try {
            console.log("TRYING!!!!!");
            const { data } = await addExchange({
                variables: { ...exchangeData }
            });
            console.log('data::::', data)

        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setExchangeData({
            roomName: '',
            passphrase: '',
        });


    }



    return (
        <div className='row'>

            <div className='center-box' style={{ marginTop: '150px' }} >
                <div className='col-7 home-card'>

                    <Form onSubmit={handleButtonClick} >
                        {/* show alert if server response is bad */}
                        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                            Something went wrong with your new exchange!
                        </Alert>
                        <h1> New Room </h1>
                        <h5>Here you can create your own gift exchange room with a private passphrase that will link you and your friends together</h5>
                        <Form.Group className='center-form'>
                            <Form.Label htmlFor='roomName'></Form.Label>
                            <Form.Control
                                type='text'
                                className='form-field'
                                placeholder='Your Room Name'
                                name='roomName'
                                onChange={handleInputChange}
                                value={exchangeData.roomName}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Room Name is required!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className='center-form'>
                            <Form.Label htmlFor='passphrase'></Form.Label>
                            <Form.Control
                                type='passphrase'
                                className='form-field'
                                placeholder='Your room passphrase'
                                name='passphrase'
                                onChange={handleInputChange}
                                value={exchangeData.passphrase}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Passphrase is required!</Form.Control.Feedback>
                        </Form.Group>

                        <button class='btn btn-success'
                            disabled={!(exchangeData.roomName && exchangeData.passphrase)}
                            type='submit'
                            variant='success'
                        >
                            Create room
                        </button>

                    </Form>

                </div>
            </div>
        </div >


    );

};
export default CreateExchange;