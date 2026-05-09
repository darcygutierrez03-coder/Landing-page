import { useRef } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'
import type { RefObject } from 'react'

export function useMagneticButton(): {
  ref: RefObject<HTMLButtonElement>
  sx: ReturnType<typeof useSpring>
  sy: ReturnType<typeof useSpring>
  onMove: (e: React.MouseEvent) => void
  onLeave: () => void
} {
  const ref = useRef<HTMLButtonElement>(null!)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 })
  const sy = useSpring(y, { stiffness: 200, damping: 15 })

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width  / 2) * 0.35)
    y.set((e.clientY - r.top  - r.height / 2) * 0.35)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return { ref, sx, sy, onMove, onLeave }
}
