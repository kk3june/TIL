import { createAction, handleAction } from 'redux-actions';

// 액션 타입
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성함수
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// redux-action 적용 =>
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기상태와 리듀서 함수
const initialState = {
  number: 0,
};

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }
// redux-action 적용 =>
const counter = handleAction(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
