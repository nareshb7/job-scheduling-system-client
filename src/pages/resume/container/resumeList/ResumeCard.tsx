import { resumeDownload } from "../helper";
import { ResumeCardProps } from "pages/resume/types";

const ResumeCard = ({ resume, onDelete }: ResumeCardProps) => {
  return (
    <div className="flex justify-between items-center p-2 border border-gray-200 dark:border-gray-600 rounded">
      <div>
        <span className="block font-medium">{resume.name}</span>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {resume.description}
        </p>
      </div>
      <div>
        <a
          onClick={() => resumeDownload(resume._id, resume.file.originalName)}
          rel="noopener noreferrer"
          className="text-blue-500 underline cursor-pointer"
        >
          Download
        </a>
        <a
          onClick={() => onDelete(resume._id)}
          rel="noopener noreferrer"
          className="mx-2 text-red-500 underline cursor-pointer"
        >
          Delete
        </a>
      </div>
    </div>
  );
};

export default ResumeCard;
