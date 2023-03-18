import { useContext } from "react";
import { PageContext } from "@/context/PageContext";
import { motion } from "framer-motion";

import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  fullWidth?: boolean;
  rightToLeft?: boolean;
};

function TextBlock({ children, fullWidth = true, rightToLeft = false }: Props) {
  const { fadeInFaster } = useContext(PageContext);

  return (
    <motion.div
      className={`tb ${!fullWidth && "tb--narrow"}`}
      {...fadeInFaster}
    >
      {children}
    </motion.div>
  );
}

export default TextBlock;
