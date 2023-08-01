import { proxyMap } from "valtio/utils";
import { proxy } from "valtio";

type Framework = {
  label: string;
  value: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  framework: string;
};

type Theme = {
  label: string;
  value: string;
};

type RootState = {
  frameworks: Framework[];
  user: User;
  users: Map<number, User>;
  theme: Theme;
};

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const user = {
  id: 1,
  name: "Pedro",
  username: "@pedro",
  framework: frameworks[0].value,
};

const theme = {
  label: "Dark",
  value: "dark",
};

const users = proxyMap<number, User>([[1, user]]);

export const store = proxy<RootState>({
  frameworks,
  user,
  theme,
  users,
});
