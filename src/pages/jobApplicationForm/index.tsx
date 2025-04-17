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

const initialForm: JobApplicationFormType = {
  jobId: "J12345",
  company: "X Company",
  position: "Frontend Developer",
  appliedDate: new Date().toISOString().split("T")[0],
  applicationStatus: "Applied",
  nextFollowup: new Date().toISOString().split("T")[0],
  hrNumber: "9010586402",
  hrName: "Naresh",
  jobDescription: "Looking for immediate joiner",
  companyLocation: "Hyderabad",
  notes: "",
  resumeId: "",
  hrEmail: "",
  portal: "Linkedin",
  url: "",
};

const JobApplicationForm = () => {
  const navigate = useNavigate();
  const { currentuser, getApplications } = useAuthContext();
  const resumes = useSelector((state: RootState) => state.Resume.list);

  const [formData, setFormData] = useState(initialForm);

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
      // setFormData(initialForm);
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobApplicationConfig(resumes).map(
          ({
            component,
            label,
            name,
            placeHolder,
            type,
            options,
            isRequired,
          }) => {
            return component === "INPUT" ? (
              <InputWithLabel
                key={name}
                label={label}
                name={name}
                value={formData[name]}
                placeHolder={placeHolder}
                onChange={handleChange}
                type={type}
                required={isRequired}
              />
            ) : (
              <Select
                key={name}
                label={label}
                name={name}
                value={formData[name]}
                options={options || []}
                onChange={handleChange}
              />
            );
          }
        )}
      </div>

      {/* Job Description Field */}
      <div className="mt-4 flex gap-2">
        <Textarea
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
          placeHolder="Job Description"
          className="w-1/2  border border-gray-300 dark:bg-gray-700 dark:text-white p-2 rounded-md"
          rows={4}
        />
        <Textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeHolder="Notes"
          className="w-1/2 border border-gray-300 dark:bg-gray-700 dark:text-white p-2 rounded-md"
          rows={4}
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <Button
          className="bg-blue-500 text-white hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Create
        </Button>
        <Button
          className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default JobApplicationForm;
