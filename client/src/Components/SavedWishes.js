import React from 'react';


function SavedWishes({items}) {



    return (
        <div className='saved-wishes'>
            <h3>Wishlist</h3>

               {
               items.map((item, index) => { 
                
                return (
                    <p key={item}>{item}</p>
                )})}

        </div>
    )
}

export default SavedWishes;