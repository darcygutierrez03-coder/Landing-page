import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Reveal } from '@/components/UI'
import { PROJECTS } from '@/data'
import { fadeUp, staggerContainer } from '@/animations/variants'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  return (
    <section className="ag-section" id="portafolio">
      <div className="ag-container">
        <Reveal>
          <p className="ag-eyebrow ag-center">Portafolio</p>
          <h2 className="ag-section__title ag-center">
            Trabajo que habla<br />
            <span className="ag-gradient-text">por sí solo.</span>
          </h2>
        </Reveal>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {PROJECTS.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className={styles.card}
              style={{ '--accent': p.color } as React.CSSProperties}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardBg} />
                <div className={styles.cardContent}>
                  <span className={styles.year}>{p.year}</span>
                  <h3 className={styles.title}>{p.title}</h3>
                  <p className={styles.tag}>{p.tag}</p>
                  <button className={styles.link}>
                    Ver proyecto <ExternalLink size={13} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
