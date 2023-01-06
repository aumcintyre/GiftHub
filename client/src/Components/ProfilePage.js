import React from 'react';
import { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap/';
import CreateWishlist from "./CreateWishlist"
import Exchange from './Exchange';
// var amazon = require('amazon-product-api');

// var client = amazon.createClient({
//     awsId: "aws ID",
//     awsSecret: "aws Secret",
//     awsTag: "aws Tag"
//   });

function ProfilePage(props) {
    const { user } = props
    const [showWishCreator, setShowWishCreator] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchChange = event => {
        setSearchTerm(event.target.value)
    }

    const handleSearchSubmit = event => {
        event.preventDefault()
    }


    console.log(props);
    console.log(user);

    return (
        <div className="profile-page">
            <form className="profileSearchBar" onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="search here for presents"
                    value={searchTerm}
                    onChange={handleSearchChange} />
                <button type="submit">Search</button>
            </form>
            <div>
                <h1>THIS IS THE PROFILE PAGE FOR {props.user.username}</h1>
                {/* <p>{user.Wishlist}</p> */}
            </div>
            <button onClick={() => setShowWishCreator(true)}>Make your wishlist!</button>
            {showWishCreator && <CreateWishlist />}
            <Exchange />
        </div>
    )
}

export default ProfilePage;