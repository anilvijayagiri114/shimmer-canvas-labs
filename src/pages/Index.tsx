import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EnvelopeOpener from "@/components/EnvelopeOpener";
import BirthdayHero from "@/components/BirthdayHero";
import PraiseSection from "@/components/PraiseSection";
import BirthdayCountdown from "@/components/BirthdayCountdown";
import MemoriesSection from "@/components/MemoriesSection";
import BirthdayLetter from "@/components/BirthdayLetter";
import BirthdayFooter from "@/components/BirthdayFooter";

const Index = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence>
        {!opened && <EnvelopeOpener onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      {opened && (
        <>
          <BirthdayHero />
          <PraiseSection />
          <MemoriesSection />
          <BirthdayCountdown />
          <BirthdayLetter />
          <BirthdayFooter />
        </>
      )}
    </div>
  );
};

export default Index;
