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
    slug: "slowton-pull-dog-harness-reflective",
    name: "SlowTon No Pull Dog Harness with Reflective",
    price: "$24.99",
    originalPrice: "$34.99",
    rating: 4.8,
    reviews: 1247,
    images: [
      "https://m.media-amazon.com/images/I/71umyN0HLqL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71umyN0HLqL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71umyN0HLqL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71umyN0HLqL._AC_SL1500_.jpg",
    ],
    badge: "Best Seller",
    category: "Harnesses",
    description:
      "Adjustable no-pull harness designed for small to medium dogs with reflective strips for enhanced visibility and safety during nighttime walks.",
    features: [
      "No-Pull Front Clip Design",
      "Reflective Strips for Visibility",
      "Fully Adjustable Straps",
      "Breathable Oxford Mesh",
      "Quick-Release Buckle",
      "Padded Chest Plate",
      "Lightweight and Durable",
      "Available in Multiple Sizes",
    ],
    specifications: {
      "Suitable for": "Small to medium dogs 10-50 lbs",
      "Age Range": "6 months and up",
      "Package Weight": "0.6 lbs",
      Dimensions: "Adjustable: Neck 16-24 in, Chest 15-28 in",
      Material: "Oxford fabric and nylon",
      Brand: "SlowTon",
    },
    pros: [
      "Effective no-pull mechanism reduces tugging",
      "Reflective features improve safety in low light",
      "Comfortable padding prevents chafing",
      "Easy to adjust and put on",
      "Durable construction holds up to daily use",
    ],
    cons: [
      "May fit loosely on very small breeds",
      "Limited color options",
      "Straps can stretch over time",
    ],
    expertReview: {
      overall: 4.8,
      quality: 4.7,
      value: 4.9,
      durability: 4.8,
      safety: 4.9,
      summary:
        "The SlowTon No Pull Harness stands out for its balance of comfort, safety, and affordability. The reflective strips and adjustable design make it ideal for active dogs, though minor sizing tweaks may be needed for the smallest breeds. Overall, it's a reliable choice for safer, stress-free walks.",
    },
    amazonLink: "https://www.amazon.com/SlowTon-Pull-Dog-Harness-Reflective/dp/",
  },
  {
    id: 2,
    slug: "abbylike-puppy-supplies-essentials-accessories",
    name: "Abbylike Puppy Supplies Essentials Accessories Christmas",
    price: "$49.99",
    originalPrice: "$69.99",
    rating: 4.9,
    reviews: 892,
    images: [
      "https://m.media-amazon.com/images/I/81MKazzaOUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81MKazzaOUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81MKazzaOUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81MKazzaOUL._AC_SL1500_.jpg",
    ],
    badge: "Top Rated",
    category: "Starter Kits",
    description:
      "Comprehensive puppy starter kit featuring holiday-themed essentials like toys, collars, treats, and grooming tools, ideal for welcoming a new small dog into your home.",
    features: [
      "Over 50 Essential Items",
      "Holiday Christmas Theme",
      "Training Pads and Treats",
      "Grooming Brushes and Nail Clippers",
      "Collar, Leash, and Toys",
      "Food and Water Bowls",
      "Waste Bag Dispenser",
      "Beginner Training Guide",
    ],
    specifications: {
      "Suitable for": "Puppies up to 20 lbs",
      "Age Range": "8 weeks to 1 year",
      "Package Weight": "4.8 lbs",
      Dimensions: "16 x 12 x 6 inches",
      Material: "Various pet-safe materials",
      Brand: "Abbylike",
    },
    pros: [
      "Incredible value with dozens of items",
      "Themed packaging adds festive fun",
      "All essentials for new puppy owners",
      "High-quality, durable components",
      "Includes helpful training resources",
    ],
    cons: [
      "Some items feel basic for the price",
      "Overwhelming quantity for minimalists",
      "Holiday theme may not appeal year-round",
    ],
    expertReview: {
      overall: 4.9,
      quality: 4.8,
      value: 5.0,
      durability: 4.7,
      safety: 4.9,
      summary:
        "This Abbylike starter kit is a game-changer for new puppy parents, bundling everything needed into one festive package. The variety and affordability shine, though the sheer volume might overwhelm some. It's the ultimate all-in-one solution for a joyful puppy welcome.",
    },
    amazonLink: "https://www.amazon.com/Abbylike-Supplies-Essentials-Accessories-Christmas/dp/",
  },
  {
    id: 3,
    slug: "faux-fur-orthopedic-dog-bed",
    name: "Faux Fur Orthopedic Dog Bed",
    price: "$45.99",
    originalPrice: "$59.99",
    rating: 4.7,
    reviews: 634,
    images: [
      "https://m.media-amazon.com/images/I/81Dn+G2Ml3L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81Dn+G2Ml3L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81Dn+G2Ml3L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81Dn+G2Ml3L._AC_SX679_.jpg",
    ],
    badge: "New",
    category: "Beds",
    description: "Plush faux fur orthopedic bed with supportive memory foam, designed for small dogs to promote joint health and provide cozy comfort during rest.",
    features: [
      "High-Density Memory Foam",
      "Luxurious Faux Fur Cover",
      "Removable and Washable",
      "Non-Slip Bottom Panel",
      "Raised Bolster Sides",
      "Water-Resistant Liner",
      "Multiple Size Options",
      "Easy Assembly",
    ],
    specifications: {
      "Suitable for": "Small dogs up to 25 lbs",
      "Age Range": "All ages, ideal for seniors",
      "Package Weight": "6.5 lbs",
      Dimensions: "24 x 18 x 6 inches",
      Material: "Faux fur, memory foam, polyester",
      Brand: "CozyPet",
    },
    pros: [
      "Excellent joint support for older dogs",
      "Super soft and inviting material",
      "Easy to clean and maintain",
      "Sturdy non-slip base",
      "Great value for orthopedic features",
    ],
    cons: [
      "Bulky when folded for storage",
      "Faux fur may shed initially",
      "Higher price for larger sizes",
    ],
    expertReview: {
      overall: 4.7,
      quality: 4.8,
      value: 4.6,
      durability: 4.7,
      safety: 4.8,
      summary:
        "This faux fur orthopedic bed combines luxury with practical support, making it a top pick for small dogs needing extra comfort. The washable design and foam quality impress, though initial shedding is a minor hiccup. It's a worthwhile investment for long-term pet wellness.",
    },
    amazonLink: "https://www.amazon.com/Faux-Fur-Orthopedic-Dog-Bed/dp/",
  },
  {
    id: 4,
    slug: "woof-pupsicle-long-lasting-distracted-fillable",
    name: "WOOF Pupsicle Long Lasting Distracted Fillable Toy",
    price: "$19.99",
    originalPrice: "$29.99",
    rating: 4.6,
    reviews: 456,
    images: [
      "https://m.media-amazon.com/images/I/71wyN1k7SeL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71wyN1k7SeL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71wyN1k7SeL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71wyN1k7SeL._AC_SX679_.jpg",
    ],
    badge: "Premium",
    category: "Toys",
    description: "Innovative fillable toy that freezes treats into a long-lasting puzzle, keeping small dogs mentally stimulated and cool on hot days.",
    features: [
      "Fillable with Treats or PB",
      "Freezable for Extended Play",
      "BPA-Free Durable Plastic",
      "Dishwasher Safe",
      "Non-Toxic Materials",
      "Soothes Teething Pains",
      "Reduces Boredom",
      "Compact Size for Small Dogs",
    ],
    specifications: {
      "Suitable for": "Small dogs up to 20 lbs",
      "Age Range": "4 months and up",
      "Package Weight": "0.4 lbs",
      Dimensions: "6 x 3 inches",
      Material: "Food-grade plastic",
      Brand: "WOOF",
    },
    pros: [
      "Keeps dogs occupied for hours",
      "Perfect for hot weather cooling",
      "Safe and easy to clean",
      "Encourages healthy chewing",
      "Affordable entertainment value",
    ],
    cons: [
      "Can be hard to fill initially",
      "Treats may stick if overfilled",
      "Not suitable for aggressive chewers",
    ],
    expertReview: {
      overall: 4.6,
      quality: 4.5,
      value: 4.7,
      durability: 4.4,
      safety: 4.8,
      summary:
        "The WOOF Pupsicle is a clever, cooling toy that excels at distraction and dental health for small dogs. Its freezable design provides lasting engagement, though filling takes practice. A smart, budget-friendly addition to any toy rotation.",
    },
    amazonLink: "https://www.amazon.com/WOOF-Pupsicle-Long-Lasting-Distracted-Fillable/dp/",
  },
  {
    id: 5,
    slug: "afloia-grooming-electric-clippers-shedding",
    name: "Afloia Dog Grooming Electric Clippers for Shedding",
    price: "$39.99",
    originalPrice: "$54.99",
    rating: 4.8,
    reviews: 723,
    images: [
      "https://m.media-amazon.com/images/I/71Kc9tVrMbL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71Kc9tVrMbL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71Kc9tVrMbL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71Kc9tVrMbL._AC_SX679_.jpg",
    ],
    badge: "Luxury",
    category: "Grooming",
    description: "Quiet, cordless electric clippers with multiple attachments for effortless at-home grooming and shedding reduction on small dogs.",
    features: [
      "Low-Noise Motor",
      "Cordless with Long Battery Life",
      "6 Guard Combs Included",
      "LED Battery Display",
      "Ergonomic Design",
      "Self-Sharpening Blades",
      "Storage Case",
      "Suitable for Sensitive Skin",
    ],
    specifications: {
      "Suitable for": "Small to medium dogs",
      "Age Range": "All ages",
      "Package Weight": "1.2 lbs",
      Dimensions: "7 x 1.5 inches",
      Material: "Stainless steel blades, plastic body",
      Brand: "Afloia",
    },
    pros: [
      "Very quiet, reduces pet anxiety",
      "Long runtime on a single charge",
      "Sharp blades for smooth cuts",
      "Includes all necessary accessories",
      "Comfortable to hold during use",
    ],
    cons: [
      "Battery life shorter on thicker fur",
      "Blades may heat up with prolonged use",
      "Not ideal for professional stylists",
    ],
    expertReview: {
      overall: 4.8,
      quality: 4.9,
      value: 4.7,
      durability: 4.8,
      safety: 4.7,
      summary:
        "Afloia's clippers make home grooming accessible and stress-free for small dog owners. The quiet operation and included combs are standout features, with only minor heat concerns during extended sessions. An essential tool for maintaining a tidy coat.",
    },
    amazonLink: "https://www.amazon.com/Afloia-Grooming-Electric-Clippers-Shedding/dp/",
  },
  {
    id: 6,
    slug: "orijen-original-biologically-appropriate-grain",
    name: "ORIJEN Original Biologically Appropriate Grain-Free Dry Dog Food",
    price: "$32.99",
    originalPrice: "$39.99",
    rating: 4.5,
    reviews: 389,
    images: [
      "https://m.media-amazon.com/images/I/71czxsp+JmL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71czxsp+JmL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71czxsp+JmL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71czxsp+JmL._AC_SX679_.jpg",
    ],
    badge: "Bundle",
    category: "Food",
    description: "Premium grain-free dry kibble packed with fresh, whole animal ingredients to mimic a natural diet for small breed dogs.",
    features: [
      "85% Quality Animal Ingredients",
      "Grain-Free and Low-Carb",
      "Fresh or Raw Regional Sources",
      "Small Kibble Size",
      "High in Protein",
      "No Fillers or Preservatives",
      "Supports Digestion",
      "Complete and Balanced Nutrition",
    ],
    specifications: {
      "Suitable for": "Small breed adult dogs",
      "Age Range": "1 year and up",
      "Package Weight": "4.5 lbs",
      Dimensions: "Bag: 10 x 6 x 3 inches",
      Protein: "38% minimum",
      Ingredients: "Chicken, turkey, fish, eggs",
      Brand: "ORIJEN",
    },
    pros: [
      "Nutrient-dense with real meat",
      "Promotes shiny coat and energy",
      "Small kibble easy to chew",
      "Allergy-friendly formula",
      "Veterinarian recommended",
    ],
    cons: [
      "Higher cost per bag",
      "Strong natural odor",
      "Transition period needed",
    ],
    expertReview: {
      overall: 4.5,
      quality: 4.9,
      value: 4.2,
      durability: 4.6,
      safety: 4.8,
      summary:
        "ORIJEN's biologically appropriate formula delivers top-tier nutrition for small dogs, with fresh ingredients that support overall health. The premium pricing reflects its quality, but picky eaters may need a gradual switch. A superior choice for discerning pet parents.",
    },
    amazonLink: "https://www.amazon.com/ORIJEN-Original-Biologically-Appropriate-Grain/dp/",
  },
  {
    id: 7,
    slug: "stewart-ingredient-resealable-grain-free-gluten-free",
    name: "Stewart Single Ingredient Resealable Grain-Free Gluten-Free Dog Treats",
    price: "$22.99",
    originalPrice: "$29.99",
    rating: 4.7,
    reviews: 567,
    images: [
      "https://m.media-amazon.com/images/I/714xz67a9VL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/714xz67a9VL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/714xz67a9VL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/714xz67a9VL._AC_SX679_.jpg",
    ],
    badge: "Professional",
    category: "Treats",
    description: "Pure, single-ingredient treats in a convenient resealable bag, grain-free and perfect for training or rewarding small dogs with sensitive stomachs.",
    features: [
      "Single Pure Ingredient",
      "Grain and Gluten-Free",
      "Resealable Freshness Bag",
      "All-Natural, No Additives",
      "High Protein Content",
      "Small Bite Sizes",
      "Made in USA",
      "Hypoallergenic Formula",
    ],
    specifications: {
      "Suitable for": "Small dogs with sensitivities",
      "Age Range": "All ages",
      "Package Weight": "14 oz",
      Dimensions: "Bag: 9 x 6 inches",
      Calories: "Low calorie per treat",
      Ingredients: "Pure freeze-dried liver",
      Brand: "Stewart",
    },
    pros: [
      "Minimal ingredients reduce allergies",
      "Keeps treats fresh longer",
      "Dogs go crazy for the flavor",
      "Versatile for training",
      "Excellent digestibility",
    ],
    cons: [
      "Pricey for the quantity",
      "Limited flavor variety",
      "Can be too crumbly",
    ],
    expertReview: {
      overall: 4.7,
      quality: 4.8,
      value: 4.5,
      durability: 4.4,
      safety: 4.9,
      summary:
        "Stewart's single-ingredient treats are a clean, effective reward for small dogs, especially those with dietary needs. The resealable packaging and pure quality are highlights, though the cost adds up quickly. Ideal for health-conscious treat time.",
    },
    amazonLink: "https://www.amazon.com/Stewart-Ingredient-Resealable-Grain-Free-Gluten-Free/dp/",
  },
  {
    id: 8,
    slug: "country-brook-premium-collar-leash",
    name: "Country Brook Premium Collar and Leash Set",
    price: "$28.99",
    originalPrice: "$39.99",
    rating: 4.4,
    reviews: 298,
    images: [
      "https://m.media-amazon.com/images/I/71O5UEXU1AL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71O5UEXU1AL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71O5UEXU1AL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71O5UEXU1AL._AC_SX679_.jpg",
    ],
    badge: "Travel",
    category: "Collars",
    description: "Heavy-duty nylon collar and matching leash set with metal hardware, built for durability and style in small, active dogs.",
    features: [
      "Premium Nylon Construction",
      "Quick-Release Plastic Buckle",
      "D-Ring for ID Tags",
      "Matching 4ft Leash",
      "Adjustable Sizing",
      "Multiple Pattern Options",
      "Rust-Proof Hardware",
      "Lightweight Yet Strong",
    ],
    specifications: {
      "Suitable for": "Small dogs 5-20 lbs",
      "Age Range": "All ages",
      "Package Weight": "0.5 lbs",
      Dimensions: "Collar: Adjustable 10-16 in, Leash: 4 ft",
      Material: "Nylon webbing, metal hardware",
      Brand: "Country Brook",
    },
    pros: [
      "Sturdy and weather-resistant",
      "Comfortable for all-day wear",
      "Attractive patterns available",
      "Easy to adjust and clean",
      "Great matching set value",
    ],
    cons: [
      "Buckle may slip on some collars",
      "Hardware feels heavy for tiny dogs",
      "Limited length options",
    ],
    expertReview: {
      overall: 4.4,
      quality: 4.5,
      value: 4.4,
      durability: 4.6,
      safety: 4.3,
      summary:
        "Country Brook's collar and leash set offers reliable everyday performance with stylish flair for small dogs. The durable nylon shines in rugged use, but buckle security could improve. A solid, affordable duo for casual outings.",
    },
    amazonLink: "https://www.amazon.com/Country-Brook-Premium-Collar-Leash/dp/",
  },
  {
    id: 9,
    slug: "anipaw-stainless-non-spill-non-skid-silicone",
    name: "Anipaw Stainless Steel Non-Spill Non-Skid Dog Bowl with Silicone",
    price: "$16.99",
    originalPrice: "$24.99",
    rating: 4.6,
    reviews: 445,
    images: [
      "https://m.media-amazon.com/images/I/61g2DNi8-HL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61g2DNi8-HL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61g2DNi8-HL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61g2DNi8-HL._AC_SX679_.jpg",
    ],
    badge: "Training",
    category: "Bowls",
    description: "Stainless steel bowl with anti-spill rim and non-skid silicone base to minimize mess and keep it in place for small, enthusiastic eaters.",
    features: [
      "Non-Spill Raised Rim",
      "Non-Skid Silicone Base",
      "Rust-Resistant Stainless Steel",
      "Dishwasher Safe",
      "BPA-Free Materials",
      "Wide Mouth for Easy Filling",
      "Elevated Design Option",
      "Available in Packs",
    ],
    specifications: {
      "Suitable for": "Small dogs up to 15 lbs",
      "Age Range": "All ages",
      Capacity: "20 oz",
      "Package Weight": "0.7 lbs",
      Dimensions: "6 x 6 x 3 inches",
      Material: "Stainless steel with silicone",
      Brand: "Anipaw",
    },
    pros: [
      "Reduces food scatter effectively",
      "Stable on all floor types",
      "Durable and easy to sanitize",
      "Affordable mess-free solution",
      "Comfortable elevated angle",
    ],
    cons: [
      "Base may collect dirt underneath",
      "Not fully spill-proof for liquids",
      "Size may be too small for some",
    ],
    expertReview: {
      overall: 4.6,
      quality: 4.6,
      value: 4.7,
      durability: 4.5,
      safety: 4.7,
      summary:
        "Anipaw's non-spill bowl tackles mealtime chaos head-on for small dogs, with its stable base and rim design proving practical. Cleaning is a breeze, though it shines more for dry kibble. A smart, low-cost upgrade for tidier feeding.",
    },
    amazonLink: "https://www.amazon.com/Anipaw-Stainless-Non-Spill-Non-Skid-Silicone/dp/",
  },
];

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

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
                      <p className="text-sm text-muted-foreground pl-4">{review.content}</p>
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
                        <Link href={`/product/${relatedProduct.slug}`}>View</Link>
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
