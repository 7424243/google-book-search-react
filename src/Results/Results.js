import React, {Component} from 'react';
import ResultItem from '../ResultItem/ResultItem';


class Results extends Component {

  render() {

    const results = this.props.results.map((book, i) => <ResultItem {...book} key={i}/>);

    return (
      <div className="Results">
          {results}
      </div>
    );
  }

}

export default Results;