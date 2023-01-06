import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_WISH } from '../utils/mutations';

function CreateWishlist() {
    const [addWish] = useMutation(ADD_WISH);
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState([]);



    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };


    const handleButtonClick = async (e) => {
        e.preventDefault();
        try {
            addWish({ variables: { item: inputValue } })
            setInputValue("")
            const newItems = items.splice(0);
            newItems.push(inputValue)
            setItems(newItems);
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
                <input value={inputValue} onChange={handleInputChange} />
                <button onClick={handleButtonClick}>Add Wish</button>
                <ul className='wishlist-items'>
                    {items.map((item, index) => (
                        <li key={item}>{item}
                            <button onClick={() =>
                                handleRemoveClick(index)}>DESTROY</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>

    )
}

export default CreateWishlist;