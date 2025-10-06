import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Award, Users, Shield, Star, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit mx-auto">
              About PuppyStore
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">Dedicated to Small Dog Happiness</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              We're passionate about helping small dog owners find the perfect products for their beloved companions.
              Every product we review is carefully tested and evaluated by our team of pet experts.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-balance">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  PuppyStore was founded in 2020 by a team of small dog enthusiasts who were frustrated by the lack of
                  specialized resources for small breed owners. We noticed that most pet product reviews focused on
                  larger dogs, leaving small dog parents without reliable guidance.
                </p>
                <p>
                  Our mission is simple: to provide honest, detailed reviews of products specifically designed for or
                  suitable for small dogs. We test every product ourselves and gather feedback from real small dog
                  owners to ensure our recommendations are trustworthy and practical.
                </p>
                <p>
                  Today, we're proud to serve over 50,000 small dog families worldwide, helping them make informed
                  decisions about their pets' needs.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/about-us-team-with-small-dogs.jpg"
                alt="Our team with small dogs"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-balance">Our Values</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Everything we do is guided by our commitment to small dogs and their families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Love for Small Dogs",
                description: "We genuinely care about the wellbeing and happiness of small breed dogs.",
              },
              {
                icon: Shield,
                title: "Safety First",
                description: "Every product we recommend is thoroughly tested for safety and quality.",
              },
              {
                icon: Star,
                title: "Honest Reviews",
                description: "We provide unbiased, detailed reviews based on real testing and user feedback.",
              },
              {
                icon: Users,
                title: "Community Focus",
                description: "We build a supportive community of small dog owners sharing experiences.",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-sm">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pretty">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-balance">How We Review Products</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Our comprehensive review process ensures you get reliable, actionable information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Product Selection",
                description:
                  "We carefully select products based on popularity, innovation, and relevance to small dog owners.",
              },
              {
                step: "02",
                title: "Expert Testing",
                description:
                  "Our team of pet professionals tests each product for safety, durability, and effectiveness.",
              },
              {
                step: "03",
                title: "Real User Feedback",
                description:
                  "We gather feedback from actual small dog owners who have purchased and used the products.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold">{process.title}</h3>
                <p className="text-muted-foreground text-pretty">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-balance">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Passionate small dog owners and pet industry experts working together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & Chief Editor",
                bio: "Certified pet nutritionist with 10+ years experience. Proud mom to two Chihuahuas.",
                image: "/team-sarah-professional.jpg",
              },
              {
                name: "Mike Chen",
                role: "Product Testing Lead",
                bio: "Former veterinary technician specializing in small breed care. Owner of a rescue Yorkie.",
                image: "/team-mike-professional.jpg",
              },
              {
                name: "Emily Rodriguez",
                role: "Community Manager",
                bio: "Dog trainer and behaviorist focused on small breed training. Lives with three Pomeranians.",
                image: "/team-emily-professional.jpg",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-pretty">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-balance">Our Impact</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Numbers that show our commitment to the small dog community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                number: "50,000+",
                label: "Happy Customers",
                icon: Users,
              },
              {
                number: "500+",
                label: "Products Reviewed",
                icon: Award,
              },
              {
                number: "4.9/5",
                label: "Average Rating",
                icon: Star,
              },
              {
                number: "99.8%",
                label: "Satisfaction Rate",
                icon: CheckCircle,
              },
            ].map((stat, index) => (
              <div key={index} className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
