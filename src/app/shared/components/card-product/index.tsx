import Image from "next/image";
import './style.scss'
import Link from "next/link";
import { formatPrice } from "../../services/currency-format/currency-format.service";

interface ICardProductComponentProps {
    url: string,
    title: string,
    price: number,
    id: string
}

const CardProduct = (props: ICardProductComponentProps) => {
    return (
        <Link href={`details/${props.id}`} tabIndex={-1}>
            <div className="card">
                <div className="card-image">
                    <Image
                        src={props.url}
                        alt={props.title}
                        width={100}
                        height={100}
                        aria-hidden
                    />
                </div>
                <div className="card-title" tabIndex={0} aria-level={2}>
                    <span className="title-product">{props.title}</span>
                </div>
                <div className="card-price" aria-label={props.price} aria-roledescription="Preço">
                    <span className="price-product">{formatPrice(props.price)}</span>
                </div>
            </div>
        </Link>
    )
}

export default CardProduct;