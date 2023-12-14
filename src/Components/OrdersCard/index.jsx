import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center border p-4 border-black w-80 rounded-lg mb-4">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light flex justify-between gap-1">
            <CalendarIcon className="h-6 w-6 text-green-400 cursor-pointer" />
            01.02.03
          </span>
          <span className="font-light flex justify-between gap-1">
            <ShoppingBagIcon className="h-6 w-6 text-green-400 cursor-pointer" />
            {totalProducts} articles
          </span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice.toFixed(2)}</span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
