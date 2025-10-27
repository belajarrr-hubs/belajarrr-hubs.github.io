import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to PURNITURE Family
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover exclusive offers and promotions for PURNITURE Family members. 
              Save more on quality furniture and home accessories.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/promo">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  View Promotions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline">
                  Browse All Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Deals</h2>
              <p className="text-muted-foreground">Exclusive prices for PURNITURE Family members</p>
            </div>
            <Link to="/promo">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Room</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Living Room", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80" },
              { name: "Bedroom", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80" },
              { name: "Kitchen", image: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=400&q=80" },
              { name: "Dining", image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&q=80" },
            ].map((room) => (
              <Link
                key={room.name}
                to="/rooms"
                className="relative aspect-square rounded-lg overflow-hidden group"
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-lg">{room.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/products" className="hover:text-primary">All Products</Link></li>
                <li><Link to="/promo" className="hover:text-primary">Promotions</Link></li>
                <li><Link to="/rooms" className="hover:text-primary">Room Ideas</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/stores" className="hover:text-primary">Store Locator</Link></li>
                <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Help</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary">Contact Us</Link></li>
                <li><Link to="/about" className="hover:text-primary">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">PURNITURE Family</h3>
              <p className="text-sm text-muted-foreground">
                Join PURNITURE Family for exclusive offers, inspiration, and much more.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 PURNITURE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
