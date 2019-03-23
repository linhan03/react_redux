import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostList from './components/post_list'
import Calculator from './components/calculator';

class App extends Component {
  render() {
    return (
      <div className="container">
          <Calculator/>
          <p className="text-center">
              <button  onClick={this.props.onIncrement} className="btn btn-primary mr-2">Increase</button>
              <button onClick={this.props.onDecrement} className="btn btn-danger mr-2">Decrease</button>
              <button onClick={this.props.getPost} className="btn btn-danger mr-2">getPost</button>

          </p>
          <PostList/>
      </div>
    );
  }
}

// App.defaultProps={
//     value:{counter: {
//             data: 0,
//             payload: {}
//         },},
// }

App.propTypes={
    value:PropTypes.object.isRequired,
    onIncrement:PropTypes.func.isRequired,
    onDecrement:PropTypes.func.isRequired,
}

export default App;
