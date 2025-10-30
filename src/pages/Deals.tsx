import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import refrigeratorImg from "@/assets/products/refrigerator.jpg";
import drillImg from "@/assets/products/drill.jpg";
import interiorPaintImg from "@/assets/products/interior-paint.jpg";
import lumberImg from "@/assets/products/lumber.jpg";
import circularSawImg from "@/assets/products/circular-saw.jpg";
import washerImg from "@/assets/products/washer.jpg";

const Deals = () => {
  const deals = [
    { 
      name: "Refrigerator", 
      price: "$999", 
      originalPrice: "$1,299",
      discount: "23% OFF",
      rating: 4.5, 
      image: refrigeratorImg 
    },
    { 
      name: "Cordless Drill", 
      price: "$99", 
      originalPrice: "$149",
      discount: "34% OFF",
      rating: 4.8, 
      image: drillImg 
    },
    { 
      name: "Interior Paint - White", 
      price: "$24.99", 
      originalPrice: "$34.99",
      discount: "29% OFF",
      rating: 4.7, 
      image: interiorPaintImg 
    },
    { 
      name: "2x4 Lumber (8ft)", 
      price: "$5.99", 
      originalPrice: "$7.99",
      discount: "25% OFF",
      rating: 4.5, 
      image: lumberImg 
    },
    { 
      name: "Circular Saw", 
      price: "$129", 
      originalPrice: "$179",
      discount: "28% OFF",
      rating: 4.6, 
      image: circularSawImg 
    },
    { 
      name: "Washer", 
      price: "$599", 
      originalPrice: "$799",
      discount: "25% OFF",
      rating: 4.4, 
      image: washerImg 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-accent text-accent-foreground py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Special Deals & Offers</h1>
            <p className="text-xl">Save up to 34% on select items - Limited time only!</p>
          </div>
        </div>

        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {deals.map((product) => (
              <Card key={product.name} className="overflow-hidden hover:shadow-lg transition-shadow relative">
                <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">
                  {product.discount}
                </Badge>
                <CardContent className="p-0">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl font-bold text-accent">{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted-foreground">★ {product.rating}</span>
                    </div>
                    <Button className="w-full" size="sm">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-muted py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
            <p className="text-lg text-muted-foreground mb-6">
              New deals added every week. Check back regularly for the best savings.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Deals;
