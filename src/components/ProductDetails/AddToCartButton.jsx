import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";

const AddToCartButton = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="space-y-4">
      <div className="join">
        <button
          className="btn btn-outline join-item"
          onClick={decreaseQuantity}
          disabled={quantity <= 1}
        >
          <FaMinus className="h-4 w-4" />
        </button>
        <input
          type="number"
          value={quantity}
          min={1}
          max={product.stock}
          className="input input-bordered join-item w-16 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button
          className="btn btn-outline join-item"
          onClick={increaseQuantity}
          disabled={quantity >= product.stock}
        >
          <FaPlus className="h-4 w-4" />
        </button>
      </div>
      <button className="btn btn-primary w-full">
        <span className="flex items-center">
          <FaShoppingCart className="mr-2 h-4 w-4"></FaShoppingCart>
        </span>
      </button>
    </div>
  );
};

export default AddToCartButton;
