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
    description: "Tax registration certificate approved",
    time: "2 hours ago",
    icon: CheckCircle2,
    color: "text-green-400",
  },
  {
    type: "partnership",
    title: "New partnership request",
    description: "TechFlow Solutions wants to connect",
    time: "5 hours ago",
    icon: Users,
    color: "text-blue-400",
  },
  {
    type: "document",
    title: "Document update required",
    description: "Insurance certificate expires in 30 days",
    time: "1 day ago",
    icon: FileText,
    color: "text-yellow-400",
  },
  {
    type: "review",
    title: "New review received",
    description: "5-star rating from Global Manufacturing Co.",
    time: "2 days ago",
    icon: Star,
    color: "text-purple-400",
  },
];

export const trustedPartners: TrustedPartner[] = [
  {
    name: "TechFlow Solutions",
    industry: "Technology",
    trustGrade: "A+",
    trustPercentage: 95,
    logo: "TF",
    status: "Active",
  },
  {
    name: "Global Manufacturing",
    industry: "Manufacturing",
    trustGrade: "A",
    trustPercentage: 88,
    logo: "GM",
    status: "Active",
  },
  {
    name: "Creative Design Studio",
    industry: "Design",
    trustGrade: "A-",
    trustPercentage: 85,
    logo: "CD",
    status: "Pending",
  },
];

export const documents: Document[] = [
  {
    name: "Tax_Return_2023.pdf",
    category: "Tax Return",
    status: "Verified",
    date: "Dec 15, 2023",
  },
  {
    name: "Business_License.pdf",
    category: "License",
    status: "Verified",
    date: "Dec 10, 2023",
  },
  {
    name: "Bank_Statement_Nov.pdf",
    category: "Financial",
    status: "Processing",
    date: "Dec 12, 2023",
  },
  {
    name: "Insurance_Certificate.pdf",
    category: "Insurance",
    status: "Verified",
    date: "Dec 8, 2023",
  },
];

export const suggestedActions: SuggestedAction[] = [
  { text: "Upload a supplier contract", completed: false, progress: 0 },
  { text: "Add bank statement", completed: true, progress: 100 },
  { text: "Add customer reference", completed: false, progress: 60 },
  { text: "Complete business verification", completed: true, progress: 100 },
  { text: "Upload recent invoices", completed: false, progress: 20 },
];

export const businesses: Business[] = [
  {
    id: 1,
    name: "TechFlow Solutions",
    industry: "Technology",
    location: "San Francisco, CA",
    trustGrade: "A+",
    trustPercentage: 95,
    rating: 4.9,
    reviewCount: 127,
    employees: "50-100",
    description:
      "Leading software development company specializing in enterprise solutions and cloud infrastructure.",
    services: ["Software Development", "Cloud Services", "DevOps"],
    verified: true,
    logo: "TF",
  },
  {
    id: 2,
    name: "Global Manufacturing Co.",
    industry: "Manufacturing",
    location: "Detroit, MI",
    trustGrade: "A",
    trustPercentage: 88,
    rating: 4.7,
    reviewCount: 89,
    employees: "200-500",
    description:
      "Industrial manufacturing company with 30+ years of experience in automotive and aerospace components.",
    services: ["Manufacturing", "Quality Control", "Supply Chain"],
    verified: true,
    logo: "GM",
  },
  {
    id: 3,
    name: "Creative Design Studio",
    industry: "Design",
    location: "New York, NY",
    trustGrade: "A-",
    trustPercentage: 85,
    rating: 4.8,
    reviewCount: 156,
    employees: "10-25",
    description:
      "Award-winning design agency creating beautiful brands and digital experiences for forward-thinking companies.",
    services: ["Brand Design", "Web Design", "Marketing"],
    verified: true,
    logo: "CD",
  },
  {
    id: 4,
    name: "Green Energy Solutions",
    industry: "Energy",
    location: "Austin, TX",
    trustGrade: "B+",
    trustPercentage: 78,
    rating: 4.6,
    reviewCount: 67,
    employees: "25-50",
    description:
      "Renewable energy company focused on solar and wind power solutions for commercial and residential clients.",
    services: ["Solar Installation", "Energy Consulting", "Maintenance"],
    verified: false,
    logo: "GE",
  },
  {
    id: 5,
    name: "Financial Advisory Group",
    industry: "Finance",
    location: "Chicago, IL",
    trustGrade: "A",
    trustPercentage: 92,
    rating: 4.9,
    reviewCount: 203,
    employees: "100-200",
    description:
      "Comprehensive financial services firm providing investment management and advisory services to businesses.",
    services: [
      "Investment Management",
      "Financial Planning",
      "Risk Assessment",
    ],
    verified: true,
    logo: "FA",
  },
  {
    id: 6,
    name: "Healthcare Innovations",
    industry: "Healthcare",
    location: "Boston, MA",
    trustGrade: "A+",
    trustPercentage: 96,
    rating: 4.8,
    reviewCount: 94,
    employees: "75-150",
    description:
      "Medical technology company developing innovative solutions for patient care and hospital management.",
    services: ["Medical Devices", "Healthcare Software", "Consulting"],
    verified: true,
    logo: "HI",
  },
];

export const industries = [
  "Technology",
  "Manufacturing",
  "Design",
  "Energy",
  "Finance",
  "Healthcare",
  "Construction",
  "Retail",
  "Education",
];

export const locations = [
  "San Francisco, CA",
  "New York, NY",
  "Chicago, IL",
  "Austin, TX",
  "Boston, MA",
  "Detroit, MI",
  "Seattle, WA",
  "Los Angeles, CA",
];
