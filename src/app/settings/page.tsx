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

import { Facebook, FileChartColumnIncreasingIcon } from "lucide-react"
import { toast } from "react-hot-toast"
import axios from "axios"
import { useUserStore } from "@/store/store"
import { useEffect, useState } from "react"

export default function TabsDemo() {
  const [facebook, setFacebook] = useState("")
  const [twitter, setTwitter] = useState("")
  const [medium, setMedium] = useState("")
  const [substack, setSubstack] = useState("")
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [isPublic, setIsPublic] = useState("public");
  const [bio, setBio] = useState("")
  const {UserId} = useUserStore();
  const getSocialMedia = async() => {
    console.log(UserId)
    const re = await axios.post("/api/socials/get-socials", {
      userId:UserId
  })
  if (re.data.type == "success") {

    setFacebook(re.data.user.facebook);
    setTwitter(re.data.user.twitter);
    setMedium(re.data.user.medium);
    setSubstack(re.data.user.substack);
 

  }
  else {
    toast.error(re.data.message)
  }
}

  const profileSettings = async() => {
    toast.success("Profile settings saved");
    updateProfileData();
  }

  const socialMediaSettings = async() => {
    toast.success("Social Media settings saved");
    const re = await axios.post("/api/socials/update-socials", {
      facebook: facebook,
      twitter: twitter,
      medium: medium,
      substack: substack,
      userId: UserId
    })

    if (re.data.type == "success"){
      toast.success(re.data.message)
    }
    else {
      toast.error(re.data.message)
    }

  }

  const getProfileData = async() => {
    const re = await axios.post("/api/settings/get-profile-data", {
      userId: UserId
    })
    if (re.data.type == "success"){
      setName(re.data.user.name);
      setUsername(re.data.user.username);
      setBio(re.data.user.bio);
      setIsPublic(re.data.user.isPublic)

    }
    else {
      toast.error(re.data.message);
    }
  }

  


  const updateProfileData = async() => {
    const re = await axios.post("/api/settings/update-profile-data", {
      userId: UserId,
      name: name,
      username: username,
      bio: bio
    })
    if (re.data.type == "success"){
      toast.success(re.data.message);
      setName(re.data.user.name);
      setUsername(re.data.user.username);
      setBio(re.data.user.bio);

    }
    else {
      toast.error(re.data.message);
    }
  }

  const privacySettings = async() => {
    const re = await axios.post("/api/settings/update-privacy-settings", {
      userId: UserId,
      isPublic: isPublic
    })
    if (re.data.type == "success"){
      toast.success("Privacy settings saved");
      setIsPublic(re.data.user.isPublic==true?"public":"private");
    }
    else {
      toast.error(re.data.message);
    }
}

 const handleChange = async(value:string) => {
    setIsPublic(value);
    console.log("Selected Value:", value);
    const re = await axios.post("/api/settings/update-privacy-settings", {
      userId: UserId,
      isPublic: value=="public"?true:false
  });

  if (re.data.type == "success") {
    toast.success(re.data.message);
  }
  else {
    toast.error(re.data.message);
  }
 }
  useEffect(() => {
    getSocialMedia();
    getProfileData();
  }, [])
  
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
              <Input value={name} onChange={e=>setName(e.target.value)} id="name"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input  value={username} onChange={e=>setUsername(e.target.value)} id="username" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="dp">Bio</Label>
              <Textarea  value={bio} onChange={e=>setBio(e.target.value)} placeholder="Write your one-liner bio here" />
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
              <RadioGroup value={isPublic} onValueChange={handleChange}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="public" id="r1" />
        <Label htmlFor="r1">Pubic</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="private" id="r2" />
        <Label htmlFor="r2">Private</Label>
      </div>
    
    </RadioGroup>
            </div>
            
           
           
          </CardContent>
          <CardFooter>
            <Button onClick={privacySettings}>Save changes</Button>
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
              <Input value={facebook} onChange={e=>setFacebook(e.target.value)} id="facebook" placeholder={"facebook.com/psycho"} type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="current">Twitter/X:</Label>
              <Input  value={twitter} onChange={e=>setTwitter(e.target.value)} id="twitter" placeholder={"x.com/psycho"} type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="current">Medium:</Label>
              <Input  value={medium} onChange={e=>setMedium(e.target.value)} id="medium" placeholder={"medium.com/psycho"} type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="current">Substack:</Label>
              <Input value={substack} onChange={e=>setSubstack(e.target.value)} id="substack" placeholder={"substack.com/psycho"} type="text" />
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
