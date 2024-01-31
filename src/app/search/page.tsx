'use client'
import { HeaderComponent } from "../shared";
import CardProduct from "../shared/components/card-product";

export default function search() {
    const searchProducts = (e: Event) => {
        console.log(e)
    } 
    return (
       <>
        <HeaderComponent callBackSearch={searchProducts}></HeaderComponent>
        <section className="container">
            <div className="products-result">
                <CardProduct url={'https://http2.mlstatic.com/D_NQ_NP_707601-MLU72700966133_112023-W.webp'} title={'xbox one 2 controles'} price={'100'} />
            </div>
        </section>
       </>
    )
}