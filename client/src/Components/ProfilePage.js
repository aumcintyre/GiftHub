import React from 'react';
import { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap/';
import CreateWishlist from "./CreateWishlist"
import Exchange from './Exchange';
import SavedWishes from './SavedWishes';
import Button from 'react-bootstrap/Button';

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


    const wishArray = user.wishes || {};

    console.log(wishArray);


    console.log("profile page line 18 props:", props);
    console.log("profule page line 29 user:", user);

    return (
        <div className="profile-page">
            {/* //     <form className="profileSearchBar" onSubmit={handleSearchSubmit}>
        //         <input */}
            {/* //             type="text"
        //             placeholder="search here for presents"
        //             value={searchTerm}
        //             onChange={handleSearchChange} />
        //         <button type="submit">Search</button>
        //     </form> */}
            <div className='profilePageUser'>
                <h1 > {props.user.username}'s profile</h1>
            </div>
            <div className='old-wishes'>
                {
                    wishArray.map((wish, index) => {
                        return (
                            <ul>
                                <Button>
                                    <li key={index}>{wish}</li>
                                </Button>
                            </ul>
                        )
                    })}
            </div>
            <button className='show-wish-creator-btn' onClick={() => setShowWishCreator(true)}>Add to your wishlist!</button>
            {showWishCreator && <CreateWishlist />}
        </div >
    )
}

export default ProfilePage;