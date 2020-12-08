import React, {Component} from 'react';




class Search extends Component {


    constructor(props) {
        super(props);
        this.setState = {
        term: "test",
        bookType: " ",
        printType: " "
        };
    }

  

  termChanged(term) {
      this.setState({term})
  }

  printTypeChanged(printType) {
      this.setState({printType})
  }

  bookTypeChanged(bookType) {
      this.setState({bookType})
  }

  handleSubmit(e) {
      console.log('I was clicked!');
      e.preventDefault();
  }


  render() {
      
    return (
      <div className='Search'>
          <form className='searchForm' onSubmit={e => this.handleSubmit(e)}>
              <label htmlFor='search'>Search: </label>
              <input 
              type='text' 
              name='search'
              
              onChange={e => this.termChanged(e.target.value)}/>
              <label htmlFor='printType'>Print Type: </label>
              <select 
              name='printType' 
              
              onChange={e => this.printTypeChanged(e.target.value)}>
                <option value='all'>All</option>
                <option value='books'>Books</option>
                <option value='magazine'>Magazine</option>
              </select>
              <label htmlFor='bookType'>Book Type: </label>
              <select 
              name='bookType' 
              
              onChange={e => this.bookTypeChanged(e.target.value)}>
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