'use client'
import { HeaderComponent } from "./shared";
import { useEffect, useState } from "react";
import { HttpBaseService } from "./shared/services/http-base/http-base.service";
import { useRouter } from "next/navigation";
import { IProductData } from "./shared/interfaces/search-result.interface";
import { SearchService } from "./shared/services/search/search.service";
import CardProduct from "./shared/components/card-product";

export default function Home() {
  const router = useRouter();
  const [recommendation, setRecomendatton] = useState<IProductData[]>([]);

  const getRecomendation = async () => {
    try {
      const searchService = new SearchService();
      const data = await searchService.searchCategory();

      setRecomendatton(data.results.slice(0, 4))
    } catch (error) {

    }
  }

  useEffect(() => {
    getRecomendation()
  }, [])

  const redirectToSearchPage = (terms: string) => {
    router.push(`/search?term=${terms}`)
  }

  const searchProducts = (e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const search = form.querySelector('#search') as HTMLInputElement;
    if (search.value) {
      redirectToSearchPage(search.value)
    }
  }

  return (
    <>
      <HeaderComponent callBackSearch={searchProducts}></HeaderComponent>
      <main className="main-section">
        <div className="banner-cta"></div>
        <div className="divider-shadow"></div>
        <div className="container-product">
          {recommendation.map((item) => (
            <CardProduct url={item.thumbnail} title={item.title} price={item.price} id={item?.id} key={item?.id} />
          ))}
        </div>
      </main>
    </>
  );
}
