import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageCircle, HelpCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">Get in Touch</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Have questions about our reviews or need help finding the perfect product for your small dog? We're here
              to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="What can we help you with?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product-question">Product Question</SelectItem>
                        <SelectItem value="review-request">Review Request</SelectItem>
                        <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                        <SelectItem value="technical-issue">Technical Issue</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dogBreed">Your Dog's Breed (Optional)</Label>
                    <Input id="dogBreed" placeholder="e.g., Chihuahua, Yorkshire Terrier" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your question or how we can help..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground">
                  We're always happy to help fellow small dog parents. Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    content: "info@puppystore.com",
                    description: "Send us an email anytime",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "(555) 123-4567",
                    description: "Mon-Fri, 9AM-6PM EST",
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    content: "123 Pet Street, Dog City, DC 12345",
                    description: "Our headquarters",
                  },
                  {
                    icon: Clock,
                    title: "Response Time",
                    content: "Within 24 hours",
                    description: "We aim to respond quickly",
                  },
                ].map((contact, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <contact.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">{contact.title}</h3>
                      <p className="text-foreground">{contact.content}</p>
                      <p className="text-sm text-muted-foreground">{contact.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ Link */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    Frequently Asked Questions
                  </CardTitle>
                  <CardDescription>Find quick answers to common questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h4 className="font-medium text-sm">How do you test products?</h4>
                      <p className="text-xs text-muted-foreground">
                        We have a comprehensive testing process involving pet experts and real user feedback.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium text-sm">Do you accept product submissions?</h4>
                      <p className="text-xs text-muted-foreground">
                        Yes! Contact us with details about your small dog product for review consideration.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium text-sm">Are your reviews sponsored?</h4>
                      <p className="text-xs text-muted-foreground">
                        We maintain editorial independence. All sponsored content is clearly marked.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-balance">Other Ways to Connect</h2>
            <p className="text-muted-foreground">Join our community and stay updated</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="text-center">
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Join Our Community</CardTitle>
                <CardDescription>Connect with other small dog owners</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Join Facebook Group
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Newsletter</CardTitle>
                <CardDescription>Get weekly tips and product updates</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
