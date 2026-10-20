import { hotCoffees } from "./sicak-kahveler";
import { coldCoffees } from "./soguk-kahveler";
import { drinks } from "./icecekler";
import { desserts } from "./tatlilar";
import { foods } from "./yemekler";
import type { CategoryName, MenuItem } from "./types";
export type { CategoryName, MenuItem } from "./types";
export const categories: CategoryName[] = [
  "Sıcak Kahveler",
  "Soğuk Kahveler",
  "İçecekler",
  "Tatlılar",
  "Yemekler",
];
export const items: MenuItem[] = [
  ...desserts,
  ...foods,
  ...hotCoffees,
  ...coldCoffees,
  ...drinks,
];
