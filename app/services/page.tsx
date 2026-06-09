import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Shield, Search, Cpu, Smartphone, Database, HardDrive } from "lucide-react"
import PageHeader from "@/components/page-header"
import type { Metadata, Viewport } from "next"
import { Breadcrumb } from "@/components/breadcrumb"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "Digital Services - Web Development, Cybersecurity, SEO & Data Recovery",
  description:
    "Professional digital services by Vinay Verma including custom web development, cybersecurity consulting, ethical hacking, SEO optimization, data recovery, and AI integration for businesses worldwide.",
  keywords: [
    "web development services",
    "cybersecurity consulting",
    "ethical hacking services",
    "SEO optimization",
    "data recovery service",
    "digital marketing",
    "custom web applications",
    "security audit",
    "penetration testing",
    "React development",
    "Next.js development",
    "e-commerce development",
    "API development",
    "database design",
    "hard drive recovery",
  ],
  openGraph: {
    title: "Digital Services - Web Development, Cybersecurity, SEO & Data Recovery | TechSpire Solutions",
    description:
      "Professional digital services including web development, cybersecurity, SEO, and data recovery by expert developer Vinay Verma.",
    type: "website",
    images: ["/og-services.jpg"],
  },
  twitter: {
    title: "Digital Services - Web Development, Cybersecurity & SEO",
    description: "Professional digital services by Vinay Verma - web development, cybersecurity, SEO, and data recovery.",
  },
  alternates: {
    canonical: "/services",
  },
}

const services = [
  {
    icon: Code,
    title: "Web Development",
    desc: "Custom websites and web applications",
    body: "I build responsive, high-performance websites and web applications using modern technologies like React, Next.js, and Node.js. My solutions are tailored to meet your specific business needs and provide an exceptional user experience.",
    items: ["Custom website development", "Web application development", "E-commerce solutions", "Content management systems"],
    link: "/services/web-development",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Security audits and penetration testing",
    body: "I help businesses identify and fix security vulnerabilities in their websites and applications through comprehensive security audits and penetration testing. Protect your digital assets and customer data from cyber threats.",
    items: ["Security audits", "Penetration testing", "Vulnerability assessment", "Security best practices implementation"],
    link: "/services/cybersecurity",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Improve your online visibility",
    body: "I help businesses improve their search engine rankings and online visibility through comprehensive SEO strategies. Increase your organic traffic and reach more potential customers with effective SEO techniques.",
    items: ["On-page SEO optimization", "Off-page SEO strategies", "Keyword research and analysis", "SEO performance tracking"],
    link: "/services/seo-optimization",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    desc: "Enhance your applications with AI capabilities",
    body: "I help businesses integrate AI capabilities into their applications to enhance user experiences, automate processes, and gain valuable insights from data. Leverage the power of AI to stay ahead of the competition.",
    items: ["Chatbot development", "AI-powered content generation", "Data analysis and insights", "Process automation"],
    link: "/services/ai-integration",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform mobile applications",
    body: "I develop cross-platform mobile applications that work seamlessly on both iOS and Android devices. Reach your mobile audience with high-performance, feature-rich applications that provide an exceptional user experience.",
    items: ["React Native development", "Flutter development", "Native Android development", "App store submission and optimization"],
    link: "/services/mobile-app-development",
  },
  {
    icon: Database,
    title: "Database Design & Management",
    desc: "Efficient data storage and retrieval solutions",
    body: "I design and implement efficient database solutions that ensure optimal data storage, retrieval, and management. From relational databases to NoSQL solutions, I help you choose and implement the right database for your needs.",
    items: ["Database design and architecture", "Data migration and integration", "Performance optimization", "Database security implementation"],
    link: "/services/database-design",
  },
  {
    icon: HardDrive,
    title: "Data Recovery",
    desc: "Recover lost, deleted, or corrupted data",
    body: "I provide expert data recovery services for hard drives, SSDs, RAID arrays, and databases. Whether it's accidental deletion, hardware failure, or ransomware attack — I recover your critical data quickly and securely.",
    items: ["HDD & SSD data recovery", "RAID array recovery", "Database recovery", "Ransomware data restoration"],
    link: "/services/data-recovery",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumb items={[{ name: "Services", href: "/services" }]} />
      <PageHeader title="My Services" description="Comprehensive solutions for your digital needs" />

      {/* Services Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <Card key={s.title} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                  <CardHeader className="space-y-1">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{s.title}</CardTitle>
                    <CardDescription>{s.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{s.body}</p>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="group mt-2 w-full bg-transparent">
                      <Link href={s.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight">My Work Process</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground">A structured approach to delivering high-quality solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { num: "01", title: "Discovery", desc: "Understanding your requirements, goals, and challenges through detailed discussions and research." },
              { num: "02", title: "Planning", desc: "Creating a detailed roadmap and strategy for implementing the solution based on your requirements." },
              { num: "03", title: "Development", desc: "Building the solution using the latest technologies and best practices to ensure high quality and performance." },
              { num: "04", title: "Delivery", desc: "Testing, refining, and delivering the final solution, along with documentation and support." },
            ].map((step) => (
              <div key={step.num} className="text-center space-y-4 group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <span className="text-xl font-bold text-primary">{step.num}</span>
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 bg-primary/5 p-8 rounded-lg border border-primary/20">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Get Started?</h2>
            <p className="text-muted-foreground">
              Contact me today to discuss your project requirements and how I can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-all duration-300">
                <Link href="/contact">Request a Quote</Link>
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