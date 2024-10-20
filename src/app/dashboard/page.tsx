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
import { Edit, FileText, PlusIcon, ThumbsUp, Trash2, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
export default function WriterAnalytics() {
  const analyticsData = {
    totalArticles: 42,
    totalViews: 150000,
    totalLikes: 7500,
    averageReadTime: 4.5,
  }

  const articles = [
    { id: 1, title: "The Future of AI", views: 12000, likes: 580, publishDate: "2023-08-01" },
    { id: 2, title: "10 Tips for Productive Writing", views: 8500, likes: 420, publishDate: "2023-07-15" },
    { id: 3, title: "Understanding Blockchain Technology", views: 10200, likes: 505, publishDate: "2023-06-30" },
    { id: 4, title: "The Impact of Social Media on Society", views: 15000, likes: 730, publishDate: "2023-06-10" },
    { id: 5, title: "Sustainable Living: A Beginner's Guide", views: 9800, likes: 490, publishDate: "2023-05-22" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-8">Dashboard</h1>
      <h1 className="text-center text-2xl font-bold mb-8">Welcome, {"Psycho"}</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.totalArticles}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.totalViews.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
            <ThumbsUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.totalLikes.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Read Time</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.averageReadTime} min</div>
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
              <TableHead>Views</TableHead>
              <TableHead>Likes</TableHead>
              <TableHead>Publish Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {articles.map((article) => (
              <TableRow key={article.id}>
                <TableCell className="font-medium">{article.title}</TableCell>
                <TableCell>{article.views.toLocaleString()}</TableCell>
                <TableCell>{article.likes.toLocaleString()}</TableCell>
                <TableCell>{article.publishDate}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="mr-2">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="text-destructive">
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