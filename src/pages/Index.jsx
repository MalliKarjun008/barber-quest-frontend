import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Star, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { barbershops } from "@/data/dummyData";
import heroImage from "@/assets/hero-barbershop.jpg";
import barbershop1 from "@/assets/barbershop-1.jpg";
import barbershop2 from "@/assets/barbershop-2.jpg";
import barbershop3 from "@/assets/barbershop-3.jpg";

const shopImages = {
  "barbershop-1": barbershop1,
  "barbershop-2": barbershop2,
  "barbershop-3": barbershop3,
};

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const featuredShops = barbershops.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-hero overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-barbershop-navy/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Book Your Favorite
              <span className="block text-barbershop-gold">Barber Shop Anytime</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-slide-up">
              Discover premium barbershops in your area and book appointments with the best barbers in town.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8 animate-slide-up">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search barbershops by name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg bg-background/95 backdrop-blur-sm border-0 shadow-barbershop"
                />
                <Button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-accent hover:shadow-gold transition-all duration-300"
                >
                  Search
                </Button>
              </div>
            </div>
            
            <Link to="/shops">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-barbershop-gold text-barbershop-gold hover:bg-barbershop-gold hover:text-barbershop-navy transition-all duration-300"
              >
                Explore All Shops
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Barbershops */}
      <section className="py-16 bg-barbershop-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-barbershop-navy mb-4">
              Featured Barbershops
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked premium barbershops offering exceptional service and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredShops.map((shop, index) => (
              <Card 
                key={shop.id} 
                className="group cursor-pointer transition-all duration-300 hover:shadow-barbershop hover:-translate-y-1 bg-gradient-card border-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={shopImages[shop.image as keyof typeof shopImages]}
                      alt={shop.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-barbershop-gold text-barbershop-navy">
                        Featured
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-barbershop-navy group-hover:text-barbershop-gold transition-colors">
                      {shop.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-barbershop-gold text-barbershop-gold" />
                      <span className="text-sm font-medium">{shop.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {shop.address}
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    Open Today
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {shop.totalReviews} reviews • {shop.services.length} services available
                  </p>
                  
                  <Link to={`/shops/${shop.id}`}>
                    <Button className="w-full bg-gradient-accent hover:shadow-gold transition-all duration-300">
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/shops">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-barbershop-navy text-barbershop-navy hover:bg-barbershop-navy hover:text-primary-foreground"
              >
                View All Barbershops
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
