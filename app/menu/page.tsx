"use client"
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
}

const productData: Product[] = [
  { id: 1, name: 'Momos', category: 'Momos', image: '/images/chicken-momos.jpg' },
  { id: 2, name: 'Veg Momos', category: 'Momos', image: '/images/' },
  { id: 3, name: 'Chicken ', category: 'Biryani', image: '/images/chicken-biryani.jpg' },
  { id: 4, name: 'Veg Biryani', category: 'Biryani', image: '/images/veg-biryani.jpg' },
 
];

const categories: string[] = ['All', ...Array.from(new Set(productData.map(product => product.category)))];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProducts = selectedCategory === 'All'
    ? productData
    : productData.filter(product => product.category === selectedCategory);

  return (
    <>
      <div className="bg-white p-6 mt-24">
        <h2 className="text-2xl font-bold mb-4">Our Products</h2>

        {/* Category Buttons */}
        <div className="mb-6">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 m-2 rounded ${
                selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Flexbox */}
        <div className="flex flex-wrap -m-2">
          {filteredProducts.map((product: Product) => (
            <div key={product.id} className="p-2  w-1/2  lg:w-1/4">
              <div className="bg-gray-100 p-4 rounded shadow">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
                <h3 className="mt-4 text-xl font-semibold ">{product.name}</h3>
                <p className="mt-2 text-gray-600">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
