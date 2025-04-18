import React, { useState } from "react";
import Spinner from "common/spinner";
import Button from "common/button";
import { useLocation, useNavigate } from "react-router-dom";
import { getPortalConfig, initialEditObj } from "../helper";
import DynamicDescription from "../../../../components/dashboard/DescriptionCard";
import { PortalApplication } from "pages/dashboard/types";
import AddForm from "pages/jobApplicationForm/AddForm";
import { initialFormData } from "pages/jobApplicationForm";
import { JobApplicationFormType } from "pages/jobApplicationForm/type";
import httpMethods from "service/index";

const convertDateInputFormat = (dt: string) => {
  return new Date(dt).toISOString().split("T")[0];
};

const PortalApplicationInfo = () => {
  const { state } = useLocation();
  const [application, setApplication] = useState<PortalApplication>(state);
  const [editApplication, setEditApplication] =
    useState<PortalApplication | null>(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleBack = () => {
    navigate(-1);
  };
  const handleEditClick = () => {
    setEditApplication({
      ...initialFormData,
      ...application,
      appliedDate: convertDateInputFormat(application.appliedDate),
    });
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setEditApplication((prev) => prev && { ...prev, [name]: value });
  };
  const handleSubmit = async (formData: JobApplicationFormType) => {
    try {
      const { data } = await httpMethods.post("/portal/update", {
        ...formData,
        description: application.description,
      });
      setEditApplication(null);
    } catch (err: any) {
      console.error("portal_to_main_application_error:", err.message);
    }
  };
  const handleCancel = () => {
    setEditApplication(null);
  };

  return (
    <div className="max-w-full mt-2  p-6 bg-white dark:bg-gray-800 shadow rounded-md text-gray-800 dark:text-white relative">
      {isLoading && <Spinner />}
      {editApplication ? (
        <AddForm
          formData={{
            ...initialFormData,
            ...editApplication,
            description: "",
            hrName: application.hirer,
          }}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
          onChange={handleChange}
          from="PORTAL"
        />
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Application Details</h2>
            <div className="flex gap-2 items-center">
              <div>
                <Button
                  onClick={handleEditClick}
                  className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded"
                >
                  Complete Application Info
                </Button>
              </div>
              <div>
                <Button
                  onClick={handleBack}
                  className="bg-red-200 text-gray-800 hover:bg-red-300 dark:bg-red-500 dark:text-white dark:hover:bg-red-400"
                >
                  Back
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {getPortalConfig(application).map((item) =>
              item.value ? (
                <div key={item.label}>
                  <span className="font-semibold inline-block w-[150px]">
                    {item.label}
                  </span>
                  : {item.value}
                </div>
              ) : null
            )}
            <div>
              <span className="font-semibold inline-block w-[150px]">Link</span>
              :{" "}
              <a
                href={application.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline cursor-pointer"
              >
                Click here
              </a>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap">
              <span className="font-semibold inline-block w-[150px] shrink-0">
                Description
              </span>
              <div className="mt-1 text-sm text-gray-700 dark:text-gray-300 text-wrap border rounded p-2">
                <DynamicDescription descriptionData={application.description} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PortalApplicationInfo;
