import { motion } from 'framer-motion'
import { STATS, TECH_TAGS } from '@/data'
import { fadeUp } from '@/animations/variants'
import styles from './About.module.css'
import * as Icons from 'lucide-react'

export default function About() {
  return (
    <section className={`ag-section ${styles.about}`} id="sobre-mí">
      <div className="ag-container">
        <div className={styles.grid}>
          {/* Column 1: Visual (Photo + Items) */}
          <motion.div 
            className={styles.visual}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.avatarWrap}>
              <div className={`${styles.ring} ${styles.ring1}`} />
              <div className={`${styles.ring} ${styles.ring2}`} />
              <img 
                src="/Darcy_About.jpg" 
                alt="Darcy Gutierrez Portrait" 
                className={styles.avatar}
              />
            </div>

            <div className={styles.statsGrid}>
              {STATS.map((s, idx) => (
                <div key={idx} className={styles.stat}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Text (Organized Paragraph) */}
          <motion.div 
            className={styles.text}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p variants={fadeUp} className="ag-eyebrow" style={{ marginBottom: '1.5rem', color: 'var(--electric)' }}>
              // SOBRE MÍ
            </motion.p>
            <motion.h2 variants={fadeUp} className={styles.title}>
              Donde la <span className={styles.gradientEvolution}>transformación humana</span> redefine el <span className={styles.blueHighlight}>éxito corporativo.</span>
            </motion.h2>

            <motion.div variants={fadeUp} className="ag-body">
              <p>
                Como Administradora y Especialista en Mercadeo, entiendo que las organizaciones no cambian por decretos, 
                sino a través de las personas. Mi maestría en Gerencia del Talento Humano y mi paso por la investigación 
                me han dado las herramientas para hackear la cultura tradicional y convertirla en una ventaja competitiva.
              </p>
              <br />
              <p>
                Tras liderar procesos en sectores tan diversos como tecnología y transporte, mi propósito es claro: 
                guiar a las empresas en su evolución hacia modelos de liderazgo más ágiles, humanos y, sobre todo, transformadores.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section: Expertise (Full width, 2 columns) */}
        <motion.div 
          className={styles.skillsColumn}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className={styles.skillsTitle}>Experticia & Especialidades</h3>
          <div className={styles.skillsGrid}>
            {TECH_TAGS.map((tag, idx) => {
              const Icon = (Icons as any)[tag.icon]
              return (
                <div key={idx} className="ag-tag">
                  {Icon && <Icon className="ag-tag__icon" size={16} />}
                  {tag.label}
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
