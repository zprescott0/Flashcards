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