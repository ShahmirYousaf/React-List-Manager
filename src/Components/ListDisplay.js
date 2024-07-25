import React, { Component } from 'react';
import SingletonList from './SingletonList'
import '../Styles/ListDisplay.css'
import { getList, removeItems } from '../Utility/Localstorage';

class ListDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: SingletonList.getList(),
            //listData: getList(),
            selectedItems:[]
        };
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevState.listData !== this.state.listData) {
        console.log('List data has been updated');
      }
    }

    handleCheckBox = (item) => {
        const {selectedItems} = this.state;
        if(selectedItems.includes(item)) {
            this.setState({
                selectedItems: selectedItems.filter(i => i !== item)
            });
        } else {
            this.setState({
                selectedItems: [...selectedItems, item]
            });
        }
    }

    handleDeleteButton = () => {
        SingletonList.RemoveItemsFromList(this.state.selectedItems);
        //removeItems(this.state.selectedItems);
        this.setState( {
            listData: SingletonList.getList(),
            //listData: getList(),
            selectedItems: []
        });
        this.props.navigatePrev();
    }

    render() {
        return (
            <div className="listDisplay">
              <h1>List Data</h1>
              {this.state.listData.length === 0 ? (
                <p>The list is empty, add some data into it</p>
              ) : (
              <ul>
                {this.state.listData.map((item, index) => (
                  <li key={index}>
                    <input
                      type="checkbox"
                      onChange={() => this.handleCheckBox(item)}
                      checked={this.state.selectedItems.includes(item)}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              )}
              <div className='btn-delete'>
              <button onClick={this.handleDeleteButton}>Delete and Go Back</button>
              </div>
             
            </div>
          );
        }
      
    }

    export default ListDisplay;
