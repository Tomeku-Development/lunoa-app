"use client"

import { useState } from "react"
import { Building, MapPin, Globe, Phone, Mail, Users, Calendar } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface BusinessOnboardingFormProps {
  onComplete: () => void
}

export function BusinessOnboardingForm({ onComplete }: BusinessOnboardingFormProps) {
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    description: '',
    website: '',
    phone: '',
    email: '',
    address: '',
    employeeCount: '',
    foundedYear: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    onComplete()
  }

  const industries = [
    "Technology",
    "Manufacturing",
    "Healthcare",
    "Finance",
    "Retail",
    "Construction",
    "Education",
    "Energy",
    "Transportation",
    "Other"
  ]

  const employeeCounts = [
    "1-10",
    "11-50",
    "51-200",
    "201-500",
    "501-1000",
    "1000+"
  ]

  return (
    <Card className="bg-gray-900 border-gray-700 max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-white">Business Information</CardTitle>
        <CardDescription className="text-gray-400">
          Tell us about your business to get started with verification
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="businessName" className="text-white">
                <Building className="h-4 w-4 inline mr-2" />
                Business Name *
              </Label>
              <Input
                id="businessName"
                value={formData.businessName}
                onChange={(e) => handleInputChange('businessName', e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry" className="text-white">Industry *</Label>
              <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry.toLowerCase()}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-white">Business Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="bg-gray-800 border-gray-600 text-white"
              rows={4}
              placeholder="Describe what your business does..."
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="website" className="text-white">
                <Globe className="h-4 w-4 inline mr-2" />
                Website
              </Label>
              <Input
                id="website"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
                placeholder="www.example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">
                <Phone className="h-4 w-4 inline mr-2" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              <Mail className="h-4 w-4 inline mr-2" />
              Business Email *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="bg-gray-800 border-gray-600 text-white"
              placeholder="contact@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-white">
              <MapPin className="h-4 w-4 inline mr-2" />
              Business Address *
            </Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className="bg-gray-800 border-gray-600 text-white"
              placeholder="123 Business St, City, State 12345"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="employeeCount" className="text-white">
                <Users className="h-4 w-4 inline mr-2" />
                Employee Count
              </Label>
              <Select value={formData.employeeCount} onValueChange={(value) => handleInputChange('employeeCount', value)}>
                <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  {employeeCounts.map(count => (
                    <SelectItem key={count} value={count}>
                      {count} employees
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="foundedYear" className="text-white">
                <Calendar className="h-4 w-4 inline mr-2" />
                Founded Year
              </Label>
              <Input
                id="foundedYear"
                value={formData.foundedYear}
                onChange={(e) => handleInputChange('foundedYear', e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
                placeholder="2020"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            Continue to Document Upload
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
