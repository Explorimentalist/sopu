'use client'

import Image from "next/image"
import { useState } from "react"
import React from "react"

interface Product {
  id: number
  name: string
  tag: string
  price: number
  image: string
  hoverImage: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Camiseta del pueblo Ndowéyé",
    tag: "",
    price: 25,
    image: "/placeholder.svg?height=600&width=600",
    hoverImage: "/placeholder.svg?height=600&width=600",
  },
  {
    id: 2,
    name: "Calendario Ndowéyé",
    tag: "Digital o Impreso",
    price: 15,
    image: "/placeholder.svg?height=600&width=600",
    hoverImage: "/placeholder.svg?height=600&width=600",
  },
  {
    id: 3,
    name: "Likano la bolo nyama 2024",
    tag: "Libro",
    price: 25,
    image: "/placeholder.svg?height=600&width=600",
    hoverImage: "/placeholder.svg?height=600&width=600",
  },
  {
    id: 4,
    name: "Epàlwí-rèbbo ekalanga panyólé",
    tag: "Aplicación móvil",
    price: 2,
    image: "/placeholder.svg?height=600&width=600",
    hoverImage: "/placeholder.svg?height=600&width=600",
  },
]

export default function ProductsOverview() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [currency, setCurrency] = useState<'EUR' | 'GBP'>('GBP')
  const [exchangeRate, setExchangeRate] = useState(1)

  // Fetch exchange rate and set currency based on location
  React.useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/c4d2dd40d761cfd3916721bcY/latest/GBP')
        const data = await response.json()
        setExchangeRate(data.conversion_rates.EUR)
        
        // Get user's location and set currency
        const userLocation = await fetch('https://api.ipapi.com/api/check?access_key=YOUR_API_KEY')
        const locationData = await userLocation.json()
        setCurrency(locationData.continent_code === 'EU' ? 'EUR' : 'GBP')
      } catch (error) {
        console.error('Error fetching exchange rate:', error)
      }
    }

    fetchExchangeRate()
  }, [])

  const formatPrice = (price: number) => {
    const finalPrice = currency === 'EUR' ? price * exchangeRate : price
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: currency,
    }).format(finalPrice)
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 font-sans">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <div
            className="relative aspect-square overflow-hidden bg-gray-100"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <Image
              src={hoveredProduct === product.id ? product.hoverImage : product.image}
              alt={product.name}
              fill
              className="object-cover object-center transition-opacity duration-300"
            />
          </div>
          <div className="mt-4 space-y-1">
            <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
            {product.tag && (
              <p className="text-sm text-gray-500">{product.tag}</p>
            )}
            <p className="text-lg font-medium text-gray-900">
              {formatPrice(product.price)}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}