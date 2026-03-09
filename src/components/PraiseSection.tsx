import { motion } from "framer-motion";
import { Heart, Star, Sparkles, Crown, Sun, Flower2 } from "lucide-react";
import roseImg from "@/assets/heart-icon.png";

const praises = [
  {
    icon: Crown,
    title: "You're a Queen",
    message: "Raji, you carry yourself with such grace and elegance. Every room you walk into lights up because of your presence. You're not just beautiful on the outside — your soul shines brighter than any star.",
    color: "text-accent",
  },
  {
    icon: Heart,
    title: "Your Heart is Pure Gold",
    message: "The way you care for everyone around you, your kindness, your patience — Raji, you have the most beautiful heart I've ever known. You make this world a better place just by being you.",
    color: "text-primary",
  },
  {
    icon: Star,
    title: "You're My Favorite Person",
    message: "Out of all the people in this world, you are my absolute favorite. Your laugh is my favorite sound. Your smile is my favorite sight. Everything about you is my favorite everything.",
    color: "text-accent",
  },
  {
    icon: Sun,
    title: "You Light Up My Days",
    message: "Raji, you're like sunshine on a rainy day. No matter how tough things get, one message from you, one smile from you, and suddenly everything feels okay. You're my happy place.",
    color: "text-primary",
  },
  {
    icon: Sparkles,
    title: "You're Incredibly Strong",
    message: "I admire your strength more than you know. The way you handle challenges, the way you never give up — Rajeswari, you inspire me every single day to be a better person.",
    color: "text-accent",
  },
  {
    icon: Flower2,
    title: "You Deserve the World",
    message: "And if I could, I'd give it to you. Every flower, every sunset, every beautiful thing in this world reminds me of you. Happy Birthday to the most deserving soul I know. I love you, Raji. ❤️",
    color: "text-primary",
  },
];

const PraiseSection = () => {
  return (
    <section className="py-20 sm:py-28 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <img src={roseImg} alt="" className="w-12 h-12 mx-auto mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Dear Raji,
          </h2>
          <p
            className="text-xl sm:text-2xl text-primary italic"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Here are all the reasons why you're amazing...
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          {praises.map((praise, index) => {
            const Icon = praise.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border/50 hover:shadow-xl transition-shadow duration-500">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center ${praise.color}`}>
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">
                        {praise.title}
                      </h3>
                      <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {praise.message}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PraiseSection;
