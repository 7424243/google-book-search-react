import React, {Component} from 'react';
import Results from '../Results/Results';




class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
          results: [],
          termValue: " ",
          printTypeValue: " "
        }
        
      }

  

    termChanged(termValue) {
        this.setState({termValue})
    }

    printTypeChanged(printTypeValue) {
        this.setState({printTypeValue})
    }


    handleSubmit(e) {
        console.log('I was clicked!');
        e.preventDefault();
        const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.termValue}&printType=${this.state.printTypeValue}&key=AIzaSyCT2hnLLjqh_M0NOWqffJYY_or9dzoMDvI`;
        fetch(url)
            .then(response => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw new Error ('Something happened, please try again later.')
                }
            })
            .then(data => {
                console.log(data)
                this.setState({results: data})
            })
            .catch(error => {
                console.log(error);
                this.setState({error: error.message});
            });
    }


    render() {
        
        return (
        <div className='Search'>
            <form className='searchForm' onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor='search'>Search: </label>
                <input 
                type='text' 
                name='search'
                value={this.state.term}
                onChange={e => this.termChanged(e.target.value)}/>
                <label htmlFor='printType'>Print Type: </label>
                <select 
                name='printType' 
                value={this.state.printType}
                onChange={e => this.printTypeChanged(e.target.value)}>
                    <option value='all'>All</option>
                    <option value='books'>Books</option>
                    <option value='magazine'>Magazine</option>
                </select>

                <button type='submit'>Search</button>
            </form>
            <Results results={this.state.results}/>
        </div>
    );
  }

}

export default Search;