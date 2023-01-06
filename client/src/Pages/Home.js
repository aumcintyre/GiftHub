import { Form, Button, Alert, Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
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
                <Card className='home-card col-3'>
                    <h1>Create Account/Login</h1>
                    <p>Once you create an account, you will be able to start creating gift exchanges right away! If you have been invited to an exchange, please navigate to 'Join Exchange' in the top right of your page!</p>
                </Card>

                <Card className='home-card col-3'>
                    <h1>Create/Join Exchange</h1>
                    <p>Info on Creating Exchanges</p>
                </Card>

                <Card className='home-card col-3'>
                    <h1>Create your Wishlist!</h1>
                    <p>Info on Creating Wishlist</p>
                </Card>

                <Card className='home-card col-3'>
                    <h1>Create your Wishlist!</h1>
                    <p>Info on Creating Wishlist</p>
                </Card>
            </div>

        </div>


    );
}

export default Home;