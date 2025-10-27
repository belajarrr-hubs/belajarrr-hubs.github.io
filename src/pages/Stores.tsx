import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

const stores = [
  {
    name: "PURNITURE Alam Sutera",
    address: "Jl. Jalur Sutera Boulevard, Alam Sutera, Tangerang",
    phone: "+62 21 8062 0888",
    hours: "10:00 - 22:00 (Daily)",
  },
  {
    name: "PURNITURE Sentul City",
    address: "Jl. MH Thamrin, Sentul City, Bogor",
    phone: "+62 21 8796 0600",
    hours: "10:00 - 22:00 (Daily)",
  },
  {
    name: "PURNITURE Bali",
    address: "Jl. Sunset Road, Kuta, Badung, Bali",
    phone: "+62 361 473 7888",
    hours: "10:00 - 22:00 (Daily)",
  },
];

const Stores = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Store Locator</h1>
          <p className="text-muted-foreground mb-8">
            Find a PURNITURE store near you
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store) => (
              <Card key={store.name}>
                <CardHeader>
                  <CardTitle>{store.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{store.address}</p>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{store.phone}</p>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{store.hours}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-muted rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Visit Us Today</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience our full range of furniture and home accessories in person. 
              Our knowledgeable staff is ready to help you find the perfect solutions for your home.
            </p>
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

export default Stores;
