import { useState } from "react";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import JourneyDialog from "./JourneyDialog";

const BirthdayFooter = () => {
  const [sparkleClicks, setSparkleClicks] = useState(0);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);

  const handleSparkleClick = () => {
    const newClicks = sparkleClicks + 1;
    setSparkleClicks(newClicks);

    if (newClicks === 11) {
      setShowPasswordDialog(true);
      setSparkleClicks(0); // Reset counter
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '114912') {
      setIsAuthenticated(true);
      setShowPasswordDialog(false);
    } else {
      alert('Incorrect password!');
      setPassword('');
    }
  };

  return (
    <>
      <footer className="py-16 px-4 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles
            className="h-8 w-8 text-accent mx-auto mb-6 cursor-pointer hover:scale-110 transition-transform"
            onClick={handleSparkleClick}
          />
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

      <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Enter Password</DialogTitle>
            <DialogDescription>
              Please enter the password to access our private journey.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {isAuthenticated && (
        <JourneyDialog onClose={() => setIsAuthenticated(false)} />
      )}
    </>
  );
};

export default BirthdayFooter;
