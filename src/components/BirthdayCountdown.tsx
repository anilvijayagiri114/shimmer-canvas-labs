import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const BirthdayCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const birthday = new Date("2026-03-11T00:00:00");

    const update = () => {
      const now = new Date();
      const diff = birthday.getTime() - now.getTime();

      if (diff <= 0) {
        setIsBirthday(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className="py-20 sm:py-24 px-4 bg-primary/5">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Clock className="h-6 w-6 text-primary mx-auto mb-4" />

          {isBirthday ? (
            <>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                🎉 It's Your Birthday Today! 🎉
              </h2>
              <p
                className="text-2xl sm:text-3xl text-primary"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                Happy Birthday Raji! Make a wish! 🎂
              </p>
            </>
          ) : (
            <>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
                Counting Down to Your Day
              </h2>
              <p className="font-body text-muted-foreground mb-10 text-sm sm:text-base">
                March 11, 2026 — the day the world got its most precious gift
              </p>

              <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-md mx-auto">
                {timeBlocks.map((block, i) => (
                  <motion.div
                    key={block.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-lg border border-border/50"
                  >
                    <span className="font-display text-2xl sm:text-4xl font-bold text-primary block">
                      {String(block.value).padStart(2, "0")}
                    </span>
                    <span className="font-body text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                      {block.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BirthdayCountdown;
