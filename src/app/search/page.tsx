'use client'
import { useEffect, useState } from "react";
import { HeaderComponent } from "../shared";
import CardProduct from "../shared/components/card-product";
import { HttpBaseService } from "../shared/services/http-base/http-base.service";
import { useSearchParams } from 'next/navigation'
import { IProductData, ISearcResult } from "../shared/interfaces/search-result.interface";

import './style.scss'
import { useRouter } from "next/navigation";
import { PaginationComponent } from "../shared/components/pagination/pagination";

export default function search() {
    const searchParams = useSearchParams();
    const [result, setResult] = useState<IProductData[]>([])
    const [keyWords, setKeyWords] = useState<string>()
    const router = useRouter()

    const handelPage = (page: number) => {
        console.log(page)
    }

    const searchProducts = (e: Event) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const search = form.querySelector('#search') as HTMLInputElement;
        if(search.value) {
            router.push(`/search?term=${search.value}`)
           getProductsByTerms(search.value)
        }
    } 
    const getProductsByTerms = async (terms: string) => {
        const baseService = new HttpBaseService();
        const response = await baseService.get(`sites/MLB/search?q=${terms}`) as ISearcResult;
        setResult(response?.results);
        setKeyWords(response.query)
    }

    useEffect(() => {
        const terms = searchParams.get('term') as string;
        getProductsByTerms(terms)
    }, [])

    return (
       <>
        <HeaderComponent callBackSearch={searchProducts}></HeaderComponent>
        <section className="container">
            <div className="result-keywords">
                <h1>Resultado: {keyWords}</h1>
            </div>
            <div className="products-result">
                {result.map((item) => (
                    <CardProduct url={item.thumbnail} title={item.title} price={item.price} id={item?.id} key={item?.id}/>
                ))}
            </div>
            <div className="bottom-result">
                <PaginationComponent totalPages={20} handlePageChange={(e: number) => handelPage(e)} actualPage={14}/>
            </div>
        </section>
       </>
    )
}