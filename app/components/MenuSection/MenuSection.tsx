"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useEffect, useCallback } from "react";
import { MenuCard } from "../MenuCard";
import { foodItems } from "@/constants";
import { CategoryFilter } from "../CategoryFilter";
import { FaSpinner } from "react-icons/fa";

const ITEMS_PER_PAGE = 10;

export const MenuSection = () => {
  const [filterItems, setFilteredItems] = useState(
    foodItems.slice(0, ITEMS_PER_PAGE)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreItems, setHasMoreItems] = useState(
    foodItems.length > ITEMS_PER_PAGE
  );
  const observer = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useRef<HTMLDivElement | null>(null);

  const handleProductsChange = (category: string) => {
    const filtered =
      category === "All"
        ? foodItems
        : foodItems.filter((item) => item.category === category);
    setFilteredItems(filtered.slice(0, ITEMS_PER_PAGE));
    setCurrentPage(1);
    setHasMoreItems(filtered.length > ITEMS_PER_PAGE);
  };

  const loadMoreItems = useCallback(() => {
    if (isLoading || !hasMoreItems) return;

    setIsLoading(true);

    setTimeout(() => {
      const nextPage = currentPage + 1;
      const startIndex = nextPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE;
      const newItems = foodItems.slice(startIndex, nextPage * ITEMS_PER_PAGE);
      setFilteredItems((prevItems) => [...prevItems, ...newItems]);
      setCurrentPage(nextPage);
      setIsLoading(false);
      if (newItems.length < ITEMS_PER_PAGE) {
        setHasMoreItems(false);
      }
    }, 1000);
  }, [currentPage, isLoading, hasMoreItems]);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          loadMoreItems();
        }
      },
      { threshold: 1 }
    );

    if (lastItemRef.current) observer.current.observe(lastItemRef.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [loadMoreItems, isLoading]);

  return (
    <div
      id="Menu"
      className="flex items-center justify-center flex-col py-20 bg-black gap-6"
    >
      <h2 className="text-4xl lg:text-5xl font-semibold text-white text-start reveal reveal-from-left">
        Explore Our <span className="text-magenta">Menu</span>
      </h2>
      <div className="w-[200px] h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-md"></div>
      <p className="text-lg text-white mb-6 lg:w-[50%] w-[80%] capitalize reveal reveal-from-left">
        Discover our{" "}
        <span className="text-magenta capitalize">exclusive Menu</span> and
        enjoy a top-notch dining experience. We offer a variety of vegetarian
        foods.
      </p>
      <CategoryFilter onFilterChange={handleProductsChange} />
      <div className="flex items-center justify-center flex-wrap flex-row gap-6">
        {filterItems.map((item, index) => (
          <MenuCard
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
          />
        ))}
        <div ref={lastItemRef} className="w-full flex justify-center">
          {isLoading && hasMoreItems && (
            <FaSpinner className="text-white text-4xl lg:text-5xl animate-spin" />
          )}
        </div>
      </div>
    </div>
  );
};
