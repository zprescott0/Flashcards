import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addQuizToTopic } from "../topics/topicsSliceData";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = {
                ...action.payload
            }
        }
    }
});

export const selectQuizzes = state => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;

export const addQuizToQuizzesAndTopics = (data) => {
    return async (dispatch) => {
        const quizData = {
            id: data.id,
            name: data.name,
            topicId: data.topicId,
            cardIds: data.cardIds
        };

        dispatch(addQuiz(quizData));
    
        const topicData = {
            quizId: data.id,
            topicId: data.topicId
        };

        dispatch(addQuizToTopic(topicData));
    };
} 