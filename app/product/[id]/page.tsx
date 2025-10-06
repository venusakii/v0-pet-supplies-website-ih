import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import {
  Star,
  Heart,
  ShoppingCart,
  Share2,
  CheckCircle,
  Truck,
  Shield,
  RotateCcw,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const products = [
  {
    id: 1,
    name: "Abbylike 50 Pcs Puppy Supplies Starter Kit for Small Dogs",
    price: "$49.99",
    originalPrice: "$69.99",
    rating: 4.8,
    reviews: 1247,
    images: [
      "/abbylike-puppy-starter-kit-main.jpg",
      "/abbylike-puppy-kit-contents-spread.jpg",
      "/abbylike-puppy-accessories-detail.jpg",
      "/abbylike-puppy-toys-collection.jpg",
    ],
    badge: "Best Seller",
    category: "Starter Kits",
    description:
      "Complete starter kit with everything your new puppy needs including toys, treats, grooming supplies, and training aids. Perfect for first-time small dog owners.",
    features: [
      "50 Essential Items Included",
      "Training Pads (30 count)",
      "Variety of Chew Toys",
      "Complete Grooming Kit",
      "Food and Water Bowls",
      "Collar and Leash Set",
      "Training Treats",
      "Waste Bags (100 count)",
    ],
    specifications: {
      "Suitable for": "Small dogs up to 25 lbs",
      "Age Range": "8 weeks to 2 years",
      "Package Weight": "5.2 lbs",
      Dimensions: "18 x 12 x 8 inches",
      Material: "Various safe materials",
      Brand: "Abbylike",
    },
    pros: [
      "Excellent value for money with 50+ items",
      "High-quality materials that are safe for puppies",
      "Perfect starter kit for new dog owners",
      "Includes training guides and tips",
      "Great variety of toys to keep puppies engaged",
    ],
    cons: [
      "Some toys may be too small for larger small breeds",
      "Training pads could be thicker",
      "Storage container not included",
    ],
    expertReview: {
      overall: 4.8,
      quality: 4.7,
      value: 4.9,
      durability: 4.6,
      safety: 4.9,
      summary:
        "This comprehensive starter kit offers exceptional value for new small dog owners. The variety and quality of items included make it an excellent choice for getting everything you need in one purchase. While some individual items could be improved, the overall package provides great value and convenience.",
    },
    amazonLink: "https://amazon.com/dp/example123",
  },
  {
    id: 2,
    name: "Small Dog Harness and Leash Set - No Pull Design",
    price: "$24.99",
    originalPrice: "$34.99",
    rating: 4.6,
    reviews: 892,
    images: [
      "/small-dog-harness-and-leash-set.jpg",
      "/small-dog-harness-and-leash-set.jpg",
      "/small-dog-harness-and-leash-set.jpg",
      "/small-dog-harness-and-leash-set.jpg",
    ],
    badge: "Top Rated",
    category: "Harnesses & Leashes",
    description:
      "Comfortable no-pull harness designed specifically for small dogs. Features breathable mesh padding and reflective strips for safety during evening walks.",
    features: [
      "No-Pull Design",
      "Breathable Mesh Padding",
      "Reflective Safety Strips",
      "Adjustable Chest & Neck",
      "Easy Step-In Design",
      "Matching Leash Included",
      "Machine Washable",
      "Available in 5 Colors",
    ],
    specifications: {
      "Suitable for": "Small dogs 5-25 lbs",
      "Age Range": "12 weeks and up",
      "Package Weight": "0.8 lbs",
      Dimensions: "Adjustable sizing",
      Material: "Breathable mesh and nylon",
      Brand: "PuppyWalk",
    },
    pros: [
      "Excellent no-pull design reduces strain",
      "Very comfortable for extended wear",
      "High-quality materials and construction",
      "Reflective strips provide great visibility",
      "Easy to put on and take off",
    ],
    cons: ["Sizing can be tricky for some breeds", "Mesh may show dirt easily", "Leash could be slightly longer"],
    expertReview: {
      overall: 4.6,
      quality: 4.7,
      value: 4.5,
      durability: 4.8,
      safety: 4.9,
      summary:
        "An excellent harness for small dogs that prioritizes comfort and control. The no-pull design is effective and the quality construction ensures long-lasting use. While sizing requires careful measurement, the overall design and safety features make this a top choice for small dog owners.",
    },
    amazonLink: "https://amazon.com/dp/example456",
  },
  {
    id: 3,
    name: "Interactive Puzzle Toys for Small Dogs - Mental Stimulation Set",
    price: "$32.99",
    originalPrice: "$42.99",
    rating: 4.7,
    reviews: 654,
    images: [
      "/small-dog-puzzle-toys-and-treats.jpg",
      "/small-dog-puzzle-toys-and-treats.jpg",
      "/small-dog-puzzle-toys-and-treats.jpg",
      "/small-dog-puzzle-toys-and-treats.jpg",
    ],
    badge: "Editor's Choice",
    category: "Toys & Enrichment",
    description:
      "Set of 4 interactive puzzle toys designed to challenge and entertain small dogs. Helps reduce boredom, anxiety, and destructive behavior through mental stimulation.",
    features: [
      "4 Different Puzzle Types",
      "Adjustable Difficulty Levels",
      "Non-Slip Base Design",
      "Food-Safe Materials",
      "Easy to Clean",
      "Slow Feeding Benefits",
      "Reduces Anxiety",
      "Suitable for All Ages",
    ],
    specifications: {
      "Suitable for": "Small dogs up to 30 lbs",
      "Age Range": "3 months and up",
      "Package Weight": "2.1 lbs",
      Dimensions: "Various sizes included",
      Material: "BPA-free plastic",
      Brand: "SmartPup",
    },
    pros: [
      "Great variety of puzzle types",
      "Excellent for mental stimulation",
      "High-quality, durable materials",
      "Helps with slow feeding",
      "Easy to clean and maintain",
    ],
    cons: [
      "Some puzzles may be too easy for smart dogs",
      "Can be noisy on hard floors",
      "Requires supervision initially",
    ],
    expertReview: {
      overall: 4.7,
      quality: 4.6,
      value: 4.8,
      durability: 4.5,
      safety: 4.9,
      summary:
        "This puzzle toy set offers excellent mental stimulation for small dogs. The variety of difficulty levels and puzzle types ensures long-term engagement. While some dogs may master the puzzles quickly, the overall value and benefits for mental health make this a worthwhile investment.",
    },
    amazonLink: "https://amazon.com/dp/example789",
  },
  {
    id: 4,
    name: "Premium Small Dog Grooming Kit - Professional Grade",
    price: "$39.99",
    originalPrice: "$54.99",
    rating: 4.5,
    reviews: 423,
    images: [
      "/small-dog-grooming-kit.jpg",
      "/small-dog-grooming-kit.jpg",
      "/small-dog-grooming-kit.jpg",
      "/small-dog-grooming-kit.jpg",
    ],
    badge: "Professional",
    category: "Grooming",
    description:
      "Complete professional-grade grooming kit designed for small dogs. Includes everything needed for at-home grooming with salon-quality results.",
    features: [
      "Professional Slicker Brush",
      "Nail Clippers with Safety Guard",
      "Ear Cleaning Solution",
      "Dental Care Kit",
      "Grooming Scissors",
      "Microfiber Towels",
      "Storage Case Included",
      "Step-by-Step Guide",
    ],
    specifications: {
      "Suitable for": "Small dogs all breeds",
      "Age Range": "8 weeks and up",
      "Package Weight": "3.2 lbs",
      Dimensions: "12 x 8 x 4 inches",
      Material: "Stainless steel and plastic",
      Brand: "GroomPro",
    },
    pros: [
      "Professional-quality tools",
      "Complete grooming solution",
      "Excellent value for money",
      "Includes helpful guide",
      "Durable construction",
    ],
    cons: ["Learning curve for beginners", "Some tools may be large for tiny breeds", "Case could be more compact"],
    expertReview: {
      overall: 4.5,
      quality: 4.8,
      value: 4.3,
      durability: 4.7,
      safety: 4.6,
      summary:
        "A comprehensive grooming kit that brings professional-quality tools to home use. While there's a learning curve for beginners, the quality of the tools and the complete nature of the kit make it an excellent investment for small dog owners who want to maintain their pet's grooming at home.",
    },
    amazonLink: "https://amazon.com/dp/example101",
  },
  {
    id: 5,
    name: "Portable Travel Dog Bowls - Collapsible Set",
    price: "$18.99",
    originalPrice: "$24.99",
    rating: 4.4,
    reviews: 756,
    images: [
      "/portable-dog-bowls.jpg",
      "/portable-dog-bowls.jpg",
      "/portable-dog-bowls.jpg",
      "/portable-dog-bowls.jpg",
    ],
    badge: "Travel Essential",
    category: "Feeding",
    description:
      "Set of 2 collapsible silicone bowls perfect for travel, hiking, and outdoor adventures with your small dog. Lightweight, durable, and easy to clean.",
    features: [
      "2 Collapsible Bowls",
      "Food-Grade Silicone",
      "Lightweight Design",
      "Carabiner Clips Included",
      "Dishwasher Safe",
      "Multiple Color Options",
      "Compact Storage",
      "Non-Slip Base",
    ],
    specifications: {
      "Suitable for": "Small to medium dogs",
      Capacity: "12 oz each bowl",
      "Package Weight": "0.5 lbs",
      Dimensions: "5.1 x 5.1 x 2.2 inches",
      Material: "Food-grade silicone",
      Brand: "TravelPup",
    },
    pros: [
      "Extremely portable and lightweight",
      "High-quality food-grade materials",
      "Easy to clean and maintain",
      "Great value for the price",
      "Durable construction",
    ],
    cons: [
      "May tip over with enthusiastic eaters",
      "Silicone can retain odors over time",
      "Limited capacity for larger appetites",
    ],
    expertReview: {
      overall: 4.4,
      quality: 4.3,
      value: 4.6,
      durability: 4.2,
      safety: 4.7,
      summary:
        "These collapsible bowls are perfect for active dog owners who travel frequently. The convenience and portability are excellent, though they work best for calm eaters. The quality is good for the price point, making them a practical addition to any travel kit.",
    },
    amazonLink: "https://amazon.com/dp/example202",
  },
  {
    id: 6,
    name: "Small Dog Training Treats - Natural & Healthy",
    price: "$16.99",
    originalPrice: "$21.99",
    rating: 4.9,
    reviews: 1156,
    images: [
      "/small-dog-training-treats.jpg",
      "/small-dog-training-treats.jpg",
      "/small-dog-training-treats.jpg",
      "/small-dog-training-treats.jpg",
    ],
    badge: "Best Value",
    category: "Training & Treats",
    description:
      "Premium natural training treats made specifically for small dogs. Low-calorie, high-value rewards perfect for training sessions and positive reinforcement.",
    features: [
      "All-Natural Ingredients",
      "Small Bite Size",
      "Low Calorie Formula",
      "High Protein Content",
      "No Artificial Preservatives",
      "Grain-Free Recipe",
      "Resealable Bag",
      "Made in USA",
    ],
    specifications: {
      "Suitable for": "Small dogs all ages",
      Weight: "12 oz bag",
      Calories: "3 calories per treat",
      Protein: "28% minimum",
      Ingredients: "Chicken, sweet potato, peas",
      Brand: "PureTreats",
    },
    pros: [
      "Perfect size for small dogs",
      "High-quality natural ingredients",
      "Great for training motivation",
      "Low calorie count",
      "Dogs love the taste",
    ],
    cons: ["More expensive than generic treats", "Bag could be larger", "May crumble if handled roughly"],
    expertReview: {
      overall: 4.9,
      quality: 4.9,
      value: 4.8,
      durability: 4.7,
      safety: 5.0,
      summary:
        "These training treats set the gold standard for small dog rewards. The natural ingredients, perfect size, and irresistible taste make them ideal for training. While they cost more than generic options, the quality and effectiveness justify the price for serious training efforts.",
    },
    amazonLink: "https://amazon.com/dp/example303",
  },
]

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = products.find((p) => p.id === Number.parseInt(id))

  if (!product) {
    notFound()
  }

  const ratingDistribution = [
    { stars: 5, percentage: 65, count: 810 },
    { stars: 4, percentage: 25, count: 312 },
    { stars: 3, percentage: 7, count: 87 },
    { stars: 2, percentage: 2, count: 25 },
    { stars: 1, percentage: 1, count: 13 },
  ]

  const userReviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      date: "2 weeks ago",
      verified: true,
      title: "Perfect for our new Chihuahua!",
      content:
        "This kit had everything we needed for our new puppy. The toys are great quality and the training pads work well. Highly recommend for first-time dog owners!",
      helpful: 23,
      dogBreed: "Chihuahua",
    },
    {
      id: 2,
      name: "Mike R.",
      rating: 4,
      date: "1 month ago",
      verified: true,
      title: "Great value, minor issues",
      content:
        "Overall excellent kit with lots of useful items. Only complaint is that some toys are a bit small for my Yorkie, but everything else is perfect.",
      helpful: 18,
      dogBreed: "Yorkshire Terrier",
    },
    {
      id: 3,
      name: "Jennifer L.",
      rating: 5,
      date: "3 weeks ago",
      verified: true,
      title: "Exceeded expectations",
      content:
        "Amazing quality for the price. My Pomeranian loves all the toys and the grooming supplies are professional grade. Will definitely buy again!",
      helpful: 31,
      dogBreed: "Pomeranian",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-muted/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link href="/reviews" className="hover:text-primary">
              Reviews
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square relative overflow-hidden rounded-lg bg-muted">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{product.badge}</Badge>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square relative overflow-hidden rounded-lg bg-muted">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  {product.category}
                </Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-balance leading-tight">{product.name}</h1>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-primary">{product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-muted-foreground line-through">{product.originalPrice}</span>
                      <Badge variant="destructive">
                        Save{" "}
                        {Math.round(
                          ((Number.parseFloat(product.originalPrice.slice(1)) -
                            Number.parseFloat(product.price.slice(1))) /
                            Number.parseFloat(product.originalPrice.slice(1))) *
                            100,
                        )}
                        %
                      </Badge>
                    </>
                  )}
                </div>

                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">{product.description}</p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h3 className="font-semibold">Key Features:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Purchase Options */}
              <div className="space-y-4 p-6 bg-muted/20 rounded-lg">
                <div className="flex gap-3">
                  <Button size="lg" className="flex-1" asChild>
                    <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Buy on Amazon
                    </a>
                  </Button>
                  <Button size="lg" variant="outline">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4" />
                    <span>Free shipping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>Safe & secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RotateCcw className="h-4 w-4" />
                    <span>Easy returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Review Tabs */}
      <section className="py-12 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="review" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="review">Expert Review</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">User Reviews</TabsTrigger>
              <TabsTrigger value="qa">Q&A</TabsTrigger>
            </TabsList>

            <TabsContent value="review" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Expert Review</CardTitle>
                  <CardDescription>Professional assessment by our pet product experts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Rating Breakdown */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {Object.entries(product.expertReview).map(([key, value]) => {
                      if (key === "summary") return null
                      return (
                        <div key={key} className="text-center space-y-2">
                          <div className="text-2xl font-bold text-primary">{value}</div>
                          <div className="text-sm text-muted-foreground capitalize">{key}</div>
                        </div>
                      )
                    })}
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="font-semibold text-green-600">Pros</h4>
                    <ul className="space-y-2">
                      {product.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-orange-600">Cons</h4>
                    <ul className="space-y-2">
                      {product.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="h-4 w-4 rounded-full bg-orange-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Expert Summary</h4>
                    <p className="text-sm text-pretty leading-relaxed">{product.expertReview.summary}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications">
              <Card>
                <CardHeader>
                  <CardTitle>Product Specifications</CardTitle>
                  <CardDescription>Detailed technical information and requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border">
                        <span className="font-medium">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              {/* Rating Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Customer Reviews</CardTitle>
                  <CardDescription>{product.reviews} verified reviews</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary">{product.rating}</div>
                        <div className="flex items-center justify-center gap-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">Based on {product.reviews} reviews</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {ratingDistribution.map((rating) => (
                        <div key={rating.stars} className="flex items-center gap-3">
                          <span className="text-sm w-8">{rating.stars}★</span>
                          <Progress value={rating.percentage} className="flex-1" />
                          <span className="text-sm text-muted-foreground w-12">{rating.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Individual Reviews */}
              <div className="space-y-4">
                {userReviews.map((review) => (
                  <Card key={review.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{review.name}</span>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">
                                Verified Purchase
                              </Badge>
                            )}
                            <Badge variant="outline" className="text-xs">
                              {review.dogBreed}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{review.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-pretty leading-relaxed mb-4">{review.content}</p>
                      <div className="flex items-center gap-4">
                        <Button size="sm" variant="ghost" className="text-xs">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          Helpful ({review.helpful})
                        </Button>
                        <Button size="sm" variant="ghost" className="text-xs">
                          <ThumbsDown className="h-3 w-3 mr-1" />
                          Not helpful
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="qa">
              <Card>
                <CardHeader>
                  <CardTitle>Questions & Answers</CardTitle>
                  <CardDescription>Common questions about this product</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="font-medium">Q: Is this suitable for a 6-month-old Maltese?</h4>
                      <p className="text-sm text-muted-foreground pl-4">
                        A: Yes, this kit is perfect for small breeds like Maltese. The toys and accessories are sized
                        appropriately for dogs up to 25 lbs.
                      </p>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <h4 className="font-medium">Q: Are the training pads included absorbent enough?</h4>
                      <p className="text-sm text-muted-foreground pl-4">
                        A: The training pads are good quality but some customers prefer thicker ones. They work well for
                        small dogs and puppies.
                      </p>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <h4 className="font-medium">Q: How long do the toys typically last?</h4>
                      <p className="text-sm text-muted-foreground pl-4">
                        A: The durability varies by toy type, but most customers report the toys lasting 3-6 months with
                        regular use by small dogs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">You Might Also Like</h2>
              <p className="text-muted-foreground">Other products perfect for small dogs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.slice(0, 3).map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <img
                      src={relatedProduct.images?.[0] || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{relatedProduct.name}</CardTitle>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(relatedProduct.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">({relatedProduct.reviews})</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">{relatedProduct.price}</span>
                      <Button size="sm" asChild>
                        <Link href={`/product/${relatedProduct.id}`}>View</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
