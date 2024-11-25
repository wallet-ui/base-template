import { SidebarNavItem } from "@/types/nav";

interface DocsConfig {
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "Wallet Connector UI",
      items: [
        {
          title: "1.0.0",
          href: "/docs/version",
          mdPath: "version.md",
          items: [],
          next: "/docs/introduction",
          prev: undefined,
        },
      ],
    },
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
          mdPath: "introduction.md",
          items: [],
          next: "/docs/try-it-out",
          prev: "/docs/version",
        },
        {
          title: "Try It Out",
          href: "/docs/try-it-out",
          mdPath: "try-it-out.md",
          items: [],
          next: "/docs/getting-started",
          prev: "/docs/introduction",
        },
        {
          title: "Getting Started",
          href: "/docs/getting-started",
          mdPath: "getting-started.md",
          items: [],
          next: "/docs/customization/theming",
          prev: "/docs/try-it-out",
        },
      ],
    },
    {
      title: "Customization",
      items: [
        {
          title: "Theming",
          href: "/docs/customization/theming",
          mdPath: "customization/theming.md",
          items: [],
          next: "/docs/customization/fonts",
          prev: "/docs/getting-started",
        },
        {
          title: "Fonts",
          href: "/docs/customization/fonts",
          mdPath: "customization/fonts.md",
          items: [],
          next: "/docs/customization/border-radius",
          prev: "/docs/customization/theming",
        },
        {
          title: "Border Radius",
          href: "/docs/customization/border-radius",
          mdPath: "customization/border-radius.md",
          items: [],
          next: "/docs/customization/colors",
          prev: "/docs/customization/fonts",
        },
        {
          title: "Colors",
          href: "/docs/customization/colors",
          mdPath: "customization/colors.md",
          items: [],
          next: "/docs/customization/avatar",
          prev: "/docs/customization/border-radius",
        },
        {
          title: "Avatar",
          href: "/docs/customization/avatar",
          mdPath: "customization/avatar.md",
          items: [],
          next: "/docs/customization/translations",
          prev: "/docs/customization/colors",
        },
        {
          title: "Translations",
          href: "/docs/customization/translations",
          mdPath: "customization/translations.md",
          items: [],
          next: "/docs/customization/theme-builder",
          prev: "/docs/customization/translations",
        },
        {
          title: "Theme Builder",
          href: "/docs/customization/theme-builder",
          mdPath: "customization/theme-builder.md",
          items: [],
          prev: "/docs/customization/theme-builder",
        },
      ],
    },
    {
      title: "Advanced",
      items: [
        {
          title: "Connect Button",
          href: "/docs/advanced/connect-button",
          mdPath: "advanced/connect-button.md",
          items: [],
          next: "/docs/advanced/chains",
          prev: "/docs/customization/theme-builder",
        },
        {
          title: "Chains",
          href: "/docs/advanced/chains",
          mdPath: "advanced/chains.md",
          items: [],
          next: "/docs/advanced/rpc-providers",
          prev: "/docs/advanced/chains",
        },
        {
          title: "RPC Providers",
          href: "/docs/advanced/rpc-providers",
          mdPath: "advanced/rpc-providers.md",
          items: [],
          prev: "/docs/advanced/rpc-providers",
        },
      ],
    },
    {
      title: "Sign In With Solana",
      items: [
        {
          title: "Next.js Implementation",
          href: "/docs/siwe/nextjs",
          mdPath: "siwe/nextjs.md",
          items: [],
          next: "/docs/siwe/custom",
          prev: "/docs/advanced/rpc-providers",
        },
        {
          title: "Custom Implementation",
          href: "/docs/siwe/custom",
          mdPath: "siwe/custom.md",
          items: [],
          next: "/docs/siwe/use-siwe-hook",
          prev: "/docs/siwe/custom",
        },
        {
          title: "useSIWE Hook",
          href: "/docs/siwe/use-siwe-hook",
          mdPath: "siwe/use-siwe-hook.md",
          items: [],
          prev: "/docs/siwe/use-siwe-hook",
        },
      ],
    },
    {
      title: "Reference",
      items: [
        {
          title: "API Reference",
          href: "/docs/reference/api",
          mdPath: "reference/api.md",
          items: [],
          next: "/docs/reference/libraries",
          prev: "/docs/siwe/use-siwe-hook",
        },
        {
          title: "Libraries",
          href: "/docs/reference/libraries",
          mdPath: "reference/libraries.md",
          items: [],
          next: "/docs/reference/migration",
          prev: "/docs/reference/libraries",
        },
        {
          title: "Migration Guide",
          href: "/docs/reference/migration",
          mdPath: "reference/migration.md",
          items: [],
          next: "/docs/reference/going-live",
          prev: "/docs/reference/migration",
        },
        {
          title: "Going Live",
          href: "/docs/reference/going-live",
          mdPath: "reference/going-live.md",
          items: [],
          prev: "/docs/reference/going-live",
        },
      ],
    },
  ],
};
