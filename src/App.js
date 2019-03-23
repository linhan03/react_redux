import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.value.data}</h1>
        <p className="text-center">
          <button  onClick={this.props.onIncrement} className="btn btn-primary mr-2">Increase</button>
            <button onClick={this.props.onDecrement} className="btn btn-danger mr-2">Decrease</button>
        </p>
      </div>
    );
  }
}

App.defaultProps={
    value:{data:0},
}

App.propTypes={
    value:PropTypes.object.isRequired,
    onIncrement:PropTypes.func.isRequired,
    onDecrement:PropTypes.func.isRequired,
}
export default App;
