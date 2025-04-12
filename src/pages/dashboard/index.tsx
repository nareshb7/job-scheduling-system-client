import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/index";
import ApplicationCard from "./container/ApplicationCard";
import ViewApplication from "./container/ViewApplication";
import { Application } from "./types";

const Dashboard = () => {
  const applications = useSelector(
    (state: RootState) => state.Application.application
  );
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);
  const handleApplicationClick = (application: Application) => {
    setSelectedApplication(application);
  };
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">
        Welcome to the Job Scheduling System (Work In progress)
      </h2>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Applications:
        </h3>
        {selectedApplication ? (
          <ViewApplication
            application={selectedApplication}
            onBack={() => setSelectedApplication(null)}
          />
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {applications.map((application) => (
              <ApplicationCard
                key={application._id}
                application={application}
                onClick={handleApplicationClick}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
