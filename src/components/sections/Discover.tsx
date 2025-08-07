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
  ChevronDown,
  ChevronUp,
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

  // Additional filters state
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [selectedCompanySize, setSelectedCompanySize] = useState("all");
  const [selectedTrustGrade, setSelectedTrustGrade] = useState("all");
  const [minRating, setMinRating] = useState("0");
  const [onlyVerified, setOnlyVerified] = useState(false);

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

    // Additional filter conditions
    const employeeCount =
      parseInt(business.employees.toString().replace(/[^0-9]/g, ""), 10) || 0;
    const matchesCompanySize =
      selectedCompanySize === "all" ||
      (selectedCompanySize === "small" && employeeCount <= 50) ||
      (selectedCompanySize === "medium" &&
        employeeCount > 50 &&
        employeeCount <= 500) ||
      (selectedCompanySize === "large" && employeeCount > 500);

    const matchesTrustGrade =
      selectedTrustGrade === "all" ||
      business.trustGrade === selectedTrustGrade;

    const matchesMinRating = business.rating >= parseFloat(minRating);

    const matchesVerification = !onlyVerified || business.verified;

    // A business is included in the result only if all conditions are true.
    return (
      matchesSearch &&
      matchesIndustry &&
      matchesLocation &&
      matchesCompanySize &&
      matchesTrustGrade &&
      matchesMinRating &&
      matchesVerification
    );
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
                <SelectContent className="bg-gray-800 border-gray-600 text-white">
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
                <SelectContent className="bg-gray-800 border-gray-600 text-white">
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* More Filters Button */}
              <Button
                variant="outline"
                className="border-gray-600 hover:bg-gray-800"
                onClick={() => setShowMoreFilters(!showMoreFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                More Filters
                {showMoreFilters ? (
                  <ChevronUp className="h-4 w-4 ml-2" />
                ) : (
                  <ChevronDown className="h-4 w-4 ml-2" />
                )}
              </Button>
            </div>

            {/* Additional Filters Section */}
            {showMoreFilters && (
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Company Size Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">
                      Company Size
                    </label>
                    <Select
                      value={selectedCompanySize}
                      onValueChange={setSelectedCompanySize}
                    >
                      <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                        <SelectValue placeholder="All Sizes" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600 text-white">
                        <SelectItem value="all">All Sizes</SelectItem>
                        <SelectItem value="small">
                          Small (1-50 employees)
                        </SelectItem>
                        <SelectItem value="medium">
                          Medium (51-500 employees)
                        </SelectItem>
                        <SelectItem value="large">
                          Large (500+ employees)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Trust Grade Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">
                      Trust Grade
                    </label>
                    <Select
                      value={selectedTrustGrade}
                      onValueChange={setSelectedTrustGrade}
                    >
                      <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                        <SelectValue placeholder="All Grades" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600 text-white">
                        <SelectItem value="all">All Grades</SelectItem>
                        <SelectItem value="A">Grade A</SelectItem>
                        <SelectItem value="B">Grade B</SelectItem>
                        <SelectItem value="C">Grade C</SelectItem>
                        <SelectItem value="D">Grade D</SelectItem>
                        <SelectItem value="F">Grade F</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Minimum Rating Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">
                      Minimum Rating
                    </label>
                    <Select value={minRating} onValueChange={setMinRating}>
                      <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                        <SelectValue placeholder="Any Rating" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600 text-white">
                        <SelectItem value="0">Any Rating</SelectItem>
                        <SelectItem value="1">1+ Stars</SelectItem>
                        <SelectItem value="2">2+ Stars</SelectItem>
                        <SelectItem value="3">3+ Stars</SelectItem>
                        <SelectItem value="4">4+ Stars</SelectItem>
                        <SelectItem value="4.5">4.5+ Stars</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Verification Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">
                      Verification Status
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="verified-only"
                        checked={onlyVerified}
                        onChange={(e) => setOnlyVerified(e.target.checked)}
                        className="w-4 h-4 text-green-600 bg-gray-800 border-gray-600 rounded focus:ring-green-500"
                      />
                      <label
                        htmlFor="verified-only"
                        className="text-sm text-gray-400"
                      >
                        Verified businesses only
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
                    className="flex-1 border-gray-600 hover:bg-gray-700"
                    onClick={() => handleViewProfile(business.name)}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
