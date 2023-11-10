import { AuthorType, SiteMetaData } from "@/types";

import { socialProfiles } from "./social-data";

export const BASE_URL =
  `https://${process.env.VERCEL_URL}` ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  `http://localhost:${process.env.PORT || 3000}`;

export const defaultAuthor: AuthorType = {
  name: "MD Rashid Hussain",
  handle: "@m3rashid",
  socialProfiles,
  email: "m3rashid.hussain@gmail.com",
  website: "https://m3rashid.in",
  jobTitle: "Full Stack Developer",
  // company: "Unicorns & Co.",
  availableForWork: true,
  location: "New Delhi",
};

const defaultTitle = `${defaultAuthor.name}'s Blog`;
const defaultDescription = `I'm ${defaultAuthor.name}. Building hackin’ cool digital products around the world 🌴.`;

const siteMetadata: SiteMetaData = {
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
	defaultTheme: 'system',
  description: defaultDescription,
  postsPerPage: 10,
  postsOnHomePage: 8,
  projectsOnHomePage: 4,
};

export default siteMetadata;
