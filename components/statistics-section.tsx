"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Shield, Search, Smartphone, Users, Award, Clock, Coffee } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

interface StatisticsProps {
  className?: string
}

export function StatisticsSection({ className = "" }: StatisticsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const stats = [
    { icon: Code,       value: 20,   label: "Projects Completed", suffix: "+", color: "from-blue-500 to-violet-500",   glow: "rgba(99,102,241,0.3)",  delay: 0   },
    { icon: Users,      value: 30,   label: "Satisfied Clients",  suffix: "+", color: "from-violet-500 to-purple-500", glow: "rgba(139,92,246,0.3)", delay: 0.1 },
    { icon: Shield,     value: 98,   label: "Success Rate",       suffix: "%", color: "from-emerald-500 to-teal-500",  glow: "rgba(16,185,129,0.3)", delay: 0.2 },
    { icon: Award,      value: 5,    label: "Countries Served",   suffix: "+", color: "from-amber-500 to-orange-500",  glow: "rgba(245,158,11,0.3)", delay: 0.3 },
    { icon: Clock,      value: 2,    label: "Years Experience",   suffix: "",  color: "from-cyan-500 to-blue-500",     glow: "rgba(6,182,212,0.3)",  delay: 0.4 },
    { icon: Search,     value: 20,   label: "SEO Campaigns",      suffix: "+", color: "from-pink-500 to-rose-500",     glow: "rgba(236,72,153,0.3)", delay: 0.5 },
    { icon: Smartphone, value: 15,   label: "Mobile Apps",        suffix: "+", color: "from-indigo-500 to-blue-500",   glow: "rgba(99,102,241,0.3)", delay: 0.6 },
    { icon: Coffee,     value: 1000, label: "Cups of Coffee",     suffix: "+", color: "from-amber-600 to-yellow-500",  glow: "rgba(217,119,6,0.3)",  delay: 0.7 },
  ]

  return (
    <div className={cn("relative", className)} ref={ref}>
      {/* Section glow backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full"
          style={{ background: isDark ? "rgba(139,92,246,0.07)" : "rgba(109,40,217,0.05)", filter: "blur(80px)" }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative z-10">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={index}
              className={cn(
                "relative rounded-2xl p-5 text-center transition-all duration-500 border overflow-hidden group cursor-default",
                isDark
                  ? "bg-gray-900/50 backdrop-blur-md border-white/5 hover:border-white/10"
                  : "bg-white/70 backdrop-blur-md border-gray-200/80 hover:border-violet-300/60",
              )}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.5, delay: stat.delay, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              style={{
                boxShadow: isDark
                  ? `0 4px 20px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04)`
                  : `0 4px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,255,255,0.8)`,
              }}
            >
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 50%, ${stat.glow}, transparent 70%)` }}
              />

              {/* Shine sweep on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 overflow-hidden rounded-2xl transition-opacity duration-300">
                <div
                  className="absolute -inset-full top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] translate-x-[-200%] group-hover:translate-x-[500%] transition-transform duration-1000"
                />
              </div>

              {/* Icon with gradient bg */}
              <motion.div
                className={cn("mx-auto w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br", stat.color)}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <Icon className="h-6 w-6 text-white" />
              </motion.div>

              {/* Counter */}
              <div className="flex items-center justify-center gap-0.5">
                <CounterComponent from={0} to={stat.value} duration={2} delay={stat.delay + 0.3} isInView={isInView} />
                <span className={cn("text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r", stat.color)}>
                  {stat.suffix}
                </span>
              </div>

              <p className={cn("text-sm mt-2 font-medium", isDark ? "text-gray-400" : "text-gray-500")}>
                {stat.label}
              </p>

              {/* Bottom accent line */}
              <motion.div
                className={cn("absolute bottom-0 left-0 h-0.5 bg-gradient-to-r", stat.color)}
                initial={{ width: "0%" }}
                animate={isInView ? { width: "100%" } : { width: "0%" }}
                transition={{ duration: 0.8, delay: stat.delay + 0.5 }}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

interface CounterProps {
  from: number
  to: number
  duration?: number
  delay?: number
  isInView: boolean
}

function CounterComponent({ from, to, duration = 2, delay = 0, isInView }: CounterProps) {
  const [count, setCount] = useState(from)

  useEffect(() => {
    if (!isInView) return
    let startTime: number | null = null
    let animationFrame: number

    const startAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime + delay * 1000
      if (elapsed < 0) { animationFrame = requestAnimationFrame(startAnimation); return }
      const progress = Math.min(elapsed / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCount(Math.floor(from + eased * (to - from)))
      if (progress < 1) animationFrame = requestAnimationFrame(startAnimation)
    }

    animationFrame = requestAnimationFrame(startAnimation)
    return () => cancelAnimationFrame(animationFrame)
  }, [from, to, duration, delay, isInView])

  return <span className="text-3xl font-bold">{count}</span>
}