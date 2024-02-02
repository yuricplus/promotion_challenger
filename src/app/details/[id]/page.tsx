'use client'
import { HeaderComponent } from "@/app/shared";
import { ProductView } from "@/app/shared/components/product-view/product-view.component";

export default function DetailsPage() {
    const search = () => {

    }
    return (
        <>
            <HeaderComponent callBackSearch={search}></HeaderComponent>
            <section className="container">
                <ProductView></ProductView>
            </section>
        </>
    )
}