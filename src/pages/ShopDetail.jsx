import { useParams, Link } from "react-router-dom";
import { Star, MapPin, Phone, Clock, User, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { barbershops } from "@/data/dummyData";

const ShopDetail = () => {
  const { id } = useParams();
  const shop = barbershops.find(s => s.id === parseInt(id));

  if (!shop) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Barbershop Not Found</h1>
            <Button asChild>
              <Link to="/shops">Back to Shops</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="h-80 lg:h-96 overflow-hidden">
          <img
            src={shop.image}
            alt={shop.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-secondary text-secondary-foreground font-semibold text-lg px-4 py-2">
                <Star className="w-4 h-4 mr-2 fill-current" />
                {shop.rating}
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              {shop.name}
            </h1>
            <div className="flex flex-col lg:flex-row gap-4 text-primary-foreground/90">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{shop.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>{shop.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">About {shop.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {shop.description}
                  </p>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-5 h-5 mr-2" />
                    <span className="font-medium">Hours: </span>
                    <span className="ml-2">{shop.openingHours}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Services */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {shop.services.map((service) => (
                      <div key={service.id} className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-accent transition-colors">
                        <div>
                          <h3 className="font-semibold text-foreground">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">Duration: {service.duration}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-2xl font-bold text-primary">${service.price}</span>
                          <Button asChild size="sm" className="bg-gradient-primary hover:opacity-90">
                            <Link to={`/booking/${shop.id}/${service.id}`}>
                              Book Now
                              <Calendar className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Barbers */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Expert Barbers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {shop.barbers.map((barber) => (
                      <div key={barber.id} className="flex items-center p-4 bg-muted rounded-lg">
                        <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mr-4">
                          <User className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{barber.name}</h3>
                          <p className="text-sm text-muted-foreground">{barber.experience} experience</p>
                          <p className="text-sm text-primary font-medium">{barber.specialty}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Book */}
              <Card className="shadow-elegant border-0 bg-gradient-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Booking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-primary-foreground/90">
                    Ready to book your appointment? Choose a service to get started.
                  </p>
                  <div className="space-y-3">
                    {shop.services.slice(0, 2).map((service) => (
                      <Button 
                        key={service.id}
                        asChild 
                        variant="secondary" 
                        className="w-full justify-between bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border-primary-foreground/20"
                      >
                        <Link to={`/booking/${shop.id}/${service.id}`}>
                          <span>{service.name}</span>
                          <span>${service.price}</span>
                        </Link>
                      </Button>
                    ))}
                    <Separator className="bg-primary-foreground/20" />
                    <Button asChild variant="secondary" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      <Link to="#services">
                        View All Services
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-primary" />
                    <span className="text-foreground">{shop.phone}</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-primary mt-0.5" />
                    <span className="text-foreground">{shop.address}</span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 mr-3 text-primary mt-0.5" />
                    <span className="text-foreground">{shop.openingHours}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Rating */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle>Customer Rating</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{shop.rating}</div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < Math.floor(shop.rating) ? 'text-secondary fill-current' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">Based on customer reviews</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShopDetail;