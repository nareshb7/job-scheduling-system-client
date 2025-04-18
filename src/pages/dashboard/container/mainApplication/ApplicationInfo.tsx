import React, { useState } from "react";
import { Application, InterviewRound, ViewApplicationProps } from "../../types";
import Button from "common/button";
import EditInterviewRounds from "./EditApplication";
import httpMethods from "service/index";
import Spinner from "common/spinner";
import { useAuthContext } from "authContext/index";
import { getViewConfig } from "../helper";
import DynamicDescription from "../../../../components/dashboard/DescriptionCard";
import { useLocation, useNavigate } from "react-router-dom";

const ApplicationInfo = () => {
  const { state: application } = useLocation();
  const { currentuser } = useAuthContext();
  const navigate = useNavigate();
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
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-full  p-6 mt-2 bg-white dark:bg-gray-800 shadow rounded-md text-gray-800 dark:text-white relative">
      {isLoading && <Spinner />}
      {editClick ? (
        <EditInterviewRounds
          application={application as Application}
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
                onClick={handleBack}
                className="bg-red-200 text-gray-800 hover:bg-red-300 dark:bg-red-500 dark:text-white dark:hover:bg-red-400"
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
            <div>
              <span className="font-semibold inline-block w-[150px]">Link</span>
              :{" "}
              <a
                href={application.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline cursor-pointer"
              >
                Click here
              </a>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap">
              <span className="font-semibold inline-block w-[150px] shrink-0">
                Description
              </span>
              <div className="mt-1 text-sm text-gray-700 dark:text-gray-300 text-wrap border rounded p-2">
                <DynamicDescription descriptionData={application.description} />
              </div>
            </div>
            {(application as Application).interviewRounds?.length > 0 && (
              <div className="space-y-4 mb-4">
                {(application as Application).interviewRounds.map((round) => (
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

export default ApplicationInfo;
