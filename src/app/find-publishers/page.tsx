"use client"
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Book, Globe, Mail, Phone, User } from "lucide-react"
import Link from "next/link"

// Mock data for publishers
const publishers = [
  {
    id: 1,
    name: "Penguin Random House",
    description: "One of the world's largest book publishers, known for fiction and non-fiction titles.",
    website: "https://www.penguinrandomhouse.com",
    email: "contact@penguinrandomhouse.com",
    phone: "+1 (212) 366-2000",
    genres: ["Fiction", "Non-fiction", "Children's books"]
  },
  {
    id: 2,
    name: "HarperCollins",
    description: "A subsidiary of News Corp, publishing various genres including fiction, non-fiction, and children's books.",
    website: "https://www.harpercollins.com",
    email: "feedback@harpercollins.com",
    phone: "+1 (212) 207-7000",
    genres: ["Fiction", "Non-fiction", "Christian literature"]
  },
  {
    id: 3,
    name: "Simon & Schuster",
    description: "A subsidiary of Paramount Global, known for publishing both fiction and non-fiction books.",
    website: "https://www.simonandschuster.com",
    email: "contact@simonandschuster.com",
    phone: "+1 (212) 698-7000",
    genres: ["Fiction", "Non-fiction", "Children's books"]
  },
  {
    id: 4,
    name: "Hachette Book Group",
    description: "The U.S. publishing division of Hachette Livre, one of the world's largest publishers.",
    website: "https://www.hachettebookgroup.com",
    email: "customer.service@hbgusa.com",
    phone: "+1 (212) 364-1100",
    genres: ["Fiction", "Non-fiction", "Young adult"]
  },
  {
    id: 5,
    name: "Macmillan Publishers",
    description: "A global trade publishing company operating in over 70 countries.",
    website: "https://us.macmillan.com",
    email: "customerservice@mpsvirginia.com",
    phone: "+1 (646) 307-5151",
    genres: ["Fiction", "Non-fiction", "Academic"]
  },
]

export default function BookPublishers() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPublishers = publishers.filter(publisher =>
    publisher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    publisher.genres.some(genre => genre.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Find Book Publishers</h1>

      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search by publisher name or genre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPublishers.map((publisher) => (
          <Card key={publisher.id}>
            <CardHeader>
              <CardTitle>{publisher.name}</CardTitle>
              <CardDescription>{publisher.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
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
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div className="flex flex-wrap gap-2">
                {publisher.genres.map((genre, index) => (
                  <div key={index} className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm">
                    <Book className="inline-block mr-1 h-4 w-4" />
                    {genre}
                  </div>
                ))}
              </div>
              <Link href={`/publisher/${publisher.id}`} passHref>
                <Button className="w-full">
                  <User className="mr-2 h-4 w-4" />
                  View Profile
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredPublishers.length === 0 && (
        <div className="text-center mt-8">
          <p className="text-xl text-muted-foreground">No publishers found matching your search.</p>
        </div>
      )}
    </div>
  )
}