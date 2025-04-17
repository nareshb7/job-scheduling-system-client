import { getDate } from "utils/util";
import { ApplicationCareProps, PortalApplicationCardProps } from "../types";

const ApplicationCard = ({ application, onClick }: ApplicationCareProps) => {
  return (
    <div
      className="cursor-pointer bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-4 transition hover:shadow-lg"
      onClick={() => onClick(application)}
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
        <strong>Description:</strong> {application.jobDescription}
      </div>
    </div>
  );
};

export const PortalApplicationCard = ({
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
        <strong>Description:</strong> {application.description}
      </pre>
    </div>
  );
};

export default ApplicationCard;

// {
//   "_id": "6800c43af5715a4658bfdb09",
//   "company": "ACE Online",
//   "description": "**Job Title:** Junior Frontend Engineer (ReactJS, Next.js, Node etc.)\n\n**Responsibilities:**\n\n*   Develop & maintain web apps using HTML, CSS, React.js, Next.js, JavaScript (ES6).\n*   Create reusable code.\n*   Build responsive UIs from UI/UX designs.\n*   Manage application state with Redux.\n*   Optimize application performance.\n*   Use Material UI & Styled Components.\n*   Debug frontend issues.\n*   Integrate APIs with backend.\n\n**Requirements:**\n\n*   2-3 years frontend experience (React.js, Next.js).\n*   Proficiency in HTML, CSS, JavaScript (ES6).\n*   Redux experience.\n*   Material UI & Styled Components familiarity.\n*   Git experience.\n*   Responsive web design knowledge.\n",
//   "location": "Hyderabad, Telangana, India · 2 months ago · Over 100 people clicked apply",
//   "portal": "LinkedIn",
//   "title": "Junior Frontend Engineers (ReactJS, NeXTs, Node etc.) - Software Engineer",
//   "url": "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=4134541441",
//   "userId": "67fe21d2cec60a9927dd8bad",
//   "createdAt": "2025-04-17T09:04:58.513Z",
//   "updatedAt": "2025-04-17T09:04:58.513Z",
//   "__v": 0
// }
