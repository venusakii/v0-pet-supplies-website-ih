import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 1, 2025</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using PuppyStore.com, you accept and agree to be bound by the terms and provision of
                this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Use License</h2>
              <p className="text-muted-foreground leading-relaxed">
                Permission is granted to temporarily download one copy of the materials on PuppyStore.com for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and
                under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on PuppyStore.com are provided on an 'as is' basis. PuppyStore makes no warranties,
                expressed or implied, and hereby disclaims and negates all other warranties including without
                limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Product Reviews and Recommendations</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our product reviews and recommendations are based on our testing, research, and user feedback. However:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Individual results may vary based on your specific dog and circumstances</li>
                <li>We are not responsible for any adverse reactions or issues with products</li>
                <li>Always consult with your veterinarian before introducing new products to your pet</li>
                <li>Product availability and pricing may change without notice</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Amazon Associates Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed">
                PuppyStore.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
                program designed to provide a means for sites to earn advertising fees by advertising and linking to
                Amazon.com. We may earn a commission from qualifying purchases made through our affiliate links at no
                additional cost to you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">User Content</h2>
              <p className="text-muted-foreground leading-relaxed">
                By submitting content to our website (reviews, comments, etc.), you grant us a non-exclusive,
                royalty-free, perpetual license to use, modify, and display such content. You are responsible for
                ensuring that your content does not violate any third-party rights or applicable laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Prohibited Uses</h2>
              <p className="text-muted-foreground leading-relaxed">You may not use our website:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>
                  To violate any international, federal, provincial, or state regulations, rules, laws, or local
                  ordinances
                </li>
                <li>
                  To infringe upon or violate our intellectual property rights or the intellectual property rights of
                  others
                </li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall PuppyStore or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on PuppyStore's website, even if PuppyStore or an authorized representative has
                been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Accuracy of Materials</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials appearing on PuppyStore.com could include technical, typographical, or photographic
                errors. PuppyStore does not warrant that any of the materials on its website are accurate, complete, or
                current. PuppyStore may make changes to the materials contained on its website at any time without
                notice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                PuppyStore has not reviewed all of the sites linked to our website and is not responsible for the
                contents of any such linked site. The inclusion of any link does not imply endorsement by PuppyStore of
                the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                PuppyStore may revise these terms of service for its website at any time without notice. By using this
                website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the United
                States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="text-muted-foreground">
                <p>Email: legal@puppystore.com</p>
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
