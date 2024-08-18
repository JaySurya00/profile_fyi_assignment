'use client'
import { useEffect } from "react";
import "../globals.css";
export default function Payment() {
    useEffect(()=>{
        localStorage.removeItem('cart');
    },[])
    return (
        <div className="flex items-center justify-center min-h-screen bg-green-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="bg-green-100 text-green-600 p-4 rounded-full mx-auto mb-4">
                    <p className="text-4xl font-bold">✓</p>
                </div>
                <p className="text-2xl font-semibold text-gray-800">Payment Successful</p>
                <p className="mt-2 text-gray-600">Thank you for your purchase. Your payment has been processed successfully.</p>
                <a
                    href="/"
                    className="mt-6 inline-block bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
                >
                    Go to Home
                </a>
            </div>
        </div>
    )
}
