import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";

const Promo = () => {
  const [priceFilter, setPriceFilter] = useState<string>("all");
  
  const promoProducts = products.filter(p => p.badge === "Member Price");
  
  const filteredProducts = promoProducts.filter(product => {
    if (priceFilter === "all") return true;
    if (priceFilter === "under-20k") return product.price < 20000;
    if (priceFilter === "20k-30k") return product.price >= 20000 && product.price < 30000;
    if (priceFilter === "30k-50k") return product.price >= 30000 && product.price < 50000;
    if (priceFilter === "above-50k") return product.price >= 50000;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">PURNITURE Family Promotions</h1>
          <p className="text-lg opacity-90">Family First - Exclusive offers for members</p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b bg-card sticky top-[140px] z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={priceFilter === "all" ? "default" : "outline"}
              onClick={() => setPriceFilter("all")}
            >
              All Products
            </Button>
            <Button
              variant={priceFilter === "under-20k" ? "default" : "outline"}
              onClick={() => setPriceFilter("under-20k")}
            >
              Under 20k
            </Button>
            <Button
              variant={priceFilter === "20k-30k" ? "default" : "outline"}
              onClick={() => setPriceFilter("20k-30k")}
            >
              20k - 30k
            </Button>
            <Button
              variant={priceFilter === "30k-50k" ? "default" : "outline"}
              onClick={() => setPriceFilter("30k-50k")}
            >
              30k - 50k
            </Button>
            <Button
              variant={priceFilter === "above-50k" ? "default" : "outline"}
              onClick={() => setPriceFilter("above-50k")}
            >
              Above 50k
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground mb-6">
            Showing {filteredProducts.length} promotional products
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found in this price range.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 PURNITURE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Promo;
