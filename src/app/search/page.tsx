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
import { LoadingComponent } from "../shared/components/loading/loading.component";
import { SearchService } from "../shared/services/search/search.service";

export default function search() {
    const searchParams = useSearchParams();
    const [result, setResult] = useState<IProductData[]>([])
    const [keyWords, setKeyWords] = useState<string>();
    const [loading, setLoading] = useState(false);
    const [actualPage, setActualPage] = useState(1)
    const [limit, setLimits] = useState(0)
    const router = useRouter()

    const setClickPageNumber = (page: number) => {
        const terms = searchParams.get('term') as string;
        scrolToTop();
        setActualPage(page);
        getProductsByTerms(terms)
    }

    const searchProducts = (e: Event) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const search = form.querySelector('#search') as HTMLInputElement;
        if (search.value) {
            router.push(`/search?term=${search.value}`)
            getProductsByTerms(search.value)
        }
    }
    const getProductsByTerms = async (terms: string) => {
        const search = document.querySelector('#search') as HTMLInputElement;
        setLoading(true)
        try {
            const searchService = new SearchService();
            const response = await searchService.searchProducts(terms, actualPage) as ISearcResult;
            setLoading(false)
            setLimits(response.paging.limit);
            setResult(response?.results);
            setKeyWords(terms);
            search.value = terms;
        } catch (error) {
            setLoading(false)
        }
    }

    const scrolToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        const terms = searchParams.get('term') as string;
        getProductsByTerms(terms)
    }, [])

    if (loading) return (
        <>
            <HeaderComponent callBackSearch={searchProducts}></HeaderComponent>
            <LoadingComponent />
        </>
    );

    return (
        <>
            <HeaderComponent callBackSearch={searchProducts}></HeaderComponent>
            <section className="container">
                <div className="result-keywords">
                    <h1>Resultado: {keyWords}</h1>
                </div>
                <div className="products-result" data-testid="list">
                    {result?.map((item) => (
                        <CardProduct url={item.thumbnail} title={item.title} price={item.price} id={item?.id} key={item?.id} />
                    ))}
                </div>
                <div className="bottom-result">
                    <PaginationComponent totalPages={limit} handlePageChange={(e: number) => setClickPageNumber(e)} actualPage={actualPage} />
                </div>
            </section>
        </>
    )
}