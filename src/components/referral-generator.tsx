"use client"

import { useState } from "react"
import { Copy, Share2, Mail, MessageSquare, Check } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ReferralGenerator() {
  const [copied, setCopied] = useState(false)
  const referralLink = "https://lunoa.com/signup?ref=akhtar-industries"
  const referralCode = "AKHTAR50"

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  const handleShareEmail = () => {
    const subject = "Join Lunoa - Business Verification Platform"
    const body = `Hi there,

I'd like to invite you to join Lunoa, a business verification platform that helps build trust between companies.

Use my referral link to get started: ${referralLink}

With your referral code ${referralCode}, you'll get priority verification processing.

Best regards`

    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleShareSMS = () => {
    const message = `Join Lunoa for business verification! Use my link: ${referralLink} with code ${referralCode} for priority processing.`
    window.location.href = `sms:?body=${encodeURIComponent(message)}`
  }

  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Share Your Referral Link</CardTitle>
        <CardDescription className="text-gray-400">
          Invite businesses to join Lunoa and earn $50 for each successful verification
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label className="text-white">Your Referral Link</Label>
          <div className="flex space-x-2">
            <Input
              value={referralLink}
              readOnly
              className="bg-gray-800 border-gray-600 text-white"
            />
            <Button
              onClick={handleCopyLink}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-white">Referral Code</Label>
          <Input
            value={referralCode}
            readOnly
            className="bg-gray-800 border-gray-600 text-white"
          />
        </div>

        <div className="space-y-3">
          <Label className="text-white">Share via</Label>
          <div className="flex space-x-2">
            <Button
              onClick={handleShareEmail}
              variant="outline"
              className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <Mail className="h-4 w-4 mr-2" />
              Email
            </Button>
            <Button
              onClick={handleShareSMS}
              variant="outline"
              className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              SMS
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <Share2 className="h-4 w-4 mr-2" />
              More
            </Button>
          </div>
        </div>

        <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
          <h4 className="font-semibold text-green-400 mb-2">Referral Rewards</h4>
          <ul className="text-green-300 text-sm space-y-1">
            <li>• $50 for each business that completes verification</li>
            <li>• No limit on referrals</li>
            <li>• Instant payout once verification is complete</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
