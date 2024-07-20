"use client";
import { useState } from "react";
import Image from "next/image";
import { categories } from "@/constants";

type CategoryFilterProps = {
  onFilterChange: (category: string) => void;
};



export const CategoryFilter: React.FC<CategoryFilterProps> = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="mb-4 flex items-center justify-center gap-5 flex-wrap  lg:flex-nowrap ">
      {categories.map(({ name, icon }) => (
        <button
          key={name}
          onClick={() => handleCategoryChange(name)}
          className={`px-6 py-2 rounded-md ${
            selectedCategory === name ? 'bg-magenta text-white' : 'bg-magenta'
          }`}
        >
          <div className="flex items-center justify-center gap-3">
            <Image 
              src={icon}
              alt={`${name} icon`}
              width={24}
              height={24}
              className="w-6 h-6 rounded-full"
            />
            {name}
          </div>
        </button>
      ))}
    </div>
  );
};

