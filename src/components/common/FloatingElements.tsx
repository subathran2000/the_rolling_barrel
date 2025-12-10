import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { memo, useMemo } from "react";

interface FloatingElementsProps {
  variant?: "light" | "dark";
  density?: "sparse" | "normal" | "dense";
}

const FloatingElements = memo(
  ({ variant = "light", density = "normal" }: FloatingElementsProps) => {
    const colors =
      variant === "light"
        ? {
            primary: "rgba(255, 255, 255, 0.06)",
            secondary: "rgba(136, 136, 136, 0.08)",
            accent: "rgba(255, 255, 255, 0.04)",
          }
        : {
            primary: "rgba(255, 255, 255, 0.08)",
            secondary: "rgba(136, 136, 136, 0.12)",
            accent: "rgba(255, 255, 255, 0.05)",
          };

    const particleCount =
      density === "sparse" ? 4 : density === "dense" ? 12 : 8;

    const particles = useMemo(
      () =>
        Array.from({ length: particleCount }, (_, i) => ({
          id: i,
          size: Math.random() * 100 + 50,
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: Math.random() * 10 + 15,
          delay: Math.random() * 5,
        })),
      [particleCount]
    );

    return (
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Morphing gradient blob */}
        <Box
          component={motion.div}
          animate={{
            borderRadius: [
              "60% 40% 30% 70%/60% 30% 70% 40%",
              "30% 60% 70% 40%/50% 60% 30% 60%",
              "60% 40% 30% 70%/60% 30% 70% 40%",
            ],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          sx={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: { xs: 200, md: 400 },
            height: { xs: 200, md: 400 },
            background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />

        {/* Secondary morphing blob */}
        <Box
          component={motion.div}
          animate={{
            borderRadius: [
              "40% 60% 60% 40%/40% 40% 60% 60%",
              "60% 40% 40% 60%/60% 60% 40% 40%",
              "40% 60% 60% 40%/40% 40% 60% 60%",
            ],
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          sx={{
            position: "absolute",
            bottom: "15%",
            left: "10%",
            width: { xs: 150, md: 300 },
            height: { xs: 150, md: 300 },
            background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)`,
            filter: "blur(50px)",
          }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <Box
            key={particle.id}
            component={motion.div}
            animate={{
              y: [0, -30, 0],
              x: [0, particle.id % 2 === 0 ? 20 : -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
            sx={{
              position: "absolute",
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${
                particle.id % 3 === 0
                  ? colors.primary
                  : particle.id % 3 === 1
                  ? colors.secondary
                  : colors.accent
              } 0%, transparent 70%)`,
              filter: "blur(30px)",
            }}
          />
        ))}

        {/* Decorative rotating ring */}
        <Box
          component={motion.div}
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          sx={{
            position: "absolute",
            top: "30%",
            right: "15%",
            width: { xs: 100, md: 200 },
            height: { xs: 100, md: 200 },
            borderRadius: "50%",
            border: `1px dashed ${
              variant === "light"
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(255, 255, 255, 0.1)"
            }`,
            display: { xs: "none", md: "block" },
          }}
        />

        {/* Secondary rotating ring */}
        <Box
          component={motion.div}
          animate={{ rotate: -360 }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          sx={{
            position: "absolute",
            bottom: "25%",
            left: "20%",
            width: { xs: 80, md: 150 },
            height: { xs: 80, md: 150 },
            borderRadius: "50%",
            border: `1px solid ${
              variant === "light"
                ? "rgba(136, 136, 136, 0.15)"
                : "rgba(136, 136, 136, 0.12)"
            }`,
            display: { xs: "none", md: "block" },
          }}
        />

        {/* Gradient line accent */}
        <Box
          component={motion.div}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleX: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${
              variant === "light"
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(255, 255, 255, 0.1)"
            }, transparent)`,
            display: { xs: "none", lg: "block" },
          }}
        />
      </Box>
    );
  }
);

export default FloatingElements;
