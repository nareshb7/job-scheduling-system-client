import { useAuthContext } from "authContext/index";
import Button from "common/button";
import InputWithLabel, { Input } from "common/input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import httpMethods from "service/index";

const initialForm = {
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
};

const JobApplicationForm = () => {
  const navigate = useNavigate();
  const { currentuser } = useAuthContext();
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      console.log("form_data:::", formData, res);
      // setFormData(initialForm);
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
        <Input
          name="jobId"
          value={formData.jobId}
          placeHolder="Job ID"
          onChange={handleChange}
          required
        />
        <Input
          name="company"
          value={formData.company}
          placeHolder="Company Name"
          onChange={handleChange}
          required
        />
        <Input
          name="position"
          value={formData.position}
          placeHolder="Position"
          onChange={handleChange}
          required
        />
        <Input
          name="applicationStatus"
          value={formData.applicationStatus}
          placeHolder="Application Status"
          onChange={handleChange}
        />
        <InputWithLabel
          label="Applied Date"
          name="appliedDate"
          type="date"
          value={formData.appliedDate}
          placeHolder="Applied Date"
          onChange={handleChange}
        />

        <InputWithLabel
          label="Next Follow-up"
          name="nextFollowup"
          type="date"
          value={formData.nextFollowup}
          placeHolder="Next Follow-up"
          onChange={handleChange}
        />
        <Input
          name="hrNumber"
          value={formData.hrNumber}
          placeHolder="HR Contact Number"
          onChange={handleChange}
        />
        <Input
          name="hrName"
          value={formData.hrName}
          placeHolder="HR Name"
          onChange={handleChange}
        />
        <Input
          name="companyLocation"
          value={formData.companyLocation}
          placeHolder="Company Location"
          onChange={handleChange}
        />
      </div>

      {/* Job Description Field */}
      <div className="mt-4 flex gap-2">
        <textarea
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
          placeholder="Job Description"
          className="w-1/2  border border-gray-300 dark:bg-gray-700 dark:text-white p-2 rounded-md"
          rows={4}
        />
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Notes"
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
