"use client";

import { useState } from "react";
import {
  UserPlus,
  Gift,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function VerifyBusinessPartner() {
  const handleInvitePartner = () => {
    window.location.href = "/signup";
  };

  const benefits = [
    {
      icon: Gift,
      title: "$50 Reward",
      description:
        "Earn $50 for each business that completes verification through your referral",
    },
    {
      icon: Shield,
      title: "Build Trust Network",
      description:
        "Help create a more trustworthy business ecosystem for everyone",
    },
    {
      icon: Users,
      title: "Strengthen Partnerships",
      description:
        "Connect with verified businesses and build stronger professional relationships",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Share the Link",
      description: "Send the signup link to businesses you want to verify",
    },
    {
      number: "2",
      title: "They Complete Verification",
      description:
        "The business uploads documents and completes their trust profile",
    },
    {
      number: "3",
      title: "Earn Your Reward",
      description: "Once verified, you receive $50 credited to your account",
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
            Invite Business Partners
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Help other businesses get verified on Lunoa and earn rewards while
            building a stronger trust network.
          </p>
        </div>

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
              Simple 3-step process to start earning rewards
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

        {/* CTA Section */}
        <Card className="bg-gradient-to-br from-green-600 to-green-700 border-green-500">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Start Earning?
            </h2>
            <p className="text-green-100 mb-6 max-w-md mx-auto">
              Share the Lunoa signup link with businesses you know and start
              earning $50 for each successful verification.
            </p>
            <Button
              onClick={handleInvitePartner}
              className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 text-lg font-semibold"
            >
              <UserPlus className="h-5 w-5 mr-2" />
              Invite Business Partners
            </Button>
            <p className="text-green-200 text-sm mt-4">
              No limit on referrals • Instant rewards • Build your network
            </p>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
            <div className="text-gray-400">Businesses Verified</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">$25K+</div>
            <div className="text-gray-400">Rewards Paid Out</div>
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
