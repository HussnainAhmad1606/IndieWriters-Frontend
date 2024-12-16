"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { Separator } from "@/components/ui/separator"

import { Book, BookOpen, ChevronDown, Edit, Trash2, Users } from "lucide-react"
import { ChartComponent } from "@/components/Chart"

import { BookChart } from "@/components/BookChart"
import { CountryChart } from "@/components/CountryChart"
import { GenderChart } from "@/components/GenderChart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useUserStore } from "@/store/store"
import { useEffect, useState } from "react"
import { format } from "timeago.js"
// Mock data for the dashboard
const dashboardData = {
  totalWriters: 2,
  totalPublishers: 2,
  totalBooks: 0,
  totalUsers: 10,
  recentUsers: [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Writer" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Publisher" },
    { id: 3, name: "Carol Williams", email: "carol@example.com", role: "Reader" },
    { id: 4, name: "David Brown", email: "david@example.com", role: "Writer" },
    { id: 5, name: "Eva Davis", email: "eva@example.com", role: "Publisher" },
  ],
  monthlyStats: [
    { name: 'Jan', writers: 100, publishers: 5, books: 1000 },
    { name: 'Feb', writers: 120, publishers: 7, books: 1200 },
    { name: 'Mar', writers: 140, publishers: 8, books: 1400 },
    { name: 'Apr', writers: 160, publishers: 10, books: 1600 },
    { name: 'May', writers: 180, publishers: 12, books: 1800 },
    { name: 'Jun', writers: 200, publishers: 15, books: 2000 },
  ],
}

export default function AdminDashboard() {
  const [articles, setArticles] = useState([]);
  const [likes, setLikes] = useState(0);

  const {UserId, Username} = useUserStore();


  const getData = async() => {
    const re = await axios.post("/api/analytics/get-admin-analytics")

    console.log(re.data)

  if (re.data.type == "success") {
    setArticles(re.data.posts);
    let likes = 0;
    re.data.posts.forEach((post:any) => {
      likes += post.likes;
    });
    setLikes(likes);
  }
  else {
    toast.error(re.data.message)
  }
  }

  
  useEffect(() => {
    getData();
  }, [])
  const deletePost = async(postId:string) => {
    const re = await axios.post("/api/posts/delete-post", {
      postId:postId
    })

    if (re.data.type == "success") {
      toast.success(re.data.message)
      getData();
    }
    else {
      toast.error(re.data.message);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Writers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.totalWriters}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Publishers</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.totalPublishers}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Books</CardTitle>
            <Book className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.totalBooks}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.totalUsers}</div>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />


      <h1 className="text-center text-3xl font-bold mb-8">User Analytics</h1>



      <div className="grid gap-4 md:grid-cols-2 mb-8">
      <ChartComponent/>
      {/* <BookChart/> */}
      <CountryChart/>
      {/* <GenderChart/> */}
      </div>

      <Separator className="my-8" />


      <h1 className="text-center text-3xl font-bold mb-8">Content Management</h1>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Likes</TableHead>
              <TableHead>Publish Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {articles.map((article) => (
              <TableRow key={article._id}>
                <TableCell className="font-medium">{article.title}</TableCell>
                <TableCell>{article.likes.length}</TableCell>
                <TableCell>{format(article.createdAt)}</TableCell>
                <TableCell className="text-right">
                 
                  <Button onClick={()=> {
                    deletePost(article._id)
                  }} variant="ghost" size="icon" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

    </div>
  )
}