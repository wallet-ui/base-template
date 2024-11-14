import { SidebarNavItem } from "@/types/nav";

interface DocsConfig {
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
          mdPath: "introduction.md",
          items: [],
          next: "/docs/components/accordion",
          prev: undefined,
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Accordion",
          href: "/docs/components/accordion",
          mdPath: "components/accordian.md",
          items: [],
          next: "/docs/introduction",
          prev: "/docs/introduction",
        },
      ],
    },
  ],
};
