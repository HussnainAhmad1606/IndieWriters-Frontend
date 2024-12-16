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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"

import axios from "axios"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
export function SignupForm() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

  const accountCreate = async(role:string) => {
    if (username == "" || name == "" || email == "" || password == "") {
      toast.error("all fields are necessary");
      return;
    }

    if (validateEmail(email)) {
      console.log("Valid email address");
  } else {
      toast.error("Invalid email address");
  }

    const data = {
      username: username,
      name: name,
      email: email,
      password: password,
      role: role
    }
    const response = await axios.post("/api/auth/signup", data)
    console.log(role)
    if (response.data.type == "success"){
      toast.success(response.data.message);
      router.push("/login")
    }
    else {
      toast.error(response.data.message);
    }

  }
  return (
    <Tabs defaultValue="account" className="w-[700px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="reader">Reader</TabsTrigger>
        <TabsTrigger value="account">Writer</TabsTrigger>
        <TabsTrigger value="password">Publisher</TabsTrigger>
      </TabsList>
      <TabsContent value="reader">
        <Card>
          <CardHeader>
            <CardTitle>Signup as Reader</CardTitle>
            <CardDescription>
              Enter details to create your account as reader.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input value={name} onChange={(e)=>setName(e.target.value)} id="name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input value={email} onChange={(e)=>setEmail(e.target.value)} id="email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input value={username} onChange={(e)=>setUsername(e.target.value)} id="username" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={()=> {
              accountCreate("reader");
            }}>Create account</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Signup as Writer</CardTitle>
            <CardDescription>
              Enter details to create your account as writer.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input value={name} onChange={(e)=>setName(e.target.value)} id="name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input value={email} onChange={(e)=>setEmail(e.target.value)} id="email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input value={username} onChange={(e)=>setUsername(e.target.value)} id="username" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={()=> {
              accountCreate("writer");
            }}>Create account</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Signup as Publisher</CardTitle>
            <CardDescription>
              Enter details to create your account as publisher
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <div className="space-y-1">
              <Label htmlFor="name">Publisher Name</Label>
              <Input value={name} onChange={(e)=>setName(e.target.value)} id="name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Publisher Email</Label>
              <Input value={email} onChange={(e)=>setEmail(e.target.value)} id="email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input value={username} onChange={(e)=>setUsername(e.target.value)} id="username" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={()=> {
              accountCreate("publisher");
            }}>Create account</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
