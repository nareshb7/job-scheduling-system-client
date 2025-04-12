import React from "react";
import { Application } from "../types";
import { getDate } from "utils/util";
import Button from "common/button";

export interface ViewApplicationProps {
  application: Application;
  onBack: () => void;
}

const ViewApplication = ({ application, onBack }: ViewApplicationProps) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 shadow rounded-md text-gray-800 dark:text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Application Details</h2>
        <Button
          onClick={onBack}
          className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded"
        >
          Back
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <span className="font-semibold">Job ID:</span> {application.jobId}
        </div>
        <div>
          <span className="font-semibold">Position:</span>{" "}
          {application.position}
        </div>
        <div>
          <span className="font-semibold">Company:</span> {application.company}
        </div>
        <div>
          <span className="font-semibold">Location:</span>{" "}
          {application.companyLocation}
        </div>
        <div>
          <span className="font-semibold">Applied Date:</span>{" "}
          {getDate(application.appliedDate)}
        </div>
        <div>
          <span className="font-semibold">Status:</span>{" "}
          {application.applicatinStatus}
        </div>
        <div>
          <span className="font-semibold">Next Follow-up:</span>{" "}
          {getDate(application.nextFollowup)}
        </div>
        <div>
          <span className="font-semibold">HR Name:</span>{" "}
          {application.hrData.name}
        </div>
        <div>
          <span className="font-semibold">HR Phone:</span>{" "}
          {application.hrData.phone}
        </div>
        <div>
          <span className="font-semibold">Description:</span>
          <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
            {application.jobDescription}
          </p>
        </div>
        {application.resumeId && (
          <div>
            <span className="font-semibold">Resume ID:</span>{" "}
            {application.resumeId}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewApplication;
