import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const BirthdayCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const getNextBirthday = (now: Date) => {
      // birthday is always March 11
      const year = now.getFullYear();
      let next = new Date(year, 2, 11, 0, 0, 0); // month index 2 = March
      // if we've already passed March 11 this year, target next year
      if (now > next) {
        next = new Date(year + 1, 2, 11, 0, 0, 0);
      }
      return next;
    };

    const update = () => {
      const now = new Date();
      const nextBirthday = getNextBirthday(now);

      // determine if today *is* the birthday (ignore time)
      const isTodayBirthday =
        now.getMonth() === 2 && now.getDate() === 11;

      if (isTodayBirthday) {
        setIsBirthday(true);
        return;
      }

      setIsBirthday(false);
      const diff = nextBirthday.getTime() - now.getTime();
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
                {/* show the year of the upcoming birthday so it's dynamic */}
                March 11, {new Date().getFullYear() + (new Date() > new Date(new Date().getFullYear(), 2, 11) ? 1 : 0)} — the day the world got its most precious gift
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
