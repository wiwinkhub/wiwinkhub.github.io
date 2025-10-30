import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import refrigeratorImg from "@/assets/products/refrigerator.jpg";
import dishwasherImg from "@/assets/products/dishwasher.jpg";
import microwaveImg from "@/assets/products/microwave.jpg";
import rangeImg from "@/assets/products/range.jpg";
import washerImg from "@/assets/products/washer.jpg";
import dryerImg from "@/assets/products/dryer.jpg";

const Appliances = () => {
  const products = [
    { name: "Refrigerator", price: "$1,299", rating: 4.5, image: refrigeratorImg },
    { name: "Dishwasher", price: "$699", rating: 4.3, image: dishwasherImg },
    { name: "Microwave Oven", price: "$299", rating: 4.7, image: microwaveImg },
    { name: "Range Oven", price: "$899", rating: 4.6, image: rangeImg },
    { name: "Washer", price: "$799", rating: 4.4, image: washerImg },
    { name: "Dryer", price: "$749", rating: 4.5, image: dryerImg },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Appliances</h1>
            <p className="text-xl">Modern appliances for your kitchen and home</p>
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

export default Appliances;
