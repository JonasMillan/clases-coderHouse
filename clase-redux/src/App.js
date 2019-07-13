import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addAction, subtractAction, resetAction } from './actions/countActions';

const App = ({add, subtract, reset, count}) => (
  <div className="App">
    {count}
    <button onClick={add}>
      incremente
    </button>
    <button onClick={subtract}>
      decrement
    </button>
    <button onClick={reset}>
      reset
    </button>
  </div>
)


const mapStateToProps = state => ({
  count: state.count.number
})

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(addAction()),
  subtract: () => dispatch(subtractAction()),
  reset: () => dispatch(resetAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
