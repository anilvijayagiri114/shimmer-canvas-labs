import { Heart, Sparkles } from "lucide-react";

const BirthdayFooter = () => {
  return (
    <footer className="py-16 px-4 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <Sparkles className="h-8 w-8 text-accent mx-auto mb-6" />
        <h3
          className="text-3xl sm:text-4xl mb-4 text-accent"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Happy Birthday Raji!
        </h3>
        <p className="font-display text-xl sm:text-2xl mb-4 text-background/90">
          May all your dreams come true 🌟
        </p>
        <p className="font-body text-background/50 mb-8 max-w-md mx-auto text-sm">
          This little corner of the internet was made just for you, Rajeswari.
          Because you deserve to know how truly special you are. Always.
        </p>

        <div className="border-t border-background/10 pt-6">
          <p className="font-body text-xs text-background/30">
            Made with <Heart className="inline h-3 w-3 text-primary fill-primary" /> just for you — 11th March 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BirthdayFooter;
