import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { NAV_LINKS } from '@/data'
import { useScrolled } from '@/hooks/useScrolled'
import { MagneticBtn } from '@/components/UI'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(40)

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.inner}>
        <a href="#" className="ag-logo">
          <span className="ag-logo__mark">DG</span>
          <span className="ag-logo__text">DARCY GUTIERREZ</span>
        </a>

        <ul className={styles.links}>
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase().replace(/\s/g, '-')}`}
                className={styles.link}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <MagneticBtn className={`ag-btn ag-btn--outline ${styles.cta}`}>
          Hablemos <ArrowRight size={14} />
        </MagneticBtn>

        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s/g, '-')}`}
                className={styles.mobileLink}
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
