"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Wallet, BarChart3, Lock, RefreshCcw } from "lucide-react";

const ParticlesBackground = dynamic(() => import("@/components/particles-background"), {
  ssr: false,
});

const CryptoScene = dynamic(() => import("@/components/crypto-scene"), {
  ssr: false,
});

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticlesBackground />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold gradient-text">
              Trade Crypto with Confidence
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the next generation of cryptocurrency trading with institutional-grade security and lightning-fast execution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass-button">
                Start Trading <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="glass-button">
                Learn More
              </Button>
            </div>
          </motion.div>
          
          <div className="mt-16 h-[400px] relative">
            <CryptoScene />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
              Why Choose Swaptor X
            </h2>
            <p className="text-gray-400">
              Built for traders who demand excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card p-6"
              >
                <feature.icon className="w-12 h-12 text-[#00F0FF] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Multi-signature wallets and advanced encryption protect your assets 24/7",
  },
  {
    icon: Wallet,
    title: "Instant Deposits",
    description: "Fund your account instantly with multiple payment options",
  },
  {
    icon: BarChart3,
    title: "Advanced Trading",
    description: "Professional-grade trading tools and real-time market data",
  },
  {
    icon: Lock,
    title: "Secure Storage",
    description: "95% of assets stored in offline cold wallets for maximum security",
  },
  {
    icon: RefreshCcw,
    title: "24/7 Trading",
    description: "Trade cryptocurrencies around the clock with zero downtime",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Fully compliant with global cryptocurrency regulations",
  },
];