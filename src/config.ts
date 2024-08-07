import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://example.com",

  title: "SmolBrain",
  desc: "Brian's Personal Website",
  author: "Brian Huang",

  ogImage: "",
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
};

export const LOGO_IMAGE = {
  svg: true,
  enable: false,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "example.com",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "example.com",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];
