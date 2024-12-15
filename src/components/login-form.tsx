"use client"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import {useUserStore} from "@/store/store"
export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {SetIsLogin, SetUsername, SetEmail, SetUserId, SetRole} = useUserStore();
  const router = useRouter();
  const login = async() => {
    const data = {
      email: email,
      password: password
    }
    const response = await axios.post("/api/auth/login", data)
    console.log(response.data)

    if (response.data.type == "success"){
      toast.success(response.data.message);
      SetIsLogin(true);
      SetUsername(response.data.userData.username);
      SetEmail(response.data.userData.email);
      SetUserId(response.data.userData.userId);
      SetRole(response.data.userData.role)
      router.push("/dashboard")
    }
    else {
      toast.error(response.data.message);
    }

  }
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password"  value={password}
              onChange={e=>setPassword(e.target.value)} type="password" required />
          </div>
          <Button type="submit" onClick={login} className="w-full">
            Login
          </Button>
          
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
