import Image from "next/image"
import React, { MouseEventHandler, useState } from "react";

import './style.scss'

export const ProductView = () => {

    const createBox = (element: React.MouseEvent<HTMLImageElement>) => {
        const boxView = document.getElementById('product-view') as HTMLElement;
        const boxViewCtn = document.querySelector('.box-container') as HTMLElement;
        const srcElement = element.currentTarget.currentSrc;
        const positionX = element.nativeEvent.offsetX / element.currentTarget.offsetWidth * 100;
        const postionY = element.nativeEvent.offsetY / element.currentTarget.offsetHeight * 100;

        boxView.style.backgroundImage = `url(${srcElement})`
        boxView.style.backgroundPosition = `${positionX}% ${postionY}%`
        boxViewCtn.style.opacity = '1';
    }

    const hiddenBox = () => {
        const boxView = document.querySelector('.box-container') as HTMLElement;
        boxView.style.opacity = '0'
    }

    const ViewProduct = () => {
        return (
            <div className="box-container">
                <div id="product-view" className="box-view"></div>
            </div>
        )
    }

    return (
        <div className="product-container">
            <ViewProduct />
            <Image src="http://http2.mlstatic.com/D_NQ_NP_2X_959539-MLB73240676513_122023-F.webp"
                width={300} height={400} alt='teste' onMouseMove={(event) => createBox(event)} onMouseOut={() => hiddenBox()}
            />
        </div>
    )
}