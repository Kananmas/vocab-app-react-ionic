import { ADD_MISTAKE } from "./quiz.constants";

const initialState = [];

export default function mistakesReducer(state = [...initialState], action) {
    switch (action.type) {
        case ADD_MISTAKE:
            state.push(action.payload);
            break;
        default:
    }
    return state;
}