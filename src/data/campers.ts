export interface Camper {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  price: number;
  priceUnit: string;
  capacity: number;
  length: number;
  features: string[];
  equipment: string[];
  badge?: string;
}

export const campers: Camper[] = [
  {
    id: "lux-1",
    name: "«Таёжный»",
    subtitle: "Полноразмерный кемпер для глэмпинга",
    image: "https://cdn.poehali.dev/projects/03910495-d18f-464a-8ba2-70c8fd29d640/files/9620052b-8f5c-40bc-85fd-4f20f078193d.jpg",
    price: 7500,
    priceUnit: "сутки",
    capacity: 4,
    length: 7.5,
    badge: "Популярный",
    features: ["Двуспальная кровать", "Кухня с плитой", "Душ и туалет", "Отопление", "Кондиционер"],
    equipment: ["Постельное бельё", "Полотенца", "Посуда", "Мангал", "Столик и стулья", "Wi-Fi роутер"],
  },
  {
    id: "lux-2",
    name: "«Северный»",
    subtitle: "Панорамный кемпер с большими окнами",
    image: "https://cdn.poehali.dev/projects/03910495-d18f-464a-8ba2-70c8fd29d640/files/526d3e96-b6ea-4c53-8e8c-3fba4facba9c.jpg",
    price: 9800,
    priceUnit: "сутки",
    capacity: 2,
    length: 6.8,
    badge: "Премиум",
    features: ["Панорамные окна", "Люкс-кровать king size", "Мини-кухня", "Душ с баком 40л", "Смарт ТВ"],
    equipment: ["Дизайнерский текстиль", "Bluetooth-колонка", "Посуда", "Набор барбекю", "Шторы блэкаут"],
  },
  {
    id: "lux-3",
    name: "«Семейный»",
    subtitle: "Просторный кемпер для семьи с детьми",
    image: "https://cdn.poehali.dev/projects/03910495-d18f-464a-8ba2-70c8fd29d640/files/357972a6-7936-4dfb-83d3-f9987f4fc134.jpg",
    price: 8500,
    priceUnit: "сутки",
    capacity: 6,
    length: 8.2,
    features: ["3 спальных места", "Детские принадлежности", "Просторная кухня", "ТВ для детей", "Двойной холодильник"],
    equipment: ["Детское постельное", "Настольные игры", "Удочки в аренду", "Велосипеды", "Аптечка"],
  },
];
