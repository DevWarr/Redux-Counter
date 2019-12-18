import { INCREMENT, DECREMENT, TEXT_CHANGE } from "../actions";

const initialState = {
  count: 0,
  test: "Hello!"
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case TEXT_CHANGE:
      return { ...state, test: action.payload };
    case INCREMENT:
      // Fill in the body of this case
      return { ...state, count: ++state.count };
    case DECREMENT:
      // Fill in the body of this case
      return { ...state, count: --state.count };
    default:
      return state;
  }
};
