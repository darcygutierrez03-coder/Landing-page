# Antigravity — Landing Page Personal

> Ingeniería sin límites de gravedad.

Stack premium con estética futurista, cinematográfica y tecnológica.

## Stack

- **React 18** + **Vite** + **TypeScript**
- **Framer Motion** — animaciones: fade up, stagger, parallax, floating, magnetic buttons, mouse glow
- **React Three Fiber** + **@react-three/drei** — 3D: partículas, orbes distorsionados, tracking de mouse
- **Lucide React** — iconos
- **CSS Modules** — estilos encapsulados por componente

## Paleta de Colores

| Token       | Hex       | Uso                  |
|-------------|-----------|----------------------|
| `--navy`    | `#034C8C` | Azul marino profundo |
| `--dark`    | `#213140` | Fondo / superficie   |
| `--mid`     | `#0367A6` | Azul medio           |
| `--electric`| `#048ABF` | Acento principal     |
| `--sky`     | `#3B9ABF` | Acento claro         |

## Arquitectura

```
src/
├── assets/
├── components/
│   ├── Navbar/         Navbar.tsx · Navbar.module.css
│   ├── Hero/           Hero.tsx · HeroScene.tsx · Hero.module.css
│   ├── About/          About.tsx · About.module.css
│   ├── Services/       Services.tsx · Services.module.css
│   ├── Portfolio/      Portfolio.tsx · Portfolio.module.css
│   ├── Testimonials/   Testimonials.tsx · Testimonials.module.css
│   ├── CTA/            CTA.tsx · CTA.module.css
│   ├── Footer/         Footer.tsx · Footer.module.css
│   └── UI/             MouseGlow · MagneticBtn · Reveal · index.ts
├── hooks/
│   ├── useMouseGlow.ts
│   ├── useScrolled.ts
│   └── useMagneticButton.ts
├── styles/
│   └── global.css      Variables CSS + estilos base + utilidades
├── data/
│   └── index.ts        Todos los datos del sitio (servicios, proyectos, etc.)
├── animations/
│   └── variants.ts     Variantes Framer Motion reutilizables
├── App.tsx
└── main.tsx
```

## Instalación y uso

```bash
# 1. Instalar dependencias
npm install

# 2. Modo desarrollo
npm run dev

# 3. Build de producción
npm run build

# 4. Vista previa del build
npm run preview
```

## Personalización rápida

- **Datos del sitio** → `src/data/index.ts` (servicios, proyectos, testimonios, stats)
- **Colores** → `src/styles/global.css` sección `:root`
- **Animaciones** → `src/animations/variants.ts`
- **Escena 3D** → `src/components/Hero/HeroScene.tsx`
