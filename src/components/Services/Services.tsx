import { motion } from 'framer-motion'
import { Reveal } from '@/components/UI'
import { SERVICES } from '@/data'
import { fadeUp, staggerContainer } from '@/animations/variants'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section className={`ag-section ${styles.services}`} id="servicios">
      <div className="ag-container">
        <Reveal>
          <p className="ag-eyebrow ag-center">Servicios</p>
          <h2 className="ag-section__title ag-center">
            Capacidades que<br />
            <span className="ag-gradient-text">desafían lo posible.</span>
          </h2>
        </Reveal>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={fadeUp} className={`ag-card ${styles.card}`}>
              <div className={styles.iconWrap}>
                <Icon size={22} />
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
              <div className="ag-card__glow" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
