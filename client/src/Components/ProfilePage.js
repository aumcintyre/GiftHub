import React from 'react';
import { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap/';
import CreateWishlist from "./CreateWishlist"
import Exchange from './Exchange';
import SavedWishes from './SavedWishes';
import Button from 'react-bootstrap/Button';
import { useMutation } from "@apollo/client";
import { REMOVE_WISH } from '../utils/mutations';

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

    const [deleteWishItem, { error }] = useMutation(REMOVE_WISH);

    console.log("profile page line 18 props:", props);
    console.log("profule page line 29 user:", user);





    // ============================================================================





    const HandleDeleteWishItem = async (wish) => {
        try {
            const { data } = await deleteWishItem({
                variables: { wish },
            });
        } catch (err) {
            console.error(err);
        }
    };













    // ======================================================================
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

            <button className='btn btn-success' onClick={() => setShowWishCreator(true)}>Add to your wishlist!</button>

            <div className='wishListCotainer'>
                {
                    wishArray.map((wish, index) => {
                        return (
                            <div>


                                <Button key={index} onClick={(e) => HandleDeleteWishItem(wish)}>
                                    {wish}
                                </Button>

                            </div>
                        )
                    })}
            </div>

            {showWishCreator && <CreateWishlist />}
        </div >
    )
}

export default ProfilePage;