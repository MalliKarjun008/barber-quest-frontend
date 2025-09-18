import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, Clock, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { barbershops } from "@/data/dummyData";
import barbershop1 from "@/assets/barbershop-1.jpg";
import barbershop2 from "@/assets/barbershop-2.jpg";
import barbershop3 from "@/assets/barbershop-3.jpg";

const shopImages = {
  "barbershop-1": barbershop1,
  "barbershop-2": barbershop2,
  "barbershop-3": barbershop3,
};

const Shops = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const filteredShops = barbershops.filter((shop) => {
    const matchesSearch = 
      shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRating = selectedRating ? shop.rating >= selectedRating : true;
    
    return matchesSearch && matchesRating;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-hero py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Find Your Perfect
              <span className="block text-barbershop-gold">Barbershop</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Browse through our curated selection of premium barbershops
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search by name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 text-lg bg-background/95 backdrop-blur-sm border-0 shadow-barbershop"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className={`bg-background/95 backdrop-blur-sm border-0 ${
                    selectedRating === null 
                      ? 'bg-barbershop-gold text-barbershop-navy' 
                      : 'text-barbershop-navy hover:bg-barbershop-gold hover:text-barbershop-navy'
                  }`}
                  onClick={() => setSelectedRating(null)}
                >
                  All Ratings
                </Button>
                {[4.5, 4.7, 4.8].map((rating) => (
                  <Button
                    key={rating}
                    variant="outline"
                    className={`bg-background/95 backdrop-blur-sm border-0 ${
                      selectedRating === rating 
                        ? 'bg-barbershop-gold text-barbershop-navy' 
                        : 'text-barbershop-navy hover:bg-barbershop-gold hover:text-barbershop-navy'
                    }`}
                    onClick={() => setSelectedRating(rating)}
                  >
                    {rating}+ ⭐
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shops Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-barbershop-navy">
              {filteredShops.length} Barbershops Available
            </h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
              Sorted by Rating
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredShops.map((shop, index) => (
              <Card 
                key={shop.id} 
                className="group cursor-pointer transition-all duration-300 hover:shadow-barbershop hover:-translate-y-1 bg-gradient-card border-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={shopImages[shop.image as keyof typeof shopImages]}
                      alt={shop.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center space-x-1 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <Star className="h-3 w-3 fill-barbershop-gold text-barbershop-gold" />
                        <span className="text-xs font-medium">{shop.rating}</span>
                      </div>
                    </div>
                    {shop.rating >= 4.8 && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-barbershop-gold text-barbershop-navy">
                          Top Rated
                        </Badge>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-barbershop-navy group-hover:text-barbershop-gold transition-colors mb-2">
                    {shop.name}
                  </h3>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    {shop.address.split(',')[0]}
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Clock className="h-3 w-3 mr-1" />
                    Open Today
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-muted-foreground">
                      {shop.totalReviews} reviews
                    </span>
                    <span className="text-xs text-barbershop-gold font-medium">
                      {shop.services.length} services
                    </span>
                  </div>
                  
                  <Link to={`/shops/${shop.id}`}>
                    <Button className="w-full bg-gradient-accent hover:shadow-gold transition-all duration-300">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredShops.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-barbershop-navy mb-4">
                No barbershops found
              </h3>
              <p className="text-muted-foreground mb-8">
                Try adjusting your search criteria or browse all available shops.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedRating(null);
                }}
                className="bg-gradient-accent hover:shadow-gold transition-all duration-300"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shops;