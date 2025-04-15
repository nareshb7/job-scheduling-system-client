import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/index";
import ApplicationCard from "./container/ApplicationCard";
import ViewApplication from "./container/ViewApplication";
import { Application } from "./types";
import Button from "common/button";
import { MdRefresh } from "react-icons/md";
import { useAuthContext } from "authContext/index";
import Spinner from "common/spinner";
import httpMethods from "service/index";
import axios from "axios";

const Dashboard = () => {
  const { getApplications } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const applications = useSelector(
    (state: RootState) => state.Application.application
  );
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);
  const handleApplicationClick = (application: Application) => {
    setSelectedApplication(application);
  };

  const handleRefreshClick = async () => {
    setIsLoading(true);
    await getApplications();
    setIsLoading(false);
  };

  return (
    <div className="p-6 relative">
      {/* Need to update spinner styles */}
      {isLoading && <Spinner />}
      {selectedApplication ? (
        <ViewApplication
          application={selectedApplication}
          onBack={() => setSelectedApplication(null)}
        />
      ) : (
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

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Applications:
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
        </>
      )}
    </div>
  );
};

export default Dashboard;
