import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import heroImage from "@/assets/couple-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Couple holding hands at sunset"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/10 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center gap-3 mb-6"
        >
          <Heart className="h-5 w-5 text-primary fill-primary animate-pulse-soft" />
          <span className="text-sm uppercase tracking-[0.3em] text-primary-foreground/80 font-body">
            Our Love Story
          </span>
          <Heart className="h-5 w-5 text-primary fill-primary animate-pulse-soft" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-4 leading-tight"
        >
          Forever <span className="italic text-primary">Together</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-lg mb-8"
        >
          Every love story is beautiful, but ours is my favorite
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10"
        >
          <ChevronDown className="h-8 w-8 text-primary-foreground/60 animate-float" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
