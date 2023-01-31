import { SET_QUESTIONLIST } from "./quiz.constants";


export default function questionListReducer(state = [], action) {
    switch (action.type) {
        case SET_QUESTIONLIST:
            state = action.payload;
            break;
        default:
    }
    return state;
}