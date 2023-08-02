import { proxyMap } from "valtio/utils";
import { proxy, useSnapshot } from "valtio";

export type Framework = {
  label: string;
  value: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  framework: string;
};

export type Theme = {
  label: string;
  value: string;
};

type RootState = {
  frameworks: Framework[];
  user: User;
  users: Map<number, User>;
  theme: Theme;
  void: object;
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
  void: {},
});

export function useMapKey<K, V>(map: Map<K, V>, key: K) {
  const value = map.get(key);
  const snap = useSnapshot(value ? value : store.void);

  if (Object.keys(snap).length === 0) {
    return null;
  }

  return snap as V;
}
