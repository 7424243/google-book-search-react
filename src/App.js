import React, {Component} from 'react';
import './App.css';
import Filter from './Filter/Filter';
import Results from './Results/Results';
import Search from './Search/Search';



const results = [
  {
      title: 'Title',
      author: 'Author',
      price: '$15.00',
      description: 'I am a book',
      url: 'http://www.google.com'
  },
  {
    title: 'Title #2',
    author: 'Author #2',
    price: '$30.00',
    description: 'I am a second book',
    url: 'http://www.google.com'
  }

]

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.setState = {
  //     search: '',
  //     author: '',
  //     price: 0,
  //     image: {}
  //   }
  // }

  render() {
    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <Search />
        <Filter />
        <Results results={results}/>
      </div>
    );
  }

}

export default App;
