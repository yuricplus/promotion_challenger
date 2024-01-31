import Image from "next/image";
import './style.scss'

interface ICardProductComponentProps {
    url: string,
    title: string,
    price: string
}

const CardProduct = (props: ICardProductComponentProps) => {
    return (
        <div className="card">
            <div className="card-image">
                <Image 
                    src={props.url}
                    alt={props.title}
                    width={100}
                    height={100}
                />
            </div>
            <div className="card-title">
                <span className="title-product">{props.title}</span>
            </div>
            <div className="card-price">
                <span className="price-product">R$ {props.price}</span>
            </div>
        </div>
    )
}

export default CardProduct;