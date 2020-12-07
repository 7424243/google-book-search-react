import React, {Component} from 'react';


class Search extends Component {

  render() {
    return (
      <div className='Search'>
          <form className='searchForm'>
              <label htmlFor='search'>Search: </label>
              <input type='text' name='search'></input>
              <label htmlFor='printType'>Print Type: </label>
              <select name='printType'>
                <option value='ALL'>Select one...</option>
              </select>
              <label htmlFor='bookType'>Book Type: </label>
              <select name='bookType'>
                <option value='no filter'>Select one...</option>
              </select>
              <button type='submit'>Search</button>
          </form>
      </div>
    );
  }

}

export default Search;