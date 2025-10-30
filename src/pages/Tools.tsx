import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import drillImg from "@/assets/products/drill.jpg";
import circularSawImg from "@/assets/products/circular-saw.jpg";
import impactDriverImg from "@/assets/products/impact-driver.jpg";
import toolSetImg from "@/assets/products/tool-set.jpg";
import hammerDrillImg from "@/assets/products/hammer-drill.jpg";
import angleGrinderImg from "@/assets/products/angle-grinder.jpg";

const Tools = () => {
  const products = [
    { name: "Cordless Drill", price: "$149", rating: 4.8, image: drillImg },
    { name: "Circular Saw", price: "$179", rating: 4.6, image: circularSawImg },
    { name: "Impact Driver", price: "$129", rating: 4.7, image: impactDriverImg },
    { name: "Tool Set", price: "$249", rating: 4.9, image: toolSetImg },
    { name: "Hammer Drill", price: "$199", rating: 4.5, image: hammerDrillImg },
    { name: "Angle Grinder", price: "$89", rating: 4.4, image: angleGrinderImg },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Tools & Hardware</h1>
            <p className="text-xl">Professional-grade tools for every job</p>
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

export default Tools;
