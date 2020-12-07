import React, {Component} from 'react';
import './App.css';
import Filter from './Filter/Filter';
import Results from './Results/Results';
import Search from './Search/Search';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <Search />
        <Filter />
        <Results />
      </div>
    );
  }

}

export default App;
