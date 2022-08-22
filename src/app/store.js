import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicsSliceData';
import quizReducer from '../features/quizzes/quizSliceData';


export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizReducer
  },
});
