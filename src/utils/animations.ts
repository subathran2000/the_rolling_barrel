import type { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const fadeInDown: Variants = {
  hidden: { 
    opacity: 0, 
    y: -60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const slideInFromBottom: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const rotateIn: Variants = {
  hidden: {
    opacity: 0,
    rotate: -10,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const shimmerAnimation = {
  backgroundPosition: ['200% 0', '-200% 0'],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "linear"
  }
};

export const heroTextAnimation: Variants = {
  hidden: { 
    opacity: 0,
    y: 100,
    filter: 'blur(10px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const letterAnimation: Variants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.05,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export const menuHoverAnimation = {
  scale: 1.05,
  y: -5,
  transition: {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1]
  }
};

export const cardHoverAnimation = {
  y: -10,
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
  transition: {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1]
  }
};

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

export const glowPulse = {
  boxShadow: [
    "0 0 0 0 rgba(255, 255, 255, 0.2)",
    "0 0 0 20px rgba(255, 255, 255, 0)",
  ],
  transition: {
    duration: 2.4,
    repeat: Infinity,
    ease: "easeOut" as const,
  },
};

export const tiltHoverTransition = {
  type: "spring" as const,
  stiffness: 260,
  damping: 20,
};

// Premium magnetic hover effect
export const magneticHover = {
  scale: 1.02,
  rotateX: 2,
  rotateY: -2,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 25,
  },
};

// Morphing blob animation
export const morphBlob = {
  borderRadius: [
    "60% 40% 30% 70%/60% 30% 70% 40%",
    "30% 60% 70% 40%/50% 60% 30% 60%",
    "60% 40% 30% 70%/60% 30% 70% 40%",
  ],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Rotating gradient animation
export const rotatingGradient = {
  background: [
    "linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(136, 136, 136, 0.05))",
    "linear-gradient(90deg, rgba(255, 255, 255, 0.05), rgba(136, 136, 136, 0.05))",
    "linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(136, 136, 136, 0.05))",
    "linear-gradient(270deg, rgba(255, 255, 255, 0.05), rgba(136, 136, 136, 0.05))",
    "linear-gradient(360deg, rgba(255, 255, 255, 0.05), rgba(136, 136, 136, 0.05))",
  ],
  transition: {
    duration: 10,
    repeat: Infinity,
    ease: "linear",
  },
};

// Staggered reveal with blur
export const blurReveal: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(20px)",
    y: 30,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Elastic pop animation
export const elasticPop: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15,
    },
  },
};

// Floating orb animation
export const floatingOrb = {
  x: [0, 30, -20, 0],
  y: [0, -40, 20, 0],
  scale: [1, 1.1, 0.9, 1],
  transition: {
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Text reveal animation (letter by letter)
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

export const letterReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

// Parallax depth effect
export const parallaxDepth = (depth: number) => ({
  y: depth * 50,
  transition: {
    type: "spring",
    stiffness: 100,
    damping: 30,
  },
});

// Ripple effect animation
export const rippleEffect = {
  scale: [1, 1.5, 2],
  opacity: [0.5, 0.25, 0],
  transition: {
    duration: 1,
    ease: "easeOut",
  },
};

// Card flip animation
export const cardFlip: Variants = {
  front: {
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  back: {
    rotateY: 180,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Glow on hover
export const glowOnHover = {
  boxShadow:
    "0 0 40px rgba(255, 255, 255, 0.2), 0 0 80px rgba(136, 136, 136, 0.1)",
  transition: {
    duration: 0.4,
    ease: "easeOut",
  },
};

