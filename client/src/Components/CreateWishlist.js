import React from 'react';

class WishCreator extends React.Component {
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

    handleButtonClick = () => {
        const newWish = [...this.state.items,
        this.state.inputValue];
        this.setState({ items: newWish, inputValue: ''});
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
        
        <button onClick={this.handleButtonClick}>Add Wish </button>
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
export default WishCreator;