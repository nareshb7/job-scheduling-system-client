import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/index";
import ApplicationCard, {
  ApplicationCardSkeleton,
} from "./container/mainApplication/ApplicationCard";
import { Application, PortalApplication } from "./types";
import Button from "common/button";
import { MdRefresh } from "react-icons/md";
import { useAuthContext } from "authContext/index";
import PortalApplicationCard from "./container/portalApplication/PortalApplicationcard";
import { useNavigate } from "react-router-dom";
import DashboardTabs from "../../components/dashboard/DashboardTabs";
import StatusBox from "components/dashboard/StatusBox";
import { boxBgColor, initialApplicationCount } from "utils/constants";

const Dashboard = () => {
  const { getApplications, getPortalApplications } = useAuthContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [applicationsCount, setApplicationCount] = useState(
    initialApplicationCount
  );
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

  useEffect(() => {
    const appCountObj = { ...initialApplicationCount };
    applications.forEach((application) => {
      appCountObj[application.applicationStatus || "Applied"]++;
    });

    setApplicationCount(appCountObj);
  }, [applications]);

  return (
    <div className="p-6 relative">
      {/* Need to update spinner styles */}
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
          {Object.entries(applicationsCount).map(([key, value]) => {
            return (
              <StatusBox
                key={key}
                title={key}
                count={value}
                color={boxBgColor[key]}
              />
            );
          })}
        </div>
        <DashboardTabs />
        {isLoading ? (
          <div className="grid gap-4 md:grid-cols-2">
            {Array(4)
              .fill(0)
              .map(() => (
                <ApplicationCardSkeleton />
              ))}
          </div>
        ) : currentActiveTab === "PORTAL" ? (
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
