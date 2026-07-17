import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Cpu, Award, Zap } from "lucide-react";
import SEO from "../components/SEO/SEO";
import Button from "../components/Button/Button";
import { getImageurl } from "../Utils";

const Home: React.FC = () => {
  const stats = [
    { label: "Years Experience", value: "7+", icon: Award },
    { label: "Technologies Mastered", value: "15+", icon: Cpu },
    { label: "Satisfied Clients", value: "100%", icon: Zap },
  ];

  return (
    <>
      <SEO title="Home" description="Welcome to the portfolio of Joel Santhosh Raja - Lead Software Engineer and Frontend Specialist." />

      <div className="relative min-h-[calc(100vh-80px)] overflow-hidden flex items-center py-12 md:py-20">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-brand-primary/20 blur-[60px] md:blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-brand-neonPurple/20 blur-[60px] md:blur-[100px] animate-pulse-slow"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 text-center lg:text-left space-y-6 md:space-y-8"
            >
              {/* Introduction Badge */}
              <div className="inline-flex items-center space-x-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-1.5 text-xs md:text-sm font-semibold text-brand-primary">
                <Code className="h-4 w-4" />
                <span>Available for Full-time Roles</span>
              </div>

              {/* Catchy Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-zinc-900 dark:text-white">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-brand-primary via-brand-neonPurple to-brand-neonPink bg-clip-text text-transparent">
                  Joel Santhosh Raja
                </span>
              </h1>

              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I'm a Frontend developer with 7 years of experience using React and NodeJS. I craft stunning, highly performant, and premium digital experiences that bridge creativity and functional technology.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    <span>Let's Connect</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    <span>View Projects</span>
                  </Button>
                </Link>
              </div>

              {/* Stats Summary */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-200/50 dark:border-zinc-800/50 max-w-lg mx-auto lg:mx-0">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start space-x-1 text-brand-primary mb-1">
                        <Icon className="h-4 w-4" />
                        <span className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                          {stat.value}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Hero Right Media - Premium Overlapping Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="lg:col-span-5 w-full max-w-md mx-auto"
            >
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200/50 bg-white/85 dark:border-zinc-800/50 dark:bg-brand-cardDark/85 backdrop-blur-sm shadow-2xl transition-all duration-300 hover:shadow-brand-primary/20 dark:hover:shadow-brand-primary/10 group">
                
                {/* Banner Part */}
                <div className="h-32 sm:h-40 w-full overflow-hidden bg-zinc-950">
                  <img
                    src={getImageurl("hero/banner.png")}
                    alt="Joel Banner"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                </div>

                {/* Overlapping Avatar Profile Photo */}
                <div className="relative px-6 pb-6 text-center">
                  <div className="flex justify-center">
                    <div className="relative -mt-16 sm:-mt-20 h-28 w-28 sm:h-32 sm:w-32 rounded-full border-4 border-white dark:border-brand-cardDark bg-zinc-100 overflow-hidden shadow-lg transition-transform duration-500 group-hover:scale-105">
                      <img
                        src={getImageurl("hero/heroImage.png")}
                        alt="Joel Profile"
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                        }}
                      />
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="mt-4 space-y-2">
                    <h3 className="text-xl font-extrabold text-zinc-950 dark:text-white">
                      Joel Santhosh Raja
                    </h3>
                    <p className="text-xs font-bold text-brand-primary uppercase tracking-widest">
                      Lead Software Engineer
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-xs mx-auto leading-relaxed">
                      Crafting fast, modular React applications & high-performance frontend interfaces.
                    </p>

                    {/* Social Quick-Badges */}
                    <div className="flex justify-center gap-1.5 pt-3">
                      <span className="rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/50 dark:border-zinc-700/50 px-2.5 py-0.5 text-[10px] font-bold text-zinc-500 dark:text-zinc-400">
                        Virtusa
                      </span>
                      <span className="rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/50 dark:border-zinc-700/50 px-2.5 py-0.5 text-[10px] font-bold text-zinc-500 dark:text-zinc-400">
                        LTIMindtree
                      </span>
                      <span className="rounded-full bg-brand-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-brand-primary">
                        React.js
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
