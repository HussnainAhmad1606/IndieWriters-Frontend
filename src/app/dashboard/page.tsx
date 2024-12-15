"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useUserStore } from "@/store/store"
import { format } from 'timeago.js';

import axios from "axios"
import { Edit, FileText, PlusIcon, ThumbsUp, Trash2, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
export default function WriterAnalytics() {

  const {UserId, Username} = useUserStore();
  const [likes, setLikes] = useState(0);
  const [articles, setArticles] = useState([]);

  const getData = async() => {
    const re = await axios.post("/api/analytics/get-analytics", {
      userId:UserId
  })

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
  const analyticsData = {
    totalArticles: 42,
    totalViews: 150000,
    totalLikes: 7500,
    averageReadTime: 4.5,
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
      <h1 className="text-center text-3xl font-bold mb-8">Dashboard</h1>
      <h1 className="text-center text-2xl font-bold mb-8">Welcome, {Username}</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{articles.length}</div>
          </CardContent>
        </Card>
       
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
            <ThumbsUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{likes}</div>
          </CardContent>
        </Card>
   
      </div>

      <div className="my-5 flex justify-between items-center">
      <h2 className="text-2xl font-semibold mb-4">Published Articles</h2>

      <Button variant={"default"} asChild>
        
  <Link href="/posts/new-post"><PlusIcon/> New article</Link>
</Button>
      </div>

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