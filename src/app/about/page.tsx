import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Psycho",
      role: "Founder & CEO",
      bio: "Psycho is a bestselling author with over 15 years of experience in the publishing industry.",
      image: "/psycho.png",
    },
    {
      name: "Michael Chen",
      role: "Head of Publisher Relations",
      bio: "Michael has worked with major publishing houses and brings invaluable industry connections.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Sarah Williams",
      role: "Lead Writing Coach",
      bio: "Sarah has helped hundreds of writers refine their craft and achieve their publishing goals.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "David Rodriguez",
      role: "Technology Director",
      bio: "David ensures our platform runs smoothly and continuously improves to meet writers' needs.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About IndieWriters</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          At IndieWriters, we believe that every writer has a unique voice that deserves to be heard. Our mission is to
          empower writers of all levels by providing them with the tools, resources, and connections they need to
          bring their stories to life and reach their audience.
        </p>
        <p className="text-lg">
          Whether you're a seasoned author or just starting your writing journey, IndieWriters is here to support you
          every step of the way. We're committed to fostering a vibrant community where creativity thrives and writers
          can connect with publishers, readers, and fellow wordsmiths.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Writing Resources</CardTitle>
            </CardHeader>
            <CardContent>
              Access a wealth of writing tips, tutorials, and workshops to hone your craft and overcome writer's block.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Publisher Connections</CardTitle>
            </CardHeader>
            <CardContent>
              Connect with reputable publishers actively seeking new talent and fresh stories across various genres.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Community Forums</CardTitle>
            </CardHeader>
            <CardContent>
              Engage with fellow writers, share your work, and participate in discussions about the art and business of writing.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Manuscript Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              Receive constructive feedback on your work from experienced editors and successful authors in your genre.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Writing Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              Participate in regular writing prompts and contests to spark your creativity and showcase your talent.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Publishing Guidance</CardTitle>
            </CardHeader>
            <CardContent>
              Navigate the publishing process with expert advice on query letters, book proposals, and self-publishing options.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>
                  <Badge variant="secondary" className="mt-1">
                    {member.role}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
        <p className="text-lg mb-4">
          Whether you're penning your first novel or you're a published author looking to connect with peers,
          IndieWriters is the place for you. Join our community today and take the next step in your writing journey.
        </p>
        <p className="text-lg">
          Have questions? We'd love to hear from you! Reach out to us at{' '}
          <a href="mailto:contact@indiewriters.com" className="text-blue-600 hover:underline">
            contact@indiewriters.com
          </a>
          .
        </p>
      </section>
    </div>
  )
}