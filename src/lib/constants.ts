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

export const tech: { icon: string; color: string }[] = [
  // Tooling & Software
  { icon: "debian", color: "#A81D33" },
  { icon: "docker", color: "#2496ED" },
  { icon: "postgresql", color: "#4169E1" },
  { icon: "neovim", color: "#57A143" },
  { icon: "figma", color: "#F24E1E" },
  { icon: "nixos", color: "#5277C3" },
  { icon: "yarn", color: "#2C8EBB" },
  { icon: "opentofu", color: "#FFDA18" },
  { icon: "tailscale", color: "#FFFFFF" },
  { icon: "prisma", color: "#FFFFFF" },
  // Web
  { icon: "svelte", color: "#FF3E00" },
  { icon: "tailwindcss", color: "#06B6D4" },
  { icon: "phoenixframework", color: "#FD4F00" },
  // Languages
  { icon: "typescript", color: "#3178C6" },
  { icon: "javascript", color: "#F7DF1E" },
  { icon: "elixir", color: "#4B275F" },
  { icon: "rust", color: "#FFFFFF" },
];
