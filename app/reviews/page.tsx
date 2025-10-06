"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search, Filter, Heart, ShoppingCart, Eye } from "lucide-react"
import Link from "next/link"
import { useState, useMemo } from "react"

const products = [
  {
    id: 1,
    slug: "slowton-pull-dog-harness-reflective",
    name: "SlowTon No Pull Dog Harness with Reflective",
    price: "$24.99",
    originalPrice: "$34.99",
    rating: 4.8,
    reviews: 1247,
    image: "https://m.media-amazon.com/images/I/71umyN0HLqL._AC_SL1500_.jpg",
    badge: "Best Seller",
    category: "Harnesses",
    description:
      "Adjustable no-pull harness designed for small to medium dogs with reflective strips for safety during walks.",
    features: ["No Pull Design", "Reflective Strips", "Adjustable Straps", "Breathable Mesh"],
  },
  {
    id: 2,
    slug: "abbylike-puppy-supplies-essentials-accessories",
    name: "Abbylike Puppy Supplies Essentials Accessories Christmas",
    price: "$49.99",
    originalPrice: "$69.99",
    rating: 4.9,
    reviews: 892,
    image: "https://m.media-amazon.com/images/I/81MKazzaOUL._AC_SL1500_.jpg",
    badge: "Top Rated",
    category: "Starter Kits",
    description:
      "Comprehensive puppy starter kit including toys, collars, treats, and grooming essentials for new small dog owners.",
    features: ["50+ Essential Items", "Holiday Themed", "Training Aids", "Grooming Tools"],
  },
  {
    id: 3,
    slug: "faux-fur-orthopedic-dog-bed",
    name: "Faux Fur Orthopedic Dog Bed",
    price: "$45.99",
    originalPrice: "$59.99",
    rating: 4.7,
    reviews: 634,
    image: "https://m.media-amazon.com/images/I/81Dn+G2Ml3L._AC_SX679_.jpg",
    badge: "New",
    category: "Beds",
    description: "Luxurious faux fur orthopedic bed with memory foam support for small dogs' comfort and joint health.",
    features: ["Memory Foam", "Removable Washable Cover", "Non-Slip Bottom", "Faux Fur Top"],
  },
  {
    id: 4,
    slug: "woof-pupsicle-long-lasting-distracted-fillable",
    name: "WOOF Pupsicle Long Lasting Distracted Fillable Toy",
    price: "$19.99",
    originalPrice: "$29.99",
    rating: 4.6,
    reviews: 456,
    image: "https://m.media-amazon.com/images/I/71wyN1k7SeL._AC_SX679_.jpg",
    badge: "Premium",
    category: "Toys",
    description: "Fillable ice treat toy that keeps small dogs entertained and cool with long-lasting frozen treats.",
    features: ["Fillable Design", "BPA-Free", "Dishwasher Safe", "Soothes Teething"],
  },
  {
    id: 5,
    slug: "afloia-grooming-electric-clippers-shedding",
    name: "Afloia Dog Grooming Electric Clippers for Shedding",
    price: "$39.99",
    originalPrice: "$54.99",
    rating: 4.8,
    reviews: 723,
    image: "https://m.media-amazon.com/images/I/71Kc9tVrMbL._AC_SX679_.jpg",
    badge: "Luxury",
    category: "Grooming",
    description: "Cordless electric clippers with low noise for safe grooming and shedding control on small dogs.",
    features: ["Low Noise Motor", "Cordless Operation", "Multiple Guard Combs", "LED Display"],
  },
  {
    id: 6,
    slug: "orijen-original-biologically-appropriate-grain",
    name: "ORIJEN Original Biologically Appropriate Grain-Free Dry Dog Food",
    price: "$32.99",
    originalPrice: "$39.99",
    rating: 4.5,
    reviews: 389,
    image: "https://m.media-amazon.com/images/I/71czxsp+JmL._AC_SX679_.jpg",
    badge: "Bundle",
    category: "Food",
    description: "High-protein, grain-free dry food formulated for small breeds with fresh ingredients for optimal health.",
    features: ["Grain-Free", "High Protein", "Fresh Ingredients", "Small Kibble"],
  },
  {
    id: 7,
    slug: "stewart-ingredient-resealable-grain-free-gluten-free",
    name: "Stewart Single Ingredient Resealable Grain-Free Gluten-Free Dog Treats",
    price: "$22.99",
    originalPrice: "$29.99",
    rating: 4.7,
    reviews: 567,
    image: "https://m.media-amazon.com/images/I/714xz67a9VL._AC_SX679_.jpg",
    badge: "Professional",
    category: "Treats",
    description: "Pure single-ingredient treats in resealable pack, grain-free and ideal for training small dogs.",
    features: ["Single Ingredient", "Grain-Free", "Resealable Pack", "All-Natural"],
  },
  {
    id: 8,
    slug: "country-brook-premium-collar-leash",
    name: "Country Brook Premium Collar and Leash Set",
    price: "$28.99",
    originalPrice: "$39.99",
    rating: 4.4,
    reviews: 298,
    image: "https://m.media-amazon.com/images/I/71O5UEXU1AL._AC_SX679_.jpg",
    badge: "Travel",
    category: "Collars",
    description: "Durable nylon collar and matching leash set with quick-release buckle for small active dogs.",
    features: ["Durable Nylon", "Quick Release", "Adjustable", "Multiple Colors"],
  },
  {
    id: 9,
    slug: "anipaw-stainless-non-spill-non-skid-silicone",
    name: "Anipaw Stainless Steel Non-Spill Non-Skid Dog Bowl with Silicone",
    price: "$16.99",
    originalPrice: "$24.99",
    rating: 4.6,
    reviews: 445,
    image: "https://m.media-amazon.com/images/I/61g2DNi8-HL._AC_SX679_.jpg",
    badge: "Training",
    category: "Bowls",
    description: "Anti-spill stainless steel bowl with non-skid silicone base, perfect for messy eaters in small dogs.",
    features: ["Non-Spill Design", "Non-Skid Base", "Stainless Steel", "Dishwasher Safe"],
  },
]

export default function ReviewsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("rating")

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.features.some((feature) => feature.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory

      return matchesSearch && matchesCategory
    })

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "price-low":
          const priceA = Number.parseFloat(a.price.replace("$", ""))
          const priceB = Number.parseFloat(b.price.replace("$", ""))
          return priceA - priceB
        case "price-high":
          const priceA2 = Number.parseFloat(a.price.replace("$", ""))
          const priceB2 = Number.parseFloat(b.price.replace("$", ""))
          return priceB2 - priceA2
        case "reviews":
          return b.reviews - a.reviews
        case "newest":
          return b.id - a.id
        default:
          return 0
      }
    })

    return filtered
  }, [searchQuery, selectedCategory, sortBy])

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">Product Reviews</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Discover the best supplies and accessories for your small dog. Each product is carefully reviewed and
              tested by pet experts and real dog owners.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-muted/20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Starter Kits">Starter Kits</SelectItem>
                  <SelectItem value="Toys">Toys</SelectItem>
                  <SelectItem value="Food">Food</SelectItem>
                  <SelectItem value="Treats">Treats</SelectItem>
                  <SelectItem value="Harnesses">Harnesses</SelectItem>
                  <SelectItem value="Beds">Beds</SelectItem>
                  <SelectItem value="Grooming">Grooming</SelectItem>
                  <SelectItem value="Collars">Collars</SelectItem>
                  <SelectItem value="Bowls">Bowls</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span>{filteredAndSortedProducts.length} products found</span>
              <span className="text-primary font-medium">
                • Sorted by:{" "}
                {sortBy === "rating"
                  ? "Highest Rated"
                  : sortBy === "price-low"
                    ? "Price: Low to High"
                    : sortBy === "price-high"
                      ? "Price: High to Low"
                      : sortBy === "reviews"
                        ? "Most Reviews"
                        : sortBy === "newest"
                          ? "Newest"
                          : "Default"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAndSortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                  setSortBy("rating")
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <Badge variant="secondary">{product.badge}</Badge>
                      {product.originalPrice && (
                        <Badge variant="destructive" className="text-xs">
                          Save{" "}
                          {Math.round(
                            ((Number.parseFloat(product.originalPrice.slice(1)) -
                              Number.parseFloat(product.price.slice(1))) /
                              Number.parseFloat(product.originalPrice.slice(1))) *
                              100,
                          )}
                          %
                        </Badge>
                      )}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <CardHeader className="space-y-3">
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs w-fit">
                        {product.category}
                      </Badge>
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </CardTitle>
                    </div>

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
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                    </div>

                    <CardDescription className="text-sm text-pretty line-clamp-2">
                      {product.description}
                    </CardDescription>

                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {product.features.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{product.features.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1" asChild>
                        <Link href={`/product/${product.slug}`}>
                          <Eye className="h-4 w-4 mr-2" />
                          View Review
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredAndSortedProducts.length > 0 && (
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Load More Products
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-balance">Why Trust Our Reviews?</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Every product is thoroughly tested and reviewed by our team of pet experts and real small dog owners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Expert Testing</h3>
                <p className="text-sm text-muted-foreground">
                  Each product is tested by certified pet professionals for safety and quality.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Real Owner Reviews</h3>
                <p className="text-sm text-muted-foreground">
                  Verified reviews from actual small dog owners who purchased and used the products.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Detailed Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive reviews covering durability, value, and suitability for small breeds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
