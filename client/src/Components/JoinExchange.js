import React, { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap/';
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
        <>
            <div className='center-box'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Form onSubmit={handleButtonClick}>
                            {/* show alert if server response is bad */}
                            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                                Something went wrong with your new exchange!
                            </Alert>
                            <h1> Join an Exchange </h1>
                            <Form.Group>
                                <Form.Label htmlFor='roomName'>roomName</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Your Room Name'
                                    name='roomName'
                                    onChange={handleInputChange}
                                    value={exchangeData.roomName}
                                    required
                                />
                                <Form.Control.Feedback type='invalid'>Room Name is required!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor='passphrase'>Passphrase</Form.Label>
                                <Form.Control
                                    type='passphrase'
                                    placeholder='Your room passphrase'
                                    name='passphrase'
                                    onChange={handleInputChange}
                                    value={exchangeData.passphrase}
                                    required
                                />
                                <Form.Control.Feedback type='invalid'>Passphrase is required!</Form.Control.Feedback>
                            </Form.Group>
                            <button class='btn-one'
                                disabled={!(exchangeData.roomName && exchangeData.passphrase)}
                                type='submit'
                                variant='success'>
                                Create room
                            </button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>

    );

};
export default ExchangeJoiner;