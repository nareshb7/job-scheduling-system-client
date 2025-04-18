import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/index";
import ApplicationCard from "./container/mainApplication/ApplicationCard";
import { Application, PortalApplication } from "./types";
import Button from "common/button";
import { MdRefresh } from "react-icons/md";
import { useAuthContext } from "authContext/index";
import Spinner from "common/spinner";
import PortalApplicationCard from "./container/portalApplication/PortalApplicationcard";
import { useNavigate } from "react-router-dom";
import DashboardTabs from "../../components/dashboard/DashboardTabs";
import StatusBox from "components/dashboard/StatusBox";

const Dashboard = () => {
  const { getApplications, getPortalApplications } = useAuthContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { applications, portalApplications, currentActiveTab } = useSelector(
    (state: RootState) => state.Application
  );
  const handleApplicationClick = (application: Application) => {
    navigate("/application/" + application._id, { state: application });
  };

  const handlePortalApplicationClick = (application: PortalApplication) => {
    navigate("/portal/" + application._id, { state: application });
  };

  const handleRefreshClick = async () => {
    setIsLoading(true);
    await getApplications();
    await getPortalApplications();
    setIsLoading(false);
  };

  return (
    <div className="p-6 relative">
      {/* Need to update spinner styles */}
      {isLoading && <Spinner />}
      <>
        <div className="flex gap-3">
          <h2 className="text-xl font-semibold">
            Welcome to the Job Scheduling System (Work In progress)
          </h2>
          <div>
            <Button
              className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
              onClick={handleRefreshClick}
            >
              <MdRefresh fontSize={20} />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6 mt-2">
          <StatusBox
            title="Today Applied"
            count={10}
            color="dark:bg-blue-100 text-black bg-blue-400"
          />
          <StatusBox
            title="In Progress"
            count={10}
            color="dark:bg-yellow-100 text-black bg-yellow-400"
          />
          <StatusBox
            title="Accepted"
            count={10}
            color="dark:bg-green-100 text-black bg-green-400"
          />
          <StatusBox
            title="Rejected"
            count={10}
            color="dark:bg-red-100 text-black bg-red-400"
          />
          <StatusBox
            title="Offer Released"
            count={10}
            color="dark:bg-purple-100 text-black bg-purple-400"
          />
        </div>
        <DashboardTabs />
        {currentActiveTab === "PORTAL" ? (
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Portal Applications:{" "}
              {portalApplications.length === 0 ? (
                "No Portal Application"
              ) : (
                <span className="text-gray-700">
                  {portalApplications.length} Need to complete info
                </span>
              )}
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              {portalApplications.map((application) => (
                <PortalApplicationCard
                  key={application._id}
                  application={application}
                  onClick={handlePortalApplicationClick}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Applications:{" "}
              {applications.length === 0
                ? "No Portal Application"
                : applications.length}
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              {applications.map((application) => (
                <ApplicationCard
                  key={application._id}
                  application={application}
                  onClick={handleApplicationClick}
                />
              ))}
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Dashboard;
