import { motion } from "motion/react";
import { MdErrorOutline as ErrorIcon } from "react-icons/md";

export default function PageErrorMessage({ isOpen, message }) {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: isOpen ? 0 : "-100%" }}
      className=" fixed top-0 w-full bg-red-500 p-2 flex justify-center gap-1.5"
    >
      <span className=" text-white text-lg font font-quicksand block text-center">
        {message}
      </span>

      <ErrorIcon color="white" size={30} />
    </motion.div>
  );
}
