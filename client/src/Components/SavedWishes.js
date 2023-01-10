import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../utils/queries';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function SavedWishes({ user }) {
    console.log(user);
    const { loading, data } = useQuery(GET_USER, { variables: { username: user }, });
    console.log(data);

    const wishArray = data?.user.wishes || [];

    console.log(wishArray);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className='row'>
            <Button variant="success" onClick={handleShow} className='giftee-btn'>
                {data.user.username}
            </Button>

            <Modal show={show} onHide={handleClose} className='modal-dialog-centered'>
                <Modal.Header closeButton>
                    <Modal.Title>{data.user.username}'s Wishes:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        wishArray.map((wish, index) => {
                            return (
                                <ul>
                                    <li key={index}>{wish}</li>
                                </ul>
                            )
                        })}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} size='sm'>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )


}

export default SavedWishes;