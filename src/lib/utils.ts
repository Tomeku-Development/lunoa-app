import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Create a URL-friendly slug from business name
export function createBusinessSlug(businessName: string): string {
  return businessName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Find business by slug (converted from name)
export function findBusinessBySlug(businesses: any[], slug: string) {
  return businesses.find((business) => {
    const businessSlug = createBusinessSlug(business.name);
    return businessSlug === slug;
  });
}

// Alternative: Find business by ID if you prefer using IDs
export function findBusinessById(businesses: any[], id: string) {
  return businesses.find((business) => business.id.toString() === id);
}
