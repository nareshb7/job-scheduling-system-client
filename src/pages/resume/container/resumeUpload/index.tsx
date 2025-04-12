import { useAuthContext } from "authContext/index";
import Button from "common/button";
import { Input } from "common/input";
import React, { useState } from "react";
import httpMethods from "service/index";

const ResumeUpload = () => {
  const { currentuser, fetchResumes } = useAuthContext();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    file: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, file }));
  };

  const handleUpload = async () => {
    try {
      const payload = new FormData();
      if (!formData.name || !formData.file)
        return alert("Please fill required fields");

      payload.append("name", formData.name);
      payload.append("description", formData.description);
      payload.append("resume", formData.file);
      payload.append("userId", currentuser?._id || "");

      // Replace with your actual upload API
      await httpMethods.post("/resume/upload", payload, "multipart/form-data");

      alert("Resume uploaded!");
      setFormData({ name: "", description: "", file: null });
      fetchResumes();
    } catch (err: any) {
      console.error("resume_upload_err", err.message);
      alert(err.message);
    }
  };

  const handleCancel = () => {
    setFormData({ name: "", description: "", file: null });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Upload Resume</h2>
      <Input
        name="name"
        value={formData.name}
        type="text"
        placeHolder="Resume Name"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        value={formData.description}
        placeholder="Short Description"
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        className="mb-4 border p-3 rounded"
      />

      <div className="flex space-x-4">
        <Button
          onClick={handleUpload}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Upload
        </Button>
        <Button
          onClick={handleCancel}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ResumeUpload;
