"use client";

import {
  UserPlus,
  Gift,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Users,
  Copy,
  Check,
  Link,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export default function VerifyBusinessPartner() {
  const [generatedLink, setGeneratedLink] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const generateReferralLink = () => {
    // Generate a unique referral code
    const referralCode =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    const link = `${window.location.origin}/signup?ref=${referralCode}`;
    setGeneratedLink(link);
  };

  const copyToClipboard = async () => {
    if (generatedLink) {
      await navigator.clipboard.writeText(generatedLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleInvitePartner = () => {
    if (!generatedLink) {
      generateReferralLink();
    } else {
      copyToClipboard();
    }
  };

  const benefits = [
    {
      icon: Shield,
      title: "Enhanced Trust",
      description:
        "Help businesses build credibility through verified profiles and documentation",
    },
    {
      icon: Users,
      title: "Stronger Network",
      description:
        "Connect with verified businesses and build stronger professional relationships",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description:
        "Ensure all partners meet high standards of business verification",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Invite Businesses",
      description:
        "Send the signup link to businesses you want to add to the network",
    },
    {
      number: "2",
      title: "Verification Process",
      description:
        "The business uploads documents and completes their verification profile",
    },
    {
      number: "3",
      title: "Join Network",
      description:
        "Once verified, they become part of your trusted business network",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <UserPlus className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Add Business Partners
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Invite other businesses to get verified on Lunoa and build a
            stronger, more trustworthy business network together.
          </p>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-br from-green-600 to-green-700 border-green-500 mb-8">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Expand Your Network?
            </h2>
            <p className="text-green-100 mb-6 max-w-md mx-auto">
              Generate your custom referral link and share it with businesses
              you know to help them join our verified business community.
            </p>

            {!generatedLink ? (
              <Button
                onClick={handleInvitePartner}
                className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 text-lg font-semibold"
              >
                <Link className="h-5 w-5 mr-2" />
                Generate Referral Link
              </Button>
            ) : (
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4 max-w-lg mx-auto">
                  <p className="text-white text-sm mb-2">
                    Your custom referral link:
                  </p>
                  <div className="flex items-center space-x-2 bg-white/20 rounded-md p-2">
                    <code className="text-green-100 text-sm flex-1 truncate">
                      {generatedLink}
                    </code>
                    <Button
                      onClick={copyToClipboard}
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20"
                    >
                      {copied ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
                <div className="flex space-x-3 justify-center">
                  <Button
                    onClick={copyToClipboard}
                    className="bg-white text-green-700 hover:bg-green-50"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 mr-2" />
                    ) : (
                      <Copy className="h-4 w-4 mr-2" />
                    )}
                    {copied ? "Copied!" : "Copy Link"}
                  </Button>
                  <Button
                    onClick={generateReferralLink}
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    <Link className="h-4 w-4 mr-2" />
                    Generate New Link
                  </Button>
                </div>
              </div>
            )}

            <p className="text-green-200 text-sm mt-4">
              Track referrals • Build trust • Grow your network
            </p>
          </CardContent>
        </Card>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={index}
                className="bg-gray-900 border-gray-700 text-center"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* How It Works */}
        <Card className="bg-gray-900 border-gray-700 mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">How It Works</CardTitle>
            <CardDescription className="text-gray-400">
              Simple 3-step process to expand your verified network
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                  {index < steps.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-gray-600 mx-auto mt-4 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
            <div className="text-gray-400">Verified Businesses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-gray-400">Verification Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">4.9★</div>
            <div className="text-gray-400">Average Trust Score</div>
          </div>
        </div>
      </div>
    </div>
  );
}
