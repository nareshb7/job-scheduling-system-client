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
  position: string;
  appliedDate: string;
  applicationStatus: ApplicationStatus;
  nextFollowup: string;
  jobDescription: string;
  companyLocation: string;
  jobId: string;
  userId: string;
  resumeId: string;
  interviewRounds: InterviewRound[];
}

export interface ViewApplicationProps {
  application: Application;
  onBack: () => void;
}

export interface ApplicationCareProps {
  application: Application;
  onClick: (app: Application) => void;
}

export interface EditInterviewRoundsProps {
  onSave: (data: InterviewRound) => void;
  onCancel: () => void;
  application: Application;
}
