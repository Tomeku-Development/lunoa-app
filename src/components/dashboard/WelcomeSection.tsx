import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrustGradeMeter } from "@/components/trust-grade-meter";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const WelcomeSection = () => {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold text-white mb-8">
        Welcome back, <span className="text-emerald-400">Tomeku</span>!
      </h1>

      <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 shadow-2xl backdrop-blur-sm">
        <CardContent className="p-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-8 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
              <TrustGradeMeter grade="A+" percentage={95} />
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Your Trust Grade: <span className="text-emerald-400">A+</span>
                </h3>
                <p className="text-gray-300 mb-6 max-w-md text-lg leading-relaxed">
                  Excellent! You have a strong trust profile that builds
                  confidence with partners.
                </p>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-emerald-400 hover:text-emerald-300 text-base"
                    >
                      <HelpCircle className="h-5 w-5 mr-2" />
                      What does this grade mean?
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-800 border-gray-600 text-gray-200 max-w-sm p-4">
                    <div className="space-y-3">
                      <p className="font-semibold">Trust Grade B+ (75%)</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Compliance:</span>
                          <span className="text-emerald-400">95%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Performance:</span>
                          <span className="text-yellow-400">72%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Reputation:</span>
                          <span className="text-green-400">88%</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400">
                        Higher grades increase partner trust and unlock better
                        opportunities.
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
