import { ArrowRight } from 'lucide-react'
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
              Tu próximo proyecto<br />
              <span className="ag-gradient-text">merece lo mejor.</span>
            </h2>
            <p className={styles.sub}>
              Cuéntame tu visión. En 24 horas tienes mi respuesta y un plan de acción.
            </p>
            <div className={styles.actions}>
              <MagneticBtn className="ag-btn ag-btn--primary ag-btn--lg">
                Iniciar proyecto <ArrowRight size={18} />
              </MagneticBtn>
              <MagneticBtn className="ag-btn ag-btn--ghost ag-btn--lg">
                Ver servicios
              </MagneticBtn>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
