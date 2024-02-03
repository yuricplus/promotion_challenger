import Image from "next/image"
import React, { MouseEventHandler, useState } from "react";

import './style.scss'

interface IProductViewProps {
    url: string
}

export const ProductView = (props: IProductViewProps) => {

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
        boxView.style.opacity = '0';
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
            <Image src={props.url}
                width={300} height={400} alt='Imagem Ilustrativa' onMouseMove={(event) => createBox(event)} onMouseOut={() => hiddenBox()}
            />
        </div>
    )
}