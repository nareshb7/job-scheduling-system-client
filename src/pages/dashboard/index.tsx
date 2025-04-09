import { useAuthContext } from "authContext/index";
import React, { useEffect, useState } from "react";
import httpMethods from "service/index";
import { getDate } from "utils/util";

export interface Application {
  hrData: {
    name: string;
    phone: string;
  };
  _id: string;
  company: string;
  position: string;
  appliedDate: string;
  applicatinStatus: string;
  nextFollowup: string;
  jobDescription: string;
  companyLocation: string;
  jobId: string;
  userId: string;
}

const Dashboard = () => {
  const { currentuser } = useAuthContext();
  const [applications, setApplications] = useState<Application[]>([]);
  useEffect(() => {
    const getApplications = async () => {
      try {
        const { data } = await httpMethods.get(
          `/applications?id=${currentuser?._id}`
        );
        setApplications(data);
        console.log("data::::", data);
      } catch (err: any) {
        console.error("get_applications_error:", err.message);
      }
    };
    getApplications();
  }, []);
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">
        Welcome to the Job Scheduling System (Work In progress)
      </h2>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Applications:
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {applications.map((application) => (
            <div
              key={application._id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-4 transition hover:shadow-lg"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {application.position}
                </h4>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {application.company} ({application.companyLocation})
                </span>
              </div>

              <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Applied On:</strong> {getDate(application.appliedDate)}
              </div>

              <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Status:</strong> {application.applicatinStatus}
              </div>

              <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Next Follow-up:</strong>{" "}
                {getDate(application.nextFollowup)}
              </div>

              <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>HR:</strong> {application.hrData.name} (
                {application.hrData.phone})
              </div>

              <div className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                <strong>Description:</strong> {application.jobDescription}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
