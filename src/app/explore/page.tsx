import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Heart, MessageCircle, Share2, TrendingUp, UserPlus } from "lucide-react"

export default function WriterFeed() {
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
      },
      {
        id: 6,
        title: "Remote Work: Balancing Productivity and Wellness",
        excerpt: "As remote work becomes the new normal, finding balance between productivity and mental health is crucial...",
        author: {
          name: "James Peterson",
          avatar: "/placeholder-user.jpg",
          username: "jamesp",
        },
        tags: ["Remote Work", "Wellness"],
        likes: 145,
        comments: 34,
        shares: 28,
        date: "1d ago",
      },
      {
        id: 7,
        title: "How Digital Nomads are Redefining Work-Life Balance",
        excerpt: "With the world as their office, digital nomads are embracing new ways to blend work and travel...",
        author: {
          name: "Anna Kim",
          avatar: "/placeholder-user.jpg",
          username: "annak",
        },
        tags: ["Digital Nomads", "Travel"],
        likes: 163,
        comments: 39,
        shares: 40,
        date: "2d ago",
      },
      {
        id: 8,
        title: "Augmented Reality: Changing the Way We Experience the World",
        excerpt: "From gaming to education, augmented reality is changing how we interact with the world around us...",
        author: {
          name: "Ryan Thompson",
          avatar: "/placeholder-user.jpg",
          username: "ryant",
        },
        tags: ["AR", "Technology"],
        likes: 210,
        comments: 47,
        shares: 58,
        date: "3d ago",
      },
      {
        id: 9,
        title: "The Minimalist Lifestyle: Less is Truly More",
        excerpt: "In a world filled with noise and excess, minimalism is gaining popularity as a way to live with intention and clarity...",
        author: {
          name: "Jessica Nguyen",
          avatar: "/placeholder-user.jpg",
          username: "jessican",
        },
        tags: ["Minimalism", "Lifestyle"],
        likes: 195,
        comments: 44,
        shares: 52,
        date: "2d ago",
      },
      {
        id: 10,
        title: "The Rise of Plant-Based Diets and Their Environmental Impact",
        excerpt: "As more people shift to plant-based diets, the positive impact on the environment is becoming clear...",
        author: {
          name: "Oliver Wright",
          avatar: "/placeholder-user.jpg",
          username: "oliverw",
        },
        tags: ["Plant-Based", "Environment"],
        likes: 178,
        comments: 38,
        shares: 49,
        date: "1d ago",
      }
      
  ]

  const trendingTopics = ["#FlashFiction", "#MemoirMonday", "#PoetryPrompts", "#WritingCommunity", "#AmWriting"]

  
  const writersToFollow = [
    { name: "Alex Johnson", username: "alexj", avatar: "/placeholder-user.jpg", genre: "Sci-Fi" },
    { name: "Maria Garcia", username: "mariag", avatar: "/placeholder-user.jpg", genre: "Romance" },
    { name: "Jamal Williams", username: "jamalw", avatar: "/placeholder-user.jpg", genre: "Mystery" },
    { name: "Yuki Tanaka", username: "yukit", avatar: "/placeholder-user.jpg", genre: "Literary Fiction" },
    { name: "Olivia Brown", username: "oliviab", avatar: "/placeholder-user.jpg", genre: "Non-Fiction" },
  ]


  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Explore</h1>
          <Button>New Post</Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 flex gap-8">
        <section className="flex-grow">
          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <Avatar>
                      <AvatarImage src={post.author.avatar} alt={post.author.name} />
                      <AvatarFallback>{post.author.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{post.author.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">@{post.author.username}</p>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <Button variant="ghost" size="sm" className="flex gap-1">
                      <Heart className="w-4 h-4" />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="flex gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="flex gap-1">
                      <Share2 className="w-4 h-4" />
                      {post.shares}
                    </Button>
                  </div>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        <aside className="w-64">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Trending Topics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <ul className="space-y-2">
                  {trendingTopics.map((topic) => (
                    <li key={topic}>
                      <Button variant="link" className="text-primary">
                        {topic}
                      </Button>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="my-10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserPlus className="w-5 h-5" />
                Writers to Follow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <ul className="space-y-4">
                  {writersToFollow.map((writer) => (
                    <li key={writer.username} className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={writer.avatar} alt={writer.name} />
                        <AvatarFallback>{writer.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-grow">
                        <p className="font-medium">{writer.name}</p>
                        <p className="text-sm text-muted-foreground">{writer.genre}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Follow
                      </Button>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>
        </aside>
      </main>
    </div>
  )
}