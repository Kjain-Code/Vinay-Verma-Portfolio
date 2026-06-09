import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Star } from "lucide-react"
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
  title: "Web Development Services | TechSpire Solutions - Vinay Verma",
  description:
    "Custom websites and web applications built with React, Next.js, and Node.js. Serving clients in India, USA, UK, Canada, and Australia. Affordable and professional web development.",
  keywords: [
    "web development services India",
    "hire web developer India",
    "Next.js developer freelancer",
    "React developer India",
    "custom website development",
    "affordable web development",
    "e-commerce website India",
    "web developer Uttar Pradesh",
    "freelance web developer USA",
    "freelance web developer UK",
    "full stack developer hire",
    "Node.js developer",
    "responsive website design",
    "web app development",
  ],
  openGraph: {
    title: "Web Development Services | TechSpire Solutions",
    description: "Custom websites and web apps with React, Next.js, Node.js. Professional and affordable.",
    type: "website",
  },
}

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Web Development Services"
        description="Custom websites and web applications tailored to your business needs"
      />

      {/* Service Overview */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Custom Web Solutions</h2>
              <div className="w-20 h-1 bg-primary"></div>
              <p className="text-muted-foreground">
                I build responsive, high-performance websites and web applications using modern technologies like React,
                Next.js, and Node.js. My solutions are tailored to meet your specific business needs and provide an
                exceptional user experience.
              </p>
              <p className="text-muted-foreground">
                Whether you need a simple landing page, a complex e-commerce platform, or a custom web application, I
                have the expertise to deliver a solution that exceeds your expectations. Serving clients in India, USA,
                UK, Canada, Australia, and globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 transition-all duration-300">
                  <Link href="/contact">
                    Get a Quote
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
                    Contact on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg border border-primary/10">
              <Image
                src="/webdevelopment.jpg"
                alt="Web Development"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
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
              Comprehensive web development services to meet all your digital needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                title: "Custom Website Development",
                desc: "Tailored websites designed for your specific needs",
                items: ["Responsive design for all devices", "SEO-friendly structure", "Fast loading speeds", "Modern UI/UX design"],
              },
              {
                svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />,
                title: "E-Commerce Solutions",
                desc: "Complete online store development and management",
                items: ["Product catalog management", "Secure payment gateway integration", "Inventory management", "Order processing and tracking"],
              },
              {
                svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
                title: "Web Application Development",
                desc: "Custom web applications for complex business needs",
                items: ["Custom functionality development", "Database design and integration", "API development and integration", "User authentication and authorization"],
              },
            ].map((s) => (
              <Card key={s.title} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                <CardHeader className="space-y-1">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {s.svg}
                    </svg>
                  </div>
                  <CardTitle>{s.title}</CardTitle>
                  <CardDescription>{s.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12">
        <div className="container">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Affordable Pricing</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground">Transparent pricing options to suit your budget and requirements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-500 border border-primary/10 hover:border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-muted px-3 py-1 text-xs font-medium rounded-bl-lg">Basic</div>
              <CardHeader className="pt-10">
                <CardTitle className="text-2xl">Basic Website</CardTitle>
                <div className="mt-4 flex items-baseline text-primary">
                  <span className="text-4xl font-extrabold tracking-tight">₹15,000</span>
                  <span className="ml-1 text-muted-foreground">onwards</span>
                </div>
                <CardDescription className="mt-4">Perfect for small businesses and personal websites</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {["Up to 5 pages", "Responsive design", "Contact form", "Basic SEO setup", "1 month of support"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 transition-all duration-300">
                  <a href="https://wa.me/916392493623?text=I'm%20interested%20in%20the%20Basic%20Website%20package" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 border-2 border-primary/30 hover:border-primary/50 relative overflow-hidden scale-105">
              <div className="absolute top-0 right-0 bg-primary px-3 py-1 text-xs font-medium text-white rounded-bl-lg">Popular</div>
              <CardHeader className="pt-10">
                <CardTitle className="text-2xl">Business Website</CardTitle>
                <div className="mt-4 flex items-baseline text-primary">
                  <span className="text-4xl font-extrabold tracking-tight">₹30,000</span>
                  <span className="ml-1 text-muted-foreground">onwards</span>
                </div>
                <CardDescription className="mt-4">Ideal for growing businesses and organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {["Up to 10 pages", "Advanced responsive design", "Content management system", "Comprehensive SEO setup", "3 months of support"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 transition-all duration-300">
                  <a href="https://wa.me/916392493623?text=I'm%20interested%20in%20the%20Business%20Website%20package" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 border border-primary/10 hover:border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-muted px-3 py-1 text-xs font-medium rounded-bl-lg">Advanced</div>
              <CardHeader className="pt-10">
                <CardTitle className="text-2xl">E-Commerce / Custom</CardTitle>
                <div className="mt-4 flex items-baseline text-primary">
                  <span className="text-4xl font-extrabold tracking-tight">₹50,000</span>
                  <span className="ml-1 text-muted-foreground">onwards</span>
                </div>
                <CardDescription className="mt-4">For online stores and complex web applications</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {["Unlimited pages", "E-commerce functionality", "Payment gateway integration", "Advanced SEO and analytics", "6 months of support"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 transition-all duration-300">
                  <a href="https://wa.me/916392493623?text=I'm%20interested%20in%20the%20E-Commerce%20Custom%20package" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-8 text-muted-foreground">
            <p>
              Need a custom solution?{" "}
              <Link href="/contact" className="text-primary hover:underline">Contact me</Link>{" "}
              for a personalized quote.
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
            <p className="text-muted-foreground">What my clients say about my web development services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { initials: "RK", name: "Rahul Kumar", location: "Delhi, India", text: "Vinay developed an e-commerce website for my business that exceeded all my expectations. The site is fast, responsive, and has significantly increased my online sales. His attention to detail and technical expertise are impressive." },
              { initials: "JS", name: "John Smith", location: "New York, USA", text: "Working with Vinay was a pleasure. He understood our requirements perfectly and delivered a website that perfectly represents our brand. The site is not only beautiful but also performs exceptionally well. I highly recommend his services." },
              { initials: "AP", name: "Ananya Patel", location: "Mumbai, India", text: "Vinay created a custom web application for our startup that has streamlined our operations significantly. His technical skills and problem-solving abilities are outstanding. He was always responsive and made the development process smooth." },
              { initials: "LW", name: "Lisa Wong", location: "Singapore", text: "I hired Vinay to redesign our company website, and the results were fantastic. The new site is modern, user-friendly, and has received numerous compliments from our clients. Vinay is professional, talented, and delivers on time." },
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
            <h2 className="text-3xl font-bold tracking-tight">Ready to Start Your Web Project?</h2>
            <p className="text-muted-foreground">
              Let's discuss your requirements and create a website that perfectly suits your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-all duration-300">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/20 hover:border-primary/50 transition-all duration-300">
                <a href="https://wa.me/916392493623" target="_blank" rel="noopener noreferrer">WhatsApp Me</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}