import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { NAV_LINKS } from '@/data'
import styles from './Footer.module.css'

const SOCIAL = [
  { Icon: Github,   href: '#',        label: 'GitHub' },
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
              <span className="ag-logo__mark">AG</span>
              <span className="ag-logo__text">Antigravity</span>
            </a>
            <p className={styles.tagline}>Ingeniería sin límites de gravedad.</p>
          </div>

          <nav className={styles.links} aria-label="Footer navigation">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s/g, '-')}`}
                className={styles.link}
              >
                {l}
              </a>
            ))}
          </nav>

          <div className={styles.social}>
            {SOCIAL.map(({ Icon, href, label }) => (
              <a key={label} href={href} className="ag-social-icon" aria-label={label}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Antigravity. Todos los derechos reservados.</p>
          <p>Diseñado y construido con precisión.</p>
        </div>
      </div>
    </footer>
  )
}
