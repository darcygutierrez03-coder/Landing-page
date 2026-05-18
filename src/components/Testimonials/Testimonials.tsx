import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Reveal } from '@/components/UI'
import { TESTIMONIALS, COLORS } from '@/data'
import { fadeUp, staggerContainer } from '@/animations/variants'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <section className="ag-section" id="testimonios">
      <div className="ag-container">
        <Reveal>
          <p className="ag-eyebrow ag-center">Testimonios</p>
          <h2 className="ag-section__title ag-center">
            Lo que dicen<br />
            <span className="ag-gradient-text">quienes han evolucionado conmigo.</span>
          </h2>
        </Reveal>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} variants={fadeUp} className={`ag-card ${styles.card}`}>
              <div className="ag-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={COLORS.electric} color={COLORS.electric} />
                ))}
              </div>
              <p className={styles.text} dangerouslySetInnerHTML={{ __html: `"${t.text}"` }} />
              <div className={styles.author}>
                <div className={styles.avatar} />
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
              <div className="ag-card__glow" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
