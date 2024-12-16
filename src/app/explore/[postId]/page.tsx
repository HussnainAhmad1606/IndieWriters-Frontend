"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { useUserStore } from '@/store/store';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import { comment } from 'postcss';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
function page({params}:any) {

    const {postId} = params;

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [description, setDescription] = useState("")
    const [author, setAuthor] = useState("")
    const [tags, setTags] = useState([])


    const {UserId, Role} = useUserStore();

    const [comments, setComments] = useState([
      { id: 1, author: "Jane Smith", content: "Great article! Very insightful.", date: "April 16, 2023" },
      { id: 2, author: "Mike Johnson", content: "I'd love to see more examples of AI in web development.", date: "April 17, 2023" },
    ])
    const [newComment, setNewComment] = useState("")

    const handleCommentSubmit = async(e: React.FormEvent) => {
      e.preventDefault()
    
        const comment = {
          postId: postId, // In a real app, this would be the logged-in user
          user: UserId,
          content: newComment.trim()
        }

      
        const re = await axios.post("/api/comment/add-comment", comment);
        if (re.data.type == "success"){
          toast.success(re.data.message)
          setComments([...comments, comment])
          setNewComment("")
        }
        else {
          toast.error(re.data.message)
        }
      }


      const articleUpdate = async() => {
        const data = {
          postId: postId,
          title: title,
          description: description,
          tags: tags
        }
        const re = await axios.post("/api/posts/edit-post", data)
        if (re.data.type == "success"){
          toast.success(re.data.message)
        }
        else {
          toast.error(re.data.message)
        }
      }


      const getComments = async() => {
        const re = await axios.post("/api/comment/get-comments", {
          postId: postId
        })
        console.log(re.data)
        if (re.data.type == "success")
        {
          setComments(re.data.comments)
        }
        else {
          toast.error(re.data.message)
        }
      }
    

    const getPost = async() => {
      const post = await axios.post("/api/posts/get-single-post", {
        postId: postId
      })

      if (post.data.type == "success") {
        setTitle(post.data.post.title)
        setContent(post.data.post.content)
        setDescription(post.data.post.description)
        setAuthor(post.data.post.author)
        setTags(post.data.post.tags)
      }
      else {
        toast.error(post.data.message)
      }
    }

    useEffect(() => {
      getPost();
      getComments();
    }, [])
    
  return (
    <div className="container mx-auto px-4 py-8">
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{title}</CardTitle>
        <div className="flex items-center space-x-4 mt-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Author" />
            <AvatarFallback>{author.name?.substr(0,2)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{author.name}</p>
            <p className="text-sm text-muted-foreground">@{author.username}</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-2">Published on April 15, 2023</p>
      </CardHeader>
      <CardContent>
        
        <div 
        className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: content }} 
    />
        <Separator className="my-6" />
       {
        (author?._id==UserId || Role=='admin') && (
          <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-4">Edit Article</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Article Details</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Post title:
            </Label>
            <Input value={title} onChange={e=>setTitle(e.target.value)} id="name" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Post Description:
            </Label>
            <Input value={description} onChange={e=>setDescription(e.target.value)} id="name" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Post Tags:
            </Label>
            <Input value={tags} onChange={e=>setTags(e.target.value)} id="name" className="col-span-3" />
        </div>

            <Button onClick={articleUpdate}>Update</Button>
          </DialogContent>
        </Dialog>
        )
       }
        <Separator className="my-6" />
        <div className="flex flex-wrap gap-2">
          {
            tags.map((tag, index)=>{
              return (
                <Badge key={index} variant="secondary">{tag}</Badge>
              )
            })
          }
        
        </div>

        <Separator className="my-6" />
          <h3 className="text-2xl font-semibold mb-4">Comments</h3>
          <div className="space-y-4">
            {comments.map((comment) => (
              <Card key={comment._id}>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-semibold">{comment.user?.name}</p>
                    <p className="text-sm text-muted-foreground">{comment.date}</p>
                  </div>
                  <p>{comment.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Add New Comment Form */}
          <form onSubmit={handleCommentSubmit} className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Add a Comment</h4>
            <Textarea
              placeholder="Write your comment here..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="mb-2"
            />
            <Button type="submit">Post Comment</Button>
          </form>
      </CardContent>
    </Card>
  </div>
  )
}

export default page