import { DropDownOption } from "common/input/types";

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
