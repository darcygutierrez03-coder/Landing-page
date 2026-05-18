import { Magnet, Zap, Route, GraduationCap, Users, TrendingUp, type LucideIcon } from 'lucide-react'

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
  tags: string[]
}

export const SERVICES: Service[] = [
  {
    icon: Magnet,
    title: 'Employer Branding Estratégico',
    desc: 'Conecto el mercadeo con la gestión humana para diseñar marcas empleadoras magnéticas. Creamos propuestas de valor al colaborador (EVP) que atraen y fidelizan al mejor talento del mercado.',
    tags: ['Mercadeo', 'Talento', 'EVP'],
  },
  {
    icon: Zap,
    title: 'Hacking Cultural & Agilidad',
    desc: 'Intervengo y transformo culturas corporativas tradicionales. Diseñamos modelos de liderazgo ágiles, descentralizados y humanos que rompen silos y convierten la cultura en una ventaja competitiva.',
    tags: ['Liderazgo', 'Cultura', 'Agilidad'],
  },
  {
    icon: Route,
    title: 'Optimización del Employee Journey',
    desc: 'Evaluo y rediseño cada punto de contacto en el ciclo de vida del colaborador. Desde el onboarding hasta el desarrollo, garantizando experiencias de alto impacto y bienestar real.',
    tags: ['Bienestar', 'Experiencia', 'Procesos'],
  },
  {
    icon: GraduationCap,
    title: 'Educación Corporativa & Upskilling',
    desc: 'Traslado mi experiencia en las aulas universitarias al ecosistema empresarial. Creo programas de formación a la medida y academias internas enfocadas en el desarrollo de competencias del futuro.',
    tags: ['Educación', 'Formación', 'Desarrollo'],
  },
  {
    icon: Users,
    title: 'Endomarketing & Cultura Conectada',
    desc: 'Las organizaciones no cambian por decreto. Diseñamos narrativas de comunicación interna estratégicas que inspiran, alinean a los equipos con el propósito de la empresa y movilizan el cambio.',
    tags: ['Estrategia', 'Conexión', 'Propósito'],
  },
  {
    icon: TrendingUp,
    title: 'Consultoría en Transformación Humana',
    desc: 'Acompañamiento estratégico senior para comités directivos. Diseñamos la hoja de ruta para guiar a tu organización hacia modelos de negocio más adaptables, ágiles y, sobre todo, profundamente humanos.',
    tags: ['Gestión', 'Evolución', 'Resultados'],
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

