import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      {/* Top bar */}
      <div className="bg-muted text-muted-foreground text-xs py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span>EN | ID</span>
          </div>
          <div className="flex gap-4">
            <Link to="/stores" className="hover:text-foreground">Store Locator</Link>
            <Link to="/about" className="hover:text-foreground">About</Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded font-bold text-xl">
              PURNITURE
            </div>
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-10"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation links */}
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-4 mt-4 md:mt-6 text-sm font-medium`}>
          <Link to="/products" className="hover:text-primary transition-colors">
            Products
          </Link>
          <Link to="/rooms" className="hover:text-primary transition-colors">
            Rooms
          </Link>
          <Link to="/promo" className="hover:text-primary transition-colors flex items-center gap-1">
            Promo ✨
          </Link>
          <Link to="/about" className="hover:text-primary transition-colors">
            About Us
          </Link>
          <Link to="/stores" className="hover:text-primary transition-colors">
            Store Locator
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
