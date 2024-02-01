export interface ISearcResult {
    query: string,
    paging: {
        limit: number,
        offset: number,
        total: number
    },
    results: IProductData[]
}

export interface IProductData {
    id: string,
    title: string,
    price: number,
    thumbnail: string
}