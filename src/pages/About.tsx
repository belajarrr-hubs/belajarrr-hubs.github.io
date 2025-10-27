import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">About PURNITURE Family</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground">
                  PURNITURE is a leading home furnishing retailer, offering well-designed, 
                  functional furniture at affordable prices. Our mission is to create 
                  a better everyday life for many people.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">PURNITURE Family Benefits</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Exclusive member-only prices and promotions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Special offers tailored to your needs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Early access to new products and collections</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Free workshops and inspiration events</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Extended return policy on selected items</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Sustainability</h2>
                <p className="text-muted-foreground">
                  We're committed to creating a positive impact on people and planet. 
                  From sustainable sourcing to renewable energy, we're working towards 
                  becoming climate positive and circular by 2030.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Customer Service:</strong> 0800-PURNITURE</p>
                  <p><strong>Email:</strong> customerservice@purniture.co.id</p>
                  <p><strong>Hours:</strong> Monday - Sunday, 9:00 - 21:00</p>
                </div>
              </CardContent>
            </Card>
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

export default About;
