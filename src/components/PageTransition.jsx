import { motion } from "framer-motion";

const PageTransitionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
}
  export const PageTransition = ({children}) => (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={PageTransitionVariants}
      transition={{duration: 1, ease: "easeInOut"}}
    >
      {children}
    </motion.div>
  );

