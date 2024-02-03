export interface IProductDetails {
  pictures: IPicture[],
  title: string,
  price: number,
  original_price: number
}

interface IPicture {
  url: string
}

export interface IDescription {
  plain_text: string
}