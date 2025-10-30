import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-home.jpg";
import appliancesImg from "@/assets/appliances.jpg";
import toolsImg from "@/assets/tools.jpg";
import paintImg from "@/assets/paint.jpg";
import buildingImg from "@/assets/building-supplies.jpg";

const Home = () => {
  const categories = [
    { name: "Appliances", image: appliancesImg, link: "/appliances" },
    { name: "Tools", image: toolsImg, link: "/tools" },
    { name: "Paint", image: paintImg, link: "/paint" },
    { name: "Building Supplies", image: buildingImg, link: "/building-supplies" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <img 
            src={heroImage} 
            alt="Home improvement hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl font-bold mb-4">
                  Transform Your Home Today
                </h1>
                <p className="text-xl mb-6">
                  Everything you need for your next project, all in one place
                </p>
                <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                  <Link to="/departments">Shop Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Shop by Department</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} to={category.link}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Promo Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Special Offers This Week</h2>
            <p className="text-xl mb-6">Save up to 30% on select items</p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/deals">View All Deals</Link>
            </Button>
          </div>
        </section>

        {/* Why Shop With Us */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Shop With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">Get your items delivered quickly to your doorstep</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
                <p className="text-muted-foreground">Our team is here to help with your projects</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
                <p className="text-muted-foreground">All products backed by our quality promise</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
