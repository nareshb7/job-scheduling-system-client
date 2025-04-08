import { useAuthContext } from "authContext/index";
import Button from "common/button";
import InputWithLabel from "common/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import httpMethods from "service/index";

export interface LoginData {
  email: string;
  password: string;
}

const initialLoginData = {
  email: "nareshbjava7@gmail.com",
  password: "Naresh@123",
};

const LoginPage = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuthContext();
  const [formData, setFormData] = useState<LoginData>(initialLoginData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("changeL:::", name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await httpMethods.post("/auth/login", formData);
      console.log("login_data:::", res);
      setIsLoggedIn(true);
      navigate("/");
    } catch (err: any) {
      console.error("login_error::", err?.message);
    }
  };
  const handleCancel = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Login to your account
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email or Mobile */}
          <InputWithLabel
            label="Email or Mobile"
            placeHolder="Enter email or mobile"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          {/* Password */}
          <InputWithLabel
            label="Password"
            placeHolder="Enter password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          {/* Buttons */}
          <div className="flex justify-between items-center pt-2">
            <Button
              className="bg-blue-500 text-white hover:bg-blue-600"
              type="submit"
            >
              Login
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

export default LoginPage;
