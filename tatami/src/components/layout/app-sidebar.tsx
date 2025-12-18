"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { TatamiLogo } from "@/components/brand/tatami-logo"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

import {
  Home,
  Calendar,
  Users,
  CreditCard,
  User,
  Activity,
  Target,
  ClipboardCheck,
  Settings,
  Layers,
  MoreHorizontal,
} from "lucide-react"

type NavItem = {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

const primaryMobile: NavItem[] = [
  { title: "Inicio", href: "/dashboard", icon: Home },
  { title: "Clases", href: "/classes", icon: Calendar },
  { title: "Reservas", href: "/reservations", icon: Target },
  { title: "Alumnos", href: "/students", icon: Users },
]

const secondary: NavItem[] = [
  { title: "Asistencia", href: "/attendance", icon: ClipboardCheck },
  { title: "Pagos", href: "/payments", icon: CreditCard },
  { title: "Historial", href: "/training-history", icon: Activity },
  { title: "Perfil", href: "/profile", icon: User },
  { title: "Planes", href: "/plans", icon: Layers },
  { title: "Ajustes", href: "/settings", icon: Settings },
]

const desktopNav: NavItem[] = [
  ...primaryMobile,
  ...secondary,
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-[color:var(--navy)] text-white border-r border-[color:var(--sidebar-border)]">
        <div className="p-6 border-b border-[color:var(--sidebar-border)]">
          <TatamiLogo />
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {desktopNav.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium",
                  isActive
                    ? "bg-[color:var(--orange-primary)] text-white"
                    : "text-white/90 hover:bg-[color:rgba(255,255,255,0.08)]",
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{item.title}</span>
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Mobile bottom */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[color:var(--navy)] border-t border-[color:var(--sidebar-border)] z-50">
        <div className="flex items-center justify-around px-2 py-3">
          {primaryMobile.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors min-w-[70px]",
                  isActive ? "text-[color:var(--orange-primary)]" : "text-white/90",
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[11px] font-medium">{item.title}</span>
              </Link>
            )
          })}

          {/* Más */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors min-w-[70px]",
                  "text-white/90",
                )}
              >
                <MoreHorizontal className="w-5 h-5" />
                <span className="text-[11px] font-medium">Más</span>
              </button>
            </SheetTrigger>

            <SheetContent side="bottom" className="rounded-t-2xl">
              <SheetHeader>
                <SheetTitle>Más opciones</SheetTitle>
              </SheetHeader>

              <div className="mt-4">
                <Separator className="mb-4" />
                <div className="grid grid-cols-2 gap-2">
                  {secondary.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg border",
                          isActive
                            ? "border-[color:var(--orange-primary)] bg-[color:rgba(245,95,12,0.10)]"
                            : "border-[color:var(--border)] bg-[color:var(--card)]",
                        )}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  )
}
