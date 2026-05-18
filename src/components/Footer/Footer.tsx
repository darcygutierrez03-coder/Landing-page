import { Linkedin, Twitter, Mail } from 'lucide-react'
import styles from './Footer.module.css'

const SOCIAL = [
  { Icon: Linkedin, href: '#',        label: 'LinkedIn' },
  { Icon: Twitter,  href: '#',        label: 'Twitter/X' },
  { Icon: Mail,     href: 'mailto:#', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="ag-container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className="ag-logo">
              <span className="ag-logo__mark">DG</span>
              <span className="ag-logo__text">DARCY GUTIERREZ</span>
            </a>
          </div>

          <div className={styles.social}>
            {SOCIAL.map(({ Icon, href, label }) => (
              <a key={label} href={href} className="ag-social-icon" aria-label={label}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Darcy Gutierrez. Todos los derechos reservados.</p>
          <p>Diseñado y construido con precisión.</p>
        </div>
      </div>
    </footer>
  )
}
