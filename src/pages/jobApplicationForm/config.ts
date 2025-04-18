import { DropDownOption, InputType } from "common/input/types";
import {
  applicationStatusTypes,
  getDropdownOptions,
} from "pages/dashboard/container/helper";
import { Resume } from "pages/resume/types";
import { JobApplicationFormType } from "./type";

export interface JobApplicationConfig {
  name: keyof JobApplicationFormType;
  label: string;
  placeHolder?: string;
  isRequired: true;
  component: "INPUT" | "SELECT";
  type?: InputType;
  options?: DropDownOption[];
  isDisabled: boolean;
}

export const jobPlatforms = [
  "LinkedIn",
  "Naukri",
  "InstaHyre",
  "Career Website",
];

export const jobApplicationConfig = (
  resumes: Resume[],
  from: "MAIN" | "PORTAL"
): JobApplicationConfig[] => [
  {
    name: "jobId",
    label: "Job ID",
    placeHolder: "Job ID",
    isRequired: true,
    component: "INPUT",
    type: "text",
    isDisabled: false,
  },
  {
    name: "company",
    label: "Company Name",
    placeHolder: "Company Name",
    isRequired: true,
    component: "INPUT",
    type: "text",
    isDisabled: from === "PORTAL",
  },
  {
    name: "title",
    label: "Position",
    placeHolder: "Position",
    isRequired: true,
    component: "INPUT",
    type: "text",
    isDisabled: from === "PORTAL",
  },
  {
    name: "applicationStatus",
    label: "Application Status",
    placeHolder: "Job ID",
    isRequired: true,
    component: "SELECT",
    options: getDropdownOptions(applicationStatusTypes),
    isDisabled: false,
  },
  {
    name: "appliedDate",
    label: "Applied Date",
    placeHolder: "Applied Date",
    isRequired: true,
    component: "INPUT",
    type: "date",
    isDisabled: from === "PORTAL",
  },
  {
    name: "nextFollowup",
    label: "Next Follow-up",
    placeHolder: "Next Follow-up",
    isRequired: true,
    component: "INPUT",
    type: "date",
    isDisabled: false,
  },
  {
    name: "hrName",
    label: "HR Name",
    placeHolder: "HR Name",
    isRequired: true,
    component: "INPUT",
    type: "text",
    isDisabled: false,
  },
  {
    name: "hrNumber",
    label: "HR number",
    placeHolder: "HR number",
    isRequired: true,
    component: "INPUT",
    type: "text",
    isDisabled: false,
  },
  {
    name: "hrEmail",
    label: "HR Email",
    placeHolder: "HR Email",
    isRequired: true,
    component: "INPUT",
    type: "text",
    isDisabled: false,
  },
  {
    name: "location",
    label: "Company Location",
    placeHolder: "Company Location",
    isRequired: true,
    component: "INPUT",
    type: "text",
    isDisabled: from === "PORTAL",
  },
  {
    name: "portal",
    label: "Job Platform",
    isRequired: true,
    component: "SELECT",
    options: getDropdownOptions(jobPlatforms),
    isDisabled: from === "PORTAL",
  },
  {
    name: "url",
    label: "Application URL",
    placeHolder: "Paste the application link",
    isRequired: true,
    component: "INPUT",
    type: "text",
    isDisabled: from === "PORTAL",
  },
  {
    name: "resumeId",
    label: "Select Resume",
    isRequired: true,
    component: "SELECT",
    options: resumes.map((resume) => ({
      label: resume.name,
      value: resume._id,
    })),
    isDisabled: false,
  },
];
