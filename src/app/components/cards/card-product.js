import Image from "next/image"
import Button_Add_To_Cart from "../buttons/button_add_to_cart"
import Button_Delete_From_Cart from "../buttons/button_delete_from_cart"
import ProductPrice from "../price"

export default function CardProduct({ product_id, product_title, product_price, product_discount, product_mrp, product_image }) {
    
    return (
        <div className="box-border shadow-sm max-w-xs mx-auto p-4 md:min-h-85 md:min-w-64">
            <div className="flex justify-center items-center bg-gray-50">
                <Image
                    src={product_image}
                    width={500}
                    height={500}
                    priority={true}
                    className="w-40 h-40 md:w-64 md:h-64 object-contain"
                />
            </div>
            <div className="mt-2 text-center h-28">
                <div className="min-h-11 md:min-h-14">
                    <p className="font-sans text-sm font-semibold md:text-lg md:font-semibold">{product_title}</p>
                </div>
                <div className="mt-2 justify-center md:flex md:justify-center md:items-center md:space-x-2">
                    <p className="text-md font-bold">{ProductPrice(product_price)}</p>
                    <p className="line-through text-sm text-slate-500">{ProductPrice(product_mrp)}</p>
                    <p className="text-sm text-emerald-500">{product_discount}% off</p>
                </div>
            </div>
            <div className="mt-4">
                <Button_Add_To_Cart product_id={product_id} product_title={product_title} product_price={product_price} product_image={product_image} product_discount={product_discount} product_mrp={product_mrp} />
            </div>
        </div>
    )
}