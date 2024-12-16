"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CrownIcon, Facebook, Globe, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { toast } from "react-hot-toast"
// Mock data for a single publisher
const publisher = {
  id: 1,
  name: "Penguin Random House",
  logo: "/books/logo.png",
  description: "Penguin Random House is the international home to nearly 250 editorially and creatively independent publishing imprints.",
  website: "https://www.penguinrandomhouse.com",
  email: "contact@penguinrandomhouse.com",
  phone: "+1 (212) 366-2000",
  address: "1745 Broadway, New York, NY 10019, USA",
  socialMedia: {
    twitter: "https://twitter.com/penguinrandom",
    facebook: "https://www.facebook.com/PenguinRandomHouse",
    instagram: "https://www.instagram.com/penguinrandomhouse",
    linkedin: "https://www.linkedin.com/company/penguin-random-house"
  },
  publishedBooks: [
    { id: 1, title: "The Midnight Library", author: "Matt Haig", coverImage: "/books/1.jpg" },
    { id: 2, title: "Where the Crawdads Sing", author: "Delia Owens", coverImage: "/books/2.jpg" },
    { id: 3, title: "Atomic Habits", author: "James Clear", coverImage: "/books/3.jpg" },
  ],
  publishingCriteria: [
    "Original and compelling storytelling",
    "Strong, well-developed characters",
    "Clear and engaging writing style",
    "Marketable concept with broad appeal",
    "Professionally edited manuscript"
  ]
}

export default function PublisherView() {

  const [message, setMessage] = useState("");
  const apply = async() => {
    toast.success("Application submitted successfully")
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src={publisher.logo}
            alt={`${publisher.name} logo`}
            width={200}
            height={100}
            className="mr-4"
          />
          <div className="flex justify-center items-center">
          <h1 className="text-3xl font-bold">{publisher.name}</h1>
          <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className="ml-5" variant="default"><CrownIcon/> </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Premium Publisher</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
          </div>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-4">   Apply to Publish</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Apply for publish book</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Your message:
            </Label>
            <Input value={message} onChange={e=>setMessage(e.target.value)} id="name" className="col-span-3" />
        </div>
      
     

            <Button onClick={apply}>Update</Button>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>About {publisher.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{publisher.description}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center">
              <Globe className="mr-2 h-4 w-4" />
              <a href={publisher.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {publisher.website}
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              <a href={`mailto:${publisher.email}`} className="text-blue-500 hover:underline">
                {publisher.email}
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              <span>{publisher.phone}</span>
            </div>
            <p>{publisher.address}</p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      <Card>
        <CardHeader>
          <CardTitle>Publishing Criteria</CardTitle>
          <CardDescription>What we look for in manuscripts</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            {publisher.publishingCriteria.map((criterion, index) => (
              <li key={index}>{criterion}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Separator className="my-8" />

  

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Published Books</h2>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {publisher.publishedBooks.map((book) => (
            <Card key={book.id}>
              <CardContent className="pt-4">
                <Image
                  src={book.coverImage}
                  alt={`Cover of ${book.title}`}
                  width={130}
                  height={200}
                  className="mx-auto mb-2"
                />
                <h3 className="font-semibold text-center">{book.title}</h3>
                <p className="text-sm text-center text-muted-foreground">{book.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

   

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Social Media</h2>
        <div className="flex space-x-4">
          <a href={publisher.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
            <Twitter className="h-6 w-6" />
          </a>
          <a href={publisher.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
            <Facebook className="h-6 w-6" />
          </a>
          <a href={publisher.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
            <Instagram className="h-6 w-6" />
          </a>
          <a href={publisher.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  )
}