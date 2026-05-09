import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { COLORS } from '@/data'

// ── Particle Field ────────────────────────────────────────────────────────────
function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const count = 4000

  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20
  }

  useFrame((_, delta) => {
    ref.current.rotation.x -= delta * 0.02
    ref.current.rotation.y -= delta * 0.03
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={COLORS.electric}
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

// ── Floating Orb ──────────────────────────────────────────────────────────────
interface OrbProps {
  position: [number, number, number]
  color: string
  speed?: number
}

function FloatingOrb({ position, color, speed = 1 }: OrbProps) {
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh position={position}>
        <sphereGeometry args={[0.6, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={0.8}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  )
}

// ── Scene Root ────────────────────────────────────────────────────────────────
export default function HeroScene() {
  const { mouse } = useThree()
  const groupRef = useRef<THREE.Group>(null!)

  useFrame(() => {
    groupRef.current.rotation.y += (mouse.x * 0.3 - groupRef.current.rotation.y) * 0.05
    groupRef.current.rotation.x += (-mouse.y * 0.2 - groupRef.current.rotation.x) * 0.05
  })

  return (
    <group ref={groupRef}>
      <ParticleField />
      <FloatingOrb position={[2.5,  0.5, -2]} color={COLORS.navy}     speed={1.2} />
      <FloatingOrb position={[-2,  -0.5, -1]} color={COLORS.electric} speed={0.8} />
      <FloatingOrb position={[0.5,  1.5, -3]} color={COLORS.mid}      speed={1.5} />
      <ambientLight intensity={0.3} />
      <pointLight position={[5,  5,  5]}  color={COLORS.electric} intensity={2} />
      <pointLight position={[-5, -5, -5]} color={COLORS.sky}      intensity={1} />
    </group>
  )
}
