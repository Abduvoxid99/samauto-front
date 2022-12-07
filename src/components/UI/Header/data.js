export const links = [
  {
    name: "Продукция",
    url: "products",
    isActive: true,
  },
  {
    name: "Дилерская сеть",
    url: "configurator",
    isActive: false,
  },
  {
    name: "Специальные предложения",
    // url: "/",
    isActive: false,
    children: [
      {
        name: "Акции",
        link: "/special-offers/stock",
      },
      {
        name: "Аукцион",
        link: "/special-offers/stock",
      },
      {
        name: "Тендер компании",
        link: "/special-offers/tender",
      },
    ],
  },
  {
    name: "Контакт",
    url: "contact",
    isActive: false,
  },
  {
    name: "Скачат каталог",
    url: "download-catalog",
    isActive: false,
  },
];

export const activeLinks = [
  "/",
  "/products",
  "/dealer-network",
  "/special-offers",
  "/contact",
  "/download-catalog",
];
