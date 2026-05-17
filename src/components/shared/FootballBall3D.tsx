"use client"

import { Suspense, useMemo, useRef, useState } from "react"
import { Box3, Group as ThreeGroup, Mesh, MeshStandardMaterial, Vector3 } from "three"
import type { Group, Material } from "three"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js"

import { useMediaQuery } from "@/hooks/useMediaQuery"

interface FootballBall3DProps {
  className?: string
}

function FootballMesh() {
  const ballRef = useRef<Group>(null)
  const [isInteracting, setIsInteracting] = useState(false)
  const footballObject = useLoader(OBJLoader, "/balon_3D.obj")
  const { model, scale } = useMemo(() => {
    const model = new ThreeGroup()
    const baseMaterial = new MeshStandardMaterial({
      color: "#f1eee8",
      roughness: 0.58,
      metalness: 0.02,
    })
    const panelMaterial = new MeshStandardMaterial({
      color: "#121212",
      roughness: 0.64,
      metalness: 0.02,
    })
    const materialForName = (name: string) =>
      name.toLowerCase().includes("black") ? panelMaterial : baseMaterial

    footballObject.children
      .filter((child) => child.name.startsWith("Solid."))
      .forEach((child) => model.add(child.clone(true)))

    const box = new Box3().setFromObject(model)
    const center = new Vector3()
    const size = new Vector3()

    box.getCenter(center)
    box.getSize(size)
    model.position.copy(center).multiplyScalar(-1)

    model.traverse((child) => {
      const mesh = child as Mesh

      if (mesh.isMesh) {
        mesh.castShadow = true
        mesh.receiveShadow = true

        const currentMaterial = mesh.material as Material | Material[]
        mesh.material = Array.isArray(currentMaterial)
          ? currentMaterial.map((material) => materialForName(material.name))
          : materialForName(currentMaterial.name || mesh.name)
      }
    })

    const maxDimension = Math.max(size.x, size.y, size.z)

    return {
      model,
      scale: maxDimension > 0 ? 2 / maxDimension : 1,
    }
  }, [footballObject])

  useFrame((_, delta) => {
    if (!isInteracting && ballRef.current) {
      ballRef.current.rotation.y += delta * 0.45
    }
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <group ref={ballRef} scale={scale} rotation={[0.2, -0.4, 0]}>
        <primitive object={model} />
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
        <Suspense fallback={null}>
          <FootballMesh />
        </Suspense>
      </Canvas>
    </div>
  )
}
