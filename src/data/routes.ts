export interface Route {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  distance: string;
  difficulty: string;
  image: string;
  highlights: string[];
  price: number;
}

export const routes: Route[] = [
  {
    id: "r1",
    title: "Золотое кольцо",
    subtitle: "Древние города и монастыри",
    duration: "7 дней",
    distance: "1 200 км",
    difficulty: "Лёгкий",
    image: "https://cdn.poehali.dev/projects/03910495-d18f-464a-8ba2-70c8fd29d640/files/9620052b-8f5c-40bc-85fd-4f20f078193d.jpg",
    highlights: ["Суздаль", "Владимир", "Ростов Великий", "Ярославль"],
    price: 45000,
  },
  {
    id: "r2",
    title: "Карелия: озёра и тишина",
    subtitle: "Скалы, водопады и Ладога",
    duration: "5 дней",
    distance: "800 км",
    difficulty: "Средний",
    image: "https://cdn.poehali.dev/projects/03910495-d18f-464a-8ba2-70c8fd29d640/files/357972a6-7936-4dfb-83d3-f9987f4fc134.jpg",
    highlights: ["Водопад Кивач", "Ладожские шхеры", "Сортавала", "Рускеала"],
    price: 38000,
  },
  {
    id: "r3",
    title: "Волжский романс",
    subtitle: "По берегам великой реки",
    duration: "10 дней",
    distance: "2 000 км",
    difficulty: "Лёгкий",
    image: "https://cdn.poehali.dev/projects/03910495-d18f-464a-8ba2-70c8fd29d640/files/ceb134a8-7645-4d8f-8f4b-0c6d86498dd5.jpg",
    highlights: ["Нижний Новгород", "Казань", "Ульяновск", "Самара"],
    price: 62000,
  },
];
