import { motion } from 'framer-motion'
import { useMouseGlow } from '@/hooks/useMouseGlow'

export default function MouseGlow() {
  const { sx, sy } = useMouseGlow()

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="ag-glow-cursor"
      aria-hidden="true"
    />
  )
}
