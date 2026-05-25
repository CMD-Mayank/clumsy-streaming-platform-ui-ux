import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial, Float, ContactShadows, Lightformer, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function Panda() {
  return (
    <group scale={0.85}>
      {/* Body/Head */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.1} />
      </mesh>
      {/* Ears */}
      <mesh position={[-0.7, 0.7, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#2d2d2d" roughness={0.2} />
      </mesh>
      <mesh position={[0.7, 0.7, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#2d2d2d" roughness={0.2} />
      </mesh>
      {/* Eyes */}
      <mesh position={[-0.3, 0.15, 0.88]} rotation={[0, -0.2, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#111111" roughness={0} metalness={0.8} />
      </mesh>
      <mesh position={[0.3, 0.15, 0.88]} rotation={[0, 0.2, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#111111" roughness={0} metalness={0.8} />
      </mesh>
      {/* Eye highlights */}
      <mesh position={[-0.35, 0.22, 1.05]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.25, 0.22, 1.05]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      {/* Blush */}
      <mesh position={[-0.5, -0.1, 0.85]}>
        <sphereGeometry args={[0.15, 32, 16]} />
        <meshStandardMaterial color="#ff9eb5" roughness={0.4} />
      </mesh>
      <mesh position={[0.5, -0.1, 0.85]}>
        <sphereGeometry args={[0.15, 32, 16]} />
        <meshStandardMaterial color="#ff9eb5" roughness={0.4} />
      </mesh>
      {/* Nose */}
      <mesh position={[0, -0.1, 0.98]}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial color="#111111" roughness={0.2} />
      </mesh>
    </group>
  );
}

function Unicorn() {
  return (
    <group scale={0.85}>
      {/* Head */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshTransmissionMaterial 
          samples={4} thickness={2} roughness={0.1} chromaticAberration={0.05} color="#ffffff"
        />
      </mesh>
      {/* Horn */}
      <mesh position={[0, 1.15, 0.5]} rotation={[0.4, 0, 0]}>
        <coneGeometry args={[0.25, 1.4, 32]} />
        <MeshTransmissionMaterial 
          samples={4} thickness={1} iridescence={1} iridescenceIOR={1.5} color="#ffb6c1" chromaticAberration={0.1}
        />
      </mesh>
      {/* Eyes */}
      <mesh position={[-0.35, 0.2, 0.85]}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial color="#111111" roughness={0} metalness={0.5} />
      </mesh>
      <mesh position={[0.35, 0.2, 0.85]}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial color="#111111" roughness={0} metalness={0.5} />
      </mesh>
      {/* Snout */}
      <mesh position={[0, -0.2, 0.9]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#ffe4e1" roughness={0.3} />
      </mesh>
      {/* Blush */}
      <mesh position={[-0.45, 0, 0.8]}>
        <sphereGeometry args={[0.12, 32, 16]} />
        <meshStandardMaterial color="#ff9eb5" />
      </mesh>
      <mesh position={[0.45, 0, 0.8]}>
        <sphereGeometry args={[0.12, 32, 16]} />
        <meshStandardMaterial color="#ff9eb5" />
      </mesh>
    </group>
  );
}

function Lily() {
  return (
    <group scale={0.9} rotation={[-0.3, 0, 0]}>
      {/* Center Pistil */}
      <mesh position={[0, 0, 0.3]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#fffacd" emissive="#ffd700" emissiveIntensity={0.2} />
      </mesh>
      {/* Petals */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <mesh key={i} rotation={[0, 0, (i * Math.PI) / 3]}>
          <group position={[0, 0.8, 0]}>
            <mesh scale={[0.5, 1.2, 0.1]}>
              <sphereGeometry args={[1, 32, 32]} />
              <MeshTransmissionMaterial 
                samples={4} thickness={0.5} color="#ffb6c1" roughness={0.1} chromaticAberration={0.04}
              />
            </mesh>
          </group>
        </mesh>
      ))}
    </group>
  );
}

function Ribbon() {
  return (
    <group scale={1.2}>
      <mesh>
        <torusKnotGeometry args={[0.5, 0.15, 128, 32]} />
        <MeshTransmissionMaterial 
          samples={4}
          thickness={1.5}
          chromaticAberration={0.08}
          color="#ff69b4"
          roughness={0.05}
          iridescence={1}
        />
      </mesh>
    </group>
  );
}

function FloatingStar({ position, scale = 1, speed = 1, color = "#ffd700" }: any) {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.02 * speed;
      ref.current.rotation.z += 0.01 * speed;
    }
  });

  return (
    <Float floatIntensity={2} rotationIntensity={2} speed={speed * 2}>
      <group position={position} scale={scale} ref={ref}>
        <mesh>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} metalness={0.8} roughness={0.1} />
        </mesh>
      </group>
    </Float>
  );
}

function ClumsyFloater({ children, speed, position, rotation, offset }: any) {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime() + offset;
      ref.current.rotation.x = Math.sin(t * speed) * 0.15;
      ref.current.rotation.y = Math.cos(t * speed * 0.8) * 0.2;
      ref.current.rotation.z = Math.sin(t * speed * 1.2) * 0.1;
    }
  });

  return (
    <Float floatIntensity={8} rotationIntensity={5} speed={speed}>
      <group position={position} rotation={rotation} ref={ref}>
        {children}
      </group>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 40 }} dpr={[1, 2]}>
        <fog attach="fog" args={['#FDFBF7', 10, 25]} />
        <ambientLight intensity={1.2} />
        <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} color="#fff0f5" />
        <spotLight position={[-10, -10, -10]} angle={0.3} penumbra={1} intensity={1.5} color="#ffffff" />
        
        <Sparkles count={80} scale={12} size={4} speed={0.4} opacity={0.6} color="#ffb6c1" />
        
        <ClumsyFloater position={[-3.8, 1.8, -1]} speed={1.2} offset={0} rotation={[0, 0.4, 0]}>
          <Panda />
        </ClumsyFloater>
        
        <ClumsyFloater position={[3.8, 1.2, 0]} speed={1} offset={10} rotation={[-0.1, -0.5, 0]}>
          <Unicorn />
        </ClumsyFloater>
        
        <ClumsyFloater position={[-2.8, -2.5, -2]} speed={1.5} offset={5} rotation={[0.3, 0.2, 0]}>
          <Lily />
        </ClumsyFloater>
        
        <ClumsyFloater position={[3.2, -2.2, -1]} speed={1.4} offset={15} rotation={[-0.2, 0.4, 0]}>
          <Ribbon />
        </ClumsyFloater>
        
        {/* Floating Stars */}
        <FloatingStar position={[0, 3, -3]} scale={0.6} speed={1.5} color="#ff9eb5" />
        <FloatingStar position={[-5, -1, -4]} scale={0.8} speed={1} color="#ffea70" />
        <FloatingStar position={[5, 4, -2]} scale={0.5} speed={2} color="#ffb6c1" />
        <FloatingStar position={[1, -3, -1]} scale={0.4} speed={1.2} color="#ffe4e1" />
        
        <Environment resolution={256}>
          <group rotation={[-Math.PI / 4, -0.3, 0]}>
            <Lightformer intensity={5} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <Lightformer intensity={3} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
            <Lightformer intensity={3} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
          </group>
        </Environment>
        
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={25} blur={3} far={5} color="#ffb6c1" />
      </Canvas>
    </div>
  );
}
