import { IDescription, IProductDetails } from "../../interfaces/product-details.interface";
import { IProductData } from "../../interfaces/search-result.interface";
import { HttpBaseService } from "../http-base/http-base.service";

interface IResult {
    results: IProductData[]
}

export class SearchService extends HttpBaseService {
    async searchProducts(term: string, page: number, limit?: number){
       return await this.get(`sites/MLB/search?q=${term}?offset=${page}?limit=${limit}`)
    }

    async getProductsDetails(id: string): Promise<IProductDetails>{
        return await this.get(`items/${id}`);
    }

    async getDescription(id: string): Promise<IDescription>{
        return await this.get(`items/${id}/description`);
    }

    async searchCategory(): Promise<IResult>{
        return await this.get(`sites/MLB/search?category=MLB1743`);
    }
}