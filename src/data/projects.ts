import { Project } from "@/types"

export const projects: Project[] = [
  {
    slug: "match-vision-analytics",
    title: "Match Vision Analytics",
    excerpt:
      "Dashboard platform for match metrics, possession trends, and player impact visualization.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum neque ut urna commodo, et gravida risus vestibulum. Curabitur sit amet nibh ac velit faucibus faucibus. Quisque luctus, sem in vulputate aliquet, libero augue varius urna, vitae volutpat lorem sem nec velit. Etiam feugiat pellentesque nisl, vitae auctor mi commodo sed.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    category: "Data Visualization",
    year: "2025",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    slug: "scoutboard-pro",
    title: "Scoutboard Pro",
    excerpt:
      "Talent scouting board with filtering, profile scoring, and recruitment workflow notes.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed libero tincidunt, suscipit leo quis, dictum turpis. Pellentesque luctus pharetra ante, id volutpat mauris feugiat ut. Nunc efficitur lectus ut arcu porttitor, vitae malesuada urna consequat.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "shadcn/ui"],
    category: "Recruitment",
    year: "2024",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    slug: "training-load-monitor",
    title: "Training Load Monitor",
    excerpt:
      "Monitoring app that tracks session load, fatigue indicators, and weekly volume progression.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra, libero vel pellentesque varius, arcu turpis pellentesque libero, nec finibus leo nibh id nibh. Aliquam consequat, lacus vitae convallis iaculis, risus lectus malesuada justo, at facilisis sem turpis in lectus.",
    stack: ["React", "TypeScript", "TanStack Query", "Chart.js"],
    category: "Performance",
    year: "2026",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    slug: "fanpulse-mobile-web",
    title: "FanPulse Mobile Web",
    excerpt:
      "Community microsite for fan polls, live match sentiment, and club content highlights.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula sem sed tincidunt auctor. Donec luctus, mauris non feugiat consequat, neque metus blandit ligula, at laoreet est lacus et velit. Morbi placerat volutpat lorem vel tincidunt.",
    stack: ["Next.js", "Supabase", "Tailwind", "Framer Motion"],
    category: "Community",
    year: "2023",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    slug: "academy-schedule-suite",
    title: "Academy Schedule Suite",
    excerpt:
      "Scheduling and attendance planner for academy sessions, coaches, and field allocations.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis nibh ac odio hendrerit, at vulputate velit consequat. Integer tincidunt lorem non mi varius, et volutpat lorem sodales. Donec dictum aliquam ex, vel ornare justo venenatis non.",
    stack: ["Next.js", "TypeScript", "Zod", "tRPC"],
    category: "Operations",
    year: "2025",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    slug: "set-piece-simulator",
    title: "Set Piece Simulator",
    excerpt:
      "Interactive whiteboard for planning set-piece routines with timeline-based movement cues.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum dui vitae vulputate scelerisque. Integer lacinia eros non sapien vulputate, at luctus mi tristique. Phasellus finibus urna non feugiat posuere. In gravida aliquam leo.",
    stack: ["React", "Canvas API", "TypeScript", "Vite"],
    category: "Tactics",
    year: "2026",
    githubUrl: "#",
    demoUrl: "#",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export const projectSlugs = projects.map((project) => project.slug)