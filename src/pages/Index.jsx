import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Star, MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { barbershops } from "@/data/dummyData";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const featuredShops = barbershops.slice(0, 3);

  const filteredShops = featuredShops.filter(shop =>
    shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    shop.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Book Your Favorite
              <span className="block text-secondary">Barber Shop Anytime</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Discover premium barbershops, compare services, and schedule your perfect grooming experience with ease.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search by shop name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg bg-background/95 backdrop-blur border-0 rounded-2xl shadow-elegant"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 rounded-2xl">
                <Link to="/shops">
                  Find Barbershops
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 rounded-2xl">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Barbershops */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Barbershops
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular barbershops with excellent ratings and premium services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredShops.map((shop) => (
              <Card key={shop.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 shadow-card">
                <div className="relative">
                  <img
                    src={shop.image}
                    alt={shop.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-secondary text-secondary-foreground font-semibold">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {shop.rating}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{shop.name}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{shop.address}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">{shop.phone}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                    {shop.description}
                  </p>
                  <Button asChild className="w-full bg-gradient-primary hover:opacity-90">
                    <Link to={`/shops/${shop.id}`}>
                      View Shop Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {searchQuery && filteredShops.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No barbershops found matching "{searchQuery}"
              </p>
            </div>
          )}

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/shops">View All Barbershops</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose BarberBook?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make booking your grooming appointments simple, convenient, and reliable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Search className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Easy Discovery</h3>
              <p className="text-muted-foreground">
                Find the perfect barbershop near you with our advanced search and filtering options.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Star className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Verified Reviews</h3>
              <p className="text-muted-foreground">
                Read authentic reviews from real customers to make informed decisions about your grooming experience.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-variant p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Instant Booking</h3>
              <p className="text-muted-foreground">
                Book your appointments instantly with real-time availability and instant confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;