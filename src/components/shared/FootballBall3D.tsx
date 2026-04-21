"use client"

import { useMemo, useRef, useState } from "react"
import type { Group } from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import { useMediaQuery } from "@/hooks/useMediaQuery"

interface FootballBall3DProps {
  className?: string
}

function FootballMesh() {
  const ballRef = useRef<Group>(null)
  const [isInteracting, setIsInteracting] = useState(false)

  const patchPositions = useMemo<[number, number, number][]>(
    () => [
      [0, 0.78, 0],
      [0.74, 0.26, 0],
      [-0.74, 0.26, 0],
      [0.45, -0.26, 0.58],
      [-0.45, -0.26, 0.58],
      [0.45, -0.26, -0.58],
      [-0.45, -0.26, -0.58],
      [0, -0.78, 0],
      [0.6, 0.4, 0.45],
      [-0.6, 0.4, 0.45],
      [0.6, 0.4, -0.45],
      [-0.6, 0.4, -0.45],
    ],
    []
  )

  useFrame((_, delta) => {
    if (!isInteracting && ballRef.current) {
      ballRef.current.rotation.y += delta * 0.45
    }
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <group ref={ballRef}>
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial color="#5f4637" roughness={0.65} metalness={0.05} />
        </mesh>
        {patchPositions.map((position, index) => (
          <mesh key={index} position={position}>
            <sphereGeometry args={[0.19, 20, 20]} />
            <meshStandardMaterial color="#111111" roughness={0.5} />
          </mesh>
        ))}
      </group>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        onStart={() => setIsInteracting(true)}
        onEnd={() => setIsInteracting(false)}
      />
    </>
  )
}

export default function FootballBall3D({ className }: FootballBall3DProps) {
  const isSmallScreen = useMediaQuery("(max-width: 767px)")
  const size = isSmallScreen ? 80 : 120

  return (
    <div className={className} style={{ width: size, height: size }}>
      <Canvas
        gl={{ alpha: true }}
        camera={{ position: [0, 0, 3.2], fov: 40 }}
        style={{ width: "100%", height: "100%" }}
      >
        <FootballMesh />
      </Canvas>
    </div>
  )
}
