// SECTION 1: Imports
// =================================================================================================
// Import React hooks, UI components, icons, and mock data.

import { useState } from "react"; // React hook for state management.
import { useRouter } from "next/navigation"; // Next.js router for navigation
import {
  Search,
  Filter,
  MapPin,
  Star,
  Shield,
  Users,
  Building,
  Eye,
  UserPlus,
} from "lucide-react"; // Icon library for UI elements.

// Pre-styled UI components from a local library (likely shadcn/ui).
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Custom component to display a trust grade.
import { TrustGradeMeter } from "@/components/trust-grade-meter";

// Mock data for demonstration purposes. In a real application, this would come from an API.
import { businesses, industries, locations } from "@/mock/mock";
import { createBusinessSlug } from "@/lib/utils";

// SECTION 2: Component Definition
// =================================================================================================

export function Discover() {
  const router = useRouter(); // Initialize Next.js router

  // SECTION 2.1: State Management
  // -----------------------------------------------------------------------------------------------
  // State variables to store user input for searching and filtering.

  const [searchQuery, setSearchQuery] = useState(""); // Holds the user's search text.
  const [selectedIndustry, setSelectedIndustry] = useState("all"); // Holds the selected industry filter.
  const [selectedLocation, setSelectedLocation] = useState("all"); // Holds the selected location filter.

  // SECTION 2.2: Data Filtering Logic
  // -----------------------------------------------------------------------------------------------
  // Filters the 'businesses' array based on the current state of search and filter inputs.

  const filteredBusinesses = businesses.filter((business) => {
    // Condition 1: Check if the search query matches the business name, industry, or description.
    const matchesSearch =
      business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Condition 2: Check if the industry filter matches or is set to "all".
    const matchesIndustry =
      selectedIndustry === "all" || business.industry === selectedIndustry;

    // Condition 3: Check if the location filter matches or is set to "all".
    const matchesLocation =
      selectedLocation === "all" || business.location === selectedLocation;

    // A business is included in the result only if all conditions are true.
    return matchesSearch && matchesIndustry && matchesLocation;
  });

  // SECTION 2.3: Event Handlers
  // -----------------------------------------------------------------------------------------------
  // Functions to handle user interactions with buttons on the business cards.

  /**
   * Handles the "View Profile" button click.
   * @param {string} businessName - The name of the business to view.
   */
  const handleViewProfile = (businessName: string) => {
    const slug = createBusinessSlug(businessName);
    router.push(`/business/${slug}`);
  };

  /**
   * Handles the "Help Verify" button click.
   * Redirects the user to the signup page.
   * @param {number} businessId - The ID of the business to verify.
   */
  const handleVerifyBusiness = (businessId: number) => {
    // In a real app, you might pass the businessId as a query parameter.
    window.location.href = "/signup";
  };

  /**
   * Handles the "Connect" button click.
   * @param {number} businessId - The ID of the business to connect with.
   */
  const handleConnectBusiness = (businessId: number) => {
    console.log("Connect with business:", businessId);
    // TODO: Implement connection logic, e.g., sending a connection request API call.
  };

  // SECTION 3: JSX Rendering
  // =================================================================================================
  // Renders the component's UI.

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Discover Businesses
          </h1>
          <p className="text-gray-400">
            Find and connect with verified businesses in your industry
          </p>
        </div>

        {/* Search and Filters Card */}
        <Card className="bg-gray-900 border-gray-700 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search businesses, industries, or services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              {/* Industry Filter Dropdown */}
              <Select
                value={selectedIndustry}
                onValueChange={setSelectedIndustry}
              >
                <SelectTrigger className="w-full lg:w-48 bg-gray-800 border-gray-600 text-white">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  <SelectItem value="all">All Industries</SelectItem>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Location Filter Dropdown */}
              <Select
                value={selectedLocation}
                onValueChange={setSelectedLocation}
              >
                <SelectTrigger className="w-full lg:w-48 bg-gray-800 border-gray-600 text-white">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* More Filters Button (Placeholder) */}
              <Button
                variant="outline"
                className="border-gray-600 text-gray-800 hover:bg-gray-800"
              >
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Count Display */}
        <div className="mb-6">
          <p className="text-gray-400">
            Showing {filteredBusinesses.length} of {businesses.length}{" "}
            businesses
          </p>
        </div>

        {/* Business Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredBusinesses.map((business) => (
            <Card
              key={business.id}
              className="bg-gray-900 border-gray-700 hover:bg-gray-800 transition-colors"
            >
              <CardContent className="p-6">
                {/* Card Header: Logo, Name, and Details */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">
                        {business.logo}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {business.name}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Building className="h-3 w-3" />
                        <span>{business.industry}</span>
                        <span>•</span>
                        <MapPin className="h-3 w-3" />
                        <span>{business.location}</span>
                      </div>
                    </div>
                  </div>
                  {/* Verified Badge (Conditional) */}
                  {business.verified && (
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>

                {/* Business Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {business.description}
                </p>

                {/* Service Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {business.services.slice(0, 3).map((service, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gray-800 text-gray-400 text-xs"
                    >
                      {service}
                    </Badge>
                  ))}
                </div>

                {/* Metrics: Trust Grade, Rating, and Employees */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <TrustGradeMeter
                      grade={business.trustGrade}
                      percentage={business.trustPercentage}
                      size="sm"
                    />
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">
                        {business.rating}
                      </span>
                      <span className="text-gray-400 text-sm">
                        ({business.reviewCount})
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400 text-sm">
                    <Users className="h-3 w-3" />
                    <span>{business.employees}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-gray-600 text-gray-800 hover:bg-gray-700"
                    onClick={() => handleViewProfile(business.name)}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                  {/* Conditional Button: "Connect" for verified, "Help Verify" for unverified */}
                  {business.verified ? (
                    <Button
                      size="sm"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => handleConnectBusiness(business.id)}
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white"
                      onClick={() => handleVerifyBusiness(business.id)}
                    >
                      <UserPlus className="h-4 w-4 mr-2" />
                      Help Verify
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button (Placeholder) */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="border-gray-600 text-gray-800 hover:bg-gray-800"
          >
            Load More Businesses
          </Button>
        </div>
      </div>
    </div>
  );
}
