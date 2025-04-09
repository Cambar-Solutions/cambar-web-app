import { TeamCard } from "./TeamCard";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } }
};

export function TeamList({ members }) {
  return (
    <motion.div 
      className="flex flex-wrap gap-8 justify-center py-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {members.map((member) => (
        <motion.div key={member.id} variants={item}>
          <TeamCard member={member} />
        </motion.div>
      ))}
    </motion.div>
  );
}
