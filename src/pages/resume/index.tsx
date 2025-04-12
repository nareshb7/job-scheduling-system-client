import React from "react";

import ResumeUpload from "./container/resumeUpload";
import ResumeList from "./container/resumeList";

const ResumePage = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Upload Section */}
        <ResumeUpload />

        {/* Resume List Section */}
        <ResumeList />
      </div>
    </div>
  );
};

export default ResumePage;
