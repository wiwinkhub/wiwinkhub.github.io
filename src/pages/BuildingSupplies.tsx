import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import lumberImg from "@/assets/products/lumber.jpg";
import plywoodImg from "@/assets/products/plywood.jpg";
import concreteImg from "@/assets/products/concrete.jpg";
import drywallImg from "@/assets/products/drywall.jpg";
import insulationImg from "@/assets/products/insulation.jpg";
import shinglesImg from "@/assets/products/shingles.jpg";

const BuildingSupplies = () => {
  const products = [
    { name: "2x4 Lumber (8ft)", price: "$7.99", rating: 4.5, image: lumberImg },
    { name: "Plywood Sheet", price: "$49.99", rating: 4.6, image: plywoodImg },
    { name: "Concrete Mix", price: "$12.99", rating: 4.7, image: concreteImg },
    { name: "Drywall Sheet", price: "$14.99", rating: 4.4, image: drywallImg },
    { name: "Insulation Roll", price: "$39.99", rating: 4.6, image: insulationImg },
    { name: "Roofing Shingles", price: "$89.99", rating: 4.5, image: shinglesImg },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Building Supplies</h1>
            <p className="text-xl">Essential materials for construction projects</p>
          </div>
        </div>

        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xl font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-muted-foreground">★ {product.rating}</span>
                    </div>
                    <Button className="w-full" size="sm">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BuildingSupplies;
