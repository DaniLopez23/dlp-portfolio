import Link from "next/link"
import { FolderGit2Icon } from "lucide-react"

import { Project } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ProjectCardProps {
  project: Project
  seeMoreLabel: string
}

export function ProjectCard({ project, seeMoreLabel }: ProjectCardProps) {
  return (
    <Card className="h-full overflow-hidden border border-border/80 bg-card/90 backdrop-blur-sm">
      <div className="relative flex h-44 items-center justify-center border-b border-border/80 bg-gradient-to-br from-primary/15 via-accent/20 to-secondary/40">
        <FolderGit2Icon className="size-9 text-primary" />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription className="line-clamp-3 text-sm leading-6">
          {project.excerpt}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Badge key={item} variant="secondary">
            {item}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="justify-end">
        <Button asChild>
          <Link href={`/projects/${project.slug}`}>{seeMoreLabel}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}