import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

const StoreLocator = () => {
  const stores = [
    {
      name: "Downtown Store",
      address: "123 Main Street, City, ST 12345",
      phone: "(555) 123-4567",
      hours: "Mon-Sat: 6am-10pm, Sun: 8am-8pm"
    },
    {
      name: "North Side Location",
      address: "456 Oak Avenue, City, ST 12346",
      phone: "(555) 234-5678",
      hours: "Mon-Sat: 6am-10pm, Sun: 8am-8pm"
    },
    {
      name: "Westside Branch",
      address: "789 Elm Road, City, ST 12347",
      phone: "(555) 345-6789",
      hours: "Mon-Sat: 6am-10pm, Sun: 8am-8pm"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Store Locator</h1>
            <p className="text-xl">Find a HomeStore location near you</p>
          </div>
        </div>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-2">
              <Input 
                placeholder="Enter your ZIP code or city" 
                className="flex-1"
              />
              <Button>Search</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store) => (
              <Card key={store.name}>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{store.name}</h3>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <p className="text-muted-foreground">{store.address}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <p className="text-muted-foreground">{store.phone}</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <p className="text-muted-foreground">{store.hours}</p>
                  </div>

                  <Button className="w-full mt-4">Get Directions</Button>
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

export default StoreLocator;
