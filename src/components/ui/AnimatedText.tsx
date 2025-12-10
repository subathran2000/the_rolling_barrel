import { motion, type Variants } from 'framer-motion';
import { Typography, type TypographyProps } from '@mui/material';

interface AnimatedTextProps extends TypographyProps {
  text: string;
  delay?: number;
}

const AnimatedText = ({ text, delay = 0, sx, ...props }: AnimatedTextProps) => {
  // Split per letter for more "Lusion" style fluid reveal, or per word.
  // Lusion is usually per-character or very smooth per-word. Let's do per-word for readability.
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 * i + delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: props.align === 'center' ? 'center' : 'flex-start' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} style={{ marginRight: "0.25em" }}>
          <Typography
            component="span"
            {...props}
            sx={{
              ...sx,
              display: "inline-block",
            }}
          >
            {word}
          </Typography>
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
