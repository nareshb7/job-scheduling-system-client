import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Application } from "pages/dashboard/types";

export interface ApplicationSliceState {
  application: Application[];
}

const initialState: ApplicationSliceState = {
  application: [],
};

const application = createSlice({
  name: "Application",
  initialState,
  reducers: {
    setApplications: (
      state: ApplicationSliceState,
      action: PayloadAction<Application[]>
    ) => {
      return {
        ...state,
        application: action.payload,
      };
    },
  },
});

export const { setApplications } = application.actions;

export default application.reducer;
