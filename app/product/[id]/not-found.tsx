import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="flex flex-col items-center justify-center py-32">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold">Product Not Found</h1>
          <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/reviews">Browse All Products</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
