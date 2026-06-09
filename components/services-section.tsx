"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight, Globe, Shield, Code, Search, Smartphone, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import type React from "react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    link: "/services/web-development",
    gradient: "from-blue-500 to-indigo-600",
    glow: "rgba(59,130,246,0.25)",
    bgGlow: "rgba(59,130,246,0.07)",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security audits and solutions.",
    link: "/services/cybersecurity",
    gradient: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.25)",
    bgGlow: "rgba(16,185,129,0.07)",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improve your online visibility and drive organic traffic to your website.",
    link: "/services/seo-optimization",
    gradient: "from-violet-500 to-purple-600",
    glow: "rgba(139,92,246,0.25)",
    bgGlow: "rgba(139,92,246,0.07)",
  },
  {
    icon: Globe,
    title: "AI Integration",
    description: "Leverage the power of artificial intelligence to enhance your digital products.",
    link: "/services/ai-integration",
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(6,182,212,0.25)",
    bgGlow: "rgba(6,182,212,0.07)",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    link: "/services/mobile-app-development",
    gradient: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.25)",
    bgGlow: "rgba(236,72,153,0.07)",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Efficient and scalable database solutions tailored to your specific needs.",
    link: "/services/database-design",
    gradient: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.25)",
    bgGlow: "rgba(245,158,11,0.07)",
  },
]

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

// 3D tilt card
function ServiceCard({
  service,
  index,
  isDark,
}: {
  service: (typeof services)[0]
  index: number
  isDark: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      variants={fadeIn}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      className="group relative"
    >
      <div
        className={cn(
          "relative rounded-2xl p-6 h-full transition-all duration-400 border overflow-hidden",
          isDark
            ? "bg-gray-900/60 backdrop-blur-md border-white/5 hover:border-white/10"
            : "bg-white/80 backdrop-blur-md border-gray-200/80 hover:border-violet-300/50",
        )}
        style={{
          boxShadow: isDark
            ? "0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.03)"
            : "0 4px 24px rgba(0,0,0,0.07), 0 0 0 1px rgba(255,255,255,0.9)",
        }}
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{ background: `radial-gradient(circle at 30% 30%, ${service.glow}, transparent 65%)` }}
        />

        {/* Shine sweep */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="absolute -inset-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/8 to-transparent skew-x-[-20deg] translate-x-[-200%] group-hover:translate-x-[400%] transition-transform duration-900" />
        </div>

        {/* Icon */}
        <motion.div
          className={cn(
            "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-5 shadow-lg",
            service.gradient,
          )}
          style={{ transform: "translateZ(20px)" }}
          whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
          transition={{ duration: 0.4 }}
        >
          <Icon className="h-6 w-6 text-white" />
        </motion.div>

        <div style={{ transform: "translateZ(10px)" }}>
          <h3 className="text-xl font-bold mb-3">{service.title}</h3>
          <p className={cn("text-sm leading-relaxed mb-5", isDark ? "text-gray-400" : "text-gray-500")}>
            {service.description}
          </p>
        </div>

        <Link
          href={service.link}
          className={cn(
            "inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 group/link",
            `bg-clip-text text-transparent bg-gradient-to-r ${service.gradient}`,
          )}
          style={{ transform: "translateZ(15px)" }}
        >
          Learn More
          <ArrowRight className={cn("h-4 w-4 transition-transform group-hover/link:translate-x-1.5", `text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`)} style={{ WebkitTextFillColor: "unset", color: "currentcolor" }} />
        </Link>

        {/* Bottom accent */}
        <div className={cn("absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r rounded-b-2xl", service.gradient)} />

        {/* Number watermark */}
        <div
          className={cn(
            "absolute top-4 right-4 text-5xl font-black opacity-[0.04] select-none",
            isDark ? "text-white" : "text-gray-900",
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "radial-gradient(ellipse at 80% 50%, rgba(99,102,241,0.06) 0%, transparent 60%)"
              : "radial-gradient(ellipse at 80% 50%, rgba(139,92,246,0.05) 0%, transparent 60%)",
          }}
        />
        <div className="blob w-[600px] h-[600px] -right-[300px] top-[10%] opacity-10 dark:opacity-5" />
        <div className="blob w-[500px] h-[500px] -left-[250px] bottom-[10%] opacity-10 dark:opacity-5" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-14"
        >
          {/* Heading */}
          <motion.div variants={fadeIn} className="text-center space-y-4 max-w-3xl mx-auto">
            <motion.span
              className={cn(
                "inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-2",
                isDark ? "border-violet-400/30 text-violet-400 bg-violet-400/10" : "border-violet-500/30 text-violet-600 bg-violet-500/10",
              )}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              What I Offer
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">My Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 mx-auto rounded-full" />
            <p className={cn("text-lg max-w-2xl mx-auto", isDark ? "text-gray-400" : "text-gray-500")}>
              Comprehensive digital solutions to help your business thrive in the digital landscape
            </p>
          </motion.div>

          {/* Cards grid */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} isDark={isDark} />
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeIn} className="flex justify-center">
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 text-white px-8 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-shadow duration-300 font-semibold"
              >
                <Link href="/services" className="flex items-center gap-2">
                  Explore All Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}