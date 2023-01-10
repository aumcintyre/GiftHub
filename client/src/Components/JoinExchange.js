import React, { useState } from 'react';
import { Form, Alert, Card } from 'react-bootstrap/';
import { useMutation } from "@apollo/client";
import { JOIN_EXCHANGE } from '../utils/mutations';

const ExchangeJoiner = () => {
    const [exchangeData, setExchangeData] = useState({ roomName: '', passphrase: '' });

    const [joinExchange, { error }] = useMutation(JOIN_EXCHANGE);
    const [showAlert, setShowAlert] = useState(false);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setExchangeData({ ...exchangeData, [name]: value });
    };

    const handleButtonClick = async (e) => {
        e.preventDefault();

        try {
            console.log("TRYING to join!!!!!");
            console.log("exchangeData:", exchangeData);
            const { data } = await joinExchange({
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
            <div className='center-box' style={{ marginTop: '50px' }}>
                <div className='col-7 home-card'>

                    <Form onSubmit={handleButtonClick}>
                        {/* show alert if server response is bad */}
                        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                            Invalid room name or incorrect passphrase!
                        </Alert>
                        <h1> Join an Exchange </h1>
                        <h5>If you have been invited to another user's exchange, please enter the room name and the passphrase here!</h5>
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
                            variant='success'>
                            Join room
                        </button>
                    </Form>

                </div>
            </div>
        </div>

    );

};
export default ExchangeJoiner;