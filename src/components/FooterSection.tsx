import { Heart, Instagram, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 px-4 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <Heart className="h-8 w-8 text-primary mx-auto mb-6 fill-primary" />
        <h3 className="font-display text-2xl md:text-3xl mb-4">
          Forever & Always
        </h3>
        <p className="font-body text-background/60 mb-8 max-w-md mx-auto text-sm">
          Thank you for being part of our journey. Here's to a lifetime of love,
          laughter, and happily ever after.
        </p>

        <div className="flex items-center justify-center gap-6 mb-8">
          <a href="#" className="text-background/40 hover:text-primary transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-background/40 hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <div className="border-t border-background/10 pt-6">
          <p className="font-body text-xs text-background/30">
            Made with <Heart className="inline h-3 w-3 text-primary fill-primary" /> — Our Love Story © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
