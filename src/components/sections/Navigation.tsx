"use client";
import Image from "next/image";
import { Search, Users, Settings, TrendingUp, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: TrendingUp },
    { id: "discover", label: "Discover", icon: Search },
    { id: "verify-partner", label: "Verify Partner", icon: UserPlus },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <nav className="bg-gray-900 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Image
                src="/lunoa-icon.png"
                alt="Lunoa Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-white">Lunoa</span>
            </div>

            <div className="flex space-x-1">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "default" : "ghost"}
                    onClick={() => onTabChange(tab.id)}
                    className={`flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <Users className="h-4 w-4 text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
