import React, { useState } from "react";
import { Application, InterviewRound, ViewApplicationProps } from "../types";
import { getDate } from "utils/util";
import Button from "common/button";
import EditInterviewRounds from "./EditApplication";
import httpMethods from "service/index";
import Spinner from "common/spinner";
import { useAuthContext } from "authContext/index";
import { getViewConfig } from "./helper";

const ViewApplication = ({ application, onBack }: ViewApplicationProps) => {
  const { currentuser } = useAuthContext();
  const [editClick, setEditClick] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEditClick = () => {
    setEditClick(!editClick);
  };

  const handleAddNewRound = async (data: InterviewRound) => {
    setIsLoading(true);
    try {
      const res = await httpMethods.post(
        "/applications/update/" + application._id,
        { ...data, userId: currentuser?._id }
      );

      setEditClick(false);
    } catch (err: any) {
      console.error("add_new_interview_round:", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 shadow rounded-md text-gray-800 dark:text-white relative">
      {isLoading && <Spinner />}
      {editClick ? (
        <EditInterviewRounds
          application={application}
          onSave={handleAddNewRound}
          onCancel={() => setEditClick(false)}
        />
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Application Details</h2>
            <div className="flex gap-2">
              <Button
                onClick={handleEditClick}
                className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded"
              >
                Update Interview Round info
              </Button>
              <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded">
                Send Follow up Email
              </Button>
              <Button
                onClick={onBack}
                className="bg-gray-400 text-gray-800 hover:bg-gray-500 px-4 py-2 rounded"
              >
                Back
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {getViewConfig(application).map((item) =>
              item.value ? (
                <div key={item.label}>
                  <span className="font-semibold inline-block w-[150px]">
                    {item.label}
                  </span>
                  : {item.value}
                </div>
              ) : null
            )}
            <div className="flex">
              <span className="font-semibold inline-block w-[150px]">
                Description
              </span>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                : {application.jobDescription}
              </p>
            </div>
            {application.interviewRounds.length > 0 && (
              <div className="space-y-4 mb-4">
                {application.interviewRounds.map((round) => (
                  <InterviewRoundCard key={round._id} interviewRound={round} />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export const InterviewRoundCard = ({
  interviewRound,
}: {
  interviewRound: InterviewRound;
}) => {
  return (
    <div className="p-4 border border-gray-300 rounded dark:border-gray-700 bg-white dark:bg-gray-900">
      <p>
        <strong>Round:</strong> {interviewRound.roundName}
      </p>
      <p>
        <strong>Performance:</strong> {interviewRound.performance}
      </p>
      <p>
        <strong>Next Interview:</strong>{" "}
        {interviewRound.nextInterviewDate || "N/A"}
      </p>
      <p>
        <strong>Description:</strong> {interviewRound.description}
      </p>
      <p>
        <strong>Questions:</strong>{" "}
        {(interviewRound.questionsAsked as string[]).map((question, index) => (
          <li
            key={question + index}
            style={{ listStyle: "none", marginLeft: "10px" }}
          >
            {index + 1}. {question}
          </li>
        ))}
      </p>
    </div>
  );
};

export default ViewApplication;
