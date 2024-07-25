import React, {Component} from 'react';
import TextInput from './TextInput'
import SingletonList from './SingletonList'
import '../Styles/TextShowing.css'
import { getList, addItem } from '../Utility/Localstorage';

class TextShowing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listData: SingletonList.getList()
           // listData: getList()
        };
    }

    componentDidMount() {
        console.log("Text Showing component has been mounted ")
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.listData !== this.state.listData) {
          console.log('List data has been updated');
        }
      }

    addListItem = (item) => {
         SingletonList.AddItemInList(item);
         this.setState({listData: SingletonList.getList()});
        // addItem(item);
        // this.setState({ listData: getList() });
    }

    render() {
        return (
            <div className='textShowing'>
                <h1>List Data</h1>
                {this.state.listData.length === 0 ? (
                    <p>The list is empty, add some data into it</p>
                ) : (
                <ul>
                    {this.state.listData.map((item, index) => (
                        <li key = {index}>
                            {item}
                        </li>
                    ))}
                </ul> 
                )}
                <TextInput addListItem = {this.addListItem} />
                <div className="button-container">
                    <button className='n-p-btn' onClick={this.props.navigatePrev} disabled={this.props.currentPage === 1}>Previous</button>
                    <button className='n-p-btn' onClick={this.props.navigateNext} disabled={this.props.currentPage === 2}>Next</button>
                </div>
            </div>
        );
    }
}

export default TextShowing;