import { Link, useParams } from "react-router";
import AddToCartButton from "../components/ProductDetails/AddToCartButton";
import ProductImageGallery from "../components/ProductDetails/ProductImageGallery";
import { FaArrowLeft } from "react-icons/fa";
import { Suspense, useEffect, useState } from "react";
import apiClient from "../services/api-client";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    apiClient.get(`/products/${productId}/`).then((res) => {
      setProduct(res.data);
      console.log(res.data);
      setIsLoading(false);
    });
  }, [productId]);

  if (isLoading)
    return (
      <div>
        Loading... <br />
        Please wait a moment.
      </div>
    );
  if (!product) return <div>Product not found!</div>;

  return (
    <div className="w-3/4 mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          to="/shop"
          className="mb-3 flex items-center text-sm text-base-content/70 hover:text-base-content transition-colors"
        >
          <FaArrowLeft className="mr-2 h-4 w-4" />
          Back to products
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Suspense
            fallback={
              <div className="aspect-square bg-base-300 animate-pulse rounded-lg"></div>
            }
          >
            <ProductImageGallery
              images={product.images}
              ProductName={product.name}
            />
          </Suspense>
          <div className="flex flex-col">
            <div className="mb-4">
              <div className="badge badge-outline mb-2">
                Category {product.category}
              </div>
              <h1 className="text-3xl font-bold tracking-tight">
                {product.name}
              </h1>
            </div>

            <div className="mt-2 mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">${product.price}</span>
                <span className="text-sm text-base-content/70">
                  (${product.price_with_tax} incl. tax)
                </span>
              </div>
            </div>

            <div className="prose prose-sm mb-6">
              <p>{product.description}</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center">
                <div className="mr-2 text-sm font-medium">Avaibility:</div>
                {product.stock > 0 ? (
                  <div className="badge badge-outline bg-success/10 text-success border-success/20">
                    In Stock - {product.stock} items available
                  </div>
                ) : (
                  <div className="badge badge-outline bg-error/10 text-error border-error/20">
                    Out of Stock
                  </div>
                )}
              </div>
            </div>

            <div className="mt-auto">
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
