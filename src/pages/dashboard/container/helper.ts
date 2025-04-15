import { DropDownOption } from "common/input/types";
import { Application } from "../types";
import { getDate } from "utils/util";

export const getDropdownOptions = (options: string[]): DropDownOption[] => {
  return options.map((opt) => ({ label: opt, value: opt }));
};

export const initialEditObj = {
  roundName: "",
  performance: "",
  nextInterviewDate: "",
  nextFollowup: "",
  questionsAsked: "",
  description: "",
  status: null,
};

export const performanceOptions = [
  "Strong Hire",
  "Hire",
  "Leaning Hire",
  "No Decision",
  "Leaning No Hire",
  "No Hire",
];

export const applicationStatusTypes = [
  "Applied",
  "In Progress",
  "Accepted",
  "Rejected",
  "Offer Released",
];

export const getViewConfig = (application: Application) => {
  const viewConfig = [
    {
      label: "Job ID",
      value: application.jobId,
    },
    {
      label: "Position",
      value: application.position,
    },
    {
      label: "Company",
      value: application.company,
    },
    {
      label: "Location",
      value: application.companyLocation,
    },
    {
      label: "Applied Date",
      value: getDate(application.appliedDate),
    },
    {
      label: "Status",
      value: application.applicationStatus,
    },
    {
      label: "Next Follow-up",
      value: getDate(application.nextFollowup),
    },
    {
      label: "HR Name",
      value: application.hrData.name,
    },
    {
      label: "HR Phone",
      value: application.hrData.phone,
    },
    {
      label: "HR Email",
      value: application.hrData.email,
    },
    {
      label: "Resume ID",
      value: application.resumeId,
    },
  ];

  return viewConfig;
};
