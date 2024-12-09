import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";


type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  originalPrice?: number;
  isNew?: boolean;
  isSale?: boolean;
};

const ProductCard = ({ product }: { product: Product }) => (
  <div key={product.id} id="product"className="group relative rounded-lg bg-white">
    <div className="relative aspect-square overflow-hidden rounded-lg">
      {product.isNew && (
        <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
          New
        </Badge>
      )}
      {product.isSale && (
        <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
          Sale
        </Badge>
      )}
      <Link href={`/product/${product.id}`}>
      <Image
          src={product.image}
          alt={product.title}
          height={400}
          width={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          aria-label={`View details of ${product.title}`}
        />
          
      </Link>
    </div>
    <div className="mt-4 flex items-center justify-between">
      <div>
        <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-lg font-medium text-[#1C1B1F]">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
      <button
        className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]"
        aria-label={`Add ${product.title} to cart`}
      >
        <ShoppingCart className="h-5 w-5" />
      </button>
    </div>
  </div>
);


const FeaturedProductsPage = () => {
   const products: Product[] = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 20,
      image: "/Image (8).png",
      isNew: true,
    },
    {
      id: 2,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/Image (9).png",
      isSale: true,
    },
    { id: 3, title: "Library Stool Chair", price: 20, image: "/Image (10).png" },
    { id: 4, title: "Library Stool Chair", price: 20, image: "/Image (11).png" },
   
  ];
  return (
    <div>
      
<section className="text-gray-600 bg-white body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <span><h1 className='mr-5 text-black font-bold text-3xl border-l-8 pl-3 ml-1'>FEATURED PRODUCTS</h1></span>
    <nav className="md:ml-auto flex flex-wrap items-center text-xl font-semibold text-black justify-center">
    </nav>
  </div>

  <div className="container mx-auto px-4 py-20">
    
      <div className="grid grid-cols gap-6 sm:grid-cols-1 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>

      </div>
      </div>
      </section>
    </div>
  )
}

export default FeaturedProductsPage
