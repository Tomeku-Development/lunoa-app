"use client";

import { useState } from "react";
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
} from "lucide-react";

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
import { TrustGradeMeter } from "@/components/trust-grade-meter";
import { businesses, industries, locations } from "@/mock/mock";

export function Discover() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const filteredBusinesses = businesses.filter((business) => {
    const matchesSearch =
      business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesIndustry =
      selectedIndustry === "all" || business.industry === selectedIndustry;
    const matchesLocation =
      selectedLocation === "all" || business.location === selectedLocation;

    return matchesSearch && matchesIndustry && matchesLocation;
  });

  const handleViewProfile = (businessId: number) => {
    console.log("View profile for business:", businessId);
    // Navigate to business profile page
  };

  const handleVerifyBusiness = (businessId: number) => {
    // Redirect to signup page for business verification
    window.location.href = "/signup";
  };

  const handleConnectBusiness = (businessId: number) => {
    console.log("Connect with business:", businessId);
    // Handle connection request
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Discover Businesses
          </h1>
          <p className="text-gray-400">
            Find and connect with verified businesses in your industry
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="bg-gray-900 border-gray-700 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search businesses, industries, or services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
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

        {/* Results */}
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
                  {business.verified && (
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {business.description}
                </p>

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

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-gray-600 text-gray-800 hover:bg-gray-700"
                    onClick={() => handleViewProfile(business.id)}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
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

        {/* Load More */}
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
