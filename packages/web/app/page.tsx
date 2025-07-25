'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

// Particle animation component
const Particles = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, opacity: number}>>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.6 + 0.1
      }))
      setParticles(newParticles)
    }

    generateParticles()
    const interval = setInterval(generateParticles, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            animation: `float 6s ease-in-out infinite ${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  )
}

// Animated text component
const AnimatedText = ({ text, className = "", delay = 0 }: { text: string, className?: string, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {text}
    </div>
  )
}

// Download button component
const DownloadButton = ({ platform, icon, href, description }: { platform: string, icon: string, href: string, description: string }) => (
  <a
    href={href}
    className="group relative flex items-center space-x-3 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="text-2xl">{icon}</div>
    <div className="flex flex-col">
      <span className="text-white font-semibold">{platform}</span>
      <span className="text-gray-300 text-sm">{description}</span>
    </div>
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </a>
)

// Feature card component
const FeatureCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
  <div className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
)

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Particles background */}
      <Particles />
      
      {/* Hero Section */}
      <main className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="px-6 py-8 lg:px-12">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <AnimatedText 
              text="Notable" 
              className="text-2xl font-bold text-white"
              delay={100}
            />
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
              <Link href="#download" className="text-gray-300 hover:text-white transition-colors">Download</Link>
              <Link href="#privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</Link>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedText 
              text="KNOWLEDGE EMPOWERS."
              className="text-sm font-medium text-gray-400 tracking-[0.2em] mb-8"
              delay={300}
            />
            
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight">
              <AnimatedText text="Capture your" delay={500} />
              <br />
              <AnimatedText text="thoughts," delay={700} />
              <br />
              <AnimatedText 
                text="unleash your potential."
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                delay={900}
              />
            </h1>

            <AnimatedText 
              text="Where ideas become reality and knowledge transforms into wisdom within your digital sanctuary."
              className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto"
              delay={1100}
            />

            <AnimatedText text="ORGANIZE, CREATE, COLLABORATE." className="text-sm font-medium text-gray-400 tracking-[0.2em]" delay={1300} />
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              Experience the Future of
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Note-Taking</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built for students, professionals, and creators who demand excellence in their digital workspace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="🚀"
              title="Rich Text Editor"
              description="Powerful editing with markdown support, code blocks, tables, and real-time formatting for all your creative needs."
            />
            <FeatureCard
              icon="🔗"
              title="Smart Organization"
              description="Intelligent tagging, folder structures, and advanced search to keep your knowledge perfectly organized and discoverable."
            />
            <FeatureCard
              icon="⚡"
              title="Real-time Sync"
              description="Seamless synchronization across all your devices with offline support and conflict-free collaborative editing."
            />
            <FeatureCard
              icon="🎯"
              title="Advanced Search"
              description="Lightning-fast full-text search with filtering, highlighting, and smart suggestions to find anything instantly."
            />
            <FeatureCard
              icon="🔒"
              title="Privacy First"
              description="Your data stays yours. End-to-end encryption, local storage options, and complete control over your information."
            />
            <FeatureCard
              icon="🌐"
              title="Cross-Platform"
              description="Native apps for desktop, mobile, and web. Access your notes anywhere, anytime, on any device."
            />
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative z-10 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              Download Notable
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Today</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Choose your platform and start your journey towards better note-taking and knowledge management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <DownloadButton
              platform="macOS"
              icon="🍎"
              href="/downloads/Notable-1.0.0.dmg"
              description="Apple Silicon & Intel"
            />
            <DownloadButton
              platform="Windows"
              icon="🪟"
              href="#"
              description="Coming Soon"
            />
            <DownloadButton
              platform="Android"
              icon="🤖"
              href="#"
              description="Coming Soon"
            />
            <DownloadButton
              platform="iOS"
              icon="📱"
              href="#"
              description="Coming Soon"
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Also available on the web</p>
            <Link 
              href="/dashboard"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
            >
              Launch Web App
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="privacy" className="relative z-10 py-12 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Notable</h3>
              <p className="text-gray-400">Empowering minds through organized knowledge.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/support" className="text-gray-400 hover:text-white transition-colors">Support</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400">© 2025 Notable. Designed for digital serenity.</p>
          </div>
        </div>
      </footer>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
      `}</style>
    </div>
  )
}