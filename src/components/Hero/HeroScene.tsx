import { useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { COLORS } from '@/data'

// ── Particle Field ────────────────────────────────────────────────────────────
function ParticleField({ isLight }: { isLight: boolean }) {
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
        opacity={isLight ? 0.2 : 0.6}
      />
    </Points>
  )
}

// ── Floating Orb ──────────────────────────────────────────────────────────────
interface OrbProps {
  position: [number, number, number]
  color: string
  speed?: number
  isLight: boolean
}

function FloatingShape({ position, color, speed = 1, isLight }: OrbProps) {
  return (
    <Float speed={speed} rotationIntensity={isLight ? 1 : 0.4} floatIntensity={1.5}>
      <mesh position={position}>
        {isLight ? (
          <octahedronGeometry args={[0.8, 0]} />
        ) : (
          <sphereGeometry args={[0.6, 64, 64]} />
        )}
        <MeshDistortMaterial
          color={color}
          distort={isLight ? 0 : 0.4}
          speed={2}
          roughness={isLight ? 1 : 0}
          metalness={isLight ? 0 : 0.8}
          transparent
          opacity={isLight ? 0.4 : 0.85}
          wireframe={isLight}
        />
      </mesh>
    </Float>
  )
}

// ── Scene Root ────────────────────────────────────────────────────────────────
export default function HeroScene() {
  const { mouse } = useThree()
  const groupRef = useRef<THREE.Group>(null!)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme') || 'dark'
          setTheme(newTheme)
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })
    setTheme(document.documentElement.getAttribute('data-theme') || 'dark')

    return () => observer.disconnect()
  }, [])

  const isLight = theme === 'light'

  useFrame(() => {
    groupRef.current.rotation.y += (mouse.x * 0.3 - groupRef.current.rotation.y) * 0.05
    groupRef.current.rotation.x += (-mouse.y * 0.2 - groupRef.current.rotation.x) * 0.05
  })

  return (
    <group ref={groupRef}>
      <ParticleField isLight={isLight} />
      
      {/* Circuit Board Effect only in light mode */}
      {isLight && (
        <group position={[0, 0, -10]}>
          <gridHelper 
            args={[50, 25, COLORS.sky, COLORS.navy]} 
            rotation={[Math.PI / 2, 0, 0]} 
          >
            <meshBasicMaterial transparent opacity={0.08} />
          </gridHelper>
          
          {/* Add "nodes" at intersections */}
          {Array.from({ length: 20 }).map((_, i) => (
            <mesh 
              key={i} 
              position={[
                (Math.random() - 0.5) * 30, 
                (Math.random() - 0.5) * 30, 
                0
              ]}
            >
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshBasicMaterial color={COLORS.electric} />
            </mesh>
          ))}
          
          {/* Add some horizontal/vertical paths */}
          {Array.from({ length: 10 }).map((_, i) => (
            <mesh 
              key={`path-${i}`} 
              position={[
                (Math.random() - 0.5) * 20, 
                (Math.random() - 0.5) * 20, 
                -0.1
              ]}
              rotation={[0, 0, Math.random() > 0.5 ? 0 : Math.PI / 2]}
            >
              <planeGeometry args={[10, 0.05]} />
              <meshBasicMaterial color={COLORS.sky} transparent opacity={0.2} />
            </mesh>
          ))}
        </group>
      )}

      {/* Conditionally position and shape elements */}
      <FloatingShape 
        position={isLight ? [3.5, 1.5, -2] : [2.5, 0.5, -2]} 
        color={COLORS.navy} 
        speed={1.2} 
        isLight={isLight} 
      />
      <FloatingShape 
        position={isLight ? [4.2, -1, -3] : [-2, -0.5, -1]} 
        color={COLORS.electric} 
        speed={0.8} 
        isLight={isLight} 
      />
      <FloatingShape 
        position={isLight ? [1.2, 0.5, -2] : [0.5, 1.5, -3]} 
        color={COLORS.mid} 
        speed={1.5} 
        isLight={isLight} 
      />

      <ambientLight intensity={isLight ? 1.5 : 0.3} />
      <pointLight position={[5,  5,  5]}  color={COLORS.electric} intensity={isLight ? 0.3 : 2} />
      <pointLight position={[-5, -5, -5]} color={COLORS.sky}      intensity={isLight ? 0.1 : 1} />
    </group>
  )
}
