import React from 'react';
import { useMutation } from "@apollo/client";
import { ADD_EXCHANGE } from '../utils/mutations';

class ExchangeCreator extends React.Component {
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

    handleButtonClick = (e) => {
        e.preventDefault();

        const newExchange = [...this.state.items,
        this.state.inputValue];
        console.log(newExchange);
        this.setState({ items: newExchange, inputValue: ''});
    }

    // handleRemoveClick = (index) => {
    //     const newWishes = [...this.state.items]
    //     newWishes.splice(index, 1)
    //     this.setState({ items: newWishes })
    // }



    render() {
    return (
    <>
    <div>
        <input value={this.state.inputValue} onChange=
        {this.handleInputChange} />
        
        <button onClick={this.handleButtonClick}>Add Exchange </button>
        <ul>
        {this.state.items.map((item, index) => (
            <li key={item}>{item}
            {/* <button onClick={() = > 
            this.handleRemoveClick(index)}>DESTROY</button> */}
            </li>
        ))}
        </ul>
    </div>
    </>
    
    );
    }
}
export default ExchangeCreator;