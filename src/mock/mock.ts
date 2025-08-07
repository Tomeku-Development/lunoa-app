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

export const mockStats: DashboardStat[] = [
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

export const mockTrustedPartners: TrustedPartner[] = [
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

export const mockDocuments: Document[] = [
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

export const mockSuggestedActions: SuggestedAction[] = [
  { text: "Upload a supplier contract", completed: false, progress: 0 },
  { text: "Add bank statement", completed: true, progress: 100 },
  { text: "Add customer reference", completed: false, progress: 60 },
  { text: "Complete business verification", completed: true, progress: 100 },
  { text: "Upload recent invoices", completed: false, progress: 20 },
];
