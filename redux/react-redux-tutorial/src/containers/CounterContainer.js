import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// const mapStateProps = (state) => ({
//   number: state.counter.number,
// });
// const mapDispatchToProps = (dispatch) => ({
//   // 임시함수
//   increase: () => {
//     console.log('increase');
//   },
//   decrease: () => {
//     console.log('decrease');
//   },
// });

export default connect(({ counter }) => ({ number: counter.number }), {
  increase,
  decrease,
})(CounterContainer);
