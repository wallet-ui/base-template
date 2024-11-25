import { docsConfig } from "@/config/docs"
import { DocsSidebarNav } from "./_components/sidebar-nav"
import DashboardLayout from "./_components/DashboardLayout"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <DashboardLayout>
      <div className="flex">
        <aside className="hidden md:block">
          <DocsSidebarNav items={docsConfig.sidebarNav} />
        </aside>
        <main className="hide-scrollbar">
          {children}
        </main>
      </div>
    </DashboardLayout>
  )
}