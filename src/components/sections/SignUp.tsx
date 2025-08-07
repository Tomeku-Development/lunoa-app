"use client";
import React from "react";

import { useState } from "react";
import {
  Shield,
  User,
  Building,
  Mail,
  Lock,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Upload,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",

    // Company Information
    companyName: "",
    jobTitle: "",
    companySize: "",
    industry: "",
    website: "",

    // Preferences
    agreeToTerms: false,
    subscribeNewsletter: false,
    businessType: "",
  });

  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [uploadedDocuments, setUploadedDocuments] = useState<string[]>([]);

  const requiredDocuments = [
    {
      name: "Business License",
      description: "Official business registration document",
      required: true,
    },
    {
      name: "Tax ID Certificate",
      description: "Federal tax identification document",
      required: true,
    },
    {
      name: "Certificate of Incorporation",
      description: "Legal incorporation certificate",
      required: true,
    },
    {
      name: "Business Insurance",
      description: "Proof of business liability insurance",
      required: false,
    },
  ];

  const signUpSteps = [
    {
      id: 1,
      title: "Personal Information",
      description: "Tell us about yourself",
      icon: User,
      fields: [
        "firstName",
        "lastName",
        "email",
        "password",
        "confirmPassword",
        "phone",
      ],
    },
    {
      id: 2,
      title: "Company Details",
      description: "Information about your business",
      icon: Building,
      fields: [
        "companyName",
        "jobTitle",
        "companySize",
        "industry",
        "website",
        "businessType",
      ],
    },
    {
      id: 3,
      title: "Document Upload",
      description: "Upload business verification documents",
      icon: Upload,
      fields: ["documents"],
    },
    {
      id: 4,
      title: "Final Setup",
      description: "Complete your account setup",
      icon: CheckCircle,
      fields: ["agreeToTerms"],
    },
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDocumentUpload = (documentName: string) => {
    if (!uploadedDocuments.includes(documentName)) {
      setUploadedDocuments((prev) => [...prev, documentName]);
    }
    alert(`${documentName} uploaded successfully!`);
  };

  const validateStep = (stepId: number) => {
    const step = signUpSteps.find((s) => s.id === stepId);
    if (!step) return false;

    if (stepId === 1) {
      return (
        formData.firstName &&
        formData.lastName &&
        formData.email &&
        formData.password &&
        formData.confirmPassword &&
        formData.password === formData.confirmPassword &&
        formData.phone
      );
    }

    if (stepId === 2) {
      return (
        formData.companyName &&
        formData.jobTitle &&
        formData.companySize &&
        formData.industry &&
        formData.businessType
      );
    }

    if (stepId === 3) {
      const requiredDocs = requiredDocuments.filter((doc) => doc.required);
      const uploadedRequiredDocs = requiredDocs.filter((doc) =>
        uploadedDocuments.includes(doc.name)
      );
      return uploadedRequiredDocs.length === requiredDocs.length;
    }

    if (stepId === 4) {
      return formData.agreeToTerms;
    }

    return false;
  };

  const getStepStatus = (stepId: number) => {
    if (completedSteps.includes(stepId)) return "completed";
    if (currentStep === stepId) return "current";
    if (currentStep > stepId) return "completed";
    return "pending";
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps((prev) => [...prev, currentStep]);
      }
      if (currentStep < signUpSteps.length) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (validateStep(4)) {
      alert("Account created successfully! Welcome to the platform.");
    }
  };

  const getOverallProgress = () => {
    return (completedSteps.length / signUpSteps.length) * 100;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-400" />;
      case "current":
        return <div className="h-5 w-5 rounded-full bg-green-500" />;
      default:
        return <div className="h-5 w-5 rounded-full bg-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Create Your Business Account
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our platform to connect with verified business partners and
            unlock premium features
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="bg-gray-900 border-gray-700 mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">
                Sign Up Progress
              </h3>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                Step {currentStep} of {signUpSteps.length}
              </Badge>
            </div>
            <Progress value={getOverallProgress()} className="h-3 mb-4" />
            <div className="flex items-center justify-between">
              {signUpSteps.map((step) => (
                <div key={step.id} className="flex items-center space-x-2">
                  {getStatusIcon(getStepStatus(step.id))}
                  <span
                    className={`text-sm ${
                      getStepStatus(step.id) === "completed"
                        ? "text-green-400"
                        : getStepStatus(step.id) === "current"
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Current Step Content */}
        <Card className="bg-gray-900 border-gray-700 mb-8">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                {React.createElement(signUpSteps[currentStep - 1].icon, {
                  className: "h-6 w-6 text-green-400",
                })}
              </div>
              <div>
                <CardTitle className="text-white">
                  {signUpSteps[currentStep - 1].title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {signUpSteps[currentStep - 1].description}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Enter your last name"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="email" className="text-white">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Enter your business email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">
                    Password *
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Create a strong password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white">
                    Confirm Password *
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Confirm your password"
                  />
                  {formData.password &&
                    formData.confirmPassword &&
                    formData.password !== formData.confirmPassword && (
                      <p className="text-red-400 text-sm">
                        Passwords do not match
                      </p>
                    )}
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="phone" className="text-white">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Company Information */}
            {currentStep === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="companyName" className="text-white">
                    Company Name *
                  </Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Enter your company name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobTitle" className="text-white">
                    Job Title *
                  </Label>
                  <Input
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) =>
                      handleInputChange("jobTitle", e.target.value)
                    }
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="e.g., CEO, Manager, Director"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companySize" className="text-white">
                    Company Size *
                  </Label>
                  <Select
                    value={formData.companySize}
                    onValueChange={(value) =>
                      handleInputChange("companySize", value)
                    }
                  >
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-1000">
                        201-1000 employees
                      </SelectItem>
                      <SelectItem value="1000+">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-white">
                    Industry *
                  </Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) =>
                      handleInputChange("industry", value)
                    }
                  >
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="manufacturing">
                        Manufacturing
                      </SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessType" className="text-white">
                    Business Type *
                  </Label>
                  <Select
                    value={formData.businessType}
                    onValueChange={(value) =>
                      handleInputChange("businessType", value)
                    }
                  >
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corporation">Corporation</SelectItem>
                      <SelectItem value="llc">LLC</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="sole-proprietorship">
                        Sole Proprietorship
                      </SelectItem>
                      <SelectItem value="nonprofit">Nonprofit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="website" className="text-white">
                    Company Website
                  </Label>
                  <Input
                    id="website"
                    value={formData.website}
                    onChange={(e) =>
                      handleInputChange("website", e.target.value)
                    }
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="https://yourcompany.com (optional)"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Document Upload */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-blue-400" />
                    <p className="text-blue-400 text-sm font-medium">
                      Upload business documents to verify your company and build
                      trust with partners
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {requiredDocuments.map((document, index) => {
                    const isUploaded = uploadedDocuments.includes(
                      document.name
                    );
                    return (
                      <div
                        key={index}
                        className={`p-6 rounded-lg border-2 border-dashed transition-all ${
                          isUploaded
                            ? "border-green-500/30 bg-green-500/10"
                            : "border-gray-600 bg-gray-800/50 hover:border-gray-500"
                        }`}
                      >
                        <div className="text-center">
                          {isUploaded ? (
                            <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-3" />
                          ) : (
                            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                          )}
                          <h4 className="text-white font-medium mb-1">
                            {document.name}
                          </h4>
                          <p className="text-gray-400 text-sm mb-3">
                            {document.description}
                          </p>

                          {document.required && (
                            <Badge
                              variant="outline"
                              className="border-red-500/30 text-red-400 text-xs mb-3"
                            >
                              Required
                            </Badge>
                          )}

                          {isUploaded ? (
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                              Uploaded
                            </Badge>
                          ) : (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                handleDocumentUpload(document.name)
                              }
                              className="border-gray-600 text-gray-300 hover:bg-gray-700"
                            >
                              <Upload className="h-4 w-4 mr-2" />
                              Upload Document
                            </Button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 bg-gray-800 rounded-lg">
                  <h4 className="text-white font-medium mb-2">
                    Document Requirements
                  </h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Accepted formats: PDF, JPG, PNG</li>
                    <li>• Maximum file size: 10MB per document</li>
                    <li>• Documents must be clear and legible</li>
                    <li>• All information must be current and valid</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Step 4: Final Setup */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="p-6 bg-gray-800 rounded-lg">
                  <h3 className="text-white font-semibold mb-4">
                    Account Summary
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Name:</span>
                      <span className="text-white ml-2">
                        {formData.firstName} {formData.lastName}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Email:</span>
                      <span className="text-white ml-2">{formData.email}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Company:</span>
                      <span className="text-white ml-2">
                        {formData.companyName}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Job Title:</span>
                      <span className="text-white ml-2">
                        {formData.jobTitle}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) =>
                        handleInputChange("agreeToTerms", !!checked)
                      }
                    />
                    <Label
                      htmlFor="agreeToTerms"
                      className="text-white text-sm"
                    >
                      I agree to the{" "}
                      <a href="#" className="text-green-400 hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-green-400 hover:underline">
                        Privacy Policy
                      </a>{" "}
                      *
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="subscribeNewsletter"
                      checked={formData.subscribeNewsletter}
                      onCheckedChange={(checked) =>
                        handleInputChange("subscribeNewsletter", !!checked)
                      }
                    />
                    <Label
                      htmlFor="subscribeNewsletter"
                      className="text-gray-400 text-sm"
                    >
                      Subscribe to our newsletter for updates and business
                      insights
                    </Label>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-6">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          <div className="text-gray-400 text-sm">
            Step {currentStep} of {signUpSteps.length}
          </div>

          {currentStep < signUpSteps.length ? (
            <Button
              onClick={handleNext}
              disabled={!validateStep(currentStep)}
              className="bg-green-600 hover:bg-green-700"
            >
              Next Step
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!validateStep(currentStep)}
              className="bg-green-600 hover:bg-green-700"
            >
              Create Account
              <CheckCircle className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>

        {/* Help Section */}
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-medium mb-2">
                  Account Benefits
                </h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Connect with verified business partners</li>
                  <li>• Access to premium networking features</li>
                  <li>• Priority customer support</li>
                  <li>• Advanced analytics and insights</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Getting Started</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Complete profile verification after signup</li>
                  <li>• Upload business documents for trust badge</li>
                  <li>• Connect with your first business partner</li>
                  <li>• Explore platform features and tools</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-400 text-sm">
                Questions? Contact our support team at{" "}
                <a
                  href="mailto:support@company.com"
                  className="text-green-400 hover:underline"
                >
                  support@company.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
