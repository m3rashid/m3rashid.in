import { ContentNavItem, NavItem } from "@/types";

import { defaultAuthor } from "@/lib/metadata";

const content: ContentNavItem[] = [
  {
    title: "Blog",
    href: "/blogs",
    description: "Blog blogs. Mostly about web development. Or chicken fingers",
  },
  {
    title: "Videos",
    href: defaultAuthor.socialProfiles.find((platform) => platform.name === "youtube")?.link as string,
    description: "My YouTube channel where I talk about web development.",
  },
  {
    title: "Paper shelf",
    href: "/paper-shelf",
    description: "A collection of papers I've read and found interesting.",
  },
];

export const navigationLinks: NavItem[] = [
  {
    title: "Content",
    content,
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Works",
    href: "/works",
  },
  {
    title: "Experience",
    href: "/experience",
  },
  {
    title: "Now",
    href: "/now",
  },
];
