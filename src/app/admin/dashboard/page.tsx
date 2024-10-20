import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { Separator } from "@/components/ui/separator"

import { Book, BookOpen, ChevronDown, Edit, Trash2, Users } from "lucide-react"
import { ChartComponent } from "@/components/Chart"

import { BookChart } from "@/components/BookChart"
import { CountryChart } from "@/components/CountryChart"
import { GenderChart } from "@/components/GenderChart"
// Mock data for the dashboard
const dashboardData = {
  totalWriters: 1250,
  totalPublishers: 85,
  totalBooks: 15000,
  totalUsers: 50000,
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
      <BookChart/>
      <CountryChart/>
      <GenderChart/>
      </div>

      <Separator className="my-8" />


      <h1 className="text-center text-3xl font-bold mb-8">Website Management</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>Manage user accounts and permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full mb-2">View All Users</Button>
            <Button className="w-full mb-2">Add New User</Button>
            <Button className="w-full">Manage Roles</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Management</CardTitle>
            <CardDescription>Manage books, articles, and publications</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full mb-2">Manage Books</Button>
            <Button className="w-full mb-2">Manage Articles</Button>
            <Button className="w-full">Review Submissions</Button>
          </CardContent>
        </Card>

       
      </div>

    </div>
  )
}