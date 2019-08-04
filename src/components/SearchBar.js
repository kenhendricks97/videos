import React from 'react';
import ReactDOM from 'react-dom'; 

//create search bar class
class SearchBar extends React.Component {
    state = {term: ''}; 

    //method in the class - event call back so arrow function is used
    onInputChange = (event) => {
        this.setState({term: event.target.value}); //update the term 
    };


    //method so that the anytime user submits form, use this callback
    //arrow function because its a callback passed to child element
    onFormSubmit = event => {
        event.preventDefault(); //prevents browser from refreshing and losing entry

        //TODO: make sure we call callback from parent component
        this.props.onFormSubmit(this.state.term);
    };


    render() {
        return (
        <div className="search-bar ui segment"> {/*rectangle around full component*/} 
            <form onSubmit={this.onFormSubmit} className="ui form">{/*for entering and a callback for when user submits form*/} 
                <div className="field">{/*where to enter */} 
                    <label>Search Video</label>
                        <input  
                        type="text" 
                        value={this.state.term}  
                        onChange={this.onInputChange} 
                        />  {/* input = the text input bar*/}  {/*value = looks at state "term" to determine what the value is*/}   
                        {/*onchange = call-back method - Need onchange prop so value can change and then rerender/event handler*/}       
                </div>
            </form>
        </div>
        );
    }
}
//wefjkne

export default SearchBar; 