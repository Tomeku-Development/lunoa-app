import { businesses } from "@/mock/mock";

export interface BusinessProfile {
  id: number;
  name: string;
  industry: string;
  location: string;
  description: string;
  trustGrade: string;
  trustPercentage: number;
  verified: boolean;
  rating: number;
  reviewCount: number;
  employees: string;
  services: string[];
  logo: string;
}

export const businessService = {
  getBusinessById: (id: number): BusinessProfile | undefined => {
    return businesses.find((business) => business.id === id);
  },

  getAllBusinesses: (): BusinessProfile[] => {
    return businesses;
  },

  searchBusinesses: (
    query: string,
    industry?: string,
    location?: string
  ): BusinessProfile[] => {
    return businesses.filter((business) => {
      const matchesSearch =
        business.name.toLowerCase().includes(query.toLowerCase()) ||
        business.industry.toLowerCase().includes(query.toLowerCase()) ||
        business.description.toLowerCase().includes(query.toLowerCase());

      const matchesIndustry =
        !industry || industry === "all" || business.industry === industry;
      const matchesLocation =
        !location || location === "all" || business.location === location;

      return matchesSearch && matchesIndustry && matchesLocation;
    });
  },
};
