import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicsSliceData';
import quizReducer from '../features/quizzes/quizSliceData';
import cardsReducer from '../features/cards/cardSliceData';


export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizReducer,
    cards: cardsReducer
  },
});
