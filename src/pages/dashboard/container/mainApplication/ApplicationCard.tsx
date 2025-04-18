import { getDate } from "utils/util";
import { ApplicationCardProps } from "../../types";

const ApplicationCard = ({ application, onClick }: ApplicationCardProps) => {
  return (
    <div
      className="cursor-pointer bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-4 transition hover:shadow-lg"
      onClick={() => onClick(application)}
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
          {application.title}
        </h4>
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {application.company} ({application.location})
        </span>
      </div>

      <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">
        <strong>Applied On:</strong> {getDate(application.appliedDate)}
      </div>

      <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">
        <strong>Status:</strong> {application.applicationStatus}
      </div>

      <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">
        <strong>Next Follow-up:</strong> {getDate(application.nextFollowup)}
      </div>

      <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">
        <strong>HR:</strong> {application.hrData.name} (
        {application.hrData.phone})
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
        <strong>Description:</strong> {application.description?.title}
      </div>
    </div>
  );
};

export default ApplicationCard;
