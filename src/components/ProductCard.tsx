import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  madeInIndonesia?: boolean;
}

const ProductCard = ({
  id,
  name,
  description,
  image,
  price,
  originalPrice,
  badge,
  madeInIndonesia,
}: ProductCardProps) => {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <Link to={`/product/${id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {badge && (
            <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground font-semibold">
              {badge}
            </Badge>
          )}
          {madeInIndonesia && (
            <Badge className="absolute top-2 right-2 bg-card text-card-foreground border">
              Made in Indonesia
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-sm mb-1 uppercase">{name}</h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">
              Rp {price.toLocaleString('id-ID')}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                Rp {originalPrice.toLocaleString('id-ID')}
              </span>
            )}
            {discount > 0 && (
              <Badge variant="destructive" className="ml-auto">
                -{discount}%
              </Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Valid: Oct 1, 2025 - Dec 31, 2025
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
