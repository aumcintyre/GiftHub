import React from 'react';
import { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap/';
import WishCreator from "../Components/CreateWishlist"
import Exchange from './Exchange';


function ProfilePage(props) {
    const { user } = props;
    const [showWishCreator, setShowWishCreator] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchChange = event => {
        setSearchTerm(event.target.value)
    }

    const handleSearchSubmit = event => {
        event.preventDefault()
    }



    return (
        <div className="profile-page">
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="search here for presents"
                    value={searchTerm}
                    onChange={handleSearchChange}/>
            <button type="submit">Search</button>
            </form>
                <div>
                    <h1>THIS IS THE PROFILE PAGE</h1>
                    {/* <p>{user.Wishlist}</p> */}
                </div>
                <button onClick={() => setShowWishCreator(true)}>Make your wishlist!</button>
                {showWishCreator && <WishCreator />}
                <Exchange />
        </div>
    )
}

export default ProfilePage;