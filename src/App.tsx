/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from "react";
import { Play, Search, Heart, ChevronRight, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import gsap from "gsap";
import Scene from "./components/Scene";
import { CustomCursor } from "./components/CustomCursor";

const AESTHETIC_MOVIES = [
  { id: 1, title: "Midnight in Paris", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Lily Blooms", img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "Autumn Leaves", img: "https://images.unsplash.com/photo-1507311089539-e9324c084650?auto=format&fit=crop&w=800&q=80" },
  { id: 4, title: "Tea Shop Rendezvous", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" },
  { id: 5, title: "City Lights", img: "https://images.unsplash.com/photo-1514493390978-5a2d61da0c9a?auto=format&fit=crop&w=800&q=80" },
  { id: 6, title: "Whispers of the Thames", img: "https://images.unsplash.com/photo-1496336338564-9840cbfc97d5?auto=format&fit=crop&w=800&q=80" },
];

const ROMANCE_PICKS = [
  { id: 7, title: "Letters To A Beloved", img: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80" },
  { id: 8, title: "Vintage Heart", img: "https://images.unsplash.com/photo-1528698827618-2e0618a8b1be?auto=format&fit=crop&w=800&q=80" },
  { id: 9, title: "Polaroid Memories", img: "https://images.unsplash.com/photo-1520114002626-d30626359f51?auto=format&fit=crop&w=800&q=80" },
  { id: 10, title: "The Starlit Promenade", img: "https://images.unsplash.com/photo-1503900388654-71be897ef2b7?auto=format&fit=crop&w=800&q=80" },
  { id: 11, title: "Wildflowers", img: "https://images.unsplash.com/photo-1469042571212-32aae43aebc6?auto=format&fit=crop&w=800&q=80" },
  { id: 12, title: "A Sunday Mornings' Grace", img: "https://images.unsplash.com/photo-1495434942714-fb573128fb17?auto=format&fit=crop&w=800&q=80" }
];

export default function App() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP reveal animation for hero content
    if (contentRef.current) {
      const q = gsap.utils.selector(contentRef);
      gsap.fromTo(
        q(".reveal-item"),
        { y: 40, opacity: 0, rotationX: -10 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans selection:bg-rose-200 cursor-none relative overflow-x-hidden">
      {/* Playful Scrapbook Dotted Background */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(#fecdd3_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-50 z-[-1]" />
      
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#FDFBF7]/80 backdrop-blur-xl border-b border-rose-100/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-8">
              <span className="font-clumsy text-4xl font-bold tracking-wide text-rose-900 flex items-center gap-2 transform -rotate-2 hover:rotate-2 hover:scale-105 transition-all duration-300 drop-shadow-sm origin-left">
                shraya stream 🎀
              </span>
              <div className="hidden md:flex gap-6 text-sm font-medium text-stone-500">
                <a href="#" className="flex items-center gap-1 text-rose-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-rose-300 after:rounded-full after:transform after:translate-y-1">Home</a>
                <a href="#" className="hover:text-rose-900 transition-colors">Romance</a>
                <a href="#" className="hover:text-rose-900 transition-colors">Drama</a>
                <a href="#" className="hover:text-rose-900 transition-colors">My Catalogue</a>
              </div>
            </div>
            <div className="flex items-center gap-5 text-stone-400">
              <Search className="w-5 h-5 cursor-pointer hover:text-rose-600 hover:scale-110 hover:-rotate-6 transition-all" />
              <Heart className="w-5 h-5 cursor-pointer hover:text-rose-600 hover:scale-110 hover:rotate-6 transition-all" />
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center cursor-pointer border-2 border-rose-200 overflow-hidden ml-2 shadow-sm transform hover:scale-105 hover:rotate-3 transition-all">
                 <img src="https://images.unsplash.com/photo-1549471013-336442bb6297?auto=format&fit=crop&w=150&q=80" alt="profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          
          {/* Navigation Doodle */}
          <div className="absolute right-32 top-14 pointer-events-none hidden lg:block opacity-60">
            <span className="font-clumsy text-rose-400 text-xl rotate-12 inline-block">u look cute today !!✨</span>
            <svg className="w-10 h-6 text-rose-300 absolute -top-4 -left-6 -rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-20 pb-16 md:pt-32 md:pb-32 flex items-center justify-center min-h-[85vh] overflow-hidden" ref={contentRef}>
        
        {/* 3D Background Scene */}
        <Scene />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/60 via-transparent to-[#FDFBF7] pointer-events-none z-[1]"></div>
        <div className="absolute inset-0 bg-rose-900/5 mix-blend-overlay pointer-events-none z-[1]"></div>

        {/* Scattered Doodles for Hero */}
        <motion.div animate={{ rotate: [10, -5, 10], y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute z-10 left-10 md:left-32 top-1/3 opacity-70 drop-shadow-md pointer-events-none">
          <Heart fill="#fecdd3" stroke="#fda4af" className="w-12 h-12 -rotate-12" />
        </motion.div>
        
        <motion.div animate={{ rotate: [-10, 15, -10], y: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute z-10 right-10 md:right-40 top-1/4 opacity-80 pointer-events-none">
          <span className="font-clumsy text-rose-500 text-3xl rotate-12 drop-shadow-sm bg-white/50 px-3 py-1 rounded-lg border border-rose-200 backdrop-blur-sm">omg literally crying 😭</span>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
          <div className="max-w-2xl space-y-6 relative" style={{ perspective: 1000 }}>
            {/* Clumsy Star Doodle */}
            <div className="absolute -top-8 -left-12 opacity-80 pointer-events-none -rotate-12">
              <Sparkles className="w-10 h-10 text-yellow-400 fill-yellow-200" />
            </div>

            <div className="reveal-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-rose-200/60 shadow-[0_4px_20px_-5px_rgba(244,63,94,0.15)] text-xs font-semibold text-rose-800 uppercase tracking-widest hover:scale-105 hover:bg-rose-50 transition-all cursor-pointer">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Verified Safe Stream 🎀
            </div>
            
            <h1 className="reveal-item text-6xl md:text-8xl font-serif text-stone-900 leading-[1.05] tracking-tight drop-shadow-sm relative">
              It Ends With Us<br />
              <span className="text-4xl md:text-6xl text-rose-900/80 italic font-light drop-shadow-sm">A floral romance</span>
              <span className="absolute -right-4 md:-right-12 top-1/2 font-clumsy text-rose-400 text-3xl md:text-5xl rotate-[-15deg] opacity-90 drop-shadow-sm">so good! 💕</span>
            </h1>
            
            <p className="reveal-item text-stone-700 md:text-lg max-w-lg leading-relaxed font-normal bg-white/40 p-4 rounded-2xl border border-white/60 backdrop-blur-sm shadow-sm relative">
              <span className="absolute -top-3 -left-3 font-serif text-4xl text-rose-300 opacity-50">"</span>
              Perchance the one who holds your heart is the one who wounds it most profoundly. Immerse yourself in a beautifully intricate tale of devotion, resilience, and the courage to begin anew.
              <span className="absolute -bottom-6 -right-2 font-serif text-4xl text-rose-300 opacity-50 rotate-180">"</span>
            </p>
            
            <div className="reveal-item pt-6 flex flex-wrap items-center gap-4 group">
              {/* Primary Call to Action linked exactly as requested */}
              <a
                href="https://vidsrc.win/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-rose-900 text-rose-50 rounded-full hover:bg-rose-800 transition-all duration-300 shadow-[0_8px_30px_rgb(136,19,55,0.25)] hover:shadow-[0_8px_40px_rgb(136,19,55,0.35)] hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <Play className="w-5 h-5 fill-current opacity-90 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                <span className="font-medium tracking-wide">binge watch ur favourite show</span>
              </a>
              <button className="px-8 py-4 bg-white/60 backdrop-blur-xl text-stone-800 rounded-full hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300 font-medium border border-rose-900/15 hover:border-rose-900/30 shadow-sm relative">
                Examine Catalogue
                {/* Wobbly line doodle */}
                <svg className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-rose-300 opacity-0 group-hover:opacity-100 transition-opacity w-16 h-2" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0,5 Q20,10 40,5 T80,5 T100,5" fill="none" stroke="currentColor" strokeWidth="3" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Rows */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-40 space-y-24 relative z-20 mt-4 md:-mt-10">
        
        {/* Floating Doodles between rows */}
        <div className="absolute left-4 top-1/3 -rotate-12 opacity-60">
           <span className="font-clumsy text-rose-400 text-2xl bg-white/50 px-3 py-1 rounded-full border border-rose-200">my weekend plans 🍿</span>
        </div>
        <div className="absolute right-10 bottom-1/4 rotate-12 opacity-50">
           <Heart className="w-16 h-16 text-rose-300 fill-rose-100" />
           <span className="font-clumsy text-stone-500 text-lg ml-2">lovecore</span>
        </div>

        <MovieRow title="Trending Amongst the Ton 🌸" movies={AESTHETIC_MOVIES} note="omg everyone is watching these rn !!" />
        <MovieRow title="Because You Fancied It Ends With Us 💌" movies={ROMANCE_PICKS} note="curated just for u bestie 🎀" />
      </div>
      
      {/* Playful Footer */}
      <footer className="w-full bg-rose-50/50 backdrop-blur-sm border-t border-rose-100 py-12 relative overflow-hidden">
        {/* Footnote doodles */}
        <Heart className="absolute -top-3 left-1/4 text-rose-200 w-8 h-8 fill-rose-50 rotate-12" />
        <Sparkles className="absolute bottom-8 right-1/4 text-yellow-200 w-12 h-12 fill-yellow-50 -rotate-12" />
        
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <p className="font-clumsy text-3xl text-rose-800 drop-shadow-sm">built with love & lots of iced lattes ☕️</p>
          <div className="flex items-center justify-center gap-4 text-stone-400">
             <a href="#" className="hover:text-rose-500 transition-colors">instagram</a>
             <span>•</span>
             <a href="#" className="hover:text-rose-500 transition-colors">pinterest</a>
             <span>•</span>
             <a href="#" className="hover:text-rose-500 transition-colors">tiktok</a>
          </div>
          <p className="text-xs text-stone-400 mt-8 font-sans">stay safe, drink water, watch movies. © 2026 shraya 🎀</p>
        </div>
      </footer>
    </div>
  );
}

function MovieRow({ title, movies, note }: { title: string, movies: Array<{id: number, title: string, img: string}>, note?: string }) {
  return (
    <div className="space-y-6 relative">
      {/* Decorative row background blob */}
      <div className="absolute -left-10 top-0 w-40 h-40 bg-pink-100 blur-[80px] rounded-full mix-blend-multiply opacity-50 z-[-1]" />
      
      <div className="flex items-end justify-between px-2 relative">
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl font-serif text-rose-950 tracking-tight drop-shadow-sm">{title}</h2>
          {note && (
             <motion.span 
               initial={{ rotate: -5 }} 
               whileHover={{ rotate: -10, scale: 1.1 }} 
               className="absolute -top-6 -right-32 md:-right-48 font-clumsy text-xl md:text-2xl text-rose-500 bg-white/70 px-4 py-1 rounded-xl shadow-sm border border-rose-100 backdrop-blur-sm z-10"
             >
               {note}
             </motion.span>
          )}
        </div>
        <button className="hidden sm:flex text-sm font-medium text-rose-600 hover:text-rose-900 items-center transition-all bg-rose-50/50 hover:bg-rose-100 px-4 py-2 rounded-full border border-rose-100 shadow-sm hover:gap-2">
          Survey collection <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      <div 
        className="flex gap-6 overflow-x-auto hide-scrollbar pb-12 pt-6 snap-x snap-mandatory px-4 sm:px-8 -mx-4 sm:-mx-8"
        style={{ perspective: 1500 }}
      >
        {movies.map((movie) => (
          <motion.a
            key={movie.id}
            href="https://vidsrc.win/"
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotateZ: (movie.id % 2 === 0 ? 2 : -2), translateY: -10 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="group relative flex-none w-[220px] sm:w-[260px] md:w-[300px] snap-start bg-white p-3 pb-12 rounded-xl shadow-[0_10px_30px_-10px_rgba(244,63,94,0.15)] hover:shadow-[0_20px_40px_-10px_rgba(244,63,94,0.3)] transition-shadow duration-500 cursor-pointer border border-rose-50"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-md bg-stone-100">
              <img 
                src={movie.img} 
                alt={movie.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/10 transition-colors duration-500 mix-blend-overlay" />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] bg-white/20">
                <div className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-75">
                  <Play className="w-6 h-6 text-rose-500 fill-current ml-1" />
                </div>
              </div>
            </div>
            
            {/* Polaroid Text Area */}
            <div className="absolute bottom-3 left-0 right-0 text-center px-4">
              <h3 className="text-rose-950 font-serif text-lg tracking-wide group-hover:text-rose-600 transition-colors duration-300">
                {movie.title}
              </h3>
            </div>
            
            {/* Cute tape decoration */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/40 backdrop-blur-sm shadow-sm rotate-2 opacity-60 border border-white/50" style={{ clipPath: 'polygon(0 10%, 100% 0, 95% 90%, 5% 100%)' }} />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
