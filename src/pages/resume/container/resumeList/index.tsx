import { useAuthContext } from "authContext/index";
import { useEffect, useState } from "react";
import httpMethods from "service/index";
import Button from "common/button";
import { Resume } from "pages/resume/types";
import ResumeCard from "./ResumeCard";
import { RootState } from "store/index";
import { useDispatch, useSelector } from "react-redux";
import { setResumesList } from "store/reducers/resumeSlice";

const ResumeList = () => {
  const { fetchResumes } = useAuthContext();
  const dispatch = useDispatch();
  const resumes = useSelector((state: RootState) => state.Resume.list);

  const handleResumeDelete = async (resumeId: string) => {
    try {
      await httpMethods.deleteMethod(`/resume/delete/${resumeId}`);
      dispatch(
        setResumesList(resumes.filter((resume) => resume._id !== resumeId))
      );
    } catch (err: any) {
      console.error("resume_delete_error:", err.message);
    }
  };
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Uploaded Resumes</h2>
      <Button
        onClick={fetchResumes}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mb-4"
      >
        Get Latest Resumes
      </Button>

      <div className="space-y-3 max-h-[400px] overflow-auto">
        {resumes.length === 0 && (
          <p className="text-sm text-gray-500">No resumes found.</p>
        )}
        {resumes.map((resume) => (
          <ResumeCard
            key={resume._id}
            resume={resume}
            onDelete={handleResumeDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ResumeList;
