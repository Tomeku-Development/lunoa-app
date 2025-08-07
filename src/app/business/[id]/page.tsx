"use client";

import { useParams } from "next/navigation";
import { PublicBusinessProfile } from "@/components/sections/PublicProfile";
import { businesses } from "@/mock/mock";
import { findBusinessBySlug } from "@/lib/utils";

export default function BusinessProfilePage() {
  const params = useParams();
  const slug = params.id as string;

  // Find the business by slug
  const business = findBusinessBySlug(businesses, slug);

  if (!business) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Business Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            The business you're looking for doesn't exist or the link may be
            incorrect.
          </p>
        </div>
      </div>
    );
  }

  // Transform business data to match PublicProfile props
  const trustBreakdown = [
    {
      title: "Compliance",
      status: business.verified ? ("strong" as const) : ("moderate" as const),
      icon: require("lucide-react").Shield,
      description: business.verified
        ? "Fully verified business"
        : "Verification in progress",
      details: business.verified
        ? "All legal documents verified and up-to-date"
        : "Some documents pending verification",
      color: business.verified ? "green" : "yellow",
    },
    {
      title: "Performance",
      status: "moderate" as const,
      icon: require("lucide-react").TrendingUp,
      description: "Financial records available",
      details: "Recent financial performance data verified",
      color: "yellow",
    },
    {
      title: "Reputation",
      status:
        business.rating >= 4 ? ("strong" as const) : ("moderate" as const),
      icon: require("lucide-react").ThumbsUp,
      description: `${business.reviewCount} customer reviews`,
      details: `Average rating of ${business.rating} stars from verified customers`,
      color: business.rating >= 4 ? "green" : "yellow",
    },
  ];

  return (
    <PublicBusinessProfile
      businessName={business.name}
      trustGrade={business.trustGrade}
      trustPercentage={business.trustPercentage}
      industry={business.industry}
      location={business.location}
      description={business.description}
      trustBreakdown={trustBreakdown}
      onContactBusiness={(businessName) => {
        console.log(`Contacting ${businessName}`);
        // Implement contact logic - could open modal or redirect to contact form
      }}
      onReportIssue={(businessName) => {
        console.log(`Reporting issue for ${businessName}`);
        // Implement report logic - could open modal for reporting
      }}
      onViewFullDocuments={() => {
        console.log("Viewing full documents");
        // Implement document viewing - could require authentication
      }}
      onCallBusiness={() => {
        console.log("Calling business");
        // Implement call functionality - could use tel: link or VoIP integration
        if (business.phone) {
          window.location.href = `tel:${business.phone}`;
        }
      }}
      onVisitWebsite={() => {
        console.log("Visiting website");
        // Implement website visit - open business website
        if (business.website) {
          window.open(business.website, "_blank");
        }
      }}
    />
  );
}
