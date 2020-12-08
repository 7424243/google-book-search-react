import React, {Component} from 'react';
import './App.css';
import Search from './Search/Search';


// const results = [
//   {
//       title: 'Title',
//       author: 'Author',
//       price: '$15.00',
//       description: 'I am a book',
//       url: 'http://www.google.com'
//   },
//   {
//     title: 'Title #2',
//     author: 'Author #2',
//     price: '$30.00',
//     description: 'I am a second book',
//     url: 'http://www.google.com'
//   }

// ]


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Google Book Search Top 3</h1>
        <Search />
        
      </div>
    );
  }

}

export default App;
