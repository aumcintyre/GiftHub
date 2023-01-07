import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../utils/queries';

function SavedWishes(props) {
    console.log(props);
    const { data } = useQuery(GET_USER, props.user);
    console.log(data);


    return (
        <div className='saved-wishes'>
            <h3>Wishlist</h3>

               {/* {
               items.map((item, index) => { 
                
                return (
                    <p key={item}>{item}</p>
                )})} */}

        </div>
    )
}

export default SavedWishes;