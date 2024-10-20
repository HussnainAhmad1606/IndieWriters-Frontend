import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { CalendarDays, MessageCircle, ThumbsUp } from "lucide-react"

export default function ArticlePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">The Future of Artificial Intelligence: Promises and Perils</h1>
          <div className="flex items-center text-muted-foreground">
            <span className="mr-4">Series: Tech Horizons</span>
            <CalendarDays className="w-4 h-4 mr-1" />
            <time dateTime="2023-08-15">August 15, 2023</time>
            <span className="ml-4 flex items-center">
              <MessageCircle className="w-4 h-4 mr-1" />
              <span>5 min read</span>
            </span>
          </div>
        </header>

        <section className="flex items-center mb-8">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Author" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold">Dr. Psycho</h2>
            <p className="text-muted-foreground">CEO @PsychoDevs</p>
          </div>
        </section>

        <section className="mb-12">
          <p>
            Artificial Intelligence (AI) stands at the forefront of technological innovation, promising to revolutionize 
            industries, enhance decision-making processes, and improve our daily lives in ways we're only beginning to imagine. 
            From healthcare to finance, transportation to entertainment, AI's potential applications seem boundless.
          </p>
          <p>
            However, as we race towards an AI-driven future, we must also grapple with the ethical implications and potential 
            risks that come with this powerful technology. Questions of privacy, job displacement, and the possibility of AI 
            surpassing human intelligence (often referred to as "artificial general intelligence" or AGI) are just a few of 
            the concerns that researchers, policymakers, and ethicists are wrestling with.
          </p>
          <p>
            In this article, we'll explore both the promising advancements in AI and the challenges we face in ensuring its 
            responsible development and deployment. We'll delve into cutting-edge research, examine real-world applications, 
            and consider the societal impacts of widespread AI adoption.
          </p>
          {/* More paragraphs would go here */}
        </section>
        <section className="mt-12 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/psycho.png" alt="Dr. Jane Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-semibold">Dr. Psycho</h2>
                <p className="text-muted-foreground">CEO @PsychoDevs | UET 3rd year</p>
              </div>
            </CardHeader>
            <CardContent>
              <p>Dr. Psycho is a leading researcher in Artificial Intelligence, focusing on ethical AI development and its societal impacts. With over 15 years of experience in the field, she has published numerous papers and spoken at conferences worldwide.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View Profile</Button>
            </CardFooter>
          </Card>
        </section>
      <Separator className="my-8" />

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Commenter" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">Alice Brown</h3>
              <p className="text-sm text-muted-foreground">Posted 2 hours ago</p>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Fascinating article! I'm particularly intrigued by the ethical considerations surrounding AI development. 
              How do you think we can ensure that AI benefits all of humanity rather than exacerbating existing inequalities?
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="mr-2">
              <ThumbsUp className="w-4 h-4 mr-2" />
              Like
            </Button>
            <Button variant="ghost" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              Reply
            </Button>
          </CardFooter>
        </Card>

        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Commenter" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">Mark Smith</h3>
              <p className="text-sm text-muted-foreground">Posted 1 day ago</p>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Great overview of the current state of AI. I'd love to see more discussion on the potential job market 
              disruptions and how we can prepare for them. Are there any industries you think will be particularly affected?
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="mr-2">
              <ThumbsUp className="w-4 h-4 mr-2" />
              Like
            </Button>
            <Button variant="ghost" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              Reply
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Add a comment</h3>
          </CardHeader>
          <CardContent>
            <Textarea placeholder="Type your comment here." />
          </CardContent>
          <CardFooter>
            <Button>Post Comment</Button>
          </CardFooter>
        </Card>
      </section>
      </article>
    </div>
  )
}