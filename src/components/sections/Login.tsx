"use client";

import { useState } from "react";
import {
  Shield,
  Eye,
  EyeOff,
  ArrowRight,
  Building,
  Users,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

// Google Icon Component
const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 48 48"
  >
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s12-5.373 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-2.641-.21-5.236-.611-7.743z"
    />
    <path
      fill="#FF3D00"
      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.022 35.026 44 30.038 44 24c0-2.641-.21-5.236-.611-7.743z"
    />
  </svg>
);

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in attempt:", formData);
    alert("Sign in successful! Welcome back.");
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign in clicked");
    alert("Redirecting to Google Sign In...");
  };

  const handleResetPassword = () => {
    alert("Password reset link sent to your email!");
  };

  const handleCreateAccount = () => {
    alert("Redirecting to sign up page...");
  };

  const features = [
    {
      icon: Building,
      title: "Verified Partners",
      description: "Connect with 10,000+ verified business partners",
    },
    {
      icon: Users,
      title: "Trusted Network",
      description: "Join a community of trusted business professionals",
    },
    {
      icon: TrendingUp,
      title: "Growth Tools",
      description: "Access premium tools to grow your business",
    },
  ];

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-gray-400">
              Sign in to your business account and continue growing your network
            </p>
          </div>

          {/* Login Form */}
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6">
              <form onSubmit={handleSignIn} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="bg-gray-800 border-gray-600 text-white pl-4 pr-4 py-3 rounded-xl focus:border-green-500 focus:ring-green-500"
                      placeholder="Enter your business email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      className="bg-gray-800 border-gray-600 text-white pl-4 pr-12 py-3 rounded-xl focus:border-green-500 focus:ring-green-500"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) =>
                        handleInputChange("rememberMe", !!checked)
                      }
                    />
                    <Label
                      htmlFor="rememberMe"
                      className="text-gray-300 text-sm cursor-pointer"
                    >
                      Keep me signed in
                    </Label>
                  </div>
                  <button
                    type="button"
                    onClick={handleResetPassword}
                    className="text-green-400 hover:text-green-300 text-sm hover:underline transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium transition-colors"
                >
                  Sign In
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full border-gray-600" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-gray-900 text-gray-400">
                      Or continue with
                    </span>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  onClick={handleGoogleSignIn}
                  className="w-full mt-4 border-gray-600 text-gray-300 hover:bg-gray-800 py-3 rounded-xl"
                >
                  <GoogleIcon />
                  <span className="ml-2">Continue with Google</span>
                </Button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  Don&apos;t have an account?{" "}
                  <button
                    type="button"
                    onClick={handleCreateAccount}
                    className="text-green-400 hover:text-green-300 hover:underline transition-colors"
                  >
                    Create Account
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Side - Features & Branding */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-gray-900 to-black p-8 items-center justify-center">
        <div className="max-w-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Join the Future of Business Networking
            </h2>
            <p className="text-gray-400 text-lg">
              Connect with verified partners, grow your network, and unlock new
              opportunities
            </p>
          </div>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/professional-business-person.png"
                alt="User testimonial"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-white font-medium">Sarah Johnson</p>
                <p className="text-gray-400 text-sm">CEO, TechCorp</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm italic">
              &quot;This platform has revolutionized how we connect with
              business partners. The verification process gives us confidence in
              every connection we make.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
