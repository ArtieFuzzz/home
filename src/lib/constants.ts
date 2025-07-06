import { LinkType } from "./links";

export const profiles: {
  name: string;
  icon: string;
  url: string;
  rel: LinkType;
}[] = [
  {
    name: "GitHub",
    icon: "simple-icons:github",
    url: "https://github.com/ArtieFuzzz",
    rel: LinkType.IndieAuth,
  },
  {
    name: "SourceHut",
    icon: "simple-icons:sourcehut",
    url: "https://git.sr.ht/~artiefuzzz",
    rel: LinkType.External,
  },
  {
    name: "Email",
    icon: "mdi:email-outline",
    url: "mailto:hey@astolfo.cafe",
    rel: LinkType.External,
  },
  {
    name: "Matrix",
    icon: "simple-icons:matrix",
    url: "https://matrix.to/#/@artsy.:astolfo.cafe",
    rel: LinkType.External,
  },
  {
    name: "Last.FM",
    icon: "simple-icons:lastdotfm",
    url: "https://last.fm/user/artiefuzzz",
    rel: LinkType.External,
  },
  {
    name: "Steam",
    icon: "simple-icons:steam",
    url: "https://steamcommunity.com/id/ArtieFuzzz/",
    rel: LinkType.External,
  },
];
