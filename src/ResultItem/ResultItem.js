import React, {Component} from 'react';


class ResultItem extends Component {

  render() {
    return (
      <div className="resultItem">
          <h2>Title</h2>
          <p>Author: </p>
          <p>Price: </p>
          <p>Description....</p>
      </div>
    );
  }

}

export default ResultItem;