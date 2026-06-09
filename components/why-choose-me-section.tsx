"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { CheckCircle, Clock, Users, Zap, Award, Shield } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Every project undergoes rigorous testing to ensure high-quality, bug-free deliverables that exceed expectations.",
    gradient: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.2)",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "I understand the importance of deadlines and ensure that projects are completed on time, every time.",
    gradient: "from-blue-500 to-cyan-600",
    glow: "rgba(59,130,246,0.2)",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "Your vision and requirements are my priority. I maintain clear communication throughout the project lifecycle.",
    gradient: "from-violet-500 to-purple-600",
    glow: "rgba(139,92,246,0.2)",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "I build solutions that are not just functional but also optimized for speed, efficiency, and scalability.",
    gradient: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.2)",
  },
  {
    icon: Award,
    title: "Industry Best Practices",
    description: "I stay updated with the latest technologies and follow industry best practices to deliver cutting-edge solutions.",
    gradient: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.2)",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Security is integrated into every stage of development to protect your data and users from potential threats.",
    gradient: "from-indigo-500 to-blue-600",
    glow: "rgba(99,102,241,0.2)",
  },
]

function FeatureCard({ feature, index, isDark }: { feature: typeof features[0]; index: number; isDark: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-80, 80], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-80, 80], [-8, 8]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      className="group relative"
    >
      <div
        className={cn(
          "relative rounded-2xl p-6 h-full border overflow-hidden transition-all duration-300",
          isDark
            ? "bg-gray-900/50 backdrop-blur-md border-white/5 hover:border-white/10"
            : "bg-white/80 backdrop-blur-md border-gray-200/80 hover:border-violet-200",
        )}
        style={{
          boxShadow: isDark
            ? "0 4px 24px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.03)"
            : "0 4px 24px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,255,255,0.9)",
        }}
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{ background: `radial-gradient(circle at 30% 30%, ${feature.glow}, transparent 65%)` }}
        />

        {/* Shine */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute -inset-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/6 to-transparent skew-x-[-20deg] translate-x-[-200%] group-hover:translate-x-[400%] transition-transform duration-900 opacity-0 group-hover:opacity-100" />
        </div>

        <div className="relative z-10 flex gap-5">
          {/* Icon */}
          <motion.div
            className={cn("w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0 shadow-lg mt-0.5", feature.gradient)}
            style={{ transform: "translateZ(20px)" }}
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <Icon className="h-6 w-6 text-white" />
          </motion.div>

          <div style={{ transform: "translateZ(10px)" }}>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className={cn("text-sm leading-relaxed", isDark ? "text-gray-400" : "text-gray-500")}>
              {feature.description}
            </p>
          </div>
        </div>

        {/* Bottom accent */}
        <div className={cn("absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r rounded-b-2xl", feature.gradient)} />
      </div>
    </motion.div>
  )
}

export default function WhyChooseMeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <section id="why-choose-me" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "radial-gradient(ellipse at 20% 50%, rgba(139,92,246,0.06) 0%, transparent 60%)"
              : "radial-gradient(ellipse at 20% 50%, rgba(109,40,217,0.04) 0%, transparent 60%)",
          }}
        />
        <div className="blob w-[600px] h-[600px] -right-[300px] top-[10%] opacity-10 dark:opacity-5" />
        <div className="blob w-[500px] h-[500px] -left-[250px] bottom-[10%] opacity-10 dark:opacity-5" />
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
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="space-y-14"
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            <motion.span
              className={cn(
                "inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-2",
                isDark ? "border-violet-400/30 text-violet-400 bg-violet-400/10" : "border-violet-500/30 text-violet-600 bg-violet-500/10",
              )}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              My Advantage
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Choose Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 mx-auto rounded-full" />
            <p className={cn("text-lg", isDark ? "text-gray-400" : "text-gray-500")}>
              I deliver exceptional digital solutions with a focus on quality, security, and client satisfaction
            </p>
          </motion.div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} isDark={isDark} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}