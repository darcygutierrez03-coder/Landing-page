import { motion } from 'framer-motion'
import { useMagneticButton } from '@/hooks/useMagneticButton'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export default function MagneticBtn({ children, className, onClick, type = 'button' }: Props) {
  const { ref, sx, sy, onMove, onLeave } = useMagneticButton()

  return (
    <motion.button
      ref={ref}
      type={type}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={`ag-magnetic ${className ?? ''}`}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.button>
  )
}
