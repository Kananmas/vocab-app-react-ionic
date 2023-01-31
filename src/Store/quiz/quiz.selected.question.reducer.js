import { SELELCT_QUESTION } from "./quiz.constants";

const initialState = {
    word: null,
    trueAnswer: null,
    Options: [],
}

export default function questionReducer(state = initialState, action) {
    switch (action.type) {
        case SELELCT_QUESTION:
            state.word = action.payload.word;
            state.trueAnswer = action.payload.trueAnswer;
            state.Options = action.payload.Options;
            break;
        default:
    }
    return state;
}