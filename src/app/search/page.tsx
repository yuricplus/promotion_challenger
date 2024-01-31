'use client'
import { HeaderComponent } from "../shared";

export default function search() {
    const searchProducts = (e: Event) => {
        console.log(e)
    } 
    return (
       <>
        <HeaderComponent callBackSearch={searchProducts}></HeaderComponent>
       </>
    )
}