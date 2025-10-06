"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Shield, Truck, Award, Users, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Premium Pet Supplies
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Everything Your
                  <span className="text-primary"> Small Dog </span>
                  Needs
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Discover carefully curated supplies and accessories for small dogs and puppies. From starter kits to
                  premium accessories, we help you give your furry friend the best.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/reviews">
                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/cute-small-puppy-with-accessories-and-toys.jpg"
                alt="Small puppy with accessories"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Why Choose PuppyStore?</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              We're dedicated to providing the best products and experience for small dog owners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Guaranteed",
                description: "Every product is carefully tested and reviewed for safety and durability.",
              },
              {
                icon: Truck,
                title: "Fast Shipping",
                description: "Quick delivery so your puppy gets their new supplies as soon as possible.",
              },
              {
                icon: Award,
                title: "Expert Reviews",
                description: "Detailed reviews from pet experts and real small dog owners.",
              },
              {
                icon: Heart,
                title: "Made with Love",
                description: "We understand the special bond between you and your small dog.",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-sm">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pretty">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Featured Products</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Top-rated supplies and accessories loved by small dog owners everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                slug: "puppy-supplies-starter-kit",
                name: "Puppy Starter Kit - 50 Pieces",
                price: "$49.99",
                rating: 4.8,
                reviews: 1247,
                image: "/puppy-starter-kit-with-toys-and-accessories.jpg",
                badge: "Best Seller",
              },
              {
                slug: "small-dog-harness-leash-set",
                name: "Small Dog Harness Set",
                price: "$24.99",
                rating: 4.9,
                reviews: 892,
                image: "/small-dog-harness-and-leash-set.jpg",
                badge: "Top Rated",
              },
              {
                slug: "interactive-puzzle-toys",
                name: "Interactive Puzzle Toys",
                price: "$19.99",
                rating: 4.7,
                reviews: 634,
                image: "/small-dog-puzzle-toys-and-treats.jpg",
                badge: "New",
              },
            ].map((product, index) => (
              <Link
                key={index}
                href={`/product/${product.slug}`}
                className="block"
                onClick={() => console.log(`[v0] Navigating to product ${product.slug}`)}
              >
                <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer h-full hover:scale-[1.02]">
                  <div className="relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 left-4">{product.badge}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{product.name}</CardTitle>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        View Details →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/reviews">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Shop by Category</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Find exactly what your small dog needs with our organized categories.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Toys & Entertainment",
                image: "/small-dog-toys-and-balls.jpg",
                count: "120+ items",
              },
              {
                name: "Food & Treats",
                image: "/small-dog-food-and-treats.jpg",
                count: "85+ items",
              },
              {
                name: "Collars & Leashes",
                image: "/small-dog-collars-and-leashes.jpg",
                count: "95+ items",
              },
              {
                name: "Beds & Comfort",
                image: "/small-dog-beds-and-blankets.jpg",
                count: "60+ items",
              },
            ].map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all cursor-pointer">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-sm font-medium group-hover:text-primary transition-colors">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-xs">{category.count}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">What Pet Parents Say</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Real reviews from happy customers and their beloved small dogs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                location: "New York, NY",
                review: "The puppy starter kit was perfect for our new Chihuahua! Everything we needed in one package.",
                rating: 5,
                dogName: "Bella",
              },
              {
                name: "Mike R.",
                location: "Austin, TX",
                review: "Great quality products and fast shipping. My Yorkie loves all the toys we ordered!",
                rating: 5,
                dogName: "Max",
              },
              {
                name: "Jennifer L.",
                location: "Seattle, WA",
                review: "Excellent customer service and the harness fits my Pomeranian perfectly. Highly recommend!",
                rating: 5,
                dogName: "Luna",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-pretty leading-relaxed">"{testimonial.review}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-primary">Pet parent to {testimonial.dogName}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Trusted by Thousands</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Join our community of happy pet parents who trust us with their small dogs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: Users,
                number: "50,000+",
                label: "Happy Customers",
              },
              {
                icon: Star,
                number: "4.9/5",
                label: "Average Rating",
              },
              {
                icon: CheckCircle,
                number: "99.8%",
                label: "Satisfaction Rate",
              },
              {
                icon: Award,
                number: "500+",
                label: "Products Reviewed",
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

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Stay Updated</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Get the latest product reviews, tips, and exclusive offers for small dog owners.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button>Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">No spam, unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Spoil Your Small Dog?</h2>
              <p className="text-xl text-primary-foreground/80 text-pretty">
                Browse our curated collection of premium supplies and accessories.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/reviews">
                  Shop All Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
