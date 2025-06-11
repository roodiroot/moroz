// Изображения
type ImageFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
};

type ImageFormats = {
  small?: ImageFormat;
  thumbnail?: ImageFormat;
  medium?: ImageFormat;
  large?: ImageFormat;
  [key: string]: ImageFormat | undefined; // позволяет расширять список форматов
};
export type ImageItem = {
  width?: number;
  height?: number;
  formats?: ImageFormats;
  url?: string;
};
// Типы для пагинации и ответов API
export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

// УСЛУГИ И ЦЕНЫ
// Стоимость услуг и товаров
export type ServiceItem = {
  id: number;
  documentId: string;
  service: string;
  model_conditionair: string | null;
  price: string;
  createdAt: string; // ISO date string
  updatedAt: string;
  publishedAt: string;
};

// Ответ с API для услуг
export type ServiceResponse = {
  data: ServiceItem[];
  meta: {
    pagination: Pagination;
  };
};

// ТОВАРЫ
// Товар
export type ConditionerItem = {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  square?: string;
  compressor?: string;
  wifi?: string;
  price?: string;
  images?: ImageItem[]; // Массив изображений
  brand?: {
    name: string;
    slug: string;
  };
  //   createdAt?: string;
  //   updatedAt?: string;
  //   publishedAt?: string;
};

// Товары ответ с API
export type ConditionerResponse = {
  data: ConditionerItem[];
  meta: {
    pagination: Pagination;
  };
};

// FAQ API
export type FAQItem = {
  id: number;
  documentId: string;
  question: string;
  answer: string;
};

export type FAQResponse = {
  data: FAQItem[];
  meta: {
    pagination: Pagination;
  };
};
