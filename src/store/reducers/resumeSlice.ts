import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Resume } from "pages/resume/types";

export interface ResumeSliceState {
  list: Resume[];
}

const initialState: ResumeSliceState = {
  list: [],
};

const resumeSlice = createSlice({
  name: "Resume",
  initialState,
  reducers: {
    setResumesList: (
      state: ResumeSliceState,
      action: PayloadAction<Resume[]>
    ) => {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
});

export const { setResumesList } = resumeSlice.actions;

export default resumeSlice.reducer;
