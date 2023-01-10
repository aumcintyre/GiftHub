import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_WISH } from '../utils/mutations';
// import SavedWishes from './SavedWishes'

function CreateWishlist() {
    const [addWishItem] = useMutation(ADD_WISH);
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState([]);



    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };


    const handleButtonClick = async (e) => {
        e.preventDefault();
        try {
            setInputValue("")
            addWishItem({ variables: { item: inputValue } })
            const newItems = items.splice(0);
            newItems.push(inputValue)
            setItems(newItems);
            // consolelog(newItems);
        } catch (err) {
            console.error(err);

        }

    }
    const handleRemoveClick = (index) => {
        const newWishes = [...items]
        newWishes.splice(index, 1)
        setItems(newWishes)
    }


    return (
        <>
            <div className='wishlist'>
                <input value={inputValue} placeholder="Add to your wishlist" onChange={handleInputChange} />
                <button className='add-wish-btn' onClick={handleButtonClick}>Add Wish</button>
                {/* <ul className='wishlist-items'>
                    {items.map((item, index) => (
                        <li key={item}>{item}
                            <button onClick={() =>
                                handleRemoveClick(index)}>Delete</button>
                        </li>
                    ))}
                </ul> */}
            </div>
            {/* <SavedWishes items={items} /> */}
        </>

    )
}

export default CreateWishlist;