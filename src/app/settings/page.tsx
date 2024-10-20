"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Facebook } from "lucide-react"
import { toast } from "react-hot-toast"

export default function TabsDemo() {

  const profileSettings = async() => {
    toast.success("Profile settings saved");
  }

  const socialMediaSettings = async() => {
    toast.success("Social Media settings saved")
  }
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="font-bold text-3xl my-10">Settings</h1>
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="account">Profile</TabsTrigger>
        <TabsTrigger value="privacy">Privacy</TabsTrigger>
        <TabsTrigger value="password">Social Media</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Profile Settings</CardTitle>
            <CardDescription>
              Make changes to your profile settings here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue="Psycho Coder" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@psycho" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="dp">Profile Picture</Label>
              <Input id="picture" type="file" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="dp">Bio</Label>
              <Textarea placeholder="Write your one-liner bio here" />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={profileSettings}>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="privacy">
        <Card>
          <CardHeader>
            <CardTitle>Privacy Settings</CardTitle>
            <CardDescription>
              Change your privacy settings here. Click save when you are done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Profile Visibility:</Label>
              <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Pubic</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Private</Label>
      </div>
    
    </RadioGroup>
            </div>
            <div className="mt-10 space-y-1">
              <Label htmlFor="current">Block List:</Label>
              <div>
                <div className="my-3 flex justify-between items-center">
                  <Label>Psycho</Label>
                  <Button variant={"destructive"}>Unblock</Button>
                </div>
                <div className="my-3 flex justify-between items-center">
                  <Label>Churail</Label>
                  <Button variant={"destructive"}>Unblock</Button>
                </div>
              </div>
            </div>
           
           
          </CardContent>
          <CardFooter>
            <Button onClick={socialMediaSettings}>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Social Media Settings</CardTitle>
            <CardDescription>
              Change your social media here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Facebook:</Label>
              <Input id="facebook" placeholder={"facebook.com/psycho"} type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="current">Twitter/X:</Label>
              <Input id="twitter" placeholder={"x.com/psycho"} type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="current">Medium:</Label>
              <Input id="medium" placeholder={"medium.com/psycho"} type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="current">Substack:</Label>
              <Input id="substack" placeholder={"substack.com/psycho"} type="text" />
            </div>
           
          </CardContent>
          <CardFooter>
            <Button onClick={socialMediaSettings}>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>

  )
}
