export interface Resume {
  userId: string;
  _id: string;
  name: string;
  file: {
    contentType: string;
    data: Buffer;
    originalName: string;
  };
  description: string;
  createdAt: string;
}

export interface ResumeCardProps {
  resume: Resume;
  onDelete: (resumeId: string) => void;
}
