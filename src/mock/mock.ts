import { LucideIcon } from "lucide-react";
import {
  TrendingUp,
  Users,
  FileText,
  Shield,
  Star,
  CheckCircle2,
} from "lucide-react";

export interface DashboardStat {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

export interface ActivityItem {
  type: string;
  title: string;
  description: string;
  time: string;
  icon: LucideIcon;
  color: string;
}

export interface TrustedPartner {
  name: string;
  industry: string;
  trustGrade: string;
  trustPercentage: number;
  logo: string;
  status: string;
}

export interface Document {
  name: string;
  category: string;
  status: string;
  date: string;
}

export interface SuggestedAction {
  text: string;
  completed: boolean;
  progress: number;
}

export interface Business {
  id: number;
  name: string;
  industry: string;
  location: string;
  trustGrade: string;
  trustPercentage: number;
  rating: number;
  reviewCount: number;
  employees: string;
  description: string;
  services: string[];
  verified: boolean;
  logo: string;
}

export const stats: DashboardStat[] = [
  {
    title: "Trust Grade",
    value: "A+",
    description: "95% Trust Score",
    icon: Shield,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/20",
  },
  {
    title: "Active Partnerships",
    value: "24",
    description: "+3 this month",
    icon: Users,
    color: "text-green-400",
    bgColor: "bg-green-500/20",
  },
  {
    title: "Documents Verified",
    value: "18",
    description: "All up to date",
    icon: FileText,
    color: "text-teal-400",
    bgColor: "bg-teal-500/20",
  },
  {
    title: "Business Score",
    value: "4.9",
    description: "Based on 127 reviews",
    icon: Star,
    color: "text-lime-400",
    bgColor: "bg-lime-500/20",
  },
];

export const mockRecentActivity: ActivityItem[] = [
  {
    type: "verification",
    title: "Document verification completed",
    description: "BIR Certificate of Registration approved",
    time: "2 hours ago",
    icon: CheckCircle2,
    color: "text-green-400",
  },
  {
    type: "partnership",
    title: "New partnership request",
    description: "Manila Bay Trading wants to connect",
    time: "5 hours ago",
    icon: Users,
    color: "text-blue-400",
  },
  {
    type: "document",
    title: "Document update required",
    description: "DTI Business Permit expires in 30 days",
    time: "1 day ago",
    icon: FileText,
    color: "text-yellow-400",
  },
  {
    type: "review",
    title: "New review received",
    description: "5-star rating from Cebu Pacific Supplies",
    time: "2 days ago",
    icon: Star,
    color: "text-purple-400",
  },
];

export const trustedPartners: TrustedPartner[] = [
  {
    name: "Manila Bay Trading",
    industry: "Import/Export",
    trustGrade: "A+",
    trustPercentage: 95,
    logo: "MB",
    status: "Active",
  },
  {
    name: "Cebu Pacific Supplies",
    industry: "Retail",
    trustGrade: "A",
    trustPercentage: 88,
    logo: "CP",
    status: "Active",
  },
  {
    name: "Davao Furniture Works",
    industry: "Manufacturing",
    trustGrade: "A-",
    trustPercentage: 85,
    logo: "DF",
    status: "Pending",
  },
];

export const documents: Document[] = [
  {
    name: "BIR_2316_Form_2023.pdf",
    category: "Tax Return",
    status: "Verified",
    date: "Dec 15, 2023",
  },
  {
    name: "DTI_Business_Permit.pdf",
    category: "License",
    status: "Verified",
    date: "Dec 10, 2023",
  },
  {
    name: "BDO_Bank_Statement_Nov.pdf",
    category: "Financial",
    status: "Processing",
    date: "Dec 12, 2023",
  },
  {
    name: "SSS_Certificate.pdf",
    category: "Government ID",
    status: "Verified",
    date: "Dec 8, 2023",
  },
];

export const suggestedActions: SuggestedAction[] = [
  {
    text: "Upload supplier contract with local distributor",
    completed: false,
    progress: 0,
  },
  { text: "Add BPI bank statement", completed: true, progress: 100 },
  {
    text: "Add customer reference from Ayala Corp",
    completed: false,
    progress: 60,
  },
  {
    text: "Complete DTI business verification",
    completed: true,
    progress: 100,
  },
  { text: "Upload recent OR/CR receipts", completed: false, progress: 20 },
];

export const businesses: Business[] = [
  {
    id: 1,
    name: "Kalaw Food Products",
    industry: "Food Processing",
    location: "Quezon City, Metro Manila",
    trustGrade: "A+",
    trustPercentage: 95,
    rating: 4.9,
    reviewCount: 127,
    employees: "25-50",
    description:
      "Premium food processing company specializing in traditional Filipino snacks and delicacies for local and export markets.",
    services: ["Food Manufacturing", "Private Label", "Export Services"],
    verified: true,
    logo: "KF",
  },
  {
    id: 2,
    name: "Bataan Steel Works",
    industry: "Manufacturing",
    location: "Mariveles, Bataan",
    trustGrade: "A",
    trustPercentage: 88,
    rating: 4.7,
    reviewCount: 89,
    employees: "100-200",
    description:
      "Industrial steel fabrication company serving construction and infrastructure projects across Luzon with 20+ years experience.",
    services: ["Steel Fabrication", "Welding Services", "Construction Supply"],
    verified: true,
    logo: "BS",
  },
  {
    id: 3,
    name: "Cebu Digital Marketing",
    industry: "Digital Services",
    location: "Cebu City, Cebu",
    trustGrade: "A-",
    trustPercentage: 85,
    rating: 4.8,
    reviewCount: 156,
    employees: "10-25",
    description:
      "Full-service digital marketing agency helping Filipino businesses grow online through innovative digital strategies and creative campaigns.",
    services: ["Social Media Marketing", "Web Development", "SEO Services"],
    verified: true,
    logo: "CD",
  },
  {
    id: 4,
    name: "Mindanao Agri Supply",
    industry: "Agriculture",
    location: "Davao City, Davao del Sur",
    trustGrade: "B+",
    trustPercentage: 78,
    rating: 4.6,
    reviewCount: 67,
    employees: "15-30",
    description:
      "Agricultural supply company providing quality seeds, fertilizers, and farming equipment to farmers across Mindanao region.",
    services: [
      "Agricultural Supplies",
      "Farming Equipment",
      "Technical Support",
    ],
    verified: false,
    logo: "MA",
  },
  {
    id: 5,
    name: "Iloilo Garments Export",
    industry: "Textiles & Garments",
    location: "Iloilo City, Iloilo",
    trustGrade: "A",
    trustPercentage: 92,
    rating: 4.9,
    reviewCount: 203,
    employees: "50-100",
    description:
      "Leading garment manufacturer specializing in high-quality apparel for international brands with sustainable production practices.",
    services: ["Garment Manufacturing", "Private Label", "Quality Control"],
    verified: true,
    logo: "IG",
  },
  {
    id: 6,
    name: "Baguio Handicraft Center",
    industry: "Handicrafts",
    location: "Baguio City, Benguet",
    trustGrade: "A+",
    trustPercentage: 96,
    rating: 4.8,
    reviewCount: 94,
    employees: "20-40",
    description:
      "Traditional handicraft producer creating authentic Filipino woodcarvings, weavings, and decorative items for local and international markets.",
    services: [
      "Handicraft Production",
      "Custom Orders",
      "Wholesale Distribution",
    ],
    verified: true,
    logo: "BH",
  },
  {
    id: 7,
    name: "Palawan Tourism Services",
    industry: "Tourism & Hospitality",
    location: "Puerto Princesa, Palawan",
    trustGrade: "A-",
    trustPercentage: 87,
    rating: 4.7,
    reviewCount: 145,
    employees: "30-60",
    description:
      "Eco-tourism company offering sustainable travel experiences showcasing Palawan's natural beauty and cultural heritage.",
    services: ["Tour Packages", "Island Hopping", "Accommodation Booking"],
    verified: true,
    logo: "PT",
  },
  {
    id: 8,
    name: "Laguna Tech Solutions",
    industry: "Information Technology",
    location: "Santa Rosa, Laguna",
    trustGrade: "A",
    trustPercentage: 89,
    rating: 4.8,
    reviewCount: 112,
    employees: "25-50",
    description:
      "Software development company specializing in business automation and mobile applications for Filipino SMEs and startups.",
    services: ["Software Development", "Mobile Apps", "IT Consulting"],
    verified: true,
    logo: "LT",
  },
];

export const industries = [
  "Food Processing",
  "Manufacturing",
  "Digital Services",
  "Agriculture",
  "Textiles & Garments",
  "Handicrafts",
  "Tourism & Hospitality",
  "Information Technology",
  "Construction",
  "Retail Trade",
  "Transportation",
  "Healthcare Services",
];

export const locations = [
  "Quezon City, Metro Manila",
  "Manila, Metro Manila",
  "Makati City, Metro Manila",
  "Cebu City, Cebu",
  "Davao City, Davao del Sur",
  "Iloilo City, Iloilo",
  "Baguio City, Benguet",
  "Cagayan de Oro, Misamis Oriental",
  "Bacolod City, Negros Occidental",
  "Puerto Princesa, Palawan",
  "Santa Rosa, Laguna",
  "Mariveles, Bataan",
];
