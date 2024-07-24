import Image from 'next/image';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

type FoodCardProps = {
  image: string;
  title: string;
  price: number;
  rating: number;
};

export const MenuCard: React.FC<FoodCardProps> = ({ image, title, price, rating }) => {
  return (
    <div className="shadow-lg p-4 rounded-l-3xl bg-magenta">
      <div className="flex justify-between items-center mb-4">
        <Image src={image} alt={title} width={87} height={87} className="rounded-full" />
        <div className="text-lg font-bold text-white">₹{price}</div>
      </div>
      <h3 className="lg:text-xl lg:font-semibold text-white">{title}</h3>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-500" />
          <span className="text-white">{rating}</span>
        </div>
        <div className="flex">
          <FaShoppingCart size={26} fill="white" className="text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
};



