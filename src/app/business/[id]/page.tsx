"use client";

import { useParams } from "next/navigation";
import { Shield, TrendingUp, ThumbsUp } from "lucide-react";
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
            The business you&apos;re looking for doesn&apos;t exist or the link
            may be incorrect.
          </p>
        </div>
      </div>
    );
  }

  // Transform business data to match PublicProfile props
  const trustBreakdown = [
    {
      title: "Compliance",
      status:
        (business.trustGrade === "A+" || business.trustGrade === "A")
          ? ("strong" as const)
          : ("moderate" as const),
      icon: Shield,
      description:
        (business.trustGrade === "A+" || business.trustGrade === "A")
          ? "Fully verified business"
          : "Verification in progress",
      details:
        (business.trustGrade === "A+" || business.trustGrade === "A")
          ? "All legal documents verified and up-to-date"
          : "Some documents pending verification",
      color: (business.trustGrade === "A+" || business.trustGrade === "A") ? "green" : "yellow",
    },
    {
      title: "Performance",
      status: "moderate" as const,
      icon: TrendingUp,
      description: "Financial records available",
      details: "Recent financial performance data verified",
      color: "yellow",
    },
    {
      title: "Reputation",
      status:
        (business.rating || 0) >= 4 ? ("strong" as const) : ("moderate" as const),
      icon: ThumbsUp,
      description: `${business.reviewCount || 0} customer reviews`,
      details: `Average rating of ${business.rating || 0} stars from verified customers`,
      color: (business.rating || 0) >= 4 ? "green" : "yellow",
    },
  ];

  return (
    <PublicBusinessProfile
      businessName={business.name}
      trustGrade={business.trustGrade || "B"}
      trustPercentage={business.trustPercentage || 75}
      industry={business.industry || "General Business"}
      location={business.location || "Location Not Available"}
      description={business.description || "No description available"}
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
