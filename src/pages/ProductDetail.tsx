import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { getProductById } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || "");

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/promo" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Promotions
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                {product.badge}
              </Badge>
            )}
            {product.madeInIndonesia && (
              <Badge className="absolute top-4 right-4 bg-card text-card-foreground border">
                Made in Indonesia
              </Badge>
            )}
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-lg text-muted-foreground mb-6">{product.description}</p>
            
            <div className="mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-bold">
                  Rp {product.price.toLocaleString('id-ID')}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      Rp {product.originalPrice.toLocaleString('id-ID')}
                    </span>
                    <Badge variant="destructive">
                      Save {discount}%
                    </Badge>
                  </>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                Promotion valid: October 1, 2025 - December 31, 2025
              </p>
              <p className="text-sm text-muted-foreground">
                While stocks last
              </p>
            </div>

            <div className="mb-6 p-4 bg-muted rounded-lg">
              <p className="text-sm">{product.details || product.description}</p>
            </div>

            <div className="flex gap-3">
              <Button 
                size="lg" 
                className="flex-1"
                onClick={() => toast.success("Added to cart!")}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => toast.success("Added to wishlist!")}
              >
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            <div className="mt-8 space-y-4">
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Product Information</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Category: {product.category}</li>
                  <li>• Article number: {product.id}</li>
                  {product.madeInIndonesia && <li>• Made in Indonesia</li>}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-card border-t py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 PURNITURE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;
