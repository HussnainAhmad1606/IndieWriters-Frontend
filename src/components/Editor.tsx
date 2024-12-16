"use client"
import { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // import Quill theme
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
import Link from 'next/link';
import { Input } from './ui/input';
import { Label } from './ui/label';
import "@/css/editor.css";
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { Router } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/store';
const MyEditor = () => {
  const editorRef = useRef(null);

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState("")
  const [content, setContent] = useState("")
  const router = useRouter();
  const quillInstance = useRef(null);

  const {UserId} = useUserStore();

  const publishPost = async() => {
    const quill = quillInstance.current;
    const delta = quill.getContents(); // Gets Delta format
    const html = quill.root.innerHTML; // Gets HTML content
    const text = quill.getText(); // Gets plain text

    console.log('Delta:', delta);
    console.log('HTML:', html);
    console.log('Text:', text);

    if (title == "" || description == "" || tags == "" || html == ""){
      toast.error("Please fill all the fields");
      return;
    }
    
    const data = {
      title: title, 
      description: description,
      tags: tags.split(","),
      content: html,
      author: UserId
    }

    console.log(data)

    const post = await axios.post("/api/posts/add-post", data);
    if (post.data.type == "success") {
      toast.success("Post Published Successfully");
      router.push(`/explore/${post.data.postId}`)
    }
    else {
      toast.error(post.data.message)
    }
  }

  useEffect(() => {
    quillInstance.current = new Quill(editorRef.current, {
      theme: 'snow', // or 'bubble'
      modules: {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block'],
        ]
      },
    });
  }, []);

  

  return (
  <div>
 <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">New Post</h1>
        
          <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
            Publish
        </Button>
      </DialogTrigger>
      <DialogContent style={{height: "80%",overflowY: "scroll"}} className="">
        <DialogHeader>
          <DialogTitle>Publish Post</DialogTitle>
       
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
        <DialogFooter>
          <Button onClick={publishPost} type="submit">Publish</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
        </div>
    <div ref={editorRef} style={{ height: '300px' }}></div>
  </div>
    )
  };

export default MyEditor;
