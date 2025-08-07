"use client"

import { Shield, CheckCircle, AlertTriangle, Star, Users, Building } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrustGradeMeter } from "./trust-grade-meter"

interface TrustGradePreviewProps {
  businessName: string
  onComplete: () => void
}

export function TrustGradePreview({ businessName, onComplete }: TrustGradePreviewProps) {
  const trustMetrics = [
    {
      category: "Document Verification",
      score: 85,
      status: "good",
      icon: CheckCircle,
      description: "Business license and tax documents verified"
    },
    {
      category: "Business Information",
      score: 90,
      status: "excellent",
      icon: Building,
      description: "Complete business profile with contact details"
    },
    {
      category: "Portfolio & Capabilities",
      score: 70,
      status: "fair",
      icon: Star,
      description: "Some portfolio items added, could be expanded"
    },
    {
      category: "Network & References",
      score: 40,
      status: "needs-improvement",
      icon: Users,
      description: "No business references or partnerships yet"
    }
  ]

  const overallScore = Math.round(trustMetrics.reduce((sum, metric) => sum + metric.score, 0) / trustMetrics.length)
  const trustGrade = overallScore >= 90 ? "A+" : overallScore >= 80 ? "A" : overallScore >= 70 ? "B+" : overallScore >= 60 ? "B" : "C"

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "text-green-400"
      case "good": return "text-blue-400"
      case "fair": return "text-yellow-400"
      case "needs-improvement": return "text-red-400"
      default: return "text-gray-400"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "excellent": return <Badge className="bg-green-500/20 text-green-400">Excellent</Badge>
      case "good": return <Badge className="bg-blue-500/20 text-blue-400">Good</Badge>
      case "fair": return <Badge className="bg-yellow-500/20 text-yellow-400">Fair</Badge>
      case "needs-improvement": return <Badge className="bg-red-500/20 text-red-400">Needs Work</Badge>
      default: return <Badge variant="secondary">Unknown</Badge>
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Your Trust Grade</h1>
            <p className="text-gray-400">Here's how your business profile looks to potential partners</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12">
            <TrustGradeMeter grade={trustGrade} percentage={overallScore} size="lg" />
            
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-white mb-2">{businessName}</h2>
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-semibold">Verified Business</span>
              </div>
              <p className="text-gray-300 max-w-md">
                Your business profile is {overallScore >= 80 ? 'looking great' : overallScore >= 60 ? 'on the right track' : 'getting started'}! 
                {overallScore < 80 && ' Complete the remaining steps to improve your trust score.'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Trust Score Breakdown</CardTitle>
          <CardDescription className="text-gray-400">
            See how each category contributes to your overall trust grade
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {trustMetrics.map((metric, index) => {
              const IconComponent = metric.icon
              return (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    metric.status === 'excellent' ? 'bg-green-500/20' :
                    metric.status === 'good' ? 'bg-blue-500/20' :
                    metric.status === 'fair' ? 'bg-yellow-500/20' :
                    'bg-red-500/20'
                  }`}>
                    <IconComponent className={`h-6 w-6 ${getStatusColor(metric.status)}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">{metric.category}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-medium">{metric.score}%</span>
                        {getStatusBadge(metric.status)}
                      </div>
                    </div>
                    <Progress value={metric.score} className="h-2 mb-2" />
                    <p className="text-gray-400 text-sm">{metric.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-600 to-green-700 border-green-500">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">🎉 Welcome to Lunoa!</h3>
          <p className="text-green-100 mb-4">
            Your business profile is now live. Start connecting with verified partners and building trust in your network.
          </p>
          <button
            onClick={onComplete}
            className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Go to Dashboard
          </button>
        </CardContent>
      </Card>
    </div>
  )
}
