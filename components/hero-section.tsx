"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Code,
  Shield,
  Cpu,
  Globe,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import ProfessionalCoderScene from "@/components/professional-coder-scene"
import { useTheme } from "next-themes"

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const skills = [
  "Full-Stack Development",
  "Cybersecurity Expert",
  "SEO Optimization",
  "UI/UX Design",
  "Mobile App Development",
  "AI Integration",
]

// Floating orb component
function FloatingOrb({ x, y, size, color, delay }: { x: string; y: string; size: number; color: string; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: x, top: y, width: size, height: size, background: color, filter: "blur(60px)" }}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.15, 0.3, 0.15],
        x: [0, 30, -20, 0],
        y: [0, -20, 30, 0],
      }}
      transition={{ duration: 10 + delay * 2, repeat: Infinity, ease: "easeInOut", delay }}
    />
  )
}

// Particle dot
function Particle({ x, y, delay }: { x: number; y: number; delay: number }) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        background: isDark ? "rgba(139,92,246,0.6)" : "rgba(109,40,217,0.4)",
      }}
      animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], y: [0, -40, -80] }}
      transition={{ duration: 4 + delay, repeat: Infinity, delay: delay * 0.7, ease: "easeOut" }}
    />
  )
}

// 3D tilt card wrapper
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function HeroSection() {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Particles array - stable random values
  const particles = useRef(
    Array.from({ length: 25 }, (_, i) => ({
      x: (i * 37 + 11) % 100,
      y: (i * 53 + 7) % 100,
      delay: (i * 0.3) % 4,
    }))
  ).current

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setActiveSkillIndex((prev) => (prev + 1) % skills.length)
    }, 3000)
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => { clearInterval(interval); window.removeEventListener("mousemove", handleMouseMove) }
  }, [])

  const handleScrollDown = () => {
    document.getElementById("why-choose-me")?.scrollIntoView({ behavior: "smooth" })
  }

  const calculateMovement = (factor = 1) => {
    if (typeof window === "undefined") return { x: 0, y: 0 }
    return {
      x: ((mousePosition.x - window.innerWidth / 2) / window.innerWidth) * 20 * factor,
      y: ((mousePosition.y - window.innerHeight / 2) / window.innerHeight) * 20 * factor,
    }
  }

  const coreServices = [
    { icon: <Code className="h-4 w-4" />, name: "Web Development" },
    { icon: <Shield className="h-4 w-4" />, name: "Cybersecurity" },
    { icon: <Cpu className="h-4 w-4" />, name: "AI Integration" },
    { icon: <Globe className="h-4 w-4" />, name: "SEO Optimization" },
  ]

  return (
    <section
      className={cn(
        "min-h-[95vh] flex flex-col justify-center relative overflow-hidden py-8 md:py-12 lg:py-16 transition-opacity duration-700",
        isLoaded ? "opacity-100" : "opacity-0",
      )}
      ref={ref}
    >
      {/* ── BACKGROUND LAYER ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient */}
        <div
          className={cn(
            "absolute inset-0",
            isDark
              ? "bg-[radial-gradient(ellipse_at_top_left,#1e1b4b_0%,#0f172a_40%,#0f0a1e_100%)]"
              : "bg-[radial-gradient(ellipse_at_top_left,#ede9fe_0%,#f8fafc_40%,#f0f4ff_100%)]",
          )}
        />

        {/* Aurora orbs */}
        <FloatingOrb x="5%" y="10%" size={350} color="rgba(109,40,217,0.25)" delay={0} />
        <FloatingOrb x="60%" y="60%" size={400} color="rgba(59,130,246,0.2)" delay={2} />
        <FloatingOrb x="80%" y="-5%" size={300} color="rgba(139,92,246,0.2)" delay={4} />

        {/* Floating particles */}
        {particles.map((p, i) => (
          <Particle key={i} x={p.x} y={p.y} delay={p.delay} />
        ))}

        {/* Grid mesh */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${isDark ? "rgba(139,92,246,1)" : "rgba(109,40,217,1)"} 1px, transparent 1px),
              linear-gradient(90deg, ${isDark ? "rgba(139,92,246,1)" : "rgba(109,40,217,1)"} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Animated SVG circuit */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q25,20 50,50 T100,50"
            stroke={isDark ? "#8b5cf6" : "#7c3aed"}
            strokeWidth="0.3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M0,25 Q50,5 100,25"
            stroke={isDark ? "#3b82f6" : "#6366f1"}
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 1, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="flex flex-col order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={fadeIn}
              className={cn(
                "inline-flex items-center justify-center lg:justify-start px-4 py-2 border rounded-full text-sm font-medium mb-6 backdrop-blur-md mx-auto lg:mx-0 w-fit",
                isDark
                  ? "border-violet-400/30 bg-violet-400/10 text-violet-300 shadow-lg shadow-violet-400/10"
                  : "border-violet-500/30 bg-violet-500/10 text-violet-700 shadow-md",
              )}
            >
              <Sparkles className="mr-2 h-4 w-4 animate-pulse text-violet-400" />
              Self-Taught Developer & Ethical Hacker
            </motion.div>

            {/* Greeting */}
            <motion.h2
              variants={fadeIn}
              className={cn("text-xl sm:text-2xl md:text-3xl font-medium mb-2", isDark ? "text-gray-200" : "text-gray-700")}
            >
              Hey there! I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 font-bold">
                Vinay Verma
              </span>
            </motion.h2>

            {/* Main heading */}
            <motion.h1
              variants={fadeIn}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight leading-tight"
            >
              <span
                className={cn(
                  "block bg-clip-text text-transparent",
                  isDark
                    ? "bg-gradient-to-r from-white via-gray-100 to-white"
                    : "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800",
                )}
              >
                Crafting Digital
              </span>
              {/* Shimmer text */}
              <span
                className="block bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite]"
                style={{
                  backgroundImage: "linear-gradient(90deg,#3B82F6 0%,#8B5CF6 25%,#06B6D4 50%,#8B5CF6 75%,#3B82F6 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Experiences
              </span>
            </motion.h1>

            {/* Animated skills */}
            <motion.div variants={fadeIn} className="h-12 sm:h-14 overflow-hidden mb-6 flex justify-center lg:justify-start">
              <div className="relative w-full flex justify-center lg:justify-start">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className={`font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 absolute transition-all duration-500 whitespace-nowrap ${
                      index === activeSkillIndex ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeIn}
              className="text-muted-foreground mb-8 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              A passionate self-taught developer from Uttar Pradesh, India. After completing my 12th grade in 2022, I
              took a gap year to dive deep into the world of coding, cybersecurity, and digital innovation. Now I create
              modern, secure, and user-friendly digital solutions.
            </motion.p>

            {/* Core service pills with 3D tilt */}
            <motion.div variants={fadeIn} className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              {coreServices.map((service, index) => (
                <TiltCard key={service.name}>
                  <motion.div
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-full border text-sm font-medium cursor-default select-none",
                      isDark
                        ? "bg-gray-900/60 border-violet-400/20 text-gray-300 hover:border-violet-400/50 hover:bg-violet-400/10 hover:text-violet-300"
                        : "bg-white/90 border-gray-200 text-gray-700 hover:border-violet-400/50 hover:bg-violet-50 hover:text-violet-700",
                      "transition-colors duration-300 shadow-sm",
                    )}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span className="text-violet-500">{service.icon}</span>
                    {service.name}
                  </motion.div>
                </TiltCard>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button
                  asChild
                  size="lg"
                  className="relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 text-white px-8 py-4 font-semibold text-base shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-shadow duration-300"
                >
                  <Link href="/projects" className="flex items-center gap-2">
                    Explore My Work
                    <ArrowRight className="h-5 w-5" />
                    {/* Shine sweep */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className={cn(
                    "rounded-full border-2 px-8 py-4 font-semibold text-base bg-transparent transition-all duration-300",
                    isDark
                      ? "border-violet-500/40 hover:border-violet-500/70 hover:bg-violet-500/10"
                      : "border-violet-500/30 hover:border-violet-500/60 hover:bg-violet-500/5",
                  )}
                >
                  <Link href="/services" className="flex items-center gap-2">
                    My Services
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Tech stack */}
            <motion.div variants={fadeIn} className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
              <span className="text-muted-foreground text-sm font-medium mr-2 self-center">Tech Stack:</span>
              {["React", "Next.js", "Node.js", "TypeScript", "Python", "MongoDB"].map((tech, i) => (
                <motion.span
                  key={tech}
                  className={cn(
                    "px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 cursor-default",
                    isDark
                      ? "bg-gray-800/60 border-gray-700/60 text-gray-300 hover:border-violet-400/50 hover:bg-violet-400/10 hover:text-violet-300"
                      : "bg-white/80 border-gray-200 text-gray-700 hover:border-violet-400/50 hover:bg-violet-50 hover:text-violet-700",
                  )}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <span className="text-muted-foreground font-medium text-sm">Connect with me:</span>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: siteConfig.links.github, label: "GitHub" },
                  { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
                  { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
                  { icon: Instagram, href: siteConfig.links.instagram, label: "Instagram" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center justify-center w-11 h-11 rounded-full border-2 transition-all duration-300",
                      isDark
                        ? "bg-gray-900/50 border-gray-700/50 text-gray-300 hover:border-violet-400/60 hover:bg-violet-400/10 hover:text-violet-300"
                        : "bg-white/80 border-gray-200 text-gray-700 hover:border-violet-400/60 hover:bg-violet-50 hover:text-violet-600",
                    )}
                    whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN — 3D scene ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center lg:justify-end order-1 lg:order-2"
            // className="hidden lg:flex justify-center lg:justify-end order-1 lg:order-2 mb-6 lg:mb-0"
            style={{ x: calculateMovement(-0.3).x, y: calculateMovement(-0.3).y }}
          >
            <TiltCard className="relative w-full max-w-[450px] xl:max-w-[500px] flex items-center justify-center min-h-[450px]">
              {/* Glowing border frame */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl border-2 overflow-hidden",
                  isDark ? "border-violet-400/20" : "border-violet-400/30",
                )}
              >
                {["top-0 left-0 w-20 h-0.5", "top-0 right-0 w-0.5 h-20", "bottom-0 right-0 w-20 h-0.5", "bottom-0 left-0 w-0.5 h-20"].map((cls, i) => (
                  <motion.div
                    key={i}
                    className={cn("absolute", cls, isDark ? "bg-violet-400/60" : "bg-violet-500/60")}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  />
                ))}
              </div>

              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
                className="relative z-10 flex items-center justify-center w-full"
              >
                <ProfessionalCoderScene size={450} />
              </motion.div>

              {/* Glow behind */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/15 via-blue-500/10 to-violet-500/15 rounded-full filter blur-3xl -z-10 scale-90" />
              <motion.div
                className="absolute inset-0 border border-violet-400/10 rounded-full -z-10"
                animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </TiltCard>
          </motion.div>
        </div>
      </div>

      {/* Mobile 3D */}
      <div className="lg:hidden w-full flex justify-center items-center mt-4 mb-8 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] h-[280px] sm:h-[320px]"
        >
          <div className={cn("absolute inset-0 border-2 rounded-xl", isDark ? "border-violet-400/20" : "border-violet-400/30")} />
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            className="relative z-10"
          >
            <ProfessionalCoderScene size={280} />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-blue-500/5 to-violet-500/10 rounded-full filter blur-3xl -z-10" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center"
      >
        <button
          onClick={handleScrollDown}
          className="text-muted-foreground hover:text-violet-500 transition-colors flex flex-col items-center group"
        >
          <span className="text-sm mb-2 font-medium group-hover:translate-y-1 transition-transform">Discover More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full border border-violet-400/20 group-hover:border-violet-400/50"
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}