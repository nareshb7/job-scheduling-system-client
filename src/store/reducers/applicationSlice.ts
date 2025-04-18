import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Application, PortalApplication, Tabs } from "pages/dashboard/types";

export interface ApplicationSliceState {
  applications: Application[];
  portalApplications: PortalApplication[];
  currentActiveTab: Tabs;
}

const initialState: ApplicationSliceState = {
  applications: [],
  portalApplications: [],
  currentActiveTab: "PORTAL",
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
        applications: action.payload,
      };
    },
    setPortalApplications: (
      state: ApplicationSliceState,
      action: PayloadAction<PortalApplication[]>
    ) => {
      return {
        ...state,
        portalApplications: action.payload,
      };
    },
    setActiveTab: (
      state: ApplicationSliceState,
      action: PayloadAction<Tabs>
    ) => {
      return {
        ...state,
        currentActiveTab: action.payload,
      };
    },
  },
});

export const { setApplications, setPortalApplications, setActiveTab } =
  application.actions;

export default application.reducer;
