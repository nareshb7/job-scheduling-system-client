export interface JobApplicationFormType {
  jobId: string;
  company: string;
  title: string;
  appliedDate: string;
  applicationStatus: string;
  nextFollowup: string;
  hrNumber: string;
  hrName: string;
  description: string;
  location: string;
  notes: string;
  resumeId: string;
  hrEmail: string;
  portal: string;
  url: string;
}

export interface AddFormProps {
  formData: JobApplicationFormType;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onSubmit: (data: JobApplicationFormType) => void;
  onCancel: () => void;
  from?: "MAIN" | "PORTAL";
}
