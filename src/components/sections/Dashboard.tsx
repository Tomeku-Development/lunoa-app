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
import { trustedPartners, documents, suggestedActions } from "@/mock/mock";
import { WelcomeSection } from "@/components/dashboard/WelcomeSection";
import { StatsGrid } from "@/components/dashboard/StatsGrid";

// Define interfaces for component props
interface TrustGradeBreakdownProps {
  onImproveCompliance: () => void;
  onImprovePerformance: () => void;
  onImproveReputation: () => void;
}

interface DocumentManagementProps {
  dragActive: boolean;
  handleDrag: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  handleFileUpload: () => void;
  handleDeleteDocument: (docName: string) => void;
  handleReplaceDocument: (docName: string) => void;
}

interface PublicTrustProfileProps {
  onViewPublicProfile: () => void;
}

interface TrustedPartnersProps {
  onInvitePartner: () => void;
}

interface InvitePartnerProps {
  onInvitePartner: () => void;
}

interface QuickActionsProps {
  onFileUpload: () => void;
}

// Trust Grade Breakdown Component
const TrustGradeBreakdown: React.FC<TrustGradeBreakdownProps> = ({
  onImproveCompliance,
  onImprovePerformance,
  onImproveReputation,
}) => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
        Trust Grade Breakdown
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        <Card className="group bg-gray-900/70 border-gray-700/50 hover:bg-gray-800/80 hover:border-gray-600/70 transition-all duration-500 backdrop-blur-xl shadow-2xl hover:shadow-emerald-500/10 hover:scale-[1.02]">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="flex items-start space-x-4 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-emerald-500/20 rounded-xl group-hover:bg-emerald-500/30 transition-all duration-300">
                <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-emerald-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-bold text-white text-base sm:text-lg truncate">
                    Compliance
                  </h4>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 hover:text-white cursor-help flex-shrink-0" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-800/95 border-gray-600 text-gray-200 max-w-xs sm:max-w-sm p-3 sm:p-4 backdrop-blur-xl">
                      <div className="space-y-2">
                        <p className="font-semibold text-sm sm:text-base">
                          Compliance Score: 95%
                        </p>
                        <p className="text-xs sm:text-sm">Based on:</p>
                        <ul className="text-xs sm:text-sm space-y-1 ml-4">
                          <li>• Valid business registration</li>
                          <li>• Tax compliance documents</li>
                          <li>• Required licenses and permits</li>
                          <li>• Insurance certificates</li>
                        </ul>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Valid documents uploaded
                </p>
              </div>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-gray-600 text-gray-800 hover:bg-emerald-600 hover:border-emerald-500 hover:text-white transition-all duration-300 text-xs sm:text-sm"
                  onClick={onImproveCompliance}
                >
                  Improve
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800/95 border-gray-600 text-gray-200 max-w-xs p-3 backdrop-blur-xl">
                <p className="text-xs sm:text-sm">
                  Upload missing regulatory documents or update expired
                  certificates to boost your compliance score.
                </p>
              </TooltipContent>
            </Tooltip>
          </CardContent>
        </Card>

        <Card className="group bg-gray-900/70 border-gray-700/50 hover:bg-gray-800/80 hover:border-gray-600/70 transition-all duration-500 backdrop-blur-xl shadow-2xl hover:shadow-yellow-500/10 hover:scale-[1.02]">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="flex items-start space-x-4 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-yellow-500/20 rounded-xl group-hover:bg-yellow-500/30 transition-all duration-300">
                <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-yellow-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-bold text-white text-base sm:text-lg truncate">
                    Performance
                  </h4>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 hover:text-white cursor-help flex-shrink-0" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-800/95 border-gray-600 text-gray-200 max-w-xs sm:max-w-sm p-3 sm:p-4 backdrop-blur-xl">
                      <div className="space-y-2">
                        <p className="font-semibold text-sm sm:text-base">
                          Performance Score: 72%
                        </p>
                        <p className="text-xs sm:text-sm">Based on:</p>
                        <ul className="text-xs sm:text-sm space-y-1 ml-4">
                          <li>• Financial stability indicators</li>
                          <li>• Payment history with suppliers</li>
                          <li>• Business growth metrics</li>
                          <li>• Recent transaction records</li>
                        </ul>
                        <p className="text-yellow-400 text-xs sm:text-sm mt-2">
                          ⚠️ Missing recent invoices
                        </p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Missing recent invoices
                </p>
              </div>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-gray-600 text-gray-800 hover:bg-yellow-600 hover:border-yellow-500 hover:text-white transition-all duration-300 text-xs sm:text-sm"
                  onClick={onImprovePerformance}
                >
                  Improve
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800/95 border-gray-600 text-gray-200 max-w-xs p-3 backdrop-blur-xl">
                <p className="text-xs sm:text-sm">
                  Upload recent invoices, bank statements, and financial records
                  to demonstrate strong business performance.
                </p>
              </TooltipContent>
            </Tooltip>
          </CardContent>
        </Card>

        <Card className="group bg-gray-900/70 border-gray-700/50 hover:bg-gray-800/80 hover:border-gray-600/70 transition-all duration-500 backdrop-blur-xl shadow-2xl hover:shadow-green-500/10 hover:scale-[1.02] sm:col-span-2 lg:col-span-1">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="flex items-start space-x-4 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-green-500/20 rounded-xl group-hover:bg-green-500/30 transition-all duration-300">
                <Star className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-green-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-bold text-white text-base sm:text-lg truncate">
                    Reputation
                  </h4>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 hover:text-white cursor-help flex-shrink-0" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-800/95 border-gray-600 text-gray-200 max-w-xs sm:max-w-sm p-3 sm:p-4 backdrop-blur-xl">
                      <div className="space-y-2">
                        <p className="font-semibold text-sm sm:text-base">
                          Reputation Score: 88%
                        </p>
                        <p className="text-xs sm:text-sm">Based on:</p>
                        <ul className="text-xs sm:text-sm space-y-1 ml-4">
                          <li>• Customer reviews and ratings</li>
                          <li>• Partner testimonials</li>
                          <li>• Industry certifications</li>
                          <li>• Public feedback scores</li>
                        </ul>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Strong partner feedback
                </p>
              </div>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-gray-600 text-gray-800 hover:bg-green-600 hover:border-green-500 hover:text-white transition-all duration-300 text-xs sm:text-sm"
                  onClick={onImproveReputation}
                >
                  Improve
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800/95 border-gray-600 text-gray-200 max-w-xs p-3 backdrop-blur-xl">
                <p className="text-xs sm:text-sm">
                  Encourage customers to leave reviews and obtain industry
                  certifications to boost your reputation score.
                </p>
              </TooltipContent>
            </Tooltip>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Document Management Component
const DocumentManagement: React.FC<DocumentManagementProps> = ({
  dragActive,
  handleDrag,
  handleDrop,
  handleFileUpload,
  handleDeleteDocument,
  handleReplaceDocument,
}) => {
  return (
    <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-xl shadow-2xl hover:shadow-blue-500/10 hover:border-gray-600/70 transition-all duration-500">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-white text-lg sm:text-xl lg:text-2xl">
          Document Management
        </CardTitle>
        <CardDescription className="text-gray-400 text-sm sm:text-base">
          Upload and manage your business documents
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div
          className={`border-2 border-dashed rounded-xl p-6 sm:p-8 lg:p-12 text-center transition-all duration-500 ${
            dragActive
              ? "border-emerald-500 bg-emerald-500/10 scale-[1.02]"
              : "border-gray-600 hover:border-gray-500 hover:bg-gray-800/20"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
          <p className="text-white font-semibold mb-2 text-sm sm:text-base">
            Drag & drop files here
          </p>
          <p className="text-gray-400 mb-4 text-xs sm:text-sm">
            or click to browse files
          </p>
          <Button
            onClick={handleFileUpload}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 sm:px-6 py-2 text-xs sm:text-sm transition-all duration-300 hover:scale-105"
          >
            Choose Files
          </Button>
        </div>

        <div className="mt-6 sm:mt-8">
          <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
            Recent Documents
          </h4>
          <div className="space-y-3 sm:space-y-4">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gray-800/40 rounded-xl hover:bg-gray-800/60 transition-all duration-300 hover:scale-[1.01] space-y-3 sm:space-y-0"
              >
                <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-white text-sm sm:text-base truncate">
                      {doc.name}
                    </p>
                    <div className="flex flex-wrap items-center gap-1 sm:gap-3 text-xs sm:text-sm text-gray-400 mt-1">
                      <span>{doc.category}</span>
                      <span className="hidden sm:inline">•</span>
                      <Badge
                        variant={
                          doc.status === "Verified" ? "default" : "secondary"
                        }
                        className={`text-xs ${
                          doc.status === "Verified"
                            ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        }`}
                      >
                        {doc.status}
                      </Badge>
                      <span className="hidden sm:inline">•</span>
                      <span>{doc.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-2 sm:space-x-3 flex-shrink-0">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg p-2 transition-all duration-300"
                    onClick={() => handleReplaceDocument(doc.name)}
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-gray-400 hover:text-red-400 hover:bg-gray-700 rounded-lg p-2 transition-all duration-300"
                    onClick={() => handleDeleteDocument(doc.name)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Boost Your Trust Score Component
const BoostTrustScore: React.FC = () => {
  return (
    <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-xl shadow-2xl hover:shadow-purple-500/10 hover:border-gray-600/70 transition-all duration-500">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-white text-lg sm:text-xl">
          Boost Your Trust Score
        </CardTitle>
        <CardDescription className="text-gray-400 text-sm sm:text-base">
          Complete these actions to improve your grade
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-4 sm:space-y-6">
          {suggestedActions.map((action, index) => (
            <div key={index} className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 ${
                    action.completed
                      ? "bg-emerald-500 border-emerald-500 scale-110"
                      : "border-gray-600 hover:border-gray-500"
                  }`}
                >
                  {action.completed && (
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  )}
                </div>
                <span
                  className={`text-xs sm:text-sm leading-relaxed ${
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
                  className="h-2 sm:h-3 bg-gray-800 ml-8 sm:ml-10"
                />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Public Trust Profile Component
const PublicTrustProfile: React.FC<PublicTrustProfileProps> = ({
  onViewPublicProfile,
}) => {
  return (
    <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl shadow-2xl hover:shadow-emerald-500/20 hover:border-gray-600/70 transition-all duration-500 hover:scale-[1.02]">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-white text-lg sm:text-xl">
          Public Trust Profile
        </CardTitle>
        <CardDescription className="text-gray-400 text-sm sm:text-base">
          Preview how partners see your business
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-600 to-green-700 rounded-full mx-auto flex items-center justify-center shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-110">
            <span className="text-lg sm:text-xl font-bold text-white">MI</span>
          </div>
          <div className="space-y-2 sm:space-y-3">
            <h4 className="font-bold text-white text-base sm:text-lg">
              Tomeku
            </h4>
            <div className="flex items-center justify-center">
              <Badge className="bg-gradient-to-r from-emerald-500/20 to-green-600/20 text-emerald-400 border-emerald-500/30 px-3 py-1 text-xs sm:text-sm">
                Trust Grade: A+
              </Badge>
            </div>
          </div>
          <Button
            className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white py-2 sm:py-3 text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/30"
            onClick={onViewPublicProfile}
          >
            <Eye className="h-4 w-4 mr-2" />
            View Public Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Trusted Partners Component
const TrustedPartners: React.FC<TrustedPartnersProps> = ({
  onInvitePartner,
}) => {
  return (
    <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-xl shadow-2xl hover:shadow-blue-500/10 hover:border-gray-600/70 transition-all duration-500">
      <CardHeader className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
          <div>
            <CardTitle className="text-white text-lg sm:text-xl">
              Trusted Partners
            </CardTitle>
            <CardDescription className="text-gray-400 text-sm sm:text-base">
              Your verified business connections
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-gray-600 text-gray-800 hover:bg-emerald-600 hover:border-emerald-500 hover:text-white transition-all duration-300 text-xs sm:text-sm self-start sm:self-auto"
          >
            <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            Add Partner
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-3 sm:space-y-4">
          {trustedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 sm:p-4 rounded-xl hover:bg-gray-800/40 transition-all duration-300 hover:scale-[1.01]"
            >
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-600 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm sm:text-base">
                    {partner.logo}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-white text-sm sm:text-base truncate">
                    {partner.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {partner.industry}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2 flex-shrink-0 ml-4">
                <TrustGradeMeter
                  grade={partner.trustGrade}
                  percentage={partner.trustPercentage}
                  size="xs"
                />
                <Badge
                  variant={
                    partner.status === "Active" ? "default" : "secondary"
                  }
                  className={`text-xs whitespace-nowrap ${
                    partner.status === "Active"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {partner.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
        <Button
          variant="ghost"
          className="w-full mt-4 sm:mt-6 text-gray-400 hover:text-white hover:bg-gray-800/40 transition-all duration-300 text-sm"
        >
          View All Partners
          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

// Invite Partner Component
const InvitePartner: React.FC<InvitePartnerProps> = ({ onInvitePartner }) => {
  return (
    <Card className="bg-gradient-to-br from-emerald-600 to-green-700 border-emerald-500/50 backdrop-blur-xl shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 hover:scale-[1.02]">
      <CardContent className="p-6 sm:p-8">
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
            <UserPlus className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          </div>
          <h3 className="font-bold text-white mb-2 sm:mb-3 text-lg sm:text-xl">
            Invite Partners
          </h3>
          <p className="text-emerald-100 mb-4 sm:mb-6 text-sm sm:text-base">
            Earn $50 for each verified business you refer
          </p>
          <Button
            onClick={onInvitePartner}
            className="w-full bg-white text-emerald-700 hover:bg-emerald-50 font-semibold py-2 sm:py-3 text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Gift className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            Invite Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Quick Actions Component
const QuickActions: React.FC<QuickActionsProps> = ({ onFileUpload }) => {
  return (
    <Card className="bg-gray-900/70 border-gray-700/50 backdrop-blur-xl shadow-2xl hover:shadow-teal-500/10 hover:border-gray-600/70 transition-all duration-500">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-white text-lg sm:text-xl lg:text-2xl">
          Quick Actions
        </CardTitle>
        <CardDescription className="text-gray-400 text-sm sm:text-base">
          Common tasks to manage your business profile
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Button
            variant="outline"
            className="h-20 sm:h-24 flex-col border-gray-600 text-gray-800 hover:bg-emerald-600 hover:border-emerald-500 hover:text-white transition-all duration-300 space-y-2 sm:space-y-3 hover:scale-105 shadow-lg hover:shadow-emerald-500/20"
            onClick={onFileUpload}
          >
            <FileText className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
            <span className="font-medium text-xs sm:text-sm">
              Upload Documents
            </span>
          </Button>
          <Button
            variant="outline"
            className="h-20 sm:h-24 flex-col border-gray-600 text-gray-800 hover:bg-green-600 hover:border-green-500 hover:text-white transition-all duration-300 space-y-2 sm:space-y-3 hover:scale-105 shadow-lg hover:shadow-green-500/20"
          >
            <Users className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
            <span className="font-medium text-xs sm:text-sm">
              Find Partners
            </span>
          </Button>
          <Button
            variant="outline"
            className="h-20 sm:h-24 flex-col border-gray-600 text-gray-800 hover:bg-teal-600 hover:border-teal-500 hover:text-white transition-all duration-300 space-y-2 sm:space-y-3 hover:scale-105 shadow-lg hover:shadow-teal-500/20 sm:col-span-2 lg:col-span-1"
          >
            <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
            <span className="font-medium text-xs sm:text-sm">
              View Analytics
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Utility function to create business slug
const createBusinessSlug = (businessName: string): string => {
  return businessName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

// Main Dashboard Component
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
    // Use proper slug-based routing for the current user's business
    const businessSlug = createBusinessSlug("Tomeku"); // Replace with actual user business name
    window.open(`/business/${businessSlug}`, "_blank");
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
    <div className="min-h-screen bg-gray-950 p-3 sm:p-4 lg:p-6 xl:p-8">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
        {/* Welcome Section with Trust Grade */}
        <WelcomeSection />

        {/* Stats Grid */}
        <StatsGrid />

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 sm:gap-8">
          <div className="xl:col-span-3 space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Trust Grade Breakdown */}
            <TrustGradeBreakdown
              onImproveCompliance={handleImproveCompliance}
              onImprovePerformance={handleImprovePerformance}
              onImproveReputation={handleImproveReputation}
            />

            {/* Document Management Section */}
            <DocumentManagement
              dragActive={dragActive}
              handleDrag={handleDrag}
              handleDrop={handleDrop}
              handleFileUpload={handleFileUpload}
              handleDeleteDocument={handleDeleteDocument}
              handleReplaceDocument={handleReplaceDocument}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6 sm:space-y-8">
            {/* Suggested Actions */}
            <BoostTrustScore />

            {/* Public Profile Preview */}
            <PublicTrustProfile onViewPublicProfile={handleViewPublicProfile} />

            {/* Trusted Partners */}
            <TrustedPartners onInvitePartner={handleInvitePartner} />
          </div>
        </div>

        {/* Invite Partner Card */}
        <InvitePartner onInvitePartner={handleInvitePartner} />

        {/* Quick Actions */}
        <QuickActions onFileUpload={handleFileUpload} />
      </div>
    </div>
  );
}
