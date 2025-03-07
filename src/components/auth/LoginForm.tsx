import React, { useState } from "react";

interface LoginFormProps {
  onSubmit?: (email: string, password: string) => void;
  onForgotPassword?: () => void;
  onCreateAccount?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  onForgotPassword,
  onCreateAccount,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm() && onSubmit) {
      onSubmit(email, password);
    }
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onForgotPassword) {
      onForgotPassword();
    }
  };

  const handleCreateAccount = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onCreateAccount) {
      onCreateAccount();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[30px] pt-[74px] pb-0 px-[17px] max-sm:pt-[50px] max-sm:pb-0 max-sm:px-5"
    >
      <div className="space-y-4">
        <div className="w-full bg-[rgba(255,246,239,0.96)] rounded-[10px]">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-base font-medium text-[#626262] p-5 bg-transparent outline-none"
            aria-label="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1 ml-2">{errors.email}</p>
          )}
        </div>
        <div className="w-full bg-[rgba(255,246,239,0.96)] rounded-[10px]">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-base font-medium text-[#626262] p-5 bg-transparent outline-none"
            aria-label="Password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1 ml-2">{errors.password}</p>
          )}
        </div>
      </div>
      <button
        type="button"
        onClick={handleForgotPassword}
        className="text-[#FF7D39] text-sm font-semibold text-right cursor-pointer"
      >
        Forgot your password?
      </button>
      <div className="space-y-4">
        <button
          type="submit"
          className="w-full text-white text-xl font-semibold bg-gradient-to-r from-[#FF7D39] to-[#FF9A61] shadow-[0px_10px_20px_0px_#CBD6FF] cursor-pointer px-5 py-[15px] rounded-[10px] border-[none]"
        >
          Sign in
        </button>
        <button
          type="button"
          onClick={handleCreateAccount}
          className="w-full text-[#494949] text-sm font-semibold cursor-pointer bg-white px-5 py-2.5 rounded-[10px] border-[none] mt-2"
        >
          Create new account
        </button>
      </div>
    </form>
  );
};
