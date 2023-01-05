import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_WISH } from '../utils/mutations';

class CreateWishlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            items: [],
        };
    }

    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    }
    
    
    // const [addWish, { error }] = useMutation(ADD_WISH);
    handleButtonClick = (e) => {
        e.preventDefault();
        
        const newWish = [...this.state.items,
        this.state.inputValue];
        this.setState({ items: newWish, inputValue: '' });
        // addWish({ variables: { item: this.state.inputValue}})
        // try {
        //     console.log("TRYING to add gift!!!!!");
        //     const { data } = addWish({
        //         variables: { item: this.state.inputValue }
        //     });
        //     console.log('data::::', data)

        // } catch (err) {
        //     console.error(err);
        //     setShowAlert(true);
        // }
    }

    handleRemoveClick = (index) => {
        const newWishes = [...this.state.items]
        newWishes.splice(index, 1)
        this.setState({ items: newWishes })
    }



    render() {
        return (
            <>
                <div className='wishlist'>
                    <input value={this.state.inputValue} onChange=
                        {this.handleInputChange} />

                    <button onClick={this.handleButtonClick}>Add Wish </button>
                    <ul className='wishlist-items'>
                        {this.state.items.map((item, index) => (
                            <li key={item}>{item}
                                <button onClick={() => 
            this.handleRemoveClick(index)}>DESTROY</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </>

        );
    }
}
export default CreateWishlist;