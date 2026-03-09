import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import floralFrame from "@/assets/floral-frame.png";

const BirthdayLetter = () => {
  return (
    <section className="py-20 sm:py-28 px-4 bg-card">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-background rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl border border-border/50 relative overflow-hidden"
        >
          {/* Decorative corners */}
          <img src={floralFrame} alt="" className="absolute -top-10 -left-10 w-28 h-28 opacity-15 rotate-45" />
          <img src={floralFrame} alt="" className="absolute -bottom-10 -right-10 w-28 h-28 opacity-15 -rotate-45" />

          <div className="relative z-10">
            <Heart className="h-8 w-8 text-primary fill-primary mx-auto mb-6" />

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
              A Letter For You
            </h2>

            <div className="font-body text-muted-foreground leading-relaxed space-y-4 text-sm sm:text-base">
              <p>My dearest <span className="text-primary font-semibold">Raji</span>,</p>

              <p>
                On this beautiful day, I just want to remind you how incredibly special you are.
                Not just today, but every single day. You are the kind of person who makes
                everyone around you feel loved and valued.
              </p>

              <p>
                Rajeswari, your name itself means "queen of kings" — and that's exactly what
                you are. A queen in every way. Your smile has the power to heal, your words
                have the power to inspire, and your heart has the power to transform lives.
              </p>

              <p>
                I hope this birthday brings you everything you've ever wished for and more.
                You deserve mountains of happiness, oceans of love, and a lifetime of
                beautiful memories.
              </p>

              <p>
                Thank you for being you. Thank you for being my <span className="text-primary font-semibold">Raji</span>.
                Here's to another amazing year of your beautiful life.
              </p>

              <p className="text-right pt-4">
                <span
                  className="text-xl sm:text-2xl text-primary"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  With all my love, forever & always ❤️
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BirthdayLetter;
