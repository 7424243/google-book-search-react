import React, {Component} from 'react';
import './App.css';
import Search from './Search/Search';
import Results from './Results/Results';

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

  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    
    const url = `https://www.googleapis.com/books/v1/volumes?q=surf&filter=full&printType=books&key=AIzaSyCT2hnLLjqh_M0NOWqffJYY_or9dzoMDvI`;
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
      <div className="App">
        <h1>Google Book Search</h1>
        <Search />
        <Results results={this.state.results}/>
      </div>
    );
  }

}

export default App;
