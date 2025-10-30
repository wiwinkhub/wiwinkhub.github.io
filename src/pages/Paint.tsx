import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import interiorPaintImg from "@/assets/products/interior-paint.jpg";
import exteriorPaintImg from "@/assets/products/exterior-paint.jpg";
import brushSetImg from "@/assets/products/brush-set.jpg";
import rollerKitImg from "@/assets/products/roller-kit.jpg";
import primerImg from "@/assets/products/primer.jpg";
import paintSprayerImg from "@/assets/products/paint-sprayer.jpg";

const Paint = () => {
  const products = [
    { name: "Interior Paint - White", price: "$34.99", rating: 4.7, image: interiorPaintImg },
    { name: "Exterior Paint - Gray", price: "$39.99", rating: 4.6, image: exteriorPaintImg },
    { name: "Paint Brush Set", price: "$24.99", rating: 4.8, image: brushSetImg },
    { name: "Paint Roller Kit", price: "$19.99", rating: 4.5, image: rollerKitImg },
    { name: "Primer - White", price: "$29.99", rating: 4.6, image: primerImg },
    { name: "Paint Sprayer", price: "$149.99", rating: 4.4, image: paintSprayerImg },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Paint & Supplies</h1>
            <p className="text-xl">Quality paints and supplies for beautiful finishes</p>
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

export default Paint;
