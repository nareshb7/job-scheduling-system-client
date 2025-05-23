import Button from "common/button";
import { Input } from "common/input";
import { SignupData, SignupPageProps } from "pages/types";
import React, { useState } from "react";
import httpMethods from "service";

const initialSignupData = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  location: "",
  password: "",
  role: "",
};

const SignupPage = ({ onPageChange }: SignupPageProps) => {
  const [formData, setFormData] = useState<SignupData>(initialSignupData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await httpMethods.post("/auth/signup", formData);
      onPageChange("LOGIN");
    } catch (err: any) {
      console.error("singup_error::", err?.message);
    }
  };

  const handleCancel = () => {
    onPageChange("WELCOME");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create Account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <Input
              name="firstName"
              value={formData.firstName}
              placeHolder="First Name"
              className="w-1/2 border-gray-300"
              onChange={handleChange}
              required
            />
            <Input
              name="lastName"
              value={formData.lastName}
              placeHolder="Last Name"
              className="w-1/2 border-gray-300"
              onChange={handleChange}
              required
            />
          </div>
          <Input
            name="role"
            value={formData.role}
            placeHolder="Role"
            className="w-full border border-gray-300"
            onChange={handleChange}
            required
          />
          <Input
            name="location"
            value={formData.location}
            placeHolder="Location"
            className="w-full border border-gray-300"
            onChange={handleChange}
            required
          />
          <Input
            name="mobile"
            value={formData.mobile}
            type="tel"
            placeHolder="Mobile"
            className="w-full border border-gray-300"
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            value={formData.email}
            type="email"
            placeHolder="Email"
            className="w-full border border-gray-300"
            onChange={handleChange}
            required
          />
          <Input
            name="password"
            value={formData.password}
            type="password"
            placeHolder="Password"
            className="w-full border border-gray-300"
            onChange={handleChange}
            required
          />

          <div className="flex justify-between mt-6">
            <Button
              className="bg-blue-500 text-white hover:bg-blue-600"
              type="submit"
            >
              Signup
            </Button>
            <Button
              className="bg-gray-200 text-gray-800 hover:bg-gray-300"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
