interface ArticleProduct {
  id: number;
  name: string;
  sale: number;
  price: number;
}
export interface ArticleResponse {
  id: number;
  title: string;
  detail: string;
  image: string;
  products: ArticleProduct[];
}
