import Image from "next/image";

const CardProduct = (url: string, title: string, price: string) => {
    return (
        <div className="card">
            <div className="card-image">
                <Image 
                    src={url}
                    alt={title}
                />
            </div>
            <div className="card-title">
                
            </div>
        </div>
    )
}

export default CardProduct;