import { Code2, Layers, Zap, Globe, Shield, Cpu, type LucideIcon } from 'lucide-react'

// ── Palette ────────────────────────────────────────────────────────────────────
export const COLORS = {
  navy:     '#034C8C',
  dark:     '#213140',
  mid:      '#0367A6',
  electric: '#048ABF',
  sky:      '#3B9ABF',
  void:     '#07111d',
  surface:  '#0e1c28',
  text:     '#e8f4f8',
  muted:    '#7aa5bf',
} as const

// ── Navigation ─────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  'Inicio',
  'Mi Historia',
  'Experticia',
  'Proyectos',
  'Opiniones',
  'Contacto',
]

// ── Services ───────────────────────────────────────────────────────────────────
export interface Service {
  icon: LucideIcon
  title: string
  desc: string
}

export const SERVICES: Service[] = [
  {
    icon: Code2,
    title: 'Consultoría Estratégica',
    desc: 'Optimizo procesos y defino hojas de ruta para negocios que buscan una transformación digital coherente y escalable.',
  },
  {
    icon: Layers,
    title: 'Marca Personal Premium',
    desc: 'Diseño identidades visuales que capturan la esencia del profesional, creando una presencia digital inolvidable.',
  },
  {
    icon: Zap,
    title: 'Desarrollo de Producto',
    desc: 'Transformo ideas en soluciones digitales tangibles, priorizando la experiencia del usuario y la eficiencia técnica.',
  },
  {
    icon: Globe,
    title: 'Estrategia de Contenido',
    desc: 'Planificación y creación de narrativas que conectan marcas con audiencias reales en el entorno digital.',
  },
  {
    icon: Shield,
    title: 'Gestión de Proyectos',
    desc: 'Liderazgo técnico y creativo para asegurar que cada entrega cumpla con los más altos estándares de calidad.',
  },
  {
    icon: Cpu,
    title: 'Innovación Digital',
    desc: 'Implementación de nuevas tecnologías y tendencias para mantener tu marca a la vanguardia del mercado.',
  },
]

// ── Projects ───────────────────────────────────────────────────────────────────
export interface Project {
  title: string
  tag: string
  year: string
  color: string
}

export const PROJECTS: Project[] = [
  { title: 'Quantum Dashboard', tag: 'SaaS · React · Python',  year: '2024', color: COLORS.navy },
  { title: 'Orbital CMS',       tag: 'Next.js · GraphQL',      year: '2024', color: COLORS.mid },
  { title: 'NeuralFlow',        tag: 'AI · FastAPI · Qdrant',   year: '2023', color: COLORS.electric },
  { title: 'Strata Design System', tag: 'Figma · Storybook',   year: '2023', color: COLORS.sky },
]

// ── Testimonials ───────────────────────────────────────────────────────────────
export interface Testimonial {
  name: string
  role: string
  text: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Camila R.',
    role: 'CTO · Fintech startup',
    text: 'Transformó nuestra arquitectura heredada en algo que el equipo ama trabajar. La velocidad de entrega se duplicó en 3 meses.',
  },
  {
    name: 'Diego M.',
    role: 'Founder · SaaS B2B',
    text: 'El nivel de detalle en cada decisión técnica es impresionante. No solo construye, enseña y eleva al equipo completo.',
  },
  {
    name: 'Valentina S.',
    role: 'Head of Product',
    text: 'Por primera vez tuve a alguien que habla igual de bien con diseñadores que con ingenieros. Un multiplicador de equipo.',
  },
]

// ── Tech Stack Tags ─────────────────────────────────────────────────────────────
export const TECH_TAGS = [
  'React', 'TypeScript', 'Node.js', 'Python',
  'AWS', 'Figma', 'Three.js', 'LLMs',
]

// ── Stats ──────────────────────────────────────────────────────────────────────
export const STATS = [
  { num: '8+',  label: 'Años de experiencia' },
  { num: '60+', label: 'Proyectos entregados' },
  { num: '100%',label: 'Clientes satisfechos' },
]
