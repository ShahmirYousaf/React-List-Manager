import React, {Component} from 'react';
import '../Styles/TextInput.css'

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        };
    }

    handleChange = (event) => {
        this.setState({inputText: event.target.value}) ;
    }

    handleAddButton = () => {
        if (this.state.inputText.trim()) {
            this.props.addListItem(this.state.inputText);
            this.setState({inputText: ''})
        }
    }

    render() {
        return (
            <div className='text-input-container'>
                <input 
                type = "text"
                value={this.state.inputText}
                onChange={this.handleChange}
                />
                <button className='add-btn' onClick={this.handleAddButton}>
                Add
                </button>
            </div>
        )
    }
}

export default TextInput;