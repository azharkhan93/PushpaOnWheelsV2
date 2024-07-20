/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

type ReviewCardprops = {
  imageSrc: string;
  clientName: string;
  reviewText: string;
};
export const ReviewCard: React.FC<ReviewCardprops> = ({
  imageSrc,
  clientName,
  reviewText,
}) => {
  return (
    <div className="w-[334px] lg:w-[380px]  shadow-red-950 rounded-b-3xl rounded-t-3xl rounded-l-lg overflow-hidden"  style={{backgroundColor: "#FF00FF"}}>
      <div className="flex flex-col items-center lg:items-start p-2">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white">
          <Image
            src={imageSrc}
            alt="client"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center mt-2 flex-col  justify-between rounded-md gap-3">
          <h1 className="text-1xl text-white">{clientName}</h1>

          <div className="flex flex-row">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center mt-4">
          <blockquote className="text-center text-white italic">
            {reviewText}
          </blockquote>
        </div>
      </div>
    </div>
  );
};
