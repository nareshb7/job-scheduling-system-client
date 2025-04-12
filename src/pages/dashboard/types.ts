export interface IntervoewRoundInfo {
  date: string;
  round: string;
  questions: string[];
  description: string;
}

export interface Application {
  hrData: {
    name: string;
    phone: string;
  };
  _id: string;
  company: string;
  position: string;
  appliedDate: string;
  applicatinStatus: string;
  nextFollowup: string;
  jobDescription: string;
  companyLocation: string;
  jobId: string;
  userId: string;
  resumeId: string;
  history?: IntervoewRoundInfo[];
}

export interface ApplicationCareProps {
  application: Application;
  onClick: (app: Application) => void;
}
