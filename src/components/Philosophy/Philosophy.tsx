import { motion } from 'framer-motion'
import { Globe, Users, BookOpen } from 'lucide-react'
import { PHILOSOPHY_DATA } from '@/data'
import styles from './Philosophy.module.css'

const icons = {
  Globe: Globe,
  Users: Users,
  BookOpen: BookOpen
}

export default function Philosophy() {
  return (
    <section className={styles.philosophy} id="mi-filosofia">
      <div className={styles.inner}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.titleWrapper}>
            <div className={styles.titleBg} />
            <h2 className={styles.title}>{PHILOSOPHY_DATA.title}</h2>
          </div>
          <p className={styles.slogan}>{PHILOSOPHY_DATA.slogan}</p>
        </motion.div>

        <div className={styles.grid}>
          {PHILOSOPHY_DATA.axes.map((axis, idx) => {
            const Icon = icons[axis.icon as keyof typeof icons]
            
            return (
              <motion.div 
                key={axis.id}
                className={`${styles.card} ${styles[`card${idx}`]}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className={styles.iconWrapper}>
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <span className={styles.axisNumber}>{axis.number}</span>
                <h3 className={styles.axisTitle}>{axis.title}</h3>
                <p className={styles.description}>{axis.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
