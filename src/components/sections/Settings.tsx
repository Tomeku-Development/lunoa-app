"use client";

import { useState } from "react";
import {
  User,
  Bell,
  Shield,
  CreditCard,
  Building,
  Globe,
  Save,
  Eye,
  EyeOff,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Settings() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState("public");

  const handleSaveProfile = () => {
    console.log("Save profile settings");
  };

  const handleSaveNotifications = () => {
    console.log("Save notification settings");
  };

  const handleSavePrivacy = () => {
    console.log("Save privacy settings");
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
          <p className="text-gray-400">
            Manage your account preferences and business profile
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-gray-900 border-gray-700">
            <TabsTrigger
              value="profile"
              className="data-[state=active]:bg-gray-800 data-[state=active]:text-white"
            >
              <User className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="data-[state=active]:bg-gray-800 data-[state=active]:text-white"
            >
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value="privacy"
              className="data-[state=active]:bg-gray-800 data-[state=active]:text-white"
            >
              <Shield className="h-4 w-4 mr-2" />
              Privacy
            </TabsTrigger>
            <TabsTrigger
              value="billing"
              className="data-[state=active]:bg-gray-800 data-[state=active]:text-white"
            >
              <CreditCard className="h-4 w-4 mr-2" />
              Billing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Business Profile</CardTitle>
                <CardDescription className="text-gray-400">
                  Update your business information and contact details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessName" className="text-white">
                      Business Name
                    </Label>
                    <Input
                      id="businessName"
                      defaultValue="Akhtar Industries"
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-white">
                      Industry
                    </Label>
                    <Select defaultValue="manufacturing">
                      <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        <SelectItem value="manufacturing">
                          Manufacturing
                        </SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-white">
                    Business Description
                  </Label>
                  <Textarea
                    id="description"
                    defaultValue="Leading industrial manufacturing company with over 25 years of experience in automotive and aerospace components."
                    className="bg-gray-800 border-gray-600 text-white"
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-white">
                      Website
                    </Label>
                    <Input
                      id="website"
                      defaultValue="www.akhtarindustries.com"
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      defaultValue="+1 (555) 123-4567"
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-white">
                    Address
                  </Label>
                  <Input
                    id="address"
                    defaultValue="123 Industrial Blvd, Detroit, MI 48201"
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                </div>

                <Button
                  onClick={handleSaveProfile}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Profile
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Account Security</CardTitle>
                <CardDescription className="text-gray-400">
                  Update your login credentials
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="john@akhtarindustries.com"
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentPassword" className="text-white">
                    Current Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="currentPassword"
                      type={showPassword ? "text" : "password"}
                      className="bg-gray-800 border-gray-600 text-white pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="newPassword" className="text-white">
                      New Password
                    </Label>
                    <Input
                      id="newPassword"
                      type="password"
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-white">
                      Confirm Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <Button className="bg-green-600 hover:bg-green-700">
                  Update Password
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">
                  Notification Preferences
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Choose how you want to be notified about important updates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white">Email Notifications</Label>
                    <p className="text-sm text-gray-400">
                      Receive updates via email
                    </p>
                  </div>
                  <Switch
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white">Push Notifications</Label>
                    <p className="text-sm text-gray-400">
                      Receive browser notifications
                    </p>
                  </div>
                  <Switch
                    checked={pushNotifications}
                    onCheckedChange={setPushNotifications}
                  />
                </div>

                <div className="space-y-4">
                  <Label className="text-white">Email Notification Types</Label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">
                        Partnership requests
                      </span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">
                        Document verification updates
                      </span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Trust score changes</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">New reviews</span>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Marketing updates</span>
                      <Switch />
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleSaveNotifications}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Privacy Settings</CardTitle>
                <CardDescription className="text-gray-400">
                  Control who can see your business information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-white">Profile Visibility</Label>
                  <Select
                    value={profileVisibility}
                    onValueChange={setProfileVisibility}
                  >
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="public">
                        Public - Anyone can view
                      </SelectItem>
                      <SelectItem value="verified">
                        Verified Partners Only
                      </SelectItem>
                      <SelectItem value="private">
                        Private - Invitation Only
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label className="text-white">Information Visibility</Label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Contact information</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Business address</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Employee count</span>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Revenue information</span>
                      <Switch />
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleSavePrivacy}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Privacy Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">
                  Billing Information
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Manage your subscription and payment methods
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-green-400">Pro Plan</h3>
                      <p className="text-green-300 text-sm">
                        $49/month - Active
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
                    >
                      Manage Plan
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-white">Payment Method</Label>
                  <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-white">•••• •••• •••• 4242</p>
                          <p className="text-gray-400 text-sm">Expires 12/25</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300"
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-white">Billing History</Label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div>
                        <p className="text-white">December 2023</p>
                        <p className="text-gray-400 text-sm">Pro Plan</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white">$49.00</p>
                        <p className="text-green-400 text-sm">Paid</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div>
                        <p className="text-white">November 2023</p>
                        <p className="text-gray-400 text-sm">Pro Plan</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white">$49.00</p>
                        <p className="text-green-400 text-sm">Paid</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
