'use client'
import { useState } from "react";
import { useCartContext } from "@/app/context/cart_context"
import ProductPrice from "../price";
import Dropdown from "../dropdown";

export default function OrderDetails() {
    const { cart } = useCartContext();

    const itemCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    const totalPrice = cart.reduce((total, item) => total + item.mrp * (item.quantity || 1), 0);
    const totalDiscount = cart.reduce((total, item) => total + (item.mrp - item.price) * (item.quantity || 1), 0);
    const amountToBePaid = (totalPrice - totalDiscount);

    const [totalAmountToBePaid, setTotalAmountToBePaid] = useState(amountToBePaid);

    const handleDropDownSelect = (selectedOption) => {
        if (selectedOption.endsWith('%')) {
            const percentage = parseFloat(selectedOption);
            setTotalAmountToBePaid(() => {
                const newPrice = Number(((100 - percentage) * amountToBePaid) / 100).toFixed(2);
                return newPrice >= 0 ? newPrice : 0;
            });
        }
        else {
            const priceDiscount = Number(parseInt(selectedOption)).toFixed(2);
            setTotalAmountToBePaid(() => {
                const newPrice = amountToBePaid - priceDiscount;
                return newPrice >= 0 ? newPrice : 0;
            });
        }
    }



    return (
        <div className="flex flex-col border border-gray-200 shadow-lg rounded-lg m-4 p-4 divide-y bg-white">
            <div className="mb-4">
                <p className="font-semibold text-gray-700 text-xl">Order Details</p>
            </div>
            <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                    <p className="text-gray-600">Price ({itemCount} {itemCount === 1 ? 'Item' : 'Items'})</p>
                    <p className="font-semibold">{ProductPrice(totalPrice)}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-600">Discount</p>
                    <p className="font-semibold text-red-500">-{ProductPrice(totalDiscount.toFixed(2))}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-600">Delivery Charges</p>
                    <p className="font-semibold text-green-500">Free</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-600">Apply Coupon</p>
                    <Dropdown onSelect={handleDropDownSelect} />
                </div>
            </div>
            <div className="flex justify-between items-center mb-4">
                <p className="font-semibold text-lg">Total Amount</p>
                <p className="font-semibold text-lg">{ProductPrice(totalAmountToBePaid)}</p>
            </div>
            <div className="self-end">
                <a href="/payment">
                    <button className="bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition p-2">
                        Place Order
                    </button>
                </a>
            </div>
        </div>
    )
}
