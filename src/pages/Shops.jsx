import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Star, MapPin, Phone, Filter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { barbershops } from "@/data/dummyData";

const Shops = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [filterRating, setFilterRating] = useState("all");

  const filteredAndSortedShops = barbershops
    .filter(shop => {
      const matchesSearch = shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           shop.address.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRating = filterRating === "all" || shop.rating >= parseFloat(filterRating);
      return matchesSearch && matchesRating;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "name":
          return a.name.localeCompare(b.name);
        case "price":
          return a.services[0].price - b.services[0].price;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect Barbershop
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Browse through our curated selection of premium barbershops and book your next appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search barbershops or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-3"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price">Price Low-High</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterRating} onValueChange={setFilterRating}>
                <SelectTrigger className="w-40">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="4.5">4.5+ Stars</SelectItem>
                  <SelectItem value="4.0">4.0+ Stars</SelectItem>
                  <SelectItem value="3.5">3.5+ Stars</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              {filteredAndSortedShops.length} Barbershop{filteredAndSortedShops.length !== 1 ? 's' : ''} Found
            </h2>
            <p className="text-muted-foreground">
              Discover the best barbershops in your area
            </p>
          </div>

          {filteredAndSortedShops.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedShops.map((shop) => (
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
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {shop.description}
                    </p>
                    
                    {/* Services Preview */}
                    <div className="mb-6">
                      <p className="text-sm font-medium text-foreground mb-2">Popular Services:</p>
                      <div className="flex flex-wrap gap-2">
                        {shop.services.slice(0, 2).map((service) => (
                          <Badge key={service.id} variant="outline" className="text-xs">
                            {service.name} - ${service.price}
                          </Badge>
                        ))}
                        {shop.services.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{shop.services.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>

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
          ) : (
            <div className="text-center py-16">
              <div className="mb-6">
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No barbershops found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria or filters to find more results.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setFilterRating("all");
                }}
                variant="outline"
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