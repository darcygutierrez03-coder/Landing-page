import { motion } from 'framer-motion'
import { Reveal } from '@/components/UI'
import { STATS, TECH_TAGS } from '@/data'
import { fadeUp, staggerContainer } from '@/animations/variants'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={`ag-section ${styles.about}`} id="sobre-mí">
      <div className="ag-container">
        <div className={styles.grid}>

          {/* Visual */}
          <Reveal>
            <div className={styles.visual}>
              <div className={styles.avatarWrap}>
                <div className={styles.avatar} />
                <div className={`${styles.ring} ${styles.ring1}`} />
                <div className={`${styles.ring} ${styles.ring2}`} />
              </div>
              <div className={styles.statsGrid}>
                {STATS.map(({ num, label }) => (
                  <div key={label} className={styles.stat}>
                    <span className={styles.statNum}>{num}</span>
                    <span className={styles.statLabel}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <motion.div
            className={styles.text}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUp} className="ag-eyebrow">Sobre mí</motion.p>
            <motion.h2 variants={fadeUp} className="ag-section__title">
              Donde la ingeniería<br />
              <span className="ag-gradient-text">se convierte en arte.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="ag-body">
              Soy un ingeniero de software y estratega digital especializado en construir
              productos que no solo funcionan — se sienten. Combino arquitectura técnica
              sólida con intuición de diseño para entregar experiencias que posicionan
              marcas como líderes.
            </motion.p>
            <motion.p variants={fadeUp} className="ag-body">
              He trabajado con startups en fase seed y corporaciones Fortune 500. Mi enfoque
              es siempre el mismo: entender el problema real, diseñar la solución más elegante
              y ejecutarla con obsesión por el detalle.
            </motion.p>
            <motion.div variants={fadeUp} className="ag-tags">
              {TECH_TAGS.map((t) => (
                <span key={t} className="ag-tag">{t}</span>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
