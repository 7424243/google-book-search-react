import React, {Component} from 'react';




class Search extends Component {


  constructor(props) {
    super(props);
    this.setState = {
      term: 'search',
      bookType: 'All',
      printType: 'epub'
    };

    this.termChanged = this.termChanged.bind(this);
    this.printTypeChanged = this.printTypeChanged.bind(this);
    this.bookTypeChanged = this.bookTypeChanged.bind(this);
  }

  termChanged(event) {
      this.setState({term: event.target.value})
  }

  printTypeChanged(event) {
      this.setState({printType: event.target.value})
  }

  bookTypeChanged(event) {
      this.setState({bookType: event.target.vale})
  }

  handleSubmit(event) {
      console.log('I was clicked!');
      event.preventDefault();
  }


  render() {
      
    return (
      <div className='Search'>
          <form className='searchForm'>
              <label htmlFor='search'>Search: </label>
              <input 
              type='text' 
              name='search'
              value={this.state.term}
              onChange={this.termChanged}></input>
              <label htmlFor='printType'>Print Type: </label>
              <select 
              name='printType' 
              value={this.state.printType}
              onChange={this.printTypeChanged}>
                <option value='all'>All</option>
                <option value='books'>Books</option>
                <option value='magazine'>Magazine</option>
              </select>
              <label htmlFor='bookType'>Book Type: </label>
              <select 
              name='bookType' 
              value={this.state.bookType}
              onChange={this.bookTypeChanged}>
                <option value='epub'>epub</option>
                <option value=''>all</option>
                
              </select>
              <button type='submit'>Search</button>
          </form>
          
      </div>
    );
  }

}

export default Search;