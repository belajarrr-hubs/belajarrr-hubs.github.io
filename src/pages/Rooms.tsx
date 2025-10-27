import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const rooms = [
  {
    name: "Living Room",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
    description: "Create a cozy and stylish living space",
  },
  {
    name: "Bedroom",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    description: "Design your perfect sleep sanctuary",
  },
  {
    name: "Kitchen",
    image: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80",
    description: "Organize and beautify your cooking space",
  },
  {
    name: "Dining Room",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80",
    description: "Gather family and friends around the table",
  },
  {
    name: "Home Office",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    description: "Create a productive workspace at home",
  },
  {
    name: "Children's Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    description: "Fun and functional spaces for kids",
  },
];

const Rooms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Room Ideas</h1>
          <p className="text-muted-foreground mb-8">
            Get inspired and find products for every room in your home
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <Link
                key={room.name}
                to="/products"
                className="group relative aspect-[4/3] rounded-lg overflow-hidden"
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-2xl mb-2">{room.name}</h3>
                  <p className="text-white/90 text-sm">{room.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-card border-t py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 PURNITURE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Rooms;
