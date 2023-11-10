import { ContentNavItem, NavItem } from "@/types";

import { defaultAuthor } from "@/lib/metadata";

const content: ContentNavItem[] = [
  {
    title: "Blog",
    href: "/posts",
    description: "Blog posts. Mostly about web development. Or chicken fingers",
  },
	{
		title: "Videos",
		href: defaultAuthor.socialProfiles.find((platform) => platform.name === "youtube")?.link as string,
		description: "My YouTube channel where I talk about web development.",
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
  },{
    title: "Now",
    href: "/now",
  },
];
