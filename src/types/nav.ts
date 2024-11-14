import { Icons } from "@/app/docs/_components/icons";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
  mdPath?: string;
  next?: string;
  prev?: string;
}

export type MainNavItem = NavItem;

export type SidebarNavItem = NavItemWithChildren;
