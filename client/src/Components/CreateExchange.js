import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap/';
import { useMutation } from "@apollo/client";
import { ADD_EXCHANGE } from '../utils/mutations';

const ExchangeCreator = () => {
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
        <>
            <div className='landing-page'>
                <Form onSubmit={handleButtonClick}>
                    {/* show alert if server response is bad */}
                    <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                        Something went wrong with your new exchange!
                    </Alert>
                    <h1> New Room </h1>
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
                    <Button
                        disabled={!(exchangeData.roomName && exchangeData.passphrase)}
                        type='submit'
                        variant='success'>
                        Create room
                    </Button>
                </Form>
            </div>
        </>

    );

};
export default ExchangeCreator;