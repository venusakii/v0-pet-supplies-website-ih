import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Star, ShoppingCart, CheckCircle, Truck, Shield, RotateCcw, ThumbsUp, ThumbsDown } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const products = [
  {
    id: 1,
    slug: "small-dog-harness-leash-set",
    name: "BEAUTYZOO Reflective Extra Small Dog Harness and Leash Set",
    price: "$19.99",
    originalPrice: "$29.99",
    rating: 4.5,
    reviews: 1500,
    images: [
      "https://m.media-amazon.com/images/I/81ZKULPp7vL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81ZKULPp7vL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81ZKULPp7vL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81ZKULPp7vL._AC_SX679_.jpg",
    ],
    badge: "Best Seller",
    category: "Harnesses",
    description:
      "Reflective harness and leash set for extra small dogs and cats, adjustable for comfort and safety during walks.",
    features: [
      "Reflective Material",
      "Adjustable Straps",
      "Soft Padding",
      "Quick Release Buckle",
      "Breathable Mesh",
      "Lightweight Design",
      "Multiple Color Options",
      "Easy to Clean",
    ],
    specifications: {
      "Suitable for": "Extra small dogs and cats 2-8 lbs",
      "Age Range": "8 weeks and up",
      "Package Weight": "0.6 lbs",
      Dimensions: "Adjustable 10-16 inches",
      Material: "Nylon and polyester mesh",
      Brand: "BEAUTYZOO",
    },
    pros: [
      "Highly reflective for night safety",
      "Comfortable fit for small breeds",
      "Easy adjustment and secure buckle",
      "Great value with matching leash",
      "Durable stitching and materials",
    ],
    cons: ["May run small for some breeds", "Leash could be slightly longer", "Mesh may collect hair easily"],
    expertReview: {
      overall: 4.5,
      quality: 4.6,
      value: 4.7,
      durability: 4.4,
      safety: 4.8,
      summary:
        "This harness and leash set excels in safety and comfort for extra small pets. The reflective features and adjustable design make it ideal for daily walks. While sizing requires careful measurement, the overall quality and affordability make it a top recommendation for small pet owners.",
    },
    amazonLink:
      "https://www.amazon.com/BEAUTYZOO-Reflective-Extra-Small-Dogs-Cats/dp/B0B188V41H/ref=sr_1_11?crid=3OYHHEF6TDPM5&dib=eyJ2IjoiMSJ9.tdMp_1hmmJiT6o7mwIGPx6DHTgYDIwbRb2R1ntGqUpRK0jvwKhny2OuKIkSURAnt-QbmC2ogeO9fqgWFmzlq8GsxxrJksBnKqWcXrGoZdk_xqJuGmH65lzXidHV-r4qtt2rUEqdMfihHg-BCYYmbRKdyls9EM0ux4EcPIKuvVjlajXH1LK9d0tO1Ux_r_BbnxyNgKq1ql-NxTZsqGzjPcZmpd3lmWSu8zXjCwHBYO5W5GS-P0ZktAr6PWGi2lt9jcMDLLVtfweaghno3rNo8-J3G5v8u_9aj3wDXFpwfRL0.bOzrbKgtSMGrjoa_v14UgpQzd0OkBW4CrmYVaegawuc&dib_tag=se&keywords=Small%2BDog%2BHarness%2Band%2BLeash%2BSet%2B-%2BAdjustable&qid=1759822682&sprefix=small%2Bdog%2Bharness%2Band%2Bleash%2Bset%2B-%2Badjustable%2Caps%2C753&sr=8-11&th=1",
  },
  {
    id: 2,
    slug: "puppy-supplies-starter-kit",
    name: "Abbylike 50 Pcs Puppy Supplies Starter Kit for Small Dogs",
    price: "$55.99",
    originalPrice: "$69.99",
    rating: 4.8,
    reviews: 1247,
    images: [
      "https://m.media-amazon.com/images/I/81Ei5upG6ZL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81Ei5upG6ZL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81Ei5upG6ZL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81Ei5upG6ZL._AC_SX679_.jpg",
    ],
    badge: "Best Seller",
    category: "Starter Kits",
    description:
      "Complete starter kit with everything your new puppy needs including toys, treats, grooming supplies, and training aids.",
    features: [
      "50 Essential Items",
      "Training Pads",
      "Chew Toys",
      "Grooming Kit",
      "Food and Water Bowls",
      "Collar and Leash",
      "Waste Bags",
      "Toys Variety Pack",
    ],
    specifications: {
      "Suitable for": "Small puppies up to 25 lbs",
      "Age Range": "8 weeks to 1 year",
      "Package Weight": "6.5 lbs",
      Dimensions: "18 x 12 x 10 inches",
      Material: "Various pet-safe materials",
      Brand: "Abbylike",
    },
    pros: [
      "Incredible value with 50+ items",
      "High-quality essentials included",
      "Perfect for new puppy owners",
      "Variety keeps puppies engaged",
      "Well-organized storage options",
    ],
    cons: ["Some items may be basic quality", "Large box requires storage space", "Not all items suit every breed"],
    expertReview: {
      overall: 4.8,
      quality: 4.7,
      value: 5.0,
      durability: 4.5,
      safety: 4.8,
      summary:
        "This starter kit provides exceptional value for new small dog owners, covering nearly every essential need. The variety and quantity of items make it ideal for beginners, though some pieces are basic. Overall, it's a comprehensive solution that saves time and money on individual purchases.",
    },
    amazonLink:
      "https://www.amazon.com/Abbylike-Starter-Essentials-Accessories-Supplies/dp/B0CQX6G5KN/ref=sr_1_1?crid=BDN6IWKVELFH&dib=eyJ2IjoiMSJ9.Bs-U5togfKT3F1lp5nQk6vwC3-PQOgMMYD8CfFuuRHjNAkPIPPed2S4pnu4jJMThbo6x3VdGiu94pjFLvlF5R2qosxeAtzn9rdcRzvwQGUrGqNKm80e1YV1Pr-8UdBEL.TA0NAOGExo5FnV6Ak81LdC9hWr_wvJ-bc9B9Ssq0tw8&dib_tag=se&keywords=Abbylike%2B50%2BPcs%2BPuppy%2BSupplies%2BStarter%2BKit%2Bfor%2BSmall%2BDogs&qid=1759822756&sprefix=abbylike%2B50%2Bpcs%2Bpuppy%2Bsupplies%2Bstarter%2Bkit%2Bfor%2Bsmall%2Bdogs%2Caps%2C256&sr=8-1&th=1",
  },
  {
    id: 3,
    slug: "luxury-dog-bed-memory-foam",
    name: "NOAH & PAW Luxury Small Dog Bed with Memory Foam",
    price: "$79.99",
    originalPrice: "$99.99",
    rating: 4.7,
    reviews: 634,
    images: [
      "https://m.media-amazon.com/images/I/61rRm1L3oDL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/61rRm1L3oDL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/61rRm1L3oDL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/61rRm1L3oDL._AC_SY879_.jpg",
    ],
    badge: "Luxury",
    category: "Beds",
    description: "Orthopedic memory foam bed with waterproof cover, perfect for small dogs needing joint support.",
    features: [
      "Memory Foam with Cooling Gel",
      "Waterproof Lining",
      "Machine Washable",
      "Anti-Skid Bottom",
      "Raised Bolsters",
      "Removable Inner Cover",
      "Hidden Handle",
      "Faux Leather Exterior",
    ],
    specifications: {
      "Suitable for": "Small dogs up to 25 lbs",
      "Age Range": "All ages, especially seniors",
      "Package Weight": "8.5 lbs",
      Dimensions: "35 x 25 x 11 inches",
      Material: "Memory foam and faux leather",
      Brand: "NOAH & PAW",
    },
    pros: [
      "Excellent joint support for older dogs",
      "Waterproof protection is invaluable",
      "Easy to clean and maintain",
      "Stylish design matches home decor",
      "Cooling gel keeps pet comfortable",
    ],
    cons: ["Higher price point", "May be too large for tiny breeds", "Initial off-gassing odor"],
    expertReview: {
      overall: 4.7,
      quality: 4.8,
      value: 4.6,
      durability: 4.9,
      safety: 4.7,
      summary:
        "This luxury bed combines orthopedic support with stylish design, making it ideal for small dogs with joint issues. The waterproof features and cooling gel add practical value. While pricey, the premium materials and comfort level justify the investment for discerning pet owners.",
    },
    amazonLink:
      "https://www.amazon.com/NOAH-PAW-Orthopedic-Waterproof-Collection/dp/B0DS6HND4R/ref=sr_1_8?crid=1SXHO4DOPSAU0&dib=eyJ2IjoiMSJ9.yduOr2bc2ZJYJTX0c4hDfxoHAyF2Gu9snV6g1Wgg3FYqIG6bJ5c6xizgoAxXLtAPohcPKuKUODr_Lm2NTBEfoDsYjahqkrFhbjPPK6Q2RCjAQK5JtNL0tyg9pb_fUlyEST6cy50xiZzzhEJcrGeaOecmCLxv1ZTK7e6_lIHLE781nKpiNqJx1sBicXx2ACM-Fy5qzzPhSjWRaYUoBipYzsBIjUOCTrbFyikf54geO9HDHxfPP2RFcJFvlDecTr8ooROnoYUxnYXei_hwT-TCg2EhPTuogtZqmYrInprJQhk.j_dJPoU7wiK3aeOH0Kj0UT3cpI87JtmIiDkAKT-Z7Dw&dib_tag=se&keywords=Luxury%2BSmall%2BDog%2BBed%2Bwith%2BMemory%2BFoam&qid=1759822793&sprefix=luxury%2Bsmall%2Bdog%2Bbed%2Bwith%2Bmemory%2Bfoam%2Caps%2C730&sr=8-8&th=1",
  },
  {
    id: 4,
    slug: "interactive-puzzle-toys",
    name: "Vivifying Interactive Puzzle Toys for Mental Stimulation",
    price: "$15.19",
    originalPrice: "$18.99",
    rating: 4.6,
    reviews: 456,
    images: [
      "https://m.media-amazon.com/images/I/810qkxiJf8L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/810qkxiJf8L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/810qkxiJf8L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/810qkxiJf8L._AC_SX679_.jpg",
    ],
    badge: "New",
    category: "Toys",
    description: "Snuffle mat puzzle toy for dogs to encourage natural foraging and reduce boredom.",
    features: [
      "Mental Stimulation",
      "Slow Feeding",
      "Machine Washable",
      "Portable Design",
      "Felt Cloth Material",
      "Multiple Foraging Pockets",
      "Stress Relief Benefits",
      "Suitable for All Sizes",
    ],
    specifications: {
      "Suitable for": "Small to large dogs",
      "Age Range": "6 months and up",
      "Package Weight": "0.9 lbs",
      Dimensions: "26 x 16.5 inches",
      Material: "Felt cloth",
      Brand: "Vivifying",
    },
    pros: [
      "Excellent mental exercise tool",
      "Promotes natural foraging instinct",
      "Easy to wash and maintain",
      "Reduces destructive behavior",
      "Great for anxious dogs",
    ],
    cons: ["Not chew-proof material", "May need supervision initially", "Filling treats can be messy"],
    expertReview: {
      overall: 4.6,
      quality: 4.5,
      value: 4.7,
      durability: 4.3,
      safety: 4.6,
      summary:
        "This snuffle mat provides effective mental stimulation and helps with slow eating. The natural foraging design is engaging for most dogs, though it's not indestructible. It's an affordable, space-saving option for enrichment, particularly beneficial for bored or anxious small dogs.",
    },
    amazonLink:
      "https://www.amazon.com/Vivifying-Snuffle-Mat-Interactive-Stimulation/dp/B09WV4CJ8R/ref=sr_1_6?crid=2485VXPJM6ETK&dib=eyJ2IjoiMSJ9.efph-zp8ebiPoECJeTWZv57-Y7RahElkCbXJiAuejjNXF-YxY-iQ1URHuK-uLom5pzqUQiOkf4ba9BwCB8fHPXPvgLcs8PtZC0SFeZTKg3Em2di7zCe_M5iQRbLMYsbNMeOl-xt4zycugwFOy_D-i0H57k5hb5nowGVUijD6tP72CYlmfmnH6qaDoTDWwxN8sb_d3efZtnpjIZk4HQ0gJF7AlnR6eHiKqiIKInMh-lZFRp3mM-zO2wGvskvP-XQBn9lJkWpDPExb9rwYbHSQ6VZkEOShYB4Lokcj3XP7QLw.54xmL6SOR359TUNvMTbRlGsbvCq_gjNgkYwR-MLsIms&dib_tag=se&keywords=Interactive%2BPuzzle%2BToys%2Bfor%2BMental%2BStimulation&qid=1759822932&sprefix=interactive%2Bpuzzle%2Btoys%2Bfor%2Bmental%2Bstimulation%2Caps%2C798&sr=8-6&th=1",
  },
  {
    id: 5,
    slug: "small-dog-grooming-kit-professional",
    name: "oneisall Small Dog Grooming Kit - Professional Grade",
    price: "$39.99",
    originalPrice: "$49.99",
    rating: 4.7,
    reviews: 567,
    images: [
      "https://m.media-amazon.com/images/I/81hf8QPgAlL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81hf8QPgAlL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81hf8QPgAlL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81hf8QPgAlL._AC_SX679_.jpg",
    ],
    badge: "Professional",
    category: "Grooming",
    description: "Rechargeable grooming kit with clippers, brushes, and accessories for small dogs.",
    features: [
      "Low Noise Clippers",
      "Stainless Steel Blades",
      "Waterproof",
      "USB Rechargeable",
      "Multiple Guard Combs",
      "Cleaning Brush",
      "Storage Bag",
      "Long Battery Life",
    ],
    specifications: {
      "Suitable for": "Small dogs up to 20 lbs",
      "Age Range": "All ages",
      "Package Weight": "2.8 lbs",
      Dimensions: "7 x 2 x 1.5 inches (clippers)",
      Material: "Stainless steel and ABS plastic",
      Brand: "oneisall",
    },
    pros: [
      "Quiet operation doesn't scare pets",
      "Long-lasting battery life",
      "Sharp blades for clean cuts",
      "Complete accessory set",
      "Waterproof for easy cleaning",
    ],
    cons: [
      "Cordless mode has limited runtime",
      "May require practice for beginners",
      "Guard combs could be more durable",
    ],
    expertReview: {
      overall: 4.7,
      quality: 4.8,
      value: 4.6,
      durability: 4.7,
      safety: 4.8,
      summary:
        "This grooming kit delivers professional results at home with its quiet, powerful clippers. The waterproof design and comprehensive accessories make it user-friendly for small dog owners. While practice is needed for perfect cuts, it's a solid choice for regular at-home maintenance.",
    },
    amazonLink:
      "https://www.amazon.com/oneisall-Grooming-Rechargeable-Stainless-Waterproof/dp/B0C3LBYPMZ/ref=sr_1_5?crid=G6QA6NQO4IYX&dib=eyJ2IjoiMSJ9.XIYfVvdFd7jB5e8bNqY5CWEJZHAvtbMHyxSYdDGfhI6Fu5AlCf0K0mVGanh605B8ikoaqriIAfi4pvknxERQR3jsg1WlgjnRtEZF2UINXFdTECf5pzqIBOdHs-t3btAPbKxh4mMiYVDHRA_9Kr9I9y02qxPBirwjZWAdljsnYKhw58OVSNV_l7guB8erLhSjoiRQyZCHkV_DkgO5D-JQ8vXJhklF8p926GLikCyLN6B3DrmKPUU1yidIfTAYpbqZsbW_4TjCyeT032byhqAAA3fMFu7X0ilYc3KZGs3r43k.chFis1fwHgTPIJvRcBePAWy75sY_q4NQxk6-pvUXUn8&dib_tag=se&keywords=Small+Dog+Grooming+Kit+-+Professional+Grade&qid=1759822995&sprefix=small+dog+grooming+kit+-+professional+grade%2Caps%2C230&sr=8-5",
  },
  {
    id: 6,
    slug: "premium-dog-food-grain-free",
    name: "Stella & Chewy's Premium Small Dog Food - Grain Free",
    price: "$59.99",
    originalPrice: "$69.99",
    rating: 4.8,
    reviews: 723,
    images: [
      "https://m.media-amazon.com/images/I/613+6gefzFL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/613+6gefzFL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/613+6gefzFL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/613+6gefzFL._AC_SX679_.jpg",
    ],
    badge: "Premium",
    category: "Food",
    description: "Freeze-dried raw dinner patties with high protein beef recipe for puppies and dogs.",
    features: [
      "95% Beef & Organs",
      "Grain-Free",
      "Probiotics Added",
      "No Artificial Preservatives",
      "Complete & Balanced Nutrition",
      "Small Patties Easy to Serve",
      "High Protein 45%",
      "Made in USA",
    ],
    specifications: {
      "Suitable for": "Puppies and adult small dogs",
      "Age Range": "All life stages",
      "Package Weight": "25 oz",
      Dimensions: "10 x 8 x 3 inches",
      Ingredients: "Beef, organs, bone",
      Brand: "Stella & Chewy's",
    },
    pros: [
      "High protein for energy and muscle",
      "Dogs love the taste and texture",
      "Easy portion control",
      "Supports digestive health",
      "No fillers or by-products",
    ],
    cons: ["Higher price per serving", "Requires rehydration for some", "Messy if not portioned properly"],
    expertReview: {
      overall: 4.8,
      quality: 4.9,
      value: 4.6,
      durability: 4.7,
      safety: 4.9,
      summary:
        "Stella & Chewy's raw patties offer premium nutrition with real meat focus. The freeze-dried format preserves nutrients while being convenient. Though pricier, the quality and palatability make it worthwhile for health-conscious small dog owners seeking raw benefits without preparation hassle.",
    },
    amazonLink:
      "https://www.amazon.com/Stella-Freeze-Dried-StellaS-Patties-Grain-Free/dp/B0158VAVBS/ref=sr_1_8?crid=38S7LQRJHPT1S&dib=eyJ2IjoiMSJ9.UOCE01tPywGkUkgBYqMGy7GUaAzhKhjXakJKV41bZnVVHtjfPwZS5VIZ4O05VwSy_chB5wDax0IwuBLTmh9dtLlNOtZA6kkq-0VGDLX_9TCgZ-Ymr5FgSSJd3kyfomGtLoBJfv1Agr5LlsZ0g-nn5MXIx6zqfi3Mcc0yKJuW2gMmOG0NCgrwRd5m30HPVxYBN3ifMV6aAVcb6z94XOrQ2dCIybnXlEXmBE6etS0VKokDZe_rhv6W-9SKsg9BXookNvC_8o3S-DW1sNbIICrpS4DiFcZg4t19BmJm1LDWcXs.xcuANxbUt39zBxVehrdw314Mwg-a1uPKUrhWPqlde3U&dib_tag=se&keywords=Premium%2BSmall%2BDog%2BFood%2B-%2BGrain%2BFree&qid=1759823052&rdc=1&sprefix=premium%2Bsmall%2Bdog%2Bfood%2B-%2Bgrain%2Bfree%2Caps%2C257&sr=8-8&th=1",
  },
  {
    id: 7,
    slug: "stewart-small-dog-training-treats",
    name: "Stewart Small Dog Training Treats - Variety Pack",
    price: "$17.98",
    originalPrice: "$19.99",
    rating: 4.5,
    reviews: 389,
    images: [
      "https://m.media-amazon.com/images/I/714xz67a9VL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/714xz67a9VL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/714xz67a9VL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/714xz67a9VL._AC_SX679_.jpg",
    ],
    badge: "Training",
    category: "Treats",
    description: "Single ingredient freeze-dried treats perfect for training small dogs.",
    features: [
      "Single Ingredient",
      "Grain-Free",
      "Resealable Tub",
      "Made in USA",
      "Low Calorie",
      "High Protein",
      "Variety of Proteins",
      "Small Bite Size",
    ],
    specifications: {
      "Suitable for": "Small dogs all ages",
      "Age Range": "All life stages",
      "Package Weight": "14 oz",
      Dimensions: "6 x 4 x 4 inches",
      Ingredients: "Pure meat (liver, heart, etc.)",
      Brand: "Stewart",
    },
    pros: [
      "Pure single ingredient quality",
      "Perfect small size for training",
      "Dogs go crazy for the taste",
      "Long shelf life",
      "No fillers or additives",
    ],
    cons: ["Premium price for treats", "Limited variety in one pack", "Can be too rich for some stomachs"],
    expertReview: {
      overall: 4.5,
      quality: 4.8,
      value: 4.3,
      durability: 4.6,
      safety: 4.9,
      summary:
        "Stewart's single-ingredient treats are premium rewards for training. The pure meat composition ensures high palatability and nutrition. Though expensive, their effectiveness in training sessions and lack of fillers make them a favorite among professional trainers for small dogs.",
    },
    amazonLink:
      "https://www.amazon.com/Stewart-Ingredient-Resealable-Grain-Free-Gluten-Free/dp/B0002DGRSY/ref=sr_1_4?crid=1LBK4WCJQW1JU&dib=eyJ2IjoiMSJ9.tZlZcktEo6v9BZm3OeTaCkPCBFgwPUM7Tvyz8jXGUcndXiIUHnpvit-5tOsc8w0gFUP8KsEaj_g7EIlY_RSbsXb2y1Jc8jEmvJkUrr7x7nd5vaQ3cxW7r3J8ylRM6hmrzz67d4WtSJhDU3zdvYpOJZGY4ngCvaZ97GGbkcINXaXMuRiOWOG2lfJX8SC-RHEnqFDrcyLMYfNFG6DAFxJOXPOIiTw4xNnFUVXtfQXLGsRo3a5veK0Py0Eq0q2N6AQ8cBUdAdtJt8uMPLMnulMfnssRP3EHsvpM2E36i5wSV7k.EHhdXoEERDsU4cJgXN5TEH8_YSO_PAIJusblBw6NN8Y&dib_tag=se&keywords=Small%2BDog%2BTraining%2BTreats%2B-%2BVariety%2BPack&qid=1759823158&rdc=1&sprefix=small%2Bdog%2Btraining%2Btreats%2B-%2Bvariety%2Bpack%2Caps%2C281&sr=8-4&th=1",
  },
  {
    id: 8,
    slug: "old-mother-hubbard-training-treats",
    name: "Old Mother Hubbard Small Dog Training Treats - Variety Pack",
    price: "$17.98",
    originalPrice: "$19.99",
    rating: 4.6,
    reviews: 445,
    images: [
      "https://m.media-amazon.com/images/I/71fZRDUO+2L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71fZRDUO+2L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71fZRDUO+2L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71fZRDUO+2L._AC_SX679_.jpg",
    ],
    badge: "Training",
    category: "Treats",
    description: "P-Nuttier natural biscuits for training with peanut butter flavor.",
    features: [
      "All Natural",
      "Crunchy Texture",
      "No Artificial Preservatives",
      "Oven-Baked",
      "Peanut Butter Flavor",
      "Wheat Bran Base",
      "Large Size Biscuits",
      "Made Since 1926",
    ],
    specifications: {
      "Suitable for": "Small to large dogs",
      "Age Range": "All life stages",
      "Package Weight": "6 lbs",
      Dimensions: "12 x 10 x 8 inches",
      Ingredients: "Whole wheat, oatmeal, peanut butter",
      Brand: "Old Mother Hubbard",
    },
    pros: [
      "Classic peanut butter taste dogs love",
      "Crunchy texture helps clean teeth",
      "All-natural wholesome ingredients",
      "Great for training rewards",
      "Long-lasting freshness",
    ],
    cons: ["Contains wheat (not grain-free)", "Large size may need breaking", "Higher calorie count"],
    expertReview: {
      overall: 4.6,
      quality: 4.7,
      value: 4.8,
      durability: 4.5,
      safety: 4.6,
      summary:
        "Old Mother Hubbard's classic biscuits remain a favorite for their natural ingredients and appealing flavor. The crunchy texture aids dental health while serving as effective training rewards. Though not grain-free, their tradition and quality make them a reliable choice for everyday treats.",
    },
    amazonLink:
      "https://www.amazon.com/Old-Mother-Hubbard-P-Nuttier-Biscuits/dp/B084S9BYHS/ref=sr_1_9?crid=1HFPWJ2NXIHLM&dib=eyJ2IjoiMSJ9.tZlZcktEo6v9BZm3OeTaCkPCBFgwPUM7Tvyz8jXGUcndXiIUHnpvit-5tOsc8w0gFUP8KsEaj_g7EIlY_RSbsXb2y1Jc8jEmvJkUrr7x7nd5vaQ3cxW7r3J8ylRM6hmrzz67d4WtSJhDU3zdvYpOJZGY4ngCvaZ97GGbkcINXaXMuRiOWOG2lfJX8SC-RHEnqFDrcyLMYfNFG6DAFxJOXPOIiTw4xNnFUVXtfQXLGsRo3a5veK0Py0Eq0q2N6AQ8cBUdAdtJt8uMPLMnulMfnssRP3EHsvpM2E36i5wSV7k.EHhdXoEERDsU4cJgXN5TEH8_YSO_PAIJusblBw6NN8Y&dib_tag=se&keywords=Small%2BDog%2BTraining%2BTreats%2B-%2BVariety%2BPack&qid=1759823242&sprefix=small%2Bdog%2Btraining%2Btreats%2B-%2Bvariety%2Bpack%2Caps%2C271&sr=8-9&th=1",
  },
  {
    id: 9,
    slug: "portable-water-food-bowl-set",
    name: "Gorilla Grip Portable Water and Food Bowl Set",
    price: "$16.99",
    originalPrice: "$24.99",
    rating: 4.4,
    reviews: 298,
    images: [
      "https://m.media-amazon.com/images/I/51ib5pIOZML._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51ib5pIOZML._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51ib5pIOZML._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51ib5pIOZML._AC_SX679_.jpg",
    ],
    badge: "Travel",
    category: "Bowls",
    description: "Stainless steel bowls with silicone mat for no-spill feeding.",
    features: [
      "No Spill Silicone Mat",
      "Stainless Steel Bowls",
      "Dishwasher Safe",
      "Non-Skid",
      "BPA-Free Materials",
      "Elevated Design",
      "Easy Grip Handles",
      "Rust Resistant",
    ],
    specifications: {
      "Suitable for": "Small to medium dogs",
      Capacity: "20 oz each bowl",
      "Package Weight": "1.2 lbs",
      Dimensions: "10 x 7 x 4 inches",
      Material: "Stainless steel and silicone",
      Brand: "Gorilla Grip",
    },
    pros: [
      "Excellent no-spill performance",
      "Durable stainless steel construction",
      "Easy to clean in dishwasher",
      "Stable non-skid base",
      "Great for elevated feeding",
    ],
    cons: ["May be too heavy for travel", "Elevated height not for all sizes", "Mat can slip on smooth surfaces"],
    expertReview: {
      overall: 4.4,
      quality: 4.5,
      value: 4.6,
      durability: 4.7,
      safety: 4.3,
      summary:
        "Gorilla Grip's bowl set shines in preventing spills during meals. The stainless steel and silicone combination offers durability and ease of cleaning. While better suited for home use than travel, it's a practical solution for messy eaters among small dogs.",
    },
    amazonLink:
      "https://www.amazon.com/Gorilla-Grip-Dog-Bowls-Set/dp/B098BPM99P/ref=sr_1_7?crid=3ASBF55TOYL93&dib=eyJ2IjoiMSJ9.iDGowK1Z9sSOPbZcDB_GjTwQZUMV3vSs0rH9uVtILVzVo3APAkyZpQ63z7MY5taDDs1TcvAkBT4LHpyyVSK02FwwkrpYYuCikzm4gDIAeg8jtem4wrpgZeHmfYOoTbrGP5L89S3f7MIBN4u9UzPyILObTMZNtv9Rj5QHcbWuAaeXZSq5fQNhG8Mb2jSadpVR7oOygIhUVHGxX2b4_qYChPod4MHXqx8lrP7UJ2ddI1hBuWgp3y20d5HDP9XHYV1VBJ3rj1I7AmzNpcJ2dQkjLwOahJc4QAnYr8fzZ4xipp4.UXxkAItuUdRlg3Gd--iH33uMOXWdjvIuI8ArZuIhrgQ&dib_tag=se&keywords=Portable%2BWater%2Band%2BFood%2BBowl%2BSet&qid=1759823553&sprefix=portable%2Bwater%2Band%2Bfood%2Bbowl%2Bset%2Caps%2C251&sr=8-7&th=1",
  },
]

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
                <Button size="lg" className="w-full" asChild>
                  <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Buy on Amazon
                  </a>
                </Button>

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
                    <Button size="sm" variant="outline" className="w-full bg-transparent" asChild>
                      <Link href={`/product/${relatedProduct.slug}`}>View Details</Link>
                    </Button>
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
