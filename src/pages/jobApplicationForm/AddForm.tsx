import Button from "common/button";
import React, { useEffect } from "react";
import { AddFormProps, JobApplicationFormType } from "./type";
import InputWithLabel, { Select, Textarea } from "common/input";
import { jobApplicationConfig } from "./config";
import { useSelector } from "react-redux";
import { RootState } from "store/index";
import { useAuthContext } from "authContext/index";

const AddForm = ({
  formData,
  from = "MAIN",
  onChange,
  onSubmit,
  onCancel,
}: AddFormProps) => {
  const { fetchResumes } = useAuthContext();
  const resumes = useSelector((state: RootState) => state.Resume.list);
  useEffect(() => {
    if (resumes.length === 0) {
      fetchResumes();
    }
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobApplicationConfig(resumes, from).map(
          ({
            component,
            label,
            name,
            placeHolder,
            type,
            options,
            isRequired,
            isDisabled,
          }) => {
            return component === "INPUT" ? (
              <InputWithLabel
                key={name}
                label={label}
                name={name}
                value={formData[name]}
                placeHolder={placeHolder}
                onChange={onChange}
                type={type}
                required={isRequired}
                disabled={isDisabled}
              />
            ) : (
              <Select
                key={name}
                label={label}
                name={name}
                value={formData[name]}
                options={options || []}
                onChange={onChange}
                disabled={isDisabled}
              />
            );
          }
        )}
      </div>

      {/* Job Description Field */}
      <div className="mt-4 flex gap-2">
        {from !== "PORTAL" && (
          <Textarea
            name="jobDescription"
            value={formData.description}
            onChange={onChange}
            placeHolder="Job Description"
            className="w-1/2  border border-gray-300 dark:bg-gray-700 dark:text-white p-2 rounded-md"
            rows={4}
          />
        )}
        <Textarea
          name="notes"
          value={formData.notes}
          onChange={onChange}
          placeHolder="Notes"
          className="w-1/2 border border-gray-300 dark:bg-gray-700 dark:text-white p-2 rounded-md"
          rows={4}
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <Button
          className="bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => onSubmit(formData)}
        >
          Create
        </Button>
        <Button
          className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </div>
    </>
  );
};

export default AddForm;
