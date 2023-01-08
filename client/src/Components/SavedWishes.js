import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../utils/queries';

function SavedWishes({ user }) {
    console.log(user);
    const { loading, data } = useQuery(GET_USER, { variables: { username: user }, });
    console.log(data);

    const wishArray = data?.user.wishes || {};

    console.log(wishArray);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='saved-wishes'>
            <h3>Wishlist</h3>

            {
                wishArray.map((wish, index) => {

                    return (
                        <p key={index}>{wish}</p>
                    )
                })}

        </div>
    )
}

export default SavedWishes;