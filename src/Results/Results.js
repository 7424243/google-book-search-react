import React, {Component} from 'react';
import ResultItem from '../ResultItem/ResultItem';


class Results extends Component {

  render() {

    const results = Object.keys(this.props.results.items).map((_, i) => <ResultItem 
    key={i}
    title={this.props.results.items[i].volumeInfo.title}
    author={this.props.results.items[i].volumeInfo.authors}
    price={this.props.results.items[i].saleInfo.saleability}
    url={this.props.results.items[i].saleInfo.buyLink}
    imageURL={this.props.results.items[i].volumeInfo.imageLinks.thumbnail}/>);

    return (
      <div className="Results">
          {results}
      </div>
    );
  }

}

export default Results;