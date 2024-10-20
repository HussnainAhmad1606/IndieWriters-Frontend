"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useEffect, useState} from "react"
import { Search } from "lucide-react"
import { SearchResult } from "./SearchResult"
export function SearchModal() {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const posts = [
        {
            id: 1,
            title: "AI and the Future of Creativity",
            excerpt: "As AI tools grow in power, how will they reshape the creative landscape? We explore the intersection of art and algorithms...",
            author: {
              name: "David Lee",
              avatar: "/placeholder-user.jpg",
              username: "davidl",
            },
            tags: ["AI", "Creativity"],
            likes: 230,
            comments: 57,
            shares: 60,
            date: "3d ago",
          },
          {
            id: 2,
            title: "The Renaissance of Handmade Crafts",
            excerpt: "In an era dominated by mass production, handmade crafts are making a comeback as people seek authenticity and personalization...",
            author: {
              name: "Emily Clark",
              avatar: "/placeholder-user.jpg",
              username: "emilyc",
            },
            tags: ["Crafts", "Handmade"],
            likes: 184,
            comments: 35,
            shares: 50,
            date: "2d ago",
          },
          {
            id: 3,
            title: "Blockchain Beyond Cryptocurrency",
            excerpt: "From healthcare to art, blockchain technology is finding applications far beyond cryptocurrency. Here's why you should care...",
            author: {
              name: "Michael Chen",
              avatar: "/placeholder-user.jpg",
              username: "michaelc",
            },
            tags: ["Blockchain", "Technology"],
            likes: 276,
            comments: 68,
            shares: 75,
            date: "5d ago",
          },
          {
            id: 4,
            title: "The Power of Poetry in the Digital Age",
            excerpt: "As screens dominate our lives, poetry finds new ways to touch souls and spark imagination...",
            author: {
              name: "Sophia Martinez",
              avatar: "/placeholder-user.jpg",
              username: "sophiam",
            },
            tags: ["Poetry", "Digital"],
            likes: 156,
            comments: 41,
            shares: 38,
            date: "1d ago",
          },
          {
            id: 5,
            title: "Sustainable Fashion: A New Era of Conscious Consumerism",
            excerpt: "Fast fashion is giving way to more sustainable choices as consumers demand better for the planet...",
            author: {
              name: "Lily Evans",
              avatar: "/placeholder-user.jpg",
              username: "lilye",
            },
            tags: ["Sustainability", "Fashion"],
            likes: 198,
            comments: 45,
            shares: 53,
            date: "4d ago",
          }
      ]


    const searchResults = async()=> {
        const results = posts.filter((post)=> post.title.includes(search) || post.excerpt.includes(search) || post.author.name.includes(search))

        // @ts-ignore
        setResult(results);
    }

      
      
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
            <Search/>
        </Button>
      </DialogTrigger>
      <DialogContent style={{height: "80%",overflowY: "scroll"}} className="">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
       
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
           
           <Input id="name" value={search} onChange={e=>setSearch(e.target.value)} className="col-span-3" />
           <Button onClick={searchResults} type="submit">Search</Button>

         </div>
        <div className="grid gap-4 py-4">
        

          {
            result.map((post, index)=> {
                return (
                    <>
                    <SearchResult key={index} title={post?.title} excerpt={post?.excerpt} author={post?.author.name}/>
                    </>
                )
            })

          }
          
        </div>
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}
