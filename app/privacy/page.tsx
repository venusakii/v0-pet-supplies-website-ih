import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 1, 2025</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At PuppyStore.com, we are committed to protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Information We Collect</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us through our contact form</li>
                  <li>Leave comments or reviews</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Automatically Collected Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device and
                  usage patterns, including:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referring website information</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Provide and maintain our website services</li>
                <li>Send you newsletters and marketing communications (with your consent)</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and user experience</li>
                <li>Analyze website usage and trends</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small
                data files stored on your device that help us remember your preferences and improve site functionality.
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Third-Party Services</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Amazon Associates Program</h3>
                <p className="text-muted-foreground leading-relaxed">
                  PuppyStore.com is a participant in the Amazon Services LLC Associates Program, an affiliate
                  advertising program designed to provide a means for sites to earn advertising fees by advertising and
                  linking to Amazon.com. When you click on Amazon links and make purchases, we may earn a commission.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Analytics Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use Google Analytics and other analytics services to understand how visitors interact with our
                  website. These services may collect information about your visits to help us improve our content and
                  user experience.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. However, no method of
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="text-muted-foreground">
                <p>Email: privacy@puppystore.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 123 Pet Street, Dog City, DC 12345</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
