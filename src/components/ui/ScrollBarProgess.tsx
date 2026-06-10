import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-200 pointer-events-none origin-left"
      style={{
        scaleX,
        height: "2px",
        backgroundColor: "#fff",
      }}
      aria-hidden="true"
    />
  );
}