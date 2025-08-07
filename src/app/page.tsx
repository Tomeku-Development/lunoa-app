"use client";
import { useState } from "react";

import { Dashboard } from "@/components/sections/Dashboard";
import { Discover } from "@/components/sections/Discover";
import { Navigation } from "@/components/sections/Navigation";
import VerifyBusinessPartner from "@/components/sections/VerifyBusiness";
import { Settings } from "@/components/sections/Settings";

export default function Page() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "discover":
        return <Discover />;
      case "verify-partner":
        return <VerifyBusinessPartner />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="pt-4">{renderContent()}</div>
    </div>
  );
}
