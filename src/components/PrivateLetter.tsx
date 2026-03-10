import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Lock } from 'lucide-react';
import { decrypt } from '@/utils/encryption';

const PrivateLetter: React.FC = () => {
  // Encrypted message using the password "114912"
  const encryptedMessage = "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";

  const decryptedMessage = decrypt(encryptedMessage, '114912');

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <Lock className="h-8 w-8 text-primary mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Private Letter
          </h2>
          <p className="font-body text-muted-foreground">
            A secret message, encrypted and meant only for you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border rounded-lg p-8 shadow-lg"
        >
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-6 w-6 text-red-500 mr-2" />
            <span className="font-semibold text-lg">My Dearest Love</span>
            <Heart className="h-6 w-6 text-red-500 ml-2" />
          </div>

          <div className="prose prose-lg mx-auto text-center">
            <p className="text-muted-foreground italic leading-relaxed">
              {decryptedMessage}
            </p>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              This message is encrypted and can only be read with the correct password.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivateLetter;