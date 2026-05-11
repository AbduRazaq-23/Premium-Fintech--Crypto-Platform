import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function RealCoin() {
  return (
    <group rotation={[0.3, 0.4, 0]}>
      {/* MAIN COIN */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[2.2, 2.2, 0.5, 128]} />

        <meshPhysicalMaterial
          color="#FFD700"
          metalness={1}
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0}
          reflectivity={1}
        />
      </mesh>

      {/* FRONT DETAIL */}
      <mesh position={[0, 0, 0.26]}>
        <cylinderGeometry args={[1.7, 1.7, 0.05, 128]} />

        <meshStandardMaterial color="#ffcc00" metalness={1} roughness={0.2} />
      </mesh>

      {/* BACK DETAIL */}
      <mesh position={[0, 0, -0.26]}>
        <cylinderGeometry args={[1.7, 1.7, 0.05, 128]} />

        <meshStandardMaterial color="#ffcc00" metalness={1} roughness={0.2} />
      </mesh>

      {/* CENTER ICON */}
      <mesh position={[0, 0, 0.31]}>
        <torusGeometry args={[0.7, 0.18, 30, 100]} />

        <meshStandardMaterial color="#111" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* EDGE RING */}
      <mesh>
        <torusGeometry args={[2.15, 0.07, 20, 100]} />

        <meshStandardMaterial color="#fff2a8" metalness={1} roughness={0.1} />
      </mesh>
    </group>
  );
}

export default function Coin3D() {
  return (
    <div
      className="
        w-full
        h-[380px]
        sm:h-[500px]
        md:h-[600px]
        lg:h-[700px]
      "
    >
      <Canvas
        shadows
        camera={{
          position: [0, 0, 7],
          fov: 45,
        }}
      >
        {/* LIGHTS */}
        <ambientLight intensity={2} />

        <directionalLight position={[5, 5, 5]} intensity={4} color="#FFD700" />

        <pointLight position={[-5, -5, 5]} intensity={2} color="#fff4b0" />

        {/* FLOATING COIN */}
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <RealCoin />
        </Float>
      </Canvas>
    </div>
  );
}
