import { ExternalLink, FolderGit2, PlayCircle } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const projects = [
  {
    name: "Project One",
    summary: "Mobile-first app demo with video walkthrough and source code.",
    videoUrl: "#",
    githubUrl: "#",
    quartoHtmlUrl: "#",
  },
  {
    name: "Project Two",
    summary: "Data-focused project documented with Quarto and deployable HTML.",
    videoUrl: "#",
    githubUrl: "#",
    quartoHtmlUrl: "#",
  },
  {
    name: "Project Three",
    summary: "End-to-end product prototype with responsive UX and repository.",
    videoUrl: "#",
    githubUrl: "#",
    quartoHtmlUrl: "#",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-8 text-neutral-900 sm:px-6 lg:px-8 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-sm font-medium uppercase tracking-wider text-neutral-500">
            Portfolio
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Dani Lopez — Professional Profile & Projects
          </h1>
          <p className="mt-4 max-w-3xl text-base text-neutral-600 sm:text-lg dark:text-neutral-300">
            This portfolio is ready to showcase your professional profile and project
            highlights, including video demos, GitHub repositories, and HTML outputs
            generated from Quarto files.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button>Contact Me</Button>
            <a
              className={buttonVariants({ variant: "outline" })}
              href="#projects"
            >
              View Projects
            </a>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Professional Profile</CardTitle>
              <CardDescription>Use this space to add your summary.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <p>
                Add your years of experience, specialties, and core technologies.
              </p>
              <p>
                Include achievements, certifications, and links to social profiles.
              </p>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Featured Work</CardTitle>
              <CardDescription>
                Structure prepared for app demos, repositories, and Quarto HTML pages.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-neutral-600 dark:text-neutral-300">
              Your project cards below are fully responsive and ready for real links.
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.name} className="flex h-full flex-col">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.summary}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto grid gap-2">
                  <a
                    className={cn(
                      buttonVariants({ variant: "secondary", size: "sm" }),
                      "w-full"
                    )}
                    href={project.videoUrl}
                  >
                    <PlayCircle className="mr-2 size-4" />
                    Watch Video
                  </a>
                  <a
                    className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full")}
                    href={project.githubUrl}
                  >
                    <FolderGit2 className="mr-2 size-4" />
                    GitHub Repo
                  </a>
                  <a
                    className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full")}
                    href={project.quartoHtmlUrl}
                  >
                    <ExternalLink className="mr-2 size-4" />
                    Quarto HTML
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
