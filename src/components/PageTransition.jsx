import { motion } from "framer-motion";

const opacityAnimation = {
  initial: { opacity: 0.6 },
  animate: { opacity: 1 },
  exit: { opacity: 0.7 },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      transition={{ ease: "easeInOut", duration: 0.4 }}
      variants={opacityAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
