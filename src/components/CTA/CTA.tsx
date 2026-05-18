import { ArrowRight, Mail, Linkedin, Instagram, Twitter } from 'lucide-react'
import { Reveal, MagneticBtn } from '@/components/UI'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={`ag-section ${styles.cta}`} id="contacto">
      <div className="ag-container">
        <div className={styles.inner}>
          <div className={styles.bgOrb} aria-hidden="true" />
          <Reveal>
            <p className="ag-eyebrow ag-center">¿Listo para despegar?</p>
            <h2 className={styles.title}>
              Transformemos la cultura.<br />
              <span className="ag-gradient-text">Elevemos el éxito.</span>
            </h2>
            <p className={styles.sub}>
              ¿Listo para hackear los modelos tradicionales? Diseñemos juntos una estrategia ágil, humana y competitiva que lleve a tu organización al siguiente nivel. El cambio no ocurre por decreto, empieza con una conversación.
            </p>
            <div className={styles.actions}>
              <MagneticBtn className="ag-btn ag-btn--primary ag-btn--lg" onClick={() => window.location.href = 'mailto:darcygc160309@gmail.com'}>
                Hablemos <ArrowRight size={18} />
              </MagneticBtn>
              <MagneticBtn 
                className="ag-btn ag-btn--ghost ag-btn--lg"
                onClick={() => window.location.href = 'mailto:darcygc160309@gmail.com'}
              >
                <Mail size={18} /> darcygc160309@gmail.com
              </MagneticBtn>
            </div>
            
            <div className={styles.socials}>
              <a href="https://www.linkedin.com/notifications/?filter=all" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="https://www.instagram.com/darcygutierrez_c?igsh=MXIzYXIwYzN3NHptZw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Instagram size={20} /> Instagram
              </a>
              <a href="https://x.com/darcygutierrez_?s=11" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Twitter size={20} /> Twitter
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
