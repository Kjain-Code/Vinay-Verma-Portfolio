import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, HardDrive, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PageHeader from "@/components/page-header"
import type { Metadata, Viewport } from "next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "Data Recovery Services | TechSpire Solutions - Vinay Verma",
  description:
    "Professional data recovery services for hard drives, SSDs, RAID arrays, and databases. Recover lost, deleted, or corrupted data fast. Serving clients in India, USA, UK, Canada, and Australia.",
  keywords: [
    "data recovery service India",
    "hard drive data recovery",
    "SSD data recovery",
    "RAID data recovery",
    "database recovery",
    "deleted file recovery",
    "corrupted data recovery",
    "data recovery specialist",
    "emergency data recovery",
    "data recovery freelancer",
    "affordable data recovery",
    "remote data recovery",
    "data recovery USA",
    "data recovery UK",
    "data recovery Canada",
  ],
  openGraph: {
    title: "Data Recovery Services | TechSpire Solutions",
    description:
      "Professional data recovery for hard drives, SSDs, RAID, and databases. Fast, reliable, and affordable.",
    type: "website",
  },
}

export default function DataRecoveryPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Data Recovery Services"
        description="Recover your lost, deleted, or corrupted data with expert precision"
      />

      {/* Service Overview */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Professional Data Recovery Solutions</h2>
              <div className="w-20 h-1 bg-primary"></div>
              <p className="text-muted-foreground">
                I provide expert data recovery services to help individuals and businesses retrieve lost, deleted, or
                corrupted data from hard drives, SSDs, RAID arrays, and databases. My approach combines advanced
                technical tools with hands-on expertise to maximize your data recovery success rate.
              </p>
              <p className="text-muted-foreground">
                Whether it's accidental deletion, hardware failure, ransomware attack, or system crash — I have the
                skills and tools to recover your critical data quickly and securely. Serving clients across India, USA,
                UK, Canada, and Australia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 transition-all duration-300">
                  <Link href="/contact">
                    Start Recovery Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:border-primary/50 transition-all duration-300"
                >
                  <a href="https://wa.me/916392493623" target="_blank" rel="noopener noreferrer">
                    WhatsApp for Emergency
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg border border-primary/10 bg-primary/5 flex items-center justify-center min-h-[300px]">
              <div className="text-center p-8 space-y-4">
                <HardDrive className="h-24 w-24 text-primary mx-auto opacity-80" />
                <p className="text-muted-foreground font-medium">Advanced Data Recovery Tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Services Offered</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground">
              Comprehensive data recovery for all storage types and failure scenarios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                  <HardDrive className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Drive Recovery</CardTitle>
                <CardDescription>Recover data from failed or damaged drives</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Hard disk drive (HDD) recovery",
                    "SSD data recovery",
                    "USB flash drive recovery",
                    "Memory card recovery",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <CardTitle>RAID & Server Recovery</CardTitle>
                <CardDescription>Enterprise-grade recovery for servers and RAID</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "RAID 0, 1, 5, 6, 10 recovery",
                    "NAS/SAN data recovery",
                    "Virtual machine recovery",
                    "Server crash recovery",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <CardTitle>Database & File Recovery</CardTitle>
                <CardDescription>Recover corrupted databases and deleted files</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "MySQL / PostgreSQL recovery",
                    "MongoDB database recovery",
                    "Deleted file recovery",
                    "Ransomware data restoration",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12">
        <div className="container">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Affordable Pricing</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground">Transparent pricing for all data recovery needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic */}
            <Card className="group hover:shadow-xl transition-all duration-500 border border-primary/10 hover:border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-muted px-3 py-1 text-xs font-medium rounded-bl-lg">Basic</div>
              <CardHeader className="pt-10">
                <CardTitle className="text-2xl">Essential Recovery</CardTitle>
                <div className="mt-4 flex items-baseline text-primary">
                  <span className="text-4xl font-extrabold tracking-tight">₹5,000</span>
                  <span className="ml-1 text-muted-foreground">onwards</span>
                </div>
                <CardDescription className="mt-4">For deleted files and simple drive failures</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Deleted file recovery",
                    "Logical drive failure",
                    "Basic HDD/SSD recovery",
                    "Up to 100GB data",
                    "3-5 business days",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 transition-all duration-300">
                  <a href="https://wa.me/916392493623?text=I'm%20interested%20in%20Essential%20Data%20Recovery" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* Popular */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-2 border-primary/30 hover:border-primary/50 relative overflow-hidden scale-105">
              <div className="absolute top-0 right-0 bg-primary px-3 py-1 text-xs font-medium text-white rounded-bl-lg">Popular</div>
              <CardHeader className="pt-10">
                <CardTitle className="text-2xl">Advanced Recovery</CardTitle>
                <div className="mt-4 flex items-baseline text-primary">
                  <span className="text-4xl font-extrabold tracking-tight">₹15,000</span>
                  <span className="ml-1 text-muted-foreground">onwards</span>
                </div>
                <CardDescription className="mt-4">For complex failures, RAID, and databases</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "RAID 0/1/5 recovery",
                    "Database recovery",
                    "Ransomware recovery",
                    "Up to 1TB data",
                    "Priority 24-48hr turnaround",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 transition-all duration-300">
                  <a href="https://wa.me/916392493623?text=I'm%20interested%20in%20Advanced%20Data%20Recovery" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* Enterprise */}
            <Card className="group hover:shadow-xl transition-all duration-500 border border-primary/10 hover:border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-muted px-3 py-1 text-xs font-medium rounded-bl-lg">Enterprise</div>
              <CardHeader className="pt-10">
                <CardTitle className="text-2xl">Enterprise Recovery</CardTitle>
                <div className="mt-4 flex items-baseline text-primary">
                  <span className="text-4xl font-extrabold tracking-tight">₹35,000</span>
                  <span className="ml-1 text-muted-foreground">onwards</span>
                </div>
                <CardDescription className="mt-4">Full-scale server and enterprise data recovery</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "RAID 6/10 + NAS/SAN",
                    "Virtual machine recovery",
                    "Unlimited data size",
                    "Emergency 12hr service",
                    "Post-recovery security audit",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 transition-all duration-300">
                  <a href="https://wa.me/916392493623?text=I'm%20interested%20in%20Enterprise%20Data%20Recovery" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-8 text-muted-foreground">
            <p>
              Need a custom recovery plan?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact me
              </Link>{" "}
              for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Client Testimonials</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground">What clients say about my data recovery services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { initials: "RK", name: "Rahul Kumar", location: "Mumbai, India", text: "Lost 3 years of project files after my hard drive crashed. Vinay recovered 98% of my data within 48 hours. Absolute lifesaver! His communication throughout was excellent and pricing was very fair." },
              { initials: "DT", name: "David Thompson", location: "New York, USA", text: "Our company's database got hit by ransomware and we thought everything was gone. Vinay not only recovered the data but also helped us implement better security. Highly professional service." },
              { initials: "PS", name: "Priya Singh", location: "Bangalore, India", text: "My SSD suddenly stopped being detected. Vinay diagnosed the issue remotely and walked me through the recovery process. Got back all my important documents and photos. Excellent service!" },
              { initials: "JM", name: "James Mitchell", location: "Sydney, Australia", text: "RAID 5 failure on our NAS server. Vinay handled the entire recovery professionally and remotely. His technical knowledge is impressive and he kept us updated at every step. All data recovered!" },
            ].map((t) => (
              <Card key={t.name} className="group hover:shadow-lg transition-all duration-300 border border-primary/10 hover:border-primary/30">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">{t.initials}</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{t.name}</CardTitle>
                      <CardDescription>{t.location}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">"{t.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 bg-primary/5 p-8 rounded-lg border border-primary/20">
            <h2 className="text-3xl font-bold tracking-tight">Lost Your Data? Let's Get It Back.</h2>
            <p className="text-muted-foreground">
              Don't panic — contact me immediately for a free assessment. The sooner we start, the higher the recovery success rate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-all duration-300">
                <Link href="/contact">Start Free Assessment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/20 hover:border-primary/50 transition-all duration-300">
                <a href="https://wa.me/916392493623" target="_blank" rel="noopener noreferrer">
                  Emergency WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}