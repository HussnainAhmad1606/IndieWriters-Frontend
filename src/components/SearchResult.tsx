import * as React from "react"

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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SearchResult({title, excerpt, author}:{title:string, excerpt:string, author:string}) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Written by: {author}</CardDescription>
        <CardDescription>{excerpt}</CardDescription>
      </CardHeader>
     
      <CardFooter className="flex justify-between">

        <Button>Read</Button>
      </CardFooter>
    </Card>
  )
}
