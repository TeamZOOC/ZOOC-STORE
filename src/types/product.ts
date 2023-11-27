export interface ProductInfoResponse {
  id: number;
  name: string;
  sale: number;
  price: number;
  image: string;
}

export interface OptionCategoriesInfo {
  name: string;
  optionDetails: [
    {
      id: number;
      name: string;
    },
  ];
}

export interface ProductDetailResponse {
  id: number;
  name: string;
  description: string;
  price: number;
  detail: string;
  review: string;
  delivery: string;
  image: string;
  sale: number | null;
  optionCategories: OptionCategoriesInfo[];
}
