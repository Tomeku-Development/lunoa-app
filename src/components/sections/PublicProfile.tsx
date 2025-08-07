"use client";

import {
  Shield,
  CheckCircle,
  AlertTriangle,
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
  showContactButtons?: boolean;
  showReportButton?: boolean;
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
  showContactButtons = true,
  showReportButton = true,
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

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header Section */}
          <Card className="mb-8 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0">
                <div className="flex items-start space-x-6">
                  {/* Business Logo */}
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">
                      {businessName
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>

                  {/* Business Info */}
                  <div className="space-y-3">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {businessName}
                      </h1>
                      <p className="text-gray-600 dark:text-gray-300 max-w-md">
                        {description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge className={getTrustGradeColor(trustGrade)}>
                        <Award className="h-3 w-3 mr-1" />
                        Trust Grade: {trustGrade}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                      >
                        <Building className="h-3 w-3 mr-1" />
                        {industry}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                      >
                        <MapPin className="h-3 w-3 mr-1" />
                        {location}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Trust Grade Meter */}
                <div className="flex-shrink-0">
                  <TrustGradeMeter
                    grade={trustGrade}
                    percentage={trustPercentage}
                    size="md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Verified Summary */}
          <Card className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Lunoa-Verified Business
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    This business has been verified by Lunoa based on legal,
                    financial, and reputational documents. Our verification
                    process ensures authenticity and credibility.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Verified on: {verificationDate}</span>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                        >
                          What is Lunoa verification?
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                        <DialogHeader>
                          <DialogTitle className="text-gray-900 dark:text-white">
                            Lunoa Verification Process
                          </DialogTitle>
                          <DialogDescription className="text-gray-600 dark:text-gray-300">
                            Our comprehensive verification system evaluates
                            businesses across three key areas:
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <Shield className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white">
                                Legal Compliance
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Business licenses, registrations, and regulatory
                                compliance
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <TrendingUp className="h-5 w-5 text-blue-500 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white">
                                Financial Performance
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Financial statements, tax records, and payment
                                history
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <Users className="h-5 w-5 text-purple-500 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white">
                                Business Reputation
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Client references, testimonials, and industry
                                standing
                              </p>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Trust Breakdown Panel */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Trust Breakdown
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {finalTrustBreakdown.map((item, index) => {
                    const IconComponent = item.icon;
                    const isStrong = item.status === "strong";
                    const isModerate = item.status === "moderate";

                    return (
                      <Card
                        key={index}
                        className={`border-2 transition-all hover:shadow-lg ${
                          isStrong
                            ? "border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20"
                            : isModerate
                            ? "border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20"
                            : "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20"
                        }`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4 mb-4">
                            <div
                              className={`p-3 rounded-lg ${
                                isStrong
                                  ? "bg-green-500/20"
                                  : isModerate
                                  ? "bg-yellow-500/20"
                                  : "bg-red-500/20"
                              }`}
                            >
                              <IconComponent
                                className={`h-6 w-6 ${
                                  isStrong
                                    ? "text-green-600 dark:text-green-400"
                                    : isModerate
                                    ? "text-yellow-600 dark:text-yellow-400"
                                    : "text-red-600 dark:text-red-400"
                                }`}
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 dark:text-white">
                                {item.title}
                              </h3>
                              <Badge
                                className={`mt-1 ${
                                  isStrong
                                    ? "bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30"
                                    : isModerate
                                    ? "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/30"
                                    : "bg-red-500/20 text-red-700 dark:text-red-400 border-red-500/30"
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
                          <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                            {item.description}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {item.details}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Document Snapshot */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Verified Documents
                </h2>
                <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white flex items-center justify-between">
                      <span>Document Verification Status</span>
                      <Badge
                        variant="outline"
                        className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                      >
                        {finalVerifiedDocuments.length} of{" "}
                        {finalBusinessStats.documentsVerified} shown
                      </Badge>
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      Key documents verified by Lunoa&apos;s verification
                      process
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {finalVerifiedDocuments.map((doc, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="p-2 bg-green-500/20 rounded-lg">
                              <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">
                                {doc.type}
                              </p>
                              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                                <Badge
                                  variant="outline"
                                  className="text-xs border-gray-300 dark:border-gray-600"
                                >
                                  {doc.category}
                                </Badge>
                                <span>•</span>
                                <span>{doc.date}</span>
                              </div>
                            </div>
                          </div>
                          <Badge className="bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {doc.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Button
                        variant="outline"
                        className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
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
            <div className="space-y-6">
              {/* Business Stats */}
              <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">
                    Business Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Years Active
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {finalBusinessStats.yearsActive} years
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Documents Verified
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {finalBusinessStats.documentsVerified}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Partner References
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {finalBusinessStats.partnerReferences}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Last Updated
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {finalBusinessStats.lastUpdated}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              {showContactButtons && (
                <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">
                      Get in Touch
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      Connect with this verified business
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
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
                          className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                          onClick={handleCallBusiness}
                        >
                          <Phone className="h-4 w-4 mr-1" />
                          Call
                        </Button>
                      )}
                      {finalContactInfo.website && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                          onClick={handleVisitWebsite}
                        >
                          <Globe className="h-4 w-4 mr-1" />
                          Website
                        </Button>
                      )}
                    </div>

                    {showReportButton && (
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                          onClick={handleReportIssue}
                        >
                          <Flag className="h-4 w-4 mr-2" />
                          Report an Issue
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Verification Badge */}
              <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Lunoa Verified
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    This business profile has been verified through our
                    comprehensive document validation process.
                  </p>
                  <Badge className="bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30">
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
