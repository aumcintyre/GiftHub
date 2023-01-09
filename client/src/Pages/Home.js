import { Form, Button, Alert, Card } from 'react-bootstrap';
import React from 'react';
import Auth from '../utils/auth';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home({ currentPage, handlePageChange }) {
    return (
        <div >
            <div className='home-container'>

                <Card className='text-center home-box'>
                    <h1>Welcome to GiftHub!</h1>
                    <hr></hr>
                    <h3>Features:</h3>
                </Card>

            </div>
            <div className='row home-container'>

                {Auth.loggedIn() ? (
                    <>
                    </>
                ) : (
                    <>

                        <div className='home-card col-5'>
                            <a href='#signup' onClick={() => handlePageChange('signUp')} className='text-center'>
                                <h1>Create Account</h1>
                                <p>Once you create an account, you will be able to start creating gift exchanges right away!</p>
                            </a>
                        </div>
                    </>
                )}

                {Auth.loggedIn() ? (
                    <>
                    </>
                ) : (
                    <>
                        <div className='home-card col-5'>
                            <a href='#login' onClick={() => handlePageChange('Login')} className='text-center'>
                                <h1>Login</h1>
                                <p>Login to your account. Once logged in, you can create your own exchanges, or join someone else's</p>
                            </a>
                        </div>
                    </>
                )}

                {Auth.loggedIn() ? (
                    <>
                        <div className='home-card col-md-5 col-xs-3'>
                            <a href='#profile' onClick={() => handlePageChange('profilepage')} className='text-center'>
                                <h1>Your Profile</h1>
                                <p>Once you create an account, you will be able to start creating gift exchanges right away! If you have been invited to an exchange, please navigate to 'Join Exchange' in the top right of your page!</p>
                            </a>
                        </div>
                    </>
                ) : (
                    <>

                    </>
                )}

                {Auth.loggedIn() ? (
                    <>
                        <div className='home-card col-md-5 col-xs-3'>
                            <h1>Create a new Exchange</h1>
                            <p>Create an exchange of your own. Once you name your exchange and give it a passphrase, anyone you want can join you!</p>
                        </div>
                    </>
                ) : (
                    <>
                    </>
                )}

                {Auth.loggedIn() ? (
                    <>
                        <div className='home-card col-md-5 col-xs-3'>
                            <h1>Join an Exchange</h1>
                            <p>Already have a passphrase? Join your exchange here!</p>
                        </div>
                    </>
                ) : (
                    <>
                    </>
                )}






            </div>

        </div>


    );
}

export default Home;