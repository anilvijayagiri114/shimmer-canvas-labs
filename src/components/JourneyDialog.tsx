import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import TimelineSection from './TimelineSection';
import PrivateLetter from './PrivateLetter';

interface JourneyDialogProps {
  onClose: () => void;
}

const JourneyDialog: React.FC<JourneyDialogProps> = ({ onClose }) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            🌟 Our Journey 🌟
          </DialogTitle>
          <DialogDescription className="text-center">
            A private collection of our most cherished memories and moments
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-8">
          <TimelineSection />
          <PrivateLetter />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JourneyDialog;