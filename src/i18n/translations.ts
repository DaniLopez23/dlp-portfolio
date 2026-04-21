export type Locale = "es" | "en"

export interface TranslationKeys {
  app: {
    skip_content: string
    project_preview: string
  }
  nav: {
    about: string
    experience: string
    education: string
    certifications: string
    projects: string
    open_menu: string
    mobile_title: string
    mobile_subtitle: string
    brand_aria: string
  }
  hero: {
    badge: string
    role: string
    tagline: string
    cta_projects: string
    cta_cv: string
  }
  theme: {
    toggle: string
  }
  about: {
    title: string
    bio: string
    bio_secondary: string
    subtitle: string
  }
  experience: {
    title: string
    subtitle: string
  }
  education: {
    title: string
    subtitle: string
  }
  certifications: {
    title: string
    verified: string
    pending: string
    subtitle: string
  }
  projects: {
    title: string
    subtitle: string
    sports_title: string
    sports_subtitle: string
    other_title: string
    other_subtitle: string
    see_more: string
    back: string
    tech_stack: string
    live_demo: string
    view_code: string
  }
  footer: {
    rights: string
    built_with: string
    back_to_top: string
  }
}

export const translations: Record<Locale, TranslationKeys> = {
  es: {
    app: {
      skip_content: "Saltar al contenido",
      project_preview: "Vista previa del proyecto",
    },
    nav: {
      about: "Sobre mi",
      experience: "Experiencia",
      education: "Formacion",
      certifications: "Certificaciones",
      projects: "Proyectos",
      open_menu: "Abrir menu de navegacion",
      mobile_title: "Navegacion",
      mobile_subtitle: "Salta a cualquier seccion del portfolio.",
      brand_aria: "Ir a la seccion principal",
    },
    hero: {
      badge: "Portfolio personal",
      role: "Desarrollador Full Stack & Analista de Datos",
      tagline: "Apasionado por el deporte y la tecnologia",
      cta_projects: "Ver proyectos",
      cta_cv: "Descargar CV",
    },
    theme: {
      toggle: "Cambiar tema de color",
    },
    about: {
      title: "Sobre mi",
      bio: "Lorem ipsum sobre el perfil profesional...",
      bio_secondary:
        "Curabitur gravida nibh in dolor rhoncus, vel vestibulum turpis iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec congue lorem et lacus tempus, et egestas nibh bibendum.",
      subtitle: "Resumen profesional con foco en producto e ingenieria UI limpia.",
    },
    experience: {
      title: "Experiencia Profesional",
      subtitle: "Linea temporal de roles y responsabilidades en equipos de producto e ingenieria.",
    },
    education: {
      title: "Formacion Academica",
      subtitle: "Programas y estudios que construyeron la base tecnica y de diseno.",
    },
    certifications: {
      title: "Certificaciones",
      verified: "Verificado",
      pending: "Pendiente",
      subtitle: "Credenciales profesionales con estado verificado e instituciones emisoras.",
    },
    projects: {
      title: "Proyectos",
      subtitle: "Una seleccion de trabajos enfocados en calidad de producto y experiencia de usuario.",
      sports_title: "Sports Analytics",
      sports_subtitle: "Analisis de datos aplicado al deporte",
      other_title: "Otros Proyectos",
      other_subtitle: "Desarrollo web y aplicaciones",
      see_more: "Ver mas",
      back: "Volver",
      tech_stack: "Stack tecnologico",
      live_demo: "Demo en vivo",
      view_code: "Ver codigo",
    },
    footer: {
      rights: "Todos los derechos reservados",
      built_with: "Construido con Next.js y shadcn/ui.",
      back_to_top: "Volver arriba",
    },
  },
  en: {
    app: {
      skip_content: "Skip to content",
      project_preview: "Project preview",
    },
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      certifications: "Certifications",
      projects: "Projects",
      open_menu: "Open navigation menu",
      mobile_title: "Navigation",
      mobile_subtitle: "Jump to any section of the portfolio.",
      brand_aria: "Go to hero section",
    },
    hero: {
      badge: "Personal portfolio",
      role: "Full Stack Developer & Data Analyst",
      tagline: "Passionate about sports and technology",
      cta_projects: "View projects",
      cta_cv: "Download CV",
    },
    theme: {
      toggle: "Toggle color theme",
    },
    about: {
      title: "About me",
      bio: "Lorem ipsum about the professional profile...",
      bio_secondary:
        "Curabitur gravida nibh in dolor rhoncus, vel vestibulum turpis iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec congue lorem et lacus tempus, et egestas nibh bibendum.",
      subtitle: "Profile overview with a strong focus on product thinking and clean UI engineering.",
    },
    experience: {
      title: "Professional Experience",
      subtitle: "A timeline of roles and responsibilities across product and engineering teams.",
    },
    education: {
      title: "Academic Background",
      subtitle: "Programs and studies that shaped the technical and design foundation.",
    },
    certifications: {
      title: "Certifications",
      verified: "Verified",
      pending: "Pending",
      subtitle: "Professional credentials with verified status and issuing institutions.",
    },
    projects: {
      title: "Projects",
      subtitle: "A curated set of work focused on product quality and user-centered interfaces.",
      sports_title: "Sports Analytics",
      sports_subtitle: "Data analysis applied to sports",
      other_title: "Other Projects",
      other_subtitle: "Web development and applications",
      see_more: "See more",
      back: "Back",
      tech_stack: "Tech stack",
      live_demo: "Live demo",
      view_code: "View code",
    },
    footer: {
      rights: "All rights reserved",
      built_with: "Built with Next.js and shadcn/ui.",
      back_to_top: "Back to top",
    },
  },
}
