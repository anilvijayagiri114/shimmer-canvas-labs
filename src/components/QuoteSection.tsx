import { motion } from "framer-motion";
import roseImg from "@/assets/heart-icon.png";

const QuoteSection = () => {
  return (
    <section className="py-32 px-4 bg-primary/5 relative overflow-hidden">
      {/* Decorative roses */}
      <img
        src={roseImg}
        alt=""
        className="absolute top-8 left-8 w-20 h-20 opacity-20 rotate-12"
      />
      <img
        src={roseImg}
        alt=""
        className="absolute bottom-8 right-8 w-24 h-24 opacity-15 -rotate-12"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center"
      >
        <span className="font-display text-6xl md:text-8xl text-primary/20">"</span>
        <p className="font-display text-2xl md:text-4xl italic text-foreground leading-relaxed -mt-8 mb-6">
          I have found the one whom my soul loves, and I choose you today,
          tomorrow, and forever.
        </p>
        <div className="w-16 h-px bg-primary mx-auto mb-4" />
        <p className="font-body text-muted-foreground text-sm tracking-wide uppercase">
          With all my heart
        </p>
      </motion.div>
    </section>
  );
};

export default QuoteSection;
