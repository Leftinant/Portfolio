import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInSection = ({ children }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "-15% 0% -15% 0%",
    amount: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -50,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}>
      {children}
    </motion.div>
  );
};

export default FadeInSection;
