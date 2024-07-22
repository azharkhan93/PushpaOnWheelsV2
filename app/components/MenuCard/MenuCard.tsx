import Image from 'next/image';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
type FoodCardProps = {
    image: string;
    title: string;
    price: number;
    rating: number;
  }

export const MenuCard: React.FC<FoodCardProps> = ({ image, title, price, rating }) => {
  return (
    <div className="   shadow-lg p-4 gap-6 w-[348px] lg:w-64 rounded-l-3xl">
      <div className="flex justify-between items-center mb-4 gap-2">
      <Image src={image} alt={title} width={70} height={100} className="rounded-full" />
        <div className="text-lg font-bold text-white">₹{price}</div>
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-white ">Per Plate</p>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center justify-center gap-1">
        <FaStar className="text-yellow-500 mr-1"  />
        <span className='text-white'>{rating}</span>
        </div>
        <div className="flex ">
        <FaShoppingCart size={26} fill='white' className="text-white cursor-pointer" />
      </div>
      </div>
      
    </div>
  );
};


