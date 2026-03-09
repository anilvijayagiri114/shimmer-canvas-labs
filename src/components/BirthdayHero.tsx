import { motion } from "framer-motion";
import { Cake, Sparkles } from "lucide-react";
import birthdayBg from "@/assets/birthday-bg.jpg";
import cakeImg from "@/assets/birthday-cake.png";
import floralFrame from "@/assets/floral-frame.png";

const BirthdayHero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={birthdayBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/30 to-background" />
      </div>

      <div className="relative z-10 text-center px-4 py-20 max-w-2xl mx-auto">
        {/* Sparkle icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <Sparkles className="h-5 w-5 text-accent" />
          <span className="text-xs uppercase tracking-[0.4em] text-primary-foreground/70 font-body">
            11th March 2026
          </span>
          <Sparkles className="h-5 w-5 text-accent" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-2 leading-tight"
        >
          Happy Birthday
        </motion.h1>

        {/* Name with floral frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative inline-block my-4"
        >
          <img
            src={floralFrame}
            alt=""
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              className="text-4xl sm:text-5xl md:text-6xl text-primary-foreground font-bold"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Raji
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-body text-base sm:text-lg text-primary-foreground/80 max-w-md mx-auto mb-8"
        >
          My dearest <span className="font-semibold">Rajeswari</span>, today the world celebrates
          because you exist in it ✨
        </motion.p>

        {/* Cake */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <img
            src={cakeImg}
            alt="Birthday cake"
            className="w-32 h-32 sm:w-40 sm:h-40 mx-auto animate-float"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-6 flex items-center justify-center gap-2"
        >
          <Cake className="h-4 w-4 text-accent" />
          <span className="text-primary-foreground/50 text-xs font-body tracking-widest uppercase">
            Scroll down for your surprises
          </span>
          <Cake className="h-4 w-4 text-accent" />
        </motion.div>
      </div>
    </section>
  );
};

export default BirthdayHero;
