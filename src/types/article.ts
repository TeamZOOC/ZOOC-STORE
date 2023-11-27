interface ArticleProduct {
  id: number;
  name: string;
  sale: number;
  price: number;
  image: string;
}
export interface ArticleResponse {
  id: number;
  title: string;
  detail: string;
  image: string;
  products: ArticleProduct[];
}
