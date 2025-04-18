import { useAuthContext } from "authContext/index";
import Button from "common/button";
import InputWithLabel, { Select, Textarea } from "common/input";
import {
  applicationStatusTypes,
  getDropdownOptions,
} from "pages/dashboard/container/helper";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import httpMethods from "service/index";
import { RootState } from "store/index";
import { jobApplicationConfig } from "./config";
import { JobApplicationFormType } from "./type";
import AddForm from "./AddForm";

export const initialFormData: JobApplicationFormType = {
  jobId: "",
  company: "",
  title: "",
  appliedDate: new Date().toISOString().split("T")[0],
  applicationStatus: "Applied",
  nextFollowup: new Date().toISOString().split("T")[0],
  hrNumber: "",
  hrName: "",
  description: "",
  location: "",
  notes: "",
  resumeId: "",
  hrEmail: "",
  portal: "",
  url: "",
};

const JobApplicationForm = () => {
  const navigate = useNavigate();
  const { currentuser, getApplications } = useAuthContext();
  const resumes = useSelector((state: RootState) => state.Resume.list);

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    // onSubmit(formData);
    try {
      const res = await httpMethods.post("/applications/create", {
        ...formData,
        userId: currentuser?._id,
      });
      // setFormData(initialFormData);
      alert("Application created succesfully..!");
      getApplications();
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err: any) {
      console.error("create_application_error:", err.message);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="mt-2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        Upload Job Application
      </h2>

      <AddForm
        formData={formData}
        onCancel={handleCancel}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default JobApplicationForm;
