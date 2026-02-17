'use client'

import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import type { Mesh } from 'three'

export function HeroScene() {
  const meshRef = useRef<Mesh>(null)
  const wireRef = useRef<Mesh>(null)
  const { pointer } = useThree()

  useFrame((_, delta) => {
    if (!meshRef.current || !wireRef.current) return
    meshRef.current.rotation.y += delta * 0.15
    wireRef.current.rotation.y += delta * 0.15
    meshRef.current.rotation.x += (pointer.y * 0.3 - meshRef.current.rotation.x) * 0.02
    meshRef.current.rotation.z += (pointer.x * 0.3 - meshRef.current.rotation.z) * 0.02
    wireRef.current.rotation.x = meshRef.current.rotation.x
    wireRef.current.rotation.z = meshRef.current.rotation.z
  })

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[3, 3, 3]} color="#00f0ff" intensity={0.8} />
      <pointLight position={[-3, -3, 3]} color="#a855f7" intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={0.3} />

      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.8, 1]} />
          <meshStandardMaterial
            color="#1a0030"
            metalness={0.95}
            roughness={0.1}
            emissive="#a855f7"
            emissiveIntensity={0.05}
          />
        </mesh>
        <mesh ref={wireRef}>
          <icosahedronGeometry args={[1.85, 1]} />
          <meshBasicMaterial color="#00f0ff" wireframe transparent opacity={0.15} />
        </mesh>
      </Float>
    </>
  )
}
