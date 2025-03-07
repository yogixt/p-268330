import React from "react";
import { BackButton } from "./BackButton";
import { LoginForm } from "./LoginForm";
import { SocialLogin } from "./SocialLogin";
import { CircleBackground } from "../ui/CircleBackground";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    // In a real app, this would call an API
    console.log("Login attempt with:", { email, password });
    toast.success("Login successful!");
    // navigate("/dashboard"); // Navigate to dashboard after login
  };

  const handleForgotPassword = () => {
    toast.info("Password reset link sent to your email");
  };

  const handleCreateAccount = () => {
    toast.info("Create account functionality coming soon");
    // navigate("/register"); // Navigate to registration page
  };

  const handleSocialLogin = (provider: string) => {
    toast.info(`${provider} login coming soon`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="relative w-full max-w-[390px] h-[844px] overflow-hidden bg-white mx-auto my-0 rounded-[50px] max-sm:h-screen max-sm:rounded-none">
        <CircleBackground />

        <BackButton onClick={() => navigate(-1)} />

        <header className="text-center pt-[97px] pb-0 px-[81px] max-sm:pt-20 max-sm:pb-0 max-sm:px-5">
          <h1 className="text-3xl font-bold mb-[26px]">Login here</h1>
          <p className="text-xl font-semibold text-black">
            <span>Welcome back you've</span>
            <br />
            <span>been missed!</span>
          </p>
        </header>

        <LoginForm
          onSubmit={handleLogin}
          onForgotPassword={handleForgotPassword}
          onCreateAccount={handleCreateAccount}
        />

        <SocialLogin
          onGoogleLogin={() => handleSocialLogin("Google")}
          onFacebookLogin={() => handleSocialLogin("Facebook")}
          onAppleLogin={() => handleSocialLogin("Apple")}
        />
      </div>
    </div>
  );
};
