import { TeamGallery } from "./TeamGallery";
import { motion } from "framer-motion";

function TeamSection({ team }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <TeamGallery members={team} />
    </motion.div>
  );
}

export default TeamSection;
export { TeamSection };
