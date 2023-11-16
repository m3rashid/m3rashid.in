import { LinkProps } from "next/link";
import { Post, Series } from "contentlayer/generated";

export interface PostHeading {
  heading: number;
  text: string;
  slug: string;
}

export interface NavItem {
  title: string;
  href?: string;
  description?: string;
  content?: ContentNavItem[];
}

export interface ContentNavItem extends NavItem {
  href: string;
}

export interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export type SiteMetaData = {
  title: {
    template: string;
    default: string;
  };
  description: string;
  defaultTheme: "light" | "dark" | "system";
  postsPerPage: number;
  postsOnHomePage: number;
  projectsOnHomePage: number;
};

export type SeriesItem = {
  title: string;
  slug: Post["slug"];
  status: Post["status"];
  isCurrent: boolean;
};

export type BlogSeries = Series & { blogs: SeriesItem[] };

export type BlogWithSeries = Omit<Post, "series"> & { series: BlogSeries };

export type SocialProfile = {
  name: string;
  link: string;
};

export type AuthorType = {
  name: string;
  handle: string;
  socialProfiles: SocialProfile[];
  email: string;
  website: string;
  jobTitle: string;
  company?: string;
  availableForWork: boolean;
  location: string;
};
