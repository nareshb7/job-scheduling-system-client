export type ApplicationStatus =
  | "Applied"
  | "In Progress"
  | "Accepted"
  | "Rejected"
  | "Offer Released"
  | null;

export interface InterviewRound {
  _id?: string;
  date?: string;
  description: string;
  roundName: string;
  performance: string;
  nextInterviewDate?: string;
  nextFollowup: string;
  questionsAsked: string | string[];
  status: ApplicationStatus;
}

export interface Application {
  hrData: {
    name: string;
    phone: string;
    email: string;
  };
  _id: string;
  company: string;
  title: string;
  appliedDate: string;
  applicationStatus: ApplicationStatus;
  nextFollowup: string;
  description: DescriptionType;
  location: string;
  jobId: string;
  userId: string;
  resumeId: string;
  interviewRounds: InterviewRound[];
  portal?: string;
  url?: string;
}

export interface ViewApplicationProps {
  application: Application | PortalApplication;
  onBack: () => void;
}

export interface PortalApplicationProps {
  application: PortalApplication;
  onBack: () => void;
}

export interface ApplicationCardProps {
  application: Application;
  onClick: (app: Application) => void;
}

export interface PortalApplicationCardProps {
  application: PortalApplication;
  onClick: (app: PortalApplication) => void;
}

export interface EditInterviewRoundsProps {
  onSave: (data: InterviewRound) => void;
  onCancel: () => void;
  application: Application;
}
export interface DescriptionType {
  [key: string]: string | string[];
}

export interface PortalApplication {
  _id: string;
  company: string;
  location: string;
  description: DescriptionType;
  portal: string;
  url: string;
  title: string;
  userId: string;
  createdAt: string;
  hirer: string;
  appliedDate: string;
}

export type Tabs = "MAIN" | "PORTAL";
