import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Gift } from "lucide-react";

interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
}

const EnvelopeOpener = ({ onOpen }: { onOpen: () => void }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  const colors = [
    "hsl(340, 65%, 47%)",
    "hsl(42, 75%, 55%)",
    "hsl(340, 40%, 80%)",
    "hsl(300, 50%, 70%)",
    "hsl(20, 80%, 60%)",
    "hsl(180, 50%, 60%)",
  ];

  const triggerConfetti = useCallback(() => {
    const pieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
      size: 6 + Math.random() * 8,
    }));
    setConfetti(pieces);
  }, []);

  const handleOpen = () => {
    setIsOpening(true);
    triggerConfetti();
    setTimeout(() => onOpen(), 2500);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-primary/10 via-background to-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="confetti-particle"
          style={{
            left: `${piece.left}%`,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        />
      ))}

      <div className="text-center px-4">
        {!isOpening ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <motion.p
              className="font-body text-sm text-muted-foreground tracking-[0.25em] uppercase mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              A special surprise for you
            </motion.p>

            {/* Envelope */}
            <motion.div
              className="relative cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpen}
            >
              {/* Envelope body */}
              <div className="w-64 h-44 md:w-80 md:h-52 bg-gradient-to-b from-primary/80 to-primary rounded-lg shadow-2xl relative overflow-hidden">
                {/* Envelope flap */}
                <div
                  className="absolute top-0 left-0 right-0 h-0 border-l-[128px] md:border-l-[160px] border-r-[128px] md:border-r-[160px] border-t-[80px] md:border-t-[100px] border-l-transparent border-r-transparent border-t-primary/90"
                  style={{ filter: "brightness(0.85)" }}
                />
                {/* Heart seal */}
                <div className="absolute top-12 md:top-14 left-1/2 -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg">
                    <Heart className="h-6 w-6 text-accent-foreground fill-accent-foreground" />
                  </div>
                </div>
                {/* Letter peek */}
                <div className="absolute bottom-3 left-4 right-4 h-20 bg-background/95 rounded-t-md shadow-inner flex items-center justify-center">
                  <span className="font-display text-primary text-sm italic">For Raji ♥</span>
                </div>
              </div>

              <motion.p
                className="mt-6 text-primary font-body text-sm flex items-center gap-2 justify-center"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Gift className="h-4 w-4" />
                Tap to open your surprise
                <Gift className="h-4 w-4" />
              </motion.p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            {/* Opening envelope animation */}
            <div className="relative w-64 h-44 md:w-80 md:h-52">
              {/* Letter rising out */}
              <motion.div
                className="absolute inset-x-4 bottom-3 bg-background rounded-md shadow-xl p-6 flex flex-col items-center justify-center"
                initial={{ y: 0 }}
                animate={{ y: -180 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              >
                <p className="font-display text-primary text-lg">Happy Birthday</p>
                <p className="font-cursive text-2xl text-foreground" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  Raji ✨
                </p>
              </motion.div>
              {/* Envelope body */}
              <div className="w-full h-full bg-gradient-to-b from-primary/80 to-primary rounded-lg shadow-2xl" />
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default EnvelopeOpener;
