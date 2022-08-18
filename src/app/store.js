import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicsSliceData';


export default configureStore({
  reducer: {
    topics: topicsReducer
  },
});
