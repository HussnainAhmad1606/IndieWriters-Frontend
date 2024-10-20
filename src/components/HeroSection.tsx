import React from 'react'
import "@/css/heroSection.css"
import { Button } from './ui/button'
function HeroSection() {
  return (
    <div id='heroSection'>
        <h1 className='font-bold text-white text-5xl'>Where Every Story Finds Its Audience</h1>
        <p className='text-center text-white my-5'>
        Write, share, and explore powerful stories. Connect with readers who are ready to be inspired.
        </p>

        <Button variant={"outline"}>Get Started</Button>
    </div>
  )
}

export default HeroSection