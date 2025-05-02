export const CURRENT_USER_KEY = "job_scheduling_user";
export const CURRENT_THEME = "job_scheduling_theme";
export const PROJECT_NAME = "Job Scheduling Manager";
export const APPLIED = "Applied";
export const IN_PROGRESS = "In Progress";
export const ACCEPTED = "Accepted";
export const REJECTED = "Rejected";
export const OFFER_RELEASED = "Offer Released";

export const initialApplicationCount: { [key: string]: number } = {
  [APPLIED]: 0,
  [IN_PROGRESS]: 0,
  [REJECTED]: 0,
  [ACCEPTED]: 0,
  [OFFER_RELEASED]: 0,
};

export const boxBgColor: { [key: string]: string } = {
  [APPLIED]: "dark:bg-blue-100 text-black bg-blue-400",
  [IN_PROGRESS]: "dark:bg-yellow-100 text-black bg-yellow-400 ",
  [ACCEPTED]: "dark:bg-green-100 text-black bg-green-400 ",
  [OFFER_RELEASED]: "dark:bg-purple-100 text-black bg-purple-400 ",
  [REJECTED]: "dark:bg-red-100 text-black bg-red-400 ",
};
