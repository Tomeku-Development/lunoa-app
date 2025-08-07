"use client";

import {
  Shield,
  CheckCircle,
  ThumbsUp,
  FileText,
  MapPin,
  Building,
  Calendar,
  ExternalLink,
  Flag,
  Mail,
  Phone,
  Globe,
  Award,
  Users,
  TrendingUp,
  ArrowLeft,
  HelpCircle,
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TrustGradeMeter } from "@/components/trust-grade-meter";
import { LucideIcon } from "lucide-react";

interface TrustBreakdownItem {
  title: string;
  status: "strong" | "moderate" | "weak";
  icon: LucideIcon;
  description: string;
  details: string;
  color: string;
}

interface VerifiedDocument {
  type: string;
  status: string;
  date: string;
  category: string;
}

interface BusinessStats {
  yearsActive: number;
  documentsVerified: number;
  partnerReferences: number;
  lastUpdated: string;
}

interface ContactInfo {
  phone?: string;
  website?: string;
  email?: string;
}

interface PublicBusinessProfileProps {
  businessName?: string;
  trustGrade?: string;
  trustPercentage?: number;
  industry?: string;
  location?: string;
  verificationDate?: string;
  description?: string;
  trustBreakdown?: TrustBreakdownItem[];
  verifiedDocuments?: VerifiedDocument[];
  businessStats?: BusinessStats;
  contactInfo?: ContactInfo;
  onContactBusiness?: (businessName: string) => void;
  onReportIssue?: (businessName: string) => void;
  onViewFullDocuments?: () => void;
  onCallBusiness?: () => void;
  onVisitWebsite?: () => void;
  onBack?: () => void;
  showContactButtons?: boolean;
  showReportButton?: boolean;
  showBackButton?: boolean;
}

export function PublicBusinessProfile({
  businessName = "Akhtar Industries",
  trustGrade = "B+",
  trustPercentage = 78,
  industry = "Manufacturing & Textiles",
  location = "Lahore, Pakistan",
  verificationDate = "June 22, 2024",
  description = "Established textile manufacturer specializing in high-quality fabric production and export services across South Asia.",
  trustBreakdown,
  verifiedDocuments,
  businessStats,
  contactInfo,
  onContactBusiness,
  onReportIssue,
  onViewFullDocuments,
  onCallBusiness,
  onVisitWebsite,
  onBack,
  showContactButtons = true,
  showReportButton = true,
  showBackButton = true,
}: PublicBusinessProfileProps) {
  const getTrustGradeColor = (grade: string) => {
    if (grade.startsWith("A"))
      return "bg-green-500/20 text-green-400 border-green-500/30";
    if (grade.startsWith("B"))
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
  };

  const defaultTrustBreakdown: TrustBreakdownItem[] = [
    {
      title: "Compliance",
      status: "strong",
      icon: Shield,
      description: "Valid Business License",
      details: "All legal documents verified and up-to-date",
      color: "green",
    },
    {
      title: "Performance",
      status: "moderate",
      icon: TrendingUp,
      description: "Limited recent financials",
      details: "Some financial documents pending verification",
      color: "yellow",
    },
    {
      title: "Reputation",
      status: "strong",
      icon: ThumbsUp,
      description: "3 positive partner references",
      details: "Strong testimonials from verified partners",
      color: "green",
    },
  ];

  const defaultVerifiedDocuments: VerifiedDocument[] = [
    {
      type: "Business License",
      status: "Verified",
      date: "Dec 15, 2023",
      category: "Legal",
    },
    {
      type: "Tax Return 2023",
      status: "Verified",
      date: "Jan 10, 2024",
      category: "Financial",
    },
    {
      type: "Client Reference - TechCorp",
      status: "Verified",
      date: "Nov 28, 2023",
      category: "Reference",
    },
  ];

  const defaultBusinessStats: BusinessStats = {
    yearsActive: 8,
    documentsVerified: 12,
    partnerReferences: 3,
    lastUpdated: "2 days ago",
  };

  const defaultContactInfo: ContactInfo = {
    phone: "+92 123 456 7890",
    website: "www.akhtarindustries.com",
    email: "contact@akhtarindustries.com",
  };

  // Use provided props or defaults
  const finalTrustBreakdown = trustBreakdown || defaultTrustBreakdown;
  const finalVerifiedDocuments = verifiedDocuments || defaultVerifiedDocuments;
  const finalBusinessStats = { ...defaultBusinessStats, ...businessStats };
  const finalContactInfo = { ...defaultContactInfo, ...contactInfo };

  const handleContactBusiness = () => {
    if (onContactBusiness) {
      onContactBusiness(businessName);
    } else {
      console.log("Contact business clicked");
      alert("Contact form would open here");
    }
  };

  const handleReportIssue = () => {
    if (onReportIssue) {
      onReportIssue(businessName);
    } else {
      console.log("Report issue clicked");
      alert("Report issue form would open here");
    }
  };

  const handleCallBusiness = () => {
    if (onCallBusiness) {
      onCallBusiness();
    } else if (finalContactInfo.phone) {
      window.open(`tel:${finalContactInfo.phone}`);
    }
  };

  const handleVisitWebsite = () => {
    if (onVisitWebsite) {
      onVisitWebsite();
    } else if (finalContactInfo.website) {
      const url = finalContactInfo.website.startsWith("http")
        ? finalContactInfo.website
        : `https://${finalContactInfo.website}`;
      window.open(url, "_blank");
    }
  };

  const handleViewFullDocuments = () => {
    if (onViewFullDocuments) {
      onViewFullDocuments();
    } else {
      console.log("View full documents clicked");
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.history.back();
    }
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-950 py-4 sm:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Back Button */}
          {showBackButton && (
            <div className="mb-4 sm:mb-6">
              <Button
                variant="ghost"
                onClick={handleBack}
                className="text-gray-400 hover:text-white hover:bg-gray-800/40 p-2"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span className="text-sm sm:text-base">Back</span>
              </Button>
            </div>
          )}

          {/* Header Section */}
          <Card className="mb-6 sm:mb-8 bg-gray-900/60 border-gray-700/50 shadow-lg backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              {/* Main Header Content */}
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-8 lg:space-y-0 lg:space-x-8">
                  {/* Left Section - Business Identity */}
                  <div className="flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-6 flex-1">
                    {/* Business Logo */}
                    <div className="relative">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl flex items-center justify-center shadow-xl border-2 border-emerald-500/20">
                        <span className="text-xl sm:text-3xl font-bold text-white">
                          {businessName
                            .split(" ")
                            .map((word) => word[0])
                            .join("")
                            .slice(0, 2)}
                        </span>
                      </div>
                      {/* Verified Badge on Logo */}
                      <div className="absolute -top-2 -right-2 bg-emerald-500 rounded-full p-2 border-2 border-gray-950 shadow-lg">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    </div>

                    {/* Business Information */}
                    <div className="space-y-4 flex-1 min-w-0">
                      {/* Business Name and Trust Grade Badge */}
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-3 sm:space-y-0">
                          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight break-words">
                            {businessName}
                          </h1>
                          <div className="flex-shrink-0">
                            <Badge
                              className={`${getTrustGradeColor(
                                trustGrade
                              )} px-4 py-2 text-base font-bold border-2`}
                            >
                              <Award className="h-5 w-5 mr-2" />
                              Grade: {trustGrade}
                            </Badge>
                          </div>
                        </div>

                        {/* Business Description */}
                        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl">
                          {description}
                        </p>
                      </div>

                      {/* Business Metadata Tags */}
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge
                          variant="outline"
                          className="border-gray-500 text-gray-200 bg-gray-800/40 px-3 py-2 text-sm"
                        >
                          <Building className="h-4 w-4 mr-2" />
                          <span className="hidden sm:inline">{industry}</span>
                          <span className="sm:hidden">Manufacturing</span>
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-gray-500 text-gray-200 bg-gray-800/40 px-3 py-2 text-sm"
                        >
                          <MapPin className="h-4 w-4 mr-2" />
                          {location}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-emerald-500/50 text-emerald-300 bg-emerald-500/10 px-3 py-2 text-sm"
                        >
                          <Shield className="h-4 w-4 mr-2" />
                          Lunoa Verified
                        </Badge>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                        <div className="bg-gray-800/40 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-white">
                            {finalBusinessStats.yearsActive}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            Years Active
                          </div>
                        </div>
                        <div className="bg-gray-800/40 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-white">
                            {finalBusinessStats.documentsVerified}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            Documents
                          </div>
                        </div>
                        <div className="bg-gray-800/40 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-white">
                            {finalBusinessStats.partnerReferences}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            References
                          </div>
                        </div>
                        <div className="bg-gray-800/40 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-emerald-400">
                            {trustPercentage}%
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            Trust Score
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Trust Grade Meter */}
                  <div className="flex-shrink-0">
                    <div className="flex justify-center lg:justify-end">
                      <TrustGradeMeter
                        grade={trustGrade}
                        percentage={trustPercentage}
                        size="lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Verified Summary */}
          <Card className="mb-6 sm:mb-8 bg-gradient-to-br from-emerald-600/20 to-green-700/20 border-emerald-500/30 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              {/* Header Section */}
              <div className="bg-gradient-to-r from-emerald-600/30 to-green-700/30 p-4 sm:p-6 border-b border-emerald-500/20">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-emerald-500/30 rounded-xl border border-emerald-400/30">
                      <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-200" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-xl sm:text-2xl">
                        Lunoa-Verified Business
                      </h3>
                      <p className="text-emerald-200 text-sm sm:text-base">
                        Comprehensive verification completed
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-auto">
                    <Badge className="bg-emerald-500/20 text-emerald-200 border-emerald-400/30 px-4 py-2 text-sm font-semibold">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Verified
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6 space-y-6">
                {/* Description */}
                <div className="space-y-3">
                  <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
                    This business has been thoroughly verified by Lunoa through
                    our comprehensive multi-stage validation process. Our
                    verification ensures authenticity, credibility, and
                    regulatory compliance.
                  </p>
                </div>

                {/* Verification Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <Shield className="h-5 w-5 text-emerald-300" />
                      <span className="font-semibold text-emerald-200 text-sm sm:text-base">
                        Legal Compliance
                      </span>
                    </div>
                    <p className="text-emerald-100/80 text-sm">
                      Business licenses, registrations, and regulatory documents
                      verified
                    </p>
                  </div>

                  <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <TrendingUp className="h-5 w-5 text-emerald-300" />
                      <span className="font-semibold text-emerald-200 text-sm sm:text-base">
                        Financial Standing
                      </span>
                    </div>
                    <p className="text-emerald-100/80 text-sm">
                      Financial records, tax compliance, and payment history
                      reviewed
                    </p>
                  </div>

                  <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20 sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Users className="h-5 w-5 text-emerald-300" />
                      <span className="font-semibold text-emerald-200 text-sm sm:text-base">
                        Business Reputation
                      </span>
                    </div>
                    <p className="text-emerald-100/80 text-sm">
                      Client references, testimonials, and industry standing
                      evaluated
                    </p>
                  </div>
                </div>

                {/* Verification Metadata */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 pt-4 border-t border-emerald-500/20">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                    <div className="flex items-center space-x-2 text-sm text-emerald-200/80">
                      <Calendar className="h-4 w-4" />
                      <span>Verified: {verificationDate}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-emerald-200/80">
                      <FileText className="h-4 w-4" />
                      <span>
                        {finalBusinessStats.documentsVerified} documents
                        verified
                      </span>
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-sm text-emerald-300 hover:text-emerald-200 self-start sm:self-auto transition-colors duration-200"
                      >
                        <HelpCircle className="h-4 w-4 mr-1" />
                        Learn about Lunoa verification
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-gray-900 border-gray-700 max-w-md sm:max-w-lg">
                      <DialogHeader>
                        <DialogTitle className="text-white flex items-center space-x-2">
                          <Shield className="h-5 w-5 text-emerald-400" />
                          <span>Lunoa Verification Process</span>
                        </DialogTitle>
                        <DialogDescription className="text-gray-300">
                          Our comprehensive verification system evaluates
                          businesses across multiple dimensions
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6 mt-4">
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <div className="p-2 bg-emerald-500/20 rounded-lg flex-shrink-0">
                              <Shield className="h-5 w-5 text-emerald-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-1">
                                Legal Compliance Verification
                              </h4>
                              <p className="text-sm text-gray-300 leading-relaxed">
                                We verify business licenses, registrations,
                                regulatory compliance, and ensure all legal
                                requirements are met.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="p-2 bg-blue-500/20 rounded-lg flex-shrink-0">
                              <TrendingUp className="h-5 w-5 text-blue-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-1">
                                Financial Performance Review
                              </h4>
                              <p className="text-sm text-gray-300 leading-relaxed">
                                Financial statements, tax records, payment
                                history, and business stability indicators are
                                thoroughly reviewed.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="p-2 bg-purple-500/20 rounded-lg flex-shrink-0">
                              <Users className="h-5 w-5 text-purple-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-1">
                                Reputation Assessment
                              </h4>
                              <p className="text-sm text-gray-300 leading-relaxed">
                                Client references, testimonials, industry
                                certifications, and public feedback are
                                evaluated for credibility.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-800/40 rounded-lg p-4 border-l-4 border-emerald-500">
                          <p className="text-sm text-gray-300">
                            <strong className="text-emerald-400">
                              Trust Guarantee:
                            </strong>{" "}
                            Businesses displaying the Lunoa Verified badge have
                            completed our rigorous verification process and meet
                            our standards for authenticity and reliability.
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
            <div className="xl:col-span-2 space-y-6 sm:space-y-8">
              {/* Trust Breakdown Panel */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Trust Breakdown
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6">
                  {finalTrustBreakdown.map((item, index) => {
                    const IconComponent = item.icon;
                    const isStrong = item.status === "strong";
                    const isModerate = item.status === "moderate";

                    return (
                      <Card
                        key={index}
                        className={`border-2 transition-all hover:shadow-lg bg-gray-900/60 backdrop-blur-sm ${
                          isStrong
                            ? "border-emerald-500/30 hover:border-emerald-500/50"
                            : isModerate
                            ? "border-yellow-500/30 hover:border-yellow-500/50"
                            : "border-red-500/30 hover:border-red-500/50"
                        }`}
                      >
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                            <div
                              className={`p-3 rounded-lg flex-shrink-0 ${
                                isStrong
                                  ? "bg-emerald-500/20"
                                  : isModerate
                                  ? "bg-yellow-500/20"
                                  : "bg-red-500/20"
                              }`}
                            >
                              <IconComponent
                                className={`h-6 w-6 ${
                                  isStrong
                                    ? "text-emerald-400"
                                    : isModerate
                                    ? "text-yellow-400"
                                    : "text-red-400"
                                }`}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-white text-base sm:text-lg mb-3">
                                {item.title}
                              </h3>
                              <Badge
                                className={`text-xs mb-3 inline-block ${
                                  isStrong
                                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                                    : isModerate
                                    ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                                    : "bg-red-500/20 text-red-300 border-red-500/30"
                                }`}
                              >
                                {item.status === "strong"
                                  ? "Strong"
                                  : item.status === "moderate"
                                  ? "Moderate"
                                  : "Needs Attention"}
                              </Badge>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <h4 className="text-sm font-medium text-white mb-1">
                                Status
                              </h4>
                              <p className="text-sm text-gray-300 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-white mb-1">
                                Details
                              </h4>
                              <p className="text-sm text-gray-400 leading-relaxed">
                                {item.details}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Document Snapshot */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Verified Documents
                </h2>
                <Card className="bg-gray-900/60 border-gray-700/50 backdrop-blur-sm">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-white flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                      <span className="text-lg sm:text-xl">
                        Document Verification Status
                      </span>
                      <Badge
                        variant="outline"
                        className="border-gray-600 text-gray-300 self-start sm:self-auto"
                      >
                        {finalVerifiedDocuments.length} of{" "}
                        {finalBusinessStats.documentsVerified} shown
                      </Badge>
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-gray-400">
                      Key documents verified by Lunoa&apos;s verification
                      process
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="space-y-3 sm:space-y-4">
                      {finalVerifiedDocuments.map((doc, index) => (
                        <div
                          key={index}
                          className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 p-3 sm:p-4 bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-all duration-300"
                        >
                          <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                            <div className="p-2 bg-emerald-500/20 rounded-lg flex-shrink-0">
                              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="font-medium text-white text-sm sm:text-base truncate">
                                {doc.type}
                              </p>
                              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-400">
                                <Badge
                                  variant="outline"
                                  className="text-xs border-gray-600 text-gray-300"
                                >
                                  {doc.category}
                                </Badge>
                                <span className="hidden sm:inline">•</span>
                                <span>{doc.date}</span>
                              </div>
                            </div>
                          </div>
                          <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 self-start sm:self-auto">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {doc.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-700">
                      <Button
                        variant="outline"
                        className="w-full border-gray-600 text-gray-800 hover:bg-gray-800/40 text-sm sm:text-base"
                        onClick={handleViewFullDocuments}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        See Full Document List
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4 sm:space-y-6">
              {/* Business Stats */}
              <Card className="bg-gray-900/60 border-gray-700/50 backdrop-blur-sm">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-white text-lg sm:text-xl">
                    Business Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base text-gray-400">
                        Years Active
                      </span>
                      <span className="font-semibold text-white text-sm sm:text-base">
                        {finalBusinessStats.yearsActive} years
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base text-gray-400">
                        Documents Verified
                      </span>
                      <span className="font-semibold text-white text-sm sm:text-base">
                        {finalBusinessStats.documentsVerified}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base text-gray-400">
                        Partner References
                      </span>
                      <span className="font-semibold text-white text-sm sm:text-base">
                        {finalBusinessStats.partnerReferences}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base text-gray-400">
                        Last Updated
                      </span>
                      <span className="font-semibold text-white text-sm sm:text-base">
                        {finalBusinessStats.lastUpdated}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              {showContactButtons && (
                <Card className="bg-gray-900/60 border-gray-700/50 backdrop-blur-sm">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-white text-lg sm:text-xl">
                      Get in Touch
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-gray-400">
                      Connect with this verified business
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white text-sm sm:text-base"
                      onClick={handleContactBusiness}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Contact This Business
                    </Button>

                    <div className="grid grid-cols-2 gap-2">
                      {finalContactInfo.phone && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-800 text-xs sm:text-sm hover:bg-gray-800/40"
                          onClick={handleCallBusiness}
                        >
                          <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          <span className="hidden sm:inline">Call</span>
                          <span className="sm:hidden">📞</span>
                        </Button>
                      )}
                      {finalContactInfo.website && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-800 text-xs sm:text-sm hover:bg-gray-800/40"
                          onClick={handleVisitWebsite}
                        >
                          <Globe className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          <span className="hidden sm:inline">Website</span>
                          <span className="sm:hidden">🌐</span>
                        </Button>
                      )}
                    </div>

                    {showReportButton && (
                      <div className="pt-3 sm:pt-4 border-t border-gray-700">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full text-gray-500 hover:text-gray-300 text-xs sm:text-sm hover:bg-gray-800/40"
                          onClick={handleReportIssue}
                        >
                          <Flag className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                          Report an Issue
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Verification Badge */}
              <Card className="bg-gradient-to-br from-emerald-600/20 to-green-700/20 border-emerald-500/30 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500/20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                    <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-300" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-base sm:text-lg">
                    Lunoa Verified
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100 mb-3 sm:mb-4">
                    This business profile has been verified through our
                    comprehensive document validation process.
                  </p>
                  <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs sm:text-sm">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Trusted Partner
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}

export default PublicBusinessProfile;
