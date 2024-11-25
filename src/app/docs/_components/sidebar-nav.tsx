"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SidebarNavItem } from "@/types/nav"
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { IconKeyFill, IconPaintbrushFill, IconTarget, IconWrenchAndScrewdriverFill, IconMagnifyingglass, IconBookPagesFill } from "symbols-react"

const SECTION_ICONS: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    "Wallet Connector UI": IconTarget,
    "Getting Started": IconBookPagesFill,
    "Customization": IconPaintbrushFill,
    "Advanced": IconWrenchAndScrewdriverFill,
    "Sign In With Solana": IconKeyFill,
    "Reference": IconMagnifyingglass,
  }

export interface DocsSidebarNavProps {
  items: SidebarNavItem[]
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname()
  const [openSections, setOpenSections] = React.useState<Record<string, boolean>>(
    Object.fromEntries(items.map(section => [section.title, true]))
  )

  const toggleSection = (title: string) => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
  }
  return (
    <SidebarProvider defaultOpen>
      <Sidebar className="top-[58px] h-[calc(100vh-58px)]">
        <SidebarContent className="p-2">
          <SidebarMenu>
          {items.map((section, index) => {
              const Icon = SECTION_ICONS[section.title]
              return (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton 
                    icon={Icon && <Icon className="h-4 w-4 fill-primary/70" />}
                    isCollapsible={true}
                    className="font-mono text-xs font-semibold text-primary/40"
                    onClick={() => toggleSection(section.title)}
                  >
                    {section.title}
                  </SidebarMenuButton>
                  {section.items?.length && openSections[section.title] && (
                    <SidebarMenuSub>
                      {section.items.map((item, itemIndex) => (
                        <SidebarMenuSubItem key={itemIndex}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={pathname === item.href}
                          >
                            <Link href={item.href || "#"}>
                              {item.title}
                              {item.label && (
                                <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000]">
                                  {item.label}
                                </span>
                              )}
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}