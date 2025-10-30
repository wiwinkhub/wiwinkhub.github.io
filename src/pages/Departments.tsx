import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import appliancesImg from "@/assets/appliances.jpg";
import toolsImg from "@/assets/tools.jpg";
import paintImg from "@/assets/paint.jpg";
import buildingImg from "@/assets/building-supplies.jpg";

const Departments = () => {
  const departments = [
    { 
      name: "Appliances", 
      image: appliancesImg, 
      link: "/appliances",
      description: "Kitchen & home appliances for modern living"
    },
    { 
      name: "Tools & Hardware", 
      image: toolsImg, 
      link: "/tools",
      description: "Power tools, hand tools, and hardware essentials"
    },
    { 
      name: "Paint & Supplies", 
      image: paintImg, 
      link: "/paint",
      description: "Premium paints, brushes, and painting accessories"
    },
    { 
      name: "Building Supplies", 
      image: buildingImg, 
      link: "/building-supplies",
      description: "Lumber, concrete, and construction materials"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">All Departments</h1>
            <p className="text-xl">Browse our complete selection of home improvement products</p>
          </div>
        </div>

        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept) => (
              <Link key={dept.name} to={dept.link}>
                <Card className="overflow-hidden hover:shadow-xl transition-all cursor-pointer h-full">
                  <CardContent className="p-0">
                    <img 
                      src={dept.image} 
                      alt={dept.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{dept.name}</h3>
                      <p className="text-muted-foreground">{dept.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Departments;
