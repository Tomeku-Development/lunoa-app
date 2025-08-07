"use client";

import { useState } from "react";
import {
  TrendingUp,
  Users,
  FileText,
  Star,
  ArrowRight,
  Plus,
  UserPlus,
  Gift,
  Upload,
  CheckCircle,
  Eye,
  HelpCircle,
  Trash2,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TrustGradeMeter } from "@/components/trust-grade-meter";
import {
  stats,
  trustedPartners,
  documents,
  suggestedActions,
} from "@/mock/mock";

export function Dashboard() {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleFileUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.accept = ".pdf,.jpg,.jpeg,.png";
    input.onchange = (e) => {
      const files = (e.target as HTMLInputElement).files;
      if (files) {
        console.log(
          "Files selected:",
          Array.from(files).map((f) => f.name)
        );
      }
    };
    input.click();
  };

  const handleImproveCompliance = () => {
    console.log("Improve compliance clicked");
  };

  const handleImprovePerformance = () => {
    console.log("Improve performance clicked");
  };

  const handleImproveReputation = () => {
    console.log("Improve reputation clicked");
  };

  const handleViewPublicProfile = () => {
    window.open("/public-profile/Tomeku", "_blank");
  };

  const handleDeleteDocument = (docName: string) => {
    console.log("Delete document:", docName);
  };

  const handleReplaceDocument = (docName: string) => {
    console.log("Replace document:", docName);
  };

  const handleInvitePartner = () => {
    window.location.href = "/signup";
  };

  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Section with Trust Grade */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-8">
            Welcome back, <span className="text-emerald-400">Tomeku</span>!
          </h1>

          <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 shadow-2xl backdrop-blur-sm">
            <CardContent className="p-10">
              <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-8 lg:space-y-0">
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
                  <TrustGradeMeter grade="A+" percentage={95} />
                  <div className="text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Your Trust Grade:{" "}
                      <span className="text-emerald-400">A+</span>
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-md text-lg leading-relaxed">
                      Excellent! You have a strong trust profile that builds
                      confidence with partners.
                    </p>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-emerald-400 hover:text-emerald-300 text-base"
                        >
                          <HelpCircle className="h-5 w-5 mr-2" />
                          What does this grade mean?
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-800 border-gray-600 text-gray-200 max-w-sm p-4">
                        <div className="space-y-3">
                          <p className="font-semibold">Trust Grade B+ (75%)</p>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Compliance:</span>
                              <span className="text-emerald-400">95%</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Performance:</span>
                              <span className="text-yellow-400">72%</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Reputation:</span>
                              <span className="text-green-400">88%</span>
                            </div>
                          </div>
                          <p className="text-xs text-gray-400">
                            Higher grades increase partner trust and unlock
                            better opportunities.
                          </p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={index}
                className="bg-gray-900/60 border-gray-700/50 hover:bg-gray-800/60 transition-all duration-300 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400 mb-2 font-medium">
                        {stat.title}
                      </p>
                      <p className="text-3xl font-bold text-white mb-2">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-500">
                        {stat.description}
                      </p>
                    </div>
                    <div
                      className={`w-14 h-14 ${stat.bgColor} rounded-xl flex items-center justify-center`}
                    >
                      <IconComponent className={`h-7 w-7 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            {/* Trust Grade Breakdown */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Trust Grade Breakdown
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gray-900/60 border-gray-700/50 hover:bg-gray-800/60 transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="p-3 bg-emerald-500/20 rounded-xl">
                        <CheckCircle className="h-8 w-8 text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-bold text-white text-lg">
                            Compliance
                          </h4>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircle className="h-4 w-4 text-gray-400 hover:text-white cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-800 border-gray-600 text-gray-200 max-w-sm p-4">
                              <div className="space-y-2">
                                <p className="font-semibold">
                                  Compliance Score: 95%
                                </p>
                                <p>Based on:</p>
                                <ul className="text-sm space-y-1 ml-4">
                                  <li>• Valid business registration</li>
                                  <li>• Tax compliance documents</li>
                                  <li>• Required licenses and permits</li>
                                  <li>• Insurance certificates</li>
                                </ul>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <p className="text-gray-400">
                          Valid documents uploaded
                        </p>
                      </div>
                    </div>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full border-gray-600 text-gray-800 hover:bg-emerald-600 hover:border-emerald-500 hover:text-white transition-all duration-300"
                          onClick={handleImproveCompliance}
                        >
                          Improve
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-800 border-gray-600 text-gray-200 max-w-xs p-3">
                        <p>
                          Upload missing regulatory documents or update expired
                          certificates to boost your compliance score.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/60 border-gray-700/50 hover:bg-gray-800/60 transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="p-3 bg-yellow-500/20 rounded-xl">
                        <TrendingUp className="h-8 w-8 text-yellow-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-bold text-white text-lg">
                            Performance
                          </h4>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircle className="h-4 w-4 text-gray-400 hover:text-white cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-800 border-gray-600 text-gray-200 max-w-sm p-4">
                              <div className="space-y-2">
                                <p className="font-semibold">
                                  Performance Score: 72%
                                </p>
                                <p>Based on:</p>
                                <ul className="text-sm space-y-1 ml-4">
                                  <li>• Financial stability indicators</li>
                                  <li>• Payment history with suppliers</li>
                                  <li>• Business growth metrics</li>
                                  <li>• Recent transaction records</li>
                                </ul>
                                <p className="text-yellow-400 text-sm mt-2">
                                  ⚠️ Missing recent invoices
                                </p>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <p className="text-gray-400">Missing recent invoices</p>
                      </div>
                    </div>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full border-gray-600 text-gray-800 hover:bg-emerald-600 hover:border-yellow-500 hover:text-white transition-all duration-300"
                          onClick={handleImprovePerformance}
                        >
                          Improve
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-800 border-gray-600 text-gray-200 max-w-xs p-3">
                        <p>
                          Upload recent invoices, bank statements, and financial
                          records to demonstrate strong business performance.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/60 border-gray-700/50 hover:bg-gray-800/60 transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="p-3 bg-green-500/20 rounded-xl">
                        <Star className="h-8 w-8 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-bold text-white text-lg">
                            Reputation
                          </h4>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircle className="h-4 w-4 text-gray-400 hover:text-white cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-800 border-gray-600 text-gray-200 max-w-sm p-4">
                              <div className="space-y-2">
                                <p className="font-semibold">
                                  Reputation Score: 88%
                                </p>
                                <p>Based on:</p>
                                <ul className="text-sm space-y-1 ml-4">
                                  <li>• Customer reviews and ratings</li>
                                  <li>• Partner testimonials</li>
                                  <li>• Industry certifications</li>
                                  <li>• Public feedback scores</li>
                                </ul>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <p className="text-gray-400">Strong partner feedback</p>
                      </div>
                    </div>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full border-gray-600 text-gray-800 hover:bg-green-600 hover:border-green-500 hover:text-white transition-all duration-300"
                          onClick={handleImproveReputation}
                        >
                          Improve
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-800 border-gray-600 text-gray-200 max-w-xs p-3">
                        <p>
                          Encourage customers to leave reviews and obtain
                          industry certifications to boost your reputation
                          score.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Document Upload Section */}
            <Card className="bg-gray-900/60 border-gray-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  Document Management
                </CardTitle>
                <CardDescription className="text-gray-400 text-base">
                  Upload and manage your business documents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                    dragActive
                      ? "border-emerald-500 bg-emerald-500/10"
                      : "border-gray-600 hover:border-gray-500"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-white font-semibold mb-2">
                    Drag & drop files here
                  </p>
                  <p className="text-gray-400 mb-4">or click to browse files</p>
                  <Button
                    onClick={handleFileUpload}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    Choose Files
                  </Button>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-white mb-4">
                    Recent Documents
                  </h4>
                  <div className="space-y-4">
                    {documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-800/40 rounded-xl hover:bg-gray-800/60 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                            <FileText className="h-5 w-5 text-gray-400" />
                          </div>
                          <div>
                            <p className="font-semibold text-white text-base">
                              {doc.name}
                            </p>
                            <div className="flex items-center space-x-3 text-sm text-gray-400 mt-1">
                              <span>{doc.category}</span>
                              <span>•</span>
                              <Badge
                                variant={
                                  doc.status === "Verified"
                                    ? "default"
                                    : "secondary"
                                }
                                className={
                                  doc.status === "Verified"
                                    ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                                    : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                }
                              >
                                {doc.status}
                              </Badge>
                              <span>•</span>
                              <span>{doc.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg"
                            onClick={() => handleReplaceDocument(doc.name)}
                          >
                            <RotateCcw className="h-5 w-5" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-gray-400 hover:text-red-400 hover:bg-gray-700 rounded-lg"
                            onClick={() => handleDeleteDocument(doc.name)}
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Suggested Actions */}
          <Card className="bg-gray-900/60 border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Boost Your Trust Score
              </CardTitle>
              <CardDescription className="text-gray-400">
                Complete these actions to improve your grade
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {suggestedActions.map((action, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          action.completed
                            ? "bg-emerald-500 border-emerald-500"
                            : "border-gray-600"
                        }`}
                      >
                        {action.completed && (
                          <CheckCircle className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <span
                        className={`text-sm ${
                          action.completed
                            ? "line-through text-gray-500"
                            : "text-gray-300"
                        }`}
                      >
                        {action.text}
                      </span>
                    </div>
                    {!action.completed && action.progress > 0 && (
                      <Progress
                        value={action.progress}
                        className="h-3 bg-gray-800 ml-10"
                      />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Public Profile Preview */}
          <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Public Trust Profile
              </CardTitle>
              <CardDescription className="text-gray-400">
                Preview how partners see your business
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-green-700 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-xl font-bold text-white">MI</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Tomeku</h4>
                  <div className="flex items-center justify-center space-x-2 mt-3">
                    <Badge className="bg-gradient-to-r from-emerald-500/20 to-green-600/20 text-emerald-400 border-emerald-500/30 px-3 py-1">
                      Trust Grade: A+
                    </Badge>
                  </div>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white py-3"
                  onClick={handleViewPublicProfile}
                >
                  <Eye className="h-5 w-5 mr-2" />
                  View Public Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Trusted Partners */}
          <Card className="bg-gray-900/60 border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white text-xl">
                    Trusted Partners
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Your verified business connections
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-800 hover:bg-emerald-600 hover:border-emerald-500 hover:text-white"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Partner
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trustedPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-800/40 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-700 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold">
                          {partner.logo}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-white">{partner.name}</p>
                        <p className="text-sm text-gray-400">
                          {partner.industry}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrustGradeMeter
                        grade={partner.trustGrade}
                        percentage={partner.trustPercentage}
                        size="xs"
                      />
                      <Badge
                        variant={
                          partner.status === "Active" ? "default" : "secondary"
                        }
                        className={
                          partner.status === "Active"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }
                      >
                        {partner.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                variant="ghost"
                className="w-full mt-6 text-gray-400 hover:text-white hover:bg-gray-800/40"
              >
                View All Partners
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Invite Partner Card */}
      <Card className="bg-gradient-to-br from-emerald-600 to-green-700 border-emerald-500/50 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <UserPlus className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-white mb-3 text-xl">
              Invite Partners
            </h3>
            <p className="text-emerald-100 mb-6 text-base">
              Earn $50 for each verified business you refer
            </p>
            <Button
              onClick={handleInvitePartner}
              className="w-full bg-white text-emerald-700 hover:bg-emerald-50 font-semibold py-3"
            >
              <Gift className="h-5 w-5 mr-2" />
              Invite Now
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="bg-gray-900/60 border-gray-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white text-xl">Quick Actions</CardTitle>
          <CardDescription className="text-gray-400 text-base">
            Common tasks to manage your business profile
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button
              variant="outline"
              className="h-24 flex-col border-gray-600  text-grey-800 hover:bg-emerald-600 hover:border-emerald-500 hover:text-white transition-all duration-300 space-y-3"
              onClick={handleFileUpload}
            >
              <FileText className="h-8 w-8" />
              <span className="font-medium">Upload Documents</span>
            </Button>
            <Button
              variant="outline"
              className="h-24 flex-col border-gray-600  text-grey-800 hover:bg-green-600 hover:border-green-500 hover:text-white transition-all duration-300 space-y-3"
            >
              <Users className="h-8 w-8" />
              <span className="font-medium">Find Partners</span>
            </Button>
            <Button
              variant="outline"
              className="h-24 flex-col border-gray-600  text-grey-800 hover:bg-teal-600 hover:border-teal-500 hover:text-white transition-all duration-300 space-y-3"
            >
              <TrendingUp className="h-8 w-8" />
              <span className="font-medium">View Analytics</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
