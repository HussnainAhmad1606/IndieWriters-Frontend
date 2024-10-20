"use client"
import { useEffect, useRef } from 'react';
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
const MyEditor = () => {
  const editorRef = useRef(null);

  const publishPost = async() => {
    toast.success("Post Published Successfully");
  }

  useEffect(() => {
    const quill = new Quill(editorRef.current, {
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
            <Input id="name" value="" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Post Description:
            </Label>
            <Input id="name" value="" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Post Tags:
            </Label>
            <Input id="name" value="" className="col-span-3" />
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
