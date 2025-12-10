import { useRef, useMemo, memo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  ContactShadows,
  MeshTransmissionMaterial,
  Sphere,
} from "@react-three/drei";
import * as THREE from "three";
import { Box } from "@mui/material";

// Floating particles component
const FloatingParticles = memo(({ count = 50 }: { count?: number }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
      ] as [number, number, number],
      scale: Math.random() * 0.08 + 0.02,
      speed: Math.random() * 0.5 + 0.2,
    }));
  }, [count]);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const particle = particles[i];
        child.position.y +=
          Math.sin(state.clock.elapsedTime * particle.speed + i) * 0.002;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.scale, 8, 8]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
});

// Glass sphere component
const GlassSphere = memo(
  ({
    position,
    scale = 1,
  }: {
    position: [number, number, number];
    scale?: number;
  }) => {
    return (
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <Sphere args={[scale, 64, 64]} position={position}>
          <MeshTransmissionMaterial
            backside
            samples={16}
            resolution={512}
            transmission={0.95}
            roughness={0.05}
            thickness={0.5}
            ior={1.5}
            chromaticAberration={0.06}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.3}
            temporalDistortion={0.1}
            clearcoat={1}
            attenuationDistance={0.5}
            attenuationColor="#ffffff"
            color="#ffffff"
          />
        </Sphere>
      </Float>
    );
  }
);

// Metallic ring component
const MetallicRing = memo(
  ({
    position,
    rotation,
  }: {
    position: [number, number, number];
    rotation?: [number, number, number];
  }) => {
    const ringRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
      if (ringRef.current) {
        ringRef.current.rotation.z = state.clock.elapsedTime * 0.2;
      }
    });

    return (
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh
          ref={ringRef}
          position={position}
          rotation={rotation || [0, 0, 0]}
        >
          <torusGeometry args={[1, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#ffffff"
            roughness={0}
            metalness={1}
            envMapIntensity={2}
          />
        </mesh>
      </Float>
    );
  }
);

const FloatingShapes = memo(() => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = -state.clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Main Abstract Shape - Torus Knot */}
        <mesh position={[0, 0, 0]}>
          <torusKnotGeometry args={[1.2, 0.25, 128, 32]} />
          <meshStandardMaterial
            color="#ffffff"
            roughness={0}
            metalness={1}
            envMapIntensity={2}
          />
        </mesh>

        {/* Floating Icosahedron */}
        <mesh position={[2.5, 1.5, -1]}>
          <icosahedronGeometry args={[0.35, 0]} />
          <meshStandardMaterial color="#888888" roughness={0} metalness={1} />
        </mesh>

        {/* Floating Sphere */}
        <mesh position={[-2.5, -1.5, 1]}>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial color="#666666" roughness={0} metalness={1} />
        </mesh>

        {/* Octahedron */}
        <mesh position={[-1.8, 2, 0.5]}>
          <octahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial color="#aaaaaa" roughness={0} metalness={1} />
        </mesh>

        {/* Small dodecahedron */}
        <mesh position={[1.5, -2, -0.5]}>
          <dodecahedronGeometry args={[0.25, 0]} />
          <meshStandardMaterial color="#999999" roughness={0} metalness={1} />
        </mesh>
      </Float>

      {/* Glass spheres */}
      <GlassSphere position={[3, 0, 1]} scale={0.6} />
      <GlassSphere position={[-3, 1, -1]} scale={0.4} />

      {/* Metallic rings */}
      <MetallicRing position={[0, 2.5, -2]} rotation={[Math.PI / 4, 0, 0]} />
      <MetallicRing
        position={[0, -2.5, -2]}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />
    </group>
  );
});

interface Scene3DProps {
  variant?: "hero" | "minimal" | "ambient";
  intensity?: number;
}

const Scene3D = memo(({ variant = "hero", intensity = 1 }: Scene3DProps) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        opacity: intensity,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, variant === "minimal" ? 8 : 6], fov: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
        frameloop="always"
        flat
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.25}
            penumbra={1}
            intensity={2}
          />
          <pointLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
          <pointLight position={[5, 5, 5]} intensity={0.5} color="#aaaaff" />

          {variant === "hero" && <FloatingShapes />}
          {variant === "minimal" && (
            <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
              <mesh>
                <torusGeometry args={[2, 0.02, 16, 100]} />
                <meshStandardMaterial
                  color="#ffffff"
                  roughness={0}
                  metalness={1}
                />
              </mesh>
            </Float>
          )}
          {variant === "ambient" && <FloatingParticles count={30} />}

          <FloatingParticles count={variant === "hero" ? 40 : 20} />
          <Environment preset="studio" />
          <ContactShadows
            position={[0, -3, 0]}
            opacity={0.3}
            scale={15}
            blur={3}
            far={5}
            color="#000000"
          />
        </Suspense>
      </Canvas>
    </Box>
  );
});

export default Scene3D;
