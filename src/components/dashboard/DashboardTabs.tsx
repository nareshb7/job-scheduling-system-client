import Button from "common/button";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/index";
import { setActiveTab } from "store/reducers/applicationSlice";

const DashboardTabs = () => {
  const dispatch = useDispatch();
  const currentActiveTab = useSelector(
    (state: RootState) => state.Application.currentActiveTab
  );
  return (
    <div className="flex gap-4 mb-4">
      <Button
        className={` ${
          currentActiveTab === "MAIN"
            ? "bg-blue-600 text-white"
            : "bg-white text-gray-800 border border-gray-300"
        }`}
        onClick={() => dispatch(setActiveTab("MAIN"))}
      >
        Main Applications
      </Button>
      <Button
        className={` ${
          currentActiveTab === "PORTAL"
            ? "bg-blue-600 text-white"
            : "bg-white text-gray-800 border border-gray-300 "
        }`}
        onClick={() => dispatch(setActiveTab("PORTAL"))}
      >
        Portal Applications
      </Button>
    </div>
  );
};

export default DashboardTabs;
