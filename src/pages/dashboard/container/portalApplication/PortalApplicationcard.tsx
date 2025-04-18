import { PortalApplicationCardProps } from "pages/dashboard/types";
import React from "react";
import { getDate } from "utils/util";

const PortalApplicationCard = ({
  application,
  onClick,
}: PortalApplicationCardProps) => {
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
        <strong>Applied On:</strong> {getDate(application.createdAt)}
      </div>
      <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">
        <strong>Portal On:</strong> {application.portal}
      </div>

      <pre className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
        <strong>Description:</strong> {application.description?.title}
      </pre>
    </div>
  );
};

export default PortalApplicationCard;
