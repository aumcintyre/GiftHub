import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_WISH } from '../utils/mutations';

// class CreateWishlist extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             inputValue: '',
//             items: [],
//         };
//     }

// const savedWish = () => {
//     const [userData, setUserData] = useState({});

//     const [addWish, { error }] = useMutation(ADD_WISH);

//     const [inputValue, setInputValue] = useState("");

//     const [items, setItems] = useState([]);



handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
};


handleButtonClick = async (e) => {
    e.preventDefault();
    try {
        addWish({ variables: { item: this.state.inputValue } })
        setInputValue("")
        setItems([...items, inputValue])
    } catch (err) {
        console.error(err);
        // setShowAlert(true);
    }
    // const newWish = [...this.state.items,
    // this.state.inputValue];
    // this.setState({ items: newWish, inputValue: '' });
    // try {
    //     console.log("TRYING to add gift!!!!!");
    //     const { data } = await addWish({
    //         variables: { item: this.state.inputValue }
    //     });
    //     console.log('data::::', data)

};

handleRemoveClick = (index) => {
    const newWishes = [...this.state.items]
    newWishes.splice(index, 1)
    this.setState({ items: newWishes })
};



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

)
}
export default CreateWishlist;