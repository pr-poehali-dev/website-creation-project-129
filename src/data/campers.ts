export interface Camper {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  price: number;
  priceUnit: string;
  capacity: number;
  length: number;
  weight: number;
  features: string[];
  equipment: string[];
  badge?: string;
  hookType: string;
}

export const campers: Camper[] = [
  {
    id: "tr-1",
    name: "«Таёжный»",
    subtitle: "Прицеп-дача для комфортного глэмпинга",
    image: "https://cdn.poehali.dev/projects/03910495-d18f-464a-8ba2-70c8fd29d640/files/b80f2ba8-9c75-4484-8100-fcdbd22d0ed4.jpg",
    price: 4500,
    priceUnit: "сутки",
    capacity: 4,
    length: 6.5,
    weight: 1350,
    badge: "Популярный",
    hookType: "Фаркоп 50 мм (тип B)",
    features: ["Двуспальная кровать", "Газовая кухня", "Душ и туалет", "Газовое отопление", "Тент-маркиза"],
    equipment: ["Постельное бельё", "Полотенца", "Посуда и приборы", "Мангал", "Складной столик и стулья", "Газовый баллон"],
  },
  {
    id: "tr-2",
    name: "«Северный»",
    subtitle: "Компактный прицеп с панорамными окнами",
    image: "https://cdn.poehali.dev/projects/03910495-d18f-464a-8ba2-70c8fd29d640/files/721cb57c-1b4e-4ea3-94d4-8bff60e8f952.jpg",
    price: 5800,
    priceUnit: "сутки",
    capacity: 2,
    length: 5.8,
    weight: 980,
    badge: "Премиум",
    hookType: "Фаркоп 50 мм (тип B)",
    features: ["Панорамные окна", "Кровать king size", "Мини-кухня", "Душ с баком 60 л", "Смарт ТВ 32\""],
    equipment: ["Дизайнерский текстиль", "Bluetooth-колонка", "Посуда", "Набор для барбекю", "Шторы блэкаут"],
  },
  {
    id: "tr-3",
    name: "«Семейный»",
    subtitle: "Большой прицеп для семьи с детьми",
    image: "https://cdn.poehali.dev/projects/03910495-d18f-464a-8ba2-70c8fd29d640/files/2ebbaa6c-5fad-49c9-b9e7-538f835a2075.jpg",
    price: 5200,
    priceUnit: "сутки",
    capacity: 6,
    length: 7.8,
    weight: 1600,
    hookType: "Фаркоп 50 мм (тип B)",
    features: ["3 спальных места", "Просторная кухня", "Отдельный детский уголок", "ТВ", "Двойной холодильник"],
    equipment: ["Детское постельное", "Настольные игры", "Удочки в аренду", "Аптечка", "Газовый баллон"],
  },
];
