import { DropDownOption } from "common/input/types";
import { Application, PortalApplication } from "../types";
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

export const getPortalConfig = (application: PortalApplication) => {
  const viewConfig = [
    {
      label: "Position",
      value: application.title,
    },
    {
      label: "Company",
      value: application.company,
    },
    {
      label: "Location",
      value: application.location,
    },
    {
      label: "Hirer",
      value: application.hirer,
    },
    {
      label: "Applied Portal",
      value: application.portal,
    },
    {
      label: "Applied Date",
      value: getDate(application.appliedDate),
    },
  ];
  return viewConfig;
};

export const getViewConfig = (application: Application | PortalApplication) => {
  const viewConfig = [
    {
      label: "Job ID",
      value: (application as Application)?.jobId,
    },
    {
      label: "Position",
      value: application.title,
    },
    {
      label: "Company",
      value: application.company,
    },
    {
      label: "Location",
      value: application.location,
    },
    {
      label: "Applied Date",
      value: getDate((application as Application)?.appliedDate),
    },
    {
      label: "Status",
      value: (application as Application)?.applicationStatus,
    },
    {
      label: "Next Follow-up",
      value: getDate((application as Application)?.nextFollowup),
    },
    {
      label: "HR Name",
      value: (application as Application)?.hrData?.name,
    },
    {
      label: "HR Phone",
      value: (application as Application)?.hrData?.phone,
    },
    {
      label: "HR Email",
      value: (application as Application)?.hrData?.email,
    },
    {
      label: "Resume ID",
      value: (application as Application)?.resumeId,
    },
  ];

  return viewConfig;
};
