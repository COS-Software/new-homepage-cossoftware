import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sparkles,
  Icosahedron,
  Torus,
  Octahedron,
} from "@react-three/drei";
import * as THREE from "three";

/** Central morphing "core" sphere with a living, distorted surface. */
function Core() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = t * 0.12;
    mesh.current.rotation.y = t * 0.18;
  });

  return (
    <Icosahedron ref={mesh} args={[1.35, 16]}>
      <MeshDistortMaterial
        color="#5b5bff"
        emissive="#2a1d8f"
        emissiveIntensity={0.55}
        roughness={0.15}
        metalness={0.7}
        distort={0.42}
        speed={1.6}
      />
    </Icosahedron>
  );
}

/** A glowing wireframe shell that wraps the core for an "energy field" look. */
function Shell() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.y = -t * 0.25;
    mesh.current.rotation.z = t * 0.1;
  });
  return (
    <Icosahedron ref={mesh} args={[2.05, 2]}>
      <meshBasicMaterial color="#7c87ff" wireframe transparent opacity={0.18} />
    </Icosahedron>
  );
}

/** Orbiting decorative geometry. */
function OrbitingShapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[2.8, 1.1, -1]}>
          <Octahedron args={[0.42, 0]}>
            <meshStandardMaterial
              color="#a78bfa"
              emissive="#6d28d9"
              emissiveIntensity={0.4}
              roughness={0.2}
              metalness={0.6}
            />
          </Octahedron>
        </mesh>
      </Float>

      <Float speed={1.4} rotationIntensity={2} floatIntensity={1.6}>
        <Torus args={[0.45, 0.14, 16, 48]} position={[-3, -0.6, -0.5]}>
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0ea5e9"
            emissiveIntensity={0.35}
            roughness={0.25}
            metalness={0.5}
          />
        </Torus>
      </Float>

      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={2.4}>
        <mesh position={[-2.4, 1.6, 0.5]}>
          <dodecahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#4338ca"
            emissiveIntensity={0.45}
            roughness={0.2}
            metalness={0.6}
          />
        </mesh>
      </Float>

      <Float speed={2.4} rotationIntensity={1} floatIntensity={1.8}>
        <mesh position={[2.5, -1.5, 0.4]}>
          <icosahedronGeometry args={[0.26, 0]} />
          <meshStandardMaterial
            color="#c4b5fd"
            emissive="#7c3aed"
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.7}
          />
        </mesh>
      </Float>
    </>
  );
}

/** Whole scene reacts to pointer for a parallax / "tilt toward cursor" feel. */
function Scene() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const targetX = state.pointer.y * 0.35;
    const targetY = state.pointer.x * 0.5;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetX,
      0.05
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetY,
      0.05
    );
  });

  const lights = useMemo(
    () => (
      <>
        <ambientLight intensity={0.35} />
        <pointLight position={[5, 5, 5]} intensity={120} color="#6366f1" />
        <pointLight position={[-5, -3, 2]} intensity={90} color="#a855f7" />
        <pointLight position={[0, 3, -5]} intensity={70} color="#22d3ee" />
        <spotLight
          position={[0, 6, 4]}
          angle={0.5}
          penumbra={1}
          intensity={60}
          color="#ffffff"
        />
      </>
    ),
    []
  );

  return (
    <group ref={group}>
      {lights}
      <Core />
      <Shell />
      <OrbitingShapes />
      <Sparkles
        count={80}
        scale={[10, 6, 6]}
        size={3}
        speed={0.4}
        opacity={0.7}
        color="#a5b4fc"
      />
    </group>
  );
}

export default function Hero3D({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
