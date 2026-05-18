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
  'Sobre mi',
  'Mi filosofia',
  'Servicios',
  'Portafolio',
  'Testimonio',
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
    name: 'Alejandro Restrepo',
    role: 'VP de Operaciones y Tecnología en TechNova Solutions',
    text: 'Llegamos a un punto donde las metodologías ágiles no avanzaban por la resistencia cultural del equipo. Darcy no implementó un manual; <strong>hackeó nuestra mentalidad desde las bases</strong>. Logró alinear los objetivos de negocio con el bienestar de la gente. Hoy no solo somos más rápidos, sino un equipo genuinamente más humano.',
  },
  {
    name: 'Juliana Mendoza',
    role: 'Directora Corporativa de Gestión Humana - TransLogik S.A.',
    text: 'En el sector de transporte la cultura suele ser muy rígida y piramidal. Darcy llegó a romper paradigmas con su visión estratégica combinada de mercadeo y talento. Nos ayudó a rediseñar un modelo de liderazgo ágil y descentralizado. Por primera vez, los líderes <strong>no dirigen por decreto, inspiran por el ejemplo</strong>.',
  },
  {
    name: 'Carlos Eduardo Gómez',
    role: 'CEO & Cofundador de NextGen Digital',
    text: '<strong>Entender que el talento es nuestro cliente interno más importante cambió las reglas del juego</strong>. Con Darcy diseñamos una estrategia de Employer Branding tan sólida que pasamos de buscar candidatos a que el mejor talento nos busque a nosotros. Una inversión con un retorno incalculable para nuestra marca.',
  },
]

// ── Tech Stack Tags ─────────────────────────────────────────────────────────────
export const TECH_TAGS = [
  { label: 'Capital Humano', icon: 'Users' },
  { label: 'Cultura org.', icon: 'Building2' },
  { label: 'Marketing Estratégico', icon: 'Lightbulb' },
  { label: 'Liderazgo Ágil', icon: 'Zap' },
  { label: 'Change Management', icon: 'RefreshCw' },
  { label: 'Investigación I+D', icon: 'Search' },
  { label: 'Docencia Universitaria', icon: 'GraduationCap' },
  { label: 'Gestión del Talento', icon: 'Star' },
  { label: 'Desarrollo de Equipos', icon: 'Users' },
  { label: 'Diseño de Estrategia', icon: 'Compass' },
  { label: 'Networking', icon: 'Share2' },
  { label: 'Visión Multisectorial', icon: 'Globe' },
]

// ── Stats ──────────────────────────────────────────────────────────────────────
export const STATS = [
  { num: '4',   label: 'Años de experiencia' },
  { num: '40+', label: 'Proyectos entregados' },
  { num: '100%',label: 'Clientes satisfechos' },
]

// ── Philosophy ─────────────────────────────────────────────────────────────────
export const PHILOSOPHY_DATA = {
  title: "Mi Filosofía de Trabajo",
  slogan: "\"Un enfoque integral para generar impacto real\"",
  axes: [
    {
      id: "eje-1",
      number: "Eje 1: El Mercado",
      title: "Visión y Estrategia",
      description: "Diagnóstico y alineación de objetivos corporativos con el entorno global para asegurar un crecimiento sostenible.",
      icon: "Globe"
    },
    {
      id: "eje-2",
      number: "Eje 2: Las Personas",
      title: "Cultura y Humanidad",
      description: "Diseño de culturas organizacionales resilientes que priorizan el bienestar humano como motor de la productividad.",
      icon: "Users"
    },
    {
      id: "eje-3",
      number: "Eje 3: La Formación",
      title: "Crecimiento y Liderazgo",
      description: "Formación de líderes de alto impacto y programas de capacitación basados en investigación y docencia de vanguardia.",
      icon: "BookOpen"
    }
  ]
}

