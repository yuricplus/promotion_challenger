'use client'
import { HeaderComponent } from "./shared";
import { useEffect } from "react";
import { HttpBaseService } from "./shared/services/http-base/http-base.service";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  
  useEffect(() => {
    const baseService = new HttpBaseService();
    baseService.get('products/search?status=active&site_id=MLA&q=Samsung 20 Galaxy S8 64 GB rosa')
    console.log('data', process.env.URL_API)
  }, []) 

  const redirectToSearchPage = (terms: string) => {
    router.push(`/search?term=${terms}`)
  }

  const searchProducts = (e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const search = form.querySelector('#search') as HTMLInputElement;
    if(search.value) {
      redirectToSearchPage(search.value)
    }
  }

  return (
    <>
      <HeaderComponent callBackSearch={searchProducts}></HeaderComponent>
      <main>
     </main>
    </>
  );
}
