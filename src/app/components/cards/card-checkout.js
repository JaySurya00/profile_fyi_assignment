import Image from "next/image"
import ButtonIncrementDecrement from "../buttons/button_increment_decrement"
import Button_Delete_From_Cart from "../buttons/button_delete_from_cart"

export default function CheckoutCard({product_id, product_title, product_price, product_discount, product_image, product_mrp, product_quantity}) {
    return (
        <div className="p-4 border-b">
            <div className="flex">
                <div className="flex mr-4 justify-center items-center bg-gray-50">
                    <Image
                        src={product_image}
                        width={500}
                        height={500}
                        priority={true}
                        className="w-40 h-40 md:w-50 md:h-50 object-contain"
                    />
                </div>
                <div>
                    <p className="font-sans text-lg font-semibold md:text-lg md:font-semibold">{product_title}</p>
                    <p className="text-sm text-slate-500">Delivery In: 4 days</p>
                    <p className="text-sm text-slate-500">Seller: XYZ</p>
                    <div className="mt-2 justify-center md:flex md:justify-center md:items-center md:space-x-2">
                        <p className="mt-4 line-through text-sm text-slate-500">${product_mrp}</p>
                        <p className="text-md font-bold">${product_price}</p>
                        <p className="text-sm text-emerald-500">{product_discount}% off</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 flex items-center ml-3">
                <div className="relative flex items-center max-w-[8rem]">
                    <ButtonIncrementDecrement product_id={product_id} product_quantity={product_quantity}/>
                </div>
                <div className="md:ml-10">
                    <Button_Delete_From_Cart product_id={product_id}/>
                </div>
            </div>
        </div>
    )
}