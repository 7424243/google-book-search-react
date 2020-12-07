import React, {Component} from 'react';


class Search extends Component {

  render() {
    return (
      <div className='Search'>
          <form>
              <label>Search: </label>
              <textarea></textarea>
              <button type='submit'>Search</button>
              <label>Print Type: </label>
              <input></input>
              <label>Book Type: </label>
              <input></input>
          </form>
      </div>
    );
  }

}

export default Search;