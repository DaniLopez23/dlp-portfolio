"use client"

import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { useLanguage } from "@/i18n/LanguageContext"
import { LanguageToggle } from "@/components/shared/LanguageToggle"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useLanguage()

  const navItems: NavItem[] = [
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.experience, href: "/#experience" },
    { label: t.nav.education, href: "/#education" },
    { label: t.nav.certifications, href: "/#certifications" },
    { label: t.nav.projects, href: "/#projects" },
  ]

  return (
    <header
      className={[
        "sticky top-0 z-40 w-full border-b border-border/80 bg-background/85 backdrop-blur",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/#hero"
          className="font-heading text-lg font-semibold tracking-tight text-foreground"
          aria-label={t.nav.brand_aria}
        >
          DLP Portfolio
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label={t.nav.open_menu}
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] max-w-sm">
              <SheetHeader>
                <SheetTitle>{t.nav.mobile_title}</SheetTitle>
                <SheetDescription>{t.nav.mobile_subtitle}</SheetDescription>
              </SheetHeader>
              <Separator className="my-2" />
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-2 text-sm font-medium text-foreground/85 transition hover:bg-muted hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}