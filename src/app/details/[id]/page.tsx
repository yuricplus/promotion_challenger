'use client'
import { HeaderComponent } from "@/app/shared";
import { ProductView } from "@/app/shared/components/product-view/product-view.component";
import './style.scss'
import { SearchService } from "@/app/shared/services/search/search.service";
import { useEffect, useState } from "react";
import { LoadingComponent } from "@/app/shared/components/loading/loading.component";
import { IProductDetails } from "@/app/shared/interfaces/product-details.interface";
import { formatPrice } from "@/app/shared/services/currency-format/currency-format.service";
import { useRouter } from "next/navigation";


export default function DetailsPage({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState('')
  const [product, setProduct] = useState<IProductDetails>();
  const router = useRouter()
  const searchService = new SearchService();

  const getDescription = async (id: string) => {
    try {
      const data = await searchService.getDescription(id)
      setDescription(data.plain_text)
    } catch (error) {
      console.log(error)
    }
  }

  const getProductDetails = async () => {
    setLoading(true)
    try {
      const data = await searchService.getProductsDetails(params.id)
      setProduct(data)
      setLoading(false);
      getDescription(params.id)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductDetails();
  }, [])

  const search = async (e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const search = form.querySelector('#search') as HTMLInputElement;
    if(search.value) {
      router.push(`/search?term=${search.value}`)
    }
    
  }

  if(loading) return (
    <>
     <HeaderComponent callBackSearch={(e: Event) => search(e)}></HeaderComponent>
     <LoadingComponent/>
    </>
  );
  
  return (
    <>
      <HeaderComponent callBackSearch={(e: Event) => search(e)}></HeaderComponent>
      <section className="container">
        <ProductView url={product?.pictures[0].url || ''
        }></ProductView>

        <div className="product-details">
          <div className="name-product">
            <h1>{product?.title}</h1>
          </div>

          <div className="price-product">
            <span className="price-was">{formatPrice(product?.original_price || 0)}</span>
            <span>{formatPrice(product?.price || 0)}</span>
          </div>

          <div className="cta-product">
            <button className="btn-primary">Comprar</button>
          </div>
        </div>
      </section>
      <section className="description">
        <h2>Descrição</h2>
        <p className="text-description">
          {description}
        </p>
      </section>
    </>
  )
}