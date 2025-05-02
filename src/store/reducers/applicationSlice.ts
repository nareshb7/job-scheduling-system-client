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
  currentActiveTab: "MAIN",
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
    updateApplication: (
      state: ApplicationSliceState,
      action: PayloadAction<Application>
    ) => {
      const updatedApplication = action.payload;
      return {
        ...state,
        applications: state.applications.map((app) =>
          app._id == updatedApplication._id ? updatedApplication : app
        ),
      };
    },
  },
});

export const {
  setApplications,
  setPortalApplications,
  setActiveTab,
  updateApplication,
} = application.actions;

export default application.reducer;
