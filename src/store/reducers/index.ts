import { combineReducers } from "@reduxjs/toolkit";
import ResumeReducer from "./resumeSlice";
import ApplicationReducer from "./applicationSlice";

export const rootReducer = combineReducers({
  Resume: ResumeReducer,
  Application: ApplicationReducer,
});
