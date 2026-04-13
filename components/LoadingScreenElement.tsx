import { AnimatePresence, motion } from "framer-motion";

interface LoadingScreenProps {
  isVisible: boolean;
}

export function LoadingScreen({ isVisible }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-background"
          data-ocid="loading-screen"
        >
          {/* Background glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-glow-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-secondary/5 blur-2xl" />
          </div>

          <div className="relative flex flex-col items-center gap-8">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative"
            >
              <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center shadow-glass animate-glow-pulse">
                <span className="font-display font-bold text-2xl text-primary">
                  PS
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-center"
            >
              <p className="font-display font-semibold text-foreground text-lg tracking-wide">
                Pankaj Sharma
              </p>
              <p className="font-mono text-xs text-muted-foreground mt-1 tracking-widest uppercase">
                Loading portfolio...
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-48 h-0.5 bg-muted rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 0.2,
                }}
                className="h-full w-1/2 bg-linear-to-r from-transparent via-primary to-transparent rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
