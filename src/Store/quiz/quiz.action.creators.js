import { ADD_MISTAKE, SELELCT_QUESTION, SET_QUESTIONLIST } from "./quiz.constants";

export function quizAddMistakeAction(payload) {
    return {
        type: ADD_MISTAKE,
        payload,
    }
}

export function quizSelectedQuestionAction(payload) {
    return {
        type: SELELCT_QUESTION,
        payload: payload,
    }
}

export function quizSetQuestionListAction(payload) {
    return {
        type: SET_QUESTIONLIST,
        payload
    }
}