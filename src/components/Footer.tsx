import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">IndieWriters</h2>
            <p className="text-muted-foreground">
              Empowering writers to write and publish content with ease
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-muted-foreground hover:text-foreground transition-colors">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com/PsychoTheCoder" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://github.com/hussnainahmad1606" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/hussnain-ahmad/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} IndieWriters. All rights reserved.</p>
          <p className="mt-2">
            Developed with ❤️ by{" "}
            <a href="https://github.com/hussnainahmad1606" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
             Psycho Coder
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}