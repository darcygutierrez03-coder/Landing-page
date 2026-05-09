import { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import HeroScene from './HeroScene'
import { MagneticBtn } from '@/components/UI'
import styles from './Hero.module.css'

export default function Hero() {
  const ref = useRef<HTMLElement>(null!)
  const { scrollYProgress } = useScroll({ target: ref })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className={styles.hero} id="inicio">
      {/* 3D Canvas */}
      <div className={styles.canvas} aria-hidden="true">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <motion.div className={styles.content} style={{ y, opacity }}>
        <motion.p
          className="ag-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Estrategia · Diseño · Marca Personal
        </motion.p>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Potencio tu
          <br />
          <span className="ag-gradient-text">impacto personal</span>
          <br />
          en el mundo digital.
        </motion.h1>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          Consultoría de autor. Estrategia de alto nivel.
          <br />
          Soluciones que elevan tu marca personal a nuevas alturas.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <MagneticBtn className="ag-btn ag-btn--primary">
            Ver mi trabajo <ArrowRight size={16} />
          </MagneticBtn>
          <MagneticBtn className="ag-btn ag-btn--ghost">
            Hablemos hoy
          </MagneticBtn>
        </motion.div>
      </motion.div>

      {/* Photo Integration */}
      <motion.div 
        className={styles.photoWrapper}
        initial={{ opacity: 0, scale: 0.9, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img 
          src="/darcy.png" 
          alt="Darcy Gutierrez" 
          className={styles.photo}
        />
        <div className={styles.photoGradient}></div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="ag-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-hidden="true"
      >
        <motion.div
          className="ag-scroll-hint__dot"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
