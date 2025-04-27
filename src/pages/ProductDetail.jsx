import AddToCartButton from "../components/ProductDetails/AddToCartButton";
import ProductImageGallery from "../components/ProductDetails/ProductImageGallery";

const ProductDetail = () => {
  const product = {
    id: 2,
    name: "Laptop",
    images: [
      {
        id: 3,
        image:
          "https://res.cloudinary.com/djz3p8sux/image/upload/v1745771126/rebehbu2mhgvjxcaxpqj.webp",
      },
    ],
    description: "High-quality laptop for everyday use.",
    price: 46.92,
    price_with_tax: 55.37,
    stock: 174,
    category: 1,
    created_at: "2025-02-02T15:45:04.629624Z",
    updated_at: "2025-02-02T15:45:04.629624Z",
  };

  return (
    <div className="w-3/4 mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <ProductImageGallery
          images={product.images}
          ProductName={product.name}
        />
        <div className="mt-auto">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
