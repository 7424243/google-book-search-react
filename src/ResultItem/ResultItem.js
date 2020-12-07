import React, {Component} from 'react';




class ResultItem extends Component {

  render() {

    

    return (
      <div className="resultItem">
          <ul>
            <li>
                <h2><a href={this.props.url} target='_blank' rel='noreferrer'>{this.props.title}</a></h2>
                <p>Author: {this.props.author}</p>
                <p>Price: {this.props.price}</p>
                <p>{this.props.description}</p>
            </li>
          </ul>

      </div>
    );
  }

}

export default ResultItem;